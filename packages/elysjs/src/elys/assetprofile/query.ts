//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Entry, EntryAmino, EntrySDKType } from "./entry";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/elys.assetprofile.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/elys.assetprofile.QueryParamsRequest";
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
  typeUrl: "/elys.assetprofile.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/elys.assetprofile.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryEntryRequest {
  baseDenom: string;
}
export interface QueryEntryRequestProtoMsg {
  typeUrl: "/elys.assetprofile.QueryEntryRequest";
  value: Uint8Array;
}
export interface QueryEntryRequestAmino {
  base_denom?: string;
}
export interface QueryEntryRequestAminoMsg {
  type: "/elys.assetprofile.QueryEntryRequest";
  value: QueryEntryRequestAmino;
}
export interface QueryEntryRequestSDKType {
  base_denom: string;
}
export interface QueryEntryByDenomRequest {
  denom: string;
}
export interface QueryEntryByDenomRequestProtoMsg {
  typeUrl: "/elys.assetprofile.QueryEntryByDenomRequest";
  value: Uint8Array;
}
export interface QueryEntryByDenomRequestAmino {
  denom?: string;
}
export interface QueryEntryByDenomRequestAminoMsg {
  type: "/elys.assetprofile.QueryEntryByDenomRequest";
  value: QueryEntryByDenomRequestAmino;
}
export interface QueryEntryByDenomRequestSDKType {
  denom: string;
}
export interface QueryEntryResponse {
  entry: Entry;
}
export interface QueryEntryResponseProtoMsg {
  typeUrl: "/elys.assetprofile.QueryEntryResponse";
  value: Uint8Array;
}
export interface QueryEntryResponseAmino {
  entry?: EntryAmino;
}
export interface QueryEntryResponseAminoMsg {
  type: "/elys.assetprofile.QueryEntryResponse";
  value: QueryEntryResponseAmino;
}
export interface QueryEntryResponseSDKType {
  entry: EntrySDKType;
}
export interface QueryEntryByDenomResponse {
  entry: Entry;
}
export interface QueryEntryByDenomResponseProtoMsg {
  typeUrl: "/elys.assetprofile.QueryEntryByDenomResponse";
  value: Uint8Array;
}
export interface QueryEntryByDenomResponseAmino {
  entry?: EntryAmino;
}
export interface QueryEntryByDenomResponseAminoMsg {
  type: "/elys.assetprofile.QueryEntryByDenomResponse";
  value: QueryEntryByDenomResponseAmino;
}
export interface QueryEntryByDenomResponseSDKType {
  entry: EntrySDKType;
}
export interface QueryAllEntryRequest {
  pagination?: PageRequest;
}
export interface QueryAllEntryRequestProtoMsg {
  typeUrl: "/elys.assetprofile.QueryAllEntryRequest";
  value: Uint8Array;
}
export interface QueryAllEntryRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllEntryRequestAminoMsg {
  type: "/elys.assetprofile.QueryAllEntryRequest";
  value: QueryAllEntryRequestAmino;
}
export interface QueryAllEntryRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllEntryResponse {
  entry: Entry[];
  pagination?: PageResponse;
}
export interface QueryAllEntryResponseProtoMsg {
  typeUrl: "/elys.assetprofile.QueryAllEntryResponse";
  value: Uint8Array;
}
export interface QueryAllEntryResponseAmino {
  entry?: EntryAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllEntryResponseAminoMsg {
  type: "/elys.assetprofile.QueryAllEntryResponse";
  value: QueryAllEntryResponseAmino;
}
export interface QueryAllEntryResponseSDKType {
  entry: EntrySDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/elys.assetprofile.QueryParamsRequest",
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
      typeUrl: "/elys.assetprofile.QueryParamsRequest",
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
  typeUrl: "/elys.assetprofile.QueryParamsResponse",
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
      typeUrl: "/elys.assetprofile.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEntryRequest(): QueryEntryRequest {
  return {
    baseDenom: ""
  };
}
export const QueryEntryRequest = {
  typeUrl: "/elys.assetprofile.QueryEntryRequest",
  encode(message: QueryEntryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEntryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEntryRequest>): QueryEntryRequest {
    const message = createBaseQueryEntryRequest();
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
  fromAmino(object: QueryEntryRequestAmino): QueryEntryRequest {
    const message = createBaseQueryEntryRequest();
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    return message;
  },
  toAmino(message: QueryEntryRequest): QueryEntryRequestAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    return obj;
  },
  fromAminoMsg(object: QueryEntryRequestAminoMsg): QueryEntryRequest {
    return QueryEntryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEntryRequestProtoMsg): QueryEntryRequest {
    return QueryEntryRequest.decode(message.value);
  },
  toProto(message: QueryEntryRequest): Uint8Array {
    return QueryEntryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEntryRequest): QueryEntryRequestProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.QueryEntryRequest",
      value: QueryEntryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEntryByDenomRequest(): QueryEntryByDenomRequest {
  return {
    denom: ""
  };
}
export const QueryEntryByDenomRequest = {
  typeUrl: "/elys.assetprofile.QueryEntryByDenomRequest",
  encode(message: QueryEntryByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEntryByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntryByDenomRequest();
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
  fromPartial(object: Partial<QueryEntryByDenomRequest>): QueryEntryByDenomRequest {
    const message = createBaseQueryEntryByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryEntryByDenomRequestAmino): QueryEntryByDenomRequest {
    const message = createBaseQueryEntryByDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryEntryByDenomRequest): QueryEntryByDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryEntryByDenomRequestAminoMsg): QueryEntryByDenomRequest {
    return QueryEntryByDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEntryByDenomRequestProtoMsg): QueryEntryByDenomRequest {
    return QueryEntryByDenomRequest.decode(message.value);
  },
  toProto(message: QueryEntryByDenomRequest): Uint8Array {
    return QueryEntryByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEntryByDenomRequest): QueryEntryByDenomRequestProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.QueryEntryByDenomRequest",
      value: QueryEntryByDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEntryResponse(): QueryEntryResponse {
  return {
    entry: Entry.fromPartial({})
  };
}
export const QueryEntryResponse = {
  typeUrl: "/elys.assetprofile.QueryEntryResponse",
  encode(message: QueryEntryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.entry !== undefined) {
      Entry.encode(message.entry, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEntryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entry = Entry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEntryResponse>): QueryEntryResponse {
    const message = createBaseQueryEntryResponse();
    message.entry = object.entry !== undefined && object.entry !== null ? Entry.fromPartial(object.entry) : undefined;
    return message;
  },
  fromAmino(object: QueryEntryResponseAmino): QueryEntryResponse {
    const message = createBaseQueryEntryResponse();
    if (object.entry !== undefined && object.entry !== null) {
      message.entry = Entry.fromAmino(object.entry);
    }
    return message;
  },
  toAmino(message: QueryEntryResponse): QueryEntryResponseAmino {
    const obj: any = {};
    obj.entry = message.entry ? Entry.toAmino(message.entry) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEntryResponseAminoMsg): QueryEntryResponse {
    return QueryEntryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEntryResponseProtoMsg): QueryEntryResponse {
    return QueryEntryResponse.decode(message.value);
  },
  toProto(message: QueryEntryResponse): Uint8Array {
    return QueryEntryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEntryResponse): QueryEntryResponseProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.QueryEntryResponse",
      value: QueryEntryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEntryByDenomResponse(): QueryEntryByDenomResponse {
  return {
    entry: Entry.fromPartial({})
  };
}
export const QueryEntryByDenomResponse = {
  typeUrl: "/elys.assetprofile.QueryEntryByDenomResponse",
  encode(message: QueryEntryByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.entry !== undefined) {
      Entry.encode(message.entry, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEntryByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntryByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entry = Entry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEntryByDenomResponse>): QueryEntryByDenomResponse {
    const message = createBaseQueryEntryByDenomResponse();
    message.entry = object.entry !== undefined && object.entry !== null ? Entry.fromPartial(object.entry) : undefined;
    return message;
  },
  fromAmino(object: QueryEntryByDenomResponseAmino): QueryEntryByDenomResponse {
    const message = createBaseQueryEntryByDenomResponse();
    if (object.entry !== undefined && object.entry !== null) {
      message.entry = Entry.fromAmino(object.entry);
    }
    return message;
  },
  toAmino(message: QueryEntryByDenomResponse): QueryEntryByDenomResponseAmino {
    const obj: any = {};
    obj.entry = message.entry ? Entry.toAmino(message.entry) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEntryByDenomResponseAminoMsg): QueryEntryByDenomResponse {
    return QueryEntryByDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEntryByDenomResponseProtoMsg): QueryEntryByDenomResponse {
    return QueryEntryByDenomResponse.decode(message.value);
  },
  toProto(message: QueryEntryByDenomResponse): Uint8Array {
    return QueryEntryByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEntryByDenomResponse): QueryEntryByDenomResponseProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.QueryEntryByDenomResponse",
      value: QueryEntryByDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllEntryRequest(): QueryAllEntryRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllEntryRequest = {
  typeUrl: "/elys.assetprofile.QueryAllEntryRequest",
  encode(message: QueryAllEntryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEntryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEntryRequest();
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
  fromPartial(object: Partial<QueryAllEntryRequest>): QueryAllEntryRequest {
    const message = createBaseQueryAllEntryRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllEntryRequestAmino): QueryAllEntryRequest {
    const message = createBaseQueryAllEntryRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllEntryRequest): QueryAllEntryRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllEntryRequestAminoMsg): QueryAllEntryRequest {
    return QueryAllEntryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllEntryRequestProtoMsg): QueryAllEntryRequest {
    return QueryAllEntryRequest.decode(message.value);
  },
  toProto(message: QueryAllEntryRequest): Uint8Array {
    return QueryAllEntryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllEntryRequest): QueryAllEntryRequestProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.QueryAllEntryRequest",
      value: QueryAllEntryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllEntryResponse(): QueryAllEntryResponse {
  return {
    entry: [],
    pagination: undefined
  };
}
export const QueryAllEntryResponse = {
  typeUrl: "/elys.assetprofile.QueryAllEntryResponse",
  encode(message: QueryAllEntryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entry) {
      Entry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEntryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entry.push(Entry.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllEntryResponse>): QueryAllEntryResponse {
    const message = createBaseQueryAllEntryResponse();
    message.entry = object.entry?.map(e => Entry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllEntryResponseAmino): QueryAllEntryResponse {
    const message = createBaseQueryAllEntryResponse();
    message.entry = object.entry?.map(e => Entry.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllEntryResponse): QueryAllEntryResponseAmino {
    const obj: any = {};
    if (message.entry) {
      obj.entry = message.entry.map(e => e ? Entry.toAmino(e) : undefined);
    } else {
      obj.entry = message.entry;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllEntryResponseAminoMsg): QueryAllEntryResponse {
    return QueryAllEntryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllEntryResponseProtoMsg): QueryAllEntryResponse {
    return QueryAllEntryResponse.decode(message.value);
  },
  toProto(message: QueryAllEntryResponse): Uint8Array {
    return QueryAllEntryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllEntryResponse): QueryAllEntryResponseProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.QueryAllEntryResponse",
      value: QueryAllEntryResponse.encode(message).finish()
    };
  }
};