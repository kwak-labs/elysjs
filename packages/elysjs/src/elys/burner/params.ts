//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  epochIdentifier: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.burner.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  epoch_identifier?: string;
}
export interface ParamsAminoMsg {
  type: "/elys.burner.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  epoch_identifier: string;
}
function createBaseParams(): Params {
  return {
    epochIdentifier: ""
  };
}
export const Params = {
  typeUrl: "/elys.burner.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochIdentifier !== "") {
      writer.uint32(10).string(message.epochIdentifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.epochIdentifier = object.epochIdentifier ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.epoch_identifier !== undefined && object.epoch_identifier !== null) {
      message.epochIdentifier = object.epoch_identifier;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.epoch_identifier = message.epochIdentifier === "" ? undefined : message.epochIdentifier;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/elys.burner.Params",
      value: Params.encode(message).finish()
    };
  }
};