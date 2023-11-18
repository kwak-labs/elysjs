import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetPoolRequest, QueryGetPoolResponseSDKType, QueryAllPoolRequest, QueryAllPoolResponseSDKType, QueryGetDenomLiquidityRequest, QueryGetDenomLiquidityResponseSDKType, QueryAllDenomLiquidityRequest, QueryAllDenomLiquidityResponseSDKType, QuerySwapEstimationRequest, QuerySwapEstimationResponseSDKType, QuerySlippageTrackRequest, QuerySlippageTrackResponseSDKType, QuerySlippageTrackAllRequest, QuerySlippageTrackAllResponseSDKType, QueryBalanceRequest, QueryBalanceResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `elys-network/elys/amm/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Pool items. */
  async pool(params: QueryGetPoolRequest): Promise<QueryGetPoolResponseSDKType> {
    const endpoint = `elys-network/elys/amm/pool/${params.poolId}`;
    return await this.req.get<QueryGetPoolResponseSDKType>(endpoint);
  }
  /* PoolAll */
  async poolAll(params: QueryAllPoolRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/amm/pool`;
    return await this.req.get<QueryAllPoolResponseSDKType>(endpoint, options);
  }
  /* Queries a list of DenomLiquidity items. */
  async denomLiquidity(params: QueryGetDenomLiquidityRequest): Promise<QueryGetDenomLiquidityResponseSDKType> {
    const endpoint = `elys-network/elys/amm/denom_liquidity/${params.denom}`;
    return await this.req.get<QueryGetDenomLiquidityResponseSDKType>(endpoint);
  }
  /* DenomLiquidityAll */
  async denomLiquidityAll(params: QueryAllDenomLiquidityRequest = {
    pagination: undefined
  }): Promise<QueryAllDenomLiquidityResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/amm/denom_liquidity`;
    return await this.req.get<QueryAllDenomLiquidityResponseSDKType>(endpoint, options);
  }
  /* Queries a list of SwapEstimation items. */
  async swapEstimation(params: QuerySwapEstimationRequest): Promise<QuerySwapEstimationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    const endpoint = `elys-network/elys/amm/swap_estimation`;
    return await this.req.get<QuerySwapEstimationResponseSDKType>(endpoint, options);
  }
  /* Queries slippage track for a week. */
  async slippageTrack(params: QuerySlippageTrackRequest): Promise<QuerySlippageTrackResponseSDKType> {
    const endpoint = `elys-network/elys/amm/slippage_track/${params.poolId}`;
    return await this.req.get<QuerySlippageTrackResponseSDKType>(endpoint);
  }
  /* Queries all slippage tracks for a week. */
  async slippageTrackAll(_params: QuerySlippageTrackAllRequest = {}): Promise<QuerySlippageTrackAllResponseSDKType> {
    const endpoint = `elys-network/elys/amm/slippage_tracks`;
    return await this.req.get<QuerySlippageTrackAllResponseSDKType>(endpoint);
  }
  /* Queries a list of Balance items. */
  async balance(params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType> {
    const endpoint = `elys-network/elys/amm/balance/${params.address}/${params.denom}`;
    return await this.req.get<QueryBalanceResponseSDKType>(endpoint);
  }
}