import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryShowCommitmentsRequest, QueryShowCommitmentsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.showCommitments = this.showCommitments.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `elys-network/elys/commitment/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of ShowCommitments items. */
  async showCommitments(params: QueryShowCommitmentsRequest): Promise<QueryShowCommitmentsResponseSDKType> {
    const endpoint = `elys-network/elys/commitment/show_commitments/${params.creator}`;
    return await this.req.get<QueryShowCommitmentsResponseSDKType>(endpoint);
  }
}