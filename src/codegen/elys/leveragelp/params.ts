import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** Params defines the parameters for the module. */
export interface Params {
  leverageMax: string;
  maxOpenPositions: bigint;
  poolOpenThreshold: string;
  safetyFactor: string;
  whitelistingEnabled: boolean;
  epochLength: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.leveragelp.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  leverage_max: string;
  max_open_positions: string;
  pool_open_threshold: string;
  safety_factor: string;
  whitelisting_enabled: boolean;
  epoch_length: string;
}
export interface ParamsAminoMsg {
  type: "/elys.leveragelp.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  leverage_max: string;
  max_open_positions: bigint;
  pool_open_threshold: string;
  safety_factor: string;
  whitelisting_enabled: boolean;
  epoch_length: bigint;
}
function createBaseParams(): Params {
  return {
    leverageMax: "",
    maxOpenPositions: BigInt(0),
    poolOpenThreshold: "",
    safetyFactor: "",
    whitelistingEnabled: false,
    epochLength: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/elys.leveragelp.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leverageMax !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.leverageMax, 18).atomics);
    }
    if (message.maxOpenPositions !== BigInt(0)) {
      writer.uint32(16).int64(message.maxOpenPositions);
    }
    if (message.poolOpenThreshold !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.poolOpenThreshold, 18).atomics);
    }
    if (message.safetyFactor !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.safetyFactor, 18).atomics);
    }
    if (message.whitelistingEnabled === true) {
      writer.uint32(40).bool(message.whitelistingEnabled);
    }
    if (message.epochLength !== BigInt(0)) {
      writer.uint32(48).int64(message.epochLength);
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
          message.maxOpenPositions = reader.int64();
          break;
        case 3:
          message.poolOpenThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.safetyFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.whitelistingEnabled = reader.bool();
          break;
        case 6:
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
    message.maxOpenPositions = object.maxOpenPositions !== undefined && object.maxOpenPositions !== null ? BigInt(object.maxOpenPositions.toString()) : BigInt(0);
    message.poolOpenThreshold = object.poolOpenThreshold ?? "";
    message.safetyFactor = object.safetyFactor ?? "";
    message.whitelistingEnabled = object.whitelistingEnabled ?? false;
    message.epochLength = object.epochLength !== undefined && object.epochLength !== null ? BigInt(object.epochLength.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      leverageMax: object.leverage_max,
      maxOpenPositions: BigInt(object.max_open_positions),
      poolOpenThreshold: object.pool_open_threshold,
      safetyFactor: object.safety_factor,
      whitelistingEnabled: object.whitelisting_enabled,
      epochLength: BigInt(object.epoch_length)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.leverage_max = message.leverageMax;
    obj.max_open_positions = message.maxOpenPositions ? message.maxOpenPositions.toString() : undefined;
    obj.pool_open_threshold = message.poolOpenThreshold;
    obj.safety_factor = message.safetyFactor;
    obj.whitelisting_enabled = message.whitelistingEnabled;
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