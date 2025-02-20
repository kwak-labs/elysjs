//@ts-nocheck
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
  usd_amount?: string;
  percentage?: string;
}
export interface BalanceBorrowedAminoMsg {
  type: "/elys.stablestake.BalanceBorrowed";
  value: BalanceBorrowedAmino;
}
export interface BalanceBorrowedSDKType {
  usd_amount: string;
  percentage: string;
}
export interface InterestBlock {
  interestRate: string;
  blockTime: bigint;
  blockHeight: bigint;
}
export interface InterestBlockProtoMsg {
  typeUrl: "/elys.stablestake.InterestBlock";
  value: Uint8Array;
}
export interface InterestBlockAmino {
  interest_rate?: string;
  block_time?: string;
  block_height?: string;
}
export interface InterestBlockAminoMsg {
  type: "/elys.stablestake.InterestBlock";
  value: InterestBlockAmino;
}
export interface InterestBlockSDKType {
  interest_rate: string;
  block_time: bigint;
  block_height: bigint;
}
export interface LegacyInterestBlock {
  interestRate: string;
  blockTime: bigint;
}
export interface LegacyInterestBlockProtoMsg {
  typeUrl: "/elys.stablestake.LegacyInterestBlock";
  value: Uint8Array;
}
export interface LegacyInterestBlockAmino {
  interest_rate?: string;
  block_time?: string;
}
export interface LegacyInterestBlockAminoMsg {
  type: "/elys.stablestake.LegacyInterestBlock";
  value: LegacyInterestBlockAmino;
}
export interface LegacyInterestBlockSDKType {
  interest_rate: string;
  block_time: bigint;
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
    const message = createBaseBalanceBorrowed();
    if (object.usd_amount !== undefined && object.usd_amount !== null) {
      message.usdAmount = object.usd_amount;
    }
    if (object.percentage !== undefined && object.percentage !== null) {
      message.percentage = object.percentage;
    }
    return message;
  },
  toAmino(message: BalanceBorrowed): BalanceBorrowedAmino {
    const obj: any = {};
    obj.usd_amount = message.usdAmount === "" ? undefined : message.usdAmount;
    obj.percentage = message.percentage === "" ? undefined : message.percentage;
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
function createBaseInterestBlock(): InterestBlock {
  return {
    interestRate: "",
    blockTime: BigInt(0),
    blockHeight: BigInt(0)
  };
}
export const InterestBlock = {
  typeUrl: "/elys.stablestake.InterestBlock",
  encode(message: InterestBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interestRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.interestRate, 18).atomics);
    }
    if (message.blockTime !== BigInt(0)) {
      writer.uint32(16).int64(message.blockTime);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.blockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InterestBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterestBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.blockTime = reader.int64();
          break;
        case 3:
          message.blockHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<InterestBlock>): InterestBlock {
    const message = createBaseInterestBlock();
    message.interestRate = object.interestRate ?? "";
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? BigInt(object.blockTime.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: InterestBlockAmino): InterestBlock {
    const message = createBaseInterestBlock();
    if (object.interest_rate !== undefined && object.interest_rate !== null) {
      message.interestRate = object.interest_rate;
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = BigInt(object.block_time);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    return message;
  },
  toAmino(message: InterestBlock): InterestBlockAmino {
    const obj: any = {};
    obj.interest_rate = message.interestRate === "" ? undefined : message.interestRate;
    obj.block_time = message.blockTime !== BigInt(0) ? message.blockTime?.toString() : undefined;
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: InterestBlockAminoMsg): InterestBlock {
    return InterestBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: InterestBlockProtoMsg): InterestBlock {
    return InterestBlock.decode(message.value);
  },
  toProto(message: InterestBlock): Uint8Array {
    return InterestBlock.encode(message).finish();
  },
  toProtoMsg(message: InterestBlock): InterestBlockProtoMsg {
    return {
      typeUrl: "/elys.stablestake.InterestBlock",
      value: InterestBlock.encode(message).finish()
    };
  }
};
function createBaseLegacyInterestBlock(): LegacyInterestBlock {
  return {
    interestRate: "",
    blockTime: BigInt(0)
  };
}
export const LegacyInterestBlock = {
  typeUrl: "/elys.stablestake.LegacyInterestBlock",
  encode(message: LegacyInterestBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interestRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.interestRate, 18).atomics);
    }
    if (message.blockTime !== BigInt(0)) {
      writer.uint32(16).int64(message.blockTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyInterestBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyInterestBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.blockTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LegacyInterestBlock>): LegacyInterestBlock {
    const message = createBaseLegacyInterestBlock();
    message.interestRate = object.interestRate ?? "";
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? BigInt(object.blockTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LegacyInterestBlockAmino): LegacyInterestBlock {
    const message = createBaseLegacyInterestBlock();
    if (object.interest_rate !== undefined && object.interest_rate !== null) {
      message.interestRate = object.interest_rate;
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = BigInt(object.block_time);
    }
    return message;
  },
  toAmino(message: LegacyInterestBlock): LegacyInterestBlockAmino {
    const obj: any = {};
    obj.interest_rate = message.interestRate === "" ? undefined : message.interestRate;
    obj.block_time = message.blockTime !== BigInt(0) ? message.blockTime?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LegacyInterestBlockAminoMsg): LegacyInterestBlock {
    return LegacyInterestBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyInterestBlockProtoMsg): LegacyInterestBlock {
    return LegacyInterestBlock.decode(message.value);
  },
  toProto(message: LegacyInterestBlock): Uint8Array {
    return LegacyInterestBlock.encode(message).finish();
  },
  toProtoMsg(message: LegacyInterestBlock): LegacyInterestBlockProtoMsg {
    return {
      typeUrl: "/elys.stablestake.LegacyInterestBlock",
      value: LegacyInterestBlock.encode(message).finish()
    };
  }
};