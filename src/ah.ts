import { AHAuth } from "./auth/auth";
import { GraphQLResponseError } from "./error";
import { AHProduct } from "./product/product";
import { AHRecipe } from "./recipe/recipe";
import { AHStore } from "./store/store";
import type {
  EndpointOptions,
  GraphQLOptions,
  GraphQLQueryResponse,
  GraphQLQueryResponseData,
} from "./types";

export const BASE_URL = "https://api.ah.nl";

const NON_VARIABLE_OPTIONS = ["headers", "query", "method", "body"];

const FORBIDDEN_VARIABLE_OPTIONS = [
  "query",
  "method",
  "url",
  "baseUrl",
  "request",
  "mediaType",
  "body",
];

export class AH {
  public readonly product: AHProduct;
  public readonly recipe: AHRecipe;
  public readonly store: AHStore;
  private readonly auth: AHAuth;

  constructor() {
    this.auth = new AHAuth(this);
    this.product = new AHProduct(this);
    this.recipe = new AHRecipe(this);
    this.store = new AHStore(this);
  }

  async fetch<ResponseData = Record<string, unknown>>(
    url: string,
    options?: EndpointOptions,
  ) {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${url} - ${response.statusText}`);
    }

    return (await response.json()) as Promise<ResponseData>;
  }

  async graphql<ResponseData = GraphQLQueryResponseData>(
    query: string,
    options?: EndpointOptions,
  ) {
    if (options) {
      if ("query" in options) {
        return Promise.reject(
          new Error("Cannot provide both query and options.query"),
        );
      }

      for (const key in options) {
        if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key)) continue;

        return Promise.reject(new Error(`Cannot provide "${key}" in options`));
      }
    }

    const parsedOptions = Object.assign({ query }, options);
    const requestOptions = Object.keys(parsedOptions).reduce<GraphQLOptions>(
      (result, key) => {
        if (NON_VARIABLE_OPTIONS.includes(key)) {
          result[key] = parsedOptions[key];
          return result;
        }

        if (!result.variables) {
          result.variables = {};
        }

        result.variables[key] = parsedOptions[key];
        return result;
      },
      {} as GraphQLOptions,
    );

    const token = await this.auth.getToken();
    const response = await fetch(`${BASE_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.access_token}`,
        ...requestOptions.headers,
      },
      body: JSON.stringify({
        query: requestOptions.query,
        variables: requestOptions.variables,
      }),
    });

    const { data, error, error_description, errors } =
      (await response.json()) as GraphQLQueryResponse<ResponseData>;

    if (errors) {
      throw new GraphQLResponseError({ data, error, error_description });
    }

    return data;
  }
}
