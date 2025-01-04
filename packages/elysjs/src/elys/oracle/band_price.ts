//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface BandPriceCallData {
  symbols: string[];
  multiplier: bigint;
}
export interface BandPriceCallDataProtoMsg {
  typeUrl: "/elys.oracle.BandPriceCallData";
  value: Uint8Array;
}
export interface BandPriceCallDataAmino {
  symbols?: string[];
  multiplier?: string;
}
export interface BandPriceCallDataAminoMsg {
  type: "/elys.oracle.BandPriceCallData";
  value: BandPriceCallDataAmino;
}
export interface BandPriceCallDataSDKType {
  symbols: string[];
  multiplier: bigint;
}
export interface BandPriceResult {
  rates: bigint[];
}
export interface BandPriceResultProtoMsg {
  typeUrl: "/elys.oracle.BandPriceResult";
  value: Uint8Array;
}
export interface BandPriceResultAmino {
  rates?: string[];
}
export interface BandPriceResultAminoMsg {
  type: "/elys.oracle.BandPriceResult";
  value: BandPriceResultAmino;
}
export interface BandPriceResultSDKType {
  rates: bigint[];
}
function createBaseBandPriceCallData(): BandPriceCallData {
  return {
    symbols: [],
    multiplier: BigInt(0)
  };
}
export const BandPriceCallData = {
  typeUrl: "/elys.oracle.BandPriceCallData",
  encode(message: BandPriceCallData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.symbols) {
      writer.uint32(10).string(v!);
    }
    if (message.multiplier !== BigInt(0)) {
      writer.uint32(16).uint64(message.multiplier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BandPriceCallData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBandPriceCallData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbols.push(reader.string());
          break;
        case 2:
          message.multiplier = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BandPriceCallData>): BandPriceCallData {
    const message = createBaseBandPriceCallData();
    message.symbols = object.symbols?.map(e => e) || [];
    message.multiplier = object.multiplier !== undefined && object.multiplier !== null ? BigInt(object.multiplier.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BandPriceCallDataAmino): BandPriceCallData {
    const message = createBaseBandPriceCallData();
    message.symbols = object.symbols?.map(e => e) || [];
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = BigInt(object.multiplier);
    }
    return message;
  },
  toAmino(message: BandPriceCallData): BandPriceCallDataAmino {
    const obj: any = {};
    if (message.symbols) {
      obj.symbols = message.symbols.map(e => e);
    } else {
      obj.symbols = message.symbols;
    }
    obj.multiplier = message.multiplier !== BigInt(0) ? message.multiplier?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BandPriceCallDataAminoMsg): BandPriceCallData {
    return BandPriceCallData.fromAmino(object.value);
  },
  fromProtoMsg(message: BandPriceCallDataProtoMsg): BandPriceCallData {
    return BandPriceCallData.decode(message.value);
  },
  toProto(message: BandPriceCallData): Uint8Array {
    return BandPriceCallData.encode(message).finish();
  },
  toProtoMsg(message: BandPriceCallData): BandPriceCallDataProtoMsg {
    return {
      typeUrl: "/elys.oracle.BandPriceCallData",
      value: BandPriceCallData.encode(message).finish()
    };
  }
};
function createBaseBandPriceResult(): BandPriceResult {
  return {
    rates: []
  };
}
export const BandPriceResult = {
  typeUrl: "/elys.oracle.BandPriceResult",
  encode(message: BandPriceResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.rates) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BandPriceResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBandPriceResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.rates.push(reader.uint64());
            }
          } else {
            message.rates.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BandPriceResult>): BandPriceResult {
    const message = createBaseBandPriceResult();
    message.rates = object.rates?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: BandPriceResultAmino): BandPriceResult {
    const message = createBaseBandPriceResult();
    message.rates = object.rates?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: BandPriceResult): BandPriceResultAmino {
    const obj: any = {};
    if (message.rates) {
      obj.rates = message.rates.map(e => e.toString());
    } else {
      obj.rates = message.rates;
    }
    return obj;
  },
  fromAminoMsg(object: BandPriceResultAminoMsg): BandPriceResult {
    return BandPriceResult.fromAmino(object.value);
  },
  fromProtoMsg(message: BandPriceResultProtoMsg): BandPriceResult {
    return BandPriceResult.decode(message.value);
  },
  toProto(message: BandPriceResult): Uint8Array {
    return BandPriceResult.encode(message).finish();
  },
  toProtoMsg(message: BandPriceResult): BandPriceResultProtoMsg {
    return {
      typeUrl: "/elys.oracle.BandPriceResult",
      value: BandPriceResult.encode(message).finish()
    };
  }
};