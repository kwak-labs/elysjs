//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetHistoryRequest, QueryGetHistoryResponse, QueryAllHistoryRequest, QueryAllHistoryResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of History items. */
  history(request: QueryGetHistoryRequest): Promise<QueryGetHistoryResponse>;
  historyAll(request?: QueryAllHistoryRequest): Promise<QueryAllHistoryResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.history = this.history.bind(this);
    this.historyAll = this.historyAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.burner.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  history(request: QueryGetHistoryRequest): Promise<QueryGetHistoryResponse> {
    const data = QueryGetHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("elys.burner.Query", "History", data);
    return promise.then(data => QueryGetHistoryResponse.decode(new BinaryReader(data)));
  }
  historyAll(request: QueryAllHistoryRequest = {
    pagination: undefined
  }): Promise<QueryAllHistoryResponse> {
    const data = QueryAllHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("elys.burner.Query", "HistoryAll", data);
    return promise.then(data => QueryAllHistoryResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    history(request: QueryGetHistoryRequest): Promise<QueryGetHistoryResponse> {
      return queryService.history(request);
    },
    historyAll(request?: QueryAllHistoryRequest): Promise<QueryAllHistoryResponse> {
      return queryService.historyAll(request);
    }
  };
};