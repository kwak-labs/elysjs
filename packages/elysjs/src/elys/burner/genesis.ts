//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { History, HistoryAmino, HistorySDKType } from "./history";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the burner module's genesis state. */
export interface GenesisState {
  params: Params;
  historyList: History[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.burner.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the burner module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  history_list?: HistoryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/elys.burner.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the burner module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  history_list: HistorySDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    historyList: []
  };
}
export const GenesisState = {
  typeUrl: "/elys.burner.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.historyList) {
      History.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.historyList.push(History.decode(reader, reader.uint32()));
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.historyList = object.historyList?.map(e => History.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.historyList = object.history_list?.map(e => History.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.historyList) {
      obj.history_list = message.historyList.map(e => e ? History.toAmino(e) : undefined);
    } else {
      obj.history_list = message.historyList;
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
      typeUrl: "/elys.burner.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};