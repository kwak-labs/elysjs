import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  bandChannelSource: string;
  oracleScriptId: bigint;
  multiplier: bigint;
  askCount: bigint;
  minCount: bigint;
  feeLimit: Coin[];
  prepareGas: bigint;
  executeGas: bigint;
  clientId: string;
  bandEpoch: string;
  priceExpiryTime: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.oracle.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  band_channel_source: string;
  oracle_script_id: string;
  multiplier: string;
  ask_count: string;
  min_count: string;
  fee_limit: CoinAmino[];
  prepare_gas: string;
  execute_gas: string;
  client_id: string;
  band_epoch: string;
  price_expiry_time: string;
}
export interface ParamsAminoMsg {
  type: "/elys.oracle.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  band_channel_source: string;
  oracle_script_id: bigint;
  multiplier: bigint;
  ask_count: bigint;
  min_count: bigint;
  fee_limit: CoinSDKType[];
  prepare_gas: bigint;
  execute_gas: bigint;
  client_id: string;
  band_epoch: string;
  price_expiry_time: bigint;
}
function createBaseParams(): Params {
  return {
    bandChannelSource: "",
    oracleScriptId: BigInt(0),
    multiplier: BigInt(0),
    askCount: BigInt(0),
    minCount: BigInt(0),
    feeLimit: [],
    prepareGas: BigInt(0),
    executeGas: BigInt(0),
    clientId: "",
    bandEpoch: "",
    priceExpiryTime: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/elys.oracle.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bandChannelSource !== "") {
      writer.uint32(10).string(message.bandChannelSource);
    }
    if (message.oracleScriptId !== BigInt(0)) {
      writer.uint32(16).uint64(message.oracleScriptId);
    }
    if (message.multiplier !== BigInt(0)) {
      writer.uint32(24).uint64(message.multiplier);
    }
    if (message.askCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.askCount);
    }
    if (message.minCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.minCount);
    }
    for (const v of message.feeLimit) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.prepareGas !== BigInt(0)) {
      writer.uint32(56).uint64(message.prepareGas);
    }
    if (message.executeGas !== BigInt(0)) {
      writer.uint32(64).uint64(message.executeGas);
    }
    if (message.clientId !== "") {
      writer.uint32(74).string(message.clientId);
    }
    if (message.bandEpoch !== "") {
      writer.uint32(82).string(message.bandEpoch);
    }
    if (message.priceExpiryTime !== BigInt(0)) {
      writer.uint32(88).uint64(message.priceExpiryTime);
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
          message.bandChannelSource = reader.string();
          break;
        case 2:
          message.oracleScriptId = reader.uint64();
          break;
        case 3:
          message.multiplier = reader.uint64();
          break;
        case 4:
          message.askCount = reader.uint64();
          break;
        case 5:
          message.minCount = reader.uint64();
          break;
        case 6:
          message.feeLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.prepareGas = reader.uint64();
          break;
        case 8:
          message.executeGas = reader.uint64();
          break;
        case 9:
          message.clientId = reader.string();
          break;
        case 10:
          message.bandEpoch = reader.string();
          break;
        case 11:
          message.priceExpiryTime = reader.uint64();
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
    message.bandChannelSource = object.bandChannelSource ?? "";
    message.oracleScriptId = object.oracleScriptId !== undefined && object.oracleScriptId !== null ? BigInt(object.oracleScriptId.toString()) : BigInt(0);
    message.multiplier = object.multiplier !== undefined && object.multiplier !== null ? BigInt(object.multiplier.toString()) : BigInt(0);
    message.askCount = object.askCount !== undefined && object.askCount !== null ? BigInt(object.askCount.toString()) : BigInt(0);
    message.minCount = object.minCount !== undefined && object.minCount !== null ? BigInt(object.minCount.toString()) : BigInt(0);
    message.feeLimit = object.feeLimit?.map(e => Coin.fromPartial(e)) || [];
    message.prepareGas = object.prepareGas !== undefined && object.prepareGas !== null ? BigInt(object.prepareGas.toString()) : BigInt(0);
    message.executeGas = object.executeGas !== undefined && object.executeGas !== null ? BigInt(object.executeGas.toString()) : BigInt(0);
    message.clientId = object.clientId ?? "";
    message.bandEpoch = object.bandEpoch ?? "";
    message.priceExpiryTime = object.priceExpiryTime !== undefined && object.priceExpiryTime !== null ? BigInt(object.priceExpiryTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      bandChannelSource: object.band_channel_source,
      oracleScriptId: BigInt(object.oracle_script_id),
      multiplier: BigInt(object.multiplier),
      askCount: BigInt(object.ask_count),
      minCount: BigInt(object.min_count),
      feeLimit: Array.isArray(object?.fee_limit) ? object.fee_limit.map((e: any) => Coin.fromAmino(e)) : [],
      prepareGas: BigInt(object.prepare_gas),
      executeGas: BigInt(object.execute_gas),
      clientId: object.client_id,
      bandEpoch: object.band_epoch,
      priceExpiryTime: BigInt(object.price_expiry_time)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.band_channel_source = message.bandChannelSource;
    obj.oracle_script_id = message.oracleScriptId ? message.oracleScriptId.toString() : undefined;
    obj.multiplier = message.multiplier ? message.multiplier.toString() : undefined;
    obj.ask_count = message.askCount ? message.askCount.toString() : undefined;
    obj.min_count = message.minCount ? message.minCount.toString() : undefined;
    if (message.feeLimit) {
      obj.fee_limit = message.feeLimit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_limit = [];
    }
    obj.prepare_gas = message.prepareGas ? message.prepareGas.toString() : undefined;
    obj.execute_gas = message.executeGas ? message.executeGas.toString() : undefined;
    obj.client_id = message.clientId;
    obj.band_epoch = message.bandEpoch;
    obj.price_expiry_time = message.priceExpiryTime ? message.priceExpiryTime.toString() : undefined;
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
      typeUrl: "/elys.oracle.Params",
      value: Params.encode(message).finish()
    };
  }
};