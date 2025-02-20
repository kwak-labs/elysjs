//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { History, HistoryAmino, HistorySDKType } from "./history";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/elys.burner.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/elys.burner.QueryParamsRequest";
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
  typeUrl: "/elys.burner.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/elys.burner.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetHistoryRequest {
  timestamp: string;
  denom: string;
}
export interface QueryGetHistoryRequestProtoMsg {
  typeUrl: "/elys.burner.QueryGetHistoryRequest";
  value: Uint8Array;
}
export interface QueryGetHistoryRequestAmino {
  timestamp?: string;
  denom?: string;
}
export interface QueryGetHistoryRequestAminoMsg {
  type: "/elys.burner.QueryGetHistoryRequest";
  value: QueryGetHistoryRequestAmino;
}
export interface QueryGetHistoryRequestSDKType {
  timestamp: string;
  denom: string;
}
export interface QueryGetHistoryResponse {
  history: History;
}
export interface QueryGetHistoryResponseProtoMsg {
  typeUrl: "/elys.burner.QueryGetHistoryResponse";
  value: Uint8Array;
}
export interface QueryGetHistoryResponseAmino {
  history?: HistoryAmino;
}
export interface QueryGetHistoryResponseAminoMsg {
  type: "/elys.burner.QueryGetHistoryResponse";
  value: QueryGetHistoryResponseAmino;
}
export interface QueryGetHistoryResponseSDKType {
  history: HistorySDKType;
}
export interface QueryAllHistoryRequest {
  pagination?: PageRequest;
}
export interface QueryAllHistoryRequestProtoMsg {
  typeUrl: "/elys.burner.QueryAllHistoryRequest";
  value: Uint8Array;
}
export interface QueryAllHistoryRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllHistoryRequestAminoMsg {
  type: "/elys.burner.QueryAllHistoryRequest";
  value: QueryAllHistoryRequestAmino;
}
export interface QueryAllHistoryRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllHistoryResponse {
  history: History[];
  pagination?: PageResponse;
}
export interface QueryAllHistoryResponseProtoMsg {
  typeUrl: "/elys.burner.QueryAllHistoryResponse";
  value: Uint8Array;
}
export interface QueryAllHistoryResponseAmino {
  history?: HistoryAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllHistoryResponseAminoMsg {
  type: "/elys.burner.QueryAllHistoryResponse";
  value: QueryAllHistoryResponseAmino;
}
export interface QueryAllHistoryResponseSDKType {
  history: HistorySDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/elys.burner.QueryParamsRequest",
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
      typeUrl: "/elys.burner.QueryParamsRequest",
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
  typeUrl: "/elys.burner.QueryParamsResponse",
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
      typeUrl: "/elys.burner.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetHistoryRequest(): QueryGetHistoryRequest {
  return {
    timestamp: "",
    denom: ""
  };
}
export const QueryGetHistoryRequest = {
  typeUrl: "/elys.burner.QueryGetHistoryRequest",
  encode(message: QueryGetHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== "") {
      writer.uint32(10).string(message.timestamp);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.string();
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
  fromPartial(object: Partial<QueryGetHistoryRequest>): QueryGetHistoryRequest {
    const message = createBaseQueryGetHistoryRequest();
    message.timestamp = object.timestamp ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetHistoryRequestAmino): QueryGetHistoryRequest {
    const message = createBaseQueryGetHistoryRequest();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetHistoryRequest): QueryGetHistoryRequestAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp === "" ? undefined : message.timestamp;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetHistoryRequestAminoMsg): QueryGetHistoryRequest {
    return QueryGetHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetHistoryRequestProtoMsg): QueryGetHistoryRequest {
    return QueryGetHistoryRequest.decode(message.value);
  },
  toProto(message: QueryGetHistoryRequest): Uint8Array {
    return QueryGetHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetHistoryRequest): QueryGetHistoryRequestProtoMsg {
    return {
      typeUrl: "/elys.burner.QueryGetHistoryRequest",
      value: QueryGetHistoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetHistoryResponse(): QueryGetHistoryResponse {
  return {
    history: History.fromPartial({})
  };
}
export const QueryGetHistoryResponse = {
  typeUrl: "/elys.burner.QueryGetHistoryResponse",
  encode(message: QueryGetHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.history !== undefined) {
      History.encode(message.history, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.history = History.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetHistoryResponse>): QueryGetHistoryResponse {
    const message = createBaseQueryGetHistoryResponse();
    message.history = object.history !== undefined && object.history !== null ? History.fromPartial(object.history) : undefined;
    return message;
  },
  fromAmino(object: QueryGetHistoryResponseAmino): QueryGetHistoryResponse {
    const message = createBaseQueryGetHistoryResponse();
    if (object.history !== undefined && object.history !== null) {
      message.history = History.fromAmino(object.history);
    }
    return message;
  },
  toAmino(message: QueryGetHistoryResponse): QueryGetHistoryResponseAmino {
    const obj: any = {};
    obj.history = message.history ? History.toAmino(message.history) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetHistoryResponseAminoMsg): QueryGetHistoryResponse {
    return QueryGetHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetHistoryResponseProtoMsg): QueryGetHistoryResponse {
    return QueryGetHistoryResponse.decode(message.value);
  },
  toProto(message: QueryGetHistoryResponse): Uint8Array {
    return QueryGetHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetHistoryResponse): QueryGetHistoryResponseProtoMsg {
    return {
      typeUrl: "/elys.burner.QueryGetHistoryResponse",
      value: QueryGetHistoryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllHistoryRequest(): QueryAllHistoryRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllHistoryRequest = {
  typeUrl: "/elys.burner.QueryAllHistoryRequest",
  encode(message: QueryAllHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHistoryRequest();
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
  fromPartial(object: Partial<QueryAllHistoryRequest>): QueryAllHistoryRequest {
    const message = createBaseQueryAllHistoryRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllHistoryRequestAmino): QueryAllHistoryRequest {
    const message = createBaseQueryAllHistoryRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllHistoryRequest): QueryAllHistoryRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllHistoryRequestAminoMsg): QueryAllHistoryRequest {
    return QueryAllHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllHistoryRequestProtoMsg): QueryAllHistoryRequest {
    return QueryAllHistoryRequest.decode(message.value);
  },
  toProto(message: QueryAllHistoryRequest): Uint8Array {
    return QueryAllHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllHistoryRequest): QueryAllHistoryRequestProtoMsg {
    return {
      typeUrl: "/elys.burner.QueryAllHistoryRequest",
      value: QueryAllHistoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllHistoryResponse(): QueryAllHistoryResponse {
  return {
    history: [],
    pagination: undefined
  };
}
export const QueryAllHistoryResponse = {
  typeUrl: "/elys.burner.QueryAllHistoryResponse",
  encode(message: QueryAllHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.history) {
      History.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.history.push(History.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllHistoryResponse>): QueryAllHistoryResponse {
    const message = createBaseQueryAllHistoryResponse();
    message.history = object.history?.map(e => History.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllHistoryResponseAmino): QueryAllHistoryResponse {
    const message = createBaseQueryAllHistoryResponse();
    message.history = object.history?.map(e => History.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllHistoryResponse): QueryAllHistoryResponseAmino {
    const obj: any = {};
    if (message.history) {
      obj.history = message.history.map(e => e ? History.toAmino(e) : undefined);
    } else {
      obj.history = message.history;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllHistoryResponseAminoMsg): QueryAllHistoryResponse {
    return QueryAllHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllHistoryResponseProtoMsg): QueryAllHistoryResponse {
    return QueryAllHistoryResponse.decode(message.value);
  },
  toProto(message: QueryAllHistoryResponse): Uint8Array {
    return QueryAllHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllHistoryResponse): QueryAllHistoryResponseProtoMsg {
    return {
      typeUrl: "/elys.burner.QueryAllHistoryResponse",
      value: QueryAllHistoryResponse.encode(message).finish()
    };
  }
};