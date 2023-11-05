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
export interface OraclePoolSlippageTrack {
  poolId: bigint;
  timestamp: bigint;
  tracked: Coin[];
}
export interface OraclePoolSlippageTrackProtoMsg {
  typeUrl: "/elys.amm.OraclePoolSlippageTrack";
  value: Uint8Array;
}
export interface OraclePoolSlippageTrackAmino {
  poolId: string;
  timestamp: string;
  tracked: CoinAmino[];
}
export interface OraclePoolSlippageTrackAminoMsg {
  type: "/elys.amm.OraclePoolSlippageTrack";
  value: OraclePoolSlippageTrackAmino;
}
export interface OraclePoolSlippageTrackSDKType {
  poolId: bigint;
  timestamp: bigint;
  tracked: CoinSDKType[];
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
function createBaseOraclePoolSlippageTrack(): OraclePoolSlippageTrack {
  return {
    poolId: BigInt(0),
    timestamp: BigInt(0),
    tracked: []
  };
}
export const OraclePoolSlippageTrack = {
  typeUrl: "/elys.amm.OraclePoolSlippageTrack",
  encode(message: OraclePoolSlippageTrack, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    for (const v of message.tracked) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OraclePoolSlippageTrack {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePoolSlippageTrack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        case 3:
          message.tracked.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OraclePoolSlippageTrack>): OraclePoolSlippageTrack {
    const message = createBaseOraclePoolSlippageTrack();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.tracked = object.tracked?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OraclePoolSlippageTrackAmino): OraclePoolSlippageTrack {
    return {
      poolId: BigInt(object.poolId),
      timestamp: BigInt(object.timestamp),
      tracked: Array.isArray(object?.tracked) ? object.tracked.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: OraclePoolSlippageTrack): OraclePoolSlippageTrackAmino {
    const obj: any = {};
    obj.poolId = message.poolId ? message.poolId.toString() : undefined;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    if (message.tracked) {
      obj.tracked = message.tracked.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tracked = [];
    }
    return obj;
  },
  fromAminoMsg(object: OraclePoolSlippageTrackAminoMsg): OraclePoolSlippageTrack {
    return OraclePoolSlippageTrack.fromAmino(object.value);
  },
  fromProtoMsg(message: OraclePoolSlippageTrackProtoMsg): OraclePoolSlippageTrack {
    return OraclePoolSlippageTrack.decode(message.value);
  },
  toProto(message: OraclePoolSlippageTrack): Uint8Array {
    return OraclePoolSlippageTrack.encode(message).finish();
  },
  toProtoMsg(message: OraclePoolSlippageTrack): OraclePoolSlippageTrackProtoMsg {
    return {
      typeUrl: "/elys.amm.OraclePoolSlippageTrack",
      value: OraclePoolSlippageTrack.encode(message).finish()
    };
  }
};