//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryRewardsRequest, QueryRewardsResponse, QueryInvariantRequest, QueryInvariantResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Rewards queries the total rewards accrued by a delegation */
  rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse>;
  /** Invariant queries the invariant values */
  invariant(request?: QueryInvariantRequest): Promise<QueryInvariantResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.rewards = this.rewards.bind(this);
    this.invariant = this.invariant.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.estaking.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse> {
    const data = QueryRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.estaking.Query", "Rewards", data);
    return promise.then(data => QueryRewardsResponse.decode(new BinaryReader(data)));
  }
  invariant(request: QueryInvariantRequest = {}): Promise<QueryInvariantResponse> {
    const data = QueryInvariantRequest.encode(request).finish();
    const promise = this.rpc.request("elys.estaking.Query", "Invariant", data);
    return promise.then(data => QueryInvariantResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse> {
      return queryService.rewards(request);
    },
    invariant(request?: QueryInvariantRequest): Promise<QueryInvariantResponse> {
      return queryService.invariant(request);
    }
  };
};