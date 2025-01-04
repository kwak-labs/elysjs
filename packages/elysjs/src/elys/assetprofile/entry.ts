//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface Entry {
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
  authority: string;
  commitEnabled: boolean;
  withdrawEnabled: boolean;
}
export interface EntryProtoMsg {
  typeUrl: "/elys.assetprofile.Entry";
  value: Uint8Array;
}
export interface EntryAmino {
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
  authority?: string;
  commit_enabled?: boolean;
  withdraw_enabled?: boolean;
}
export interface EntryAminoMsg {
  type: "/elys.assetprofile.Entry";
  value: EntryAmino;
}
export interface EntrySDKType {
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
  authority: string;
  commit_enabled: boolean;
  withdraw_enabled: boolean;
}
function createBaseEntry(): Entry {
  return {
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
    authority: "",
    commitEnabled: false,
    withdrawEnabled: false
  };
}
export const Entry = {
  typeUrl: "/elys.assetprofile.Entry",
  encode(message: Entry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(16).uint64(message.decimals);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.path !== "") {
      writer.uint32(34).string(message.path);
    }
    if (message.ibcChannelId !== "") {
      writer.uint32(42).string(message.ibcChannelId);
    }
    if (message.ibcCounterpartyChannelId !== "") {
      writer.uint32(50).string(message.ibcCounterpartyChannelId);
    }
    if (message.displayName !== "") {
      writer.uint32(58).string(message.displayName);
    }
    if (message.displaySymbol !== "") {
      writer.uint32(66).string(message.displaySymbol);
    }
    if (message.network !== "") {
      writer.uint32(74).string(message.network);
    }
    if (message.address !== "") {
      writer.uint32(82).string(message.address);
    }
    if (message.externalSymbol !== "") {
      writer.uint32(90).string(message.externalSymbol);
    }
    if (message.transferLimit !== "") {
      writer.uint32(98).string(message.transferLimit);
    }
    for (const v of message.permissions) {
      writer.uint32(106).string(v!);
    }
    if (message.unitDenom !== "") {
      writer.uint32(114).string(message.unitDenom);
    }
    if (message.ibcCounterpartyDenom !== "") {
      writer.uint32(122).string(message.ibcCounterpartyDenom);
    }
    if (message.ibcCounterpartyChainId !== "") {
      writer.uint32(130).string(message.ibcCounterpartyChainId);
    }
    if (message.authority !== "") {
      writer.uint32(138).string(message.authority);
    }
    if (message.commitEnabled === true) {
      writer.uint32(144).bool(message.commitEnabled);
    }
    if (message.withdrawEnabled === true) {
      writer.uint32(152).bool(message.withdrawEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Entry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.decimals = reader.uint64();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.path = reader.string();
          break;
        case 5:
          message.ibcChannelId = reader.string();
          break;
        case 6:
          message.ibcCounterpartyChannelId = reader.string();
          break;
        case 7:
          message.displayName = reader.string();
          break;
        case 8:
          message.displaySymbol = reader.string();
          break;
        case 9:
          message.network = reader.string();
          break;
        case 10:
          message.address = reader.string();
          break;
        case 11:
          message.externalSymbol = reader.string();
          break;
        case 12:
          message.transferLimit = reader.string();
          break;
        case 13:
          message.permissions.push(reader.string());
          break;
        case 14:
          message.unitDenom = reader.string();
          break;
        case 15:
          message.ibcCounterpartyDenom = reader.string();
          break;
        case 16:
          message.ibcCounterpartyChainId = reader.string();
          break;
        case 17:
          message.authority = reader.string();
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
  fromPartial(object: Partial<Entry>): Entry {
    const message = createBaseEntry();
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
    message.authority = object.authority ?? "";
    message.commitEnabled = object.commitEnabled ?? false;
    message.withdrawEnabled = object.withdrawEnabled ?? false;
    return message;
  },
  fromAmino(object: EntryAmino): Entry {
    const message = createBaseEntry();
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
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.commit_enabled !== undefined && object.commit_enabled !== null) {
      message.commitEnabled = object.commit_enabled;
    }
    if (object.withdraw_enabled !== undefined && object.withdraw_enabled !== null) {
      message.withdrawEnabled = object.withdraw_enabled;
    }
    return message;
  },
  toAmino(message: Entry): EntryAmino {
    const obj: any = {};
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
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.commit_enabled = message.commitEnabled === false ? undefined : message.commitEnabled;
    obj.withdraw_enabled = message.withdrawEnabled === false ? undefined : message.withdrawEnabled;
    return obj;
  },
  fromAminoMsg(object: EntryAminoMsg): Entry {
    return Entry.fromAmino(object.value);
  },
  fromProtoMsg(message: EntryProtoMsg): Entry {
    return Entry.decode(message.value);
  },
  toProto(message: Entry): Uint8Array {
    return Entry.encode(message).finish();
  },
  toProtoMsg(message: Entry): EntryProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.Entry",
      value: Entry.encode(message).finish()
    };
  }
};