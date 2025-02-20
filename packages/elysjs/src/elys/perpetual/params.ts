//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** Params defines the parameters for the module. */
export interface LegacyParams {
  leverageMax: string;
  borrowInterestRateMax: string;
  borrowInterestRateMin: string;
  borrowInterestRateIncrease: string;
  borrowInterestRateDecrease: string;
  healthGainFactor: string;
  maxOpenPositions: bigint;
  poolOpenThreshold: string;
  borrowInterestPaymentFundPercentage: string;
  borrowInterestPaymentFundAddress: string;
  safetyFactor: string;
  borrowInterestPaymentEnabled: boolean;
  whitelistingEnabled: boolean;
  perpetualSwapFee: string;
  maxLimitOrder: bigint;
  fixedFundingRate: string;
  /**
   * minimum value for take_profit_price/current price for long, should be
   * greater than 1
   */
  minimumLongTakeProfitPriceRatio: string;
  /**
   * max value for take_profit_price/current price for long, should be greater
   * than 1
   */
  maximumLongTakeProfitPriceRatio: string;
  /**
   * max value for take_profit_price/current price for short, should be less
   * than 1
   */
  maximumShortTakeProfitPriceRatio: string;
  /**
   * No need for minimumShortTakeProfitPriceRatio as it will be 0, checked in
   * validate message
   */
  enableTakeProfitCustodyLiabilities: boolean;
  /**
   * We create this and send this value to estimate swap ONLY when opening and
   * closing the position Ideally this value is set to half. When trader open a
   * position if they receive a weight balance bonus (which is half of weight
   * breaking fee, ideally) then while closing position they are charged weight
   * breaking fee. So we just directly apply half weight breaking fee on
   * perpetual swaps Question: does each need to have separate value of this
   * because PoolParams.WeightRecoveryFeePortion can be different Also, if
   * trader has no bonus only fee, then overall we are only applying the fee
   * half time
   */
  weightBreakingFeeFactor: string;
}
export interface LegacyParamsProtoMsg {
  typeUrl: "/elys.perpetual.LegacyParams";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface LegacyParamsAmino {
  leverage_max?: string;
  borrow_interest_rate_max?: string;
  borrow_interest_rate_min?: string;
  borrow_interest_rate_increase?: string;
  borrow_interest_rate_decrease?: string;
  health_gain_factor?: string;
  max_open_positions?: string;
  pool_open_threshold?: string;
  borrow_interest_payment_fund_percentage?: string;
  borrow_interest_payment_fund_address?: string;
  safety_factor?: string;
  borrow_interest_payment_enabled?: boolean;
  whitelisting_enabled?: boolean;
  perpetual_swap_fee?: string;
  max_limit_order?: string;
  fixed_funding_rate?: string;
  /**
   * minimum value for take_profit_price/current price for long, should be
   * greater than 1
   */
  minimum_long_take_profit_price_ratio?: string;
  /**
   * max value for take_profit_price/current price for long, should be greater
   * than 1
   */
  maximum_long_take_profit_price_ratio?: string;
  /**
   * max value for take_profit_price/current price for short, should be less
   * than 1
   */
  maximum_short_take_profit_price_ratio?: string;
  /**
   * No need for minimumShortTakeProfitPriceRatio as it will be 0, checked in
   * validate message
   */
  enable_take_profit_custody_liabilities?: boolean;
  /**
   * We create this and send this value to estimate swap ONLY when opening and
   * closing the position Ideally this value is set to half. When trader open a
   * position if they receive a weight balance bonus (which is half of weight
   * breaking fee, ideally) then while closing position they are charged weight
   * breaking fee. So we just directly apply half weight breaking fee on
   * perpetual swaps Question: does each need to have separate value of this
   * because PoolParams.WeightRecoveryFeePortion can be different Also, if
   * trader has no bonus only fee, then overall we are only applying the fee
   * half time
   */
  weight_breaking_fee_factor?: string;
}
export interface LegacyParamsAminoMsg {
  type: "/elys.perpetual.LegacyParams";
  value: LegacyParamsAmino;
}
/** Params defines the parameters for the module. */
export interface LegacyParamsSDKType {
  leverage_max: string;
  borrow_interest_rate_max: string;
  borrow_interest_rate_min: string;
  borrow_interest_rate_increase: string;
  borrow_interest_rate_decrease: string;
  health_gain_factor: string;
  max_open_positions: bigint;
  pool_open_threshold: string;
  borrow_interest_payment_fund_percentage: string;
  borrow_interest_payment_fund_address: string;
  safety_factor: string;
  borrow_interest_payment_enabled: boolean;
  whitelisting_enabled: boolean;
  perpetual_swap_fee: string;
  max_limit_order: bigint;
  fixed_funding_rate: string;
  minimum_long_take_profit_price_ratio: string;
  maximum_long_take_profit_price_ratio: string;
  maximum_short_take_profit_price_ratio: string;
  enable_take_profit_custody_liabilities: boolean;
  weight_breaking_fee_factor: string;
}
export interface Params {
  leverageMax: string;
  borrowInterestRateMax: string;
  borrowInterestRateMin: string;
  borrowInterestRateIncrease: string;
  borrowInterestRateDecrease: string;
  healthGainFactor: string;
  maxOpenPositions: bigint;
  poolOpenThreshold: string;
  borrowInterestPaymentFundPercentage: string;
  borrowInterestPaymentFundAddress: string;
  safetyFactor: string;
  borrowInterestPaymentEnabled: boolean;
  whitelistingEnabled: boolean;
  perpetualSwapFee: string;
  maxLimitOrder: bigint;
  fixedFundingRate: string;
  /**
   * minimum value for take_profit_price/current price for long, should be
   * greater than 1
   */
  minimumLongTakeProfitPriceRatio: string;
  /**
   * max value for take_profit_price/current price for long, should be greater
   * than 1
   */
  maximumLongTakeProfitPriceRatio: string;
  /**
   * max value for take_profit_price/current price for short, should be less
   * than 1
   */
  maximumShortTakeProfitPriceRatio: string;
  /**
   * No need for minimumShortTakeProfitPriceRatio as it will be 0, checked in
   * validate message
   */
  enableTakeProfitCustodyLiabilities: boolean;
  /**
   * We create this and send this value to estimate swap ONLY when opening and
   * closing the position Ideally this value is set to half. When trader open a
   * position if they receive a weight balance bonus (which is half of weight
   * breaking fee, ideally) then while closing position they are charged weight
   * breaking fee. So we just directly apply half weight breaking fee on
   * perpetual swaps Question: does each need to have separate value of this
   * because PoolParams.WeightRecoveryFeePortion can be different Also, if
   * trader has no bonus only fee, then overall we are only applying the fee
   * half time
   */
  weightBreakingFeeFactor: string;
  enabledPools: bigint[];
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.perpetual.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  leverage_max?: string;
  borrow_interest_rate_max?: string;
  borrow_interest_rate_min?: string;
  borrow_interest_rate_increase?: string;
  borrow_interest_rate_decrease?: string;
  health_gain_factor?: string;
  max_open_positions?: string;
  pool_open_threshold?: string;
  borrow_interest_payment_fund_percentage?: string;
  borrow_interest_payment_fund_address?: string;
  safety_factor?: string;
  borrow_interest_payment_enabled?: boolean;
  whitelisting_enabled?: boolean;
  perpetual_swap_fee?: string;
  max_limit_order?: string;
  fixed_funding_rate?: string;
  /**
   * minimum value for take_profit_price/current price for long, should be
   * greater than 1
   */
  minimum_long_take_profit_price_ratio?: string;
  /**
   * max value for take_profit_price/current price for long, should be greater
   * than 1
   */
  maximum_long_take_profit_price_ratio?: string;
  /**
   * max value for take_profit_price/current price for short, should be less
   * than 1
   */
  maximum_short_take_profit_price_ratio?: string;
  /**
   * No need for minimumShortTakeProfitPriceRatio as it will be 0, checked in
   * validate message
   */
  enable_take_profit_custody_liabilities?: boolean;
  /**
   * We create this and send this value to estimate swap ONLY when opening and
   * closing the position Ideally this value is set to half. When trader open a
   * position if they receive a weight balance bonus (which is half of weight
   * breaking fee, ideally) then while closing position they are charged weight
   * breaking fee. So we just directly apply half weight breaking fee on
   * perpetual swaps Question: does each need to have separate value of this
   * because PoolParams.WeightRecoveryFeePortion can be different Also, if
   * trader has no bonus only fee, then overall we are only applying the fee
   * half time
   */
  weight_breaking_fee_factor?: string;
  enabled_pools?: string[];
}
export interface ParamsAminoMsg {
  type: "/elys.perpetual.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  leverage_max: string;
  borrow_interest_rate_max: string;
  borrow_interest_rate_min: string;
  borrow_interest_rate_increase: string;
  borrow_interest_rate_decrease: string;
  health_gain_factor: string;
  max_open_positions: bigint;
  pool_open_threshold: string;
  borrow_interest_payment_fund_percentage: string;
  borrow_interest_payment_fund_address: string;
  safety_factor: string;
  borrow_interest_payment_enabled: boolean;
  whitelisting_enabled: boolean;
  perpetual_swap_fee: string;
  max_limit_order: bigint;
  fixed_funding_rate: string;
  minimum_long_take_profit_price_ratio: string;
  maximum_long_take_profit_price_ratio: string;
  maximum_short_take_profit_price_ratio: string;
  enable_take_profit_custody_liabilities: boolean;
  weight_breaking_fee_factor: string;
  enabled_pools: bigint[];
}
function createBaseLegacyParams(): LegacyParams {
  return {
    leverageMax: "",
    borrowInterestRateMax: "",
    borrowInterestRateMin: "",
    borrowInterestRateIncrease: "",
    borrowInterestRateDecrease: "",
    healthGainFactor: "",
    maxOpenPositions: BigInt(0),
    poolOpenThreshold: "",
    borrowInterestPaymentFundPercentage: "",
    borrowInterestPaymentFundAddress: "",
    safetyFactor: "",
    borrowInterestPaymentEnabled: false,
    whitelistingEnabled: false,
    perpetualSwapFee: "",
    maxLimitOrder: BigInt(0),
    fixedFundingRate: "",
    minimumLongTakeProfitPriceRatio: "",
    maximumLongTakeProfitPriceRatio: "",
    maximumShortTakeProfitPriceRatio: "",
    enableTakeProfitCustodyLiabilities: false,
    weightBreakingFeeFactor: ""
  };
}
export const LegacyParams = {
  typeUrl: "/elys.perpetual.LegacyParams",
  encode(message: LegacyParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leverageMax !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.leverageMax, 18).atomics);
    }
    if (message.borrowInterestRateMax !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.borrowInterestRateMax, 18).atomics);
    }
    if (message.borrowInterestRateMin !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.borrowInterestRateMin, 18).atomics);
    }
    if (message.borrowInterestRateIncrease !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.borrowInterestRateIncrease, 18).atomics);
    }
    if (message.borrowInterestRateDecrease !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.borrowInterestRateDecrease, 18).atomics);
    }
    if (message.healthGainFactor !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.healthGainFactor, 18).atomics);
    }
    if (message.maxOpenPositions !== BigInt(0)) {
      writer.uint32(56).int64(message.maxOpenPositions);
    }
    if (message.poolOpenThreshold !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.poolOpenThreshold, 18).atomics);
    }
    if (message.borrowInterestPaymentFundPercentage !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.borrowInterestPaymentFundPercentage, 18).atomics);
    }
    if (message.borrowInterestPaymentFundAddress !== "") {
      writer.uint32(82).string(message.borrowInterestPaymentFundAddress);
    }
    if (message.safetyFactor !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.safetyFactor, 18).atomics);
    }
    if (message.borrowInterestPaymentEnabled === true) {
      writer.uint32(96).bool(message.borrowInterestPaymentEnabled);
    }
    if (message.whitelistingEnabled === true) {
      writer.uint32(104).bool(message.whitelistingEnabled);
    }
    if (message.perpetualSwapFee !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.perpetualSwapFee, 18).atomics);
    }
    if (message.maxLimitOrder !== BigInt(0)) {
      writer.uint32(120).int64(message.maxLimitOrder);
    }
    if (message.fixedFundingRate !== "") {
      writer.uint32(130).string(Decimal.fromUserInput(message.fixedFundingRate, 18).atomics);
    }
    if (message.minimumLongTakeProfitPriceRatio !== "") {
      writer.uint32(138).string(Decimal.fromUserInput(message.minimumLongTakeProfitPriceRatio, 18).atomics);
    }
    if (message.maximumLongTakeProfitPriceRatio !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.maximumLongTakeProfitPriceRatio, 18).atomics);
    }
    if (message.maximumShortTakeProfitPriceRatio !== "") {
      writer.uint32(154).string(Decimal.fromUserInput(message.maximumShortTakeProfitPriceRatio, 18).atomics);
    }
    if (message.enableTakeProfitCustodyLiabilities === true) {
      writer.uint32(160).bool(message.enableTakeProfitCustodyLiabilities);
    }
    if (message.weightBreakingFeeFactor !== "") {
      writer.uint32(170).string(Decimal.fromUserInput(message.weightBreakingFeeFactor, 18).atomics);
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
          message.leverageMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.borrowInterestRateMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.borrowInterestRateMin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.borrowInterestRateIncrease = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.borrowInterestRateDecrease = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.healthGainFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.maxOpenPositions = reader.int64();
          break;
        case 8:
          message.poolOpenThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.borrowInterestPaymentFundPercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.borrowInterestPaymentFundAddress = reader.string();
          break;
        case 11:
          message.safetyFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.borrowInterestPaymentEnabled = reader.bool();
          break;
        case 13:
          message.whitelistingEnabled = reader.bool();
          break;
        case 14:
          message.perpetualSwapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.maxLimitOrder = reader.int64();
          break;
        case 16:
          message.fixedFundingRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 17:
          message.minimumLongTakeProfitPriceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 18:
          message.maximumLongTakeProfitPriceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 19:
          message.maximumShortTakeProfitPriceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 20:
          message.enableTakeProfitCustodyLiabilities = reader.bool();
          break;
        case 21:
          message.weightBreakingFeeFactor = Decimal.fromAtomics(reader.string(), 18).toString();
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
    message.leverageMax = object.leverageMax ?? "";
    message.borrowInterestRateMax = object.borrowInterestRateMax ?? "";
    message.borrowInterestRateMin = object.borrowInterestRateMin ?? "";
    message.borrowInterestRateIncrease = object.borrowInterestRateIncrease ?? "";
    message.borrowInterestRateDecrease = object.borrowInterestRateDecrease ?? "";
    message.healthGainFactor = object.healthGainFactor ?? "";
    message.maxOpenPositions = object.maxOpenPositions !== undefined && object.maxOpenPositions !== null ? BigInt(object.maxOpenPositions.toString()) : BigInt(0);
    message.poolOpenThreshold = object.poolOpenThreshold ?? "";
    message.borrowInterestPaymentFundPercentage = object.borrowInterestPaymentFundPercentage ?? "";
    message.borrowInterestPaymentFundAddress = object.borrowInterestPaymentFundAddress ?? "";
    message.safetyFactor = object.safetyFactor ?? "";
    message.borrowInterestPaymentEnabled = object.borrowInterestPaymentEnabled ?? false;
    message.whitelistingEnabled = object.whitelistingEnabled ?? false;
    message.perpetualSwapFee = object.perpetualSwapFee ?? "";
    message.maxLimitOrder = object.maxLimitOrder !== undefined && object.maxLimitOrder !== null ? BigInt(object.maxLimitOrder.toString()) : BigInt(0);
    message.fixedFundingRate = object.fixedFundingRate ?? "";
    message.minimumLongTakeProfitPriceRatio = object.minimumLongTakeProfitPriceRatio ?? "";
    message.maximumLongTakeProfitPriceRatio = object.maximumLongTakeProfitPriceRatio ?? "";
    message.maximumShortTakeProfitPriceRatio = object.maximumShortTakeProfitPriceRatio ?? "";
    message.enableTakeProfitCustodyLiabilities = object.enableTakeProfitCustodyLiabilities ?? false;
    message.weightBreakingFeeFactor = object.weightBreakingFeeFactor ?? "";
    return message;
  },
  fromAmino(object: LegacyParamsAmino): LegacyParams {
    const message = createBaseLegacyParams();
    if (object.leverage_max !== undefined && object.leverage_max !== null) {
      message.leverageMax = object.leverage_max;
    }
    if (object.borrow_interest_rate_max !== undefined && object.borrow_interest_rate_max !== null) {
      message.borrowInterestRateMax = object.borrow_interest_rate_max;
    }
    if (object.borrow_interest_rate_min !== undefined && object.borrow_interest_rate_min !== null) {
      message.borrowInterestRateMin = object.borrow_interest_rate_min;
    }
    if (object.borrow_interest_rate_increase !== undefined && object.borrow_interest_rate_increase !== null) {
      message.borrowInterestRateIncrease = object.borrow_interest_rate_increase;
    }
    if (object.borrow_interest_rate_decrease !== undefined && object.borrow_interest_rate_decrease !== null) {
      message.borrowInterestRateDecrease = object.borrow_interest_rate_decrease;
    }
    if (object.health_gain_factor !== undefined && object.health_gain_factor !== null) {
      message.healthGainFactor = object.health_gain_factor;
    }
    if (object.max_open_positions !== undefined && object.max_open_positions !== null) {
      message.maxOpenPositions = BigInt(object.max_open_positions);
    }
    if (object.pool_open_threshold !== undefined && object.pool_open_threshold !== null) {
      message.poolOpenThreshold = object.pool_open_threshold;
    }
    if (object.borrow_interest_payment_fund_percentage !== undefined && object.borrow_interest_payment_fund_percentage !== null) {
      message.borrowInterestPaymentFundPercentage = object.borrow_interest_payment_fund_percentage;
    }
    if (object.borrow_interest_payment_fund_address !== undefined && object.borrow_interest_payment_fund_address !== null) {
      message.borrowInterestPaymentFundAddress = object.borrow_interest_payment_fund_address;
    }
    if (object.safety_factor !== undefined && object.safety_factor !== null) {
      message.safetyFactor = object.safety_factor;
    }
    if (object.borrow_interest_payment_enabled !== undefined && object.borrow_interest_payment_enabled !== null) {
      message.borrowInterestPaymentEnabled = object.borrow_interest_payment_enabled;
    }
    if (object.whitelisting_enabled !== undefined && object.whitelisting_enabled !== null) {
      message.whitelistingEnabled = object.whitelisting_enabled;
    }
    if (object.perpetual_swap_fee !== undefined && object.perpetual_swap_fee !== null) {
      message.perpetualSwapFee = object.perpetual_swap_fee;
    }
    if (object.max_limit_order !== undefined && object.max_limit_order !== null) {
      message.maxLimitOrder = BigInt(object.max_limit_order);
    }
    if (object.fixed_funding_rate !== undefined && object.fixed_funding_rate !== null) {
      message.fixedFundingRate = object.fixed_funding_rate;
    }
    if (object.minimum_long_take_profit_price_ratio !== undefined && object.minimum_long_take_profit_price_ratio !== null) {
      message.minimumLongTakeProfitPriceRatio = object.minimum_long_take_profit_price_ratio;
    }
    if (object.maximum_long_take_profit_price_ratio !== undefined && object.maximum_long_take_profit_price_ratio !== null) {
      message.maximumLongTakeProfitPriceRatio = object.maximum_long_take_profit_price_ratio;
    }
    if (object.maximum_short_take_profit_price_ratio !== undefined && object.maximum_short_take_profit_price_ratio !== null) {
      message.maximumShortTakeProfitPriceRatio = object.maximum_short_take_profit_price_ratio;
    }
    if (object.enable_take_profit_custody_liabilities !== undefined && object.enable_take_profit_custody_liabilities !== null) {
      message.enableTakeProfitCustodyLiabilities = object.enable_take_profit_custody_liabilities;
    }
    if (object.weight_breaking_fee_factor !== undefined && object.weight_breaking_fee_factor !== null) {
      message.weightBreakingFeeFactor = object.weight_breaking_fee_factor;
    }
    return message;
  },
  toAmino(message: LegacyParams): LegacyParamsAmino {
    const obj: any = {};
    obj.leverage_max = message.leverageMax === "" ? undefined : message.leverageMax;
    obj.borrow_interest_rate_max = message.borrowInterestRateMax === "" ? undefined : message.borrowInterestRateMax;
    obj.borrow_interest_rate_min = message.borrowInterestRateMin === "" ? undefined : message.borrowInterestRateMin;
    obj.borrow_interest_rate_increase = message.borrowInterestRateIncrease === "" ? undefined : message.borrowInterestRateIncrease;
    obj.borrow_interest_rate_decrease = message.borrowInterestRateDecrease === "" ? undefined : message.borrowInterestRateDecrease;
    obj.health_gain_factor = message.healthGainFactor === "" ? undefined : message.healthGainFactor;
    obj.max_open_positions = message.maxOpenPositions !== BigInt(0) ? message.maxOpenPositions?.toString() : undefined;
    obj.pool_open_threshold = message.poolOpenThreshold === "" ? undefined : message.poolOpenThreshold;
    obj.borrow_interest_payment_fund_percentage = message.borrowInterestPaymentFundPercentage === "" ? undefined : message.borrowInterestPaymentFundPercentage;
    obj.borrow_interest_payment_fund_address = message.borrowInterestPaymentFundAddress === "" ? undefined : message.borrowInterestPaymentFundAddress;
    obj.safety_factor = message.safetyFactor === "" ? undefined : message.safetyFactor;
    obj.borrow_interest_payment_enabled = message.borrowInterestPaymentEnabled === false ? undefined : message.borrowInterestPaymentEnabled;
    obj.whitelisting_enabled = message.whitelistingEnabled === false ? undefined : message.whitelistingEnabled;
    obj.perpetual_swap_fee = message.perpetualSwapFee === "" ? undefined : message.perpetualSwapFee;
    obj.max_limit_order = message.maxLimitOrder !== BigInt(0) ? message.maxLimitOrder?.toString() : undefined;
    obj.fixed_funding_rate = message.fixedFundingRate === "" ? undefined : message.fixedFundingRate;
    obj.minimum_long_take_profit_price_ratio = message.minimumLongTakeProfitPriceRatio === "" ? undefined : message.minimumLongTakeProfitPriceRatio;
    obj.maximum_long_take_profit_price_ratio = message.maximumLongTakeProfitPriceRatio === "" ? undefined : message.maximumLongTakeProfitPriceRatio;
    obj.maximum_short_take_profit_price_ratio = message.maximumShortTakeProfitPriceRatio === "" ? undefined : message.maximumShortTakeProfitPriceRatio;
    obj.enable_take_profit_custody_liabilities = message.enableTakeProfitCustodyLiabilities === false ? undefined : message.enableTakeProfitCustodyLiabilities;
    obj.weight_breaking_fee_factor = message.weightBreakingFeeFactor === "" ? undefined : message.weightBreakingFeeFactor;
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
      typeUrl: "/elys.perpetual.LegacyParams",
      value: LegacyParams.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    leverageMax: "",
    borrowInterestRateMax: "",
    borrowInterestRateMin: "",
    borrowInterestRateIncrease: "",
    borrowInterestRateDecrease: "",
    healthGainFactor: "",
    maxOpenPositions: BigInt(0),
    poolOpenThreshold: "",
    borrowInterestPaymentFundPercentage: "",
    borrowInterestPaymentFundAddress: "",
    safetyFactor: "",
    borrowInterestPaymentEnabled: false,
    whitelistingEnabled: false,
    perpetualSwapFee: "",
    maxLimitOrder: BigInt(0),
    fixedFundingRate: "",
    minimumLongTakeProfitPriceRatio: "",
    maximumLongTakeProfitPriceRatio: "",
    maximumShortTakeProfitPriceRatio: "",
    enableTakeProfitCustodyLiabilities: false,
    weightBreakingFeeFactor: "",
    enabledPools: []
  };
}
export const Params = {
  typeUrl: "/elys.perpetual.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leverageMax !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.leverageMax, 18).atomics);
    }
    if (message.borrowInterestRateMax !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.borrowInterestRateMax, 18).atomics);
    }
    if (message.borrowInterestRateMin !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.borrowInterestRateMin, 18).atomics);
    }
    if (message.borrowInterestRateIncrease !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.borrowInterestRateIncrease, 18).atomics);
    }
    if (message.borrowInterestRateDecrease !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.borrowInterestRateDecrease, 18).atomics);
    }
    if (message.healthGainFactor !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.healthGainFactor, 18).atomics);
    }
    if (message.maxOpenPositions !== BigInt(0)) {
      writer.uint32(56).int64(message.maxOpenPositions);
    }
    if (message.poolOpenThreshold !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.poolOpenThreshold, 18).atomics);
    }
    if (message.borrowInterestPaymentFundPercentage !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.borrowInterestPaymentFundPercentage, 18).atomics);
    }
    if (message.borrowInterestPaymentFundAddress !== "") {
      writer.uint32(82).string(message.borrowInterestPaymentFundAddress);
    }
    if (message.safetyFactor !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.safetyFactor, 18).atomics);
    }
    if (message.borrowInterestPaymentEnabled === true) {
      writer.uint32(96).bool(message.borrowInterestPaymentEnabled);
    }
    if (message.whitelistingEnabled === true) {
      writer.uint32(104).bool(message.whitelistingEnabled);
    }
    if (message.perpetualSwapFee !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.perpetualSwapFee, 18).atomics);
    }
    if (message.maxLimitOrder !== BigInt(0)) {
      writer.uint32(120).int64(message.maxLimitOrder);
    }
    if (message.fixedFundingRate !== "") {
      writer.uint32(130).string(Decimal.fromUserInput(message.fixedFundingRate, 18).atomics);
    }
    if (message.minimumLongTakeProfitPriceRatio !== "") {
      writer.uint32(138).string(Decimal.fromUserInput(message.minimumLongTakeProfitPriceRatio, 18).atomics);
    }
    if (message.maximumLongTakeProfitPriceRatio !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.maximumLongTakeProfitPriceRatio, 18).atomics);
    }
    if (message.maximumShortTakeProfitPriceRatio !== "") {
      writer.uint32(154).string(Decimal.fromUserInput(message.maximumShortTakeProfitPriceRatio, 18).atomics);
    }
    if (message.enableTakeProfitCustodyLiabilities === true) {
      writer.uint32(160).bool(message.enableTakeProfitCustodyLiabilities);
    }
    if (message.weightBreakingFeeFactor !== "") {
      writer.uint32(170).string(Decimal.fromUserInput(message.weightBreakingFeeFactor, 18).atomics);
    }
    writer.uint32(178).fork();
    for (const v of message.enabledPools) {
      writer.uint64(v);
    }
    writer.ldelim();
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
          message.leverageMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.borrowInterestRateMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.borrowInterestRateMin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.borrowInterestRateIncrease = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.borrowInterestRateDecrease = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.healthGainFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.maxOpenPositions = reader.int64();
          break;
        case 8:
          message.poolOpenThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.borrowInterestPaymentFundPercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.borrowInterestPaymentFundAddress = reader.string();
          break;
        case 11:
          message.safetyFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.borrowInterestPaymentEnabled = reader.bool();
          break;
        case 13:
          message.whitelistingEnabled = reader.bool();
          break;
        case 14:
          message.perpetualSwapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.maxLimitOrder = reader.int64();
          break;
        case 16:
          message.fixedFundingRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 17:
          message.minimumLongTakeProfitPriceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 18:
          message.maximumLongTakeProfitPriceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 19:
          message.maximumShortTakeProfitPriceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 20:
          message.enableTakeProfitCustodyLiabilities = reader.bool();
          break;
        case 21:
          message.weightBreakingFeeFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 22:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enabledPools.push(reader.uint64());
            }
          } else {
            message.enabledPools.push(reader.uint64());
          }
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
    message.leverageMax = object.leverageMax ?? "";
    message.borrowInterestRateMax = object.borrowInterestRateMax ?? "";
    message.borrowInterestRateMin = object.borrowInterestRateMin ?? "";
    message.borrowInterestRateIncrease = object.borrowInterestRateIncrease ?? "";
    message.borrowInterestRateDecrease = object.borrowInterestRateDecrease ?? "";
    message.healthGainFactor = object.healthGainFactor ?? "";
    message.maxOpenPositions = object.maxOpenPositions !== undefined && object.maxOpenPositions !== null ? BigInt(object.maxOpenPositions.toString()) : BigInt(0);
    message.poolOpenThreshold = object.poolOpenThreshold ?? "";
    message.borrowInterestPaymentFundPercentage = object.borrowInterestPaymentFundPercentage ?? "";
    message.borrowInterestPaymentFundAddress = object.borrowInterestPaymentFundAddress ?? "";
    message.safetyFactor = object.safetyFactor ?? "";
    message.borrowInterestPaymentEnabled = object.borrowInterestPaymentEnabled ?? false;
    message.whitelistingEnabled = object.whitelistingEnabled ?? false;
    message.perpetualSwapFee = object.perpetualSwapFee ?? "";
    message.maxLimitOrder = object.maxLimitOrder !== undefined && object.maxLimitOrder !== null ? BigInt(object.maxLimitOrder.toString()) : BigInt(0);
    message.fixedFundingRate = object.fixedFundingRate ?? "";
    message.minimumLongTakeProfitPriceRatio = object.minimumLongTakeProfitPriceRatio ?? "";
    message.maximumLongTakeProfitPriceRatio = object.maximumLongTakeProfitPriceRatio ?? "";
    message.maximumShortTakeProfitPriceRatio = object.maximumShortTakeProfitPriceRatio ?? "";
    message.enableTakeProfitCustodyLiabilities = object.enableTakeProfitCustodyLiabilities ?? false;
    message.weightBreakingFeeFactor = object.weightBreakingFeeFactor ?? "";
    message.enabledPools = object.enabledPools?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.leverage_max !== undefined && object.leverage_max !== null) {
      message.leverageMax = object.leverage_max;
    }
    if (object.borrow_interest_rate_max !== undefined && object.borrow_interest_rate_max !== null) {
      message.borrowInterestRateMax = object.borrow_interest_rate_max;
    }
    if (object.borrow_interest_rate_min !== undefined && object.borrow_interest_rate_min !== null) {
      message.borrowInterestRateMin = object.borrow_interest_rate_min;
    }
    if (object.borrow_interest_rate_increase !== undefined && object.borrow_interest_rate_increase !== null) {
      message.borrowInterestRateIncrease = object.borrow_interest_rate_increase;
    }
    if (object.borrow_interest_rate_decrease !== undefined && object.borrow_interest_rate_decrease !== null) {
      message.borrowInterestRateDecrease = object.borrow_interest_rate_decrease;
    }
    if (object.health_gain_factor !== undefined && object.health_gain_factor !== null) {
      message.healthGainFactor = object.health_gain_factor;
    }
    if (object.max_open_positions !== undefined && object.max_open_positions !== null) {
      message.maxOpenPositions = BigInt(object.max_open_positions);
    }
    if (object.pool_open_threshold !== undefined && object.pool_open_threshold !== null) {
      message.poolOpenThreshold = object.pool_open_threshold;
    }
    if (object.borrow_interest_payment_fund_percentage !== undefined && object.borrow_interest_payment_fund_percentage !== null) {
      message.borrowInterestPaymentFundPercentage = object.borrow_interest_payment_fund_percentage;
    }
    if (object.borrow_interest_payment_fund_address !== undefined && object.borrow_interest_payment_fund_address !== null) {
      message.borrowInterestPaymentFundAddress = object.borrow_interest_payment_fund_address;
    }
    if (object.safety_factor !== undefined && object.safety_factor !== null) {
      message.safetyFactor = object.safety_factor;
    }
    if (object.borrow_interest_payment_enabled !== undefined && object.borrow_interest_payment_enabled !== null) {
      message.borrowInterestPaymentEnabled = object.borrow_interest_payment_enabled;
    }
    if (object.whitelisting_enabled !== undefined && object.whitelisting_enabled !== null) {
      message.whitelistingEnabled = object.whitelisting_enabled;
    }
    if (object.perpetual_swap_fee !== undefined && object.perpetual_swap_fee !== null) {
      message.perpetualSwapFee = object.perpetual_swap_fee;
    }
    if (object.max_limit_order !== undefined && object.max_limit_order !== null) {
      message.maxLimitOrder = BigInt(object.max_limit_order);
    }
    if (object.fixed_funding_rate !== undefined && object.fixed_funding_rate !== null) {
      message.fixedFundingRate = object.fixed_funding_rate;
    }
    if (object.minimum_long_take_profit_price_ratio !== undefined && object.minimum_long_take_profit_price_ratio !== null) {
      message.minimumLongTakeProfitPriceRatio = object.minimum_long_take_profit_price_ratio;
    }
    if (object.maximum_long_take_profit_price_ratio !== undefined && object.maximum_long_take_profit_price_ratio !== null) {
      message.maximumLongTakeProfitPriceRatio = object.maximum_long_take_profit_price_ratio;
    }
    if (object.maximum_short_take_profit_price_ratio !== undefined && object.maximum_short_take_profit_price_ratio !== null) {
      message.maximumShortTakeProfitPriceRatio = object.maximum_short_take_profit_price_ratio;
    }
    if (object.enable_take_profit_custody_liabilities !== undefined && object.enable_take_profit_custody_liabilities !== null) {
      message.enableTakeProfitCustodyLiabilities = object.enable_take_profit_custody_liabilities;
    }
    if (object.weight_breaking_fee_factor !== undefined && object.weight_breaking_fee_factor !== null) {
      message.weightBreakingFeeFactor = object.weight_breaking_fee_factor;
    }
    message.enabledPools = object.enabled_pools?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.leverage_max = message.leverageMax === "" ? undefined : message.leverageMax;
    obj.borrow_interest_rate_max = message.borrowInterestRateMax === "" ? undefined : message.borrowInterestRateMax;
    obj.borrow_interest_rate_min = message.borrowInterestRateMin === "" ? undefined : message.borrowInterestRateMin;
    obj.borrow_interest_rate_increase = message.borrowInterestRateIncrease === "" ? undefined : message.borrowInterestRateIncrease;
    obj.borrow_interest_rate_decrease = message.borrowInterestRateDecrease === "" ? undefined : message.borrowInterestRateDecrease;
    obj.health_gain_factor = message.healthGainFactor === "" ? undefined : message.healthGainFactor;
    obj.max_open_positions = message.maxOpenPositions !== BigInt(0) ? message.maxOpenPositions?.toString() : undefined;
    obj.pool_open_threshold = message.poolOpenThreshold === "" ? undefined : message.poolOpenThreshold;
    obj.borrow_interest_payment_fund_percentage = message.borrowInterestPaymentFundPercentage === "" ? undefined : message.borrowInterestPaymentFundPercentage;
    obj.borrow_interest_payment_fund_address = message.borrowInterestPaymentFundAddress === "" ? undefined : message.borrowInterestPaymentFundAddress;
    obj.safety_factor = message.safetyFactor === "" ? undefined : message.safetyFactor;
    obj.borrow_interest_payment_enabled = message.borrowInterestPaymentEnabled === false ? undefined : message.borrowInterestPaymentEnabled;
    obj.whitelisting_enabled = message.whitelistingEnabled === false ? undefined : message.whitelistingEnabled;
    obj.perpetual_swap_fee = message.perpetualSwapFee === "" ? undefined : message.perpetualSwapFee;
    obj.max_limit_order = message.maxLimitOrder !== BigInt(0) ? message.maxLimitOrder?.toString() : undefined;
    obj.fixed_funding_rate = message.fixedFundingRate === "" ? undefined : message.fixedFundingRate;
    obj.minimum_long_take_profit_price_ratio = message.minimumLongTakeProfitPriceRatio === "" ? undefined : message.minimumLongTakeProfitPriceRatio;
    obj.maximum_long_take_profit_price_ratio = message.maximumLongTakeProfitPriceRatio === "" ? undefined : message.maximumLongTakeProfitPriceRatio;
    obj.maximum_short_take_profit_price_ratio = message.maximumShortTakeProfitPriceRatio === "" ? undefined : message.maximumShortTakeProfitPriceRatio;
    obj.enable_take_profit_custody_liabilities = message.enableTakeProfitCustodyLiabilities === false ? undefined : message.enableTakeProfitCustodyLiabilities;
    obj.weight_breaking_fee_factor = message.weightBreakingFeeFactor === "" ? undefined : message.weightBreakingFeeFactor;
    if (message.enabledPools) {
      obj.enabled_pools = message.enabledPools.map(e => e.toString());
    } else {
      obj.enabled_pools = message.enabledPools;
    }
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
      typeUrl: "/elys.perpetual.Params",
      value: Params.encode(message).finish()
    };
  }
};