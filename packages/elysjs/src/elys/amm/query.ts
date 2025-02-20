//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./swap_route";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType, PoolExtraInfo, PoolExtraInfoAmino, PoolExtraInfoSDKType, OraclePoolSlippageTrack, OraclePoolSlippageTrackAmino, OraclePoolSlippageTrackSDKType } from "./pool";
import { DenomLiquidity, DenomLiquidityAmino, DenomLiquiditySDKType } from "./denom_liquidity";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/elys.amm.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/elys.amm.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/elys.amm.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/elys.amm.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetPoolRequest {
  poolId: bigint;
}
export interface QueryGetPoolRequestProtoMsg {
  typeUrl: "/elys.amm.QueryGetPoolRequest";
  value: Uint8Array;
}
export interface QueryGetPoolRequestAmino {
  pool_id?: string;
}
export interface QueryGetPoolRequestAminoMsg {
  type: "/elys.amm.QueryGetPoolRequest";
  value: QueryGetPoolRequestAmino;
}
export interface QueryGetPoolRequestSDKType {
  pool_id: bigint;
}
export interface QueryGetPoolResponse {
  pool: Pool;
  extraInfo: PoolExtraInfo;
}
export interface QueryGetPoolResponseProtoMsg {
  typeUrl: "/elys.amm.QueryGetPoolResponse";
  value: Uint8Array;
}
export interface QueryGetPoolResponseAmino {
  pool?: PoolAmino;
  extra_info?: PoolExtraInfoAmino;
}
export interface QueryGetPoolResponseAminoMsg {
  type: "/elys.amm.QueryGetPoolResponse";
  value: QueryGetPoolResponseAmino;
}
export interface QueryGetPoolResponseSDKType {
  pool: PoolSDKType;
  extra_info: PoolExtraInfoSDKType;
}
export interface QueryAllPoolRequest {
  pagination?: PageRequest;
}
export interface QueryAllPoolRequestProtoMsg {
  typeUrl: "/elys.amm.QueryAllPoolRequest";
  value: Uint8Array;
}
export interface QueryAllPoolRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPoolRequestAminoMsg {
  type: "/elys.amm.QueryAllPoolRequest";
  value: QueryAllPoolRequestAmino;
}
export interface QueryAllPoolRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPoolResponse {
  pool: Pool[];
  extraInfos: PoolExtraInfo[];
  pagination?: PageResponse;
}
export interface QueryAllPoolResponseProtoMsg {
  typeUrl: "/elys.amm.QueryAllPoolResponse";
  value: Uint8Array;
}
export interface QueryAllPoolResponseAmino {
  pool?: PoolAmino[];
  extra_infos?: PoolExtraInfoAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPoolResponseAminoMsg {
  type: "/elys.amm.QueryAllPoolResponse";
  value: QueryAllPoolResponseAmino;
}
export interface QueryAllPoolResponseSDKType {
  pool: PoolSDKType[];
  extra_infos: PoolExtraInfoSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetDenomLiquidityRequest {
  denom: string;
}
export interface QueryGetDenomLiquidityRequestProtoMsg {
  typeUrl: "/elys.amm.QueryGetDenomLiquidityRequest";
  value: Uint8Array;
}
export interface QueryGetDenomLiquidityRequestAmino {
  denom?: string;
}
export interface QueryGetDenomLiquidityRequestAminoMsg {
  type: "/elys.amm.QueryGetDenomLiquidityRequest";
  value: QueryGetDenomLiquidityRequestAmino;
}
export interface QueryGetDenomLiquidityRequestSDKType {
  denom: string;
}
export interface QueryGetDenomLiquidityResponse {
  denomLiquidity: DenomLiquidity;
}
export interface QueryGetDenomLiquidityResponseProtoMsg {
  typeUrl: "/elys.amm.QueryGetDenomLiquidityResponse";
  value: Uint8Array;
}
export interface QueryGetDenomLiquidityResponseAmino {
  denom_liquidity?: DenomLiquidityAmino;
}
export interface QueryGetDenomLiquidityResponseAminoMsg {
  type: "/elys.amm.QueryGetDenomLiquidityResponse";
  value: QueryGetDenomLiquidityResponseAmino;
}
export interface QueryGetDenomLiquidityResponseSDKType {
  denom_liquidity: DenomLiquiditySDKType;
}
export interface QueryAllDenomLiquidityRequest {
  pagination?: PageRequest;
}
export interface QueryAllDenomLiquidityRequestProtoMsg {
  typeUrl: "/elys.amm.QueryAllDenomLiquidityRequest";
  value: Uint8Array;
}
export interface QueryAllDenomLiquidityRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllDenomLiquidityRequestAminoMsg {
  type: "/elys.amm.QueryAllDenomLiquidityRequest";
  value: QueryAllDenomLiquidityRequestAmino;
}
export interface QueryAllDenomLiquidityRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllDenomLiquidityResponse {
  denomLiquidity: DenomLiquidity[];
  pagination?: PageResponse;
}
export interface QueryAllDenomLiquidityResponseProtoMsg {
  typeUrl: "/elys.amm.QueryAllDenomLiquidityResponse";
  value: Uint8Array;
}
export interface QueryAllDenomLiquidityResponseAmino {
  denom_liquidity?: DenomLiquidityAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllDenomLiquidityResponseAminoMsg {
  type: "/elys.amm.QueryAllDenomLiquidityResponse";
  value: QueryAllDenomLiquidityResponseAmino;
}
export interface QueryAllDenomLiquidityResponseSDKType {
  denom_liquidity: DenomLiquiditySDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySwapEstimationRequest {
  routes: SwapAmountInRoute[];
  tokenIn: Coin;
  discount: string;
}
export interface QuerySwapEstimationRequestProtoMsg {
  typeUrl: "/elys.amm.QuerySwapEstimationRequest";
  value: Uint8Array;
}
export interface QuerySwapEstimationRequestAmino {
  routes?: SwapAmountInRouteAmino[];
  token_in?: CoinAmino;
  discount?: string;
}
export interface QuerySwapEstimationRequestAminoMsg {
  type: "/elys.amm.QuerySwapEstimationRequest";
  value: QuerySwapEstimationRequestAmino;
}
export interface QuerySwapEstimationRequestSDKType {
  routes: SwapAmountInRouteSDKType[];
  token_in: CoinSDKType;
  discount: string;
}
export interface QueryJoinPoolEstimationRequest {
  poolId: bigint;
  amountsIn: Coin[];
}
export interface QueryJoinPoolEstimationRequestProtoMsg {
  typeUrl: "/elys.amm.QueryJoinPoolEstimationRequest";
  value: Uint8Array;
}
export interface QueryJoinPoolEstimationRequestAmino {
  pool_id?: string;
  amounts_in?: CoinAmino[];
}
export interface QueryJoinPoolEstimationRequestAminoMsg {
  type: "/elys.amm.QueryJoinPoolEstimationRequest";
  value: QueryJoinPoolEstimationRequestAmino;
}
export interface QueryJoinPoolEstimationRequestSDKType {
  pool_id: bigint;
  amounts_in: CoinSDKType[];
}
export interface QueryJoinPoolEstimationResponse {
  shareAmountOut: Coin;
  amountsIn: Coin[];
  slippage: string;
  weightBalanceRatio: string;
  swapFee: string;
}
export interface QueryJoinPoolEstimationResponseProtoMsg {
  typeUrl: "/elys.amm.QueryJoinPoolEstimationResponse";
  value: Uint8Array;
}
export interface QueryJoinPoolEstimationResponseAmino {
  share_amount_out?: CoinAmino;
  amounts_in?: CoinAmino[];
  slippage?: string;
  weight_balance_ratio?: string;
  swap_fee?: string;
}
export interface QueryJoinPoolEstimationResponseAminoMsg {
  type: "/elys.amm.QueryJoinPoolEstimationResponse";
  value: QueryJoinPoolEstimationResponseAmino;
}
export interface QueryJoinPoolEstimationResponseSDKType {
  share_amount_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  slippage: string;
  weight_balance_ratio: string;
  swap_fee: string;
}
export interface QueryExitPoolEstimationRequest {
  poolId: bigint;
  shareAmountIn: string;
  tokenOutDenom: string;
}
export interface QueryExitPoolEstimationRequestProtoMsg {
  typeUrl: "/elys.amm.QueryExitPoolEstimationRequest";
  value: Uint8Array;
}
export interface QueryExitPoolEstimationRequestAmino {
  pool_id?: string;
  share_amount_in?: string;
  token_out_denom?: string;
}
export interface QueryExitPoolEstimationRequestAminoMsg {
  type: "/elys.amm.QueryExitPoolEstimationRequest";
  value: QueryExitPoolEstimationRequestAmino;
}
export interface QueryExitPoolEstimationRequestSDKType {
  pool_id: bigint;
  share_amount_in: string;
  token_out_denom: string;
}
export interface QueryExitPoolEstimationResponse {
  amountsOut: Coin[];
  weightBalanceRatio: string;
  slippage: string;
  swapFee: string;
}
export interface QueryExitPoolEstimationResponseProtoMsg {
  typeUrl: "/elys.amm.QueryExitPoolEstimationResponse";
  value: Uint8Array;
}
export interface QueryExitPoolEstimationResponseAmino {
  amounts_out?: CoinAmino[];
  weight_balance_ratio?: string;
  slippage?: string;
  swap_fee?: string;
}
export interface QueryExitPoolEstimationResponseAminoMsg {
  type: "/elys.amm.QueryExitPoolEstimationResponse";
  value: QueryExitPoolEstimationResponseAmino;
}
export interface QueryExitPoolEstimationResponseSDKType {
  amounts_out: CoinSDKType[];
  weight_balance_ratio: string;
  slippage: string;
  swap_fee: string;
}
export interface QuerySwapEstimationResponse {
  spotPrice: string;
  tokenOut: Coin;
  swapFee: string;
  discount: string;
  availableLiquidity: Coin;
  slippage: string;
  weightBalanceRatio: string;
}
export interface QuerySwapEstimationResponseProtoMsg {
  typeUrl: "/elys.amm.QuerySwapEstimationResponse";
  value: Uint8Array;
}
export interface QuerySwapEstimationResponseAmino {
  spot_price?: string;
  token_out?: CoinAmino;
  swap_fee?: string;
  discount?: string;
  available_liquidity?: CoinAmino;
  slippage?: string;
  weight_balance_ratio?: string;
}
export interface QuerySwapEstimationResponseAminoMsg {
  type: "/elys.amm.QuerySwapEstimationResponse";
  value: QuerySwapEstimationResponseAmino;
}
export interface QuerySwapEstimationResponseSDKType {
  spot_price: string;
  token_out: CoinSDKType;
  swap_fee: string;
  discount: string;
  available_liquidity: CoinSDKType;
  slippage: string;
  weight_balance_ratio: string;
}
export interface QuerySlippageTrackRequest {
  poolId: bigint;
}
export interface QuerySlippageTrackRequestProtoMsg {
  typeUrl: "/elys.amm.QuerySlippageTrackRequest";
  value: Uint8Array;
}
export interface QuerySlippageTrackRequestAmino {
  pool_id?: string;
}
export interface QuerySlippageTrackRequestAminoMsg {
  type: "/elys.amm.QuerySlippageTrackRequest";
  value: QuerySlippageTrackRequestAmino;
}
export interface QuerySlippageTrackRequestSDKType {
  pool_id: bigint;
}
export interface QuerySlippageTrackResponse {
  track: OraclePoolSlippageTrack;
}
export interface QuerySlippageTrackResponseProtoMsg {
  typeUrl: "/elys.amm.QuerySlippageTrackResponse";
  value: Uint8Array;
}
export interface QuerySlippageTrackResponseAmino {
  track?: OraclePoolSlippageTrackAmino;
}
export interface QuerySlippageTrackResponseAminoMsg {
  type: "/elys.amm.QuerySlippageTrackResponse";
  value: QuerySlippageTrackResponseAmino;
}
export interface QuerySlippageTrackResponseSDKType {
  track: OraclePoolSlippageTrackSDKType;
}
export interface QuerySlippageTrackAllRequest {}
export interface QuerySlippageTrackAllRequestProtoMsg {
  typeUrl: "/elys.amm.QuerySlippageTrackAllRequest";
  value: Uint8Array;
}
export interface QuerySlippageTrackAllRequestAmino {}
export interface QuerySlippageTrackAllRequestAminoMsg {
  type: "/elys.amm.QuerySlippageTrackAllRequest";
  value: QuerySlippageTrackAllRequestAmino;
}
export interface QuerySlippageTrackAllRequestSDKType {}
export interface QuerySlippageTrackAllResponse {
  tracks: OraclePoolSlippageTrack[];
}
export interface QuerySlippageTrackAllResponseProtoMsg {
  typeUrl: "/elys.amm.QuerySlippageTrackAllResponse";
  value: Uint8Array;
}
export interface QuerySlippageTrackAllResponseAmino {
  tracks?: OraclePoolSlippageTrackAmino[];
}
export interface QuerySlippageTrackAllResponseAminoMsg {
  type: "/elys.amm.QuerySlippageTrackAllResponse";
  value: QuerySlippageTrackAllResponseAmino;
}
export interface QuerySlippageTrackAllResponseSDKType {
  tracks: OraclePoolSlippageTrackSDKType[];
}
export interface QueryBalanceRequest {
  address: string;
  denom: string;
}
export interface QueryBalanceRequestProtoMsg {
  typeUrl: "/elys.amm.QueryBalanceRequest";
  value: Uint8Array;
}
export interface QueryBalanceRequestAmino {
  address?: string;
  denom?: string;
}
export interface QueryBalanceRequestAminoMsg {
  type: "/elys.amm.QueryBalanceRequest";
  value: QueryBalanceRequestAmino;
}
export interface QueryBalanceRequestSDKType {
  address: string;
  denom: string;
}
export interface QueryBalanceResponse {
  balance: Coin;
}
export interface QueryBalanceResponseProtoMsg {
  typeUrl: "/elys.amm.QueryBalanceResponse";
  value: Uint8Array;
}
export interface QueryBalanceResponseAmino {
  balance?: CoinAmino;
}
export interface QueryBalanceResponseAminoMsg {
  type: "/elys.amm.QueryBalanceResponse";
  value: QueryBalanceResponseAmino;
}
export interface QueryBalanceResponseSDKType {
  balance: CoinSDKType;
}
export interface QueryInRouteByDenomRequest {
  denomIn: string;
  denomOut: string;
}
export interface QueryInRouteByDenomRequestProtoMsg {
  typeUrl: "/elys.amm.QueryInRouteByDenomRequest";
  value: Uint8Array;
}
export interface QueryInRouteByDenomRequestAmino {
  denom_in?: string;
  denom_out?: string;
}
export interface QueryInRouteByDenomRequestAminoMsg {
  type: "/elys.amm.QueryInRouteByDenomRequest";
  value: QueryInRouteByDenomRequestAmino;
}
export interface QueryInRouteByDenomRequestSDKType {
  denom_in: string;
  denom_out: string;
}
export interface QueryInRouteByDenomResponse {
  inRoute: SwapAmountInRoute[];
}
export interface QueryInRouteByDenomResponseProtoMsg {
  typeUrl: "/elys.amm.QueryInRouteByDenomResponse";
  value: Uint8Array;
}
export interface QueryInRouteByDenomResponseAmino {
  in_route?: SwapAmountInRouteAmino[];
}
export interface QueryInRouteByDenomResponseAminoMsg {
  type: "/elys.amm.QueryInRouteByDenomResponse";
  value: QueryInRouteByDenomResponseAmino;
}
export interface QueryInRouteByDenomResponseSDKType {
  in_route: SwapAmountInRouteSDKType[];
}
export interface QueryOutRouteByDenomRequest {
  denomOut: string;
  denomIn: string;
}
export interface QueryOutRouteByDenomRequestProtoMsg {
  typeUrl: "/elys.amm.QueryOutRouteByDenomRequest";
  value: Uint8Array;
}
export interface QueryOutRouteByDenomRequestAmino {
  denom_out?: string;
  denom_in?: string;
}
export interface QueryOutRouteByDenomRequestAminoMsg {
  type: "/elys.amm.QueryOutRouteByDenomRequest";
  value: QueryOutRouteByDenomRequestAmino;
}
export interface QueryOutRouteByDenomRequestSDKType {
  denom_out: string;
  denom_in: string;
}
export interface QueryOutRouteByDenomResponse {
  outRoute: SwapAmountOutRoute[];
}
export interface QueryOutRouteByDenomResponseProtoMsg {
  typeUrl: "/elys.amm.QueryOutRouteByDenomResponse";
  value: Uint8Array;
}
export interface QueryOutRouteByDenomResponseAmino {
  out_route?: SwapAmountOutRouteAmino[];
}
export interface QueryOutRouteByDenomResponseAminoMsg {
  type: "/elys.amm.QueryOutRouteByDenomResponse";
  value: QueryOutRouteByDenomResponseAmino;
}
export interface QueryOutRouteByDenomResponseSDKType {
  out_route: SwapAmountOutRouteSDKType[];
}
export interface QuerySwapEstimationByDenomRequest {
  amount: Coin;
  denomIn: string;
  denomOut: string;
  address: string;
}
export interface QuerySwapEstimationByDenomRequestProtoMsg {
  typeUrl: "/elys.amm.QuerySwapEstimationByDenomRequest";
  value: Uint8Array;
}
export interface QuerySwapEstimationByDenomRequestAmino {
  amount?: CoinAmino;
  denom_in?: string;
  denom_out?: string;
  address?: string;
}
export interface QuerySwapEstimationByDenomRequestAminoMsg {
  type: "/elys.amm.QuerySwapEstimationByDenomRequest";
  value: QuerySwapEstimationByDenomRequestAmino;
}
export interface QuerySwapEstimationByDenomRequestSDKType {
  amount: CoinSDKType;
  denom_in: string;
  denom_out: string;
  address: string;
}
export interface QuerySwapEstimationByDenomResponse {
  inRoute: SwapAmountInRoute[];
  outRoute: SwapAmountOutRoute[];
  spotPrice: string;
  amount: Coin;
  swapFee: string;
  discount: string;
  availableLiquidity: Coin;
  weightBalanceRatio: string;
  slippage: string;
  priceImpact: string;
}
export interface QuerySwapEstimationByDenomResponseProtoMsg {
  typeUrl: "/elys.amm.QuerySwapEstimationByDenomResponse";
  value: Uint8Array;
}
export interface QuerySwapEstimationByDenomResponseAmino {
  in_route?: SwapAmountInRouteAmino[];
  out_route?: SwapAmountOutRouteAmino[];
  spot_price?: string;
  amount?: CoinAmino;
  swap_fee?: string;
  discount?: string;
  available_liquidity?: CoinAmino;
  weight_balance_ratio?: string;
  slippage?: string;
  price_impact?: string;
}
export interface QuerySwapEstimationByDenomResponseAminoMsg {
  type: "/elys.amm.QuerySwapEstimationByDenomResponse";
  value: QuerySwapEstimationByDenomResponseAmino;
}
export interface QuerySwapEstimationByDenomResponseSDKType {
  in_route: SwapAmountInRouteSDKType[];
  out_route: SwapAmountOutRouteSDKType[];
  spot_price: string;
  amount: CoinSDKType;
  swap_fee: string;
  discount: string;
  available_liquidity: CoinSDKType;
  weight_balance_ratio: string;
  slippage: string;
  price_impact: string;
}
export interface QueryAMMPriceRequest {
  tokenIn: Coin;
  discount: string;
}
export interface QueryAMMPriceRequestProtoMsg {
  typeUrl: "/elys.amm.QueryAMMPriceRequest";
  value: Uint8Array;
}
export interface QueryAMMPriceRequestAmino {
  token_in?: CoinAmino;
  discount?: string;
}
export interface QueryAMMPriceRequestAminoMsg {
  type: "/elys.amm.QueryAMMPriceRequest";
  value: QueryAMMPriceRequestAmino;
}
export interface QueryAMMPriceRequestSDKType {
  token_in: CoinSDKType;
  discount: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/elys.amm.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/elys.amm.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryGetPoolRequest = {
  typeUrl: "/elys.amm.QueryGetPoolRequest",
  encode(message: QueryGetPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPoolRequestAmino): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryGetPoolRequest): QueryGetPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolRequestAminoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolRequestProtoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.decode(message.value);
  },
  toProto(message: QueryGetPoolRequest): Uint8Array {
    return QueryGetPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolRequest): QueryGetPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryGetPoolRequest",
      value: QueryGetPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolResponse(): QueryGetPoolResponse {
  return {
    pool: Pool.fromPartial({}),
    extraInfo: PoolExtraInfo.fromPartial({})
  };
}
export const QueryGetPoolResponse = {
  typeUrl: "/elys.amm.QueryGetPoolResponse",
  encode(message: QueryGetPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.extraInfo !== undefined) {
      PoolExtraInfo.encode(message.extraInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        case 2:
          message.extraInfo = PoolExtraInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    message.extraInfo = object.extraInfo !== undefined && object.extraInfo !== null ? PoolExtraInfo.fromPartial(object.extraInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolResponseAmino): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    if (object.extra_info !== undefined && object.extra_info !== null) {
      message.extraInfo = PoolExtraInfo.fromAmino(object.extra_info);
    }
    return message;
  },
  toAmino(message: QueryGetPoolResponse): QueryGetPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    obj.extra_info = message.extraInfo ? PoolExtraInfo.toAmino(message.extraInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolResponseAminoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolResponseProtoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.decode(message.value);
  },
  toProto(message: QueryGetPoolResponse): Uint8Array {
    return QueryGetPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolResponse): QueryGetPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryGetPoolResponse",
      value: QueryGetPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolRequest(): QueryAllPoolRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPoolRequest = {
  typeUrl: "/elys.amm.QueryAllPoolRequest",
  encode(message: QueryAllPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllPoolRequest>): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolRequestAmino): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolRequest): QueryAllPoolRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolRequestAminoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolRequestProtoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.decode(message.value);
  },
  toProto(message: QueryAllPoolRequest): Uint8Array {
    return QueryAllPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolRequest): QueryAllPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryAllPoolRequest",
      value: QueryAllPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolResponse(): QueryAllPoolResponse {
  return {
    pool: [],
    extraInfos: [],
    pagination: undefined
  };
}
export const QueryAllPoolResponse = {
  typeUrl: "/elys.amm.QueryAllPoolResponse",
  encode(message: QueryAllPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.extraInfos) {
      PoolExtraInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(Pool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.extraInfos.push(PoolExtraInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllPoolResponse>): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromPartial(e)) || [];
    message.extraInfos = object.extraInfos?.map(e => PoolExtraInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolResponseAmino): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromAmino(e)) || [];
    message.extraInfos = object.extra_infos?.map(e => PoolExtraInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolResponse): QueryAllPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pool = message.pool;
    }
    if (message.extraInfos) {
      obj.extra_infos = message.extraInfos.map(e => e ? PoolExtraInfo.toAmino(e) : undefined);
    } else {
      obj.extra_infos = message.extraInfos;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolResponseAminoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolResponseProtoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.decode(message.value);
  },
  toProto(message: QueryAllPoolResponse): Uint8Array {
    return QueryAllPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolResponse): QueryAllPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryAllPoolResponse",
      value: QueryAllPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetDenomLiquidityRequest(): QueryGetDenomLiquidityRequest {
  return {
    denom: ""
  };
}
export const QueryGetDenomLiquidityRequest = {
  typeUrl: "/elys.amm.QueryGetDenomLiquidityRequest",
  encode(message: QueryGetDenomLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDenomLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetDenomLiquidityRequest>): QueryGetDenomLiquidityRequest {
    const message = createBaseQueryGetDenomLiquidityRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetDenomLiquidityRequestAmino): QueryGetDenomLiquidityRequest {
    const message = createBaseQueryGetDenomLiquidityRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetDenomLiquidityRequest): QueryGetDenomLiquidityRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetDenomLiquidityRequestAminoMsg): QueryGetDenomLiquidityRequest {
    return QueryGetDenomLiquidityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDenomLiquidityRequestProtoMsg): QueryGetDenomLiquidityRequest {
    return QueryGetDenomLiquidityRequest.decode(message.value);
  },
  toProto(message: QueryGetDenomLiquidityRequest): Uint8Array {
    return QueryGetDenomLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDenomLiquidityRequest): QueryGetDenomLiquidityRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryGetDenomLiquidityRequest",
      value: QueryGetDenomLiquidityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetDenomLiquidityResponse(): QueryGetDenomLiquidityResponse {
  return {
    denomLiquidity: DenomLiquidity.fromPartial({})
  };
}
export const QueryGetDenomLiquidityResponse = {
  typeUrl: "/elys.amm.QueryGetDenomLiquidityResponse",
  encode(message: QueryGetDenomLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomLiquidity !== undefined) {
      DenomLiquidity.encode(message.denomLiquidity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDenomLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomLiquidity = DenomLiquidity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetDenomLiquidityResponse>): QueryGetDenomLiquidityResponse {
    const message = createBaseQueryGetDenomLiquidityResponse();
    message.denomLiquidity = object.denomLiquidity !== undefined && object.denomLiquidity !== null ? DenomLiquidity.fromPartial(object.denomLiquidity) : undefined;
    return message;
  },
  fromAmino(object: QueryGetDenomLiquidityResponseAmino): QueryGetDenomLiquidityResponse {
    const message = createBaseQueryGetDenomLiquidityResponse();
    if (object.denom_liquidity !== undefined && object.denom_liquidity !== null) {
      message.denomLiquidity = DenomLiquidity.fromAmino(object.denom_liquidity);
    }
    return message;
  },
  toAmino(message: QueryGetDenomLiquidityResponse): QueryGetDenomLiquidityResponseAmino {
    const obj: any = {};
    obj.denom_liquidity = message.denomLiquidity ? DenomLiquidity.toAmino(message.denomLiquidity) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetDenomLiquidityResponseAminoMsg): QueryGetDenomLiquidityResponse {
    return QueryGetDenomLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDenomLiquidityResponseProtoMsg): QueryGetDenomLiquidityResponse {
    return QueryGetDenomLiquidityResponse.decode(message.value);
  },
  toProto(message: QueryGetDenomLiquidityResponse): Uint8Array {
    return QueryGetDenomLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDenomLiquidityResponse): QueryGetDenomLiquidityResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryGetDenomLiquidityResponse",
      value: QueryGetDenomLiquidityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllDenomLiquidityRequest(): QueryAllDenomLiquidityRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllDenomLiquidityRequest = {
  typeUrl: "/elys.amm.QueryAllDenomLiquidityRequest",
  encode(message: QueryAllDenomLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDenomLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDenomLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllDenomLiquidityRequest>): QueryAllDenomLiquidityRequest {
    const message = createBaseQueryAllDenomLiquidityRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDenomLiquidityRequestAmino): QueryAllDenomLiquidityRequest {
    const message = createBaseQueryAllDenomLiquidityRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDenomLiquidityRequest): QueryAllDenomLiquidityRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDenomLiquidityRequestAminoMsg): QueryAllDenomLiquidityRequest {
    return QueryAllDenomLiquidityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDenomLiquidityRequestProtoMsg): QueryAllDenomLiquidityRequest {
    return QueryAllDenomLiquidityRequest.decode(message.value);
  },
  toProto(message: QueryAllDenomLiquidityRequest): Uint8Array {
    return QueryAllDenomLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDenomLiquidityRequest): QueryAllDenomLiquidityRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryAllDenomLiquidityRequest",
      value: QueryAllDenomLiquidityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDenomLiquidityResponse(): QueryAllDenomLiquidityResponse {
  return {
    denomLiquidity: [],
    pagination: undefined
  };
}
export const QueryAllDenomLiquidityResponse = {
  typeUrl: "/elys.amm.QueryAllDenomLiquidityResponse",
  encode(message: QueryAllDenomLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomLiquidity) {
      DenomLiquidity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDenomLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDenomLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomLiquidity.push(DenomLiquidity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllDenomLiquidityResponse>): QueryAllDenomLiquidityResponse {
    const message = createBaseQueryAllDenomLiquidityResponse();
    message.denomLiquidity = object.denomLiquidity?.map(e => DenomLiquidity.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDenomLiquidityResponseAmino): QueryAllDenomLiquidityResponse {
    const message = createBaseQueryAllDenomLiquidityResponse();
    message.denomLiquidity = object.denom_liquidity?.map(e => DenomLiquidity.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDenomLiquidityResponse): QueryAllDenomLiquidityResponseAmino {
    const obj: any = {};
    if (message.denomLiquidity) {
      obj.denom_liquidity = message.denomLiquidity.map(e => e ? DenomLiquidity.toAmino(e) : undefined);
    } else {
      obj.denom_liquidity = message.denomLiquidity;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDenomLiquidityResponseAminoMsg): QueryAllDenomLiquidityResponse {
    return QueryAllDenomLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDenomLiquidityResponseProtoMsg): QueryAllDenomLiquidityResponse {
    return QueryAllDenomLiquidityResponse.decode(message.value);
  },
  toProto(message: QueryAllDenomLiquidityResponse): Uint8Array {
    return QueryAllDenomLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDenomLiquidityResponse): QueryAllDenomLiquidityResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryAllDenomLiquidityResponse",
      value: QueryAllDenomLiquidityResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySwapEstimationRequest(): QuerySwapEstimationRequest {
  return {
    routes: [],
    tokenIn: Coin.fromPartial({}),
    discount: ""
  };
}
export const QuerySwapEstimationRequest = {
  typeUrl: "/elys.amm.QuerySwapEstimationRequest",
  encode(message: QuerySwapEstimationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.discount !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.discount, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapEstimationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapEstimationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySwapEstimationRequest>): QuerySwapEstimationRequest {
    const message = createBaseQuerySwapEstimationRequest();
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
    message.discount = object.discount ?? "";
    return message;
  },
  fromAmino(object: QuerySwapEstimationRequestAmino): QuerySwapEstimationRequest {
    const message = createBaseQuerySwapEstimationRequest();
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = Coin.fromAmino(object.token_in);
    }
    if (object.discount !== undefined && object.discount !== null) {
      message.discount = object.discount;
    }
    return message;
  },
  toAmino(message: QuerySwapEstimationRequest): QuerySwapEstimationRequestAmino {
    const obj: any = {};
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
    obj.discount = message.discount === "" ? undefined : message.discount;
    return obj;
  },
  fromAminoMsg(object: QuerySwapEstimationRequestAminoMsg): QuerySwapEstimationRequest {
    return QuerySwapEstimationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapEstimationRequestProtoMsg): QuerySwapEstimationRequest {
    return QuerySwapEstimationRequest.decode(message.value);
  },
  toProto(message: QuerySwapEstimationRequest): Uint8Array {
    return QuerySwapEstimationRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapEstimationRequest): QuerySwapEstimationRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySwapEstimationRequest",
      value: QuerySwapEstimationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryJoinPoolEstimationRequest(): QueryJoinPoolEstimationRequest {
  return {
    poolId: BigInt(0),
    amountsIn: []
  };
}
export const QueryJoinPoolEstimationRequest = {
  typeUrl: "/elys.amm.QueryJoinPoolEstimationRequest",
  encode(message: QueryJoinPoolEstimationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryJoinPoolEstimationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinPoolEstimationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryJoinPoolEstimationRequest>): QueryJoinPoolEstimationRequest {
    const message = createBaseQueryJoinPoolEstimationRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryJoinPoolEstimationRequestAmino): QueryJoinPoolEstimationRequest {
    const message = createBaseQueryJoinPoolEstimationRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryJoinPoolEstimationRequest): QueryJoinPoolEstimationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_in = message.amountsIn;
    }
    return obj;
  },
  fromAminoMsg(object: QueryJoinPoolEstimationRequestAminoMsg): QueryJoinPoolEstimationRequest {
    return QueryJoinPoolEstimationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryJoinPoolEstimationRequestProtoMsg): QueryJoinPoolEstimationRequest {
    return QueryJoinPoolEstimationRequest.decode(message.value);
  },
  toProto(message: QueryJoinPoolEstimationRequest): Uint8Array {
    return QueryJoinPoolEstimationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryJoinPoolEstimationRequest): QueryJoinPoolEstimationRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryJoinPoolEstimationRequest",
      value: QueryJoinPoolEstimationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryJoinPoolEstimationResponse(): QueryJoinPoolEstimationResponse {
  return {
    shareAmountOut: Coin.fromPartial({}),
    amountsIn: [],
    slippage: "",
    weightBalanceRatio: "",
    swapFee: ""
  };
}
export const QueryJoinPoolEstimationResponse = {
  typeUrl: "/elys.amm.QueryJoinPoolEstimationResponse",
  encode(message: QueryJoinPoolEstimationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shareAmountOut !== undefined) {
      Coin.encode(message.shareAmountOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.slippage !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.slippage, 18).atomics);
    }
    if (message.weightBalanceRatio !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.weightBalanceRatio, 18).atomics);
    }
    if (message.swapFee !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryJoinPoolEstimationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinPoolEstimationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareAmountOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.slippage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.weightBalanceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryJoinPoolEstimationResponse>): QueryJoinPoolEstimationResponse {
    const message = createBaseQueryJoinPoolEstimationResponse();
    message.shareAmountOut = object.shareAmountOut !== undefined && object.shareAmountOut !== null ? Coin.fromPartial(object.shareAmountOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.slippage = object.slippage ?? "";
    message.weightBalanceRatio = object.weightBalanceRatio ?? "";
    message.swapFee = object.swapFee ?? "";
    return message;
  },
  fromAmino(object: QueryJoinPoolEstimationResponseAmino): QueryJoinPoolEstimationResponse {
    const message = createBaseQueryJoinPoolEstimationResponse();
    if (object.share_amount_out !== undefined && object.share_amount_out !== null) {
      message.shareAmountOut = Coin.fromAmino(object.share_amount_out);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    if (object.slippage !== undefined && object.slippage !== null) {
      message.slippage = object.slippage;
    }
    if (object.weight_balance_ratio !== undefined && object.weight_balance_ratio !== null) {
      message.weightBalanceRatio = object.weight_balance_ratio;
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    return message;
  },
  toAmino(message: QueryJoinPoolEstimationResponse): QueryJoinPoolEstimationResponseAmino {
    const obj: any = {};
    obj.share_amount_out = message.shareAmountOut ? Coin.toAmino(message.shareAmountOut) : undefined;
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_in = message.amountsIn;
    }
    obj.slippage = message.slippage === "" ? undefined : message.slippage;
    obj.weight_balance_ratio = message.weightBalanceRatio === "" ? undefined : message.weightBalanceRatio;
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    return obj;
  },
  fromAminoMsg(object: QueryJoinPoolEstimationResponseAminoMsg): QueryJoinPoolEstimationResponse {
    return QueryJoinPoolEstimationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryJoinPoolEstimationResponseProtoMsg): QueryJoinPoolEstimationResponse {
    return QueryJoinPoolEstimationResponse.decode(message.value);
  },
  toProto(message: QueryJoinPoolEstimationResponse): Uint8Array {
    return QueryJoinPoolEstimationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryJoinPoolEstimationResponse): QueryJoinPoolEstimationResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryJoinPoolEstimationResponse",
      value: QueryJoinPoolEstimationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryExitPoolEstimationRequest(): QueryExitPoolEstimationRequest {
  return {
    poolId: BigInt(0),
    shareAmountIn: "",
    tokenOutDenom: ""
  };
}
export const QueryExitPoolEstimationRequest = {
  typeUrl: "/elys.amm.QueryExitPoolEstimationRequest",
  encode(message: QueryExitPoolEstimationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.shareAmountIn !== "") {
      writer.uint32(18).string(message.shareAmountIn);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExitPoolEstimationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitPoolEstimationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.shareAmountIn = reader.string();
          break;
        case 3:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryExitPoolEstimationRequest>): QueryExitPoolEstimationRequest {
    const message = createBaseQueryExitPoolEstimationRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.shareAmountIn = object.shareAmountIn ?? "";
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
  fromAmino(object: QueryExitPoolEstimationRequestAmino): QueryExitPoolEstimationRequest {
    const message = createBaseQueryExitPoolEstimationRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.share_amount_in !== undefined && object.share_amount_in !== null) {
      message.shareAmountIn = object.share_amount_in;
    }
    if (object.token_out_denom !== undefined && object.token_out_denom !== null) {
      message.tokenOutDenom = object.token_out_denom;
    }
    return message;
  },
  toAmino(message: QueryExitPoolEstimationRequest): QueryExitPoolEstimationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.share_amount_in = message.shareAmountIn === "" ? undefined : message.shareAmountIn;
    obj.token_out_denom = message.tokenOutDenom === "" ? undefined : message.tokenOutDenom;
    return obj;
  },
  fromAminoMsg(object: QueryExitPoolEstimationRequestAminoMsg): QueryExitPoolEstimationRequest {
    return QueryExitPoolEstimationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExitPoolEstimationRequestProtoMsg): QueryExitPoolEstimationRequest {
    return QueryExitPoolEstimationRequest.decode(message.value);
  },
  toProto(message: QueryExitPoolEstimationRequest): Uint8Array {
    return QueryExitPoolEstimationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExitPoolEstimationRequest): QueryExitPoolEstimationRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryExitPoolEstimationRequest",
      value: QueryExitPoolEstimationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExitPoolEstimationResponse(): QueryExitPoolEstimationResponse {
  return {
    amountsOut: [],
    weightBalanceRatio: "",
    slippage: "",
    swapFee: ""
  };
}
export const QueryExitPoolEstimationResponse = {
  typeUrl: "/elys.amm.QueryExitPoolEstimationResponse",
  encode(message: QueryExitPoolEstimationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.weightBalanceRatio !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weightBalanceRatio, 18).atomics);
    }
    if (message.slippage !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.slippage, 18).atomics);
    }
    if (message.swapFee !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExitPoolEstimationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitPoolEstimationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.weightBalanceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.slippage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryExitPoolEstimationResponse>): QueryExitPoolEstimationResponse {
    const message = createBaseQueryExitPoolEstimationResponse();
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.weightBalanceRatio = object.weightBalanceRatio ?? "";
    message.slippage = object.slippage ?? "";
    message.swapFee = object.swapFee ?? "";
    return message;
  },
  fromAmino(object: QueryExitPoolEstimationResponseAmino): QueryExitPoolEstimationResponse {
    const message = createBaseQueryExitPoolEstimationResponse();
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.weight_balance_ratio !== undefined && object.weight_balance_ratio !== null) {
      message.weightBalanceRatio = object.weight_balance_ratio;
    }
    if (object.slippage !== undefined && object.slippage !== null) {
      message.slippage = object.slippage;
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    return message;
  },
  toAmino(message: QueryExitPoolEstimationResponse): QueryExitPoolEstimationResponseAmino {
    const obj: any = {};
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_out = message.amountsOut;
    }
    obj.weight_balance_ratio = message.weightBalanceRatio === "" ? undefined : message.weightBalanceRatio;
    obj.slippage = message.slippage === "" ? undefined : message.slippage;
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    return obj;
  },
  fromAminoMsg(object: QueryExitPoolEstimationResponseAminoMsg): QueryExitPoolEstimationResponse {
    return QueryExitPoolEstimationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExitPoolEstimationResponseProtoMsg): QueryExitPoolEstimationResponse {
    return QueryExitPoolEstimationResponse.decode(message.value);
  },
  toProto(message: QueryExitPoolEstimationResponse): Uint8Array {
    return QueryExitPoolEstimationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExitPoolEstimationResponse): QueryExitPoolEstimationResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryExitPoolEstimationResponse",
      value: QueryExitPoolEstimationResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySwapEstimationResponse(): QuerySwapEstimationResponse {
  return {
    spotPrice: "",
    tokenOut: Coin.fromPartial({}),
    swapFee: "",
    discount: "",
    availableLiquidity: Coin.fromPartial({}),
    slippage: "",
    weightBalanceRatio: ""
  };
}
export const QuerySwapEstimationResponse = {
  typeUrl: "/elys.amm.QuerySwapEstimationResponse",
  encode(message: QuerySwapEstimationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.spotPrice, 18).atomics);
    }
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.swapFee !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.discount !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.discount, 18).atomics);
    }
    if (message.availableLiquidity !== undefined) {
      Coin.encode(message.availableLiquidity, writer.uint32(42).fork()).ldelim();
    }
    if (message.slippage !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.slippage, 18).atomics);
    }
    if (message.weightBalanceRatio !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.weightBalanceRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapEstimationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapEstimationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.availableLiquidity = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.slippage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.weightBalanceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySwapEstimationResponse>): QuerySwapEstimationResponse {
    const message = createBaseQuerySwapEstimationResponse();
    message.spotPrice = object.spotPrice ?? "";
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? Coin.fromPartial(object.tokenOut) : undefined;
    message.swapFee = object.swapFee ?? "";
    message.discount = object.discount ?? "";
    message.availableLiquidity = object.availableLiquidity !== undefined && object.availableLiquidity !== null ? Coin.fromPartial(object.availableLiquidity) : undefined;
    message.slippage = object.slippage ?? "";
    message.weightBalanceRatio = object.weightBalanceRatio ?? "";
    return message;
  },
  fromAmino(object: QuerySwapEstimationResponseAmino): QuerySwapEstimationResponse {
    const message = createBaseQuerySwapEstimationResponse();
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = Coin.fromAmino(object.token_out);
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    if (object.discount !== undefined && object.discount !== null) {
      message.discount = object.discount;
    }
    if (object.available_liquidity !== undefined && object.available_liquidity !== null) {
      message.availableLiquidity = Coin.fromAmino(object.available_liquidity);
    }
    if (object.slippage !== undefined && object.slippage !== null) {
      message.slippage = object.slippage;
    }
    if (object.weight_balance_ratio !== undefined && object.weight_balance_ratio !== null) {
      message.weightBalanceRatio = object.weight_balance_ratio;
    }
    return message;
  },
  toAmino(message: QuerySwapEstimationResponse): QuerySwapEstimationResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
    obj.token_out = message.tokenOut ? Coin.toAmino(message.tokenOut) : undefined;
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    obj.discount = message.discount === "" ? undefined : message.discount;
    obj.available_liquidity = message.availableLiquidity ? Coin.toAmino(message.availableLiquidity) : undefined;
    obj.slippage = message.slippage === "" ? undefined : message.slippage;
    obj.weight_balance_ratio = message.weightBalanceRatio === "" ? undefined : message.weightBalanceRatio;
    return obj;
  },
  fromAminoMsg(object: QuerySwapEstimationResponseAminoMsg): QuerySwapEstimationResponse {
    return QuerySwapEstimationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapEstimationResponseProtoMsg): QuerySwapEstimationResponse {
    return QuerySwapEstimationResponse.decode(message.value);
  },
  toProto(message: QuerySwapEstimationResponse): Uint8Array {
    return QuerySwapEstimationResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapEstimationResponse): QuerySwapEstimationResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySwapEstimationResponse",
      value: QuerySwapEstimationResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySlippageTrackRequest(): QuerySlippageTrackRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QuerySlippageTrackRequest = {
  typeUrl: "/elys.amm.QuerySlippageTrackRequest",
  encode(message: QuerySlippageTrackRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlippageTrackRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlippageTrackRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySlippageTrackRequest>): QuerySlippageTrackRequest {
    const message = createBaseQuerySlippageTrackRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySlippageTrackRequestAmino): QuerySlippageTrackRequest {
    const message = createBaseQuerySlippageTrackRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QuerySlippageTrackRequest): QuerySlippageTrackRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySlippageTrackRequestAminoMsg): QuerySlippageTrackRequest {
    return QuerySlippageTrackRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlippageTrackRequestProtoMsg): QuerySlippageTrackRequest {
    return QuerySlippageTrackRequest.decode(message.value);
  },
  toProto(message: QuerySlippageTrackRequest): Uint8Array {
    return QuerySlippageTrackRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySlippageTrackRequest): QuerySlippageTrackRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySlippageTrackRequest",
      value: QuerySlippageTrackRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySlippageTrackResponse(): QuerySlippageTrackResponse {
  return {
    track: OraclePoolSlippageTrack.fromPartial({})
  };
}
export const QuerySlippageTrackResponse = {
  typeUrl: "/elys.amm.QuerySlippageTrackResponse",
  encode(message: QuerySlippageTrackResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.track !== undefined) {
      OraclePoolSlippageTrack.encode(message.track, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlippageTrackResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlippageTrackResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.track = OraclePoolSlippageTrack.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySlippageTrackResponse>): QuerySlippageTrackResponse {
    const message = createBaseQuerySlippageTrackResponse();
    message.track = object.track !== undefined && object.track !== null ? OraclePoolSlippageTrack.fromPartial(object.track) : undefined;
    return message;
  },
  fromAmino(object: QuerySlippageTrackResponseAmino): QuerySlippageTrackResponse {
    const message = createBaseQuerySlippageTrackResponse();
    if (object.track !== undefined && object.track !== null) {
      message.track = OraclePoolSlippageTrack.fromAmino(object.track);
    }
    return message;
  },
  toAmino(message: QuerySlippageTrackResponse): QuerySlippageTrackResponseAmino {
    const obj: any = {};
    obj.track = message.track ? OraclePoolSlippageTrack.toAmino(message.track) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySlippageTrackResponseAminoMsg): QuerySlippageTrackResponse {
    return QuerySlippageTrackResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlippageTrackResponseProtoMsg): QuerySlippageTrackResponse {
    return QuerySlippageTrackResponse.decode(message.value);
  },
  toProto(message: QuerySlippageTrackResponse): Uint8Array {
    return QuerySlippageTrackResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySlippageTrackResponse): QuerySlippageTrackResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySlippageTrackResponse",
      value: QuerySlippageTrackResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySlippageTrackAllRequest(): QuerySlippageTrackAllRequest {
  return {};
}
export const QuerySlippageTrackAllRequest = {
  typeUrl: "/elys.amm.QuerySlippageTrackAllRequest",
  encode(_: QuerySlippageTrackAllRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlippageTrackAllRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlippageTrackAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QuerySlippageTrackAllRequest>): QuerySlippageTrackAllRequest {
    const message = createBaseQuerySlippageTrackAllRequest();
    return message;
  },
  fromAmino(_: QuerySlippageTrackAllRequestAmino): QuerySlippageTrackAllRequest {
    const message = createBaseQuerySlippageTrackAllRequest();
    return message;
  },
  toAmino(_: QuerySlippageTrackAllRequest): QuerySlippageTrackAllRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySlippageTrackAllRequestAminoMsg): QuerySlippageTrackAllRequest {
    return QuerySlippageTrackAllRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlippageTrackAllRequestProtoMsg): QuerySlippageTrackAllRequest {
    return QuerySlippageTrackAllRequest.decode(message.value);
  },
  toProto(message: QuerySlippageTrackAllRequest): Uint8Array {
    return QuerySlippageTrackAllRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySlippageTrackAllRequest): QuerySlippageTrackAllRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySlippageTrackAllRequest",
      value: QuerySlippageTrackAllRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySlippageTrackAllResponse(): QuerySlippageTrackAllResponse {
  return {
    tracks: []
  };
}
export const QuerySlippageTrackAllResponse = {
  typeUrl: "/elys.amm.QuerySlippageTrackAllResponse",
  encode(message: QuerySlippageTrackAllResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tracks) {
      OraclePoolSlippageTrack.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlippageTrackAllResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlippageTrackAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tracks.push(OraclePoolSlippageTrack.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySlippageTrackAllResponse>): QuerySlippageTrackAllResponse {
    const message = createBaseQuerySlippageTrackAllResponse();
    message.tracks = object.tracks?.map(e => OraclePoolSlippageTrack.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySlippageTrackAllResponseAmino): QuerySlippageTrackAllResponse {
    const message = createBaseQuerySlippageTrackAllResponse();
    message.tracks = object.tracks?.map(e => OraclePoolSlippageTrack.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySlippageTrackAllResponse): QuerySlippageTrackAllResponseAmino {
    const obj: any = {};
    if (message.tracks) {
      obj.tracks = message.tracks.map(e => e ? OraclePoolSlippageTrack.toAmino(e) : undefined);
    } else {
      obj.tracks = message.tracks;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySlippageTrackAllResponseAminoMsg): QuerySlippageTrackAllResponse {
    return QuerySlippageTrackAllResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlippageTrackAllResponseProtoMsg): QuerySlippageTrackAllResponse {
    return QuerySlippageTrackAllResponse.decode(message.value);
  },
  toProto(message: QuerySlippageTrackAllResponse): Uint8Array {
    return QuerySlippageTrackAllResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySlippageTrackAllResponse): QuerySlippageTrackAllResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySlippageTrackAllResponse",
      value: QuerySlippageTrackAllResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    address: "",
    denom: ""
  };
}
export const QueryBalanceRequest = {
  typeUrl: "/elys.amm.QueryBalanceRequest",
  encode(message: QueryBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    balance: Coin.fromPartial({})
  };
}
export const QueryBalanceResponse = {
  typeUrl: "/elys.amm.QueryBalanceResponse",
  encode(message: QueryBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.balance = message.balance ? Coin.toAmino(message.balance) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInRouteByDenomRequest(): QueryInRouteByDenomRequest {
  return {
    denomIn: "",
    denomOut: ""
  };
}
export const QueryInRouteByDenomRequest = {
  typeUrl: "/elys.amm.QueryInRouteByDenomRequest",
  encode(message: QueryInRouteByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomIn !== "") {
      writer.uint32(10).string(message.denomIn);
    }
    if (message.denomOut !== "") {
      writer.uint32(18).string(message.denomOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInRouteByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInRouteByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomIn = reader.string();
          break;
        case 2:
          message.denomOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryInRouteByDenomRequest>): QueryInRouteByDenomRequest {
    const message = createBaseQueryInRouteByDenomRequest();
    message.denomIn = object.denomIn ?? "";
    message.denomOut = object.denomOut ?? "";
    return message;
  },
  fromAmino(object: QueryInRouteByDenomRequestAmino): QueryInRouteByDenomRequest {
    const message = createBaseQueryInRouteByDenomRequest();
    if (object.denom_in !== undefined && object.denom_in !== null) {
      message.denomIn = object.denom_in;
    }
    if (object.denom_out !== undefined && object.denom_out !== null) {
      message.denomOut = object.denom_out;
    }
    return message;
  },
  toAmino(message: QueryInRouteByDenomRequest): QueryInRouteByDenomRequestAmino {
    const obj: any = {};
    obj.denom_in = message.denomIn === "" ? undefined : message.denomIn;
    obj.denom_out = message.denomOut === "" ? undefined : message.denomOut;
    return obj;
  },
  fromAminoMsg(object: QueryInRouteByDenomRequestAminoMsg): QueryInRouteByDenomRequest {
    return QueryInRouteByDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInRouteByDenomRequestProtoMsg): QueryInRouteByDenomRequest {
    return QueryInRouteByDenomRequest.decode(message.value);
  },
  toProto(message: QueryInRouteByDenomRequest): Uint8Array {
    return QueryInRouteByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInRouteByDenomRequest): QueryInRouteByDenomRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryInRouteByDenomRequest",
      value: QueryInRouteByDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInRouteByDenomResponse(): QueryInRouteByDenomResponse {
  return {
    inRoute: []
  };
}
export const QueryInRouteByDenomResponse = {
  typeUrl: "/elys.amm.QueryInRouteByDenomResponse",
  encode(message: QueryInRouteByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.inRoute) {
      SwapAmountInRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInRouteByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInRouteByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inRoute.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryInRouteByDenomResponse>): QueryInRouteByDenomResponse {
    const message = createBaseQueryInRouteByDenomResponse();
    message.inRoute = object.inRoute?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryInRouteByDenomResponseAmino): QueryInRouteByDenomResponse {
    const message = createBaseQueryInRouteByDenomResponse();
    message.inRoute = object.in_route?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryInRouteByDenomResponse): QueryInRouteByDenomResponseAmino {
    const obj: any = {};
    if (message.inRoute) {
      obj.in_route = message.inRoute.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.in_route = message.inRoute;
    }
    return obj;
  },
  fromAminoMsg(object: QueryInRouteByDenomResponseAminoMsg): QueryInRouteByDenomResponse {
    return QueryInRouteByDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInRouteByDenomResponseProtoMsg): QueryInRouteByDenomResponse {
    return QueryInRouteByDenomResponse.decode(message.value);
  },
  toProto(message: QueryInRouteByDenomResponse): Uint8Array {
    return QueryInRouteByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInRouteByDenomResponse): QueryInRouteByDenomResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryInRouteByDenomResponse",
      value: QueryInRouteByDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOutRouteByDenomRequest(): QueryOutRouteByDenomRequest {
  return {
    denomOut: "",
    denomIn: ""
  };
}
export const QueryOutRouteByDenomRequest = {
  typeUrl: "/elys.amm.QueryOutRouteByDenomRequest",
  encode(message: QueryOutRouteByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomOut !== "") {
      writer.uint32(10).string(message.denomOut);
    }
    if (message.denomIn !== "") {
      writer.uint32(18).string(message.denomIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOutRouteByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutRouteByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomOut = reader.string();
          break;
        case 2:
          message.denomIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOutRouteByDenomRequest>): QueryOutRouteByDenomRequest {
    const message = createBaseQueryOutRouteByDenomRequest();
    message.denomOut = object.denomOut ?? "";
    message.denomIn = object.denomIn ?? "";
    return message;
  },
  fromAmino(object: QueryOutRouteByDenomRequestAmino): QueryOutRouteByDenomRequest {
    const message = createBaseQueryOutRouteByDenomRequest();
    if (object.denom_out !== undefined && object.denom_out !== null) {
      message.denomOut = object.denom_out;
    }
    if (object.denom_in !== undefined && object.denom_in !== null) {
      message.denomIn = object.denom_in;
    }
    return message;
  },
  toAmino(message: QueryOutRouteByDenomRequest): QueryOutRouteByDenomRequestAmino {
    const obj: any = {};
    obj.denom_out = message.denomOut === "" ? undefined : message.denomOut;
    obj.denom_in = message.denomIn === "" ? undefined : message.denomIn;
    return obj;
  },
  fromAminoMsg(object: QueryOutRouteByDenomRequestAminoMsg): QueryOutRouteByDenomRequest {
    return QueryOutRouteByDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutRouteByDenomRequestProtoMsg): QueryOutRouteByDenomRequest {
    return QueryOutRouteByDenomRequest.decode(message.value);
  },
  toProto(message: QueryOutRouteByDenomRequest): Uint8Array {
    return QueryOutRouteByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOutRouteByDenomRequest): QueryOutRouteByDenomRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryOutRouteByDenomRequest",
      value: QueryOutRouteByDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOutRouteByDenomResponse(): QueryOutRouteByDenomResponse {
  return {
    outRoute: []
  };
}
export const QueryOutRouteByDenomResponse = {
  typeUrl: "/elys.amm.QueryOutRouteByDenomResponse",
  encode(message: QueryOutRouteByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.outRoute) {
      SwapAmountOutRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOutRouteByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutRouteByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outRoute.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOutRouteByDenomResponse>): QueryOutRouteByDenomResponse {
    const message = createBaseQueryOutRouteByDenomResponse();
    message.outRoute = object.outRoute?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryOutRouteByDenomResponseAmino): QueryOutRouteByDenomResponse {
    const message = createBaseQueryOutRouteByDenomResponse();
    message.outRoute = object.out_route?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryOutRouteByDenomResponse): QueryOutRouteByDenomResponseAmino {
    const obj: any = {};
    if (message.outRoute) {
      obj.out_route = message.outRoute.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.out_route = message.outRoute;
    }
    return obj;
  },
  fromAminoMsg(object: QueryOutRouteByDenomResponseAminoMsg): QueryOutRouteByDenomResponse {
    return QueryOutRouteByDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutRouteByDenomResponseProtoMsg): QueryOutRouteByDenomResponse {
    return QueryOutRouteByDenomResponse.decode(message.value);
  },
  toProto(message: QueryOutRouteByDenomResponse): Uint8Array {
    return QueryOutRouteByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOutRouteByDenomResponse): QueryOutRouteByDenomResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryOutRouteByDenomResponse",
      value: QueryOutRouteByDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySwapEstimationByDenomRequest(): QuerySwapEstimationByDenomRequest {
  return {
    amount: Coin.fromPartial({}),
    denomIn: "",
    denomOut: "",
    address: ""
  };
}
export const QuerySwapEstimationByDenomRequest = {
  typeUrl: "/elys.amm.QuerySwapEstimationByDenomRequest",
  encode(message: QuerySwapEstimationByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.denomIn !== "") {
      writer.uint32(18).string(message.denomIn);
    }
    if (message.denomOut !== "") {
      writer.uint32(26).string(message.denomOut);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapEstimationByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapEstimationByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.denomIn = reader.string();
          break;
        case 3:
          message.denomOut = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySwapEstimationByDenomRequest>): QuerySwapEstimationByDenomRequest {
    const message = createBaseQuerySwapEstimationByDenomRequest();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.denomIn = object.denomIn ?? "";
    message.denomOut = object.denomOut ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QuerySwapEstimationByDenomRequestAmino): QuerySwapEstimationByDenomRequest {
    const message = createBaseQuerySwapEstimationByDenomRequest();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.denom_in !== undefined && object.denom_in !== null) {
      message.denomIn = object.denom_in;
    }
    if (object.denom_out !== undefined && object.denom_out !== null) {
      message.denomOut = object.denom_out;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QuerySwapEstimationByDenomRequest): QuerySwapEstimationByDenomRequestAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.denom_in = message.denomIn === "" ? undefined : message.denomIn;
    obj.denom_out = message.denomOut === "" ? undefined : message.denomOut;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QuerySwapEstimationByDenomRequestAminoMsg): QuerySwapEstimationByDenomRequest {
    return QuerySwapEstimationByDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapEstimationByDenomRequestProtoMsg): QuerySwapEstimationByDenomRequest {
    return QuerySwapEstimationByDenomRequest.decode(message.value);
  },
  toProto(message: QuerySwapEstimationByDenomRequest): Uint8Array {
    return QuerySwapEstimationByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapEstimationByDenomRequest): QuerySwapEstimationByDenomRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySwapEstimationByDenomRequest",
      value: QuerySwapEstimationByDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySwapEstimationByDenomResponse(): QuerySwapEstimationByDenomResponse {
  return {
    inRoute: [],
    outRoute: [],
    spotPrice: "",
    amount: Coin.fromPartial({}),
    swapFee: "",
    discount: "",
    availableLiquidity: Coin.fromPartial({}),
    weightBalanceRatio: "",
    slippage: "",
    priceImpact: ""
  };
}
export const QuerySwapEstimationByDenomResponse = {
  typeUrl: "/elys.amm.QuerySwapEstimationByDenomResponse",
  encode(message: QuerySwapEstimationByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.inRoute) {
      SwapAmountInRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outRoute) {
      SwapAmountOutRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.spotPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.spotPrice, 18).atomics);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    if (message.swapFee !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.discount !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.discount, 18).atomics);
    }
    if (message.availableLiquidity !== undefined) {
      Coin.encode(message.availableLiquidity, writer.uint32(58).fork()).ldelim();
    }
    if (message.weightBalanceRatio !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.weightBalanceRatio, 18).atomics);
    }
    if (message.slippage !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.slippage, 18).atomics);
    }
    if (message.priceImpact !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.priceImpact, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapEstimationByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapEstimationByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inRoute.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        case 2:
          message.outRoute.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.spotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.availableLiquidity = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.weightBalanceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.slippage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.priceImpact = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySwapEstimationByDenomResponse>): QuerySwapEstimationByDenomResponse {
    const message = createBaseQuerySwapEstimationByDenomResponse();
    message.inRoute = object.inRoute?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    message.outRoute = object.outRoute?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.spotPrice = object.spotPrice ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.swapFee = object.swapFee ?? "";
    message.discount = object.discount ?? "";
    message.availableLiquidity = object.availableLiquidity !== undefined && object.availableLiquidity !== null ? Coin.fromPartial(object.availableLiquidity) : undefined;
    message.weightBalanceRatio = object.weightBalanceRatio ?? "";
    message.slippage = object.slippage ?? "";
    message.priceImpact = object.priceImpact ?? "";
    return message;
  },
  fromAmino(object: QuerySwapEstimationByDenomResponseAmino): QuerySwapEstimationByDenomResponse {
    const message = createBaseQuerySwapEstimationByDenomResponse();
    message.inRoute = object.in_route?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
    message.outRoute = object.out_route?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    if (object.discount !== undefined && object.discount !== null) {
      message.discount = object.discount;
    }
    if (object.available_liquidity !== undefined && object.available_liquidity !== null) {
      message.availableLiquidity = Coin.fromAmino(object.available_liquidity);
    }
    if (object.weight_balance_ratio !== undefined && object.weight_balance_ratio !== null) {
      message.weightBalanceRatio = object.weight_balance_ratio;
    }
    if (object.slippage !== undefined && object.slippage !== null) {
      message.slippage = object.slippage;
    }
    if (object.price_impact !== undefined && object.price_impact !== null) {
      message.priceImpact = object.price_impact;
    }
    return message;
  },
  toAmino(message: QuerySwapEstimationByDenomResponse): QuerySwapEstimationByDenomResponseAmino {
    const obj: any = {};
    if (message.inRoute) {
      obj.in_route = message.inRoute.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.in_route = message.inRoute;
    }
    if (message.outRoute) {
      obj.out_route = message.outRoute.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.out_route = message.outRoute;
    }
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    obj.discount = message.discount === "" ? undefined : message.discount;
    obj.available_liquidity = message.availableLiquidity ? Coin.toAmino(message.availableLiquidity) : undefined;
    obj.weight_balance_ratio = message.weightBalanceRatio === "" ? undefined : message.weightBalanceRatio;
    obj.slippage = message.slippage === "" ? undefined : message.slippage;
    obj.price_impact = message.priceImpact === "" ? undefined : message.priceImpact;
    return obj;
  },
  fromAminoMsg(object: QuerySwapEstimationByDenomResponseAminoMsg): QuerySwapEstimationByDenomResponse {
    return QuerySwapEstimationByDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapEstimationByDenomResponseProtoMsg): QuerySwapEstimationByDenomResponse {
    return QuerySwapEstimationByDenomResponse.decode(message.value);
  },
  toProto(message: QuerySwapEstimationByDenomResponse): Uint8Array {
    return QuerySwapEstimationByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapEstimationByDenomResponse): QuerySwapEstimationByDenomResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySwapEstimationByDenomResponse",
      value: QuerySwapEstimationByDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAMMPriceRequest(): QueryAMMPriceRequest {
  return {
    tokenIn: Coin.fromPartial({}),
    discount: ""
  };
}
export const QueryAMMPriceRequest = {
  typeUrl: "/elys.amm.QueryAMMPriceRequest",
  encode(message: QueryAMMPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.discount !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.discount, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAMMPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAMMPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAMMPriceRequest>): QueryAMMPriceRequest {
    const message = createBaseQueryAMMPriceRequest();
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
    message.discount = object.discount ?? "";
    return message;
  },
  fromAmino(object: QueryAMMPriceRequestAmino): QueryAMMPriceRequest {
    const message = createBaseQueryAMMPriceRequest();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = Coin.fromAmino(object.token_in);
    }
    if (object.discount !== undefined && object.discount !== null) {
      message.discount = object.discount;
    }
    return message;
  },
  toAmino(message: QueryAMMPriceRequest): QueryAMMPriceRequestAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
    obj.discount = message.discount === "" ? undefined : message.discount;
    return obj;
  },
  fromAminoMsg(object: QueryAMMPriceRequestAminoMsg): QueryAMMPriceRequest {
    return QueryAMMPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAMMPriceRequestProtoMsg): QueryAMMPriceRequest {
    return QueryAMMPriceRequest.decode(message.value);
  },
  toProto(message: QueryAMMPriceRequest): Uint8Array {
    return QueryAMMPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAMMPriceRequest): QueryAMMPriceRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryAMMPriceRequest",
      value: QueryAMMPriceRequest.encode(message).finish()
    };
  }
};