import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { DenomLiquidity, DenomLiquidityAmino, DenomLiquiditySDKType } from "./denom_liquidity";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the amm module's genesis state. */
export interface GenesisState {
  params: Params;
  poolList: Pool[];
  denomLiquidityList: DenomLiquidity[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.amm.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the amm module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  poolList: PoolAmino[];
  denomLiquidityList: DenomLiquidityAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/elys.amm.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the amm module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  poolList: PoolSDKType[];
  denomLiquidityList: DenomLiquiditySDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    poolList: [],
    denomLiquidityList: []
  };
}
export const GenesisState = {
  typeUrl: "/elys.amm.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolList) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.denomLiquidityList) {
      DenomLiquidity.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.denomLiquidityList.push(DenomLiquidity.decode(reader, reader.uint32()));
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
    message.denomLiquidityList = object.denomLiquidityList?.map(e => DenomLiquidity.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      poolList: Array.isArray(object?.poolList) ? object.poolList.map((e: any) => Pool.fromAmino(e)) : [],
      denomLiquidityList: Array.isArray(object?.denomLiquidityList) ? object.denomLiquidityList.map((e: any) => DenomLiquidity.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.poolList) {
      obj.poolList = message.poolList.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.poolList = [];
    }
    if (message.denomLiquidityList) {
      obj.denomLiquidityList = message.denomLiquidityList.map(e => e ? DenomLiquidity.toAmino(e) : undefined);
    } else {
      obj.denomLiquidityList = [];
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
      typeUrl: "/elys.amm.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};