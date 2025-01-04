//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface InflationEntry {
  lmRewards: bigint;
  icsStakingRewards: bigint;
  communityFund: bigint;
  strategicReserve: bigint;
  teamTokensVested: bigint;
}
export interface InflationEntryProtoMsg {
  typeUrl: "/elys.tokenomics.InflationEntry";
  value: Uint8Array;
}
export interface InflationEntryAmino {
  lm_rewards?: string;
  ics_staking_rewards?: string;
  community_fund?: string;
  strategic_reserve?: string;
  team_tokens_vested?: string;
}
export interface InflationEntryAminoMsg {
  type: "/elys.tokenomics.InflationEntry";
  value: InflationEntryAmino;
}
export interface InflationEntrySDKType {
  lm_rewards: bigint;
  ics_staking_rewards: bigint;
  community_fund: bigint;
  strategic_reserve: bigint;
  team_tokens_vested: bigint;
}
function createBaseInflationEntry(): InflationEntry {
  return {
    lmRewards: BigInt(0),
    icsStakingRewards: BigInt(0),
    communityFund: BigInt(0),
    strategicReserve: BigInt(0),
    teamTokensVested: BigInt(0)
  };
}
export const InflationEntry = {
  typeUrl: "/elys.tokenomics.InflationEntry",
  encode(message: InflationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lmRewards !== BigInt(0)) {
      writer.uint32(8).uint64(message.lmRewards);
    }
    if (message.icsStakingRewards !== BigInt(0)) {
      writer.uint32(16).uint64(message.icsStakingRewards);
    }
    if (message.communityFund !== BigInt(0)) {
      writer.uint32(24).uint64(message.communityFund);
    }
    if (message.strategicReserve !== BigInt(0)) {
      writer.uint32(32).uint64(message.strategicReserve);
    }
    if (message.teamTokensVested !== BigInt(0)) {
      writer.uint32(40).uint64(message.teamTokensVested);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InflationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInflationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lmRewards = reader.uint64();
          break;
        case 2:
          message.icsStakingRewards = reader.uint64();
          break;
        case 3:
          message.communityFund = reader.uint64();
          break;
        case 4:
          message.strategicReserve = reader.uint64();
          break;
        case 5:
          message.teamTokensVested = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<InflationEntry>): InflationEntry {
    const message = createBaseInflationEntry();
    message.lmRewards = object.lmRewards !== undefined && object.lmRewards !== null ? BigInt(object.lmRewards.toString()) : BigInt(0);
    message.icsStakingRewards = object.icsStakingRewards !== undefined && object.icsStakingRewards !== null ? BigInt(object.icsStakingRewards.toString()) : BigInt(0);
    message.communityFund = object.communityFund !== undefined && object.communityFund !== null ? BigInt(object.communityFund.toString()) : BigInt(0);
    message.strategicReserve = object.strategicReserve !== undefined && object.strategicReserve !== null ? BigInt(object.strategicReserve.toString()) : BigInt(0);
    message.teamTokensVested = object.teamTokensVested !== undefined && object.teamTokensVested !== null ? BigInt(object.teamTokensVested.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: InflationEntryAmino): InflationEntry {
    const message = createBaseInflationEntry();
    if (object.lm_rewards !== undefined && object.lm_rewards !== null) {
      message.lmRewards = BigInt(object.lm_rewards);
    }
    if (object.ics_staking_rewards !== undefined && object.ics_staking_rewards !== null) {
      message.icsStakingRewards = BigInt(object.ics_staking_rewards);
    }
    if (object.community_fund !== undefined && object.community_fund !== null) {
      message.communityFund = BigInt(object.community_fund);
    }
    if (object.strategic_reserve !== undefined && object.strategic_reserve !== null) {
      message.strategicReserve = BigInt(object.strategic_reserve);
    }
    if (object.team_tokens_vested !== undefined && object.team_tokens_vested !== null) {
      message.teamTokensVested = BigInt(object.team_tokens_vested);
    }
    return message;
  },
  toAmino(message: InflationEntry): InflationEntryAmino {
    const obj: any = {};
    obj.lm_rewards = message.lmRewards !== BigInt(0) ? message.lmRewards?.toString() : undefined;
    obj.ics_staking_rewards = message.icsStakingRewards !== BigInt(0) ? message.icsStakingRewards?.toString() : undefined;
    obj.community_fund = message.communityFund !== BigInt(0) ? message.communityFund?.toString() : undefined;
    obj.strategic_reserve = message.strategicReserve !== BigInt(0) ? message.strategicReserve?.toString() : undefined;
    obj.team_tokens_vested = message.teamTokensVested !== BigInt(0) ? message.teamTokensVested?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: InflationEntryAminoMsg): InflationEntry {
    return InflationEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: InflationEntryProtoMsg): InflationEntry {
    return InflationEntry.decode(message.value);
  },
  toProto(message: InflationEntry): Uint8Array {
    return InflationEntry.encode(message).finish();
  },
  toProtoMsg(message: InflationEntry): InflationEntryProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.InflationEntry",
      value: InflationEntry.encode(message).finish()
    };
  }
};