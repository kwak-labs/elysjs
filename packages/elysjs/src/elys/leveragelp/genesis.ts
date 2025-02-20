//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { Position, PositionAmino, PositionSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the leveragelp module's genesis state. */
export interface GenesisState {
  params: Params;
  poolList: Pool[];
  positionList: Position[];
  addressWhitelist: string[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.leveragelp.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the leveragelp module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  pool_list?: PoolAmino[];
  position_list?: PositionAmino[];
  address_whitelist?: string[];
}
export interface GenesisStateAminoMsg {
  type: "/elys.leveragelp.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the leveragelp module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pool_list: PoolSDKType[];
  position_list: PositionSDKType[];
  address_whitelist: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    poolList: [],
    positionList: [],
    addressWhitelist: []
  };
}
export const GenesisState = {
  typeUrl: "/elys.leveragelp.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolList) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.positionList) {
      Position.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.positionList.push(Position.decode(reader, reader.uint32()));
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
    message.positionList = object.positionList?.map(e => Position.fromPartial(e)) || [];
    message.addressWhitelist = object.addressWhitelist?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.poolList = object.pool_list?.map(e => Pool.fromAmino(e)) || [];
    message.positionList = object.position_list?.map(e => Position.fromAmino(e)) || [];
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
    if (message.positionList) {
      obj.position_list = message.positionList.map(e => e ? Position.toAmino(e) : undefined);
    } else {
      obj.position_list = message.positionList;
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
      typeUrl: "/elys.leveragelp.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};