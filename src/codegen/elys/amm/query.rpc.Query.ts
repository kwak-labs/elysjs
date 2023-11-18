import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryAllPoolRequest, QueryAllPoolResponse, QueryGetDenomLiquidityRequest, QueryGetDenomLiquidityResponse, QueryAllDenomLiquidityRequest, QueryAllDenomLiquidityResponse, QuerySwapEstimationRequest, QuerySwapEstimationResponse, QuerySlippageTrackRequest, QuerySlippageTrackResponse, QuerySlippageTrackAllRequest, QuerySlippageTrackAllResponse, QueryBalanceRequest, QueryBalanceResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Pool items. */
  pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
  poolAll(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
  /** Queries a list of DenomLiquidity items. */
  denomLiquidity(request: QueryGetDenomLiquidityRequest): Promise<QueryGetDenomLiquidityResponse>;
  denomLiquidityAll(request?: QueryAllDenomLiquidityRequest): Promise<QueryAllDenomLiquidityResponse>;
  /** Queries a list of SwapEstimation items. */
  swapEstimation(request: QuerySwapEstimationRequest): Promise<QuerySwapEstimationResponse>;
  /** Queries slippage track for a week. */
  slippageTrack(request: QuerySlippageTrackRequest): Promise<QuerySlippageTrackResponse>;
  /** Queries all slippage tracks for a week. */
  slippageTrackAll(request?: QuerySlippageTrackAllRequest): Promise<QuerySlippageTrackAllResponse>;
  /** Queries a list of Balance items. */
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.pool = this.pool.bind(this);
    this.poolAll = this.poolAll.bind(this);
    this.denomLiquidity = this.denomLiquidity.bind(this);
    this.denomLiquidityAll = this.denomLiquidityAll.bind(this);
    this.swapEstimation = this.swapEstimation.bind(this);
    this.slippageTrack = this.slippageTrack.bind(this);
    this.slippageTrackAll = this.slippageTrackAll.bind(this);
    this.balance = this.balance.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
    const data = QueryGetPoolRequest.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Query", "Pool", data);
    return promise.then(data => QueryGetPoolResponse.decode(new BinaryReader(data)));
  }
  poolAll(request: QueryAllPoolRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolResponse> {
    const data = QueryAllPoolRequest.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Query", "PoolAll", data);
    return promise.then(data => QueryAllPoolResponse.decode(new BinaryReader(data)));
  }
  denomLiquidity(request: QueryGetDenomLiquidityRequest): Promise<QueryGetDenomLiquidityResponse> {
    const data = QueryGetDenomLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Query", "DenomLiquidity", data);
    return promise.then(data => QueryGetDenomLiquidityResponse.decode(new BinaryReader(data)));
  }
  denomLiquidityAll(request: QueryAllDenomLiquidityRequest = {
    pagination: undefined
  }): Promise<QueryAllDenomLiquidityResponse> {
    const data = QueryAllDenomLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Query", "DenomLiquidityAll", data);
    return promise.then(data => QueryAllDenomLiquidityResponse.decode(new BinaryReader(data)));
  }
  swapEstimation(request: QuerySwapEstimationRequest): Promise<QuerySwapEstimationResponse> {
    const data = QuerySwapEstimationRequest.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Query", "SwapEstimation", data);
    return promise.then(data => QuerySwapEstimationResponse.decode(new BinaryReader(data)));
  }
  slippageTrack(request: QuerySlippageTrackRequest): Promise<QuerySlippageTrackResponse> {
    const data = QuerySlippageTrackRequest.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Query", "SlippageTrack", data);
    return promise.then(data => QuerySlippageTrackResponse.decode(new BinaryReader(data)));
  }
  slippageTrackAll(request: QuerySlippageTrackAllRequest = {}): Promise<QuerySlippageTrackAllResponse> {
    const data = QuerySlippageTrackAllRequest.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Query", "SlippageTrackAll", data);
    return promise.then(data => QuerySlippageTrackAllResponse.decode(new BinaryReader(data)));
  }
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
      return queryService.pool(request);
    },
    poolAll(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse> {
      return queryService.poolAll(request);
    },
    denomLiquidity(request: QueryGetDenomLiquidityRequest): Promise<QueryGetDenomLiquidityResponse> {
      return queryService.denomLiquidity(request);
    },
    denomLiquidityAll(request?: QueryAllDenomLiquidityRequest): Promise<QueryAllDenomLiquidityResponse> {
      return queryService.denomLiquidityAll(request);
    },
    swapEstimation(request: QuerySwapEstimationRequest): Promise<QuerySwapEstimationResponse> {
      return queryService.swapEstimation(request);
    },
    slippageTrack(request: QuerySlippageTrackRequest): Promise<QuerySlippageTrackResponse> {
      return queryService.slippageTrack(request);
    },
    slippageTrackAll(request?: QuerySlippageTrackAllRequest): Promise<QuerySlippageTrackAllResponse> {
      return queryService.slippageTrackAll(request);
    },
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.balance(request);
    }
  };
};