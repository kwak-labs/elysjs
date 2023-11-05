import { OracleType, oracleTypeFromJSON } from "../../oracle/v1beta1/oracle";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgCreateInsuranceFund a message to create an insurance fund for a derivative market. */
export interface MsgCreateInsuranceFund {
  /** Creator of the insurance fund. */
  sender: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** Coin denom to use for the market quote denom */
  quoteDenom: string;
  /** Oracle base currency */
  oracleBase: string;
  /** Oracle quote currency */
  oracleQuote: string;
  /** Oracle type */
  oracleType: OracleType;
  /** Expiration time of the market. Should be -1 for perpetual markets. */
  expiry: bigint;
  /** Initial deposit of the insurance fund */
  initialDeposit: Coin;
}
export interface MsgCreateInsuranceFundProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund";
  value: Uint8Array;
}
/** MsgCreateInsuranceFund a message to create an insurance fund for a derivative market. */
export interface MsgCreateInsuranceFundAmino {
  /** Creator of the insurance fund. */
  sender: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** Coin denom to use for the market quote denom */
  quote_denom: string;
  /** Oracle base currency */
  oracle_base: string;
  /** Oracle quote currency */
  oracle_quote: string;
  /** Oracle type */
  oracle_type: OracleType;
  /** Expiration time of the market. Should be -1 for perpetual markets. */
  expiry: string;
  /** Initial deposit of the insurance fund */
  initial_deposit?: CoinAmino;
}
export interface MsgCreateInsuranceFundAminoMsg {
  type: "/injective.insurance.v1beta1.MsgCreateInsuranceFund";
  value: MsgCreateInsuranceFundAmino;
}
/** MsgCreateInsuranceFund a message to create an insurance fund for a derivative market. */
export interface MsgCreateInsuranceFundSDKType {
  sender: string;
  ticker: string;
  quote_denom: string;
  oracle_base: string;
  oracle_quote: string;
  oracle_type: OracleType;
  expiry: bigint;
  initial_deposit: CoinSDKType;
}
export interface MsgCreateInsuranceFundResponse {}
export interface MsgCreateInsuranceFundResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse";
  value: Uint8Array;
}
export interface MsgCreateInsuranceFundResponseAmino {}
export interface MsgCreateInsuranceFundResponseAminoMsg {
  type: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse";
  value: MsgCreateInsuranceFundResponseAmino;
}
export interface MsgCreateInsuranceFundResponseSDKType {}
/** MsgUnderwrite defines a message for depositing coins to underwrite an insurance fund */
export interface MsgUnderwrite {
  /** Address of the underwriter. */
  sender: string;
  /** MarketID of the insurance fund. */
  marketId: string;
  /** Amount of quote_denom to underwrite the insurance fund. */
  deposit: Coin;
}
export interface MsgUnderwriteProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite";
  value: Uint8Array;
}
/** MsgUnderwrite defines a message for depositing coins to underwrite an insurance fund */
export interface MsgUnderwriteAmino {
  /** Address of the underwriter. */
  sender: string;
  /** MarketID of the insurance fund. */
  market_id: string;
  /** Amount of quote_denom to underwrite the insurance fund. */
  deposit?: CoinAmino;
}
export interface MsgUnderwriteAminoMsg {
  type: "/injective.insurance.v1beta1.MsgUnderwrite";
  value: MsgUnderwriteAmino;
}
/** MsgUnderwrite defines a message for depositing coins to underwrite an insurance fund */
export interface MsgUnderwriteSDKType {
  sender: string;
  market_id: string;
  deposit: CoinSDKType;
}
export interface MsgUnderwriteResponse {}
export interface MsgUnderwriteResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgUnderwriteResponse";
  value: Uint8Array;
}
export interface MsgUnderwriteResponseAmino {}
export interface MsgUnderwriteResponseAminoMsg {
  type: "/injective.insurance.v1beta1.MsgUnderwriteResponse";
  value: MsgUnderwriteResponseAmino;
}
export interface MsgUnderwriteResponseSDKType {}
/** MsgRequestRedemption defines a message for requesting a redemption of the sender's insurance fund tokens */
export interface MsgRequestRedemption {
  /** Address of the underwriter requesting a redemption. */
  sender: string;
  /** MarketID of the insurance fund. */
  marketId: string;
  /** Insurance fund share token amount to be redeemed. */
  amount: Coin;
}
export interface MsgRequestRedemptionProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption";
  value: Uint8Array;
}
/** MsgRequestRedemption defines a message for requesting a redemption of the sender's insurance fund tokens */
export interface MsgRequestRedemptionAmino {
  /** Address of the underwriter requesting a redemption. */
  sender: string;
  /** MarketID of the insurance fund. */
  market_id: string;
  /** Insurance fund share token amount to be redeemed. */
  amount?: CoinAmino;
}
export interface MsgRequestRedemptionAminoMsg {
  type: "/injective.insurance.v1beta1.MsgRequestRedemption";
  value: MsgRequestRedemptionAmino;
}
/** MsgRequestRedemption defines a message for requesting a redemption of the sender's insurance fund tokens */
export interface MsgRequestRedemptionSDKType {
  sender: string;
  market_id: string;
  amount: CoinSDKType;
}
export interface MsgRequestRedemptionResponse {}
export interface MsgRequestRedemptionResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse";
  value: Uint8Array;
}
export interface MsgRequestRedemptionResponseAmino {}
export interface MsgRequestRedemptionResponseAminoMsg {
  type: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse";
  value: MsgRequestRedemptionResponseAmino;
}
export interface MsgRequestRedemptionResponseSDKType {}
function createBaseMsgCreateInsuranceFund(): MsgCreateInsuranceFund {
  return {
    sender: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleType: 0,
    expiry: BigInt(0),
    initialDeposit: Coin.fromPartial({})
  };
}
export const MsgCreateInsuranceFund = {
  typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
  encode(message: MsgCreateInsuranceFund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }
    if (message.oracleBase !== "") {
      writer.uint32(34).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(42).string(message.oracleQuote);
    }
    if (message.oracleType !== 0) {
      writer.uint32(48).int32(message.oracleType);
    }
    if (message.expiry !== BigInt(0)) {
      writer.uint32(56).int64(message.expiry);
    }
    if (message.initialDeposit !== undefined) {
      Coin.encode(message.initialDeposit, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateInsuranceFund {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateInsuranceFund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.ticker = reader.string();
          break;
        case 3:
          message.quoteDenom = reader.string();
          break;
        case 4:
          message.oracleBase = reader.string();
          break;
        case 5:
          message.oracleQuote = reader.string();
          break;
        case 6:
          message.oracleType = (reader.int32() as any);
          break;
        case 7:
          message.expiry = reader.int64();
          break;
        case 8:
          message.initialDeposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateInsuranceFund>): MsgCreateInsuranceFund {
    const message = createBaseMsgCreateInsuranceFund();
    message.sender = object.sender ?? "";
    message.ticker = object.ticker ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
    message.initialDeposit = object.initialDeposit !== undefined && object.initialDeposit !== null ? Coin.fromPartial(object.initialDeposit) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateInsuranceFundAmino): MsgCreateInsuranceFund {
    return {
      sender: object.sender,
      ticker: object.ticker,
      quoteDenom: object.quote_denom,
      oracleBase: object.oracle_base,
      oracleQuote: object.oracle_quote,
      oracleType: isSet(object.oracle_type) ? oracleTypeFromJSON(object.oracle_type) : -1,
      expiry: BigInt(object.expiry),
      initialDeposit: object?.initial_deposit ? Coin.fromAmino(object.initial_deposit) : undefined
    };
  },
  toAmino(message: MsgCreateInsuranceFund): MsgCreateInsuranceFundAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.ticker = message.ticker;
    obj.quote_denom = message.quoteDenom;
    obj.oracle_base = message.oracleBase;
    obj.oracle_quote = message.oracleQuote;
    obj.oracle_type = message.oracleType;
    obj.expiry = message.expiry ? message.expiry.toString() : undefined;
    obj.initial_deposit = message.initialDeposit ? Coin.toAmino(message.initialDeposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateInsuranceFundAminoMsg): MsgCreateInsuranceFund {
    return MsgCreateInsuranceFund.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateInsuranceFundProtoMsg): MsgCreateInsuranceFund {
    return MsgCreateInsuranceFund.decode(message.value);
  },
  toProto(message: MsgCreateInsuranceFund): Uint8Array {
    return MsgCreateInsuranceFund.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateInsuranceFund): MsgCreateInsuranceFundProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
      value: MsgCreateInsuranceFund.encode(message).finish()
    };
  }
};
function createBaseMsgCreateInsuranceFundResponse(): MsgCreateInsuranceFundResponse {
  return {};
}
export const MsgCreateInsuranceFundResponse = {
  typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse",
  encode(_: MsgCreateInsuranceFundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateInsuranceFundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateInsuranceFundResponse();
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
  fromPartial(_: Partial<MsgCreateInsuranceFundResponse>): MsgCreateInsuranceFundResponse {
    const message = createBaseMsgCreateInsuranceFundResponse();
    return message;
  },
  fromAmino(_: MsgCreateInsuranceFundResponseAmino): MsgCreateInsuranceFundResponse {
    return {};
  },
  toAmino(_: MsgCreateInsuranceFundResponse): MsgCreateInsuranceFundResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateInsuranceFundResponseAminoMsg): MsgCreateInsuranceFundResponse {
    return MsgCreateInsuranceFundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateInsuranceFundResponseProtoMsg): MsgCreateInsuranceFundResponse {
    return MsgCreateInsuranceFundResponse.decode(message.value);
  },
  toProto(message: MsgCreateInsuranceFundResponse): Uint8Array {
    return MsgCreateInsuranceFundResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateInsuranceFundResponse): MsgCreateInsuranceFundResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse",
      value: MsgCreateInsuranceFundResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnderwrite(): MsgUnderwrite {
  return {
    sender: "",
    marketId: "",
    deposit: Coin.fromPartial({})
  };
}
export const MsgUnderwrite = {
  typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
  encode(message: MsgUnderwrite, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnderwrite {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnderwrite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnderwrite>): MsgUnderwrite {
    const message = createBaseMsgUnderwrite();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: MsgUnderwriteAmino): MsgUnderwrite {
    return {
      sender: object.sender,
      marketId: object.market_id,
      deposit: object?.deposit ? Coin.fromAmino(object.deposit) : undefined
    };
  },
  toAmino(message: MsgUnderwrite): MsgUnderwriteAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.market_id = message.marketId;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnderwriteAminoMsg): MsgUnderwrite {
    return MsgUnderwrite.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnderwriteProtoMsg): MsgUnderwrite {
    return MsgUnderwrite.decode(message.value);
  },
  toProto(message: MsgUnderwrite): Uint8Array {
    return MsgUnderwrite.encode(message).finish();
  },
  toProtoMsg(message: MsgUnderwrite): MsgUnderwriteProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
      value: MsgUnderwrite.encode(message).finish()
    };
  }
};
function createBaseMsgUnderwriteResponse(): MsgUnderwriteResponse {
  return {};
}
export const MsgUnderwriteResponse = {
  typeUrl: "/injective.insurance.v1beta1.MsgUnderwriteResponse",
  encode(_: MsgUnderwriteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnderwriteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnderwriteResponse();
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
  fromPartial(_: Partial<MsgUnderwriteResponse>): MsgUnderwriteResponse {
    const message = createBaseMsgUnderwriteResponse();
    return message;
  },
  fromAmino(_: MsgUnderwriteResponseAmino): MsgUnderwriteResponse {
    return {};
  },
  toAmino(_: MsgUnderwriteResponse): MsgUnderwriteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnderwriteResponseAminoMsg): MsgUnderwriteResponse {
    return MsgUnderwriteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnderwriteResponseProtoMsg): MsgUnderwriteResponse {
    return MsgUnderwriteResponse.decode(message.value);
  },
  toProto(message: MsgUnderwriteResponse): Uint8Array {
    return MsgUnderwriteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnderwriteResponse): MsgUnderwriteResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgUnderwriteResponse",
      value: MsgUnderwriteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRequestRedemption(): MsgRequestRedemption {
  return {
    sender: "",
    marketId: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgRequestRedemption = {
  typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
  encode(message: MsgRequestRedemption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestRedemption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestRedemption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRequestRedemption>): MsgRequestRedemption {
    const message = createBaseMsgRequestRedemption();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgRequestRedemptionAmino): MsgRequestRedemption {
    return {
      sender: object.sender,
      marketId: object.market_id,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgRequestRedemption): MsgRequestRedemptionAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.market_id = message.marketId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRequestRedemptionAminoMsg): MsgRequestRedemption {
    return MsgRequestRedemption.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestRedemptionProtoMsg): MsgRequestRedemption {
    return MsgRequestRedemption.decode(message.value);
  },
  toProto(message: MsgRequestRedemption): Uint8Array {
    return MsgRequestRedemption.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestRedemption): MsgRequestRedemptionProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
      value: MsgRequestRedemption.encode(message).finish()
    };
  }
};
function createBaseMsgRequestRedemptionResponse(): MsgRequestRedemptionResponse {
  return {};
}
export const MsgRequestRedemptionResponse = {
  typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse",
  encode(_: MsgRequestRedemptionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestRedemptionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestRedemptionResponse();
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
  fromPartial(_: Partial<MsgRequestRedemptionResponse>): MsgRequestRedemptionResponse {
    const message = createBaseMsgRequestRedemptionResponse();
    return message;
  },
  fromAmino(_: MsgRequestRedemptionResponseAmino): MsgRequestRedemptionResponse {
    return {};
  },
  toAmino(_: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestRedemptionResponseAminoMsg): MsgRequestRedemptionResponse {
    return MsgRequestRedemptionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestRedemptionResponseProtoMsg): MsgRequestRedemptionResponse {
    return MsgRequestRedemptionResponse.decode(message.value);
  },
  toProto(message: MsgRequestRedemptionResponse): Uint8Array {
    return MsgRequestRedemptionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse",
      value: MsgRequestRedemptionResponse.encode(message).finish()
    };
  }
};