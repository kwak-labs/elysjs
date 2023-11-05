import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
export interface SetChainlinkPriceEvent {
  feedId: string;
  answer: string;
  timestamp: bigint;
}
export interface SetChainlinkPriceEventProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.SetChainlinkPriceEvent";
  value: Uint8Array;
}
export interface SetChainlinkPriceEventAmino {
  feed_id: string;
  answer: string;
  timestamp: string;
}
export interface SetChainlinkPriceEventAminoMsg {
  type: "/injective.oracle.v1beta1.SetChainlinkPriceEvent";
  value: SetChainlinkPriceEventAmino;
}
export interface SetChainlinkPriceEventSDKType {
  feed_id: string;
  answer: string;
  timestamp: bigint;
}
/** Event type upon set ref */
export interface SetBandPriceEvent {
  relayer: string;
  symbol: string;
  price: string;
  resolveTime: bigint;
  requestId: bigint;
}
export interface SetBandPriceEventProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.SetBandPriceEvent";
  value: Uint8Array;
}
/** Event type upon set ref */
export interface SetBandPriceEventAmino {
  relayer: string;
  symbol: string;
  price: string;
  resolve_time: string;
  request_id: string;
}
export interface SetBandPriceEventAminoMsg {
  type: "/injective.oracle.v1beta1.SetBandPriceEvent";
  value: SetBandPriceEventAmino;
}
/** Event type upon set ref */
export interface SetBandPriceEventSDKType {
  relayer: string;
  symbol: string;
  price: string;
  resolve_time: bigint;
  request_id: bigint;
}
export interface SetBandIBCPriceEvent {
  relayer: string;
  symbols: string[];
  prices: string[];
  resolveTime: bigint;
  requestId: bigint;
  clientId: bigint;
}
export interface SetBandIBCPriceEventProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.SetBandIBCPriceEvent";
  value: Uint8Array;
}
export interface SetBandIBCPriceEventAmino {
  relayer: string;
  symbols: string[];
  prices: string[];
  resolve_time: string;
  request_id: string;
  client_id: string;
}
export interface SetBandIBCPriceEventAminoMsg {
  type: "/injective.oracle.v1beta1.SetBandIBCPriceEvent";
  value: SetBandIBCPriceEventAmino;
}
export interface SetBandIBCPriceEventSDKType {
  relayer: string;
  symbols: string[];
  prices: string[];
  resolve_time: bigint;
  request_id: bigint;
  client_id: bigint;
}
export interface EventBandIBCAckSuccess {
  ackResult: string;
  clientId: bigint;
}
export interface EventBandIBCAckSuccessProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckSuccess";
  value: Uint8Array;
}
export interface EventBandIBCAckSuccessAmino {
  ack_result: string;
  client_id: string;
}
export interface EventBandIBCAckSuccessAminoMsg {
  type: "/injective.oracle.v1beta1.EventBandIBCAckSuccess";
  value: EventBandIBCAckSuccessAmino;
}
export interface EventBandIBCAckSuccessSDKType {
  ack_result: string;
  client_id: bigint;
}
export interface EventBandIBCAckError {
  ackError: string;
  clientId: bigint;
}
export interface EventBandIBCAckErrorProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckError";
  value: Uint8Array;
}
export interface EventBandIBCAckErrorAmino {
  ack_error: string;
  client_id: string;
}
export interface EventBandIBCAckErrorAminoMsg {
  type: "/injective.oracle.v1beta1.EventBandIBCAckError";
  value: EventBandIBCAckErrorAmino;
}
export interface EventBandIBCAckErrorSDKType {
  ack_error: string;
  client_id: bigint;
}
export interface EventBandIBCResponseTimeout {
  clientId: bigint;
}
export interface EventBandIBCResponseTimeoutProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.EventBandIBCResponseTimeout";
  value: Uint8Array;
}
export interface EventBandIBCResponseTimeoutAmino {
  client_id: string;
}
export interface EventBandIBCResponseTimeoutAminoMsg {
  type: "/injective.oracle.v1beta1.EventBandIBCResponseTimeout";
  value: EventBandIBCResponseTimeoutAmino;
}
export interface EventBandIBCResponseTimeoutSDKType {
  client_id: bigint;
}
export interface SetPriceFeedPriceEvent {
  relayer: string;
  base: string;
  quote: string;
  /** price defines the price of the oracle base and quote */
  price: string;
}
export interface SetPriceFeedPriceEventProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.SetPriceFeedPriceEvent";
  value: Uint8Array;
}
export interface SetPriceFeedPriceEventAmino {
  relayer: string;
  base: string;
  quote: string;
  /** price defines the price of the oracle base and quote */
  price: string;
}
export interface SetPriceFeedPriceEventAminoMsg {
  type: "/injective.oracle.v1beta1.SetPriceFeedPriceEvent";
  value: SetPriceFeedPriceEventAmino;
}
export interface SetPriceFeedPriceEventSDKType {
  relayer: string;
  base: string;
  quote: string;
  price: string;
}
export interface SetProviderPriceEvent {
  provider: string;
  relayer: string;
  symbol: string;
  price: string;
}
export interface SetProviderPriceEventProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.SetProviderPriceEvent";
  value: Uint8Array;
}
export interface SetProviderPriceEventAmino {
  provider: string;
  relayer: string;
  symbol: string;
  price: string;
}
export interface SetProviderPriceEventAminoMsg {
  type: "/injective.oracle.v1beta1.SetProviderPriceEvent";
  value: SetProviderPriceEventAmino;
}
export interface SetProviderPriceEventSDKType {
  provider: string;
  relayer: string;
  symbol: string;
  price: string;
}
export interface SetCoinbasePriceEvent {
  symbol: string;
  price: string;
  timestamp: bigint;
}
export interface SetCoinbasePriceEventProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.SetCoinbasePriceEvent";
  value: Uint8Array;
}
export interface SetCoinbasePriceEventAmino {
  symbol: string;
  price: string;
  timestamp: string;
}
export interface SetCoinbasePriceEventAminoMsg {
  type: "/injective.oracle.v1beta1.SetCoinbasePriceEvent";
  value: SetCoinbasePriceEventAmino;
}
export interface SetCoinbasePriceEventSDKType {
  symbol: string;
  price: string;
  timestamp: bigint;
}
function createBaseSetChainlinkPriceEvent(): SetChainlinkPriceEvent {
  return {
    feedId: "",
    answer: "",
    timestamp: BigInt(0)
  };
}
export const SetChainlinkPriceEvent = {
  typeUrl: "/injective.oracle.v1beta1.SetChainlinkPriceEvent",
  encode(message: SetChainlinkPriceEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.answer !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.answer, 18).atomics);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(24).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetChainlinkPriceEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetChainlinkPriceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        case 2:
          message.answer = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SetChainlinkPriceEvent>): SetChainlinkPriceEvent {
    const message = createBaseSetChainlinkPriceEvent();
    message.feedId = object.feedId ?? "";
    message.answer = object.answer ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SetChainlinkPriceEventAmino): SetChainlinkPriceEvent {
    return {
      feedId: object.feed_id,
      answer: object.answer,
      timestamp: BigInt(object.timestamp)
    };
  },
  toAmino(message: SetChainlinkPriceEvent): SetChainlinkPriceEventAmino {
    const obj: any = {};
    obj.feed_id = message.feedId;
    obj.answer = message.answer;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SetChainlinkPriceEventAminoMsg): SetChainlinkPriceEvent {
    return SetChainlinkPriceEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: SetChainlinkPriceEventProtoMsg): SetChainlinkPriceEvent {
    return SetChainlinkPriceEvent.decode(message.value);
  },
  toProto(message: SetChainlinkPriceEvent): Uint8Array {
    return SetChainlinkPriceEvent.encode(message).finish();
  },
  toProtoMsg(message: SetChainlinkPriceEvent): SetChainlinkPriceEventProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.SetChainlinkPriceEvent",
      value: SetChainlinkPriceEvent.encode(message).finish()
    };
  }
};
function createBaseSetBandPriceEvent(): SetBandPriceEvent {
  return {
    relayer: "",
    symbol: "",
    price: "",
    resolveTime: BigInt(0),
    requestId: BigInt(0)
  };
}
export const SetBandPriceEvent = {
  typeUrl: "/injective.oracle.v1beta1.SetBandPriceEvent",
  encode(message: SetBandPriceEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.price !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.resolveTime !== BigInt(0)) {
      writer.uint32(32).uint64(message.resolveTime);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(40).uint64(message.requestId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetBandPriceEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetBandPriceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayer = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.resolveTime = reader.uint64();
          break;
        case 5:
          message.requestId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SetBandPriceEvent>): SetBandPriceEvent {
    const message = createBaseSetBandPriceEvent();
    message.relayer = object.relayer ?? "";
    message.symbol = object.symbol ?? "";
    message.price = object.price ?? "";
    message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? BigInt(object.resolveTime.toString()) : BigInt(0);
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SetBandPriceEventAmino): SetBandPriceEvent {
    return {
      relayer: object.relayer,
      symbol: object.symbol,
      price: object.price,
      resolveTime: BigInt(object.resolve_time),
      requestId: BigInt(object.request_id)
    };
  },
  toAmino(message: SetBandPriceEvent): SetBandPriceEventAmino {
    const obj: any = {};
    obj.relayer = message.relayer;
    obj.symbol = message.symbol;
    obj.price = message.price;
    obj.resolve_time = message.resolveTime ? message.resolveTime.toString() : undefined;
    obj.request_id = message.requestId ? message.requestId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SetBandPriceEventAminoMsg): SetBandPriceEvent {
    return SetBandPriceEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: SetBandPriceEventProtoMsg): SetBandPriceEvent {
    return SetBandPriceEvent.decode(message.value);
  },
  toProto(message: SetBandPriceEvent): Uint8Array {
    return SetBandPriceEvent.encode(message).finish();
  },
  toProtoMsg(message: SetBandPriceEvent): SetBandPriceEventProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.SetBandPriceEvent",
      value: SetBandPriceEvent.encode(message).finish()
    };
  }
};
function createBaseSetBandIBCPriceEvent(): SetBandIBCPriceEvent {
  return {
    relayer: "",
    symbols: [],
    prices: [],
    resolveTime: BigInt(0),
    requestId: BigInt(0),
    clientId: BigInt(0)
  };
}
export const SetBandIBCPriceEvent = {
  typeUrl: "/injective.oracle.v1beta1.SetBandIBCPriceEvent",
  encode(message: SetBandIBCPriceEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }
    for (const v of message.symbols) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.prices) {
      writer.uint32(26).string(Decimal.fromUserInput(v!, 18).atomics);
    }
    if (message.resolveTime !== BigInt(0)) {
      writer.uint32(32).uint64(message.resolveTime);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(40).uint64(message.requestId);
    }
    if (message.clientId !== BigInt(0)) {
      writer.uint32(48).int64(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetBandIBCPriceEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetBandIBCPriceEvent();
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
          message.prices.push(Decimal.fromAtomics(reader.string(), 18).toString());
          break;
        case 4:
          message.resolveTime = reader.uint64();
          break;
        case 5:
          message.requestId = reader.uint64();
          break;
        case 6:
          message.clientId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SetBandIBCPriceEvent>): SetBandIBCPriceEvent {
    const message = createBaseSetBandIBCPriceEvent();
    message.relayer = object.relayer ?? "";
    message.symbols = object.symbols?.map(e => e) || [];
    message.prices = object.prices?.map(e => e) || [];
    message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? BigInt(object.resolveTime.toString()) : BigInt(0);
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    message.clientId = object.clientId !== undefined && object.clientId !== null ? BigInt(object.clientId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SetBandIBCPriceEventAmino): SetBandIBCPriceEvent {
    return {
      relayer: object.relayer,
      symbols: Array.isArray(object?.symbols) ? object.symbols.map((e: any) => e) : [],
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => e) : [],
      resolveTime: BigInt(object.resolve_time),
      requestId: BigInt(object.request_id),
      clientId: BigInt(object.client_id)
    };
  },
  toAmino(message: SetBandIBCPriceEvent): SetBandIBCPriceEventAmino {
    const obj: any = {};
    obj.relayer = message.relayer;
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
    obj.resolve_time = message.resolveTime ? message.resolveTime.toString() : undefined;
    obj.request_id = message.requestId ? message.requestId.toString() : undefined;
    obj.client_id = message.clientId ? message.clientId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SetBandIBCPriceEventAminoMsg): SetBandIBCPriceEvent {
    return SetBandIBCPriceEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: SetBandIBCPriceEventProtoMsg): SetBandIBCPriceEvent {
    return SetBandIBCPriceEvent.decode(message.value);
  },
  toProto(message: SetBandIBCPriceEvent): Uint8Array {
    return SetBandIBCPriceEvent.encode(message).finish();
  },
  toProtoMsg(message: SetBandIBCPriceEvent): SetBandIBCPriceEventProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.SetBandIBCPriceEvent",
      value: SetBandIBCPriceEvent.encode(message).finish()
    };
  }
};
function createBaseEventBandIBCAckSuccess(): EventBandIBCAckSuccess {
  return {
    ackResult: "",
    clientId: BigInt(0)
  };
}
export const EventBandIBCAckSuccess = {
  typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckSuccess",
  encode(message: EventBandIBCAckSuccess, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ackResult !== "") {
      writer.uint32(10).string(message.ackResult);
    }
    if (message.clientId !== BigInt(0)) {
      writer.uint32(16).int64(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBandIBCAckSuccess {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBandIBCAckSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ackResult = reader.string();
          break;
        case 2:
          message.clientId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBandIBCAckSuccess>): EventBandIBCAckSuccess {
    const message = createBaseEventBandIBCAckSuccess();
    message.ackResult = object.ackResult ?? "";
    message.clientId = object.clientId !== undefined && object.clientId !== null ? BigInt(object.clientId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventBandIBCAckSuccessAmino): EventBandIBCAckSuccess {
    return {
      ackResult: object.ack_result,
      clientId: BigInt(object.client_id)
    };
  },
  toAmino(message: EventBandIBCAckSuccess): EventBandIBCAckSuccessAmino {
    const obj: any = {};
    obj.ack_result = message.ackResult;
    obj.client_id = message.clientId ? message.clientId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBandIBCAckSuccessAminoMsg): EventBandIBCAckSuccess {
    return EventBandIBCAckSuccess.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBandIBCAckSuccessProtoMsg): EventBandIBCAckSuccess {
    return EventBandIBCAckSuccess.decode(message.value);
  },
  toProto(message: EventBandIBCAckSuccess): Uint8Array {
    return EventBandIBCAckSuccess.encode(message).finish();
  },
  toProtoMsg(message: EventBandIBCAckSuccess): EventBandIBCAckSuccessProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckSuccess",
      value: EventBandIBCAckSuccess.encode(message).finish()
    };
  }
};
function createBaseEventBandIBCAckError(): EventBandIBCAckError {
  return {
    ackError: "",
    clientId: BigInt(0)
  };
}
export const EventBandIBCAckError = {
  typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckError",
  encode(message: EventBandIBCAckError, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ackError !== "") {
      writer.uint32(10).string(message.ackError);
    }
    if (message.clientId !== BigInt(0)) {
      writer.uint32(16).int64(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBandIBCAckError {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBandIBCAckError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ackError = reader.string();
          break;
        case 2:
          message.clientId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBandIBCAckError>): EventBandIBCAckError {
    const message = createBaseEventBandIBCAckError();
    message.ackError = object.ackError ?? "";
    message.clientId = object.clientId !== undefined && object.clientId !== null ? BigInt(object.clientId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventBandIBCAckErrorAmino): EventBandIBCAckError {
    return {
      ackError: object.ack_error,
      clientId: BigInt(object.client_id)
    };
  },
  toAmino(message: EventBandIBCAckError): EventBandIBCAckErrorAmino {
    const obj: any = {};
    obj.ack_error = message.ackError;
    obj.client_id = message.clientId ? message.clientId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBandIBCAckErrorAminoMsg): EventBandIBCAckError {
    return EventBandIBCAckError.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBandIBCAckErrorProtoMsg): EventBandIBCAckError {
    return EventBandIBCAckError.decode(message.value);
  },
  toProto(message: EventBandIBCAckError): Uint8Array {
    return EventBandIBCAckError.encode(message).finish();
  },
  toProtoMsg(message: EventBandIBCAckError): EventBandIBCAckErrorProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckError",
      value: EventBandIBCAckError.encode(message).finish()
    };
  }
};
function createBaseEventBandIBCResponseTimeout(): EventBandIBCResponseTimeout {
  return {
    clientId: BigInt(0)
  };
}
export const EventBandIBCResponseTimeout = {
  typeUrl: "/injective.oracle.v1beta1.EventBandIBCResponseTimeout",
  encode(message: EventBandIBCResponseTimeout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== BigInt(0)) {
      writer.uint32(8).int64(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBandIBCResponseTimeout {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBandIBCResponseTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBandIBCResponseTimeout>): EventBandIBCResponseTimeout {
    const message = createBaseEventBandIBCResponseTimeout();
    message.clientId = object.clientId !== undefined && object.clientId !== null ? BigInt(object.clientId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventBandIBCResponseTimeoutAmino): EventBandIBCResponseTimeout {
    return {
      clientId: BigInt(object.client_id)
    };
  },
  toAmino(message: EventBandIBCResponseTimeout): EventBandIBCResponseTimeoutAmino {
    const obj: any = {};
    obj.client_id = message.clientId ? message.clientId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBandIBCResponseTimeoutAminoMsg): EventBandIBCResponseTimeout {
    return EventBandIBCResponseTimeout.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBandIBCResponseTimeoutProtoMsg): EventBandIBCResponseTimeout {
    return EventBandIBCResponseTimeout.decode(message.value);
  },
  toProto(message: EventBandIBCResponseTimeout): Uint8Array {
    return EventBandIBCResponseTimeout.encode(message).finish();
  },
  toProtoMsg(message: EventBandIBCResponseTimeout): EventBandIBCResponseTimeoutProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.EventBandIBCResponseTimeout",
      value: EventBandIBCResponseTimeout.encode(message).finish()
    };
  }
};
function createBaseSetPriceFeedPriceEvent(): SetPriceFeedPriceEvent {
  return {
    relayer: "",
    base: "",
    quote: "",
    price: ""
  };
}
export const SetPriceFeedPriceEvent = {
  typeUrl: "/injective.oracle.v1beta1.SetPriceFeedPriceEvent",
  encode(message: SetPriceFeedPriceEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }
    if (message.base !== "") {
      writer.uint32(18).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(26).string(message.quote);
    }
    if (message.price !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetPriceFeedPriceEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPriceFeedPriceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayer = reader.string();
          break;
        case 2:
          message.base = reader.string();
          break;
        case 3:
          message.quote = reader.string();
          break;
        case 4:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SetPriceFeedPriceEvent>): SetPriceFeedPriceEvent {
    const message = createBaseSetPriceFeedPriceEvent();
    message.relayer = object.relayer ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: SetPriceFeedPriceEventAmino): SetPriceFeedPriceEvent {
    return {
      relayer: object.relayer,
      base: object.base,
      quote: object.quote,
      price: object.price
    };
  },
  toAmino(message: SetPriceFeedPriceEvent): SetPriceFeedPriceEventAmino {
    const obj: any = {};
    obj.relayer = message.relayer;
    obj.base = message.base;
    obj.quote = message.quote;
    obj.price = message.price;
    return obj;
  },
  fromAminoMsg(object: SetPriceFeedPriceEventAminoMsg): SetPriceFeedPriceEvent {
    return SetPriceFeedPriceEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: SetPriceFeedPriceEventProtoMsg): SetPriceFeedPriceEvent {
    return SetPriceFeedPriceEvent.decode(message.value);
  },
  toProto(message: SetPriceFeedPriceEvent): Uint8Array {
    return SetPriceFeedPriceEvent.encode(message).finish();
  },
  toProtoMsg(message: SetPriceFeedPriceEvent): SetPriceFeedPriceEventProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.SetPriceFeedPriceEvent",
      value: SetPriceFeedPriceEvent.encode(message).finish()
    };
  }
};
function createBaseSetProviderPriceEvent(): SetProviderPriceEvent {
  return {
    provider: "",
    relayer: "",
    symbol: "",
    price: ""
  };
}
export const SetProviderPriceEvent = {
  typeUrl: "/injective.oracle.v1beta1.SetProviderPriceEvent",
  encode(message: SetProviderPriceEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.price !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetProviderPriceEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetProviderPriceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SetProviderPriceEvent>): SetProviderPriceEvent {
    const message = createBaseSetProviderPriceEvent();
    message.provider = object.provider ?? "";
    message.relayer = object.relayer ?? "";
    message.symbol = object.symbol ?? "";
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: SetProviderPriceEventAmino): SetProviderPriceEvent {
    return {
      provider: object.provider,
      relayer: object.relayer,
      symbol: object.symbol,
      price: object.price
    };
  },
  toAmino(message: SetProviderPriceEvent): SetProviderPriceEventAmino {
    const obj: any = {};
    obj.provider = message.provider;
    obj.relayer = message.relayer;
    obj.symbol = message.symbol;
    obj.price = message.price;
    return obj;
  },
  fromAminoMsg(object: SetProviderPriceEventAminoMsg): SetProviderPriceEvent {
    return SetProviderPriceEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: SetProviderPriceEventProtoMsg): SetProviderPriceEvent {
    return SetProviderPriceEvent.decode(message.value);
  },
  toProto(message: SetProviderPriceEvent): Uint8Array {
    return SetProviderPriceEvent.encode(message).finish();
  },
  toProtoMsg(message: SetProviderPriceEvent): SetProviderPriceEventProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.SetProviderPriceEvent",
      value: SetProviderPriceEvent.encode(message).finish()
    };
  }
};
function createBaseSetCoinbasePriceEvent(): SetCoinbasePriceEvent {
  return {
    symbol: "",
    price: "",
    timestamp: BigInt(0)
  };
}
export const SetCoinbasePriceEvent = {
  typeUrl: "/injective.oracle.v1beta1.SetCoinbasePriceEvent",
  encode(message: SetCoinbasePriceEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(24).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetCoinbasePriceEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetCoinbasePriceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SetCoinbasePriceEvent>): SetCoinbasePriceEvent {
    const message = createBaseSetCoinbasePriceEvent();
    message.symbol = object.symbol ?? "";
    message.price = object.price ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SetCoinbasePriceEventAmino): SetCoinbasePriceEvent {
    return {
      symbol: object.symbol,
      price: object.price,
      timestamp: BigInt(object.timestamp)
    };
  },
  toAmino(message: SetCoinbasePriceEvent): SetCoinbasePriceEventAmino {
    const obj: any = {};
    obj.symbol = message.symbol;
    obj.price = message.price;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SetCoinbasePriceEventAminoMsg): SetCoinbasePriceEvent {
    return SetCoinbasePriceEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: SetCoinbasePriceEventProtoMsg): SetCoinbasePriceEvent {
    return SetCoinbasePriceEvent.decode(message.value);
  },
  toProto(message: SetCoinbasePriceEvent): Uint8Array {
    return SetCoinbasePriceEvent.encode(message).finish();
  },
  toProtoMsg(message: SetCoinbasePriceEvent): SetCoinbasePriceEventProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.SetCoinbasePriceEvent",
      value: SetCoinbasePriceEvent.encode(message).finish()
    };
  }
};