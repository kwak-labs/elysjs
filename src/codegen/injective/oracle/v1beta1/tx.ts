import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
/** MsgRelayProviderPrice defines a SDK message for setting a price through the provider oracle. */
export interface MsgRelayProviderPrices {
  sender: string;
  provider: string;
  symbols: string[];
  prices: string[];
}
export interface MsgRelayProviderPricesProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices";
  value: Uint8Array;
}
/** MsgRelayProviderPrice defines a SDK message for setting a price through the provider oracle. */
export interface MsgRelayProviderPricesAmino {
  sender: string;
  provider: string;
  symbols: string[];
  prices: string[];
}
export interface MsgRelayProviderPricesAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayProviderPrices";
  value: MsgRelayProviderPricesAmino;
}
/** MsgRelayProviderPrice defines a SDK message for setting a price through the provider oracle. */
export interface MsgRelayProviderPricesSDKType {
  sender: string;
  provider: string;
  symbols: string[];
  prices: string[];
}
export interface MsgRelayProviderPricesResponse {}
export interface MsgRelayProviderPricesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPricesResponse";
  value: Uint8Array;
}
export interface MsgRelayProviderPricesResponseAmino {}
export interface MsgRelayProviderPricesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayProviderPricesResponse";
  value: MsgRelayProviderPricesResponseAmino;
}
export interface MsgRelayProviderPricesResponseSDKType {}
/** MsgRelayPriceFeedPrice defines a SDK message for setting a price through the pricefeed oracle. */
export interface MsgRelayPriceFeedPrice {
  sender: string;
  base: string[];
  quote: string[];
  /** price defines the price of the oracle base and quote */
  price: string[];
}
export interface MsgRelayPriceFeedPriceProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice";
  value: Uint8Array;
}
/** MsgRelayPriceFeedPrice defines a SDK message for setting a price through the pricefeed oracle. */
export interface MsgRelayPriceFeedPriceAmino {
  sender: string;
  base: string[];
  quote: string[];
  /** price defines the price of the oracle base and quote */
  price: string[];
}
export interface MsgRelayPriceFeedPriceAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice";
  value: MsgRelayPriceFeedPriceAmino;
}
/** MsgRelayPriceFeedPrice defines a SDK message for setting a price through the pricefeed oracle. */
export interface MsgRelayPriceFeedPriceSDKType {
  sender: string;
  base: string[];
  quote: string[];
  price: string[];
}
export interface MsgRelayPriceFeedPriceResponse {}
export interface MsgRelayPriceFeedPriceResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPriceResponse";
  value: Uint8Array;
}
export interface MsgRelayPriceFeedPriceResponseAmino {}
export interface MsgRelayPriceFeedPriceResponseAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayPriceFeedPriceResponse";
  value: MsgRelayPriceFeedPriceResponseAmino;
}
export interface MsgRelayPriceFeedPriceResponseSDKType {}
export interface MsgRelayBandRates {
  relayer: string;
  symbols: string[];
  rates: bigint[];
  resolveTimes: bigint[];
  requestIDs: bigint[];
}
export interface MsgRelayBandRatesProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates";
  value: Uint8Array;
}
export interface MsgRelayBandRatesAmino {
  relayer: string;
  symbols: string[];
  rates: string[];
  resolve_times: string[];
  requestIDs: string[];
}
export interface MsgRelayBandRatesAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayBandRates";
  value: MsgRelayBandRatesAmino;
}
export interface MsgRelayBandRatesSDKType {
  relayer: string;
  symbols: string[];
  rates: bigint[];
  resolve_times: bigint[];
  requestIDs: bigint[];
}
export interface MsgRelayBandRatesResponse {}
export interface MsgRelayBandRatesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRatesResponse";
  value: Uint8Array;
}
export interface MsgRelayBandRatesResponseAmino {}
export interface MsgRelayBandRatesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayBandRatesResponse";
  value: MsgRelayBandRatesResponseAmino;
}
export interface MsgRelayBandRatesResponseSDKType {}
/** MsgRelayCoinbaseMessages defines a SDK message for relaying price messages from Coinbase API. */
export interface MsgRelayCoinbaseMessages {
  sender: string;
  messages: Uint8Array[];
  signatures: Uint8Array[];
}
export interface MsgRelayCoinbaseMessagesProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages";
  value: Uint8Array;
}
/** MsgRelayCoinbaseMessages defines a SDK message for relaying price messages from Coinbase API. */
export interface MsgRelayCoinbaseMessagesAmino {
  sender: string;
  messages: Uint8Array[];
  signatures: Uint8Array[];
}
export interface MsgRelayCoinbaseMessagesAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages";
  value: MsgRelayCoinbaseMessagesAmino;
}
/** MsgRelayCoinbaseMessages defines a SDK message for relaying price messages from Coinbase API. */
export interface MsgRelayCoinbaseMessagesSDKType {
  sender: string;
  messages: Uint8Array[];
  signatures: Uint8Array[];
}
export interface MsgRelayCoinbaseMessagesResponse {}
export interface MsgRelayCoinbaseMessagesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessagesResponse";
  value: Uint8Array;
}
export interface MsgRelayCoinbaseMessagesResponseAmino {}
export interface MsgRelayCoinbaseMessagesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessagesResponse";
  value: MsgRelayCoinbaseMessagesResponseAmino;
}
export interface MsgRelayCoinbaseMessagesResponseSDKType {}
/** MsgRequestBandIBCRates defines a SDK message for requesting data from BandChain using IBC. */
export interface MsgRequestBandIBCRates {
  sender: string;
  requestId: bigint;
}
export interface MsgRequestBandIBCRatesProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates";
  value: Uint8Array;
}
/** MsgRequestBandIBCRates defines a SDK message for requesting data from BandChain using IBC. */
export interface MsgRequestBandIBCRatesAmino {
  sender: string;
  request_id: string;
}
export interface MsgRequestBandIBCRatesAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRequestBandIBCRates";
  value: MsgRequestBandIBCRatesAmino;
}
/** MsgRequestBandIBCRates defines a SDK message for requesting data from BandChain using IBC. */
export interface MsgRequestBandIBCRatesSDKType {
  sender: string;
  request_id: bigint;
}
/** MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type. */
export interface MsgRequestBandIBCRatesResponse {}
export interface MsgRequestBandIBCRatesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRatesResponse";
  value: Uint8Array;
}
/** MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type. */
export interface MsgRequestBandIBCRatesResponseAmino {}
export interface MsgRequestBandIBCRatesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRequestBandIBCRatesResponse";
  value: MsgRequestBandIBCRatesResponseAmino;
}
/** MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type. */
export interface MsgRequestBandIBCRatesResponseSDKType {}
function createBaseMsgRelayProviderPrices(): MsgRelayProviderPrices {
  return {
    sender: "",
    provider: "",
    symbols: [],
    prices: []
  };
}
export const MsgRelayProviderPrices = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
  encode(message: MsgRelayProviderPrices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    for (const v of message.symbols) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.prices) {
      writer.uint32(34).string(Decimal.fromUserInput(v!, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayProviderPrices {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayProviderPrices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.symbols.push(reader.string());
          break;
        case 4:
          message.prices.push(Decimal.fromAtomics(reader.string(), 18).toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRelayProviderPrices>): MsgRelayProviderPrices {
    const message = createBaseMsgRelayProviderPrices();
    message.sender = object.sender ?? "";
    message.provider = object.provider ?? "";
    message.symbols = object.symbols?.map(e => e) || [];
    message.prices = object.prices?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRelayProviderPricesAmino): MsgRelayProviderPrices {
    return {
      sender: object.sender,
      provider: object.provider,
      symbols: Array.isArray(object?.symbols) ? object.symbols.map((e: any) => e) : [],
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgRelayProviderPrices): MsgRelayProviderPricesAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.provider = message.provider;
    if (message.symbols) {
      obj.symbols = message.symbols.map(e => e);
    } else {
      obj.symbols = [];
    }
    if (message.prices) {
      obj.prices = message.prices.map(e => e);
    } else {
      obj.prices = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgRelayProviderPricesAminoMsg): MsgRelayProviderPrices {
    return MsgRelayProviderPrices.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayProviderPricesProtoMsg): MsgRelayProviderPrices {
    return MsgRelayProviderPrices.decode(message.value);
  },
  toProto(message: MsgRelayProviderPrices): Uint8Array {
    return MsgRelayProviderPrices.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayProviderPrices): MsgRelayProviderPricesProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
      value: MsgRelayProviderPrices.encode(message).finish()
    };
  }
};
function createBaseMsgRelayProviderPricesResponse(): MsgRelayProviderPricesResponse {
  return {};
}
export const MsgRelayProviderPricesResponse = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPricesResponse",
  encode(_: MsgRelayProviderPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayProviderPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayProviderPricesResponse();
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
  fromPartial(_: Partial<MsgRelayProviderPricesResponse>): MsgRelayProviderPricesResponse {
    const message = createBaseMsgRelayProviderPricesResponse();
    return message;
  },
  fromAmino(_: MsgRelayProviderPricesResponseAmino): MsgRelayProviderPricesResponse {
    return {};
  },
  toAmino(_: MsgRelayProviderPricesResponse): MsgRelayProviderPricesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRelayProviderPricesResponseAminoMsg): MsgRelayProviderPricesResponse {
    return MsgRelayProviderPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayProviderPricesResponseProtoMsg): MsgRelayProviderPricesResponse {
    return MsgRelayProviderPricesResponse.decode(message.value);
  },
  toProto(message: MsgRelayProviderPricesResponse): Uint8Array {
    return MsgRelayProviderPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayProviderPricesResponse): MsgRelayProviderPricesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPricesResponse",
      value: MsgRelayProviderPricesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRelayPriceFeedPrice(): MsgRelayPriceFeedPrice {
  return {
    sender: "",
    base: [],
    quote: [],
    price: []
  };
}
export const MsgRelayPriceFeedPrice = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
  encode(message: MsgRelayPriceFeedPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.base) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.quote) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.price) {
      writer.uint32(34).string(Decimal.fromUserInput(v!, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayPriceFeedPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayPriceFeedPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.base.push(reader.string());
          break;
        case 3:
          message.quote.push(reader.string());
          break;
        case 4:
          message.price.push(Decimal.fromAtomics(reader.string(), 18).toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRelayPriceFeedPrice>): MsgRelayPriceFeedPrice {
    const message = createBaseMsgRelayPriceFeedPrice();
    message.sender = object.sender ?? "";
    message.base = object.base?.map(e => e) || [];
    message.quote = object.quote?.map(e => e) || [];
    message.price = object.price?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRelayPriceFeedPriceAmino): MsgRelayPriceFeedPrice {
    return {
      sender: object.sender,
      base: Array.isArray(object?.base) ? object.base.map((e: any) => e) : [],
      quote: Array.isArray(object?.quote) ? object.quote.map((e: any) => e) : [],
      price: Array.isArray(object?.price) ? object.price.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgRelayPriceFeedPrice): MsgRelayPriceFeedPriceAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.base) {
      obj.base = message.base.map(e => e);
    } else {
      obj.base = [];
    }
    if (message.quote) {
      obj.quote = message.quote.map(e => e);
    } else {
      obj.quote = [];
    }
    if (message.price) {
      obj.price = message.price.map(e => e);
    } else {
      obj.price = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgRelayPriceFeedPriceAminoMsg): MsgRelayPriceFeedPrice {
    return MsgRelayPriceFeedPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayPriceFeedPriceProtoMsg): MsgRelayPriceFeedPrice {
    return MsgRelayPriceFeedPrice.decode(message.value);
  },
  toProto(message: MsgRelayPriceFeedPrice): Uint8Array {
    return MsgRelayPriceFeedPrice.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayPriceFeedPrice): MsgRelayPriceFeedPriceProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
      value: MsgRelayPriceFeedPrice.encode(message).finish()
    };
  }
};
function createBaseMsgRelayPriceFeedPriceResponse(): MsgRelayPriceFeedPriceResponse {
  return {};
}
export const MsgRelayPriceFeedPriceResponse = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPriceResponse",
  encode(_: MsgRelayPriceFeedPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayPriceFeedPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayPriceFeedPriceResponse();
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
  fromPartial(_: Partial<MsgRelayPriceFeedPriceResponse>): MsgRelayPriceFeedPriceResponse {
    const message = createBaseMsgRelayPriceFeedPriceResponse();
    return message;
  },
  fromAmino(_: MsgRelayPriceFeedPriceResponseAmino): MsgRelayPriceFeedPriceResponse {
    return {};
  },
  toAmino(_: MsgRelayPriceFeedPriceResponse): MsgRelayPriceFeedPriceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRelayPriceFeedPriceResponseAminoMsg): MsgRelayPriceFeedPriceResponse {
    return MsgRelayPriceFeedPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayPriceFeedPriceResponseProtoMsg): MsgRelayPriceFeedPriceResponse {
    return MsgRelayPriceFeedPriceResponse.decode(message.value);
  },
  toProto(message: MsgRelayPriceFeedPriceResponse): Uint8Array {
    return MsgRelayPriceFeedPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayPriceFeedPriceResponse): MsgRelayPriceFeedPriceResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPriceResponse",
      value: MsgRelayPriceFeedPriceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRelayBandRates(): MsgRelayBandRates {
  return {
    relayer: "",
    symbols: [],
    rates: [],
    resolveTimes: [],
    requestIDs: []
  };
}
export const MsgRelayBandRates = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
  encode(message: MsgRelayBandRates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }
    for (const v of message.symbols) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.rates) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.resolveTimes) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.requestIDs) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayBandRates {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayBandRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayer = reader.string();
          break;
        case 2:
          message.symbols.push(reader.string());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.rates.push(reader.uint64());
            }
          } else {
            message.rates.push(reader.uint64());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.resolveTimes.push(reader.uint64());
            }
          } else {
            message.resolveTimes.push(reader.uint64());
          }
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.requestIDs.push(reader.uint64());
            }
          } else {
            message.requestIDs.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRelayBandRates>): MsgRelayBandRates {
    const message = createBaseMsgRelayBandRates();
    message.relayer = object.relayer ?? "";
    message.symbols = object.symbols?.map(e => e) || [];
    message.rates = object.rates?.map(e => BigInt(e.toString())) || [];
    message.resolveTimes = object.resolveTimes?.map(e => BigInt(e.toString())) || [];
    message.requestIDs = object.requestIDs?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgRelayBandRatesAmino): MsgRelayBandRates {
    return {
      relayer: object.relayer,
      symbols: Array.isArray(object?.symbols) ? object.symbols.map((e: any) => e) : [],
      rates: Array.isArray(object?.rates) ? object.rates.map((e: any) => BigInt(e)) : [],
      resolveTimes: Array.isArray(object?.resolve_times) ? object.resolve_times.map((e: any) => BigInt(e)) : [],
      requestIDs: Array.isArray(object?.requestIDs) ? object.requestIDs.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: MsgRelayBandRates): MsgRelayBandRatesAmino {
    const obj: any = {};
    obj.relayer = message.relayer;
    if (message.symbols) {
      obj.symbols = message.symbols.map(e => e);
    } else {
      obj.symbols = [];
    }
    if (message.rates) {
      obj.rates = message.rates.map(e => e.toString());
    } else {
      obj.rates = [];
    }
    if (message.resolveTimes) {
      obj.resolve_times = message.resolveTimes.map(e => e.toString());
    } else {
      obj.resolve_times = [];
    }
    if (message.requestIDs) {
      obj.requestIDs = message.requestIDs.map(e => e.toString());
    } else {
      obj.requestIDs = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgRelayBandRatesAminoMsg): MsgRelayBandRates {
    return MsgRelayBandRates.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayBandRatesProtoMsg): MsgRelayBandRates {
    return MsgRelayBandRates.decode(message.value);
  },
  toProto(message: MsgRelayBandRates): Uint8Array {
    return MsgRelayBandRates.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayBandRates): MsgRelayBandRatesProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
      value: MsgRelayBandRates.encode(message).finish()
    };
  }
};
function createBaseMsgRelayBandRatesResponse(): MsgRelayBandRatesResponse {
  return {};
}
export const MsgRelayBandRatesResponse = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRatesResponse",
  encode(_: MsgRelayBandRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayBandRatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayBandRatesResponse();
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
  fromPartial(_: Partial<MsgRelayBandRatesResponse>): MsgRelayBandRatesResponse {
    const message = createBaseMsgRelayBandRatesResponse();
    return message;
  },
  fromAmino(_: MsgRelayBandRatesResponseAmino): MsgRelayBandRatesResponse {
    return {};
  },
  toAmino(_: MsgRelayBandRatesResponse): MsgRelayBandRatesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRelayBandRatesResponseAminoMsg): MsgRelayBandRatesResponse {
    return MsgRelayBandRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayBandRatesResponseProtoMsg): MsgRelayBandRatesResponse {
    return MsgRelayBandRatesResponse.decode(message.value);
  },
  toProto(message: MsgRelayBandRatesResponse): Uint8Array {
    return MsgRelayBandRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayBandRatesResponse): MsgRelayBandRatesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRatesResponse",
      value: MsgRelayBandRatesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRelayCoinbaseMessages(): MsgRelayCoinbaseMessages {
  return {
    sender: "",
    messages: [],
    signatures: []
  };
}
export const MsgRelayCoinbaseMessages = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
  encode(message: MsgRelayCoinbaseMessages, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.messages) {
      writer.uint32(18).bytes(v!);
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayCoinbaseMessages {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayCoinbaseMessages();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.messages.push(reader.bytes());
          break;
        case 3:
          message.signatures.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRelayCoinbaseMessages>): MsgRelayCoinbaseMessages {
    const message = createBaseMsgRelayCoinbaseMessages();
    message.sender = object.sender ?? "";
    message.messages = object.messages?.map(e => e) || [];
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRelayCoinbaseMessagesAmino): MsgRelayCoinbaseMessages {
    return {
      sender: object.sender,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => e) : [],
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgRelayCoinbaseMessages): MsgRelayCoinbaseMessagesAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.messages) {
      obj.messages = message.messages.map(e => e);
    } else {
      obj.messages = [];
    }
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e);
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgRelayCoinbaseMessagesAminoMsg): MsgRelayCoinbaseMessages {
    return MsgRelayCoinbaseMessages.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayCoinbaseMessagesProtoMsg): MsgRelayCoinbaseMessages {
    return MsgRelayCoinbaseMessages.decode(message.value);
  },
  toProto(message: MsgRelayCoinbaseMessages): Uint8Array {
    return MsgRelayCoinbaseMessages.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayCoinbaseMessages): MsgRelayCoinbaseMessagesProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
      value: MsgRelayCoinbaseMessages.encode(message).finish()
    };
  }
};
function createBaseMsgRelayCoinbaseMessagesResponse(): MsgRelayCoinbaseMessagesResponse {
  return {};
}
export const MsgRelayCoinbaseMessagesResponse = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessagesResponse",
  encode(_: MsgRelayCoinbaseMessagesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayCoinbaseMessagesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayCoinbaseMessagesResponse();
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
  fromPartial(_: Partial<MsgRelayCoinbaseMessagesResponse>): MsgRelayCoinbaseMessagesResponse {
    const message = createBaseMsgRelayCoinbaseMessagesResponse();
    return message;
  },
  fromAmino(_: MsgRelayCoinbaseMessagesResponseAmino): MsgRelayCoinbaseMessagesResponse {
    return {};
  },
  toAmino(_: MsgRelayCoinbaseMessagesResponse): MsgRelayCoinbaseMessagesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRelayCoinbaseMessagesResponseAminoMsg): MsgRelayCoinbaseMessagesResponse {
    return MsgRelayCoinbaseMessagesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayCoinbaseMessagesResponseProtoMsg): MsgRelayCoinbaseMessagesResponse {
    return MsgRelayCoinbaseMessagesResponse.decode(message.value);
  },
  toProto(message: MsgRelayCoinbaseMessagesResponse): Uint8Array {
    return MsgRelayCoinbaseMessagesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayCoinbaseMessagesResponse): MsgRelayCoinbaseMessagesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessagesResponse",
      value: MsgRelayCoinbaseMessagesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRequestBandIBCRates(): MsgRequestBandIBCRates {
  return {
    sender: "",
    requestId: BigInt(0)
  };
}
export const MsgRequestBandIBCRates = {
  typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
  encode(message: MsgRequestBandIBCRates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(16).uint64(message.requestId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestBandIBCRates {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBandIBCRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.requestId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRequestBandIBCRates>): MsgRequestBandIBCRates {
    const message = createBaseMsgRequestBandIBCRates();
    message.sender = object.sender ?? "";
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRequestBandIBCRatesAmino): MsgRequestBandIBCRates {
    return {
      sender: object.sender,
      requestId: BigInt(object.request_id)
    };
  },
  toAmino(message: MsgRequestBandIBCRates): MsgRequestBandIBCRatesAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.request_id = message.requestId ? message.requestId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRequestBandIBCRatesAminoMsg): MsgRequestBandIBCRates {
    return MsgRequestBandIBCRates.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestBandIBCRatesProtoMsg): MsgRequestBandIBCRates {
    return MsgRequestBandIBCRates.decode(message.value);
  },
  toProto(message: MsgRequestBandIBCRates): Uint8Array {
    return MsgRequestBandIBCRates.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestBandIBCRates): MsgRequestBandIBCRatesProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
      value: MsgRequestBandIBCRates.encode(message).finish()
    };
  }
};
function createBaseMsgRequestBandIBCRatesResponse(): MsgRequestBandIBCRatesResponse {
  return {};
}
export const MsgRequestBandIBCRatesResponse = {
  typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRatesResponse",
  encode(_: MsgRequestBandIBCRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestBandIBCRatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBandIBCRatesResponse();
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
  fromPartial(_: Partial<MsgRequestBandIBCRatesResponse>): MsgRequestBandIBCRatesResponse {
    const message = createBaseMsgRequestBandIBCRatesResponse();
    return message;
  },
  fromAmino(_: MsgRequestBandIBCRatesResponseAmino): MsgRequestBandIBCRatesResponse {
    return {};
  },
  toAmino(_: MsgRequestBandIBCRatesResponse): MsgRequestBandIBCRatesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestBandIBCRatesResponseAminoMsg): MsgRequestBandIBCRatesResponse {
    return MsgRequestBandIBCRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestBandIBCRatesResponseProtoMsg): MsgRequestBandIBCRatesResponse {
    return MsgRequestBandIBCRatesResponse.decode(message.value);
  },
  toProto(message: MsgRequestBandIBCRatesResponse): Uint8Array {
    return MsgRequestBandIBCRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestBandIBCRatesResponse): MsgRequestBandIBCRatesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRatesResponse",
      value: MsgRequestBandIBCRatesResponse.encode(message).finish()
    };
  }
};