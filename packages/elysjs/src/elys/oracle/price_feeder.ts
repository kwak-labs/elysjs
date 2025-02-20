//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface PriceFeeder {
  feeder: string;
  isActive: boolean;
}
export interface PriceFeederProtoMsg {
  typeUrl: "/elys.oracle.PriceFeeder";
  value: Uint8Array;
}
export interface PriceFeederAmino {
  feeder?: string;
  is_active?: boolean;
}
export interface PriceFeederAminoMsg {
  type: "/elys.oracle.PriceFeeder";
  value: PriceFeederAmino;
}
export interface PriceFeederSDKType {
  feeder: string;
  is_active: boolean;
}
function createBasePriceFeeder(): PriceFeeder {
  return {
    feeder: "",
    isActive: false
  };
}
export const PriceFeeder = {
  typeUrl: "/elys.oracle.PriceFeeder",
  encode(message: PriceFeeder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeder !== "") {
      writer.uint32(10).string(message.feeder);
    }
    if (message.isActive === true) {
      writer.uint32(16).bool(message.isActive);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PriceFeeder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceFeeder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeder = reader.string();
          break;
        case 2:
          message.isActive = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PriceFeeder>): PriceFeeder {
    const message = createBasePriceFeeder();
    message.feeder = object.feeder ?? "";
    message.isActive = object.isActive ?? false;
    return message;
  },
  fromAmino(object: PriceFeederAmino): PriceFeeder {
    const message = createBasePriceFeeder();
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    }
    if (object.is_active !== undefined && object.is_active !== null) {
      message.isActive = object.is_active;
    }
    return message;
  },
  toAmino(message: PriceFeeder): PriceFeederAmino {
    const obj: any = {};
    obj.feeder = message.feeder === "" ? undefined : message.feeder;
    obj.is_active = message.isActive === false ? undefined : message.isActive;
    return obj;
  },
  fromAminoMsg(object: PriceFeederAminoMsg): PriceFeeder {
    return PriceFeeder.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceFeederProtoMsg): PriceFeeder {
    return PriceFeeder.decode(message.value);
  },
  toProto(message: PriceFeeder): Uint8Array {
    return PriceFeeder.encode(message).finish();
  },
  toProtoMsg(message: PriceFeeder): PriceFeederProtoMsg {
    return {
      typeUrl: "/elys.oracle.PriceFeeder",
      value: PriceFeeder.encode(message).finish()
    };
  }
};