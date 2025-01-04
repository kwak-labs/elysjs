//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface History {
  timestamp: string;
  denom: string;
  amount: string;
}
export interface HistoryProtoMsg {
  typeUrl: "/elys.burner.History";
  value: Uint8Array;
}
export interface HistoryAmino {
  timestamp?: string;
  denom?: string;
  amount?: string;
}
export interface HistoryAminoMsg {
  type: "/elys.burner.History";
  value: HistoryAmino;
}
export interface HistorySDKType {
  timestamp: string;
  denom: string;
  amount: string;
}
function createBaseHistory(): History {
  return {
    timestamp: "",
    denom: "",
    amount: ""
  };
}
export const History = {
  typeUrl: "/elys.burner.History",
  encode(message: History, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== "") {
      writer.uint32(10).string(message.timestamp);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): History {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<History>): History {
    const message = createBaseHistory();
    message.timestamp = object.timestamp ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: HistoryAmino): History {
    const message = createBaseHistory();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: History): HistoryAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp === "" ? undefined : message.timestamp;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: HistoryAminoMsg): History {
    return History.fromAmino(object.value);
  },
  fromProtoMsg(message: HistoryProtoMsg): History {
    return History.decode(message.value);
  },
  toProto(message: History): Uint8Array {
    return History.encode(message).finish();
  },
  toProtoMsg(message: History): HistoryProtoMsg {
    return {
      typeUrl: "/elys.burner.History",
      value: History.encode(message).finish()
    };
  }
};