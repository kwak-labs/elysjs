import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAllAnteHandlerParamRequest, QueryAllAnteHandlerParamResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.anteHandlerParamAll = this.anteHandlerParamAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `elys-network/elys/parameter/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* AnteHandlerParamAll */
  async anteHandlerParamAll(params: QueryAllAnteHandlerParamRequest = {
    pagination: undefined
  }): Promise<QueryAllAnteHandlerParamResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/parameter/ante_handler_param`;
    return await this.req.get<QueryAllAnteHandlerParamResponseSDKType>(endpoint, options);
  }
}