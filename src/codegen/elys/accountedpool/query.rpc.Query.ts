import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetAccountedPoolRequest, QueryGetAccountedPoolResponse, QueryAllAccountedPoolRequest, QueryAllAccountedPoolResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of AccountedPool items. */
  accountedPool(request: QueryGetAccountedPoolRequest): Promise<QueryGetAccountedPoolResponse>;
  accountedPoolAll(request?: QueryAllAccountedPoolRequest): Promise<QueryAllAccountedPoolResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.accountedPool = this.accountedPool.bind(this);
    this.accountedPoolAll = this.accountedPoolAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.accountedpool.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  accountedPool(request: QueryGetAccountedPoolRequest): Promise<QueryGetAccountedPoolResponse> {
    const data = QueryGetAccountedPoolRequest.encode(request).finish();
    const promise = this.rpc.request("elys.accountedpool.Query", "AccountedPool", data);
    return promise.then(data => QueryGetAccountedPoolResponse.decode(new BinaryReader(data)));
  }
  accountedPoolAll(request: QueryAllAccountedPoolRequest = {
    pagination: undefined
  }): Promise<QueryAllAccountedPoolResponse> {
    const data = QueryAllAccountedPoolRequest.encode(request).finish();
    const promise = this.rpc.request("elys.accountedpool.Query", "AccountedPoolAll", data);
    return promise.then(data => QueryAllAccountedPoolResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    accountedPool(request: QueryGetAccountedPoolRequest): Promise<QueryGetAccountedPoolResponse> {
      return queryService.accountedPool(request);
    },
    accountedPoolAll(request?: QueryAllAccountedPoolRequest): Promise<QueryAllAccountedPoolResponse> {
      return queryService.accountedPoolAll(request);
    }
  };
};