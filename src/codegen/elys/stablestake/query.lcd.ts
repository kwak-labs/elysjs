import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryBorrowRatioRequest, QueryBorrowRatioResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.borrowRatio = this.borrowRatio.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `elys-network/elys/stablestake/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* BorrowRatio queries the borrow ratio compared to total deposit */
  async borrowRatio(_params: QueryBorrowRatioRequest = {}): Promise<QueryBorrowRatioResponseSDKType> {
    const endpoint = `elys-network/elys/stablestake/borrow-ratio`;
    return await this.req.get<QueryBorrowRatioResponseSDKType>(endpoint);
  }
}