import { BinaryReader, BinaryWriter } from "../../../binary";
export interface BlacklistEthereumAddressesProposal {
  title: string;
  description: string;
  blacklistAddresses: string[];
}
export interface BlacklistEthereumAddressesProposalProtoMsg {
  typeUrl: "/injective.peggy.v1.BlacklistEthereumAddressesProposal";
  value: Uint8Array;
}
export interface BlacklistEthereumAddressesProposalAmino {
  title: string;
  description: string;
  blacklist_addresses: string[];
}
export interface BlacklistEthereumAddressesProposalAminoMsg {
  type: "/injective.peggy.v1.BlacklistEthereumAddressesProposal";
  value: BlacklistEthereumAddressesProposalAmino;
}
export interface BlacklistEthereumAddressesProposalSDKType {
  title: string;
  description: string;
  blacklist_addresses: string[];
}
export interface RevokeEthereumBlacklistProposal {
  title: string;
  description: string;
  blacklistAddresses: string[];
}
export interface RevokeEthereumBlacklistProposalProtoMsg {
  typeUrl: "/injective.peggy.v1.RevokeEthereumBlacklistProposal";
  value: Uint8Array;
}
export interface RevokeEthereumBlacklistProposalAmino {
  title: string;
  description: string;
  blacklist_addresses: string[];
}
export interface RevokeEthereumBlacklistProposalAminoMsg {
  type: "/injective.peggy.v1.RevokeEthereumBlacklistProposal";
  value: RevokeEthereumBlacklistProposalAmino;
}
export interface RevokeEthereumBlacklistProposalSDKType {
  title: string;
  description: string;
  blacklist_addresses: string[];
}
function createBaseBlacklistEthereumAddressesProposal(): BlacklistEthereumAddressesProposal {
  return {
    title: "",
    description: "",
    blacklistAddresses: []
  };
}
export const BlacklistEthereumAddressesProposal = {
  typeUrl: "/injective.peggy.v1.BlacklistEthereumAddressesProposal",
  encode(message: BlacklistEthereumAddressesProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.blacklistAddresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlacklistEthereumAddressesProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlacklistEthereumAddressesProposal();
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
          message.blacklistAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BlacklistEthereumAddressesProposal>): BlacklistEthereumAddressesProposal {
    const message = createBaseBlacklistEthereumAddressesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.blacklistAddresses = object.blacklistAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: BlacklistEthereumAddressesProposalAmino): BlacklistEthereumAddressesProposal {
    return {
      title: object.title,
      description: object.description,
      blacklistAddresses: Array.isArray(object?.blacklist_addresses) ? object.blacklist_addresses.map((e: any) => e) : []
    };
  },
  toAmino(message: BlacklistEthereumAddressesProposal): BlacklistEthereumAddressesProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.blacklistAddresses) {
      obj.blacklist_addresses = message.blacklistAddresses.map(e => e);
    } else {
      obj.blacklist_addresses = [];
    }
    return obj;
  },
  fromAminoMsg(object: BlacklistEthereumAddressesProposalAminoMsg): BlacklistEthereumAddressesProposal {
    return BlacklistEthereumAddressesProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: BlacklistEthereumAddressesProposalProtoMsg): BlacklistEthereumAddressesProposal {
    return BlacklistEthereumAddressesProposal.decode(message.value);
  },
  toProto(message: BlacklistEthereumAddressesProposal): Uint8Array {
    return BlacklistEthereumAddressesProposal.encode(message).finish();
  },
  toProtoMsg(message: BlacklistEthereumAddressesProposal): BlacklistEthereumAddressesProposalProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.BlacklistEthereumAddressesProposal",
      value: BlacklistEthereumAddressesProposal.encode(message).finish()
    };
  }
};
function createBaseRevokeEthereumBlacklistProposal(): RevokeEthereumBlacklistProposal {
  return {
    title: "",
    description: "",
    blacklistAddresses: []
  };
}
export const RevokeEthereumBlacklistProposal = {
  typeUrl: "/injective.peggy.v1.RevokeEthereumBlacklistProposal",
  encode(message: RevokeEthereumBlacklistProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.blacklistAddresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RevokeEthereumBlacklistProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevokeEthereumBlacklistProposal();
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
          message.blacklistAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RevokeEthereumBlacklistProposal>): RevokeEthereumBlacklistProposal {
    const message = createBaseRevokeEthereumBlacklistProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.blacklistAddresses = object.blacklistAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RevokeEthereumBlacklistProposalAmino): RevokeEthereumBlacklistProposal {
    return {
      title: object.title,
      description: object.description,
      blacklistAddresses: Array.isArray(object?.blacklist_addresses) ? object.blacklist_addresses.map((e: any) => e) : []
    };
  },
  toAmino(message: RevokeEthereumBlacklistProposal): RevokeEthereumBlacklistProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.blacklistAddresses) {
      obj.blacklist_addresses = message.blacklistAddresses.map(e => e);
    } else {
      obj.blacklist_addresses = [];
    }
    return obj;
  },
  fromAminoMsg(object: RevokeEthereumBlacklistProposalAminoMsg): RevokeEthereumBlacklistProposal {
    return RevokeEthereumBlacklistProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RevokeEthereumBlacklistProposalProtoMsg): RevokeEthereumBlacklistProposal {
    return RevokeEthereumBlacklistProposal.decode(message.value);
  },
  toProto(message: RevokeEthereumBlacklistProposal): Uint8Array {
    return RevokeEthereumBlacklistProposal.encode(message).finish();
  },
  toProtoMsg(message: RevokeEthereumBlacklistProposal): RevokeEthereumBlacklistProposalProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.RevokeEthereumBlacklistProposal",
      value: RevokeEthereumBlacklistProposal.encode(message).finish()
    };
  }
};