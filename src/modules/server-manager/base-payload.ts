import { AxiosRequestConfig, AxiosResponse } from 'axios';
export class BasePayload implements AxiosResponse {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: AxiosRequestConfig;
    request?: any;

    constructor (data: any, status: number, statusText: string, headers: any, config: AxiosRequestConfig, request?: any) {
        this.data = data;
        this.status = status;
        this.statusText = statusText;
        this.headers = headers;
        this.config = config;
        this.request = request;
    }
}