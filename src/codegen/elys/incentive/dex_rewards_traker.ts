import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** DexRewardsTracker is used for tracking rewards for stakers and LPs, all amount here is in USDC */
export interface DexRewardsTracker {
  /** Number of blocks since start of epoch (distribution epoch) */
  numBlocks: string;
  /** Accumulated amount at distribution epoch - recalculated at every distribution epoch */
  amount: string;
  /** Accumulated rewards tracked by other (when it's for staking, from lp, if it's for lp, from staking) */
  amountCollectedByOtherTracker: string;
}
export interface DexRewardsTrackerProtoMsg {
  typeUrl: "/elys.incentive.DexRewardsTracker";
  value: Uint8Array;
}
/** DexRewardsTracker is used for tracking rewards for stakers and LPs, all amount here is in USDC */
export interface DexRewardsTrackerAmino {
  /** Number of blocks since start of epoch (distribution epoch) */
  num_blocks: string;
  /** Accumulated amount at distribution epoch - recalculated at every distribution epoch */
  amount: string;
  /** Accumulated rewards tracked by other (when it's for staking, from lp, if it's for lp, from staking) */
  amount_collected_by_other_tracker: string;
}
export interface DexRewardsTrackerAminoMsg {
  type: "/elys.incentive.DexRewardsTracker";
  value: DexRewardsTrackerAmino;
}
/** DexRewardsTracker is used for tracking rewards for stakers and LPs, all amount here is in USDC */
export interface DexRewardsTrackerSDKType {
  num_blocks: string;
  amount: string;
  amount_collected_by_other_tracker: string;
}
function createBaseDexRewardsTracker(): DexRewardsTracker {
  return {
    numBlocks: "",
    amount: "",
    amountCollectedByOtherTracker: ""
  };
}
export const DexRewardsTracker = {
  typeUrl: "/elys.incentive.DexRewardsTracker",
  encode(message: DexRewardsTracker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numBlocks !== "") {
      writer.uint32(10).string(message.numBlocks);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.amount, 18).atomics);
    }
    if (message.amountCollectedByOtherTracker !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.amountCollectedByOtherTracker, 18).atomics);
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
          message.numBlocks = reader.string();
          break;
        case 2:
          message.amount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.amountCollectedByOtherTracker = Decimal.fromAtomics(reader.string(), 18).toString();
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
    message.numBlocks = object.numBlocks ?? "";
    message.amount = object.amount ?? "";
    message.amountCollectedByOtherTracker = object.amountCollectedByOtherTracker ?? "";
    return message;
  },
  fromAmino(object: DexRewardsTrackerAmino): DexRewardsTracker {
    return {
      numBlocks: object.num_blocks,
      amount: object.amount,
      amountCollectedByOtherTracker: object.amount_collected_by_other_tracker
    };
  },
  toAmino(message: DexRewardsTracker): DexRewardsTrackerAmino {
    const obj: any = {};
    obj.num_blocks = message.numBlocks;
    obj.amount = message.amount;
    obj.amount_collected_by_other_tracker = message.amountCollectedByOtherTracker;
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
      typeUrl: "/elys.incentive.DexRewardsTracker",
      value: DexRewardsTracker.encode(message).finish()
    };
  }
};