import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** Params defines the parameters for the module. */
export interface Params {
  leverageMax: string;
  removalQueueThreshold: string;
  maxOpenPositions: bigint;
  poolOpenThreshold: string;
  forceCloseFundPercentage: string;
  forceCloseFundAddress: string;
  sqModifier: string;
  safetyFactor: string;
  whitelistingEnabled: boolean;
  invariantCheckEpoch: string;
  epochLength: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.leveragelp.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  leverage_max: string;
  removal_queue_threshold: string;
  max_open_positions: string;
  pool_open_threshold: string;
  force_close_fund_percentage: string;
  force_close_fund_address: string;
  sq_modifier: string;
  safety_factor: string;
  whitelisting_enabled: boolean;
  invariant_check_epoch: string;
  epoch_length: string;
}
export interface ParamsAminoMsg {
  type: "/elys.leveragelp.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  leverage_max: string;
  removal_queue_threshold: string;
  max_open_positions: bigint;
  pool_open_threshold: string;
  force_close_fund_percentage: string;
  force_close_fund_address: string;
  sq_modifier: string;
  safety_factor: string;
  whitelisting_enabled: boolean;
  invariant_check_epoch: string;
  epoch_length: bigint;
}
function createBaseParams(): Params {
  return {
    leverageMax: "",
    removalQueueThreshold: "",
    maxOpenPositions: BigInt(0),
    poolOpenThreshold: "",
    forceCloseFundPercentage: "",
    forceCloseFundAddress: "",
    sqModifier: "",
    safetyFactor: "",
    whitelistingEnabled: false,
    invariantCheckEpoch: "",
    epochLength: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/elys.leveragelp.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leverageMax !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.leverageMax, 18).atomics);
    }
    if (message.removalQueueThreshold !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.removalQueueThreshold, 18).atomics);
    }
    if (message.maxOpenPositions !== BigInt(0)) {
      writer.uint32(24).int64(message.maxOpenPositions);
    }
    if (message.poolOpenThreshold !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.poolOpenThreshold, 18).atomics);
    }
    if (message.forceCloseFundPercentage !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.forceCloseFundPercentage, 18).atomics);
    }
    if (message.forceCloseFundAddress !== "") {
      writer.uint32(50).string(message.forceCloseFundAddress);
    }
    if (message.sqModifier !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.sqModifier, 18).atomics);
    }
    if (message.safetyFactor !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.safetyFactor, 18).atomics);
    }
    if (message.whitelistingEnabled === true) {
      writer.uint32(72).bool(message.whitelistingEnabled);
    }
    if (message.invariantCheckEpoch !== "") {
      writer.uint32(82).string(message.invariantCheckEpoch);
    }
    if (message.epochLength !== BigInt(0)) {
      writer.uint32(88).int64(message.epochLength);
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
          message.removalQueueThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.maxOpenPositions = reader.int64();
          break;
        case 4:
          message.poolOpenThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.forceCloseFundPercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.forceCloseFundAddress = reader.string();
          break;
        case 7:
          message.sqModifier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.safetyFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.whitelistingEnabled = reader.bool();
          break;
        case 10:
          message.invariantCheckEpoch = reader.string();
          break;
        case 11:
          message.epochLength = reader.int64();
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
    message.removalQueueThreshold = object.removalQueueThreshold ?? "";
    message.maxOpenPositions = object.maxOpenPositions !== undefined && object.maxOpenPositions !== null ? BigInt(object.maxOpenPositions.toString()) : BigInt(0);
    message.poolOpenThreshold = object.poolOpenThreshold ?? "";
    message.forceCloseFundPercentage = object.forceCloseFundPercentage ?? "";
    message.forceCloseFundAddress = object.forceCloseFundAddress ?? "";
    message.sqModifier = object.sqModifier ?? "";
    message.safetyFactor = object.safetyFactor ?? "";
    message.whitelistingEnabled = object.whitelistingEnabled ?? false;
    message.invariantCheckEpoch = object.invariantCheckEpoch ?? "";
    message.epochLength = object.epochLength !== undefined && object.epochLength !== null ? BigInt(object.epochLength.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      leverageMax: object.leverage_max,
      removalQueueThreshold: object.removal_queue_threshold,
      maxOpenPositions: BigInt(object.max_open_positions),
      poolOpenThreshold: object.pool_open_threshold,
      forceCloseFundPercentage: object.force_close_fund_percentage,
      forceCloseFundAddress: object.force_close_fund_address,
      sqModifier: object.sq_modifier,
      safetyFactor: object.safety_factor,
      whitelistingEnabled: object.whitelisting_enabled,
      invariantCheckEpoch: object.invariant_check_epoch,
      epochLength: BigInt(object.epoch_length)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.leverage_max = message.leverageMax;
    obj.removal_queue_threshold = message.removalQueueThreshold;
    obj.max_open_positions = message.maxOpenPositions ? message.maxOpenPositions.toString() : undefined;
    obj.pool_open_threshold = message.poolOpenThreshold;
    obj.force_close_fund_percentage = message.forceCloseFundPercentage;
    obj.force_close_fund_address = message.forceCloseFundAddress;
    obj.sq_modifier = message.sqModifier;
    obj.safety_factor = message.safetyFactor;
    obj.whitelisting_enabled = message.whitelistingEnabled;
    obj.invariant_check_epoch = message.invariantCheckEpoch;
    obj.epoch_length = message.epochLength ? message.epochLength.toString() : undefined;
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
      typeUrl: "/elys.leveragelp.Params",
      value: Params.encode(message).finish()
    };
  }
};