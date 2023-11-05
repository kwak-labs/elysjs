import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface Position {
  address: string;
  collateral: Coin;
  liabilities: string;
  interestPaid: string;
  leverage: string;
  leveragedLpAmount: string;
  positionHealth: string;
  id: bigint;
  ammPoolId: bigint;
  takeProfitPrice: string;
}
export interface PositionProtoMsg {
  typeUrl: "/elys.leveragelp.Position";
  value: Uint8Array;
}
export interface PositionAmino {
  address: string;
  collateral?: CoinAmino;
  liabilities: string;
  interest_paid: string;
  leverage: string;
  leveraged_lp_amount: string;
  position_health: string;
  id: string;
  amm_pool_id: string;
  take_profit_price: string;
}
export interface PositionAminoMsg {
  type: "/elys.leveragelp.Position";
  value: PositionAmino;
}
export interface PositionSDKType {
  address: string;
  collateral: CoinSDKType;
  liabilities: string;
  interest_paid: string;
  leverage: string;
  leveraged_lp_amount: string;
  position_health: string;
  id: bigint;
  amm_pool_id: bigint;
  take_profit_price: string;
}
export interface WhiteList {
  validatorList: string[];
}
export interface WhiteListProtoMsg {
  typeUrl: "/elys.leveragelp.WhiteList";
  value: Uint8Array;
}
export interface WhiteListAmino {
  validator_list: string[];
}
export interface WhiteListAminoMsg {
  type: "/elys.leveragelp.WhiteList";
  value: WhiteListAmino;
}
export interface WhiteListSDKType {
  validator_list: string[];
}
function createBasePosition(): Position {
  return {
    address: "",
    collateral: Coin.fromPartial({}),
    liabilities: "",
    interestPaid: "",
    leverage: "",
    leveragedLpAmount: "",
    positionHealth: "",
    id: BigInt(0),
    ammPoolId: BigInt(0),
    takeProfitPrice: ""
  };
}
export const Position = {
  typeUrl: "/elys.leveragelp.Position",
  encode(message: Position, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
    }
    if (message.liabilities !== "") {
      writer.uint32(26).string(message.liabilities);
    }
    if (message.interestPaid !== "") {
      writer.uint32(34).string(message.interestPaid);
    }
    if (message.leverage !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.leverage, 18).atomics);
    }
    if (message.leveragedLpAmount !== "") {
      writer.uint32(50).string(message.leveragedLpAmount);
    }
    if (message.positionHealth !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.positionHealth, 18).atomics);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(64).uint64(message.id);
    }
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(72).uint64(message.ammPoolId);
    }
    if (message.takeProfitPrice !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.takeProfitPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Position {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.liabilities = reader.string();
          break;
        case 4:
          message.interestPaid = reader.string();
          break;
        case 5:
          message.leverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.leveragedLpAmount = reader.string();
          break;
        case 7:
          message.positionHealth = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.id = reader.uint64();
          break;
        case 9:
          message.ammPoolId = reader.uint64();
          break;
        case 10:
          message.takeProfitPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Position>): Position {
    const message = createBasePosition();
    message.address = object.address ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.liabilities = object.liabilities ?? "";
    message.interestPaid = object.interestPaid ?? "";
    message.leverage = object.leverage ?? "";
    message.leveragedLpAmount = object.leveragedLpAmount ?? "";
    message.positionHealth = object.positionHealth ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.takeProfitPrice = object.takeProfitPrice ?? "";
    return message;
  },
  fromAmino(object: PositionAmino): Position {
    return {
      address: object.address,
      collateral: object?.collateral ? Coin.fromAmino(object.collateral) : undefined,
      liabilities: object.liabilities,
      interestPaid: object.interest_paid,
      leverage: object.leverage,
      leveragedLpAmount: object.leveraged_lp_amount,
      positionHealth: object.position_health,
      id: BigInt(object.id),
      ammPoolId: BigInt(object.amm_pool_id),
      takeProfitPrice: object.take_profit_price
    };
  },
  toAmino(message: Position): PositionAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.liabilities = message.liabilities;
    obj.interest_paid = message.interestPaid;
    obj.leverage = message.leverage;
    obj.leveraged_lp_amount = message.leveragedLpAmount;
    obj.position_health = message.positionHealth;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.amm_pool_id = message.ammPoolId ? message.ammPoolId.toString() : undefined;
    obj.take_profit_price = message.takeProfitPrice;
    return obj;
  },
  fromAminoMsg(object: PositionAminoMsg): Position {
    return Position.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionProtoMsg): Position {
    return Position.decode(message.value);
  },
  toProto(message: Position): Uint8Array {
    return Position.encode(message).finish();
  },
  toProtoMsg(message: Position): PositionProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.Position",
      value: Position.encode(message).finish()
    };
  }
};
function createBaseWhiteList(): WhiteList {
  return {
    validatorList: []
  };
}
export const WhiteList = {
  typeUrl: "/elys.leveragelp.WhiteList",
  encode(message: WhiteList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validatorList) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhiteList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhiteList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WhiteList>): WhiteList {
    const message = createBaseWhiteList();
    message.validatorList = object.validatorList?.map(e => e) || [];
    return message;
  },
  fromAmino(object: WhiteListAmino): WhiteList {
    return {
      validatorList: Array.isArray(object?.validator_list) ? object.validator_list.map((e: any) => e) : []
    };
  },
  toAmino(message: WhiteList): WhiteListAmino {
    const obj: any = {};
    if (message.validatorList) {
      obj.validator_list = message.validatorList.map(e => e);
    } else {
      obj.validator_list = [];
    }
    return obj;
  },
  fromAminoMsg(object: WhiteListAminoMsg): WhiteList {
    return WhiteList.fromAmino(object.value);
  },
  fromProtoMsg(message: WhiteListProtoMsg): WhiteList {
    return WhiteList.decode(message.value);
  },
  toProto(message: WhiteList): Uint8Array {
    return WhiteList.encode(message).finish();
  },
  toProtoMsg(message: WhiteList): WhiteListProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.WhiteList",
      value: WhiteList.encode(message).finish()
    };
  }
};