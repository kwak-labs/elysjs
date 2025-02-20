//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface AssetInfo {
  denom: string;
  display: string;
  bandTicker: string;
  elysTicker: string;
  decimal: bigint;
}
export interface AssetInfoProtoMsg {
  typeUrl: "/elys.oracle.AssetInfo";
  value: Uint8Array;
}
export interface AssetInfoAmino {
  denom?: string;
  display?: string;
  band_ticker?: string;
  elys_ticker?: string;
  decimal?: string;
}
export interface AssetInfoAminoMsg {
  type: "/elys.oracle.AssetInfo";
  value: AssetInfoAmino;
}
export interface AssetInfoSDKType {
  denom: string;
  display: string;
  band_ticker: string;
  elys_ticker: string;
  decimal: bigint;
}
function createBaseAssetInfo(): AssetInfo {
  return {
    denom: "",
    display: "",
    bandTicker: "",
    elysTicker: "",
    decimal: BigInt(0)
  };
}
export const AssetInfo = {
  typeUrl: "/elys.oracle.AssetInfo",
  encode(message: AssetInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.display !== "") {
      writer.uint32(18).string(message.display);
    }
    if (message.bandTicker !== "") {
      writer.uint32(26).string(message.bandTicker);
    }
    if (message.elysTicker !== "") {
      writer.uint32(34).string(message.elysTicker);
    }
    if (message.decimal !== BigInt(0)) {
      writer.uint32(40).uint64(message.decimal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AssetInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.display = reader.string();
          break;
        case 3:
          message.bandTicker = reader.string();
          break;
        case 4:
          message.elysTicker = reader.string();
          break;
        case 5:
          message.decimal = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AssetInfo>): AssetInfo {
    const message = createBaseAssetInfo();
    message.denom = object.denom ?? "";
    message.display = object.display ?? "";
    message.bandTicker = object.bandTicker ?? "";
    message.elysTicker = object.elysTicker ?? "";
    message.decimal = object.decimal !== undefined && object.decimal !== null ? BigInt(object.decimal.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AssetInfoAmino): AssetInfo {
    const message = createBaseAssetInfo();
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
  toAmino(message: AssetInfo): AssetInfoAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.display = message.display === "" ? undefined : message.display;
    obj.band_ticker = message.bandTicker === "" ? undefined : message.bandTicker;
    obj.elys_ticker = message.elysTicker === "" ? undefined : message.elysTicker;
    obj.decimal = message.decimal !== BigInt(0) ? message.decimal?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AssetInfoAminoMsg): AssetInfo {
    return AssetInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetInfoProtoMsg): AssetInfo {
    return AssetInfo.decode(message.value);
  },
  toProto(message: AssetInfo): Uint8Array {
    return AssetInfo.encode(message).finish();
  },
  toProtoMsg(message: AssetInfo): AssetInfoProtoMsg {
    return {
      typeUrl: "/elys.oracle.AssetInfo",
      value: AssetInfo.encode(message).finish()
    };
  }
};