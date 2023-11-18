import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { AnteHandlerParam, AnteHandlerParamAmino, AnteHandlerParamSDKType } from "./ante_handler_param";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the parameter module's genesis state. */
export interface GenesisState {
  params: Params;
  anteHandlerParam: AnteHandlerParam;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.parameter.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the parameter module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  ante_handler_param?: AnteHandlerParamAmino;
}
export interface GenesisStateAminoMsg {
  type: "/elys.parameter.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the parameter module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  ante_handler_param: AnteHandlerParamSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    anteHandlerParam: AnteHandlerParam.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/elys.parameter.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.anteHandlerParam !== undefined) {
      AnteHandlerParam.encode(message.anteHandlerParam, writer.uint32(18).fork()).ldelim();
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
          message.anteHandlerParam = AnteHandlerParam.decode(reader, reader.uint32());
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
    message.anteHandlerParam = object.anteHandlerParam !== undefined && object.anteHandlerParam !== null ? AnteHandlerParam.fromPartial(object.anteHandlerParam) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      anteHandlerParam: object?.ante_handler_param ? AnteHandlerParam.fromAmino(object.ante_handler_param) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.ante_handler_param = message.anteHandlerParam ? AnteHandlerParam.toAmino(message.anteHandlerParam) : undefined;
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
      typeUrl: "/elys.parameter.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};