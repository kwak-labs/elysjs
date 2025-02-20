//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface Pool {
  ammPoolId: bigint;
  health: string;
  leveragedLpAmount: string;
  leverageMax: string;
  maxLeveragelpRatio: string;
}
export interface PoolProtoMsg {
  typeUrl: "/elys.leveragelp.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  amm_pool_id?: string;
  health?: string;
  leveraged_lp_amount?: string;
  leverage_max?: string;
  max_leveragelp_ratio?: string;
}
export interface PoolAminoMsg {
  type: "/elys.leveragelp.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  amm_pool_id: bigint;
  health: string;
  leveraged_lp_amount: string;
  leverage_max: string;
  max_leveragelp_ratio: string;
}
export interface LegacyPool {
  ammPoolId: bigint;
  health: string;
  leveragedLpAmount: string;
  leverageMax: string;
}
export interface LegacyPoolProtoMsg {
  typeUrl: "/elys.leveragelp.LegacyPool";
  value: Uint8Array;
}
export interface LegacyPoolAmino {
  amm_pool_id?: string;
  health?: string;
  leveraged_lp_amount?: string;
  leverage_max?: string;
}
export interface LegacyPoolAminoMsg {
  type: "/elys.leveragelp.LegacyPool";
  value: LegacyPoolAmino;
}
export interface LegacyPoolSDKType {
  amm_pool_id: bigint;
  health: string;
  leveraged_lp_amount: string;
  leverage_max: string;
}
function createBasePool(): Pool {
  return {
    ammPoolId: BigInt(0),
    health: "",
    leveragedLpAmount: "",
    leverageMax: "",
    maxLeveragelpRatio: ""
  };
}
export const Pool = {
  typeUrl: "/elys.leveragelp.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.ammPoolId);
    }
    if (message.health !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.health, 18).atomics);
    }
    if (message.leveragedLpAmount !== "") {
      writer.uint32(26).string(message.leveragedLpAmount);
    }
    if (message.leverageMax !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.leverageMax, 18).atomics);
    }
    if (message.maxLeveragelpRatio !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.maxLeveragelpRatio, 18).atomics);
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
          message.leveragedLpAmount = reader.string();
          break;
        case 4:
          message.leverageMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.maxLeveragelpRatio = Decimal.fromAtomics(reader.string(), 18).toString();
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
    message.leveragedLpAmount = object.leveragedLpAmount ?? "";
    message.leverageMax = object.leverageMax ?? "";
    message.maxLeveragelpRatio = object.maxLeveragelpRatio ?? "";
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.amm_pool_id !== undefined && object.amm_pool_id !== null) {
      message.ammPoolId = BigInt(object.amm_pool_id);
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = object.health;
    }
    if (object.leveraged_lp_amount !== undefined && object.leveraged_lp_amount !== null) {
      message.leveragedLpAmount = object.leveraged_lp_amount;
    }
    if (object.leverage_max !== undefined && object.leverage_max !== null) {
      message.leverageMax = object.leverage_max;
    }
    if (object.max_leveragelp_ratio !== undefined && object.max_leveragelp_ratio !== null) {
      message.maxLeveragelpRatio = object.max_leveragelp_ratio;
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.amm_pool_id = message.ammPoolId !== BigInt(0) ? message.ammPoolId?.toString() : undefined;
    obj.health = message.health === "" ? undefined : message.health;
    obj.leveraged_lp_amount = message.leveragedLpAmount === "" ? undefined : message.leveragedLpAmount;
    obj.leverage_max = message.leverageMax === "" ? undefined : message.leverageMax;
    obj.max_leveragelp_ratio = message.maxLeveragelpRatio === "" ? undefined : message.maxLeveragelpRatio;
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
      typeUrl: "/elys.leveragelp.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
function createBaseLegacyPool(): LegacyPool {
  return {
    ammPoolId: BigInt(0),
    health: "",
    leveragedLpAmount: "",
    leverageMax: ""
  };
}
export const LegacyPool = {
  typeUrl: "/elys.leveragelp.LegacyPool",
  encode(message: LegacyPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.ammPoolId);
    }
    if (message.health !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.health, 18).atomics);
    }
    if (message.leveragedLpAmount !== "") {
      writer.uint32(26).string(message.leveragedLpAmount);
    }
    if (message.leverageMax !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.leverageMax, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyPool();
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
          message.leveragedLpAmount = reader.string();
          break;
        case 4:
          message.leverageMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LegacyPool>): LegacyPool {
    const message = createBaseLegacyPool();
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.health = object.health ?? "";
    message.leveragedLpAmount = object.leveragedLpAmount ?? "";
    message.leverageMax = object.leverageMax ?? "";
    return message;
  },
  fromAmino(object: LegacyPoolAmino): LegacyPool {
    const message = createBaseLegacyPool();
    if (object.amm_pool_id !== undefined && object.amm_pool_id !== null) {
      message.ammPoolId = BigInt(object.amm_pool_id);
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = object.health;
    }
    if (object.leveraged_lp_amount !== undefined && object.leveraged_lp_amount !== null) {
      message.leveragedLpAmount = object.leveraged_lp_amount;
    }
    if (object.leverage_max !== undefined && object.leverage_max !== null) {
      message.leverageMax = object.leverage_max;
    }
    return message;
  },
  toAmino(message: LegacyPool): LegacyPoolAmino {
    const obj: any = {};
    obj.amm_pool_id = message.ammPoolId !== BigInt(0) ? message.ammPoolId?.toString() : undefined;
    obj.health = message.health === "" ? undefined : message.health;
    obj.leveraged_lp_amount = message.leveragedLpAmount === "" ? undefined : message.leveragedLpAmount;
    obj.leverage_max = message.leverageMax === "" ? undefined : message.leverageMax;
    return obj;
  },
  fromAminoMsg(object: LegacyPoolAminoMsg): LegacyPool {
    return LegacyPool.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyPoolProtoMsg): LegacyPool {
    return LegacyPool.decode(message.value);
  },
  toProto(message: LegacyPool): Uint8Array {
    return LegacyPool.encode(message).finish();
  },
  toProtoMsg(message: LegacyPool): LegacyPoolProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.LegacyPool",
      value: LegacyPool.encode(message).finish()
    };
  }
};