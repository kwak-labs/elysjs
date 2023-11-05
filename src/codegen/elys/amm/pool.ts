import { PoolParams, PoolParamsAmino, PoolParamsSDKType } from "./pool_params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "./pool_asset";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface Pool {
  poolId: bigint;
  address: string;
  poolParams: PoolParams;
  totalShares: Coin;
  poolAssets: PoolAsset[];
  totalWeight: string;
  rebalanceTreasury: string;
}
export interface PoolProtoMsg {
  typeUrl: "/elys.amm.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  poolId: string;
  address: string;
  poolParams?: PoolParamsAmino;
  totalShares?: CoinAmino;
  poolAssets: PoolAssetAmino[];
  totalWeight: string;
  rebalanceTreasury: string;
}
export interface PoolAminoMsg {
  type: "/elys.amm.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  poolId: bigint;
  address: string;
  poolParams: PoolParamsSDKType;
  totalShares: CoinSDKType;
  poolAssets: PoolAssetSDKType[];
  totalWeight: string;
  rebalanceTreasury: string;
}
function createBasePool(): Pool {
  return {
    poolId: BigInt(0),
    address: "",
    poolParams: PoolParams.fromPartial({}),
    totalShares: Coin.fromPartial({}),
    poolAssets: [],
    totalWeight: "",
    rebalanceTreasury: ""
  };
}
export const Pool = {
  typeUrl: "/elys.amm.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.totalWeight !== "") {
      writer.uint32(50).string(message.totalWeight);
    }
    if (message.rebalanceTreasury !== "") {
      writer.uint32(58).string(message.rebalanceTreasury);
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
          message.poolId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 6:
          message.totalWeight = reader.string();
          break;
        case 7:
          message.rebalanceTreasury = reader.string();
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
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? Coin.fromPartial(object.totalShares) : undefined;
    message.poolAssets = object.poolAssets?.map(e => PoolAsset.fromPartial(e)) || [];
    message.totalWeight = object.totalWeight ?? "";
    message.rebalanceTreasury = object.rebalanceTreasury ?? "";
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    return {
      poolId: BigInt(object.poolId),
      address: object.address,
      poolParams: object?.poolParams ? PoolParams.fromAmino(object.poolParams) : undefined,
      totalShares: object?.totalShares ? Coin.fromAmino(object.totalShares) : undefined,
      poolAssets: Array.isArray(object?.poolAssets) ? object.poolAssets.map((e: any) => PoolAsset.fromAmino(e)) : [],
      totalWeight: object.totalWeight,
      rebalanceTreasury: object.rebalanceTreasury
    };
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.poolId = message.poolId ? message.poolId.toString() : undefined;
    obj.address = message.address;
    obj.poolParams = message.poolParams ? PoolParams.toAmino(message.poolParams) : undefined;
    obj.totalShares = message.totalShares ? Coin.toAmino(message.totalShares) : undefined;
    if (message.poolAssets) {
      obj.poolAssets = message.poolAssets.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.poolAssets = [];
    }
    obj.totalWeight = message.totalWeight;
    obj.rebalanceTreasury = message.rebalanceTreasury;
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
      typeUrl: "/elys.amm.Pool",
      value: Pool.encode(message).finish()
    };
  }
};