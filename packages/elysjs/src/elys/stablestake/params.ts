//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface LegacyParams {
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
export interface LegacyParamsProtoMsg {
  typeUrl: "/elys.stablestake.LegacyParams";
  value: Uint8Array;
}
export interface LegacyParamsAmino {
  deposit_denom?: string;
  redemption_rate?: string;
  epoch_length?: string;
  interest_rate?: string;
  interest_rate_max?: string;
  interest_rate_min?: string;
  interest_rate_increase?: string;
  interest_rate_decrease?: string;
  health_gain_factor?: string;
  total_value?: string;
}
export interface LegacyParamsAminoMsg {
  type: "/elys.stablestake.LegacyParams";
  value: LegacyParamsAmino;
}
export interface LegacyParamsSDKType {
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
  maxLeverageRatio: string;
  maxWithdrawRatio: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.stablestake.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  deposit_denom?: string;
  redemption_rate?: string;
  epoch_length?: string;
  interest_rate?: string;
  interest_rate_max?: string;
  interest_rate_min?: string;
  interest_rate_increase?: string;
  interest_rate_decrease?: string;
  health_gain_factor?: string;
  total_value?: string;
  max_leverage_ratio?: string;
  max_withdraw_ratio?: string;
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
  max_leverage_ratio: string;
  max_withdraw_ratio: string;
}
function createBaseLegacyParams(): LegacyParams {
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
export const LegacyParams = {
  typeUrl: "/elys.stablestake.LegacyParams",
  encode(message: LegacyParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyParams();
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
  fromPartial(object: Partial<LegacyParams>): LegacyParams {
    const message = createBaseLegacyParams();
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
  fromAmino(object: LegacyParamsAmino): LegacyParams {
    const message = createBaseLegacyParams();
    if (object.deposit_denom !== undefined && object.deposit_denom !== null) {
      message.depositDenom = object.deposit_denom;
    }
    if (object.redemption_rate !== undefined && object.redemption_rate !== null) {
      message.redemptionRate = object.redemption_rate;
    }
    if (object.epoch_length !== undefined && object.epoch_length !== null) {
      message.epochLength = BigInt(object.epoch_length);
    }
    if (object.interest_rate !== undefined && object.interest_rate !== null) {
      message.interestRate = object.interest_rate;
    }
    if (object.interest_rate_max !== undefined && object.interest_rate_max !== null) {
      message.interestRateMax = object.interest_rate_max;
    }
    if (object.interest_rate_min !== undefined && object.interest_rate_min !== null) {
      message.interestRateMin = object.interest_rate_min;
    }
    if (object.interest_rate_increase !== undefined && object.interest_rate_increase !== null) {
      message.interestRateIncrease = object.interest_rate_increase;
    }
    if (object.interest_rate_decrease !== undefined && object.interest_rate_decrease !== null) {
      message.interestRateDecrease = object.interest_rate_decrease;
    }
    if (object.health_gain_factor !== undefined && object.health_gain_factor !== null) {
      message.healthGainFactor = object.health_gain_factor;
    }
    if (object.total_value !== undefined && object.total_value !== null) {
      message.totalValue = object.total_value;
    }
    return message;
  },
  toAmino(message: LegacyParams): LegacyParamsAmino {
    const obj: any = {};
    obj.deposit_denom = message.depositDenom === "" ? undefined : message.depositDenom;
    obj.redemption_rate = message.redemptionRate === "" ? undefined : message.redemptionRate;
    obj.epoch_length = message.epochLength !== BigInt(0) ? message.epochLength?.toString() : undefined;
    obj.interest_rate = message.interestRate === "" ? undefined : message.interestRate;
    obj.interest_rate_max = message.interestRateMax === "" ? undefined : message.interestRateMax;
    obj.interest_rate_min = message.interestRateMin === "" ? undefined : message.interestRateMin;
    obj.interest_rate_increase = message.interestRateIncrease === "" ? undefined : message.interestRateIncrease;
    obj.interest_rate_decrease = message.interestRateDecrease === "" ? undefined : message.interestRateDecrease;
    obj.health_gain_factor = message.healthGainFactor === "" ? undefined : message.healthGainFactor;
    obj.total_value = message.totalValue === "" ? undefined : message.totalValue;
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
      typeUrl: "/elys.stablestake.LegacyParams",
      value: LegacyParams.encode(message).finish()
    };
  }
};
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
    totalValue: "",
    maxLeverageRatio: "",
    maxWithdrawRatio: ""
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
    if (message.maxLeverageRatio !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.maxLeverageRatio, 18).atomics);
    }
    if (message.maxWithdrawRatio !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.maxWithdrawRatio, 18).atomics);
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
        case 11:
          message.maxLeverageRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.maxWithdrawRatio = Decimal.fromAtomics(reader.string(), 18).toString();
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
    message.maxLeverageRatio = object.maxLeverageRatio ?? "";
    message.maxWithdrawRatio = object.maxWithdrawRatio ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.deposit_denom !== undefined && object.deposit_denom !== null) {
      message.depositDenom = object.deposit_denom;
    }
    if (object.redemption_rate !== undefined && object.redemption_rate !== null) {
      message.redemptionRate = object.redemption_rate;
    }
    if (object.epoch_length !== undefined && object.epoch_length !== null) {
      message.epochLength = BigInt(object.epoch_length);
    }
    if (object.interest_rate !== undefined && object.interest_rate !== null) {
      message.interestRate = object.interest_rate;
    }
    if (object.interest_rate_max !== undefined && object.interest_rate_max !== null) {
      message.interestRateMax = object.interest_rate_max;
    }
    if (object.interest_rate_min !== undefined && object.interest_rate_min !== null) {
      message.interestRateMin = object.interest_rate_min;
    }
    if (object.interest_rate_increase !== undefined && object.interest_rate_increase !== null) {
      message.interestRateIncrease = object.interest_rate_increase;
    }
    if (object.interest_rate_decrease !== undefined && object.interest_rate_decrease !== null) {
      message.interestRateDecrease = object.interest_rate_decrease;
    }
    if (object.health_gain_factor !== undefined && object.health_gain_factor !== null) {
      message.healthGainFactor = object.health_gain_factor;
    }
    if (object.total_value !== undefined && object.total_value !== null) {
      message.totalValue = object.total_value;
    }
    if (object.max_leverage_ratio !== undefined && object.max_leverage_ratio !== null) {
      message.maxLeverageRatio = object.max_leverage_ratio;
    }
    if (object.max_withdraw_ratio !== undefined && object.max_withdraw_ratio !== null) {
      message.maxWithdrawRatio = object.max_withdraw_ratio;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.deposit_denom = message.depositDenom === "" ? undefined : message.depositDenom;
    obj.redemption_rate = message.redemptionRate === "" ? undefined : message.redemptionRate;
    obj.epoch_length = message.epochLength !== BigInt(0) ? message.epochLength?.toString() : undefined;
    obj.interest_rate = message.interestRate === "" ? undefined : message.interestRate;
    obj.interest_rate_max = message.interestRateMax === "" ? undefined : message.interestRateMax;
    obj.interest_rate_min = message.interestRateMin === "" ? undefined : message.interestRateMin;
    obj.interest_rate_increase = message.interestRateIncrease === "" ? undefined : message.interestRateIncrease;
    obj.interest_rate_decrease = message.interestRateDecrease === "" ? undefined : message.interestRateDecrease;
    obj.health_gain_factor = message.healthGainFactor === "" ? undefined : message.healthGainFactor;
    obj.total_value = message.totalValue === "" ? undefined : message.totalValue;
    obj.max_leverage_ratio = message.maxLeverageRatio === "" ? undefined : message.maxLeverageRatio;
    obj.max_withdraw_ratio = message.maxWithdrawRatio === "" ? undefined : message.maxWithdrawRatio;
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