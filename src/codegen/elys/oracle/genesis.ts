import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { AssetInfo, AssetInfoAmino, AssetInfoSDKType } from "./asset_info";
import { Price, PriceAmino, PriceSDKType } from "./price";
import { PriceFeeder, PriceFeederAmino, PriceFeederSDKType } from "./price_feeder";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  params: Params;
  portId: string;
  assetInfos: AssetInfo[];
  prices: Price[];
  priceFeeders: PriceFeeder[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.oracle.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  portId: string;
  assetInfos: AssetInfoAmino[];
  prices: PriceAmino[];
  priceFeeders: PriceFeederAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/elys.oracle.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  portId: string;
  assetInfos: AssetInfoSDKType[];
  prices: PriceSDKType[];
  priceFeeders: PriceFeederSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    portId: "",
    assetInfos: [],
    prices: [],
    priceFeeders: []
  };
}
export const GenesisState = {
  typeUrl: "/elys.oracle.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.assetInfos) {
      AssetInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.prices) {
      Price.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.priceFeeders) {
      PriceFeeder.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.portId = reader.string();
          break;
        case 3:
          message.assetInfos.push(AssetInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          message.prices.push(Price.decode(reader, reader.uint32()));
          break;
        case 5:
          message.priceFeeders.push(PriceFeeder.decode(reader, reader.uint32()));
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
    message.portId = object.portId ?? "";
    message.assetInfos = object.assetInfos?.map(e => AssetInfo.fromPartial(e)) || [];
    message.prices = object.prices?.map(e => Price.fromPartial(e)) || [];
    message.priceFeeders = object.priceFeeders?.map(e => PriceFeeder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      portId: object.portId,
      assetInfos: Array.isArray(object?.assetInfos) ? object.assetInfos.map((e: any) => AssetInfo.fromAmino(e)) : [],
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => Price.fromAmino(e)) : [],
      priceFeeders: Array.isArray(object?.priceFeeders) ? object.priceFeeders.map((e: any) => PriceFeeder.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.portId = message.portId;
    if (message.assetInfos) {
      obj.assetInfos = message.assetInfos.map(e => e ? AssetInfo.toAmino(e) : undefined);
    } else {
      obj.assetInfos = [];
    }
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? Price.toAmino(e) : undefined);
    } else {
      obj.prices = [];
    }
    if (message.priceFeeders) {
      obj.priceFeeders = message.priceFeeders.map(e => e ? PriceFeeder.toAmino(e) : undefined);
    } else {
      obj.priceFeeders = [];
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
      typeUrl: "/elys.oracle.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};