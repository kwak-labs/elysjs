//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBandPriceRequest, QueryBandPriceResponse, QueryLastBandRequestIdRequest, QueryLastBandRequestIdResponse, QueryGetAssetInfoRequest, QueryGetAssetInfoResponse, QueryAllAssetInfoRequest, QueryAllAssetInfoResponse, QueryGetPriceRequest, QueryGetPriceResponse, QueryAllPriceRequest, QueryAllPriceResponse, QueryGetPriceFeederRequest, QueryGetPriceFeederResponse, QueryAllPriceFeederRequest, QueryAllPriceFeederResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** BandPriceResult defines a rpc handler method for MsgRequestBandPrice. */
  bandPriceResult(request: QueryBandPriceRequest): Promise<QueryBandPriceResponse>;
  /** LastBandRequestId query the last BandPrice result id */
  lastBandRequestId(request?: QueryLastBandRequestIdRequest): Promise<QueryLastBandRequestIdResponse>;
  /** Queries a AssetInfo by denom. */
  assetInfo(request: QueryGetAssetInfoRequest): Promise<QueryGetAssetInfoResponse>;
  /** Queries a list of AssetInfo items. */
  assetInfoAll(request?: QueryAllAssetInfoRequest): Promise<QueryAllAssetInfoResponse>;
  /** Queries a Price by asset. */
  price(request: QueryGetPriceRequest): Promise<QueryGetPriceResponse>;
  /** Queries a list of Price items. */
  priceAll(request?: QueryAllPriceRequest): Promise<QueryAllPriceResponse>;
  /** Queries a PriceFeeder by feeder. */
  priceFeeder(request: QueryGetPriceFeederRequest): Promise<QueryGetPriceFeederResponse>;
  /** Queries a list of PriceFeeder items. */
  priceFeederAll(request?: QueryAllPriceFeederRequest): Promise<QueryAllPriceFeederResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.bandPriceResult = this.bandPriceResult.bind(this);
    this.lastBandRequestId = this.lastBandRequestId.bind(this);
    this.assetInfo = this.assetInfo.bind(this);
    this.assetInfoAll = this.assetInfoAll.bind(this);
    this.price = this.price.bind(this);
    this.priceAll = this.priceAll.bind(this);
    this.priceFeeder = this.priceFeeder.bind(this);
    this.priceFeederAll = this.priceFeederAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  bandPriceResult(request: QueryBandPriceRequest): Promise<QueryBandPriceResponse> {
    const data = QueryBandPriceRequest.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Query", "BandPriceResult", data);
    return promise.then(data => QueryBandPriceResponse.decode(new BinaryReader(data)));
  }
  lastBandRequestId(request: QueryLastBandRequestIdRequest = {}): Promise<QueryLastBandRequestIdResponse> {
    const data = QueryLastBandRequestIdRequest.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Query", "LastBandRequestId", data);
    return promise.then(data => QueryLastBandRequestIdResponse.decode(new BinaryReader(data)));
  }
  assetInfo(request: QueryGetAssetInfoRequest): Promise<QueryGetAssetInfoResponse> {
    const data = QueryGetAssetInfoRequest.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Query", "AssetInfo", data);
    return promise.then(data => QueryGetAssetInfoResponse.decode(new BinaryReader(data)));
  }
  assetInfoAll(request: QueryAllAssetInfoRequest = {
    pagination: undefined
  }): Promise<QueryAllAssetInfoResponse> {
    const data = QueryAllAssetInfoRequest.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Query", "AssetInfoAll", data);
    return promise.then(data => QueryAllAssetInfoResponse.decode(new BinaryReader(data)));
  }
  price(request: QueryGetPriceRequest): Promise<QueryGetPriceResponse> {
    const data = QueryGetPriceRequest.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Query", "Price", data);
    return promise.then(data => QueryGetPriceResponse.decode(new BinaryReader(data)));
  }
  priceAll(request: QueryAllPriceRequest = {
    pagination: undefined
  }): Promise<QueryAllPriceResponse> {
    const data = QueryAllPriceRequest.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Query", "PriceAll", data);
    return promise.then(data => QueryAllPriceResponse.decode(new BinaryReader(data)));
  }
  priceFeeder(request: QueryGetPriceFeederRequest): Promise<QueryGetPriceFeederResponse> {
    const data = QueryGetPriceFeederRequest.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Query", "PriceFeeder", data);
    return promise.then(data => QueryGetPriceFeederResponse.decode(new BinaryReader(data)));
  }
  priceFeederAll(request: QueryAllPriceFeederRequest = {
    pagination: undefined
  }): Promise<QueryAllPriceFeederResponse> {
    const data = QueryAllPriceFeederRequest.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Query", "PriceFeederAll", data);
    return promise.then(data => QueryAllPriceFeederResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    bandPriceResult(request: QueryBandPriceRequest): Promise<QueryBandPriceResponse> {
      return queryService.bandPriceResult(request);
    },
    lastBandRequestId(request?: QueryLastBandRequestIdRequest): Promise<QueryLastBandRequestIdResponse> {
      return queryService.lastBandRequestId(request);
    },
    assetInfo(request: QueryGetAssetInfoRequest): Promise<QueryGetAssetInfoResponse> {
      return queryService.assetInfo(request);
    },
    assetInfoAll(request?: QueryAllAssetInfoRequest): Promise<QueryAllAssetInfoResponse> {
      return queryService.assetInfoAll(request);
    },
    price(request: QueryGetPriceRequest): Promise<QueryGetPriceResponse> {
      return queryService.price(request);
    },
    priceAll(request?: QueryAllPriceRequest): Promise<QueryAllPriceResponse> {
      return queryService.priceAll(request);
    },
    priceFeeder(request: QueryGetPriceFeederRequest): Promise<QueryGetPriceFeederResponse> {
      return queryService.priceFeeder(request);
    },
    priceFeederAll(request?: QueryAllPriceFeederRequest): Promise<QueryAllPriceFeederResponse> {
      return queryService.priceFeederAll(request);
    }
  };
};