import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Position, PositionAmino, PositionSDKType } from "./types";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { BinaryReader, BinaryWriter } from "../../binary";
/** ParamsRequest is request type for the Query/Params RPC method. */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/elys.leveragelp.ParamsRequest";
  value: Uint8Array;
}
/** ParamsRequest is request type for the Query/Params RPC method. */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "/elys.leveragelp.ParamsRequest";
  value: ParamsRequestAmino;
}
/** ParamsRequest is request type for the Query/Params RPC method. */
export interface ParamsRequestSDKType {}
/** ParamsResponse is response type for the Query/Params RPC method. */
export interface ParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/elys.leveragelp.ParamsResponse";
  value: Uint8Array;
}
/** ParamsResponse is response type for the Query/Params RPC method. */
export interface ParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "/elys.leveragelp.ParamsResponse";
  value: ParamsResponseAmino;
}
/** ParamsResponse is response type for the Query/Params RPC method. */
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface PositionsRequest {
  pagination?: PageRequest;
}
export interface PositionsRequestProtoMsg {
  typeUrl: "/elys.leveragelp.PositionsRequest";
  value: Uint8Array;
}
export interface PositionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface PositionsRequestAminoMsg {
  type: "/elys.leveragelp.PositionsRequest";
  value: PositionsRequestAmino;
}
export interface PositionsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface PositionsResponse {
  positions: Position[];
  pagination?: PageResponse;
}
export interface PositionsResponseProtoMsg {
  typeUrl: "/elys.leveragelp.PositionsResponse";
  value: Uint8Array;
}
export interface PositionsResponseAmino {
  positions: PositionAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsResponseAminoMsg {
  type: "/elys.leveragelp.PositionsResponse";
  value: PositionsResponseAmino;
}
export interface PositionsResponseSDKType {
  positions: PositionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface PositionsByPoolRequest {
  ammPoolId: bigint;
  pagination?: PageRequest;
}
export interface PositionsByPoolRequestProtoMsg {
  typeUrl: "/elys.leveragelp.PositionsByPoolRequest";
  value: Uint8Array;
}
export interface PositionsByPoolRequestAmino {
  amm_pool_id: string;
  pagination?: PageRequestAmino;
}
export interface PositionsByPoolRequestAminoMsg {
  type: "/elys.leveragelp.PositionsByPoolRequest";
  value: PositionsByPoolRequestAmino;
}
export interface PositionsByPoolRequestSDKType {
  amm_pool_id: bigint;
  pagination?: PageRequestSDKType;
}
export interface PositionsByPoolResponse {
  positions: Position[];
  pagination?: PageResponse;
}
export interface PositionsByPoolResponseProtoMsg {
  typeUrl: "/elys.leveragelp.PositionsByPoolResponse";
  value: Uint8Array;
}
export interface PositionsByPoolResponseAmino {
  positions: PositionAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsByPoolResponseAminoMsg {
  type: "/elys.leveragelp.PositionsByPoolResponse";
  value: PositionsByPoolResponseAmino;
}
export interface PositionsByPoolResponseSDKType {
  positions: PositionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface StatusRequest {}
export interface StatusRequestProtoMsg {
  typeUrl: "/elys.leveragelp.StatusRequest";
  value: Uint8Array;
}
export interface StatusRequestAmino {}
export interface StatusRequestAminoMsg {
  type: "/elys.leveragelp.StatusRequest";
  value: StatusRequestAmino;
}
export interface StatusRequestSDKType {}
export interface StatusResponse {
  openPositionCount: bigint;
  lifetimePositionCount: bigint;
}
export interface StatusResponseProtoMsg {
  typeUrl: "/elys.leveragelp.StatusResponse";
  value: Uint8Array;
}
export interface StatusResponseAmino {
  open_position_count: string;
  lifetime_position_count: string;
}
export interface StatusResponseAminoMsg {
  type: "/elys.leveragelp.StatusResponse";
  value: StatusResponseAmino;
}
export interface StatusResponseSDKType {
  open_position_count: bigint;
  lifetime_position_count: bigint;
}
export interface PositionsForAddressRequest {
  address: string;
  pagination?: PageRequest;
}
export interface PositionsForAddressRequestProtoMsg {
  typeUrl: "/elys.leveragelp.PositionsForAddressRequest";
  value: Uint8Array;
}
export interface PositionsForAddressRequestAmino {
  address: string;
  pagination?: PageRequestAmino;
}
export interface PositionsForAddressRequestAminoMsg {
  type: "/elys.leveragelp.PositionsForAddressRequest";
  value: PositionsForAddressRequestAmino;
}
export interface PositionsForAddressRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface PositionsForAddressResponse {
  positions: Position[];
  pagination?: PageResponse;
}
export interface PositionsForAddressResponseProtoMsg {
  typeUrl: "/elys.leveragelp.PositionsForAddressResponse";
  value: Uint8Array;
}
export interface PositionsForAddressResponseAmino {
  positions: PositionAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsForAddressResponseAminoMsg {
  type: "/elys.leveragelp.PositionsForAddressResponse";
  value: PositionsForAddressResponseAmino;
}
export interface PositionsForAddressResponseSDKType {
  positions: PositionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface WhitelistRequest {
  pagination?: PageRequest;
}
export interface WhitelistRequestProtoMsg {
  typeUrl: "/elys.leveragelp.WhitelistRequest";
  value: Uint8Array;
}
export interface WhitelistRequestAmino {
  pagination?: PageRequestAmino;
}
export interface WhitelistRequestAminoMsg {
  type: "/elys.leveragelp.WhitelistRequest";
  value: WhitelistRequestAmino;
}
export interface WhitelistRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface WhitelistResponse {
  whitelist: string[];
  pagination?: PageResponse;
}
export interface WhitelistResponseProtoMsg {
  typeUrl: "/elys.leveragelp.WhitelistResponse";
  value: Uint8Array;
}
export interface WhitelistResponseAmino {
  whitelist: string[];
  pagination?: PageResponseAmino;
}
export interface WhitelistResponseAminoMsg {
  type: "/elys.leveragelp.WhitelistResponse";
  value: WhitelistResponseAmino;
}
export interface WhitelistResponseSDKType {
  whitelist: string[];
  pagination?: PageResponseSDKType;
}
export interface IsWhitelistedRequest {
  address: string;
}
export interface IsWhitelistedRequestProtoMsg {
  typeUrl: "/elys.leveragelp.IsWhitelistedRequest";
  value: Uint8Array;
}
export interface IsWhitelistedRequestAmino {
  address: string;
}
export interface IsWhitelistedRequestAminoMsg {
  type: "/elys.leveragelp.IsWhitelistedRequest";
  value: IsWhitelistedRequestAmino;
}
export interface IsWhitelistedRequestSDKType {
  address: string;
}
export interface IsWhitelistedResponse {
  address: string;
  isWhitelisted: boolean;
}
export interface IsWhitelistedResponseProtoMsg {
  typeUrl: "/elys.leveragelp.IsWhitelistedResponse";
  value: Uint8Array;
}
export interface IsWhitelistedResponseAmino {
  address: string;
  is_whitelisted: boolean;
}
export interface IsWhitelistedResponseAminoMsg {
  type: "/elys.leveragelp.IsWhitelistedResponse";
  value: IsWhitelistedResponseAmino;
}
export interface IsWhitelistedResponseSDKType {
  address: string;
  is_whitelisted: boolean;
}
export interface QueryGetPoolRequest {
  index: bigint;
}
export interface QueryGetPoolRequestProtoMsg {
  typeUrl: "/elys.leveragelp.QueryGetPoolRequest";
  value: Uint8Array;
}
export interface QueryGetPoolRequestAmino {
  index: string;
}
export interface QueryGetPoolRequestAminoMsg {
  type: "/elys.leveragelp.QueryGetPoolRequest";
  value: QueryGetPoolRequestAmino;
}
export interface QueryGetPoolRequestSDKType {
  index: bigint;
}
export interface QueryGetPoolResponse {
  pool: Pool;
}
export interface QueryGetPoolResponseProtoMsg {
  typeUrl: "/elys.leveragelp.QueryGetPoolResponse";
  value: Uint8Array;
}
export interface QueryGetPoolResponseAmino {
  pool?: PoolAmino;
}
export interface QueryGetPoolResponseAminoMsg {
  type: "/elys.leveragelp.QueryGetPoolResponse";
  value: QueryGetPoolResponseAmino;
}
export interface QueryGetPoolResponseSDKType {
  pool: PoolSDKType;
}
export interface QueryAllPoolRequest {
  pagination?: PageRequest;
}
export interface QueryAllPoolRequestProtoMsg {
  typeUrl: "/elys.leveragelp.QueryAllPoolRequest";
  value: Uint8Array;
}
export interface QueryAllPoolRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPoolRequestAminoMsg {
  type: "/elys.leveragelp.QueryAllPoolRequest";
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
  typeUrl: "/elys.leveragelp.QueryAllPoolResponse";
  value: Uint8Array;
}
export interface QueryAllPoolResponseAmino {
  pool: PoolAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPoolResponseAminoMsg {
  type: "/elys.leveragelp.QueryAllPoolResponse";
  value: QueryAllPoolResponseAmino;
}
export interface QueryAllPoolResponseSDKType {
  pool: PoolSDKType[];
  pagination?: PageResponseSDKType;
}
export interface PositionRequest {
  address: string;
  id: bigint;
}
export interface PositionRequestProtoMsg {
  typeUrl: "/elys.leveragelp.PositionRequest";
  value: Uint8Array;
}
export interface PositionRequestAmino {
  address: string;
  id: string;
}
export interface PositionRequestAminoMsg {
  type: "/elys.leveragelp.PositionRequest";
  value: PositionRequestAmino;
}
export interface PositionRequestSDKType {
  address: string;
  id: bigint;
}
export interface PositionResponse {
  position?: Position;
}
export interface PositionResponseProtoMsg {
  typeUrl: "/elys.leveragelp.PositionResponse";
  value: Uint8Array;
}
export interface PositionResponseAmino {
  position?: PositionAmino;
}
export interface PositionResponseAminoMsg {
  type: "/elys.leveragelp.PositionResponse";
  value: PositionResponseAmino;
}
export interface PositionResponseSDKType {
  position?: PositionSDKType;
}
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/elys.leveragelp.ParamsRequest",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
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
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    return {};
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/elys.leveragelp.ParamsResponse",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
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
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};
function createBasePositionsRequest(): PositionsRequest {
  return {
    pagination: undefined
  };
}
export const PositionsRequest = {
  typeUrl: "/elys.leveragelp.PositionsRequest",
  encode(message: PositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsRequest();
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
  fromPartial(object: Partial<PositionsRequest>): PositionsRequest {
    const message = createBasePositionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsRequestAmino): PositionsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: PositionsRequest): PositionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsRequestAminoMsg): PositionsRequest {
    return PositionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsRequestProtoMsg): PositionsRequest {
    return PositionsRequest.decode(message.value);
  },
  toProto(message: PositionsRequest): Uint8Array {
    return PositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionsRequest): PositionsRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionsRequest",
      value: PositionsRequest.encode(message).finish()
    };
  }
};
function createBasePositionsResponse(): PositionsResponse {
  return {
    positions: [],
    pagination: undefined
  };
}
export const PositionsResponse = {
  typeUrl: "/elys.leveragelp.PositionsResponse",
  encode(message: PositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positions.push(Position.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<PositionsResponse>): PositionsResponse {
    const message = createBasePositionsResponse();
    message.positions = object.positions?.map(e => Position.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsResponseAmino): PositionsResponse {
    return {
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => Position.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: PositionsResponse): PositionsResponseAmino {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? Position.toAmino(e) : undefined);
    } else {
      obj.positions = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsResponseAminoMsg): PositionsResponse {
    return PositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsResponseProtoMsg): PositionsResponse {
    return PositionsResponse.decode(message.value);
  },
  toProto(message: PositionsResponse): Uint8Array {
    return PositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionsResponse): PositionsResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionsResponse",
      value: PositionsResponse.encode(message).finish()
    };
  }
};
function createBasePositionsByPoolRequest(): PositionsByPoolRequest {
  return {
    ammPoolId: BigInt(0),
    pagination: undefined
  };
}
export const PositionsByPoolRequest = {
  typeUrl: "/elys.leveragelp.PositionsByPoolRequest",
  encode(message: PositionsByPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.ammPoolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsByPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsByPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ammPoolId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionsByPoolRequest>): PositionsByPoolRequest {
    const message = createBasePositionsByPoolRequest();
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsByPoolRequestAmino): PositionsByPoolRequest {
    return {
      ammPoolId: BigInt(object.amm_pool_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: PositionsByPoolRequest): PositionsByPoolRequestAmino {
    const obj: any = {};
    obj.amm_pool_id = message.ammPoolId ? message.ammPoolId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsByPoolRequestAminoMsg): PositionsByPoolRequest {
    return PositionsByPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsByPoolRequestProtoMsg): PositionsByPoolRequest {
    return PositionsByPoolRequest.decode(message.value);
  },
  toProto(message: PositionsByPoolRequest): Uint8Array {
    return PositionsByPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionsByPoolRequest): PositionsByPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionsByPoolRequest",
      value: PositionsByPoolRequest.encode(message).finish()
    };
  }
};
function createBasePositionsByPoolResponse(): PositionsByPoolResponse {
  return {
    positions: [],
    pagination: undefined
  };
}
export const PositionsByPoolResponse = {
  typeUrl: "/elys.leveragelp.PositionsByPoolResponse",
  encode(message: PositionsByPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsByPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsByPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positions.push(Position.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<PositionsByPoolResponse>): PositionsByPoolResponse {
    const message = createBasePositionsByPoolResponse();
    message.positions = object.positions?.map(e => Position.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsByPoolResponseAmino): PositionsByPoolResponse {
    return {
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => Position.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: PositionsByPoolResponse): PositionsByPoolResponseAmino {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? Position.toAmino(e) : undefined);
    } else {
      obj.positions = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsByPoolResponseAminoMsg): PositionsByPoolResponse {
    return PositionsByPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsByPoolResponseProtoMsg): PositionsByPoolResponse {
    return PositionsByPoolResponse.decode(message.value);
  },
  toProto(message: PositionsByPoolResponse): Uint8Array {
    return PositionsByPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionsByPoolResponse): PositionsByPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionsByPoolResponse",
      value: PositionsByPoolResponse.encode(message).finish()
    };
  }
};
function createBaseStatusRequest(): StatusRequest {
  return {};
}
export const StatusRequest = {
  typeUrl: "/elys.leveragelp.StatusRequest",
  encode(_: StatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();
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
  fromPartial(_: Partial<StatusRequest>): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
  fromAmino(_: StatusRequestAmino): StatusRequest {
    return {};
  },
  toAmino(_: StatusRequest): StatusRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: StatusRequestAminoMsg): StatusRequest {
    return StatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusRequestProtoMsg): StatusRequest {
    return StatusRequest.decode(message.value);
  },
  toProto(message: StatusRequest): Uint8Array {
    return StatusRequest.encode(message).finish();
  },
  toProtoMsg(message: StatusRequest): StatusRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.StatusRequest",
      value: StatusRequest.encode(message).finish()
    };
  }
};
function createBaseStatusResponse(): StatusResponse {
  return {
    openPositionCount: BigInt(0),
    lifetimePositionCount: BigInt(0)
  };
}
export const StatusResponse = {
  typeUrl: "/elys.leveragelp.StatusResponse",
  encode(message: StatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.openPositionCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.openPositionCount);
    }
    if (message.lifetimePositionCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.lifetimePositionCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.openPositionCount = reader.uint64();
          break;
        case 2:
          message.lifetimePositionCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StatusResponse>): StatusResponse {
    const message = createBaseStatusResponse();
    message.openPositionCount = object.openPositionCount !== undefined && object.openPositionCount !== null ? BigInt(object.openPositionCount.toString()) : BigInt(0);
    message.lifetimePositionCount = object.lifetimePositionCount !== undefined && object.lifetimePositionCount !== null ? BigInt(object.lifetimePositionCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StatusResponseAmino): StatusResponse {
    return {
      openPositionCount: BigInt(object.open_position_count),
      lifetimePositionCount: BigInt(object.lifetime_position_count)
    };
  },
  toAmino(message: StatusResponse): StatusResponseAmino {
    const obj: any = {};
    obj.open_position_count = message.openPositionCount ? message.openPositionCount.toString() : undefined;
    obj.lifetime_position_count = message.lifetimePositionCount ? message.lifetimePositionCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StatusResponseAminoMsg): StatusResponse {
    return StatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusResponseProtoMsg): StatusResponse {
    return StatusResponse.decode(message.value);
  },
  toProto(message: StatusResponse): Uint8Array {
    return StatusResponse.encode(message).finish();
  },
  toProtoMsg(message: StatusResponse): StatusResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.StatusResponse",
      value: StatusResponse.encode(message).finish()
    };
  }
};
function createBasePositionsForAddressRequest(): PositionsForAddressRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const PositionsForAddressRequest = {
  typeUrl: "/elys.leveragelp.PositionsForAddressRequest",
  encode(message: PositionsForAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsForAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsForAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionsForAddressRequest>): PositionsForAddressRequest {
    const message = createBasePositionsForAddressRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsForAddressRequestAmino): PositionsForAddressRequest {
    return {
      address: object.address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: PositionsForAddressRequest): PositionsForAddressRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsForAddressRequestAminoMsg): PositionsForAddressRequest {
    return PositionsForAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsForAddressRequestProtoMsg): PositionsForAddressRequest {
    return PositionsForAddressRequest.decode(message.value);
  },
  toProto(message: PositionsForAddressRequest): Uint8Array {
    return PositionsForAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionsForAddressRequest): PositionsForAddressRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionsForAddressRequest",
      value: PositionsForAddressRequest.encode(message).finish()
    };
  }
};
function createBasePositionsForAddressResponse(): PositionsForAddressResponse {
  return {
    positions: [],
    pagination: undefined
  };
}
export const PositionsForAddressResponse = {
  typeUrl: "/elys.leveragelp.PositionsForAddressResponse",
  encode(message: PositionsForAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsForAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsForAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positions.push(Position.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<PositionsForAddressResponse>): PositionsForAddressResponse {
    const message = createBasePositionsForAddressResponse();
    message.positions = object.positions?.map(e => Position.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsForAddressResponseAmino): PositionsForAddressResponse {
    return {
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => Position.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: PositionsForAddressResponse): PositionsForAddressResponseAmino {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? Position.toAmino(e) : undefined);
    } else {
      obj.positions = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsForAddressResponseAminoMsg): PositionsForAddressResponse {
    return PositionsForAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsForAddressResponseProtoMsg): PositionsForAddressResponse {
    return PositionsForAddressResponse.decode(message.value);
  },
  toProto(message: PositionsForAddressResponse): Uint8Array {
    return PositionsForAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionsForAddressResponse): PositionsForAddressResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionsForAddressResponse",
      value: PositionsForAddressResponse.encode(message).finish()
    };
  }
};
function createBaseWhitelistRequest(): WhitelistRequest {
  return {
    pagination: undefined
  };
}
export const WhitelistRequest = {
  typeUrl: "/elys.leveragelp.WhitelistRequest",
  encode(message: WhitelistRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistRequest();
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
  fromPartial(object: Partial<WhitelistRequest>): WhitelistRequest {
    const message = createBaseWhitelistRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: WhitelistRequestAmino): WhitelistRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: WhitelistRequest): WhitelistRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: WhitelistRequestAminoMsg): WhitelistRequest {
    return WhitelistRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: WhitelistRequestProtoMsg): WhitelistRequest {
    return WhitelistRequest.decode(message.value);
  },
  toProto(message: WhitelistRequest): Uint8Array {
    return WhitelistRequest.encode(message).finish();
  },
  toProtoMsg(message: WhitelistRequest): WhitelistRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.WhitelistRequest",
      value: WhitelistRequest.encode(message).finish()
    };
  }
};
function createBaseWhitelistResponse(): WhitelistResponse {
  return {
    whitelist: [],
    pagination: undefined
  };
}
export const WhitelistResponse = {
  typeUrl: "/elys.leveragelp.WhitelistResponse",
  encode(message: WhitelistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.whitelist) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelist.push(reader.string());
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
  fromPartial(object: Partial<WhitelistResponse>): WhitelistResponse {
    const message = createBaseWhitelistResponse();
    message.whitelist = object.whitelist?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: WhitelistResponseAmino): WhitelistResponse {
    return {
      whitelist: Array.isArray(object?.whitelist) ? object.whitelist.map((e: any) => e) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: WhitelistResponse): WhitelistResponseAmino {
    const obj: any = {};
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map(e => e);
    } else {
      obj.whitelist = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: WhitelistResponseAminoMsg): WhitelistResponse {
    return WhitelistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: WhitelistResponseProtoMsg): WhitelistResponse {
    return WhitelistResponse.decode(message.value);
  },
  toProto(message: WhitelistResponse): Uint8Array {
    return WhitelistResponse.encode(message).finish();
  },
  toProtoMsg(message: WhitelistResponse): WhitelistResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.WhitelistResponse",
      value: WhitelistResponse.encode(message).finish()
    };
  }
};
function createBaseIsWhitelistedRequest(): IsWhitelistedRequest {
  return {
    address: ""
  };
}
export const IsWhitelistedRequest = {
  typeUrl: "/elys.leveragelp.IsWhitelistedRequest",
  encode(message: IsWhitelistedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IsWhitelistedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsWhitelistedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IsWhitelistedRequest>): IsWhitelistedRequest {
    const message = createBaseIsWhitelistedRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: IsWhitelistedRequestAmino): IsWhitelistedRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: IsWhitelistedRequest): IsWhitelistedRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: IsWhitelistedRequestAminoMsg): IsWhitelistedRequest {
    return IsWhitelistedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: IsWhitelistedRequestProtoMsg): IsWhitelistedRequest {
    return IsWhitelistedRequest.decode(message.value);
  },
  toProto(message: IsWhitelistedRequest): Uint8Array {
    return IsWhitelistedRequest.encode(message).finish();
  },
  toProtoMsg(message: IsWhitelistedRequest): IsWhitelistedRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.IsWhitelistedRequest",
      value: IsWhitelistedRequest.encode(message).finish()
    };
  }
};
function createBaseIsWhitelistedResponse(): IsWhitelistedResponse {
  return {
    address: "",
    isWhitelisted: false
  };
}
export const IsWhitelistedResponse = {
  typeUrl: "/elys.leveragelp.IsWhitelistedResponse",
  encode(message: IsWhitelistedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.isWhitelisted === true) {
      writer.uint32(16).bool(message.isWhitelisted);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IsWhitelistedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsWhitelistedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.isWhitelisted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IsWhitelistedResponse>): IsWhitelistedResponse {
    const message = createBaseIsWhitelistedResponse();
    message.address = object.address ?? "";
    message.isWhitelisted = object.isWhitelisted ?? false;
    return message;
  },
  fromAmino(object: IsWhitelistedResponseAmino): IsWhitelistedResponse {
    return {
      address: object.address,
      isWhitelisted: object.is_whitelisted
    };
  },
  toAmino(message: IsWhitelistedResponse): IsWhitelistedResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.is_whitelisted = message.isWhitelisted;
    return obj;
  },
  fromAminoMsg(object: IsWhitelistedResponseAminoMsg): IsWhitelistedResponse {
    return IsWhitelistedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: IsWhitelistedResponseProtoMsg): IsWhitelistedResponse {
    return IsWhitelistedResponse.decode(message.value);
  },
  toProto(message: IsWhitelistedResponse): Uint8Array {
    return IsWhitelistedResponse.encode(message).finish();
  },
  toProtoMsg(message: IsWhitelistedResponse): IsWhitelistedResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.IsWhitelistedResponse",
      value: IsWhitelistedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return {
    index: BigInt(0)
  };
}
export const QueryGetPoolRequest = {
  typeUrl: "/elys.leveragelp.QueryGetPoolRequest",
  encode(message: QueryGetPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
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
          message.index = reader.uint64();
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
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPoolRequestAmino): QueryGetPoolRequest {
    return {
      index: BigInt(object.index)
    };
  },
  toAmino(message: QueryGetPoolRequest): QueryGetPoolRequestAmino {
    const obj: any = {};
    obj.index = message.index ? message.index.toString() : undefined;
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
      typeUrl: "/elys.leveragelp.QueryGetPoolRequest",
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
  typeUrl: "/elys.leveragelp.QueryGetPoolResponse",
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
      typeUrl: "/elys.leveragelp.QueryGetPoolResponse",
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
  typeUrl: "/elys.leveragelp.QueryAllPoolRequest",
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
      typeUrl: "/elys.leveragelp.QueryAllPoolRequest",
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
  typeUrl: "/elys.leveragelp.QueryAllPoolResponse",
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
      typeUrl: "/elys.leveragelp.QueryAllPoolResponse",
      value: QueryAllPoolResponse.encode(message).finish()
    };
  }
};
function createBasePositionRequest(): PositionRequest {
  return {
    address: "",
    id: BigInt(0)
  };
}
export const PositionRequest = {
  typeUrl: "/elys.leveragelp.PositionRequest",
  encode(message: PositionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionRequest>): PositionRequest {
    const message = createBasePositionRequest();
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PositionRequestAmino): PositionRequest {
    return {
      address: object.address,
      id: BigInt(object.id)
    };
  },
  toAmino(message: PositionRequest): PositionRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionRequestAminoMsg): PositionRequest {
    return PositionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionRequestProtoMsg): PositionRequest {
    return PositionRequest.decode(message.value);
  },
  toProto(message: PositionRequest): Uint8Array {
    return PositionRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionRequest): PositionRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionRequest",
      value: PositionRequest.encode(message).finish()
    };
  }
};
function createBasePositionResponse(): PositionResponse {
  return {
    position: undefined
  };
}
export const PositionResponse = {
  typeUrl: "/elys.leveragelp.PositionResponse",
  encode(message: PositionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionResponse>): PositionResponse {
    const message = createBasePositionResponse();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    return message;
  },
  fromAmino(object: PositionResponseAmino): PositionResponse {
    return {
      position: object?.position ? Position.fromAmino(object.position) : undefined
    };
  },
  toAmino(message: PositionResponse): PositionResponseAmino {
    const obj: any = {};
    obj.position = message.position ? Position.toAmino(message.position) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionResponseAminoMsg): PositionResponse {
    return PositionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionResponseProtoMsg): PositionResponse {
    return PositionResponse.decode(message.value);
  },
  toProto(message: PositionResponse): Uint8Array {
    return PositionResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionResponse): PositionResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionResponse",
      value: PositionResponse.encode(message).finish()
    };
  }
};