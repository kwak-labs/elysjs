import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** Pool Info */
export interface PoolInfo {
  /** reward amount */
  poolId: bigint;
  /** reward wallet address */
  rewardWallet: string;
  /** multiplier for lp rewards */
  multiplier: string;
  /** Block number since the creation of PoolInfo */
  numBlocks: string;
  /** Total dex rewards given */
  dexRewardAmountGiven: string;
  /** Total eden rewards given */
  edenRewardAmountGiven: string;
  /** Eden APR, updated at every distribution */
  edenApr: string;
  /** Dex APR, updated at every distribution */
  dexApr: string;
}
export interface PoolInfoProtoMsg {
  typeUrl: "/elys.incentive.PoolInfo";
  value: Uint8Array;
}
/** Pool Info */
export interface PoolInfoAmino {
  /** reward amount */
  pool_id: string;
  /** reward wallet address */
  reward_wallet: string;
  /** multiplier for lp rewards */
  multiplier: string;
  /** Block number since the creation of PoolInfo */
  num_blocks: string;
  /** Total dex rewards given */
  dex_reward_amount_given: string;
  /** Total eden rewards given */
  eden_reward_amount_given: string;
  /** Eden APR, updated at every distribution */
  eden_apr: string;
  /** Dex APR, updated at every distribution */
  dex_apr: string;
}
export interface PoolInfoAminoMsg {
  type: "/elys.incentive.PoolInfo";
  value: PoolInfoAmino;
}
/** Pool Info */
export interface PoolInfoSDKType {
  pool_id: bigint;
  reward_wallet: string;
  multiplier: string;
  num_blocks: string;
  dex_reward_amount_given: string;
  eden_reward_amount_given: string;
  eden_apr: string;
  dex_apr: string;
}
function createBasePoolInfo(): PoolInfo {
  return {
    poolId: BigInt(0),
    rewardWallet: "",
    multiplier: "",
    numBlocks: "",
    dexRewardAmountGiven: "",
    edenRewardAmountGiven: "",
    edenApr: "",
    dexApr: ""
  };
}
export const PoolInfo = {
  typeUrl: "/elys.incentive.PoolInfo",
  encode(message: PoolInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.rewardWallet !== "") {
      writer.uint32(18).string(message.rewardWallet);
    }
    if (message.multiplier !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.multiplier, 18).atomics);
    }
    if (message.numBlocks !== "") {
      writer.uint32(34).string(message.numBlocks);
    }
    if (message.dexRewardAmountGiven !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.dexRewardAmountGiven, 18).atomics);
    }
    if (message.edenRewardAmountGiven !== "") {
      writer.uint32(50).string(message.edenRewardAmountGiven);
    }
    if (message.edenApr !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.edenApr, 18).atomics);
    }
    if (message.dexApr !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.dexApr, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.rewardWallet = reader.string();
          break;
        case 3:
          message.multiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.numBlocks = reader.string();
          break;
        case 5:
          message.dexRewardAmountGiven = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.edenRewardAmountGiven = reader.string();
          break;
        case 7:
          message.edenApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.dexApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PoolInfo>): PoolInfo {
    const message = createBasePoolInfo();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.rewardWallet = object.rewardWallet ?? "";
    message.multiplier = object.multiplier ?? "";
    message.numBlocks = object.numBlocks ?? "";
    message.dexRewardAmountGiven = object.dexRewardAmountGiven ?? "";
    message.edenRewardAmountGiven = object.edenRewardAmountGiven ?? "";
    message.edenApr = object.edenApr ?? "";
    message.dexApr = object.dexApr ?? "";
    return message;
  },
  fromAmino(object: PoolInfoAmino): PoolInfo {
    return {
      poolId: BigInt(object.pool_id),
      rewardWallet: object.reward_wallet,
      multiplier: object.multiplier,
      numBlocks: object.num_blocks,
      dexRewardAmountGiven: object.dex_reward_amount_given,
      edenRewardAmountGiven: object.eden_reward_amount_given,
      edenApr: object.eden_apr,
      dexApr: object.dex_apr
    };
  },
  toAmino(message: PoolInfo): PoolInfoAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.reward_wallet = message.rewardWallet;
    obj.multiplier = message.multiplier;
    obj.num_blocks = message.numBlocks;
    obj.dex_reward_amount_given = message.dexRewardAmountGiven;
    obj.eden_reward_amount_given = message.edenRewardAmountGiven;
    obj.eden_apr = message.edenApr;
    obj.dex_apr = message.dexApr;
    return obj;
  },
  fromAminoMsg(object: PoolInfoAminoMsg): PoolInfo {
    return PoolInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolInfoProtoMsg): PoolInfo {
    return PoolInfo.decode(message.value);
  },
  toProto(message: PoolInfo): Uint8Array {
    return PoolInfo.encode(message).finish();
  },
  toProtoMsg(message: PoolInfo): PoolInfoProtoMsg {
    return {
      typeUrl: "/elys.incentive.PoolInfo",
      value: PoolInfo.encode(message).finish()
    };
  }
};