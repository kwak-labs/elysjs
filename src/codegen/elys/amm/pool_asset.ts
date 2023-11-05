import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface PoolAsset {
  token: Coin;
  weight: string;
}
export interface PoolAssetProtoMsg {
  typeUrl: "/elys.amm.PoolAsset";
  value: Uint8Array;
}
export interface PoolAssetAmino {
  token?: CoinAmino;
  weight: string;
}
export interface PoolAssetAminoMsg {
  type: "/elys.amm.PoolAsset";
  value: PoolAssetAmino;
}
export interface PoolAssetSDKType {
  token: CoinSDKType;
  weight: string;
}
function createBasePoolAsset(): PoolAsset {
  return {
    token: Coin.fromPartial({}),
    weight: ""
  };
}
export const PoolAsset = {
  typeUrl: "/elys.amm.PoolAsset",
  encode(message: PoolAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
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
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.weight = reader.string();
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
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: PoolAssetAmino): PoolAsset {
    return {
      token: object?.token ? Coin.fromAmino(object.token) : undefined,
      weight: object.weight
    };
  },
  toAmino(message: PoolAsset): PoolAssetAmino {
    const obj: any = {};
    obj.token = message.token ? Coin.toAmino(message.token) : undefined;
    obj.weight = message.weight;
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
      typeUrl: "/elys.amm.PoolAsset",
      value: PoolAsset.encode(message).finish()
    };
  }
};