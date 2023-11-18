import { Position, positionFromJSON } from "./types";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface MsgOpen {
  creator: string;
  collateralAsset: string;
  collateralAmount: string;
  borrowAsset: string;
  position: Position;
  leverage: string;
  takeProfitPrice: string;
}
export interface MsgOpenProtoMsg {
  typeUrl: "/elys.margin.MsgOpen";
  value: Uint8Array;
}
export interface MsgOpenAmino {
  creator: string;
  collateral_asset: string;
  collateral_amount: string;
  borrow_asset: string;
  position: Position;
  leverage: string;
  take_profit_price: string;
}
export interface MsgOpenAminoMsg {
  type: "/elys.margin.MsgOpen";
  value: MsgOpenAmino;
}
export interface MsgOpenSDKType {
  creator: string;
  collateral_asset: string;
  collateral_amount: string;
  borrow_asset: string;
  position: Position;
  leverage: string;
  take_profit_price: string;
}
export interface MsgOpenResponse {
  id: bigint;
}
export interface MsgOpenResponseProtoMsg {
  typeUrl: "/elys.margin.MsgOpenResponse";
  value: Uint8Array;
}
export interface MsgOpenResponseAmino {
  id: string;
}
export interface MsgOpenResponseAminoMsg {
  type: "/elys.margin.MsgOpenResponse";
  value: MsgOpenResponseAmino;
}
export interface MsgOpenResponseSDKType {
  id: bigint;
}
export interface MsgClose {
  creator: string;
  id: bigint;
}
export interface MsgCloseProtoMsg {
  typeUrl: "/elys.margin.MsgClose";
  value: Uint8Array;
}
export interface MsgCloseAmino {
  creator: string;
  id: string;
}
export interface MsgCloseAminoMsg {
  type: "/elys.margin.MsgClose";
  value: MsgCloseAmino;
}
export interface MsgCloseSDKType {
  creator: string;
  id: bigint;
}
export interface MsgCloseResponse {
  id: bigint;
}
export interface MsgCloseResponseProtoMsg {
  typeUrl: "/elys.margin.MsgCloseResponse";
  value: Uint8Array;
}
export interface MsgCloseResponseAmino {
  id: string;
}
export interface MsgCloseResponseAminoMsg {
  type: "/elys.margin.MsgCloseResponse";
  value: MsgCloseResponseAmino;
}
export interface MsgCloseResponseSDKType {
  id: bigint;
}
export interface MsgBrokerOpen {
  creator: string;
  collateralAsset: string;
  collateralAmount: string;
  borrowAsset: string;
  position: Position;
  leverage: string;
  takeProfitPrice: string;
  owner: string;
}
export interface MsgBrokerOpenProtoMsg {
  typeUrl: "/elys.margin.MsgBrokerOpen";
  value: Uint8Array;
}
export interface MsgBrokerOpenAmino {
  creator: string;
  collateral_asset: string;
  collateral_amount: string;
  borrow_asset: string;
  position: Position;
  leverage: string;
  take_profit_price: string;
  owner: string;
}
export interface MsgBrokerOpenAminoMsg {
  type: "/elys.margin.MsgBrokerOpen";
  value: MsgBrokerOpenAmino;
}
export interface MsgBrokerOpenSDKType {
  creator: string;
  collateral_asset: string;
  collateral_amount: string;
  borrow_asset: string;
  position: Position;
  leverage: string;
  take_profit_price: string;
  owner: string;
}
export interface MsgBrokerOpenResponse {
  id: bigint;
}
export interface MsgBrokerOpenResponseProtoMsg {
  typeUrl: "/elys.margin.MsgBrokerOpenResponse";
  value: Uint8Array;
}
export interface MsgBrokerOpenResponseAmino {
  id: string;
}
export interface MsgBrokerOpenResponseAminoMsg {
  type: "/elys.margin.MsgBrokerOpenResponse";
  value: MsgBrokerOpenResponseAmino;
}
export interface MsgBrokerOpenResponseSDKType {
  id: bigint;
}
export interface MsgBrokerClose {
  creator: string;
  id: bigint;
  owner: string;
}
export interface MsgBrokerCloseProtoMsg {
  typeUrl: "/elys.margin.MsgBrokerClose";
  value: Uint8Array;
}
export interface MsgBrokerCloseAmino {
  creator: string;
  id: string;
  owner: string;
}
export interface MsgBrokerCloseAminoMsg {
  type: "/elys.margin.MsgBrokerClose";
  value: MsgBrokerCloseAmino;
}
export interface MsgBrokerCloseSDKType {
  creator: string;
  id: bigint;
  owner: string;
}
export interface MsgBrokerCloseResponse {
  id: bigint;
}
export interface MsgBrokerCloseResponseProtoMsg {
  typeUrl: "/elys.margin.MsgBrokerCloseResponse";
  value: Uint8Array;
}
export interface MsgBrokerCloseResponseAmino {
  id: string;
}
export interface MsgBrokerCloseResponseAminoMsg {
  type: "/elys.margin.MsgBrokerCloseResponse";
  value: MsgBrokerCloseResponseAmino;
}
export interface MsgBrokerCloseResponseSDKType {
  id: bigint;
}
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params?: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/elys.margin.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/elys.margin.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/elys.margin.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/elys.margin.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgUpdatePools {
  authority: string;
  pools: string[];
  closedPools: string[];
}
export interface MsgUpdatePoolsProtoMsg {
  typeUrl: "/elys.margin.MsgUpdatePools";
  value: Uint8Array;
}
export interface MsgUpdatePoolsAmino {
  authority: string;
  pools: string[];
  closed_pools: string[];
}
export interface MsgUpdatePoolsAminoMsg {
  type: "/elys.margin.MsgUpdatePools";
  value: MsgUpdatePoolsAmino;
}
export interface MsgUpdatePoolsSDKType {
  authority: string;
  pools: string[];
  closed_pools: string[];
}
export interface MsgUpdatePoolsResponse {}
export interface MsgUpdatePoolsResponseProtoMsg {
  typeUrl: "/elys.margin.MsgUpdatePoolsResponse";
  value: Uint8Array;
}
export interface MsgUpdatePoolsResponseAmino {}
export interface MsgUpdatePoolsResponseAminoMsg {
  type: "/elys.margin.MsgUpdatePoolsResponse";
  value: MsgUpdatePoolsResponseAmino;
}
export interface MsgUpdatePoolsResponseSDKType {}
export interface MsgWhitelist {
  authority: string;
  whitelistedAddress: string;
}
export interface MsgWhitelistProtoMsg {
  typeUrl: "/elys.margin.MsgWhitelist";
  value: Uint8Array;
}
export interface MsgWhitelistAmino {
  authority: string;
  whitelisted_address: string;
}
export interface MsgWhitelistAminoMsg {
  type: "/elys.margin.MsgWhitelist";
  value: MsgWhitelistAmino;
}
export interface MsgWhitelistSDKType {
  authority: string;
  whitelisted_address: string;
}
export interface MsgWhitelistResponse {}
export interface MsgWhitelistResponseProtoMsg {
  typeUrl: "/elys.margin.MsgWhitelistResponse";
  value: Uint8Array;
}
export interface MsgWhitelistResponseAmino {}
export interface MsgWhitelistResponseAminoMsg {
  type: "/elys.margin.MsgWhitelistResponse";
  value: MsgWhitelistResponseAmino;
}
export interface MsgWhitelistResponseSDKType {}
export interface MsgDewhitelist {
  authority: string;
  whitelistedAddress: string;
}
export interface MsgDewhitelistProtoMsg {
  typeUrl: "/elys.margin.MsgDewhitelist";
  value: Uint8Array;
}
export interface MsgDewhitelistAmino {
  authority: string;
  whitelisted_address: string;
}
export interface MsgDewhitelistAminoMsg {
  type: "/elys.margin.MsgDewhitelist";
  value: MsgDewhitelistAmino;
}
export interface MsgDewhitelistSDKType {
  authority: string;
  whitelisted_address: string;
}
export interface MsgDewhitelistResponse {}
export interface MsgDewhitelistResponseProtoMsg {
  typeUrl: "/elys.margin.MsgDewhitelistResponse";
  value: Uint8Array;
}
export interface MsgDewhitelistResponseAmino {}
export interface MsgDewhitelistResponseAminoMsg {
  type: "/elys.margin.MsgDewhitelistResponse";
  value: MsgDewhitelistResponseAmino;
}
export interface MsgDewhitelistResponseSDKType {}
function createBaseMsgOpen(): MsgOpen {
  return {
    creator: "",
    collateralAsset: "",
    collateralAmount: "",
    borrowAsset: "",
    position: 0,
    leverage: "",
    takeProfitPrice: ""
  };
}
export const MsgOpen = {
  typeUrl: "/elys.margin.MsgOpen",
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
    if (message.borrowAsset !== "") {
      writer.uint32(34).string(message.borrowAsset);
    }
    if (message.position !== 0) {
      writer.uint32(40).int32(message.position);
    }
    if (message.leverage !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.leverage, 18).atomics);
    }
    if (message.takeProfitPrice !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.takeProfitPrice, 18).atomics);
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
          message.borrowAsset = reader.string();
          break;
        case 5:
          message.position = (reader.int32() as any);
          break;
        case 6:
          message.leverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
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
    message.borrowAsset = object.borrowAsset ?? "";
    message.position = object.position ?? 0;
    message.leverage = object.leverage ?? "";
    message.takeProfitPrice = object.takeProfitPrice ?? "";
    return message;
  },
  fromAmino(object: MsgOpenAmino): MsgOpen {
    return {
      creator: object.creator,
      collateralAsset: object.collateral_asset,
      collateralAmount: object.collateral_amount,
      borrowAsset: object.borrow_asset,
      position: isSet(object.position) ? positionFromJSON(object.position) : -1,
      leverage: object.leverage,
      takeProfitPrice: object.take_profit_price
    };
  },
  toAmino(message: MsgOpen): MsgOpenAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.collateral_asset = message.collateralAsset;
    obj.collateral_amount = message.collateralAmount;
    obj.borrow_asset = message.borrowAsset;
    obj.position = message.position;
    obj.leverage = message.leverage;
    obj.take_profit_price = message.takeProfitPrice;
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
      typeUrl: "/elys.margin.MsgOpen",
      value: MsgOpen.encode(message).finish()
    };
  }
};
function createBaseMsgOpenResponse(): MsgOpenResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgOpenResponse = {
  typeUrl: "/elys.margin.MsgOpenResponse",
  encode(message: MsgOpenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOpenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOpenResponse();
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
  fromPartial(object: Partial<MsgOpenResponse>): MsgOpenResponse {
    const message = createBaseMsgOpenResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgOpenResponseAmino): MsgOpenResponse {
    return {
      id: BigInt(object.id)
    };
  },
  toAmino(message: MsgOpenResponse): MsgOpenResponseAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
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
      typeUrl: "/elys.margin.MsgOpenResponse",
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
  typeUrl: "/elys.margin.MsgClose",
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
      typeUrl: "/elys.margin.MsgClose",
      value: MsgClose.encode(message).finish()
    };
  }
};
function createBaseMsgCloseResponse(): MsgCloseResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgCloseResponse = {
  typeUrl: "/elys.margin.MsgCloseResponse",
  encode(message: MsgCloseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseResponse();
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
  fromPartial(object: Partial<MsgCloseResponse>): MsgCloseResponse {
    const message = createBaseMsgCloseResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCloseResponseAmino): MsgCloseResponse {
    return {
      id: BigInt(object.id)
    };
  },
  toAmino(message: MsgCloseResponse): MsgCloseResponseAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
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
      typeUrl: "/elys.margin.MsgCloseResponse",
      value: MsgCloseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBrokerOpen(): MsgBrokerOpen {
  return {
    creator: "",
    collateralAsset: "",
    collateralAmount: "",
    borrowAsset: "",
    position: 0,
    leverage: "",
    takeProfitPrice: "",
    owner: ""
  };
}
export const MsgBrokerOpen = {
  typeUrl: "/elys.margin.MsgBrokerOpen",
  encode(message: MsgBrokerOpen, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collateralAsset !== "") {
      writer.uint32(18).string(message.collateralAsset);
    }
    if (message.collateralAmount !== "") {
      writer.uint32(26).string(message.collateralAmount);
    }
    if (message.borrowAsset !== "") {
      writer.uint32(34).string(message.borrowAsset);
    }
    if (message.position !== 0) {
      writer.uint32(40).int32(message.position);
    }
    if (message.leverage !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.leverage, 18).atomics);
    }
    if (message.takeProfitPrice !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.takeProfitPrice, 18).atomics);
    }
    if (message.owner !== "") {
      writer.uint32(66).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBrokerOpen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBrokerOpen();
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
          message.borrowAsset = reader.string();
          break;
        case 5:
          message.position = (reader.int32() as any);
          break;
        case 6:
          message.leverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.takeProfitPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBrokerOpen>): MsgBrokerOpen {
    const message = createBaseMsgBrokerOpen();
    message.creator = object.creator ?? "";
    message.collateralAsset = object.collateralAsset ?? "";
    message.collateralAmount = object.collateralAmount ?? "";
    message.borrowAsset = object.borrowAsset ?? "";
    message.position = object.position ?? 0;
    message.leverage = object.leverage ?? "";
    message.takeProfitPrice = object.takeProfitPrice ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgBrokerOpenAmino): MsgBrokerOpen {
    return {
      creator: object.creator,
      collateralAsset: object.collateral_asset,
      collateralAmount: object.collateral_amount,
      borrowAsset: object.borrow_asset,
      position: isSet(object.position) ? positionFromJSON(object.position) : -1,
      leverage: object.leverage,
      takeProfitPrice: object.take_profit_price,
      owner: object.owner
    };
  },
  toAmino(message: MsgBrokerOpen): MsgBrokerOpenAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.collateral_asset = message.collateralAsset;
    obj.collateral_amount = message.collateralAmount;
    obj.borrow_asset = message.borrowAsset;
    obj.position = message.position;
    obj.leverage = message.leverage;
    obj.take_profit_price = message.takeProfitPrice;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgBrokerOpenAminoMsg): MsgBrokerOpen {
    return MsgBrokerOpen.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBrokerOpenProtoMsg): MsgBrokerOpen {
    return MsgBrokerOpen.decode(message.value);
  },
  toProto(message: MsgBrokerOpen): Uint8Array {
    return MsgBrokerOpen.encode(message).finish();
  },
  toProtoMsg(message: MsgBrokerOpen): MsgBrokerOpenProtoMsg {
    return {
      typeUrl: "/elys.margin.MsgBrokerOpen",
      value: MsgBrokerOpen.encode(message).finish()
    };
  }
};
function createBaseMsgBrokerOpenResponse(): MsgBrokerOpenResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgBrokerOpenResponse = {
  typeUrl: "/elys.margin.MsgBrokerOpenResponse",
  encode(message: MsgBrokerOpenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBrokerOpenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBrokerOpenResponse();
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
  fromPartial(object: Partial<MsgBrokerOpenResponse>): MsgBrokerOpenResponse {
    const message = createBaseMsgBrokerOpenResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgBrokerOpenResponseAmino): MsgBrokerOpenResponse {
    return {
      id: BigInt(object.id)
    };
  },
  toAmino(message: MsgBrokerOpenResponse): MsgBrokerOpenResponseAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBrokerOpenResponseAminoMsg): MsgBrokerOpenResponse {
    return MsgBrokerOpenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBrokerOpenResponseProtoMsg): MsgBrokerOpenResponse {
    return MsgBrokerOpenResponse.decode(message.value);
  },
  toProto(message: MsgBrokerOpenResponse): Uint8Array {
    return MsgBrokerOpenResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBrokerOpenResponse): MsgBrokerOpenResponseProtoMsg {
    return {
      typeUrl: "/elys.margin.MsgBrokerOpenResponse",
      value: MsgBrokerOpenResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBrokerClose(): MsgBrokerClose {
  return {
    creator: "",
    id: BigInt(0),
    owner: ""
  };
}
export const MsgBrokerClose = {
  typeUrl: "/elys.margin.MsgBrokerClose",
  encode(message: MsgBrokerClose, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBrokerClose {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBrokerClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBrokerClose>): MsgBrokerClose {
    const message = createBaseMsgBrokerClose();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgBrokerCloseAmino): MsgBrokerClose {
    return {
      creator: object.creator,
      id: BigInt(object.id),
      owner: object.owner
    };
  },
  toAmino(message: MsgBrokerClose): MsgBrokerCloseAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgBrokerCloseAminoMsg): MsgBrokerClose {
    return MsgBrokerClose.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBrokerCloseProtoMsg): MsgBrokerClose {
    return MsgBrokerClose.decode(message.value);
  },
  toProto(message: MsgBrokerClose): Uint8Array {
    return MsgBrokerClose.encode(message).finish();
  },
  toProtoMsg(message: MsgBrokerClose): MsgBrokerCloseProtoMsg {
    return {
      typeUrl: "/elys.margin.MsgBrokerClose",
      value: MsgBrokerClose.encode(message).finish()
    };
  }
};
function createBaseMsgBrokerCloseResponse(): MsgBrokerCloseResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgBrokerCloseResponse = {
  typeUrl: "/elys.margin.MsgBrokerCloseResponse",
  encode(message: MsgBrokerCloseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBrokerCloseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBrokerCloseResponse();
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
  fromPartial(object: Partial<MsgBrokerCloseResponse>): MsgBrokerCloseResponse {
    const message = createBaseMsgBrokerCloseResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgBrokerCloseResponseAmino): MsgBrokerCloseResponse {
    return {
      id: BigInt(object.id)
    };
  },
  toAmino(message: MsgBrokerCloseResponse): MsgBrokerCloseResponseAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBrokerCloseResponseAminoMsg): MsgBrokerCloseResponse {
    return MsgBrokerCloseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBrokerCloseResponseProtoMsg): MsgBrokerCloseResponse {
    return MsgBrokerCloseResponse.decode(message.value);
  },
  toProto(message: MsgBrokerCloseResponse): Uint8Array {
    return MsgBrokerCloseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBrokerCloseResponse): MsgBrokerCloseResponseProtoMsg {
    return {
      typeUrl: "/elys.margin.MsgBrokerCloseResponse",
      value: MsgBrokerCloseResponse.encode(message).finish()
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
  typeUrl: "/elys.margin.MsgUpdateParams",
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
      typeUrl: "/elys.margin.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/elys.margin.MsgUpdateParamsResponse",
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
      typeUrl: "/elys.margin.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePools(): MsgUpdatePools {
  return {
    authority: "",
    pools: [],
    closedPools: []
  };
}
export const MsgUpdatePools = {
  typeUrl: "/elys.margin.MsgUpdatePools",
  encode(message: MsgUpdatePools, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.pools) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.closedPools) {
      writer.uint32(26).string(v!);
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
          message.pools.push(reader.string());
          break;
        case 3:
          message.closedPools.push(reader.string());
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
    message.pools = object.pools?.map(e => e) || [];
    message.closedPools = object.closedPools?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgUpdatePoolsAmino): MsgUpdatePools {
    return {
      authority: object.authority,
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => e) : [],
      closedPools: Array.isArray(object?.closed_pools) ? object.closed_pools.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgUpdatePools): MsgUpdatePoolsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.pools) {
      obj.pools = message.pools.map(e => e);
    } else {
      obj.pools = [];
    }
    if (message.closedPools) {
      obj.closed_pools = message.closedPools.map(e => e);
    } else {
      obj.closed_pools = [];
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
      typeUrl: "/elys.margin.MsgUpdatePools",
      value: MsgUpdatePools.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePoolsResponse(): MsgUpdatePoolsResponse {
  return {};
}
export const MsgUpdatePoolsResponse = {
  typeUrl: "/elys.margin.MsgUpdatePoolsResponse",
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
      typeUrl: "/elys.margin.MsgUpdatePoolsResponse",
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
  typeUrl: "/elys.margin.MsgWhitelist",
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
      whitelistedAddress: object.whitelisted_address
    };
  },
  toAmino(message: MsgWhitelist): MsgWhitelistAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.whitelisted_address = message.whitelistedAddress;
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
      typeUrl: "/elys.margin.MsgWhitelist",
      value: MsgWhitelist.encode(message).finish()
    };
  }
};
function createBaseMsgWhitelistResponse(): MsgWhitelistResponse {
  return {};
}
export const MsgWhitelistResponse = {
  typeUrl: "/elys.margin.MsgWhitelistResponse",
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
      typeUrl: "/elys.margin.MsgWhitelistResponse",
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
  typeUrl: "/elys.margin.MsgDewhitelist",
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
      whitelistedAddress: object.whitelisted_address
    };
  },
  toAmino(message: MsgDewhitelist): MsgDewhitelistAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.whitelisted_address = message.whitelistedAddress;
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
      typeUrl: "/elys.margin.MsgDewhitelist",
      value: MsgDewhitelist.encode(message).finish()
    };
  }
};
function createBaseMsgDewhitelistResponse(): MsgDewhitelistResponse {
  return {};
}
export const MsgDewhitelistResponse = {
  typeUrl: "/elys.margin.MsgDewhitelistResponse",
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
      typeUrl: "/elys.margin.MsgDewhitelistResponse",
      value: MsgDewhitelistResponse.encode(message).finish()
    };
  }
};