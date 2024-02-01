import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** Params defines the parameters for the module. */
export interface Params {
  leverageMax: string;
  borrowInterestRateMax: string;
  borrowInterestRateMin: string;
  borrowInterestRateIncrease: string;
  borrowInterestRateDecrease: string;
  healthGainFactor: string;
  epochLength: bigint;
  maxOpenPositions: bigint;
  poolOpenThreshold: string;
  forceCloseFundPercentage: string;
  forceCloseFundAddress: string;
  incrementalBorrowInterestPaymentFundPercentage: string;
  incrementalBorrowInterestPaymentFundAddress: string;
  safetyFactor: string;
  incrementalBorrowInterestPaymentEnabled: boolean;
  whitelistingEnabled: boolean;
  invariantCheckEpoch: string;
  takeProfitBorrowInterestRateMin: string;
  fundingFeeBaseRate: string;
  fundingFeeMaxRate: string;
  fundingFeeMinRate: string;
  fundingFeeCollectionAddress: string;
  swapFee: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.perpetual.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  leverage_max: string;
  borrow_interest_rate_max: string;
  borrow_interest_rate_min: string;
  borrow_interest_rate_increase: string;
  borrow_interest_rate_decrease: string;
  health_gain_factor: string;
  epoch_length: string;
  max_open_positions: string;
  pool_open_threshold: string;
  force_close_fund_percentage: string;
  force_close_fund_address: string;
  incremental_borrow_interest_payment_fund_percentage: string;
  incremental_borrow_interest_payment_fund_address: string;
  safety_factor: string;
  incremental_borrow_interest_payment_enabled: boolean;
  whitelisting_enabled: boolean;
  invariant_check_epoch: string;
  take_profit_borrow_interest_rate_min: string;
  funding_fee_base_rate: string;
  funding_fee_max_rate: string;
  funding_fee_min_rate: string;
  funding_fee_collection_address: string;
  swap_fee: string;
}
export interface ParamsAminoMsg {
  type: "/elys.perpetual.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  leverage_max: string;
  borrow_interest_rate_max: string;
  borrow_interest_rate_min: string;
  borrow_interest_rate_increase: string;
  borrow_interest_rate_decrease: string;
  health_gain_factor: string;
  epoch_length: bigint;
  max_open_positions: bigint;
  pool_open_threshold: string;
  force_close_fund_percentage: string;
  force_close_fund_address: string;
  incremental_borrow_interest_payment_fund_percentage: string;
  incremental_borrow_interest_payment_fund_address: string;
  safety_factor: string;
  incremental_borrow_interest_payment_enabled: boolean;
  whitelisting_enabled: boolean;
  invariant_check_epoch: string;
  take_profit_borrow_interest_rate_min: string;
  funding_fee_base_rate: string;
  funding_fee_max_rate: string;
  funding_fee_min_rate: string;
  funding_fee_collection_address: string;
  swap_fee: string;
}
function createBaseParams(): Params {
  return {
    leverageMax: "",
    borrowInterestRateMax: "",
    borrowInterestRateMin: "",
    borrowInterestRateIncrease: "",
    borrowInterestRateDecrease: "",
    healthGainFactor: "",
    epochLength: BigInt(0),
    maxOpenPositions: BigInt(0),
    poolOpenThreshold: "",
    forceCloseFundPercentage: "",
    forceCloseFundAddress: "",
    incrementalBorrowInterestPaymentFundPercentage: "",
    incrementalBorrowInterestPaymentFundAddress: "",
    safetyFactor: "",
    incrementalBorrowInterestPaymentEnabled: false,
    whitelistingEnabled: false,
    invariantCheckEpoch: "",
    takeProfitBorrowInterestRateMin: "",
    fundingFeeBaseRate: "",
    fundingFeeMaxRate: "",
    fundingFeeMinRate: "",
    fundingFeeCollectionAddress: "",
    swapFee: ""
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
    if (message.epochLength !== BigInt(0)) {
      writer.uint32(56).int64(message.epochLength);
    }
    if (message.maxOpenPositions !== BigInt(0)) {
      writer.uint32(64).int64(message.maxOpenPositions);
    }
    if (message.poolOpenThreshold !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.poolOpenThreshold, 18).atomics);
    }
    if (message.forceCloseFundPercentage !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.forceCloseFundPercentage, 18).atomics);
    }
    if (message.forceCloseFundAddress !== "") {
      writer.uint32(90).string(message.forceCloseFundAddress);
    }
    if (message.incrementalBorrowInterestPaymentFundPercentage !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.incrementalBorrowInterestPaymentFundPercentage, 18).atomics);
    }
    if (message.incrementalBorrowInterestPaymentFundAddress !== "") {
      writer.uint32(106).string(message.incrementalBorrowInterestPaymentFundAddress);
    }
    if (message.safetyFactor !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.safetyFactor, 18).atomics);
    }
    if (message.incrementalBorrowInterestPaymentEnabled === true) {
      writer.uint32(120).bool(message.incrementalBorrowInterestPaymentEnabled);
    }
    if (message.whitelistingEnabled === true) {
      writer.uint32(128).bool(message.whitelistingEnabled);
    }
    if (message.invariantCheckEpoch !== "") {
      writer.uint32(138).string(message.invariantCheckEpoch);
    }
    if (message.takeProfitBorrowInterestRateMin !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.takeProfitBorrowInterestRateMin, 18).atomics);
    }
    if (message.fundingFeeBaseRate !== "") {
      writer.uint32(154).string(Decimal.fromUserInput(message.fundingFeeBaseRate, 18).atomics);
    }
    if (message.fundingFeeMaxRate !== "") {
      writer.uint32(162).string(Decimal.fromUserInput(message.fundingFeeMaxRate, 18).atomics);
    }
    if (message.fundingFeeMinRate !== "") {
      writer.uint32(170).string(Decimal.fromUserInput(message.fundingFeeMinRate, 18).atomics);
    }
    if (message.fundingFeeCollectionAddress !== "") {
      writer.uint32(178).string(message.fundingFeeCollectionAddress);
    }
    if (message.swapFee !== "") {
      writer.uint32(186).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
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
          message.epochLength = reader.int64();
          break;
        case 8:
          message.maxOpenPositions = reader.int64();
          break;
        case 9:
          message.poolOpenThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.forceCloseFundPercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.forceCloseFundAddress = reader.string();
          break;
        case 12:
          message.incrementalBorrowInterestPaymentFundPercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.incrementalBorrowInterestPaymentFundAddress = reader.string();
          break;
        case 14:
          message.safetyFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.incrementalBorrowInterestPaymentEnabled = reader.bool();
          break;
        case 16:
          message.whitelistingEnabled = reader.bool();
          break;
        case 17:
          message.invariantCheckEpoch = reader.string();
          break;
        case 18:
          message.takeProfitBorrowInterestRateMin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 19:
          message.fundingFeeBaseRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 20:
          message.fundingFeeMaxRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 21:
          message.fundingFeeMinRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 22:
          message.fundingFeeCollectionAddress = reader.string();
          break;
        case 23:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
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
    message.epochLength = object.epochLength !== undefined && object.epochLength !== null ? BigInt(object.epochLength.toString()) : BigInt(0);
    message.maxOpenPositions = object.maxOpenPositions !== undefined && object.maxOpenPositions !== null ? BigInt(object.maxOpenPositions.toString()) : BigInt(0);
    message.poolOpenThreshold = object.poolOpenThreshold ?? "";
    message.forceCloseFundPercentage = object.forceCloseFundPercentage ?? "";
    message.forceCloseFundAddress = object.forceCloseFundAddress ?? "";
    message.incrementalBorrowInterestPaymentFundPercentage = object.incrementalBorrowInterestPaymentFundPercentage ?? "";
    message.incrementalBorrowInterestPaymentFundAddress = object.incrementalBorrowInterestPaymentFundAddress ?? "";
    message.safetyFactor = object.safetyFactor ?? "";
    message.incrementalBorrowInterestPaymentEnabled = object.incrementalBorrowInterestPaymentEnabled ?? false;
    message.whitelistingEnabled = object.whitelistingEnabled ?? false;
    message.invariantCheckEpoch = object.invariantCheckEpoch ?? "";
    message.takeProfitBorrowInterestRateMin = object.takeProfitBorrowInterestRateMin ?? "";
    message.fundingFeeBaseRate = object.fundingFeeBaseRate ?? "";
    message.fundingFeeMaxRate = object.fundingFeeMaxRate ?? "";
    message.fundingFeeMinRate = object.fundingFeeMinRate ?? "";
    message.fundingFeeCollectionAddress = object.fundingFeeCollectionAddress ?? "";
    message.swapFee = object.swapFee ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      leverageMax: object.leverage_max,
      borrowInterestRateMax: object.borrow_interest_rate_max,
      borrowInterestRateMin: object.borrow_interest_rate_min,
      borrowInterestRateIncrease: object.borrow_interest_rate_increase,
      borrowInterestRateDecrease: object.borrow_interest_rate_decrease,
      healthGainFactor: object.health_gain_factor,
      epochLength: BigInt(object.epoch_length),
      maxOpenPositions: BigInt(object.max_open_positions),
      poolOpenThreshold: object.pool_open_threshold,
      forceCloseFundPercentage: object.force_close_fund_percentage,
      forceCloseFundAddress: object.force_close_fund_address,
      incrementalBorrowInterestPaymentFundPercentage: object.incremental_borrow_interest_payment_fund_percentage,
      incrementalBorrowInterestPaymentFundAddress: object.incremental_borrow_interest_payment_fund_address,
      safetyFactor: object.safety_factor,
      incrementalBorrowInterestPaymentEnabled: object.incremental_borrow_interest_payment_enabled,
      whitelistingEnabled: object.whitelisting_enabled,
      invariantCheckEpoch: object.invariant_check_epoch,
      takeProfitBorrowInterestRateMin: object.take_profit_borrow_interest_rate_min,
      fundingFeeBaseRate: object.funding_fee_base_rate,
      fundingFeeMaxRate: object.funding_fee_max_rate,
      fundingFeeMinRate: object.funding_fee_min_rate,
      fundingFeeCollectionAddress: object.funding_fee_collection_address,
      swapFee: object.swap_fee
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.leverage_max = message.leverageMax;
    obj.borrow_interest_rate_max = message.borrowInterestRateMax;
    obj.borrow_interest_rate_min = message.borrowInterestRateMin;
    obj.borrow_interest_rate_increase = message.borrowInterestRateIncrease;
    obj.borrow_interest_rate_decrease = message.borrowInterestRateDecrease;
    obj.health_gain_factor = message.healthGainFactor;
    obj.epoch_length = message.epochLength ? message.epochLength.toString() : undefined;
    obj.max_open_positions = message.maxOpenPositions ? message.maxOpenPositions.toString() : undefined;
    obj.pool_open_threshold = message.poolOpenThreshold;
    obj.force_close_fund_percentage = message.forceCloseFundPercentage;
    obj.force_close_fund_address = message.forceCloseFundAddress;
    obj.incremental_borrow_interest_payment_fund_percentage = message.incrementalBorrowInterestPaymentFundPercentage;
    obj.incremental_borrow_interest_payment_fund_address = message.incrementalBorrowInterestPaymentFundAddress;
    obj.safety_factor = message.safetyFactor;
    obj.incremental_borrow_interest_payment_enabled = message.incrementalBorrowInterestPaymentEnabled;
    obj.whitelisting_enabled = message.whitelistingEnabled;
    obj.invariant_check_epoch = message.invariantCheckEpoch;
    obj.take_profit_borrow_interest_rate_min = message.takeProfitBorrowInterestRateMin;
    obj.funding_fee_base_rate = message.fundingFeeBaseRate;
    obj.funding_fee_max_rate = message.fundingFeeMaxRate;
    obj.funding_fee_min_rate = message.fundingFeeMinRate;
    obj.funding_fee_collection_address = message.fundingFeeCollectionAddress;
    obj.swap_fee = message.swapFee;
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