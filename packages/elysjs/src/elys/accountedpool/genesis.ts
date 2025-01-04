//@ts-nocheck
import { AccountedPool, AccountedPoolAmino, AccountedPoolSDKType } from "./accounted_pool";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the tvl module's genesis state. */
export interface GenesisState {
  accountedPoolList: AccountedPool[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.accountedpool.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the tvl module's genesis state. */
export interface GenesisStateAmino {
  accounted_pool_list?: AccountedPoolAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/elys.accountedpool.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the tvl module's genesis state. */
export interface GenesisStateSDKType {
  accounted_pool_list: AccountedPoolSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    accountedPoolList: []
  };
}
export const GenesisState = {
  typeUrl: "/elys.accountedpool.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accountedPoolList) {
      AccountedPool.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.accountedPoolList.push(AccountedPool.decode(reader, reader.uint32()));
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
    message.accountedPoolList = object.accountedPoolList?.map(e => AccountedPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.accountedPoolList = object.accounted_pool_list?.map(e => AccountedPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.accountedPoolList) {
      obj.accounted_pool_list = message.accountedPoolList.map(e => e ? AccountedPool.toAmino(e) : undefined);
    } else {
      obj.accounted_pool_list = message.accountedPoolList;
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
      typeUrl: "/elys.accountedpool.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};