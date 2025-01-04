//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType, OraclePoolSlippageTrack, OraclePoolSlippageTrackAmino, OraclePoolSlippageTrackSDKType } from "./pool";
import { DenomLiquidity, DenomLiquidityAmino, DenomLiquiditySDKType } from "./denom_liquidity";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the amm module's genesis state. */
export interface GenesisState {
  params: Params;
  poolList: Pool[];
  denomLiquidityList: DenomLiquidity[];
  slippageTracks: OraclePoolSlippageTrack[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.amm.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the amm module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  pool_list?: PoolAmino[];
  denom_liquidity_list?: DenomLiquidityAmino[];
  slippage_tracks?: OraclePoolSlippageTrackAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/elys.amm.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the amm module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pool_list: PoolSDKType[];
  denom_liquidity_list: DenomLiquiditySDKType[];
  slippage_tracks: OraclePoolSlippageTrackSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    poolList: [],
    denomLiquidityList: [],
    slippageTracks: []
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
    for (const v of message.slippageTracks) {
      OraclePoolSlippageTrack.encode(v!, writer.uint32(34).fork()).ldelim();
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
        case 4:
          message.slippageTracks.push(OraclePoolSlippageTrack.decode(reader, reader.uint32()));
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
    message.slippageTracks = object.slippageTracks?.map(e => OraclePoolSlippageTrack.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.poolList = object.pool_list?.map(e => Pool.fromAmino(e)) || [];
    message.denomLiquidityList = object.denom_liquidity_list?.map(e => DenomLiquidity.fromAmino(e)) || [];
    message.slippageTracks = object.slippage_tracks?.map(e => OraclePoolSlippageTrack.fromAmino(e)) || [];
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
    if (message.denomLiquidityList) {
      obj.denom_liquidity_list = message.denomLiquidityList.map(e => e ? DenomLiquidity.toAmino(e) : undefined);
    } else {
      obj.denom_liquidity_list = message.denomLiquidityList;
    }
    if (message.slippageTracks) {
      obj.slippage_tracks = message.slippageTracks.map(e => e ? OraclePoolSlippageTrack.toAmino(e) : undefined);
    } else {
      obj.slippage_tracks = message.slippageTracks;
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