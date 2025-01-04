//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { PositionRequest, PositionRequestAmino, PositionRequestSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface MsgOpen {
  creator: string;
  collateralAsset: string;
  collateralAmount: string;
  ammPoolId: bigint;
  leverage: string;
  stopLossPrice: string;
}
export interface MsgOpenProtoMsg {
  typeUrl: "/elys.leveragelp.MsgOpen";
  value: Uint8Array;
}
export interface MsgOpenAmino {
  creator?: string;
  collateral_asset?: string;
  collateral_amount?: string;
  amm_pool_id?: string;
  leverage?: string;
  stop_loss_price?: string;
}
export interface MsgOpenAminoMsg {
  type: "leveragelp/MsgOpen";
  value: MsgOpenAmino;
}
export interface MsgOpenSDKType {
  creator: string;
  collateral_asset: string;
  collateral_amount: string;
  amm_pool_id: bigint;
  leverage: string;
  stop_loss_price: string;
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
  lpAmount: string;
}
export interface MsgCloseProtoMsg {
  typeUrl: "/elys.leveragelp.MsgClose";
  value: Uint8Array;
}
export interface MsgCloseAmino {
  creator?: string;
  id?: string;
  lp_amount?: string;
}
export interface MsgCloseAminoMsg {
  type: "leveragelp/MsgClose";
  value: MsgCloseAmino;
}
export interface MsgCloseSDKType {
  creator: string;
  id: bigint;
  lp_amount: string;
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
export interface MsgClaimRewards {
  sender: string;
  ids: bigint[];
}
export interface MsgClaimRewardsProtoMsg {
  typeUrl: "/elys.leveragelp.MsgClaimRewards";
  value: Uint8Array;
}
export interface MsgClaimRewardsAmino {
  sender?: string;
  ids?: string[];
}
export interface MsgClaimRewardsAminoMsg {
  type: "leveragelp/MsgClaimRewards";
  value: MsgClaimRewardsAmino;
}
export interface MsgClaimRewardsSDKType {
  sender: string;
  ids: bigint[];
}
export interface MsgClaimRewardsResponse {}
export interface MsgClaimRewardsResponseProtoMsg {
  typeUrl: "/elys.leveragelp.MsgClaimRewardsResponse";
  value: Uint8Array;
}
export interface MsgClaimRewardsResponseAmino {}
export interface MsgClaimRewardsResponseAminoMsg {
  type: "/elys.leveragelp.MsgClaimRewardsResponse";
  value: MsgClaimRewardsResponseAmino;
}
export interface MsgClaimRewardsResponseSDKType {}
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
  authority?: string;
  /** NOTE: All parameters must be supplied. */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "leveragelp/MsgUpdateParams";
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
export interface MsgWhitelist {
  authority: string;
  whitelistedAddress: string;
}
export interface MsgWhitelistProtoMsg {
  typeUrl: "/elys.leveragelp.MsgWhitelist";
  value: Uint8Array;
}
export interface MsgWhitelistAmino {
  authority?: string;
  whitelisted_address?: string;
}
export interface MsgWhitelistAminoMsg {
  type: "leveragelp/MsgWhitelist";
  value: MsgWhitelistAmino;
}
export interface MsgWhitelistSDKType {
  authority: string;
  whitelisted_address: string;
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
  authority?: string;
  whitelisted_address?: string;
}
export interface MsgDewhitelistAminoMsg {
  type: "leveragelp/MsgDewhitelist";
  value: MsgDewhitelistAmino;
}
export interface MsgDewhitelistSDKType {
  authority: string;
  whitelisted_address: string;
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
export interface MsgUpdateStopLoss {
  creator: string;
  position: bigint;
  price: string;
}
export interface MsgUpdateStopLossProtoMsg {
  typeUrl: "/elys.leveragelp.MsgUpdateStopLoss";
  value: Uint8Array;
}
export interface MsgUpdateStopLossAmino {
  creator?: string;
  position?: string;
  price?: string;
}
export interface MsgUpdateStopLossAminoMsg {
  type: "leveragelp/MsgUpdateStopLoss";
  value: MsgUpdateStopLossAmino;
}
export interface MsgUpdateStopLossSDKType {
  creator: string;
  position: bigint;
  price: string;
}
export interface MsgUpdateStopLossResponse {}
export interface MsgUpdateStopLossResponseProtoMsg {
  typeUrl: "/elys.leveragelp.MsgUpdateStopLossResponse";
  value: Uint8Array;
}
export interface MsgUpdateStopLossResponseAmino {}
export interface MsgUpdateStopLossResponseAminoMsg {
  type: "/elys.leveragelp.MsgUpdateStopLossResponse";
  value: MsgUpdateStopLossResponseAmino;
}
export interface MsgUpdateStopLossResponseSDKType {}
export interface AddPool {
  ammPoolId: bigint;
  leverageMax: string;
}
export interface AddPoolProtoMsg {
  typeUrl: "/elys.leveragelp.AddPool";
  value: Uint8Array;
}
export interface AddPoolAmino {
  amm_pool_id?: string;
  leverage_max?: string;
}
export interface AddPoolAminoMsg {
  type: "/elys.leveragelp.AddPool";
  value: AddPoolAmino;
}
export interface AddPoolSDKType {
  amm_pool_id: bigint;
  leverage_max: string;
}
export interface MsgAddPool {
  authority: string;
  pool: AddPool;
}
export interface MsgAddPoolProtoMsg {
  typeUrl: "/elys.leveragelp.MsgAddPool";
  value: Uint8Array;
}
export interface MsgAddPoolAmino {
  authority?: string;
  pool?: AddPoolAmino;
}
export interface MsgAddPoolAminoMsg {
  type: "leveragelp/MsgAddPool";
  value: MsgAddPoolAmino;
}
export interface MsgAddPoolSDKType {
  authority: string;
  pool: AddPoolSDKType;
}
export interface MsgAddPoolResponse {}
export interface MsgAddPoolResponseProtoMsg {
  typeUrl: "/elys.leveragelp.MsgAddPoolResponse";
  value: Uint8Array;
}
export interface MsgAddPoolResponseAmino {}
export interface MsgAddPoolResponseAminoMsg {
  type: "/elys.leveragelp.MsgAddPoolResponse";
  value: MsgAddPoolResponseAmino;
}
export interface MsgAddPoolResponseSDKType {}
export interface MsgRemovePool {
  authority: string;
  id: bigint;
}
export interface MsgRemovePoolProtoMsg {
  typeUrl: "/elys.leveragelp.MsgRemovePool";
  value: Uint8Array;
}
export interface MsgRemovePoolAmino {
  authority?: string;
  id?: string;
}
export interface MsgRemovePoolAminoMsg {
  type: "leveragelp/MsgRemovePool";
  value: MsgRemovePoolAmino;
}
export interface MsgRemovePoolSDKType {
  authority: string;
  id: bigint;
}
export interface MsgRemovePoolResponse {}
export interface MsgRemovePoolResponseProtoMsg {
  typeUrl: "/elys.leveragelp.MsgRemovePoolResponse";
  value: Uint8Array;
}
export interface MsgRemovePoolResponseAmino {}
export interface MsgRemovePoolResponseAminoMsg {
  type: "/elys.leveragelp.MsgRemovePoolResponse";
  value: MsgRemovePoolResponseAmino;
}
export interface MsgRemovePoolResponseSDKType {}
export interface MsgClosePositions {
  creator: string;
  liquidate: PositionRequest[];
  stopLoss: PositionRequest[];
}
export interface MsgClosePositionsProtoMsg {
  typeUrl: "/elys.leveragelp.MsgClosePositions";
  value: Uint8Array;
}
export interface MsgClosePositionsAmino {
  creator?: string;
  liquidate?: PositionRequestAmino[];
  stop_loss?: PositionRequestAmino[];
}
export interface MsgClosePositionsAminoMsg {
  type: "leveragelp/MsgClosePositions";
  value: MsgClosePositionsAmino;
}
export interface MsgClosePositionsSDKType {
  creator: string;
  liquidate: PositionRequestSDKType[];
  stop_loss: PositionRequestSDKType[];
}
export interface MsgClosePositionsResponse {}
export interface MsgClosePositionsResponseProtoMsg {
  typeUrl: "/elys.leveragelp.MsgClosePositionsResponse";
  value: Uint8Array;
}
export interface MsgClosePositionsResponseAmino {}
export interface MsgClosePositionsResponseAminoMsg {
  type: "/elys.leveragelp.MsgClosePositionsResponse";
  value: MsgClosePositionsResponseAmino;
}
export interface MsgClosePositionsResponseSDKType {}
function createBaseMsgOpen(): MsgOpen {
  return {
    creator: "",
    collateralAsset: "",
    collateralAmount: "",
    ammPoolId: BigInt(0),
    leverage: "",
    stopLossPrice: ""
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
    if (message.stopLossPrice !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.stopLossPrice, 18).atomics);
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
          message.stopLossPrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
    message.stopLossPrice = object.stopLossPrice ?? "";
    return message;
  },
  fromAmino(object: MsgOpenAmino): MsgOpen {
    const message = createBaseMsgOpen();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.collateral_asset !== undefined && object.collateral_asset !== null) {
      message.collateralAsset = object.collateral_asset;
    }
    if (object.collateral_amount !== undefined && object.collateral_amount !== null) {
      message.collateralAmount = object.collateral_amount;
    }
    if (object.amm_pool_id !== undefined && object.amm_pool_id !== null) {
      message.ammPoolId = BigInt(object.amm_pool_id);
    }
    if (object.leverage !== undefined && object.leverage !== null) {
      message.leverage = object.leverage;
    }
    if (object.stop_loss_price !== undefined && object.stop_loss_price !== null) {
      message.stopLossPrice = object.stop_loss_price;
    }
    return message;
  },
  toAmino(message: MsgOpen): MsgOpenAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.collateral_asset = message.collateralAsset === "" ? undefined : message.collateralAsset;
    obj.collateral_amount = message.collateralAmount === "" ? undefined : message.collateralAmount;
    obj.amm_pool_id = message.ammPoolId !== BigInt(0) ? message.ammPoolId?.toString() : undefined;
    obj.leverage = message.leverage === "" ? undefined : message.leverage;
    obj.stop_loss_price = message.stopLossPrice === "" ? undefined : message.stopLossPrice;
    return obj;
  },
  fromAminoMsg(object: MsgOpenAminoMsg): MsgOpen {
    return MsgOpen.fromAmino(object.value);
  },
  toAminoMsg(message: MsgOpen): MsgOpenAminoMsg {
    return {
      type: "leveragelp/MsgOpen",
      value: MsgOpen.toAmino(message)
    };
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
    const message = createBaseMsgOpenResponse();
    return message;
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
    id: BigInt(0),
    lpAmount: ""
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
    if (message.lpAmount !== "") {
      writer.uint32(26).string(message.lpAmount);
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
        case 3:
          message.lpAmount = reader.string();
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
    message.lpAmount = object.lpAmount ?? "";
    return message;
  },
  fromAmino(object: MsgCloseAmino): MsgClose {
    const message = createBaseMsgClose();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.lp_amount !== undefined && object.lp_amount !== null) {
      message.lpAmount = object.lp_amount;
    }
    return message;
  },
  toAmino(message: MsgClose): MsgCloseAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.lp_amount = message.lpAmount === "" ? undefined : message.lpAmount;
    return obj;
  },
  fromAminoMsg(object: MsgCloseAminoMsg): MsgClose {
    return MsgClose.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClose): MsgCloseAminoMsg {
    return {
      type: "leveragelp/MsgClose",
      value: MsgClose.toAmino(message)
    };
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
    const message = createBaseMsgCloseResponse();
    return message;
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
function createBaseMsgClaimRewards(): MsgClaimRewards {
  return {
    sender: "",
    ids: []
  };
}
export const MsgClaimRewards = {
  typeUrl: "/elys.leveragelp.MsgClaimRewards",
  encode(message: MsgClaimRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    writer.uint32(18).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64());
            }
          } else {
            message.ids.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimRewards>): MsgClaimRewards {
    const message = createBaseMsgClaimRewards();
    message.sender = object.sender ?? "";
    message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgClaimRewardsAmino): MsgClaimRewards {
    const message = createBaseMsgClaimRewards();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.ids = object.ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgClaimRewards): MsgClaimRewardsAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.ids) {
      obj.ids = message.ids.map(e => e.toString());
    } else {
      obj.ids = message.ids;
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimRewardsAminoMsg): MsgClaimRewards {
    return MsgClaimRewards.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimRewards): MsgClaimRewardsAminoMsg {
    return {
      type: "leveragelp/MsgClaimRewards",
      value: MsgClaimRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimRewardsProtoMsg): MsgClaimRewards {
    return MsgClaimRewards.decode(message.value);
  },
  toProto(message: MsgClaimRewards): Uint8Array {
    return MsgClaimRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimRewards): MsgClaimRewardsProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgClaimRewards",
      value: MsgClaimRewards.encode(message).finish()
    };
  }
};
function createBaseMsgClaimRewardsResponse(): MsgClaimRewardsResponse {
  return {};
}
export const MsgClaimRewardsResponse = {
  typeUrl: "/elys.leveragelp.MsgClaimRewardsResponse",
  encode(_: MsgClaimRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRewardsResponse();
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
  fromPartial(_: Partial<MsgClaimRewardsResponse>): MsgClaimRewardsResponse {
    const message = createBaseMsgClaimRewardsResponse();
    return message;
  },
  fromAmino(_: MsgClaimRewardsResponseAmino): MsgClaimRewardsResponse {
    const message = createBaseMsgClaimRewardsResponse();
    return message;
  },
  toAmino(_: MsgClaimRewardsResponse): MsgClaimRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimRewardsResponseAminoMsg): MsgClaimRewardsResponse {
    return MsgClaimRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimRewardsResponseProtoMsg): MsgClaimRewardsResponse {
    return MsgClaimRewardsResponse.decode(message.value);
  },
  toProto(message: MsgClaimRewardsResponse): Uint8Array {
    return MsgClaimRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimRewardsResponse): MsgClaimRewardsResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgClaimRewardsResponse",
      value: MsgClaimRewardsResponse.encode(message).finish()
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
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "leveragelp/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
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
    const message = createBaseMsgUpdateParamsResponse();
    return message;
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
    const message = createBaseMsgWhitelist();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.whitelisted_address !== undefined && object.whitelisted_address !== null) {
      message.whitelistedAddress = object.whitelisted_address;
    }
    return message;
  },
  toAmino(message: MsgWhitelist): MsgWhitelistAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.whitelisted_address = message.whitelistedAddress === "" ? undefined : message.whitelistedAddress;
    return obj;
  },
  fromAminoMsg(object: MsgWhitelistAminoMsg): MsgWhitelist {
    return MsgWhitelist.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWhitelist): MsgWhitelistAminoMsg {
    return {
      type: "leveragelp/MsgWhitelist",
      value: MsgWhitelist.toAmino(message)
    };
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
    const message = createBaseMsgWhitelistResponse();
    return message;
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
    const message = createBaseMsgDewhitelist();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.whitelisted_address !== undefined && object.whitelisted_address !== null) {
      message.whitelistedAddress = object.whitelisted_address;
    }
    return message;
  },
  toAmino(message: MsgDewhitelist): MsgDewhitelistAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.whitelisted_address = message.whitelistedAddress === "" ? undefined : message.whitelistedAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDewhitelistAminoMsg): MsgDewhitelist {
    return MsgDewhitelist.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDewhitelist): MsgDewhitelistAminoMsg {
    return {
      type: "leveragelp/MsgDewhitelist",
      value: MsgDewhitelist.toAmino(message)
    };
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
    const message = createBaseMsgDewhitelistResponse();
    return message;
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
function createBaseMsgUpdateStopLoss(): MsgUpdateStopLoss {
  return {
    creator: "",
    position: BigInt(0),
    price: ""
  };
}
export const MsgUpdateStopLoss = {
  typeUrl: "/elys.leveragelp.MsgUpdateStopLoss",
  encode(message: MsgUpdateStopLoss, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.position !== BigInt(0)) {
      writer.uint32(16).uint64(message.position);
    }
    if (message.price !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateStopLoss {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStopLoss();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.position = reader.uint64();
          break;
        case 3:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateStopLoss>): MsgUpdateStopLoss {
    const message = createBaseMsgUpdateStopLoss();
    message.creator = object.creator ?? "";
    message.position = object.position !== undefined && object.position !== null ? BigInt(object.position.toString()) : BigInt(0);
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateStopLossAmino): MsgUpdateStopLoss {
    const message = createBaseMsgUpdateStopLoss();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = BigInt(object.position);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: MsgUpdateStopLoss): MsgUpdateStopLossAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.position = message.position !== BigInt(0) ? message.position?.toString() : undefined;
    obj.price = message.price === "" ? undefined : message.price;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateStopLossAminoMsg): MsgUpdateStopLoss {
    return MsgUpdateStopLoss.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateStopLoss): MsgUpdateStopLossAminoMsg {
    return {
      type: "leveragelp/MsgUpdateStopLoss",
      value: MsgUpdateStopLoss.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateStopLossProtoMsg): MsgUpdateStopLoss {
    return MsgUpdateStopLoss.decode(message.value);
  },
  toProto(message: MsgUpdateStopLoss): Uint8Array {
    return MsgUpdateStopLoss.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateStopLoss): MsgUpdateStopLossProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgUpdateStopLoss",
      value: MsgUpdateStopLoss.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateStopLossResponse(): MsgUpdateStopLossResponse {
  return {};
}
export const MsgUpdateStopLossResponse = {
  typeUrl: "/elys.leveragelp.MsgUpdateStopLossResponse",
  encode(_: MsgUpdateStopLossResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateStopLossResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStopLossResponse();
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
  fromPartial(_: Partial<MsgUpdateStopLossResponse>): MsgUpdateStopLossResponse {
    const message = createBaseMsgUpdateStopLossResponse();
    return message;
  },
  fromAmino(_: MsgUpdateStopLossResponseAmino): MsgUpdateStopLossResponse {
    const message = createBaseMsgUpdateStopLossResponse();
    return message;
  },
  toAmino(_: MsgUpdateStopLossResponse): MsgUpdateStopLossResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateStopLossResponseAminoMsg): MsgUpdateStopLossResponse {
    return MsgUpdateStopLossResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateStopLossResponseProtoMsg): MsgUpdateStopLossResponse {
    return MsgUpdateStopLossResponse.decode(message.value);
  },
  toProto(message: MsgUpdateStopLossResponse): Uint8Array {
    return MsgUpdateStopLossResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateStopLossResponse): MsgUpdateStopLossResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgUpdateStopLossResponse",
      value: MsgUpdateStopLossResponse.encode(message).finish()
    };
  }
};
function createBaseAddPool(): AddPool {
  return {
    ammPoolId: BigInt(0),
    leverageMax: ""
  };
}
export const AddPool = {
  typeUrl: "/elys.leveragelp.AddPool",
  encode(message: AddPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.ammPoolId);
    }
    if (message.leverageMax !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.leverageMax, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ammPoolId = reader.uint64();
          break;
        case 3:
          message.leverageMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddPool>): AddPool {
    const message = createBaseAddPool();
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.leverageMax = object.leverageMax ?? "";
    return message;
  },
  fromAmino(object: AddPoolAmino): AddPool {
    const message = createBaseAddPool();
    if (object.amm_pool_id !== undefined && object.amm_pool_id !== null) {
      message.ammPoolId = BigInt(object.amm_pool_id);
    }
    if (object.leverage_max !== undefined && object.leverage_max !== null) {
      message.leverageMax = object.leverage_max;
    }
    return message;
  },
  toAmino(message: AddPool): AddPoolAmino {
    const obj: any = {};
    obj.amm_pool_id = message.ammPoolId !== BigInt(0) ? message.ammPoolId?.toString() : undefined;
    obj.leverage_max = message.leverageMax === "" ? undefined : message.leverageMax;
    return obj;
  },
  fromAminoMsg(object: AddPoolAminoMsg): AddPool {
    return AddPool.fromAmino(object.value);
  },
  fromProtoMsg(message: AddPoolProtoMsg): AddPool {
    return AddPool.decode(message.value);
  },
  toProto(message: AddPool): Uint8Array {
    return AddPool.encode(message).finish();
  },
  toProtoMsg(message: AddPool): AddPoolProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.AddPool",
      value: AddPool.encode(message).finish()
    };
  }
};
function createBaseMsgAddPool(): MsgAddPool {
  return {
    authority: "",
    pool: AddPool.fromPartial({})
  };
}
export const MsgAddPool = {
  typeUrl: "/elys.leveragelp.MsgAddPool",
  encode(message: MsgAddPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.pool !== undefined) {
      AddPool.encode(message.pool, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.pool = AddPool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddPool>): MsgAddPool {
    const message = createBaseMsgAddPool();
    message.authority = object.authority ?? "";
    message.pool = object.pool !== undefined && object.pool !== null ? AddPool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: MsgAddPoolAmino): MsgAddPool {
    const message = createBaseMsgAddPool();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = AddPool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: MsgAddPool): MsgAddPoolAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.pool = message.pool ? AddPool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddPoolAminoMsg): MsgAddPool {
    return MsgAddPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddPool): MsgAddPoolAminoMsg {
    return {
      type: "leveragelp/MsgAddPool",
      value: MsgAddPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddPoolProtoMsg): MsgAddPool {
    return MsgAddPool.decode(message.value);
  },
  toProto(message: MsgAddPool): Uint8Array {
    return MsgAddPool.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPool): MsgAddPoolProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgAddPool",
      value: MsgAddPool.encode(message).finish()
    };
  }
};
function createBaseMsgAddPoolResponse(): MsgAddPoolResponse {
  return {};
}
export const MsgAddPoolResponse = {
  typeUrl: "/elys.leveragelp.MsgAddPoolResponse",
  encode(_: MsgAddPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPoolResponse();
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
  fromPartial(_: Partial<MsgAddPoolResponse>): MsgAddPoolResponse {
    const message = createBaseMsgAddPoolResponse();
    return message;
  },
  fromAmino(_: MsgAddPoolResponseAmino): MsgAddPoolResponse {
    const message = createBaseMsgAddPoolResponse();
    return message;
  },
  toAmino(_: MsgAddPoolResponse): MsgAddPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddPoolResponseAminoMsg): MsgAddPoolResponse {
    return MsgAddPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddPoolResponseProtoMsg): MsgAddPoolResponse {
    return MsgAddPoolResponse.decode(message.value);
  },
  toProto(message: MsgAddPoolResponse): Uint8Array {
    return MsgAddPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPoolResponse): MsgAddPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgAddPoolResponse",
      value: MsgAddPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemovePool(): MsgRemovePool {
  return {
    authority: "",
    id: BigInt(0)
  };
}
export const MsgRemovePool = {
  typeUrl: "/elys.leveragelp.MsgRemovePool",
  encode(message: MsgRemovePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemovePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemovePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
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
  fromPartial(object: Partial<MsgRemovePool>): MsgRemovePool {
    const message = createBaseMsgRemovePool();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRemovePoolAmino): MsgRemovePool {
    const message = createBaseMsgRemovePool();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgRemovePool): MsgRemovePoolAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRemovePoolAminoMsg): MsgRemovePool {
    return MsgRemovePool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemovePool): MsgRemovePoolAminoMsg {
    return {
      type: "leveragelp/MsgRemovePool",
      value: MsgRemovePool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemovePoolProtoMsg): MsgRemovePool {
    return MsgRemovePool.decode(message.value);
  },
  toProto(message: MsgRemovePool): Uint8Array {
    return MsgRemovePool.encode(message).finish();
  },
  toProtoMsg(message: MsgRemovePool): MsgRemovePoolProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgRemovePool",
      value: MsgRemovePool.encode(message).finish()
    };
  }
};
function createBaseMsgRemovePoolResponse(): MsgRemovePoolResponse {
  return {};
}
export const MsgRemovePoolResponse = {
  typeUrl: "/elys.leveragelp.MsgRemovePoolResponse",
  encode(_: MsgRemovePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemovePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemovePoolResponse();
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
  fromPartial(_: Partial<MsgRemovePoolResponse>): MsgRemovePoolResponse {
    const message = createBaseMsgRemovePoolResponse();
    return message;
  },
  fromAmino(_: MsgRemovePoolResponseAmino): MsgRemovePoolResponse {
    const message = createBaseMsgRemovePoolResponse();
    return message;
  },
  toAmino(_: MsgRemovePoolResponse): MsgRemovePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemovePoolResponseAminoMsg): MsgRemovePoolResponse {
    return MsgRemovePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemovePoolResponseProtoMsg): MsgRemovePoolResponse {
    return MsgRemovePoolResponse.decode(message.value);
  },
  toProto(message: MsgRemovePoolResponse): Uint8Array {
    return MsgRemovePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemovePoolResponse): MsgRemovePoolResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgRemovePoolResponse",
      value: MsgRemovePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClosePositions(): MsgClosePositions {
  return {
    creator: "",
    liquidate: [],
    stopLoss: []
  };
}
export const MsgClosePositions = {
  typeUrl: "/elys.leveragelp.MsgClosePositions",
  encode(message: MsgClosePositions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.liquidate) {
      PositionRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.stopLoss) {
      PositionRequest.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClosePositions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClosePositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.liquidate.push(PositionRequest.decode(reader, reader.uint32()));
          break;
        case 3:
          message.stopLoss.push(PositionRequest.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClosePositions>): MsgClosePositions {
    const message = createBaseMsgClosePositions();
    message.creator = object.creator ?? "";
    message.liquidate = object.liquidate?.map(e => PositionRequest.fromPartial(e)) || [];
    message.stopLoss = object.stopLoss?.map(e => PositionRequest.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClosePositionsAmino): MsgClosePositions {
    const message = createBaseMsgClosePositions();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.liquidate = object.liquidate?.map(e => PositionRequest.fromAmino(e)) || [];
    message.stopLoss = object.stop_loss?.map(e => PositionRequest.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgClosePositions): MsgClosePositionsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.liquidate) {
      obj.liquidate = message.liquidate.map(e => e ? PositionRequest.toAmino(e) : undefined);
    } else {
      obj.liquidate = message.liquidate;
    }
    if (message.stopLoss) {
      obj.stop_loss = message.stopLoss.map(e => e ? PositionRequest.toAmino(e) : undefined);
    } else {
      obj.stop_loss = message.stopLoss;
    }
    return obj;
  },
  fromAminoMsg(object: MsgClosePositionsAminoMsg): MsgClosePositions {
    return MsgClosePositions.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClosePositions): MsgClosePositionsAminoMsg {
    return {
      type: "leveragelp/MsgClosePositions",
      value: MsgClosePositions.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClosePositionsProtoMsg): MsgClosePositions {
    return MsgClosePositions.decode(message.value);
  },
  toProto(message: MsgClosePositions): Uint8Array {
    return MsgClosePositions.encode(message).finish();
  },
  toProtoMsg(message: MsgClosePositions): MsgClosePositionsProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgClosePositions",
      value: MsgClosePositions.encode(message).finish()
    };
  }
};
function createBaseMsgClosePositionsResponse(): MsgClosePositionsResponse {
  return {};
}
export const MsgClosePositionsResponse = {
  typeUrl: "/elys.leveragelp.MsgClosePositionsResponse",
  encode(_: MsgClosePositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClosePositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClosePositionsResponse();
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
  fromPartial(_: Partial<MsgClosePositionsResponse>): MsgClosePositionsResponse {
    const message = createBaseMsgClosePositionsResponse();
    return message;
  },
  fromAmino(_: MsgClosePositionsResponseAmino): MsgClosePositionsResponse {
    const message = createBaseMsgClosePositionsResponse();
    return message;
  },
  toAmino(_: MsgClosePositionsResponse): MsgClosePositionsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClosePositionsResponseAminoMsg): MsgClosePositionsResponse {
    return MsgClosePositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClosePositionsResponseProtoMsg): MsgClosePositionsResponse {
    return MsgClosePositionsResponse.decode(message.value);
  },
  toProto(message: MsgClosePositionsResponse): Uint8Array {
    return MsgClosePositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClosePositionsResponse): MsgClosePositionsResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.MsgClosePositionsResponse",
      value: MsgClosePositionsResponse.encode(message).finish()
    };
  }
};