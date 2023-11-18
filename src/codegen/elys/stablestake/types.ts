import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface BalanceBorrowed {
  usdAmount: string;
  percentage: string;
}
export interface BalanceBorrowedProtoMsg {
  typeUrl: "/elys.stablestake.BalanceBorrowed";
  value: Uint8Array;
}
export interface BalanceBorrowedAmino {
  usd_amount: string;
  percentage: string;
}
export interface BalanceBorrowedAminoMsg {
  type: "/elys.stablestake.BalanceBorrowed";
  value: BalanceBorrowedAmino;
}
export interface BalanceBorrowedSDKType {
  usd_amount: string;
  percentage: string;
}
function createBaseBalanceBorrowed(): BalanceBorrowed {
  return {
    usdAmount: "",
    percentage: ""
  };
}
export const BalanceBorrowed = {
  typeUrl: "/elys.stablestake.BalanceBorrowed",
  encode(message: BalanceBorrowed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.usdAmount !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.usdAmount, 18).atomics);
    }
    if (message.percentage !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.percentage, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BalanceBorrowed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceBorrowed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.usdAmount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.percentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BalanceBorrowed>): BalanceBorrowed {
    const message = createBaseBalanceBorrowed();
    message.usdAmount = object.usdAmount ?? "";
    message.percentage = object.percentage ?? "";
    return message;
  },
  fromAmino(object: BalanceBorrowedAmino): BalanceBorrowed {
    return {
      usdAmount: object.usd_amount,
      percentage: object.percentage
    };
  },
  toAmino(message: BalanceBorrowed): BalanceBorrowedAmino {
    const obj: any = {};
    obj.usd_amount = message.usdAmount;
    obj.percentage = message.percentage;
    return obj;
  },
  fromAminoMsg(object: BalanceBorrowedAminoMsg): BalanceBorrowed {
    return BalanceBorrowed.fromAmino(object.value);
  },
  fromProtoMsg(message: BalanceBorrowedProtoMsg): BalanceBorrowed {
    return BalanceBorrowed.decode(message.value);
  },
  toProto(message: BalanceBorrowed): Uint8Array {
    return BalanceBorrowed.encode(message).finish();
  },
  toProtoMsg(message: BalanceBorrowed): BalanceBorrowedProtoMsg {
    return {
      typeUrl: "/elys.stablestake.BalanceBorrowed",
      value: BalanceBorrowed.encode(message).finish()
    };
  }
};