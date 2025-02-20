//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ElysStaked, ElysStakedAmino, ElysStakedSDKType } from "./elys_staked";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the estaking module's genesis state. */
export interface GenesisState {
  params: Params;
  stakingSnapshots: ElysStaked[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.estaking.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the estaking module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  staking_snapshots?: ElysStakedAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/elys.estaking.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the estaking module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  staking_snapshots: ElysStakedSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    stakingSnapshots: []
  };
}
export const GenesisState = {
  typeUrl: "/elys.estaking.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.stakingSnapshots) {
      ElysStaked.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.stakingSnapshots.push(ElysStaked.decode(reader, reader.uint32()));
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
    message.stakingSnapshots = object.stakingSnapshots?.map(e => ElysStaked.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.stakingSnapshots = object.staking_snapshots?.map(e => ElysStaked.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.stakingSnapshots) {
      obj.staking_snapshots = message.stakingSnapshots.map(e => e ? ElysStaked.toAmino(e) : undefined);
    } else {
      obj.staking_snapshots = message.stakingSnapshots;
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
      typeUrl: "/elys.estaking.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};