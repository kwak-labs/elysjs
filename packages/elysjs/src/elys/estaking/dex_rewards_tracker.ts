//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/**
 * DexRewardsTracker is used for tracking rewards for stakers and LPs, all
 * amount here is in USDC
 */
export interface DexRewardsTracker {
  /** Number of blocks since start of epoch (distribution epoch) */
  numBlocks: bigint;
  /**
   * Accumulated amount at distribution epoch - recalculated at every
   * distribution epoch
   */
  amount: string;
}
export interface DexRewardsTrackerProtoMsg {
  typeUrl: "/elys.estaking.DexRewardsTracker";
  value: Uint8Array;
}
/**
 * DexRewardsTracker is used for tracking rewards for stakers and LPs, all
 * amount here is in USDC
 */
export interface DexRewardsTrackerAmino {
  /** Number of blocks since start of epoch (distribution epoch) */
  num_blocks?: string;
  /**
   * Accumulated amount at distribution epoch - recalculated at every
   * distribution epoch
   */
  amount?: string;
}
export interface DexRewardsTrackerAminoMsg {
  type: "/elys.estaking.DexRewardsTracker";
  value: DexRewardsTrackerAmino;
}
/**
 * DexRewardsTracker is used for tracking rewards for stakers and LPs, all
 * amount here is in USDC
 */
export interface DexRewardsTrackerSDKType {
  num_blocks: bigint;
  amount: string;
}
function createBaseDexRewardsTracker(): DexRewardsTracker {
  return {
    numBlocks: BigInt(0),
    amount: ""
  };
}
export const DexRewardsTracker = {
  typeUrl: "/elys.estaking.DexRewardsTracker",
  encode(message: DexRewardsTracker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numBlocks !== BigInt(0)) {
      writer.uint32(8).int64(message.numBlocks);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.amount, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DexRewardsTracker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDexRewardsTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numBlocks = reader.int64();
          break;
        case 2:
          message.amount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DexRewardsTracker>): DexRewardsTracker {
    const message = createBaseDexRewardsTracker();
    message.numBlocks = object.numBlocks !== undefined && object.numBlocks !== null ? BigInt(object.numBlocks.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: DexRewardsTrackerAmino): DexRewardsTracker {
    const message = createBaseDexRewardsTracker();
    if (object.num_blocks !== undefined && object.num_blocks !== null) {
      message.numBlocks = BigInt(object.num_blocks);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: DexRewardsTracker): DexRewardsTrackerAmino {
    const obj: any = {};
    obj.num_blocks = message.numBlocks !== BigInt(0) ? message.numBlocks?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: DexRewardsTrackerAminoMsg): DexRewardsTracker {
    return DexRewardsTracker.fromAmino(object.value);
  },
  fromProtoMsg(message: DexRewardsTrackerProtoMsg): DexRewardsTracker {
    return DexRewardsTracker.decode(message.value);
  },
  toProto(message: DexRewardsTracker): Uint8Array {
    return DexRewardsTracker.encode(message).finish();
  },
  toProtoMsg(message: DexRewardsTracker): DexRewardsTrackerProtoMsg {
    return {
      typeUrl: "/elys.estaking.DexRewardsTracker",
      value: DexRewardsTracker.encode(message).finish()
    };
  }
};