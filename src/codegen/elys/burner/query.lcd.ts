import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetHistoryRequest, QueryGetHistoryResponseSDKType, QueryAllHistoryRequest, QueryAllHistoryResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.history = this.history.bind(this);
    this.historyAll = this.historyAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `elys-network/elys/burner/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of History items. */
  async history(params: QueryGetHistoryRequest): Promise<QueryGetHistoryResponseSDKType> {
    const endpoint = `elys-network/elys/burner/history/${params.timestamp}/${params.denom}`;
    return await this.req.get<QueryGetHistoryResponseSDKType>(endpoint);
  }
  /* HistoryAll */
  async historyAll(params: QueryAllHistoryRequest = {
    pagination: undefined
  }): Promise<QueryAllHistoryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/burner/history`;
    return await this.req.get<QueryAllHistoryResponseSDKType>(endpoint, options);
  }
}