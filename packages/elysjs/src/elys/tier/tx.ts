//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface MsgSetPortfolio {
  creator: string;
  user: string;
}
export interface MsgSetPortfolioProtoMsg {
  typeUrl: "/elys.tier.MsgSetPortfolio";
  value: Uint8Array;
}
export interface MsgSetPortfolioAmino {
  creator?: string;
  user?: string;
}
export interface MsgSetPortfolioAminoMsg {
  type: "tier/MsgSetPortfolio";
  value: MsgSetPortfolioAmino;
}
export interface MsgSetPortfolioSDKType {
  creator: string;
  user: string;
}
export interface MsgSetPortfolioResponse {}
export interface MsgSetPortfolioResponseProtoMsg {
  typeUrl: "/elys.tier.MsgSetPortfolioResponse";
  value: Uint8Array;
}
export interface MsgSetPortfolioResponseAmino {}
export interface MsgSetPortfolioResponseAminoMsg {
  type: "/elys.tier.MsgSetPortfolioResponse";
  value: MsgSetPortfolioResponseAmino;
}
export interface MsgSetPortfolioResponseSDKType {}
function createBaseMsgSetPortfolio(): MsgSetPortfolio {
  return {
    creator: "",
    user: ""
  };
}
export const MsgSetPortfolio = {
  typeUrl: "/elys.tier.MsgSetPortfolio",
  encode(message: MsgSetPortfolio, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPortfolio {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPortfolio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetPortfolio>): MsgSetPortfolio {
    const message = createBaseMsgSetPortfolio();
    message.creator = object.creator ?? "";
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: MsgSetPortfolioAmino): MsgSetPortfolio {
    const message = createBaseMsgSetPortfolio();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: MsgSetPortfolio): MsgSetPortfolioAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: MsgSetPortfolioAminoMsg): MsgSetPortfolio {
    return MsgSetPortfolio.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetPortfolio): MsgSetPortfolioAminoMsg {
    return {
      type: "tier/MsgSetPortfolio",
      value: MsgSetPortfolio.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetPortfolioProtoMsg): MsgSetPortfolio {
    return MsgSetPortfolio.decode(message.value);
  },
  toProto(message: MsgSetPortfolio): Uint8Array {
    return MsgSetPortfolio.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPortfolio): MsgSetPortfolioProtoMsg {
    return {
      typeUrl: "/elys.tier.MsgSetPortfolio",
      value: MsgSetPortfolio.encode(message).finish()
    };
  }
};
function createBaseMsgSetPortfolioResponse(): MsgSetPortfolioResponse {
  return {};
}
export const MsgSetPortfolioResponse = {
  typeUrl: "/elys.tier.MsgSetPortfolioResponse",
  encode(_: MsgSetPortfolioResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPortfolioResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPortfolioResponse();
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
  fromPartial(_: Partial<MsgSetPortfolioResponse>): MsgSetPortfolioResponse {
    const message = createBaseMsgSetPortfolioResponse();
    return message;
  },
  fromAmino(_: MsgSetPortfolioResponseAmino): MsgSetPortfolioResponse {
    const message = createBaseMsgSetPortfolioResponse();
    return message;
  },
  toAmino(_: MsgSetPortfolioResponse): MsgSetPortfolioResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPortfolioResponseAminoMsg): MsgSetPortfolioResponse {
    return MsgSetPortfolioResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPortfolioResponseProtoMsg): MsgSetPortfolioResponse {
    return MsgSetPortfolioResponse.decode(message.value);
  },
  toProto(message: MsgSetPortfolioResponse): Uint8Array {
    return MsgSetPortfolioResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPortfolioResponse): MsgSetPortfolioResponseProtoMsg {
    return {
      typeUrl: "/elys.tier.MsgSetPortfolioResponse",
      value: MsgSetPortfolioResponse.encode(message).finish()
    };
  }
};