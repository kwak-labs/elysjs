//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Airdrop, AirdropAmino, AirdropSDKType } from "./airdrop";
import { GenesisInflation, GenesisInflationAmino, GenesisInflationSDKType } from "./genesis_inflation";
import { TimeBasedInflation, TimeBasedInflationAmino, TimeBasedInflationSDKType } from "./time_based_inflation";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/elys.tokenomics.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/elys.tokenomics.QueryParamsRequest";
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
  typeUrl: "/elys.tokenomics.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/elys.tokenomics.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetAirdropRequest {
  intent: string;
}
export interface QueryGetAirdropRequestProtoMsg {
  typeUrl: "/elys.tokenomics.QueryGetAirdropRequest";
  value: Uint8Array;
}
export interface QueryGetAirdropRequestAmino {
  intent?: string;
}
export interface QueryGetAirdropRequestAminoMsg {
  type: "/elys.tokenomics.QueryGetAirdropRequest";
  value: QueryGetAirdropRequestAmino;
}
export interface QueryGetAirdropRequestSDKType {
  intent: string;
}
export interface QueryGetAirdropResponse {
  airdrop: Airdrop;
}
export interface QueryGetAirdropResponseProtoMsg {
  typeUrl: "/elys.tokenomics.QueryGetAirdropResponse";
  value: Uint8Array;
}
export interface QueryGetAirdropResponseAmino {
  airdrop?: AirdropAmino;
}
export interface QueryGetAirdropResponseAminoMsg {
  type: "/elys.tokenomics.QueryGetAirdropResponse";
  value: QueryGetAirdropResponseAmino;
}
export interface QueryGetAirdropResponseSDKType {
  airdrop: AirdropSDKType;
}
export interface QueryAllAirdropRequest {
  pagination?: PageRequest;
}
export interface QueryAllAirdropRequestProtoMsg {
  typeUrl: "/elys.tokenomics.QueryAllAirdropRequest";
  value: Uint8Array;
}
export interface QueryAllAirdropRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllAirdropRequestAminoMsg {
  type: "/elys.tokenomics.QueryAllAirdropRequest";
  value: QueryAllAirdropRequestAmino;
}
export interface QueryAllAirdropRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllAirdropResponse {
  airdrop: Airdrop[];
  pagination?: PageResponse;
}
export interface QueryAllAirdropResponseProtoMsg {
  typeUrl: "/elys.tokenomics.QueryAllAirdropResponse";
  value: Uint8Array;
}
export interface QueryAllAirdropResponseAmino {
  airdrop?: AirdropAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllAirdropResponseAminoMsg {
  type: "/elys.tokenomics.QueryAllAirdropResponse";
  value: QueryAllAirdropResponseAmino;
}
export interface QueryAllAirdropResponseSDKType {
  airdrop: AirdropSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetGenesisInflationRequest {}
export interface QueryGetGenesisInflationRequestProtoMsg {
  typeUrl: "/elys.tokenomics.QueryGetGenesisInflationRequest";
  value: Uint8Array;
}
export interface QueryGetGenesisInflationRequestAmino {}
export interface QueryGetGenesisInflationRequestAminoMsg {
  type: "/elys.tokenomics.QueryGetGenesisInflationRequest";
  value: QueryGetGenesisInflationRequestAmino;
}
export interface QueryGetGenesisInflationRequestSDKType {}
export interface QueryGetGenesisInflationResponse {
  genesisInflation: GenesisInflation;
}
export interface QueryGetGenesisInflationResponseProtoMsg {
  typeUrl: "/elys.tokenomics.QueryGetGenesisInflationResponse";
  value: Uint8Array;
}
export interface QueryGetGenesisInflationResponseAmino {
  genesis_inflation?: GenesisInflationAmino;
}
export interface QueryGetGenesisInflationResponseAminoMsg {
  type: "/elys.tokenomics.QueryGetGenesisInflationResponse";
  value: QueryGetGenesisInflationResponseAmino;
}
export interface QueryGetGenesisInflationResponseSDKType {
  genesis_inflation: GenesisInflationSDKType;
}
export interface QueryGetTimeBasedInflationRequest {
  startBlockHeight: bigint;
  endBlockHeight: bigint;
}
export interface QueryGetTimeBasedInflationRequestProtoMsg {
  typeUrl: "/elys.tokenomics.QueryGetTimeBasedInflationRequest";
  value: Uint8Array;
}
export interface QueryGetTimeBasedInflationRequestAmino {
  start_block_height?: string;
  end_block_height?: string;
}
export interface QueryGetTimeBasedInflationRequestAminoMsg {
  type: "/elys.tokenomics.QueryGetTimeBasedInflationRequest";
  value: QueryGetTimeBasedInflationRequestAmino;
}
export interface QueryGetTimeBasedInflationRequestSDKType {
  start_block_height: bigint;
  end_block_height: bigint;
}
export interface QueryGetTimeBasedInflationResponse {
  timeBasedInflation: TimeBasedInflation;
}
export interface QueryGetTimeBasedInflationResponseProtoMsg {
  typeUrl: "/elys.tokenomics.QueryGetTimeBasedInflationResponse";
  value: Uint8Array;
}
export interface QueryGetTimeBasedInflationResponseAmino {
  time_based_inflation?: TimeBasedInflationAmino;
}
export interface QueryGetTimeBasedInflationResponseAminoMsg {
  type: "/elys.tokenomics.QueryGetTimeBasedInflationResponse";
  value: QueryGetTimeBasedInflationResponseAmino;
}
export interface QueryGetTimeBasedInflationResponseSDKType {
  time_based_inflation: TimeBasedInflationSDKType;
}
export interface QueryAllTimeBasedInflationRequest {
  pagination?: PageRequest;
}
export interface QueryAllTimeBasedInflationRequestProtoMsg {
  typeUrl: "/elys.tokenomics.QueryAllTimeBasedInflationRequest";
  value: Uint8Array;
}
export interface QueryAllTimeBasedInflationRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllTimeBasedInflationRequestAminoMsg {
  type: "/elys.tokenomics.QueryAllTimeBasedInflationRequest";
  value: QueryAllTimeBasedInflationRequestAmino;
}
export interface QueryAllTimeBasedInflationRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllTimeBasedInflationResponse {
  timeBasedInflation: TimeBasedInflation[];
  pagination?: PageResponse;
}
export interface QueryAllTimeBasedInflationResponseProtoMsg {
  typeUrl: "/elys.tokenomics.QueryAllTimeBasedInflationResponse";
  value: Uint8Array;
}
export interface QueryAllTimeBasedInflationResponseAmino {
  time_based_inflation?: TimeBasedInflationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTimeBasedInflationResponseAminoMsg {
  type: "/elys.tokenomics.QueryAllTimeBasedInflationResponse";
  value: QueryAllTimeBasedInflationResponseAmino;
}
export interface QueryAllTimeBasedInflationResponseSDKType {
  time_based_inflation: TimeBasedInflationSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/elys.tokenomics.QueryParamsRequest",
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
      typeUrl: "/elys.tokenomics.QueryParamsRequest",
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
  typeUrl: "/elys.tokenomics.QueryParamsResponse",
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
      typeUrl: "/elys.tokenomics.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetAirdropRequest(): QueryGetAirdropRequest {
  return {
    intent: ""
  };
}
export const QueryGetAirdropRequest = {
  typeUrl: "/elys.tokenomics.QueryGetAirdropRequest",
  encode(message: QueryGetAirdropRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.intent !== "") {
      writer.uint32(10).string(message.intent);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAirdropRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAirdropRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.intent = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAirdropRequest>): QueryGetAirdropRequest {
    const message = createBaseQueryGetAirdropRequest();
    message.intent = object.intent ?? "";
    return message;
  },
  fromAmino(object: QueryGetAirdropRequestAmino): QueryGetAirdropRequest {
    const message = createBaseQueryGetAirdropRequest();
    if (object.intent !== undefined && object.intent !== null) {
      message.intent = object.intent;
    }
    return message;
  },
  toAmino(message: QueryGetAirdropRequest): QueryGetAirdropRequestAmino {
    const obj: any = {};
    obj.intent = message.intent === "" ? undefined : message.intent;
    return obj;
  },
  fromAminoMsg(object: QueryGetAirdropRequestAminoMsg): QueryGetAirdropRequest {
    return QueryGetAirdropRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAirdropRequestProtoMsg): QueryGetAirdropRequest {
    return QueryGetAirdropRequest.decode(message.value);
  },
  toProto(message: QueryGetAirdropRequest): Uint8Array {
    return QueryGetAirdropRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAirdropRequest): QueryGetAirdropRequestProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.QueryGetAirdropRequest",
      value: QueryGetAirdropRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetAirdropResponse(): QueryGetAirdropResponse {
  return {
    airdrop: Airdrop.fromPartial({})
  };
}
export const QueryGetAirdropResponse = {
  typeUrl: "/elys.tokenomics.QueryGetAirdropResponse",
  encode(message: QueryGetAirdropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdrop !== undefined) {
      Airdrop.encode(message.airdrop, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAirdropResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAirdropResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdrop = Airdrop.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAirdropResponse>): QueryGetAirdropResponse {
    const message = createBaseQueryGetAirdropResponse();
    message.airdrop = object.airdrop !== undefined && object.airdrop !== null ? Airdrop.fromPartial(object.airdrop) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAirdropResponseAmino): QueryGetAirdropResponse {
    const message = createBaseQueryGetAirdropResponse();
    if (object.airdrop !== undefined && object.airdrop !== null) {
      message.airdrop = Airdrop.fromAmino(object.airdrop);
    }
    return message;
  },
  toAmino(message: QueryGetAirdropResponse): QueryGetAirdropResponseAmino {
    const obj: any = {};
    obj.airdrop = message.airdrop ? Airdrop.toAmino(message.airdrop) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAirdropResponseAminoMsg): QueryGetAirdropResponse {
    return QueryGetAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAirdropResponseProtoMsg): QueryGetAirdropResponse {
    return QueryGetAirdropResponse.decode(message.value);
  },
  toProto(message: QueryGetAirdropResponse): Uint8Array {
    return QueryGetAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAirdropResponse): QueryGetAirdropResponseProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.QueryGetAirdropResponse",
      value: QueryGetAirdropResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllAirdropRequest(): QueryAllAirdropRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllAirdropRequest = {
  typeUrl: "/elys.tokenomics.QueryAllAirdropRequest",
  encode(message: QueryAllAirdropRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAirdropRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAirdropRequest();
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
  fromPartial(object: Partial<QueryAllAirdropRequest>): QueryAllAirdropRequest {
    const message = createBaseQueryAllAirdropRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAirdropRequestAmino): QueryAllAirdropRequest {
    const message = createBaseQueryAllAirdropRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAirdropRequest): QueryAllAirdropRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAirdropRequestAminoMsg): QueryAllAirdropRequest {
    return QueryAllAirdropRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAirdropRequestProtoMsg): QueryAllAirdropRequest {
    return QueryAllAirdropRequest.decode(message.value);
  },
  toProto(message: QueryAllAirdropRequest): Uint8Array {
    return QueryAllAirdropRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAirdropRequest): QueryAllAirdropRequestProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.QueryAllAirdropRequest",
      value: QueryAllAirdropRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllAirdropResponse(): QueryAllAirdropResponse {
  return {
    airdrop: [],
    pagination: undefined
  };
}
export const QueryAllAirdropResponse = {
  typeUrl: "/elys.tokenomics.QueryAllAirdropResponse",
  encode(message: QueryAllAirdropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.airdrop) {
      Airdrop.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAirdropResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAirdropResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdrop.push(Airdrop.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllAirdropResponse>): QueryAllAirdropResponse {
    const message = createBaseQueryAllAirdropResponse();
    message.airdrop = object.airdrop?.map(e => Airdrop.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAirdropResponseAmino): QueryAllAirdropResponse {
    const message = createBaseQueryAllAirdropResponse();
    message.airdrop = object.airdrop?.map(e => Airdrop.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAirdropResponse): QueryAllAirdropResponseAmino {
    const obj: any = {};
    if (message.airdrop) {
      obj.airdrop = message.airdrop.map(e => e ? Airdrop.toAmino(e) : undefined);
    } else {
      obj.airdrop = message.airdrop;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAirdropResponseAminoMsg): QueryAllAirdropResponse {
    return QueryAllAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAirdropResponseProtoMsg): QueryAllAirdropResponse {
    return QueryAllAirdropResponse.decode(message.value);
  },
  toProto(message: QueryAllAirdropResponse): Uint8Array {
    return QueryAllAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAirdropResponse): QueryAllAirdropResponseProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.QueryAllAirdropResponse",
      value: QueryAllAirdropResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetGenesisInflationRequest(): QueryGetGenesisInflationRequest {
  return {};
}
export const QueryGetGenesisInflationRequest = {
  typeUrl: "/elys.tokenomics.QueryGetGenesisInflationRequest",
  encode(_: QueryGetGenesisInflationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetGenesisInflationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGenesisInflationRequest();
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
  fromPartial(_: Partial<QueryGetGenesisInflationRequest>): QueryGetGenesisInflationRequest {
    const message = createBaseQueryGetGenesisInflationRequest();
    return message;
  },
  fromAmino(_: QueryGetGenesisInflationRequestAmino): QueryGetGenesisInflationRequest {
    const message = createBaseQueryGetGenesisInflationRequest();
    return message;
  },
  toAmino(_: QueryGetGenesisInflationRequest): QueryGetGenesisInflationRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetGenesisInflationRequestAminoMsg): QueryGetGenesisInflationRequest {
    return QueryGetGenesisInflationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGenesisInflationRequestProtoMsg): QueryGetGenesisInflationRequest {
    return QueryGetGenesisInflationRequest.decode(message.value);
  },
  toProto(message: QueryGetGenesisInflationRequest): Uint8Array {
    return QueryGetGenesisInflationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGenesisInflationRequest): QueryGetGenesisInflationRequestProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.QueryGetGenesisInflationRequest",
      value: QueryGetGenesisInflationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetGenesisInflationResponse(): QueryGetGenesisInflationResponse {
  return {
    genesisInflation: GenesisInflation.fromPartial({})
  };
}
export const QueryGetGenesisInflationResponse = {
  typeUrl: "/elys.tokenomics.QueryGetGenesisInflationResponse",
  encode(message: QueryGetGenesisInflationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.genesisInflation !== undefined) {
      GenesisInflation.encode(message.genesisInflation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetGenesisInflationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGenesisInflationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genesisInflation = GenesisInflation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetGenesisInflationResponse>): QueryGetGenesisInflationResponse {
    const message = createBaseQueryGetGenesisInflationResponse();
    message.genesisInflation = object.genesisInflation !== undefined && object.genesisInflation !== null ? GenesisInflation.fromPartial(object.genesisInflation) : undefined;
    return message;
  },
  fromAmino(object: QueryGetGenesisInflationResponseAmino): QueryGetGenesisInflationResponse {
    const message = createBaseQueryGetGenesisInflationResponse();
    if (object.genesis_inflation !== undefined && object.genesis_inflation !== null) {
      message.genesisInflation = GenesisInflation.fromAmino(object.genesis_inflation);
    }
    return message;
  },
  toAmino(message: QueryGetGenesisInflationResponse): QueryGetGenesisInflationResponseAmino {
    const obj: any = {};
    obj.genesis_inflation = message.genesisInflation ? GenesisInflation.toAmino(message.genesisInflation) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetGenesisInflationResponseAminoMsg): QueryGetGenesisInflationResponse {
    return QueryGetGenesisInflationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGenesisInflationResponseProtoMsg): QueryGetGenesisInflationResponse {
    return QueryGetGenesisInflationResponse.decode(message.value);
  },
  toProto(message: QueryGetGenesisInflationResponse): Uint8Array {
    return QueryGetGenesisInflationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGenesisInflationResponse): QueryGetGenesisInflationResponseProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.QueryGetGenesisInflationResponse",
      value: QueryGetGenesisInflationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTimeBasedInflationRequest(): QueryGetTimeBasedInflationRequest {
  return {
    startBlockHeight: BigInt(0),
    endBlockHeight: BigInt(0)
  };
}
export const QueryGetTimeBasedInflationRequest = {
  typeUrl: "/elys.tokenomics.QueryGetTimeBasedInflationRequest",
  encode(message: QueryGetTimeBasedInflationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startBlockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.startBlockHeight);
    }
    if (message.endBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.endBlockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTimeBasedInflationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTimeBasedInflationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startBlockHeight = reader.uint64();
          break;
        case 2:
          message.endBlockHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetTimeBasedInflationRequest>): QueryGetTimeBasedInflationRequest {
    const message = createBaseQueryGetTimeBasedInflationRequest();
    message.startBlockHeight = object.startBlockHeight !== undefined && object.startBlockHeight !== null ? BigInt(object.startBlockHeight.toString()) : BigInt(0);
    message.endBlockHeight = object.endBlockHeight !== undefined && object.endBlockHeight !== null ? BigInt(object.endBlockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetTimeBasedInflationRequestAmino): QueryGetTimeBasedInflationRequest {
    const message = createBaseQueryGetTimeBasedInflationRequest();
    if (object.start_block_height !== undefined && object.start_block_height !== null) {
      message.startBlockHeight = BigInt(object.start_block_height);
    }
    if (object.end_block_height !== undefined && object.end_block_height !== null) {
      message.endBlockHeight = BigInt(object.end_block_height);
    }
    return message;
  },
  toAmino(message: QueryGetTimeBasedInflationRequest): QueryGetTimeBasedInflationRequestAmino {
    const obj: any = {};
    obj.start_block_height = message.startBlockHeight !== BigInt(0) ? message.startBlockHeight?.toString() : undefined;
    obj.end_block_height = message.endBlockHeight !== BigInt(0) ? message.endBlockHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTimeBasedInflationRequestAminoMsg): QueryGetTimeBasedInflationRequest {
    return QueryGetTimeBasedInflationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTimeBasedInflationRequestProtoMsg): QueryGetTimeBasedInflationRequest {
    return QueryGetTimeBasedInflationRequest.decode(message.value);
  },
  toProto(message: QueryGetTimeBasedInflationRequest): Uint8Array {
    return QueryGetTimeBasedInflationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTimeBasedInflationRequest): QueryGetTimeBasedInflationRequestProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.QueryGetTimeBasedInflationRequest",
      value: QueryGetTimeBasedInflationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTimeBasedInflationResponse(): QueryGetTimeBasedInflationResponse {
  return {
    timeBasedInflation: TimeBasedInflation.fromPartial({})
  };
}
export const QueryGetTimeBasedInflationResponse = {
  typeUrl: "/elys.tokenomics.QueryGetTimeBasedInflationResponse",
  encode(message: QueryGetTimeBasedInflationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timeBasedInflation !== undefined) {
      TimeBasedInflation.encode(message.timeBasedInflation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTimeBasedInflationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTimeBasedInflationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeBasedInflation = TimeBasedInflation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetTimeBasedInflationResponse>): QueryGetTimeBasedInflationResponse {
    const message = createBaseQueryGetTimeBasedInflationResponse();
    message.timeBasedInflation = object.timeBasedInflation !== undefined && object.timeBasedInflation !== null ? TimeBasedInflation.fromPartial(object.timeBasedInflation) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTimeBasedInflationResponseAmino): QueryGetTimeBasedInflationResponse {
    const message = createBaseQueryGetTimeBasedInflationResponse();
    if (object.time_based_inflation !== undefined && object.time_based_inflation !== null) {
      message.timeBasedInflation = TimeBasedInflation.fromAmino(object.time_based_inflation);
    }
    return message;
  },
  toAmino(message: QueryGetTimeBasedInflationResponse): QueryGetTimeBasedInflationResponseAmino {
    const obj: any = {};
    obj.time_based_inflation = message.timeBasedInflation ? TimeBasedInflation.toAmino(message.timeBasedInflation) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTimeBasedInflationResponseAminoMsg): QueryGetTimeBasedInflationResponse {
    return QueryGetTimeBasedInflationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTimeBasedInflationResponseProtoMsg): QueryGetTimeBasedInflationResponse {
    return QueryGetTimeBasedInflationResponse.decode(message.value);
  },
  toProto(message: QueryGetTimeBasedInflationResponse): Uint8Array {
    return QueryGetTimeBasedInflationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTimeBasedInflationResponse): QueryGetTimeBasedInflationResponseProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.QueryGetTimeBasedInflationResponse",
      value: QueryGetTimeBasedInflationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTimeBasedInflationRequest(): QueryAllTimeBasedInflationRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllTimeBasedInflationRequest = {
  typeUrl: "/elys.tokenomics.QueryAllTimeBasedInflationRequest",
  encode(message: QueryAllTimeBasedInflationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTimeBasedInflationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTimeBasedInflationRequest();
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
  fromPartial(object: Partial<QueryAllTimeBasedInflationRequest>): QueryAllTimeBasedInflationRequest {
    const message = createBaseQueryAllTimeBasedInflationRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTimeBasedInflationRequestAmino): QueryAllTimeBasedInflationRequest {
    const message = createBaseQueryAllTimeBasedInflationRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTimeBasedInflationRequest): QueryAllTimeBasedInflationRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTimeBasedInflationRequestAminoMsg): QueryAllTimeBasedInflationRequest {
    return QueryAllTimeBasedInflationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTimeBasedInflationRequestProtoMsg): QueryAllTimeBasedInflationRequest {
    return QueryAllTimeBasedInflationRequest.decode(message.value);
  },
  toProto(message: QueryAllTimeBasedInflationRequest): Uint8Array {
    return QueryAllTimeBasedInflationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTimeBasedInflationRequest): QueryAllTimeBasedInflationRequestProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.QueryAllTimeBasedInflationRequest",
      value: QueryAllTimeBasedInflationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTimeBasedInflationResponse(): QueryAllTimeBasedInflationResponse {
  return {
    timeBasedInflation: [],
    pagination: undefined
  };
}
export const QueryAllTimeBasedInflationResponse = {
  typeUrl: "/elys.tokenomics.QueryAllTimeBasedInflationResponse",
  encode(message: QueryAllTimeBasedInflationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.timeBasedInflation) {
      TimeBasedInflation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTimeBasedInflationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTimeBasedInflationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeBasedInflation.push(TimeBasedInflation.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllTimeBasedInflationResponse>): QueryAllTimeBasedInflationResponse {
    const message = createBaseQueryAllTimeBasedInflationResponse();
    message.timeBasedInflation = object.timeBasedInflation?.map(e => TimeBasedInflation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTimeBasedInflationResponseAmino): QueryAllTimeBasedInflationResponse {
    const message = createBaseQueryAllTimeBasedInflationResponse();
    message.timeBasedInflation = object.time_based_inflation?.map(e => TimeBasedInflation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTimeBasedInflationResponse): QueryAllTimeBasedInflationResponseAmino {
    const obj: any = {};
    if (message.timeBasedInflation) {
      obj.time_based_inflation = message.timeBasedInflation.map(e => e ? TimeBasedInflation.toAmino(e) : undefined);
    } else {
      obj.time_based_inflation = message.timeBasedInflation;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTimeBasedInflationResponseAminoMsg): QueryAllTimeBasedInflationResponse {
    return QueryAllTimeBasedInflationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTimeBasedInflationResponseProtoMsg): QueryAllTimeBasedInflationResponse {
    return QueryAllTimeBasedInflationResponse.decode(message.value);
  },
  toProto(message: QueryAllTimeBasedInflationResponse): Uint8Array {
    return QueryAllTimeBasedInflationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTimeBasedInflationResponse): QueryAllTimeBasedInflationResponseProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.QueryAllTimeBasedInflationResponse",
      value: QueryAllTimeBasedInflationResponse.encode(message).finish()
    };
  }
};