import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BandPriceResult, BandPriceResultAmino, BandPriceResultSDKType } from "./band_price";
import { AssetInfo, AssetInfoAmino, AssetInfoSDKType } from "./asset_info";
import { Price, PriceAmino, PriceSDKType } from "./price";
import { PriceFeeder, PriceFeederAmino, PriceFeederSDKType } from "./price_feeder";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/elys.oracle.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/elys.oracle.QueryParamsRequest";
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
  typeUrl: "/elys.oracle.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/elys.oracle.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryBandPriceRequest {
  requestId: bigint;
}
export interface QueryBandPriceRequestProtoMsg {
  typeUrl: "/elys.oracle.QueryBandPriceRequest";
  value: Uint8Array;
}
export interface QueryBandPriceRequestAmino {
  request_id: string;
}
export interface QueryBandPriceRequestAminoMsg {
  type: "/elys.oracle.QueryBandPriceRequest";
  value: QueryBandPriceRequestAmino;
}
export interface QueryBandPriceRequestSDKType {
  request_id: bigint;
}
export interface QueryBandPriceResponse {
  result?: BandPriceResult;
}
export interface QueryBandPriceResponseProtoMsg {
  typeUrl: "/elys.oracle.QueryBandPriceResponse";
  value: Uint8Array;
}
export interface QueryBandPriceResponseAmino {
  result?: BandPriceResultAmino;
}
export interface QueryBandPriceResponseAminoMsg {
  type: "/elys.oracle.QueryBandPriceResponse";
  value: QueryBandPriceResponseAmino;
}
export interface QueryBandPriceResponseSDKType {
  result?: BandPriceResultSDKType;
}
export interface QueryLastBandRequestIdRequest {}
export interface QueryLastBandRequestIdRequestProtoMsg {
  typeUrl: "/elys.oracle.QueryLastBandRequestIdRequest";
  value: Uint8Array;
}
export interface QueryLastBandRequestIdRequestAmino {}
export interface QueryLastBandRequestIdRequestAminoMsg {
  type: "/elys.oracle.QueryLastBandRequestIdRequest";
  value: QueryLastBandRequestIdRequestAmino;
}
export interface QueryLastBandRequestIdRequestSDKType {}
export interface QueryLastBandRequestIdResponse {
  requestId: bigint;
}
export interface QueryLastBandRequestIdResponseProtoMsg {
  typeUrl: "/elys.oracle.QueryLastBandRequestIdResponse";
  value: Uint8Array;
}
export interface QueryLastBandRequestIdResponseAmino {
  request_id: string;
}
export interface QueryLastBandRequestIdResponseAminoMsg {
  type: "/elys.oracle.QueryLastBandRequestIdResponse";
  value: QueryLastBandRequestIdResponseAmino;
}
export interface QueryLastBandRequestIdResponseSDKType {
  request_id: bigint;
}
export interface QueryGetAssetInfoRequest {
  denom: string;
}
export interface QueryGetAssetInfoRequestProtoMsg {
  typeUrl: "/elys.oracle.QueryGetAssetInfoRequest";
  value: Uint8Array;
}
export interface QueryGetAssetInfoRequestAmino {
  denom: string;
}
export interface QueryGetAssetInfoRequestAminoMsg {
  type: "/elys.oracle.QueryGetAssetInfoRequest";
  value: QueryGetAssetInfoRequestAmino;
}
export interface QueryGetAssetInfoRequestSDKType {
  denom: string;
}
export interface QueryGetAssetInfoResponse {
  assetInfo: AssetInfo;
}
export interface QueryGetAssetInfoResponseProtoMsg {
  typeUrl: "/elys.oracle.QueryGetAssetInfoResponse";
  value: Uint8Array;
}
export interface QueryGetAssetInfoResponseAmino {
  assetInfo?: AssetInfoAmino;
}
export interface QueryGetAssetInfoResponseAminoMsg {
  type: "/elys.oracle.QueryGetAssetInfoResponse";
  value: QueryGetAssetInfoResponseAmino;
}
export interface QueryGetAssetInfoResponseSDKType {
  assetInfo: AssetInfoSDKType;
}
export interface QueryAllAssetInfoRequest {
  pagination?: PageRequest;
}
export interface QueryAllAssetInfoRequestProtoMsg {
  typeUrl: "/elys.oracle.QueryAllAssetInfoRequest";
  value: Uint8Array;
}
export interface QueryAllAssetInfoRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllAssetInfoRequestAminoMsg {
  type: "/elys.oracle.QueryAllAssetInfoRequest";
  value: QueryAllAssetInfoRequestAmino;
}
export interface QueryAllAssetInfoRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllAssetInfoResponse {
  assetInfo: AssetInfo[];
  pagination?: PageResponse;
}
export interface QueryAllAssetInfoResponseProtoMsg {
  typeUrl: "/elys.oracle.QueryAllAssetInfoResponse";
  value: Uint8Array;
}
export interface QueryAllAssetInfoResponseAmino {
  assetInfo: AssetInfoAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllAssetInfoResponseAminoMsg {
  type: "/elys.oracle.QueryAllAssetInfoResponse";
  value: QueryAllAssetInfoResponseAmino;
}
export interface QueryAllAssetInfoResponseSDKType {
  assetInfo: AssetInfoSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetPriceRequest {
  asset: string;
  source: string;
  timestamp: bigint;
}
export interface QueryGetPriceRequestProtoMsg {
  typeUrl: "/elys.oracle.QueryGetPriceRequest";
  value: Uint8Array;
}
export interface QueryGetPriceRequestAmino {
  asset: string;
  source: string;
  timestamp: string;
}
export interface QueryGetPriceRequestAminoMsg {
  type: "/elys.oracle.QueryGetPriceRequest";
  value: QueryGetPriceRequestAmino;
}
export interface QueryGetPriceRequestSDKType {
  asset: string;
  source: string;
  timestamp: bigint;
}
export interface QueryGetPriceResponse {
  price: Price;
}
export interface QueryGetPriceResponseProtoMsg {
  typeUrl: "/elys.oracle.QueryGetPriceResponse";
  value: Uint8Array;
}
export interface QueryGetPriceResponseAmino {
  price?: PriceAmino;
}
export interface QueryGetPriceResponseAminoMsg {
  type: "/elys.oracle.QueryGetPriceResponse";
  value: QueryGetPriceResponseAmino;
}
export interface QueryGetPriceResponseSDKType {
  price: PriceSDKType;
}
export interface QueryAllPriceRequest {
  pagination?: PageRequest;
}
export interface QueryAllPriceRequestProtoMsg {
  typeUrl: "/elys.oracle.QueryAllPriceRequest";
  value: Uint8Array;
}
export interface QueryAllPriceRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPriceRequestAminoMsg {
  type: "/elys.oracle.QueryAllPriceRequest";
  value: QueryAllPriceRequestAmino;
}
export interface QueryAllPriceRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPriceResponse {
  price: Price[];
  pagination?: PageResponse;
}
export interface QueryAllPriceResponseProtoMsg {
  typeUrl: "/elys.oracle.QueryAllPriceResponse";
  value: Uint8Array;
}
export interface QueryAllPriceResponseAmino {
  price: PriceAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPriceResponseAminoMsg {
  type: "/elys.oracle.QueryAllPriceResponse";
  value: QueryAllPriceResponseAmino;
}
export interface QueryAllPriceResponseSDKType {
  price: PriceSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetPriceFeederRequest {
  feeder: string;
}
export interface QueryGetPriceFeederRequestProtoMsg {
  typeUrl: "/elys.oracle.QueryGetPriceFeederRequest";
  value: Uint8Array;
}
export interface QueryGetPriceFeederRequestAmino {
  feeder: string;
}
export interface QueryGetPriceFeederRequestAminoMsg {
  type: "/elys.oracle.QueryGetPriceFeederRequest";
  value: QueryGetPriceFeederRequestAmino;
}
export interface QueryGetPriceFeederRequestSDKType {
  feeder: string;
}
export interface QueryGetPriceFeederResponse {
  priceFeeder: PriceFeeder;
}
export interface QueryGetPriceFeederResponseProtoMsg {
  typeUrl: "/elys.oracle.QueryGetPriceFeederResponse";
  value: Uint8Array;
}
export interface QueryGetPriceFeederResponseAmino {
  priceFeeder?: PriceFeederAmino;
}
export interface QueryGetPriceFeederResponseAminoMsg {
  type: "/elys.oracle.QueryGetPriceFeederResponse";
  value: QueryGetPriceFeederResponseAmino;
}
export interface QueryGetPriceFeederResponseSDKType {
  priceFeeder: PriceFeederSDKType;
}
export interface QueryAllPriceFeederRequest {
  pagination?: PageRequest;
}
export interface QueryAllPriceFeederRequestProtoMsg {
  typeUrl: "/elys.oracle.QueryAllPriceFeederRequest";
  value: Uint8Array;
}
export interface QueryAllPriceFeederRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPriceFeederRequestAminoMsg {
  type: "/elys.oracle.QueryAllPriceFeederRequest";
  value: QueryAllPriceFeederRequestAmino;
}
export interface QueryAllPriceFeederRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPriceFeederResponse {
  priceFeeder: PriceFeeder[];
  pagination?: PageResponse;
}
export interface QueryAllPriceFeederResponseProtoMsg {
  typeUrl: "/elys.oracle.QueryAllPriceFeederResponse";
  value: Uint8Array;
}
export interface QueryAllPriceFeederResponseAmino {
  priceFeeder: PriceFeederAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPriceFeederResponseAminoMsg {
  type: "/elys.oracle.QueryAllPriceFeederResponse";
  value: QueryAllPriceFeederResponseAmino;
}
export interface QueryAllPriceFeederResponseSDKType {
  priceFeeder: PriceFeederSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/elys.oracle.QueryParamsRequest",
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
      typeUrl: "/elys.oracle.QueryParamsRequest",
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
  typeUrl: "/elys.oracle.QueryParamsResponse",
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
      typeUrl: "/elys.oracle.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBandPriceRequest(): QueryBandPriceRequest {
  return {
    requestId: BigInt(0)
  };
}
export const QueryBandPriceRequest = {
  typeUrl: "/elys.oracle.QueryBandPriceRequest",
  encode(message: QueryBandPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestId !== BigInt(0)) {
      writer.uint32(8).int64(message.requestId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBandPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBandPriceRequest>): QueryBandPriceRequest {
    const message = createBaseQueryBandPriceRequest();
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryBandPriceRequestAmino): QueryBandPriceRequest {
    return {
      requestId: BigInt(object.request_id)
    };
  },
  toAmino(message: QueryBandPriceRequest): QueryBandPriceRequestAmino {
    const obj: any = {};
    obj.request_id = message.requestId ? message.requestId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBandPriceRequestAminoMsg): QueryBandPriceRequest {
    return QueryBandPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBandPriceRequestProtoMsg): QueryBandPriceRequest {
    return QueryBandPriceRequest.decode(message.value);
  },
  toProto(message: QueryBandPriceRequest): Uint8Array {
    return QueryBandPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBandPriceRequest): QueryBandPriceRequestProtoMsg {
    return {
      typeUrl: "/elys.oracle.QueryBandPriceRequest",
      value: QueryBandPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBandPriceResponse(): QueryBandPriceResponse {
  return {
    result: undefined
  };
}
export const QueryBandPriceResponse = {
  typeUrl: "/elys.oracle.QueryBandPriceResponse",
  encode(message: QueryBandPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== undefined) {
      BandPriceResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBandPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = BandPriceResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBandPriceResponse>): QueryBandPriceResponse {
    const message = createBaseQueryBandPriceResponse();
    message.result = object.result !== undefined && object.result !== null ? BandPriceResult.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: QueryBandPriceResponseAmino): QueryBandPriceResponse {
    return {
      result: object?.result ? BandPriceResult.fromAmino(object.result) : undefined
    };
  },
  toAmino(message: QueryBandPriceResponse): QueryBandPriceResponseAmino {
    const obj: any = {};
    obj.result = message.result ? BandPriceResult.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBandPriceResponseAminoMsg): QueryBandPriceResponse {
    return QueryBandPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBandPriceResponseProtoMsg): QueryBandPriceResponse {
    return QueryBandPriceResponse.decode(message.value);
  },
  toProto(message: QueryBandPriceResponse): Uint8Array {
    return QueryBandPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBandPriceResponse): QueryBandPriceResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.QueryBandPriceResponse",
      value: QueryBandPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastBandRequestIdRequest(): QueryLastBandRequestIdRequest {
  return {};
}
export const QueryLastBandRequestIdRequest = {
  typeUrl: "/elys.oracle.QueryLastBandRequestIdRequest",
  encode(_: QueryLastBandRequestIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastBandRequestIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastBandRequestIdRequest();
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
  fromPartial(_: Partial<QueryLastBandRequestIdRequest>): QueryLastBandRequestIdRequest {
    const message = createBaseQueryLastBandRequestIdRequest();
    return message;
  },
  fromAmino(_: QueryLastBandRequestIdRequestAmino): QueryLastBandRequestIdRequest {
    return {};
  },
  toAmino(_: QueryLastBandRequestIdRequest): QueryLastBandRequestIdRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLastBandRequestIdRequestAminoMsg): QueryLastBandRequestIdRequest {
    return QueryLastBandRequestIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastBandRequestIdRequestProtoMsg): QueryLastBandRequestIdRequest {
    return QueryLastBandRequestIdRequest.decode(message.value);
  },
  toProto(message: QueryLastBandRequestIdRequest): Uint8Array {
    return QueryLastBandRequestIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastBandRequestIdRequest): QueryLastBandRequestIdRequestProtoMsg {
    return {
      typeUrl: "/elys.oracle.QueryLastBandRequestIdRequest",
      value: QueryLastBandRequestIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastBandRequestIdResponse(): QueryLastBandRequestIdResponse {
  return {
    requestId: BigInt(0)
  };
}
export const QueryLastBandRequestIdResponse = {
  typeUrl: "/elys.oracle.QueryLastBandRequestIdResponse",
  encode(message: QueryLastBandRequestIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestId !== BigInt(0)) {
      writer.uint32(8).int64(message.requestId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastBandRequestIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastBandRequestIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLastBandRequestIdResponse>): QueryLastBandRequestIdResponse {
    const message = createBaseQueryLastBandRequestIdResponse();
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryLastBandRequestIdResponseAmino): QueryLastBandRequestIdResponse {
    return {
      requestId: BigInt(object.request_id)
    };
  },
  toAmino(message: QueryLastBandRequestIdResponse): QueryLastBandRequestIdResponseAmino {
    const obj: any = {};
    obj.request_id = message.requestId ? message.requestId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLastBandRequestIdResponseAminoMsg): QueryLastBandRequestIdResponse {
    return QueryLastBandRequestIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastBandRequestIdResponseProtoMsg): QueryLastBandRequestIdResponse {
    return QueryLastBandRequestIdResponse.decode(message.value);
  },
  toProto(message: QueryLastBandRequestIdResponse): Uint8Array {
    return QueryLastBandRequestIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastBandRequestIdResponse): QueryLastBandRequestIdResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.QueryLastBandRequestIdResponse",
      value: QueryLastBandRequestIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetAssetInfoRequest(): QueryGetAssetInfoRequest {
  return {
    denom: ""
  };
}
export const QueryGetAssetInfoRequest = {
  typeUrl: "/elys.oracle.QueryGetAssetInfoRequest",
  encode(message: QueryGetAssetInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAssetInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAssetInfoRequest();
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
  fromPartial(object: Partial<QueryGetAssetInfoRequest>): QueryGetAssetInfoRequest {
    const message = createBaseQueryGetAssetInfoRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetAssetInfoRequestAmino): QueryGetAssetInfoRequest {
    return {
      denom: object.denom
    };
  },
  toAmino(message: QueryGetAssetInfoRequest): QueryGetAssetInfoRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetAssetInfoRequestAminoMsg): QueryGetAssetInfoRequest {
    return QueryGetAssetInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAssetInfoRequestProtoMsg): QueryGetAssetInfoRequest {
    return QueryGetAssetInfoRequest.decode(message.value);
  },
  toProto(message: QueryGetAssetInfoRequest): Uint8Array {
    return QueryGetAssetInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAssetInfoRequest): QueryGetAssetInfoRequestProtoMsg {
    return {
      typeUrl: "/elys.oracle.QueryGetAssetInfoRequest",
      value: QueryGetAssetInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetAssetInfoResponse(): QueryGetAssetInfoResponse {
  return {
    assetInfo: AssetInfo.fromPartial({})
  };
}
export const QueryGetAssetInfoResponse = {
  typeUrl: "/elys.oracle.QueryGetAssetInfoResponse",
  encode(message: QueryGetAssetInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetInfo !== undefined) {
      AssetInfo.encode(message.assetInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAssetInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAssetInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetInfo = AssetInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAssetInfoResponse>): QueryGetAssetInfoResponse {
    const message = createBaseQueryGetAssetInfoResponse();
    message.assetInfo = object.assetInfo !== undefined && object.assetInfo !== null ? AssetInfo.fromPartial(object.assetInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAssetInfoResponseAmino): QueryGetAssetInfoResponse {
    return {
      assetInfo: object?.assetInfo ? AssetInfo.fromAmino(object.assetInfo) : undefined
    };
  },
  toAmino(message: QueryGetAssetInfoResponse): QueryGetAssetInfoResponseAmino {
    const obj: any = {};
    obj.assetInfo = message.assetInfo ? AssetInfo.toAmino(message.assetInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAssetInfoResponseAminoMsg): QueryGetAssetInfoResponse {
    return QueryGetAssetInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAssetInfoResponseProtoMsg): QueryGetAssetInfoResponse {
    return QueryGetAssetInfoResponse.decode(message.value);
  },
  toProto(message: QueryGetAssetInfoResponse): Uint8Array {
    return QueryGetAssetInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAssetInfoResponse): QueryGetAssetInfoResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.QueryGetAssetInfoResponse",
      value: QueryGetAssetInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllAssetInfoRequest(): QueryAllAssetInfoRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllAssetInfoRequest = {
  typeUrl: "/elys.oracle.QueryAllAssetInfoRequest",
  encode(message: QueryAllAssetInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAssetInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAssetInfoRequest();
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
  fromPartial(object: Partial<QueryAllAssetInfoRequest>): QueryAllAssetInfoRequest {
    const message = createBaseQueryAllAssetInfoRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAssetInfoRequestAmino): QueryAllAssetInfoRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllAssetInfoRequest): QueryAllAssetInfoRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAssetInfoRequestAminoMsg): QueryAllAssetInfoRequest {
    return QueryAllAssetInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAssetInfoRequestProtoMsg): QueryAllAssetInfoRequest {
    return QueryAllAssetInfoRequest.decode(message.value);
  },
  toProto(message: QueryAllAssetInfoRequest): Uint8Array {
    return QueryAllAssetInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAssetInfoRequest): QueryAllAssetInfoRequestProtoMsg {
    return {
      typeUrl: "/elys.oracle.QueryAllAssetInfoRequest",
      value: QueryAllAssetInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllAssetInfoResponse(): QueryAllAssetInfoResponse {
  return {
    assetInfo: [],
    pagination: undefined
  };
}
export const QueryAllAssetInfoResponse = {
  typeUrl: "/elys.oracle.QueryAllAssetInfoResponse",
  encode(message: QueryAllAssetInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assetInfo) {
      AssetInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAssetInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAssetInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetInfo.push(AssetInfo.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllAssetInfoResponse>): QueryAllAssetInfoResponse {
    const message = createBaseQueryAllAssetInfoResponse();
    message.assetInfo = object.assetInfo?.map(e => AssetInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAssetInfoResponseAmino): QueryAllAssetInfoResponse {
    return {
      assetInfo: Array.isArray(object?.assetInfo) ? object.assetInfo.map((e: any) => AssetInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllAssetInfoResponse): QueryAllAssetInfoResponseAmino {
    const obj: any = {};
    if (message.assetInfo) {
      obj.assetInfo = message.assetInfo.map(e => e ? AssetInfo.toAmino(e) : undefined);
    } else {
      obj.assetInfo = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAssetInfoResponseAminoMsg): QueryAllAssetInfoResponse {
    return QueryAllAssetInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAssetInfoResponseProtoMsg): QueryAllAssetInfoResponse {
    return QueryAllAssetInfoResponse.decode(message.value);
  },
  toProto(message: QueryAllAssetInfoResponse): Uint8Array {
    return QueryAllAssetInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAssetInfoResponse): QueryAllAssetInfoResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.QueryAllAssetInfoResponse",
      value: QueryAllAssetInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPriceRequest(): QueryGetPriceRequest {
  return {
    asset: "",
    source: "",
    timestamp: BigInt(0)
  };
}
export const QueryGetPriceRequest = {
  typeUrl: "/elys.oracle.QueryGetPriceRequest",
  encode(message: QueryGetPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.source !== "") {
      writer.uint32(18).string(message.source);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(24).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.source = reader.string();
          break;
        case 3:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPriceRequest>): QueryGetPriceRequest {
    const message = createBaseQueryGetPriceRequest();
    message.asset = object.asset ?? "";
    message.source = object.source ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPriceRequestAmino): QueryGetPriceRequest {
    return {
      asset: object.asset,
      source: object.source,
      timestamp: BigInt(object.timestamp)
    };
  },
  toAmino(message: QueryGetPriceRequest): QueryGetPriceRequestAmino {
    const obj: any = {};
    obj.asset = message.asset;
    obj.source = message.source;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPriceRequestAminoMsg): QueryGetPriceRequest {
    return QueryGetPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPriceRequestProtoMsg): QueryGetPriceRequest {
    return QueryGetPriceRequest.decode(message.value);
  },
  toProto(message: QueryGetPriceRequest): Uint8Array {
    return QueryGetPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPriceRequest): QueryGetPriceRequestProtoMsg {
    return {
      typeUrl: "/elys.oracle.QueryGetPriceRequest",
      value: QueryGetPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPriceResponse(): QueryGetPriceResponse {
  return {
    price: Price.fromPartial({})
  };
}
export const QueryGetPriceResponse = {
  typeUrl: "/elys.oracle.QueryGetPriceResponse",
  encode(message: QueryGetPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== undefined) {
      Price.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Price.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPriceResponse>): QueryGetPriceResponse {
    const message = createBaseQueryGetPriceResponse();
    message.price = object.price !== undefined && object.price !== null ? Price.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPriceResponseAmino): QueryGetPriceResponse {
    return {
      price: object?.price ? Price.fromAmino(object.price) : undefined
    };
  },
  toAmino(message: QueryGetPriceResponse): QueryGetPriceResponseAmino {
    const obj: any = {};
    obj.price = message.price ? Price.toAmino(message.price) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPriceResponseAminoMsg): QueryGetPriceResponse {
    return QueryGetPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPriceResponseProtoMsg): QueryGetPriceResponse {
    return QueryGetPriceResponse.decode(message.value);
  },
  toProto(message: QueryGetPriceResponse): Uint8Array {
    return QueryGetPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPriceResponse): QueryGetPriceResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.QueryGetPriceResponse",
      value: QueryGetPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPriceRequest(): QueryAllPriceRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPriceRequest = {
  typeUrl: "/elys.oracle.QueryAllPriceRequest",
  encode(message: QueryAllPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPriceRequest();
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
  fromPartial(object: Partial<QueryAllPriceRequest>): QueryAllPriceRequest {
    const message = createBaseQueryAllPriceRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPriceRequestAmino): QueryAllPriceRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllPriceRequest): QueryAllPriceRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPriceRequestAminoMsg): QueryAllPriceRequest {
    return QueryAllPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPriceRequestProtoMsg): QueryAllPriceRequest {
    return QueryAllPriceRequest.decode(message.value);
  },
  toProto(message: QueryAllPriceRequest): Uint8Array {
    return QueryAllPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPriceRequest): QueryAllPriceRequestProtoMsg {
    return {
      typeUrl: "/elys.oracle.QueryAllPriceRequest",
      value: QueryAllPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPriceResponse(): QueryAllPriceResponse {
  return {
    price: [],
    pagination: undefined
  };
}
export const QueryAllPriceResponse = {
  typeUrl: "/elys.oracle.QueryAllPriceResponse",
  encode(message: QueryAllPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.price) {
      Price.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price.push(Price.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllPriceResponse>): QueryAllPriceResponse {
    const message = createBaseQueryAllPriceResponse();
    message.price = object.price?.map(e => Price.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPriceResponseAmino): QueryAllPriceResponse {
    return {
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Price.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllPriceResponse): QueryAllPriceResponseAmino {
    const obj: any = {};
    if (message.price) {
      obj.price = message.price.map(e => e ? Price.toAmino(e) : undefined);
    } else {
      obj.price = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPriceResponseAminoMsg): QueryAllPriceResponse {
    return QueryAllPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPriceResponseProtoMsg): QueryAllPriceResponse {
    return QueryAllPriceResponse.decode(message.value);
  },
  toProto(message: QueryAllPriceResponse): Uint8Array {
    return QueryAllPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPriceResponse): QueryAllPriceResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.QueryAllPriceResponse",
      value: QueryAllPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPriceFeederRequest(): QueryGetPriceFeederRequest {
  return {
    feeder: ""
  };
}
export const QueryGetPriceFeederRequest = {
  typeUrl: "/elys.oracle.QueryGetPriceFeederRequest",
  encode(message: QueryGetPriceFeederRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeder !== "") {
      writer.uint32(10).string(message.feeder);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPriceFeederRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPriceFeederRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPriceFeederRequest>): QueryGetPriceFeederRequest {
    const message = createBaseQueryGetPriceFeederRequest();
    message.feeder = object.feeder ?? "";
    return message;
  },
  fromAmino(object: QueryGetPriceFeederRequestAmino): QueryGetPriceFeederRequest {
    return {
      feeder: object.feeder
    };
  },
  toAmino(message: QueryGetPriceFeederRequest): QueryGetPriceFeederRequestAmino {
    const obj: any = {};
    obj.feeder = message.feeder;
    return obj;
  },
  fromAminoMsg(object: QueryGetPriceFeederRequestAminoMsg): QueryGetPriceFeederRequest {
    return QueryGetPriceFeederRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPriceFeederRequestProtoMsg): QueryGetPriceFeederRequest {
    return QueryGetPriceFeederRequest.decode(message.value);
  },
  toProto(message: QueryGetPriceFeederRequest): Uint8Array {
    return QueryGetPriceFeederRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPriceFeederRequest): QueryGetPriceFeederRequestProtoMsg {
    return {
      typeUrl: "/elys.oracle.QueryGetPriceFeederRequest",
      value: QueryGetPriceFeederRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPriceFeederResponse(): QueryGetPriceFeederResponse {
  return {
    priceFeeder: PriceFeeder.fromPartial({})
  };
}
export const QueryGetPriceFeederResponse = {
  typeUrl: "/elys.oracle.QueryGetPriceFeederResponse",
  encode(message: QueryGetPriceFeederResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceFeeder !== undefined) {
      PriceFeeder.encode(message.priceFeeder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPriceFeederResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPriceFeederResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceFeeder = PriceFeeder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPriceFeederResponse>): QueryGetPriceFeederResponse {
    const message = createBaseQueryGetPriceFeederResponse();
    message.priceFeeder = object.priceFeeder !== undefined && object.priceFeeder !== null ? PriceFeeder.fromPartial(object.priceFeeder) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPriceFeederResponseAmino): QueryGetPriceFeederResponse {
    return {
      priceFeeder: object?.priceFeeder ? PriceFeeder.fromAmino(object.priceFeeder) : undefined
    };
  },
  toAmino(message: QueryGetPriceFeederResponse): QueryGetPriceFeederResponseAmino {
    const obj: any = {};
    obj.priceFeeder = message.priceFeeder ? PriceFeeder.toAmino(message.priceFeeder) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPriceFeederResponseAminoMsg): QueryGetPriceFeederResponse {
    return QueryGetPriceFeederResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPriceFeederResponseProtoMsg): QueryGetPriceFeederResponse {
    return QueryGetPriceFeederResponse.decode(message.value);
  },
  toProto(message: QueryGetPriceFeederResponse): Uint8Array {
    return QueryGetPriceFeederResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPriceFeederResponse): QueryGetPriceFeederResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.QueryGetPriceFeederResponse",
      value: QueryGetPriceFeederResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPriceFeederRequest(): QueryAllPriceFeederRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPriceFeederRequest = {
  typeUrl: "/elys.oracle.QueryAllPriceFeederRequest",
  encode(message: QueryAllPriceFeederRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPriceFeederRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPriceFeederRequest();
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
  fromPartial(object: Partial<QueryAllPriceFeederRequest>): QueryAllPriceFeederRequest {
    const message = createBaseQueryAllPriceFeederRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPriceFeederRequestAmino): QueryAllPriceFeederRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllPriceFeederRequest): QueryAllPriceFeederRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPriceFeederRequestAminoMsg): QueryAllPriceFeederRequest {
    return QueryAllPriceFeederRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPriceFeederRequestProtoMsg): QueryAllPriceFeederRequest {
    return QueryAllPriceFeederRequest.decode(message.value);
  },
  toProto(message: QueryAllPriceFeederRequest): Uint8Array {
    return QueryAllPriceFeederRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPriceFeederRequest): QueryAllPriceFeederRequestProtoMsg {
    return {
      typeUrl: "/elys.oracle.QueryAllPriceFeederRequest",
      value: QueryAllPriceFeederRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPriceFeederResponse(): QueryAllPriceFeederResponse {
  return {
    priceFeeder: [],
    pagination: undefined
  };
}
export const QueryAllPriceFeederResponse = {
  typeUrl: "/elys.oracle.QueryAllPriceFeederResponse",
  encode(message: QueryAllPriceFeederResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceFeeder) {
      PriceFeeder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPriceFeederResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPriceFeederResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceFeeder.push(PriceFeeder.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllPriceFeederResponse>): QueryAllPriceFeederResponse {
    const message = createBaseQueryAllPriceFeederResponse();
    message.priceFeeder = object.priceFeeder?.map(e => PriceFeeder.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPriceFeederResponseAmino): QueryAllPriceFeederResponse {
    return {
      priceFeeder: Array.isArray(object?.priceFeeder) ? object.priceFeeder.map((e: any) => PriceFeeder.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllPriceFeederResponse): QueryAllPriceFeederResponseAmino {
    const obj: any = {};
    if (message.priceFeeder) {
      obj.priceFeeder = message.priceFeeder.map(e => e ? PriceFeeder.toAmino(e) : undefined);
    } else {
      obj.priceFeeder = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPriceFeederResponseAminoMsg): QueryAllPriceFeederResponse {
    return QueryAllPriceFeederResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPriceFeederResponseProtoMsg): QueryAllPriceFeederResponse {
    return QueryAllPriceFeederResponse.decode(message.value);
  },
  toProto(message: QueryAllPriceFeederResponse): Uint8Array {
    return QueryAllPriceFeederResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPriceFeederResponse): QueryAllPriceFeederResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.QueryAllPriceFeederResponse",
      value: QueryAllPriceFeederResponse.encode(message).finish()
    };
  }
};