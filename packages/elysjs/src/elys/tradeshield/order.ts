//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** Spot order */
export enum SpotOrderType {
  STOPLOSS = 0,
  LIMITSELL = 1,
  LIMITBUY = 2,
  MARKETBUY = 3,
  UNRECOGNIZED = -1,
}
export const SpotOrderTypeSDKType = SpotOrderType;
export const SpotOrderTypeAmino = SpotOrderType;
export function spotOrderTypeFromJSON(object: any): SpotOrderType {
  switch (object) {
    case 0:
    case "STOPLOSS":
      return SpotOrderType.STOPLOSS;
    case 1:
    case "LIMITSELL":
      return SpotOrderType.LIMITSELL;
    case 2:
    case "LIMITBUY":
      return SpotOrderType.LIMITBUY;
    case 3:
    case "MARKETBUY":
      return SpotOrderType.MARKETBUY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SpotOrderType.UNRECOGNIZED;
  }
}
export function spotOrderTypeToJSON(object: SpotOrderType): string {
  switch (object) {
    case SpotOrderType.STOPLOSS:
      return "STOPLOSS";
    case SpotOrderType.LIMITSELL:
      return "LIMITSELL";
    case SpotOrderType.LIMITBUY:
      return "LIMITBUY";
    case SpotOrderType.MARKETBUY:
      return "MARKETBUY";
    case SpotOrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum PerpetualPosition {
  UNSPECIFIED = 0,
  LONG = 1,
  SHORT = 2,
  UNRECOGNIZED = -1,
}
export const PerpetualPositionSDKType = PerpetualPosition;
export const PerpetualPositionAmino = PerpetualPosition;
export function perpetualPositionFromJSON(object: any): PerpetualPosition {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return PerpetualPosition.UNSPECIFIED;
    case 1:
    case "LONG":
      return PerpetualPosition.LONG;
    case 2:
    case "SHORT":
      return PerpetualPosition.SHORT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PerpetualPosition.UNRECOGNIZED;
  }
}
export function perpetualPositionToJSON(object: PerpetualPosition): string {
  switch (object) {
    case PerpetualPosition.UNSPECIFIED:
      return "UNSPECIFIED";
    case PerpetualPosition.LONG:
      return "LONG";
    case PerpetualPosition.SHORT:
      return "SHORT";
    case PerpetualPosition.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface OrderPrice {
  baseDenom: string;
  quoteDenom: string;
  rate: string;
}
export interface OrderPriceProtoMsg {
  typeUrl: "/elys.tradeshield.OrderPrice";
  value: Uint8Array;
}
export interface OrderPriceAmino {
  base_denom?: string;
  quote_denom?: string;
  rate?: string;
}
export interface OrderPriceAminoMsg {
  type: "/elys.tradeshield.OrderPrice";
  value: OrderPriceAmino;
}
export interface OrderPriceSDKType {
  base_denom: string;
  quote_denom: string;
  rate: string;
}
export interface TriggerPrice {
  tradingAssetDenom: string;
  rate: string;
}
export interface TriggerPriceProtoMsg {
  typeUrl: "/elys.tradeshield.TriggerPrice";
  value: Uint8Array;
}
export interface TriggerPriceAmino {
  trading_asset_denom?: string;
  rate?: string;
}
export interface TriggerPriceAminoMsg {
  type: "/elys.tradeshield.TriggerPrice";
  value: TriggerPriceAmino;
}
export interface TriggerPriceSDKType {
  trading_asset_denom: string;
  rate: string;
}
function createBaseOrderPrice(): OrderPrice {
  return {
    baseDenom: "",
    quoteDenom: "",
    rate: ""
  };
}
export const OrderPrice = {
  typeUrl: "/elys.tradeshield.OrderPrice",
  encode(message: OrderPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(18).string(message.quoteDenom);
    }
    if (message.rate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OrderPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.quoteDenom = reader.string();
          break;
        case 3:
          message.rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OrderPrice>): OrderPrice {
    const message = createBaseOrderPrice();
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.rate = object.rate ?? "";
    return message;
  },
  fromAmino(object: OrderPriceAmino): OrderPrice {
    const message = createBaseOrderPrice();
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    }
    return message;
  },
  toAmino(message: OrderPrice): OrderPriceAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    obj.rate = message.rate === "" ? undefined : message.rate;
    return obj;
  },
  fromAminoMsg(object: OrderPriceAminoMsg): OrderPrice {
    return OrderPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderPriceProtoMsg): OrderPrice {
    return OrderPrice.decode(message.value);
  },
  toProto(message: OrderPrice): Uint8Array {
    return OrderPrice.encode(message).finish();
  },
  toProtoMsg(message: OrderPrice): OrderPriceProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.OrderPrice",
      value: OrderPrice.encode(message).finish()
    };
  }
};
function createBaseTriggerPrice(): TriggerPrice {
  return {
    tradingAssetDenom: "",
    rate: ""
  };
}
export const TriggerPrice = {
  typeUrl: "/elys.tradeshield.TriggerPrice",
  encode(message: TriggerPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradingAssetDenom !== "") {
      writer.uint32(10).string(message.tradingAssetDenom);
    }
    if (message.rate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TriggerPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradingAssetDenom = reader.string();
          break;
        case 3:
          message.rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TriggerPrice>): TriggerPrice {
    const message = createBaseTriggerPrice();
    message.tradingAssetDenom = object.tradingAssetDenom ?? "";
    message.rate = object.rate ?? "";
    return message;
  },
  fromAmino(object: TriggerPriceAmino): TriggerPrice {
    const message = createBaseTriggerPrice();
    if (object.trading_asset_denom !== undefined && object.trading_asset_denom !== null) {
      message.tradingAssetDenom = object.trading_asset_denom;
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    }
    return message;
  },
  toAmino(message: TriggerPrice): TriggerPriceAmino {
    const obj: any = {};
    obj.trading_asset_denom = message.tradingAssetDenom === "" ? undefined : message.tradingAssetDenom;
    obj.rate = message.rate === "" ? undefined : message.rate;
    return obj;
  },
  fromAminoMsg(object: TriggerPriceAminoMsg): TriggerPrice {
    return TriggerPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: TriggerPriceProtoMsg): TriggerPrice {
    return TriggerPrice.decode(message.value);
  },
  toProto(message: TriggerPrice): Uint8Array {
    return TriggerPrice.encode(message).finish();
  },
  toProtoMsg(message: TriggerPrice): TriggerPriceProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.TriggerPrice",
      value: TriggerPrice.encode(message).finish()
    };
  }
};