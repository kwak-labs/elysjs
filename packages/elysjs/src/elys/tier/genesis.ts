//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Portfolio, PortfolioAmino, PortfolioSDKType } from "./portfolio";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the tier module's genesis state. */
export interface GenesisState {
  params: Params;
  portfolioList: Portfolio[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.tier.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the tier module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  portfolio_list?: PortfolioAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/elys.tier.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the tier module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  portfolio_list: PortfolioSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    portfolioList: []
  };
}
export const GenesisState = {
  typeUrl: "/elys.tier.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.portfolioList) {
      Portfolio.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.portfolioList.push(Portfolio.decode(reader, reader.uint32()));
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
    message.portfolioList = object.portfolioList?.map(e => Portfolio.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.portfolioList = object.portfolio_list?.map(e => Portfolio.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.portfolioList) {
      obj.portfolio_list = message.portfolioList.map(e => e ? Portfolio.toAmino(e) : undefined);
    } else {
      obj.portfolio_list = message.portfolioList;
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
      typeUrl: "/elys.tier.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};