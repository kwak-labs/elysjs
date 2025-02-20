//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** Params defines the parameters for the module. */
export interface LegacyParams {
  poolCreationFee: string;
  /** default 1 week: 604,800 */
  slippageTrackDuration: bigint;
  baseAssets: string[];
  weightBreakingFeeExponent: string;
  weightBreakingFeeMultiplier: string;
  weightBreakingFeePortion: string;
  weightRecoveryFeePortion: string;
  thresholdWeightDifference: string;
  allowedPoolCreators: string[];
}
export interface LegacyParamsProtoMsg {
  typeUrl: "/elys.amm.LegacyParams";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface LegacyParamsAmino {
  pool_creation_fee?: string;
  /** default 1 week: 604,800 */
  slippage_track_duration?: string;
  base_assets?: string[];
  weight_breaking_fee_exponent?: string;
  weight_breaking_fee_multiplier?: string;
  weight_breaking_fee_portion?: string;
  weight_recovery_fee_portion?: string;
  threshold_weight_difference?: string;
  allowed_pool_creators?: string[];
}
export interface LegacyParamsAminoMsg {
  type: "/elys.amm.LegacyParams";
  value: LegacyParamsAmino;
}
/** Params defines the parameters for the module. */
export interface LegacyParamsSDKType {
  pool_creation_fee: string;
  slippage_track_duration: bigint;
  base_assets: string[];
  weight_breaking_fee_exponent: string;
  weight_breaking_fee_multiplier: string;
  weight_breaking_fee_portion: string;
  weight_recovery_fee_portion: string;
  threshold_weight_difference: string;
  allowed_pool_creators: string[];
}
export interface Params {
  poolCreationFee: string;
  /** default 1 week: 604,800 */
  slippageTrackDuration: bigint;
  baseAssets: string[];
  weightBreakingFeeExponent: string;
  weightBreakingFeeMultiplier: string;
  weightBreakingFeePortion: string;
  weightRecoveryFeePortion: string;
  thresholdWeightDifference: string;
  allowedPoolCreators: string[];
  thresholdWeightDifferenceSwapFee: string;
  lpLockupDuration: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.amm.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  pool_creation_fee?: string;
  /** default 1 week: 604,800 */
  slippage_track_duration?: string;
  base_assets?: string[];
  weight_breaking_fee_exponent?: string;
  weight_breaking_fee_multiplier?: string;
  weight_breaking_fee_portion?: string;
  weight_recovery_fee_portion?: string;
  threshold_weight_difference?: string;
  allowed_pool_creators?: string[];
  threshold_weight_difference_swap_fee?: string;
  lp_lockup_duration?: string;
}
export interface ParamsAminoMsg {
  type: "/elys.amm.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  pool_creation_fee: string;
  slippage_track_duration: bigint;
  base_assets: string[];
  weight_breaking_fee_exponent: string;
  weight_breaking_fee_multiplier: string;
  weight_breaking_fee_portion: string;
  weight_recovery_fee_portion: string;
  threshold_weight_difference: string;
  allowed_pool_creators: string[];
  threshold_weight_difference_swap_fee: string;
  lp_lockup_duration: bigint;
}
function createBaseLegacyParams(): LegacyParams {
  return {
    poolCreationFee: "",
    slippageTrackDuration: BigInt(0),
    baseAssets: [],
    weightBreakingFeeExponent: "",
    weightBreakingFeeMultiplier: "",
    weightBreakingFeePortion: "",
    weightRecoveryFeePortion: "",
    thresholdWeightDifference: "",
    allowedPoolCreators: []
  };
}
export const LegacyParams = {
  typeUrl: "/elys.amm.LegacyParams",
  encode(message: LegacyParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolCreationFee !== "") {
      writer.uint32(10).string(message.poolCreationFee);
    }
    if (message.slippageTrackDuration !== BigInt(0)) {
      writer.uint32(16).uint64(message.slippageTrackDuration);
    }
    for (const v of message.baseAssets) {
      writer.uint32(26).string(v!);
    }
    if (message.weightBreakingFeeExponent !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.weightBreakingFeeExponent, 18).atomics);
    }
    if (message.weightBreakingFeeMultiplier !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.weightBreakingFeeMultiplier, 18).atomics);
    }
    if (message.weightBreakingFeePortion !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.weightBreakingFeePortion, 18).atomics);
    }
    if (message.weightRecoveryFeePortion !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.weightRecoveryFeePortion, 18).atomics);
    }
    if (message.thresholdWeightDifference !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.thresholdWeightDifference, 18).atomics);
    }
    for (const v of message.allowedPoolCreators) {
      writer.uint32(74).string(v!);
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
          message.poolCreationFee = reader.string();
          break;
        case 2:
          message.slippageTrackDuration = reader.uint64();
          break;
        case 3:
          message.baseAssets.push(reader.string());
          break;
        case 4:
          message.weightBreakingFeeExponent = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.weightBreakingFeeMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.weightBreakingFeePortion = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.weightRecoveryFeePortion = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.thresholdWeightDifference = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.allowedPoolCreators.push(reader.string());
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
    message.poolCreationFee = object.poolCreationFee ?? "";
    message.slippageTrackDuration = object.slippageTrackDuration !== undefined && object.slippageTrackDuration !== null ? BigInt(object.slippageTrackDuration.toString()) : BigInt(0);
    message.baseAssets = object.baseAssets?.map(e => e) || [];
    message.weightBreakingFeeExponent = object.weightBreakingFeeExponent ?? "";
    message.weightBreakingFeeMultiplier = object.weightBreakingFeeMultiplier ?? "";
    message.weightBreakingFeePortion = object.weightBreakingFeePortion ?? "";
    message.weightRecoveryFeePortion = object.weightRecoveryFeePortion ?? "";
    message.thresholdWeightDifference = object.thresholdWeightDifference ?? "";
    message.allowedPoolCreators = object.allowedPoolCreators?.map(e => e) || [];
    return message;
  },
  fromAmino(object: LegacyParamsAmino): LegacyParams {
    const message = createBaseLegacyParams();
    if (object.pool_creation_fee !== undefined && object.pool_creation_fee !== null) {
      message.poolCreationFee = object.pool_creation_fee;
    }
    if (object.slippage_track_duration !== undefined && object.slippage_track_duration !== null) {
      message.slippageTrackDuration = BigInt(object.slippage_track_duration);
    }
    message.baseAssets = object.base_assets?.map(e => e) || [];
    if (object.weight_breaking_fee_exponent !== undefined && object.weight_breaking_fee_exponent !== null) {
      message.weightBreakingFeeExponent = object.weight_breaking_fee_exponent;
    }
    if (object.weight_breaking_fee_multiplier !== undefined && object.weight_breaking_fee_multiplier !== null) {
      message.weightBreakingFeeMultiplier = object.weight_breaking_fee_multiplier;
    }
    if (object.weight_breaking_fee_portion !== undefined && object.weight_breaking_fee_portion !== null) {
      message.weightBreakingFeePortion = object.weight_breaking_fee_portion;
    }
    if (object.weight_recovery_fee_portion !== undefined && object.weight_recovery_fee_portion !== null) {
      message.weightRecoveryFeePortion = object.weight_recovery_fee_portion;
    }
    if (object.threshold_weight_difference !== undefined && object.threshold_weight_difference !== null) {
      message.thresholdWeightDifference = object.threshold_weight_difference;
    }
    message.allowedPoolCreators = object.allowed_pool_creators?.map(e => e) || [];
    return message;
  },
  toAmino(message: LegacyParams): LegacyParamsAmino {
    const obj: any = {};
    obj.pool_creation_fee = message.poolCreationFee === "" ? undefined : message.poolCreationFee;
    obj.slippage_track_duration = message.slippageTrackDuration !== BigInt(0) ? message.slippageTrackDuration?.toString() : undefined;
    if (message.baseAssets) {
      obj.base_assets = message.baseAssets.map(e => e);
    } else {
      obj.base_assets = message.baseAssets;
    }
    obj.weight_breaking_fee_exponent = message.weightBreakingFeeExponent === "" ? undefined : message.weightBreakingFeeExponent;
    obj.weight_breaking_fee_multiplier = message.weightBreakingFeeMultiplier === "" ? undefined : message.weightBreakingFeeMultiplier;
    obj.weight_breaking_fee_portion = message.weightBreakingFeePortion === "" ? undefined : message.weightBreakingFeePortion;
    obj.weight_recovery_fee_portion = message.weightRecoveryFeePortion === "" ? undefined : message.weightRecoveryFeePortion;
    obj.threshold_weight_difference = message.thresholdWeightDifference === "" ? undefined : message.thresholdWeightDifference;
    if (message.allowedPoolCreators) {
      obj.allowed_pool_creators = message.allowedPoolCreators.map(e => e);
    } else {
      obj.allowed_pool_creators = message.allowedPoolCreators;
    }
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
      typeUrl: "/elys.amm.LegacyParams",
      value: LegacyParams.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    poolCreationFee: "",
    slippageTrackDuration: BigInt(0),
    baseAssets: [],
    weightBreakingFeeExponent: "",
    weightBreakingFeeMultiplier: "",
    weightBreakingFeePortion: "",
    weightRecoveryFeePortion: "",
    thresholdWeightDifference: "",
    allowedPoolCreators: [],
    thresholdWeightDifferenceSwapFee: "",
    lpLockupDuration: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/elys.amm.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolCreationFee !== "") {
      writer.uint32(10).string(message.poolCreationFee);
    }
    if (message.slippageTrackDuration !== BigInt(0)) {
      writer.uint32(16).uint64(message.slippageTrackDuration);
    }
    for (const v of message.baseAssets) {
      writer.uint32(26).string(v!);
    }
    if (message.weightBreakingFeeExponent !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.weightBreakingFeeExponent, 18).atomics);
    }
    if (message.weightBreakingFeeMultiplier !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.weightBreakingFeeMultiplier, 18).atomics);
    }
    if (message.weightBreakingFeePortion !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.weightBreakingFeePortion, 18).atomics);
    }
    if (message.weightRecoveryFeePortion !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.weightRecoveryFeePortion, 18).atomics);
    }
    if (message.thresholdWeightDifference !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.thresholdWeightDifference, 18).atomics);
    }
    for (const v of message.allowedPoolCreators) {
      writer.uint32(74).string(v!);
    }
    if (message.thresholdWeightDifferenceSwapFee !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.thresholdWeightDifferenceSwapFee, 18).atomics);
    }
    if (message.lpLockupDuration !== BigInt(0)) {
      writer.uint32(88).uint64(message.lpLockupDuration);
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
          message.poolCreationFee = reader.string();
          break;
        case 2:
          message.slippageTrackDuration = reader.uint64();
          break;
        case 3:
          message.baseAssets.push(reader.string());
          break;
        case 4:
          message.weightBreakingFeeExponent = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.weightBreakingFeeMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.weightBreakingFeePortion = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.weightRecoveryFeePortion = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.thresholdWeightDifference = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.allowedPoolCreators.push(reader.string());
          break;
        case 10:
          message.thresholdWeightDifferenceSwapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.lpLockupDuration = reader.uint64();
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
    message.poolCreationFee = object.poolCreationFee ?? "";
    message.slippageTrackDuration = object.slippageTrackDuration !== undefined && object.slippageTrackDuration !== null ? BigInt(object.slippageTrackDuration.toString()) : BigInt(0);
    message.baseAssets = object.baseAssets?.map(e => e) || [];
    message.weightBreakingFeeExponent = object.weightBreakingFeeExponent ?? "";
    message.weightBreakingFeeMultiplier = object.weightBreakingFeeMultiplier ?? "";
    message.weightBreakingFeePortion = object.weightBreakingFeePortion ?? "";
    message.weightRecoveryFeePortion = object.weightRecoveryFeePortion ?? "";
    message.thresholdWeightDifference = object.thresholdWeightDifference ?? "";
    message.allowedPoolCreators = object.allowedPoolCreators?.map(e => e) || [];
    message.thresholdWeightDifferenceSwapFee = object.thresholdWeightDifferenceSwapFee ?? "";
    message.lpLockupDuration = object.lpLockupDuration !== undefined && object.lpLockupDuration !== null ? BigInt(object.lpLockupDuration.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.pool_creation_fee !== undefined && object.pool_creation_fee !== null) {
      message.poolCreationFee = object.pool_creation_fee;
    }
    if (object.slippage_track_duration !== undefined && object.slippage_track_duration !== null) {
      message.slippageTrackDuration = BigInt(object.slippage_track_duration);
    }
    message.baseAssets = object.base_assets?.map(e => e) || [];
    if (object.weight_breaking_fee_exponent !== undefined && object.weight_breaking_fee_exponent !== null) {
      message.weightBreakingFeeExponent = object.weight_breaking_fee_exponent;
    }
    if (object.weight_breaking_fee_multiplier !== undefined && object.weight_breaking_fee_multiplier !== null) {
      message.weightBreakingFeeMultiplier = object.weight_breaking_fee_multiplier;
    }
    if (object.weight_breaking_fee_portion !== undefined && object.weight_breaking_fee_portion !== null) {
      message.weightBreakingFeePortion = object.weight_breaking_fee_portion;
    }
    if (object.weight_recovery_fee_portion !== undefined && object.weight_recovery_fee_portion !== null) {
      message.weightRecoveryFeePortion = object.weight_recovery_fee_portion;
    }
    if (object.threshold_weight_difference !== undefined && object.threshold_weight_difference !== null) {
      message.thresholdWeightDifference = object.threshold_weight_difference;
    }
    message.allowedPoolCreators = object.allowed_pool_creators?.map(e => e) || [];
    if (object.threshold_weight_difference_swap_fee !== undefined && object.threshold_weight_difference_swap_fee !== null) {
      message.thresholdWeightDifferenceSwapFee = object.threshold_weight_difference_swap_fee;
    }
    if (object.lp_lockup_duration !== undefined && object.lp_lockup_duration !== null) {
      message.lpLockupDuration = BigInt(object.lp_lockup_duration);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.pool_creation_fee = message.poolCreationFee === "" ? undefined : message.poolCreationFee;
    obj.slippage_track_duration = message.slippageTrackDuration !== BigInt(0) ? message.slippageTrackDuration?.toString() : undefined;
    if (message.baseAssets) {
      obj.base_assets = message.baseAssets.map(e => e);
    } else {
      obj.base_assets = message.baseAssets;
    }
    obj.weight_breaking_fee_exponent = message.weightBreakingFeeExponent === "" ? undefined : message.weightBreakingFeeExponent;
    obj.weight_breaking_fee_multiplier = message.weightBreakingFeeMultiplier === "" ? undefined : message.weightBreakingFeeMultiplier;
    obj.weight_breaking_fee_portion = message.weightBreakingFeePortion === "" ? undefined : message.weightBreakingFeePortion;
    obj.weight_recovery_fee_portion = message.weightRecoveryFeePortion === "" ? undefined : message.weightRecoveryFeePortion;
    obj.threshold_weight_difference = message.thresholdWeightDifference === "" ? undefined : message.thresholdWeightDifference;
    if (message.allowedPoolCreators) {
      obj.allowed_pool_creators = message.allowedPoolCreators.map(e => e);
    } else {
      obj.allowed_pool_creators = message.allowedPoolCreators;
    }
    obj.threshold_weight_difference_swap_fee = message.thresholdWeightDifferenceSwapFee === "" ? undefined : message.thresholdWeightDifferenceSwapFee;
    obj.lp_lockup_duration = message.lpLockupDuration !== BigInt(0) ? message.lpLockupDuration?.toString() : undefined;
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
      typeUrl: "/elys.amm.Params",
      value: Params.encode(message).finish()
    };
  }
};