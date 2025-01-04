//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/elys.stablestake.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/elys.stablestake.QueryParamsRequest";
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
  typeUrl: "/elys.stablestake.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/elys.stablestake.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryBorrowRatioRequest is request type for the Query/BorrowRatio RPC method. */
export interface QueryBorrowRatioRequest {}
export interface QueryBorrowRatioRequestProtoMsg {
  typeUrl: "/elys.stablestake.QueryBorrowRatioRequest";
  value: Uint8Array;
}
/** QueryBorrowRatioRequest is request type for the Query/BorrowRatio RPC method. */
export interface QueryBorrowRatioRequestAmino {}
export interface QueryBorrowRatioRequestAminoMsg {
  type: "/elys.stablestake.QueryBorrowRatioRequest";
  value: QueryBorrowRatioRequestAmino;
}
/** QueryBorrowRatioRequest is request type for the Query/BorrowRatio RPC method. */
export interface QueryBorrowRatioRequestSDKType {}
/**
 * QueryBorrowRatioResponse is response type for the Query/BorrowRatio RPC
 * method.
 */
export interface QueryBorrowRatioResponse {
  totalDeposit: string;
  totalBorrow: string;
  borrowRatio: string;
}
export interface QueryBorrowRatioResponseProtoMsg {
  typeUrl: "/elys.stablestake.QueryBorrowRatioResponse";
  value: Uint8Array;
}
/**
 * QueryBorrowRatioResponse is response type for the Query/BorrowRatio RPC
 * method.
 */
export interface QueryBorrowRatioResponseAmino {
  total_deposit?: string;
  total_borrow?: string;
  borrow_ratio?: string;
}
export interface QueryBorrowRatioResponseAminoMsg {
  type: "/elys.stablestake.QueryBorrowRatioResponse";
  value: QueryBorrowRatioResponseAmino;
}
/**
 * QueryBorrowRatioResponse is response type for the Query/BorrowRatio RPC
 * method.
 */
export interface QueryBorrowRatioResponseSDKType {
  total_deposit: string;
  total_borrow: string;
  borrow_ratio: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/elys.stablestake.QueryParamsRequest",
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
      typeUrl: "/elys.stablestake.QueryParamsRequest",
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
  typeUrl: "/elys.stablestake.QueryParamsResponse",
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
      typeUrl: "/elys.stablestake.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBorrowRatioRequest(): QueryBorrowRatioRequest {
  return {};
}
export const QueryBorrowRatioRequest = {
  typeUrl: "/elys.stablestake.QueryBorrowRatioRequest",
  encode(_: QueryBorrowRatioRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBorrowRatioRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBorrowRatioRequest();
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
  fromPartial(_: Partial<QueryBorrowRatioRequest>): QueryBorrowRatioRequest {
    const message = createBaseQueryBorrowRatioRequest();
    return message;
  },
  fromAmino(_: QueryBorrowRatioRequestAmino): QueryBorrowRatioRequest {
    const message = createBaseQueryBorrowRatioRequest();
    return message;
  },
  toAmino(_: QueryBorrowRatioRequest): QueryBorrowRatioRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBorrowRatioRequestAminoMsg): QueryBorrowRatioRequest {
    return QueryBorrowRatioRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBorrowRatioRequestProtoMsg): QueryBorrowRatioRequest {
    return QueryBorrowRatioRequest.decode(message.value);
  },
  toProto(message: QueryBorrowRatioRequest): Uint8Array {
    return QueryBorrowRatioRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBorrowRatioRequest): QueryBorrowRatioRequestProtoMsg {
    return {
      typeUrl: "/elys.stablestake.QueryBorrowRatioRequest",
      value: QueryBorrowRatioRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBorrowRatioResponse(): QueryBorrowRatioResponse {
  return {
    totalDeposit: "",
    totalBorrow: "",
    borrowRatio: ""
  };
}
export const QueryBorrowRatioResponse = {
  typeUrl: "/elys.stablestake.QueryBorrowRatioResponse",
  encode(message: QueryBorrowRatioResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalDeposit !== "") {
      writer.uint32(10).string(message.totalDeposit);
    }
    if (message.totalBorrow !== "") {
      writer.uint32(18).string(message.totalBorrow);
    }
    if (message.borrowRatio !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.borrowRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBorrowRatioResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBorrowRatioResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalDeposit = reader.string();
          break;
        case 2:
          message.totalBorrow = reader.string();
          break;
        case 3:
          message.borrowRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBorrowRatioResponse>): QueryBorrowRatioResponse {
    const message = createBaseQueryBorrowRatioResponse();
    message.totalDeposit = object.totalDeposit ?? "";
    message.totalBorrow = object.totalBorrow ?? "";
    message.borrowRatio = object.borrowRatio ?? "";
    return message;
  },
  fromAmino(object: QueryBorrowRatioResponseAmino): QueryBorrowRatioResponse {
    const message = createBaseQueryBorrowRatioResponse();
    if (object.total_deposit !== undefined && object.total_deposit !== null) {
      message.totalDeposit = object.total_deposit;
    }
    if (object.total_borrow !== undefined && object.total_borrow !== null) {
      message.totalBorrow = object.total_borrow;
    }
    if (object.borrow_ratio !== undefined && object.borrow_ratio !== null) {
      message.borrowRatio = object.borrow_ratio;
    }
    return message;
  },
  toAmino(message: QueryBorrowRatioResponse): QueryBorrowRatioResponseAmino {
    const obj: any = {};
    obj.total_deposit = message.totalDeposit === "" ? undefined : message.totalDeposit;
    obj.total_borrow = message.totalBorrow === "" ? undefined : message.totalBorrow;
    obj.borrow_ratio = message.borrowRatio === "" ? undefined : message.borrowRatio;
    return obj;
  },
  fromAminoMsg(object: QueryBorrowRatioResponseAminoMsg): QueryBorrowRatioResponse {
    return QueryBorrowRatioResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBorrowRatioResponseProtoMsg): QueryBorrowRatioResponse {
    return QueryBorrowRatioResponse.decode(message.value);
  },
  toProto(message: QueryBorrowRatioResponse): Uint8Array {
    return QueryBorrowRatioResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBorrowRatioResponse): QueryBorrowRatioResponseProtoMsg {
    return {
      typeUrl: "/elys.stablestake.QueryBorrowRatioResponse",
      value: QueryBorrowRatioResponse.encode(message).finish()
    };
  }
};