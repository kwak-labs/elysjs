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
  lmRewards: string;
  icsStakingRewards: string;
  communityFund: string;
  strategicReserve: string;
  teamTokensVested: string;
}
export interface InflationEntryAminoMsg {
  type: "/elys.tokenomics.InflationEntry";
  value: InflationEntryAmino;
}
export interface InflationEntrySDKType {
  lmRewards: bigint;
  icsStakingRewards: bigint;
  communityFund: bigint;
  strategicReserve: bigint;
  teamTokensVested: bigint;
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
    return {
      lmRewards: BigInt(object.lmRewards),
      icsStakingRewards: BigInt(object.icsStakingRewards),
      communityFund: BigInt(object.communityFund),
      strategicReserve: BigInt(object.strategicReserve),
      teamTokensVested: BigInt(object.teamTokensVested)
    };
  },
  toAmino(message: InflationEntry): InflationEntryAmino {
    const obj: any = {};
    obj.lmRewards = message.lmRewards ? message.lmRewards.toString() : undefined;
    obj.icsStakingRewards = message.icsStakingRewards ? message.icsStakingRewards.toString() : undefined;
    obj.communityFund = message.communityFund ? message.communityFund.toString() : undefined;
    obj.strategicReserve = message.strategicReserve ? message.strategicReserve.toString() : undefined;
    obj.teamTokensVested = message.teamTokensVested ? message.teamTokensVested.toString() : undefined;
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