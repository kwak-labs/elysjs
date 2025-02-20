//@ts-nocheck
import { SpotOrderType, LegacyOrderPriceV1, LegacyOrderPriceV1Amino, LegacyOrderPriceV1SDKType, PerpetualPosition, LegacyTriggerPriceV1, LegacyTriggerPriceV1Amino, LegacyTriggerPriceV1SDKType } from "./order";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export enum Status {
  PENDING = 0,
  EXECUTED = 1,
  CANCELED = 2,
  ALL = 3,
  UNRECOGNIZED = -1,
}
export const StatusSDKType = Status;
export const StatusAmino = Status;
export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "PENDING":
      return Status.PENDING;
    case 1:
    case "EXECUTED":
      return Status.EXECUTED;
    case 2:
    case "CANCELED":
      return Status.CANCELED;
    case 3:
    case "ALL":
      return Status.ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}
export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.PENDING:
      return "PENDING";
    case Status.EXECUTED:
      return "EXECUTED";
    case Status.CANCELED:
      return "CANCELED";
    case Status.ALL:
      return "ALL";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Perpetual Order */
export enum PerpetualOrderType {
  LIMITOPEN = 0,
  LIMITCLOSE = 1,
  STOPLOSSPERP = 2,
  UNRECOGNIZED = -1,
}
export const PerpetualOrderTypeSDKType = PerpetualOrderType;
export const PerpetualOrderTypeAmino = PerpetualOrderType;
export function perpetualOrderTypeFromJSON(object: any): PerpetualOrderType {
  switch (object) {
    case 0:
    case "LIMITOPEN":
      return PerpetualOrderType.LIMITOPEN;
    case 1:
    case "LIMITCLOSE":
      return PerpetualOrderType.LIMITCLOSE;
    case 2:
    case "STOPLOSSPERP":
      return PerpetualOrderType.STOPLOSSPERP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PerpetualOrderType.UNRECOGNIZED;
  }
}
export function perpetualOrderTypeToJSON(object: PerpetualOrderType): string {
  switch (object) {
    case PerpetualOrderType.LIMITOPEN:
      return "LIMITOPEN";
    case PerpetualOrderType.LIMITCLOSE:
      return "LIMITCLOSE";
    case PerpetualOrderType.STOPLOSSPERP:
      return "STOPLOSSPERP";
    case PerpetualOrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Date {
  height: bigint;
  timestamp: bigint;
}
export interface DateProtoMsg {
  typeUrl: "/elys.tradeshield.Date";
  value: Uint8Array;
}
export interface DateAmino {
  height?: string;
  timestamp?: string;
}
export interface DateAminoMsg {
  type: "/elys.tradeshield.Date";
  value: DateAmino;
}
export interface DateSDKType {
  height: bigint;
  timestamp: bigint;
}
export interface SpotOrder {
  orderType: SpotOrderType;
  orderId: bigint;
  legacyOrderPriceV1: LegacyOrderPriceV1;
  orderPrice: string;
  orderAmount: Coin;
  ownerAddress: string;
  orderTargetDenom: string;
  status: Status;
  date?: Date;
}
export interface SpotOrderProtoMsg {
  typeUrl: "/elys.tradeshield.SpotOrder";
  value: Uint8Array;
}
export interface SpotOrderAmino {
  order_type?: SpotOrderType;
  order_id?: string;
  legacy_order_price_v1?: LegacyOrderPriceV1Amino;
  order_price?: string;
  order_amount?: CoinAmino;
  owner_address?: string;
  order_target_denom?: string;
  status?: Status;
  date?: DateAmino;
}
export interface SpotOrderAminoMsg {
  type: "/elys.tradeshield.SpotOrder";
  value: SpotOrderAmino;
}
export interface SpotOrderSDKType {
  order_type: SpotOrderType;
  order_id: bigint;
  legacy_order_price_v1: LegacyOrderPriceV1SDKType;
  order_price: string;
  order_amount: CoinSDKType;
  owner_address: string;
  order_target_denom: string;
  status: Status;
  date?: DateSDKType;
}
export interface PerpetualOrder {
  orderId: bigint;
  ownerAddress: string;
  perpetualOrderType: PerpetualOrderType;
  position: PerpetualPosition;
  legacyTriggerPriceV1: LegacyTriggerPriceV1;
  triggerPrice: string;
  collateral: Coin;
  tradingAsset: string;
  leverage: string;
  takeProfitPrice: string;
  positionId: bigint;
  status: Status;
  stopLossPrice: string;
  poolId: bigint;
}
export interface PerpetualOrderProtoMsg {
  typeUrl: "/elys.tradeshield.PerpetualOrder";
  value: Uint8Array;
}
export interface PerpetualOrderAmino {
  order_id?: string;
  owner_address?: string;
  perpetual_order_type?: PerpetualOrderType;
  position?: PerpetualPosition;
  legacy_trigger_price_v1?: LegacyTriggerPriceV1Amino;
  trigger_price?: string;
  collateral?: CoinAmino;
  trading_asset?: string;
  leverage?: string;
  take_profit_price?: string;
  position_id?: string;
  status?: Status;
  stop_loss_price?: string;
  poolId?: string;
}
export interface PerpetualOrderAminoMsg {
  type: "/elys.tradeshield.PerpetualOrder";
  value: PerpetualOrderAmino;
}
export interface PerpetualOrderSDKType {
  order_id: bigint;
  owner_address: string;
  perpetual_order_type: PerpetualOrderType;
  position: PerpetualPosition;
  legacy_trigger_price_v1: LegacyTriggerPriceV1SDKType;
  trigger_price: string;
  collateral: CoinSDKType;
  trading_asset: string;
  leverage: string;
  take_profit_price: string;
  position_id: bigint;
  status: Status;
  stop_loss_price: string;
  poolId: bigint;
}
export interface PerpetualOrderExtraInfo {
  perpetualOrder?: PerpetualOrder;
  positionSize: Coin;
  liquidationPrice: string;
  fundingRate: string;
  borrowInterestRate: string;
}
export interface PerpetualOrderExtraInfoProtoMsg {
  typeUrl: "/elys.tradeshield.PerpetualOrderExtraInfo";
  value: Uint8Array;
}
export interface PerpetualOrderExtraInfoAmino {
  perpetual_order?: PerpetualOrderAmino;
  position_size?: CoinAmino;
  liquidation_price?: string;
  funding_rate?: string;
  borrow_interest_rate?: string;
}
export interface PerpetualOrderExtraInfoAminoMsg {
  type: "/elys.tradeshield.PerpetualOrderExtraInfo";
  value: PerpetualOrderExtraInfoAmino;
}
export interface PerpetualOrderExtraInfoSDKType {
  perpetual_order?: PerpetualOrderSDKType;
  position_size: CoinSDKType;
  liquidation_price: string;
  funding_rate: string;
  borrow_interest_rate: string;
}
function createBaseDate(): Date {
  return {
    height: BigInt(0),
    timestamp: BigInt(0)
  };
}
export const Date = {
  typeUrl: "/elys.tradeshield.Date",
  encode(message: Date, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Date {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Date>): Date {
    const message = createBaseDate();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DateAmino): Date {
    const message = createBaseDate();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: Date): DateAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DateAminoMsg): Date {
    return Date.fromAmino(object.value);
  },
  fromProtoMsg(message: DateProtoMsg): Date {
    return Date.decode(message.value);
  },
  toProto(message: Date): Uint8Array {
    return Date.encode(message).finish();
  },
  toProtoMsg(message: Date): DateProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.Date",
      value: Date.encode(message).finish()
    };
  }
};
function createBaseSpotOrder(): SpotOrder {
  return {
    orderType: 0,
    orderId: BigInt(0),
    legacyOrderPriceV1: LegacyOrderPriceV1.fromPartial({}),
    orderPrice: "",
    orderAmount: Coin.fromPartial({}),
    ownerAddress: "",
    orderTargetDenom: "",
    status: 0,
    date: undefined
  };
}
export const SpotOrder = {
  typeUrl: "/elys.tradeshield.SpotOrder",
  encode(message: SpotOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderType !== 0) {
      writer.uint32(8).int32(message.orderType);
    }
    if (message.orderId !== BigInt(0)) {
      writer.uint32(16).uint64(message.orderId);
    }
    if (message.legacyOrderPriceV1 !== undefined) {
      LegacyOrderPriceV1.encode(message.legacyOrderPriceV1, writer.uint32(26).fork()).ldelim();
    }
    if (message.orderPrice !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.orderPrice, 18).atomics);
    }
    if (message.orderAmount !== undefined) {
      Coin.encode(message.orderAmount, writer.uint32(34).fork()).ldelim();
    }
    if (message.ownerAddress !== "") {
      writer.uint32(42).string(message.ownerAddress);
    }
    if (message.orderTargetDenom !== "") {
      writer.uint32(50).string(message.orderTargetDenom);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.date !== undefined) {
      Date.encode(message.date, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderType = reader.int32() as any;
          break;
        case 2:
          message.orderId = reader.uint64();
          break;
        case 3:
          message.legacyOrderPriceV1 = LegacyOrderPriceV1.decode(reader, reader.uint32());
          break;
        case 9:
          message.orderPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.orderAmount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.ownerAddress = reader.string();
          break;
        case 6:
          message.orderTargetDenom = reader.string();
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.date = Date.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SpotOrder>): SpotOrder {
    const message = createBaseSpotOrder();
    message.orderType = object.orderType ?? 0;
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.legacyOrderPriceV1 = object.legacyOrderPriceV1 !== undefined && object.legacyOrderPriceV1 !== null ? LegacyOrderPriceV1.fromPartial(object.legacyOrderPriceV1) : undefined;
    message.orderPrice = object.orderPrice ?? "";
    message.orderAmount = object.orderAmount !== undefined && object.orderAmount !== null ? Coin.fromPartial(object.orderAmount) : undefined;
    message.ownerAddress = object.ownerAddress ?? "";
    message.orderTargetDenom = object.orderTargetDenom ?? "";
    message.status = object.status ?? 0;
    message.date = object.date !== undefined && object.date !== null ? Date.fromPartial(object.date) : undefined;
    return message;
  },
  fromAmino(object: SpotOrderAmino): SpotOrder {
    const message = createBaseSpotOrder();
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    if (object.legacy_order_price_v1 !== undefined && object.legacy_order_price_v1 !== null) {
      message.legacyOrderPriceV1 = LegacyOrderPriceV1.fromAmino(object.legacy_order_price_v1);
    }
    if (object.order_price !== undefined && object.order_price !== null) {
      message.orderPrice = object.order_price;
    }
    if (object.order_amount !== undefined && object.order_amount !== null) {
      message.orderAmount = Coin.fromAmino(object.order_amount);
    }
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.order_target_denom !== undefined && object.order_target_denom !== null) {
      message.orderTargetDenom = object.order_target_denom;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = Date.fromAmino(object.date);
    }
    return message;
  },
  toAmino(message: SpotOrder): SpotOrderAmino {
    const obj: any = {};
    obj.order_type = message.orderType === 0 ? undefined : message.orderType;
    obj.order_id = message.orderId !== BigInt(0) ? message.orderId?.toString() : undefined;
    obj.legacy_order_price_v1 = message.legacyOrderPriceV1 ? LegacyOrderPriceV1.toAmino(message.legacyOrderPriceV1) : undefined;
    obj.order_price = message.orderPrice === "" ? undefined : message.orderPrice;
    obj.order_amount = message.orderAmount ? Coin.toAmino(message.orderAmount) : undefined;
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    obj.order_target_denom = message.orderTargetDenom === "" ? undefined : message.orderTargetDenom;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.date = message.date ? Date.toAmino(message.date) : undefined;
    return obj;
  },
  fromAminoMsg(object: SpotOrderAminoMsg): SpotOrder {
    return SpotOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotOrderProtoMsg): SpotOrder {
    return SpotOrder.decode(message.value);
  },
  toProto(message: SpotOrder): Uint8Array {
    return SpotOrder.encode(message).finish();
  },
  toProtoMsg(message: SpotOrder): SpotOrderProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.SpotOrder",
      value: SpotOrder.encode(message).finish()
    };
  }
};
function createBasePerpetualOrder(): PerpetualOrder {
  return {
    orderId: BigInt(0),
    ownerAddress: "",
    perpetualOrderType: 0,
    position: 0,
    legacyTriggerPriceV1: LegacyTriggerPriceV1.fromPartial({}),
    triggerPrice: "",
    collateral: Coin.fromPartial({}),
    tradingAsset: "",
    leverage: "",
    takeProfitPrice: "",
    positionId: BigInt(0),
    status: 0,
    stopLossPrice: "",
    poolId: BigInt(0)
  };
}
export const PerpetualOrder = {
  typeUrl: "/elys.tradeshield.PerpetualOrder",
  encode(message: PerpetualOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
    }
    if (message.perpetualOrderType !== 0) {
      writer.uint32(24).int32(message.perpetualOrderType);
    }
    if (message.position !== 0) {
      writer.uint32(32).int32(message.position);
    }
    if (message.legacyTriggerPriceV1 !== undefined) {
      LegacyTriggerPriceV1.encode(message.legacyTriggerPriceV1, writer.uint32(42).fork()).ldelim();
    }
    if (message.triggerPrice !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(50).fork()).ldelim();
    }
    if (message.tradingAsset !== "") {
      writer.uint32(58).string(message.tradingAsset);
    }
    if (message.leverage !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.leverage, 18).atomics);
    }
    if (message.takeProfitPrice !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.takeProfitPrice, 18).atomics);
    }
    if (message.positionId !== BigInt(0)) {
      writer.uint32(80).uint64(message.positionId);
    }
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    if (message.stopLossPrice !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.stopLossPrice, 18).atomics);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(104).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PerpetualOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpetualOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        case 2:
          message.ownerAddress = reader.string();
          break;
        case 3:
          message.perpetualOrderType = reader.int32() as any;
          break;
        case 4:
          message.position = reader.int32() as any;
          break;
        case 5:
          message.legacyTriggerPriceV1 = LegacyTriggerPriceV1.decode(reader, reader.uint32());
          break;
        case 14:
          message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.tradingAsset = reader.string();
          break;
        case 8:
          message.leverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.takeProfitPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.positionId = reader.uint64();
          break;
        case 11:
          message.status = reader.int32() as any;
          break;
        case 12:
          message.stopLossPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PerpetualOrder>): PerpetualOrder {
    const message = createBasePerpetualOrder();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.ownerAddress = object.ownerAddress ?? "";
    message.perpetualOrderType = object.perpetualOrderType ?? 0;
    message.position = object.position ?? 0;
    message.legacyTriggerPriceV1 = object.legacyTriggerPriceV1 !== undefined && object.legacyTriggerPriceV1 !== null ? LegacyTriggerPriceV1.fromPartial(object.legacyTriggerPriceV1) : undefined;
    message.triggerPrice = object.triggerPrice ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.tradingAsset = object.tradingAsset ?? "";
    message.leverage = object.leverage ?? "";
    message.takeProfitPrice = object.takeProfitPrice ?? "";
    message.positionId = object.positionId !== undefined && object.positionId !== null ? BigInt(object.positionId.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.stopLossPrice = object.stopLossPrice ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PerpetualOrderAmino): PerpetualOrder {
    const message = createBasePerpetualOrder();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.perpetual_order_type !== undefined && object.perpetual_order_type !== null) {
      message.perpetualOrderType = object.perpetual_order_type;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    }
    if (object.legacy_trigger_price_v1 !== undefined && object.legacy_trigger_price_v1 !== null) {
      message.legacyTriggerPriceV1 = LegacyTriggerPriceV1.fromAmino(object.legacy_trigger_price_v1);
    }
    if (object.trigger_price !== undefined && object.trigger_price !== null) {
      message.triggerPrice = object.trigger_price;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromAmino(object.collateral);
    }
    if (object.trading_asset !== undefined && object.trading_asset !== null) {
      message.tradingAsset = object.trading_asset;
    }
    if (object.leverage !== undefined && object.leverage !== null) {
      message.leverage = object.leverage;
    }
    if (object.take_profit_price !== undefined && object.take_profit_price !== null) {
      message.takeProfitPrice = object.take_profit_price;
    }
    if (object.position_id !== undefined && object.position_id !== null) {
      message.positionId = BigInt(object.position_id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.stop_loss_price !== undefined && object.stop_loss_price !== null) {
      message.stopLossPrice = object.stop_loss_price;
    }
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId);
    }
    return message;
  },
  toAmino(message: PerpetualOrder): PerpetualOrderAmino {
    const obj: any = {};
    obj.order_id = message.orderId !== BigInt(0) ? message.orderId?.toString() : undefined;
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    obj.perpetual_order_type = message.perpetualOrderType === 0 ? undefined : message.perpetualOrderType;
    obj.position = message.position === 0 ? undefined : message.position;
    obj.legacy_trigger_price_v1 = message.legacyTriggerPriceV1 ? LegacyTriggerPriceV1.toAmino(message.legacyTriggerPriceV1) : undefined;
    obj.trigger_price = message.triggerPrice === "" ? undefined : message.triggerPrice;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.trading_asset = message.tradingAsset === "" ? undefined : message.tradingAsset;
    obj.leverage = message.leverage === "" ? undefined : message.leverage;
    obj.take_profit_price = message.takeProfitPrice === "" ? undefined : message.takeProfitPrice;
    obj.position_id = message.positionId !== BigInt(0) ? message.positionId?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.stop_loss_price = message.stopLossPrice === "" ? undefined : message.stopLossPrice;
    obj.poolId = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PerpetualOrderAminoMsg): PerpetualOrder {
    return PerpetualOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualOrderProtoMsg): PerpetualOrder {
    return PerpetualOrder.decode(message.value);
  },
  toProto(message: PerpetualOrder): Uint8Array {
    return PerpetualOrder.encode(message).finish();
  },
  toProtoMsg(message: PerpetualOrder): PerpetualOrderProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.PerpetualOrder",
      value: PerpetualOrder.encode(message).finish()
    };
  }
};
function createBasePerpetualOrderExtraInfo(): PerpetualOrderExtraInfo {
  return {
    perpetualOrder: undefined,
    positionSize: Coin.fromPartial({}),
    liquidationPrice: "",
    fundingRate: "",
    borrowInterestRate: ""
  };
}
export const PerpetualOrderExtraInfo = {
  typeUrl: "/elys.tradeshield.PerpetualOrderExtraInfo",
  encode(message: PerpetualOrderExtraInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.perpetualOrder !== undefined) {
      PerpetualOrder.encode(message.perpetualOrder, writer.uint32(10).fork()).ldelim();
    }
    if (message.positionSize !== undefined) {
      Coin.encode(message.positionSize, writer.uint32(18).fork()).ldelim();
    }
    if (message.liquidationPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.liquidationPrice, 18).atomics);
    }
    if (message.fundingRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.fundingRate, 18).atomics);
    }
    if (message.borrowInterestRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.borrowInterestRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PerpetualOrderExtraInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpetualOrderExtraInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualOrder = PerpetualOrder.decode(reader, reader.uint32());
          break;
        case 2:
          message.positionSize = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.liquidationPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.fundingRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.borrowInterestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PerpetualOrderExtraInfo>): PerpetualOrderExtraInfo {
    const message = createBasePerpetualOrderExtraInfo();
    message.perpetualOrder = object.perpetualOrder !== undefined && object.perpetualOrder !== null ? PerpetualOrder.fromPartial(object.perpetualOrder) : undefined;
    message.positionSize = object.positionSize !== undefined && object.positionSize !== null ? Coin.fromPartial(object.positionSize) : undefined;
    message.liquidationPrice = object.liquidationPrice ?? "";
    message.fundingRate = object.fundingRate ?? "";
    message.borrowInterestRate = object.borrowInterestRate ?? "";
    return message;
  },
  fromAmino(object: PerpetualOrderExtraInfoAmino): PerpetualOrderExtraInfo {
    const message = createBasePerpetualOrderExtraInfo();
    if (object.perpetual_order !== undefined && object.perpetual_order !== null) {
      message.perpetualOrder = PerpetualOrder.fromAmino(object.perpetual_order);
    }
    if (object.position_size !== undefined && object.position_size !== null) {
      message.positionSize = Coin.fromAmino(object.position_size);
    }
    if (object.liquidation_price !== undefined && object.liquidation_price !== null) {
      message.liquidationPrice = object.liquidation_price;
    }
    if (object.funding_rate !== undefined && object.funding_rate !== null) {
      message.fundingRate = object.funding_rate;
    }
    if (object.borrow_interest_rate !== undefined && object.borrow_interest_rate !== null) {
      message.borrowInterestRate = object.borrow_interest_rate;
    }
    return message;
  },
  toAmino(message: PerpetualOrderExtraInfo): PerpetualOrderExtraInfoAmino {
    const obj: any = {};
    obj.perpetual_order = message.perpetualOrder ? PerpetualOrder.toAmino(message.perpetualOrder) : undefined;
    obj.position_size = message.positionSize ? Coin.toAmino(message.positionSize) : undefined;
    obj.liquidation_price = message.liquidationPrice === "" ? undefined : message.liquidationPrice;
    obj.funding_rate = message.fundingRate === "" ? undefined : message.fundingRate;
    obj.borrow_interest_rate = message.borrowInterestRate === "" ? undefined : message.borrowInterestRate;
    return obj;
  },
  fromAminoMsg(object: PerpetualOrderExtraInfoAminoMsg): PerpetualOrderExtraInfo {
    return PerpetualOrderExtraInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualOrderExtraInfoProtoMsg): PerpetualOrderExtraInfo {
    return PerpetualOrderExtraInfo.decode(message.value);
  },
  toProto(message: PerpetualOrderExtraInfo): Uint8Array {
    return PerpetualOrderExtraInfo.encode(message).finish();
  },
  toProtoMsg(message: PerpetualOrderExtraInfo): PerpetualOrderExtraInfoProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.PerpetualOrderExtraInfo",
      value: PerpetualOrderExtraInfo.encode(message).finish()
    };
  }
};