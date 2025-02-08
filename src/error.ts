import type { GraphQLQueryResponse } from "./types";

export class GraphQLResponseError<ResponseData> extends Error {
  override name = "GraphQLResponseError";

  readonly error?: string;
  readonly error_description?: string;
  readonly errors?: GraphQLQueryResponse<never>["errors"];
  readonly data: ResponseData;

  constructor(readonly response: GraphQLQueryResponse<ResponseData>) {
    super(
      response.error ||
        `Request failed due to following errors: ${response.errors?.map((e) => `${e.message}`).join("\n")}`,
    );

    this.error = response.error;
    this.error_description = response.error_description;
    this.errors = response.errors;
    this.data = response.data;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
