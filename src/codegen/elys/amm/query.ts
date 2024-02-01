import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./swap_route";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType, OraclePoolSlippageTrack, OraclePoolSlippageTrackAmino, OraclePoolSlippageTrackSDKType } from "./pool";
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
  pool_id: string;
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
}
export interface QueryGetPoolResponseProtoMsg {
  typeUrl: "/elys.amm.QueryGetPoolResponse";
  value: Uint8Array;
}
export interface QueryGetPoolResponseAmino {
  pool?: PoolAmino;
}
export interface QueryGetPoolResponseAminoMsg {
  type: "/elys.amm.QueryGetPoolResponse";
  value: QueryGetPoolResponseAmino;
}
export interface QueryGetPoolResponseSDKType {
  pool: PoolSDKType;
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
  pagination?: PageResponse;
}
export interface QueryAllPoolResponseProtoMsg {
  typeUrl: "/elys.amm.QueryAllPoolResponse";
  value: Uint8Array;
}
export interface QueryAllPoolResponseAmino {
  pool: PoolAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPoolResponseAminoMsg {
  type: "/elys.amm.QueryAllPoolResponse";
  value: QueryAllPoolResponseAmino;
}
export interface QueryAllPoolResponseSDKType {
  pool: PoolSDKType[];
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
  denom: string;
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
  denom_liquidity: DenomLiquidityAmino[];
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
  routes: SwapAmountInRouteAmino[];
  token_in?: CoinAmino;
  discount: string;
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
export interface QuerySwapEstimationResponse {
  spotPrice: string;
  tokenOut: Coin;
  swapFee: string;
  discount: string;
  availableLiquidity: Coin;
  weightBalanceRatio: string;
}
export interface QuerySwapEstimationResponseProtoMsg {
  typeUrl: "/elys.amm.QuerySwapEstimationResponse";
  value: Uint8Array;
}
export interface QuerySwapEstimationResponseAmino {
  spot_price: string;
  token_out?: CoinAmino;
  swap_fee: string;
  discount: string;
  available_liquidity?: CoinAmino;
  weight_balance_ratio: string;
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
  pool_id: string;
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
  tracks: OraclePoolSlippageTrackAmino[];
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
  address: string;
  denom: string;
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
  denom_in: string;
  denom_out: string;
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
  in_route: SwapAmountInRouteAmino[];
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
  denom_out: string;
  denom_in: string;
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
  out_route: SwapAmountOutRouteAmino[];
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
  discount: string;
}
export interface QuerySwapEstimationByDenomRequestProtoMsg {
  typeUrl: "/elys.amm.QuerySwapEstimationByDenomRequest";
  value: Uint8Array;
}
export interface QuerySwapEstimationByDenomRequestAmino {
  amount?: CoinAmino;
  denom_in: string;
  denom_out: string;
  discount: string;
}
export interface QuerySwapEstimationByDenomRequestAminoMsg {
  type: "/elys.amm.QuerySwapEstimationByDenomRequest";
  value: QuerySwapEstimationByDenomRequestAmino;
}
export interface QuerySwapEstimationByDenomRequestSDKType {
  amount: CoinSDKType;
  denom_in: string;
  denom_out: string;
  discount: string;
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
  priceImpact: string;
}
export interface QuerySwapEstimationByDenomResponseProtoMsg {
  typeUrl: "/elys.amm.QuerySwapEstimationByDenomResponse";
  value: Uint8Array;
}
export interface QuerySwapEstimationByDenomResponseAmino {
  in_route: SwapAmountInRouteAmino[];
  out_route: SwapAmountOutRouteAmino[];
  spot_price: string;
  amount?: CoinAmino;
  swap_fee: string;
  discount: string;
  available_liquidity?: CoinAmino;
  weight_balance_ratio: string;
  price_impact: string;
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
  discount: string;
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
    return {};
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
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
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
    return {
      poolId: BigInt(object.pool_id)
    };
  },
  toAmino(message: QueryGetPoolRequest): QueryGetPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
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
    pool: Pool.fromPartial({})
  };
}
export const QueryGetPoolResponse = {
  typeUrl: "/elys.amm.QueryGetPoolResponse",
  encode(message: QueryGetPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
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
    return message;
  },
  fromAmino(object: QueryGetPoolResponseAmino): QueryGetPoolResponse {
    return {
      pool: object?.pool ? Pool.fromAmino(object.pool) : undefined
    };
  },
  toAmino(message: QueryGetPoolResponse): QueryGetPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
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
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
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
    pagination: undefined
  };
}
export const QueryAllPoolResponse = {
  typeUrl: "/elys.amm.QueryAllPoolResponse",
  encode(message: QueryAllPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolResponseAmino): QueryAllPoolResponse {
    return {
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => Pool.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllPoolResponse): QueryAllPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pool = [];
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
    return {
      denom: object.denom
    };
  },
  toAmino(message: QueryGetDenomLiquidityRequest): QueryGetDenomLiquidityRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
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
    return {
      denomLiquidity: object?.denom_liquidity ? DenomLiquidity.fromAmino(object.denom_liquidity) : undefined
    };
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
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
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
    return {
      denomLiquidity: Array.isArray(object?.denom_liquidity) ? object.denom_liquidity.map((e: any) => DenomLiquidity.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllDenomLiquidityResponse): QueryAllDenomLiquidityResponseAmino {
    const obj: any = {};
    if (message.denomLiquidity) {
      obj.denom_liquidity = message.denomLiquidity.map(e => e ? DenomLiquidity.toAmino(e) : undefined);
    } else {
      obj.denom_liquidity = [];
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
    return {
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromAmino(e)) : [],
      tokenIn: object?.token_in ? Coin.fromAmino(object.token_in) : undefined,
      discount: object.discount
    };
  },
  toAmino(message: QuerySwapEstimationRequest): QuerySwapEstimationRequestAmino {
    const obj: any = {};
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
    obj.discount = message.discount;
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
function createBaseQuerySwapEstimationResponse(): QuerySwapEstimationResponse {
  return {
    spotPrice: "",
    tokenOut: Coin.fromPartial({}),
    swapFee: "",
    discount: "",
    availableLiquidity: Coin.fromPartial({}),
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
    if (message.weightBalanceRatio !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.weightBalanceRatio, 18).atomics);
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
    message.weightBalanceRatio = object.weightBalanceRatio ?? "";
    return message;
  },
  fromAmino(object: QuerySwapEstimationResponseAmino): QuerySwapEstimationResponse {
    return {
      spotPrice: object.spot_price,
      tokenOut: object?.token_out ? Coin.fromAmino(object.token_out) : undefined,
      swapFee: object.swap_fee,
      discount: object.discount,
      availableLiquidity: object?.available_liquidity ? Coin.fromAmino(object.available_liquidity) : undefined,
      weightBalanceRatio: object.weight_balance_ratio
    };
  },
  toAmino(message: QuerySwapEstimationResponse): QuerySwapEstimationResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spotPrice;
    obj.token_out = message.tokenOut ? Coin.toAmino(message.tokenOut) : undefined;
    obj.swap_fee = message.swapFee;
    obj.discount = message.discount;
    obj.available_liquidity = message.availableLiquidity ? Coin.toAmino(message.availableLiquidity) : undefined;
    obj.weight_balance_ratio = message.weightBalanceRatio;
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
    return {
      poolId: BigInt(object.pool_id)
    };
  },
  toAmino(message: QuerySlippageTrackRequest): QuerySlippageTrackRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
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
    return {
      track: object?.track ? OraclePoolSlippageTrack.fromAmino(object.track) : undefined
    };
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
    return {};
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
    return {
      tracks: Array.isArray(object?.tracks) ? object.tracks.map((e: any) => OraclePoolSlippageTrack.fromAmino(e)) : []
    };
  },
  toAmino(message: QuerySlippageTrackAllResponse): QuerySlippageTrackAllResponseAmino {
    const obj: any = {};
    if (message.tracks) {
      obj.tracks = message.tracks.map(e => e ? OraclePoolSlippageTrack.toAmino(e) : undefined);
    } else {
      obj.tracks = [];
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
    return {
      address: object.address,
      denom: object.denom
    };
  },
  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.denom = message.denom;
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
    return {
      balance: object?.balance ? Coin.fromAmino(object.balance) : undefined
    };
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
    return {
      denomIn: object.denom_in,
      denomOut: object.denom_out
    };
  },
  toAmino(message: QueryInRouteByDenomRequest): QueryInRouteByDenomRequestAmino {
    const obj: any = {};
    obj.denom_in = message.denomIn;
    obj.denom_out = message.denomOut;
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
    return {
      inRoute: Array.isArray(object?.in_route) ? object.in_route.map((e: any) => SwapAmountInRoute.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryInRouteByDenomResponse): QueryInRouteByDenomResponseAmino {
    const obj: any = {};
    if (message.inRoute) {
      obj.in_route = message.inRoute.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.in_route = [];
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
    return {
      denomOut: object.denom_out,
      denomIn: object.denom_in
    };
  },
  toAmino(message: QueryOutRouteByDenomRequest): QueryOutRouteByDenomRequestAmino {
    const obj: any = {};
    obj.denom_out = message.denomOut;
    obj.denom_in = message.denomIn;
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
    return {
      outRoute: Array.isArray(object?.out_route) ? object.out_route.map((e: any) => SwapAmountOutRoute.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryOutRouteByDenomResponse): QueryOutRouteByDenomResponseAmino {
    const obj: any = {};
    if (message.outRoute) {
      obj.out_route = message.outRoute.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.out_route = [];
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
    discount: ""
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
    if (message.discount !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.discount, 18).atomics);
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
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
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
    message.discount = object.discount ?? "";
    return message;
  },
  fromAmino(object: QuerySwapEstimationByDenomRequestAmino): QuerySwapEstimationByDenomRequest {
    return {
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      denomIn: object.denom_in,
      denomOut: object.denom_out,
      discount: object.discount
    };
  },
  toAmino(message: QuerySwapEstimationByDenomRequest): QuerySwapEstimationByDenomRequestAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.denom_in = message.denomIn;
    obj.denom_out = message.denomOut;
    obj.discount = message.discount;
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
    if (message.priceImpact !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.priceImpact, 18).atomics);
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
    message.priceImpact = object.priceImpact ?? "";
    return message;
  },
  fromAmino(object: QuerySwapEstimationByDenomResponseAmino): QuerySwapEstimationByDenomResponse {
    return {
      inRoute: Array.isArray(object?.in_route) ? object.in_route.map((e: any) => SwapAmountInRoute.fromAmino(e)) : [],
      outRoute: Array.isArray(object?.out_route) ? object.out_route.map((e: any) => SwapAmountOutRoute.fromAmino(e)) : [],
      spotPrice: object.spot_price,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      swapFee: object.swap_fee,
      discount: object.discount,
      availableLiquidity: object?.available_liquidity ? Coin.fromAmino(object.available_liquidity) : undefined,
      weightBalanceRatio: object.weight_balance_ratio,
      priceImpact: object.price_impact
    };
  },
  toAmino(message: QuerySwapEstimationByDenomResponse): QuerySwapEstimationByDenomResponseAmino {
    const obj: any = {};
    if (message.inRoute) {
      obj.in_route = message.inRoute.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.in_route = [];
    }
    if (message.outRoute) {
      obj.out_route = message.outRoute.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.out_route = [];
    }
    obj.spot_price = message.spotPrice;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.swap_fee = message.swapFee;
    obj.discount = message.discount;
    obj.available_liquidity = message.availableLiquidity ? Coin.toAmino(message.availableLiquidity) : undefined;
    obj.weight_balance_ratio = message.weightBalanceRatio;
    obj.price_impact = message.priceImpact;
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
    return {
      tokenIn: object?.token_in ? Coin.fromAmino(object.token_in) : undefined,
      discount: object.discount
    };
  },
  toAmino(message: QueryAMMPriceRequest): QueryAMMPriceRequestAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
    obj.discount = message.discount;
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