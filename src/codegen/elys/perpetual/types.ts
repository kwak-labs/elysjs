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
  collateralAsset: string;
  tradingAsset: string;
  liabilitiesAsset: string;
  custodyAsset: string;
  collateral: string;
  liabilities: string;
  borrowInterestPaidCollateral: string;
  borrowInterestPaidCustody: string;
  borrowInterestUnpaidCollateral: string;
  custody: string;
  takeProfitLiabilities: string;
  takeProfitCustody: string;
  leverage: string;
  mtpHealth: string;
  position: Position;
  id: bigint;
  ammPoolId: bigint;
  consolidateLeverage: string;
  sumCollateral: string;
  takeProfitPrice: string;
  takeProfitBorrowRate: string;
  /** funding fee paid */
  fundingFeePaidCollateral: string;
  fundingFeePaidCustody: string;
  /** funding fee received */
  fundingFeeReceivedCollateral: string;
  fundingFeeReceivedCustody: string;
  openPrice: string;
}
export interface MTPProtoMsg {
  typeUrl: "/elys.perpetual.MTP";
  value: Uint8Array;
}
export interface MTPAmino {
  address: string;
  collateral_asset: string;
  trading_asset: string;
  liabilities_asset: string;
  custody_asset: string;
  collateral: string;
  liabilities: string;
  borrow_interest_paid_collateral: string;
  borrow_interest_paid_custody: string;
  borrow_interest_unpaid_collateral: string;
  custody: string;
  take_profit_liabilities: string;
  take_profit_custody: string;
  leverage: string;
  mtp_health: string;
  position: Position;
  id: string;
  amm_pool_id: string;
  consolidate_leverage: string;
  sum_collateral: string;
  take_profit_price: string;
  take_profit_borrow_rate: string;
  /** funding fee paid */
  funding_fee_paid_collateral: string;
  funding_fee_paid_custody: string;
  /** funding fee received */
  funding_fee_received_collateral: string;
  funding_fee_received_custody: string;
  open_price: string;
}
export interface MTPAminoMsg {
  type: "/elys.perpetual.MTP";
  value: MTPAmino;
}
export interface MTPSDKType {
  address: string;
  collateral_asset: string;
  trading_asset: string;
  liabilities_asset: string;
  custody_asset: string;
  collateral: string;
  liabilities: string;
  borrow_interest_paid_collateral: string;
  borrow_interest_paid_custody: string;
  borrow_interest_unpaid_collateral: string;
  custody: string;
  take_profit_liabilities: string;
  take_profit_custody: string;
  leverage: string;
  mtp_health: string;
  position: Position;
  id: bigint;
  amm_pool_id: bigint;
  consolidate_leverage: string;
  sum_collateral: string;
  take_profit_price: string;
  take_profit_borrow_rate: string;
  funding_fee_paid_collateral: string;
  funding_fee_paid_custody: string;
  funding_fee_received_collateral: string;
  funding_fee_received_custody: string;
  open_price: string;
}
export interface WhiteList {
  validatorList: string[];
}
export interface WhiteListProtoMsg {
  typeUrl: "/elys.perpetual.WhiteList";
  value: Uint8Array;
}
export interface WhiteListAmino {
  validator_list: string[];
}
export interface WhiteListAminoMsg {
  type: "/elys.perpetual.WhiteList";
  value: WhiteListAmino;
}
export interface WhiteListSDKType {
  validator_list: string[];
}
function createBaseMTP(): MTP {
  return {
    address: "",
    collateralAsset: "",
    tradingAsset: "",
    liabilitiesAsset: "",
    custodyAsset: "",
    collateral: "",
    liabilities: "",
    borrowInterestPaidCollateral: "",
    borrowInterestPaidCustody: "",
    borrowInterestUnpaidCollateral: "",
    custody: "",
    takeProfitLiabilities: "",
    takeProfitCustody: "",
    leverage: "",
    mtpHealth: "",
    position: 0,
    id: BigInt(0),
    ammPoolId: BigInt(0),
    consolidateLeverage: "",
    sumCollateral: "",
    takeProfitPrice: "",
    takeProfitBorrowRate: "",
    fundingFeePaidCollateral: "",
    fundingFeePaidCustody: "",
    fundingFeeReceivedCollateral: "",
    fundingFeeReceivedCustody: "",
    openPrice: ""
  };
}
export const MTP = {
  typeUrl: "/elys.perpetual.MTP",
  encode(message: MTP, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.collateralAsset !== "") {
      writer.uint32(18).string(message.collateralAsset);
    }
    if (message.tradingAsset !== "") {
      writer.uint32(26).string(message.tradingAsset);
    }
    if (message.liabilitiesAsset !== "") {
      writer.uint32(34).string(message.liabilitiesAsset);
    }
    if (message.custodyAsset !== "") {
      writer.uint32(42).string(message.custodyAsset);
    }
    if (message.collateral !== "") {
      writer.uint32(50).string(message.collateral);
    }
    if (message.liabilities !== "") {
      writer.uint32(58).string(message.liabilities);
    }
    if (message.borrowInterestPaidCollateral !== "") {
      writer.uint32(66).string(message.borrowInterestPaidCollateral);
    }
    if (message.borrowInterestPaidCustody !== "") {
      writer.uint32(74).string(message.borrowInterestPaidCustody);
    }
    if (message.borrowInterestUnpaidCollateral !== "") {
      writer.uint32(82).string(message.borrowInterestUnpaidCollateral);
    }
    if (message.custody !== "") {
      writer.uint32(90).string(message.custody);
    }
    if (message.takeProfitLiabilities !== "") {
      writer.uint32(98).string(message.takeProfitLiabilities);
    }
    if (message.takeProfitCustody !== "") {
      writer.uint32(106).string(message.takeProfitCustody);
    }
    if (message.leverage !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.leverage, 18).atomics);
    }
    if (message.mtpHealth !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.mtpHealth, 18).atomics);
    }
    if (message.position !== 0) {
      writer.uint32(128).int32(message.position);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(136).uint64(message.id);
    }
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(144).uint64(message.ammPoolId);
    }
    if (message.consolidateLeverage !== "") {
      writer.uint32(154).string(Decimal.fromUserInput(message.consolidateLeverage, 18).atomics);
    }
    if (message.sumCollateral !== "") {
      writer.uint32(162).string(message.sumCollateral);
    }
    if (message.takeProfitPrice !== "") {
      writer.uint32(170).string(Decimal.fromUserInput(message.takeProfitPrice, 18).atomics);
    }
    if (message.takeProfitBorrowRate !== "") {
      writer.uint32(178).string(Decimal.fromUserInput(message.takeProfitBorrowRate, 18).atomics);
    }
    if (message.fundingFeePaidCollateral !== "") {
      writer.uint32(186).string(message.fundingFeePaidCollateral);
    }
    if (message.fundingFeePaidCustody !== "") {
      writer.uint32(194).string(message.fundingFeePaidCustody);
    }
    if (message.fundingFeeReceivedCollateral !== "") {
      writer.uint32(202).string(message.fundingFeeReceivedCollateral);
    }
    if (message.fundingFeeReceivedCustody !== "") {
      writer.uint32(210).string(message.fundingFeeReceivedCustody);
    }
    if (message.openPrice !== "") {
      writer.uint32(218).string(Decimal.fromUserInput(message.openPrice, 18).atomics);
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
          message.collateralAsset = reader.string();
          break;
        case 3:
          message.tradingAsset = reader.string();
          break;
        case 4:
          message.liabilitiesAsset = reader.string();
          break;
        case 5:
          message.custodyAsset = reader.string();
          break;
        case 6:
          message.collateral = reader.string();
          break;
        case 7:
          message.liabilities = reader.string();
          break;
        case 8:
          message.borrowInterestPaidCollateral = reader.string();
          break;
        case 9:
          message.borrowInterestPaidCustody = reader.string();
          break;
        case 10:
          message.borrowInterestUnpaidCollateral = reader.string();
          break;
        case 11:
          message.custody = reader.string();
          break;
        case 12:
          message.takeProfitLiabilities = reader.string();
          break;
        case 13:
          message.takeProfitCustody = reader.string();
          break;
        case 14:
          message.leverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.mtpHealth = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 16:
          message.position = (reader.int32() as any);
          break;
        case 17:
          message.id = reader.uint64();
          break;
        case 18:
          message.ammPoolId = reader.uint64();
          break;
        case 19:
          message.consolidateLeverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 20:
          message.sumCollateral = reader.string();
          break;
        case 21:
          message.takeProfitPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 22:
          message.takeProfitBorrowRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 23:
          message.fundingFeePaidCollateral = reader.string();
          break;
        case 24:
          message.fundingFeePaidCustody = reader.string();
          break;
        case 25:
          message.fundingFeeReceivedCollateral = reader.string();
          break;
        case 26:
          message.fundingFeeReceivedCustody = reader.string();
          break;
        case 27:
          message.openPrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
    message.collateralAsset = object.collateralAsset ?? "";
    message.tradingAsset = object.tradingAsset ?? "";
    message.liabilitiesAsset = object.liabilitiesAsset ?? "";
    message.custodyAsset = object.custodyAsset ?? "";
    message.collateral = object.collateral ?? "";
    message.liabilities = object.liabilities ?? "";
    message.borrowInterestPaidCollateral = object.borrowInterestPaidCollateral ?? "";
    message.borrowInterestPaidCustody = object.borrowInterestPaidCustody ?? "";
    message.borrowInterestUnpaidCollateral = object.borrowInterestUnpaidCollateral ?? "";
    message.custody = object.custody ?? "";
    message.takeProfitLiabilities = object.takeProfitLiabilities ?? "";
    message.takeProfitCustody = object.takeProfitCustody ?? "";
    message.leverage = object.leverage ?? "";
    message.mtpHealth = object.mtpHealth ?? "";
    message.position = object.position ?? 0;
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.consolidateLeverage = object.consolidateLeverage ?? "";
    message.sumCollateral = object.sumCollateral ?? "";
    message.takeProfitPrice = object.takeProfitPrice ?? "";
    message.takeProfitBorrowRate = object.takeProfitBorrowRate ?? "";
    message.fundingFeePaidCollateral = object.fundingFeePaidCollateral ?? "";
    message.fundingFeePaidCustody = object.fundingFeePaidCustody ?? "";
    message.fundingFeeReceivedCollateral = object.fundingFeeReceivedCollateral ?? "";
    message.fundingFeeReceivedCustody = object.fundingFeeReceivedCustody ?? "";
    message.openPrice = object.openPrice ?? "";
    return message;
  },
  fromAmino(object: MTPAmino): MTP {
    return {
      address: object.address,
      collateralAsset: object.collateral_asset,
      tradingAsset: object.trading_asset,
      liabilitiesAsset: object.liabilities_asset,
      custodyAsset: object.custody_asset,
      collateral: object.collateral,
      liabilities: object.liabilities,
      borrowInterestPaidCollateral: object.borrow_interest_paid_collateral,
      borrowInterestPaidCustody: object.borrow_interest_paid_custody,
      borrowInterestUnpaidCollateral: object.borrow_interest_unpaid_collateral,
      custody: object.custody,
      takeProfitLiabilities: object.take_profit_liabilities,
      takeProfitCustody: object.take_profit_custody,
      leverage: object.leverage,
      mtpHealth: object.mtp_health,
      position: isSet(object.position) ? positionFromJSON(object.position) : -1,
      id: BigInt(object.id),
      ammPoolId: BigInt(object.amm_pool_id),
      consolidateLeverage: object.consolidate_leverage,
      sumCollateral: object.sum_collateral,
      takeProfitPrice: object.take_profit_price,
      takeProfitBorrowRate: object.take_profit_borrow_rate,
      fundingFeePaidCollateral: object.funding_fee_paid_collateral,
      fundingFeePaidCustody: object.funding_fee_paid_custody,
      fundingFeeReceivedCollateral: object.funding_fee_received_collateral,
      fundingFeeReceivedCustody: object.funding_fee_received_custody,
      openPrice: object.open_price
    };
  },
  toAmino(message: MTP): MTPAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.collateral_asset = message.collateralAsset;
    obj.trading_asset = message.tradingAsset;
    obj.liabilities_asset = message.liabilitiesAsset;
    obj.custody_asset = message.custodyAsset;
    obj.collateral = message.collateral;
    obj.liabilities = message.liabilities;
    obj.borrow_interest_paid_collateral = message.borrowInterestPaidCollateral;
    obj.borrow_interest_paid_custody = message.borrowInterestPaidCustody;
    obj.borrow_interest_unpaid_collateral = message.borrowInterestUnpaidCollateral;
    obj.custody = message.custody;
    obj.take_profit_liabilities = message.takeProfitLiabilities;
    obj.take_profit_custody = message.takeProfitCustody;
    obj.leverage = message.leverage;
    obj.mtp_health = message.mtpHealth;
    obj.position = message.position;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.amm_pool_id = message.ammPoolId ? message.ammPoolId.toString() : undefined;
    obj.consolidate_leverage = message.consolidateLeverage;
    obj.sum_collateral = message.sumCollateral;
    obj.take_profit_price = message.takeProfitPrice;
    obj.take_profit_borrow_rate = message.takeProfitBorrowRate;
    obj.funding_fee_paid_collateral = message.fundingFeePaidCollateral;
    obj.funding_fee_paid_custody = message.fundingFeePaidCustody;
    obj.funding_fee_received_collateral = message.fundingFeeReceivedCollateral;
    obj.funding_fee_received_custody = message.fundingFeeReceivedCustody;
    obj.open_price = message.openPrice;
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
      typeUrl: "/elys.perpetual.MTP",
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
  typeUrl: "/elys.perpetual.WhiteList",
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
      typeUrl: "/elys.perpetual.WhiteList",
      value: WhiteList.encode(message).finish()
    };
  }
};