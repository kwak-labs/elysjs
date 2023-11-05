import { Price, PriceAmino, PriceSDKType } from "./price";
import { BandPriceCallData, BandPriceCallDataAmino, BandPriceCallDataSDKType } from "./band_price";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface MsgRequestBandPrice {
  creator: string;
  oracleScriptId: bigint;
  sourceChannel: string;
  calldata?: BandPriceCallData;
  askCount: bigint;
  minCount: bigint;
  feeLimit: Coin[];
  prepareGas: bigint;
  executeGas: bigint;
  clientId: string;
}
export interface MsgRequestBandPriceProtoMsg {
  typeUrl: "/elys.oracle.MsgRequestBandPrice";
  value: Uint8Array;
}
export interface MsgRequestBandPriceAmino {
  creator: string;
  oracle_script_id: string;
  source_channel: string;
  calldata?: BandPriceCallDataAmino;
  ask_count: string;
  min_count: string;
  fee_limit: CoinAmino[];
  prepare_gas: string;
  execute_gas: string;
  client_id: string;
}
export interface MsgRequestBandPriceAminoMsg {
  type: "/elys.oracle.MsgRequestBandPrice";
  value: MsgRequestBandPriceAmino;
}
export interface MsgRequestBandPriceSDKType {
  creator: string;
  oracle_script_id: bigint;
  source_channel: string;
  calldata?: BandPriceCallDataSDKType;
  ask_count: bigint;
  min_count: bigint;
  fee_limit: CoinSDKType[];
  prepare_gas: bigint;
  execute_gas: bigint;
  client_id: string;
}
export interface MsgRequestBandPriceResponse {}
export interface MsgRequestBandPriceResponseProtoMsg {
  typeUrl: "/elys.oracle.MsgRequestBandPriceResponse";
  value: Uint8Array;
}
export interface MsgRequestBandPriceResponseAmino {}
export interface MsgRequestBandPriceResponseAminoMsg {
  type: "/elys.oracle.MsgRequestBandPriceResponse";
  value: MsgRequestBandPriceResponseAmino;
}
export interface MsgRequestBandPriceResponseSDKType {}
export interface MsgFeedPrice {
  asset: string;
  price: string;
  source: string;
  provider: string;
}
export interface MsgFeedPriceProtoMsg {
  typeUrl: "/elys.oracle.MsgFeedPrice";
  value: Uint8Array;
}
export interface MsgFeedPriceAmino {
  asset: string;
  price: string;
  source: string;
  provider: string;
}
export interface MsgFeedPriceAminoMsg {
  type: "/elys.oracle.MsgFeedPrice";
  value: MsgFeedPriceAmino;
}
export interface MsgFeedPriceSDKType {
  asset: string;
  price: string;
  source: string;
  provider: string;
}
export interface MsgFeedPriceResponse {}
export interface MsgFeedPriceResponseProtoMsg {
  typeUrl: "/elys.oracle.MsgFeedPriceResponse";
  value: Uint8Array;
}
export interface MsgFeedPriceResponseAmino {}
export interface MsgFeedPriceResponseAminoMsg {
  type: "/elys.oracle.MsgFeedPriceResponse";
  value: MsgFeedPriceResponseAmino;
}
export interface MsgFeedPriceResponseSDKType {}
export interface MsgSetPriceFeeder {
  feeder: string;
  isActive: boolean;
}
export interface MsgSetPriceFeederProtoMsg {
  typeUrl: "/elys.oracle.MsgSetPriceFeeder";
  value: Uint8Array;
}
export interface MsgSetPriceFeederAmino {
  feeder: string;
  is_active: boolean;
}
export interface MsgSetPriceFeederAminoMsg {
  type: "/elys.oracle.MsgSetPriceFeeder";
  value: MsgSetPriceFeederAmino;
}
export interface MsgSetPriceFeederSDKType {
  feeder: string;
  is_active: boolean;
}
export interface MsgSetPriceFeederResponse {}
export interface MsgSetPriceFeederResponseProtoMsg {
  typeUrl: "/elys.oracle.MsgSetPriceFeederResponse";
  value: Uint8Array;
}
export interface MsgSetPriceFeederResponseAmino {}
export interface MsgSetPriceFeederResponseAminoMsg {
  type: "/elys.oracle.MsgSetPriceFeederResponse";
  value: MsgSetPriceFeederResponseAmino;
}
export interface MsgSetPriceFeederResponseSDKType {}
export interface MsgDeletePriceFeeder {
  feeder: string;
}
export interface MsgDeletePriceFeederProtoMsg {
  typeUrl: "/elys.oracle.MsgDeletePriceFeeder";
  value: Uint8Array;
}
export interface MsgDeletePriceFeederAmino {
  feeder: string;
}
export interface MsgDeletePriceFeederAminoMsg {
  type: "/elys.oracle.MsgDeletePriceFeeder";
  value: MsgDeletePriceFeederAmino;
}
export interface MsgDeletePriceFeederSDKType {
  feeder: string;
}
export interface MsgDeletePriceFeederResponse {}
export interface MsgDeletePriceFeederResponseProtoMsg {
  typeUrl: "/elys.oracle.MsgDeletePriceFeederResponse";
  value: Uint8Array;
}
export interface MsgDeletePriceFeederResponseAmino {}
export interface MsgDeletePriceFeederResponseAminoMsg {
  type: "/elys.oracle.MsgDeletePriceFeederResponse";
  value: MsgDeletePriceFeederResponseAmino;
}
export interface MsgDeletePriceFeederResponseSDKType {}
export interface MsgFeedMultiplePrices {
  creator: string;
  prices: Price[];
}
export interface MsgFeedMultiplePricesProtoMsg {
  typeUrl: "/elys.oracle.MsgFeedMultiplePrices";
  value: Uint8Array;
}
export interface MsgFeedMultiplePricesAmino {
  creator: string;
  prices: PriceAmino[];
}
export interface MsgFeedMultiplePricesAminoMsg {
  type: "/elys.oracle.MsgFeedMultiplePrices";
  value: MsgFeedMultiplePricesAmino;
}
export interface MsgFeedMultiplePricesSDKType {
  creator: string;
  prices: PriceSDKType[];
}
export interface MsgFeedMultiplePricesResponse {}
export interface MsgFeedMultiplePricesResponseProtoMsg {
  typeUrl: "/elys.oracle.MsgFeedMultiplePricesResponse";
  value: Uint8Array;
}
export interface MsgFeedMultiplePricesResponseAmino {}
export interface MsgFeedMultiplePricesResponseAminoMsg {
  type: "/elys.oracle.MsgFeedMultiplePricesResponse";
  value: MsgFeedMultiplePricesResponseAmino;
}
export interface MsgFeedMultiplePricesResponseSDKType {}
function createBaseMsgRequestBandPrice(): MsgRequestBandPrice {
  return {
    creator: "",
    oracleScriptId: BigInt(0),
    sourceChannel: "",
    calldata: undefined,
    askCount: BigInt(0),
    minCount: BigInt(0),
    feeLimit: [],
    prepareGas: BigInt(0),
    executeGas: BigInt(0),
    clientId: ""
  };
}
export const MsgRequestBandPrice = {
  typeUrl: "/elys.oracle.MsgRequestBandPrice",
  encode(message: MsgRequestBandPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.oracleScriptId !== BigInt(0)) {
      writer.uint32(16).uint64(message.oracleScriptId);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(26).string(message.sourceChannel);
    }
    if (message.calldata !== undefined) {
      BandPriceCallData.encode(message.calldata, writer.uint32(34).fork()).ldelim();
    }
    if (message.askCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.askCount);
    }
    if (message.minCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.minCount);
    }
    for (const v of message.feeLimit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.prepareGas !== BigInt(0)) {
      writer.uint32(64).uint64(message.prepareGas);
    }
    if (message.executeGas !== BigInt(0)) {
      writer.uint32(72).uint64(message.executeGas);
    }
    if (message.clientId !== "") {
      writer.uint32(82).string(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestBandPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBandPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.oracleScriptId = reader.uint64();
          break;
        case 3:
          message.sourceChannel = reader.string();
          break;
        case 4:
          message.calldata = BandPriceCallData.decode(reader, reader.uint32());
          break;
        case 5:
          message.askCount = reader.uint64();
          break;
        case 6:
          message.minCount = reader.uint64();
          break;
        case 7:
          message.feeLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.prepareGas = reader.uint64();
          break;
        case 9:
          message.executeGas = reader.uint64();
          break;
        case 10:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRequestBandPrice>): MsgRequestBandPrice {
    const message = createBaseMsgRequestBandPrice();
    message.creator = object.creator ?? "";
    message.oracleScriptId = object.oracleScriptId !== undefined && object.oracleScriptId !== null ? BigInt(object.oracleScriptId.toString()) : BigInt(0);
    message.sourceChannel = object.sourceChannel ?? "";
    message.calldata = object.calldata !== undefined && object.calldata !== null ? BandPriceCallData.fromPartial(object.calldata) : undefined;
    message.askCount = object.askCount !== undefined && object.askCount !== null ? BigInt(object.askCount.toString()) : BigInt(0);
    message.minCount = object.minCount !== undefined && object.minCount !== null ? BigInt(object.minCount.toString()) : BigInt(0);
    message.feeLimit = object.feeLimit?.map(e => Coin.fromPartial(e)) || [];
    message.prepareGas = object.prepareGas !== undefined && object.prepareGas !== null ? BigInt(object.prepareGas.toString()) : BigInt(0);
    message.executeGas = object.executeGas !== undefined && object.executeGas !== null ? BigInt(object.executeGas.toString()) : BigInt(0);
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromAmino(object: MsgRequestBandPriceAmino): MsgRequestBandPrice {
    return {
      creator: object.creator,
      oracleScriptId: BigInt(object.oracle_script_id),
      sourceChannel: object.source_channel,
      calldata: object?.calldata ? BandPriceCallData.fromAmino(object.calldata) : undefined,
      askCount: BigInt(object.ask_count),
      minCount: BigInt(object.min_count),
      feeLimit: Array.isArray(object?.fee_limit) ? object.fee_limit.map((e: any) => Coin.fromAmino(e)) : [],
      prepareGas: BigInt(object.prepare_gas),
      executeGas: BigInt(object.execute_gas),
      clientId: object.client_id
    };
  },
  toAmino(message: MsgRequestBandPrice): MsgRequestBandPriceAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.oracle_script_id = message.oracleScriptId ? message.oracleScriptId.toString() : undefined;
    obj.source_channel = message.sourceChannel;
    obj.calldata = message.calldata ? BandPriceCallData.toAmino(message.calldata) : undefined;
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
    return obj;
  },
  fromAminoMsg(object: MsgRequestBandPriceAminoMsg): MsgRequestBandPrice {
    return MsgRequestBandPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestBandPriceProtoMsg): MsgRequestBandPrice {
    return MsgRequestBandPrice.decode(message.value);
  },
  toProto(message: MsgRequestBandPrice): Uint8Array {
    return MsgRequestBandPrice.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestBandPrice): MsgRequestBandPriceProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgRequestBandPrice",
      value: MsgRequestBandPrice.encode(message).finish()
    };
  }
};
function createBaseMsgRequestBandPriceResponse(): MsgRequestBandPriceResponse {
  return {};
}
export const MsgRequestBandPriceResponse = {
  typeUrl: "/elys.oracle.MsgRequestBandPriceResponse",
  encode(_: MsgRequestBandPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestBandPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBandPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgRequestBandPriceResponse>): MsgRequestBandPriceResponse {
    const message = createBaseMsgRequestBandPriceResponse();
    return message;
  },
  fromAmino(_: MsgRequestBandPriceResponseAmino): MsgRequestBandPriceResponse {
    return {};
  },
  toAmino(_: MsgRequestBandPriceResponse): MsgRequestBandPriceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestBandPriceResponseAminoMsg): MsgRequestBandPriceResponse {
    return MsgRequestBandPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestBandPriceResponseProtoMsg): MsgRequestBandPriceResponse {
    return MsgRequestBandPriceResponse.decode(message.value);
  },
  toProto(message: MsgRequestBandPriceResponse): Uint8Array {
    return MsgRequestBandPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestBandPriceResponse): MsgRequestBandPriceResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgRequestBandPriceResponse",
      value: MsgRequestBandPriceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFeedPrice(): MsgFeedPrice {
  return {
    asset: "",
    price: "",
    source: "",
    provider: ""
  };
}
export const MsgFeedPrice = {
  typeUrl: "/elys.oracle.MsgFeedPrice",
  encode(message: MsgFeedPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.provider !== "") {
      writer.uint32(34).string(message.provider);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFeedPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFeedPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.source = reader.string();
          break;
        case 4:
          message.provider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgFeedPrice>): MsgFeedPrice {
    const message = createBaseMsgFeedPrice();
    message.asset = object.asset ?? "";
    message.price = object.price ?? "";
    message.source = object.source ?? "";
    message.provider = object.provider ?? "";
    return message;
  },
  fromAmino(object: MsgFeedPriceAmino): MsgFeedPrice {
    return {
      asset: object.asset,
      price: object.price,
      source: object.source,
      provider: object.provider
    };
  },
  toAmino(message: MsgFeedPrice): MsgFeedPriceAmino {
    const obj: any = {};
    obj.asset = message.asset;
    obj.price = message.price;
    obj.source = message.source;
    obj.provider = message.provider;
    return obj;
  },
  fromAminoMsg(object: MsgFeedPriceAminoMsg): MsgFeedPrice {
    return MsgFeedPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFeedPriceProtoMsg): MsgFeedPrice {
    return MsgFeedPrice.decode(message.value);
  },
  toProto(message: MsgFeedPrice): Uint8Array {
    return MsgFeedPrice.encode(message).finish();
  },
  toProtoMsg(message: MsgFeedPrice): MsgFeedPriceProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgFeedPrice",
      value: MsgFeedPrice.encode(message).finish()
    };
  }
};
function createBaseMsgFeedPriceResponse(): MsgFeedPriceResponse {
  return {};
}
export const MsgFeedPriceResponse = {
  typeUrl: "/elys.oracle.MsgFeedPriceResponse",
  encode(_: MsgFeedPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFeedPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFeedPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgFeedPriceResponse>): MsgFeedPriceResponse {
    const message = createBaseMsgFeedPriceResponse();
    return message;
  },
  fromAmino(_: MsgFeedPriceResponseAmino): MsgFeedPriceResponse {
    return {};
  },
  toAmino(_: MsgFeedPriceResponse): MsgFeedPriceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFeedPriceResponseAminoMsg): MsgFeedPriceResponse {
    return MsgFeedPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFeedPriceResponseProtoMsg): MsgFeedPriceResponse {
    return MsgFeedPriceResponse.decode(message.value);
  },
  toProto(message: MsgFeedPriceResponse): Uint8Array {
    return MsgFeedPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFeedPriceResponse): MsgFeedPriceResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgFeedPriceResponse",
      value: MsgFeedPriceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetPriceFeeder(): MsgSetPriceFeeder {
  return {
    feeder: "",
    isActive: false
  };
}
export const MsgSetPriceFeeder = {
  typeUrl: "/elys.oracle.MsgSetPriceFeeder",
  encode(message: MsgSetPriceFeeder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeder !== "") {
      writer.uint32(10).string(message.feeder);
    }
    if (message.isActive === true) {
      writer.uint32(16).bool(message.isActive);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPriceFeeder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPriceFeeder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeder = reader.string();
          break;
        case 2:
          message.isActive = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetPriceFeeder>): MsgSetPriceFeeder {
    const message = createBaseMsgSetPriceFeeder();
    message.feeder = object.feeder ?? "";
    message.isActive = object.isActive ?? false;
    return message;
  },
  fromAmino(object: MsgSetPriceFeederAmino): MsgSetPriceFeeder {
    return {
      feeder: object.feeder,
      isActive: object.is_active
    };
  },
  toAmino(message: MsgSetPriceFeeder): MsgSetPriceFeederAmino {
    const obj: any = {};
    obj.feeder = message.feeder;
    obj.is_active = message.isActive;
    return obj;
  },
  fromAminoMsg(object: MsgSetPriceFeederAminoMsg): MsgSetPriceFeeder {
    return MsgSetPriceFeeder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPriceFeederProtoMsg): MsgSetPriceFeeder {
    return MsgSetPriceFeeder.decode(message.value);
  },
  toProto(message: MsgSetPriceFeeder): Uint8Array {
    return MsgSetPriceFeeder.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPriceFeeder): MsgSetPriceFeederProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgSetPriceFeeder",
      value: MsgSetPriceFeeder.encode(message).finish()
    };
  }
};
function createBaseMsgSetPriceFeederResponse(): MsgSetPriceFeederResponse {
  return {};
}
export const MsgSetPriceFeederResponse = {
  typeUrl: "/elys.oracle.MsgSetPriceFeederResponse",
  encode(_: MsgSetPriceFeederResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPriceFeederResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPriceFeederResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSetPriceFeederResponse>): MsgSetPriceFeederResponse {
    const message = createBaseMsgSetPriceFeederResponse();
    return message;
  },
  fromAmino(_: MsgSetPriceFeederResponseAmino): MsgSetPriceFeederResponse {
    return {};
  },
  toAmino(_: MsgSetPriceFeederResponse): MsgSetPriceFeederResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPriceFeederResponseAminoMsg): MsgSetPriceFeederResponse {
    return MsgSetPriceFeederResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPriceFeederResponseProtoMsg): MsgSetPriceFeederResponse {
    return MsgSetPriceFeederResponse.decode(message.value);
  },
  toProto(message: MsgSetPriceFeederResponse): Uint8Array {
    return MsgSetPriceFeederResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPriceFeederResponse): MsgSetPriceFeederResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgSetPriceFeederResponse",
      value: MsgSetPriceFeederResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeletePriceFeeder(): MsgDeletePriceFeeder {
  return {
    feeder: ""
  };
}
export const MsgDeletePriceFeeder = {
  typeUrl: "/elys.oracle.MsgDeletePriceFeeder",
  encode(message: MsgDeletePriceFeeder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeder !== "") {
      writer.uint32(10).string(message.feeder);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeletePriceFeeder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePriceFeeder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeletePriceFeeder>): MsgDeletePriceFeeder {
    const message = createBaseMsgDeletePriceFeeder();
    message.feeder = object.feeder ?? "";
    return message;
  },
  fromAmino(object: MsgDeletePriceFeederAmino): MsgDeletePriceFeeder {
    return {
      feeder: object.feeder
    };
  },
  toAmino(message: MsgDeletePriceFeeder): MsgDeletePriceFeederAmino {
    const obj: any = {};
    obj.feeder = message.feeder;
    return obj;
  },
  fromAminoMsg(object: MsgDeletePriceFeederAminoMsg): MsgDeletePriceFeeder {
    return MsgDeletePriceFeeder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeletePriceFeederProtoMsg): MsgDeletePriceFeeder {
    return MsgDeletePriceFeeder.decode(message.value);
  },
  toProto(message: MsgDeletePriceFeeder): Uint8Array {
    return MsgDeletePriceFeeder.encode(message).finish();
  },
  toProtoMsg(message: MsgDeletePriceFeeder): MsgDeletePriceFeederProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgDeletePriceFeeder",
      value: MsgDeletePriceFeeder.encode(message).finish()
    };
  }
};
function createBaseMsgDeletePriceFeederResponse(): MsgDeletePriceFeederResponse {
  return {};
}
export const MsgDeletePriceFeederResponse = {
  typeUrl: "/elys.oracle.MsgDeletePriceFeederResponse",
  encode(_: MsgDeletePriceFeederResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeletePriceFeederResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePriceFeederResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgDeletePriceFeederResponse>): MsgDeletePriceFeederResponse {
    const message = createBaseMsgDeletePriceFeederResponse();
    return message;
  },
  fromAmino(_: MsgDeletePriceFeederResponseAmino): MsgDeletePriceFeederResponse {
    return {};
  },
  toAmino(_: MsgDeletePriceFeederResponse): MsgDeletePriceFeederResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeletePriceFeederResponseAminoMsg): MsgDeletePriceFeederResponse {
    return MsgDeletePriceFeederResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeletePriceFeederResponseProtoMsg): MsgDeletePriceFeederResponse {
    return MsgDeletePriceFeederResponse.decode(message.value);
  },
  toProto(message: MsgDeletePriceFeederResponse): Uint8Array {
    return MsgDeletePriceFeederResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeletePriceFeederResponse): MsgDeletePriceFeederResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgDeletePriceFeederResponse",
      value: MsgDeletePriceFeederResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFeedMultiplePrices(): MsgFeedMultiplePrices {
  return {
    creator: "",
    prices: []
  };
}
export const MsgFeedMultiplePrices = {
  typeUrl: "/elys.oracle.MsgFeedMultiplePrices",
  encode(message: MsgFeedMultiplePrices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.prices) {
      Price.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFeedMultiplePrices {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFeedMultiplePrices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.prices.push(Price.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgFeedMultiplePrices>): MsgFeedMultiplePrices {
    const message = createBaseMsgFeedMultiplePrices();
    message.creator = object.creator ?? "";
    message.prices = object.prices?.map(e => Price.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgFeedMultiplePricesAmino): MsgFeedMultiplePrices {
    return {
      creator: object.creator,
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => Price.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgFeedMultiplePrices): MsgFeedMultiplePricesAmino {
    const obj: any = {};
    obj.creator = message.creator;
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? Price.toAmino(e) : undefined);
    } else {
      obj.prices = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgFeedMultiplePricesAminoMsg): MsgFeedMultiplePrices {
    return MsgFeedMultiplePrices.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFeedMultiplePricesProtoMsg): MsgFeedMultiplePrices {
    return MsgFeedMultiplePrices.decode(message.value);
  },
  toProto(message: MsgFeedMultiplePrices): Uint8Array {
    return MsgFeedMultiplePrices.encode(message).finish();
  },
  toProtoMsg(message: MsgFeedMultiplePrices): MsgFeedMultiplePricesProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgFeedMultiplePrices",
      value: MsgFeedMultiplePrices.encode(message).finish()
    };
  }
};
function createBaseMsgFeedMultiplePricesResponse(): MsgFeedMultiplePricesResponse {
  return {};
}
export const MsgFeedMultiplePricesResponse = {
  typeUrl: "/elys.oracle.MsgFeedMultiplePricesResponse",
  encode(_: MsgFeedMultiplePricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFeedMultiplePricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFeedMultiplePricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgFeedMultiplePricesResponse>): MsgFeedMultiplePricesResponse {
    const message = createBaseMsgFeedMultiplePricesResponse();
    return message;
  },
  fromAmino(_: MsgFeedMultiplePricesResponseAmino): MsgFeedMultiplePricesResponse {
    return {};
  },
  toAmino(_: MsgFeedMultiplePricesResponse): MsgFeedMultiplePricesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFeedMultiplePricesResponseAminoMsg): MsgFeedMultiplePricesResponse {
    return MsgFeedMultiplePricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFeedMultiplePricesResponseProtoMsg): MsgFeedMultiplePricesResponse {
    return MsgFeedMultiplePricesResponse.decode(message.value);
  },
  toProto(message: MsgFeedMultiplePricesResponse): Uint8Array {
    return MsgFeedMultiplePricesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFeedMultiplePricesResponse): MsgFeedMultiplePricesResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgFeedMultiplePricesResponse",
      value: MsgFeedMultiplePricesResponse.encode(message).finish()
    };
  }
};