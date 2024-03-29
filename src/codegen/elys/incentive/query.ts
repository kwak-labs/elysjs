import { EarnType, earnTypeFromJSON } from "../commitment/params";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/elys.incentive.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/elys.incentive.QueryParamsRequest";
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
  typeUrl: "/elys.incentive.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/elys.incentive.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryCommunityPoolRequest {}
export interface QueryCommunityPoolRequestProtoMsg {
  typeUrl: "/elys.incentive.QueryCommunityPoolRequest";
  value: Uint8Array;
}
export interface QueryCommunityPoolRequestAmino {}
export interface QueryCommunityPoolRequestAminoMsg {
  type: "/elys.incentive.QueryCommunityPoolRequest";
  value: QueryCommunityPoolRequestAmino;
}
export interface QueryCommunityPoolRequestSDKType {}
export interface QueryCommunityPoolResponse {
  /** pool defines community pool's coins. */
  pool: DecCoin[];
}
export interface QueryCommunityPoolResponseProtoMsg {
  typeUrl: "/elys.incentive.QueryCommunityPoolResponse";
  value: Uint8Array;
}
export interface QueryCommunityPoolResponseAmino {
  /** pool defines community pool's coins. */
  pool: DecCoinAmino[];
}
export interface QueryCommunityPoolResponseAminoMsg {
  type: "/elys.incentive.QueryCommunityPoolResponse";
  value: QueryCommunityPoolResponseAmino;
}
export interface QueryCommunityPoolResponseSDKType {
  pool: DecCoinSDKType[];
}
export interface QueryAprRequest {
  withdrawType: EarnType;
  denom: string;
}
export interface QueryAprRequestProtoMsg {
  typeUrl: "/elys.incentive.QueryAprRequest";
  value: Uint8Array;
}
export interface QueryAprRequestAmino {
  withdraw_type: EarnType;
  denom: string;
}
export interface QueryAprRequestAminoMsg {
  type: "/elys.incentive.QueryAprRequest";
  value: QueryAprRequestAmino;
}
export interface QueryAprRequestSDKType {
  withdraw_type: EarnType;
  denom: string;
}
export interface QueryAprResponse {
  apr: string;
}
export interface QueryAprResponseProtoMsg {
  typeUrl: "/elys.incentive.QueryAprResponse";
  value: Uint8Array;
}
export interface QueryAprResponseAmino {
  apr: string;
}
export interface QueryAprResponseAminoMsg {
  type: "/elys.incentive.QueryAprResponse";
  value: QueryAprResponseAmino;
}
export interface QueryAprResponseSDKType {
  apr: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/elys.incentive.QueryParamsRequest",
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
      typeUrl: "/elys.incentive.QueryParamsRequest",
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
  typeUrl: "/elys.incentive.QueryParamsResponse",
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
      typeUrl: "/elys.incentive.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCommunityPoolRequest(): QueryCommunityPoolRequest {
  return {};
}
export const QueryCommunityPoolRequest = {
  typeUrl: "/elys.incentive.QueryCommunityPoolRequest",
  encode(_: QueryCommunityPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommunityPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolRequest();
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
  fromPartial(_: Partial<QueryCommunityPoolRequest>): QueryCommunityPoolRequest {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
  fromAmino(_: QueryCommunityPoolRequestAmino): QueryCommunityPoolRequest {
    return {};
  },
  toAmino(_: QueryCommunityPoolRequest): QueryCommunityPoolRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCommunityPoolRequestAminoMsg): QueryCommunityPoolRequest {
    return QueryCommunityPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommunityPoolRequestProtoMsg): QueryCommunityPoolRequest {
    return QueryCommunityPoolRequest.decode(message.value);
  },
  toProto(message: QueryCommunityPoolRequest): Uint8Array {
    return QueryCommunityPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCommunityPoolRequest): QueryCommunityPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.incentive.QueryCommunityPoolRequest",
      value: QueryCommunityPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCommunityPoolResponse(): QueryCommunityPoolResponse {
  return {
    pool: []
  };
}
export const QueryCommunityPoolResponse = {
  typeUrl: "/elys.incentive.QueryCommunityPoolResponse",
  encode(message: QueryCommunityPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommunityPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCommunityPoolResponse>): QueryCommunityPoolResponse {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCommunityPoolResponseAmino): QueryCommunityPoolResponse {
    return {
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.pool = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryCommunityPoolResponseAminoMsg): QueryCommunityPoolResponse {
    return QueryCommunityPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommunityPoolResponseProtoMsg): QueryCommunityPoolResponse {
    return QueryCommunityPoolResponse.decode(message.value);
  },
  toProto(message: QueryCommunityPoolResponse): Uint8Array {
    return QueryCommunityPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.incentive.QueryCommunityPoolResponse",
      value: QueryCommunityPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAprRequest(): QueryAprRequest {
  return {
    withdrawType: 0,
    denom: ""
  };
}
export const QueryAprRequest = {
  typeUrl: "/elys.incentive.QueryAprRequest",
  encode(message: QueryAprRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withdrawType !== 0) {
      writer.uint32(8).int32(message.withdrawType);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAprRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAprRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawType = (reader.int32() as any);
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
  fromPartial(object: Partial<QueryAprRequest>): QueryAprRequest {
    const message = createBaseQueryAprRequest();
    message.withdrawType = object.withdrawType ?? 0;
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryAprRequestAmino): QueryAprRequest {
    return {
      withdrawType: isSet(object.withdraw_type) ? earnTypeFromJSON(object.withdraw_type) : -1,
      denom: object.denom
    };
  },
  toAmino(message: QueryAprRequest): QueryAprRequestAmino {
    const obj: any = {};
    obj.withdraw_type = message.withdrawType;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryAprRequestAminoMsg): QueryAprRequest {
    return QueryAprRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAprRequestProtoMsg): QueryAprRequest {
    return QueryAprRequest.decode(message.value);
  },
  toProto(message: QueryAprRequest): Uint8Array {
    return QueryAprRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAprRequest): QueryAprRequestProtoMsg {
    return {
      typeUrl: "/elys.incentive.QueryAprRequest",
      value: QueryAprRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAprResponse(): QueryAprResponse {
  return {
    apr: ""
  };
}
export const QueryAprResponse = {
  typeUrl: "/elys.incentive.QueryAprResponse",
  encode(message: QueryAprResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.apr !== "") {
      writer.uint32(10).string(message.apr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAprResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAprResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAprResponse>): QueryAprResponse {
    const message = createBaseQueryAprResponse();
    message.apr = object.apr ?? "";
    return message;
  },
  fromAmino(object: QueryAprResponseAmino): QueryAprResponse {
    return {
      apr: object.apr
    };
  },
  toAmino(message: QueryAprResponse): QueryAprResponseAmino {
    const obj: any = {};
    obj.apr = message.apr;
    return obj;
  },
  fromAminoMsg(object: QueryAprResponseAminoMsg): QueryAprResponse {
    return QueryAprResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAprResponseProtoMsg): QueryAprResponse {
    return QueryAprResponse.decode(message.value);
  },
  toProto(message: QueryAprResponse): Uint8Array {
    return QueryAprResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAprResponse): QueryAprResponseProtoMsg {
    return {
      typeUrl: "/elys.incentive.QueryAprResponse",
      value: QueryAprResponse.encode(message).finish()
    };
  }
};