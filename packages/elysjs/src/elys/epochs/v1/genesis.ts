//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
/**
 * EpochInfo defines the message interface containing the relevant informations
 * about an epoch.
 */
export interface EpochInfo {
  /** identifier of the epoch */
  identifier: string;
  /** start_time of the epoch */
  startTime: Date;
  /** duration of the epoch */
  duration: Duration;
  /** current_epoch is the integer identifier of the epoch */
  currentEpoch: bigint;
  /** current_epoch_start_time defines the timestamp of the start of the epoch */
  currentEpochStartTime: Date;
  /** epoch_counting_started reflects if the counting for the epoch has started */
  epochCountingStarted: boolean;
  /** current_epoch_start_height of the epoch */
  currentEpochStartHeight: bigint;
}
export interface EpochInfoProtoMsg {
  typeUrl: "/elys.epochs.v1.EpochInfo";
  value: Uint8Array;
}
/**
 * EpochInfo defines the message interface containing the relevant informations
 * about an epoch.
 */
export interface EpochInfoAmino {
  /** identifier of the epoch */
  identifier?: string;
  /** start_time of the epoch */
  start_time?: string;
  /** duration of the epoch */
  duration?: DurationAmino;
  /** current_epoch is the integer identifier of the epoch */
  current_epoch?: string;
  /** current_epoch_start_time defines the timestamp of the start of the epoch */
  current_epoch_start_time?: string;
  /** epoch_counting_started reflects if the counting for the epoch has started */
  epoch_counting_started?: boolean;
  /** current_epoch_start_height of the epoch */
  current_epoch_start_height?: string;
}
export interface EpochInfoAminoMsg {
  type: "/elys.epochs.v1.EpochInfo";
  value: EpochInfoAmino;
}
/**
 * EpochInfo defines the message interface containing the relevant informations
 * about an epoch.
 */
export interface EpochInfoSDKType {
  identifier: string;
  start_time: Date;
  duration: DurationSDKType;
  current_epoch: bigint;
  current_epoch_start_time: Date;
  epoch_counting_started: boolean;
  current_epoch_start_height: bigint;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
  /** epochs is a slice of EpochInfo that defines the epochs in the genesis state */
  epochs: EpochInfo[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.epochs.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateAmino {
  /** epochs is a slice of EpochInfo that defines the epochs in the genesis state */
  epochs?: EpochInfoAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/elys.epochs.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
  epochs: EpochInfoSDKType[];
}
function createBaseEpochInfo(): EpochInfo {
  return {
    identifier: "",
    startTime: new Date(),
    duration: Duration.fromPartial({}),
    currentEpoch: BigInt(0),
    currentEpochStartTime: new Date(),
    epochCountingStarted: false,
    currentEpochStartHeight: BigInt(0)
  };
}
export const EpochInfo = {
  typeUrl: "/elys.epochs.v1.EpochInfo",
  encode(message: EpochInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(32).int64(message.currentEpoch);
    }
    if (message.currentEpochStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.currentEpochStartTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.epochCountingStarted === true) {
      writer.uint32(48).bool(message.epochCountingStarted);
    }
    if (message.currentEpochStartHeight !== BigInt(0)) {
      writer.uint32(56).int64(message.currentEpochStartHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.currentEpoch = reader.int64();
          break;
        case 5:
          message.currentEpochStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.epochCountingStarted = reader.bool();
          break;
        case 7:
          message.currentEpochStartHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EpochInfo>): EpochInfo {
    const message = createBaseEpochInfo();
    message.identifier = object.identifier ?? "";
    message.startTime = object.startTime ?? undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    message.currentEpochStartTime = object.currentEpochStartTime ?? undefined;
    message.epochCountingStarted = object.epochCountingStarted ?? false;
    message.currentEpochStartHeight = object.currentEpochStartHeight !== undefined && object.currentEpochStartHeight !== null ? BigInt(object.currentEpochStartHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EpochInfoAmino): EpochInfo {
    const message = createBaseEpochInfo();
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.current_epoch !== undefined && object.current_epoch !== null) {
      message.currentEpoch = BigInt(object.current_epoch);
    }
    if (object.current_epoch_start_time !== undefined && object.current_epoch_start_time !== null) {
      message.currentEpochStartTime = fromTimestamp(Timestamp.fromAmino(object.current_epoch_start_time));
    }
    if (object.epoch_counting_started !== undefined && object.epoch_counting_started !== null) {
      message.epochCountingStarted = object.epoch_counting_started;
    }
    if (object.current_epoch_start_height !== undefined && object.current_epoch_start_height !== null) {
      message.currentEpochStartHeight = BigInt(object.current_epoch_start_height);
    }
    return message;
  },
  toAmino(message: EpochInfo): EpochInfoAmino {
    const obj: any = {};
    obj.identifier = message.identifier === "" ? undefined : message.identifier;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.current_epoch = message.currentEpoch !== BigInt(0) ? message.currentEpoch?.toString() : undefined;
    obj.current_epoch_start_time = message.currentEpochStartTime ? Timestamp.toAmino(toTimestamp(message.currentEpochStartTime)) : undefined;
    obj.epoch_counting_started = message.epochCountingStarted === false ? undefined : message.epochCountingStarted;
    obj.current_epoch_start_height = message.currentEpochStartHeight !== BigInt(0) ? message.currentEpochStartHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EpochInfoAminoMsg): EpochInfo {
    return EpochInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochInfoProtoMsg): EpochInfo {
    return EpochInfo.decode(message.value);
  },
  toProto(message: EpochInfo): Uint8Array {
    return EpochInfo.encode(message).finish();
  },
  toProtoMsg(message: EpochInfo): EpochInfoProtoMsg {
    return {
      typeUrl: "/elys.epochs.v1.EpochInfo",
      value: EpochInfo.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    epochs: []
  };
}
export const GenesisState = {
  typeUrl: "/elys.epochs.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.epochs = object.epochs?.map(e => EpochInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toAmino(e) : undefined);
    } else {
      obj.epochs = message.epochs;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/elys.epochs.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};