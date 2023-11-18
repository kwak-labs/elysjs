import { BinaryReader, BinaryWriter } from "../../binary";
export interface MsgCreateEntry {
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
}
export interface MsgCreateEntryProtoMsg {
  typeUrl: "/elys.assetprofile.MsgCreateEntry";
  value: Uint8Array;
}
export interface MsgCreateEntryAmino {
  authority: string;
  base_denom: string;
  decimals: string;
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
}
export interface MsgCreateEntryAminoMsg {
  type: "/elys.assetprofile.MsgCreateEntry";
  value: MsgCreateEntryAmino;
}
export interface MsgCreateEntrySDKType {
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
}
export interface MsgCreateEntryResponse {}
export interface MsgCreateEntryResponseProtoMsg {
  typeUrl: "/elys.assetprofile.MsgCreateEntryResponse";
  value: Uint8Array;
}
export interface MsgCreateEntryResponseAmino {}
export interface MsgCreateEntryResponseAminoMsg {
  type: "/elys.assetprofile.MsgCreateEntryResponse";
  value: MsgCreateEntryResponseAmino;
}
export interface MsgCreateEntryResponseSDKType {}
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
}
export interface MsgUpdateEntryProtoMsg {
  typeUrl: "/elys.assetprofile.MsgUpdateEntry";
  value: Uint8Array;
}
export interface MsgUpdateEntryAmino {
  authority: string;
  base_denom: string;
  decimals: string;
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
}
export interface MsgUpdateEntryAminoMsg {
  type: "/elys.assetprofile.MsgUpdateEntry";
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
  authority: string;
  base_denom: string;
}
export interface MsgDeleteEntryAminoMsg {
  type: "/elys.assetprofile.MsgDeleteEntry";
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
function createBaseMsgCreateEntry(): MsgCreateEntry {
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
    ibcCounterpartyChainId: ""
  };
}
export const MsgCreateEntry = {
  typeUrl: "/elys.assetprofile.MsgCreateEntry",
  encode(message: MsgCreateEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateEntry();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateEntry>): MsgCreateEntry {
    const message = createBaseMsgCreateEntry();
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
    return message;
  },
  fromAmino(object: MsgCreateEntryAmino): MsgCreateEntry {
    return {
      authority: object.authority,
      baseDenom: object.base_denom,
      decimals: BigInt(object.decimals),
      denom: object.denom,
      path: object.path,
      ibcChannelId: object.ibc_channel_id,
      ibcCounterpartyChannelId: object.ibc_counterparty_channel_id,
      displayName: object.display_name,
      displaySymbol: object.display_symbol,
      network: object.network,
      address: object.address,
      externalSymbol: object.external_symbol,
      transferLimit: object.transfer_limit,
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => e) : [],
      unitDenom: object.unit_denom,
      ibcCounterpartyDenom: object.ibc_counterparty_denom,
      ibcCounterpartyChainId: object.ibc_counterparty_chain_id
    };
  },
  toAmino(message: MsgCreateEntry): MsgCreateEntryAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.base_denom = message.baseDenom;
    obj.decimals = message.decimals ? message.decimals.toString() : undefined;
    obj.denom = message.denom;
    obj.path = message.path;
    obj.ibc_channel_id = message.ibcChannelId;
    obj.ibc_counterparty_channel_id = message.ibcCounterpartyChannelId;
    obj.display_name = message.displayName;
    obj.display_symbol = message.displaySymbol;
    obj.network = message.network;
    obj.address = message.address;
    obj.external_symbol = message.externalSymbol;
    obj.transfer_limit = message.transferLimit;
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }
    obj.unit_denom = message.unitDenom;
    obj.ibc_counterparty_denom = message.ibcCounterpartyDenom;
    obj.ibc_counterparty_chain_id = message.ibcCounterpartyChainId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateEntryAminoMsg): MsgCreateEntry {
    return MsgCreateEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateEntryProtoMsg): MsgCreateEntry {
    return MsgCreateEntry.decode(message.value);
  },
  toProto(message: MsgCreateEntry): Uint8Array {
    return MsgCreateEntry.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateEntry): MsgCreateEntryProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.MsgCreateEntry",
      value: MsgCreateEntry.encode(message).finish()
    };
  }
};
function createBaseMsgCreateEntryResponse(): MsgCreateEntryResponse {
  return {};
}
export const MsgCreateEntryResponse = {
  typeUrl: "/elys.assetprofile.MsgCreateEntryResponse",
  encode(_: MsgCreateEntryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateEntryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateEntryResponse();
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
  fromPartial(_: Partial<MsgCreateEntryResponse>): MsgCreateEntryResponse {
    const message = createBaseMsgCreateEntryResponse();
    return message;
  },
  fromAmino(_: MsgCreateEntryResponseAmino): MsgCreateEntryResponse {
    return {};
  },
  toAmino(_: MsgCreateEntryResponse): MsgCreateEntryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateEntryResponseAminoMsg): MsgCreateEntryResponse {
    return MsgCreateEntryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateEntryResponseProtoMsg): MsgCreateEntryResponse {
    return MsgCreateEntryResponse.decode(message.value);
  },
  toProto(message: MsgCreateEntryResponse): Uint8Array {
    return MsgCreateEntryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateEntryResponse): MsgCreateEntryResponseProtoMsg {
    return {
      typeUrl: "/elys.assetprofile.MsgCreateEntryResponse",
      value: MsgCreateEntryResponse.encode(message).finish()
    };
  }
};
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
    ibcCounterpartyChainId: ""
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
    return message;
  },
  fromAmino(object: MsgUpdateEntryAmino): MsgUpdateEntry {
    return {
      authority: object.authority,
      baseDenom: object.base_denom,
      decimals: BigInt(object.decimals),
      denom: object.denom,
      path: object.path,
      ibcChannelId: object.ibc_channel_id,
      ibcCounterpartyChannelId: object.ibc_counterparty_channel_id,
      displayName: object.display_name,
      displaySymbol: object.display_symbol,
      network: object.network,
      address: object.address,
      externalSymbol: object.external_symbol,
      transferLimit: object.transfer_limit,
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => e) : [],
      unitDenom: object.unit_denom,
      ibcCounterpartyDenom: object.ibc_counterparty_denom,
      ibcCounterpartyChainId: object.ibc_counterparty_chain_id
    };
  },
  toAmino(message: MsgUpdateEntry): MsgUpdateEntryAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.base_denom = message.baseDenom;
    obj.decimals = message.decimals ? message.decimals.toString() : undefined;
    obj.denom = message.denom;
    obj.path = message.path;
    obj.ibc_channel_id = message.ibcChannelId;
    obj.ibc_counterparty_channel_id = message.ibcCounterpartyChannelId;
    obj.display_name = message.displayName;
    obj.display_symbol = message.displaySymbol;
    obj.network = message.network;
    obj.address = message.address;
    obj.external_symbol = message.externalSymbol;
    obj.transfer_limit = message.transferLimit;
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }
    obj.unit_denom = message.unitDenom;
    obj.ibc_counterparty_denom = message.ibcCounterpartyDenom;
    obj.ibc_counterparty_chain_id = message.ibcCounterpartyChainId;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateEntryAminoMsg): MsgUpdateEntry {
    return MsgUpdateEntry.fromAmino(object.value);
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
    return {};
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
    return {
      authority: object.authority,
      baseDenom: object.base_denom
    };
  },
  toAmino(message: MsgDeleteEntry): MsgDeleteEntryAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.base_denom = message.baseDenom;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteEntryAminoMsg): MsgDeleteEntry {
    return MsgDeleteEntry.fromAmino(object.value);
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
    return {};
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