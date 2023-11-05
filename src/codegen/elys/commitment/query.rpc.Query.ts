import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryShowCommitmentsRequest, QueryShowCommitmentsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of ShowCommitments items. */
  showCommitments(request: QueryShowCommitmentsRequest): Promise<QueryShowCommitmentsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.showCommitments = this.showCommitments.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  showCommitments(request: QueryShowCommitmentsRequest): Promise<QueryShowCommitmentsResponse> {
    const data = QueryShowCommitmentsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Query", "ShowCommitments", data);
    return promise.then(data => QueryShowCommitmentsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    showCommitments(request: QueryShowCommitmentsRequest): Promise<QueryShowCommitmentsResponse> {
      return queryService.showCommitments(request);
    }
  };
};