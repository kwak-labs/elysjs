//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface AmmPool {
  id: bigint;
  totalLiabilities: Coin[];
}
export interface AmmPoolProtoMsg {
  typeUrl: "/elys.stablestake.AmmPool";
  value: Uint8Array;
}
export interface AmmPoolAmino {
  id?: string;
  total_liabilities?: CoinAmino[];
}
export interface AmmPoolAminoMsg {
  type: "/elys.stablestake.AmmPool";
  value: AmmPoolAmino;
}
export interface AmmPoolSDKType {
  id: bigint;
  total_liabilities: CoinSDKType[];
}
function createBaseAmmPool(): AmmPool {
  return {
    id: BigInt(0),
    totalLiabilities: []
  };
}
export const AmmPool = {
  typeUrl: "/elys.stablestake.AmmPool",
  encode(message: AmmPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.totalLiabilities) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AmmPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAmmPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.totalLiabilities.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AmmPool>): AmmPool {
    const message = createBaseAmmPool();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.totalLiabilities = object.totalLiabilities?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AmmPoolAmino): AmmPool {
    const message = createBaseAmmPool();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    message.totalLiabilities = object.total_liabilities?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AmmPool): AmmPoolAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    if (message.totalLiabilities) {
      obj.total_liabilities = message.totalLiabilities.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_liabilities = message.totalLiabilities;
    }
    return obj;
  },
  fromAminoMsg(object: AmmPoolAminoMsg): AmmPool {
    return AmmPool.fromAmino(object.value);
  },
  fromProtoMsg(message: AmmPoolProtoMsg): AmmPool {
    return AmmPool.decode(message.value);
  },
  toProto(message: AmmPool): Uint8Array {
    return AmmPool.encode(message).finish();
  },
  toProtoMsg(message: AmmPool): AmmPoolProtoMsg {
    return {
      typeUrl: "/elys.stablestake.AmmPool",
      value: AmmPool.encode(message).finish()
    };
  }
};