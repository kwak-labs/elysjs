import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface PoolAsset {
  liabilities: string;
  custody: string;
  takeProfitLiabilities: string;
  takeProfitCustody: string;
  assetBalance: string;
  blockBorrowInterest: string;
  assetDenom: string;
}
export interface PoolAssetProtoMsg {
  typeUrl: "/elys.margin.PoolAsset";
  value: Uint8Array;
}
export interface PoolAssetAmino {
  liabilities: string;
  custody: string;
  take_profit_liabilities: string;
  take_profit_custody: string;
  asset_balance: string;
  block_borrow_interest: string;
  asset_denom: string;
}
export interface PoolAssetAminoMsg {
  type: "/elys.margin.PoolAsset";
  value: PoolAssetAmino;
}
export interface PoolAssetSDKType {
  liabilities: string;
  custody: string;
  take_profit_liabilities: string;
  take_profit_custody: string;
  asset_balance: string;
  block_borrow_interest: string;
  asset_denom: string;
}
export interface Pool {
  ammPoolId: bigint;
  health: string;
  enabled: boolean;
  closed: boolean;
  borrowInterestRate: string;
  poolAssetsLong: PoolAsset[];
  poolAssetsShort: PoolAsset[];
  lastHeightBorrowInterestRateComputed: bigint;
}
export interface PoolProtoMsg {
  typeUrl: "/elys.margin.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  amm_pool_id: string;
  health: string;
  enabled: boolean;
  closed: boolean;
  borrow_interest_rate: string;
  pool_assets_long: PoolAssetAmino[];
  pool_assets_short: PoolAssetAmino[];
  last_height_borrow_interest_rate_computed: string;
}
export interface PoolAminoMsg {
  type: "/elys.margin.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  amm_pool_id: bigint;
  health: string;
  enabled: boolean;
  closed: boolean;
  borrow_interest_rate: string;
  pool_assets_long: PoolAssetSDKType[];
  pool_assets_short: PoolAssetSDKType[];
  last_height_borrow_interest_rate_computed: bigint;
}
function createBasePoolAsset(): PoolAsset {
  return {
    liabilities: "",
    custody: "",
    takeProfitLiabilities: "",
    takeProfitCustody: "",
    assetBalance: "",
    blockBorrowInterest: "",
    assetDenom: ""
  };
}
export const PoolAsset = {
  typeUrl: "/elys.margin.PoolAsset",
  encode(message: PoolAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liabilities !== "") {
      writer.uint32(10).string(message.liabilities);
    }
    if (message.custody !== "") {
      writer.uint32(18).string(message.custody);
    }
    if (message.takeProfitLiabilities !== "") {
      writer.uint32(26).string(message.takeProfitLiabilities);
    }
    if (message.takeProfitCustody !== "") {
      writer.uint32(34).string(message.takeProfitCustody);
    }
    if (message.assetBalance !== "") {
      writer.uint32(42).string(message.assetBalance);
    }
    if (message.blockBorrowInterest !== "") {
      writer.uint32(50).string(message.blockBorrowInterest);
    }
    if (message.assetDenom !== "") {
      writer.uint32(58).string(message.assetDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liabilities = reader.string();
          break;
        case 2:
          message.custody = reader.string();
          break;
        case 3:
          message.takeProfitLiabilities = reader.string();
          break;
        case 4:
          message.takeProfitCustody = reader.string();
          break;
        case 5:
          message.assetBalance = reader.string();
          break;
        case 6:
          message.blockBorrowInterest = reader.string();
          break;
        case 7:
          message.assetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PoolAsset>): PoolAsset {
    const message = createBasePoolAsset();
    message.liabilities = object.liabilities ?? "";
    message.custody = object.custody ?? "";
    message.takeProfitLiabilities = object.takeProfitLiabilities ?? "";
    message.takeProfitCustody = object.takeProfitCustody ?? "";
    message.assetBalance = object.assetBalance ?? "";
    message.blockBorrowInterest = object.blockBorrowInterest ?? "";
    message.assetDenom = object.assetDenom ?? "";
    return message;
  },
  fromAmino(object: PoolAssetAmino): PoolAsset {
    return {
      liabilities: object.liabilities,
      custody: object.custody,
      takeProfitLiabilities: object.take_profit_liabilities,
      takeProfitCustody: object.take_profit_custody,
      assetBalance: object.asset_balance,
      blockBorrowInterest: object.block_borrow_interest,
      assetDenom: object.asset_denom
    };
  },
  toAmino(message: PoolAsset): PoolAssetAmino {
    const obj: any = {};
    obj.liabilities = message.liabilities;
    obj.custody = message.custody;
    obj.take_profit_liabilities = message.takeProfitLiabilities;
    obj.take_profit_custody = message.takeProfitCustody;
    obj.asset_balance = message.assetBalance;
    obj.block_borrow_interest = message.blockBorrowInterest;
    obj.asset_denom = message.assetDenom;
    return obj;
  },
  fromAminoMsg(object: PoolAssetAminoMsg): PoolAsset {
    return PoolAsset.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolAssetProtoMsg): PoolAsset {
    return PoolAsset.decode(message.value);
  },
  toProto(message: PoolAsset): Uint8Array {
    return PoolAsset.encode(message).finish();
  },
  toProtoMsg(message: PoolAsset): PoolAssetProtoMsg {
    return {
      typeUrl: "/elys.margin.PoolAsset",
      value: PoolAsset.encode(message).finish()
    };
  }
};
function createBasePool(): Pool {
  return {
    ammPoolId: BigInt(0),
    health: "",
    enabled: false,
    closed: false,
    borrowInterestRate: "",
    poolAssetsLong: [],
    poolAssetsShort: [],
    lastHeightBorrowInterestRateComputed: BigInt(0)
  };
}
export const Pool = {
  typeUrl: "/elys.margin.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.ammPoolId);
    }
    if (message.health !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.health, 18).atomics);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    if (message.closed === true) {
      writer.uint32(32).bool(message.closed);
    }
    if (message.borrowInterestRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.borrowInterestRate, 18).atomics);
    }
    for (const v of message.poolAssetsLong) {
      PoolAsset.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.poolAssetsShort) {
      PoolAsset.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.lastHeightBorrowInterestRateComputed !== BigInt(0)) {
      writer.uint32(64).int64(message.lastHeightBorrowInterestRateComputed);
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
          message.ammPoolId = reader.uint64();
          break;
        case 2:
          message.health = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        case 4:
          message.closed = reader.bool();
          break;
        case 5:
          message.borrowInterestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.poolAssetsLong.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 7:
          message.poolAssetsShort.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 8:
          message.lastHeightBorrowInterestRateComputed = reader.int64();
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
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.health = object.health ?? "";
    message.enabled = object.enabled ?? false;
    message.closed = object.closed ?? false;
    message.borrowInterestRate = object.borrowInterestRate ?? "";
    message.poolAssetsLong = object.poolAssetsLong?.map(e => PoolAsset.fromPartial(e)) || [];
    message.poolAssetsShort = object.poolAssetsShort?.map(e => PoolAsset.fromPartial(e)) || [];
    message.lastHeightBorrowInterestRateComputed = object.lastHeightBorrowInterestRateComputed !== undefined && object.lastHeightBorrowInterestRateComputed !== null ? BigInt(object.lastHeightBorrowInterestRateComputed.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    return {
      ammPoolId: BigInt(object.amm_pool_id),
      health: object.health,
      enabled: object.enabled,
      closed: object.closed,
      borrowInterestRate: object.borrow_interest_rate,
      poolAssetsLong: Array.isArray(object?.pool_assets_long) ? object.pool_assets_long.map((e: any) => PoolAsset.fromAmino(e)) : [],
      poolAssetsShort: Array.isArray(object?.pool_assets_short) ? object.pool_assets_short.map((e: any) => PoolAsset.fromAmino(e)) : [],
      lastHeightBorrowInterestRateComputed: BigInt(object.last_height_borrow_interest_rate_computed)
    };
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.amm_pool_id = message.ammPoolId ? message.ammPoolId.toString() : undefined;
    obj.health = message.health;
    obj.enabled = message.enabled;
    obj.closed = message.closed;
    obj.borrow_interest_rate = message.borrowInterestRate;
    if (message.poolAssetsLong) {
      obj.pool_assets_long = message.poolAssetsLong.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.pool_assets_long = [];
    }
    if (message.poolAssetsShort) {
      obj.pool_assets_short = message.poolAssetsShort.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.pool_assets_short = [];
    }
    obj.last_height_borrow_interest_rate_computed = message.lastHeightBorrowInterestRateComputed ? message.lastHeightBorrowInterestRateComputed.toString() : undefined;
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
      typeUrl: "/elys.margin.Pool",
      value: Pool.encode(message).finish()
    };
  }
};