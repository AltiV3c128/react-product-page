import { ServerResponseCode } from "./server-response-code";
import { BasePayload } from "./base-payload";
import { AxiosResponse } from "axios";

export class ServerResponse<T extends BasePayload>{

    public status : ServerResponseCode;
    public statusText : string;
    public data? : any;


    constructor(response : AxiosResponse<T>){
        this.status = response.status;
        this.statusText = response.statusText;
        this.data = response.data;
    }

    public hasPayload() : boolean {
        return this.data != null;
    }

    public isOK() : boolean {
        return this.status == ServerResponseCode.OK;
    }

}