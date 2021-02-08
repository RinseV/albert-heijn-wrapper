import axios, { AxiosInstance } from 'axios';

const endpoint = 'https://ms.ah.nl/mobile-services/';

export class AH {
    private readonly client: AxiosInstance;

    constructor(
        private readonly username?: string,
        private readonly password?: string,
        private readonly verbose?: boolean
    ) {
        // Create https agent for TLSv1.2 or less (API doesn't respond to TLSv1.3+)
        this.client = axios.create();
    }

    async post(
        path: string,
        body: any,
        extraHeaders?: Headers,
        query?: Query,
        authRequired?: boolean
    ) {
        return this.request(
            path,
            requestMethod.POST,
            body,
            extraHeaders,
            query,
            authRequired
        );
    }

    async get(
        path: string,
        extraHeaders?: Headers,
        query?: Query,
        authRequired?: boolean
    ) {
        return this.request(
            path,
            requestMethod.GET,
            undefined,
            extraHeaders,
            query,
            authRequired
        );
    }

    async request(
        path: string,
        method: requestMethod,
        body?: any,
        extraHeaders?: Headers,
        query?: Query,
        authRequired?: boolean
    ) {
        if (authRequired) {
            // skip for now
        }

        let requestHeader: Headers = this.createHeader(
            authRequired,
            extraHeaders
        );

        let url: string = this.createURL(path, query);

        if (this.verbose) {
            console.log(url);
            console.log(method);
            console.log(requestMethod);
            void (body && console.log(body));
        }

        let response = await this.client.request({
            method: method,
            url: url,
            headers: requestMethod,
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
    createHeader(authRequired?: boolean, extraHeaders?: Headers): Headers {
        // Create header
        let headers: Headers = {
            'Content-Type': 'application/json',
            'User-Agent': 'jumbo-wrapper',
            ...extraHeaders,
        };
        // TODO: auth
        // if (authRequired && this.tokenHandler) {
        //     headers['x-jumbo-token'] = this.tokenHandler.getToken();
        // } else if (authRequired && !this.tokenHandler) {
        //     throw new Error('You must be logged in to use this function');
        // }

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
