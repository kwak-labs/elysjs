import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "../amm/pool_asset";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface AccountedPool {
  poolId: bigint;
  totalShares: Coin;
  poolAssets: PoolAsset[];
  totalWeight: string;
}
export interface AccountedPoolProtoMsg {
  typeUrl: "/elys.accountedpool.AccountedPool";
  value: Uint8Array;
}
export interface AccountedPoolAmino {
  poolId: string;
  totalShares?: CoinAmino;
  poolAssets: PoolAssetAmino[];
  totalWeight: string;
}
export interface AccountedPoolAminoMsg {
  type: "/elys.accountedpool.AccountedPool";
  value: AccountedPoolAmino;
}
export interface AccountedPoolSDKType {
  poolId: bigint;
  totalShares: CoinSDKType;
  poolAssets: PoolAssetSDKType[];
  totalWeight: string;
}
function createBaseAccountedPool(): AccountedPool {
  return {
    poolId: BigInt(0),
    totalShares: Coin.fromPartial({}),
    poolAssets: [],
    totalWeight: ""
  };
}
export const AccountedPool = {
  typeUrl: "/elys.accountedpool.AccountedPool",
  encode(message: AccountedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalWeight = reader.string();
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
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? Coin.fromPartial(object.totalShares) : undefined;
    message.poolAssets = object.poolAssets?.map(e => PoolAsset.fromPartial(e)) || [];
    message.totalWeight = object.totalWeight ?? "";
    return message;
  },
  fromAmino(object: AccountedPoolAmino): AccountedPool {
    return {
      poolId: BigInt(object.poolId),
      totalShares: object?.totalShares ? Coin.fromAmino(object.totalShares) : undefined,
      poolAssets: Array.isArray(object?.poolAssets) ? object.poolAssets.map((e: any) => PoolAsset.fromAmino(e)) : [],
      totalWeight: object.totalWeight
    };
  },
  toAmino(message: AccountedPool): AccountedPoolAmino {
    const obj: any = {};
    obj.poolId = message.poolId ? message.poolId.toString() : undefined;
    obj.totalShares = message.totalShares ? Coin.toAmino(message.totalShares) : undefined;
    if (message.poolAssets) {
      obj.poolAssets = message.poolAssets.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.poolAssets = [];
    }
    obj.totalWeight = message.totalWeight;
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