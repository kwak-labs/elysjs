import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** FeePool is the global fee pool for distribution. */
export interface FeePool {
  communityPool: DecCoin[];
}
export interface FeePoolProtoMsg {
  typeUrl: "/elys.incentive.FeePool";
  value: Uint8Array;
}
/** FeePool is the global fee pool for distribution. */
export interface FeePoolAmino {
  community_pool: DecCoinAmino[];
}
export interface FeePoolAminoMsg {
  type: "/elys.incentive.FeePool";
  value: FeePoolAmino;
}
/** FeePool is the global fee pool for distribution. */
export interface FeePoolSDKType {
  community_pool: DecCoinSDKType[];
}
function createBaseFeePool(): FeePool {
  return {
    communityPool: []
  };
}
export const FeePool = {
  typeUrl: "/elys.incentive.FeePool",
  encode(message: FeePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.communityPool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityPool.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FeePool>): FeePool {
    const message = createBaseFeePool();
    message.communityPool = object.communityPool?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FeePoolAmino): FeePool {
    return {
      communityPool: Array.isArray(object?.community_pool) ? object.community_pool.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: FeePool): FeePoolAmino {
    const obj: any = {};
    if (message.communityPool) {
      obj.community_pool = message.communityPool.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.community_pool = [];
    }
    return obj;
  },
  fromAminoMsg(object: FeePoolAminoMsg): FeePool {
    return FeePool.fromAmino(object.value);
  },
  fromProtoMsg(message: FeePoolProtoMsg): FeePool {
    return FeePool.decode(message.value);
  },
  toProto(message: FeePool): Uint8Array {
    return FeePool.encode(message).finish();
  },
  toProtoMsg(message: FeePool): FeePoolProtoMsg {
    return {
      typeUrl: "/elys.incentive.FeePool",
      value: FeePool.encode(message).finish()
    };
  }
};