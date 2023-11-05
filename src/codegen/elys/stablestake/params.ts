import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** Params defines the parameters for the module. */
export interface Params {
  depositDenom: string;
  redemptionRate: string;
  epochLength: bigint;
  interestRate: string;
  interestRateMax: string;
  interestRateMin: string;
  interestRateIncrease: string;
  interestRateDecrease: string;
  healthGainFactor: string;
  totalValue: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.stablestake.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  deposit_denom: string;
  redemption_rate: string;
  epoch_length: string;
  interest_rate: string;
  interest_rate_max: string;
  interest_rate_min: string;
  interest_rate_increase: string;
  interest_rate_decrease: string;
  health_gain_factor: string;
  total_value: string;
}
export interface ParamsAminoMsg {
  type: "/elys.stablestake.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  deposit_denom: string;
  redemption_rate: string;
  epoch_length: bigint;
  interest_rate: string;
  interest_rate_max: string;
  interest_rate_min: string;
  interest_rate_increase: string;
  interest_rate_decrease: string;
  health_gain_factor: string;
  total_value: string;
}
function createBaseParams(): Params {
  return {
    depositDenom: "",
    redemptionRate: "",
    epochLength: BigInt(0),
    interestRate: "",
    interestRateMax: "",
    interestRateMin: "",
    interestRateIncrease: "",
    interestRateDecrease: "",
    healthGainFactor: "",
    totalValue: ""
  };
}
export const Params = {
  typeUrl: "/elys.stablestake.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositDenom !== "") {
      writer.uint32(10).string(message.depositDenom);
    }
    if (message.redemptionRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.redemptionRate, 18).atomics);
    }
    if (message.epochLength !== BigInt(0)) {
      writer.uint32(24).int64(message.epochLength);
    }
    if (message.interestRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.interestRate, 18).atomics);
    }
    if (message.interestRateMax !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.interestRateMax, 18).atomics);
    }
    if (message.interestRateMin !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.interestRateMin, 18).atomics);
    }
    if (message.interestRateIncrease !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.interestRateIncrease, 18).atomics);
    }
    if (message.interestRateDecrease !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.interestRateDecrease, 18).atomics);
    }
    if (message.healthGainFactor !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.healthGainFactor, 18).atomics);
    }
    if (message.totalValue !== "") {
      writer.uint32(82).string(message.totalValue);
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
          message.depositDenom = reader.string();
          break;
        case 2:
          message.redemptionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.epochLength = reader.int64();
          break;
        case 4:
          message.interestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.interestRateMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.interestRateMin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.interestRateIncrease = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.interestRateDecrease = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.healthGainFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.totalValue = reader.string();
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
    message.depositDenom = object.depositDenom ?? "";
    message.redemptionRate = object.redemptionRate ?? "";
    message.epochLength = object.epochLength !== undefined && object.epochLength !== null ? BigInt(object.epochLength.toString()) : BigInt(0);
    message.interestRate = object.interestRate ?? "";
    message.interestRateMax = object.interestRateMax ?? "";
    message.interestRateMin = object.interestRateMin ?? "";
    message.interestRateIncrease = object.interestRateIncrease ?? "";
    message.interestRateDecrease = object.interestRateDecrease ?? "";
    message.healthGainFactor = object.healthGainFactor ?? "";
    message.totalValue = object.totalValue ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      depositDenom: object.deposit_denom,
      redemptionRate: object.redemption_rate,
      epochLength: BigInt(object.epoch_length),
      interestRate: object.interest_rate,
      interestRateMax: object.interest_rate_max,
      interestRateMin: object.interest_rate_min,
      interestRateIncrease: object.interest_rate_increase,
      interestRateDecrease: object.interest_rate_decrease,
      healthGainFactor: object.health_gain_factor,
      totalValue: object.total_value
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.deposit_denom = message.depositDenom;
    obj.redemption_rate = message.redemptionRate;
    obj.epoch_length = message.epochLength ? message.epochLength.toString() : undefined;
    obj.interest_rate = message.interestRate;
    obj.interest_rate_max = message.interestRateMax;
    obj.interest_rate_min = message.interestRateMin;
    obj.interest_rate_increase = message.interestRateIncrease;
    obj.interest_rate_decrease = message.interestRateDecrease;
    obj.health_gain_factor = message.healthGainFactor;
    obj.total_value = message.totalValue;
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
      typeUrl: "/elys.stablestake.Params",
      value: Params.encode(message).finish()
    };
  }
};