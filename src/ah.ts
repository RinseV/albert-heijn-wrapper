import axios, { AxiosInstance } from 'axios';
import { TokenHandler } from './auth/tokenHandler';
import { Bonus } from './bonus/bonus';
import { Category } from './category/category';
import { Product } from './product/product';
import { Recipe } from './recipe/recipe';
import { Store } from './store/store';

const endpoint = 'https://api.ah.nl/';

export interface AHClientOptions {
    verbose?: boolean;
}

export class AH {
    private readonly client: AxiosInstance;
    public readonly tokenHandler: TokenHandler;

    private verbose: boolean;

    private readonly AHBonus: Bonus;
    private readonly AHCategory: Category;
    private readonly AHProduct: Product;
    private readonly AHRecipe: Recipe;
    private readonly AHStore: Store;

    constructor(options?: AHClientOptions) {
        this.verbose = options?.verbose ?? false;
        this.client = axios.create();
        this.tokenHandler = new TokenHandler(this);

        this.AHBonus = new Bonus(this);
        this.AHCategory = new Category(this);
        this.AHProduct = new Product(this);
        this.AHRecipe = new Recipe(this);
        this.AHStore = new Store(this);
    }

    bonus() {
        return this.AHBonus;
    }

    category() {
        return this.AHCategory;
    }

    product() {
        return this.AHProduct;
    }

    recipe() {
        return this.AHRecipe;
    }

    store() {
        return this.AHStore;
    }

    async post(
        path: string,
        body: Record<string, unknown>,
        additionalRequestOptions?: AdditionalRequestOptions,
        noAuth?: boolean
    ) {
        return this.request(path, requestMethod.POST, body, additionalRequestOptions, noAuth);
    }

    async get(path: string, additionalRequestOptions?: AdditionalRequestOptions, noAuth?: boolean) {
        return this.request(path, requestMethod.GET, undefined, additionalRequestOptions, noAuth);
    }

    async request(
        path: string,
        method: requestMethod,
        body?: Record<string, unknown>,
        additionalRequestOptions?: AdditionalRequestOptions,
        noAuth?: boolean
    ) {
        if (!noAuth) {
            // Make sure tokenHandler is ready (has a token)
            await this.tokenHandler.Ready;
        }

        // Since a token is needed for every request, just always add it
        const requestHeader: Headers = await this.createHeader(!noAuth, additionalRequestOptions?.headers);

        const url = this.createURL(path, additionalRequestOptions?.query);

        if (this.verbose) {
            console.log(url);
            console.log(method);
            console.log(requestHeader);
            void (body && console.log(body));
        }

        const response = await this.client.request({
            method: method,
            url: url,
            headers: requestHeader,
            data: body
        });

        if (!response.statusText) {
            const text = response.data;
            throw new Error(`${response.statusText}: ${text}`);
        }

        return response.data;
    }

    /**
     * Helper function to create headers for request
     * @param extraHeaders Any extra header options
     */
    async createHeader(authRequired?: boolean, extraHeaders?: Headers): Promise<Headers> {
        // Create header
        const headers: Headers = {
            'Content-Type': 'application/json',
            'User-Agent': 'ah-wrapper',
            'client-name': 'appie-android',
            'client-version': '8.12',
            ...extraHeaders
        };

        if (authRequired && this.tokenHandler) {
            const token = await this.tokenHandler.getToken();
            headers['Authorization'] = `Bearer ${token.access_token}`;
        }

        // Return the headers
        return headers;
    }

    /**
     * Helper function to create request URL
     * @param path Path to endpoint (without ENDPOINT in .env)
     * @param query Any query options
     */
    createURL(path: string, query?: Query): string {
        let url: string;
        // Add query if given
        if (query) {
            const params = new URLSearchParams(query);
            url = endpoint + path + '?' + params;
        } else {
            url = endpoint + path;
        }

        // Return URL
        return url;
    }
}

/**
 * Simple enum for different request methods
 */
export enum requestMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT'
}

/**
 * Query interface that is converted to {@URLSearchParams}
 */
export interface Query {
    [key: string]: string;
}

export interface Headers {
    [key: string]: string;
}

/**
 * Interface that combines additional headers and query options
 */
export interface AdditionalRequestOptions {
    headers?: Headers;
    query?: Query;
}
