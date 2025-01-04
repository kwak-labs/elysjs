//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Position, MTP, MTPAmino, MTPSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "./pool";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface Fees {
  totalFeesBaseCurrency: string;
  borrowInterestFeesLiabilityAsset: string;
  borrowInterestFeesBaseCurrency: string;
  fundingFeesLiquidityAsset: string;
  fundingFeesBaseCurrency: string;
}
export interface FeesProtoMsg {
  typeUrl: "/elys.perpetual.Fees";
  value: Uint8Array;
}
export interface FeesAmino {
  total_fees_base_currency?: string;
  borrow_interest_fees_liability_asset?: string;
  borrow_interest_fees_base_currency?: string;
  funding_fees_liquidity_asset?: string;
  funding_fees_base_currency?: string;
}
export interface FeesAminoMsg {
  type: "/elys.perpetual.Fees";
  value: FeesAmino;
}
export interface FeesSDKType {
  total_fees_base_currency: string;
  borrow_interest_fees_liability_asset: string;
  borrow_interest_fees_base_currency: string;
  funding_fees_liquidity_asset: string;
  funding_fees_base_currency: string;
}
export interface MtpAndPrice {
  mtp?: MTP;
  tradingAssetPrice: string;
  pnl: Coin;
  effectiveLeverage: string;
  liquidationPrice: string;
  fees?: Fees;
}
export interface MtpAndPriceProtoMsg {
  typeUrl: "/elys.perpetual.MtpAndPrice";
  value: Uint8Array;
}
export interface MtpAndPriceAmino {
  mtp?: MTPAmino;
  trading_asset_price?: string;
  pnl?: CoinAmino;
  effective_leverage?: string;
  liquidation_price?: string;
  fees?: FeesAmino;
}
export interface MtpAndPriceAminoMsg {
  type: "/elys.perpetual.MtpAndPrice";
  value: MtpAndPriceAmino;
}
export interface MtpAndPriceSDKType {
  mtp?: MTPSDKType;
  trading_asset_price: string;
  pnl: CoinSDKType;
  effective_leverage: string;
  liquidation_price: string;
  fees?: FeesSDKType;
}
/** ParamsRequest is request type for the Query/Params RPC method. */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/elys.perpetual.ParamsRequest";
  value: Uint8Array;
}
/** ParamsRequest is request type for the Query/Params RPC method. */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "/elys.perpetual.ParamsRequest";
  value: ParamsRequestAmino;
}
/** ParamsRequest is request type for the Query/Params RPC method. */
export interface ParamsRequestSDKType {}
/** ParamsResponse is response type for the Query/Params RPC method. */
export interface ParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/elys.perpetual.ParamsResponse";
  value: Uint8Array;
}
/** ParamsResponse is response type for the Query/Params RPC method. */
export interface ParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "/elys.perpetual.ParamsResponse";
  value: ParamsResponseAmino;
}
/** ParamsResponse is response type for the Query/Params RPC method. */
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface PositionsRequest {
  pagination?: PageRequest;
}
export interface PositionsRequestProtoMsg {
  typeUrl: "/elys.perpetual.PositionsRequest";
  value: Uint8Array;
}
export interface PositionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface PositionsRequestAminoMsg {
  type: "/elys.perpetual.PositionsRequest";
  value: PositionsRequestAmino;
}
export interface PositionsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface PositionsResponse {
  mtps: MtpAndPrice[];
  pagination?: PageResponse;
}
export interface PositionsResponseProtoMsg {
  typeUrl: "/elys.perpetual.PositionsResponse";
  value: Uint8Array;
}
export interface PositionsResponseAmino {
  mtps?: MtpAndPriceAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsResponseAminoMsg {
  type: "/elys.perpetual.PositionsResponse";
  value: PositionsResponseAmino;
}
export interface PositionsResponseSDKType {
  mtps: MtpAndPriceSDKType[];
  pagination?: PageResponseSDKType;
}
export interface PositionsByPoolRequest {
  ammPoolId: bigint;
  pagination?: PageRequest;
}
export interface PositionsByPoolRequestProtoMsg {
  typeUrl: "/elys.perpetual.PositionsByPoolRequest";
  value: Uint8Array;
}
export interface PositionsByPoolRequestAmino {
  amm_pool_id?: string;
  pagination?: PageRequestAmino;
}
export interface PositionsByPoolRequestAminoMsg {
  type: "/elys.perpetual.PositionsByPoolRequest";
  value: PositionsByPoolRequestAmino;
}
export interface PositionsByPoolRequestSDKType {
  amm_pool_id: bigint;
  pagination?: PageRequestSDKType;
}
export interface PositionsByPoolResponse {
  mtps: MtpAndPrice[];
  pagination?: PageResponse;
}
export interface PositionsByPoolResponseProtoMsg {
  typeUrl: "/elys.perpetual.PositionsByPoolResponse";
  value: Uint8Array;
}
export interface PositionsByPoolResponseAmino {
  mtps?: MtpAndPriceAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsByPoolResponseAminoMsg {
  type: "/elys.perpetual.PositionsByPoolResponse";
  value: PositionsByPoolResponseAmino;
}
export interface PositionsByPoolResponseSDKType {
  mtps: MtpAndPriceSDKType[];
  pagination?: PageResponseSDKType;
}
export interface StatusRequest {}
export interface StatusRequestProtoMsg {
  typeUrl: "/elys.perpetual.StatusRequest";
  value: Uint8Array;
}
export interface StatusRequestAmino {}
export interface StatusRequestAminoMsg {
  type: "/elys.perpetual.StatusRequest";
  value: StatusRequestAmino;
}
export interface StatusRequestSDKType {}
export interface StatusResponse {
  openMtpCount: bigint;
  lifetimeMtpCount: bigint;
}
export interface StatusResponseProtoMsg {
  typeUrl: "/elys.perpetual.StatusResponse";
  value: Uint8Array;
}
export interface StatusResponseAmino {
  open_mtp_count?: string;
  lifetime_mtp_count?: string;
}
export interface StatusResponseAminoMsg {
  type: "/elys.perpetual.StatusResponse";
  value: StatusResponseAmino;
}
export interface StatusResponseSDKType {
  open_mtp_count: bigint;
  lifetime_mtp_count: bigint;
}
export interface PositionsForAddressRequest {
  address: string;
  pagination?: PageRequest;
}
export interface PositionsForAddressRequestProtoMsg {
  typeUrl: "/elys.perpetual.PositionsForAddressRequest";
  value: Uint8Array;
}
export interface PositionsForAddressRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface PositionsForAddressRequestAminoMsg {
  type: "/elys.perpetual.PositionsForAddressRequest";
  value: PositionsForAddressRequestAmino;
}
export interface PositionsForAddressRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface PositionsForAddressResponse {
  mtps: MtpAndPrice[];
  pagination?: PageResponse;
}
export interface PositionsForAddressResponseProtoMsg {
  typeUrl: "/elys.perpetual.PositionsForAddressResponse";
  value: Uint8Array;
}
export interface PositionsForAddressResponseAmino {
  mtps?: MtpAndPriceAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsForAddressResponseAminoMsg {
  type: "/elys.perpetual.PositionsForAddressResponse";
  value: PositionsForAddressResponseAmino;
}
export interface PositionsForAddressResponseSDKType {
  mtps: MtpAndPriceSDKType[];
  pagination?: PageResponseSDKType;
}
export interface WhitelistRequest {
  pagination?: PageRequest;
}
export interface WhitelistRequestProtoMsg {
  typeUrl: "/elys.perpetual.WhitelistRequest";
  value: Uint8Array;
}
export interface WhitelistRequestAmino {
  pagination?: PageRequestAmino;
}
export interface WhitelistRequestAminoMsg {
  type: "/elys.perpetual.WhitelistRequest";
  value: WhitelistRequestAmino;
}
export interface WhitelistRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface WhitelistResponse {
  whitelist: string[];
  pagination?: PageResponse;
}
export interface WhitelistResponseProtoMsg {
  typeUrl: "/elys.perpetual.WhitelistResponse";
  value: Uint8Array;
}
export interface WhitelistResponseAmino {
  whitelist?: string[];
  pagination?: PageResponseAmino;
}
export interface WhitelistResponseAminoMsg {
  type: "/elys.perpetual.WhitelistResponse";
  value: WhitelistResponseAmino;
}
export interface WhitelistResponseSDKType {
  whitelist: string[];
  pagination?: PageResponseSDKType;
}
export interface IsWhitelistedRequest {
  address: string;
}
export interface IsWhitelistedRequestProtoMsg {
  typeUrl: "/elys.perpetual.IsWhitelistedRequest";
  value: Uint8Array;
}
export interface IsWhitelistedRequestAmino {
  address?: string;
}
export interface IsWhitelistedRequestAminoMsg {
  type: "/elys.perpetual.IsWhitelistedRequest";
  value: IsWhitelistedRequestAmino;
}
export interface IsWhitelistedRequestSDKType {
  address: string;
}
export interface IsWhitelistedResponse {
  address: string;
  isWhitelisted: boolean;
}
export interface IsWhitelistedResponseProtoMsg {
  typeUrl: "/elys.perpetual.IsWhitelistedResponse";
  value: Uint8Array;
}
export interface IsWhitelistedResponseAmino {
  address?: string;
  is_whitelisted?: boolean;
}
export interface IsWhitelistedResponseAminoMsg {
  type: "/elys.perpetual.IsWhitelistedResponse";
  value: IsWhitelistedResponseAmino;
}
export interface IsWhitelistedResponseSDKType {
  address: string;
  is_whitelisted: boolean;
}
export interface QueryGetPoolRequest {
  index: bigint;
}
export interface QueryGetPoolRequestProtoMsg {
  typeUrl: "/elys.perpetual.QueryGetPoolRequest";
  value: Uint8Array;
}
export interface QueryGetPoolRequestAmino {
  index?: string;
}
export interface QueryGetPoolRequestAminoMsg {
  type: "/elys.perpetual.QueryGetPoolRequest";
  value: QueryGetPoolRequestAmino;
}
export interface QueryGetPoolRequestSDKType {
  index: bigint;
}
export interface QueryGetPoolResponse {
  pool: PoolResponse;
}
export interface QueryGetPoolResponseProtoMsg {
  typeUrl: "/elys.perpetual.QueryGetPoolResponse";
  value: Uint8Array;
}
export interface QueryGetPoolResponseAmino {
  pool?: PoolResponseAmino;
}
export interface QueryGetPoolResponseAminoMsg {
  type: "/elys.perpetual.QueryGetPoolResponse";
  value: QueryGetPoolResponseAmino;
}
export interface QueryGetPoolResponseSDKType {
  pool: PoolResponseSDKType;
}
export interface QueryAllPoolRequest {
  pagination?: PageRequest;
}
export interface QueryAllPoolRequestProtoMsg {
  typeUrl: "/elys.perpetual.QueryAllPoolRequest";
  value: Uint8Array;
}
export interface QueryAllPoolRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPoolRequestAminoMsg {
  type: "/elys.perpetual.QueryAllPoolRequest";
  value: QueryAllPoolRequestAmino;
}
export interface QueryAllPoolRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPoolResponse {
  pool: PoolResponse[];
  pagination?: PageResponse;
}
export interface QueryAllPoolResponseProtoMsg {
  typeUrl: "/elys.perpetual.QueryAllPoolResponse";
  value: Uint8Array;
}
export interface QueryAllPoolResponseAmino {
  pool?: PoolResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPoolResponseAminoMsg {
  type: "/elys.perpetual.QueryAllPoolResponse";
  value: QueryAllPoolResponseAmino;
}
export interface QueryAllPoolResponseSDKType {
  pool: PoolResponseSDKType[];
  pagination?: PageResponseSDKType;
}
export interface MTPRequest {
  address: string;
  id: bigint;
}
export interface MTPRequestProtoMsg {
  typeUrl: "/elys.perpetual.MTPRequest";
  value: Uint8Array;
}
export interface MTPRequestAmino {
  address?: string;
  id?: string;
}
export interface MTPRequestAminoMsg {
  type: "/elys.perpetual.MTPRequest";
  value: MTPRequestAmino;
}
export interface MTPRequestSDKType {
  address: string;
  id: bigint;
}
export interface MTPResponse {
  mtp?: MtpAndPrice;
}
export interface MTPResponseProtoMsg {
  typeUrl: "/elys.perpetual.MTPResponse";
  value: Uint8Array;
}
export interface MTPResponseAmino {
  mtp?: MtpAndPriceAmino;
}
export interface MTPResponseAminoMsg {
  type: "/elys.perpetual.MTPResponse";
  value: MTPResponseAmino;
}
export interface MTPResponseSDKType {
  mtp?: MtpAndPriceSDKType;
}
export interface QueryOpenEstimationRequest {
  position: Position;
  leverage: string;
  tradingAsset: string;
  collateral: Coin;
  address: string;
  takeProfitPrice: string;
  poolId: bigint;
  limitPrice: string;
}
export interface QueryOpenEstimationRequestProtoMsg {
  typeUrl: "/elys.perpetual.QueryOpenEstimationRequest";
  value: Uint8Array;
}
export interface QueryOpenEstimationRequestAmino {
  position?: Position;
  leverage?: string;
  trading_asset?: string;
  collateral?: CoinAmino;
  address?: string;
  take_profit_price?: string;
  poolId?: string;
  limit_price?: string;
}
export interface QueryOpenEstimationRequestAminoMsg {
  type: "/elys.perpetual.QueryOpenEstimationRequest";
  value: QueryOpenEstimationRequestAmino;
}
export interface QueryOpenEstimationRequestSDKType {
  position: Position;
  leverage: string;
  trading_asset: string;
  collateral: CoinSDKType;
  address: string;
  take_profit_price: string;
  poolId: bigint;
  limit_price: string;
}
export interface QueryOpenEstimationResponse {
  position: Position;
  effectiveLeverage: string;
  tradingAsset: string;
  collateral: Coin;
  hourlyInterestRate: string;
  positionSize: Coin;
  openPrice: string;
  takeProfitPrice: string;
  liquidationPrice: string;
  estimatedPnl: Coin;
  availableLiquidity: Coin;
  slippage: string;
  borrowInterestRate: string;
  fundingRate: string;
  priceImpact: string;
  custody: Coin;
  liabilities: Coin;
  limitPrice: string;
  weightBreakingFee: string;
}
export interface QueryOpenEstimationResponseProtoMsg {
  typeUrl: "/elys.perpetual.QueryOpenEstimationResponse";
  value: Uint8Array;
}
export interface QueryOpenEstimationResponseAmino {
  position?: Position;
  effective_leverage?: string;
  trading_asset?: string;
  collateral?: CoinAmino;
  hourly_interest_rate?: string;
  position_size?: CoinAmino;
  open_price?: string;
  take_profit_price?: string;
  liquidation_price?: string;
  estimated_pnl?: CoinAmino;
  available_liquidity?: CoinAmino;
  slippage?: string;
  borrow_interest_rate?: string;
  funding_rate?: string;
  price_impact?: string;
  custody?: CoinAmino;
  liabilities?: CoinAmino;
  limit_price?: string;
  weight_breaking_fee?: string;
}
export interface QueryOpenEstimationResponseAminoMsg {
  type: "/elys.perpetual.QueryOpenEstimationResponse";
  value: QueryOpenEstimationResponseAmino;
}
export interface QueryOpenEstimationResponseSDKType {
  position: Position;
  effective_leverage: string;
  trading_asset: string;
  collateral: CoinSDKType;
  hourly_interest_rate: string;
  position_size: CoinSDKType;
  open_price: string;
  take_profit_price: string;
  liquidation_price: string;
  estimated_pnl: CoinSDKType;
  available_liquidity: CoinSDKType;
  slippage: string;
  borrow_interest_rate: string;
  funding_rate: string;
  price_impact: string;
  custody: CoinSDKType;
  liabilities: CoinSDKType;
  limit_price: string;
  weight_breaking_fee: string;
}
export interface PoolResponse {
  ammPoolId: bigint;
  health: string;
  borrowInterestRate: string;
  poolAssetsLong: PoolAsset[];
  poolAssetsShort: PoolAsset[];
  lastHeightBorrowInterestRateComputed: bigint;
  /** funding rate, if positive longs pay shorts, if negative shorts pay longs */
  fundingRate: string;
  netOpenInterest: string;
  /**
   * Rate at which long pays/receive from short
   * if negative longs pay, if positive long receives
   */
  longRate: string;
  shortRate: string;
  totalLiabilities: Coin;
  totalLongOpenInterest: string;
  totalShortOpenInterest: string;
}
export interface PoolResponseProtoMsg {
  typeUrl: "/elys.perpetual.PoolResponse";
  value: Uint8Array;
}
export interface PoolResponseAmino {
  amm_pool_id?: string;
  health?: string;
  borrow_interest_rate?: string;
  pool_assets_long?: PoolAssetAmino[];
  pool_assets_short?: PoolAssetAmino[];
  last_height_borrow_interest_rate_computed?: string;
  /** funding rate, if positive longs pay shorts, if negative shorts pay longs */
  funding_rate?: string;
  net_open_interest?: string;
  /**
   * Rate at which long pays/receive from short
   * if negative longs pay, if positive long receives
   */
  long_rate?: string;
  short_rate?: string;
  total_liabilities?: CoinAmino;
  total_long_open_interest?: string;
  total_short_open_interest?: string;
}
export interface PoolResponseAminoMsg {
  type: "/elys.perpetual.PoolResponse";
  value: PoolResponseAmino;
}
export interface PoolResponseSDKType {
  amm_pool_id: bigint;
  health: string;
  borrow_interest_rate: string;
  pool_assets_long: PoolAssetSDKType[];
  pool_assets_short: PoolAssetSDKType[];
  last_height_borrow_interest_rate_computed: bigint;
  funding_rate: string;
  net_open_interest: string;
  long_rate: string;
  short_rate: string;
  total_liabilities: CoinSDKType;
  total_long_open_interest: string;
  total_short_open_interest: string;
}
export interface QueryCloseEstimationRequest {
  address: string;
  positionId: bigint;
  closeAmount: string;
}
export interface QueryCloseEstimationRequestProtoMsg {
  typeUrl: "/elys.perpetual.QueryCloseEstimationRequest";
  value: Uint8Array;
}
export interface QueryCloseEstimationRequestAmino {
  address?: string;
  position_id?: string;
  close_amount?: string;
}
export interface QueryCloseEstimationRequestAminoMsg {
  type: "/elys.perpetual.QueryCloseEstimationRequest";
  value: QueryCloseEstimationRequestAmino;
}
export interface QueryCloseEstimationRequestSDKType {
  address: string;
  position_id: bigint;
  close_amount: string;
}
export interface QueryCloseEstimationResponse {
  position: Position;
  positionSize: Coin;
  liabilities: Coin;
  priceImpact: string;
  liquidationPrice: string;
  maxCloseAmount: string;
  borrowInterestUnpaidLiability: Coin;
  returningAmount: Coin;
  payingLiabilities: Coin;
  closingPrice: string;
  custody: Coin;
  collateral: Coin;
  weightBreakingFee: string;
  slippage: string;
}
export interface QueryCloseEstimationResponseProtoMsg {
  typeUrl: "/elys.perpetual.QueryCloseEstimationResponse";
  value: Uint8Array;
}
export interface QueryCloseEstimationResponseAmino {
  position?: Position;
  position_size?: CoinAmino;
  liabilities?: CoinAmino;
  price_impact?: string;
  liquidation_price?: string;
  max_close_amount?: string;
  borrow_interest_unpaid_liability?: CoinAmino;
  returning_amount?: CoinAmino;
  paying_liabilities?: CoinAmino;
  closing_price?: string;
  custody?: CoinAmino;
  collateral?: CoinAmino;
  weight_breaking_fee?: string;
  slippage?: string;
}
export interface QueryCloseEstimationResponseAminoMsg {
  type: "/elys.perpetual.QueryCloseEstimationResponse";
  value: QueryCloseEstimationResponseAmino;
}
export interface QueryCloseEstimationResponseSDKType {
  position: Position;
  position_size: CoinSDKType;
  liabilities: CoinSDKType;
  price_impact: string;
  liquidation_price: string;
  max_close_amount: string;
  borrow_interest_unpaid_liability: CoinSDKType;
  returning_amount: CoinSDKType;
  paying_liabilities: CoinSDKType;
  closing_price: string;
  custody: CoinSDKType;
  collateral: CoinSDKType;
  weight_breaking_fee: string;
  slippage: string;
}
function createBaseFees(): Fees {
  return {
    totalFeesBaseCurrency: "",
    borrowInterestFeesLiabilityAsset: "",
    borrowInterestFeesBaseCurrency: "",
    fundingFeesLiquidityAsset: "",
    fundingFeesBaseCurrency: ""
  };
}
export const Fees = {
  typeUrl: "/elys.perpetual.Fees",
  encode(message: Fees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalFeesBaseCurrency !== "") {
      writer.uint32(10).string(message.totalFeesBaseCurrency);
    }
    if (message.borrowInterestFeesLiabilityAsset !== "") {
      writer.uint32(18).string(message.borrowInterestFeesLiabilityAsset);
    }
    if (message.borrowInterestFeesBaseCurrency !== "") {
      writer.uint32(26).string(message.borrowInterestFeesBaseCurrency);
    }
    if (message.fundingFeesLiquidityAsset !== "") {
      writer.uint32(34).string(message.fundingFeesLiquidityAsset);
    }
    if (message.fundingFeesBaseCurrency !== "") {
      writer.uint32(42).string(message.fundingFeesBaseCurrency);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Fees {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalFeesBaseCurrency = reader.string();
          break;
        case 2:
          message.borrowInterestFeesLiabilityAsset = reader.string();
          break;
        case 3:
          message.borrowInterestFeesBaseCurrency = reader.string();
          break;
        case 4:
          message.fundingFeesLiquidityAsset = reader.string();
          break;
        case 5:
          message.fundingFeesBaseCurrency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Fees>): Fees {
    const message = createBaseFees();
    message.totalFeesBaseCurrency = object.totalFeesBaseCurrency ?? "";
    message.borrowInterestFeesLiabilityAsset = object.borrowInterestFeesLiabilityAsset ?? "";
    message.borrowInterestFeesBaseCurrency = object.borrowInterestFeesBaseCurrency ?? "";
    message.fundingFeesLiquidityAsset = object.fundingFeesLiquidityAsset ?? "";
    message.fundingFeesBaseCurrency = object.fundingFeesBaseCurrency ?? "";
    return message;
  },
  fromAmino(object: FeesAmino): Fees {
    const message = createBaseFees();
    if (object.total_fees_base_currency !== undefined && object.total_fees_base_currency !== null) {
      message.totalFeesBaseCurrency = object.total_fees_base_currency;
    }
    if (object.borrow_interest_fees_liability_asset !== undefined && object.borrow_interest_fees_liability_asset !== null) {
      message.borrowInterestFeesLiabilityAsset = object.borrow_interest_fees_liability_asset;
    }
    if (object.borrow_interest_fees_base_currency !== undefined && object.borrow_interest_fees_base_currency !== null) {
      message.borrowInterestFeesBaseCurrency = object.borrow_interest_fees_base_currency;
    }
    if (object.funding_fees_liquidity_asset !== undefined && object.funding_fees_liquidity_asset !== null) {
      message.fundingFeesLiquidityAsset = object.funding_fees_liquidity_asset;
    }
    if (object.funding_fees_base_currency !== undefined && object.funding_fees_base_currency !== null) {
      message.fundingFeesBaseCurrency = object.funding_fees_base_currency;
    }
    return message;
  },
  toAmino(message: Fees): FeesAmino {
    const obj: any = {};
    obj.total_fees_base_currency = message.totalFeesBaseCurrency === "" ? undefined : message.totalFeesBaseCurrency;
    obj.borrow_interest_fees_liability_asset = message.borrowInterestFeesLiabilityAsset === "" ? undefined : message.borrowInterestFeesLiabilityAsset;
    obj.borrow_interest_fees_base_currency = message.borrowInterestFeesBaseCurrency === "" ? undefined : message.borrowInterestFeesBaseCurrency;
    obj.funding_fees_liquidity_asset = message.fundingFeesLiquidityAsset === "" ? undefined : message.fundingFeesLiquidityAsset;
    obj.funding_fees_base_currency = message.fundingFeesBaseCurrency === "" ? undefined : message.fundingFeesBaseCurrency;
    return obj;
  },
  fromAminoMsg(object: FeesAminoMsg): Fees {
    return Fees.fromAmino(object.value);
  },
  fromProtoMsg(message: FeesProtoMsg): Fees {
    return Fees.decode(message.value);
  },
  toProto(message: Fees): Uint8Array {
    return Fees.encode(message).finish();
  },
  toProtoMsg(message: Fees): FeesProtoMsg {
    return {
      typeUrl: "/elys.perpetual.Fees",
      value: Fees.encode(message).finish()
    };
  }
};
function createBaseMtpAndPrice(): MtpAndPrice {
  return {
    mtp: undefined,
    tradingAssetPrice: "",
    pnl: Coin.fromPartial({}),
    effectiveLeverage: "",
    liquidationPrice: "",
    fees: undefined
  };
}
export const MtpAndPrice = {
  typeUrl: "/elys.perpetual.MtpAndPrice",
  encode(message: MtpAndPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mtp !== undefined) {
      MTP.encode(message.mtp, writer.uint32(10).fork()).ldelim();
    }
    if (message.tradingAssetPrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.tradingAssetPrice, 18).atomics);
    }
    if (message.pnl !== undefined) {
      Coin.encode(message.pnl, writer.uint32(26).fork()).ldelim();
    }
    if (message.effectiveLeverage !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.effectiveLeverage, 18).atomics);
    }
    if (message.liquidationPrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.liquidationPrice, 18).atomics);
    }
    if (message.fees !== undefined) {
      Fees.encode(message.fees, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MtpAndPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMtpAndPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mtp = MTP.decode(reader, reader.uint32());
          break;
        case 2:
          message.tradingAssetPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.pnl = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.effectiveLeverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.liquidationPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.fees = Fees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MtpAndPrice>): MtpAndPrice {
    const message = createBaseMtpAndPrice();
    message.mtp = object.mtp !== undefined && object.mtp !== null ? MTP.fromPartial(object.mtp) : undefined;
    message.tradingAssetPrice = object.tradingAssetPrice ?? "";
    message.pnl = object.pnl !== undefined && object.pnl !== null ? Coin.fromPartial(object.pnl) : undefined;
    message.effectiveLeverage = object.effectiveLeverage ?? "";
    message.liquidationPrice = object.liquidationPrice ?? "";
    message.fees = object.fees !== undefined && object.fees !== null ? Fees.fromPartial(object.fees) : undefined;
    return message;
  },
  fromAmino(object: MtpAndPriceAmino): MtpAndPrice {
    const message = createBaseMtpAndPrice();
    if (object.mtp !== undefined && object.mtp !== null) {
      message.mtp = MTP.fromAmino(object.mtp);
    }
    if (object.trading_asset_price !== undefined && object.trading_asset_price !== null) {
      message.tradingAssetPrice = object.trading_asset_price;
    }
    if (object.pnl !== undefined && object.pnl !== null) {
      message.pnl = Coin.fromAmino(object.pnl);
    }
    if (object.effective_leverage !== undefined && object.effective_leverage !== null) {
      message.effectiveLeverage = object.effective_leverage;
    }
    if (object.liquidation_price !== undefined && object.liquidation_price !== null) {
      message.liquidationPrice = object.liquidation_price;
    }
    if (object.fees !== undefined && object.fees !== null) {
      message.fees = Fees.fromAmino(object.fees);
    }
    return message;
  },
  toAmino(message: MtpAndPrice): MtpAndPriceAmino {
    const obj: any = {};
    obj.mtp = message.mtp ? MTP.toAmino(message.mtp) : undefined;
    obj.trading_asset_price = message.tradingAssetPrice === "" ? undefined : message.tradingAssetPrice;
    obj.pnl = message.pnl ? Coin.toAmino(message.pnl) : undefined;
    obj.effective_leverage = message.effectiveLeverage === "" ? undefined : message.effectiveLeverage;
    obj.liquidation_price = message.liquidationPrice === "" ? undefined : message.liquidationPrice;
    obj.fees = message.fees ? Fees.toAmino(message.fees) : undefined;
    return obj;
  },
  fromAminoMsg(object: MtpAndPriceAminoMsg): MtpAndPrice {
    return MtpAndPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: MtpAndPriceProtoMsg): MtpAndPrice {
    return MtpAndPrice.decode(message.value);
  },
  toProto(message: MtpAndPrice): Uint8Array {
    return MtpAndPrice.encode(message).finish();
  },
  toProtoMsg(message: MtpAndPrice): MtpAndPriceProtoMsg {
    return {
      typeUrl: "/elys.perpetual.MtpAndPrice",
      value: MtpAndPrice.encode(message).finish()
    };
  }
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/elys.perpetual.ParamsRequest",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/elys.perpetual.ParamsResponse",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};
function createBasePositionsRequest(): PositionsRequest {
  return {
    pagination: undefined
  };
}
export const PositionsRequest = {
  typeUrl: "/elys.perpetual.PositionsRequest",
  encode(message: PositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionsRequest>): PositionsRequest {
    const message = createBasePositionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsRequestAmino): PositionsRequest {
    const message = createBasePositionsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsRequest): PositionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsRequestAminoMsg): PositionsRequest {
    return PositionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsRequestProtoMsg): PositionsRequest {
    return PositionsRequest.decode(message.value);
  },
  toProto(message: PositionsRequest): Uint8Array {
    return PositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionsRequest): PositionsRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.PositionsRequest",
      value: PositionsRequest.encode(message).finish()
    };
  }
};
function createBasePositionsResponse(): PositionsResponse {
  return {
    mtps: [],
    pagination: undefined
  };
}
export const PositionsResponse = {
  typeUrl: "/elys.perpetual.PositionsResponse",
  encode(message: PositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.mtps) {
      MtpAndPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mtps.push(MtpAndPrice.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionsResponse>): PositionsResponse {
    const message = createBasePositionsResponse();
    message.mtps = object.mtps?.map(e => MtpAndPrice.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsResponseAmino): PositionsResponse {
    const message = createBasePositionsResponse();
    message.mtps = object.mtps?.map(e => MtpAndPrice.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsResponse): PositionsResponseAmino {
    const obj: any = {};
    if (message.mtps) {
      obj.mtps = message.mtps.map(e => e ? MtpAndPrice.toAmino(e) : undefined);
    } else {
      obj.mtps = message.mtps;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsResponseAminoMsg): PositionsResponse {
    return PositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsResponseProtoMsg): PositionsResponse {
    return PositionsResponse.decode(message.value);
  },
  toProto(message: PositionsResponse): Uint8Array {
    return PositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionsResponse): PositionsResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.PositionsResponse",
      value: PositionsResponse.encode(message).finish()
    };
  }
};
function createBasePositionsByPoolRequest(): PositionsByPoolRequest {
  return {
    ammPoolId: BigInt(0),
    pagination: undefined
  };
}
export const PositionsByPoolRequest = {
  typeUrl: "/elys.perpetual.PositionsByPoolRequest",
  encode(message: PositionsByPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.ammPoolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsByPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsByPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ammPoolId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionsByPoolRequest>): PositionsByPoolRequest {
    const message = createBasePositionsByPoolRequest();
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsByPoolRequestAmino): PositionsByPoolRequest {
    const message = createBasePositionsByPoolRequest();
    if (object.amm_pool_id !== undefined && object.amm_pool_id !== null) {
      message.ammPoolId = BigInt(object.amm_pool_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsByPoolRequest): PositionsByPoolRequestAmino {
    const obj: any = {};
    obj.amm_pool_id = message.ammPoolId !== BigInt(0) ? message.ammPoolId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsByPoolRequestAminoMsg): PositionsByPoolRequest {
    return PositionsByPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsByPoolRequestProtoMsg): PositionsByPoolRequest {
    return PositionsByPoolRequest.decode(message.value);
  },
  toProto(message: PositionsByPoolRequest): Uint8Array {
    return PositionsByPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionsByPoolRequest): PositionsByPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.PositionsByPoolRequest",
      value: PositionsByPoolRequest.encode(message).finish()
    };
  }
};
function createBasePositionsByPoolResponse(): PositionsByPoolResponse {
  return {
    mtps: [],
    pagination: undefined
  };
}
export const PositionsByPoolResponse = {
  typeUrl: "/elys.perpetual.PositionsByPoolResponse",
  encode(message: PositionsByPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.mtps) {
      MtpAndPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsByPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsByPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mtps.push(MtpAndPrice.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionsByPoolResponse>): PositionsByPoolResponse {
    const message = createBasePositionsByPoolResponse();
    message.mtps = object.mtps?.map(e => MtpAndPrice.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsByPoolResponseAmino): PositionsByPoolResponse {
    const message = createBasePositionsByPoolResponse();
    message.mtps = object.mtps?.map(e => MtpAndPrice.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsByPoolResponse): PositionsByPoolResponseAmino {
    const obj: any = {};
    if (message.mtps) {
      obj.mtps = message.mtps.map(e => e ? MtpAndPrice.toAmino(e) : undefined);
    } else {
      obj.mtps = message.mtps;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsByPoolResponseAminoMsg): PositionsByPoolResponse {
    return PositionsByPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsByPoolResponseProtoMsg): PositionsByPoolResponse {
    return PositionsByPoolResponse.decode(message.value);
  },
  toProto(message: PositionsByPoolResponse): Uint8Array {
    return PositionsByPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionsByPoolResponse): PositionsByPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.PositionsByPoolResponse",
      value: PositionsByPoolResponse.encode(message).finish()
    };
  }
};
function createBaseStatusRequest(): StatusRequest {
  return {};
}
export const StatusRequest = {
  typeUrl: "/elys.perpetual.StatusRequest",
  encode(_: StatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<StatusRequest>): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
  fromAmino(_: StatusRequestAmino): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
  toAmino(_: StatusRequest): StatusRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: StatusRequestAminoMsg): StatusRequest {
    return StatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusRequestProtoMsg): StatusRequest {
    return StatusRequest.decode(message.value);
  },
  toProto(message: StatusRequest): Uint8Array {
    return StatusRequest.encode(message).finish();
  },
  toProtoMsg(message: StatusRequest): StatusRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.StatusRequest",
      value: StatusRequest.encode(message).finish()
    };
  }
};
function createBaseStatusResponse(): StatusResponse {
  return {
    openMtpCount: BigInt(0),
    lifetimeMtpCount: BigInt(0)
  };
}
export const StatusResponse = {
  typeUrl: "/elys.perpetual.StatusResponse",
  encode(message: StatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.openMtpCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.openMtpCount);
    }
    if (message.lifetimeMtpCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.lifetimeMtpCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.openMtpCount = reader.uint64();
          break;
        case 2:
          message.lifetimeMtpCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StatusResponse>): StatusResponse {
    const message = createBaseStatusResponse();
    message.openMtpCount = object.openMtpCount !== undefined && object.openMtpCount !== null ? BigInt(object.openMtpCount.toString()) : BigInt(0);
    message.lifetimeMtpCount = object.lifetimeMtpCount !== undefined && object.lifetimeMtpCount !== null ? BigInt(object.lifetimeMtpCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StatusResponseAmino): StatusResponse {
    const message = createBaseStatusResponse();
    if (object.open_mtp_count !== undefined && object.open_mtp_count !== null) {
      message.openMtpCount = BigInt(object.open_mtp_count);
    }
    if (object.lifetime_mtp_count !== undefined && object.lifetime_mtp_count !== null) {
      message.lifetimeMtpCount = BigInt(object.lifetime_mtp_count);
    }
    return message;
  },
  toAmino(message: StatusResponse): StatusResponseAmino {
    const obj: any = {};
    obj.open_mtp_count = message.openMtpCount !== BigInt(0) ? message.openMtpCount?.toString() : undefined;
    obj.lifetime_mtp_count = message.lifetimeMtpCount !== BigInt(0) ? message.lifetimeMtpCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StatusResponseAminoMsg): StatusResponse {
    return StatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusResponseProtoMsg): StatusResponse {
    return StatusResponse.decode(message.value);
  },
  toProto(message: StatusResponse): Uint8Array {
    return StatusResponse.encode(message).finish();
  },
  toProtoMsg(message: StatusResponse): StatusResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.StatusResponse",
      value: StatusResponse.encode(message).finish()
    };
  }
};
function createBasePositionsForAddressRequest(): PositionsForAddressRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const PositionsForAddressRequest = {
  typeUrl: "/elys.perpetual.PositionsForAddressRequest",
  encode(message: PositionsForAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsForAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsForAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionsForAddressRequest>): PositionsForAddressRequest {
    const message = createBasePositionsForAddressRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsForAddressRequestAmino): PositionsForAddressRequest {
    const message = createBasePositionsForAddressRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsForAddressRequest): PositionsForAddressRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsForAddressRequestAminoMsg): PositionsForAddressRequest {
    return PositionsForAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsForAddressRequestProtoMsg): PositionsForAddressRequest {
    return PositionsForAddressRequest.decode(message.value);
  },
  toProto(message: PositionsForAddressRequest): Uint8Array {
    return PositionsForAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionsForAddressRequest): PositionsForAddressRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.PositionsForAddressRequest",
      value: PositionsForAddressRequest.encode(message).finish()
    };
  }
};
function createBasePositionsForAddressResponse(): PositionsForAddressResponse {
  return {
    mtps: [],
    pagination: undefined
  };
}
export const PositionsForAddressResponse = {
  typeUrl: "/elys.perpetual.PositionsForAddressResponse",
  encode(message: PositionsForAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.mtps) {
      MtpAndPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsForAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsForAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mtps.push(MtpAndPrice.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionsForAddressResponse>): PositionsForAddressResponse {
    const message = createBasePositionsForAddressResponse();
    message.mtps = object.mtps?.map(e => MtpAndPrice.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsForAddressResponseAmino): PositionsForAddressResponse {
    const message = createBasePositionsForAddressResponse();
    message.mtps = object.mtps?.map(e => MtpAndPrice.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsForAddressResponse): PositionsForAddressResponseAmino {
    const obj: any = {};
    if (message.mtps) {
      obj.mtps = message.mtps.map(e => e ? MtpAndPrice.toAmino(e) : undefined);
    } else {
      obj.mtps = message.mtps;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsForAddressResponseAminoMsg): PositionsForAddressResponse {
    return PositionsForAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsForAddressResponseProtoMsg): PositionsForAddressResponse {
    return PositionsForAddressResponse.decode(message.value);
  },
  toProto(message: PositionsForAddressResponse): Uint8Array {
    return PositionsForAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionsForAddressResponse): PositionsForAddressResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.PositionsForAddressResponse",
      value: PositionsForAddressResponse.encode(message).finish()
    };
  }
};
function createBaseWhitelistRequest(): WhitelistRequest {
  return {
    pagination: undefined
  };
}
export const WhitelistRequest = {
  typeUrl: "/elys.perpetual.WhitelistRequest",
  encode(message: WhitelistRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WhitelistRequest>): WhitelistRequest {
    const message = createBaseWhitelistRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: WhitelistRequestAmino): WhitelistRequest {
    const message = createBaseWhitelistRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: WhitelistRequest): WhitelistRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: WhitelistRequestAminoMsg): WhitelistRequest {
    return WhitelistRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: WhitelistRequestProtoMsg): WhitelistRequest {
    return WhitelistRequest.decode(message.value);
  },
  toProto(message: WhitelistRequest): Uint8Array {
    return WhitelistRequest.encode(message).finish();
  },
  toProtoMsg(message: WhitelistRequest): WhitelistRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.WhitelistRequest",
      value: WhitelistRequest.encode(message).finish()
    };
  }
};
function createBaseWhitelistResponse(): WhitelistResponse {
  return {
    whitelist: [],
    pagination: undefined
  };
}
export const WhitelistResponse = {
  typeUrl: "/elys.perpetual.WhitelistResponse",
  encode(message: WhitelistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.whitelist) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelist.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WhitelistResponse>): WhitelistResponse {
    const message = createBaseWhitelistResponse();
    message.whitelist = object.whitelist?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: WhitelistResponseAmino): WhitelistResponse {
    const message = createBaseWhitelistResponse();
    message.whitelist = object.whitelist?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: WhitelistResponse): WhitelistResponseAmino {
    const obj: any = {};
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map(e => e);
    } else {
      obj.whitelist = message.whitelist;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: WhitelistResponseAminoMsg): WhitelistResponse {
    return WhitelistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: WhitelistResponseProtoMsg): WhitelistResponse {
    return WhitelistResponse.decode(message.value);
  },
  toProto(message: WhitelistResponse): Uint8Array {
    return WhitelistResponse.encode(message).finish();
  },
  toProtoMsg(message: WhitelistResponse): WhitelistResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.WhitelistResponse",
      value: WhitelistResponse.encode(message).finish()
    };
  }
};
function createBaseIsWhitelistedRequest(): IsWhitelistedRequest {
  return {
    address: ""
  };
}
export const IsWhitelistedRequest = {
  typeUrl: "/elys.perpetual.IsWhitelistedRequest",
  encode(message: IsWhitelistedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IsWhitelistedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsWhitelistedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IsWhitelistedRequest>): IsWhitelistedRequest {
    const message = createBaseIsWhitelistedRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: IsWhitelistedRequestAmino): IsWhitelistedRequest {
    const message = createBaseIsWhitelistedRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: IsWhitelistedRequest): IsWhitelistedRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: IsWhitelistedRequestAminoMsg): IsWhitelistedRequest {
    return IsWhitelistedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: IsWhitelistedRequestProtoMsg): IsWhitelistedRequest {
    return IsWhitelistedRequest.decode(message.value);
  },
  toProto(message: IsWhitelistedRequest): Uint8Array {
    return IsWhitelistedRequest.encode(message).finish();
  },
  toProtoMsg(message: IsWhitelistedRequest): IsWhitelistedRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.IsWhitelistedRequest",
      value: IsWhitelistedRequest.encode(message).finish()
    };
  }
};
function createBaseIsWhitelistedResponse(): IsWhitelistedResponse {
  return {
    address: "",
    isWhitelisted: false
  };
}
export const IsWhitelistedResponse = {
  typeUrl: "/elys.perpetual.IsWhitelistedResponse",
  encode(message: IsWhitelistedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.isWhitelisted === true) {
      writer.uint32(16).bool(message.isWhitelisted);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IsWhitelistedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsWhitelistedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.isWhitelisted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IsWhitelistedResponse>): IsWhitelistedResponse {
    const message = createBaseIsWhitelistedResponse();
    message.address = object.address ?? "";
    message.isWhitelisted = object.isWhitelisted ?? false;
    return message;
  },
  fromAmino(object: IsWhitelistedResponseAmino): IsWhitelistedResponse {
    const message = createBaseIsWhitelistedResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.is_whitelisted !== undefined && object.is_whitelisted !== null) {
      message.isWhitelisted = object.is_whitelisted;
    }
    return message;
  },
  toAmino(message: IsWhitelistedResponse): IsWhitelistedResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.is_whitelisted = message.isWhitelisted === false ? undefined : message.isWhitelisted;
    return obj;
  },
  fromAminoMsg(object: IsWhitelistedResponseAminoMsg): IsWhitelistedResponse {
    return IsWhitelistedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: IsWhitelistedResponseProtoMsg): IsWhitelistedResponse {
    return IsWhitelistedResponse.decode(message.value);
  },
  toProto(message: IsWhitelistedResponse): Uint8Array {
    return IsWhitelistedResponse.encode(message).finish();
  },
  toProtoMsg(message: IsWhitelistedResponse): IsWhitelistedResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.IsWhitelistedResponse",
      value: IsWhitelistedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return {
    index: BigInt(0)
  };
}
export const QueryGetPoolRequest = {
  typeUrl: "/elys.perpetual.QueryGetPoolRequest",
  encode(message: QueryGetPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPoolRequestAmino): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    return message;
  },
  toAmino(message: QueryGetPoolRequest): QueryGetPoolRequestAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolRequestAminoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolRequestProtoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.decode(message.value);
  },
  toProto(message: QueryGetPoolRequest): Uint8Array {
    return QueryGetPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolRequest): QueryGetPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.QueryGetPoolRequest",
      value: QueryGetPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolResponse(): QueryGetPoolResponse {
  return {
    pool: PoolResponse.fromPartial({})
  };
}
export const QueryGetPoolResponse = {
  typeUrl: "/elys.perpetual.QueryGetPoolResponse",
  encode(message: QueryGetPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      PoolResponse.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = PoolResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? PoolResponse.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolResponseAmino): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = PoolResponse.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryGetPoolResponse): QueryGetPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? PoolResponse.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolResponseAminoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolResponseProtoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.decode(message.value);
  },
  toProto(message: QueryGetPoolResponse): Uint8Array {
    return QueryGetPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolResponse): QueryGetPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.QueryGetPoolResponse",
      value: QueryGetPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolRequest(): QueryAllPoolRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPoolRequest = {
  typeUrl: "/elys.perpetual.QueryAllPoolRequest",
  encode(message: QueryAllPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllPoolRequest>): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolRequestAmino): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolRequest): QueryAllPoolRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolRequestAminoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolRequestProtoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.decode(message.value);
  },
  toProto(message: QueryAllPoolRequest): Uint8Array {
    return QueryAllPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolRequest): QueryAllPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.QueryAllPoolRequest",
      value: QueryAllPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolResponse(): QueryAllPoolResponse {
  return {
    pool: [],
    pagination: undefined
  };
}
export const QueryAllPoolResponse = {
  typeUrl: "/elys.perpetual.QueryAllPoolResponse",
  encode(message: QueryAllPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      PoolResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(PoolResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllPoolResponse>): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => PoolResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolResponseAmino): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => PoolResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolResponse): QueryAllPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? PoolResponse.toAmino(e) : undefined);
    } else {
      obj.pool = message.pool;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolResponseAminoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolResponseProtoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.decode(message.value);
  },
  toProto(message: QueryAllPoolResponse): Uint8Array {
    return QueryAllPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolResponse): QueryAllPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.QueryAllPoolResponse",
      value: QueryAllPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMTPRequest(): MTPRequest {
  return {
    address: "",
    id: BigInt(0)
  };
}
export const MTPRequest = {
  typeUrl: "/elys.perpetual.MTPRequest",
  encode(message: MTPRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MTPRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMTPRequest();
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
  fromPartial(object: Partial<MTPRequest>): MTPRequest {
    const message = createBaseMTPRequest();
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MTPRequestAmino): MTPRequest {
    const message = createBaseMTPRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MTPRequest): MTPRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MTPRequestAminoMsg): MTPRequest {
    return MTPRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MTPRequestProtoMsg): MTPRequest {
    return MTPRequest.decode(message.value);
  },
  toProto(message: MTPRequest): Uint8Array {
    return MTPRequest.encode(message).finish();
  },
  toProtoMsg(message: MTPRequest): MTPRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.MTPRequest",
      value: MTPRequest.encode(message).finish()
    };
  }
};
function createBaseMTPResponse(): MTPResponse {
  return {
    mtp: undefined
  };
}
export const MTPResponse = {
  typeUrl: "/elys.perpetual.MTPResponse",
  encode(message: MTPResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mtp !== undefined) {
      MtpAndPrice.encode(message.mtp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MTPResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMTPResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mtp = MtpAndPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MTPResponse>): MTPResponse {
    const message = createBaseMTPResponse();
    message.mtp = object.mtp !== undefined && object.mtp !== null ? MtpAndPrice.fromPartial(object.mtp) : undefined;
    return message;
  },
  fromAmino(object: MTPResponseAmino): MTPResponse {
    const message = createBaseMTPResponse();
    if (object.mtp !== undefined && object.mtp !== null) {
      message.mtp = MtpAndPrice.fromAmino(object.mtp);
    }
    return message;
  },
  toAmino(message: MTPResponse): MTPResponseAmino {
    const obj: any = {};
    obj.mtp = message.mtp ? MtpAndPrice.toAmino(message.mtp) : undefined;
    return obj;
  },
  fromAminoMsg(object: MTPResponseAminoMsg): MTPResponse {
    return MTPResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MTPResponseProtoMsg): MTPResponse {
    return MTPResponse.decode(message.value);
  },
  toProto(message: MTPResponse): Uint8Array {
    return MTPResponse.encode(message).finish();
  },
  toProtoMsg(message: MTPResponse): MTPResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.MTPResponse",
      value: MTPResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOpenEstimationRequest(): QueryOpenEstimationRequest {
  return {
    position: 0,
    leverage: "",
    tradingAsset: "",
    collateral: Coin.fromPartial({}),
    address: "",
    takeProfitPrice: "",
    poolId: BigInt(0),
    limitPrice: ""
  };
}
export const QueryOpenEstimationRequest = {
  typeUrl: "/elys.perpetual.QueryOpenEstimationRequest",
  encode(message: QueryOpenEstimationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== 0) {
      writer.uint32(8).int32(message.position);
    }
    if (message.leverage !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.leverage, 18).atomics);
    }
    if (message.tradingAsset !== "") {
      writer.uint32(26).string(message.tradingAsset);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(42).string(message.address);
    }
    if (message.takeProfitPrice !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.takeProfitPrice, 18).atomics);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(56).uint64(message.poolId);
    }
    if (message.limitPrice !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.limitPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOpenEstimationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOpenEstimationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = reader.int32() as any;
          break;
        case 2:
          message.leverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.tradingAsset = reader.string();
          break;
        case 4:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.address = reader.string();
          break;
        case 6:
          message.takeProfitPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.poolId = reader.uint64();
          break;
        case 8:
          message.limitPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOpenEstimationRequest>): QueryOpenEstimationRequest {
    const message = createBaseQueryOpenEstimationRequest();
    message.position = object.position ?? 0;
    message.leverage = object.leverage ?? "";
    message.tradingAsset = object.tradingAsset ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.address = object.address ?? "";
    message.takeProfitPrice = object.takeProfitPrice ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.limitPrice = object.limitPrice ?? "";
    return message;
  },
  fromAmino(object: QueryOpenEstimationRequestAmino): QueryOpenEstimationRequest {
    const message = createBaseQueryOpenEstimationRequest();
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    }
    if (object.leverage !== undefined && object.leverage !== null) {
      message.leverage = object.leverage;
    }
    if (object.trading_asset !== undefined && object.trading_asset !== null) {
      message.tradingAsset = object.trading_asset;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromAmino(object.collateral);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.take_profit_price !== undefined && object.take_profit_price !== null) {
      message.takeProfitPrice = object.take_profit_price;
    }
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId);
    }
    if (object.limit_price !== undefined && object.limit_price !== null) {
      message.limitPrice = object.limit_price;
    }
    return message;
  },
  toAmino(message: QueryOpenEstimationRequest): QueryOpenEstimationRequestAmino {
    const obj: any = {};
    obj.position = message.position === 0 ? undefined : message.position;
    obj.leverage = message.leverage === "" ? undefined : message.leverage;
    obj.trading_asset = message.tradingAsset === "" ? undefined : message.tradingAsset;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.take_profit_price = message.takeProfitPrice === "" ? undefined : message.takeProfitPrice;
    obj.poolId = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.limit_price = message.limitPrice === "" ? undefined : message.limitPrice;
    return obj;
  },
  fromAminoMsg(object: QueryOpenEstimationRequestAminoMsg): QueryOpenEstimationRequest {
    return QueryOpenEstimationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOpenEstimationRequestProtoMsg): QueryOpenEstimationRequest {
    return QueryOpenEstimationRequest.decode(message.value);
  },
  toProto(message: QueryOpenEstimationRequest): Uint8Array {
    return QueryOpenEstimationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOpenEstimationRequest): QueryOpenEstimationRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.QueryOpenEstimationRequest",
      value: QueryOpenEstimationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOpenEstimationResponse(): QueryOpenEstimationResponse {
  return {
    position: 0,
    effectiveLeverage: "",
    tradingAsset: "",
    collateral: Coin.fromPartial({}),
    hourlyInterestRate: "",
    positionSize: Coin.fromPartial({}),
    openPrice: "",
    takeProfitPrice: "",
    liquidationPrice: "",
    estimatedPnl: Coin.fromPartial({}),
    availableLiquidity: Coin.fromPartial({}),
    slippage: "",
    borrowInterestRate: "",
    fundingRate: "",
    priceImpact: "",
    custody: Coin.fromPartial({}),
    liabilities: Coin.fromPartial({}),
    limitPrice: "",
    weightBreakingFee: ""
  };
}
export const QueryOpenEstimationResponse = {
  typeUrl: "/elys.perpetual.QueryOpenEstimationResponse",
  encode(message: QueryOpenEstimationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== 0) {
      writer.uint32(8).int32(message.position);
    }
    if (message.effectiveLeverage !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.effectiveLeverage, 18).atomics);
    }
    if (message.tradingAsset !== "") {
      writer.uint32(26).string(message.tradingAsset);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
    }
    if (message.hourlyInterestRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.hourlyInterestRate, 18).atomics);
    }
    if (message.positionSize !== undefined) {
      Coin.encode(message.positionSize, writer.uint32(50).fork()).ldelim();
    }
    if (message.openPrice !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.openPrice, 18).atomics);
    }
    if (message.takeProfitPrice !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.takeProfitPrice, 18).atomics);
    }
    if (message.liquidationPrice !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.liquidationPrice, 18).atomics);
    }
    if (message.estimatedPnl !== undefined) {
      Coin.encode(message.estimatedPnl, writer.uint32(82).fork()).ldelim();
    }
    if (message.availableLiquidity !== undefined) {
      Coin.encode(message.availableLiquidity, writer.uint32(90).fork()).ldelim();
    }
    if (message.slippage !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.slippage, 18).atomics);
    }
    if (message.borrowInterestRate !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.borrowInterestRate, 18).atomics);
    }
    if (message.fundingRate !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.fundingRate, 18).atomics);
    }
    if (message.priceImpact !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.priceImpact, 18).atomics);
    }
    if (message.custody !== undefined) {
      Coin.encode(message.custody, writer.uint32(130).fork()).ldelim();
    }
    if (message.liabilities !== undefined) {
      Coin.encode(message.liabilities, writer.uint32(138).fork()).ldelim();
    }
    if (message.limitPrice !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.limitPrice, 18).atomics);
    }
    if (message.weightBreakingFee !== "") {
      writer.uint32(154).string(Decimal.fromUserInput(message.weightBreakingFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOpenEstimationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOpenEstimationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = reader.int32() as any;
          break;
        case 2:
          message.effectiveLeverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.tradingAsset = reader.string();
          break;
        case 4:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.hourlyInterestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.positionSize = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.openPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.takeProfitPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.liquidationPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.estimatedPnl = Coin.decode(reader, reader.uint32());
          break;
        case 11:
          message.availableLiquidity = Coin.decode(reader, reader.uint32());
          break;
        case 12:
          message.slippage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.borrowInterestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.fundingRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.priceImpact = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 16:
          message.custody = Coin.decode(reader, reader.uint32());
          break;
        case 17:
          message.liabilities = Coin.decode(reader, reader.uint32());
          break;
        case 18:
          message.limitPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 19:
          message.weightBreakingFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOpenEstimationResponse>): QueryOpenEstimationResponse {
    const message = createBaseQueryOpenEstimationResponse();
    message.position = object.position ?? 0;
    message.effectiveLeverage = object.effectiveLeverage ?? "";
    message.tradingAsset = object.tradingAsset ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.hourlyInterestRate = object.hourlyInterestRate ?? "";
    message.positionSize = object.positionSize !== undefined && object.positionSize !== null ? Coin.fromPartial(object.positionSize) : undefined;
    message.openPrice = object.openPrice ?? "";
    message.takeProfitPrice = object.takeProfitPrice ?? "";
    message.liquidationPrice = object.liquidationPrice ?? "";
    message.estimatedPnl = object.estimatedPnl !== undefined && object.estimatedPnl !== null ? Coin.fromPartial(object.estimatedPnl) : undefined;
    message.availableLiquidity = object.availableLiquidity !== undefined && object.availableLiquidity !== null ? Coin.fromPartial(object.availableLiquidity) : undefined;
    message.slippage = object.slippage ?? "";
    message.borrowInterestRate = object.borrowInterestRate ?? "";
    message.fundingRate = object.fundingRate ?? "";
    message.priceImpact = object.priceImpact ?? "";
    message.custody = object.custody !== undefined && object.custody !== null ? Coin.fromPartial(object.custody) : undefined;
    message.liabilities = object.liabilities !== undefined && object.liabilities !== null ? Coin.fromPartial(object.liabilities) : undefined;
    message.limitPrice = object.limitPrice ?? "";
    message.weightBreakingFee = object.weightBreakingFee ?? "";
    return message;
  },
  fromAmino(object: QueryOpenEstimationResponseAmino): QueryOpenEstimationResponse {
    const message = createBaseQueryOpenEstimationResponse();
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    }
    if (object.effective_leverage !== undefined && object.effective_leverage !== null) {
      message.effectiveLeverage = object.effective_leverage;
    }
    if (object.trading_asset !== undefined && object.trading_asset !== null) {
      message.tradingAsset = object.trading_asset;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromAmino(object.collateral);
    }
    if (object.hourly_interest_rate !== undefined && object.hourly_interest_rate !== null) {
      message.hourlyInterestRate = object.hourly_interest_rate;
    }
    if (object.position_size !== undefined && object.position_size !== null) {
      message.positionSize = Coin.fromAmino(object.position_size);
    }
    if (object.open_price !== undefined && object.open_price !== null) {
      message.openPrice = object.open_price;
    }
    if (object.take_profit_price !== undefined && object.take_profit_price !== null) {
      message.takeProfitPrice = object.take_profit_price;
    }
    if (object.liquidation_price !== undefined && object.liquidation_price !== null) {
      message.liquidationPrice = object.liquidation_price;
    }
    if (object.estimated_pnl !== undefined && object.estimated_pnl !== null) {
      message.estimatedPnl = Coin.fromAmino(object.estimated_pnl);
    }
    if (object.available_liquidity !== undefined && object.available_liquidity !== null) {
      message.availableLiquidity = Coin.fromAmino(object.available_liquidity);
    }
    if (object.slippage !== undefined && object.slippage !== null) {
      message.slippage = object.slippage;
    }
    if (object.borrow_interest_rate !== undefined && object.borrow_interest_rate !== null) {
      message.borrowInterestRate = object.borrow_interest_rate;
    }
    if (object.funding_rate !== undefined && object.funding_rate !== null) {
      message.fundingRate = object.funding_rate;
    }
    if (object.price_impact !== undefined && object.price_impact !== null) {
      message.priceImpact = object.price_impact;
    }
    if (object.custody !== undefined && object.custody !== null) {
      message.custody = Coin.fromAmino(object.custody);
    }
    if (object.liabilities !== undefined && object.liabilities !== null) {
      message.liabilities = Coin.fromAmino(object.liabilities);
    }
    if (object.limit_price !== undefined && object.limit_price !== null) {
      message.limitPrice = object.limit_price;
    }
    if (object.weight_breaking_fee !== undefined && object.weight_breaking_fee !== null) {
      message.weightBreakingFee = object.weight_breaking_fee;
    }
    return message;
  },
  toAmino(message: QueryOpenEstimationResponse): QueryOpenEstimationResponseAmino {
    const obj: any = {};
    obj.position = message.position === 0 ? undefined : message.position;
    obj.effective_leverage = message.effectiveLeverage === "" ? undefined : message.effectiveLeverage;
    obj.trading_asset = message.tradingAsset === "" ? undefined : message.tradingAsset;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.hourly_interest_rate = message.hourlyInterestRate === "" ? undefined : message.hourlyInterestRate;
    obj.position_size = message.positionSize ? Coin.toAmino(message.positionSize) : undefined;
    obj.open_price = message.openPrice === "" ? undefined : message.openPrice;
    obj.take_profit_price = message.takeProfitPrice === "" ? undefined : message.takeProfitPrice;
    obj.liquidation_price = message.liquidationPrice === "" ? undefined : message.liquidationPrice;
    obj.estimated_pnl = message.estimatedPnl ? Coin.toAmino(message.estimatedPnl) : undefined;
    obj.available_liquidity = message.availableLiquidity ? Coin.toAmino(message.availableLiquidity) : undefined;
    obj.slippage = message.slippage === "" ? undefined : message.slippage;
    obj.borrow_interest_rate = message.borrowInterestRate === "" ? undefined : message.borrowInterestRate;
    obj.funding_rate = message.fundingRate === "" ? undefined : message.fundingRate;
    obj.price_impact = message.priceImpact === "" ? undefined : message.priceImpact;
    obj.custody = message.custody ? Coin.toAmino(message.custody) : undefined;
    obj.liabilities = message.liabilities ? Coin.toAmino(message.liabilities) : undefined;
    obj.limit_price = message.limitPrice === "" ? undefined : message.limitPrice;
    obj.weight_breaking_fee = message.weightBreakingFee === "" ? undefined : message.weightBreakingFee;
    return obj;
  },
  fromAminoMsg(object: QueryOpenEstimationResponseAminoMsg): QueryOpenEstimationResponse {
    return QueryOpenEstimationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOpenEstimationResponseProtoMsg): QueryOpenEstimationResponse {
    return QueryOpenEstimationResponse.decode(message.value);
  },
  toProto(message: QueryOpenEstimationResponse): Uint8Array {
    return QueryOpenEstimationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOpenEstimationResponse): QueryOpenEstimationResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.QueryOpenEstimationResponse",
      value: QueryOpenEstimationResponse.encode(message).finish()
    };
  }
};
function createBasePoolResponse(): PoolResponse {
  return {
    ammPoolId: BigInt(0),
    health: "",
    borrowInterestRate: "",
    poolAssetsLong: [],
    poolAssetsShort: [],
    lastHeightBorrowInterestRateComputed: BigInt(0),
    fundingRate: "",
    netOpenInterest: "",
    longRate: "",
    shortRate: "",
    totalLiabilities: Coin.fromPartial({}),
    totalLongOpenInterest: "",
    totalShortOpenInterest: ""
  };
}
export const PoolResponse = {
  typeUrl: "/elys.perpetual.PoolResponse",
  encode(message: PoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.ammPoolId);
    }
    if (message.health !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.health, 18).atomics);
    }
    if (message.borrowInterestRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.borrowInterestRate, 18).atomics);
    }
    for (const v of message.poolAssetsLong) {
      PoolAsset.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.poolAssetsShort) {
      PoolAsset.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastHeightBorrowInterestRateComputed !== BigInt(0)) {
      writer.uint32(48).int64(message.lastHeightBorrowInterestRateComputed);
    }
    if (message.fundingRate !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.fundingRate, 18).atomics);
    }
    if (message.netOpenInterest !== "") {
      writer.uint32(66).string(message.netOpenInterest);
    }
    if (message.longRate !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.longRate, 18).atomics);
    }
    if (message.shortRate !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.shortRate, 18).atomics);
    }
    if (message.totalLiabilities !== undefined) {
      Coin.encode(message.totalLiabilities, writer.uint32(90).fork()).ldelim();
    }
    if (message.totalLongOpenInterest !== "") {
      writer.uint32(98).string(message.totalLongOpenInterest);
    }
    if (message.totalShortOpenInterest !== "") {
      writer.uint32(106).string(message.totalShortOpenInterest);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolResponse();
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
          message.borrowInterestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.poolAssetsLong.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 5:
          message.poolAssetsShort.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 6:
          message.lastHeightBorrowInterestRateComputed = reader.int64();
          break;
        case 7:
          message.fundingRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.netOpenInterest = reader.string();
          break;
        case 9:
          message.longRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.shortRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.totalLiabilities = Coin.decode(reader, reader.uint32());
          break;
        case 12:
          message.totalLongOpenInterest = reader.string();
          break;
        case 13:
          message.totalShortOpenInterest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PoolResponse>): PoolResponse {
    const message = createBasePoolResponse();
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.health = object.health ?? "";
    message.borrowInterestRate = object.borrowInterestRate ?? "";
    message.poolAssetsLong = object.poolAssetsLong?.map(e => PoolAsset.fromPartial(e)) || [];
    message.poolAssetsShort = object.poolAssetsShort?.map(e => PoolAsset.fromPartial(e)) || [];
    message.lastHeightBorrowInterestRateComputed = object.lastHeightBorrowInterestRateComputed !== undefined && object.lastHeightBorrowInterestRateComputed !== null ? BigInt(object.lastHeightBorrowInterestRateComputed.toString()) : BigInt(0);
    message.fundingRate = object.fundingRate ?? "";
    message.netOpenInterest = object.netOpenInterest ?? "";
    message.longRate = object.longRate ?? "";
    message.shortRate = object.shortRate ?? "";
    message.totalLiabilities = object.totalLiabilities !== undefined && object.totalLiabilities !== null ? Coin.fromPartial(object.totalLiabilities) : undefined;
    message.totalLongOpenInterest = object.totalLongOpenInterest ?? "";
    message.totalShortOpenInterest = object.totalShortOpenInterest ?? "";
    return message;
  },
  fromAmino(object: PoolResponseAmino): PoolResponse {
    const message = createBasePoolResponse();
    if (object.amm_pool_id !== undefined && object.amm_pool_id !== null) {
      message.ammPoolId = BigInt(object.amm_pool_id);
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = object.health;
    }
    if (object.borrow_interest_rate !== undefined && object.borrow_interest_rate !== null) {
      message.borrowInterestRate = object.borrow_interest_rate;
    }
    message.poolAssetsLong = object.pool_assets_long?.map(e => PoolAsset.fromAmino(e)) || [];
    message.poolAssetsShort = object.pool_assets_short?.map(e => PoolAsset.fromAmino(e)) || [];
    if (object.last_height_borrow_interest_rate_computed !== undefined && object.last_height_borrow_interest_rate_computed !== null) {
      message.lastHeightBorrowInterestRateComputed = BigInt(object.last_height_borrow_interest_rate_computed);
    }
    if (object.funding_rate !== undefined && object.funding_rate !== null) {
      message.fundingRate = object.funding_rate;
    }
    if (object.net_open_interest !== undefined && object.net_open_interest !== null) {
      message.netOpenInterest = object.net_open_interest;
    }
    if (object.long_rate !== undefined && object.long_rate !== null) {
      message.longRate = object.long_rate;
    }
    if (object.short_rate !== undefined && object.short_rate !== null) {
      message.shortRate = object.short_rate;
    }
    if (object.total_liabilities !== undefined && object.total_liabilities !== null) {
      message.totalLiabilities = Coin.fromAmino(object.total_liabilities);
    }
    if (object.total_long_open_interest !== undefined && object.total_long_open_interest !== null) {
      message.totalLongOpenInterest = object.total_long_open_interest;
    }
    if (object.total_short_open_interest !== undefined && object.total_short_open_interest !== null) {
      message.totalShortOpenInterest = object.total_short_open_interest;
    }
    return message;
  },
  toAmino(message: PoolResponse): PoolResponseAmino {
    const obj: any = {};
    obj.amm_pool_id = message.ammPoolId !== BigInt(0) ? message.ammPoolId?.toString() : undefined;
    obj.health = message.health === "" ? undefined : message.health;
    obj.borrow_interest_rate = message.borrowInterestRate === "" ? undefined : message.borrowInterestRate;
    if (message.poolAssetsLong) {
      obj.pool_assets_long = message.poolAssetsLong.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.pool_assets_long = message.poolAssetsLong;
    }
    if (message.poolAssetsShort) {
      obj.pool_assets_short = message.poolAssetsShort.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.pool_assets_short = message.poolAssetsShort;
    }
    obj.last_height_borrow_interest_rate_computed = message.lastHeightBorrowInterestRateComputed !== BigInt(0) ? message.lastHeightBorrowInterestRateComputed?.toString() : undefined;
    obj.funding_rate = message.fundingRate === "" ? undefined : message.fundingRate;
    obj.net_open_interest = message.netOpenInterest === "" ? undefined : message.netOpenInterest;
    obj.long_rate = message.longRate === "" ? undefined : message.longRate;
    obj.short_rate = message.shortRate === "" ? undefined : message.shortRate;
    obj.total_liabilities = message.totalLiabilities ? Coin.toAmino(message.totalLiabilities) : undefined;
    obj.total_long_open_interest = message.totalLongOpenInterest === "" ? undefined : message.totalLongOpenInterest;
    obj.total_short_open_interest = message.totalShortOpenInterest === "" ? undefined : message.totalShortOpenInterest;
    return obj;
  },
  fromAminoMsg(object: PoolResponseAminoMsg): PoolResponse {
    return PoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolResponseProtoMsg): PoolResponse {
    return PoolResponse.decode(message.value);
  },
  toProto(message: PoolResponse): Uint8Array {
    return PoolResponse.encode(message).finish();
  },
  toProtoMsg(message: PoolResponse): PoolResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.PoolResponse",
      value: PoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCloseEstimationRequest(): QueryCloseEstimationRequest {
  return {
    address: "",
    positionId: BigInt(0),
    closeAmount: ""
  };
}
export const QueryCloseEstimationRequest = {
  typeUrl: "/elys.perpetual.QueryCloseEstimationRequest",
  encode(message: QueryCloseEstimationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.positionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.positionId);
    }
    if (message.closeAmount !== "") {
      writer.uint32(26).string(message.closeAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCloseEstimationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCloseEstimationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.positionId = reader.uint64();
          break;
        case 3:
          message.closeAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCloseEstimationRequest>): QueryCloseEstimationRequest {
    const message = createBaseQueryCloseEstimationRequest();
    message.address = object.address ?? "";
    message.positionId = object.positionId !== undefined && object.positionId !== null ? BigInt(object.positionId.toString()) : BigInt(0);
    message.closeAmount = object.closeAmount ?? "";
    return message;
  },
  fromAmino(object: QueryCloseEstimationRequestAmino): QueryCloseEstimationRequest {
    const message = createBaseQueryCloseEstimationRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.position_id !== undefined && object.position_id !== null) {
      message.positionId = BigInt(object.position_id);
    }
    if (object.close_amount !== undefined && object.close_amount !== null) {
      message.closeAmount = object.close_amount;
    }
    return message;
  },
  toAmino(message: QueryCloseEstimationRequest): QueryCloseEstimationRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.position_id = message.positionId !== BigInt(0) ? message.positionId?.toString() : undefined;
    obj.close_amount = message.closeAmount === "" ? undefined : message.closeAmount;
    return obj;
  },
  fromAminoMsg(object: QueryCloseEstimationRequestAminoMsg): QueryCloseEstimationRequest {
    return QueryCloseEstimationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCloseEstimationRequestProtoMsg): QueryCloseEstimationRequest {
    return QueryCloseEstimationRequest.decode(message.value);
  },
  toProto(message: QueryCloseEstimationRequest): Uint8Array {
    return QueryCloseEstimationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCloseEstimationRequest): QueryCloseEstimationRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.QueryCloseEstimationRequest",
      value: QueryCloseEstimationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCloseEstimationResponse(): QueryCloseEstimationResponse {
  return {
    position: 0,
    positionSize: Coin.fromPartial({}),
    liabilities: Coin.fromPartial({}),
    priceImpact: "",
    liquidationPrice: "",
    maxCloseAmount: "",
    borrowInterestUnpaidLiability: Coin.fromPartial({}),
    returningAmount: Coin.fromPartial({}),
    payingLiabilities: Coin.fromPartial({}),
    closingPrice: "",
    custody: Coin.fromPartial({}),
    collateral: Coin.fromPartial({}),
    weightBreakingFee: "",
    slippage: ""
  };
}
export const QueryCloseEstimationResponse = {
  typeUrl: "/elys.perpetual.QueryCloseEstimationResponse",
  encode(message: QueryCloseEstimationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== 0) {
      writer.uint32(8).int32(message.position);
    }
    if (message.positionSize !== undefined) {
      Coin.encode(message.positionSize, writer.uint32(18).fork()).ldelim();
    }
    if (message.liabilities !== undefined) {
      Coin.encode(message.liabilities, writer.uint32(26).fork()).ldelim();
    }
    if (message.priceImpact !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.priceImpact, 18).atomics);
    }
    if (message.liquidationPrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.liquidationPrice, 18).atomics);
    }
    if (message.maxCloseAmount !== "") {
      writer.uint32(50).string(message.maxCloseAmount);
    }
    if (message.borrowInterestUnpaidLiability !== undefined) {
      Coin.encode(message.borrowInterestUnpaidLiability, writer.uint32(58).fork()).ldelim();
    }
    if (message.returningAmount !== undefined) {
      Coin.encode(message.returningAmount, writer.uint32(66).fork()).ldelim();
    }
    if (message.payingLiabilities !== undefined) {
      Coin.encode(message.payingLiabilities, writer.uint32(74).fork()).ldelim();
    }
    if (message.closingPrice !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.closingPrice, 18).atomics);
    }
    if (message.custody !== undefined) {
      Coin.encode(message.custody, writer.uint32(90).fork()).ldelim();
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(98).fork()).ldelim();
    }
    if (message.weightBreakingFee !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.weightBreakingFee, 18).atomics);
    }
    if (message.slippage !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.slippage, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCloseEstimationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCloseEstimationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = reader.int32() as any;
          break;
        case 2:
          message.positionSize = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.liabilities = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.priceImpact = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.liquidationPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.maxCloseAmount = reader.string();
          break;
        case 7:
          message.borrowInterestUnpaidLiability = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.returningAmount = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.payingLiabilities = Coin.decode(reader, reader.uint32());
          break;
        case 10:
          message.closingPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.custody = Coin.decode(reader, reader.uint32());
          break;
        case 12:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 13:
          message.weightBreakingFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.slippage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCloseEstimationResponse>): QueryCloseEstimationResponse {
    const message = createBaseQueryCloseEstimationResponse();
    message.position = object.position ?? 0;
    message.positionSize = object.positionSize !== undefined && object.positionSize !== null ? Coin.fromPartial(object.positionSize) : undefined;
    message.liabilities = object.liabilities !== undefined && object.liabilities !== null ? Coin.fromPartial(object.liabilities) : undefined;
    message.priceImpact = object.priceImpact ?? "";
    message.liquidationPrice = object.liquidationPrice ?? "";
    message.maxCloseAmount = object.maxCloseAmount ?? "";
    message.borrowInterestUnpaidLiability = object.borrowInterestUnpaidLiability !== undefined && object.borrowInterestUnpaidLiability !== null ? Coin.fromPartial(object.borrowInterestUnpaidLiability) : undefined;
    message.returningAmount = object.returningAmount !== undefined && object.returningAmount !== null ? Coin.fromPartial(object.returningAmount) : undefined;
    message.payingLiabilities = object.payingLiabilities !== undefined && object.payingLiabilities !== null ? Coin.fromPartial(object.payingLiabilities) : undefined;
    message.closingPrice = object.closingPrice ?? "";
    message.custody = object.custody !== undefined && object.custody !== null ? Coin.fromPartial(object.custody) : undefined;
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.weightBreakingFee = object.weightBreakingFee ?? "";
    message.slippage = object.slippage ?? "";
    return message;
  },
  fromAmino(object: QueryCloseEstimationResponseAmino): QueryCloseEstimationResponse {
    const message = createBaseQueryCloseEstimationResponse();
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    }
    if (object.position_size !== undefined && object.position_size !== null) {
      message.positionSize = Coin.fromAmino(object.position_size);
    }
    if (object.liabilities !== undefined && object.liabilities !== null) {
      message.liabilities = Coin.fromAmino(object.liabilities);
    }
    if (object.price_impact !== undefined && object.price_impact !== null) {
      message.priceImpact = object.price_impact;
    }
    if (object.liquidation_price !== undefined && object.liquidation_price !== null) {
      message.liquidationPrice = object.liquidation_price;
    }
    if (object.max_close_amount !== undefined && object.max_close_amount !== null) {
      message.maxCloseAmount = object.max_close_amount;
    }
    if (object.borrow_interest_unpaid_liability !== undefined && object.borrow_interest_unpaid_liability !== null) {
      message.borrowInterestUnpaidLiability = Coin.fromAmino(object.borrow_interest_unpaid_liability);
    }
    if (object.returning_amount !== undefined && object.returning_amount !== null) {
      message.returningAmount = Coin.fromAmino(object.returning_amount);
    }
    if (object.paying_liabilities !== undefined && object.paying_liabilities !== null) {
      message.payingLiabilities = Coin.fromAmino(object.paying_liabilities);
    }
    if (object.closing_price !== undefined && object.closing_price !== null) {
      message.closingPrice = object.closing_price;
    }
    if (object.custody !== undefined && object.custody !== null) {
      message.custody = Coin.fromAmino(object.custody);
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromAmino(object.collateral);
    }
    if (object.weight_breaking_fee !== undefined && object.weight_breaking_fee !== null) {
      message.weightBreakingFee = object.weight_breaking_fee;
    }
    if (object.slippage !== undefined && object.slippage !== null) {
      message.slippage = object.slippage;
    }
    return message;
  },
  toAmino(message: QueryCloseEstimationResponse): QueryCloseEstimationResponseAmino {
    const obj: any = {};
    obj.position = message.position === 0 ? undefined : message.position;
    obj.position_size = message.positionSize ? Coin.toAmino(message.positionSize) : undefined;
    obj.liabilities = message.liabilities ? Coin.toAmino(message.liabilities) : undefined;
    obj.price_impact = message.priceImpact === "" ? undefined : message.priceImpact;
    obj.liquidation_price = message.liquidationPrice === "" ? undefined : message.liquidationPrice;
    obj.max_close_amount = message.maxCloseAmount === "" ? undefined : message.maxCloseAmount;
    obj.borrow_interest_unpaid_liability = message.borrowInterestUnpaidLiability ? Coin.toAmino(message.borrowInterestUnpaidLiability) : undefined;
    obj.returning_amount = message.returningAmount ? Coin.toAmino(message.returningAmount) : undefined;
    obj.paying_liabilities = message.payingLiabilities ? Coin.toAmino(message.payingLiabilities) : undefined;
    obj.closing_price = message.closingPrice === "" ? undefined : message.closingPrice;
    obj.custody = message.custody ? Coin.toAmino(message.custody) : undefined;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.weight_breaking_fee = message.weightBreakingFee === "" ? undefined : message.weightBreakingFee;
    obj.slippage = message.slippage === "" ? undefined : message.slippage;
    return obj;
  },
  fromAminoMsg(object: QueryCloseEstimationResponseAminoMsg): QueryCloseEstimationResponse {
    return QueryCloseEstimationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCloseEstimationResponseProtoMsg): QueryCloseEstimationResponse {
    return QueryCloseEstimationResponse.decode(message.value);
  },
  toProto(message: QueryCloseEstimationResponse): Uint8Array {
    return QueryCloseEstimationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCloseEstimationResponse): QueryCloseEstimationResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.QueryCloseEstimationResponse",
      value: QueryCloseEstimationResponse.encode(message).finish()
    };
  }
};