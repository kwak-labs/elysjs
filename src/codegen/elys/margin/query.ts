import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { MTP, MTPAmino, MTPSDKType } from "./types";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { BinaryReader, BinaryWriter } from "../../binary";
/** ParamsRequest is request type for the Query/Params RPC method. */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/elys.margin.ParamsRequest";
  value: Uint8Array;
}
/** ParamsRequest is request type for the Query/Params RPC method. */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "/elys.margin.ParamsRequest";
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
  typeUrl: "/elys.margin.ParamsResponse";
  value: Uint8Array;
}
/** ParamsResponse is response type for the Query/Params RPC method. */
export interface ParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "/elys.margin.ParamsResponse";
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
  typeUrl: "/elys.margin.PositionsRequest";
  value: Uint8Array;
}
export interface PositionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface PositionsRequestAminoMsg {
  type: "/elys.margin.PositionsRequest";
  value: PositionsRequestAmino;
}
export interface PositionsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface PositionsResponse {
  mtps: MTP[];
  pagination?: PageResponse;
}
export interface PositionsResponseProtoMsg {
  typeUrl: "/elys.margin.PositionsResponse";
  value: Uint8Array;
}
export interface PositionsResponseAmino {
  mtps: MTPAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsResponseAminoMsg {
  type: "/elys.margin.PositionsResponse";
  value: PositionsResponseAmino;
}
export interface PositionsResponseSDKType {
  mtps: MTPSDKType[];
  pagination?: PageResponseSDKType;
}
export interface PositionsByPoolRequest {
  ammPoolId: bigint;
  pagination?: PageRequest;
}
export interface PositionsByPoolRequestProtoMsg {
  typeUrl: "/elys.margin.PositionsByPoolRequest";
  value: Uint8Array;
}
export interface PositionsByPoolRequestAmino {
  amm_pool_id: string;
  pagination?: PageRequestAmino;
}
export interface PositionsByPoolRequestAminoMsg {
  type: "/elys.margin.PositionsByPoolRequest";
  value: PositionsByPoolRequestAmino;
}
export interface PositionsByPoolRequestSDKType {
  amm_pool_id: bigint;
  pagination?: PageRequestSDKType;
}
export interface PositionsByPoolResponse {
  mtps: MTP[];
  pagination?: PageResponse;
}
export interface PositionsByPoolResponseProtoMsg {
  typeUrl: "/elys.margin.PositionsByPoolResponse";
  value: Uint8Array;
}
export interface PositionsByPoolResponseAmino {
  mtps: MTPAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsByPoolResponseAminoMsg {
  type: "/elys.margin.PositionsByPoolResponse";
  value: PositionsByPoolResponseAmino;
}
export interface PositionsByPoolResponseSDKType {
  mtps: MTPSDKType[];
  pagination?: PageResponseSDKType;
}
export interface StatusRequest {}
export interface StatusRequestProtoMsg {
  typeUrl: "/elys.margin.StatusRequest";
  value: Uint8Array;
}
export interface StatusRequestAmino {}
export interface StatusRequestAminoMsg {
  type: "/elys.margin.StatusRequest";
  value: StatusRequestAmino;
}
export interface StatusRequestSDKType {}
export interface StatusResponse {
  openMtpCount: bigint;
  lifetimeMtpCount: bigint;
}
export interface StatusResponseProtoMsg {
  typeUrl: "/elys.margin.StatusResponse";
  value: Uint8Array;
}
export interface StatusResponseAmino {
  open_mtp_count: string;
  lifetime_mtp_count: string;
}
export interface StatusResponseAminoMsg {
  type: "/elys.margin.StatusResponse";
  value: StatusResponseAmino;
}
export interface StatusResponseSDKType {
  open_mtp_count: bigint;
  lifetime_mtp_count: bigint;
}
export interface PositionsForAddressRequest {
  address: string;
  pagination?: PageRequest;
}
export interface PositionsForAddressRequestProtoMsg {
  typeUrl: "/elys.margin.PositionsForAddressRequest";
  value: Uint8Array;
}
export interface PositionsForAddressRequestAmino {
  address: string;
  pagination?: PageRequestAmino;
}
export interface PositionsForAddressRequestAminoMsg {
  type: "/elys.margin.PositionsForAddressRequest";
  value: PositionsForAddressRequestAmino;
}
export interface PositionsForAddressRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface PositionsForAddressResponse {
  mtps: MTP[];
  pagination?: PageResponse;
}
export interface PositionsForAddressResponseProtoMsg {
  typeUrl: "/elys.margin.PositionsForAddressResponse";
  value: Uint8Array;
}
export interface PositionsForAddressResponseAmino {
  mtps: MTPAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsForAddressResponseAminoMsg {
  type: "/elys.margin.PositionsForAddressResponse";
  value: PositionsForAddressResponseAmino;
}
export interface PositionsForAddressResponseSDKType {
  mtps: MTPSDKType[];
  pagination?: PageResponseSDKType;
}
export interface WhitelistRequest {
  pagination?: PageRequest;
}
export interface WhitelistRequestProtoMsg {
  typeUrl: "/elys.margin.WhitelistRequest";
  value: Uint8Array;
}
export interface WhitelistRequestAmino {
  pagination?: PageRequestAmino;
}
export interface WhitelistRequestAminoMsg {
  type: "/elys.margin.WhitelistRequest";
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
  typeUrl: "/elys.margin.WhitelistResponse";
  value: Uint8Array;
}
export interface WhitelistResponseAmino {
  whitelist: string[];
  pagination?: PageResponseAmino;
}
export interface WhitelistResponseAminoMsg {
  type: "/elys.margin.WhitelistResponse";
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
  typeUrl: "/elys.margin.IsWhitelistedRequest";
  value: Uint8Array;
}
export interface IsWhitelistedRequestAmino {
  address: string;
}
export interface IsWhitelistedRequestAminoMsg {
  type: "/elys.margin.IsWhitelistedRequest";
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
  typeUrl: "/elys.margin.IsWhitelistedResponse";
  value: Uint8Array;
}
export interface IsWhitelistedResponseAmino {
  address: string;
  is_whitelisted: boolean;
}
export interface IsWhitelistedResponseAminoMsg {
  type: "/elys.margin.IsWhitelistedResponse";
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
  typeUrl: "/elys.margin.QueryGetPoolRequest";
  value: Uint8Array;
}
export interface QueryGetPoolRequestAmino {
  index: string;
}
export interface QueryGetPoolRequestAminoMsg {
  type: "/elys.margin.QueryGetPoolRequest";
  value: QueryGetPoolRequestAmino;
}
export interface QueryGetPoolRequestSDKType {
  index: bigint;
}
export interface QueryGetPoolResponse {
  pool: Pool;
}
export interface QueryGetPoolResponseProtoMsg {
  typeUrl: "/elys.margin.QueryGetPoolResponse";
  value: Uint8Array;
}
export interface QueryGetPoolResponseAmino {
  pool?: PoolAmino;
}
export interface QueryGetPoolResponseAminoMsg {
  type: "/elys.margin.QueryGetPoolResponse";
  value: QueryGetPoolResponseAmino;
}
export interface QueryGetPoolResponseSDKType {
  pool: PoolSDKType;
}
export interface QueryAllPoolRequest {
  pagination?: PageRequest;
}
export interface QueryAllPoolRequestProtoMsg {
  typeUrl: "/elys.margin.QueryAllPoolRequest";
  value: Uint8Array;
}
export interface QueryAllPoolRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPoolRequestAminoMsg {
  type: "/elys.margin.QueryAllPoolRequest";
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
  typeUrl: "/elys.margin.QueryAllPoolResponse";
  value: Uint8Array;
}
export interface QueryAllPoolResponseAmino {
  pool: PoolAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPoolResponseAminoMsg {
  type: "/elys.margin.QueryAllPoolResponse";
  value: QueryAllPoolResponseAmino;
}
export interface QueryAllPoolResponseSDKType {
  pool: PoolSDKType[];
  pagination?: PageResponseSDKType;
}
export interface MTPRequest {
  address: string;
  id: bigint;
}
export interface MTPRequestProtoMsg {
  typeUrl: "/elys.margin.MTPRequest";
  value: Uint8Array;
}
export interface MTPRequestAmino {
  address: string;
  id: string;
}
export interface MTPRequestAminoMsg {
  type: "/elys.margin.MTPRequest";
  value: MTPRequestAmino;
}
export interface MTPRequestSDKType {
  address: string;
  id: bigint;
}
export interface MTPResponse {
  mtp?: MTP;
}
export interface MTPResponseProtoMsg {
  typeUrl: "/elys.margin.MTPResponse";
  value: Uint8Array;
}
export interface MTPResponseAmino {
  mtp?: MTPAmino;
}
export interface MTPResponseAminoMsg {
  type: "/elys.margin.MTPResponse";
  value: MTPResponseAmino;
}
export interface MTPResponseSDKType {
  mtp?: MTPSDKType;
}
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/elys.margin.ParamsRequest",
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
      typeUrl: "/elys.margin.ParamsRequest",
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
  typeUrl: "/elys.margin.ParamsResponse",
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
      typeUrl: "/elys.margin.ParamsResponse",
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
  typeUrl: "/elys.margin.PositionsRequest",
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
      typeUrl: "/elys.margin.PositionsRequest",
      value: PositionsRequest.encode(message).finish()
    };
  }
};
function createBasePositionsResponse(): PositionsResponse {
  return {
    mtps: [],
    pagination: undefined
  };
}
export const PositionsResponse = {
  typeUrl: "/elys.margin.PositionsResponse",
  encode(message: PositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.mtps) {
      MTP.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.mtps.push(MTP.decode(reader, reader.uint32()));
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
    message.mtps = object.mtps?.map(e => MTP.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsResponseAmino): PositionsResponse {
    return {
      mtps: Array.isArray(object?.mtps) ? object.mtps.map((e: any) => MTP.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: PositionsResponse): PositionsResponseAmino {
    const obj: any = {};
    if (message.mtps) {
      obj.mtps = message.mtps.map(e => e ? MTP.toAmino(e) : undefined);
    } else {
      obj.mtps = [];
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
      typeUrl: "/elys.margin.PositionsResponse",
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
  typeUrl: "/elys.margin.PositionsByPoolRequest",
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
      typeUrl: "/elys.margin.PositionsByPoolRequest",
      value: PositionsByPoolRequest.encode(message).finish()
    };
  }
};
function createBasePositionsByPoolResponse(): PositionsByPoolResponse {
  return {
    mtps: [],
    pagination: undefined
  };
}
export const PositionsByPoolResponse = {
  typeUrl: "/elys.margin.PositionsByPoolResponse",
  encode(message: PositionsByPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.mtps) {
      MTP.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.mtps.push(MTP.decode(reader, reader.uint32()));
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
    message.mtps = object.mtps?.map(e => MTP.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsByPoolResponseAmino): PositionsByPoolResponse {
    return {
      mtps: Array.isArray(object?.mtps) ? object.mtps.map((e: any) => MTP.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: PositionsByPoolResponse): PositionsByPoolResponseAmino {
    const obj: any = {};
    if (message.mtps) {
      obj.mtps = message.mtps.map(e => e ? MTP.toAmino(e) : undefined);
    } else {
      obj.mtps = [];
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
      typeUrl: "/elys.margin.PositionsByPoolResponse",
      value: PositionsByPoolResponse.encode(message).finish()
    };
  }
};
function createBaseStatusRequest(): StatusRequest {
  return {};
}
export const StatusRequest = {
  typeUrl: "/elys.margin.StatusRequest",
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
      typeUrl: "/elys.margin.StatusRequest",
      value: StatusRequest.encode(message).finish()
    };
  }
};
function createBaseStatusResponse(): StatusResponse {
  return {
    openMtpCount: BigInt(0),
    lifetimeMtpCount: BigInt(0)
  };
}
export const StatusResponse = {
  typeUrl: "/elys.margin.StatusResponse",
  encode(message: StatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.openMtpCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.openMtpCount);
    }
    if (message.lifetimeMtpCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.lifetimeMtpCount);
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
          message.openMtpCount = reader.uint64();
          break;
        case 2:
          message.lifetimeMtpCount = reader.uint64();
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
    message.openMtpCount = object.openMtpCount !== undefined && object.openMtpCount !== null ? BigInt(object.openMtpCount.toString()) : BigInt(0);
    message.lifetimeMtpCount = object.lifetimeMtpCount !== undefined && object.lifetimeMtpCount !== null ? BigInt(object.lifetimeMtpCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StatusResponseAmino): StatusResponse {
    return {
      openMtpCount: BigInt(object.open_mtp_count),
      lifetimeMtpCount: BigInt(object.lifetime_mtp_count)
    };
  },
  toAmino(message: StatusResponse): StatusResponseAmino {
    const obj: any = {};
    obj.open_mtp_count = message.openMtpCount ? message.openMtpCount.toString() : undefined;
    obj.lifetime_mtp_count = message.lifetimeMtpCount ? message.lifetimeMtpCount.toString() : undefined;
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
      typeUrl: "/elys.margin.StatusResponse",
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
  typeUrl: "/elys.margin.PositionsForAddressRequest",
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
      typeUrl: "/elys.margin.PositionsForAddressRequest",
      value: PositionsForAddressRequest.encode(message).finish()
    };
  }
};
function createBasePositionsForAddressResponse(): PositionsForAddressResponse {
  return {
    mtps: [],
    pagination: undefined
  };
}
export const PositionsForAddressResponse = {
  typeUrl: "/elys.margin.PositionsForAddressResponse",
  encode(message: PositionsForAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.mtps) {
      MTP.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.mtps.push(MTP.decode(reader, reader.uint32()));
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
    message.mtps = object.mtps?.map(e => MTP.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsForAddressResponseAmino): PositionsForAddressResponse {
    return {
      mtps: Array.isArray(object?.mtps) ? object.mtps.map((e: any) => MTP.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: PositionsForAddressResponse): PositionsForAddressResponseAmino {
    const obj: any = {};
    if (message.mtps) {
      obj.mtps = message.mtps.map(e => e ? MTP.toAmino(e) : undefined);
    } else {
      obj.mtps = [];
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
      typeUrl: "/elys.margin.PositionsForAddressResponse",
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
  typeUrl: "/elys.margin.WhitelistRequest",
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
      typeUrl: "/elys.margin.WhitelistRequest",
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
  typeUrl: "/elys.margin.WhitelistResponse",
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
      typeUrl: "/elys.margin.WhitelistResponse",
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
  typeUrl: "/elys.margin.IsWhitelistedRequest",
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
      typeUrl: "/elys.margin.IsWhitelistedRequest",
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
  typeUrl: "/elys.margin.IsWhitelistedResponse",
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
      typeUrl: "/elys.margin.IsWhitelistedResponse",
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
  typeUrl: "/elys.margin.QueryGetPoolRequest",
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
      typeUrl: "/elys.margin.QueryGetPoolRequest",
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
  typeUrl: "/elys.margin.QueryGetPoolResponse",
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
      typeUrl: "/elys.margin.QueryGetPoolResponse",
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
  typeUrl: "/elys.margin.QueryAllPoolRequest",
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
      typeUrl: "/elys.margin.QueryAllPoolRequest",
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
  typeUrl: "/elys.margin.QueryAllPoolResponse",
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
      typeUrl: "/elys.margin.QueryAllPoolResponse",
      value: QueryAllPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMTPRequest(): MTPRequest {
  return {
    address: "",
    id: BigInt(0)
  };
}
export const MTPRequest = {
  typeUrl: "/elys.margin.MTPRequest",
  encode(message: MTPRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MTPRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMTPRequest();
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
  fromPartial(object: Partial<MTPRequest>): MTPRequest {
    const message = createBaseMTPRequest();
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MTPRequestAmino): MTPRequest {
    return {
      address: object.address,
      id: BigInt(object.id)
    };
  },
  toAmino(message: MTPRequest): MTPRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MTPRequestAminoMsg): MTPRequest {
    return MTPRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MTPRequestProtoMsg): MTPRequest {
    return MTPRequest.decode(message.value);
  },
  toProto(message: MTPRequest): Uint8Array {
    return MTPRequest.encode(message).finish();
  },
  toProtoMsg(message: MTPRequest): MTPRequestProtoMsg {
    return {
      typeUrl: "/elys.margin.MTPRequest",
      value: MTPRequest.encode(message).finish()
    };
  }
};
function createBaseMTPResponse(): MTPResponse {
  return {
    mtp: undefined
  };
}
export const MTPResponse = {
  typeUrl: "/elys.margin.MTPResponse",
  encode(message: MTPResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mtp !== undefined) {
      MTP.encode(message.mtp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MTPResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMTPResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mtp = MTP.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MTPResponse>): MTPResponse {
    const message = createBaseMTPResponse();
    message.mtp = object.mtp !== undefined && object.mtp !== null ? MTP.fromPartial(object.mtp) : undefined;
    return message;
  },
  fromAmino(object: MTPResponseAmino): MTPResponse {
    return {
      mtp: object?.mtp ? MTP.fromAmino(object.mtp) : undefined
    };
  },
  toAmino(message: MTPResponse): MTPResponseAmino {
    const obj: any = {};
    obj.mtp = message.mtp ? MTP.toAmino(message.mtp) : undefined;
    return obj;
  },
  fromAminoMsg(object: MTPResponseAminoMsg): MTPResponse {
    return MTPResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MTPResponseProtoMsg): MTPResponse {
    return MTPResponse.decode(message.value);
  },
  toProto(message: MTPResponse): Uint8Array {
    return MTPResponse.encode(message).finish();
  },
  toProtoMsg(message: MTPResponse): MTPResponseProtoMsg {
    return {
      typeUrl: "/elys.margin.MTPResponse",
      value: MTPResponse.encode(message).finish()
    };
  }
};