//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface LegacyPortfolio {
  creator: string;
  portfolio: string;
}
export interface LegacyPortfolioProtoMsg {
  typeUrl: "/elys.tier.LegacyPortfolio";
  value: Uint8Array;
}
export interface LegacyPortfolioAmino {
  creator?: string;
  portfolio?: string;
}
export interface LegacyPortfolioAminoMsg {
  type: "/elys.tier.LegacyPortfolio";
  value: LegacyPortfolioAmino;
}
export interface LegacyPortfolioSDKType {
  creator: string;
  portfolio: string;
}
export interface Portfolio {
  date: string;
  creator: string;
  portfolio: string;
}
export interface PortfolioProtoMsg {
  typeUrl: "/elys.tier.Portfolio";
  value: Uint8Array;
}
export interface PortfolioAmino {
  date?: string;
  creator?: string;
  portfolio?: string;
}
export interface PortfolioAminoMsg {
  type: "/elys.tier.Portfolio";
  value: PortfolioAmino;
}
export interface PortfolioSDKType {
  date: string;
  creator: string;
  portfolio: string;
}
function createBaseLegacyPortfolio(): LegacyPortfolio {
  return {
    creator: "",
    portfolio: ""
  };
}
export const LegacyPortfolio = {
  typeUrl: "/elys.tier.LegacyPortfolio",
  encode(message: LegacyPortfolio, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.portfolio !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.portfolio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyPortfolio {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyPortfolio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.portfolio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LegacyPortfolio>): LegacyPortfolio {
    const message = createBaseLegacyPortfolio();
    message.creator = object.creator ?? "";
    message.portfolio = object.portfolio ?? "";
    return message;
  },
  fromAmino(object: LegacyPortfolioAmino): LegacyPortfolio {
    const message = createBaseLegacyPortfolio();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.portfolio !== undefined && object.portfolio !== null) {
      message.portfolio = object.portfolio;
    }
    return message;
  },
  toAmino(message: LegacyPortfolio): LegacyPortfolioAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.portfolio = message.portfolio === "" ? undefined : message.portfolio;
    return obj;
  },
  fromAminoMsg(object: LegacyPortfolioAminoMsg): LegacyPortfolio {
    return LegacyPortfolio.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyPortfolioProtoMsg): LegacyPortfolio {
    return LegacyPortfolio.decode(message.value);
  },
  toProto(message: LegacyPortfolio): Uint8Array {
    return LegacyPortfolio.encode(message).finish();
  },
  toProtoMsg(message: LegacyPortfolio): LegacyPortfolioProtoMsg {
    return {
      typeUrl: "/elys.tier.LegacyPortfolio",
      value: LegacyPortfolio.encode(message).finish()
    };
  }
};
function createBasePortfolio(): Portfolio {
  return {
    date: "",
    creator: "",
    portfolio: ""
  };
}
export const Portfolio = {
  typeUrl: "/elys.tier.Portfolio",
  encode(message: Portfolio, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.date !== "") {
      writer.uint32(10).string(message.date);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.portfolio !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.portfolio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Portfolio {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.date = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.portfolio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Portfolio>): Portfolio {
    const message = createBasePortfolio();
    message.date = object.date ?? "";
    message.creator = object.creator ?? "";
    message.portfolio = object.portfolio ?? "";
    return message;
  },
  fromAmino(object: PortfolioAmino): Portfolio {
    const message = createBasePortfolio();
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.portfolio !== undefined && object.portfolio !== null) {
      message.portfolio = object.portfolio;
    }
    return message;
  },
  toAmino(message: Portfolio): PortfolioAmino {
    const obj: any = {};
    obj.date = message.date === "" ? undefined : message.date;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.portfolio = message.portfolio === "" ? undefined : message.portfolio;
    return obj;
  },
  fromAminoMsg(object: PortfolioAminoMsg): Portfolio {
    return Portfolio.fromAmino(object.value);
  },
  fromProtoMsg(message: PortfolioProtoMsg): Portfolio {
    return Portfolio.decode(message.value);
  },
  toProto(message: Portfolio): Uint8Array {
    return Portfolio.encode(message).finish();
  },
  toProtoMsg(message: Portfolio): PortfolioProtoMsg {
    return {
      typeUrl: "/elys.tier.Portfolio",
      value: Portfolio.encode(message).finish()
    };
  }
};