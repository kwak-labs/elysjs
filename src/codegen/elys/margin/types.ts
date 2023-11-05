import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export enum Position {
  UNSPECIFIED = 0,
  LONG = 1,
  SHORT = 2,
  UNRECOGNIZED = -1,
}
export const PositionSDKType = Position;
export const PositionAmino = Position;
export function positionFromJSON(object: any): Position {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return Position.UNSPECIFIED;
    case 1:
    case "LONG":
      return Position.LONG;
    case 2:
    case "SHORT":
      return Position.SHORT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Position.UNRECOGNIZED;
  }
}
export function positionToJSON(object: Position): string {
  switch (object) {
    case Position.UNSPECIFIED:
      return "UNSPECIFIED";
    case Position.LONG:
      return "LONG";
    case Position.SHORT:
      return "SHORT";
    case Position.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface MTP {
  address: string;
  collaterals: Coin[];
  liabilities: string;
  interestPaidCollaterals: Coin[];
  interestPaidCustodies: Coin[];
  interestUnpaidCollaterals: Coin[];
  custodies: Coin[];
  leverages: string[];
  mtpHealth: string;
  position: Position;
  id: bigint;
  ammPoolId: bigint;
  consolidateLeverage: string;
  sumCollateral: string;
}
export interface MTPProtoMsg {
  typeUrl: "/elys.margin.MTP";
  value: Uint8Array;
}
export interface MTPAmino {
  address: string;
  collaterals: CoinAmino[];
  liabilities: string;
  interest_paid_collaterals: CoinAmino[];
  interest_paid_custodies: CoinAmino[];
  interest_unpaid_collaterals: CoinAmino[];
  custodies: CoinAmino[];
  leverages: string[];
  mtp_health: string;
  position: Position;
  id: string;
  amm_pool_id: string;
  consolidate_leverage: string;
  sum_collateral: string;
}
export interface MTPAminoMsg {
  type: "/elys.margin.MTP";
  value: MTPAmino;
}
export interface MTPSDKType {
  address: string;
  collaterals: CoinSDKType[];
  liabilities: string;
  interest_paid_collaterals: CoinSDKType[];
  interest_paid_custodies: CoinSDKType[];
  interest_unpaid_collaterals: CoinSDKType[];
  custodies: CoinSDKType[];
  leverages: string[];
  mtp_health: string;
  position: Position;
  id: bigint;
  amm_pool_id: bigint;
  consolidate_leverage: string;
  sum_collateral: string;
}
export interface WhiteList {
  validatorList: string[];
}
export interface WhiteListProtoMsg {
  typeUrl: "/elys.margin.WhiteList";
  value: Uint8Array;
}
export interface WhiteListAmino {
  validator_list: string[];
}
export interface WhiteListAminoMsg {
  type: "/elys.margin.WhiteList";
  value: WhiteListAmino;
}
export interface WhiteListSDKType {
  validator_list: string[];
}
function createBaseMTP(): MTP {
  return {
    address: "",
    collaterals: [],
    liabilities: "",
    interestPaidCollaterals: [],
    interestPaidCustodies: [],
    interestUnpaidCollaterals: [],
    custodies: [],
    leverages: [],
    mtpHealth: "",
    position: 0,
    id: BigInt(0),
    ammPoolId: BigInt(0),
    consolidateLeverage: "",
    sumCollateral: ""
  };
}
export const MTP = {
  typeUrl: "/elys.margin.MTP",
  encode(message: MTP, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.collaterals) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.liabilities !== "") {
      writer.uint32(26).string(message.liabilities);
    }
    for (const v of message.interestPaidCollaterals) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.interestPaidCustodies) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.interestUnpaidCollaterals) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.custodies) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.leverages) {
      writer.uint32(66).string(Decimal.fromUserInput(v!, 18).atomics);
    }
    if (message.mtpHealth !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.mtpHealth, 18).atomics);
    }
    if (message.position !== 0) {
      writer.uint32(80).int32(message.position);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(88).uint64(message.id);
    }
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(96).uint64(message.ammPoolId);
    }
    if (message.consolidateLeverage !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.consolidateLeverage, 18).atomics);
    }
    if (message.sumCollateral !== "") {
      writer.uint32(114).string(message.sumCollateral);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MTP {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMTP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.collaterals.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.liabilities = reader.string();
          break;
        case 4:
          message.interestPaidCollaterals.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.interestPaidCustodies.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.interestUnpaidCollaterals.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.custodies.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.leverages.push(Decimal.fromAtomics(reader.string(), 18).toString());
          break;
        case 9:
          message.mtpHealth = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.position = (reader.int32() as any);
          break;
        case 11:
          message.id = reader.uint64();
          break;
        case 12:
          message.ammPoolId = reader.uint64();
          break;
        case 13:
          message.consolidateLeverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.sumCollateral = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MTP>): MTP {
    const message = createBaseMTP();
    message.address = object.address ?? "";
    message.collaterals = object.collaterals?.map(e => Coin.fromPartial(e)) || [];
    message.liabilities = object.liabilities ?? "";
    message.interestPaidCollaterals = object.interestPaidCollaterals?.map(e => Coin.fromPartial(e)) || [];
    message.interestPaidCustodies = object.interestPaidCustodies?.map(e => Coin.fromPartial(e)) || [];
    message.interestUnpaidCollaterals = object.interestUnpaidCollaterals?.map(e => Coin.fromPartial(e)) || [];
    message.custodies = object.custodies?.map(e => Coin.fromPartial(e)) || [];
    message.leverages = object.leverages?.map(e => e) || [];
    message.mtpHealth = object.mtpHealth ?? "";
    message.position = object.position ?? 0;
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.consolidateLeverage = object.consolidateLeverage ?? "";
    message.sumCollateral = object.sumCollateral ?? "";
    return message;
  },
  fromAmino(object: MTPAmino): MTP {
    return {
      address: object.address,
      collaterals: Array.isArray(object?.collaterals) ? object.collaterals.map((e: any) => Coin.fromAmino(e)) : [],
      liabilities: object.liabilities,
      interestPaidCollaterals: Array.isArray(object?.interest_paid_collaterals) ? object.interest_paid_collaterals.map((e: any) => Coin.fromAmino(e)) : [],
      interestPaidCustodies: Array.isArray(object?.interest_paid_custodies) ? object.interest_paid_custodies.map((e: any) => Coin.fromAmino(e)) : [],
      interestUnpaidCollaterals: Array.isArray(object?.interest_unpaid_collaterals) ? object.interest_unpaid_collaterals.map((e: any) => Coin.fromAmino(e)) : [],
      custodies: Array.isArray(object?.custodies) ? object.custodies.map((e: any) => Coin.fromAmino(e)) : [],
      leverages: Array.isArray(object?.leverages) ? object.leverages.map((e: any) => e) : [],
      mtpHealth: object.mtp_health,
      position: isSet(object.position) ? positionFromJSON(object.position) : -1,
      id: BigInt(object.id),
      ammPoolId: BigInt(object.amm_pool_id),
      consolidateLeverage: object.consolidate_leverage,
      sumCollateral: object.sum_collateral
    };
  },
  toAmino(message: MTP): MTPAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.collaterals) {
      obj.collaterals = message.collaterals.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.collaterals = [];
    }
    obj.liabilities = message.liabilities;
    if (message.interestPaidCollaterals) {
      obj.interest_paid_collaterals = message.interestPaidCollaterals.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.interest_paid_collaterals = [];
    }
    if (message.interestPaidCustodies) {
      obj.interest_paid_custodies = message.interestPaidCustodies.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.interest_paid_custodies = [];
    }
    if (message.interestUnpaidCollaterals) {
      obj.interest_unpaid_collaterals = message.interestUnpaidCollaterals.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.interest_unpaid_collaterals = [];
    }
    if (message.custodies) {
      obj.custodies = message.custodies.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.custodies = [];
    }
    if (message.leverages) {
      obj.leverages = message.leverages.map(e => e);
    } else {
      obj.leverages = [];
    }
    obj.mtp_health = message.mtpHealth;
    obj.position = message.position;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.amm_pool_id = message.ammPoolId ? message.ammPoolId.toString() : undefined;
    obj.consolidate_leverage = message.consolidateLeverage;
    obj.sum_collateral = message.sumCollateral;
    return obj;
  },
  fromAminoMsg(object: MTPAminoMsg): MTP {
    return MTP.fromAmino(object.value);
  },
  fromProtoMsg(message: MTPProtoMsg): MTP {
    return MTP.decode(message.value);
  },
  toProto(message: MTP): Uint8Array {
    return MTP.encode(message).finish();
  },
  toProtoMsg(message: MTP): MTPProtoMsg {
    return {
      typeUrl: "/elys.margin.MTP",
      value: MTP.encode(message).finish()
    };
  }
};
function createBaseWhiteList(): WhiteList {
  return {
    validatorList: []
  };
}
export const WhiteList = {
  typeUrl: "/elys.margin.WhiteList",
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
      typeUrl: "/elys.margin.WhiteList",
      value: WhiteList.encode(message).finish()
    };
  }
};