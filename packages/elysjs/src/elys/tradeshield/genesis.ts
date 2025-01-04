//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { SpotOrder, SpotOrderAmino, SpotOrderSDKType, PerpetualOrder, PerpetualOrderAmino, PerpetualOrderSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the tradeshield module's genesis state. */
export interface GenesisState {
  params: Params;
  pendingSpotOrderList: SpotOrder[];
  pendingSpotOrderCount: bigint;
  pendingPerpetualOrderList: PerpetualOrder[];
  pendingPerpetualOrderCount: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.tradeshield.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the tradeshield module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  pending_spot_order_list?: SpotOrderAmino[];
  pending_spot_order_count?: string;
  pending_perpetual_order_list?: PerpetualOrderAmino[];
  pending_perpetual_order_count?: string;
}
export interface GenesisStateAminoMsg {
  type: "/elys.tradeshield.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the tradeshield module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pending_spot_order_list: SpotOrderSDKType[];
  pending_spot_order_count: bigint;
  pending_perpetual_order_list: PerpetualOrderSDKType[];
  pending_perpetual_order_count: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    pendingSpotOrderList: [],
    pendingSpotOrderCount: BigInt(0),
    pendingPerpetualOrderList: [],
    pendingPerpetualOrderCount: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/elys.tradeshield.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pendingSpotOrderList) {
      SpotOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pendingSpotOrderCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.pendingSpotOrderCount);
    }
    for (const v of message.pendingPerpetualOrderList) {
      PerpetualOrder.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.pendingPerpetualOrderCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.pendingPerpetualOrderCount);
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
          message.pendingSpotOrderList.push(SpotOrder.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pendingSpotOrderCount = reader.uint64();
          break;
        case 4:
          message.pendingPerpetualOrderList.push(PerpetualOrder.decode(reader, reader.uint32()));
          break;
        case 5:
          message.pendingPerpetualOrderCount = reader.uint64();
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
    message.pendingSpotOrderList = object.pendingSpotOrderList?.map(e => SpotOrder.fromPartial(e)) || [];
    message.pendingSpotOrderCount = object.pendingSpotOrderCount !== undefined && object.pendingSpotOrderCount !== null ? BigInt(object.pendingSpotOrderCount.toString()) : BigInt(0);
    message.pendingPerpetualOrderList = object.pendingPerpetualOrderList?.map(e => PerpetualOrder.fromPartial(e)) || [];
    message.pendingPerpetualOrderCount = object.pendingPerpetualOrderCount !== undefined && object.pendingPerpetualOrderCount !== null ? BigInt(object.pendingPerpetualOrderCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.pendingSpotOrderList = object.pending_spot_order_list?.map(e => SpotOrder.fromAmino(e)) || [];
    if (object.pending_spot_order_count !== undefined && object.pending_spot_order_count !== null) {
      message.pendingSpotOrderCount = BigInt(object.pending_spot_order_count);
    }
    message.pendingPerpetualOrderList = object.pending_perpetual_order_list?.map(e => PerpetualOrder.fromAmino(e)) || [];
    if (object.pending_perpetual_order_count !== undefined && object.pending_perpetual_order_count !== null) {
      message.pendingPerpetualOrderCount = BigInt(object.pending_perpetual_order_count);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.pendingSpotOrderList) {
      obj.pending_spot_order_list = message.pendingSpotOrderList.map(e => e ? SpotOrder.toAmino(e) : undefined);
    } else {
      obj.pending_spot_order_list = message.pendingSpotOrderList;
    }
    obj.pending_spot_order_count = message.pendingSpotOrderCount !== BigInt(0) ? message.pendingSpotOrderCount?.toString() : undefined;
    if (message.pendingPerpetualOrderList) {
      obj.pending_perpetual_order_list = message.pendingPerpetualOrderList.map(e => e ? PerpetualOrder.toAmino(e) : undefined);
    } else {
      obj.pending_perpetual_order_list = message.pendingPerpetualOrderList;
    }
    obj.pending_perpetual_order_count = message.pendingPerpetualOrderCount !== BigInt(0) ? message.pendingPerpetualOrderCount?.toString() : undefined;
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
      typeUrl: "/elys.tradeshield.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};