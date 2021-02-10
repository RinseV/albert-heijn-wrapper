import axios, { AxiosInstance } from 'axios';
import { TokenHandler } from './auth/tokenHandler';
import { Product } from './product/product';
import { Store } from './store/store';

const endpoint = 'https://ms.ah.nl/';

export class AH {
    private readonly client: AxiosInstance;
    private readonly tokenHandler: TokenHandler;

    private readonly AHProduct: Product;
    private readonly AHStore: Store;

    constructor(private readonly verbose?: boolean) {
        // Create https agent for TLSv1.2 or less (API doesn't respond to TLSv1.3+)
        this.client = axios.create();
        this.tokenHandler = new TokenHandler(this);

        this.AHProduct = new Product(this);
        this.AHStore = new Store(this);
    }

    product() {
        return this.AHProduct;
    }

    store() {
        return this.AHStore;
    }

    async post(
        path: string,
        body: any,
        extraHeaders?: Headers,
        query?: Query,
        noAuth?: boolean
    ) {
        return this.request(
            path,
            requestMethod.POST,
            body,
            extraHeaders,
            query,
            noAuth
        );
    }

    async get(
        path: string,
        extraHeaders?: Headers,
        query?: Query,
        noAuth?: boolean
    ) {
        return this.request(
            path,
            requestMethod.GET,
            undefined,
            extraHeaders,
            query,
            noAuth
        );
    }

    async request(
        path: string,
        method: requestMethod,
        body?: any,
        extraHeaders?: Headers,
        query?: Query,
        noAuth?: boolean
    ) {
        let token;
        if (!noAuth) {
            // Make sure tokenHandler is ready (has a token)
            await this.tokenHandler.Ready;
            token = await this.tokenHandler.getToken();
        }

        // Since a token is needed for every request, just always add it
        let requestHeader: Headers = this.createHeader(
            token?.access_token,
            extraHeaders
        );

        let url = this.createURL(path, query);

        if (this.verbose) {
            console.log(url);
            console.log(method);
            console.log(requestHeader);
            void (body && console.log(body));
        }

        let response = await this.client.request({
            method: method,
            url: url,
            headers: requestHeader,
            data: body,
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
    createHeader(token?: string, extraHeaders?: Headers): Headers {
        // Create header
        let headers: Headers = {
            'Content-Type': 'application/json',
            'User-Agent': 'ah-wrapper',
            ...extraHeaders,
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
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
    PUT = 'PUT',
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
