//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { AccountedPool, AccountedPoolAmino, AccountedPoolSDKType } from "./accounted_pool";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface QueryGetAccountedPoolRequest {
  poolId: bigint;
}
export interface QueryGetAccountedPoolRequestProtoMsg {
  typeUrl: "/elys.accountedpool.QueryGetAccountedPoolRequest";
  value: Uint8Array;
}
export interface QueryGetAccountedPoolRequestAmino {
  pool_id?: string;
}
export interface QueryGetAccountedPoolRequestAminoMsg {
  type: "/elys.accountedpool.QueryGetAccountedPoolRequest";
  value: QueryGetAccountedPoolRequestAmino;
}
export interface QueryGetAccountedPoolRequestSDKType {
  pool_id: bigint;
}
export interface QueryGetAccountedPoolResponse {
  accountedPool: AccountedPool;
}
export interface QueryGetAccountedPoolResponseProtoMsg {
  typeUrl: "/elys.accountedpool.QueryGetAccountedPoolResponse";
  value: Uint8Array;
}
export interface QueryGetAccountedPoolResponseAmino {
  accounted_pool?: AccountedPoolAmino;
}
export interface QueryGetAccountedPoolResponseAminoMsg {
  type: "/elys.accountedpool.QueryGetAccountedPoolResponse";
  value: QueryGetAccountedPoolResponseAmino;
}
export interface QueryGetAccountedPoolResponseSDKType {
  accounted_pool: AccountedPoolSDKType;
}
export interface QueryAllAccountedPoolRequest {
  pagination?: PageRequest;
}
export interface QueryAllAccountedPoolRequestProtoMsg {
  typeUrl: "/elys.accountedpool.QueryAllAccountedPoolRequest";
  value: Uint8Array;
}
export interface QueryAllAccountedPoolRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllAccountedPoolRequestAminoMsg {
  type: "/elys.accountedpool.QueryAllAccountedPoolRequest";
  value: QueryAllAccountedPoolRequestAmino;
}
export interface QueryAllAccountedPoolRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllAccountedPoolResponse {
  accountedPool: AccountedPool[];
  pagination?: PageResponse;
}
export interface QueryAllAccountedPoolResponseProtoMsg {
  typeUrl: "/elys.accountedpool.QueryAllAccountedPoolResponse";
  value: Uint8Array;
}
export interface QueryAllAccountedPoolResponseAmino {
  accounted_pool?: AccountedPoolAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllAccountedPoolResponseAminoMsg {
  type: "/elys.accountedpool.QueryAllAccountedPoolResponse";
  value: QueryAllAccountedPoolResponseAmino;
}
export interface QueryAllAccountedPoolResponseSDKType {
  accounted_pool: AccountedPoolSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryGetAccountedPoolRequest(): QueryGetAccountedPoolRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryGetAccountedPoolRequest = {
  typeUrl: "/elys.accountedpool.QueryGetAccountedPoolRequest",
  encode(message: QueryGetAccountedPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAccountedPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAccountedPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAccountedPoolRequest>): QueryGetAccountedPoolRequest {
    const message = createBaseQueryGetAccountedPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetAccountedPoolRequestAmino): QueryGetAccountedPoolRequest {
    const message = createBaseQueryGetAccountedPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryGetAccountedPoolRequest): QueryGetAccountedPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAccountedPoolRequestAminoMsg): QueryGetAccountedPoolRequest {
    return QueryGetAccountedPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAccountedPoolRequestProtoMsg): QueryGetAccountedPoolRequest {
    return QueryGetAccountedPoolRequest.decode(message.value);
  },
  toProto(message: QueryGetAccountedPoolRequest): Uint8Array {
    return QueryGetAccountedPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAccountedPoolRequest): QueryGetAccountedPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.accountedpool.QueryGetAccountedPoolRequest",
      value: QueryGetAccountedPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetAccountedPoolResponse(): QueryGetAccountedPoolResponse {
  return {
    accountedPool: AccountedPool.fromPartial({})
  };
}
export const QueryGetAccountedPoolResponse = {
  typeUrl: "/elys.accountedpool.QueryGetAccountedPoolResponse",
  encode(message: QueryGetAccountedPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountedPool !== undefined) {
      AccountedPool.encode(message.accountedPool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAccountedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAccountedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountedPool = AccountedPool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAccountedPoolResponse>): QueryGetAccountedPoolResponse {
    const message = createBaseQueryGetAccountedPoolResponse();
    message.accountedPool = object.accountedPool !== undefined && object.accountedPool !== null ? AccountedPool.fromPartial(object.accountedPool) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAccountedPoolResponseAmino): QueryGetAccountedPoolResponse {
    const message = createBaseQueryGetAccountedPoolResponse();
    if (object.accounted_pool !== undefined && object.accounted_pool !== null) {
      message.accountedPool = AccountedPool.fromAmino(object.accounted_pool);
    }
    return message;
  },
  toAmino(message: QueryGetAccountedPoolResponse): QueryGetAccountedPoolResponseAmino {
    const obj: any = {};
    obj.accounted_pool = message.accountedPool ? AccountedPool.toAmino(message.accountedPool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAccountedPoolResponseAminoMsg): QueryGetAccountedPoolResponse {
    return QueryGetAccountedPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAccountedPoolResponseProtoMsg): QueryGetAccountedPoolResponse {
    return QueryGetAccountedPoolResponse.decode(message.value);
  },
  toProto(message: QueryGetAccountedPoolResponse): Uint8Array {
    return QueryGetAccountedPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAccountedPoolResponse): QueryGetAccountedPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.accountedpool.QueryGetAccountedPoolResponse",
      value: QueryGetAccountedPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllAccountedPoolRequest(): QueryAllAccountedPoolRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllAccountedPoolRequest = {
  typeUrl: "/elys.accountedpool.QueryAllAccountedPoolRequest",
  encode(message: QueryAllAccountedPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAccountedPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAccountedPoolRequest();
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
  fromPartial(object: Partial<QueryAllAccountedPoolRequest>): QueryAllAccountedPoolRequest {
    const message = createBaseQueryAllAccountedPoolRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAccountedPoolRequestAmino): QueryAllAccountedPoolRequest {
    const message = createBaseQueryAllAccountedPoolRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAccountedPoolRequest): QueryAllAccountedPoolRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAccountedPoolRequestAminoMsg): QueryAllAccountedPoolRequest {
    return QueryAllAccountedPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAccountedPoolRequestProtoMsg): QueryAllAccountedPoolRequest {
    return QueryAllAccountedPoolRequest.decode(message.value);
  },
  toProto(message: QueryAllAccountedPoolRequest): Uint8Array {
    return QueryAllAccountedPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAccountedPoolRequest): QueryAllAccountedPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.accountedpool.QueryAllAccountedPoolRequest",
      value: QueryAllAccountedPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllAccountedPoolResponse(): QueryAllAccountedPoolResponse {
  return {
    accountedPool: [],
    pagination: undefined
  };
}
export const QueryAllAccountedPoolResponse = {
  typeUrl: "/elys.accountedpool.QueryAllAccountedPoolResponse",
  encode(message: QueryAllAccountedPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accountedPool) {
      AccountedPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAccountedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAccountedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountedPool.push(AccountedPool.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllAccountedPoolResponse>): QueryAllAccountedPoolResponse {
    const message = createBaseQueryAllAccountedPoolResponse();
    message.accountedPool = object.accountedPool?.map(e => AccountedPool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAccountedPoolResponseAmino): QueryAllAccountedPoolResponse {
    const message = createBaseQueryAllAccountedPoolResponse();
    message.accountedPool = object.accounted_pool?.map(e => AccountedPool.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAccountedPoolResponse): QueryAllAccountedPoolResponseAmino {
    const obj: any = {};
    if (message.accountedPool) {
      obj.accounted_pool = message.accountedPool.map(e => e ? AccountedPool.toAmino(e) : undefined);
    } else {
      obj.accounted_pool = message.accountedPool;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAccountedPoolResponseAminoMsg): QueryAllAccountedPoolResponse {
    return QueryAllAccountedPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAccountedPoolResponseProtoMsg): QueryAllAccountedPoolResponse {
    return QueryAllAccountedPoolResponse.decode(message.value);
  },
  toProto(message: QueryAllAccountedPoolResponse): Uint8Array {
    return QueryAllAccountedPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAccountedPoolResponse): QueryAllAccountedPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.accountedpool.QueryAllAccountedPoolResponse",
      value: QueryAllAccountedPoolResponse.encode(message).finish()
    };
  }
};