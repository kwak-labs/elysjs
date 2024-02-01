import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** Params defines the parameters for the module. */
export interface Params {
  minCommissionRate: string;
  maxVotingPower: string;
  minSelfDelegation: string;
  brokerAddress: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.parameter.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  min_commission_rate: string;
  max_voting_power: string;
  min_self_delegation: string;
  broker_address: string;
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
  broker_address: string;
}
function createBaseParams(): Params {
  return {
    minCommissionRate: "",
    maxVotingPower: "",
    minSelfDelegation: "",
    brokerAddress: ""
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
    if (message.brokerAddress !== "") {
      writer.uint32(34).string(message.brokerAddress);
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
          message.brokerAddress = reader.string();
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
    message.brokerAddress = object.brokerAddress ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      minCommissionRate: object.min_commission_rate,
      maxVotingPower: object.max_voting_power,
      minSelfDelegation: object.min_self_delegation,
      brokerAddress: object.broker_address
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.min_commission_rate = message.minCommissionRate;
    obj.max_voting_power = message.maxVotingPower;
    obj.min_self_delegation = message.minSelfDelegation;
    obj.broker_address = message.brokerAddress;
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