//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface AtomStaker {
  address: string;
  amount: string;
}
export interface AtomStakerProtoMsg {
  typeUrl: "/elys.commitment.AtomStaker";
  value: Uint8Array;
}
export interface AtomStakerAmino {
  address?: string;
  amount?: string;
}
export interface AtomStakerAminoMsg {
  type: "/elys.commitment.AtomStaker";
  value: AtomStakerAmino;
}
export interface AtomStakerSDKType {
  address: string;
  amount: string;
}
export interface NftHolder {
  address: string;
  amount: string;
}
export interface NftHolderProtoMsg {
  typeUrl: "/elys.commitment.NftHolder";
  value: Uint8Array;
}
export interface NftHolderAmino {
  address?: string;
  amount?: string;
}
export interface NftHolderAminoMsg {
  type: "/elys.commitment.NftHolder";
  value: NftHolderAmino;
}
export interface NftHolderSDKType {
  address: string;
  amount: string;
}
export interface Cadet {
  address: string;
  amount: string;
}
export interface CadetProtoMsg {
  typeUrl: "/elys.commitment.Cadet";
  value: Uint8Array;
}
export interface CadetAmino {
  address?: string;
  amount?: string;
}
export interface CadetAminoMsg {
  type: "/elys.commitment.Cadet";
  value: CadetAmino;
}
export interface CadetSDKType {
  address: string;
  amount: string;
}
export interface Governor {
  address: string;
  amount: string;
}
export interface GovernorProtoMsg {
  typeUrl: "/elys.commitment.Governor";
  value: Uint8Array;
}
export interface GovernorAmino {
  address?: string;
  amount?: string;
}
export interface GovernorAminoMsg {
  type: "/elys.commitment.Governor";
  value: GovernorAmino;
}
export interface GovernorSDKType {
  address: string;
  amount: string;
}
export interface AirdropClaimed {
  address: string;
  claimed: boolean;
}
export interface AirdropClaimedProtoMsg {
  typeUrl: "/elys.commitment.AirdropClaimed";
  value: Uint8Array;
}
export interface AirdropClaimedAmino {
  address?: string;
  claimed?: boolean;
}
export interface AirdropClaimedAminoMsg {
  type: "/elys.commitment.AirdropClaimed";
  value: AirdropClaimedAmino;
}
export interface AirdropClaimedSDKType {
  address: string;
  claimed: boolean;
}
export interface TotalClaimed {
  totalElysClaimed: string;
  totalEdenClaimed: string;
}
export interface TotalClaimedProtoMsg {
  typeUrl: "/elys.commitment.TotalClaimed";
  value: Uint8Array;
}
export interface TotalClaimedAmino {
  total_elys_claimed?: string;
  total_eden_claimed?: string;
}
export interface TotalClaimedAminoMsg {
  type: "/elys.commitment.TotalClaimed";
  value: TotalClaimedAmino;
}
export interface TotalClaimedSDKType {
  total_elys_claimed: string;
  total_eden_claimed: string;
}
export interface KolList {
  address: string;
  amount: string;
  claimed: boolean;
  refunded: boolean;
}
export interface KolListProtoMsg {
  typeUrl: "/elys.commitment.KolList";
  value: Uint8Array;
}
export interface KolListAmino {
  address?: string;
  amount?: string;
  claimed?: boolean;
  refunded?: boolean;
}
export interface KolListAminoMsg {
  type: "/elys.commitment.KolList";
  value: KolListAmino;
}
export interface KolListSDKType {
  address: string;
  amount: string;
  claimed: boolean;
  refunded: boolean;
}
function createBaseAtomStaker(): AtomStaker {
  return {
    address: "",
    amount: ""
  };
}
export const AtomStaker = {
  typeUrl: "/elys.commitment.AtomStaker",
  encode(message: AtomStaker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AtomStaker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAtomStaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AtomStaker>): AtomStaker {
    const message = createBaseAtomStaker();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: AtomStakerAmino): AtomStaker {
    const message = createBaseAtomStaker();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: AtomStaker): AtomStakerAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: AtomStakerAminoMsg): AtomStaker {
    return AtomStaker.fromAmino(object.value);
  },
  fromProtoMsg(message: AtomStakerProtoMsg): AtomStaker {
    return AtomStaker.decode(message.value);
  },
  toProto(message: AtomStaker): Uint8Array {
    return AtomStaker.encode(message).finish();
  },
  toProtoMsg(message: AtomStaker): AtomStakerProtoMsg {
    return {
      typeUrl: "/elys.commitment.AtomStaker",
      value: AtomStaker.encode(message).finish()
    };
  }
};
function createBaseNftHolder(): NftHolder {
  return {
    address: "",
    amount: ""
  };
}
export const NftHolder = {
  typeUrl: "/elys.commitment.NftHolder",
  encode(message: NftHolder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NftHolder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftHolder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<NftHolder>): NftHolder {
    const message = createBaseNftHolder();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: NftHolderAmino): NftHolder {
    const message = createBaseNftHolder();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: NftHolder): NftHolderAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: NftHolderAminoMsg): NftHolder {
    return NftHolder.fromAmino(object.value);
  },
  fromProtoMsg(message: NftHolderProtoMsg): NftHolder {
    return NftHolder.decode(message.value);
  },
  toProto(message: NftHolder): Uint8Array {
    return NftHolder.encode(message).finish();
  },
  toProtoMsg(message: NftHolder): NftHolderProtoMsg {
    return {
      typeUrl: "/elys.commitment.NftHolder",
      value: NftHolder.encode(message).finish()
    };
  }
};
function createBaseCadet(): Cadet {
  return {
    address: "",
    amount: ""
  };
}
export const Cadet = {
  typeUrl: "/elys.commitment.Cadet",
  encode(message: Cadet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Cadet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCadet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Cadet>): Cadet {
    const message = createBaseCadet();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: CadetAmino): Cadet {
    const message = createBaseCadet();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: Cadet): CadetAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: CadetAminoMsg): Cadet {
    return Cadet.fromAmino(object.value);
  },
  fromProtoMsg(message: CadetProtoMsg): Cadet {
    return Cadet.decode(message.value);
  },
  toProto(message: Cadet): Uint8Array {
    return Cadet.encode(message).finish();
  },
  toProtoMsg(message: Cadet): CadetProtoMsg {
    return {
      typeUrl: "/elys.commitment.Cadet",
      value: Cadet.encode(message).finish()
    };
  }
};
function createBaseGovernor(): Governor {
  return {
    address: "",
    amount: ""
  };
}
export const Governor = {
  typeUrl: "/elys.commitment.Governor",
  encode(message: Governor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Governor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovernor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Governor>): Governor {
    const message = createBaseGovernor();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: GovernorAmino): Governor {
    const message = createBaseGovernor();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: Governor): GovernorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: GovernorAminoMsg): Governor {
    return Governor.fromAmino(object.value);
  },
  fromProtoMsg(message: GovernorProtoMsg): Governor {
    return Governor.decode(message.value);
  },
  toProto(message: Governor): Uint8Array {
    return Governor.encode(message).finish();
  },
  toProtoMsg(message: Governor): GovernorProtoMsg {
    return {
      typeUrl: "/elys.commitment.Governor",
      value: Governor.encode(message).finish()
    };
  }
};
function createBaseAirdropClaimed(): AirdropClaimed {
  return {
    address: "",
    claimed: false
  };
}
export const AirdropClaimed = {
  typeUrl: "/elys.commitment.AirdropClaimed",
  encode(message: AirdropClaimed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.claimed === true) {
      writer.uint32(16).bool(message.claimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AirdropClaimed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAirdropClaimed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.claimed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AirdropClaimed>): AirdropClaimed {
    const message = createBaseAirdropClaimed();
    message.address = object.address ?? "";
    message.claimed = object.claimed ?? false;
    return message;
  },
  fromAmino(object: AirdropClaimedAmino): AirdropClaimed {
    const message = createBaseAirdropClaimed();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    return message;
  },
  toAmino(message: AirdropClaimed): AirdropClaimedAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.claimed = message.claimed === false ? undefined : message.claimed;
    return obj;
  },
  fromAminoMsg(object: AirdropClaimedAminoMsg): AirdropClaimed {
    return AirdropClaimed.fromAmino(object.value);
  },
  fromProtoMsg(message: AirdropClaimedProtoMsg): AirdropClaimed {
    return AirdropClaimed.decode(message.value);
  },
  toProto(message: AirdropClaimed): Uint8Array {
    return AirdropClaimed.encode(message).finish();
  },
  toProtoMsg(message: AirdropClaimed): AirdropClaimedProtoMsg {
    return {
      typeUrl: "/elys.commitment.AirdropClaimed",
      value: AirdropClaimed.encode(message).finish()
    };
  }
};
function createBaseTotalClaimed(): TotalClaimed {
  return {
    totalElysClaimed: "",
    totalEdenClaimed: ""
  };
}
export const TotalClaimed = {
  typeUrl: "/elys.commitment.TotalClaimed",
  encode(message: TotalClaimed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalElysClaimed !== "") {
      writer.uint32(10).string(message.totalElysClaimed);
    }
    if (message.totalEdenClaimed !== "") {
      writer.uint32(18).string(message.totalEdenClaimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalClaimed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalClaimed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalElysClaimed = reader.string();
          break;
        case 2:
          message.totalEdenClaimed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TotalClaimed>): TotalClaimed {
    const message = createBaseTotalClaimed();
    message.totalElysClaimed = object.totalElysClaimed ?? "";
    message.totalEdenClaimed = object.totalEdenClaimed ?? "";
    return message;
  },
  fromAmino(object: TotalClaimedAmino): TotalClaimed {
    const message = createBaseTotalClaimed();
    if (object.total_elys_claimed !== undefined && object.total_elys_claimed !== null) {
      message.totalElysClaimed = object.total_elys_claimed;
    }
    if (object.total_eden_claimed !== undefined && object.total_eden_claimed !== null) {
      message.totalEdenClaimed = object.total_eden_claimed;
    }
    return message;
  },
  toAmino(message: TotalClaimed): TotalClaimedAmino {
    const obj: any = {};
    obj.total_elys_claimed = message.totalElysClaimed === "" ? undefined : message.totalElysClaimed;
    obj.total_eden_claimed = message.totalEdenClaimed === "" ? undefined : message.totalEdenClaimed;
    return obj;
  },
  fromAminoMsg(object: TotalClaimedAminoMsg): TotalClaimed {
    return TotalClaimed.fromAmino(object.value);
  },
  fromProtoMsg(message: TotalClaimedProtoMsg): TotalClaimed {
    return TotalClaimed.decode(message.value);
  },
  toProto(message: TotalClaimed): Uint8Array {
    return TotalClaimed.encode(message).finish();
  },
  toProtoMsg(message: TotalClaimed): TotalClaimedProtoMsg {
    return {
      typeUrl: "/elys.commitment.TotalClaimed",
      value: TotalClaimed.encode(message).finish()
    };
  }
};
function createBaseKolList(): KolList {
  return {
    address: "",
    amount: "",
    claimed: false,
    refunded: false
  };
}
export const KolList = {
  typeUrl: "/elys.commitment.KolList",
  encode(message: KolList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.claimed === true) {
      writer.uint32(24).bool(message.claimed);
    }
    if (message.refunded === true) {
      writer.uint32(32).bool(message.refunded);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): KolList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKolList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.claimed = reader.bool();
          break;
        case 4:
          message.refunded = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<KolList>): KolList {
    const message = createBaseKolList();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    message.claimed = object.claimed ?? false;
    message.refunded = object.refunded ?? false;
    return message;
  },
  fromAmino(object: KolListAmino): KolList {
    const message = createBaseKolList();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    if (object.refunded !== undefined && object.refunded !== null) {
      message.refunded = object.refunded;
    }
    return message;
  },
  toAmino(message: KolList): KolListAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.claimed = message.claimed === false ? undefined : message.claimed;
    obj.refunded = message.refunded === false ? undefined : message.refunded;
    return obj;
  },
  fromAminoMsg(object: KolListAminoMsg): KolList {
    return KolList.fromAmino(object.value);
  },
  fromProtoMsg(message: KolListProtoMsg): KolList {
    return KolList.decode(message.value);
  },
  toProto(message: KolList): Uint8Array {
    return KolList.encode(message).finish();
  },
  toProtoMsg(message: KolList): KolListProtoMsg {
    return {
      typeUrl: "/elys.commitment.KolList",
      value: KolList.encode(message).finish()
    };
  }
};