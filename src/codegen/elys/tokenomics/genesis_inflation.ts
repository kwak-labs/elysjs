import { InflationEntry, InflationEntryAmino, InflationEntrySDKType } from "./inflation_entry";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface GenesisInflation {
  inflation?: InflationEntry;
  seedVesting: bigint;
  strategicSalesVesting: bigint;
  authority: string;
}
export interface GenesisInflationProtoMsg {
  typeUrl: "/elys.tokenomics.GenesisInflation";
  value: Uint8Array;
}
export interface GenesisInflationAmino {
  inflation?: InflationEntryAmino;
  seedVesting: string;
  strategicSalesVesting: string;
  authority: string;
}
export interface GenesisInflationAminoMsg {
  type: "/elys.tokenomics.GenesisInflation";
  value: GenesisInflationAmino;
}
export interface GenesisInflationSDKType {
  inflation?: InflationEntrySDKType;
  seedVesting: bigint;
  strategicSalesVesting: bigint;
  authority: string;
}
function createBaseGenesisInflation(): GenesisInflation {
  return {
    inflation: undefined,
    seedVesting: BigInt(0),
    strategicSalesVesting: BigInt(0),
    authority: ""
  };
}
export const GenesisInflation = {
  typeUrl: "/elys.tokenomics.GenesisInflation",
  encode(message: GenesisInflation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflation !== undefined) {
      InflationEntry.encode(message.inflation, writer.uint32(10).fork()).ldelim();
    }
    if (message.seedVesting !== BigInt(0)) {
      writer.uint32(16).uint64(message.seedVesting);
    }
    if (message.strategicSalesVesting !== BigInt(0)) {
      writer.uint32(24).uint64(message.strategicSalesVesting);
    }
    if (message.authority !== "") {
      writer.uint32(34).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisInflation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisInflation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = InflationEntry.decode(reader, reader.uint32());
          break;
        case 2:
          message.seedVesting = reader.uint64();
          break;
        case 3:
          message.strategicSalesVesting = reader.uint64();
          break;
        case 4:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisInflation>): GenesisInflation {
    const message = createBaseGenesisInflation();
    message.inflation = object.inflation !== undefined && object.inflation !== null ? InflationEntry.fromPartial(object.inflation) : undefined;
    message.seedVesting = object.seedVesting !== undefined && object.seedVesting !== null ? BigInt(object.seedVesting.toString()) : BigInt(0);
    message.strategicSalesVesting = object.strategicSalesVesting !== undefined && object.strategicSalesVesting !== null ? BigInt(object.strategicSalesVesting.toString()) : BigInt(0);
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: GenesisInflationAmino): GenesisInflation {
    return {
      inflation: object?.inflation ? InflationEntry.fromAmino(object.inflation) : undefined,
      seedVesting: BigInt(object.seedVesting),
      strategicSalesVesting: BigInt(object.strategicSalesVesting),
      authority: object.authority
    };
  },
  toAmino(message: GenesisInflation): GenesisInflationAmino {
    const obj: any = {};
    obj.inflation = message.inflation ? InflationEntry.toAmino(message.inflation) : undefined;
    obj.seedVesting = message.seedVesting ? message.seedVesting.toString() : undefined;
    obj.strategicSalesVesting = message.strategicSalesVesting ? message.strategicSalesVesting.toString() : undefined;
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg(object: GenesisInflationAminoMsg): GenesisInflation {
    return GenesisInflation.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisInflationProtoMsg): GenesisInflation {
    return GenesisInflation.decode(message.value);
  },
  toProto(message: GenesisInflation): Uint8Array {
    return GenesisInflation.encode(message).finish();
  },
  toProtoMsg(message: GenesisInflation): GenesisInflationProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.GenesisInflation",
      value: GenesisInflation.encode(message).finish()
    };
  }
};