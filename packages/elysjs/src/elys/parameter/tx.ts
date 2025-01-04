//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface MsgUpdateMinCommission {
  creator: string;
  minCommission: string;
}
export interface MsgUpdateMinCommissionProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateMinCommission";
  value: Uint8Array;
}
export interface MsgUpdateMinCommissionAmino {
  creator?: string;
  min_commission?: string;
}
export interface MsgUpdateMinCommissionAminoMsg {
  type: "parameter/MsgUpdateMinCommission";
  value: MsgUpdateMinCommissionAmino;
}
export interface MsgUpdateMinCommissionSDKType {
  creator: string;
  min_commission: string;
}
export interface MsgUpdateMinCommissionResponse {}
export interface MsgUpdateMinCommissionResponseProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateMinCommissionResponse";
  value: Uint8Array;
}
export interface MsgUpdateMinCommissionResponseAmino {}
export interface MsgUpdateMinCommissionResponseAminoMsg {
  type: "/elys.parameter.MsgUpdateMinCommissionResponse";
  value: MsgUpdateMinCommissionResponseAmino;
}
export interface MsgUpdateMinCommissionResponseSDKType {}
export interface MsgUpdateMaxVotingPower {
  creator: string;
  maxVotingPower: string;
}
export interface MsgUpdateMaxVotingPowerProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateMaxVotingPower";
  value: Uint8Array;
}
export interface MsgUpdateMaxVotingPowerAmino {
  creator?: string;
  max_voting_power?: string;
}
export interface MsgUpdateMaxVotingPowerAminoMsg {
  type: "parameter/MsgUpdateMaxVotingPower";
  value: MsgUpdateMaxVotingPowerAmino;
}
export interface MsgUpdateMaxVotingPowerSDKType {
  creator: string;
  max_voting_power: string;
}
export interface MsgUpdateMaxVotingPowerResponse {}
export interface MsgUpdateMaxVotingPowerResponseProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateMaxVotingPowerResponse";
  value: Uint8Array;
}
export interface MsgUpdateMaxVotingPowerResponseAmino {}
export interface MsgUpdateMaxVotingPowerResponseAminoMsg {
  type: "/elys.parameter.MsgUpdateMaxVotingPowerResponse";
  value: MsgUpdateMaxVotingPowerResponseAmino;
}
export interface MsgUpdateMaxVotingPowerResponseSDKType {}
export interface MsgUpdateMinSelfDelegation {
  creator: string;
  minSelfDelegation: string;
}
export interface MsgUpdateMinSelfDelegationProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateMinSelfDelegation";
  value: Uint8Array;
}
export interface MsgUpdateMinSelfDelegationAmino {
  creator?: string;
  min_self_delegation?: string;
}
export interface MsgUpdateMinSelfDelegationAminoMsg {
  type: "parameter/MsgUpdateMinSelfDelegation";
  value: MsgUpdateMinSelfDelegationAmino;
}
export interface MsgUpdateMinSelfDelegationSDKType {
  creator: string;
  min_self_delegation: string;
}
export interface MsgUpdateMinSelfDelegationResponse {}
export interface MsgUpdateMinSelfDelegationResponseProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateMinSelfDelegationResponse";
  value: Uint8Array;
}
export interface MsgUpdateMinSelfDelegationResponseAmino {}
export interface MsgUpdateMinSelfDelegationResponseAminoMsg {
  type: "/elys.parameter.MsgUpdateMinSelfDelegationResponse";
  value: MsgUpdateMinSelfDelegationResponseAmino;
}
export interface MsgUpdateMinSelfDelegationResponseSDKType {}
export interface MsgUpdateTotalBlocksPerYear {
  creator: string;
  totalBlocksPerYear: bigint;
}
export interface MsgUpdateTotalBlocksPerYearProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateTotalBlocksPerYear";
  value: Uint8Array;
}
export interface MsgUpdateTotalBlocksPerYearAmino {
  creator?: string;
  total_blocks_per_year?: string;
}
export interface MsgUpdateTotalBlocksPerYearAminoMsg {
  type: "parameter/MsgUpdateTotalBlocksPerYear";
  value: MsgUpdateTotalBlocksPerYearAmino;
}
export interface MsgUpdateTotalBlocksPerYearSDKType {
  creator: string;
  total_blocks_per_year: bigint;
}
export interface MsgUpdateTotalBlocksPerYearResponse {}
export interface MsgUpdateTotalBlocksPerYearResponseProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateTotalBlocksPerYearResponse";
  value: Uint8Array;
}
export interface MsgUpdateTotalBlocksPerYearResponseAmino {}
export interface MsgUpdateTotalBlocksPerYearResponseAminoMsg {
  type: "/elys.parameter.MsgUpdateTotalBlocksPerYearResponse";
  value: MsgUpdateTotalBlocksPerYearResponseAmino;
}
export interface MsgUpdateTotalBlocksPerYearResponseSDKType {}
export interface MsgUpdateRewardsDataLifetime {
  creator: string;
  rewardsDataLifetime: bigint;
}
export interface MsgUpdateRewardsDataLifetimeProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateRewardsDataLifetime";
  value: Uint8Array;
}
export interface MsgUpdateRewardsDataLifetimeAmino {
  creator?: string;
  rewards_data_lifetime?: string;
}
export interface MsgUpdateRewardsDataLifetimeAminoMsg {
  type: "parameter/MsgUpdateRewardsDataLifetime";
  value: MsgUpdateRewardsDataLifetimeAmino;
}
export interface MsgUpdateRewardsDataLifetimeSDKType {
  creator: string;
  rewards_data_lifetime: bigint;
}
export interface MsgUpdateRewardsDataLifetimeResponse {}
export interface MsgUpdateRewardsDataLifetimeResponseProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateRewardsDataLifetimeResponse";
  value: Uint8Array;
}
export interface MsgUpdateRewardsDataLifetimeResponseAmino {}
export interface MsgUpdateRewardsDataLifetimeResponseAminoMsg {
  type: "/elys.parameter.MsgUpdateRewardsDataLifetimeResponse";
  value: MsgUpdateRewardsDataLifetimeResponseAmino;
}
export interface MsgUpdateRewardsDataLifetimeResponseSDKType {}
function createBaseMsgUpdateMinCommission(): MsgUpdateMinCommission {
  return {
    creator: "",
    minCommission: ""
  };
}
export const MsgUpdateMinCommission = {
  typeUrl: "/elys.parameter.MsgUpdateMinCommission",
  encode(message: MsgUpdateMinCommission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.minCommission !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.minCommission, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMinCommission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMinCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.minCommission = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateMinCommission>): MsgUpdateMinCommission {
    const message = createBaseMsgUpdateMinCommission();
    message.creator = object.creator ?? "";
    message.minCommission = object.minCommission ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateMinCommissionAmino): MsgUpdateMinCommission {
    const message = createBaseMsgUpdateMinCommission();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.min_commission !== undefined && object.min_commission !== null) {
      message.minCommission = object.min_commission;
    }
    return message;
  },
  toAmino(message: MsgUpdateMinCommission): MsgUpdateMinCommissionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.min_commission = message.minCommission === "" ? undefined : message.minCommission;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMinCommissionAminoMsg): MsgUpdateMinCommission {
    return MsgUpdateMinCommission.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateMinCommission): MsgUpdateMinCommissionAminoMsg {
    return {
      type: "parameter/MsgUpdateMinCommission",
      value: MsgUpdateMinCommission.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateMinCommissionProtoMsg): MsgUpdateMinCommission {
    return MsgUpdateMinCommission.decode(message.value);
  },
  toProto(message: MsgUpdateMinCommission): Uint8Array {
    return MsgUpdateMinCommission.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMinCommission): MsgUpdateMinCommissionProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateMinCommission",
      value: MsgUpdateMinCommission.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMinCommissionResponse(): MsgUpdateMinCommissionResponse {
  return {};
}
export const MsgUpdateMinCommissionResponse = {
  typeUrl: "/elys.parameter.MsgUpdateMinCommissionResponse",
  encode(_: MsgUpdateMinCommissionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMinCommissionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMinCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateMinCommissionResponse>): MsgUpdateMinCommissionResponse {
    const message = createBaseMsgUpdateMinCommissionResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMinCommissionResponseAmino): MsgUpdateMinCommissionResponse {
    const message = createBaseMsgUpdateMinCommissionResponse();
    return message;
  },
  toAmino(_: MsgUpdateMinCommissionResponse): MsgUpdateMinCommissionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMinCommissionResponseAminoMsg): MsgUpdateMinCommissionResponse {
    return MsgUpdateMinCommissionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMinCommissionResponseProtoMsg): MsgUpdateMinCommissionResponse {
    return MsgUpdateMinCommissionResponse.decode(message.value);
  },
  toProto(message: MsgUpdateMinCommissionResponse): Uint8Array {
    return MsgUpdateMinCommissionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMinCommissionResponse): MsgUpdateMinCommissionResponseProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateMinCommissionResponse",
      value: MsgUpdateMinCommissionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMaxVotingPower(): MsgUpdateMaxVotingPower {
  return {
    creator: "",
    maxVotingPower: ""
  };
}
export const MsgUpdateMaxVotingPower = {
  typeUrl: "/elys.parameter.MsgUpdateMaxVotingPower",
  encode(message: MsgUpdateMaxVotingPower, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.maxVotingPower !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.maxVotingPower, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMaxVotingPower {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMaxVotingPower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.maxVotingPower = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateMaxVotingPower>): MsgUpdateMaxVotingPower {
    const message = createBaseMsgUpdateMaxVotingPower();
    message.creator = object.creator ?? "";
    message.maxVotingPower = object.maxVotingPower ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateMaxVotingPowerAmino): MsgUpdateMaxVotingPower {
    const message = createBaseMsgUpdateMaxVotingPower();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.max_voting_power !== undefined && object.max_voting_power !== null) {
      message.maxVotingPower = object.max_voting_power;
    }
    return message;
  },
  toAmino(message: MsgUpdateMaxVotingPower): MsgUpdateMaxVotingPowerAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.max_voting_power = message.maxVotingPower === "" ? undefined : message.maxVotingPower;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMaxVotingPowerAminoMsg): MsgUpdateMaxVotingPower {
    return MsgUpdateMaxVotingPower.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateMaxVotingPower): MsgUpdateMaxVotingPowerAminoMsg {
    return {
      type: "parameter/MsgUpdateMaxVotingPower",
      value: MsgUpdateMaxVotingPower.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateMaxVotingPowerProtoMsg): MsgUpdateMaxVotingPower {
    return MsgUpdateMaxVotingPower.decode(message.value);
  },
  toProto(message: MsgUpdateMaxVotingPower): Uint8Array {
    return MsgUpdateMaxVotingPower.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMaxVotingPower): MsgUpdateMaxVotingPowerProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateMaxVotingPower",
      value: MsgUpdateMaxVotingPower.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMaxVotingPowerResponse(): MsgUpdateMaxVotingPowerResponse {
  return {};
}
export const MsgUpdateMaxVotingPowerResponse = {
  typeUrl: "/elys.parameter.MsgUpdateMaxVotingPowerResponse",
  encode(_: MsgUpdateMaxVotingPowerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMaxVotingPowerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMaxVotingPowerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateMaxVotingPowerResponse>): MsgUpdateMaxVotingPowerResponse {
    const message = createBaseMsgUpdateMaxVotingPowerResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMaxVotingPowerResponseAmino): MsgUpdateMaxVotingPowerResponse {
    const message = createBaseMsgUpdateMaxVotingPowerResponse();
    return message;
  },
  toAmino(_: MsgUpdateMaxVotingPowerResponse): MsgUpdateMaxVotingPowerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMaxVotingPowerResponseAminoMsg): MsgUpdateMaxVotingPowerResponse {
    return MsgUpdateMaxVotingPowerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMaxVotingPowerResponseProtoMsg): MsgUpdateMaxVotingPowerResponse {
    return MsgUpdateMaxVotingPowerResponse.decode(message.value);
  },
  toProto(message: MsgUpdateMaxVotingPowerResponse): Uint8Array {
    return MsgUpdateMaxVotingPowerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMaxVotingPowerResponse): MsgUpdateMaxVotingPowerResponseProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateMaxVotingPowerResponse",
      value: MsgUpdateMaxVotingPowerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMinSelfDelegation(): MsgUpdateMinSelfDelegation {
  return {
    creator: "",
    minSelfDelegation: ""
  };
}
export const MsgUpdateMinSelfDelegation = {
  typeUrl: "/elys.parameter.MsgUpdateMinSelfDelegation",
  encode(message: MsgUpdateMinSelfDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(18).string(message.minSelfDelegation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMinSelfDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMinSelfDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.minSelfDelegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateMinSelfDelegation>): MsgUpdateMinSelfDelegation {
    const message = createBaseMsgUpdateMinSelfDelegation();
    message.creator = object.creator ?? "";
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateMinSelfDelegationAmino): MsgUpdateMinSelfDelegation {
    const message = createBaseMsgUpdateMinSelfDelegation();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
      message.minSelfDelegation = object.min_self_delegation;
    }
    return message;
  },
  toAmino(message: MsgUpdateMinSelfDelegation): MsgUpdateMinSelfDelegationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.min_self_delegation = message.minSelfDelegation === "" ? undefined : message.minSelfDelegation;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMinSelfDelegationAminoMsg): MsgUpdateMinSelfDelegation {
    return MsgUpdateMinSelfDelegation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateMinSelfDelegation): MsgUpdateMinSelfDelegationAminoMsg {
    return {
      type: "parameter/MsgUpdateMinSelfDelegation",
      value: MsgUpdateMinSelfDelegation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateMinSelfDelegationProtoMsg): MsgUpdateMinSelfDelegation {
    return MsgUpdateMinSelfDelegation.decode(message.value);
  },
  toProto(message: MsgUpdateMinSelfDelegation): Uint8Array {
    return MsgUpdateMinSelfDelegation.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMinSelfDelegation): MsgUpdateMinSelfDelegationProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateMinSelfDelegation",
      value: MsgUpdateMinSelfDelegation.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMinSelfDelegationResponse(): MsgUpdateMinSelfDelegationResponse {
  return {};
}
export const MsgUpdateMinSelfDelegationResponse = {
  typeUrl: "/elys.parameter.MsgUpdateMinSelfDelegationResponse",
  encode(_: MsgUpdateMinSelfDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMinSelfDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMinSelfDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateMinSelfDelegationResponse>): MsgUpdateMinSelfDelegationResponse {
    const message = createBaseMsgUpdateMinSelfDelegationResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMinSelfDelegationResponseAmino): MsgUpdateMinSelfDelegationResponse {
    const message = createBaseMsgUpdateMinSelfDelegationResponse();
    return message;
  },
  toAmino(_: MsgUpdateMinSelfDelegationResponse): MsgUpdateMinSelfDelegationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMinSelfDelegationResponseAminoMsg): MsgUpdateMinSelfDelegationResponse {
    return MsgUpdateMinSelfDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMinSelfDelegationResponseProtoMsg): MsgUpdateMinSelfDelegationResponse {
    return MsgUpdateMinSelfDelegationResponse.decode(message.value);
  },
  toProto(message: MsgUpdateMinSelfDelegationResponse): Uint8Array {
    return MsgUpdateMinSelfDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMinSelfDelegationResponse): MsgUpdateMinSelfDelegationResponseProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateMinSelfDelegationResponse",
      value: MsgUpdateMinSelfDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTotalBlocksPerYear(): MsgUpdateTotalBlocksPerYear {
  return {
    creator: "",
    totalBlocksPerYear: BigInt(0)
  };
}
export const MsgUpdateTotalBlocksPerYear = {
  typeUrl: "/elys.parameter.MsgUpdateTotalBlocksPerYear",
  encode(message: MsgUpdateTotalBlocksPerYear, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.totalBlocksPerYear !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalBlocksPerYear);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateTotalBlocksPerYear {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTotalBlocksPerYear();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.totalBlocksPerYear = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateTotalBlocksPerYear>): MsgUpdateTotalBlocksPerYear {
    const message = createBaseMsgUpdateTotalBlocksPerYear();
    message.creator = object.creator ?? "";
    message.totalBlocksPerYear = object.totalBlocksPerYear !== undefined && object.totalBlocksPerYear !== null ? BigInt(object.totalBlocksPerYear.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateTotalBlocksPerYearAmino): MsgUpdateTotalBlocksPerYear {
    const message = createBaseMsgUpdateTotalBlocksPerYear();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.total_blocks_per_year !== undefined && object.total_blocks_per_year !== null) {
      message.totalBlocksPerYear = BigInt(object.total_blocks_per_year);
    }
    return message;
  },
  toAmino(message: MsgUpdateTotalBlocksPerYear): MsgUpdateTotalBlocksPerYearAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.total_blocks_per_year = message.totalBlocksPerYear !== BigInt(0) ? message.totalBlocksPerYear?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTotalBlocksPerYearAminoMsg): MsgUpdateTotalBlocksPerYear {
    return MsgUpdateTotalBlocksPerYear.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateTotalBlocksPerYear): MsgUpdateTotalBlocksPerYearAminoMsg {
    return {
      type: "parameter/MsgUpdateTotalBlocksPerYear",
      value: MsgUpdateTotalBlocksPerYear.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateTotalBlocksPerYearProtoMsg): MsgUpdateTotalBlocksPerYear {
    return MsgUpdateTotalBlocksPerYear.decode(message.value);
  },
  toProto(message: MsgUpdateTotalBlocksPerYear): Uint8Array {
    return MsgUpdateTotalBlocksPerYear.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTotalBlocksPerYear): MsgUpdateTotalBlocksPerYearProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateTotalBlocksPerYear",
      value: MsgUpdateTotalBlocksPerYear.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTotalBlocksPerYearResponse(): MsgUpdateTotalBlocksPerYearResponse {
  return {};
}
export const MsgUpdateTotalBlocksPerYearResponse = {
  typeUrl: "/elys.parameter.MsgUpdateTotalBlocksPerYearResponse",
  encode(_: MsgUpdateTotalBlocksPerYearResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateTotalBlocksPerYearResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTotalBlocksPerYearResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateTotalBlocksPerYearResponse>): MsgUpdateTotalBlocksPerYearResponse {
    const message = createBaseMsgUpdateTotalBlocksPerYearResponse();
    return message;
  },
  fromAmino(_: MsgUpdateTotalBlocksPerYearResponseAmino): MsgUpdateTotalBlocksPerYearResponse {
    const message = createBaseMsgUpdateTotalBlocksPerYearResponse();
    return message;
  },
  toAmino(_: MsgUpdateTotalBlocksPerYearResponse): MsgUpdateTotalBlocksPerYearResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTotalBlocksPerYearResponseAminoMsg): MsgUpdateTotalBlocksPerYearResponse {
    return MsgUpdateTotalBlocksPerYearResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateTotalBlocksPerYearResponseProtoMsg): MsgUpdateTotalBlocksPerYearResponse {
    return MsgUpdateTotalBlocksPerYearResponse.decode(message.value);
  },
  toProto(message: MsgUpdateTotalBlocksPerYearResponse): Uint8Array {
    return MsgUpdateTotalBlocksPerYearResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTotalBlocksPerYearResponse): MsgUpdateTotalBlocksPerYearResponseProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateTotalBlocksPerYearResponse",
      value: MsgUpdateTotalBlocksPerYearResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRewardsDataLifetime(): MsgUpdateRewardsDataLifetime {
  return {
    creator: "",
    rewardsDataLifetime: BigInt(0)
  };
}
export const MsgUpdateRewardsDataLifetime = {
  typeUrl: "/elys.parameter.MsgUpdateRewardsDataLifetime",
  encode(message: MsgUpdateRewardsDataLifetime, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rewardsDataLifetime !== BigInt(0)) {
      writer.uint32(16).uint64(message.rewardsDataLifetime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateRewardsDataLifetime {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRewardsDataLifetime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rewardsDataLifetime = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateRewardsDataLifetime>): MsgUpdateRewardsDataLifetime {
    const message = createBaseMsgUpdateRewardsDataLifetime();
    message.creator = object.creator ?? "";
    message.rewardsDataLifetime = object.rewardsDataLifetime !== undefined && object.rewardsDataLifetime !== null ? BigInt(object.rewardsDataLifetime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateRewardsDataLifetimeAmino): MsgUpdateRewardsDataLifetime {
    const message = createBaseMsgUpdateRewardsDataLifetime();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.rewards_data_lifetime !== undefined && object.rewards_data_lifetime !== null) {
      message.rewardsDataLifetime = BigInt(object.rewards_data_lifetime);
    }
    return message;
  },
  toAmino(message: MsgUpdateRewardsDataLifetime): MsgUpdateRewardsDataLifetimeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.rewards_data_lifetime = message.rewardsDataLifetime !== BigInt(0) ? message.rewardsDataLifetime?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRewardsDataLifetimeAminoMsg): MsgUpdateRewardsDataLifetime {
    return MsgUpdateRewardsDataLifetime.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateRewardsDataLifetime): MsgUpdateRewardsDataLifetimeAminoMsg {
    return {
      type: "parameter/MsgUpdateRewardsDataLifetime",
      value: MsgUpdateRewardsDataLifetime.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateRewardsDataLifetimeProtoMsg): MsgUpdateRewardsDataLifetime {
    return MsgUpdateRewardsDataLifetime.decode(message.value);
  },
  toProto(message: MsgUpdateRewardsDataLifetime): Uint8Array {
    return MsgUpdateRewardsDataLifetime.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRewardsDataLifetime): MsgUpdateRewardsDataLifetimeProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateRewardsDataLifetime",
      value: MsgUpdateRewardsDataLifetime.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRewardsDataLifetimeResponse(): MsgUpdateRewardsDataLifetimeResponse {
  return {};
}
export const MsgUpdateRewardsDataLifetimeResponse = {
  typeUrl: "/elys.parameter.MsgUpdateRewardsDataLifetimeResponse",
  encode(_: MsgUpdateRewardsDataLifetimeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateRewardsDataLifetimeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRewardsDataLifetimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateRewardsDataLifetimeResponse>): MsgUpdateRewardsDataLifetimeResponse {
    const message = createBaseMsgUpdateRewardsDataLifetimeResponse();
    return message;
  },
  fromAmino(_: MsgUpdateRewardsDataLifetimeResponseAmino): MsgUpdateRewardsDataLifetimeResponse {
    const message = createBaseMsgUpdateRewardsDataLifetimeResponse();
    return message;
  },
  toAmino(_: MsgUpdateRewardsDataLifetimeResponse): MsgUpdateRewardsDataLifetimeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRewardsDataLifetimeResponseAminoMsg): MsgUpdateRewardsDataLifetimeResponse {
    return MsgUpdateRewardsDataLifetimeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRewardsDataLifetimeResponseProtoMsg): MsgUpdateRewardsDataLifetimeResponse {
    return MsgUpdateRewardsDataLifetimeResponse.decode(message.value);
  },
  toProto(message: MsgUpdateRewardsDataLifetimeResponse): Uint8Array {
    return MsgUpdateRewardsDataLifetimeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRewardsDataLifetimeResponse): MsgUpdateRewardsDataLifetimeResponseProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateRewardsDataLifetimeResponse",
      value: MsgUpdateRewardsDataLifetimeResponse.encode(message).finish()
    };
  }
};