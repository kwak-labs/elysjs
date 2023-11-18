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
  removalQueueThreshold: string;
  maxOpenPositions: bigint;
  poolOpenThreshold: string;
  forceCloseFundPercentage: string;
  forceCloseFundAddress: string;
  incrementalBorrowInterestPaymentFundPercentage: string;
  incrementalBorrowInterestPaymentFundAddress: string;
  sqModifier: string;
  safetyFactor: string;
  incrementalBorrowInterestPaymentEnabled: boolean;
  whitelistingEnabled: boolean;
  invariantCheckEpoch: string;
  brokerAddress: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.margin.Params";
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
  removal_queue_threshold: string;
  max_open_positions: string;
  pool_open_threshold: string;
  force_close_fund_percentage: string;
  force_close_fund_address: string;
  incremental_borrow_interest_payment_fund_percentage: string;
  incremental_borrow_interest_payment_fund_address: string;
  sq_modifier: string;
  safety_factor: string;
  incremental_borrow_interest_payment_enabled: boolean;
  whitelisting_enabled: boolean;
  invariant_check_epoch: string;
  broker_address: string;
}
export interface ParamsAminoMsg {
  type: "/elys.margin.Params";
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
  removal_queue_threshold: string;
  max_open_positions: bigint;
  pool_open_threshold: string;
  force_close_fund_percentage: string;
  force_close_fund_address: string;
  incremental_borrow_interest_payment_fund_percentage: string;
  incremental_borrow_interest_payment_fund_address: string;
  sq_modifier: string;
  safety_factor: string;
  incremental_borrow_interest_payment_enabled: boolean;
  whitelisting_enabled: boolean;
  invariant_check_epoch: string;
  broker_address: string;
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
    removalQueueThreshold: "",
    maxOpenPositions: BigInt(0),
    poolOpenThreshold: "",
    forceCloseFundPercentage: "",
    forceCloseFundAddress: "",
    incrementalBorrowInterestPaymentFundPercentage: "",
    incrementalBorrowInterestPaymentFundAddress: "",
    sqModifier: "",
    safetyFactor: "",
    incrementalBorrowInterestPaymentEnabled: false,
    whitelistingEnabled: false,
    invariantCheckEpoch: "",
    brokerAddress: ""
  };
}
export const Params = {
  typeUrl: "/elys.margin.Params",
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
    if (message.removalQueueThreshold !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.removalQueueThreshold, 18).atomics);
    }
    if (message.maxOpenPositions !== BigInt(0)) {
      writer.uint32(72).int64(message.maxOpenPositions);
    }
    if (message.poolOpenThreshold !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.poolOpenThreshold, 18).atomics);
    }
    if (message.forceCloseFundPercentage !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.forceCloseFundPercentage, 18).atomics);
    }
    if (message.forceCloseFundAddress !== "") {
      writer.uint32(98).string(message.forceCloseFundAddress);
    }
    if (message.incrementalBorrowInterestPaymentFundPercentage !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.incrementalBorrowInterestPaymentFundPercentage, 18).atomics);
    }
    if (message.incrementalBorrowInterestPaymentFundAddress !== "") {
      writer.uint32(114).string(message.incrementalBorrowInterestPaymentFundAddress);
    }
    if (message.sqModifier !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.sqModifier, 18).atomics);
    }
    if (message.safetyFactor !== "") {
      writer.uint32(130).string(Decimal.fromUserInput(message.safetyFactor, 18).atomics);
    }
    if (message.incrementalBorrowInterestPaymentEnabled === true) {
      writer.uint32(136).bool(message.incrementalBorrowInterestPaymentEnabled);
    }
    if (message.whitelistingEnabled === true) {
      writer.uint32(144).bool(message.whitelistingEnabled);
    }
    if (message.invariantCheckEpoch !== "") {
      writer.uint32(154).string(message.invariantCheckEpoch);
    }
    if (message.brokerAddress !== "") {
      writer.uint32(162).string(message.brokerAddress);
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
          message.removalQueueThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.maxOpenPositions = reader.int64();
          break;
        case 10:
          message.poolOpenThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.forceCloseFundPercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.forceCloseFundAddress = reader.string();
          break;
        case 13:
          message.incrementalBorrowInterestPaymentFundPercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.incrementalBorrowInterestPaymentFundAddress = reader.string();
          break;
        case 15:
          message.sqModifier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 16:
          message.safetyFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 17:
          message.incrementalBorrowInterestPaymentEnabled = reader.bool();
          break;
        case 18:
          message.whitelistingEnabled = reader.bool();
          break;
        case 19:
          message.invariantCheckEpoch = reader.string();
          break;
        case 20:
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
    message.leverageMax = object.leverageMax ?? "";
    message.borrowInterestRateMax = object.borrowInterestRateMax ?? "";
    message.borrowInterestRateMin = object.borrowInterestRateMin ?? "";
    message.borrowInterestRateIncrease = object.borrowInterestRateIncrease ?? "";
    message.borrowInterestRateDecrease = object.borrowInterestRateDecrease ?? "";
    message.healthGainFactor = object.healthGainFactor ?? "";
    message.epochLength = object.epochLength !== undefined && object.epochLength !== null ? BigInt(object.epochLength.toString()) : BigInt(0);
    message.removalQueueThreshold = object.removalQueueThreshold ?? "";
    message.maxOpenPositions = object.maxOpenPositions !== undefined && object.maxOpenPositions !== null ? BigInt(object.maxOpenPositions.toString()) : BigInt(0);
    message.poolOpenThreshold = object.poolOpenThreshold ?? "";
    message.forceCloseFundPercentage = object.forceCloseFundPercentage ?? "";
    message.forceCloseFundAddress = object.forceCloseFundAddress ?? "";
    message.incrementalBorrowInterestPaymentFundPercentage = object.incrementalBorrowInterestPaymentFundPercentage ?? "";
    message.incrementalBorrowInterestPaymentFundAddress = object.incrementalBorrowInterestPaymentFundAddress ?? "";
    message.sqModifier = object.sqModifier ?? "";
    message.safetyFactor = object.safetyFactor ?? "";
    message.incrementalBorrowInterestPaymentEnabled = object.incrementalBorrowInterestPaymentEnabled ?? false;
    message.whitelistingEnabled = object.whitelistingEnabled ?? false;
    message.invariantCheckEpoch = object.invariantCheckEpoch ?? "";
    message.brokerAddress = object.brokerAddress ?? "";
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
      removalQueueThreshold: object.removal_queue_threshold,
      maxOpenPositions: BigInt(object.max_open_positions),
      poolOpenThreshold: object.pool_open_threshold,
      forceCloseFundPercentage: object.force_close_fund_percentage,
      forceCloseFundAddress: object.force_close_fund_address,
      incrementalBorrowInterestPaymentFundPercentage: object.incremental_borrow_interest_payment_fund_percentage,
      incrementalBorrowInterestPaymentFundAddress: object.incremental_borrow_interest_payment_fund_address,
      sqModifier: object.sq_modifier,
      safetyFactor: object.safety_factor,
      incrementalBorrowInterestPaymentEnabled: object.incremental_borrow_interest_payment_enabled,
      whitelistingEnabled: object.whitelisting_enabled,
      invariantCheckEpoch: object.invariant_check_epoch,
      brokerAddress: object.broker_address
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
    obj.removal_queue_threshold = message.removalQueueThreshold;
    obj.max_open_positions = message.maxOpenPositions ? message.maxOpenPositions.toString() : undefined;
    obj.pool_open_threshold = message.poolOpenThreshold;
    obj.force_close_fund_percentage = message.forceCloseFundPercentage;
    obj.force_close_fund_address = message.forceCloseFundAddress;
    obj.incremental_borrow_interest_payment_fund_percentage = message.incrementalBorrowInterestPaymentFundPercentage;
    obj.incremental_borrow_interest_payment_fund_address = message.incrementalBorrowInterestPaymentFundAddress;
    obj.sq_modifier = message.sqModifier;
    obj.safety_factor = message.safetyFactor;
    obj.incremental_borrow_interest_payment_enabled = message.incrementalBorrowInterestPaymentEnabled;
    obj.whitelisting_enabled = message.whitelistingEnabled;
    obj.invariant_check_epoch = message.invariantCheckEpoch;
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
      typeUrl: "/elys.margin.Params",
      value: Params.encode(message).finish()
    };
  }
};