//@ts-nocheck
import { Position, PositionRequest, PositionRequestAmino, PositionRequestSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface MsgOpen {
  creator: string;
  position: Position;
  leverage: string;
  tradingAsset: string;
  collateral: Coin;
  takeProfitPrice: string;
  stopLossPrice: string;
  poolId: bigint;
}
export interface MsgOpenProtoMsg {
  typeUrl: "/elys.perpetual.MsgOpen";
  value: Uint8Array;
}
export interface MsgOpenAmino {
  creator?: string;
  position?: Position;
  leverage?: string;
  trading_asset?: string;
  collateral?: CoinAmino;
  take_profit_price?: string;
  stop_loss_price?: string;
  pool_id?: string;
}
export interface MsgOpenAminoMsg {
  type: "perpetual/MsgOpen";
  value: MsgOpenAmino;
}
export interface MsgOpenSDKType {
  creator: string;
  position: Position;
  leverage: string;
  trading_asset: string;
  collateral: CoinSDKType;
  take_profit_price: string;
  stop_loss_price: string;
  pool_id: bigint;
}
export interface MsgOpenResponse {
  id: bigint;
}
export interface MsgOpenResponseProtoMsg {
  typeUrl: "/elys.perpetual.MsgOpenResponse";
  value: Uint8Array;
}
export interface MsgOpenResponseAmino {
  id?: string;
}
export interface MsgOpenResponseAminoMsg {
  type: "/elys.perpetual.MsgOpenResponse";
  value: MsgOpenResponseAmino;
}
export interface MsgOpenResponseSDKType {
  id: bigint;
}
export interface MsgClose {
  creator: string;
  id: bigint;
  amount: string;
}
export interface MsgCloseProtoMsg {
  typeUrl: "/elys.perpetual.MsgClose";
  value: Uint8Array;
}
export interface MsgCloseAmino {
  creator?: string;
  id?: string;
  amount?: string;
}
export interface MsgCloseAminoMsg {
  type: "perpetual/MsgClose";
  value: MsgCloseAmino;
}
export interface MsgCloseSDKType {
  creator: string;
  id: bigint;
  amount: string;
}
export interface MsgCloseResponse {
  id: bigint;
  amount: string;
}
export interface MsgCloseResponseProtoMsg {
  typeUrl: "/elys.perpetual.MsgCloseResponse";
  value: Uint8Array;
}
export interface MsgCloseResponseAmino {
  id?: string;
  amount?: string;
}
export interface MsgCloseResponseAminoMsg {
  type: "/elys.perpetual.MsgCloseResponse";
  value: MsgCloseResponseAmino;
}
export interface MsgCloseResponseSDKType {
  id: bigint;
  amount: string;
}
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
  typeUrl: "/elys.perpetual.MsgUpdateParams";
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
  type: "perpetual/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/elys.perpetual.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/elys.perpetual.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgWhitelist {
  authority: string;
  whitelistedAddress: string;
}
export interface MsgWhitelistProtoMsg {
  typeUrl: "/elys.perpetual.MsgWhitelist";
  value: Uint8Array;
}
export interface MsgWhitelistAmino {
  authority?: string;
  whitelisted_address?: string;
}
export interface MsgWhitelistAminoMsg {
  type: "perpetual/MsgWhitelist";
  value: MsgWhitelistAmino;
}
export interface MsgWhitelistSDKType {
  authority: string;
  whitelisted_address: string;
}
export interface MsgWhitelistResponse {}
export interface MsgWhitelistResponseProtoMsg {
  typeUrl: "/elys.perpetual.MsgWhitelistResponse";
  value: Uint8Array;
}
export interface MsgWhitelistResponseAmino {}
export interface MsgWhitelistResponseAminoMsg {
  type: "/elys.perpetual.MsgWhitelistResponse";
  value: MsgWhitelistResponseAmino;
}
export interface MsgWhitelistResponseSDKType {}
export interface MsgDewhitelist {
  authority: string;
  whitelistedAddress: string;
}
export interface MsgDewhitelistProtoMsg {
  typeUrl: "/elys.perpetual.MsgDewhitelist";
  value: Uint8Array;
}
export interface MsgDewhitelistAmino {
  authority?: string;
  whitelisted_address?: string;
}
export interface MsgDewhitelistAminoMsg {
  type: "perpetual/MsgDewhitelist";
  value: MsgDewhitelistAmino;
}
export interface MsgDewhitelistSDKType {
  authority: string;
  whitelisted_address: string;
}
export interface MsgDewhitelistResponse {}
export interface MsgDewhitelistResponseProtoMsg {
  typeUrl: "/elys.perpetual.MsgDewhitelistResponse";
  value: Uint8Array;
}
export interface MsgDewhitelistResponseAmino {}
export interface MsgDewhitelistResponseAminoMsg {
  type: "/elys.perpetual.MsgDewhitelistResponse";
  value: MsgDewhitelistResponseAmino;
}
export interface MsgDewhitelistResponseSDKType {}
export interface MsgClosePositions {
  creator: string;
  liquidate: PositionRequest[];
  stopLoss: PositionRequest[];
  takeProfit: PositionRequest[];
}
export interface MsgClosePositionsProtoMsg {
  typeUrl: "/elys.perpetual.MsgClosePositions";
  value: Uint8Array;
}
export interface MsgClosePositionsAmino {
  creator?: string;
  liquidate?: PositionRequestAmino[];
  stop_loss?: PositionRequestAmino[];
  take_profit?: PositionRequestAmino[];
}
export interface MsgClosePositionsAminoMsg {
  type: "perpetual/MsgClosePositions";
  value: MsgClosePositionsAmino;
}
export interface MsgClosePositionsSDKType {
  creator: string;
  liquidate: PositionRequestSDKType[];
  stop_loss: PositionRequestSDKType[];
  take_profit: PositionRequestSDKType[];
}
export interface MsgClosePositionsResponse {}
export interface MsgClosePositionsResponseProtoMsg {
  typeUrl: "/elys.perpetual.MsgClosePositionsResponse";
  value: Uint8Array;
}
export interface MsgClosePositionsResponseAmino {}
export interface MsgClosePositionsResponseAminoMsg {
  type: "/elys.perpetual.MsgClosePositionsResponse";
  value: MsgClosePositionsResponseAmino;
}
export interface MsgClosePositionsResponseSDKType {}
export interface MsgUpdateStopLoss {
  creator: string;
  id: bigint;
  price: string;
}
export interface MsgUpdateStopLossProtoMsg {
  typeUrl: "/elys.perpetual.MsgUpdateStopLoss";
  value: Uint8Array;
}
export interface MsgUpdateStopLossAmino {
  creator?: string;
  id?: string;
  price?: string;
}
export interface MsgUpdateStopLossAminoMsg {
  type: "perpetual/MsgUpdateStopLoss";
  value: MsgUpdateStopLossAmino;
}
export interface MsgUpdateStopLossSDKType {
  creator: string;
  id: bigint;
  price: string;
}
export interface MsgUpdateStopLossResponse {}
export interface MsgUpdateStopLossResponseProtoMsg {
  typeUrl: "/elys.perpetual.MsgUpdateStopLossResponse";
  value: Uint8Array;
}
export interface MsgUpdateStopLossResponseAmino {}
export interface MsgUpdateStopLossResponseAminoMsg {
  type: "/elys.perpetual.MsgUpdateStopLossResponse";
  value: MsgUpdateStopLossResponseAmino;
}
export interface MsgUpdateStopLossResponseSDKType {}
export interface MsgUpdateTakeProfitPrice {
  creator: string;
  id: bigint;
  price: string;
}
export interface MsgUpdateTakeProfitPriceProtoMsg {
  typeUrl: "/elys.perpetual.MsgUpdateTakeProfitPrice";
  value: Uint8Array;
}
export interface MsgUpdateTakeProfitPriceAmino {
  creator?: string;
  id?: string;
  price?: string;
}
export interface MsgUpdateTakeProfitPriceAminoMsg {
  type: "perpetual/MsgUpdateTakeProfitPrice";
  value: MsgUpdateTakeProfitPriceAmino;
}
export interface MsgUpdateTakeProfitPriceSDKType {
  creator: string;
  id: bigint;
  price: string;
}
export interface MsgUpdateTakeProfitPriceResponse {}
export interface MsgUpdateTakeProfitPriceResponseProtoMsg {
  typeUrl: "/elys.perpetual.MsgUpdateTakeProfitPriceResponse";
  value: Uint8Array;
}
export interface MsgUpdateTakeProfitPriceResponseAmino {}
export interface MsgUpdateTakeProfitPriceResponseAminoMsg {
  type: "/elys.perpetual.MsgUpdateTakeProfitPriceResponse";
  value: MsgUpdateTakeProfitPriceResponseAmino;
}
export interface MsgUpdateTakeProfitPriceResponseSDKType {}
export interface MsgUpdateMaxLeverageForPool {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  poolId: bigint;
  leverageMax: string;
}
export interface MsgUpdateMaxLeverageForPoolProtoMsg {
  typeUrl: "/elys.perpetual.MsgUpdateMaxLeverageForPool";
  value: Uint8Array;
}
export interface MsgUpdateMaxLeverageForPoolAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  pool_id?: string;
  leverage_max?: string;
}
export interface MsgUpdateMaxLeverageForPoolAminoMsg {
  type: "perpetual/MsgUpdateMaxLeverageForPool";
  value: MsgUpdateMaxLeverageForPoolAmino;
}
export interface MsgUpdateMaxLeverageForPoolSDKType {
  authority: string;
  pool_id: bigint;
  leverage_max: string;
}
export interface MsgUpdateMaxLeverageForPoolResponse {}
export interface MsgUpdateMaxLeverageForPoolResponseProtoMsg {
  typeUrl: "/elys.perpetual.MsgUpdateMaxLeverageForPoolResponse";
  value: Uint8Array;
}
export interface MsgUpdateMaxLeverageForPoolResponseAmino {}
export interface MsgUpdateMaxLeverageForPoolResponseAminoMsg {
  type: "/elys.perpetual.MsgUpdateMaxLeverageForPoolResponse";
  value: MsgUpdateMaxLeverageForPoolResponseAmino;
}
export interface MsgUpdateMaxLeverageForPoolResponseSDKType {}
export interface MsgUpdateEnabledPools {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  enabledPools: bigint[];
}
export interface MsgUpdateEnabledPoolsProtoMsg {
  typeUrl: "/elys.perpetual.MsgUpdateEnabledPools";
  value: Uint8Array;
}
export interface MsgUpdateEnabledPoolsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  enabled_pools?: string[];
}
export interface MsgUpdateEnabledPoolsAminoMsg {
  type: "perpetual/MsgUpdateEnabledPools";
  value: MsgUpdateEnabledPoolsAmino;
}
export interface MsgUpdateEnabledPoolsSDKType {
  authority: string;
  enabled_pools: bigint[];
}
export interface MsgUpdateEnabledPoolsResponse {}
export interface MsgUpdateEnabledPoolsResponseProtoMsg {
  typeUrl: "/elys.perpetual.MsgUpdateEnabledPoolsResponse";
  value: Uint8Array;
}
export interface MsgUpdateEnabledPoolsResponseAmino {}
export interface MsgUpdateEnabledPoolsResponseAminoMsg {
  type: "/elys.perpetual.MsgUpdateEnabledPoolsResponse";
  value: MsgUpdateEnabledPoolsResponseAmino;
}
export interface MsgUpdateEnabledPoolsResponseSDKType {}
function createBaseMsgOpen(): MsgOpen {
  return {
    creator: "",
    position: 0,
    leverage: "",
    tradingAsset: "",
    collateral: Coin.fromPartial({}),
    takeProfitPrice: "",
    stopLossPrice: "",
    poolId: BigInt(0)
  };
}
export const MsgOpen = {
  typeUrl: "/elys.perpetual.MsgOpen",
  encode(message: MsgOpen, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.position !== 0) {
      writer.uint32(16).int32(message.position);
    }
    if (message.leverage !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.leverage, 18).atomics);
    }
    if (message.tradingAsset !== "") {
      writer.uint32(34).string(message.tradingAsset);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(42).fork()).ldelim();
    }
    if (message.takeProfitPrice !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.takeProfitPrice, 18).atomics);
    }
    if (message.stopLossPrice !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.stopLossPrice, 18).atomics);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(64).uint64(message.poolId);
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
          message.position = reader.int32() as any;
          break;
        case 3:
          message.leverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.tradingAsset = reader.string();
          break;
        case 5:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.takeProfitPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.stopLossPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.poolId = reader.uint64();
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
    message.position = object.position ?? 0;
    message.leverage = object.leverage ?? "";
    message.tradingAsset = object.tradingAsset ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.takeProfitPrice = object.takeProfitPrice ?? "";
    message.stopLossPrice = object.stopLossPrice ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgOpenAmino): MsgOpen {
    const message = createBaseMsgOpen();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    }
    if (object.leverage !== undefined && object.leverage !== null) {
      message.leverage = object.leverage;
    }
    if (object.trading_asset !== undefined && object.trading_asset !== null) {
      message.tradingAsset = object.trading_asset;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromAmino(object.collateral);
    }
    if (object.take_profit_price !== undefined && object.take_profit_price !== null) {
      message.takeProfitPrice = object.take_profit_price;
    }
    if (object.stop_loss_price !== undefined && object.stop_loss_price !== null) {
      message.stopLossPrice = object.stop_loss_price;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgOpen): MsgOpenAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.position = message.position === 0 ? undefined : message.position;
    obj.leverage = message.leverage === "" ? undefined : message.leverage;
    obj.trading_asset = message.tradingAsset === "" ? undefined : message.tradingAsset;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.take_profit_price = message.takeProfitPrice === "" ? undefined : message.takeProfitPrice;
    obj.stop_loss_price = message.stopLossPrice === "" ? undefined : message.stopLossPrice;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgOpenAminoMsg): MsgOpen {
    return MsgOpen.fromAmino(object.value);
  },
  toAminoMsg(message: MsgOpen): MsgOpenAminoMsg {
    return {
      type: "perpetual/MsgOpen",
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
      typeUrl: "/elys.perpetual.MsgOpen",
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
  typeUrl: "/elys.perpetual.MsgOpenResponse",
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
    const message = createBaseMsgOpenResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgOpenResponse): MsgOpenResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
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
      typeUrl: "/elys.perpetual.MsgOpenResponse",
      value: MsgOpenResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClose(): MsgClose {
  return {
    creator: "",
    id: BigInt(0),
    amount: ""
  };
}
export const MsgClose = {
  typeUrl: "/elys.perpetual.MsgClose",
  encode(message: MsgClose, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
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
          message.amount = reader.string();
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
    message.amount = object.amount ?? "";
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
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgClose): MsgCloseAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgCloseAminoMsg): MsgClose {
    return MsgClose.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClose): MsgCloseAminoMsg {
    return {
      type: "perpetual/MsgClose",
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
      typeUrl: "/elys.perpetual.MsgClose",
      value: MsgClose.encode(message).finish()
    };
  }
};
function createBaseMsgCloseResponse(): MsgCloseResponse {
  return {
    id: BigInt(0),
    amount: ""
  };
}
export const MsgCloseResponse = {
  typeUrl: "/elys.perpetual.MsgCloseResponse",
  encode(message: MsgCloseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
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
        case 2:
          message.amount = reader.string();
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
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgCloseResponseAmino): MsgCloseResponse {
    const message = createBaseMsgCloseResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgCloseResponse): MsgCloseResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
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
      typeUrl: "/elys.perpetual.MsgCloseResponse",
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
  typeUrl: "/elys.perpetual.MsgUpdateParams",
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
      type: "perpetual/MsgUpdateParams",
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
      typeUrl: "/elys.perpetual.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/elys.perpetual.MsgUpdateParamsResponse",
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
      typeUrl: "/elys.perpetual.MsgUpdateParamsResponse",
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
  typeUrl: "/elys.perpetual.MsgWhitelist",
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
      type: "perpetual/MsgWhitelist",
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
      typeUrl: "/elys.perpetual.MsgWhitelist",
      value: MsgWhitelist.encode(message).finish()
    };
  }
};
function createBaseMsgWhitelistResponse(): MsgWhitelistResponse {
  return {};
}
export const MsgWhitelistResponse = {
  typeUrl: "/elys.perpetual.MsgWhitelistResponse",
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
      typeUrl: "/elys.perpetual.MsgWhitelistResponse",
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
  typeUrl: "/elys.perpetual.MsgDewhitelist",
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
      type: "perpetual/MsgDewhitelist",
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
      typeUrl: "/elys.perpetual.MsgDewhitelist",
      value: MsgDewhitelist.encode(message).finish()
    };
  }
};
function createBaseMsgDewhitelistResponse(): MsgDewhitelistResponse {
  return {};
}
export const MsgDewhitelistResponse = {
  typeUrl: "/elys.perpetual.MsgDewhitelistResponse",
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
      typeUrl: "/elys.perpetual.MsgDewhitelistResponse",
      value: MsgDewhitelistResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClosePositions(): MsgClosePositions {
  return {
    creator: "",
    liquidate: [],
    stopLoss: [],
    takeProfit: []
  };
}
export const MsgClosePositions = {
  typeUrl: "/elys.perpetual.MsgClosePositions",
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
    for (const v of message.takeProfit) {
      PositionRequest.encode(v!, writer.uint32(34).fork()).ldelim();
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
        case 4:
          message.takeProfit.push(PositionRequest.decode(reader, reader.uint32()));
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
    message.takeProfit = object.takeProfit?.map(e => PositionRequest.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClosePositionsAmino): MsgClosePositions {
    const message = createBaseMsgClosePositions();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.liquidate = object.liquidate?.map(e => PositionRequest.fromAmino(e)) || [];
    message.stopLoss = object.stop_loss?.map(e => PositionRequest.fromAmino(e)) || [];
    message.takeProfit = object.take_profit?.map(e => PositionRequest.fromAmino(e)) || [];
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
    if (message.takeProfit) {
      obj.take_profit = message.takeProfit.map(e => e ? PositionRequest.toAmino(e) : undefined);
    } else {
      obj.take_profit = message.takeProfit;
    }
    return obj;
  },
  fromAminoMsg(object: MsgClosePositionsAminoMsg): MsgClosePositions {
    return MsgClosePositions.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClosePositions): MsgClosePositionsAminoMsg {
    return {
      type: "perpetual/MsgClosePositions",
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
      typeUrl: "/elys.perpetual.MsgClosePositions",
      value: MsgClosePositions.encode(message).finish()
    };
  }
};
function createBaseMsgClosePositionsResponse(): MsgClosePositionsResponse {
  return {};
}
export const MsgClosePositionsResponse = {
  typeUrl: "/elys.perpetual.MsgClosePositionsResponse",
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
      typeUrl: "/elys.perpetual.MsgClosePositionsResponse",
      value: MsgClosePositionsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateStopLoss(): MsgUpdateStopLoss {
  return {
    creator: "",
    id: BigInt(0),
    price: ""
  };
}
export const MsgUpdateStopLoss = {
  typeUrl: "/elys.perpetual.MsgUpdateStopLoss",
  encode(message: MsgUpdateStopLoss, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
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
          message.id = reader.uint64();
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
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateStopLossAmino): MsgUpdateStopLoss {
    const message = createBaseMsgUpdateStopLoss();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: MsgUpdateStopLoss): MsgUpdateStopLossAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.price = message.price === "" ? undefined : message.price;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateStopLossAminoMsg): MsgUpdateStopLoss {
    return MsgUpdateStopLoss.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateStopLoss): MsgUpdateStopLossAminoMsg {
    return {
      type: "perpetual/MsgUpdateStopLoss",
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
      typeUrl: "/elys.perpetual.MsgUpdateStopLoss",
      value: MsgUpdateStopLoss.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateStopLossResponse(): MsgUpdateStopLossResponse {
  return {};
}
export const MsgUpdateStopLossResponse = {
  typeUrl: "/elys.perpetual.MsgUpdateStopLossResponse",
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
      typeUrl: "/elys.perpetual.MsgUpdateStopLossResponse",
      value: MsgUpdateStopLossResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTakeProfitPrice(): MsgUpdateTakeProfitPrice {
  return {
    creator: "",
    id: BigInt(0),
    price: ""
  };
}
export const MsgUpdateTakeProfitPrice = {
  typeUrl: "/elys.perpetual.MsgUpdateTakeProfitPrice",
  encode(message: MsgUpdateTakeProfitPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.price !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateTakeProfitPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTakeProfitPrice();
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
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateTakeProfitPrice>): MsgUpdateTakeProfitPrice {
    const message = createBaseMsgUpdateTakeProfitPrice();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateTakeProfitPriceAmino): MsgUpdateTakeProfitPrice {
    const message = createBaseMsgUpdateTakeProfitPrice();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: MsgUpdateTakeProfitPrice): MsgUpdateTakeProfitPriceAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.price = message.price === "" ? undefined : message.price;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTakeProfitPriceAminoMsg): MsgUpdateTakeProfitPrice {
    return MsgUpdateTakeProfitPrice.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateTakeProfitPrice): MsgUpdateTakeProfitPriceAminoMsg {
    return {
      type: "perpetual/MsgUpdateTakeProfitPrice",
      value: MsgUpdateTakeProfitPrice.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateTakeProfitPriceProtoMsg): MsgUpdateTakeProfitPrice {
    return MsgUpdateTakeProfitPrice.decode(message.value);
  },
  toProto(message: MsgUpdateTakeProfitPrice): Uint8Array {
    return MsgUpdateTakeProfitPrice.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTakeProfitPrice): MsgUpdateTakeProfitPriceProtoMsg {
    return {
      typeUrl: "/elys.perpetual.MsgUpdateTakeProfitPrice",
      value: MsgUpdateTakeProfitPrice.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTakeProfitPriceResponse(): MsgUpdateTakeProfitPriceResponse {
  return {};
}
export const MsgUpdateTakeProfitPriceResponse = {
  typeUrl: "/elys.perpetual.MsgUpdateTakeProfitPriceResponse",
  encode(_: MsgUpdateTakeProfitPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateTakeProfitPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTakeProfitPriceResponse();
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
  fromPartial(_: Partial<MsgUpdateTakeProfitPriceResponse>): MsgUpdateTakeProfitPriceResponse {
    const message = createBaseMsgUpdateTakeProfitPriceResponse();
    return message;
  },
  fromAmino(_: MsgUpdateTakeProfitPriceResponseAmino): MsgUpdateTakeProfitPriceResponse {
    const message = createBaseMsgUpdateTakeProfitPriceResponse();
    return message;
  },
  toAmino(_: MsgUpdateTakeProfitPriceResponse): MsgUpdateTakeProfitPriceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTakeProfitPriceResponseAminoMsg): MsgUpdateTakeProfitPriceResponse {
    return MsgUpdateTakeProfitPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateTakeProfitPriceResponseProtoMsg): MsgUpdateTakeProfitPriceResponse {
    return MsgUpdateTakeProfitPriceResponse.decode(message.value);
  },
  toProto(message: MsgUpdateTakeProfitPriceResponse): Uint8Array {
    return MsgUpdateTakeProfitPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTakeProfitPriceResponse): MsgUpdateTakeProfitPriceResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.MsgUpdateTakeProfitPriceResponse",
      value: MsgUpdateTakeProfitPriceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMaxLeverageForPool(): MsgUpdateMaxLeverageForPool {
  return {
    authority: "",
    poolId: BigInt(0),
    leverageMax: ""
  };
}
export const MsgUpdateMaxLeverageForPool = {
  typeUrl: "/elys.perpetual.MsgUpdateMaxLeverageForPool",
  encode(message: MsgUpdateMaxLeverageForPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.leverageMax !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.leverageMax, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMaxLeverageForPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMaxLeverageForPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
  fromPartial(object: Partial<MsgUpdateMaxLeverageForPool>): MsgUpdateMaxLeverageForPool {
    const message = createBaseMsgUpdateMaxLeverageForPool();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.leverageMax = object.leverageMax ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateMaxLeverageForPoolAmino): MsgUpdateMaxLeverageForPool {
    const message = createBaseMsgUpdateMaxLeverageForPool();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.leverage_max !== undefined && object.leverage_max !== null) {
      message.leverageMax = object.leverage_max;
    }
    return message;
  },
  toAmino(message: MsgUpdateMaxLeverageForPool): MsgUpdateMaxLeverageForPoolAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.leverage_max = message.leverageMax === "" ? undefined : message.leverageMax;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMaxLeverageForPoolAminoMsg): MsgUpdateMaxLeverageForPool {
    return MsgUpdateMaxLeverageForPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateMaxLeverageForPool): MsgUpdateMaxLeverageForPoolAminoMsg {
    return {
      type: "perpetual/MsgUpdateMaxLeverageForPool",
      value: MsgUpdateMaxLeverageForPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateMaxLeverageForPoolProtoMsg): MsgUpdateMaxLeverageForPool {
    return MsgUpdateMaxLeverageForPool.decode(message.value);
  },
  toProto(message: MsgUpdateMaxLeverageForPool): Uint8Array {
    return MsgUpdateMaxLeverageForPool.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMaxLeverageForPool): MsgUpdateMaxLeverageForPoolProtoMsg {
    return {
      typeUrl: "/elys.perpetual.MsgUpdateMaxLeverageForPool",
      value: MsgUpdateMaxLeverageForPool.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMaxLeverageForPoolResponse(): MsgUpdateMaxLeverageForPoolResponse {
  return {};
}
export const MsgUpdateMaxLeverageForPoolResponse = {
  typeUrl: "/elys.perpetual.MsgUpdateMaxLeverageForPoolResponse",
  encode(_: MsgUpdateMaxLeverageForPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMaxLeverageForPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMaxLeverageForPoolResponse();
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
  fromPartial(_: Partial<MsgUpdateMaxLeverageForPoolResponse>): MsgUpdateMaxLeverageForPoolResponse {
    const message = createBaseMsgUpdateMaxLeverageForPoolResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMaxLeverageForPoolResponseAmino): MsgUpdateMaxLeverageForPoolResponse {
    const message = createBaseMsgUpdateMaxLeverageForPoolResponse();
    return message;
  },
  toAmino(_: MsgUpdateMaxLeverageForPoolResponse): MsgUpdateMaxLeverageForPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMaxLeverageForPoolResponseAminoMsg): MsgUpdateMaxLeverageForPoolResponse {
    return MsgUpdateMaxLeverageForPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMaxLeverageForPoolResponseProtoMsg): MsgUpdateMaxLeverageForPoolResponse {
    return MsgUpdateMaxLeverageForPoolResponse.decode(message.value);
  },
  toProto(message: MsgUpdateMaxLeverageForPoolResponse): Uint8Array {
    return MsgUpdateMaxLeverageForPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMaxLeverageForPoolResponse): MsgUpdateMaxLeverageForPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.MsgUpdateMaxLeverageForPoolResponse",
      value: MsgUpdateMaxLeverageForPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateEnabledPools(): MsgUpdateEnabledPools {
  return {
    authority: "",
    enabledPools: []
  };
}
export const MsgUpdateEnabledPools = {
  typeUrl: "/elys.perpetual.MsgUpdateEnabledPools",
  encode(message: MsgUpdateEnabledPools, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    writer.uint32(18).fork();
    for (const v of message.enabledPools) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateEnabledPools {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEnabledPools();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enabledPools.push(reader.uint64());
            }
          } else {
            message.enabledPools.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateEnabledPools>): MsgUpdateEnabledPools {
    const message = createBaseMsgUpdateEnabledPools();
    message.authority = object.authority ?? "";
    message.enabledPools = object.enabledPools?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgUpdateEnabledPoolsAmino): MsgUpdateEnabledPools {
    const message = createBaseMsgUpdateEnabledPools();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.enabledPools = object.enabled_pools?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgUpdateEnabledPools): MsgUpdateEnabledPoolsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.enabledPools) {
      obj.enabled_pools = message.enabledPools.map(e => e.toString());
    } else {
      obj.enabled_pools = message.enabledPools;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateEnabledPoolsAminoMsg): MsgUpdateEnabledPools {
    return MsgUpdateEnabledPools.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateEnabledPools): MsgUpdateEnabledPoolsAminoMsg {
    return {
      type: "perpetual/MsgUpdateEnabledPools",
      value: MsgUpdateEnabledPools.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateEnabledPoolsProtoMsg): MsgUpdateEnabledPools {
    return MsgUpdateEnabledPools.decode(message.value);
  },
  toProto(message: MsgUpdateEnabledPools): Uint8Array {
    return MsgUpdateEnabledPools.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateEnabledPools): MsgUpdateEnabledPoolsProtoMsg {
    return {
      typeUrl: "/elys.perpetual.MsgUpdateEnabledPools",
      value: MsgUpdateEnabledPools.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateEnabledPoolsResponse(): MsgUpdateEnabledPoolsResponse {
  return {};
}
export const MsgUpdateEnabledPoolsResponse = {
  typeUrl: "/elys.perpetual.MsgUpdateEnabledPoolsResponse",
  encode(_: MsgUpdateEnabledPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateEnabledPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEnabledPoolsResponse();
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
  fromPartial(_: Partial<MsgUpdateEnabledPoolsResponse>): MsgUpdateEnabledPoolsResponse {
    const message = createBaseMsgUpdateEnabledPoolsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateEnabledPoolsResponseAmino): MsgUpdateEnabledPoolsResponse {
    const message = createBaseMsgUpdateEnabledPoolsResponse();
    return message;
  },
  toAmino(_: MsgUpdateEnabledPoolsResponse): MsgUpdateEnabledPoolsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateEnabledPoolsResponseAminoMsg): MsgUpdateEnabledPoolsResponse {
    return MsgUpdateEnabledPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateEnabledPoolsResponseProtoMsg): MsgUpdateEnabledPoolsResponse {
    return MsgUpdateEnabledPoolsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateEnabledPoolsResponse): Uint8Array {
    return MsgUpdateEnabledPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateEnabledPoolsResponse): MsgUpdateEnabledPoolsResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.MsgUpdateEnabledPoolsResponse",
      value: MsgUpdateEnabledPoolsResponse.encode(message).finish()
    };
  }
};