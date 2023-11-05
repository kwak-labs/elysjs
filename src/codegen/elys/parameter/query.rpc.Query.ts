import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAllAnteHandlerParamRequest, QueryAllAnteHandlerParamResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  anteHandlerParamAll(request?: QueryAllAnteHandlerParamRequest): Promise<QueryAllAnteHandlerParamResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.anteHandlerParamAll = this.anteHandlerParamAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.parameter.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  anteHandlerParamAll(request: QueryAllAnteHandlerParamRequest = {
    pagination: undefined
  }): Promise<QueryAllAnteHandlerParamResponse> {
    const data = QueryAllAnteHandlerParamRequest.encode(request).finish();
    const promise = this.rpc.request("elys.parameter.Query", "AnteHandlerParamAll", data);
    return promise.then(data => QueryAllAnteHandlerParamResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    anteHandlerParamAll(request?: QueryAllAnteHandlerParamRequest): Promise<QueryAllAnteHandlerParamResponse> {
      return queryService.anteHandlerParamAll(request);
    }
  };
};