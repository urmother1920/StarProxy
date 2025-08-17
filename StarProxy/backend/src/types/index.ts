export interface ProxyRequest {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    body?: any;
}

export interface ProxyResponse {
    status: number;
    headers: Record<string, string>;
    data: any;
}