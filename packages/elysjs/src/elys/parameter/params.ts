//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface LegacyParams {
  minCommissionRate: string;
  maxVotingPower: string;
  minSelfDelegation: string;
  totalBlocksPerYear: bigint;
  /** default 1 day = 86400 */
  rewardsDataLifetime: bigint;
}
export interface LegacyParamsProtoMsg {
  typeUrl: "/elys.parameter.LegacyParams";
  value: Uint8Array;
}
export interface LegacyParamsAmino {
  min_commission_rate?: string;
  max_voting_power?: string;
  min_self_delegation?: string;
  total_blocks_per_year?: string;
  /** default 1 day = 86400 */
  rewards_data_lifetime?: string;
}
export interface LegacyParamsAminoMsg {
  type: "/elys.parameter.LegacyParams";
  value: LegacyParamsAmino;
}
export interface LegacyParamsSDKType {
  min_commission_rate: string;
  max_voting_power: string;
  min_self_delegation: string;
  total_blocks_per_year: bigint;
  rewards_data_lifetime: bigint;
}
/** Params defines the parameters for the module. */
export interface Params {
  minCommissionRate: string;
  maxVotingPower: string;
  minSelfDelegation: string;
  totalBlocksPerYear: bigint;
  /** default 1 day = 86400 */
  rewardsDataLifetime: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.parameter.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  min_commission_rate?: string;
  max_voting_power?: string;
  min_self_delegation?: string;
  total_blocks_per_year?: string;
  /** default 1 day = 86400 */
  rewards_data_lifetime?: string;
}
export interface ParamsAminoMsg {
  type: "/elys.parameter.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  min_commission_rate: string;
  max_voting_power: string;
  min_self_delegation: string;
  total_blocks_per_year: bigint;
  rewards_data_lifetime: bigint;
}
function createBaseLegacyParams(): LegacyParams {
  return {
    minCommissionRate: "",
    maxVotingPower: "",
    minSelfDelegation: "",
    totalBlocksPerYear: BigInt(0),
    rewardsDataLifetime: BigInt(0)
  };
}
export const LegacyParams = {
  typeUrl: "/elys.parameter.LegacyParams",
  encode(message: LegacyParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minCommissionRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.minCommissionRate, 18).atomics);
    }
    if (message.maxVotingPower !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.maxVotingPower, 18).atomics);
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(26).string(message.minSelfDelegation);
    }
    if (message.totalBlocksPerYear !== BigInt(0)) {
      writer.uint32(32).uint64(message.totalBlocksPerYear);
    }
    if (message.rewardsDataLifetime !== BigInt(0)) {
      writer.uint32(40).uint64(message.rewardsDataLifetime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minCommissionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.maxVotingPower = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.minSelfDelegation = reader.string();
          break;
        case 4:
          message.totalBlocksPerYear = reader.uint64();
          break;
        case 5:
          message.rewardsDataLifetime = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LegacyParams>): LegacyParams {
    const message = createBaseLegacyParams();
    message.minCommissionRate = object.minCommissionRate ?? "";
    message.maxVotingPower = object.maxVotingPower ?? "";
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    message.totalBlocksPerYear = object.totalBlocksPerYear !== undefined && object.totalBlocksPerYear !== null ? BigInt(object.totalBlocksPerYear.toString()) : BigInt(0);
    message.rewardsDataLifetime = object.rewardsDataLifetime !== undefined && object.rewardsDataLifetime !== null ? BigInt(object.rewardsDataLifetime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LegacyParamsAmino): LegacyParams {
    const message = createBaseLegacyParams();
    if (object.min_commission_rate !== undefined && object.min_commission_rate !== null) {
      message.minCommissionRate = object.min_commission_rate;
    }
    if (object.max_voting_power !== undefined && object.max_voting_power !== null) {
      message.maxVotingPower = object.max_voting_power;
    }
    if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
      message.minSelfDelegation = object.min_self_delegation;
    }
    if (object.total_blocks_per_year !== undefined && object.total_blocks_per_year !== null) {
      message.totalBlocksPerYear = BigInt(object.total_blocks_per_year);
    }
    if (object.rewards_data_lifetime !== undefined && object.rewards_data_lifetime !== null) {
      message.rewardsDataLifetime = BigInt(object.rewards_data_lifetime);
    }
    return message;
  },
  toAmino(message: LegacyParams): LegacyParamsAmino {
    const obj: any = {};
    obj.min_commission_rate = message.minCommissionRate === "" ? undefined : message.minCommissionRate;
    obj.max_voting_power = message.maxVotingPower === "" ? undefined : message.maxVotingPower;
    obj.min_self_delegation = message.minSelfDelegation === "" ? undefined : message.minSelfDelegation;
    obj.total_blocks_per_year = message.totalBlocksPerYear !== BigInt(0) ? message.totalBlocksPerYear?.toString() : undefined;
    obj.rewards_data_lifetime = message.rewardsDataLifetime !== BigInt(0) ? message.rewardsDataLifetime?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LegacyParamsAminoMsg): LegacyParams {
    return LegacyParams.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyParamsProtoMsg): LegacyParams {
    return LegacyParams.decode(message.value);
  },
  toProto(message: LegacyParams): Uint8Array {
    return LegacyParams.encode(message).finish();
  },
  toProtoMsg(message: LegacyParams): LegacyParamsProtoMsg {
    return {
      typeUrl: "/elys.parameter.LegacyParams",
      value: LegacyParams.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    minCommissionRate: "",
    maxVotingPower: "",
    minSelfDelegation: "",
    totalBlocksPerYear: BigInt(0),
    rewardsDataLifetime: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/elys.parameter.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minCommissionRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.minCommissionRate, 18).atomics);
    }
    if (message.maxVotingPower !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.maxVotingPower, 18).atomics);
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(26).string(message.minSelfDelegation);
    }
    if (message.totalBlocksPerYear !== BigInt(0)) {
      writer.uint32(32).uint64(message.totalBlocksPerYear);
    }
    if (message.rewardsDataLifetime !== BigInt(0)) {
      writer.uint32(40).uint64(message.rewardsDataLifetime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minCommissionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.maxVotingPower = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.minSelfDelegation = reader.string();
          break;
        case 4:
          message.totalBlocksPerYear = reader.uint64();
          break;
        case 5:
          message.rewardsDataLifetime = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minCommissionRate = object.minCommissionRate ?? "";
    message.maxVotingPower = object.maxVotingPower ?? "";
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    message.totalBlocksPerYear = object.totalBlocksPerYear !== undefined && object.totalBlocksPerYear !== null ? BigInt(object.totalBlocksPerYear.toString()) : BigInt(0);
    message.rewardsDataLifetime = object.rewardsDataLifetime !== undefined && object.rewardsDataLifetime !== null ? BigInt(object.rewardsDataLifetime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.min_commission_rate !== undefined && object.min_commission_rate !== null) {
      message.minCommissionRate = object.min_commission_rate;
    }
    if (object.max_voting_power !== undefined && object.max_voting_power !== null) {
      message.maxVotingPower = object.max_voting_power;
    }
    if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
      message.minSelfDelegation = object.min_self_delegation;
    }
    if (object.total_blocks_per_year !== undefined && object.total_blocks_per_year !== null) {
      message.totalBlocksPerYear = BigInt(object.total_blocks_per_year);
    }
    if (object.rewards_data_lifetime !== undefined && object.rewards_data_lifetime !== null) {
      message.rewardsDataLifetime = BigInt(object.rewards_data_lifetime);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.min_commission_rate = message.minCommissionRate === "" ? undefined : message.minCommissionRate;
    obj.max_voting_power = message.maxVotingPower === "" ? undefined : message.maxVotingPower;
    obj.min_self_delegation = message.minSelfDelegation === "" ? undefined : message.minSelfDelegation;
    obj.total_blocks_per_year = message.totalBlocksPerYear !== BigInt(0) ? message.totalBlocksPerYear?.toString() : undefined;
    obj.rewards_data_lifetime = message.rewardsDataLifetime !== BigInt(0) ? message.rewardsDataLifetime?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/elys.parameter.Params",
      value: Params.encode(message).finish()
    };
  }
};