import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Airdrop, AirdropAmino, AirdropSDKType } from "./airdrop";
import { GenesisInflation, GenesisInflationAmino, GenesisInflationSDKType } from "./genesis_inflation";
import { TimeBasedInflation, TimeBasedInflationAmino, TimeBasedInflationSDKType } from "./time_based_inflation";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the tokenomics module's genesis state. */
export interface GenesisState {
  params: Params;
  airdropList: Airdrop[];
  genesisInflation?: GenesisInflation;
  timeBasedInflationList: TimeBasedInflation[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.tokenomics.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the tokenomics module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  airdropList: AirdropAmino[];
  genesisInflation?: GenesisInflationAmino;
  timeBasedInflationList: TimeBasedInflationAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/elys.tokenomics.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the tokenomics module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  airdropList: AirdropSDKType[];
  genesisInflation?: GenesisInflationSDKType;
  timeBasedInflationList: TimeBasedInflationSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    airdropList: [],
    genesisInflation: undefined,
    timeBasedInflationList: []
  };
}
export const GenesisState = {
  typeUrl: "/elys.tokenomics.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.airdropList) {
      Airdrop.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.genesisInflation !== undefined) {
      GenesisInflation.encode(message.genesisInflation, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.timeBasedInflationList) {
      TimeBasedInflation.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.airdropList.push(Airdrop.decode(reader, reader.uint32()));
          break;
        case 3:
          message.genesisInflation = GenesisInflation.decode(reader, reader.uint32());
          break;
        case 4:
          message.timeBasedInflationList.push(TimeBasedInflation.decode(reader, reader.uint32()));
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
    message.airdropList = object.airdropList?.map(e => Airdrop.fromPartial(e)) || [];
    message.genesisInflation = object.genesisInflation !== undefined && object.genesisInflation !== null ? GenesisInflation.fromPartial(object.genesisInflation) : undefined;
    message.timeBasedInflationList = object.timeBasedInflationList?.map(e => TimeBasedInflation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      airdropList: Array.isArray(object?.airdropList) ? object.airdropList.map((e: any) => Airdrop.fromAmino(e)) : [],
      genesisInflation: object?.genesisInflation ? GenesisInflation.fromAmino(object.genesisInflation) : undefined,
      timeBasedInflationList: Array.isArray(object?.timeBasedInflationList) ? object.timeBasedInflationList.map((e: any) => TimeBasedInflation.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.airdropList) {
      obj.airdropList = message.airdropList.map(e => e ? Airdrop.toAmino(e) : undefined);
    } else {
      obj.airdropList = [];
    }
    obj.genesisInflation = message.genesisInflation ? GenesisInflation.toAmino(message.genesisInflation) : undefined;
    if (message.timeBasedInflationList) {
      obj.timeBasedInflationList = message.timeBasedInflationList.map(e => e ? TimeBasedInflation.toAmino(e) : undefined);
    } else {
      obj.timeBasedInflationList = [];
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
      typeUrl: "/elys.tokenomics.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};