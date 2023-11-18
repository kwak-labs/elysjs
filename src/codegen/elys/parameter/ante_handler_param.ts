import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface AnteHandlerParam {
  minCommissionRate: string;
  maxVotingPower: string;
  minSelfDelegation: string;
}
export interface AnteHandlerParamProtoMsg {
  typeUrl: "/elys.parameter.AnteHandlerParam";
  value: Uint8Array;
}
export interface AnteHandlerParamAmino {
  min_commission_rate: string;
  max_voting_power: string;
  min_self_delegation: string;
}
export interface AnteHandlerParamAminoMsg {
  type: "/elys.parameter.AnteHandlerParam";
  value: AnteHandlerParamAmino;
}
export interface AnteHandlerParamSDKType {
  min_commission_rate: string;
  max_voting_power: string;
  min_self_delegation: string;
}
function createBaseAnteHandlerParam(): AnteHandlerParam {
  return {
    minCommissionRate: "",
    maxVotingPower: "",
    minSelfDelegation: ""
  };
}
export const AnteHandlerParam = {
  typeUrl: "/elys.parameter.AnteHandlerParam",
  encode(message: AnteHandlerParam, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minCommissionRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.minCommissionRate, 18).atomics);
    }
    if (message.maxVotingPower !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.maxVotingPower, 18).atomics);
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(26).string(message.minSelfDelegation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AnteHandlerParam {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnteHandlerParam();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AnteHandlerParam>): AnteHandlerParam {
    const message = createBaseAnteHandlerParam();
    message.minCommissionRate = object.minCommissionRate ?? "";
    message.maxVotingPower = object.maxVotingPower ?? "";
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    return message;
  },
  fromAmino(object: AnteHandlerParamAmino): AnteHandlerParam {
    return {
      minCommissionRate: object.min_commission_rate,
      maxVotingPower: object.max_voting_power,
      minSelfDelegation: object.min_self_delegation
    };
  },
  toAmino(message: AnteHandlerParam): AnteHandlerParamAmino {
    const obj: any = {};
    obj.min_commission_rate = message.minCommissionRate;
    obj.max_voting_power = message.maxVotingPower;
    obj.min_self_delegation = message.minSelfDelegation;
    return obj;
  },
  fromAminoMsg(object: AnteHandlerParamAminoMsg): AnteHandlerParam {
    return AnteHandlerParam.fromAmino(object.value);
  },
  fromProtoMsg(message: AnteHandlerParamProtoMsg): AnteHandlerParam {
    return AnteHandlerParam.decode(message.value);
  },
  toProto(message: AnteHandlerParam): Uint8Array {
    return AnteHandlerParam.encode(message).finish();
  },
  toProtoMsg(message: AnteHandlerParam): AnteHandlerParamProtoMsg {
    return {
      typeUrl: "/elys.parameter.AnteHandlerParam",
      value: AnteHandlerParam.encode(message).finish()
    };
  }
};