import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface Price {
  asset: string;
  price: string;
  source: string;
  provider: string;
  timestamp: bigint;
}
export interface PriceProtoMsg {
  typeUrl: "/elys.oracle.Price";
  value: Uint8Array;
}
export interface PriceAmino {
  asset: string;
  price: string;
  source: string;
  provider: string;
  timestamp: string;
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
}
function createBasePrice(): Price {
  return {
    asset: "",
    price: "",
    source: "",
    provider: "",
    timestamp: BigInt(0)
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
    return message;
  },
  fromAmino(object: PriceAmino): Price {
    return {
      asset: object.asset,
      price: object.price,
      source: object.source,
      provider: object.provider,
      timestamp: BigInt(object.timestamp)
    };
  },
  toAmino(message: Price): PriceAmino {
    const obj: any = {};
    obj.asset = message.asset;
    obj.price = message.price;
    obj.source = message.source;
    obj.provider = message.provider;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
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