import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { AnteHandlerParam, AnteHandlerParamAmino, AnteHandlerParamSDKType } from "./ante_handler_param";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/elys.parameter.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/elys.parameter.QueryParamsRequest";
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
  typeUrl: "/elys.parameter.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/elys.parameter.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryAllAnteHandlerParamRequest {
  pagination?: PageRequest;
}
export interface QueryAllAnteHandlerParamRequestProtoMsg {
  typeUrl: "/elys.parameter.QueryAllAnteHandlerParamRequest";
  value: Uint8Array;
}
export interface QueryAllAnteHandlerParamRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllAnteHandlerParamRequestAminoMsg {
  type: "/elys.parameter.QueryAllAnteHandlerParamRequest";
  value: QueryAllAnteHandlerParamRequestAmino;
}
export interface QueryAllAnteHandlerParamRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllAnteHandlerParamResponse {
  anteHandlerParam: AnteHandlerParam[];
  pagination?: PageResponse;
}
export interface QueryAllAnteHandlerParamResponseProtoMsg {
  typeUrl: "/elys.parameter.QueryAllAnteHandlerParamResponse";
  value: Uint8Array;
}
export interface QueryAllAnteHandlerParamResponseAmino {
  ante_handler_param: AnteHandlerParamAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllAnteHandlerParamResponseAminoMsg {
  type: "/elys.parameter.QueryAllAnteHandlerParamResponse";
  value: QueryAllAnteHandlerParamResponseAmino;
}
export interface QueryAllAnteHandlerParamResponseSDKType {
  ante_handler_param: AnteHandlerParamSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/elys.parameter.QueryParamsRequest",
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
      typeUrl: "/elys.parameter.QueryParamsRequest",
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
  typeUrl: "/elys.parameter.QueryParamsResponse",
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
      typeUrl: "/elys.parameter.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllAnteHandlerParamRequest(): QueryAllAnteHandlerParamRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllAnteHandlerParamRequest = {
  typeUrl: "/elys.parameter.QueryAllAnteHandlerParamRequest",
  encode(message: QueryAllAnteHandlerParamRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAnteHandlerParamRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAnteHandlerParamRequest();
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
  fromPartial(object: Partial<QueryAllAnteHandlerParamRequest>): QueryAllAnteHandlerParamRequest {
    const message = createBaseQueryAllAnteHandlerParamRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAnteHandlerParamRequestAmino): QueryAllAnteHandlerParamRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllAnteHandlerParamRequest): QueryAllAnteHandlerParamRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAnteHandlerParamRequestAminoMsg): QueryAllAnteHandlerParamRequest {
    return QueryAllAnteHandlerParamRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAnteHandlerParamRequestProtoMsg): QueryAllAnteHandlerParamRequest {
    return QueryAllAnteHandlerParamRequest.decode(message.value);
  },
  toProto(message: QueryAllAnteHandlerParamRequest): Uint8Array {
    return QueryAllAnteHandlerParamRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAnteHandlerParamRequest): QueryAllAnteHandlerParamRequestProtoMsg {
    return {
      typeUrl: "/elys.parameter.QueryAllAnteHandlerParamRequest",
      value: QueryAllAnteHandlerParamRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllAnteHandlerParamResponse(): QueryAllAnteHandlerParamResponse {
  return {
    anteHandlerParam: [],
    pagination: undefined
  };
}
export const QueryAllAnteHandlerParamResponse = {
  typeUrl: "/elys.parameter.QueryAllAnteHandlerParamResponse",
  encode(message: QueryAllAnteHandlerParamResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.anteHandlerParam) {
      AnteHandlerParam.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAnteHandlerParamResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAnteHandlerParamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.anteHandlerParam.push(AnteHandlerParam.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllAnteHandlerParamResponse>): QueryAllAnteHandlerParamResponse {
    const message = createBaseQueryAllAnteHandlerParamResponse();
    message.anteHandlerParam = object.anteHandlerParam?.map(e => AnteHandlerParam.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAnteHandlerParamResponseAmino): QueryAllAnteHandlerParamResponse {
    return {
      anteHandlerParam: Array.isArray(object?.ante_handler_param) ? object.ante_handler_param.map((e: any) => AnteHandlerParam.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllAnteHandlerParamResponse): QueryAllAnteHandlerParamResponseAmino {
    const obj: any = {};
    if (message.anteHandlerParam) {
      obj.ante_handler_param = message.anteHandlerParam.map(e => e ? AnteHandlerParam.toAmino(e) : undefined);
    } else {
      obj.ante_handler_param = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAnteHandlerParamResponseAminoMsg): QueryAllAnteHandlerParamResponse {
    return QueryAllAnteHandlerParamResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAnteHandlerParamResponseProtoMsg): QueryAllAnteHandlerParamResponse {
    return QueryAllAnteHandlerParamResponse.decode(message.value);
  },
  toProto(message: QueryAllAnteHandlerParamResponse): Uint8Array {
    return QueryAllAnteHandlerParamResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAnteHandlerParamResponse): QueryAllAnteHandlerParamResponseProtoMsg {
    return {
      typeUrl: "/elys.parameter.QueryAllAnteHandlerParamResponse",
      value: QueryAllAnteHandlerParamResponse.encode(message).finish()
    };
  }
};