//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface Debt {
  address: string;
  borrowed: string;
  interestPaid: string;
  interestStacked: string;
  borrowTime: bigint;
  lastInterestCalcTime: bigint;
  lastInterestCalcBlock: bigint;
}
export interface DebtProtoMsg {
  typeUrl: "/elys.stablestake.Debt";
  value: Uint8Array;
}
export interface DebtAmino {
  address?: string;
  borrowed?: string;
  interest_paid?: string;
  interest_stacked?: string;
  borrow_time?: string;
  last_interest_calc_time?: string;
  last_interest_calc_block?: string;
}
export interface DebtAminoMsg {
  type: "/elys.stablestake.Debt";
  value: DebtAmino;
}
export interface DebtSDKType {
  address: string;
  borrowed: string;
  interest_paid: string;
  interest_stacked: string;
  borrow_time: bigint;
  last_interest_calc_time: bigint;
  last_interest_calc_block: bigint;
}
function createBaseDebt(): Debt {
  return {
    address: "",
    borrowed: "",
    interestPaid: "",
    interestStacked: "",
    borrowTime: BigInt(0),
    lastInterestCalcTime: BigInt(0),
    lastInterestCalcBlock: BigInt(0)
  };
}
export const Debt = {
  typeUrl: "/elys.stablestake.Debt",
  encode(message: Debt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.borrowed !== "") {
      writer.uint32(18).string(message.borrowed);
    }
    if (message.interestPaid !== "") {
      writer.uint32(26).string(message.interestPaid);
    }
    if (message.interestStacked !== "") {
      writer.uint32(34).string(message.interestStacked);
    }
    if (message.borrowTime !== BigInt(0)) {
      writer.uint32(40).uint64(message.borrowTime);
    }
    if (message.lastInterestCalcTime !== BigInt(0)) {
      writer.uint32(48).uint64(message.lastInterestCalcTime);
    }
    if (message.lastInterestCalcBlock !== BigInt(0)) {
      writer.uint32(56).uint64(message.lastInterestCalcBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Debt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.borrowed = reader.string();
          break;
        case 3:
          message.interestPaid = reader.string();
          break;
        case 4:
          message.interestStacked = reader.string();
          break;
        case 5:
          message.borrowTime = reader.uint64();
          break;
        case 6:
          message.lastInterestCalcTime = reader.uint64();
          break;
        case 7:
          message.lastInterestCalcBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Debt>): Debt {
    const message = createBaseDebt();
    message.address = object.address ?? "";
    message.borrowed = object.borrowed ?? "";
    message.interestPaid = object.interestPaid ?? "";
    message.interestStacked = object.interestStacked ?? "";
    message.borrowTime = object.borrowTime !== undefined && object.borrowTime !== null ? BigInt(object.borrowTime.toString()) : BigInt(0);
    message.lastInterestCalcTime = object.lastInterestCalcTime !== undefined && object.lastInterestCalcTime !== null ? BigInt(object.lastInterestCalcTime.toString()) : BigInt(0);
    message.lastInterestCalcBlock = object.lastInterestCalcBlock !== undefined && object.lastInterestCalcBlock !== null ? BigInt(object.lastInterestCalcBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DebtAmino): Debt {
    const message = createBaseDebt();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.borrowed !== undefined && object.borrowed !== null) {
      message.borrowed = object.borrowed;
    }
    if (object.interest_paid !== undefined && object.interest_paid !== null) {
      message.interestPaid = object.interest_paid;
    }
    if (object.interest_stacked !== undefined && object.interest_stacked !== null) {
      message.interestStacked = object.interest_stacked;
    }
    if (object.borrow_time !== undefined && object.borrow_time !== null) {
      message.borrowTime = BigInt(object.borrow_time);
    }
    if (object.last_interest_calc_time !== undefined && object.last_interest_calc_time !== null) {
      message.lastInterestCalcTime = BigInt(object.last_interest_calc_time);
    }
    if (object.last_interest_calc_block !== undefined && object.last_interest_calc_block !== null) {
      message.lastInterestCalcBlock = BigInt(object.last_interest_calc_block);
    }
    return message;
  },
  toAmino(message: Debt): DebtAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.borrowed = message.borrowed === "" ? undefined : message.borrowed;
    obj.interest_paid = message.interestPaid === "" ? undefined : message.interestPaid;
    obj.interest_stacked = message.interestStacked === "" ? undefined : message.interestStacked;
    obj.borrow_time = message.borrowTime !== BigInt(0) ? message.borrowTime?.toString() : undefined;
    obj.last_interest_calc_time = message.lastInterestCalcTime !== BigInt(0) ? message.lastInterestCalcTime?.toString() : undefined;
    obj.last_interest_calc_block = message.lastInterestCalcBlock !== BigInt(0) ? message.lastInterestCalcBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DebtAminoMsg): Debt {
    return Debt.fromAmino(object.value);
  },
  fromProtoMsg(message: DebtProtoMsg): Debt {
    return Debt.decode(message.value);
  },
  toProto(message: Debt): Uint8Array {
    return Debt.encode(message).finish();
  },
  toProtoMsg(message: Debt): DebtProtoMsg {
    return {
      typeUrl: "/elys.stablestake.Debt",
      value: Debt.encode(message).finish()
    };
  }
};