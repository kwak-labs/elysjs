import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryCommunityPoolRequest, QueryCommunityPoolResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.communityPool = this.communityPool.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `elys-network/elys/incentive/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of CommunityPool items. */
  async communityPool(_params: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponseSDKType> {
    const endpoint = `elys-network/elys/incentive/community_pool`;
    return await this.req.get<QueryCommunityPoolResponseSDKType>(endpoint);
  }
}