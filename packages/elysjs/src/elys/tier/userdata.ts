//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export enum MembershipTierType {
  BASIC = 0,
  BRONZE = 1,
  SILVER = 2,
  GOLD = 3,
  PLATINUM = 4,
  UNRECOGNIZED = -1,
}
export const MembershipTierTypeSDKType = MembershipTierType;
export const MembershipTierTypeAmino = MembershipTierType;
export function membershipTierTypeFromJSON(object: any): MembershipTierType {
  switch (object) {
    case 0:
    case "BASIC":
      return MembershipTierType.BASIC;
    case 1:
    case "BRONZE":
      return MembershipTierType.BRONZE;
    case 2:
    case "SILVER":
      return MembershipTierType.SILVER;
    case 3:
    case "GOLD":
      return MembershipTierType.GOLD;
    case 4:
    case "PLATINUM":
      return MembershipTierType.PLATINUM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MembershipTierType.UNRECOGNIZED;
  }
}
export function membershipTierTypeToJSON(object: MembershipTierType): string {
  switch (object) {
    case MembershipTierType.BASIC:
      return "BASIC";
    case MembershipTierType.BRONZE:
      return "BRONZE";
    case MembershipTierType.SILVER:
      return "SILVER";
    case MembershipTierType.GOLD:
      return "GOLD";
    case MembershipTierType.PLATINUM:
      return "PLATINUM";
    case MembershipTierType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface UserData {
  user: string;
  pools: Pool[];
}
export interface UserDataProtoMsg {
  typeUrl: "/elys.tier.UserData";
  value: Uint8Array;
}
export interface UserDataAmino {
  user?: string;
  pools?: PoolAmino[];
}
export interface UserDataAminoMsg {
  type: "/elys.tier.UserData";
  value: UserDataAmino;
}
export interface UserDataSDKType {
  user: string;
  pools: PoolSDKType[];
}
export interface Pool {
  poolId: string;
  pool: string;
  fiatValue: string;
  amount: string;
}
export interface PoolProtoMsg {
  typeUrl: "/elys.tier.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  pool_id?: string;
  pool?: string;
  fiat_value?: string;
  amount?: string;
}
export interface PoolAminoMsg {
  type: "/elys.tier.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  pool_id: string;
  pool: string;
  fiat_value: string;
  amount: string;
}
export interface MembershipTier {
  minimumPortfolio: string;
  membership: MembershipTierType;
  discount: string;
}
export interface MembershipTierProtoMsg {
  typeUrl: "/elys.tier.MembershipTier";
  value: Uint8Array;
}
export interface MembershipTierAmino {
  minimum_portfolio?: string;
  membership?: MembershipTierType;
  discount?: string;
}
export interface MembershipTierAminoMsg {
  type: "/elys.tier.MembershipTier";
  value: MembershipTierAmino;
}
export interface MembershipTierSDKType {
  minimum_portfolio: string;
  membership: MembershipTierType;
  discount: string;
}
function createBaseUserData(): UserData {
  return {
    user: "",
    pools: []
  };
}
export const UserData = {
  typeUrl: "/elys.tier.UserData",
  encode(message: UserData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UserData>): UserData {
    const message = createBaseUserData();
    message.user = object.user ?? "";
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UserDataAmino): UserData {
    const message = createBaseUserData();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    message.pools = object.pools?.map(e => Pool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UserData): UserDataAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    return obj;
  },
  fromAminoMsg(object: UserDataAminoMsg): UserData {
    return UserData.fromAmino(object.value);
  },
  fromProtoMsg(message: UserDataProtoMsg): UserData {
    return UserData.decode(message.value);
  },
  toProto(message: UserData): Uint8Array {
    return UserData.encode(message).finish();
  },
  toProtoMsg(message: UserData): UserDataProtoMsg {
    return {
      typeUrl: "/elys.tier.UserData",
      value: UserData.encode(message).finish()
    };
  }
};
function createBasePool(): Pool {
  return {
    poolId: "",
    pool: "",
    fiatValue: "",
    amount: ""
  };
}
export const Pool = {
  typeUrl: "/elys.tier.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.pool !== "") {
      writer.uint32(18).string(message.pool);
    }
    if (message.fiatValue !== "") {
      writer.uint32(26).string(message.fiatValue);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.pool = reader.string();
          break;
        case 3:
          message.fiatValue = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.poolId = object.poolId ?? "";
    message.pool = object.pool ?? "";
    message.fiatValue = object.fiatValue ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = object.pool;
    }
    if (object.fiat_value !== undefined && object.fiat_value !== null) {
      message.fiatValue = object.fiat_value;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId === "" ? undefined : message.poolId;
    obj.pool = message.pool === "" ? undefined : message.pool;
    obj.fiat_value = message.fiatValue === "" ? undefined : message.fiatValue;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/elys.tier.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
function createBaseMembershipTier(): MembershipTier {
  return {
    minimumPortfolio: "",
    membership: 0,
    discount: ""
  };
}
export const MembershipTier = {
  typeUrl: "/elys.tier.MembershipTier",
  encode(message: MembershipTier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minimumPortfolio !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.minimumPortfolio, 18).atomics);
    }
    if (message.membership !== 0) {
      writer.uint32(16).int32(message.membership);
    }
    if (message.discount !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.discount, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MembershipTier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMembershipTier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimumPortfolio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.membership = reader.int32() as any;
          break;
        case 3:
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MembershipTier>): MembershipTier {
    const message = createBaseMembershipTier();
    message.minimumPortfolio = object.minimumPortfolio ?? "";
    message.membership = object.membership ?? 0;
    message.discount = object.discount ?? "";
    return message;
  },
  fromAmino(object: MembershipTierAmino): MembershipTier {
    const message = createBaseMembershipTier();
    if (object.minimum_portfolio !== undefined && object.minimum_portfolio !== null) {
      message.minimumPortfolio = object.minimum_portfolio;
    }
    if (object.membership !== undefined && object.membership !== null) {
      message.membership = object.membership;
    }
    if (object.discount !== undefined && object.discount !== null) {
      message.discount = object.discount;
    }
    return message;
  },
  toAmino(message: MembershipTier): MembershipTierAmino {
    const obj: any = {};
    obj.minimum_portfolio = message.minimumPortfolio === "" ? undefined : message.minimumPortfolio;
    obj.membership = message.membership === 0 ? undefined : message.membership;
    obj.discount = message.discount === "" ? undefined : message.discount;
    return obj;
  },
  fromAminoMsg(object: MembershipTierAminoMsg): MembershipTier {
    return MembershipTier.fromAmino(object.value);
  },
  fromProtoMsg(message: MembershipTierProtoMsg): MembershipTier {
    return MembershipTier.decode(message.value);
  },
  toProto(message: MembershipTier): Uint8Array {
    return MembershipTier.encode(message).finish();
  },
  toProtoMsg(message: MembershipTier): MembershipTierProtoMsg {
    return {
      typeUrl: "/elys.tier.MembershipTier",
      value: MembershipTier.encode(message).finish()
    };
  }
};