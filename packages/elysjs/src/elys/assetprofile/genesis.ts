//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Entry, EntryAmino, EntrySDKType } from "./entry";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the assetprofile module's genesis state. */
export interface GenesisState {
  params: Params;
  entryList: Entry[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.assetprofile.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the assetprofile module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  entry_list?: EntryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/elys.assetprofile.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the assetprofile module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  entry_list: EntrySDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    entryList: []
  };
}
export const GenesisState = {
  typeUrl: "/elys.assetprofile.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entryList) {
      Entry.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.entryList.push(Entry.decode(reader, reader.uint32()));
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
    message.entryList = object.entryList?.map(e => Entry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.entryList = object.entry_list?.map(e => Entry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.entryList) {
      obj.entry_list = message.entryList.map(e => e ? Entry.toAmino(e) : undefined);
    } else {
      obj.entry_list = message.entryList;
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
      typeUrl: "/elys.assetprofile.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};