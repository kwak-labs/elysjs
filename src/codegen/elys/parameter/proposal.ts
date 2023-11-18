import { BinaryReader, BinaryWriter } from "../../binary";
export interface ProposalUpdateMinCommission {
  title: string;
  description: string;
  minCommission: string;
}
export interface ProposalUpdateMinCommissionProtoMsg {
  typeUrl: "/elys.parameter.ProposalUpdateMinCommission";
  value: Uint8Array;
}
export interface ProposalUpdateMinCommissionAmino {
  title: string;
  description: string;
  min_commission: string;
}
export interface ProposalUpdateMinCommissionAminoMsg {
  type: "/elys.parameter.ProposalUpdateMinCommission";
  value: ProposalUpdateMinCommissionAmino;
}
export interface ProposalUpdateMinCommissionSDKType {
  title: string;
  description: string;
  min_commission: string;
}
export interface ProposalUpdateMaxVotingPower {
  title: string;
  description: string;
  maxVotingPower: string;
}
export interface ProposalUpdateMaxVotingPowerProtoMsg {
  typeUrl: "/elys.parameter.ProposalUpdateMaxVotingPower";
  value: Uint8Array;
}
export interface ProposalUpdateMaxVotingPowerAmino {
  title: string;
  description: string;
  max_voting_power: string;
}
export interface ProposalUpdateMaxVotingPowerAminoMsg {
  type: "/elys.parameter.ProposalUpdateMaxVotingPower";
  value: ProposalUpdateMaxVotingPowerAmino;
}
export interface ProposalUpdateMaxVotingPowerSDKType {
  title: string;
  description: string;
  max_voting_power: string;
}
export interface ProposalUpdateMinSelfDelegation {
  title: string;
  description: string;
  minSelfDelegation: string;
}
export interface ProposalUpdateMinSelfDelegationProtoMsg {
  typeUrl: "/elys.parameter.ProposalUpdateMinSelfDelegation";
  value: Uint8Array;
}
export interface ProposalUpdateMinSelfDelegationAmino {
  title: string;
  description: string;
  min_self_delegation: string;
}
export interface ProposalUpdateMinSelfDelegationAminoMsg {
  type: "/elys.parameter.ProposalUpdateMinSelfDelegation";
  value: ProposalUpdateMinSelfDelegationAmino;
}
export interface ProposalUpdateMinSelfDelegationSDKType {
  title: string;
  description: string;
  min_self_delegation: string;
}
function createBaseProposalUpdateMinCommission(): ProposalUpdateMinCommission {
  return {
    title: "",
    description: "",
    minCommission: ""
  };
}
export const ProposalUpdateMinCommission = {
  typeUrl: "/elys.parameter.ProposalUpdateMinCommission",
  encode(message: ProposalUpdateMinCommission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.minCommission !== "") {
      writer.uint32(26).string(message.minCommission);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalUpdateMinCommission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalUpdateMinCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.minCommission = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProposalUpdateMinCommission>): ProposalUpdateMinCommission {
    const message = createBaseProposalUpdateMinCommission();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.minCommission = object.minCommission ?? "";
    return message;
  },
  fromAmino(object: ProposalUpdateMinCommissionAmino): ProposalUpdateMinCommission {
    return {
      title: object.title,
      description: object.description,
      minCommission: object.min_commission
    };
  },
  toAmino(message: ProposalUpdateMinCommission): ProposalUpdateMinCommissionAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.min_commission = message.minCommission;
    return obj;
  },
  fromAminoMsg(object: ProposalUpdateMinCommissionAminoMsg): ProposalUpdateMinCommission {
    return ProposalUpdateMinCommission.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalUpdateMinCommissionProtoMsg): ProposalUpdateMinCommission {
    return ProposalUpdateMinCommission.decode(message.value);
  },
  toProto(message: ProposalUpdateMinCommission): Uint8Array {
    return ProposalUpdateMinCommission.encode(message).finish();
  },
  toProtoMsg(message: ProposalUpdateMinCommission): ProposalUpdateMinCommissionProtoMsg {
    return {
      typeUrl: "/elys.parameter.ProposalUpdateMinCommission",
      value: ProposalUpdateMinCommission.encode(message).finish()
    };
  }
};
function createBaseProposalUpdateMaxVotingPower(): ProposalUpdateMaxVotingPower {
  return {
    title: "",
    description: "",
    maxVotingPower: ""
  };
}
export const ProposalUpdateMaxVotingPower = {
  typeUrl: "/elys.parameter.ProposalUpdateMaxVotingPower",
  encode(message: ProposalUpdateMaxVotingPower, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.maxVotingPower !== "") {
      writer.uint32(26).string(message.maxVotingPower);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalUpdateMaxVotingPower {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalUpdateMaxVotingPower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.maxVotingPower = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProposalUpdateMaxVotingPower>): ProposalUpdateMaxVotingPower {
    const message = createBaseProposalUpdateMaxVotingPower();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.maxVotingPower = object.maxVotingPower ?? "";
    return message;
  },
  fromAmino(object: ProposalUpdateMaxVotingPowerAmino): ProposalUpdateMaxVotingPower {
    return {
      title: object.title,
      description: object.description,
      maxVotingPower: object.max_voting_power
    };
  },
  toAmino(message: ProposalUpdateMaxVotingPower): ProposalUpdateMaxVotingPowerAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.max_voting_power = message.maxVotingPower;
    return obj;
  },
  fromAminoMsg(object: ProposalUpdateMaxVotingPowerAminoMsg): ProposalUpdateMaxVotingPower {
    return ProposalUpdateMaxVotingPower.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalUpdateMaxVotingPowerProtoMsg): ProposalUpdateMaxVotingPower {
    return ProposalUpdateMaxVotingPower.decode(message.value);
  },
  toProto(message: ProposalUpdateMaxVotingPower): Uint8Array {
    return ProposalUpdateMaxVotingPower.encode(message).finish();
  },
  toProtoMsg(message: ProposalUpdateMaxVotingPower): ProposalUpdateMaxVotingPowerProtoMsg {
    return {
      typeUrl: "/elys.parameter.ProposalUpdateMaxVotingPower",
      value: ProposalUpdateMaxVotingPower.encode(message).finish()
    };
  }
};
function createBaseProposalUpdateMinSelfDelegation(): ProposalUpdateMinSelfDelegation {
  return {
    title: "",
    description: "",
    minSelfDelegation: ""
  };
}
export const ProposalUpdateMinSelfDelegation = {
  typeUrl: "/elys.parameter.ProposalUpdateMinSelfDelegation",
  encode(message: ProposalUpdateMinSelfDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(26).string(message.minSelfDelegation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalUpdateMinSelfDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalUpdateMinSelfDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.minSelfDelegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProposalUpdateMinSelfDelegation>): ProposalUpdateMinSelfDelegation {
    const message = createBaseProposalUpdateMinSelfDelegation();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    return message;
  },
  fromAmino(object: ProposalUpdateMinSelfDelegationAmino): ProposalUpdateMinSelfDelegation {
    return {
      title: object.title,
      description: object.description,
      minSelfDelegation: object.min_self_delegation
    };
  },
  toAmino(message: ProposalUpdateMinSelfDelegation): ProposalUpdateMinSelfDelegationAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.min_self_delegation = message.minSelfDelegation;
    return obj;
  },
  fromAminoMsg(object: ProposalUpdateMinSelfDelegationAminoMsg): ProposalUpdateMinSelfDelegation {
    return ProposalUpdateMinSelfDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalUpdateMinSelfDelegationProtoMsg): ProposalUpdateMinSelfDelegation {
    return ProposalUpdateMinSelfDelegation.decode(message.value);
  },
  toProto(message: ProposalUpdateMinSelfDelegation): Uint8Array {
    return ProposalUpdateMinSelfDelegation.encode(message).finish();
  },
  toProtoMsg(message: ProposalUpdateMinSelfDelegation): ProposalUpdateMinSelfDelegationProtoMsg {
    return {
      typeUrl: "/elys.parameter.ProposalUpdateMinSelfDelegation",
      value: ProposalUpdateMinSelfDelegation.encode(message).finish()
    };
  }
};