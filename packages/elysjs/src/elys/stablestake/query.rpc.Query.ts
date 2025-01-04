//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBorrowRatioRequest, QueryBorrowRatioResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** BorrowRatio queries the borrow ratio compared to total deposit */
  borrowRatio(request?: QueryBorrowRatioRequest): Promise<QueryBorrowRatioResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.borrowRatio = this.borrowRatio.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.stablestake.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  borrowRatio(request: QueryBorrowRatioRequest = {}): Promise<QueryBorrowRatioResponse> {
    const data = QueryBorrowRatioRequest.encode(request).finish();
    const promise = this.rpc.request("elys.stablestake.Query", "BorrowRatio", data);
    return promise.then(data => QueryBorrowRatioResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    borrowRatio(request?: QueryBorrowRatioRequest): Promise<QueryBorrowRatioResponse> {
      return queryService.borrowRatio(request);
    }
  };
};