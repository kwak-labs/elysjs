//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface MsgUpdateEntry {
  authority: string;
  baseDenom: string;
  decimals: bigint;
  denom: string;
  path: string;
  ibcChannelId: string;
  ibcCounterpartyChannelId: string;
  displayName: string;
  displaySymbol: string;
  network: string;
  address: string;
  externalSymbol: string;
  transferLimit: string;
  permissions: string[];
  unitDenom: string;
  ibcCounterpartyDenom: string;
  ibcCounterpartyChainId: string;
  commitEnabled: boolean;
  withdrawEnabled: boolean;
}
export interface MsgUpdateEntryProtoMsg {
  typeUrl: "/elys.assetprofile.MsgUpdateEntry";
  value: Uint8Array;
}
export interface MsgUpdateEntryAmino {
  authority?: string;
  base_denom?: string;
  decimals?: string;
  denom?: string;
  path?: string;
  ibc_channel_id?: string;
  ibc_counterparty_channel_id?: string;
  display_name?: string;
  display_symbol?: string;
  network?: string;
  address?: string;
  external_symbol?: string;
  transfer_limit?: string;
  permissions?: string[];
  unit_denom?: string;
  ibc_counterparty_denom?: string;
  ibc_counterparty_chain_id?: string;
  commit_enabled?: boolean;
  withdraw_enabled?: boolean;
}
export interface MsgUpdateEntryAminoMsg {
  type: "assetprofile/MsgUpdateEntry";
  value: MsgUpdateEntryAmino;
}
export interface MsgUpdateEntrySDKType {
  authority: string;
  base_denom: string;
  decimals: bigint;
  denom: string;
  path: string;
  ibc_channel_id: string;
  ibc_counterparty_channel_id: string;
  display_name: string;
  display_symbol: string;
  network: string;
  address: string;
  external_symbol: string;
  transfer_limit: string;
  permissions: string[];
  unit_denom: string;
  ibc_counterparty_denom: string;
  ibc_counterparty_chain_id: string;
  commit_enabled: boolean;
  withdraw_enabled: boolean;
}
export interface MsgUpdateEntryResponse {}
export interface MsgUpdateEntryResponseProtoMsg {
  typeUrl: "/elys.assetprofile.MsgUpdateEntryResponse";
  value: Uint8Array;
}
export interface MsgUpdateEntryResponseAmino {}
export interface MsgUpdateEntryResponseAminoMsg {
  type: "/elys.assetprofile.MsgUpdateEntryResponse";
  value: MsgUpdateEntryResponseAmino;
}
export interface MsgUpdateEntryResponseSDKType {}
export interface MsgDeleteEntry {
  authority: string;
  baseDenom: string;
}
export interface MsgDeleteEntryProtoMsg {
  typeUrl: "/elys.assetprofile.MsgDeleteEntry";
  value: Uint8Array;
}
export interface MsgDeleteEntryAmino {
  authority?: string;
  base_denom?: string;
}
export interface MsgDeleteEntryAminoMsg {
  type: "assetprofile/MsgDeleteEntry";
  value: MsgDeleteEntryAmino;
}
export interface MsgDeleteEntrySDKType {
  authority: string;
  base_denom: string;
}
export interface MsgDeleteEntryResponse {}
export interface MsgDeleteEntryResponseProtoMsg {
  typeUrl: "/elys.assetprofile.MsgDeleteEntryResponse";
  value: Uint8Array;
}
export interface MsgDeleteEntryResponseAmino {}
export interface MsgDeleteEntryResponseAminoMsg {
  type: "/elys.assetprofile.MsgDeleteEntryResponse";
  value: MsgDeleteEntryResponseAmino;
}
export interface MsgDeleteEntryResponseSDKType {}
export interface MsgAddEntry {
  creator: string;
  baseDenom: string;
  decimals: bigint;
  denom: string;
  path: string;
  ibcChannelId: string;
  ibcCounterpartyChannelId: string;
  displayName: string;
  displaySymbol: string;
  network: string;
  address: string;
  externalSymbol: string;
  transferLimit: string;
  permissions: string[];
  unitDenom: string;
  ibcCounterpartyDenom: string;
  ibcCounterpartyChainId: string;
  commitEnabled: boolean;
  withdrawEnabled: boolean;
}
export interface MsgAddEntryProtoMsg {
  typeUrl: "/elys.assetprofile.MsgAddEntry";
  value: Uint8Array;
}
export interface MsgAddEntryAmino {
  creator?: string;
  baseDenom?: string;
  decimals?: string;
  denom?: string;
  path?: string;
  ibcChannelId?: string;
  ibcCounterpartyChannelId?: string;
  displayName?: string;
  displaySymbol?: string;
  network?: string;
  address?: string;
  externalSymbol?: string;
  transferLimit?: string;
  permissions?: string[];
  unitDenom?: string;
  ibcCounterpartyDenom?: string;
  ibcCounterpartyChainId?: string;
  commitEnabled?: boolean;
  withdrawEnabled?: boolean;
}
export interface MsgAddEntryAminoMsg {
  type: "assetprofile/MsgAddEntry";
  value: MsgAddEntryAmino;
}
export interface MsgAddEntrySDKType {
  creator: string;
  baseDenom: string;
  decimals: bigint;
  denom: string;
  path: string;
  ibcChannelId: string;
  ibcCounterpartyChannelId: string;
  displayName: string;
  displaySymbol: string;
  network: string;
  address: string;
  externalSymbol: string;
  transferLimit: string;
  permissions: string[];
  unitDenom: string;
  ibcCounterpartyDenom: string;
  ibcCounterpartyChainId: string;
  commitEnabled: boolean;
  withdrawEnabled: boolean;
}
export interface MsgAddEntryResponse {}
export interface MsgAddEntryResponseProtoMsg {
  typeUrl: "/elys.assetprofile.MsgAddEntryResponse";
  value: Uint8Array;
}
export interface MsgAddEntryResponseAmino {}
export interface MsgAddEntryResponseAminoMsg {
  type: "/elys.assetprofile.MsgAddEntryResponse";
  value: MsgAddEntryResponseAmino;
}
export interface MsgAddEntryResponseSDKType {}
function createBaseMsgUpdateEntry(): MsgUpdateEntry {
  return {
    authority: "",
    baseDenom: "",
    decimals: BigInt(0),
    denom: "",
    path: "",
    ibcChannelId: "",
    ibcCounterpartyChannelId: "",
    displayName: "",
    displaySymbol: "",
    network: "",
    address: "",
    externalSymbol: "",
    transferLimit: "",
    permissions: [],
    unitDenom: "",
    ibcCounterpartyDenom: "",
    ibcCounterpartyChainId: "",
    commitEnabled: false,
    withdrawEnabled: false
  };
}
export const MsgUpdateEntry = {
  typeUrl: "/elys.assetprofile.MsgUpdateEntry",
  encode(message: MsgUpdateEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(24).uint64(message.decimals);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.path !== "") {
      writer.uint32(42).string(message.path);
    }
    if (message.ibcChannelId !== "") {
      writer.uint32(50).string(message.ibcChannelId);
    }
    if (message.ibcCounterpartyChannelId !== "") {
      writer.uint32(58).string(message.ibcCounterpartyChannelId);
    }
    if (message.displayName !== "") {
      writer.uint32(66).string(message.displayName);
    }
    if (message.displaySymbol !== "") {
      writer.uint32(74).string(message.displaySymbol);
    }
    if (message.network !== "") {
      writer.uint32(82).string(message.network);
    }
    if (message.address !== "") {
      writer.uint32(90).string(message.address);
    }
    if (message.externalSymbol !== "") {
      writer.uint32(98).string(message.externalSymbol);
    }
    if (message.transferLimit !== "") {
      writer.uint32(106).string(message.transferLimit);
    }
    for (const v of message.permissions) {
      writer.uint32(114).string(v!);
    }
    if (message.unitDenom !== "") {
      writer.uint32(122).string(message.unitDenom);
    }
    if (message.ibcCounterpartyDenom !== "") {
      writer.uint32(130).string(message.ibcCounterpartyDenom);
    }
    if (message.ibcCounterpartyChainId !== "") {
      writer.uint32(138).string(message.ibcCounterpartyChainId);
    }
    if (message.commitEnabled === true) {
      writer.uint32(144).bool(message.commitEnabled);
    }
    if (message.withdrawEnabled === true) {
      writer.uint32(152).bool(message.withdrawEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        case 3:
          message.decimals = reader.uint64();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.path = reader.string();
          break;
        case 6:
          message.ibcChannelId = reader.string();
          break;
        case 7:
          message.ibcCounterpartyChannelId = reader.string();
          break;
        case 8:
          message.displayName = reader.string();
          break;
        case 9:
          message.displaySymbol = reader.string();
          break;
        case 10:
          message.network = reader.string();
          break;
        case 11:
          message.address = reader.string();
          break;
        case 12:
          message.externalSymbol = reader.string();
          break;
        case 13:
          message.transferLimit = reader.string();
          break;
        case 14:
          message.permissions.push(reader.string());
          break;
        case 15:
          message.unitDenom = reader.string();
          break;
        case 16:
          message.ibcCounterpartyDenom = reader.string();
          break;
        case 17:
          message.ibcCounterpartyChainId = reader.string();
          break;
        case 18:
          message.commitEnabled = reader.bool();
          break;
        case 19:
          message.withdrawEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateEntry>): MsgUpdateEntry {
    const message = createBaseMsgUpdateEntry();
    message.authority = object.authority ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.path = object.path ?? "";
    message.ibcChannelId = object.ibcChannelId ?? "";
    message.ibcCounterpartyChannelId = object.ibcCounterpartyChannelId ?? "";
    message.displayName = object.displayName ?? "";
    message.displaySymbol = object.displaySymbol ?? "";
    message.network = object.network ?? "";
    message.address = object.address ?? "";
    message.externalSymbol = object.externalSymbol ?? "";
    message.transferLimit = object.transferLimit ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    message.unitDenom = object.unitDenom ?? "";
    message.ibcCounterpartyDenom = object.ibcCounterpartyDenom ?? "";
    message.ibcCounterpartyChainId = object.ibcCounterpartyChainId ?? "";
    message.commitEnabled = object.commitEnabled ?? false;
    message.withdrawEnabled = object.withdrawEnabled ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateEntryAmino): MsgUpdateEntry {
    const message = createBaseMsgUpdateEntry();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = BigInt(object.decimals);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.ibc_channel_id !== undefined && object.ibc_channel_id !== null) {
      message.ibcChannelId = object.ibc_channel_id;
    }
    if (object.ibc_counterparty_channel_id !== undefined && object.ibc_counterparty_channel_id !== null) {
      message.ibcCounterpartyChannelId = object.ibc_counterparty_channel_id;
    }
    if (object.display_name !== undefined && object.display_name !== null) {
      message.displayName = object.display_name;
    }
    if (object.display_symbol !== undefined && object.display_symbol !== null) {
      message.displaySymbol = object.display_symbol;
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.external_symbol !== undefined && object.external_symbol !== null) {
      message.externalSymbol = object.external_symbol;
    }
    if (object.transfer_limit !== undefined && object.transfer_limit !== null) {
      message.transferLimit = object.transfer_limit;
    }
    message.permissions = object.permissions?.map(e => e) || [];
    if (object.unit_denom !== undefined && object.unit_denom !== null) {
      message.unitDenom = object.unit_denom;
    }
    if (object.ibc_counterparty_denom !== undefined && object.ibc_counterparty_denom !== null) {
      message.ibcCounterpartyDenom = object.ibc_counterparty_denom;
    }
    if (object.ibc_counterparty_chain_id !== undefined && object.ibc_counterparty_chain_id !== null) {
      message.ibcCounterpartyChainId = object.ibc_counterparty_chain_id;
    }
    if (object.commit_enabled !== undefined && object.commit_enabled !== null) {
      message.commitEnabled = object.commit_enabled;
    }
    if (object.withdraw_enabled !== undefined && object.withdraw_enabled !== null) {
      message.withdrawEnabled = object.withdraw_enabled;
    }
    return message;
  },
  toAmino(message: MsgUpdateEntry): MsgUpdateEntryAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    obj.decimals = message.decimals !== BigInt(0) ? message.decimals?.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.path = message.path === "" ? undefined : message.path;
    obj.ibc_channel_id = message.ibcChannelId === "" ? undefined : message.ibcChannelId;
    obj.ibc_counterparty_channel_id = message.ibcCounterpartyChannelId === "" ? undefined : message.ibcCounterpartyChannelId;
    obj.display_name = message.displayName === "" ? undefined : message.displayName;
    obj.display_symbol = message.displaySymbol === "" ? undefined : message.displaySymbol;
    obj.network = message.network === "" ? undefined : message.network;
    obj.address = message.address === "" ? undefined : message.address;
    obj.external_symbol = message.externalSymbol === "" ? undefined : message.externalSymbol;
    obj.transfer_limit = message.transferLimit === "" ? undefined : message.transferLimit;
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = message.permissions;
    }
    obj.unit_denom = message.unitDenom === "" ? undefined : message.unitDenom;
    obj.ibc_counterparty_denom = message.ibcCounterpartyDenom === "" ? undefined : message.ibcCounterpartyDenom;
    obj.ibc_counterparty_chain_id = message.ibcCounterpartyChainId === "" ? undefined : message.ibcCounterpartyChainId;
    obj.commit_enabled = message.commitEnabled === false ? undefined : message.commitEnabled;
    obj.withdraw_enabled = message.withdrawEnabled === false ? undefined : message.withdrawEnabled;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateEntryAminoMsg): MsgUpdateEntry {
    return MsgUpdateEntry.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateEntry): MsgUpdateEntryAminoMsg {
    return {
      type: "assetprofile/MsgUpdateEntry",
      value: MsgUpdateEntry.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateEntryProtoMsg): MsgUpdateEntry {
    return MsgUpdateEntry.decode(message.value);
  },
  toProto(message: MsgUpdateEntry): Uint8Array {
    return MsgUpdateEntry.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateEntry): MsgUpdateEntryProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.MsgUpdateEntry",
      value: MsgUpdateEntry.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateEntryResponse(): MsgUpdateEntryResponse {
  return {};
}
export const MsgUpdateEntryResponse = {
  typeUrl: "/elys.assetprofile.MsgUpdateEntryResponse",
  encode(_: MsgUpdateEntryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateEntryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEntryResponse();
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
  fromPartial(_: Partial<MsgUpdateEntryResponse>): MsgUpdateEntryResponse {
    const message = createBaseMsgUpdateEntryResponse();
    return message;
  },
  fromAmino(_: MsgUpdateEntryResponseAmino): MsgUpdateEntryResponse {
    const message = createBaseMsgUpdateEntryResponse();
    return message;
  },
  toAmino(_: MsgUpdateEntryResponse): MsgUpdateEntryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateEntryResponseAminoMsg): MsgUpdateEntryResponse {
    return MsgUpdateEntryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateEntryResponseProtoMsg): MsgUpdateEntryResponse {
    return MsgUpdateEntryResponse.decode(message.value);
  },
  toProto(message: MsgUpdateEntryResponse): Uint8Array {
    return MsgUpdateEntryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateEntryResponse): MsgUpdateEntryResponseProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.MsgUpdateEntryResponse",
      value: MsgUpdateEntryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteEntry(): MsgDeleteEntry {
  return {
    authority: "",
    baseDenom: ""
  };
}
export const MsgDeleteEntry = {
  typeUrl: "/elys.assetprofile.MsgDeleteEntry",
  encode(message: MsgDeleteEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteEntry>): MsgDeleteEntry {
    const message = createBaseMsgDeleteEntry();
    message.authority = object.authority ?? "";
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteEntryAmino): MsgDeleteEntry {
    const message = createBaseMsgDeleteEntry();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    return message;
  },
  toAmino(message: MsgDeleteEntry): MsgDeleteEntryAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteEntryAminoMsg): MsgDeleteEntry {
    return MsgDeleteEntry.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteEntry): MsgDeleteEntryAminoMsg {
    return {
      type: "assetprofile/MsgDeleteEntry",
      value: MsgDeleteEntry.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteEntryProtoMsg): MsgDeleteEntry {
    return MsgDeleteEntry.decode(message.value);
  },
  toProto(message: MsgDeleteEntry): Uint8Array {
    return MsgDeleteEntry.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteEntry): MsgDeleteEntryProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.MsgDeleteEntry",
      value: MsgDeleteEntry.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteEntryResponse(): MsgDeleteEntryResponse {
  return {};
}
export const MsgDeleteEntryResponse = {
  typeUrl: "/elys.assetprofile.MsgDeleteEntryResponse",
  encode(_: MsgDeleteEntryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteEntryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteEntryResponse();
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
  fromPartial(_: Partial<MsgDeleteEntryResponse>): MsgDeleteEntryResponse {
    const message = createBaseMsgDeleteEntryResponse();
    return message;
  },
  fromAmino(_: MsgDeleteEntryResponseAmino): MsgDeleteEntryResponse {
    const message = createBaseMsgDeleteEntryResponse();
    return message;
  },
  toAmino(_: MsgDeleteEntryResponse): MsgDeleteEntryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteEntryResponseAminoMsg): MsgDeleteEntryResponse {
    return MsgDeleteEntryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteEntryResponseProtoMsg): MsgDeleteEntryResponse {
    return MsgDeleteEntryResponse.decode(message.value);
  },
  toProto(message: MsgDeleteEntryResponse): Uint8Array {
    return MsgDeleteEntryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteEntryResponse): MsgDeleteEntryResponseProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.MsgDeleteEntryResponse",
      value: MsgDeleteEntryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddEntry(): MsgAddEntry {
  return {
    creator: "",
    baseDenom: "",
    decimals: BigInt(0),
    denom: "",
    path: "",
    ibcChannelId: "",
    ibcCounterpartyChannelId: "",
    displayName: "",
    displaySymbol: "",
    network: "",
    address: "",
    externalSymbol: "",
    transferLimit: "",
    permissions: [],
    unitDenom: "",
    ibcCounterpartyDenom: "",
    ibcCounterpartyChainId: "",
    commitEnabled: false,
    withdrawEnabled: false
  };
}
export const MsgAddEntry = {
  typeUrl: "/elys.assetprofile.MsgAddEntry",
  encode(message: MsgAddEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(24).uint64(message.decimals);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.path !== "") {
      writer.uint32(42).string(message.path);
    }
    if (message.ibcChannelId !== "") {
      writer.uint32(50).string(message.ibcChannelId);
    }
    if (message.ibcCounterpartyChannelId !== "") {
      writer.uint32(58).string(message.ibcCounterpartyChannelId);
    }
    if (message.displayName !== "") {
      writer.uint32(66).string(message.displayName);
    }
    if (message.displaySymbol !== "") {
      writer.uint32(74).string(message.displaySymbol);
    }
    if (message.network !== "") {
      writer.uint32(82).string(message.network);
    }
    if (message.address !== "") {
      writer.uint32(90).string(message.address);
    }
    if (message.externalSymbol !== "") {
      writer.uint32(98).string(message.externalSymbol);
    }
    if (message.transferLimit !== "") {
      writer.uint32(106).string(message.transferLimit);
    }
    for (const v of message.permissions) {
      writer.uint32(114).string(v!);
    }
    if (message.unitDenom !== "") {
      writer.uint32(122).string(message.unitDenom);
    }
    if (message.ibcCounterpartyDenom !== "") {
      writer.uint32(130).string(message.ibcCounterpartyDenom);
    }
    if (message.ibcCounterpartyChainId !== "") {
      writer.uint32(138).string(message.ibcCounterpartyChainId);
    }
    if (message.commitEnabled === true) {
      writer.uint32(144).bool(message.commitEnabled);
    }
    if (message.withdrawEnabled === true) {
      writer.uint32(152).bool(message.withdrawEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        case 3:
          message.decimals = reader.uint64();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.path = reader.string();
          break;
        case 6:
          message.ibcChannelId = reader.string();
          break;
        case 7:
          message.ibcCounterpartyChannelId = reader.string();
          break;
        case 8:
          message.displayName = reader.string();
          break;
        case 9:
          message.displaySymbol = reader.string();
          break;
        case 10:
          message.network = reader.string();
          break;
        case 11:
          message.address = reader.string();
          break;
        case 12:
          message.externalSymbol = reader.string();
          break;
        case 13:
          message.transferLimit = reader.string();
          break;
        case 14:
          message.permissions.push(reader.string());
          break;
        case 15:
          message.unitDenom = reader.string();
          break;
        case 16:
          message.ibcCounterpartyDenom = reader.string();
          break;
        case 17:
          message.ibcCounterpartyChainId = reader.string();
          break;
        case 18:
          message.commitEnabled = reader.bool();
          break;
        case 19:
          message.withdrawEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddEntry>): MsgAddEntry {
    const message = createBaseMsgAddEntry();
    message.creator = object.creator ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.path = object.path ?? "";
    message.ibcChannelId = object.ibcChannelId ?? "";
    message.ibcCounterpartyChannelId = object.ibcCounterpartyChannelId ?? "";
    message.displayName = object.displayName ?? "";
    message.displaySymbol = object.displaySymbol ?? "";
    message.network = object.network ?? "";
    message.address = object.address ?? "";
    message.externalSymbol = object.externalSymbol ?? "";
    message.transferLimit = object.transferLimit ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    message.unitDenom = object.unitDenom ?? "";
    message.ibcCounterpartyDenom = object.ibcCounterpartyDenom ?? "";
    message.ibcCounterpartyChainId = object.ibcCounterpartyChainId ?? "";
    message.commitEnabled = object.commitEnabled ?? false;
    message.withdrawEnabled = object.withdrawEnabled ?? false;
    return message;
  },
  fromAmino(object: MsgAddEntryAmino): MsgAddEntry {
    const message = createBaseMsgAddEntry();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = object.baseDenom;
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = BigInt(object.decimals);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.ibcChannelId !== undefined && object.ibcChannelId !== null) {
      message.ibcChannelId = object.ibcChannelId;
    }
    if (object.ibcCounterpartyChannelId !== undefined && object.ibcCounterpartyChannelId !== null) {
      message.ibcCounterpartyChannelId = object.ibcCounterpartyChannelId;
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = object.displayName;
    }
    if (object.displaySymbol !== undefined && object.displaySymbol !== null) {
      message.displaySymbol = object.displaySymbol;
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.externalSymbol !== undefined && object.externalSymbol !== null) {
      message.externalSymbol = object.externalSymbol;
    }
    if (object.transferLimit !== undefined && object.transferLimit !== null) {
      message.transferLimit = object.transferLimit;
    }
    message.permissions = object.permissions?.map(e => e) || [];
    if (object.unitDenom !== undefined && object.unitDenom !== null) {
      message.unitDenom = object.unitDenom;
    }
    if (object.ibcCounterpartyDenom !== undefined && object.ibcCounterpartyDenom !== null) {
      message.ibcCounterpartyDenom = object.ibcCounterpartyDenom;
    }
    if (object.ibcCounterpartyChainId !== undefined && object.ibcCounterpartyChainId !== null) {
      message.ibcCounterpartyChainId = object.ibcCounterpartyChainId;
    }
    if (object.commitEnabled !== undefined && object.commitEnabled !== null) {
      message.commitEnabled = object.commitEnabled;
    }
    if (object.withdrawEnabled !== undefined && object.withdrawEnabled !== null) {
      message.withdrawEnabled = object.withdrawEnabled;
    }
    return message;
  },
  toAmino(message: MsgAddEntry): MsgAddEntryAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.baseDenom = message.baseDenom === "" ? undefined : message.baseDenom;
    obj.decimals = message.decimals !== BigInt(0) ? message.decimals?.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.path = message.path === "" ? undefined : message.path;
    obj.ibcChannelId = message.ibcChannelId === "" ? undefined : message.ibcChannelId;
    obj.ibcCounterpartyChannelId = message.ibcCounterpartyChannelId === "" ? undefined : message.ibcCounterpartyChannelId;
    obj.displayName = message.displayName === "" ? undefined : message.displayName;
    obj.displaySymbol = message.displaySymbol === "" ? undefined : message.displaySymbol;
    obj.network = message.network === "" ? undefined : message.network;
    obj.address = message.address === "" ? undefined : message.address;
    obj.externalSymbol = message.externalSymbol === "" ? undefined : message.externalSymbol;
    obj.transferLimit = message.transferLimit === "" ? undefined : message.transferLimit;
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = message.permissions;
    }
    obj.unitDenom = message.unitDenom === "" ? undefined : message.unitDenom;
    obj.ibcCounterpartyDenom = message.ibcCounterpartyDenom === "" ? undefined : message.ibcCounterpartyDenom;
    obj.ibcCounterpartyChainId = message.ibcCounterpartyChainId === "" ? undefined : message.ibcCounterpartyChainId;
    obj.commitEnabled = message.commitEnabled === false ? undefined : message.commitEnabled;
    obj.withdrawEnabled = message.withdrawEnabled === false ? undefined : message.withdrawEnabled;
    return obj;
  },
  fromAminoMsg(object: MsgAddEntryAminoMsg): MsgAddEntry {
    return MsgAddEntry.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddEntry): MsgAddEntryAminoMsg {
    return {
      type: "assetprofile/MsgAddEntry",
      value: MsgAddEntry.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddEntryProtoMsg): MsgAddEntry {
    return MsgAddEntry.decode(message.value);
  },
  toProto(message: MsgAddEntry): Uint8Array {
    return MsgAddEntry.encode(message).finish();
  },
  toProtoMsg(message: MsgAddEntry): MsgAddEntryProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.MsgAddEntry",
      value: MsgAddEntry.encode(message).finish()
    };
  }
};
function createBaseMsgAddEntryResponse(): MsgAddEntryResponse {
  return {};
}
export const MsgAddEntryResponse = {
  typeUrl: "/elys.assetprofile.MsgAddEntryResponse",
  encode(_: MsgAddEntryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddEntryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddEntryResponse();
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
  fromPartial(_: Partial<MsgAddEntryResponse>): MsgAddEntryResponse {
    const message = createBaseMsgAddEntryResponse();
    return message;
  },
  fromAmino(_: MsgAddEntryResponseAmino): MsgAddEntryResponse {
    const message = createBaseMsgAddEntryResponse();
    return message;
  },
  toAmino(_: MsgAddEntryResponse): MsgAddEntryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddEntryResponseAminoMsg): MsgAddEntryResponse {
    return MsgAddEntryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddEntryResponseProtoMsg): MsgAddEntryResponse {
    return MsgAddEntryResponse.decode(message.value);
  },
  toProto(message: MsgAddEntryResponse): Uint8Array {
    return MsgAddEntryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddEntryResponse): MsgAddEntryResponseProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.MsgAddEntryResponse",
      value: MsgAddEntryResponse.encode(message).finish()
    };
  }
};