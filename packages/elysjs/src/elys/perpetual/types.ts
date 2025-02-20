//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
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
  borrowInterestPaidCustody: string;
  borrowInterestUnpaidLiability: string;
  custody: string;
  takeProfitLiabilities: string;
  takeProfitCustody: string;
  mtpHealth: string;
  position: Position;
  id: bigint;
  ammPoolId: bigint;
  takeProfitPrice: string;
  takeProfitBorrowFactor: string;
  fundingFeePaidCustody: string;
  fundingFeeReceivedCustody: string;
  openPrice: string;
  stopLossPrice: string;
  lastInterestCalcTime: bigint;
  lastInterestCalcBlock: bigint;
  lastFundingCalcTime: bigint;
  lastFundingCalcBlock: bigint;
}
export interface MTPProtoMsg {
  typeUrl: "/elys.perpetual.MTP";
  value: Uint8Array;
}
export interface MTPAmino {
  address?: string;
  collateral_asset?: string;
  trading_asset?: string;
  liabilities_asset?: string;
  custody_asset?: string;
  collateral?: string;
  liabilities?: string;
  borrow_interest_paid_custody?: string;
  borrow_interest_unpaid_liability?: string;
  custody?: string;
  take_profit_liabilities?: string;
  take_profit_custody?: string;
  mtp_health?: string;
  position?: Position;
  id?: string;
  amm_pool_id?: string;
  take_profit_price?: string;
  take_profit_borrow_factor?: string;
  funding_fee_paid_custody?: string;
  funding_fee_received_custody?: string;
  open_price?: string;
  stop_loss_price?: string;
  last_interest_calc_time?: string;
  last_interest_calc_block?: string;
  last_funding_calc_time?: string;
  last_funding_calc_block?: string;
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
  borrow_interest_paid_custody: string;
  borrow_interest_unpaid_liability: string;
  custody: string;
  take_profit_liabilities: string;
  take_profit_custody: string;
  mtp_health: string;
  position: Position;
  id: bigint;
  amm_pool_id: bigint;
  take_profit_price: string;
  take_profit_borrow_factor: string;
  funding_fee_paid_custody: string;
  funding_fee_received_custody: string;
  open_price: string;
  stop_loss_price: string;
  last_interest_calc_time: bigint;
  last_interest_calc_block: bigint;
  last_funding_calc_time: bigint;
  last_funding_calc_block: bigint;
}
export interface InterestBlock {
  interestRate: string;
  blockHeight: bigint;
  blockTime: bigint;
}
export interface InterestBlockProtoMsg {
  typeUrl: "/elys.perpetual.InterestBlock";
  value: Uint8Array;
}
export interface InterestBlockAmino {
  interest_rate?: string;
  block_height?: string;
  block_time?: string;
}
export interface InterestBlockAminoMsg {
  type: "/elys.perpetual.InterestBlock";
  value: InterestBlockAmino;
}
export interface InterestBlockSDKType {
  interest_rate: string;
  block_height: bigint;
  block_time: bigint;
}
export interface FundingRateBlock {
  fundingRateLong: string;
  fundingRateShort: string;
  fundingAmountShort: string;
  fundingAmountLong: string;
  blockHeight: bigint;
  blockTime: bigint;
}
export interface FundingRateBlockProtoMsg {
  typeUrl: "/elys.perpetual.FundingRateBlock";
  value: Uint8Array;
}
export interface FundingRateBlockAmino {
  funding_rate_long?: string;
  funding_rate_short?: string;
  funding_amount_short?: string;
  funding_amount_long?: string;
  block_height?: string;
  block_time?: string;
}
export interface FundingRateBlockAminoMsg {
  type: "/elys.perpetual.FundingRateBlock";
  value: FundingRateBlockAmino;
}
export interface FundingRateBlockSDKType {
  funding_rate_long: string;
  funding_rate_short: string;
  funding_amount_short: string;
  funding_amount_long: string;
  block_height: bigint;
  block_time: bigint;
}
export interface WhiteList {
  validatorList: string[];
}
export interface WhiteListProtoMsg {
  typeUrl: "/elys.perpetual.WhiteList";
  value: Uint8Array;
}
export interface WhiteListAmino {
  validator_list?: string[];
}
export interface WhiteListAminoMsg {
  type: "/elys.perpetual.WhiteList";
  value: WhiteListAmino;
}
export interface WhiteListSDKType {
  validator_list: string[];
}
export interface PositionRequest {
  address: string;
  id: bigint;
}
export interface PositionRequestProtoMsg {
  typeUrl: "/elys.perpetual.PositionRequest";
  value: Uint8Array;
}
export interface PositionRequestAmino {
  address?: string;
  id?: string;
}
export interface PositionRequestAminoMsg {
  type: "/elys.perpetual.PositionRequest";
  value: PositionRequestAmino;
}
export interface PositionRequestSDKType {
  address: string;
  id: bigint;
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
    borrowInterestPaidCustody: "",
    borrowInterestUnpaidLiability: "",
    custody: "",
    takeProfitLiabilities: "",
    takeProfitCustody: "",
    mtpHealth: "",
    position: 0,
    id: BigInt(0),
    ammPoolId: BigInt(0),
    takeProfitPrice: "",
    takeProfitBorrowFactor: "",
    fundingFeePaidCustody: "",
    fundingFeeReceivedCustody: "",
    openPrice: "",
    stopLossPrice: "",
    lastInterestCalcTime: BigInt(0),
    lastInterestCalcBlock: BigInt(0),
    lastFundingCalcTime: BigInt(0),
    lastFundingCalcBlock: BigInt(0)
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
    if (message.borrowInterestPaidCustody !== "") {
      writer.uint32(66).string(message.borrowInterestPaidCustody);
    }
    if (message.borrowInterestUnpaidLiability !== "") {
      writer.uint32(82).string(message.borrowInterestUnpaidLiability);
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
    if (message.mtpHealth !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.mtpHealth, 18).atomics);
    }
    if (message.position !== 0) {
      writer.uint32(120).int32(message.position);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(128).uint64(message.id);
    }
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(136).uint64(message.ammPoolId);
    }
    if (message.takeProfitPrice !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.takeProfitPrice, 18).atomics);
    }
    if (message.takeProfitBorrowFactor !== "") {
      writer.uint32(154).string(Decimal.fromUserInput(message.takeProfitBorrowFactor, 18).atomics);
    }
    if (message.fundingFeePaidCustody !== "") {
      writer.uint32(162).string(message.fundingFeePaidCustody);
    }
    if (message.fundingFeeReceivedCustody !== "") {
      writer.uint32(170).string(message.fundingFeeReceivedCustody);
    }
    if (message.openPrice !== "") {
      writer.uint32(178).string(Decimal.fromUserInput(message.openPrice, 18).atomics);
    }
    if (message.stopLossPrice !== "") {
      writer.uint32(186).string(Decimal.fromUserInput(message.stopLossPrice, 18).atomics);
    }
    if (message.lastInterestCalcTime !== BigInt(0)) {
      writer.uint32(192).uint64(message.lastInterestCalcTime);
    }
    if (message.lastInterestCalcBlock !== BigInt(0)) {
      writer.uint32(200).uint64(message.lastInterestCalcBlock);
    }
    if (message.lastFundingCalcTime !== BigInt(0)) {
      writer.uint32(208).uint64(message.lastFundingCalcTime);
    }
    if (message.lastFundingCalcBlock !== BigInt(0)) {
      writer.uint32(216).uint64(message.lastFundingCalcBlock);
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
          message.borrowInterestPaidCustody = reader.string();
          break;
        case 10:
          message.borrowInterestUnpaidLiability = reader.string();
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
          message.mtpHealth = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.position = reader.int32() as any;
          break;
        case 16:
          message.id = reader.uint64();
          break;
        case 17:
          message.ammPoolId = reader.uint64();
          break;
        case 18:
          message.takeProfitPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 19:
          message.takeProfitBorrowFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 20:
          message.fundingFeePaidCustody = reader.string();
          break;
        case 21:
          message.fundingFeeReceivedCustody = reader.string();
          break;
        case 22:
          message.openPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 23:
          message.stopLossPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 24:
          message.lastInterestCalcTime = reader.uint64();
          break;
        case 25:
          message.lastInterestCalcBlock = reader.uint64();
          break;
        case 26:
          message.lastFundingCalcTime = reader.uint64();
          break;
        case 27:
          message.lastFundingCalcBlock = reader.uint64();
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
    message.borrowInterestPaidCustody = object.borrowInterestPaidCustody ?? "";
    message.borrowInterestUnpaidLiability = object.borrowInterestUnpaidLiability ?? "";
    message.custody = object.custody ?? "";
    message.takeProfitLiabilities = object.takeProfitLiabilities ?? "";
    message.takeProfitCustody = object.takeProfitCustody ?? "";
    message.mtpHealth = object.mtpHealth ?? "";
    message.position = object.position ?? 0;
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.takeProfitPrice = object.takeProfitPrice ?? "";
    message.takeProfitBorrowFactor = object.takeProfitBorrowFactor ?? "";
    message.fundingFeePaidCustody = object.fundingFeePaidCustody ?? "";
    message.fundingFeeReceivedCustody = object.fundingFeeReceivedCustody ?? "";
    message.openPrice = object.openPrice ?? "";
    message.stopLossPrice = object.stopLossPrice ?? "";
    message.lastInterestCalcTime = object.lastInterestCalcTime !== undefined && object.lastInterestCalcTime !== null ? BigInt(object.lastInterestCalcTime.toString()) : BigInt(0);
    message.lastInterestCalcBlock = object.lastInterestCalcBlock !== undefined && object.lastInterestCalcBlock !== null ? BigInt(object.lastInterestCalcBlock.toString()) : BigInt(0);
    message.lastFundingCalcTime = object.lastFundingCalcTime !== undefined && object.lastFundingCalcTime !== null ? BigInt(object.lastFundingCalcTime.toString()) : BigInt(0);
    message.lastFundingCalcBlock = object.lastFundingCalcBlock !== undefined && object.lastFundingCalcBlock !== null ? BigInt(object.lastFundingCalcBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MTPAmino): MTP {
    const message = createBaseMTP();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.collateral_asset !== undefined && object.collateral_asset !== null) {
      message.collateralAsset = object.collateral_asset;
    }
    if (object.trading_asset !== undefined && object.trading_asset !== null) {
      message.tradingAsset = object.trading_asset;
    }
    if (object.liabilities_asset !== undefined && object.liabilities_asset !== null) {
      message.liabilitiesAsset = object.liabilities_asset;
    }
    if (object.custody_asset !== undefined && object.custody_asset !== null) {
      message.custodyAsset = object.custody_asset;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = object.collateral;
    }
    if (object.liabilities !== undefined && object.liabilities !== null) {
      message.liabilities = object.liabilities;
    }
    if (object.borrow_interest_paid_custody !== undefined && object.borrow_interest_paid_custody !== null) {
      message.borrowInterestPaidCustody = object.borrow_interest_paid_custody;
    }
    if (object.borrow_interest_unpaid_liability !== undefined && object.borrow_interest_unpaid_liability !== null) {
      message.borrowInterestUnpaidLiability = object.borrow_interest_unpaid_liability;
    }
    if (object.custody !== undefined && object.custody !== null) {
      message.custody = object.custody;
    }
    if (object.take_profit_liabilities !== undefined && object.take_profit_liabilities !== null) {
      message.takeProfitLiabilities = object.take_profit_liabilities;
    }
    if (object.take_profit_custody !== undefined && object.take_profit_custody !== null) {
      message.takeProfitCustody = object.take_profit_custody;
    }
    if (object.mtp_health !== undefined && object.mtp_health !== null) {
      message.mtpHealth = object.mtp_health;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.amm_pool_id !== undefined && object.amm_pool_id !== null) {
      message.ammPoolId = BigInt(object.amm_pool_id);
    }
    if (object.take_profit_price !== undefined && object.take_profit_price !== null) {
      message.takeProfitPrice = object.take_profit_price;
    }
    if (object.take_profit_borrow_factor !== undefined && object.take_profit_borrow_factor !== null) {
      message.takeProfitBorrowFactor = object.take_profit_borrow_factor;
    }
    if (object.funding_fee_paid_custody !== undefined && object.funding_fee_paid_custody !== null) {
      message.fundingFeePaidCustody = object.funding_fee_paid_custody;
    }
    if (object.funding_fee_received_custody !== undefined && object.funding_fee_received_custody !== null) {
      message.fundingFeeReceivedCustody = object.funding_fee_received_custody;
    }
    if (object.open_price !== undefined && object.open_price !== null) {
      message.openPrice = object.open_price;
    }
    if (object.stop_loss_price !== undefined && object.stop_loss_price !== null) {
      message.stopLossPrice = object.stop_loss_price;
    }
    if (object.last_interest_calc_time !== undefined && object.last_interest_calc_time !== null) {
      message.lastInterestCalcTime = BigInt(object.last_interest_calc_time);
    }
    if (object.last_interest_calc_block !== undefined && object.last_interest_calc_block !== null) {
      message.lastInterestCalcBlock = BigInt(object.last_interest_calc_block);
    }
    if (object.last_funding_calc_time !== undefined && object.last_funding_calc_time !== null) {
      message.lastFundingCalcTime = BigInt(object.last_funding_calc_time);
    }
    if (object.last_funding_calc_block !== undefined && object.last_funding_calc_block !== null) {
      message.lastFundingCalcBlock = BigInt(object.last_funding_calc_block);
    }
    return message;
  },
  toAmino(message: MTP): MTPAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.collateral_asset = message.collateralAsset === "" ? undefined : message.collateralAsset;
    obj.trading_asset = message.tradingAsset === "" ? undefined : message.tradingAsset;
    obj.liabilities_asset = message.liabilitiesAsset === "" ? undefined : message.liabilitiesAsset;
    obj.custody_asset = message.custodyAsset === "" ? undefined : message.custodyAsset;
    obj.collateral = message.collateral === "" ? undefined : message.collateral;
    obj.liabilities = message.liabilities === "" ? undefined : message.liabilities;
    obj.borrow_interest_paid_custody = message.borrowInterestPaidCustody === "" ? undefined : message.borrowInterestPaidCustody;
    obj.borrow_interest_unpaid_liability = message.borrowInterestUnpaidLiability === "" ? undefined : message.borrowInterestUnpaidLiability;
    obj.custody = message.custody === "" ? undefined : message.custody;
    obj.take_profit_liabilities = message.takeProfitLiabilities === "" ? undefined : message.takeProfitLiabilities;
    obj.take_profit_custody = message.takeProfitCustody === "" ? undefined : message.takeProfitCustody;
    obj.mtp_health = message.mtpHealth === "" ? undefined : message.mtpHealth;
    obj.position = message.position === 0 ? undefined : message.position;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.amm_pool_id = message.ammPoolId !== BigInt(0) ? message.ammPoolId?.toString() : undefined;
    obj.take_profit_price = message.takeProfitPrice === "" ? undefined : message.takeProfitPrice;
    obj.take_profit_borrow_factor = message.takeProfitBorrowFactor === "" ? undefined : message.takeProfitBorrowFactor;
    obj.funding_fee_paid_custody = message.fundingFeePaidCustody === "" ? undefined : message.fundingFeePaidCustody;
    obj.funding_fee_received_custody = message.fundingFeeReceivedCustody === "" ? undefined : message.fundingFeeReceivedCustody;
    obj.open_price = message.openPrice === "" ? undefined : message.openPrice;
    obj.stop_loss_price = message.stopLossPrice === "" ? undefined : message.stopLossPrice;
    obj.last_interest_calc_time = message.lastInterestCalcTime !== BigInt(0) ? message.lastInterestCalcTime?.toString() : undefined;
    obj.last_interest_calc_block = message.lastInterestCalcBlock !== BigInt(0) ? message.lastInterestCalcBlock?.toString() : undefined;
    obj.last_funding_calc_time = message.lastFundingCalcTime !== BigInt(0) ? message.lastFundingCalcTime?.toString() : undefined;
    obj.last_funding_calc_block = message.lastFundingCalcBlock !== BigInt(0) ? message.lastFundingCalcBlock?.toString() : undefined;
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
function createBaseInterestBlock(): InterestBlock {
  return {
    interestRate: "",
    blockHeight: BigInt(0),
    blockTime: BigInt(0)
  };
}
export const InterestBlock = {
  typeUrl: "/elys.perpetual.InterestBlock",
  encode(message: InterestBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interestRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.interestRate, 18).atomics);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.blockHeight);
    }
    if (message.blockTime !== BigInt(0)) {
      writer.uint32(24).int64(message.blockTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InterestBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterestBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.blockHeight = reader.int64();
          break;
        case 3:
          message.blockTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<InterestBlock>): InterestBlock {
    const message = createBaseInterestBlock();
    message.interestRate = object.interestRate ?? "";
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? BigInt(object.blockTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: InterestBlockAmino): InterestBlock {
    const message = createBaseInterestBlock();
    if (object.interest_rate !== undefined && object.interest_rate !== null) {
      message.interestRate = object.interest_rate;
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = BigInt(object.block_time);
    }
    return message;
  },
  toAmino(message: InterestBlock): InterestBlockAmino {
    const obj: any = {};
    obj.interest_rate = message.interestRate === "" ? undefined : message.interestRate;
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    obj.block_time = message.blockTime !== BigInt(0) ? message.blockTime?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: InterestBlockAminoMsg): InterestBlock {
    return InterestBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: InterestBlockProtoMsg): InterestBlock {
    return InterestBlock.decode(message.value);
  },
  toProto(message: InterestBlock): Uint8Array {
    return InterestBlock.encode(message).finish();
  },
  toProtoMsg(message: InterestBlock): InterestBlockProtoMsg {
    return {
      typeUrl: "/elys.perpetual.InterestBlock",
      value: InterestBlock.encode(message).finish()
    };
  }
};
function createBaseFundingRateBlock(): FundingRateBlock {
  return {
    fundingRateLong: "",
    fundingRateShort: "",
    fundingAmountShort: "",
    fundingAmountLong: "",
    blockHeight: BigInt(0),
    blockTime: BigInt(0)
  };
}
export const FundingRateBlock = {
  typeUrl: "/elys.perpetual.FundingRateBlock",
  encode(message: FundingRateBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fundingRateLong !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.fundingRateLong, 18).atomics);
    }
    if (message.fundingRateShort !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.fundingRateShort, 18).atomics);
    }
    if (message.fundingAmountShort !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.fundingAmountShort, 18).atomics);
    }
    if (message.fundingAmountLong !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.fundingAmountLong, 18).atomics);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(40).int64(message.blockHeight);
    }
    if (message.blockTime !== BigInt(0)) {
      writer.uint32(48).int64(message.blockTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FundingRateBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundingRateBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fundingRateLong = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.fundingRateShort = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.fundingAmountShort = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.fundingAmountLong = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.blockHeight = reader.int64();
          break;
        case 6:
          message.blockTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FundingRateBlock>): FundingRateBlock {
    const message = createBaseFundingRateBlock();
    message.fundingRateLong = object.fundingRateLong ?? "";
    message.fundingRateShort = object.fundingRateShort ?? "";
    message.fundingAmountShort = object.fundingAmountShort ?? "";
    message.fundingAmountLong = object.fundingAmountLong ?? "";
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? BigInt(object.blockTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FundingRateBlockAmino): FundingRateBlock {
    const message = createBaseFundingRateBlock();
    if (object.funding_rate_long !== undefined && object.funding_rate_long !== null) {
      message.fundingRateLong = object.funding_rate_long;
    }
    if (object.funding_rate_short !== undefined && object.funding_rate_short !== null) {
      message.fundingRateShort = object.funding_rate_short;
    }
    if (object.funding_amount_short !== undefined && object.funding_amount_short !== null) {
      message.fundingAmountShort = object.funding_amount_short;
    }
    if (object.funding_amount_long !== undefined && object.funding_amount_long !== null) {
      message.fundingAmountLong = object.funding_amount_long;
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = BigInt(object.block_time);
    }
    return message;
  },
  toAmino(message: FundingRateBlock): FundingRateBlockAmino {
    const obj: any = {};
    obj.funding_rate_long = message.fundingRateLong === "" ? undefined : message.fundingRateLong;
    obj.funding_rate_short = message.fundingRateShort === "" ? undefined : message.fundingRateShort;
    obj.funding_amount_short = message.fundingAmountShort === "" ? undefined : message.fundingAmountShort;
    obj.funding_amount_long = message.fundingAmountLong === "" ? undefined : message.fundingAmountLong;
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    obj.block_time = message.blockTime !== BigInt(0) ? message.blockTime?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FundingRateBlockAminoMsg): FundingRateBlock {
    return FundingRateBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: FundingRateBlockProtoMsg): FundingRateBlock {
    return FundingRateBlock.decode(message.value);
  },
  toProto(message: FundingRateBlock): Uint8Array {
    return FundingRateBlock.encode(message).finish();
  },
  toProtoMsg(message: FundingRateBlock): FundingRateBlockProtoMsg {
    return {
      typeUrl: "/elys.perpetual.FundingRateBlock",
      value: FundingRateBlock.encode(message).finish()
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
    const message = createBaseWhiteList();
    message.validatorList = object.validator_list?.map(e => e) || [];
    return message;
  },
  toAmino(message: WhiteList): WhiteListAmino {
    const obj: any = {};
    if (message.validatorList) {
      obj.validator_list = message.validatorList.map(e => e);
    } else {
      obj.validator_list = message.validatorList;
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
function createBasePositionRequest(): PositionRequest {
  return {
    address: "",
    id: BigInt(0)
  };
}
export const PositionRequest = {
  typeUrl: "/elys.perpetual.PositionRequest",
  encode(message: PositionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionRequest>): PositionRequest {
    const message = createBasePositionRequest();
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PositionRequestAmino): PositionRequest {
    const message = createBasePositionRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: PositionRequest): PositionRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionRequestAminoMsg): PositionRequest {
    return PositionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionRequestProtoMsg): PositionRequest {
    return PositionRequest.decode(message.value);
  },
  toProto(message: PositionRequest): Uint8Array {
    return PositionRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionRequest): PositionRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.PositionRequest",
      value: PositionRequest.encode(message).finish()
    };
  }
};