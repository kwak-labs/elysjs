//@ts-nocheck
import { InflationEntry, InflationEntryAmino, InflationEntrySDKType } from "./inflation_entry";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface TimeBasedInflation {
  startBlockHeight: bigint;
  endBlockHeight: bigint;
  description: string;
  inflation?: InflationEntry;
  authority: string;
}
export interface TimeBasedInflationProtoMsg {
  typeUrl: "/elys.tokenomics.TimeBasedInflation";
  value: Uint8Array;
}
export interface TimeBasedInflationAmino {
  start_block_height?: string;
  end_block_height?: string;
  description?: string;
  inflation?: InflationEntryAmino;
  authority?: string;
}
export interface TimeBasedInflationAminoMsg {
  type: "/elys.tokenomics.TimeBasedInflation";
  value: TimeBasedInflationAmino;
}
export interface TimeBasedInflationSDKType {
  start_block_height: bigint;
  end_block_height: bigint;
  description: string;
  inflation?: InflationEntrySDKType;
  authority: string;
}
function createBaseTimeBasedInflation(): TimeBasedInflation {
  return {
    startBlockHeight: BigInt(0),
    endBlockHeight: BigInt(0),
    description: "",
    inflation: undefined,
    authority: ""
  };
}
export const TimeBasedInflation = {
  typeUrl: "/elys.tokenomics.TimeBasedInflation",
  encode(message: TimeBasedInflation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startBlockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.startBlockHeight);
    }
    if (message.endBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.endBlockHeight);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.inflation !== undefined) {
      InflationEntry.encode(message.inflation, writer.uint32(34).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(42).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TimeBasedInflation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeBasedInflation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startBlockHeight = reader.uint64();
          break;
        case 2:
          message.endBlockHeight = reader.uint64();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.inflation = InflationEntry.decode(reader, reader.uint32());
          break;
        case 5:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TimeBasedInflation>): TimeBasedInflation {
    const message = createBaseTimeBasedInflation();
    message.startBlockHeight = object.startBlockHeight !== undefined && object.startBlockHeight !== null ? BigInt(object.startBlockHeight.toString()) : BigInt(0);
    message.endBlockHeight = object.endBlockHeight !== undefined && object.endBlockHeight !== null ? BigInt(object.endBlockHeight.toString()) : BigInt(0);
    message.description = object.description ?? "";
    message.inflation = object.inflation !== undefined && object.inflation !== null ? InflationEntry.fromPartial(object.inflation) : undefined;
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: TimeBasedInflationAmino): TimeBasedInflation {
    const message = createBaseTimeBasedInflation();
    if (object.start_block_height !== undefined && object.start_block_height !== null) {
      message.startBlockHeight = BigInt(object.start_block_height);
    }
    if (object.end_block_height !== undefined && object.end_block_height !== null) {
      message.endBlockHeight = BigInt(object.end_block_height);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.inflation !== undefined && object.inflation !== null) {
      message.inflation = InflationEntry.fromAmino(object.inflation);
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: TimeBasedInflation): TimeBasedInflationAmino {
    const obj: any = {};
    obj.start_block_height = message.startBlockHeight !== BigInt(0) ? message.startBlockHeight?.toString() : undefined;
    obj.end_block_height = message.endBlockHeight !== BigInt(0) ? message.endBlockHeight?.toString() : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    obj.inflation = message.inflation ? InflationEntry.toAmino(message.inflation) : undefined;
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: TimeBasedInflationAminoMsg): TimeBasedInflation {
    return TimeBasedInflation.fromAmino(object.value);
  },
  fromProtoMsg(message: TimeBasedInflationProtoMsg): TimeBasedInflation {
    return TimeBasedInflation.decode(message.value);
  },
  toProto(message: TimeBasedInflation): Uint8Array {
    return TimeBasedInflation.encode(message).finish();
  },
  toProtoMsg(message: TimeBasedInflation): TimeBasedInflationProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.TimeBasedInflation",
      value: TimeBasedInflation.encode(message).finish()
    };
  }
};