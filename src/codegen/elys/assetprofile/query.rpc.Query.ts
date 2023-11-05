import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetEntryRequest, QueryGetEntryResponse, QueryAllEntryRequest, QueryAllEntryResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Entry items. */
  entry(request: QueryGetEntryRequest): Promise<QueryGetEntryResponse>;
  entryAll(request?: QueryAllEntryRequest): Promise<QueryAllEntryResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.entry = this.entry.bind(this);
    this.entryAll = this.entryAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.assetprofile.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  entry(request: QueryGetEntryRequest): Promise<QueryGetEntryResponse> {
    const data = QueryGetEntryRequest.encode(request).finish();
    const promise = this.rpc.request("elys.assetprofile.Query", "Entry", data);
    return promise.then(data => QueryGetEntryResponse.decode(new BinaryReader(data)));
  }
  entryAll(request: QueryAllEntryRequest = {
    pagination: undefined
  }): Promise<QueryAllEntryResponse> {
    const data = QueryAllEntryRequest.encode(request).finish();
    const promise = this.rpc.request("elys.assetprofile.Query", "EntryAll", data);
    return promise.then(data => QueryAllEntryResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    entry(request: QueryGetEntryRequest): Promise<QueryGetEntryResponse> {
      return queryService.entry(request);
    },
    entryAll(request?: QueryAllEntryRequest): Promise<QueryAllEntryResponse> {
      return queryService.entryAll(request);
    }
  };
};