import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface Pool {
  ammPoolId: bigint;
  health: string;
  enabled: boolean;
  closed: boolean;
  leveragedLpAmount: string;
  leverageMax: string;
}
export interface PoolProtoMsg {
  typeUrl: "/elys.leveragelp.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  amm_pool_id: string;
  health: string;
  enabled: boolean;
  closed: boolean;
  leveraged_lp_amount: string;
  leverage_max: string;
}
export interface PoolAminoMsg {
  type: "/elys.leveragelp.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  amm_pool_id: bigint;
  health: string;
  enabled: boolean;
  closed: boolean;
  leveraged_lp_amount: string;
  leverage_max: string;
}
function createBasePool(): Pool {
  return {
    ammPoolId: BigInt(0),
    health: "",
    enabled: false,
    closed: false,
    leveragedLpAmount: "",
    leverageMax: ""
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
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    if (message.closed === true) {
      writer.uint32(32).bool(message.closed);
    }
    if (message.leveragedLpAmount !== "") {
      writer.uint32(42).string(message.leveragedLpAmount);
    }
    if (message.leverageMax !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.leverageMax, 18).atomics);
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
          message.leveragedLpAmount = reader.string();
          break;
        case 6:
          message.leverageMax = Decimal.fromAtomics(reader.string(), 18).toString();
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
    message.leveragedLpAmount = object.leveragedLpAmount ?? "";
    message.leverageMax = object.leverageMax ?? "";
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    return {
      ammPoolId: BigInt(object.amm_pool_id),
      health: object.health,
      enabled: object.enabled,
      closed: object.closed,
      leveragedLpAmount: object.leveraged_lp_amount,
      leverageMax: object.leverage_max
    };
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.amm_pool_id = message.ammPoolId ? message.ammPoolId.toString() : undefined;
    obj.health = message.health;
    obj.enabled = message.enabled;
    obj.closed = message.closed;
    obj.leveraged_lp_amount = message.leveragedLpAmount;
    obj.leverage_max = message.leverageMax;
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