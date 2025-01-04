//@ts-nocheck
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
  lifeTimeInBlocks: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.oracle.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  band_channel_source?: string;
  oracle_script_id?: string;
  multiplier?: string;
  ask_count?: string;
  min_count?: string;
  fee_limit?: CoinAmino[];
  prepare_gas?: string;
  execute_gas?: string;
  client_id?: string;
  band_epoch?: string;
  price_expiry_time?: string;
  life_time_in_blocks?: string;
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
  life_time_in_blocks: bigint;
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
    priceExpiryTime: BigInt(0),
    lifeTimeInBlocks: BigInt(0)
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
    if (message.lifeTimeInBlocks !== BigInt(0)) {
      writer.uint32(96).uint64(message.lifeTimeInBlocks);
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
        case 12:
          message.lifeTimeInBlocks = reader.uint64();
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
    message.lifeTimeInBlocks = object.lifeTimeInBlocks !== undefined && object.lifeTimeInBlocks !== null ? BigInt(object.lifeTimeInBlocks.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.band_channel_source !== undefined && object.band_channel_source !== null) {
      message.bandChannelSource = object.band_channel_source;
    }
    if (object.oracle_script_id !== undefined && object.oracle_script_id !== null) {
      message.oracleScriptId = BigInt(object.oracle_script_id);
    }
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = BigInt(object.multiplier);
    }
    if (object.ask_count !== undefined && object.ask_count !== null) {
      message.askCount = BigInt(object.ask_count);
    }
    if (object.min_count !== undefined && object.min_count !== null) {
      message.minCount = BigInt(object.min_count);
    }
    message.feeLimit = object.fee_limit?.map(e => Coin.fromAmino(e)) || [];
    if (object.prepare_gas !== undefined && object.prepare_gas !== null) {
      message.prepareGas = BigInt(object.prepare_gas);
    }
    if (object.execute_gas !== undefined && object.execute_gas !== null) {
      message.executeGas = BigInt(object.execute_gas);
    }
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.band_epoch !== undefined && object.band_epoch !== null) {
      message.bandEpoch = object.band_epoch;
    }
    if (object.price_expiry_time !== undefined && object.price_expiry_time !== null) {
      message.priceExpiryTime = BigInt(object.price_expiry_time);
    }
    if (object.life_time_in_blocks !== undefined && object.life_time_in_blocks !== null) {
      message.lifeTimeInBlocks = BigInt(object.life_time_in_blocks);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.band_channel_source = message.bandChannelSource === "" ? undefined : message.bandChannelSource;
    obj.oracle_script_id = message.oracleScriptId !== BigInt(0) ? message.oracleScriptId?.toString() : undefined;
    obj.multiplier = message.multiplier !== BigInt(0) ? message.multiplier?.toString() : undefined;
    obj.ask_count = message.askCount !== BigInt(0) ? message.askCount?.toString() : undefined;
    obj.min_count = message.minCount !== BigInt(0) ? message.minCount?.toString() : undefined;
    if (message.feeLimit) {
      obj.fee_limit = message.feeLimit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_limit = message.feeLimit;
    }
    obj.prepare_gas = message.prepareGas !== BigInt(0) ? message.prepareGas?.toString() : undefined;
    obj.execute_gas = message.executeGas !== BigInt(0) ? message.executeGas?.toString() : undefined;
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.band_epoch = message.bandEpoch === "" ? undefined : message.bandEpoch;
    obj.price_expiry_time = message.priceExpiryTime !== BigInt(0) ? message.priceExpiryTime?.toString() : undefined;
    obj.life_time_in_blocks = message.lifeTimeInBlocks !== BigInt(0) ? message.lifeTimeInBlocks?.toString() : undefined;
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