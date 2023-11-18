import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface PoolParams {
  swapFee: string;
  exitFee: string;
  useOracle: boolean;
  weightBreakingFeeMultiplier: string;
  externalLiquidityRatio: string;
  lpFeePortion: string;
  stakingFeePortion: string;
  weightRecoveryFeePortion: string;
  thresholdWeightDifference: string;
  /** denom for fee collection */
  feeDenom: string;
}
export interface PoolParamsProtoMsg {
  typeUrl: "/elys.amm.PoolParams";
  value: Uint8Array;
}
export interface PoolParamsAmino {
  swap_fee: string;
  exit_fee: string;
  use_oracle: boolean;
  weight_breaking_fee_multiplier: string;
  external_liquidity_ratio: string;
  lp_fee_portion: string;
  staking_fee_portion: string;
  weight_recovery_fee_portion: string;
  threshold_weight_difference: string;
  /** denom for fee collection */
  fee_denom: string;
}
export interface PoolParamsAminoMsg {
  type: "/elys.amm.PoolParams";
  value: PoolParamsAmino;
}
export interface PoolParamsSDKType {
  swap_fee: string;
  exit_fee: string;
  use_oracle: boolean;
  weight_breaking_fee_multiplier: string;
  external_liquidity_ratio: string;
  lp_fee_portion: string;
  staking_fee_portion: string;
  weight_recovery_fee_portion: string;
  threshold_weight_difference: string;
  fee_denom: string;
}
function createBasePoolParams(): PoolParams {
  return {
    swapFee: "",
    exitFee: "",
    useOracle: false,
    weightBreakingFeeMultiplier: "",
    externalLiquidityRatio: "",
    lpFeePortion: "",
    stakingFeePortion: "",
    weightRecoveryFeePortion: "",
    thresholdWeightDifference: "",
    feeDenom: ""
  };
}
export const PoolParams = {
  typeUrl: "/elys.amm.PoolParams",
  encode(message: PoolParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swapFee !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.exitFee !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.exitFee, 18).atomics);
    }
    if (message.useOracle === true) {
      writer.uint32(24).bool(message.useOracle);
    }
    if (message.weightBreakingFeeMultiplier !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.weightBreakingFeeMultiplier, 18).atomics);
    }
    if (message.externalLiquidityRatio !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.externalLiquidityRatio, 18).atomics);
    }
    if (message.lpFeePortion !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.lpFeePortion, 18).atomics);
    }
    if (message.stakingFeePortion !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.stakingFeePortion, 18).atomics);
    }
    if (message.weightRecoveryFeePortion !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.weightRecoveryFeePortion, 18).atomics);
    }
    if (message.thresholdWeightDifference !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.thresholdWeightDifference, 18).atomics);
    }
    if (message.feeDenom !== "") {
      writer.uint32(82).string(message.feeDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.exitFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.useOracle = reader.bool();
          break;
        case 4:
          message.weightBreakingFeeMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.externalLiquidityRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.lpFeePortion = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.stakingFeePortion = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.weightRecoveryFeePortion = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.thresholdWeightDifference = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.feeDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PoolParams>): PoolParams {
    const message = createBasePoolParams();
    message.swapFee = object.swapFee ?? "";
    message.exitFee = object.exitFee ?? "";
    message.useOracle = object.useOracle ?? false;
    message.weightBreakingFeeMultiplier = object.weightBreakingFeeMultiplier ?? "";
    message.externalLiquidityRatio = object.externalLiquidityRatio ?? "";
    message.lpFeePortion = object.lpFeePortion ?? "";
    message.stakingFeePortion = object.stakingFeePortion ?? "";
    message.weightRecoveryFeePortion = object.weightRecoveryFeePortion ?? "";
    message.thresholdWeightDifference = object.thresholdWeightDifference ?? "";
    message.feeDenom = object.feeDenom ?? "";
    return message;
  },
  fromAmino(object: PoolParamsAmino): PoolParams {
    return {
      swapFee: object.swap_fee,
      exitFee: object.exit_fee,
      useOracle: object.use_oracle,
      weightBreakingFeeMultiplier: object.weight_breaking_fee_multiplier,
      externalLiquidityRatio: object.external_liquidity_ratio,
      lpFeePortion: object.lp_fee_portion,
      stakingFeePortion: object.staking_fee_portion,
      weightRecoveryFeePortion: object.weight_recovery_fee_portion,
      thresholdWeightDifference: object.threshold_weight_difference,
      feeDenom: object.fee_denom
    };
  },
  toAmino(message: PoolParams): PoolParamsAmino {
    const obj: any = {};
    obj.swap_fee = message.swapFee;
    obj.exit_fee = message.exitFee;
    obj.use_oracle = message.useOracle;
    obj.weight_breaking_fee_multiplier = message.weightBreakingFeeMultiplier;
    obj.external_liquidity_ratio = message.externalLiquidityRatio;
    obj.lp_fee_portion = message.lpFeePortion;
    obj.staking_fee_portion = message.stakingFeePortion;
    obj.weight_recovery_fee_portion = message.weightRecoveryFeePortion;
    obj.threshold_weight_difference = message.thresholdWeightDifference;
    obj.fee_denom = message.feeDenom;
    return obj;
  },
  fromAminoMsg(object: PoolParamsAminoMsg): PoolParams {
    return PoolParams.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolParamsProtoMsg): PoolParams {
    return PoolParams.decode(message.value);
  },
  toProto(message: PoolParams): Uint8Array {
    return PoolParams.encode(message).finish();
  },
  toProtoMsg(message: PoolParams): PoolParamsProtoMsg {
    return {
      typeUrl: "/elys.amm.PoolParams",
      value: PoolParams.encode(message).finish()
    };
  }
};