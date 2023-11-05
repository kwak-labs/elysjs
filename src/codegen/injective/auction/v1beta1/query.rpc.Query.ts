import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAuctionParamsRequest, QueryAuctionParamsResponse, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves auction params */
  auctionParams(request?: QueryAuctionParamsRequest): Promise<QueryAuctionParamsResponse>;
  /** Retrieves current auction basket with current highest bid and bidder */
  currentAuctionBasket(request?: QueryCurrentAuctionBasketRequest): Promise<QueryCurrentAuctionBasketResponse>;
  /** Retrieves the entire auction module's state */
  auctionModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.auctionParams = this.auctionParams.bind(this);
    this.currentAuctionBasket = this.currentAuctionBasket.bind(this);
    this.auctionModuleState = this.auctionModuleState.bind(this);
  }
  auctionParams(request: QueryAuctionParamsRequest = {}): Promise<QueryAuctionParamsResponse> {
    const data = QueryAuctionParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Query", "AuctionParams", data);
    return promise.then(data => QueryAuctionParamsResponse.decode(new BinaryReader(data)));
  }
  currentAuctionBasket(request: QueryCurrentAuctionBasketRequest = {}): Promise<QueryCurrentAuctionBasketResponse> {
    const data = QueryCurrentAuctionBasketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Query", "CurrentAuctionBasket", data);
    return promise.then(data => QueryCurrentAuctionBasketResponse.decode(new BinaryReader(data)));
  }
  auctionModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Query", "AuctionModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    auctionParams(request?: QueryAuctionParamsRequest): Promise<QueryAuctionParamsResponse> {
      return queryService.auctionParams(request);
    },
    currentAuctionBasket(request?: QueryCurrentAuctionBasketRequest): Promise<QueryCurrentAuctionBasketResponse> {
      return queryService.currentAuctionBasket(request);
    },
    auctionModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.auctionModuleState(request);
    }
  };
};