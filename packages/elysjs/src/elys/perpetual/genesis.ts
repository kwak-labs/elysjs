//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { MTP, MTPAmino, MTPSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the perpetual module's genesis state. */
export interface GenesisState {
  params: Params;
  poolList: Pool[];
  mtpList: MTP[];
  addressWhitelist: string[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.perpetual.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the perpetual module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  pool_list?: PoolAmino[];
  mtp_list?: MTPAmino[];
  address_whitelist?: string[];
}
export interface GenesisStateAminoMsg {
  type: "/elys.perpetual.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the perpetual module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pool_list: PoolSDKType[];
  mtp_list: MTPSDKType[];
  address_whitelist: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    poolList: [],
    mtpList: [],
    addressWhitelist: []
  };
}
export const GenesisState = {
  typeUrl: "/elys.perpetual.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolList) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.mtpList) {
      MTP.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.addressWhitelist) {
      writer.uint32(34).string(v!);
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
          message.poolList.push(Pool.decode(reader, reader.uint32()));
          break;
        case 3:
          message.mtpList.push(MTP.decode(reader, reader.uint32()));
          break;
        case 4:
          message.addressWhitelist.push(reader.string());
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
    message.poolList = object.poolList?.map(e => Pool.fromPartial(e)) || [];
    message.mtpList = object.mtpList?.map(e => MTP.fromPartial(e)) || [];
    message.addressWhitelist = object.addressWhitelist?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.poolList = object.pool_list?.map(e => Pool.fromAmino(e)) || [];
    message.mtpList = object.mtp_list?.map(e => MTP.fromAmino(e)) || [];
    message.addressWhitelist = object.address_whitelist?.map(e => e) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.poolList) {
      obj.pool_list = message.poolList.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pool_list = message.poolList;
    }
    if (message.mtpList) {
      obj.mtp_list = message.mtpList.map(e => e ? MTP.toAmino(e) : undefined);
    } else {
      obj.mtp_list = message.mtpList;
    }
    if (message.addressWhitelist) {
      obj.address_whitelist = message.addressWhitelist.map(e => e);
    } else {
      obj.address_whitelist = message.addressWhitelist;
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
      typeUrl: "/elys.perpetual.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};