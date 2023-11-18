import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface PoolMultipliers {
  poolId: bigint;
  multiplier: string;
}
export interface PoolMultipliersProtoMsg {
  typeUrl: "/elys.incentive.PoolMultipliers";
  value: Uint8Array;
}
export interface PoolMultipliersAmino {
  pool_id: string;
  multiplier: string;
}
export interface PoolMultipliersAminoMsg {
  type: "/elys.incentive.PoolMultipliers";
  value: PoolMultipliersAmino;
}
export interface PoolMultipliersSDKType {
  pool_id: bigint;
  multiplier: string;
}
export interface ProposalUpdatePoolMultipliers {
  title: string;
  description: string;
  poolMultipliers: PoolMultipliers[];
}
export interface ProposalUpdatePoolMultipliersProtoMsg {
  typeUrl: "/elys.incentive.ProposalUpdatePoolMultipliers";
  value: Uint8Array;
}
export interface ProposalUpdatePoolMultipliersAmino {
  title: string;
  description: string;
  pool_multipliers: PoolMultipliersAmino[];
}
export interface ProposalUpdatePoolMultipliersAminoMsg {
  type: "/elys.incentive.ProposalUpdatePoolMultipliers";
  value: ProposalUpdatePoolMultipliersAmino;
}
export interface ProposalUpdatePoolMultipliersSDKType {
  title: string;
  description: string;
  pool_multipliers: PoolMultipliersSDKType[];
}
function createBasePoolMultipliers(): PoolMultipliers {
  return {
    poolId: BigInt(0),
    multiplier: ""
  };
}
export const PoolMultipliers = {
  typeUrl: "/elys.incentive.PoolMultipliers",
  encode(message: PoolMultipliers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.multiplier !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.multiplier, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolMultipliers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolMultipliers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.multiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PoolMultipliers>): PoolMultipliers {
    const message = createBasePoolMultipliers();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.multiplier = object.multiplier ?? "";
    return message;
  },
  fromAmino(object: PoolMultipliersAmino): PoolMultipliers {
    return {
      poolId: BigInt(object.pool_id),
      multiplier: object.multiplier
    };
  },
  toAmino(message: PoolMultipliers): PoolMultipliersAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.multiplier = message.multiplier;
    return obj;
  },
  fromAminoMsg(object: PoolMultipliersAminoMsg): PoolMultipliers {
    return PoolMultipliers.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolMultipliersProtoMsg): PoolMultipliers {
    return PoolMultipliers.decode(message.value);
  },
  toProto(message: PoolMultipliers): Uint8Array {
    return PoolMultipliers.encode(message).finish();
  },
  toProtoMsg(message: PoolMultipliers): PoolMultipliersProtoMsg {
    return {
      typeUrl: "/elys.incentive.PoolMultipliers",
      value: PoolMultipliers.encode(message).finish()
    };
  }
};
function createBaseProposalUpdatePoolMultipliers(): ProposalUpdatePoolMultipliers {
  return {
    title: "",
    description: "",
    poolMultipliers: []
  };
}
export const ProposalUpdatePoolMultipliers = {
  typeUrl: "/elys.incentive.ProposalUpdatePoolMultipliers",
  encode(message: ProposalUpdatePoolMultipliers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.poolMultipliers) {
      PoolMultipliers.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalUpdatePoolMultipliers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalUpdatePoolMultipliers();
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
          message.poolMultipliers.push(PoolMultipliers.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProposalUpdatePoolMultipliers>): ProposalUpdatePoolMultipliers {
    const message = createBaseProposalUpdatePoolMultipliers();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolMultipliers = object.poolMultipliers?.map(e => PoolMultipliers.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ProposalUpdatePoolMultipliersAmino): ProposalUpdatePoolMultipliers {
    return {
      title: object.title,
      description: object.description,
      poolMultipliers: Array.isArray(object?.pool_multipliers) ? object.pool_multipliers.map((e: any) => PoolMultipliers.fromAmino(e)) : []
    };
  },
  toAmino(message: ProposalUpdatePoolMultipliers): ProposalUpdatePoolMultipliersAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.poolMultipliers) {
      obj.pool_multipliers = message.poolMultipliers.map(e => e ? PoolMultipliers.toAmino(e) : undefined);
    } else {
      obj.pool_multipliers = [];
    }
    return obj;
  },
  fromAminoMsg(object: ProposalUpdatePoolMultipliersAminoMsg): ProposalUpdatePoolMultipliers {
    return ProposalUpdatePoolMultipliers.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalUpdatePoolMultipliersProtoMsg): ProposalUpdatePoolMultipliers {
    return ProposalUpdatePoolMultipliers.decode(message.value);
  },
  toProto(message: ProposalUpdatePoolMultipliers): Uint8Array {
    return ProposalUpdatePoolMultipliers.encode(message).finish();
  },
  toProtoMsg(message: ProposalUpdatePoolMultipliers): ProposalUpdatePoolMultipliersProtoMsg {
    return {
      typeUrl: "/elys.incentive.ProposalUpdatePoolMultipliers",
      value: ProposalUpdatePoolMultipliers.encode(message).finish()
    };
  }
};