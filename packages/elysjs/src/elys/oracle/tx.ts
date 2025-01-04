//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface FeedPrice {
  asset: string;
  price: string;
  source: string;
}
export interface FeedPriceProtoMsg {
  typeUrl: "/elys.oracle.FeedPrice";
  value: Uint8Array;
}
export interface FeedPriceAmino {
  asset?: string;
  price?: string;
  source?: string;
}
export interface FeedPriceAminoMsg {
  type: "/elys.oracle.FeedPrice";
  value: FeedPriceAmino;
}
export interface FeedPriceSDKType {
  asset: string;
  price: string;
  source: string;
}
export interface MsgFeedPrice {
  provider: string;
  feedPrice: FeedPrice;
}
export interface MsgFeedPriceProtoMsg {
  typeUrl: "/elys.oracle.MsgFeedPrice";
  value: Uint8Array;
}
export interface MsgFeedPriceAmino {
  provider?: string;
  feed_price?: FeedPriceAmino;
}
export interface MsgFeedPriceAminoMsg {
  type: "oracle/MsgFeedPrice";
  value: MsgFeedPriceAmino;
}
export interface MsgFeedPriceSDKType {
  provider: string;
  feed_price: FeedPriceSDKType;
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
  feeder?: string;
  is_active?: boolean;
}
export interface MsgSetPriceFeederAminoMsg {
  type: "oracle/MsgSetPriceFeeder";
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
  feeder?: string;
}
export interface MsgDeletePriceFeederAminoMsg {
  type: "oracle/MsgDeletePriceFeeder";
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
  feedPrices: FeedPrice[];
}
export interface MsgFeedMultiplePricesProtoMsg {
  typeUrl: "/elys.oracle.MsgFeedMultiplePrices";
  value: Uint8Array;
}
export interface MsgFeedMultiplePricesAmino {
  creator?: string;
  feed_prices?: FeedPriceAmino[];
}
export interface MsgFeedMultiplePricesAminoMsg {
  type: "oracle/MsgFeedMultiplePrices";
  value: MsgFeedMultiplePricesAmino;
}
export interface MsgFeedMultiplePricesSDKType {
  creator: string;
  feed_prices: FeedPriceSDKType[];
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
export interface MsgRemoveAssetInfo {
  authority: string;
  denom: string;
}
export interface MsgRemoveAssetInfoProtoMsg {
  typeUrl: "/elys.oracle.MsgRemoveAssetInfo";
  value: Uint8Array;
}
export interface MsgRemoveAssetInfoAmino {
  authority?: string;
  denom?: string;
}
export interface MsgRemoveAssetInfoAminoMsg {
  type: "oracle/MsgRemoveAssetInfo";
  value: MsgRemoveAssetInfoAmino;
}
export interface MsgRemoveAssetInfoSDKType {
  authority: string;
  denom: string;
}
export interface MsgRemoveAssetInfoResponse {}
export interface MsgRemoveAssetInfoResponseProtoMsg {
  typeUrl: "/elys.oracle.MsgRemoveAssetInfoResponse";
  value: Uint8Array;
}
export interface MsgRemoveAssetInfoResponseAmino {}
export interface MsgRemoveAssetInfoResponseAminoMsg {
  type: "/elys.oracle.MsgRemoveAssetInfoResponse";
  value: MsgRemoveAssetInfoResponseAmino;
}
export interface MsgRemoveAssetInfoResponseSDKType {}
export interface MsgAddPriceFeeders {
  authority: string;
  feeders: string[];
}
export interface MsgAddPriceFeedersProtoMsg {
  typeUrl: "/elys.oracle.MsgAddPriceFeeders";
  value: Uint8Array;
}
export interface MsgAddPriceFeedersAmino {
  authority?: string;
  feeders?: string[];
}
export interface MsgAddPriceFeedersAminoMsg {
  type: "oracle/MsgAddPriceFeeders";
  value: MsgAddPriceFeedersAmino;
}
export interface MsgAddPriceFeedersSDKType {
  authority: string;
  feeders: string[];
}
export interface MsgAddPriceFeedersResponse {}
export interface MsgAddPriceFeedersResponseProtoMsg {
  typeUrl: "/elys.oracle.MsgAddPriceFeedersResponse";
  value: Uint8Array;
}
export interface MsgAddPriceFeedersResponseAmino {}
export interface MsgAddPriceFeedersResponseAminoMsg {
  type: "/elys.oracle.MsgAddPriceFeedersResponse";
  value: MsgAddPriceFeedersResponseAmino;
}
export interface MsgAddPriceFeedersResponseSDKType {}
export interface MsgRemovePriceFeeders {
  authority: string;
  feeders: string[];
}
export interface MsgRemovePriceFeedersProtoMsg {
  typeUrl: "/elys.oracle.MsgRemovePriceFeeders";
  value: Uint8Array;
}
export interface MsgRemovePriceFeedersAmino {
  authority?: string;
  feeders?: string[];
}
export interface MsgRemovePriceFeedersAminoMsg {
  type: "oracle/MsgRemovePriceFeeders";
  value: MsgRemovePriceFeedersAmino;
}
export interface MsgRemovePriceFeedersSDKType {
  authority: string;
  feeders: string[];
}
export interface MsgRemovePriceFeedersResponse {}
export interface MsgRemovePriceFeedersResponseProtoMsg {
  typeUrl: "/elys.oracle.MsgRemovePriceFeedersResponse";
  value: Uint8Array;
}
export interface MsgRemovePriceFeedersResponseAmino {}
export interface MsgRemovePriceFeedersResponseAminoMsg {
  type: "/elys.oracle.MsgRemovePriceFeedersResponse";
  value: MsgRemovePriceFeedersResponseAmino;
}
export interface MsgRemovePriceFeedersResponseSDKType {}
export interface MsgUpdateParams {
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/elys.oracle.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  authority?: string;
  /** NOTE: All parameters must be supplied. */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "oracle/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/elys.oracle.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/elys.oracle.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateAssetInfo {
  creator: string;
  denom: string;
  display: string;
  bandTicker: string;
  elysTicker: string;
  decimal: bigint;
}
export interface MsgCreateAssetInfoProtoMsg {
  typeUrl: "/elys.oracle.MsgCreateAssetInfo";
  value: Uint8Array;
}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateAssetInfoAmino {
  creator?: string;
  denom?: string;
  display?: string;
  band_ticker?: string;
  elys_ticker?: string;
  decimal?: string;
}
export interface MsgCreateAssetInfoAminoMsg {
  type: "oracle/MsgCreateAssetInfo";
  value: MsgCreateAssetInfoAmino;
}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateAssetInfoSDKType {
  creator: string;
  denom: string;
  display: string;
  band_ticker: string;
  elys_ticker: string;
  decimal: bigint;
}
export interface MsgCreateAssetInfoResponse {}
export interface MsgCreateAssetInfoResponseProtoMsg {
  typeUrl: "/elys.oracle.MsgCreateAssetInfoResponse";
  value: Uint8Array;
}
export interface MsgCreateAssetInfoResponseAmino {}
export interface MsgCreateAssetInfoResponseAminoMsg {
  type: "/elys.oracle.MsgCreateAssetInfoResponse";
  value: MsgCreateAssetInfoResponseAmino;
}
export interface MsgCreateAssetInfoResponseSDKType {}
function createBaseFeedPrice(): FeedPrice {
  return {
    asset: "",
    price: "",
    source: ""
  };
}
export const FeedPrice = {
  typeUrl: "/elys.oracle.FeedPrice",
  encode(message: FeedPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeedPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedPrice();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FeedPrice>): FeedPrice {
    const message = createBaseFeedPrice();
    message.asset = object.asset ?? "";
    message.price = object.price ?? "";
    message.source = object.source ?? "";
    return message;
  },
  fromAmino(object: FeedPriceAmino): FeedPrice {
    const message = createBaseFeedPrice();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    return message;
  },
  toAmino(message: FeedPrice): FeedPriceAmino {
    const obj: any = {};
    obj.asset = message.asset === "" ? undefined : message.asset;
    obj.price = message.price === "" ? undefined : message.price;
    obj.source = message.source === "" ? undefined : message.source;
    return obj;
  },
  fromAminoMsg(object: FeedPriceAminoMsg): FeedPrice {
    return FeedPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: FeedPriceProtoMsg): FeedPrice {
    return FeedPrice.decode(message.value);
  },
  toProto(message: FeedPrice): Uint8Array {
    return FeedPrice.encode(message).finish();
  },
  toProtoMsg(message: FeedPrice): FeedPriceProtoMsg {
    return {
      typeUrl: "/elys.oracle.FeedPrice",
      value: FeedPrice.encode(message).finish()
    };
  }
};
function createBaseMsgFeedPrice(): MsgFeedPrice {
  return {
    provider: "",
    feedPrice: FeedPrice.fromPartial({})
  };
}
export const MsgFeedPrice = {
  typeUrl: "/elys.oracle.MsgFeedPrice",
  encode(message: MsgFeedPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.feedPrice !== undefined) {
      FeedPrice.encode(message.feedPrice, writer.uint32(18).fork()).ldelim();
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
          message.provider = reader.string();
          break;
        case 2:
          message.feedPrice = FeedPrice.decode(reader, reader.uint32());
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
    message.provider = object.provider ?? "";
    message.feedPrice = object.feedPrice !== undefined && object.feedPrice !== null ? FeedPrice.fromPartial(object.feedPrice) : undefined;
    return message;
  },
  fromAmino(object: MsgFeedPriceAmino): MsgFeedPrice {
    const message = createBaseMsgFeedPrice();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.feed_price !== undefined && object.feed_price !== null) {
      message.feedPrice = FeedPrice.fromAmino(object.feed_price);
    }
    return message;
  },
  toAmino(message: MsgFeedPrice): MsgFeedPriceAmino {
    const obj: any = {};
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.feed_price = message.feedPrice ? FeedPrice.toAmino(message.feedPrice) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgFeedPriceAminoMsg): MsgFeedPrice {
    return MsgFeedPrice.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFeedPrice): MsgFeedPriceAminoMsg {
    return {
      type: "oracle/MsgFeedPrice",
      value: MsgFeedPrice.toAmino(message)
    };
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
    const message = createBaseMsgFeedPriceResponse();
    return message;
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
    const message = createBaseMsgSetPriceFeeder();
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    }
    if (object.is_active !== undefined && object.is_active !== null) {
      message.isActive = object.is_active;
    }
    return message;
  },
  toAmino(message: MsgSetPriceFeeder): MsgSetPriceFeederAmino {
    const obj: any = {};
    obj.feeder = message.feeder === "" ? undefined : message.feeder;
    obj.is_active = message.isActive === false ? undefined : message.isActive;
    return obj;
  },
  fromAminoMsg(object: MsgSetPriceFeederAminoMsg): MsgSetPriceFeeder {
    return MsgSetPriceFeeder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetPriceFeeder): MsgSetPriceFeederAminoMsg {
    return {
      type: "oracle/MsgSetPriceFeeder",
      value: MsgSetPriceFeeder.toAmino(message)
    };
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
    const message = createBaseMsgSetPriceFeederResponse();
    return message;
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
    const message = createBaseMsgDeletePriceFeeder();
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    }
    return message;
  },
  toAmino(message: MsgDeletePriceFeeder): MsgDeletePriceFeederAmino {
    const obj: any = {};
    obj.feeder = message.feeder === "" ? undefined : message.feeder;
    return obj;
  },
  fromAminoMsg(object: MsgDeletePriceFeederAminoMsg): MsgDeletePriceFeeder {
    return MsgDeletePriceFeeder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeletePriceFeeder): MsgDeletePriceFeederAminoMsg {
    return {
      type: "oracle/MsgDeletePriceFeeder",
      value: MsgDeletePriceFeeder.toAmino(message)
    };
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
    const message = createBaseMsgDeletePriceFeederResponse();
    return message;
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
    feedPrices: []
  };
}
export const MsgFeedMultiplePrices = {
  typeUrl: "/elys.oracle.MsgFeedMultiplePrices",
  encode(message: MsgFeedMultiplePrices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.feedPrices) {
      FeedPrice.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.feedPrices.push(FeedPrice.decode(reader, reader.uint32()));
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
    message.feedPrices = object.feedPrices?.map(e => FeedPrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgFeedMultiplePricesAmino): MsgFeedMultiplePrices {
    const message = createBaseMsgFeedMultiplePrices();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.feedPrices = object.feed_prices?.map(e => FeedPrice.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgFeedMultiplePrices): MsgFeedMultiplePricesAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.feedPrices) {
      obj.feed_prices = message.feedPrices.map(e => e ? FeedPrice.toAmino(e) : undefined);
    } else {
      obj.feed_prices = message.feedPrices;
    }
    return obj;
  },
  fromAminoMsg(object: MsgFeedMultiplePricesAminoMsg): MsgFeedMultiplePrices {
    return MsgFeedMultiplePrices.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFeedMultiplePrices): MsgFeedMultiplePricesAminoMsg {
    return {
      type: "oracle/MsgFeedMultiplePrices",
      value: MsgFeedMultiplePrices.toAmino(message)
    };
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
    const message = createBaseMsgFeedMultiplePricesResponse();
    return message;
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
function createBaseMsgRemoveAssetInfo(): MsgRemoveAssetInfo {
  return {
    authority: "",
    denom: ""
  };
}
export const MsgRemoveAssetInfo = {
  typeUrl: "/elys.oracle.MsgRemoveAssetInfo",
  encode(message: MsgRemoveAssetInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveAssetInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAssetInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveAssetInfo>): MsgRemoveAssetInfo {
    const message = createBaseMsgRemoveAssetInfo();
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveAssetInfoAmino): MsgRemoveAssetInfo {
    const message = createBaseMsgRemoveAssetInfo();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgRemoveAssetInfo): MsgRemoveAssetInfoAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveAssetInfoAminoMsg): MsgRemoveAssetInfo {
    return MsgRemoveAssetInfo.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveAssetInfo): MsgRemoveAssetInfoAminoMsg {
    return {
      type: "oracle/MsgRemoveAssetInfo",
      value: MsgRemoveAssetInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveAssetInfoProtoMsg): MsgRemoveAssetInfo {
    return MsgRemoveAssetInfo.decode(message.value);
  },
  toProto(message: MsgRemoveAssetInfo): Uint8Array {
    return MsgRemoveAssetInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveAssetInfo): MsgRemoveAssetInfoProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgRemoveAssetInfo",
      value: MsgRemoveAssetInfo.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveAssetInfoResponse(): MsgRemoveAssetInfoResponse {
  return {};
}
export const MsgRemoveAssetInfoResponse = {
  typeUrl: "/elys.oracle.MsgRemoveAssetInfoResponse",
  encode(_: MsgRemoveAssetInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveAssetInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAssetInfoResponse();
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
  fromPartial(_: Partial<MsgRemoveAssetInfoResponse>): MsgRemoveAssetInfoResponse {
    const message = createBaseMsgRemoveAssetInfoResponse();
    return message;
  },
  fromAmino(_: MsgRemoveAssetInfoResponseAmino): MsgRemoveAssetInfoResponse {
    const message = createBaseMsgRemoveAssetInfoResponse();
    return message;
  },
  toAmino(_: MsgRemoveAssetInfoResponse): MsgRemoveAssetInfoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveAssetInfoResponseAminoMsg): MsgRemoveAssetInfoResponse {
    return MsgRemoveAssetInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveAssetInfoResponseProtoMsg): MsgRemoveAssetInfoResponse {
    return MsgRemoveAssetInfoResponse.decode(message.value);
  },
  toProto(message: MsgRemoveAssetInfoResponse): Uint8Array {
    return MsgRemoveAssetInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveAssetInfoResponse): MsgRemoveAssetInfoResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgRemoveAssetInfoResponse",
      value: MsgRemoveAssetInfoResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddPriceFeeders(): MsgAddPriceFeeders {
  return {
    authority: "",
    feeders: []
  };
}
export const MsgAddPriceFeeders = {
  typeUrl: "/elys.oracle.MsgAddPriceFeeders",
  encode(message: MsgAddPriceFeeders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.feeders) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddPriceFeeders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPriceFeeders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.feeders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddPriceFeeders>): MsgAddPriceFeeders {
    const message = createBaseMsgAddPriceFeeders();
    message.authority = object.authority ?? "";
    message.feeders = object.feeders?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgAddPriceFeedersAmino): MsgAddPriceFeeders {
    const message = createBaseMsgAddPriceFeeders();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.feeders = object.feeders?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgAddPriceFeeders): MsgAddPriceFeedersAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.feeders) {
      obj.feeders = message.feeders.map(e => e);
    } else {
      obj.feeders = message.feeders;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddPriceFeedersAminoMsg): MsgAddPriceFeeders {
    return MsgAddPriceFeeders.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddPriceFeeders): MsgAddPriceFeedersAminoMsg {
    return {
      type: "oracle/MsgAddPriceFeeders",
      value: MsgAddPriceFeeders.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddPriceFeedersProtoMsg): MsgAddPriceFeeders {
    return MsgAddPriceFeeders.decode(message.value);
  },
  toProto(message: MsgAddPriceFeeders): Uint8Array {
    return MsgAddPriceFeeders.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPriceFeeders): MsgAddPriceFeedersProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgAddPriceFeeders",
      value: MsgAddPriceFeeders.encode(message).finish()
    };
  }
};
function createBaseMsgAddPriceFeedersResponse(): MsgAddPriceFeedersResponse {
  return {};
}
export const MsgAddPriceFeedersResponse = {
  typeUrl: "/elys.oracle.MsgAddPriceFeedersResponse",
  encode(_: MsgAddPriceFeedersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddPriceFeedersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPriceFeedersResponse();
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
  fromPartial(_: Partial<MsgAddPriceFeedersResponse>): MsgAddPriceFeedersResponse {
    const message = createBaseMsgAddPriceFeedersResponse();
    return message;
  },
  fromAmino(_: MsgAddPriceFeedersResponseAmino): MsgAddPriceFeedersResponse {
    const message = createBaseMsgAddPriceFeedersResponse();
    return message;
  },
  toAmino(_: MsgAddPriceFeedersResponse): MsgAddPriceFeedersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddPriceFeedersResponseAminoMsg): MsgAddPriceFeedersResponse {
    return MsgAddPriceFeedersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddPriceFeedersResponseProtoMsg): MsgAddPriceFeedersResponse {
    return MsgAddPriceFeedersResponse.decode(message.value);
  },
  toProto(message: MsgAddPriceFeedersResponse): Uint8Array {
    return MsgAddPriceFeedersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPriceFeedersResponse): MsgAddPriceFeedersResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgAddPriceFeedersResponse",
      value: MsgAddPriceFeedersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemovePriceFeeders(): MsgRemovePriceFeeders {
  return {
    authority: "",
    feeders: []
  };
}
export const MsgRemovePriceFeeders = {
  typeUrl: "/elys.oracle.MsgRemovePriceFeeders",
  encode(message: MsgRemovePriceFeeders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.feeders) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemovePriceFeeders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemovePriceFeeders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.feeders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemovePriceFeeders>): MsgRemovePriceFeeders {
    const message = createBaseMsgRemovePriceFeeders();
    message.authority = object.authority ?? "";
    message.feeders = object.feeders?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRemovePriceFeedersAmino): MsgRemovePriceFeeders {
    const message = createBaseMsgRemovePriceFeeders();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.feeders = object.feeders?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgRemovePriceFeeders): MsgRemovePriceFeedersAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.feeders) {
      obj.feeders = message.feeders.map(e => e);
    } else {
      obj.feeders = message.feeders;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRemovePriceFeedersAminoMsg): MsgRemovePriceFeeders {
    return MsgRemovePriceFeeders.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemovePriceFeeders): MsgRemovePriceFeedersAminoMsg {
    return {
      type: "oracle/MsgRemovePriceFeeders",
      value: MsgRemovePriceFeeders.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemovePriceFeedersProtoMsg): MsgRemovePriceFeeders {
    return MsgRemovePriceFeeders.decode(message.value);
  },
  toProto(message: MsgRemovePriceFeeders): Uint8Array {
    return MsgRemovePriceFeeders.encode(message).finish();
  },
  toProtoMsg(message: MsgRemovePriceFeeders): MsgRemovePriceFeedersProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgRemovePriceFeeders",
      value: MsgRemovePriceFeeders.encode(message).finish()
    };
  }
};
function createBaseMsgRemovePriceFeedersResponse(): MsgRemovePriceFeedersResponse {
  return {};
}
export const MsgRemovePriceFeedersResponse = {
  typeUrl: "/elys.oracle.MsgRemovePriceFeedersResponse",
  encode(_: MsgRemovePriceFeedersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemovePriceFeedersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemovePriceFeedersResponse();
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
  fromPartial(_: Partial<MsgRemovePriceFeedersResponse>): MsgRemovePriceFeedersResponse {
    const message = createBaseMsgRemovePriceFeedersResponse();
    return message;
  },
  fromAmino(_: MsgRemovePriceFeedersResponseAmino): MsgRemovePriceFeedersResponse {
    const message = createBaseMsgRemovePriceFeedersResponse();
    return message;
  },
  toAmino(_: MsgRemovePriceFeedersResponse): MsgRemovePriceFeedersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemovePriceFeedersResponseAminoMsg): MsgRemovePriceFeedersResponse {
    return MsgRemovePriceFeedersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemovePriceFeedersResponseProtoMsg): MsgRemovePriceFeedersResponse {
    return MsgRemovePriceFeedersResponse.decode(message.value);
  },
  toProto(message: MsgRemovePriceFeedersResponse): Uint8Array {
    return MsgRemovePriceFeedersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemovePriceFeedersResponse): MsgRemovePriceFeedersResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgRemovePriceFeedersResponse",
      value: MsgRemovePriceFeedersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/elys.oracle.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "oracle/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/elys.oracle.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAssetInfo(): MsgCreateAssetInfo {
  return {
    creator: "",
    denom: "",
    display: "",
    bandTicker: "",
    elysTicker: "",
    decimal: BigInt(0)
  };
}
export const MsgCreateAssetInfo = {
  typeUrl: "/elys.oracle.MsgCreateAssetInfo",
  encode(message: MsgCreateAssetInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.display !== "") {
      writer.uint32(26).string(message.display);
    }
    if (message.bandTicker !== "") {
      writer.uint32(34).string(message.bandTicker);
    }
    if (message.elysTicker !== "") {
      writer.uint32(42).string(message.elysTicker);
    }
    if (message.decimal !== BigInt(0)) {
      writer.uint32(48).uint64(message.decimal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAssetInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAssetInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.display = reader.string();
          break;
        case 4:
          message.bandTicker = reader.string();
          break;
        case 5:
          message.elysTicker = reader.string();
          break;
        case 6:
          message.decimal = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateAssetInfo>): MsgCreateAssetInfo {
    const message = createBaseMsgCreateAssetInfo();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.display = object.display ?? "";
    message.bandTicker = object.bandTicker ?? "";
    message.elysTicker = object.elysTicker ?? "";
    message.decimal = object.decimal !== undefined && object.decimal !== null ? BigInt(object.decimal.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateAssetInfoAmino): MsgCreateAssetInfo {
    const message = createBaseMsgCreateAssetInfo();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.display !== undefined && object.display !== null) {
      message.display = object.display;
    }
    if (object.band_ticker !== undefined && object.band_ticker !== null) {
      message.bandTicker = object.band_ticker;
    }
    if (object.elys_ticker !== undefined && object.elys_ticker !== null) {
      message.elysTicker = object.elys_ticker;
    }
    if (object.decimal !== undefined && object.decimal !== null) {
      message.decimal = BigInt(object.decimal);
    }
    return message;
  },
  toAmino(message: MsgCreateAssetInfo): MsgCreateAssetInfoAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.display = message.display === "" ? undefined : message.display;
    obj.band_ticker = message.bandTicker === "" ? undefined : message.bandTicker;
    obj.elys_ticker = message.elysTicker === "" ? undefined : message.elysTicker;
    obj.decimal = message.decimal !== BigInt(0) ? message.decimal?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateAssetInfoAminoMsg): MsgCreateAssetInfo {
    return MsgCreateAssetInfo.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateAssetInfo): MsgCreateAssetInfoAminoMsg {
    return {
      type: "oracle/MsgCreateAssetInfo",
      value: MsgCreateAssetInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateAssetInfoProtoMsg): MsgCreateAssetInfo {
    return MsgCreateAssetInfo.decode(message.value);
  },
  toProto(message: MsgCreateAssetInfo): Uint8Array {
    return MsgCreateAssetInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAssetInfo): MsgCreateAssetInfoProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgCreateAssetInfo",
      value: MsgCreateAssetInfo.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAssetInfoResponse(): MsgCreateAssetInfoResponse {
  return {};
}
export const MsgCreateAssetInfoResponse = {
  typeUrl: "/elys.oracle.MsgCreateAssetInfoResponse",
  encode(_: MsgCreateAssetInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAssetInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAssetInfoResponse();
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
  fromPartial(_: Partial<MsgCreateAssetInfoResponse>): MsgCreateAssetInfoResponse {
    const message = createBaseMsgCreateAssetInfoResponse();
    return message;
  },
  fromAmino(_: MsgCreateAssetInfoResponseAmino): MsgCreateAssetInfoResponse {
    const message = createBaseMsgCreateAssetInfoResponse();
    return message;
  },
  toAmino(_: MsgCreateAssetInfoResponse): MsgCreateAssetInfoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateAssetInfoResponseAminoMsg): MsgCreateAssetInfoResponse {
    return MsgCreateAssetInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAssetInfoResponseProtoMsg): MsgCreateAssetInfoResponse {
    return MsgCreateAssetInfoResponse.decode(message.value);
  },
  toProto(message: MsgCreateAssetInfoResponse): Uint8Array {
    return MsgCreateAssetInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAssetInfoResponse): MsgCreateAssetInfoResponseProtoMsg {
    return {
      typeUrl: "/elys.oracle.MsgCreateAssetInfoResponse",
      value: MsgCreateAssetInfoResponse.encode(message).finish()
    };
  }
};