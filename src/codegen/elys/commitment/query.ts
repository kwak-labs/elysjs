import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Commitments, CommitmentsAmino, CommitmentsSDKType } from "./commitments";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/elys.commitment.QueryParamsRequest";
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
  typeUrl: "/elys.commitment.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/elys.commitment.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryShowCommitmentsRequest {
  creator: string;
}
export interface QueryShowCommitmentsRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryShowCommitmentsRequest";
  value: Uint8Array;
}
export interface QueryShowCommitmentsRequestAmino {
  creator: string;
}
export interface QueryShowCommitmentsRequestAminoMsg {
  type: "/elys.commitment.QueryShowCommitmentsRequest";
  value: QueryShowCommitmentsRequestAmino;
}
export interface QueryShowCommitmentsRequestSDKType {
  creator: string;
}
export interface QueryShowCommitmentsResponse {
  commitments?: Commitments;
}
export interface QueryShowCommitmentsResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryShowCommitmentsResponse";
  value: Uint8Array;
}
export interface QueryShowCommitmentsResponseAmino {
  commitments?: CommitmentsAmino;
}
export interface QueryShowCommitmentsResponseAminoMsg {
  type: "/elys.commitment.QueryShowCommitmentsResponse";
  value: QueryShowCommitmentsResponseAmino;
}
export interface QueryShowCommitmentsResponseSDKType {
  commitments?: CommitmentsSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/elys.commitment.QueryParamsRequest",
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
      typeUrl: "/elys.commitment.QueryParamsRequest",
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
  typeUrl: "/elys.commitment.QueryParamsResponse",
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
      typeUrl: "/elys.commitment.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShowCommitmentsRequest(): QueryShowCommitmentsRequest {
  return {
    creator: ""
  };
}
export const QueryShowCommitmentsRequest = {
  typeUrl: "/elys.commitment.QueryShowCommitmentsRequest",
  encode(message: QueryShowCommitmentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowCommitmentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowCommitmentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowCommitmentsRequest>): QueryShowCommitmentsRequest {
    const message = createBaseQueryShowCommitmentsRequest();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: QueryShowCommitmentsRequestAmino): QueryShowCommitmentsRequest {
    return {
      creator: object.creator
    };
  },
  toAmino(message: QueryShowCommitmentsRequest): QueryShowCommitmentsRequestAmino {
    const obj: any = {};
    obj.creator = message.creator;
    return obj;
  },
  fromAminoMsg(object: QueryShowCommitmentsRequestAminoMsg): QueryShowCommitmentsRequest {
    return QueryShowCommitmentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowCommitmentsRequestProtoMsg): QueryShowCommitmentsRequest {
    return QueryShowCommitmentsRequest.decode(message.value);
  },
  toProto(message: QueryShowCommitmentsRequest): Uint8Array {
    return QueryShowCommitmentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowCommitmentsRequest): QueryShowCommitmentsRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryShowCommitmentsRequest",
      value: QueryShowCommitmentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShowCommitmentsResponse(): QueryShowCommitmentsResponse {
  return {
    commitments: undefined
  };
}
export const QueryShowCommitmentsResponse = {
  typeUrl: "/elys.commitment.QueryShowCommitmentsResponse",
  encode(message: QueryShowCommitmentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commitments !== undefined) {
      Commitments.encode(message.commitments, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowCommitmentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowCommitmentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitments = Commitments.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowCommitmentsResponse>): QueryShowCommitmentsResponse {
    const message = createBaseQueryShowCommitmentsResponse();
    message.commitments = object.commitments !== undefined && object.commitments !== null ? Commitments.fromPartial(object.commitments) : undefined;
    return message;
  },
  fromAmino(object: QueryShowCommitmentsResponseAmino): QueryShowCommitmentsResponse {
    return {
      commitments: object?.commitments ? Commitments.fromAmino(object.commitments) : undefined
    };
  },
  toAmino(message: QueryShowCommitmentsResponse): QueryShowCommitmentsResponseAmino {
    const obj: any = {};
    obj.commitments = message.commitments ? Commitments.toAmino(message.commitments) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowCommitmentsResponseAminoMsg): QueryShowCommitmentsResponse {
    return QueryShowCommitmentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowCommitmentsResponseProtoMsg): QueryShowCommitmentsResponse {
    return QueryShowCommitmentsResponse.decode(message.value);
  },
  toProto(message: QueryShowCommitmentsResponse): Uint8Array {
    return QueryShowCommitmentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowCommitmentsResponse): QueryShowCommitmentsResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryShowCommitmentsResponse",
      value: QueryShowCommitmentsResponse.encode(message).finish()
    };
  }
};