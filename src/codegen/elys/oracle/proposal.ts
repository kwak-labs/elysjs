import { BinaryReader, BinaryWriter } from "../../binary";
export interface ProposalAddAssetInfo {
  title: string;
  description: string;
  denom: string;
  display: string;
  bandTicker: string;
  elysTicker: string;
  decimal: bigint;
}
export interface ProposalAddAssetInfoProtoMsg {
  typeUrl: "/elys.oracle.ProposalAddAssetInfo";
  value: Uint8Array;
}
export interface ProposalAddAssetInfoAmino {
  title: string;
  description: string;
  denom: string;
  display: string;
  band_ticker: string;
  elys_ticker: string;
  decimal: string;
}
export interface ProposalAddAssetInfoAminoMsg {
  type: "/elys.oracle.ProposalAddAssetInfo";
  value: ProposalAddAssetInfoAmino;
}
export interface ProposalAddAssetInfoSDKType {
  title: string;
  description: string;
  denom: string;
  display: string;
  band_ticker: string;
  elys_ticker: string;
  decimal: bigint;
}
export interface ProposalRemoveAssetInfo {
  title: string;
  description: string;
  denom: string;
}
export interface ProposalRemoveAssetInfoProtoMsg {
  typeUrl: "/elys.oracle.ProposalRemoveAssetInfo";
  value: Uint8Array;
}
export interface ProposalRemoveAssetInfoAmino {
  title: string;
  description: string;
  denom: string;
}
export interface ProposalRemoveAssetInfoAminoMsg {
  type: "/elys.oracle.ProposalRemoveAssetInfo";
  value: ProposalRemoveAssetInfoAmino;
}
export interface ProposalRemoveAssetInfoSDKType {
  title: string;
  description: string;
  denom: string;
}
export interface ProposalAddPriceFeeders {
  title: string;
  description: string;
  feeders: string[];
}
export interface ProposalAddPriceFeedersProtoMsg {
  typeUrl: "/elys.oracle.ProposalAddPriceFeeders";
  value: Uint8Array;
}
export interface ProposalAddPriceFeedersAmino {
  title: string;
  description: string;
  feeders: string[];
}
export interface ProposalAddPriceFeedersAminoMsg {
  type: "/elys.oracle.ProposalAddPriceFeeders";
  value: ProposalAddPriceFeedersAmino;
}
export interface ProposalAddPriceFeedersSDKType {
  title: string;
  description: string;
  feeders: string[];
}
export interface ProposalRemovePriceFeeders {
  title: string;
  description: string;
  feeders: string[];
}
export interface ProposalRemovePriceFeedersProtoMsg {
  typeUrl: "/elys.oracle.ProposalRemovePriceFeeders";
  value: Uint8Array;
}
export interface ProposalRemovePriceFeedersAmino {
  title: string;
  description: string;
  feeders: string[];
}
export interface ProposalRemovePriceFeedersAminoMsg {
  type: "/elys.oracle.ProposalRemovePriceFeeders";
  value: ProposalRemovePriceFeedersAmino;
}
export interface ProposalRemovePriceFeedersSDKType {
  title: string;
  description: string;
  feeders: string[];
}
function createBaseProposalAddAssetInfo(): ProposalAddAssetInfo {
  return {
    title: "",
    description: "",
    denom: "",
    display: "",
    bandTicker: "",
    elysTicker: "",
    decimal: BigInt(0)
  };
}
export const ProposalAddAssetInfo = {
  typeUrl: "/elys.oracle.ProposalAddAssetInfo",
  encode(message: ProposalAddAssetInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.display !== "") {
      writer.uint32(34).string(message.display);
    }
    if (message.bandTicker !== "") {
      writer.uint32(42).string(message.bandTicker);
    }
    if (message.elysTicker !== "") {
      writer.uint32(50).string(message.elysTicker);
    }
    if (message.decimal !== BigInt(0)) {
      writer.uint32(56).uint64(message.decimal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalAddAssetInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalAddAssetInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.display = reader.string();
          break;
        case 5:
          message.bandTicker = reader.string();
          break;
        case 6:
          message.elysTicker = reader.string();
          break;
        case 7:
          message.decimal = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProposalAddAssetInfo>): ProposalAddAssetInfo {
    const message = createBaseProposalAddAssetInfo();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.display = object.display ?? "";
    message.bandTicker = object.bandTicker ?? "";
    message.elysTicker = object.elysTicker ?? "";
    message.decimal = object.decimal !== undefined && object.decimal !== null ? BigInt(object.decimal.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProposalAddAssetInfoAmino): ProposalAddAssetInfo {
    return {
      title: object.title,
      description: object.description,
      denom: object.denom,
      display: object.display,
      bandTicker: object.band_ticker,
      elysTicker: object.elys_ticker,
      decimal: BigInt(object.decimal)
    };
  },
  toAmino(message: ProposalAddAssetInfo): ProposalAddAssetInfoAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.denom = message.denom;
    obj.display = message.display;
    obj.band_ticker = message.bandTicker;
    obj.elys_ticker = message.elysTicker;
    obj.decimal = message.decimal ? message.decimal.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProposalAddAssetInfoAminoMsg): ProposalAddAssetInfo {
    return ProposalAddAssetInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalAddAssetInfoProtoMsg): ProposalAddAssetInfo {
    return ProposalAddAssetInfo.decode(message.value);
  },
  toProto(message: ProposalAddAssetInfo): Uint8Array {
    return ProposalAddAssetInfo.encode(message).finish();
  },
  toProtoMsg(message: ProposalAddAssetInfo): ProposalAddAssetInfoProtoMsg {
    return {
      typeUrl: "/elys.oracle.ProposalAddAssetInfo",
      value: ProposalAddAssetInfo.encode(message).finish()
    };
  }
};
function createBaseProposalRemoveAssetInfo(): ProposalRemoveAssetInfo {
  return {
    title: "",
    description: "",
    denom: ""
  };
}
export const ProposalRemoveAssetInfo = {
  typeUrl: "/elys.oracle.ProposalRemoveAssetInfo",
  encode(message: ProposalRemoveAssetInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalRemoveAssetInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalRemoveAssetInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProposalRemoveAssetInfo>): ProposalRemoveAssetInfo {
    const message = createBaseProposalRemoveAssetInfo();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: ProposalRemoveAssetInfoAmino): ProposalRemoveAssetInfo {
    return {
      title: object.title,
      description: object.description,
      denom: object.denom
    };
  },
  toAmino(message: ProposalRemoveAssetInfo): ProposalRemoveAssetInfoAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: ProposalRemoveAssetInfoAminoMsg): ProposalRemoveAssetInfo {
    return ProposalRemoveAssetInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalRemoveAssetInfoProtoMsg): ProposalRemoveAssetInfo {
    return ProposalRemoveAssetInfo.decode(message.value);
  },
  toProto(message: ProposalRemoveAssetInfo): Uint8Array {
    return ProposalRemoveAssetInfo.encode(message).finish();
  },
  toProtoMsg(message: ProposalRemoveAssetInfo): ProposalRemoveAssetInfoProtoMsg {
    return {
      typeUrl: "/elys.oracle.ProposalRemoveAssetInfo",
      value: ProposalRemoveAssetInfo.encode(message).finish()
    };
  }
};
function createBaseProposalAddPriceFeeders(): ProposalAddPriceFeeders {
  return {
    title: "",
    description: "",
    feeders: []
  };
}
export const ProposalAddPriceFeeders = {
  typeUrl: "/elys.oracle.ProposalAddPriceFeeders",
  encode(message: ProposalAddPriceFeeders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.feeders) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalAddPriceFeeders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalAddPriceFeeders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.feeders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProposalAddPriceFeeders>): ProposalAddPriceFeeders {
    const message = createBaseProposalAddPriceFeeders();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.feeders = object.feeders?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ProposalAddPriceFeedersAmino): ProposalAddPriceFeeders {
    return {
      title: object.title,
      description: object.description,
      feeders: Array.isArray(object?.feeders) ? object.feeders.map((e: any) => e) : []
    };
  },
  toAmino(message: ProposalAddPriceFeeders): ProposalAddPriceFeedersAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.feeders) {
      obj.feeders = message.feeders.map(e => e);
    } else {
      obj.feeders = [];
    }
    return obj;
  },
  fromAminoMsg(object: ProposalAddPriceFeedersAminoMsg): ProposalAddPriceFeeders {
    return ProposalAddPriceFeeders.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalAddPriceFeedersProtoMsg): ProposalAddPriceFeeders {
    return ProposalAddPriceFeeders.decode(message.value);
  },
  toProto(message: ProposalAddPriceFeeders): Uint8Array {
    return ProposalAddPriceFeeders.encode(message).finish();
  },
  toProtoMsg(message: ProposalAddPriceFeeders): ProposalAddPriceFeedersProtoMsg {
    return {
      typeUrl: "/elys.oracle.ProposalAddPriceFeeders",
      value: ProposalAddPriceFeeders.encode(message).finish()
    };
  }
};
function createBaseProposalRemovePriceFeeders(): ProposalRemovePriceFeeders {
  return {
    title: "",
    description: "",
    feeders: []
  };
}
export const ProposalRemovePriceFeeders = {
  typeUrl: "/elys.oracle.ProposalRemovePriceFeeders",
  encode(message: ProposalRemovePriceFeeders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.feeders) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalRemovePriceFeeders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalRemovePriceFeeders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.feeders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProposalRemovePriceFeeders>): ProposalRemovePriceFeeders {
    const message = createBaseProposalRemovePriceFeeders();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.feeders = object.feeders?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ProposalRemovePriceFeedersAmino): ProposalRemovePriceFeeders {
    return {
      title: object.title,
      description: object.description,
      feeders: Array.isArray(object?.feeders) ? object.feeders.map((e: any) => e) : []
    };
  },
  toAmino(message: ProposalRemovePriceFeeders): ProposalRemovePriceFeedersAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.feeders) {
      obj.feeders = message.feeders.map(e => e);
    } else {
      obj.feeders = [];
    }
    return obj;
  },
  fromAminoMsg(object: ProposalRemovePriceFeedersAminoMsg): ProposalRemovePriceFeeders {
    return ProposalRemovePriceFeeders.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalRemovePriceFeedersProtoMsg): ProposalRemovePriceFeeders {
    return ProposalRemovePriceFeeders.decode(message.value);
  },
  toProto(message: ProposalRemovePriceFeeders): Uint8Array {
    return ProposalRemovePriceFeeders.encode(message).finish();
  },
  toProtoMsg(message: ProposalRemovePriceFeeders): ProposalRemovePriceFeedersProtoMsg {
    return {
      typeUrl: "/elys.oracle.ProposalRemovePriceFeeders",
      value: ProposalRemovePriceFeeders.encode(message).finish()
    };
  }
};