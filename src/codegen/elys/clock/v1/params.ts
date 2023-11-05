import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the set of module parameters. */
export interface Params {
  /** contract_addresses stores the list of executable contracts to be ticked on every block. */
  contractAddresses: string[];
  contractGasLimit: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.clock.v1.Params";
  value: Uint8Array;
}
/** Params defines the set of module parameters. */
export interface ParamsAmino {
  /** contract_addresses stores the list of executable contracts to be ticked on every block. */
  contract_addresses: string[];
  contract_gas_limit: string;
}
export interface ParamsAminoMsg {
  type: "/elys.clock.v1.Params";
  value: ParamsAmino;
}
/** Params defines the set of module parameters. */
export interface ParamsSDKType {
  contract_addresses: string[];
  contract_gas_limit: bigint;
}
function createBaseParams(): Params {
  return {
    contractAddresses: [],
    contractGasLimit: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/elys.clock.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.contractGasLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.contractGasLimit);
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
          message.contractAddresses.push(reader.string());
          break;
        case 2:
          message.contractGasLimit = reader.uint64();
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
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    message.contractGasLimit = object.contractGasLimit !== undefined && object.contractGasLimit !== null ? BigInt(object.contractGasLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      contractAddresses: Array.isArray(object?.contract_addresses) ? object.contract_addresses.map((e: any) => e) : [],
      contractGasLimit: BigInt(object.contract_gas_limit)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map(e => e);
    } else {
      obj.contract_addresses = [];
    }
    obj.contract_gas_limit = message.contractGasLimit ? message.contractGasLimit.toString() : undefined;
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
      typeUrl: "/elys.clock.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};