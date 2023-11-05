import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { FeePool, FeePoolAmino, FeePoolSDKType } from "./distribution";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the incentive module's genesis state. */
export interface GenesisState {
  params: Params;
  /** fee_pool defines the fee pool at genesis. */
  feePool: FeePool;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.incentive.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the incentive module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  /** fee_pool defines the fee pool at genesis. */
  fee_pool?: FeePoolAmino;
}
export interface GenesisStateAminoMsg {
  type: "/elys.incentive.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the incentive module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  fee_pool: FeePoolSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    feePool: FeePool.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/elys.incentive.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.feePool !== undefined) {
      FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
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
          message.feePool = FeePool.decode(reader, reader.uint32());
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
    message.feePool = object.feePool !== undefined && object.feePool !== null ? FeePool.fromPartial(object.feePool) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      feePool: object?.fee_pool ? FeePool.fromAmino(object.fee_pool) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.fee_pool = message.feePool ? FeePool.toAmino(message.feePool) : undefined;
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
      typeUrl: "/elys.incentive.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};