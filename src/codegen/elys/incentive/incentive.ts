import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp } from "../../helpers";
/** Incentive Info */
export interface IncentiveInfo {
  /** reward amount */
  amount: string;
  /** epoch identifier */
  epochIdentifier: string;
  /** start_time of the distribution */
  startTime: Date;
  /** distribution duration */
  numEpochs: bigint;
  currentEpoch: bigint;
  edenBoostApr: bigint;
}
export interface IncentiveInfoProtoMsg {
  typeUrl: "/elys.incentive.IncentiveInfo";
  value: Uint8Array;
}
/** Incentive Info */
export interface IncentiveInfoAmino {
  /** reward amount */
  amount: string;
  /** epoch identifier */
  epoch_identifier: string;
  /** start_time of the distribution */
  start_time?: Date;
  /** distribution duration */
  num_epochs: string;
  current_epoch: string;
  eden_boost_apr: string;
}
export interface IncentiveInfoAminoMsg {
  type: "/elys.incentive.IncentiveInfo";
  value: IncentiveInfoAmino;
}
/** Incentive Info */
export interface IncentiveInfoSDKType {
  amount: string;
  epoch_identifier: string;
  start_time: Date;
  num_epochs: bigint;
  current_epoch: bigint;
  eden_boost_apr: bigint;
}
function createBaseIncentiveInfo(): IncentiveInfo {
  return {
    amount: "",
    epochIdentifier: "",
    startTime: new Date(),
    numEpochs: BigInt(0),
    currentEpoch: BigInt(0),
    edenBoostApr: BigInt(0)
  };
}
export const IncentiveInfo = {
  typeUrl: "/elys.incentive.IncentiveInfo",
  encode(message: IncentiveInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(18).string(message.epochIdentifier);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.numEpochs !== BigInt(0)) {
      writer.uint32(32).int64(message.numEpochs);
    }
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(40).int64(message.currentEpoch);
    }
    if (message.edenBoostApr !== BigInt(0)) {
      writer.uint32(48).int64(message.edenBoostApr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentiveInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.epochIdentifier = reader.string();
          break;
        case 3:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.numEpochs = reader.int64();
          break;
        case 5:
          message.currentEpoch = reader.int64();
          break;
        case 6:
          message.edenBoostApr = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IncentiveInfo>): IncentiveInfo {
    const message = createBaseIncentiveInfo();
    message.amount = object.amount ?? "";
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.startTime = object.startTime ?? undefined;
    message.numEpochs = object.numEpochs !== undefined && object.numEpochs !== null ? BigInt(object.numEpochs.toString()) : BigInt(0);
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    message.edenBoostApr = object.edenBoostApr !== undefined && object.edenBoostApr !== null ? BigInt(object.edenBoostApr.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: IncentiveInfoAmino): IncentiveInfo {
    return {
      amount: object.amount,
      epochIdentifier: object.epoch_identifier,
      startTime: object.start_time,
      numEpochs: BigInt(object.num_epochs),
      currentEpoch: BigInt(object.current_epoch),
      edenBoostApr: BigInt(object.eden_boost_apr)
    };
  },
  toAmino(message: IncentiveInfo): IncentiveInfoAmino {
    const obj: any = {};
    obj.amount = message.amount;
    obj.epoch_identifier = message.epochIdentifier;
    obj.start_time = message.startTime;
    obj.num_epochs = message.numEpochs ? message.numEpochs.toString() : undefined;
    obj.current_epoch = message.currentEpoch ? message.currentEpoch.toString() : undefined;
    obj.eden_boost_apr = message.edenBoostApr ? message.edenBoostApr.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IncentiveInfoAminoMsg): IncentiveInfo {
    return IncentiveInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: IncentiveInfoProtoMsg): IncentiveInfo {
    return IncentiveInfo.decode(message.value);
  },
  toProto(message: IncentiveInfo): Uint8Array {
    return IncentiveInfo.encode(message).finish();
  },
  toProtoMsg(message: IncentiveInfo): IncentiveInfoProtoMsg {
    return {
      typeUrl: "/elys.incentive.IncentiveInfo",
      value: IncentiveInfo.encode(message).finish()
    };
  }
};