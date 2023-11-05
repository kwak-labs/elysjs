import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Commitments, CommitmentsAmino, CommitmentsSDKType } from "./commitments";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the commitment module's genesis state. */
export interface GenesisState {
  params: Params;
  commitments: Commitments[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.commitment.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the commitment module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  commitments: CommitmentsAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/elys.commitment.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the commitment module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  commitments: CommitmentsSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    commitments: []
  };
}
export const GenesisState = {
  typeUrl: "/elys.commitment.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.commitments) {
      Commitments.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.commitments.push(Commitments.decode(reader, reader.uint32()));
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
    message.commitments = object.commitments?.map(e => Commitments.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      commitments: Array.isArray(object?.commitments) ? object.commitments.map((e: any) => Commitments.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? Commitments.toAmino(e) : undefined);
    } else {
      obj.commitments = [];
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
      typeUrl: "/elys.commitment.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};