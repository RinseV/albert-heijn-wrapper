export type GraphQLQueryResponseData = Record<string, any>;

export type GraphQLQueryResponse<ResponseData> = {
  data: ResponseData;
  error?: string;
  error_description?: string;
  errors?: [
    {
      message: string;
      locations: [
        {
          line: number;
          column: number;
        },
      ];
    },
  ];
};

export type EndpointOptions = {
  query?: string;
  headers?: Record<string, string>;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: string;
  [parameter: string]: unknown;
};

export type GraphQLOptions = EndpointOptions & {
  variables?: Record<string, unknown>;
};
