//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface Price {
  asset: string;
  price: string;
  source: string;
  provider: string;
  timestamp: bigint;
  blockHeight: bigint;
}
export interface PriceProtoMsg {
  typeUrl: "/elys.oracle.Price";
  value: Uint8Array;
}
export interface PriceAmino {
  asset?: string;
  price?: string;
  source?: string;
  provider?: string;
  timestamp?: string;
  block_height?: string;
}
export interface PriceAminoMsg {
  type: "/elys.oracle.Price";
  value: PriceAmino;
}
export interface PriceSDKType {
  asset: string;
  price: string;
  source: string;
  provider: string;
  timestamp: bigint;
  block_height: bigint;
}
export interface LegacyPrice {
  asset: string;
  price: string;
  source: string;
  provider: string;
  timestamp: bigint;
}
export interface LegacyPriceProtoMsg {
  typeUrl: "/elys.oracle.LegacyPrice";
  value: Uint8Array;
}
export interface LegacyPriceAmino {
  asset?: string;
  price?: string;
  source?: string;
  provider?: string;
  timestamp?: string;
}
export interface LegacyPriceAminoMsg {
  type: "/elys.oracle.LegacyPrice";
  value: LegacyPriceAmino;
}
export interface LegacyPriceSDKType {
  asset: string;
  price: string;
  source: string;
  provider: string;
  timestamp: bigint;
}
function createBasePrice(): Price {
  return {
    asset: "",
    price: "",
    source: "",
    provider: "",
    timestamp: BigInt(0),
    blockHeight: BigInt(0)
  };
}
export const Price = {
  typeUrl: "/elys.oracle.Price",
  encode(message: Price, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.provider !== "") {
      writer.uint32(34).string(message.provider);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(40).uint64(message.timestamp);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(48).uint64(message.blockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Price {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.source = reader.string();
          break;
        case 4:
          message.provider = reader.string();
          break;
        case 5:
          message.timestamp = reader.uint64();
          break;
        case 6:
          message.blockHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Price>): Price {
    const message = createBasePrice();
    message.asset = object.asset ?? "";
    message.price = object.price ?? "";
    message.source = object.source ?? "";
    message.provider = object.provider ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PriceAmino): Price {
    const message = createBasePrice();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    return message;
  },
  toAmino(message: Price): PriceAmino {
    const obj: any = {};
    obj.asset = message.asset === "" ? undefined : message.asset;
    obj.price = message.price === "" ? undefined : message.price;
    obj.source = message.source === "" ? undefined : message.source;
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp?.toString() : undefined;
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PriceAminoMsg): Price {
    return Price.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceProtoMsg): Price {
    return Price.decode(message.value);
  },
  toProto(message: Price): Uint8Array {
    return Price.encode(message).finish();
  },
  toProtoMsg(message: Price): PriceProtoMsg {
    return {
      typeUrl: "/elys.oracle.Price",
      value: Price.encode(message).finish()
    };
  }
};
function createBaseLegacyPrice(): LegacyPrice {
  return {
    asset: "",
    price: "",
    source: "",
    provider: "",
    timestamp: BigInt(0)
  };
}
export const LegacyPrice = {
  typeUrl: "/elys.oracle.LegacyPrice",
  encode(message: LegacyPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.provider !== "") {
      writer.uint32(34).string(message.provider);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(40).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.source = reader.string();
          break;
        case 4:
          message.provider = reader.string();
          break;
        case 5:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LegacyPrice>): LegacyPrice {
    const message = createBaseLegacyPrice();
    message.asset = object.asset ?? "";
    message.price = object.price ?? "";
    message.source = object.source ?? "";
    message.provider = object.provider ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LegacyPriceAmino): LegacyPrice {
    const message = createBaseLegacyPrice();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: LegacyPrice): LegacyPriceAmino {
    const obj: any = {};
    obj.asset = message.asset === "" ? undefined : message.asset;
    obj.price = message.price === "" ? undefined : message.price;
    obj.source = message.source === "" ? undefined : message.source;
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LegacyPriceAminoMsg): LegacyPrice {
    return LegacyPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyPriceProtoMsg): LegacyPrice {
    return LegacyPrice.decode(message.value);
  },
  toProto(message: LegacyPrice): Uint8Array {
    return LegacyPrice.encode(message).finish();
  },
  toProtoMsg(message: LegacyPrice): LegacyPriceProtoMsg {
    return {
      typeUrl: "/elys.oracle.LegacyPrice",
      value: LegacyPrice.encode(message).finish()
    };
  }
};