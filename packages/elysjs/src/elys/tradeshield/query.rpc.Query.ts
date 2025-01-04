//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPendingSpotOrderRequest, QueryGetPendingSpotOrderResponse, QueryAllPendingSpotOrderRequest, QueryAllPendingSpotOrderResponse, QueryGetPendingPerpetualOrderRequest, QueryGetPendingPerpetualOrderResponse, QueryAllPendingPerpetualOrderRequest, QueryAllPendingPerpetualOrderResponse, QueryPendingPerpetualOrderForAddressRequest, QueryPendingPerpetualOrderForAddressResponse, QueryPendingSpotOrderForAddressRequest, QueryPendingSpotOrderForAddressResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of PendingSpotOrder items. */
  pendingSpotOrder(request: QueryGetPendingSpotOrderRequest): Promise<QueryGetPendingSpotOrderResponse>;
  pendingSpotOrderAll(request?: QueryAllPendingSpotOrderRequest): Promise<QueryAllPendingSpotOrderResponse>;
  /** Queries a list of PendingPerpetualOrder items. */
  pendingPerpetualOrder(request: QueryGetPendingPerpetualOrderRequest): Promise<QueryGetPendingPerpetualOrderResponse>;
  pendingPerpetualOrderAll(request?: QueryAllPendingPerpetualOrderRequest): Promise<QueryAllPendingPerpetualOrderResponse>;
  /** Queries a list of PendingPerpetualOrderForAddress items. */
  pendingPerpetualOrderForAddress(request: QueryPendingPerpetualOrderForAddressRequest): Promise<QueryPendingPerpetualOrderForAddressResponse>;
  /** Queries a list of PendingSpotOrderForAddress items. */
  pendingSpotOrderForAddress(request: QueryPendingSpotOrderForAddressRequest): Promise<QueryPendingSpotOrderForAddressResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.pendingSpotOrder = this.pendingSpotOrder.bind(this);
    this.pendingSpotOrderAll = this.pendingSpotOrderAll.bind(this);
    this.pendingPerpetualOrder = this.pendingPerpetualOrder.bind(this);
    this.pendingPerpetualOrderAll = this.pendingPerpetualOrderAll.bind(this);
    this.pendingPerpetualOrderForAddress = this.pendingPerpetualOrderForAddress.bind(this);
    this.pendingSpotOrderForAddress = this.pendingSpotOrderForAddress.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  pendingSpotOrder(request: QueryGetPendingSpotOrderRequest): Promise<QueryGetPendingSpotOrderResponse> {
    const data = QueryGetPendingSpotOrderRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Query", "PendingSpotOrder", data);
    return promise.then(data => QueryGetPendingSpotOrderResponse.decode(new BinaryReader(data)));
  }
  pendingSpotOrderAll(request: QueryAllPendingSpotOrderRequest = {
    pagination: undefined
  }): Promise<QueryAllPendingSpotOrderResponse> {
    const data = QueryAllPendingSpotOrderRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Query", "PendingSpotOrderAll", data);
    return promise.then(data => QueryAllPendingSpotOrderResponse.decode(new BinaryReader(data)));
  }
  pendingPerpetualOrder(request: QueryGetPendingPerpetualOrderRequest): Promise<QueryGetPendingPerpetualOrderResponse> {
    const data = QueryGetPendingPerpetualOrderRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Query", "PendingPerpetualOrder", data);
    return promise.then(data => QueryGetPendingPerpetualOrderResponse.decode(new BinaryReader(data)));
  }
  pendingPerpetualOrderAll(request: QueryAllPendingPerpetualOrderRequest = {
    pagination: undefined
  }): Promise<QueryAllPendingPerpetualOrderResponse> {
    const data = QueryAllPendingPerpetualOrderRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Query", "PendingPerpetualOrderAll", data);
    return promise.then(data => QueryAllPendingPerpetualOrderResponse.decode(new BinaryReader(data)));
  }
  pendingPerpetualOrderForAddress(request: QueryPendingPerpetualOrderForAddressRequest): Promise<QueryPendingPerpetualOrderForAddressResponse> {
    const data = QueryPendingPerpetualOrderForAddressRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Query", "PendingPerpetualOrderForAddress", data);
    return promise.then(data => QueryPendingPerpetualOrderForAddressResponse.decode(new BinaryReader(data)));
  }
  pendingSpotOrderForAddress(request: QueryPendingSpotOrderForAddressRequest): Promise<QueryPendingSpotOrderForAddressResponse> {
    const data = QueryPendingSpotOrderForAddressRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Query", "PendingSpotOrderForAddress", data);
    return promise.then(data => QueryPendingSpotOrderForAddressResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    pendingSpotOrder(request: QueryGetPendingSpotOrderRequest): Promise<QueryGetPendingSpotOrderResponse> {
      return queryService.pendingSpotOrder(request);
    },
    pendingSpotOrderAll(request?: QueryAllPendingSpotOrderRequest): Promise<QueryAllPendingSpotOrderResponse> {
      return queryService.pendingSpotOrderAll(request);
    },
    pendingPerpetualOrder(request: QueryGetPendingPerpetualOrderRequest): Promise<QueryGetPendingPerpetualOrderResponse> {
      return queryService.pendingPerpetualOrder(request);
    },
    pendingPerpetualOrderAll(request?: QueryAllPendingPerpetualOrderRequest): Promise<QueryAllPendingPerpetualOrderResponse> {
      return queryService.pendingPerpetualOrderAll(request);
    },
    pendingPerpetualOrderForAddress(request: QueryPendingPerpetualOrderForAddressRequest): Promise<QueryPendingPerpetualOrderForAddressResponse> {
      return queryService.pendingPerpetualOrderForAddress(request);
    },
    pendingSpotOrderForAddress(request: QueryPendingSpotOrderForAddressRequest): Promise<QueryPendingSpotOrderForAddressResponse> {
      return queryService.pendingSpotOrderForAddress(request);
    }
  };
};