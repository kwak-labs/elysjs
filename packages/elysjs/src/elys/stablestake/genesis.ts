//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Debt, DebtAmino, DebtSDKType } from "./debt";
import { InterestBlock, InterestBlockAmino, InterestBlockSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the stablestake module's genesis state. */
export interface GenesisState {
  params: Params;
  debtList: Debt[];
  interestList: InterestBlock[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.stablestake.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the stablestake module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  debt_list?: DebtAmino[];
  interest_list?: InterestBlockAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/elys.stablestake.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the stablestake module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  debt_list: DebtSDKType[];
  interest_list: InterestBlockSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    debtList: [],
    interestList: []
  };
}
export const GenesisState = {
  typeUrl: "/elys.stablestake.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.debtList) {
      Debt.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.interestList) {
      InterestBlock.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.debtList.push(Debt.decode(reader, reader.uint32()));
          break;
        case 3:
          message.interestList.push(InterestBlock.decode(reader, reader.uint32()));
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
    message.debtList = object.debtList?.map(e => Debt.fromPartial(e)) || [];
    message.interestList = object.interestList?.map(e => InterestBlock.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.debtList = object.debt_list?.map(e => Debt.fromAmino(e)) || [];
    message.interestList = object.interest_list?.map(e => InterestBlock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.debtList) {
      obj.debt_list = message.debtList.map(e => e ? Debt.toAmino(e) : undefined);
    } else {
      obj.debt_list = message.debtList;
    }
    if (message.interestList) {
      obj.interest_list = message.interestList.map(e => e ? InterestBlock.toAmino(e) : undefined);
    } else {
      obj.interest_list = message.interestList;
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
      typeUrl: "/elys.stablestake.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};