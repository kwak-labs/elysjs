import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface MsgOpen {
  creator: string;
  collateralAsset: string;
  collateralAmount: string;
  ammPoolId: bigint;
  leverage: string;
  takeProfitPrice: string;
}
export interface MsgOpenProtoMsg {
  typeUrl: "/elys.leveragelp.MsgOpen";
  value: Uint8Array;
}
export interface MsgOpenAmino {
  creator: string;
  collateralAsset: string;
  collateralAmount: string;
  ammPoolId: string;
  leverage: string;
  takeProfitPrice: string;
}
export interface MsgOpenAminoMsg {
  type: "/elys.leveragelp.MsgOpen";
  value: MsgOpenAmino;
}
export interface MsgOpenSDKType {
  creator: string;
  collateralAsset: string;
  collateralAmount: string;
  ammPoolId: bigint;
  leverage: string;
  takeProfitPrice: string;
}
export interface MsgOpenResponse {}
export interface MsgOpenResponseProtoMsg {
  typeUrl: "/elys.leveragelp.MsgOpenResponse";
  value: Uint8Array;
}
export interface MsgOpenResponseAmino {}
export interface MsgOpenResponseAminoMsg {
  type: "/elys.leveragelp.MsgOpenResponse";
  value: MsgOpenResponseAmino;
}
export interface MsgOpenResponseSDKType {}
export interface MsgClose {
  creator: string;
  id: bigint;
}
export interface MsgCloseProtoMsg {
  typeUrl: "/elys.leveragelp.MsgClose";
  value: Uint8Array;
}
export interface MsgCloseAmino {
  creator: string;
  id: string;
}
export interface MsgCloseAminoMsg {
  type: "/elys.leveragelp.MsgClose";
  value: MsgCloseAmino;
}
export interface MsgCloseSDKType {
  creator: string;
  id: bigint;
}
export interface MsgCloseResponse {}
export interface MsgCloseResponseProtoMsg {
  typeUrl: "/elys.leveragelp.MsgCloseResponse";
  value: Uint8Array;
}
export interface MsgCloseResponseAmino {}
export interface MsgCloseResponseAminoMsg {
  type: "/elys.leveragelp.MsgCloseResponse";
  value: MsgCloseResponseAmino;
}
export interface MsgCloseResponseSDKType {}
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params?: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/elys.leveragelp.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/elys.leveragelp.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/elys.leveragelp.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/elys.leveragelp.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgUpdatePools {
  authority: string;
  pools: Pool[];
}
export interface MsgUpdatePoolsProtoMsg {
  typeUrl: "/elys.leveragelp.MsgUpdatePools";
  value: Uint8Array;
}
export interface MsgUpdatePoolsAmino {
  authority: string;
  pools: PoolAmino[];
}
export interface MsgUpdatePoolsAminoMsg {
  type: "/elys.leveragelp.MsgUpdatePools";
  value: MsgUpdatePoolsAmino;
}
export interface MsgUpdatePoolsSDKType {
  authority: string;
  pools: PoolSDKType[];
}
export interface MsgUpdatePoolsResponse {}
export interface MsgUpdatePoolsResponseProtoMsg {
  typeUrl: "/elys.leveragelp.MsgUpdatePoolsResponse";
  value: Uint8Array;
}
export interface MsgUpdatePoolsResponseAmino {}
export interface MsgUpdatePoolsResponseAminoMsg {
  type: "/elys.leveragelp.MsgUpdatePoolsResponse";
  value: MsgUpdatePoolsResponseAmino;
}
export interface MsgUpdatePoolsResponseSDKType {}
export interface MsgWhitelist {
  authority: string;
  whitelistedAddress: string;
}
export interface MsgWhitelistProtoMsg {
  typeUrl: "/elys.leveragelp.MsgWhitelist";
  value: Uint8Array;
}
export interface MsgWhitelistAmino {
  authority: string;
  whitelistedAddress: string;
}
export interface MsgWhitelistAminoMsg {
  type: "/elys.leveragelp.MsgWhitelist";
  value: MsgWhitelistAmino;
}
export interface MsgWhitelistSDKType {
  authority: string;
  whitelistedAddress: string;
}
export interface MsgWhitelistResponse {}
export interface MsgWhitelistResponseProtoMsg {
  typeUrl: "/elys.leveragelp.MsgWhitelistResponse";
  value: Uint8Array;
}
export interface MsgWhitelistResponseAmino {}
export interface MsgWhitelistResponseAminoMsg {
  type: "/elys.leveragelp.MsgWhitelistResponse";
  value: MsgWhitelistResponseAmino;
}
export interface MsgWhitelistResponseSDKType {}
export interface MsgDewhitelist {
  authority: string;
  whitelistedAddress: string;
}
export interface MsgDewhitelistProtoMsg {
  typeUrl: "/elys.leveragelp.MsgDewhitelist";
  value: Uint8Array;
}
export interface MsgDewhitelistAmino {
  authority: string;
  whitelistedAddress: string;
}
export interface MsgDewhitelistAminoMsg {
  type: "/elys.leveragelp.MsgDewhitelist";
  value: MsgDewhitelistAmino;
}
export interface MsgDewhitelistSDKType {
  authority: string;
  whitelistedAddress: string;
}
export interface MsgDewhitelistResponse {}
export interface MsgDewhitelistResponseProtoMsg {
  typeUrl: "/elys.leveragelp.MsgDewhitelistResponse";
  value: Uint8Array;
}
export interface MsgDewhitelistResponseAmino {}
export interface MsgDewhitelistResponseAminoMsg {
  type: "/elys.leveragelp.MsgDewhitelistResponse";
  value: MsgDewhitelistResponseAmino;
}
export interface MsgDewhitelistResponseSDKType {}
function createBaseMsgOpen(): MsgOpen {
  return {
    creator: "",
    collateralAsset: "",
    collateralAmount: "",
    ammPoolId: BigInt(0),
    leverage: "",
    takeProfitPrice: ""
  };
}
export const MsgOpen = {
  typeUrl: "/elys.leveragelp.MsgOpen",
  encode(message: MsgOpen, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collateralAsset !== "") {
      writer.uint32(18).string(message.collateralAsset);
    }
    if (message.collateralAmount !== "") {
      writer.uint32(26).string(message.collateralAmount);
    }
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(32).uint64(message.ammPoolId);
    }
    if (message.leverage !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.leverage, 18).atomics);
    }
    if (message.takeProfitPrice !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.takeProfitPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOpen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOpen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collateralAsset = reader.string();
          break;
        case 3:
          message.collateralAmount = reader.string();
          break;
        case 4:
          message.ammPoolId = reader.uint64();
          break;
        case 5:
          message.leverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.takeProfitPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgOpen>): MsgOpen {
    const message = createBaseMsgOpen();
    message.creator = object.creator ?? "";
    message.collateralAsset = object.collateralAsset ?? "";
    message.collateralAmount = object.collateralAmount ?? "";
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.leverage = object.leverage ?? "";
    message.takeProfitPrice = object.takeProfitPrice ?? "";
    return message;
  },
  fromAmino(object: MsgOpenAmino): MsgOpen {
    return {
      creator: object.creator,
      collateralAsset: object.collateralAsset,
      collateralAmount: object.collateralAmount,
      ammPoolId: BigInt(object.ammPoolId),
      leverage: object.leverage,
      takeProfitPrice: object.takeProfitPrice
    };
  },
  toAmino(message: MsgOpen): MsgOpenAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.collateralAsset = message.collateralAsset;
    obj.collateralAmount = message.collateralAmount;
    obj.ammPoolId = message.ammPoolId ? message.ammPoolId.toString() : undefined;
    obj.leverage = message.leverage;
    obj.takeProfitPrice = message.takeProfitPrice;
    return obj;
  },
  fromAminoMsg(object: MsgOpenAminoMsg): MsgOpen {
    return MsgOpen.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgOpenProtoMsg): MsgOpen {
    return MsgOpen.decode(message.value);
  },
  toProto(message: MsgOpen): Uint8Array {
    return MsgOpen.encode(message).finish();
  },
  toProtoMsg(message: MsgOpen): MsgOpenProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgOpen",
      value: MsgOpen.encode(message).finish()
    };
  }
};
function createBaseMsgOpenResponse(): MsgOpenResponse {
  return {};
}
export const MsgOpenResponse = {
  typeUrl: "/elys.leveragelp.MsgOpenResponse",
  encode(_: MsgOpenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOpenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOpenResponse();
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
  fromPartial(_: Partial<MsgOpenResponse>): MsgOpenResponse {
    const message = createBaseMsgOpenResponse();
    return message;
  },
  fromAmino(_: MsgOpenResponseAmino): MsgOpenResponse {
    return {};
  },
  toAmino(_: MsgOpenResponse): MsgOpenResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgOpenResponseAminoMsg): MsgOpenResponse {
    return MsgOpenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgOpenResponseProtoMsg): MsgOpenResponse {
    return MsgOpenResponse.decode(message.value);
  },
  toProto(message: MsgOpenResponse): Uint8Array {
    return MsgOpenResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgOpenResponse): MsgOpenResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgOpenResponse",
      value: MsgOpenResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClose(): MsgClose {
  return {
    creator: "",
    id: BigInt(0)
  };
}
export const MsgClose = {
  typeUrl: "/elys.leveragelp.MsgClose",
  encode(message: MsgClose, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClose {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClose>): MsgClose {
    const message = createBaseMsgClose();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCloseAmino): MsgClose {
    return {
      creator: object.creator,
      id: BigInt(object.id)
    };
  },
  toAmino(message: MsgClose): MsgCloseAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCloseAminoMsg): MsgClose {
    return MsgClose.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseProtoMsg): MsgClose {
    return MsgClose.decode(message.value);
  },
  toProto(message: MsgClose): Uint8Array {
    return MsgClose.encode(message).finish();
  },
  toProtoMsg(message: MsgClose): MsgCloseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgClose",
      value: MsgClose.encode(message).finish()
    };
  }
};
function createBaseMsgCloseResponse(): MsgCloseResponse {
  return {};
}
export const MsgCloseResponse = {
  typeUrl: "/elys.leveragelp.MsgCloseResponse",
  encode(_: MsgCloseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseResponse();
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
  fromPartial(_: Partial<MsgCloseResponse>): MsgCloseResponse {
    const message = createBaseMsgCloseResponse();
    return message;
  },
  fromAmino(_: MsgCloseResponseAmino): MsgCloseResponse {
    return {};
  },
  toAmino(_: MsgCloseResponse): MsgCloseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseResponseAminoMsg): MsgCloseResponse {
    return MsgCloseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseResponseProtoMsg): MsgCloseResponse {
    return MsgCloseResponse.decode(message.value);
  },
  toProto(message: MsgCloseResponse): Uint8Array {
    return MsgCloseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseResponse): MsgCloseResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgCloseResponse",
      value: MsgCloseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  typeUrl: "/elys.leveragelp.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    return {
      authority: object.authority,
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/elys.leveragelp.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    return {};
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePools(): MsgUpdatePools {
  return {
    authority: "",
    pools: []
  };
}
export const MsgUpdatePools = {
  typeUrl: "/elys.leveragelp.MsgUpdatePools",
  encode(message: MsgUpdatePools, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePools {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePools();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdatePools>): MsgUpdatePools {
    const message = createBaseMsgUpdatePools();
    message.authority = object.authority ?? "";
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUpdatePoolsAmino): MsgUpdatePools {
    return {
      authority: object.authority,
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgUpdatePools): MsgUpdatePoolsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pools = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePoolsAminoMsg): MsgUpdatePools {
    return MsgUpdatePools.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePoolsProtoMsg): MsgUpdatePools {
    return MsgUpdatePools.decode(message.value);
  },
  toProto(message: MsgUpdatePools): Uint8Array {
    return MsgUpdatePools.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePools): MsgUpdatePoolsProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgUpdatePools",
      value: MsgUpdatePools.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePoolsResponse(): MsgUpdatePoolsResponse {
  return {};
}
export const MsgUpdatePoolsResponse = {
  typeUrl: "/elys.leveragelp.MsgUpdatePoolsResponse",
  encode(_: MsgUpdatePoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePoolsResponse();
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
  fromPartial(_: Partial<MsgUpdatePoolsResponse>): MsgUpdatePoolsResponse {
    const message = createBaseMsgUpdatePoolsResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePoolsResponseAmino): MsgUpdatePoolsResponse {
    return {};
  },
  toAmino(_: MsgUpdatePoolsResponse): MsgUpdatePoolsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePoolsResponseAminoMsg): MsgUpdatePoolsResponse {
    return MsgUpdatePoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePoolsResponseProtoMsg): MsgUpdatePoolsResponse {
    return MsgUpdatePoolsResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePoolsResponse): Uint8Array {
    return MsgUpdatePoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePoolsResponse): MsgUpdatePoolsResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgUpdatePoolsResponse",
      value: MsgUpdatePoolsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWhitelist(): MsgWhitelist {
  return {
    authority: "",
    whitelistedAddress: ""
  };
}
export const MsgWhitelist = {
  typeUrl: "/elys.leveragelp.MsgWhitelist",
  encode(message: MsgWhitelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.whitelistedAddress !== "") {
      writer.uint32(18).string(message.whitelistedAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWhitelist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.whitelistedAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWhitelist>): MsgWhitelist {
    const message = createBaseMsgWhitelist();
    message.authority = object.authority ?? "";
    message.whitelistedAddress = object.whitelistedAddress ?? "";
    return message;
  },
  fromAmino(object: MsgWhitelistAmino): MsgWhitelist {
    return {
      authority: object.authority,
      whitelistedAddress: object.whitelistedAddress
    };
  },
  toAmino(message: MsgWhitelist): MsgWhitelistAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.whitelistedAddress = message.whitelistedAddress;
    return obj;
  },
  fromAminoMsg(object: MsgWhitelistAminoMsg): MsgWhitelist {
    return MsgWhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWhitelistProtoMsg): MsgWhitelist {
    return MsgWhitelist.decode(message.value);
  },
  toProto(message: MsgWhitelist): Uint8Array {
    return MsgWhitelist.encode(message).finish();
  },
  toProtoMsg(message: MsgWhitelist): MsgWhitelistProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgWhitelist",
      value: MsgWhitelist.encode(message).finish()
    };
  }
};
function createBaseMsgWhitelistResponse(): MsgWhitelistResponse {
  return {};
}
export const MsgWhitelistResponse = {
  typeUrl: "/elys.leveragelp.MsgWhitelistResponse",
  encode(_: MsgWhitelistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWhitelistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistResponse();
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
  fromPartial(_: Partial<MsgWhitelistResponse>): MsgWhitelistResponse {
    const message = createBaseMsgWhitelistResponse();
    return message;
  },
  fromAmino(_: MsgWhitelistResponseAmino): MsgWhitelistResponse {
    return {};
  },
  toAmino(_: MsgWhitelistResponse): MsgWhitelistResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWhitelistResponseAminoMsg): MsgWhitelistResponse {
    return MsgWhitelistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWhitelistResponseProtoMsg): MsgWhitelistResponse {
    return MsgWhitelistResponse.decode(message.value);
  },
  toProto(message: MsgWhitelistResponse): Uint8Array {
    return MsgWhitelistResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWhitelistResponse): MsgWhitelistResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgWhitelistResponse",
      value: MsgWhitelistResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDewhitelist(): MsgDewhitelist {
  return {
    authority: "",
    whitelistedAddress: ""
  };
}
export const MsgDewhitelist = {
  typeUrl: "/elys.leveragelp.MsgDewhitelist",
  encode(message: MsgDewhitelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.whitelistedAddress !== "") {
      writer.uint32(18).string(message.whitelistedAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDewhitelist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDewhitelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.whitelistedAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDewhitelist>): MsgDewhitelist {
    const message = createBaseMsgDewhitelist();
    message.authority = object.authority ?? "";
    message.whitelistedAddress = object.whitelistedAddress ?? "";
    return message;
  },
  fromAmino(object: MsgDewhitelistAmino): MsgDewhitelist {
    return {
      authority: object.authority,
      whitelistedAddress: object.whitelistedAddress
    };
  },
  toAmino(message: MsgDewhitelist): MsgDewhitelistAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.whitelistedAddress = message.whitelistedAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDewhitelistAminoMsg): MsgDewhitelist {
    return MsgDewhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDewhitelistProtoMsg): MsgDewhitelist {
    return MsgDewhitelist.decode(message.value);
  },
  toProto(message: MsgDewhitelist): Uint8Array {
    return MsgDewhitelist.encode(message).finish();
  },
  toProtoMsg(message: MsgDewhitelist): MsgDewhitelistProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgDewhitelist",
      value: MsgDewhitelist.encode(message).finish()
    };
  }
};
function createBaseMsgDewhitelistResponse(): MsgDewhitelistResponse {
  return {};
}
export const MsgDewhitelistResponse = {
  typeUrl: "/elys.leveragelp.MsgDewhitelistResponse",
  encode(_: MsgDewhitelistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDewhitelistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDewhitelistResponse();
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
  fromPartial(_: Partial<MsgDewhitelistResponse>): MsgDewhitelistResponse {
    const message = createBaseMsgDewhitelistResponse();
    return message;
  },
  fromAmino(_: MsgDewhitelistResponseAmino): MsgDewhitelistResponse {
    return {};
  },
  toAmino(_: MsgDewhitelistResponse): MsgDewhitelistResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDewhitelistResponseAminoMsg): MsgDewhitelistResponse {
    return MsgDewhitelistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDewhitelistResponseProtoMsg): MsgDewhitelistResponse {
    return MsgDewhitelistResponse.decode(message.value);
  },
  toProto(message: MsgDewhitelistResponse): Uint8Array {
    return MsgDewhitelistResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDewhitelistResponse): MsgDewhitelistResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgDewhitelistResponse",
      value: MsgDewhitelistResponse.encode(message).finish()
    };
  }
};