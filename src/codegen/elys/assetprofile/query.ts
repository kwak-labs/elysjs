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
export interface QueryGetEntryRequest {
  baseDenom: string;
}
export interface QueryGetEntryRequestProtoMsg {
  typeUrl: "/elys.assetprofile.QueryGetEntryRequest";
  value: Uint8Array;
}
export interface QueryGetEntryRequestAmino {
  base_denom: string;
}
export interface QueryGetEntryRequestAminoMsg {
  type: "/elys.assetprofile.QueryGetEntryRequest";
  value: QueryGetEntryRequestAmino;
}
export interface QueryGetEntryRequestSDKType {
  base_denom: string;
}
export interface QueryGetEntryResponse {
  entry: Entry;
}
export interface QueryGetEntryResponseProtoMsg {
  typeUrl: "/elys.assetprofile.QueryGetEntryResponse";
  value: Uint8Array;
}
export interface QueryGetEntryResponseAmino {
  entry?: EntryAmino;
}
export interface QueryGetEntryResponseAminoMsg {
  type: "/elys.assetprofile.QueryGetEntryResponse";
  value: QueryGetEntryResponseAmino;
}
export interface QueryGetEntryResponseSDKType {
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
  entry: EntryAmino[];
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
      typeUrl: "/elys.assetprofile.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetEntryRequest(): QueryGetEntryRequest {
  return {
    baseDenom: ""
  };
}
export const QueryGetEntryRequest = {
  typeUrl: "/elys.assetprofile.QueryGetEntryRequest",
  encode(message: QueryGetEntryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEntryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEntryRequest();
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
  fromPartial(object: Partial<QueryGetEntryRequest>): QueryGetEntryRequest {
    const message = createBaseQueryGetEntryRequest();
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
  fromAmino(object: QueryGetEntryRequestAmino): QueryGetEntryRequest {
    return {
      baseDenom: object.base_denom
    };
  },
  toAmino(message: QueryGetEntryRequest): QueryGetEntryRequestAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom;
    return obj;
  },
  fromAminoMsg(object: QueryGetEntryRequestAminoMsg): QueryGetEntryRequest {
    return QueryGetEntryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEntryRequestProtoMsg): QueryGetEntryRequest {
    return QueryGetEntryRequest.decode(message.value);
  },
  toProto(message: QueryGetEntryRequest): Uint8Array {
    return QueryGetEntryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEntryRequest): QueryGetEntryRequestProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.QueryGetEntryRequest",
      value: QueryGetEntryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetEntryResponse(): QueryGetEntryResponse {
  return {
    entry: Entry.fromPartial({})
  };
}
export const QueryGetEntryResponse = {
  typeUrl: "/elys.assetprofile.QueryGetEntryResponse",
  encode(message: QueryGetEntryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.entry !== undefined) {
      Entry.encode(message.entry, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEntryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEntryResponse();
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
  fromPartial(object: Partial<QueryGetEntryResponse>): QueryGetEntryResponse {
    const message = createBaseQueryGetEntryResponse();
    message.entry = object.entry !== undefined && object.entry !== null ? Entry.fromPartial(object.entry) : undefined;
    return message;
  },
  fromAmino(object: QueryGetEntryResponseAmino): QueryGetEntryResponse {
    return {
      entry: object?.entry ? Entry.fromAmino(object.entry) : undefined
    };
  },
  toAmino(message: QueryGetEntryResponse): QueryGetEntryResponseAmino {
    const obj: any = {};
    obj.entry = message.entry ? Entry.toAmino(message.entry) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetEntryResponseAminoMsg): QueryGetEntryResponse {
    return QueryGetEntryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEntryResponseProtoMsg): QueryGetEntryResponse {
    return QueryGetEntryResponse.decode(message.value);
  },
  toProto(message: QueryGetEntryResponse): Uint8Array {
    return QueryGetEntryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEntryResponse): QueryGetEntryResponseProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.QueryGetEntryResponse",
      value: QueryGetEntryResponse.encode(message).finish()
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
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
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
    return {
      entry: Array.isArray(object?.entry) ? object.entry.map((e: any) => Entry.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllEntryResponse): QueryAllEntryResponseAmino {
    const obj: any = {};
    if (message.entry) {
      obj.entry = message.entry.map(e => e ? Entry.toAmino(e) : undefined);
    } else {
      obj.entry = [];
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