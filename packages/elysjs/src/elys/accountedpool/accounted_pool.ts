//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "../amm/pool_asset";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface LegacyAccountedPool {
  poolId: bigint;
  totalShares: Coin;
  poolAssets: PoolAsset[];
  totalWeight: string;
  nonAmmPoolTokens: Coin[];
}
export interface LegacyAccountedPoolProtoMsg {
  typeUrl: "/elys.accountedpool.LegacyAccountedPool";
  value: Uint8Array;
}
export interface LegacyAccountedPoolAmino {
  pool_id?: string;
  total_shares?: CoinAmino;
  pool_assets?: PoolAssetAmino[];
  total_weight?: string;
  non_amm_pool_tokens?: CoinAmino[];
}
export interface LegacyAccountedPoolAminoMsg {
  type: "/elys.accountedpool.LegacyAccountedPool";
  value: LegacyAccountedPoolAmino;
}
export interface LegacyAccountedPoolSDKType {
  pool_id: bigint;
  total_shares: CoinSDKType;
  pool_assets: PoolAssetSDKType[];
  total_weight: string;
  non_amm_pool_tokens: CoinSDKType[];
}
export interface AccountedPool {
  poolId: bigint;
  totalTokens: Coin[];
  nonAmmPoolTokens: Coin[];
}
export interface AccountedPoolProtoMsg {
  typeUrl: "/elys.accountedpool.AccountedPool";
  value: Uint8Array;
}
export interface AccountedPoolAmino {
  pool_id?: string;
  total_tokens?: CoinAmino[];
  non_amm_pool_tokens?: CoinAmino[];
}
export interface AccountedPoolAminoMsg {
  type: "/elys.accountedpool.AccountedPool";
  value: AccountedPoolAmino;
}
export interface AccountedPoolSDKType {
  pool_id: bigint;
  total_tokens: CoinSDKType[];
  non_amm_pool_tokens: CoinSDKType[];
}
function createBaseLegacyAccountedPool(): LegacyAccountedPool {
  return {
    poolId: BigInt(0),
    totalShares: Coin.fromPartial({}),
    poolAssets: [],
    totalWeight: "",
    nonAmmPoolTokens: []
  };
}
export const LegacyAccountedPool = {
  typeUrl: "/elys.accountedpool.LegacyAccountedPool",
  encode(message: LegacyAccountedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalWeight !== "") {
      writer.uint32(34).string(message.totalWeight);
    }
    for (const v of message.nonAmmPoolTokens) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyAccountedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyAccountedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalWeight = reader.string();
          break;
        case 5:
          message.nonAmmPoolTokens.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LegacyAccountedPool>): LegacyAccountedPool {
    const message = createBaseLegacyAccountedPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? Coin.fromPartial(object.totalShares) : undefined;
    message.poolAssets = object.poolAssets?.map(e => PoolAsset.fromPartial(e)) || [];
    message.totalWeight = object.totalWeight ?? "";
    message.nonAmmPoolTokens = object.nonAmmPoolTokens?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: LegacyAccountedPoolAmino): LegacyAccountedPool {
    const message = createBaseLegacyAccountedPool();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = Coin.fromAmino(object.total_shares);
    }
    message.poolAssets = object.pool_assets?.map(e => PoolAsset.fromAmino(e)) || [];
    if (object.total_weight !== undefined && object.total_weight !== null) {
      message.totalWeight = object.total_weight;
    }
    message.nonAmmPoolTokens = object.non_amm_pool_tokens?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: LegacyAccountedPool): LegacyAccountedPoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.total_shares = message.totalShares ? Coin.toAmino(message.totalShares) : undefined;
    if (message.poolAssets) {
      obj.pool_assets = message.poolAssets.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.pool_assets = message.poolAssets;
    }
    obj.total_weight = message.totalWeight === "" ? undefined : message.totalWeight;
    if (message.nonAmmPoolTokens) {
      obj.non_amm_pool_tokens = message.nonAmmPoolTokens.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.non_amm_pool_tokens = message.nonAmmPoolTokens;
    }
    return obj;
  },
  fromAminoMsg(object: LegacyAccountedPoolAminoMsg): LegacyAccountedPool {
    return LegacyAccountedPool.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyAccountedPoolProtoMsg): LegacyAccountedPool {
    return LegacyAccountedPool.decode(message.value);
  },
  toProto(message: LegacyAccountedPool): Uint8Array {
    return LegacyAccountedPool.encode(message).finish();
  },
  toProtoMsg(message: LegacyAccountedPool): LegacyAccountedPoolProtoMsg {
    return {
      typeUrl: "/elys.accountedpool.LegacyAccountedPool",
      value: LegacyAccountedPool.encode(message).finish()
    };
  }
};
function createBaseAccountedPool(): AccountedPool {
  return {
    poolId: BigInt(0),
    totalTokens: [],
    nonAmmPoolTokens: []
  };
}
export const AccountedPool = {
  typeUrl: "/elys.accountedpool.AccountedPool",
  encode(message: AccountedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.totalTokens) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.nonAmmPoolTokens) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.totalTokens.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nonAmmPoolTokens.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AccountedPool>): AccountedPool {
    const message = createBaseAccountedPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.totalTokens = object.totalTokens?.map(e => Coin.fromPartial(e)) || [];
    message.nonAmmPoolTokens = object.nonAmmPoolTokens?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AccountedPoolAmino): AccountedPool {
    const message = createBaseAccountedPool();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.totalTokens = object.total_tokens?.map(e => Coin.fromAmino(e)) || [];
    message.nonAmmPoolTokens = object.non_amm_pool_tokens?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AccountedPool): AccountedPoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.totalTokens) {
      obj.total_tokens = message.totalTokens.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_tokens = message.totalTokens;
    }
    if (message.nonAmmPoolTokens) {
      obj.non_amm_pool_tokens = message.nonAmmPoolTokens.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.non_amm_pool_tokens = message.nonAmmPoolTokens;
    }
    return obj;
  },
  fromAminoMsg(object: AccountedPoolAminoMsg): AccountedPool {
    return AccountedPool.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountedPoolProtoMsg): AccountedPool {
    return AccountedPool.decode(message.value);
  },
  toProto(message: AccountedPool): Uint8Array {
    return AccountedPool.encode(message).finish();
  },
  toProtoMsg(message: AccountedPool): AccountedPoolProtoMsg {
    return {
      typeUrl: "/elys.accountedpool.AccountedPool",
      value: AccountedPool.encode(message).finish()
    };
  }
};