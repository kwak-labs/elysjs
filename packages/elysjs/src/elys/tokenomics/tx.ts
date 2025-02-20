//@ts-nocheck
import { InflationEntry, InflationEntryAmino, InflationEntrySDKType } from "./inflation_entry";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface MsgCreateAirdrop {
  authority: string;
  intent: string;
  amount: bigint;
  expiry: bigint;
}
export interface MsgCreateAirdropProtoMsg {
  typeUrl: "/elys.tokenomics.MsgCreateAirdrop";
  value: Uint8Array;
}
export interface MsgCreateAirdropAmino {
  authority?: string;
  intent?: string;
  amount?: string;
  expiry?: string;
}
export interface MsgCreateAirdropAminoMsg {
  type: "tokenomics/MsgCreateAirdrop";
  value: MsgCreateAirdropAmino;
}
export interface MsgCreateAirdropSDKType {
  authority: string;
  intent: string;
  amount: bigint;
  expiry: bigint;
}
export interface MsgCreateAirdropResponse {}
export interface MsgCreateAirdropResponseProtoMsg {
  typeUrl: "/elys.tokenomics.MsgCreateAirdropResponse";
  value: Uint8Array;
}
export interface MsgCreateAirdropResponseAmino {}
export interface MsgCreateAirdropResponseAminoMsg {
  type: "/elys.tokenomics.MsgCreateAirdropResponse";
  value: MsgCreateAirdropResponseAmino;
}
export interface MsgCreateAirdropResponseSDKType {}
export interface MsgUpdateAirdrop {
  authority: string;
  intent: string;
  amount: bigint;
  expiry: bigint;
}
export interface MsgUpdateAirdropProtoMsg {
  typeUrl: "/elys.tokenomics.MsgUpdateAirdrop";
  value: Uint8Array;
}
export interface MsgUpdateAirdropAmino {
  authority?: string;
  intent?: string;
  amount?: string;
  expiry?: string;
}
export interface MsgUpdateAirdropAminoMsg {
  type: "tokenomics/MsgUpdateAirdrop";
  value: MsgUpdateAirdropAmino;
}
export interface MsgUpdateAirdropSDKType {
  authority: string;
  intent: string;
  amount: bigint;
  expiry: bigint;
}
export interface MsgUpdateAirdropResponse {}
export interface MsgUpdateAirdropResponseProtoMsg {
  typeUrl: "/elys.tokenomics.MsgUpdateAirdropResponse";
  value: Uint8Array;
}
export interface MsgUpdateAirdropResponseAmino {}
export interface MsgUpdateAirdropResponseAminoMsg {
  type: "/elys.tokenomics.MsgUpdateAirdropResponse";
  value: MsgUpdateAirdropResponseAmino;
}
export interface MsgUpdateAirdropResponseSDKType {}
export interface MsgDeleteAirdrop {
  authority: string;
  intent: string;
}
export interface MsgDeleteAirdropProtoMsg {
  typeUrl: "/elys.tokenomics.MsgDeleteAirdrop";
  value: Uint8Array;
}
export interface MsgDeleteAirdropAmino {
  authority?: string;
  intent?: string;
}
export interface MsgDeleteAirdropAminoMsg {
  type: "tokenomics/MsgDeleteAirdrop";
  value: MsgDeleteAirdropAmino;
}
export interface MsgDeleteAirdropSDKType {
  authority: string;
  intent: string;
}
export interface MsgDeleteAirdropResponse {}
export interface MsgDeleteAirdropResponseProtoMsg {
  typeUrl: "/elys.tokenomics.MsgDeleteAirdropResponse";
  value: Uint8Array;
}
export interface MsgDeleteAirdropResponseAmino {}
export interface MsgDeleteAirdropResponseAminoMsg {
  type: "/elys.tokenomics.MsgDeleteAirdropResponse";
  value: MsgDeleteAirdropResponseAmino;
}
export interface MsgDeleteAirdropResponseSDKType {}
export interface MsgClaimAirdrop {
  sender: string;
}
export interface MsgClaimAirdropProtoMsg {
  typeUrl: "/elys.tokenomics.MsgClaimAirdrop";
  value: Uint8Array;
}
export interface MsgClaimAirdropAmino {
  sender?: string;
}
export interface MsgClaimAirdropAminoMsg {
  type: "tokenomics/MsgClaimAirdrop";
  value: MsgClaimAirdropAmino;
}
export interface MsgClaimAirdropSDKType {
  sender: string;
}
export interface MsgClaimAirdropResponse {}
export interface MsgClaimAirdropResponseProtoMsg {
  typeUrl: "/elys.tokenomics.MsgClaimAirdropResponse";
  value: Uint8Array;
}
export interface MsgClaimAirdropResponseAmino {}
export interface MsgClaimAirdropResponseAminoMsg {
  type: "/elys.tokenomics.MsgClaimAirdropResponse";
  value: MsgClaimAirdropResponseAmino;
}
export interface MsgClaimAirdropResponseSDKType {}
export interface MsgUpdateGenesisInflation {
  authority: string;
  inflation?: InflationEntry;
  seedVesting: bigint;
  strategicSalesVesting: bigint;
}
export interface MsgUpdateGenesisInflationProtoMsg {
  typeUrl: "/elys.tokenomics.MsgUpdateGenesisInflation";
  value: Uint8Array;
}
export interface MsgUpdateGenesisInflationAmino {
  authority?: string;
  inflation?: InflationEntryAmino;
  seed_vesting?: string;
  strategic_sales_vesting?: string;
}
export interface MsgUpdateGenesisInflationAminoMsg {
  type: "tokenomics/MsgUpdateGenesisInflation";
  value: MsgUpdateGenesisInflationAmino;
}
export interface MsgUpdateGenesisInflationSDKType {
  authority: string;
  inflation?: InflationEntrySDKType;
  seed_vesting: bigint;
  strategic_sales_vesting: bigint;
}
export interface MsgUpdateGenesisInflationResponse {}
export interface MsgUpdateGenesisInflationResponseProtoMsg {
  typeUrl: "/elys.tokenomics.MsgUpdateGenesisInflationResponse";
  value: Uint8Array;
}
export interface MsgUpdateGenesisInflationResponseAmino {}
export interface MsgUpdateGenesisInflationResponseAminoMsg {
  type: "/elys.tokenomics.MsgUpdateGenesisInflationResponse";
  value: MsgUpdateGenesisInflationResponseAmino;
}
export interface MsgUpdateGenesisInflationResponseSDKType {}
export interface MsgCreateTimeBasedInflation {
  authority: string;
  startBlockHeight: bigint;
  endBlockHeight: bigint;
  description: string;
  inflation?: InflationEntry;
}
export interface MsgCreateTimeBasedInflationProtoMsg {
  typeUrl: "/elys.tokenomics.MsgCreateTimeBasedInflation";
  value: Uint8Array;
}
export interface MsgCreateTimeBasedInflationAmino {
  authority?: string;
  start_block_height?: string;
  end_block_height?: string;
  description?: string;
  inflation?: InflationEntryAmino;
}
export interface MsgCreateTimeBasedInflationAminoMsg {
  type: "tokenomics/MsgCreateTimeBasedInflation";
  value: MsgCreateTimeBasedInflationAmino;
}
export interface MsgCreateTimeBasedInflationSDKType {
  authority: string;
  start_block_height: bigint;
  end_block_height: bigint;
  description: string;
  inflation?: InflationEntrySDKType;
}
export interface MsgCreateTimeBasedInflationResponse {}
export interface MsgCreateTimeBasedInflationResponseProtoMsg {
  typeUrl: "/elys.tokenomics.MsgCreateTimeBasedInflationResponse";
  value: Uint8Array;
}
export interface MsgCreateTimeBasedInflationResponseAmino {}
export interface MsgCreateTimeBasedInflationResponseAminoMsg {
  type: "/elys.tokenomics.MsgCreateTimeBasedInflationResponse";
  value: MsgCreateTimeBasedInflationResponseAmino;
}
export interface MsgCreateTimeBasedInflationResponseSDKType {}
export interface MsgUpdateTimeBasedInflation {
  authority: string;
  startBlockHeight: bigint;
  endBlockHeight: bigint;
  description: string;
  inflation?: InflationEntry;
}
export interface MsgUpdateTimeBasedInflationProtoMsg {
  typeUrl: "/elys.tokenomics.MsgUpdateTimeBasedInflation";
  value: Uint8Array;
}
export interface MsgUpdateTimeBasedInflationAmino {
  authority?: string;
  start_block_height?: string;
  end_block_height?: string;
  description?: string;
  inflation?: InflationEntryAmino;
}
export interface MsgUpdateTimeBasedInflationAminoMsg {
  type: "tokenomics/MsgUpdateTimeBasedInflation";
  value: MsgUpdateTimeBasedInflationAmino;
}
export interface MsgUpdateTimeBasedInflationSDKType {
  authority: string;
  start_block_height: bigint;
  end_block_height: bigint;
  description: string;
  inflation?: InflationEntrySDKType;
}
export interface MsgUpdateTimeBasedInflationResponse {}
export interface MsgUpdateTimeBasedInflationResponseProtoMsg {
  typeUrl: "/elys.tokenomics.MsgUpdateTimeBasedInflationResponse";
  value: Uint8Array;
}
export interface MsgUpdateTimeBasedInflationResponseAmino {}
export interface MsgUpdateTimeBasedInflationResponseAminoMsg {
  type: "/elys.tokenomics.MsgUpdateTimeBasedInflationResponse";
  value: MsgUpdateTimeBasedInflationResponseAmino;
}
export interface MsgUpdateTimeBasedInflationResponseSDKType {}
export interface MsgDeleteTimeBasedInflation {
  authority: string;
  startBlockHeight: bigint;
  endBlockHeight: bigint;
}
export interface MsgDeleteTimeBasedInflationProtoMsg {
  typeUrl: "/elys.tokenomics.MsgDeleteTimeBasedInflation";
  value: Uint8Array;
}
export interface MsgDeleteTimeBasedInflationAmino {
  authority?: string;
  start_block_height?: string;
  end_block_height?: string;
}
export interface MsgDeleteTimeBasedInflationAminoMsg {
  type: "tokenomics/MsgDeleteTimeBasedInflation";
  value: MsgDeleteTimeBasedInflationAmino;
}
export interface MsgDeleteTimeBasedInflationSDKType {
  authority: string;
  start_block_height: bigint;
  end_block_height: bigint;
}
export interface MsgDeleteTimeBasedInflationResponse {}
export interface MsgDeleteTimeBasedInflationResponseProtoMsg {
  typeUrl: "/elys.tokenomics.MsgDeleteTimeBasedInflationResponse";
  value: Uint8Array;
}
export interface MsgDeleteTimeBasedInflationResponseAmino {}
export interface MsgDeleteTimeBasedInflationResponseAminoMsg {
  type: "/elys.tokenomics.MsgDeleteTimeBasedInflationResponse";
  value: MsgDeleteTimeBasedInflationResponseAmino;
}
export interface MsgDeleteTimeBasedInflationResponseSDKType {}
function createBaseMsgCreateAirdrop(): MsgCreateAirdrop {
  return {
    authority: "",
    intent: "",
    amount: BigInt(0),
    expiry: BigInt(0)
  };
}
export const MsgCreateAirdrop = {
  typeUrl: "/elys.tokenomics.MsgCreateAirdrop",
  encode(message: MsgCreateAirdrop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.intent !== "") {
      writer.uint32(18).string(message.intent);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.expiry !== BigInt(0)) {
      writer.uint32(32).uint64(message.expiry);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAirdrop {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.intent = reader.string();
          break;
        case 3:
          message.amount = reader.uint64();
          break;
        case 4:
          message.expiry = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateAirdrop>): MsgCreateAirdrop {
    const message = createBaseMsgCreateAirdrop();
    message.authority = object.authority ?? "";
    message.intent = object.intent ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateAirdropAmino): MsgCreateAirdrop {
    const message = createBaseMsgCreateAirdrop();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.intent !== undefined && object.intent !== null) {
      message.intent = object.intent;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = BigInt(object.expiry);
    }
    return message;
  },
  toAmino(message: MsgCreateAirdrop): MsgCreateAirdropAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.intent = message.intent === "" ? undefined : message.intent;
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    obj.expiry = message.expiry !== BigInt(0) ? message.expiry?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateAirdropAminoMsg): MsgCreateAirdrop {
    return MsgCreateAirdrop.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateAirdrop): MsgCreateAirdropAminoMsg {
    return {
      type: "tokenomics/MsgCreateAirdrop",
      value: MsgCreateAirdrop.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateAirdropProtoMsg): MsgCreateAirdrop {
    return MsgCreateAirdrop.decode(message.value);
  },
  toProto(message: MsgCreateAirdrop): Uint8Array {
    return MsgCreateAirdrop.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAirdrop): MsgCreateAirdropProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.MsgCreateAirdrop",
      value: MsgCreateAirdrop.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAirdropResponse(): MsgCreateAirdropResponse {
  return {};
}
export const MsgCreateAirdropResponse = {
  typeUrl: "/elys.tokenomics.MsgCreateAirdropResponse",
  encode(_: MsgCreateAirdropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAirdropResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAirdropResponse();
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
  fromPartial(_: Partial<MsgCreateAirdropResponse>): MsgCreateAirdropResponse {
    const message = createBaseMsgCreateAirdropResponse();
    return message;
  },
  fromAmino(_: MsgCreateAirdropResponseAmino): MsgCreateAirdropResponse {
    const message = createBaseMsgCreateAirdropResponse();
    return message;
  },
  toAmino(_: MsgCreateAirdropResponse): MsgCreateAirdropResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateAirdropResponseAminoMsg): MsgCreateAirdropResponse {
    return MsgCreateAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAirdropResponseProtoMsg): MsgCreateAirdropResponse {
    return MsgCreateAirdropResponse.decode(message.value);
  },
  toProto(message: MsgCreateAirdropResponse): Uint8Array {
    return MsgCreateAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAirdropResponse): MsgCreateAirdropResponseProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.MsgCreateAirdropResponse",
      value: MsgCreateAirdropResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAirdrop(): MsgUpdateAirdrop {
  return {
    authority: "",
    intent: "",
    amount: BigInt(0),
    expiry: BigInt(0)
  };
}
export const MsgUpdateAirdrop = {
  typeUrl: "/elys.tokenomics.MsgUpdateAirdrop",
  encode(message: MsgUpdateAirdrop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.intent !== "") {
      writer.uint32(18).string(message.intent);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.expiry !== BigInt(0)) {
      writer.uint32(32).uint64(message.expiry);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAirdrop {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.intent = reader.string();
          break;
        case 3:
          message.amount = reader.uint64();
          break;
        case 4:
          message.expiry = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateAirdrop>): MsgUpdateAirdrop {
    const message = createBaseMsgUpdateAirdrop();
    message.authority = object.authority ?? "";
    message.intent = object.intent ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateAirdropAmino): MsgUpdateAirdrop {
    const message = createBaseMsgUpdateAirdrop();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.intent !== undefined && object.intent !== null) {
      message.intent = object.intent;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = BigInt(object.expiry);
    }
    return message;
  },
  toAmino(message: MsgUpdateAirdrop): MsgUpdateAirdropAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.intent = message.intent === "" ? undefined : message.intent;
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    obj.expiry = message.expiry !== BigInt(0) ? message.expiry?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAirdropAminoMsg): MsgUpdateAirdrop {
    return MsgUpdateAirdrop.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateAirdrop): MsgUpdateAirdropAminoMsg {
    return {
      type: "tokenomics/MsgUpdateAirdrop",
      value: MsgUpdateAirdrop.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateAirdropProtoMsg): MsgUpdateAirdrop {
    return MsgUpdateAirdrop.decode(message.value);
  },
  toProto(message: MsgUpdateAirdrop): Uint8Array {
    return MsgUpdateAirdrop.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAirdrop): MsgUpdateAirdropProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.MsgUpdateAirdrop",
      value: MsgUpdateAirdrop.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAirdropResponse(): MsgUpdateAirdropResponse {
  return {};
}
export const MsgUpdateAirdropResponse = {
  typeUrl: "/elys.tokenomics.MsgUpdateAirdropResponse",
  encode(_: MsgUpdateAirdropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAirdropResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAirdropResponse();
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
  fromPartial(_: Partial<MsgUpdateAirdropResponse>): MsgUpdateAirdropResponse {
    const message = createBaseMsgUpdateAirdropResponse();
    return message;
  },
  fromAmino(_: MsgUpdateAirdropResponseAmino): MsgUpdateAirdropResponse {
    const message = createBaseMsgUpdateAirdropResponse();
    return message;
  },
  toAmino(_: MsgUpdateAirdropResponse): MsgUpdateAirdropResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAirdropResponseAminoMsg): MsgUpdateAirdropResponse {
    return MsgUpdateAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAirdropResponseProtoMsg): MsgUpdateAirdropResponse {
    return MsgUpdateAirdropResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAirdropResponse): Uint8Array {
    return MsgUpdateAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAirdropResponse): MsgUpdateAirdropResponseProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.MsgUpdateAirdropResponse",
      value: MsgUpdateAirdropResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAirdrop(): MsgDeleteAirdrop {
  return {
    authority: "",
    intent: ""
  };
}
export const MsgDeleteAirdrop = {
  typeUrl: "/elys.tokenomics.MsgDeleteAirdrop",
  encode(message: MsgDeleteAirdrop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.intent !== "") {
      writer.uint32(18).string(message.intent);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAirdrop {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.intent = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteAirdrop>): MsgDeleteAirdrop {
    const message = createBaseMsgDeleteAirdrop();
    message.authority = object.authority ?? "";
    message.intent = object.intent ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteAirdropAmino): MsgDeleteAirdrop {
    const message = createBaseMsgDeleteAirdrop();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.intent !== undefined && object.intent !== null) {
      message.intent = object.intent;
    }
    return message;
  },
  toAmino(message: MsgDeleteAirdrop): MsgDeleteAirdropAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.intent = message.intent === "" ? undefined : message.intent;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAirdropAminoMsg): MsgDeleteAirdrop {
    return MsgDeleteAirdrop.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteAirdrop): MsgDeleteAirdropAminoMsg {
    return {
      type: "tokenomics/MsgDeleteAirdrop",
      value: MsgDeleteAirdrop.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteAirdropProtoMsg): MsgDeleteAirdrop {
    return MsgDeleteAirdrop.decode(message.value);
  },
  toProto(message: MsgDeleteAirdrop): Uint8Array {
    return MsgDeleteAirdrop.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAirdrop): MsgDeleteAirdropProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.MsgDeleteAirdrop",
      value: MsgDeleteAirdrop.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAirdropResponse(): MsgDeleteAirdropResponse {
  return {};
}
export const MsgDeleteAirdropResponse = {
  typeUrl: "/elys.tokenomics.MsgDeleteAirdropResponse",
  encode(_: MsgDeleteAirdropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAirdropResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAirdropResponse();
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
  fromPartial(_: Partial<MsgDeleteAirdropResponse>): MsgDeleteAirdropResponse {
    const message = createBaseMsgDeleteAirdropResponse();
    return message;
  },
  fromAmino(_: MsgDeleteAirdropResponseAmino): MsgDeleteAirdropResponse {
    const message = createBaseMsgDeleteAirdropResponse();
    return message;
  },
  toAmino(_: MsgDeleteAirdropResponse): MsgDeleteAirdropResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAirdropResponseAminoMsg): MsgDeleteAirdropResponse {
    return MsgDeleteAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteAirdropResponseProtoMsg): MsgDeleteAirdropResponse {
    return MsgDeleteAirdropResponse.decode(message.value);
  },
  toProto(message: MsgDeleteAirdropResponse): Uint8Array {
    return MsgDeleteAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAirdropResponse): MsgDeleteAirdropResponseProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.MsgDeleteAirdropResponse",
      value: MsgDeleteAirdropResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimAirdrop(): MsgClaimAirdrop {
  return {
    sender: ""
  };
}
export const MsgClaimAirdrop = {
  typeUrl: "/elys.tokenomics.MsgClaimAirdrop",
  encode(message: MsgClaimAirdrop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimAirdrop {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimAirdrop>): MsgClaimAirdrop {
    const message = createBaseMsgClaimAirdrop();
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgClaimAirdropAmino): MsgClaimAirdrop {
    const message = createBaseMsgClaimAirdrop();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgClaimAirdrop): MsgClaimAirdropAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgClaimAirdropAminoMsg): MsgClaimAirdrop {
    return MsgClaimAirdrop.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimAirdrop): MsgClaimAirdropAminoMsg {
    return {
      type: "tokenomics/MsgClaimAirdrop",
      value: MsgClaimAirdrop.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimAirdropProtoMsg): MsgClaimAirdrop {
    return MsgClaimAirdrop.decode(message.value);
  },
  toProto(message: MsgClaimAirdrop): Uint8Array {
    return MsgClaimAirdrop.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimAirdrop): MsgClaimAirdropProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.MsgClaimAirdrop",
      value: MsgClaimAirdrop.encode(message).finish()
    };
  }
};
function createBaseMsgClaimAirdropResponse(): MsgClaimAirdropResponse {
  return {};
}
export const MsgClaimAirdropResponse = {
  typeUrl: "/elys.tokenomics.MsgClaimAirdropResponse",
  encode(_: MsgClaimAirdropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimAirdropResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimAirdropResponse();
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
  fromPartial(_: Partial<MsgClaimAirdropResponse>): MsgClaimAirdropResponse {
    const message = createBaseMsgClaimAirdropResponse();
    return message;
  },
  fromAmino(_: MsgClaimAirdropResponseAmino): MsgClaimAirdropResponse {
    const message = createBaseMsgClaimAirdropResponse();
    return message;
  },
  toAmino(_: MsgClaimAirdropResponse): MsgClaimAirdropResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimAirdropResponseAminoMsg): MsgClaimAirdropResponse {
    return MsgClaimAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimAirdropResponseProtoMsg): MsgClaimAirdropResponse {
    return MsgClaimAirdropResponse.decode(message.value);
  },
  toProto(message: MsgClaimAirdropResponse): Uint8Array {
    return MsgClaimAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimAirdropResponse): MsgClaimAirdropResponseProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.MsgClaimAirdropResponse",
      value: MsgClaimAirdropResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGenesisInflation(): MsgUpdateGenesisInflation {
  return {
    authority: "",
    inflation: undefined,
    seedVesting: BigInt(0),
    strategicSalesVesting: BigInt(0)
  };
}
export const MsgUpdateGenesisInflation = {
  typeUrl: "/elys.tokenomics.MsgUpdateGenesisInflation",
  encode(message: MsgUpdateGenesisInflation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.inflation !== undefined) {
      InflationEntry.encode(message.inflation, writer.uint32(26).fork()).ldelim();
    }
    if (message.seedVesting !== BigInt(0)) {
      writer.uint32(32).uint64(message.seedVesting);
    }
    if (message.strategicSalesVesting !== BigInt(0)) {
      writer.uint32(40).uint64(message.strategicSalesVesting);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGenesisInflation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGenesisInflation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 3:
          message.inflation = InflationEntry.decode(reader, reader.uint32());
          break;
        case 4:
          message.seedVesting = reader.uint64();
          break;
        case 5:
          message.strategicSalesVesting = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateGenesisInflation>): MsgUpdateGenesisInflation {
    const message = createBaseMsgUpdateGenesisInflation();
    message.authority = object.authority ?? "";
    message.inflation = object.inflation !== undefined && object.inflation !== null ? InflationEntry.fromPartial(object.inflation) : undefined;
    message.seedVesting = object.seedVesting !== undefined && object.seedVesting !== null ? BigInt(object.seedVesting.toString()) : BigInt(0);
    message.strategicSalesVesting = object.strategicSalesVesting !== undefined && object.strategicSalesVesting !== null ? BigInt(object.strategicSalesVesting.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateGenesisInflationAmino): MsgUpdateGenesisInflation {
    const message = createBaseMsgUpdateGenesisInflation();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.inflation !== undefined && object.inflation !== null) {
      message.inflation = InflationEntry.fromAmino(object.inflation);
    }
    if (object.seed_vesting !== undefined && object.seed_vesting !== null) {
      message.seedVesting = BigInt(object.seed_vesting);
    }
    if (object.strategic_sales_vesting !== undefined && object.strategic_sales_vesting !== null) {
      message.strategicSalesVesting = BigInt(object.strategic_sales_vesting);
    }
    return message;
  },
  toAmino(message: MsgUpdateGenesisInflation): MsgUpdateGenesisInflationAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.inflation = message.inflation ? InflationEntry.toAmino(message.inflation) : undefined;
    obj.seed_vesting = message.seedVesting !== BigInt(0) ? message.seedVesting?.toString() : undefined;
    obj.strategic_sales_vesting = message.strategicSalesVesting !== BigInt(0) ? message.strategicSalesVesting?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGenesisInflationAminoMsg): MsgUpdateGenesisInflation {
    return MsgUpdateGenesisInflation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGenesisInflation): MsgUpdateGenesisInflationAminoMsg {
    return {
      type: "tokenomics/MsgUpdateGenesisInflation",
      value: MsgUpdateGenesisInflation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGenesisInflationProtoMsg): MsgUpdateGenesisInflation {
    return MsgUpdateGenesisInflation.decode(message.value);
  },
  toProto(message: MsgUpdateGenesisInflation): Uint8Array {
    return MsgUpdateGenesisInflation.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGenesisInflation): MsgUpdateGenesisInflationProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.MsgUpdateGenesisInflation",
      value: MsgUpdateGenesisInflation.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGenesisInflationResponse(): MsgUpdateGenesisInflationResponse {
  return {};
}
export const MsgUpdateGenesisInflationResponse = {
  typeUrl: "/elys.tokenomics.MsgUpdateGenesisInflationResponse",
  encode(_: MsgUpdateGenesisInflationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGenesisInflationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGenesisInflationResponse();
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
  fromPartial(_: Partial<MsgUpdateGenesisInflationResponse>): MsgUpdateGenesisInflationResponse {
    const message = createBaseMsgUpdateGenesisInflationResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGenesisInflationResponseAmino): MsgUpdateGenesisInflationResponse {
    const message = createBaseMsgUpdateGenesisInflationResponse();
    return message;
  },
  toAmino(_: MsgUpdateGenesisInflationResponse): MsgUpdateGenesisInflationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGenesisInflationResponseAminoMsg): MsgUpdateGenesisInflationResponse {
    return MsgUpdateGenesisInflationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGenesisInflationResponseProtoMsg): MsgUpdateGenesisInflationResponse {
    return MsgUpdateGenesisInflationResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGenesisInflationResponse): Uint8Array {
    return MsgUpdateGenesisInflationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGenesisInflationResponse): MsgUpdateGenesisInflationResponseProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.MsgUpdateGenesisInflationResponse",
      value: MsgUpdateGenesisInflationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTimeBasedInflation(): MsgCreateTimeBasedInflation {
  return {
    authority: "",
    startBlockHeight: BigInt(0),
    endBlockHeight: BigInt(0),
    description: "",
    inflation: undefined
  };
}
export const MsgCreateTimeBasedInflation = {
  typeUrl: "/elys.tokenomics.MsgCreateTimeBasedInflation",
  encode(message: MsgCreateTimeBasedInflation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.startBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.startBlockHeight);
    }
    if (message.endBlockHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.endBlockHeight);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.inflation !== undefined) {
      InflationEntry.encode(message.inflation, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTimeBasedInflation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTimeBasedInflation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.startBlockHeight = reader.uint64();
          break;
        case 3:
          message.endBlockHeight = reader.uint64();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.inflation = InflationEntry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateTimeBasedInflation>): MsgCreateTimeBasedInflation {
    const message = createBaseMsgCreateTimeBasedInflation();
    message.authority = object.authority ?? "";
    message.startBlockHeight = object.startBlockHeight !== undefined && object.startBlockHeight !== null ? BigInt(object.startBlockHeight.toString()) : BigInt(0);
    message.endBlockHeight = object.endBlockHeight !== undefined && object.endBlockHeight !== null ? BigInt(object.endBlockHeight.toString()) : BigInt(0);
    message.description = object.description ?? "";
    message.inflation = object.inflation !== undefined && object.inflation !== null ? InflationEntry.fromPartial(object.inflation) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateTimeBasedInflationAmino): MsgCreateTimeBasedInflation {
    const message = createBaseMsgCreateTimeBasedInflation();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.start_block_height !== undefined && object.start_block_height !== null) {
      message.startBlockHeight = BigInt(object.start_block_height);
    }
    if (object.end_block_height !== undefined && object.end_block_height !== null) {
      message.endBlockHeight = BigInt(object.end_block_height);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.inflation !== undefined && object.inflation !== null) {
      message.inflation = InflationEntry.fromAmino(object.inflation);
    }
    return message;
  },
  toAmino(message: MsgCreateTimeBasedInflation): MsgCreateTimeBasedInflationAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.start_block_height = message.startBlockHeight !== BigInt(0) ? message.startBlockHeight?.toString() : undefined;
    obj.end_block_height = message.endBlockHeight !== BigInt(0) ? message.endBlockHeight?.toString() : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    obj.inflation = message.inflation ? InflationEntry.toAmino(message.inflation) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTimeBasedInflationAminoMsg): MsgCreateTimeBasedInflation {
    return MsgCreateTimeBasedInflation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateTimeBasedInflation): MsgCreateTimeBasedInflationAminoMsg {
    return {
      type: "tokenomics/MsgCreateTimeBasedInflation",
      value: MsgCreateTimeBasedInflation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateTimeBasedInflationProtoMsg): MsgCreateTimeBasedInflation {
    return MsgCreateTimeBasedInflation.decode(message.value);
  },
  toProto(message: MsgCreateTimeBasedInflation): Uint8Array {
    return MsgCreateTimeBasedInflation.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTimeBasedInflation): MsgCreateTimeBasedInflationProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.MsgCreateTimeBasedInflation",
      value: MsgCreateTimeBasedInflation.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTimeBasedInflationResponse(): MsgCreateTimeBasedInflationResponse {
  return {};
}
export const MsgCreateTimeBasedInflationResponse = {
  typeUrl: "/elys.tokenomics.MsgCreateTimeBasedInflationResponse",
  encode(_: MsgCreateTimeBasedInflationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTimeBasedInflationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTimeBasedInflationResponse();
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
  fromPartial(_: Partial<MsgCreateTimeBasedInflationResponse>): MsgCreateTimeBasedInflationResponse {
    const message = createBaseMsgCreateTimeBasedInflationResponse();
    return message;
  },
  fromAmino(_: MsgCreateTimeBasedInflationResponseAmino): MsgCreateTimeBasedInflationResponse {
    const message = createBaseMsgCreateTimeBasedInflationResponse();
    return message;
  },
  toAmino(_: MsgCreateTimeBasedInflationResponse): MsgCreateTimeBasedInflationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateTimeBasedInflationResponseAminoMsg): MsgCreateTimeBasedInflationResponse {
    return MsgCreateTimeBasedInflationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTimeBasedInflationResponseProtoMsg): MsgCreateTimeBasedInflationResponse {
    return MsgCreateTimeBasedInflationResponse.decode(message.value);
  },
  toProto(message: MsgCreateTimeBasedInflationResponse): Uint8Array {
    return MsgCreateTimeBasedInflationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTimeBasedInflationResponse): MsgCreateTimeBasedInflationResponseProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.MsgCreateTimeBasedInflationResponse",
      value: MsgCreateTimeBasedInflationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTimeBasedInflation(): MsgUpdateTimeBasedInflation {
  return {
    authority: "",
    startBlockHeight: BigInt(0),
    endBlockHeight: BigInt(0),
    description: "",
    inflation: undefined
  };
}
export const MsgUpdateTimeBasedInflation = {
  typeUrl: "/elys.tokenomics.MsgUpdateTimeBasedInflation",
  encode(message: MsgUpdateTimeBasedInflation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.startBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.startBlockHeight);
    }
    if (message.endBlockHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.endBlockHeight);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.inflation !== undefined) {
      InflationEntry.encode(message.inflation, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateTimeBasedInflation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTimeBasedInflation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.startBlockHeight = reader.uint64();
          break;
        case 3:
          message.endBlockHeight = reader.uint64();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.inflation = InflationEntry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateTimeBasedInflation>): MsgUpdateTimeBasedInflation {
    const message = createBaseMsgUpdateTimeBasedInflation();
    message.authority = object.authority ?? "";
    message.startBlockHeight = object.startBlockHeight !== undefined && object.startBlockHeight !== null ? BigInt(object.startBlockHeight.toString()) : BigInt(0);
    message.endBlockHeight = object.endBlockHeight !== undefined && object.endBlockHeight !== null ? BigInt(object.endBlockHeight.toString()) : BigInt(0);
    message.description = object.description ?? "";
    message.inflation = object.inflation !== undefined && object.inflation !== null ? InflationEntry.fromPartial(object.inflation) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateTimeBasedInflationAmino): MsgUpdateTimeBasedInflation {
    const message = createBaseMsgUpdateTimeBasedInflation();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.start_block_height !== undefined && object.start_block_height !== null) {
      message.startBlockHeight = BigInt(object.start_block_height);
    }
    if (object.end_block_height !== undefined && object.end_block_height !== null) {
      message.endBlockHeight = BigInt(object.end_block_height);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.inflation !== undefined && object.inflation !== null) {
      message.inflation = InflationEntry.fromAmino(object.inflation);
    }
    return message;
  },
  toAmino(message: MsgUpdateTimeBasedInflation): MsgUpdateTimeBasedInflationAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.start_block_height = message.startBlockHeight !== BigInt(0) ? message.startBlockHeight?.toString() : undefined;
    obj.end_block_height = message.endBlockHeight !== BigInt(0) ? message.endBlockHeight?.toString() : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    obj.inflation = message.inflation ? InflationEntry.toAmino(message.inflation) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTimeBasedInflationAminoMsg): MsgUpdateTimeBasedInflation {
    return MsgUpdateTimeBasedInflation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateTimeBasedInflation): MsgUpdateTimeBasedInflationAminoMsg {
    return {
      type: "tokenomics/MsgUpdateTimeBasedInflation",
      value: MsgUpdateTimeBasedInflation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateTimeBasedInflationProtoMsg): MsgUpdateTimeBasedInflation {
    return MsgUpdateTimeBasedInflation.decode(message.value);
  },
  toProto(message: MsgUpdateTimeBasedInflation): Uint8Array {
    return MsgUpdateTimeBasedInflation.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTimeBasedInflation): MsgUpdateTimeBasedInflationProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.MsgUpdateTimeBasedInflation",
      value: MsgUpdateTimeBasedInflation.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTimeBasedInflationResponse(): MsgUpdateTimeBasedInflationResponse {
  return {};
}
export const MsgUpdateTimeBasedInflationResponse = {
  typeUrl: "/elys.tokenomics.MsgUpdateTimeBasedInflationResponse",
  encode(_: MsgUpdateTimeBasedInflationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateTimeBasedInflationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTimeBasedInflationResponse();
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
  fromPartial(_: Partial<MsgUpdateTimeBasedInflationResponse>): MsgUpdateTimeBasedInflationResponse {
    const message = createBaseMsgUpdateTimeBasedInflationResponse();
    return message;
  },
  fromAmino(_: MsgUpdateTimeBasedInflationResponseAmino): MsgUpdateTimeBasedInflationResponse {
    const message = createBaseMsgUpdateTimeBasedInflationResponse();
    return message;
  },
  toAmino(_: MsgUpdateTimeBasedInflationResponse): MsgUpdateTimeBasedInflationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTimeBasedInflationResponseAminoMsg): MsgUpdateTimeBasedInflationResponse {
    return MsgUpdateTimeBasedInflationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateTimeBasedInflationResponseProtoMsg): MsgUpdateTimeBasedInflationResponse {
    return MsgUpdateTimeBasedInflationResponse.decode(message.value);
  },
  toProto(message: MsgUpdateTimeBasedInflationResponse): Uint8Array {
    return MsgUpdateTimeBasedInflationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTimeBasedInflationResponse): MsgUpdateTimeBasedInflationResponseProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.MsgUpdateTimeBasedInflationResponse",
      value: MsgUpdateTimeBasedInflationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTimeBasedInflation(): MsgDeleteTimeBasedInflation {
  return {
    authority: "",
    startBlockHeight: BigInt(0),
    endBlockHeight: BigInt(0)
  };
}
export const MsgDeleteTimeBasedInflation = {
  typeUrl: "/elys.tokenomics.MsgDeleteTimeBasedInflation",
  encode(message: MsgDeleteTimeBasedInflation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.startBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.startBlockHeight);
    }
    if (message.endBlockHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.endBlockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteTimeBasedInflation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteTimeBasedInflation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.startBlockHeight = reader.uint64();
          break;
        case 3:
          message.endBlockHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteTimeBasedInflation>): MsgDeleteTimeBasedInflation {
    const message = createBaseMsgDeleteTimeBasedInflation();
    message.authority = object.authority ?? "";
    message.startBlockHeight = object.startBlockHeight !== undefined && object.startBlockHeight !== null ? BigInt(object.startBlockHeight.toString()) : BigInt(0);
    message.endBlockHeight = object.endBlockHeight !== undefined && object.endBlockHeight !== null ? BigInt(object.endBlockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteTimeBasedInflationAmino): MsgDeleteTimeBasedInflation {
    const message = createBaseMsgDeleteTimeBasedInflation();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.start_block_height !== undefined && object.start_block_height !== null) {
      message.startBlockHeight = BigInt(object.start_block_height);
    }
    if (object.end_block_height !== undefined && object.end_block_height !== null) {
      message.endBlockHeight = BigInt(object.end_block_height);
    }
    return message;
  },
  toAmino(message: MsgDeleteTimeBasedInflation): MsgDeleteTimeBasedInflationAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.start_block_height = message.startBlockHeight !== BigInt(0) ? message.startBlockHeight?.toString() : undefined;
    obj.end_block_height = message.endBlockHeight !== BigInt(0) ? message.endBlockHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteTimeBasedInflationAminoMsg): MsgDeleteTimeBasedInflation {
    return MsgDeleteTimeBasedInflation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteTimeBasedInflation): MsgDeleteTimeBasedInflationAminoMsg {
    return {
      type: "tokenomics/MsgDeleteTimeBasedInflation",
      value: MsgDeleteTimeBasedInflation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteTimeBasedInflationProtoMsg): MsgDeleteTimeBasedInflation {
    return MsgDeleteTimeBasedInflation.decode(message.value);
  },
  toProto(message: MsgDeleteTimeBasedInflation): Uint8Array {
    return MsgDeleteTimeBasedInflation.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteTimeBasedInflation): MsgDeleteTimeBasedInflationProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.MsgDeleteTimeBasedInflation",
      value: MsgDeleteTimeBasedInflation.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTimeBasedInflationResponse(): MsgDeleteTimeBasedInflationResponse {
  return {};
}
export const MsgDeleteTimeBasedInflationResponse = {
  typeUrl: "/elys.tokenomics.MsgDeleteTimeBasedInflationResponse",
  encode(_: MsgDeleteTimeBasedInflationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteTimeBasedInflationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteTimeBasedInflationResponse();
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
  fromPartial(_: Partial<MsgDeleteTimeBasedInflationResponse>): MsgDeleteTimeBasedInflationResponse {
    const message = createBaseMsgDeleteTimeBasedInflationResponse();
    return message;
  },
  fromAmino(_: MsgDeleteTimeBasedInflationResponseAmino): MsgDeleteTimeBasedInflationResponse {
    const message = createBaseMsgDeleteTimeBasedInflationResponse();
    return message;
  },
  toAmino(_: MsgDeleteTimeBasedInflationResponse): MsgDeleteTimeBasedInflationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteTimeBasedInflationResponseAminoMsg): MsgDeleteTimeBasedInflationResponse {
    return MsgDeleteTimeBasedInflationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteTimeBasedInflationResponseProtoMsg): MsgDeleteTimeBasedInflationResponse {
    return MsgDeleteTimeBasedInflationResponse.decode(message.value);
  },
  toProto(message: MsgDeleteTimeBasedInflationResponse): Uint8Array {
    return MsgDeleteTimeBasedInflationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteTimeBasedInflationResponse): MsgDeleteTimeBasedInflationResponseProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.MsgDeleteTimeBasedInflationResponse",
      value: MsgDeleteTimeBasedInflationResponse.encode(message).finish()
    };
  }
};