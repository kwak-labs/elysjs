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
}
function createBasePoolInfo(): PoolInfo {
  return {
    poolId: BigInt(0),
    rewardWallet: "",
    multiplier: ""
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
    return message;
  },
  fromAmino(object: PoolInfoAmino): PoolInfo {
    return {
      poolId: BigInt(object.pool_id),
      rewardWallet: object.reward_wallet,
      multiplier: object.multiplier
    };
  },
  toAmino(message: PoolInfo): PoolInfoAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.reward_wallet = message.rewardWallet;
    obj.multiplier = message.multiplier;
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