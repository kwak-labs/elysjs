import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetAccountedPoolRequest, QueryGetAccountedPoolResponseSDKType, QueryAllAccountedPoolRequest, QueryAllAccountedPoolResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.accountedPool = this.accountedPool.bind(this);
    this.accountedPoolAll = this.accountedPoolAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `elys-network/elys/accountedpool/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of AccountedPool items. */
  async accountedPool(params: QueryGetAccountedPoolRequest): Promise<QueryGetAccountedPoolResponseSDKType> {
    const endpoint = `elys-network/elys/accountedpool/accounted_pool/${params.poolId}`;
    return await this.req.get<QueryGetAccountedPoolResponseSDKType>(endpoint);
  }
  /* AccountedPoolAll */
  async accountedPoolAll(params: QueryAllAccountedPoolRequest = {
    pagination: undefined
  }): Promise<QueryAllAccountedPoolResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/accountedpool/accounted_pool`;
    return await this.req.get<QueryAllAccountedPoolResponseSDKType>(endpoint, options);
  }
}