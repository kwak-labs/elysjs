import { PoolParams, PoolParamsAmino, PoolParamsSDKType } from "./pool_params";
import { PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "./pool_asset";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface ProposalCreateBalancerPool {
  title: string;
  description: string;
  poolParams?: PoolParams;
  poolAssets: PoolAsset[];
}
export interface ProposalCreateBalancerPoolProtoMsg {
  typeUrl: "/elys.amm.ProposalCreateBalancerPool";
  value: Uint8Array;
}
export interface ProposalCreateBalancerPoolAmino {
  title: string;
  description: string;
  poolParams?: PoolParamsAmino;
  poolAssets: PoolAssetAmino[];
}
export interface ProposalCreateBalancerPoolAminoMsg {
  type: "/elys.amm.ProposalCreateBalancerPool";
  value: ProposalCreateBalancerPoolAmino;
}
export interface ProposalCreateBalancerPoolSDKType {
  title: string;
  description: string;
  poolParams?: PoolParamsSDKType;
  poolAssets: PoolAssetSDKType[];
}
export interface ProposalUpdatePoolParams {
  title: string;
  description: string;
  poolId: bigint;
  poolParams: PoolParams;
}
export interface ProposalUpdatePoolParamsProtoMsg {
  typeUrl: "/elys.amm.ProposalUpdatePoolParams";
  value: Uint8Array;
}
export interface ProposalUpdatePoolParamsAmino {
  title: string;
  description: string;
  poolId: string;
  poolParams?: PoolParamsAmino;
}
export interface ProposalUpdatePoolParamsAminoMsg {
  type: "/elys.amm.ProposalUpdatePoolParams";
  value: ProposalUpdatePoolParamsAmino;
}
export interface ProposalUpdatePoolParamsSDKType {
  title: string;
  description: string;
  poolId: bigint;
  poolParams: PoolParamsSDKType;
}
function createBaseProposalCreateBalancerPool(): ProposalCreateBalancerPool {
  return {
    title: "",
    description: "",
    poolParams: undefined,
    poolAssets: []
  };
}
export const ProposalCreateBalancerPool = {
  typeUrl: "/elys.amm.ProposalCreateBalancerPool",
  encode(message: ProposalCreateBalancerPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalCreateBalancerPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalCreateBalancerPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProposalCreateBalancerPool>): ProposalCreateBalancerPool {
    const message = createBaseProposalCreateBalancerPool();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.poolAssets = object.poolAssets?.map(e => PoolAsset.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ProposalCreateBalancerPoolAmino): ProposalCreateBalancerPool {
    return {
      title: object.title,
      description: object.description,
      poolParams: object?.poolParams ? PoolParams.fromAmino(object.poolParams) : undefined,
      poolAssets: Array.isArray(object?.poolAssets) ? object.poolAssets.map((e: any) => PoolAsset.fromAmino(e)) : []
    };
  },
  toAmino(message: ProposalCreateBalancerPool): ProposalCreateBalancerPoolAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.poolParams = message.poolParams ? PoolParams.toAmino(message.poolParams) : undefined;
    if (message.poolAssets) {
      obj.poolAssets = message.poolAssets.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.poolAssets = [];
    }
    return obj;
  },
  fromAminoMsg(object: ProposalCreateBalancerPoolAminoMsg): ProposalCreateBalancerPool {
    return ProposalCreateBalancerPool.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalCreateBalancerPoolProtoMsg): ProposalCreateBalancerPool {
    return ProposalCreateBalancerPool.decode(message.value);
  },
  toProto(message: ProposalCreateBalancerPool): Uint8Array {
    return ProposalCreateBalancerPool.encode(message).finish();
  },
  toProtoMsg(message: ProposalCreateBalancerPool): ProposalCreateBalancerPoolProtoMsg {
    return {
      typeUrl: "/elys.amm.ProposalCreateBalancerPool",
      value: ProposalCreateBalancerPool.encode(message).finish()
    };
  }
};
function createBaseProposalUpdatePoolParams(): ProposalUpdatePoolParams {
  return {
    title: "",
    description: "",
    poolId: BigInt(0),
    poolParams: PoolParams.fromPartial({})
  };
}
export const ProposalUpdatePoolParams = {
  typeUrl: "/elys.amm.ProposalUpdatePoolParams",
  encode(message: ProposalUpdatePoolParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalUpdatePoolParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalUpdatePoolParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProposalUpdatePoolParams>): ProposalUpdatePoolParams {
    const message = createBaseProposalUpdatePoolParams();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    return message;
  },
  fromAmino(object: ProposalUpdatePoolParamsAmino): ProposalUpdatePoolParams {
    return {
      title: object.title,
      description: object.description,
      poolId: BigInt(object.poolId),
      poolParams: object?.poolParams ? PoolParams.fromAmino(object.poolParams) : undefined
    };
  },
  toAmino(message: ProposalUpdatePoolParams): ProposalUpdatePoolParamsAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.poolId = message.poolId ? message.poolId.toString() : undefined;
    obj.poolParams = message.poolParams ? PoolParams.toAmino(message.poolParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProposalUpdatePoolParamsAminoMsg): ProposalUpdatePoolParams {
    return ProposalUpdatePoolParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalUpdatePoolParamsProtoMsg): ProposalUpdatePoolParams {
    return ProposalUpdatePoolParams.decode(message.value);
  },
  toProto(message: ProposalUpdatePoolParams): Uint8Array {
    return ProposalUpdatePoolParams.encode(message).finish();
  },
  toProtoMsg(message: ProposalUpdatePoolParams): ProposalUpdatePoolParamsProtoMsg {
    return {
      typeUrl: "/elys.amm.ProposalUpdatePoolParams",
      value: ProposalUpdatePoolParams.encode(message).finish()
    };
  }
};