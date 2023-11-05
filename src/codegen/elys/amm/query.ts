import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType } from "./swap_route";
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
  poolId: string;
}
export interface QueryGetPoolRequestAminoMsg {
  type: "/elys.amm.QueryGetPoolRequest";
  value: QueryGetPoolRequestAmino;
}
export interface QueryGetPoolRequestSDKType {
  poolId: bigint;
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
  denomLiquidity?: DenomLiquidityAmino;
}
export interface QueryGetDenomLiquidityResponseAminoMsg {
  type: "/elys.amm.QueryGetDenomLiquidityResponse";
  value: QueryGetDenomLiquidityResponseAmino;
}
export interface QueryGetDenomLiquidityResponseSDKType {
  denomLiquidity: DenomLiquiditySDKType;
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
  denomLiquidity: DenomLiquidityAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllDenomLiquidityResponseAminoMsg {
  type: "/elys.amm.QueryAllDenomLiquidityResponse";
  value: QueryAllDenomLiquidityResponseAmino;
}
export interface QueryAllDenomLiquidityResponseSDKType {
  denomLiquidity: DenomLiquiditySDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySwapEstimationRequest {
  routes: SwapAmountInRoute[];
  tokenIn: Coin;
}
export interface QuerySwapEstimationRequestProtoMsg {
  typeUrl: "/elys.amm.QuerySwapEstimationRequest";
  value: Uint8Array;
}
export interface QuerySwapEstimationRequestAmino {
  routes: SwapAmountInRouteAmino[];
  tokenIn?: CoinAmino;
}
export interface QuerySwapEstimationRequestAminoMsg {
  type: "/elys.amm.QuerySwapEstimationRequest";
  value: QuerySwapEstimationRequestAmino;
}
export interface QuerySwapEstimationRequestSDKType {
  routes: SwapAmountInRouteSDKType[];
  tokenIn: CoinSDKType;
}
export interface QuerySwapEstimationResponse {
  spotPrice: string;
  tokenOut: Coin;
}
export interface QuerySwapEstimationResponseProtoMsg {
  typeUrl: "/elys.amm.QuerySwapEstimationResponse";
  value: Uint8Array;
}
export interface QuerySwapEstimationResponseAmino {
  spotPrice: string;
  tokenOut?: CoinAmino;
}
export interface QuerySwapEstimationResponseAminoMsg {
  type: "/elys.amm.QuerySwapEstimationResponse";
  value: QuerySwapEstimationResponseAmino;
}
export interface QuerySwapEstimationResponseSDKType {
  spotPrice: string;
  tokenOut: CoinSDKType;
}
export interface QuerySlippageTrackRequest {
  poolId: bigint;
}
export interface QuerySlippageTrackRequestProtoMsg {
  typeUrl: "/elys.amm.QuerySlippageTrackRequest";
  value: Uint8Array;
}
export interface QuerySlippageTrackRequestAmino {
  poolId: string;
}
export interface QuerySlippageTrackRequestAminoMsg {
  type: "/elys.amm.QuerySlippageTrackRequest";
  value: QuerySlippageTrackRequestAmino;
}
export interface QuerySlippageTrackRequestSDKType {
  poolId: bigint;
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
      poolId: BigInt(object.poolId)
    };
  },
  toAmino(message: QueryGetPoolRequest): QueryGetPoolRequestAmino {
    const obj: any = {};
    obj.poolId = message.poolId ? message.poolId.toString() : undefined;
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
      denomLiquidity: object?.denomLiquidity ? DenomLiquidity.fromAmino(object.denomLiquidity) : undefined
    };
  },
  toAmino(message: QueryGetDenomLiquidityResponse): QueryGetDenomLiquidityResponseAmino {
    const obj: any = {};
    obj.denomLiquidity = message.denomLiquidity ? DenomLiquidity.toAmino(message.denomLiquidity) : undefined;
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
      denomLiquidity: Array.isArray(object?.denomLiquidity) ? object.denomLiquidity.map((e: any) => DenomLiquidity.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllDenomLiquidityResponse): QueryAllDenomLiquidityResponseAmino {
    const obj: any = {};
    if (message.denomLiquidity) {
      obj.denomLiquidity = message.denomLiquidity.map(e => e ? DenomLiquidity.toAmino(e) : undefined);
    } else {
      obj.denomLiquidity = [];
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
    tokenIn: Coin.fromPartial({})
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
    return message;
  },
  fromAmino(object: QuerySwapEstimationRequestAmino): QuerySwapEstimationRequest {
    return {
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromAmino(e)) : [],
      tokenIn: object?.tokenIn ? Coin.fromAmino(object.tokenIn) : undefined
    };
  },
  toAmino(message: QuerySwapEstimationRequest): QuerySwapEstimationRequestAmino {
    const obj: any = {};
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.tokenIn = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
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
    tokenOut: Coin.fromPartial({})
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
    return message;
  },
  fromAmino(object: QuerySwapEstimationResponseAmino): QuerySwapEstimationResponse {
    return {
      spotPrice: object.spotPrice,
      tokenOut: object?.tokenOut ? Coin.fromAmino(object.tokenOut) : undefined
    };
  },
  toAmino(message: QuerySwapEstimationResponse): QuerySwapEstimationResponseAmino {
    const obj: any = {};
    obj.spotPrice = message.spotPrice;
    obj.tokenOut = message.tokenOut ? Coin.toAmino(message.tokenOut) : undefined;
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
      poolId: BigInt(object.poolId)
    };
  },
  toAmino(message: QuerySlippageTrackRequest): QuerySlippageTrackRequestAmino {
    const obj: any = {};
    obj.poolId = message.poolId ? message.poolId.toString() : undefined;
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