//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Status, SpotOrder, SpotOrderAmino, SpotOrderSDKType, PerpetualOrderExtraInfo, PerpetualOrderExtraInfoAmino, PerpetualOrderExtraInfoSDKType } from "./types";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/elys.tradeshield.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/elys.tradeshield.QueryParamsRequest";
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
  typeUrl: "/elys.tradeshield.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/elys.tradeshield.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetPendingSpotOrderRequest {
  id: bigint;
}
export interface QueryGetPendingSpotOrderRequestProtoMsg {
  typeUrl: "/elys.tradeshield.QueryGetPendingSpotOrderRequest";
  value: Uint8Array;
}
export interface QueryGetPendingSpotOrderRequestAmino {
  id?: string;
}
export interface QueryGetPendingSpotOrderRequestAminoMsg {
  type: "/elys.tradeshield.QueryGetPendingSpotOrderRequest";
  value: QueryGetPendingSpotOrderRequestAmino;
}
export interface QueryGetPendingSpotOrderRequestSDKType {
  id: bigint;
}
export interface QueryGetPendingSpotOrderResponse {
  pendingSpotOrder: SpotOrder;
}
export interface QueryGetPendingSpotOrderResponseProtoMsg {
  typeUrl: "/elys.tradeshield.QueryGetPendingSpotOrderResponse";
  value: Uint8Array;
}
export interface QueryGetPendingSpotOrderResponseAmino {
  pending_spot_order?: SpotOrderAmino;
}
export interface QueryGetPendingSpotOrderResponseAminoMsg {
  type: "/elys.tradeshield.QueryGetPendingSpotOrderResponse";
  value: QueryGetPendingSpotOrderResponseAmino;
}
export interface QueryGetPendingSpotOrderResponseSDKType {
  pending_spot_order: SpotOrderSDKType;
}
export interface QueryAllPendingSpotOrderRequest {
  pagination?: PageRequest;
}
export interface QueryAllPendingSpotOrderRequestProtoMsg {
  typeUrl: "/elys.tradeshield.QueryAllPendingSpotOrderRequest";
  value: Uint8Array;
}
export interface QueryAllPendingSpotOrderRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPendingSpotOrderRequestAminoMsg {
  type: "/elys.tradeshield.QueryAllPendingSpotOrderRequest";
  value: QueryAllPendingSpotOrderRequestAmino;
}
export interface QueryAllPendingSpotOrderRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPendingSpotOrderResponse {
  pendingSpotOrder: SpotOrder[];
  pagination?: PageResponse;
}
export interface QueryAllPendingSpotOrderResponseProtoMsg {
  typeUrl: "/elys.tradeshield.QueryAllPendingSpotOrderResponse";
  value: Uint8Array;
}
export interface QueryAllPendingSpotOrderResponseAmino {
  pending_spot_order?: SpotOrderAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPendingSpotOrderResponseAminoMsg {
  type: "/elys.tradeshield.QueryAllPendingSpotOrderResponse";
  value: QueryAllPendingSpotOrderResponseAmino;
}
export interface QueryAllPendingSpotOrderResponseSDKType {
  pending_spot_order: SpotOrderSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetPendingPerpetualOrderRequest {
  id: bigint;
}
export interface QueryGetPendingPerpetualOrderRequestProtoMsg {
  typeUrl: "/elys.tradeshield.QueryGetPendingPerpetualOrderRequest";
  value: Uint8Array;
}
export interface QueryGetPendingPerpetualOrderRequestAmino {
  id?: string;
}
export interface QueryGetPendingPerpetualOrderRequestAminoMsg {
  type: "/elys.tradeshield.QueryGetPendingPerpetualOrderRequest";
  value: QueryGetPendingPerpetualOrderRequestAmino;
}
export interface QueryGetPendingPerpetualOrderRequestSDKType {
  id: bigint;
}
export interface QueryGetPendingPerpetualOrderResponse {
  pendingPerpetualOrder: PerpetualOrderExtraInfo;
}
export interface QueryGetPendingPerpetualOrderResponseProtoMsg {
  typeUrl: "/elys.tradeshield.QueryGetPendingPerpetualOrderResponse";
  value: Uint8Array;
}
export interface QueryGetPendingPerpetualOrderResponseAmino {
  pending_perpetual_order?: PerpetualOrderExtraInfoAmino;
}
export interface QueryGetPendingPerpetualOrderResponseAminoMsg {
  type: "/elys.tradeshield.QueryGetPendingPerpetualOrderResponse";
  value: QueryGetPendingPerpetualOrderResponseAmino;
}
export interface QueryGetPendingPerpetualOrderResponseSDKType {
  pending_perpetual_order: PerpetualOrderExtraInfoSDKType;
}
export interface QueryAllPendingPerpetualOrderRequest {
  pagination?: PageRequest;
}
export interface QueryAllPendingPerpetualOrderRequestProtoMsg {
  typeUrl: "/elys.tradeshield.QueryAllPendingPerpetualOrderRequest";
  value: Uint8Array;
}
export interface QueryAllPendingPerpetualOrderRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPendingPerpetualOrderRequestAminoMsg {
  type: "/elys.tradeshield.QueryAllPendingPerpetualOrderRequest";
  value: QueryAllPendingPerpetualOrderRequestAmino;
}
export interface QueryAllPendingPerpetualOrderRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPendingPerpetualOrderResponse {
  pendingPerpetualOrder: PerpetualOrderExtraInfo[];
  pagination?: PageResponse;
}
export interface QueryAllPendingPerpetualOrderResponseProtoMsg {
  typeUrl: "/elys.tradeshield.QueryAllPendingPerpetualOrderResponse";
  value: Uint8Array;
}
export interface QueryAllPendingPerpetualOrderResponseAmino {
  pending_perpetual_order?: PerpetualOrderExtraInfoAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPendingPerpetualOrderResponseAminoMsg {
  type: "/elys.tradeshield.QueryAllPendingPerpetualOrderResponse";
  value: QueryAllPendingPerpetualOrderResponseAmino;
}
export interface QueryAllPendingPerpetualOrderResponseSDKType {
  pending_perpetual_order: PerpetualOrderExtraInfoSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryPendingPerpetualOrderForAddressRequest {
  address: string;
  status: Status;
}
export interface QueryPendingPerpetualOrderForAddressRequestProtoMsg {
  typeUrl: "/elys.tradeshield.QueryPendingPerpetualOrderForAddressRequest";
  value: Uint8Array;
}
export interface QueryPendingPerpetualOrderForAddressRequestAmino {
  address?: string;
  status?: Status;
}
export interface QueryPendingPerpetualOrderForAddressRequestAminoMsg {
  type: "/elys.tradeshield.QueryPendingPerpetualOrderForAddressRequest";
  value: QueryPendingPerpetualOrderForAddressRequestAmino;
}
export interface QueryPendingPerpetualOrderForAddressRequestSDKType {
  address: string;
  status: Status;
}
export interface QueryPendingPerpetualOrderForAddressResponse {
  pendingPerpetualOrders: PerpetualOrderExtraInfo[];
}
export interface QueryPendingPerpetualOrderForAddressResponseProtoMsg {
  typeUrl: "/elys.tradeshield.QueryPendingPerpetualOrderForAddressResponse";
  value: Uint8Array;
}
export interface QueryPendingPerpetualOrderForAddressResponseAmino {
  pending_perpetual_orders?: PerpetualOrderExtraInfoAmino[];
}
export interface QueryPendingPerpetualOrderForAddressResponseAminoMsg {
  type: "/elys.tradeshield.QueryPendingPerpetualOrderForAddressResponse";
  value: QueryPendingPerpetualOrderForAddressResponseAmino;
}
export interface QueryPendingPerpetualOrderForAddressResponseSDKType {
  pending_perpetual_orders: PerpetualOrderExtraInfoSDKType[];
}
export interface QueryPendingSpotOrderForAddressRequest {
  address: string;
  status: Status;
}
export interface QueryPendingSpotOrderForAddressRequestProtoMsg {
  typeUrl: "/elys.tradeshield.QueryPendingSpotOrderForAddressRequest";
  value: Uint8Array;
}
export interface QueryPendingSpotOrderForAddressRequestAmino {
  address?: string;
  status?: Status;
}
export interface QueryPendingSpotOrderForAddressRequestAminoMsg {
  type: "/elys.tradeshield.QueryPendingSpotOrderForAddressRequest";
  value: QueryPendingSpotOrderForAddressRequestAmino;
}
export interface QueryPendingSpotOrderForAddressRequestSDKType {
  address: string;
  status: Status;
}
export interface QueryPendingSpotOrderForAddressResponse {
  pendingSpotOrders: SpotOrder[];
}
export interface QueryPendingSpotOrderForAddressResponseProtoMsg {
  typeUrl: "/elys.tradeshield.QueryPendingSpotOrderForAddressResponse";
  value: Uint8Array;
}
export interface QueryPendingSpotOrderForAddressResponseAmino {
  pending_spot_orders?: SpotOrderAmino[];
}
export interface QueryPendingSpotOrderForAddressResponseAminoMsg {
  type: "/elys.tradeshield.QueryPendingSpotOrderForAddressResponse";
  value: QueryPendingSpotOrderForAddressResponseAmino;
}
export interface QueryPendingSpotOrderForAddressResponseSDKType {
  pending_spot_orders: SpotOrderSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/elys.tradeshield.QueryParamsRequest",
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
      typeUrl: "/elys.tradeshield.QueryParamsRequest",
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
  typeUrl: "/elys.tradeshield.QueryParamsResponse",
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
      typeUrl: "/elys.tradeshield.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPendingSpotOrderRequest(): QueryGetPendingSpotOrderRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetPendingSpotOrderRequest = {
  typeUrl: "/elys.tradeshield.QueryGetPendingSpotOrderRequest",
  encode(message: QueryGetPendingSpotOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPendingSpotOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingSpotOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPendingSpotOrderRequest>): QueryGetPendingSpotOrderRequest {
    const message = createBaseQueryGetPendingSpotOrderRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPendingSpotOrderRequestAmino): QueryGetPendingSpotOrderRequest {
    const message = createBaseQueryGetPendingSpotOrderRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetPendingSpotOrderRequest): QueryGetPendingSpotOrderRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPendingSpotOrderRequestAminoMsg): QueryGetPendingSpotOrderRequest {
    return QueryGetPendingSpotOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPendingSpotOrderRequestProtoMsg): QueryGetPendingSpotOrderRequest {
    return QueryGetPendingSpotOrderRequest.decode(message.value);
  },
  toProto(message: QueryGetPendingSpotOrderRequest): Uint8Array {
    return QueryGetPendingSpotOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPendingSpotOrderRequest): QueryGetPendingSpotOrderRequestProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.QueryGetPendingSpotOrderRequest",
      value: QueryGetPendingSpotOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPendingSpotOrderResponse(): QueryGetPendingSpotOrderResponse {
  return {
    pendingSpotOrder: SpotOrder.fromPartial({})
  };
}
export const QueryGetPendingSpotOrderResponse = {
  typeUrl: "/elys.tradeshield.QueryGetPendingSpotOrderResponse",
  encode(message: QueryGetPendingSpotOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pendingSpotOrder !== undefined) {
      SpotOrder.encode(message.pendingSpotOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPendingSpotOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingSpotOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingSpotOrder = SpotOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPendingSpotOrderResponse>): QueryGetPendingSpotOrderResponse {
    const message = createBaseQueryGetPendingSpotOrderResponse();
    message.pendingSpotOrder = object.pendingSpotOrder !== undefined && object.pendingSpotOrder !== null ? SpotOrder.fromPartial(object.pendingSpotOrder) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPendingSpotOrderResponseAmino): QueryGetPendingSpotOrderResponse {
    const message = createBaseQueryGetPendingSpotOrderResponse();
    if (object.pending_spot_order !== undefined && object.pending_spot_order !== null) {
      message.pendingSpotOrder = SpotOrder.fromAmino(object.pending_spot_order);
    }
    return message;
  },
  toAmino(message: QueryGetPendingSpotOrderResponse): QueryGetPendingSpotOrderResponseAmino {
    const obj: any = {};
    obj.pending_spot_order = message.pendingSpotOrder ? SpotOrder.toAmino(message.pendingSpotOrder) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPendingSpotOrderResponseAminoMsg): QueryGetPendingSpotOrderResponse {
    return QueryGetPendingSpotOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPendingSpotOrderResponseProtoMsg): QueryGetPendingSpotOrderResponse {
    return QueryGetPendingSpotOrderResponse.decode(message.value);
  },
  toProto(message: QueryGetPendingSpotOrderResponse): Uint8Array {
    return QueryGetPendingSpotOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPendingSpotOrderResponse): QueryGetPendingSpotOrderResponseProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.QueryGetPendingSpotOrderResponse",
      value: QueryGetPendingSpotOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPendingSpotOrderRequest(): QueryAllPendingSpotOrderRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPendingSpotOrderRequest = {
  typeUrl: "/elys.tradeshield.QueryAllPendingSpotOrderRequest",
  encode(message: QueryAllPendingSpotOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPendingSpotOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingSpotOrderRequest();
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
  fromPartial(object: Partial<QueryAllPendingSpotOrderRequest>): QueryAllPendingSpotOrderRequest {
    const message = createBaseQueryAllPendingSpotOrderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPendingSpotOrderRequestAmino): QueryAllPendingSpotOrderRequest {
    const message = createBaseQueryAllPendingSpotOrderRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPendingSpotOrderRequest): QueryAllPendingSpotOrderRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPendingSpotOrderRequestAminoMsg): QueryAllPendingSpotOrderRequest {
    return QueryAllPendingSpotOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPendingSpotOrderRequestProtoMsg): QueryAllPendingSpotOrderRequest {
    return QueryAllPendingSpotOrderRequest.decode(message.value);
  },
  toProto(message: QueryAllPendingSpotOrderRequest): Uint8Array {
    return QueryAllPendingSpotOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPendingSpotOrderRequest): QueryAllPendingSpotOrderRequestProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.QueryAllPendingSpotOrderRequest",
      value: QueryAllPendingSpotOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPendingSpotOrderResponse(): QueryAllPendingSpotOrderResponse {
  return {
    pendingSpotOrder: [],
    pagination: undefined
  };
}
export const QueryAllPendingSpotOrderResponse = {
  typeUrl: "/elys.tradeshield.QueryAllPendingSpotOrderResponse",
  encode(message: QueryAllPendingSpotOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pendingSpotOrder) {
      SpotOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPendingSpotOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingSpotOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingSpotOrder.push(SpotOrder.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllPendingSpotOrderResponse>): QueryAllPendingSpotOrderResponse {
    const message = createBaseQueryAllPendingSpotOrderResponse();
    message.pendingSpotOrder = object.pendingSpotOrder?.map(e => SpotOrder.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPendingSpotOrderResponseAmino): QueryAllPendingSpotOrderResponse {
    const message = createBaseQueryAllPendingSpotOrderResponse();
    message.pendingSpotOrder = object.pending_spot_order?.map(e => SpotOrder.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPendingSpotOrderResponse): QueryAllPendingSpotOrderResponseAmino {
    const obj: any = {};
    if (message.pendingSpotOrder) {
      obj.pending_spot_order = message.pendingSpotOrder.map(e => e ? SpotOrder.toAmino(e) : undefined);
    } else {
      obj.pending_spot_order = message.pendingSpotOrder;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPendingSpotOrderResponseAminoMsg): QueryAllPendingSpotOrderResponse {
    return QueryAllPendingSpotOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPendingSpotOrderResponseProtoMsg): QueryAllPendingSpotOrderResponse {
    return QueryAllPendingSpotOrderResponse.decode(message.value);
  },
  toProto(message: QueryAllPendingSpotOrderResponse): Uint8Array {
    return QueryAllPendingSpotOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPendingSpotOrderResponse): QueryAllPendingSpotOrderResponseProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.QueryAllPendingSpotOrderResponse",
      value: QueryAllPendingSpotOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPendingPerpetualOrderRequest(): QueryGetPendingPerpetualOrderRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetPendingPerpetualOrderRequest = {
  typeUrl: "/elys.tradeshield.QueryGetPendingPerpetualOrderRequest",
  encode(message: QueryGetPendingPerpetualOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPendingPerpetualOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingPerpetualOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPendingPerpetualOrderRequest>): QueryGetPendingPerpetualOrderRequest {
    const message = createBaseQueryGetPendingPerpetualOrderRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPendingPerpetualOrderRequestAmino): QueryGetPendingPerpetualOrderRequest {
    const message = createBaseQueryGetPendingPerpetualOrderRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetPendingPerpetualOrderRequest): QueryGetPendingPerpetualOrderRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPendingPerpetualOrderRequestAminoMsg): QueryGetPendingPerpetualOrderRequest {
    return QueryGetPendingPerpetualOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPendingPerpetualOrderRequestProtoMsg): QueryGetPendingPerpetualOrderRequest {
    return QueryGetPendingPerpetualOrderRequest.decode(message.value);
  },
  toProto(message: QueryGetPendingPerpetualOrderRequest): Uint8Array {
    return QueryGetPendingPerpetualOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPendingPerpetualOrderRequest): QueryGetPendingPerpetualOrderRequestProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.QueryGetPendingPerpetualOrderRequest",
      value: QueryGetPendingPerpetualOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPendingPerpetualOrderResponse(): QueryGetPendingPerpetualOrderResponse {
  return {
    pendingPerpetualOrder: PerpetualOrderExtraInfo.fromPartial({})
  };
}
export const QueryGetPendingPerpetualOrderResponse = {
  typeUrl: "/elys.tradeshield.QueryGetPendingPerpetualOrderResponse",
  encode(message: QueryGetPendingPerpetualOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pendingPerpetualOrder !== undefined) {
      PerpetualOrderExtraInfo.encode(message.pendingPerpetualOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPendingPerpetualOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingPerpetualOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingPerpetualOrder = PerpetualOrderExtraInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPendingPerpetualOrderResponse>): QueryGetPendingPerpetualOrderResponse {
    const message = createBaseQueryGetPendingPerpetualOrderResponse();
    message.pendingPerpetualOrder = object.pendingPerpetualOrder !== undefined && object.pendingPerpetualOrder !== null ? PerpetualOrderExtraInfo.fromPartial(object.pendingPerpetualOrder) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPendingPerpetualOrderResponseAmino): QueryGetPendingPerpetualOrderResponse {
    const message = createBaseQueryGetPendingPerpetualOrderResponse();
    if (object.pending_perpetual_order !== undefined && object.pending_perpetual_order !== null) {
      message.pendingPerpetualOrder = PerpetualOrderExtraInfo.fromAmino(object.pending_perpetual_order);
    }
    return message;
  },
  toAmino(message: QueryGetPendingPerpetualOrderResponse): QueryGetPendingPerpetualOrderResponseAmino {
    const obj: any = {};
    obj.pending_perpetual_order = message.pendingPerpetualOrder ? PerpetualOrderExtraInfo.toAmino(message.pendingPerpetualOrder) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPendingPerpetualOrderResponseAminoMsg): QueryGetPendingPerpetualOrderResponse {
    return QueryGetPendingPerpetualOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPendingPerpetualOrderResponseProtoMsg): QueryGetPendingPerpetualOrderResponse {
    return QueryGetPendingPerpetualOrderResponse.decode(message.value);
  },
  toProto(message: QueryGetPendingPerpetualOrderResponse): Uint8Array {
    return QueryGetPendingPerpetualOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPendingPerpetualOrderResponse): QueryGetPendingPerpetualOrderResponseProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.QueryGetPendingPerpetualOrderResponse",
      value: QueryGetPendingPerpetualOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPendingPerpetualOrderRequest(): QueryAllPendingPerpetualOrderRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPendingPerpetualOrderRequest = {
  typeUrl: "/elys.tradeshield.QueryAllPendingPerpetualOrderRequest",
  encode(message: QueryAllPendingPerpetualOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPendingPerpetualOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingPerpetualOrderRequest();
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
  fromPartial(object: Partial<QueryAllPendingPerpetualOrderRequest>): QueryAllPendingPerpetualOrderRequest {
    const message = createBaseQueryAllPendingPerpetualOrderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPendingPerpetualOrderRequestAmino): QueryAllPendingPerpetualOrderRequest {
    const message = createBaseQueryAllPendingPerpetualOrderRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPendingPerpetualOrderRequest): QueryAllPendingPerpetualOrderRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPendingPerpetualOrderRequestAminoMsg): QueryAllPendingPerpetualOrderRequest {
    return QueryAllPendingPerpetualOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPendingPerpetualOrderRequestProtoMsg): QueryAllPendingPerpetualOrderRequest {
    return QueryAllPendingPerpetualOrderRequest.decode(message.value);
  },
  toProto(message: QueryAllPendingPerpetualOrderRequest): Uint8Array {
    return QueryAllPendingPerpetualOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPendingPerpetualOrderRequest): QueryAllPendingPerpetualOrderRequestProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.QueryAllPendingPerpetualOrderRequest",
      value: QueryAllPendingPerpetualOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPendingPerpetualOrderResponse(): QueryAllPendingPerpetualOrderResponse {
  return {
    pendingPerpetualOrder: [],
    pagination: undefined
  };
}
export const QueryAllPendingPerpetualOrderResponse = {
  typeUrl: "/elys.tradeshield.QueryAllPendingPerpetualOrderResponse",
  encode(message: QueryAllPendingPerpetualOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pendingPerpetualOrder) {
      PerpetualOrderExtraInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPendingPerpetualOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingPerpetualOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingPerpetualOrder.push(PerpetualOrderExtraInfo.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllPendingPerpetualOrderResponse>): QueryAllPendingPerpetualOrderResponse {
    const message = createBaseQueryAllPendingPerpetualOrderResponse();
    message.pendingPerpetualOrder = object.pendingPerpetualOrder?.map(e => PerpetualOrderExtraInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPendingPerpetualOrderResponseAmino): QueryAllPendingPerpetualOrderResponse {
    const message = createBaseQueryAllPendingPerpetualOrderResponse();
    message.pendingPerpetualOrder = object.pending_perpetual_order?.map(e => PerpetualOrderExtraInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPendingPerpetualOrderResponse): QueryAllPendingPerpetualOrderResponseAmino {
    const obj: any = {};
    if (message.pendingPerpetualOrder) {
      obj.pending_perpetual_order = message.pendingPerpetualOrder.map(e => e ? PerpetualOrderExtraInfo.toAmino(e) : undefined);
    } else {
      obj.pending_perpetual_order = message.pendingPerpetualOrder;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPendingPerpetualOrderResponseAminoMsg): QueryAllPendingPerpetualOrderResponse {
    return QueryAllPendingPerpetualOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPendingPerpetualOrderResponseProtoMsg): QueryAllPendingPerpetualOrderResponse {
    return QueryAllPendingPerpetualOrderResponse.decode(message.value);
  },
  toProto(message: QueryAllPendingPerpetualOrderResponse): Uint8Array {
    return QueryAllPendingPerpetualOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPendingPerpetualOrderResponse): QueryAllPendingPerpetualOrderResponseProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.QueryAllPendingPerpetualOrderResponse",
      value: QueryAllPendingPerpetualOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPendingPerpetualOrderForAddressRequest(): QueryPendingPerpetualOrderForAddressRequest {
  return {
    address: "",
    status: 0
  };
}
export const QueryPendingPerpetualOrderForAddressRequest = {
  typeUrl: "/elys.tradeshield.QueryPendingPerpetualOrderForAddressRequest",
  encode(message: QueryPendingPerpetualOrderForAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingPerpetualOrderForAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingPerpetualOrderForAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPendingPerpetualOrderForAddressRequest>): QueryPendingPerpetualOrderForAddressRequest {
    const message = createBaseQueryPendingPerpetualOrderForAddressRequest();
    message.address = object.address ?? "";
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: QueryPendingPerpetualOrderForAddressRequestAmino): QueryPendingPerpetualOrderForAddressRequest {
    const message = createBaseQueryPendingPerpetualOrderForAddressRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: QueryPendingPerpetualOrderForAddressRequest): QueryPendingPerpetualOrderForAddressRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: QueryPendingPerpetualOrderForAddressRequestAminoMsg): QueryPendingPerpetualOrderForAddressRequest {
    return QueryPendingPerpetualOrderForAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingPerpetualOrderForAddressRequestProtoMsg): QueryPendingPerpetualOrderForAddressRequest {
    return QueryPendingPerpetualOrderForAddressRequest.decode(message.value);
  },
  toProto(message: QueryPendingPerpetualOrderForAddressRequest): Uint8Array {
    return QueryPendingPerpetualOrderForAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingPerpetualOrderForAddressRequest): QueryPendingPerpetualOrderForAddressRequestProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.QueryPendingPerpetualOrderForAddressRequest",
      value: QueryPendingPerpetualOrderForAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPendingPerpetualOrderForAddressResponse(): QueryPendingPerpetualOrderForAddressResponse {
  return {
    pendingPerpetualOrders: []
  };
}
export const QueryPendingPerpetualOrderForAddressResponse = {
  typeUrl: "/elys.tradeshield.QueryPendingPerpetualOrderForAddressResponse",
  encode(message: QueryPendingPerpetualOrderForAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pendingPerpetualOrders) {
      PerpetualOrderExtraInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingPerpetualOrderForAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingPerpetualOrderForAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingPerpetualOrders.push(PerpetualOrderExtraInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPendingPerpetualOrderForAddressResponse>): QueryPendingPerpetualOrderForAddressResponse {
    const message = createBaseQueryPendingPerpetualOrderForAddressResponse();
    message.pendingPerpetualOrders = object.pendingPerpetualOrders?.map(e => PerpetualOrderExtraInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPendingPerpetualOrderForAddressResponseAmino): QueryPendingPerpetualOrderForAddressResponse {
    const message = createBaseQueryPendingPerpetualOrderForAddressResponse();
    message.pendingPerpetualOrders = object.pending_perpetual_orders?.map(e => PerpetualOrderExtraInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPendingPerpetualOrderForAddressResponse): QueryPendingPerpetualOrderForAddressResponseAmino {
    const obj: any = {};
    if (message.pendingPerpetualOrders) {
      obj.pending_perpetual_orders = message.pendingPerpetualOrders.map(e => e ? PerpetualOrderExtraInfo.toAmino(e) : undefined);
    } else {
      obj.pending_perpetual_orders = message.pendingPerpetualOrders;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPendingPerpetualOrderForAddressResponseAminoMsg): QueryPendingPerpetualOrderForAddressResponse {
    return QueryPendingPerpetualOrderForAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingPerpetualOrderForAddressResponseProtoMsg): QueryPendingPerpetualOrderForAddressResponse {
    return QueryPendingPerpetualOrderForAddressResponse.decode(message.value);
  },
  toProto(message: QueryPendingPerpetualOrderForAddressResponse): Uint8Array {
    return QueryPendingPerpetualOrderForAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingPerpetualOrderForAddressResponse): QueryPendingPerpetualOrderForAddressResponseProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.QueryPendingPerpetualOrderForAddressResponse",
      value: QueryPendingPerpetualOrderForAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPendingSpotOrderForAddressRequest(): QueryPendingSpotOrderForAddressRequest {
  return {
    address: "",
    status: 0
  };
}
export const QueryPendingSpotOrderForAddressRequest = {
  typeUrl: "/elys.tradeshield.QueryPendingSpotOrderForAddressRequest",
  encode(message: QueryPendingSpotOrderForAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingSpotOrderForAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingSpotOrderForAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPendingSpotOrderForAddressRequest>): QueryPendingSpotOrderForAddressRequest {
    const message = createBaseQueryPendingSpotOrderForAddressRequest();
    message.address = object.address ?? "";
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: QueryPendingSpotOrderForAddressRequestAmino): QueryPendingSpotOrderForAddressRequest {
    const message = createBaseQueryPendingSpotOrderForAddressRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: QueryPendingSpotOrderForAddressRequest): QueryPendingSpotOrderForAddressRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: QueryPendingSpotOrderForAddressRequestAminoMsg): QueryPendingSpotOrderForAddressRequest {
    return QueryPendingSpotOrderForAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingSpotOrderForAddressRequestProtoMsg): QueryPendingSpotOrderForAddressRequest {
    return QueryPendingSpotOrderForAddressRequest.decode(message.value);
  },
  toProto(message: QueryPendingSpotOrderForAddressRequest): Uint8Array {
    return QueryPendingSpotOrderForAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingSpotOrderForAddressRequest): QueryPendingSpotOrderForAddressRequestProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.QueryPendingSpotOrderForAddressRequest",
      value: QueryPendingSpotOrderForAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPendingSpotOrderForAddressResponse(): QueryPendingSpotOrderForAddressResponse {
  return {
    pendingSpotOrders: []
  };
}
export const QueryPendingSpotOrderForAddressResponse = {
  typeUrl: "/elys.tradeshield.QueryPendingSpotOrderForAddressResponse",
  encode(message: QueryPendingSpotOrderForAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pendingSpotOrders) {
      SpotOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingSpotOrderForAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingSpotOrderForAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingSpotOrders.push(SpotOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPendingSpotOrderForAddressResponse>): QueryPendingSpotOrderForAddressResponse {
    const message = createBaseQueryPendingSpotOrderForAddressResponse();
    message.pendingSpotOrders = object.pendingSpotOrders?.map(e => SpotOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPendingSpotOrderForAddressResponseAmino): QueryPendingSpotOrderForAddressResponse {
    const message = createBaseQueryPendingSpotOrderForAddressResponse();
    message.pendingSpotOrders = object.pending_spot_orders?.map(e => SpotOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPendingSpotOrderForAddressResponse): QueryPendingSpotOrderForAddressResponseAmino {
    const obj: any = {};
    if (message.pendingSpotOrders) {
      obj.pending_spot_orders = message.pendingSpotOrders.map(e => e ? SpotOrder.toAmino(e) : undefined);
    } else {
      obj.pending_spot_orders = message.pendingSpotOrders;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPendingSpotOrderForAddressResponseAminoMsg): QueryPendingSpotOrderForAddressResponse {
    return QueryPendingSpotOrderForAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingSpotOrderForAddressResponseProtoMsg): QueryPendingSpotOrderForAddressResponse {
    return QueryPendingSpotOrderForAddressResponse.decode(message.value);
  },
  toProto(message: QueryPendingSpotOrderForAddressResponse): Uint8Array {
    return QueryPendingSpotOrderForAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingSpotOrderForAddressResponse): QueryPendingSpotOrderForAddressResponseProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.QueryPendingSpotOrderForAddressResponse",
      value: QueryPendingSpotOrderForAddressResponse.encode(message).finish()
    };
  }
};