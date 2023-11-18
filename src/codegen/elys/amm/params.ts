import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  poolCreationFee: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.amm.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  pool_creation_fee: string;
}
export interface ParamsAminoMsg {
  type: "/elys.amm.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  pool_creation_fee: bigint;
}
function createBaseParams(): Params {
  return {
    poolCreationFee: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/elys.amm.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolCreationFee !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolCreationFee);
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
          message.poolCreationFee = reader.uint64();
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
    message.poolCreationFee = object.poolCreationFee !== undefined && object.poolCreationFee !== null ? BigInt(object.poolCreationFee.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      poolCreationFee: BigInt(object.pool_creation_fee)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.pool_creation_fee = message.poolCreationFee ? message.poolCreationFee.toString() : undefined;
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
      typeUrl: "/elys.amm.Params",
      value: Params.encode(message).finish()
    };
  }
};