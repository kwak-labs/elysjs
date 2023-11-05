import { ExecutionType, TradeLog, TradeLogAmino, TradeLogSDKType, DerivativeTradeLog, DerivativeTradeLogAmino, DerivativeTradeLogSDKType, SubaccountPosition, SubaccountPositionAmino, SubaccountPositionSDKType, BinaryOptionsMarket, BinaryOptionsMarketAmino, BinaryOptionsMarketSDKType, SpotLimitOrder, SpotLimitOrderAmino, SpotLimitOrderSDKType, DerivativeLimitOrder, DerivativeLimitOrderAmino, DerivativeLimitOrderSDKType, SpotMarket, SpotMarketAmino, SpotMarketSDKType, DerivativeMarket, DerivativeMarketAmino, DerivativeMarketSDKType, PerpetualMarketInfo, PerpetualMarketInfoAmino, PerpetualMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingAmino, PerpetualMarketFundingSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoAmino, ExpiryFuturesMarketInfoSDKType, DepositUpdate, DepositUpdateAmino, DepositUpdateSDKType, DerivativeMarketOrder, DerivativeMarketOrderAmino, DerivativeMarketOrderSDKType, FeeDiscountSchedule, FeeDiscountScheduleAmino, FeeDiscountScheduleSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoAmino, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolAmino, CampaignRewardPoolSDKType, AccountRewards, AccountRewardsAmino, AccountRewardsSDKType, DerivativeOrder, DerivativeOrderAmino, DerivativeOrderSDKType, executionTypeFromJSON } from "./exchange";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface EventBatchSpotExecution {
  marketId: string;
  isBuy: boolean;
  executionType: ExecutionType;
  trades: TradeLog[];
}
export interface EventBatchSpotExecutionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventBatchSpotExecution";
  value: Uint8Array;
}
export interface EventBatchSpotExecutionAmino {
  market_id: string;
  is_buy: boolean;
  executionType: ExecutionType;
  trades: TradeLogAmino[];
}
export interface EventBatchSpotExecutionAminoMsg {
  type: "/injective.exchange.v1beta1.EventBatchSpotExecution";
  value: EventBatchSpotExecutionAmino;
}
export interface EventBatchSpotExecutionSDKType {
  market_id: string;
  is_buy: boolean;
  executionType: ExecutionType;
  trades: TradeLogSDKType[];
}
export interface EventBatchDerivativeExecution {
  marketId: string;
  isBuy: boolean;
  isLiquidation: boolean;
  /** nil for time expiry futures */
  cumulativeFunding?: string;
  executionType: ExecutionType;
  trades: DerivativeTradeLog[];
}
export interface EventBatchDerivativeExecutionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativeExecution";
  value: Uint8Array;
}
export interface EventBatchDerivativeExecutionAmino {
  market_id: string;
  is_buy: boolean;
  is_liquidation: boolean;
  /** nil for time expiry futures */
  cumulative_funding: string;
  executionType: ExecutionType;
  trades: DerivativeTradeLogAmino[];
}
export interface EventBatchDerivativeExecutionAminoMsg {
  type: "/injective.exchange.v1beta1.EventBatchDerivativeExecution";
  value: EventBatchDerivativeExecutionAmino;
}
export interface EventBatchDerivativeExecutionSDKType {
  market_id: string;
  is_buy: boolean;
  is_liquidation: boolean;
  cumulative_funding?: string;
  executionType: ExecutionType;
  trades: DerivativeTradeLogSDKType[];
}
export interface EventLostFundsFromLiquidation {
  marketId: string;
  subaccountId: Uint8Array;
  lostFundsFromAvailableDuringPayout: string;
  lostFundsFromOrderCancels: string;
}
export interface EventLostFundsFromLiquidationProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventLostFundsFromLiquidation";
  value: Uint8Array;
}
export interface EventLostFundsFromLiquidationAmino {
  market_id: string;
  subaccount_id: Uint8Array;
  lost_funds_from_available_during_payout: string;
  lost_funds_from_order_cancels: string;
}
export interface EventLostFundsFromLiquidationAminoMsg {
  type: "/injective.exchange.v1beta1.EventLostFundsFromLiquidation";
  value: EventLostFundsFromLiquidationAmino;
}
export interface EventLostFundsFromLiquidationSDKType {
  market_id: string;
  subaccount_id: Uint8Array;
  lost_funds_from_available_during_payout: string;
  lost_funds_from_order_cancels: string;
}
export interface EventBatchDerivativePosition {
  marketId: string;
  positions: SubaccountPosition[];
}
export interface EventBatchDerivativePositionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativePosition";
  value: Uint8Array;
}
export interface EventBatchDerivativePositionAmino {
  market_id: string;
  positions: SubaccountPositionAmino[];
}
export interface EventBatchDerivativePositionAminoMsg {
  type: "/injective.exchange.v1beta1.EventBatchDerivativePosition";
  value: EventBatchDerivativePositionAmino;
}
export interface EventBatchDerivativePositionSDKType {
  market_id: string;
  positions: SubaccountPositionSDKType[];
}
export interface EventDerivativeMarketPaused {
  marketId: string;
  settlePrice: string;
  totalMissingFunds: string;
  missingFundsRate: string;
}
export interface EventDerivativeMarketPausedProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventDerivativeMarketPaused";
  value: Uint8Array;
}
export interface EventDerivativeMarketPausedAmino {
  market_id: string;
  settle_price: string;
  total_missing_funds: string;
  missing_funds_rate: string;
}
export interface EventDerivativeMarketPausedAminoMsg {
  type: "/injective.exchange.v1beta1.EventDerivativeMarketPaused";
  value: EventDerivativeMarketPausedAmino;
}
export interface EventDerivativeMarketPausedSDKType {
  market_id: string;
  settle_price: string;
  total_missing_funds: string;
  missing_funds_rate: string;
}
export interface EventBinaryOptionsMarketUpdate {
  market: BinaryOptionsMarket;
}
export interface EventBinaryOptionsMarketUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventBinaryOptionsMarketUpdate";
  value: Uint8Array;
}
export interface EventBinaryOptionsMarketUpdateAmino {
  market?: BinaryOptionsMarketAmino;
}
export interface EventBinaryOptionsMarketUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.EventBinaryOptionsMarketUpdate";
  value: EventBinaryOptionsMarketUpdateAmino;
}
export interface EventBinaryOptionsMarketUpdateSDKType {
  market: BinaryOptionsMarketSDKType;
}
export interface EventNewSpotOrders {
  marketId: string;
  buyOrders: SpotLimitOrder[];
  sellOrders: SpotLimitOrder[];
}
export interface EventNewSpotOrdersProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventNewSpotOrders";
  value: Uint8Array;
}
export interface EventNewSpotOrdersAmino {
  market_id: string;
  buy_orders: SpotLimitOrderAmino[];
  sell_orders: SpotLimitOrderAmino[];
}
export interface EventNewSpotOrdersAminoMsg {
  type: "/injective.exchange.v1beta1.EventNewSpotOrders";
  value: EventNewSpotOrdersAmino;
}
export interface EventNewSpotOrdersSDKType {
  market_id: string;
  buy_orders: SpotLimitOrderSDKType[];
  sell_orders: SpotLimitOrderSDKType[];
}
export interface EventNewDerivativeOrders {
  marketId: string;
  buyOrders: DerivativeLimitOrder[];
  sellOrders: DerivativeLimitOrder[];
}
export interface EventNewDerivativeOrdersProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventNewDerivativeOrders";
  value: Uint8Array;
}
export interface EventNewDerivativeOrdersAmino {
  market_id: string;
  buy_orders: DerivativeLimitOrderAmino[];
  sell_orders: DerivativeLimitOrderAmino[];
}
export interface EventNewDerivativeOrdersAminoMsg {
  type: "/injective.exchange.v1beta1.EventNewDerivativeOrders";
  value: EventNewDerivativeOrdersAmino;
}
export interface EventNewDerivativeOrdersSDKType {
  market_id: string;
  buy_orders: DerivativeLimitOrderSDKType[];
  sell_orders: DerivativeLimitOrderSDKType[];
}
export interface EventCancelSpotOrder {
  marketId: string;
  order: SpotLimitOrder;
}
export interface EventCancelSpotOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventCancelSpotOrder";
  value: Uint8Array;
}
export interface EventCancelSpotOrderAmino {
  market_id: string;
  order?: SpotLimitOrderAmino;
}
export interface EventCancelSpotOrderAminoMsg {
  type: "/injective.exchange.v1beta1.EventCancelSpotOrder";
  value: EventCancelSpotOrderAmino;
}
export interface EventCancelSpotOrderSDKType {
  market_id: string;
  order: SpotLimitOrderSDKType;
}
export interface EventSpotMarketUpdate {
  market: SpotMarket;
}
export interface EventSpotMarketUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventSpotMarketUpdate";
  value: Uint8Array;
}
export interface EventSpotMarketUpdateAmino {
  market?: SpotMarketAmino;
}
export interface EventSpotMarketUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.EventSpotMarketUpdate";
  value: EventSpotMarketUpdateAmino;
}
export interface EventSpotMarketUpdateSDKType {
  market: SpotMarketSDKType;
}
export interface EventPerpetualMarketUpdate {
  market: DerivativeMarket;
  perpetualMarketInfo?: PerpetualMarketInfo;
  funding?: PerpetualMarketFunding;
}
export interface EventPerpetualMarketUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketUpdate";
  value: Uint8Array;
}
export interface EventPerpetualMarketUpdateAmino {
  market?: DerivativeMarketAmino;
  perpetual_market_info?: PerpetualMarketInfoAmino;
  funding?: PerpetualMarketFundingAmino;
}
export interface EventPerpetualMarketUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.EventPerpetualMarketUpdate";
  value: EventPerpetualMarketUpdateAmino;
}
export interface EventPerpetualMarketUpdateSDKType {
  market: DerivativeMarketSDKType;
  perpetual_market_info?: PerpetualMarketInfoSDKType;
  funding?: PerpetualMarketFundingSDKType;
}
export interface EventExpiryFuturesMarketUpdate {
  market: DerivativeMarket;
  expiryFuturesMarketInfo?: ExpiryFuturesMarketInfo;
}
export interface EventExpiryFuturesMarketUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate";
  value: Uint8Array;
}
export interface EventExpiryFuturesMarketUpdateAmino {
  market?: DerivativeMarketAmino;
  expiry_futures_market_info?: ExpiryFuturesMarketInfoAmino;
}
export interface EventExpiryFuturesMarketUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate";
  value: EventExpiryFuturesMarketUpdateAmino;
}
export interface EventExpiryFuturesMarketUpdateSDKType {
  market: DerivativeMarketSDKType;
  expiry_futures_market_info?: ExpiryFuturesMarketInfoSDKType;
}
export interface EventPerpetualMarketFundingUpdate {
  marketId: string;
  funding: PerpetualMarketFunding;
  isHourlyFunding: boolean;
  fundingRate?: string;
  markPrice?: string;
}
export interface EventPerpetualMarketFundingUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate";
  value: Uint8Array;
}
export interface EventPerpetualMarketFundingUpdateAmino {
  market_id: string;
  funding?: PerpetualMarketFundingAmino;
  is_hourly_funding: boolean;
  funding_rate: string;
  mark_price: string;
}
export interface EventPerpetualMarketFundingUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate";
  value: EventPerpetualMarketFundingUpdateAmino;
}
export interface EventPerpetualMarketFundingUpdateSDKType {
  market_id: string;
  funding: PerpetualMarketFundingSDKType;
  is_hourly_funding: boolean;
  funding_rate?: string;
  mark_price?: string;
}
export interface EventSubaccountDeposit {
  srcAddress: string;
  subaccountId: Uint8Array;
  amount: Coin;
}
export interface EventSubaccountDepositProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventSubaccountDeposit";
  value: Uint8Array;
}
export interface EventSubaccountDepositAmino {
  src_address: string;
  subaccount_id: Uint8Array;
  amount?: CoinAmino;
}
export interface EventSubaccountDepositAminoMsg {
  type: "/injective.exchange.v1beta1.EventSubaccountDeposit";
  value: EventSubaccountDepositAmino;
}
export interface EventSubaccountDepositSDKType {
  src_address: string;
  subaccount_id: Uint8Array;
  amount: CoinSDKType;
}
export interface EventSubaccountWithdraw {
  subaccountId: Uint8Array;
  dstAddress: string;
  amount: Coin;
}
export interface EventSubaccountWithdrawProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventSubaccountWithdraw";
  value: Uint8Array;
}
export interface EventSubaccountWithdrawAmino {
  subaccount_id: Uint8Array;
  dst_address: string;
  amount?: CoinAmino;
}
export interface EventSubaccountWithdrawAminoMsg {
  type: "/injective.exchange.v1beta1.EventSubaccountWithdraw";
  value: EventSubaccountWithdrawAmino;
}
export interface EventSubaccountWithdrawSDKType {
  subaccount_id: Uint8Array;
  dst_address: string;
  amount: CoinSDKType;
}
export interface EventSubaccountBalanceTransfer {
  srcSubaccountId: string;
  dstSubaccountId: string;
  amount: Coin;
}
export interface EventSubaccountBalanceTransferProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventSubaccountBalanceTransfer";
  value: Uint8Array;
}
export interface EventSubaccountBalanceTransferAmino {
  src_subaccount_id: string;
  dst_subaccount_id: string;
  amount?: CoinAmino;
}
export interface EventSubaccountBalanceTransferAminoMsg {
  type: "/injective.exchange.v1beta1.EventSubaccountBalanceTransfer";
  value: EventSubaccountBalanceTransferAmino;
}
export interface EventSubaccountBalanceTransferSDKType {
  src_subaccount_id: string;
  dst_subaccount_id: string;
  amount: CoinSDKType;
}
export interface EventBatchDepositUpdate {
  depositUpdates: DepositUpdate[];
}
export interface EventBatchDepositUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventBatchDepositUpdate";
  value: Uint8Array;
}
export interface EventBatchDepositUpdateAmino {
  deposit_updates: DepositUpdateAmino[];
}
export interface EventBatchDepositUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.EventBatchDepositUpdate";
  value: EventBatchDepositUpdateAmino;
}
export interface EventBatchDepositUpdateSDKType {
  deposit_updates: DepositUpdateSDKType[];
}
export interface DerivativeMarketOrderCancel {
  marketOrder?: DerivativeMarketOrder;
  cancelQuantity: string;
}
export interface DerivativeMarketOrderCancelProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrderCancel";
  value: Uint8Array;
}
export interface DerivativeMarketOrderCancelAmino {
  market_order?: DerivativeMarketOrderAmino;
  cancel_quantity: string;
}
export interface DerivativeMarketOrderCancelAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeMarketOrderCancel";
  value: DerivativeMarketOrderCancelAmino;
}
export interface DerivativeMarketOrderCancelSDKType {
  market_order?: DerivativeMarketOrderSDKType;
  cancel_quantity: string;
}
export interface EventCancelDerivativeOrder {
  marketId: string;
  isLimitCancel: boolean;
  limitOrder?: DerivativeLimitOrder;
  marketOrderCancel?: DerivativeMarketOrderCancel;
}
export interface EventCancelDerivativeOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventCancelDerivativeOrder";
  value: Uint8Array;
}
export interface EventCancelDerivativeOrderAmino {
  market_id: string;
  isLimitCancel: boolean;
  limit_order?: DerivativeLimitOrderAmino;
  market_order_cancel?: DerivativeMarketOrderCancelAmino;
}
export interface EventCancelDerivativeOrderAminoMsg {
  type: "/injective.exchange.v1beta1.EventCancelDerivativeOrder";
  value: EventCancelDerivativeOrderAmino;
}
export interface EventCancelDerivativeOrderSDKType {
  market_id: string;
  isLimitCancel: boolean;
  limit_order?: DerivativeLimitOrderSDKType;
  market_order_cancel?: DerivativeMarketOrderCancelSDKType;
}
export interface EventFeeDiscountSchedule {
  schedule?: FeeDiscountSchedule;
}
export interface EventFeeDiscountScheduleProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventFeeDiscountSchedule";
  value: Uint8Array;
}
export interface EventFeeDiscountScheduleAmino {
  schedule?: FeeDiscountScheduleAmino;
}
export interface EventFeeDiscountScheduleAminoMsg {
  type: "/injective.exchange.v1beta1.EventFeeDiscountSchedule";
  value: EventFeeDiscountScheduleAmino;
}
export interface EventFeeDiscountScheduleSDKType {
  schedule?: FeeDiscountScheduleSDKType;
}
export interface EventTradingRewardCampaignUpdate {
  campaignInfo?: TradingRewardCampaignInfo;
  campaignRewardPools: CampaignRewardPool[];
}
export interface EventTradingRewardCampaignUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventTradingRewardCampaignUpdate";
  value: Uint8Array;
}
export interface EventTradingRewardCampaignUpdateAmino {
  campaign_info?: TradingRewardCampaignInfoAmino;
  campaign_reward_pools: CampaignRewardPoolAmino[];
}
export interface EventTradingRewardCampaignUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.EventTradingRewardCampaignUpdate";
  value: EventTradingRewardCampaignUpdateAmino;
}
export interface EventTradingRewardCampaignUpdateSDKType {
  campaign_info?: TradingRewardCampaignInfoSDKType;
  campaign_reward_pools: CampaignRewardPoolSDKType[];
}
export interface EventTradingRewardDistribution {
  accountRewards: AccountRewards[];
}
export interface EventTradingRewardDistributionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventTradingRewardDistribution";
  value: Uint8Array;
}
export interface EventTradingRewardDistributionAmino {
  account_rewards: AccountRewardsAmino[];
}
export interface EventTradingRewardDistributionAminoMsg {
  type: "/injective.exchange.v1beta1.EventTradingRewardDistribution";
  value: EventTradingRewardDistributionAmino;
}
export interface EventTradingRewardDistributionSDKType {
  account_rewards: AccountRewardsSDKType[];
}
export interface EventNewConditionalDerivativeOrder {
  marketId: string;
  order?: DerivativeOrder;
  hash: Uint8Array;
  isMarket: boolean;
}
export interface EventNewConditionalDerivativeOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventNewConditionalDerivativeOrder";
  value: Uint8Array;
}
export interface EventNewConditionalDerivativeOrderAmino {
  market_id: string;
  order?: DerivativeOrderAmino;
  hash: Uint8Array;
  is_market: boolean;
}
export interface EventNewConditionalDerivativeOrderAminoMsg {
  type: "/injective.exchange.v1beta1.EventNewConditionalDerivativeOrder";
  value: EventNewConditionalDerivativeOrderAmino;
}
export interface EventNewConditionalDerivativeOrderSDKType {
  market_id: string;
  order?: DerivativeOrderSDKType;
  hash: Uint8Array;
  is_market: boolean;
}
export interface EventCancelConditionalDerivativeOrder {
  marketId: string;
  isLimitCancel: boolean;
  limitOrder?: DerivativeLimitOrder;
  marketOrder?: DerivativeMarketOrder;
}
export interface EventCancelConditionalDerivativeOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventCancelConditionalDerivativeOrder";
  value: Uint8Array;
}
export interface EventCancelConditionalDerivativeOrderAmino {
  market_id: string;
  isLimitCancel: boolean;
  limit_order?: DerivativeLimitOrderAmino;
  market_order?: DerivativeMarketOrderAmino;
}
export interface EventCancelConditionalDerivativeOrderAminoMsg {
  type: "/injective.exchange.v1beta1.EventCancelConditionalDerivativeOrder";
  value: EventCancelConditionalDerivativeOrderAmino;
}
export interface EventCancelConditionalDerivativeOrderSDKType {
  market_id: string;
  isLimitCancel: boolean;
  limit_order?: DerivativeLimitOrderSDKType;
  market_order?: DerivativeMarketOrderSDKType;
}
export interface EventConditionalDerivativeOrderTrigger {
  marketId: Uint8Array;
  isLimitTrigger: boolean;
  triggeredOrderHash: Uint8Array;
  placedOrderHash: Uint8Array;
}
export interface EventConditionalDerivativeOrderTriggerProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventConditionalDerivativeOrderTrigger";
  value: Uint8Array;
}
export interface EventConditionalDerivativeOrderTriggerAmino {
  market_id: Uint8Array;
  isLimitTrigger: boolean;
  triggered_order_hash: Uint8Array;
  placed_order_hash: Uint8Array;
}
export interface EventConditionalDerivativeOrderTriggerAminoMsg {
  type: "/injective.exchange.v1beta1.EventConditionalDerivativeOrderTrigger";
  value: EventConditionalDerivativeOrderTriggerAmino;
}
export interface EventConditionalDerivativeOrderTriggerSDKType {
  market_id: Uint8Array;
  isLimitTrigger: boolean;
  triggered_order_hash: Uint8Array;
  placed_order_hash: Uint8Array;
}
export interface EventOrderFail {
  account: Uint8Array;
  hashes: Uint8Array[];
  flags: number[];
}
export interface EventOrderFailProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EventOrderFail";
  value: Uint8Array;
}
export interface EventOrderFailAmino {
  account: Uint8Array;
  hashes: Uint8Array[];
  flags: number[];
}
export interface EventOrderFailAminoMsg {
  type: "/injective.exchange.v1beta1.EventOrderFail";
  value: EventOrderFailAmino;
}
export interface EventOrderFailSDKType {
  account: Uint8Array;
  hashes: Uint8Array[];
  flags: number[];
}
function createBaseEventBatchSpotExecution(): EventBatchSpotExecution {
  return {
    marketId: "",
    isBuy: false,
    executionType: 0,
    trades: []
  };
}
export const EventBatchSpotExecution = {
  typeUrl: "/injective.exchange.v1beta1.EventBatchSpotExecution",
  encode(message: EventBatchSpotExecution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isBuy === true) {
      writer.uint32(16).bool(message.isBuy);
    }
    if (message.executionType !== 0) {
      writer.uint32(24).int32(message.executionType);
    }
    for (const v of message.trades) {
      TradeLog.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBatchSpotExecution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBatchSpotExecution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.isBuy = reader.bool();
          break;
        case 3:
          message.executionType = (reader.int32() as any);
          break;
        case 4:
          message.trades.push(TradeLog.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBatchSpotExecution>): EventBatchSpotExecution {
    const message = createBaseEventBatchSpotExecution();
    message.marketId = object.marketId ?? "";
    message.isBuy = object.isBuy ?? false;
    message.executionType = object.executionType ?? 0;
    message.trades = object.trades?.map(e => TradeLog.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventBatchSpotExecutionAmino): EventBatchSpotExecution {
    return {
      marketId: object.market_id,
      isBuy: object.is_buy,
      executionType: isSet(object.executionType) ? executionTypeFromJSON(object.executionType) : -1,
      trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => TradeLog.fromAmino(e)) : []
    };
  },
  toAmino(message: EventBatchSpotExecution): EventBatchSpotExecutionAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.is_buy = message.isBuy;
    obj.executionType = message.executionType;
    if (message.trades) {
      obj.trades = message.trades.map(e => e ? TradeLog.toAmino(e) : undefined);
    } else {
      obj.trades = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventBatchSpotExecutionAminoMsg): EventBatchSpotExecution {
    return EventBatchSpotExecution.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBatchSpotExecutionProtoMsg): EventBatchSpotExecution {
    return EventBatchSpotExecution.decode(message.value);
  },
  toProto(message: EventBatchSpotExecution): Uint8Array {
    return EventBatchSpotExecution.encode(message).finish();
  },
  toProtoMsg(message: EventBatchSpotExecution): EventBatchSpotExecutionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventBatchSpotExecution",
      value: EventBatchSpotExecution.encode(message).finish()
    };
  }
};
function createBaseEventBatchDerivativeExecution(): EventBatchDerivativeExecution {
  return {
    marketId: "",
    isBuy: false,
    isLiquidation: false,
    cumulativeFunding: undefined,
    executionType: 0,
    trades: []
  };
}
export const EventBatchDerivativeExecution = {
  typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativeExecution",
  encode(message: EventBatchDerivativeExecution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isBuy === true) {
      writer.uint32(16).bool(message.isBuy);
    }
    if (message.isLiquidation === true) {
      writer.uint32(24).bool(message.isLiquidation);
    }
    if (message.cumulativeFunding !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.cumulativeFunding, 18).atomics);
    }
    if (message.executionType !== 0) {
      writer.uint32(40).int32(message.executionType);
    }
    for (const v of message.trades) {
      DerivativeTradeLog.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBatchDerivativeExecution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBatchDerivativeExecution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.isBuy = reader.bool();
          break;
        case 3:
          message.isLiquidation = reader.bool();
          break;
        case 4:
          message.cumulativeFunding = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.executionType = (reader.int32() as any);
          break;
        case 6:
          message.trades.push(DerivativeTradeLog.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBatchDerivativeExecution>): EventBatchDerivativeExecution {
    const message = createBaseEventBatchDerivativeExecution();
    message.marketId = object.marketId ?? "";
    message.isBuy = object.isBuy ?? false;
    message.isLiquidation = object.isLiquidation ?? false;
    message.cumulativeFunding = object.cumulativeFunding ?? undefined;
    message.executionType = object.executionType ?? 0;
    message.trades = object.trades?.map(e => DerivativeTradeLog.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventBatchDerivativeExecutionAmino): EventBatchDerivativeExecution {
    return {
      marketId: object.market_id,
      isBuy: object.is_buy,
      isLiquidation: object.is_liquidation,
      cumulativeFunding: object?.cumulative_funding,
      executionType: isSet(object.executionType) ? executionTypeFromJSON(object.executionType) : -1,
      trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => DerivativeTradeLog.fromAmino(e)) : []
    };
  },
  toAmino(message: EventBatchDerivativeExecution): EventBatchDerivativeExecutionAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.is_buy = message.isBuy;
    obj.is_liquidation = message.isLiquidation;
    obj.cumulative_funding = message.cumulativeFunding;
    obj.executionType = message.executionType;
    if (message.trades) {
      obj.trades = message.trades.map(e => e ? DerivativeTradeLog.toAmino(e) : undefined);
    } else {
      obj.trades = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventBatchDerivativeExecutionAminoMsg): EventBatchDerivativeExecution {
    return EventBatchDerivativeExecution.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBatchDerivativeExecutionProtoMsg): EventBatchDerivativeExecution {
    return EventBatchDerivativeExecution.decode(message.value);
  },
  toProto(message: EventBatchDerivativeExecution): Uint8Array {
    return EventBatchDerivativeExecution.encode(message).finish();
  },
  toProtoMsg(message: EventBatchDerivativeExecution): EventBatchDerivativeExecutionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativeExecution",
      value: EventBatchDerivativeExecution.encode(message).finish()
    };
  }
};
function createBaseEventLostFundsFromLiquidation(): EventLostFundsFromLiquidation {
  return {
    marketId: "",
    subaccountId: new Uint8Array(),
    lostFundsFromAvailableDuringPayout: "",
    lostFundsFromOrderCancels: ""
  };
}
export const EventLostFundsFromLiquidation = {
  typeUrl: "/injective.exchange.v1beta1.EventLostFundsFromLiquidation",
  encode(message: EventLostFundsFromLiquidation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId.length !== 0) {
      writer.uint32(18).bytes(message.subaccountId);
    }
    if (message.lostFundsFromAvailableDuringPayout !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.lostFundsFromAvailableDuringPayout, 18).atomics);
    }
    if (message.lostFundsFromOrderCancels !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.lostFundsFromOrderCancels, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventLostFundsFromLiquidation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLostFundsFromLiquidation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.subaccountId = reader.bytes();
          break;
        case 3:
          message.lostFundsFromAvailableDuringPayout = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.lostFundsFromOrderCancels = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventLostFundsFromLiquidation>): EventLostFundsFromLiquidation {
    const message = createBaseEventLostFundsFromLiquidation();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.lostFundsFromAvailableDuringPayout = object.lostFundsFromAvailableDuringPayout ?? "";
    message.lostFundsFromOrderCancels = object.lostFundsFromOrderCancels ?? "";
    return message;
  },
  fromAmino(object: EventLostFundsFromLiquidationAmino): EventLostFundsFromLiquidation {
    return {
      marketId: object.market_id,
      subaccountId: object.subaccount_id,
      lostFundsFromAvailableDuringPayout: object.lost_funds_from_available_during_payout,
      lostFundsFromOrderCancels: object.lost_funds_from_order_cancels
    };
  },
  toAmino(message: EventLostFundsFromLiquidation): EventLostFundsFromLiquidationAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    obj.lost_funds_from_available_during_payout = message.lostFundsFromAvailableDuringPayout;
    obj.lost_funds_from_order_cancels = message.lostFundsFromOrderCancels;
    return obj;
  },
  fromAminoMsg(object: EventLostFundsFromLiquidationAminoMsg): EventLostFundsFromLiquidation {
    return EventLostFundsFromLiquidation.fromAmino(object.value);
  },
  fromProtoMsg(message: EventLostFundsFromLiquidationProtoMsg): EventLostFundsFromLiquidation {
    return EventLostFundsFromLiquidation.decode(message.value);
  },
  toProto(message: EventLostFundsFromLiquidation): Uint8Array {
    return EventLostFundsFromLiquidation.encode(message).finish();
  },
  toProtoMsg(message: EventLostFundsFromLiquidation): EventLostFundsFromLiquidationProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventLostFundsFromLiquidation",
      value: EventLostFundsFromLiquidation.encode(message).finish()
    };
  }
};
function createBaseEventBatchDerivativePosition(): EventBatchDerivativePosition {
  return {
    marketId: "",
    positions: []
  };
}
export const EventBatchDerivativePosition = {
  typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativePosition",
  encode(message: EventBatchDerivativePosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.positions) {
      SubaccountPosition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBatchDerivativePosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBatchDerivativePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.positions.push(SubaccountPosition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBatchDerivativePosition>): EventBatchDerivativePosition {
    const message = createBaseEventBatchDerivativePosition();
    message.marketId = object.marketId ?? "";
    message.positions = object.positions?.map(e => SubaccountPosition.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventBatchDerivativePositionAmino): EventBatchDerivativePosition {
    return {
      marketId: object.market_id,
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => SubaccountPosition.fromAmino(e)) : []
    };
  },
  toAmino(message: EventBatchDerivativePosition): EventBatchDerivativePositionAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? SubaccountPosition.toAmino(e) : undefined);
    } else {
      obj.positions = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventBatchDerivativePositionAminoMsg): EventBatchDerivativePosition {
    return EventBatchDerivativePosition.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBatchDerivativePositionProtoMsg): EventBatchDerivativePosition {
    return EventBatchDerivativePosition.decode(message.value);
  },
  toProto(message: EventBatchDerivativePosition): Uint8Array {
    return EventBatchDerivativePosition.encode(message).finish();
  },
  toProtoMsg(message: EventBatchDerivativePosition): EventBatchDerivativePositionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventBatchDerivativePosition",
      value: EventBatchDerivativePosition.encode(message).finish()
    };
  }
};
function createBaseEventDerivativeMarketPaused(): EventDerivativeMarketPaused {
  return {
    marketId: "",
    settlePrice: "",
    totalMissingFunds: "",
    missingFundsRate: ""
  };
}
export const EventDerivativeMarketPaused = {
  typeUrl: "/injective.exchange.v1beta1.EventDerivativeMarketPaused",
  encode(message: EventDerivativeMarketPaused, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.settlePrice !== "") {
      writer.uint32(18).string(message.settlePrice);
    }
    if (message.totalMissingFunds !== "") {
      writer.uint32(26).string(message.totalMissingFunds);
    }
    if (message.missingFundsRate !== "") {
      writer.uint32(34).string(message.missingFundsRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDerivativeMarketPaused {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDerivativeMarketPaused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.settlePrice = reader.string();
          break;
        case 3:
          message.totalMissingFunds = reader.string();
          break;
        case 4:
          message.missingFundsRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventDerivativeMarketPaused>): EventDerivativeMarketPaused {
    const message = createBaseEventDerivativeMarketPaused();
    message.marketId = object.marketId ?? "";
    message.settlePrice = object.settlePrice ?? "";
    message.totalMissingFunds = object.totalMissingFunds ?? "";
    message.missingFundsRate = object.missingFundsRate ?? "";
    return message;
  },
  fromAmino(object: EventDerivativeMarketPausedAmino): EventDerivativeMarketPaused {
    return {
      marketId: object.market_id,
      settlePrice: object.settle_price,
      totalMissingFunds: object.total_missing_funds,
      missingFundsRate: object.missing_funds_rate
    };
  },
  toAmino(message: EventDerivativeMarketPaused): EventDerivativeMarketPausedAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.settle_price = message.settlePrice;
    obj.total_missing_funds = message.totalMissingFunds;
    obj.missing_funds_rate = message.missingFundsRate;
    return obj;
  },
  fromAminoMsg(object: EventDerivativeMarketPausedAminoMsg): EventDerivativeMarketPaused {
    return EventDerivativeMarketPaused.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDerivativeMarketPausedProtoMsg): EventDerivativeMarketPaused {
    return EventDerivativeMarketPaused.decode(message.value);
  },
  toProto(message: EventDerivativeMarketPaused): Uint8Array {
    return EventDerivativeMarketPaused.encode(message).finish();
  },
  toProtoMsg(message: EventDerivativeMarketPaused): EventDerivativeMarketPausedProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventDerivativeMarketPaused",
      value: EventDerivativeMarketPaused.encode(message).finish()
    };
  }
};
function createBaseEventBinaryOptionsMarketUpdate(): EventBinaryOptionsMarketUpdate {
  return {
    market: BinaryOptionsMarket.fromPartial({})
  };
}
export const EventBinaryOptionsMarketUpdate = {
  typeUrl: "/injective.exchange.v1beta1.EventBinaryOptionsMarketUpdate",
  encode(message: EventBinaryOptionsMarketUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      BinaryOptionsMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBinaryOptionsMarketUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBinaryOptionsMarketUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = BinaryOptionsMarket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBinaryOptionsMarketUpdate>): EventBinaryOptionsMarketUpdate {
    const message = createBaseEventBinaryOptionsMarketUpdate();
    message.market = object.market !== undefined && object.market !== null ? BinaryOptionsMarket.fromPartial(object.market) : undefined;
    return message;
  },
  fromAmino(object: EventBinaryOptionsMarketUpdateAmino): EventBinaryOptionsMarketUpdate {
    return {
      market: object?.market ? BinaryOptionsMarket.fromAmino(object.market) : undefined
    };
  },
  toAmino(message: EventBinaryOptionsMarketUpdate): EventBinaryOptionsMarketUpdateAmino {
    const obj: any = {};
    obj.market = message.market ? BinaryOptionsMarket.toAmino(message.market) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBinaryOptionsMarketUpdateAminoMsg): EventBinaryOptionsMarketUpdate {
    return EventBinaryOptionsMarketUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBinaryOptionsMarketUpdateProtoMsg): EventBinaryOptionsMarketUpdate {
    return EventBinaryOptionsMarketUpdate.decode(message.value);
  },
  toProto(message: EventBinaryOptionsMarketUpdate): Uint8Array {
    return EventBinaryOptionsMarketUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventBinaryOptionsMarketUpdate): EventBinaryOptionsMarketUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventBinaryOptionsMarketUpdate",
      value: EventBinaryOptionsMarketUpdate.encode(message).finish()
    };
  }
};
function createBaseEventNewSpotOrders(): EventNewSpotOrders {
  return {
    marketId: "",
    buyOrders: [],
    sellOrders: []
  };
}
export const EventNewSpotOrders = {
  typeUrl: "/injective.exchange.v1beta1.EventNewSpotOrders",
  encode(message: EventNewSpotOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.buyOrders) {
      SpotLimitOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.sellOrders) {
      SpotLimitOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventNewSpotOrders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNewSpotOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.buyOrders.push(SpotLimitOrder.decode(reader, reader.uint32()));
          break;
        case 3:
          message.sellOrders.push(SpotLimitOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventNewSpotOrders>): EventNewSpotOrders {
    const message = createBaseEventNewSpotOrders();
    message.marketId = object.marketId ?? "";
    message.buyOrders = object.buyOrders?.map(e => SpotLimitOrder.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => SpotLimitOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventNewSpotOrdersAmino): EventNewSpotOrders {
    return {
      marketId: object.market_id,
      buyOrders: Array.isArray(object?.buy_orders) ? object.buy_orders.map((e: any) => SpotLimitOrder.fromAmino(e)) : [],
      sellOrders: Array.isArray(object?.sell_orders) ? object.sell_orders.map((e: any) => SpotLimitOrder.fromAmino(e)) : []
    };
  },
  toAmino(message: EventNewSpotOrders): EventNewSpotOrdersAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    if (message.buyOrders) {
      obj.buy_orders = message.buyOrders.map(e => e ? SpotLimitOrder.toAmino(e) : undefined);
    } else {
      obj.buy_orders = [];
    }
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? SpotLimitOrder.toAmino(e) : undefined);
    } else {
      obj.sell_orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventNewSpotOrdersAminoMsg): EventNewSpotOrders {
    return EventNewSpotOrders.fromAmino(object.value);
  },
  fromProtoMsg(message: EventNewSpotOrdersProtoMsg): EventNewSpotOrders {
    return EventNewSpotOrders.decode(message.value);
  },
  toProto(message: EventNewSpotOrders): Uint8Array {
    return EventNewSpotOrders.encode(message).finish();
  },
  toProtoMsg(message: EventNewSpotOrders): EventNewSpotOrdersProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventNewSpotOrders",
      value: EventNewSpotOrders.encode(message).finish()
    };
  }
};
function createBaseEventNewDerivativeOrders(): EventNewDerivativeOrders {
  return {
    marketId: "",
    buyOrders: [],
    sellOrders: []
  };
}
export const EventNewDerivativeOrders = {
  typeUrl: "/injective.exchange.v1beta1.EventNewDerivativeOrders",
  encode(message: EventNewDerivativeOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.buyOrders) {
      DerivativeLimitOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.sellOrders) {
      DerivativeLimitOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventNewDerivativeOrders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNewDerivativeOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.buyOrders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
          break;
        case 3:
          message.sellOrders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventNewDerivativeOrders>): EventNewDerivativeOrders {
    const message = createBaseEventNewDerivativeOrders();
    message.marketId = object.marketId ?? "";
    message.buyOrders = object.buyOrders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => DerivativeLimitOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventNewDerivativeOrdersAmino): EventNewDerivativeOrders {
    return {
      marketId: object.market_id,
      buyOrders: Array.isArray(object?.buy_orders) ? object.buy_orders.map((e: any) => DerivativeLimitOrder.fromAmino(e)) : [],
      sellOrders: Array.isArray(object?.sell_orders) ? object.sell_orders.map((e: any) => DerivativeLimitOrder.fromAmino(e)) : []
    };
  },
  toAmino(message: EventNewDerivativeOrders): EventNewDerivativeOrdersAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    if (message.buyOrders) {
      obj.buy_orders = message.buyOrders.map(e => e ? DerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.buy_orders = [];
    }
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? DerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.sell_orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventNewDerivativeOrdersAminoMsg): EventNewDerivativeOrders {
    return EventNewDerivativeOrders.fromAmino(object.value);
  },
  fromProtoMsg(message: EventNewDerivativeOrdersProtoMsg): EventNewDerivativeOrders {
    return EventNewDerivativeOrders.decode(message.value);
  },
  toProto(message: EventNewDerivativeOrders): Uint8Array {
    return EventNewDerivativeOrders.encode(message).finish();
  },
  toProtoMsg(message: EventNewDerivativeOrders): EventNewDerivativeOrdersProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventNewDerivativeOrders",
      value: EventNewDerivativeOrders.encode(message).finish()
    };
  }
};
function createBaseEventCancelSpotOrder(): EventCancelSpotOrder {
  return {
    marketId: "",
    order: SpotLimitOrder.fromPartial({})
  };
}
export const EventCancelSpotOrder = {
  typeUrl: "/injective.exchange.v1beta1.EventCancelSpotOrder",
  encode(message: EventCancelSpotOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.order !== undefined) {
      SpotLimitOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCancelSpotOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelSpotOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.order = SpotLimitOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventCancelSpotOrder>): EventCancelSpotOrder {
    const message = createBaseEventCancelSpotOrder();
    message.marketId = object.marketId ?? "";
    message.order = object.order !== undefined && object.order !== null ? SpotLimitOrder.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: EventCancelSpotOrderAmino): EventCancelSpotOrder {
    return {
      marketId: object.market_id,
      order: object?.order ? SpotLimitOrder.fromAmino(object.order) : undefined
    };
  },
  toAmino(message: EventCancelSpotOrder): EventCancelSpotOrderAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.order = message.order ? SpotLimitOrder.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCancelSpotOrderAminoMsg): EventCancelSpotOrder {
    return EventCancelSpotOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelSpotOrderProtoMsg): EventCancelSpotOrder {
    return EventCancelSpotOrder.decode(message.value);
  },
  toProto(message: EventCancelSpotOrder): Uint8Array {
    return EventCancelSpotOrder.encode(message).finish();
  },
  toProtoMsg(message: EventCancelSpotOrder): EventCancelSpotOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventCancelSpotOrder",
      value: EventCancelSpotOrder.encode(message).finish()
    };
  }
};
function createBaseEventSpotMarketUpdate(): EventSpotMarketUpdate {
  return {
    market: SpotMarket.fromPartial({})
  };
}
export const EventSpotMarketUpdate = {
  typeUrl: "/injective.exchange.v1beta1.EventSpotMarketUpdate",
  encode(message: EventSpotMarketUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSpotMarketUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSpotMarketUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = SpotMarket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventSpotMarketUpdate>): EventSpotMarketUpdate {
    const message = createBaseEventSpotMarketUpdate();
    message.market = object.market !== undefined && object.market !== null ? SpotMarket.fromPartial(object.market) : undefined;
    return message;
  },
  fromAmino(object: EventSpotMarketUpdateAmino): EventSpotMarketUpdate {
    return {
      market: object?.market ? SpotMarket.fromAmino(object.market) : undefined
    };
  },
  toAmino(message: EventSpotMarketUpdate): EventSpotMarketUpdateAmino {
    const obj: any = {};
    obj.market = message.market ? SpotMarket.toAmino(message.market) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSpotMarketUpdateAminoMsg): EventSpotMarketUpdate {
    return EventSpotMarketUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSpotMarketUpdateProtoMsg): EventSpotMarketUpdate {
    return EventSpotMarketUpdate.decode(message.value);
  },
  toProto(message: EventSpotMarketUpdate): Uint8Array {
    return EventSpotMarketUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventSpotMarketUpdate): EventSpotMarketUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventSpotMarketUpdate",
      value: EventSpotMarketUpdate.encode(message).finish()
    };
  }
};
function createBaseEventPerpetualMarketUpdate(): EventPerpetualMarketUpdate {
  return {
    market: DerivativeMarket.fromPartial({}),
    perpetualMarketInfo: undefined,
    funding: undefined
  };
}
export const EventPerpetualMarketUpdate = {
  typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketUpdate",
  encode(message: EventPerpetualMarketUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.perpetualMarketInfo !== undefined) {
      PerpetualMarketInfo.encode(message.perpetualMarketInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.funding !== undefined) {
      PerpetualMarketFunding.encode(message.funding, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventPerpetualMarketUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPerpetualMarketUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = DerivativeMarket.decode(reader, reader.uint32());
          break;
        case 2:
          message.perpetualMarketInfo = PerpetualMarketInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.funding = PerpetualMarketFunding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventPerpetualMarketUpdate>): EventPerpetualMarketUpdate {
    const message = createBaseEventPerpetualMarketUpdate();
    message.market = object.market !== undefined && object.market !== null ? DerivativeMarket.fromPartial(object.market) : undefined;
    message.perpetualMarketInfo = object.perpetualMarketInfo !== undefined && object.perpetualMarketInfo !== null ? PerpetualMarketInfo.fromPartial(object.perpetualMarketInfo) : undefined;
    message.funding = object.funding !== undefined && object.funding !== null ? PerpetualMarketFunding.fromPartial(object.funding) : undefined;
    return message;
  },
  fromAmino(object: EventPerpetualMarketUpdateAmino): EventPerpetualMarketUpdate {
    return {
      market: object?.market ? DerivativeMarket.fromAmino(object.market) : undefined,
      perpetualMarketInfo: object?.perpetual_market_info ? PerpetualMarketInfo.fromAmino(object.perpetual_market_info) : undefined,
      funding: object?.funding ? PerpetualMarketFunding.fromAmino(object.funding) : undefined
    };
  },
  toAmino(message: EventPerpetualMarketUpdate): EventPerpetualMarketUpdateAmino {
    const obj: any = {};
    obj.market = message.market ? DerivativeMarket.toAmino(message.market) : undefined;
    obj.perpetual_market_info = message.perpetualMarketInfo ? PerpetualMarketInfo.toAmino(message.perpetualMarketInfo) : undefined;
    obj.funding = message.funding ? PerpetualMarketFunding.toAmino(message.funding) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventPerpetualMarketUpdateAminoMsg): EventPerpetualMarketUpdate {
    return EventPerpetualMarketUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPerpetualMarketUpdateProtoMsg): EventPerpetualMarketUpdate {
    return EventPerpetualMarketUpdate.decode(message.value);
  },
  toProto(message: EventPerpetualMarketUpdate): Uint8Array {
    return EventPerpetualMarketUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventPerpetualMarketUpdate): EventPerpetualMarketUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketUpdate",
      value: EventPerpetualMarketUpdate.encode(message).finish()
    };
  }
};
function createBaseEventExpiryFuturesMarketUpdate(): EventExpiryFuturesMarketUpdate {
  return {
    market: DerivativeMarket.fromPartial({}),
    expiryFuturesMarketInfo: undefined
  };
}
export const EventExpiryFuturesMarketUpdate = {
  typeUrl: "/injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate",
  encode(message: EventExpiryFuturesMarketUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiryFuturesMarketInfo !== undefined) {
      ExpiryFuturesMarketInfo.encode(message.expiryFuturesMarketInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventExpiryFuturesMarketUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExpiryFuturesMarketUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = DerivativeMarket.decode(reader, reader.uint32());
          break;
        case 3:
          message.expiryFuturesMarketInfo = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventExpiryFuturesMarketUpdate>): EventExpiryFuturesMarketUpdate {
    const message = createBaseEventExpiryFuturesMarketUpdate();
    message.market = object.market !== undefined && object.market !== null ? DerivativeMarket.fromPartial(object.market) : undefined;
    message.expiryFuturesMarketInfo = object.expiryFuturesMarketInfo !== undefined && object.expiryFuturesMarketInfo !== null ? ExpiryFuturesMarketInfo.fromPartial(object.expiryFuturesMarketInfo) : undefined;
    return message;
  },
  fromAmino(object: EventExpiryFuturesMarketUpdateAmino): EventExpiryFuturesMarketUpdate {
    return {
      market: object?.market ? DerivativeMarket.fromAmino(object.market) : undefined,
      expiryFuturesMarketInfo: object?.expiry_futures_market_info ? ExpiryFuturesMarketInfo.fromAmino(object.expiry_futures_market_info) : undefined
    };
  },
  toAmino(message: EventExpiryFuturesMarketUpdate): EventExpiryFuturesMarketUpdateAmino {
    const obj: any = {};
    obj.market = message.market ? DerivativeMarket.toAmino(message.market) : undefined;
    obj.expiry_futures_market_info = message.expiryFuturesMarketInfo ? ExpiryFuturesMarketInfo.toAmino(message.expiryFuturesMarketInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventExpiryFuturesMarketUpdateAminoMsg): EventExpiryFuturesMarketUpdate {
    return EventExpiryFuturesMarketUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventExpiryFuturesMarketUpdateProtoMsg): EventExpiryFuturesMarketUpdate {
    return EventExpiryFuturesMarketUpdate.decode(message.value);
  },
  toProto(message: EventExpiryFuturesMarketUpdate): Uint8Array {
    return EventExpiryFuturesMarketUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventExpiryFuturesMarketUpdate): EventExpiryFuturesMarketUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate",
      value: EventExpiryFuturesMarketUpdate.encode(message).finish()
    };
  }
};
function createBaseEventPerpetualMarketFundingUpdate(): EventPerpetualMarketFundingUpdate {
  return {
    marketId: "",
    funding: PerpetualMarketFunding.fromPartial({}),
    isHourlyFunding: false,
    fundingRate: undefined,
    markPrice: undefined
  };
}
export const EventPerpetualMarketFundingUpdate = {
  typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate",
  encode(message: EventPerpetualMarketFundingUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.funding !== undefined) {
      PerpetualMarketFunding.encode(message.funding, writer.uint32(18).fork()).ldelim();
    }
    if (message.isHourlyFunding === true) {
      writer.uint32(24).bool(message.isHourlyFunding);
    }
    if (message.fundingRate !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.fundingRate, 18).atomics);
    }
    if (message.markPrice !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.markPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventPerpetualMarketFundingUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPerpetualMarketFundingUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.funding = PerpetualMarketFunding.decode(reader, reader.uint32());
          break;
        case 3:
          message.isHourlyFunding = reader.bool();
          break;
        case 4:
          message.fundingRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.markPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventPerpetualMarketFundingUpdate>): EventPerpetualMarketFundingUpdate {
    const message = createBaseEventPerpetualMarketFundingUpdate();
    message.marketId = object.marketId ?? "";
    message.funding = object.funding !== undefined && object.funding !== null ? PerpetualMarketFunding.fromPartial(object.funding) : undefined;
    message.isHourlyFunding = object.isHourlyFunding ?? false;
    message.fundingRate = object.fundingRate ?? undefined;
    message.markPrice = object.markPrice ?? undefined;
    return message;
  },
  fromAmino(object: EventPerpetualMarketFundingUpdateAmino): EventPerpetualMarketFundingUpdate {
    return {
      marketId: object.market_id,
      funding: object?.funding ? PerpetualMarketFunding.fromAmino(object.funding) : undefined,
      isHourlyFunding: object.is_hourly_funding,
      fundingRate: object?.funding_rate,
      markPrice: object?.mark_price
    };
  },
  toAmino(message: EventPerpetualMarketFundingUpdate): EventPerpetualMarketFundingUpdateAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.funding = message.funding ? PerpetualMarketFunding.toAmino(message.funding) : undefined;
    obj.is_hourly_funding = message.isHourlyFunding;
    obj.funding_rate = message.fundingRate;
    obj.mark_price = message.markPrice;
    return obj;
  },
  fromAminoMsg(object: EventPerpetualMarketFundingUpdateAminoMsg): EventPerpetualMarketFundingUpdate {
    return EventPerpetualMarketFundingUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPerpetualMarketFundingUpdateProtoMsg): EventPerpetualMarketFundingUpdate {
    return EventPerpetualMarketFundingUpdate.decode(message.value);
  },
  toProto(message: EventPerpetualMarketFundingUpdate): Uint8Array {
    return EventPerpetualMarketFundingUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventPerpetualMarketFundingUpdate): EventPerpetualMarketFundingUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate",
      value: EventPerpetualMarketFundingUpdate.encode(message).finish()
    };
  }
};
function createBaseEventSubaccountDeposit(): EventSubaccountDeposit {
  return {
    srcAddress: "",
    subaccountId: new Uint8Array(),
    amount: Coin.fromPartial({})
  };
}
export const EventSubaccountDeposit = {
  typeUrl: "/injective.exchange.v1beta1.EventSubaccountDeposit",
  encode(message: EventSubaccountDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.srcAddress !== "") {
      writer.uint32(10).string(message.srcAddress);
    }
    if (message.subaccountId.length !== 0) {
      writer.uint32(18).bytes(message.subaccountId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSubaccountDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubaccountDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.srcAddress = reader.string();
          break;
        case 2:
          message.subaccountId = reader.bytes();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventSubaccountDeposit>): EventSubaccountDeposit {
    const message = createBaseEventSubaccountDeposit();
    message.srcAddress = object.srcAddress ?? "";
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: EventSubaccountDepositAmino): EventSubaccountDeposit {
    return {
      srcAddress: object.src_address,
      subaccountId: object.subaccount_id,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: EventSubaccountDeposit): EventSubaccountDepositAmino {
    const obj: any = {};
    obj.src_address = message.srcAddress;
    obj.subaccount_id = message.subaccountId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSubaccountDepositAminoMsg): EventSubaccountDeposit {
    return EventSubaccountDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSubaccountDepositProtoMsg): EventSubaccountDeposit {
    return EventSubaccountDeposit.decode(message.value);
  },
  toProto(message: EventSubaccountDeposit): Uint8Array {
    return EventSubaccountDeposit.encode(message).finish();
  },
  toProtoMsg(message: EventSubaccountDeposit): EventSubaccountDepositProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventSubaccountDeposit",
      value: EventSubaccountDeposit.encode(message).finish()
    };
  }
};
function createBaseEventSubaccountWithdraw(): EventSubaccountWithdraw {
  return {
    subaccountId: new Uint8Array(),
    dstAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const EventSubaccountWithdraw = {
  typeUrl: "/injective.exchange.v1beta1.EventSubaccountWithdraw",
  encode(message: EventSubaccountWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId.length !== 0) {
      writer.uint32(10).bytes(message.subaccountId);
    }
    if (message.dstAddress !== "") {
      writer.uint32(18).string(message.dstAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSubaccountWithdraw {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubaccountWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.bytes();
          break;
        case 2:
          message.dstAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventSubaccountWithdraw>): EventSubaccountWithdraw {
    const message = createBaseEventSubaccountWithdraw();
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.dstAddress = object.dstAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: EventSubaccountWithdrawAmino): EventSubaccountWithdraw {
    return {
      subaccountId: object.subaccount_id,
      dstAddress: object.dst_address,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: EventSubaccountWithdraw): EventSubaccountWithdrawAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.dst_address = message.dstAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSubaccountWithdrawAminoMsg): EventSubaccountWithdraw {
    return EventSubaccountWithdraw.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSubaccountWithdrawProtoMsg): EventSubaccountWithdraw {
    return EventSubaccountWithdraw.decode(message.value);
  },
  toProto(message: EventSubaccountWithdraw): Uint8Array {
    return EventSubaccountWithdraw.encode(message).finish();
  },
  toProtoMsg(message: EventSubaccountWithdraw): EventSubaccountWithdrawProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventSubaccountWithdraw",
      value: EventSubaccountWithdraw.encode(message).finish()
    };
  }
};
function createBaseEventSubaccountBalanceTransfer(): EventSubaccountBalanceTransfer {
  return {
    srcSubaccountId: "",
    dstSubaccountId: "",
    amount: Coin.fromPartial({})
  };
}
export const EventSubaccountBalanceTransfer = {
  typeUrl: "/injective.exchange.v1beta1.EventSubaccountBalanceTransfer",
  encode(message: EventSubaccountBalanceTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.srcSubaccountId !== "") {
      writer.uint32(10).string(message.srcSubaccountId);
    }
    if (message.dstSubaccountId !== "") {
      writer.uint32(18).string(message.dstSubaccountId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSubaccountBalanceTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubaccountBalanceTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.srcSubaccountId = reader.string();
          break;
        case 2:
          message.dstSubaccountId = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventSubaccountBalanceTransfer>): EventSubaccountBalanceTransfer {
    const message = createBaseEventSubaccountBalanceTransfer();
    message.srcSubaccountId = object.srcSubaccountId ?? "";
    message.dstSubaccountId = object.dstSubaccountId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: EventSubaccountBalanceTransferAmino): EventSubaccountBalanceTransfer {
    return {
      srcSubaccountId: object.src_subaccount_id,
      dstSubaccountId: object.dst_subaccount_id,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: EventSubaccountBalanceTransfer): EventSubaccountBalanceTransferAmino {
    const obj: any = {};
    obj.src_subaccount_id = message.srcSubaccountId;
    obj.dst_subaccount_id = message.dstSubaccountId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSubaccountBalanceTransferAminoMsg): EventSubaccountBalanceTransfer {
    return EventSubaccountBalanceTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSubaccountBalanceTransferProtoMsg): EventSubaccountBalanceTransfer {
    return EventSubaccountBalanceTransfer.decode(message.value);
  },
  toProto(message: EventSubaccountBalanceTransfer): Uint8Array {
    return EventSubaccountBalanceTransfer.encode(message).finish();
  },
  toProtoMsg(message: EventSubaccountBalanceTransfer): EventSubaccountBalanceTransferProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventSubaccountBalanceTransfer",
      value: EventSubaccountBalanceTransfer.encode(message).finish()
    };
  }
};
function createBaseEventBatchDepositUpdate(): EventBatchDepositUpdate {
  return {
    depositUpdates: []
  };
}
export const EventBatchDepositUpdate = {
  typeUrl: "/injective.exchange.v1beta1.EventBatchDepositUpdate",
  encode(message: EventBatchDepositUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.depositUpdates) {
      DepositUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBatchDepositUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBatchDepositUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositUpdates.push(DepositUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBatchDepositUpdate>): EventBatchDepositUpdate {
    const message = createBaseEventBatchDepositUpdate();
    message.depositUpdates = object.depositUpdates?.map(e => DepositUpdate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventBatchDepositUpdateAmino): EventBatchDepositUpdate {
    return {
      depositUpdates: Array.isArray(object?.deposit_updates) ? object.deposit_updates.map((e: any) => DepositUpdate.fromAmino(e)) : []
    };
  },
  toAmino(message: EventBatchDepositUpdate): EventBatchDepositUpdateAmino {
    const obj: any = {};
    if (message.depositUpdates) {
      obj.deposit_updates = message.depositUpdates.map(e => e ? DepositUpdate.toAmino(e) : undefined);
    } else {
      obj.deposit_updates = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventBatchDepositUpdateAminoMsg): EventBatchDepositUpdate {
    return EventBatchDepositUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBatchDepositUpdateProtoMsg): EventBatchDepositUpdate {
    return EventBatchDepositUpdate.decode(message.value);
  },
  toProto(message: EventBatchDepositUpdate): Uint8Array {
    return EventBatchDepositUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventBatchDepositUpdate): EventBatchDepositUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventBatchDepositUpdate",
      value: EventBatchDepositUpdate.encode(message).finish()
    };
  }
};
function createBaseDerivativeMarketOrderCancel(): DerivativeMarketOrderCancel {
  return {
    marketOrder: undefined,
    cancelQuantity: ""
  };
}
export const DerivativeMarketOrderCancel = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrderCancel",
  encode(message: DerivativeMarketOrderCancel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketOrder !== undefined) {
      DerivativeMarketOrder.encode(message.marketOrder, writer.uint32(10).fork()).ldelim();
    }
    if (message.cancelQuantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.cancelQuantity, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DerivativeMarketOrderCancel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeMarketOrderCancel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketOrder = DerivativeMarketOrder.decode(reader, reader.uint32());
          break;
        case 2:
          message.cancelQuantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DerivativeMarketOrderCancel>): DerivativeMarketOrderCancel {
    const message = createBaseDerivativeMarketOrderCancel();
    message.marketOrder = object.marketOrder !== undefined && object.marketOrder !== null ? DerivativeMarketOrder.fromPartial(object.marketOrder) : undefined;
    message.cancelQuantity = object.cancelQuantity ?? "";
    return message;
  },
  fromAmino(object: DerivativeMarketOrderCancelAmino): DerivativeMarketOrderCancel {
    return {
      marketOrder: object?.market_order ? DerivativeMarketOrder.fromAmino(object.market_order) : undefined,
      cancelQuantity: object.cancel_quantity
    };
  },
  toAmino(message: DerivativeMarketOrderCancel): DerivativeMarketOrderCancelAmino {
    const obj: any = {};
    obj.market_order = message.marketOrder ? DerivativeMarketOrder.toAmino(message.marketOrder) : undefined;
    obj.cancel_quantity = message.cancelQuantity;
    return obj;
  },
  fromAminoMsg(object: DerivativeMarketOrderCancelAminoMsg): DerivativeMarketOrderCancel {
    return DerivativeMarketOrderCancel.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeMarketOrderCancelProtoMsg): DerivativeMarketOrderCancel {
    return DerivativeMarketOrderCancel.decode(message.value);
  },
  toProto(message: DerivativeMarketOrderCancel): Uint8Array {
    return DerivativeMarketOrderCancel.encode(message).finish();
  },
  toProtoMsg(message: DerivativeMarketOrderCancel): DerivativeMarketOrderCancelProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrderCancel",
      value: DerivativeMarketOrderCancel.encode(message).finish()
    };
  }
};
function createBaseEventCancelDerivativeOrder(): EventCancelDerivativeOrder {
  return {
    marketId: "",
    isLimitCancel: false,
    limitOrder: undefined,
    marketOrderCancel: undefined
  };
}
export const EventCancelDerivativeOrder = {
  typeUrl: "/injective.exchange.v1beta1.EventCancelDerivativeOrder",
  encode(message: EventCancelDerivativeOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isLimitCancel === true) {
      writer.uint32(16).bool(message.isLimitCancel);
    }
    if (message.limitOrder !== undefined) {
      DerivativeLimitOrder.encode(message.limitOrder, writer.uint32(26).fork()).ldelim();
    }
    if (message.marketOrderCancel !== undefined) {
      DerivativeMarketOrderCancel.encode(message.marketOrderCancel, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCancelDerivativeOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelDerivativeOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.isLimitCancel = reader.bool();
          break;
        case 3:
          message.limitOrder = DerivativeLimitOrder.decode(reader, reader.uint32());
          break;
        case 4:
          message.marketOrderCancel = DerivativeMarketOrderCancel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventCancelDerivativeOrder>): EventCancelDerivativeOrder {
    const message = createBaseEventCancelDerivativeOrder();
    message.marketId = object.marketId ?? "";
    message.isLimitCancel = object.isLimitCancel ?? false;
    message.limitOrder = object.limitOrder !== undefined && object.limitOrder !== null ? DerivativeLimitOrder.fromPartial(object.limitOrder) : undefined;
    message.marketOrderCancel = object.marketOrderCancel !== undefined && object.marketOrderCancel !== null ? DerivativeMarketOrderCancel.fromPartial(object.marketOrderCancel) : undefined;
    return message;
  },
  fromAmino(object: EventCancelDerivativeOrderAmino): EventCancelDerivativeOrder {
    return {
      marketId: object.market_id,
      isLimitCancel: object.isLimitCancel,
      limitOrder: object?.limit_order ? DerivativeLimitOrder.fromAmino(object.limit_order) : undefined,
      marketOrderCancel: object?.market_order_cancel ? DerivativeMarketOrderCancel.fromAmino(object.market_order_cancel) : undefined
    };
  },
  toAmino(message: EventCancelDerivativeOrder): EventCancelDerivativeOrderAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.isLimitCancel = message.isLimitCancel;
    obj.limit_order = message.limitOrder ? DerivativeLimitOrder.toAmino(message.limitOrder) : undefined;
    obj.market_order_cancel = message.marketOrderCancel ? DerivativeMarketOrderCancel.toAmino(message.marketOrderCancel) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCancelDerivativeOrderAminoMsg): EventCancelDerivativeOrder {
    return EventCancelDerivativeOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelDerivativeOrderProtoMsg): EventCancelDerivativeOrder {
    return EventCancelDerivativeOrder.decode(message.value);
  },
  toProto(message: EventCancelDerivativeOrder): Uint8Array {
    return EventCancelDerivativeOrder.encode(message).finish();
  },
  toProtoMsg(message: EventCancelDerivativeOrder): EventCancelDerivativeOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventCancelDerivativeOrder",
      value: EventCancelDerivativeOrder.encode(message).finish()
    };
  }
};
function createBaseEventFeeDiscountSchedule(): EventFeeDiscountSchedule {
  return {
    schedule: undefined
  };
}
export const EventFeeDiscountSchedule = {
  typeUrl: "/injective.exchange.v1beta1.EventFeeDiscountSchedule",
  encode(message: EventFeeDiscountSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.schedule !== undefined) {
      FeeDiscountSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventFeeDiscountSchedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFeeDiscountSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schedule = FeeDiscountSchedule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventFeeDiscountSchedule>): EventFeeDiscountSchedule {
    const message = createBaseEventFeeDiscountSchedule();
    message.schedule = object.schedule !== undefined && object.schedule !== null ? FeeDiscountSchedule.fromPartial(object.schedule) : undefined;
    return message;
  },
  fromAmino(object: EventFeeDiscountScheduleAmino): EventFeeDiscountSchedule {
    return {
      schedule: object?.schedule ? FeeDiscountSchedule.fromAmino(object.schedule) : undefined
    };
  },
  toAmino(message: EventFeeDiscountSchedule): EventFeeDiscountScheduleAmino {
    const obj: any = {};
    obj.schedule = message.schedule ? FeeDiscountSchedule.toAmino(message.schedule) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventFeeDiscountScheduleAminoMsg): EventFeeDiscountSchedule {
    return EventFeeDiscountSchedule.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFeeDiscountScheduleProtoMsg): EventFeeDiscountSchedule {
    return EventFeeDiscountSchedule.decode(message.value);
  },
  toProto(message: EventFeeDiscountSchedule): Uint8Array {
    return EventFeeDiscountSchedule.encode(message).finish();
  },
  toProtoMsg(message: EventFeeDiscountSchedule): EventFeeDiscountScheduleProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventFeeDiscountSchedule",
      value: EventFeeDiscountSchedule.encode(message).finish()
    };
  }
};
function createBaseEventTradingRewardCampaignUpdate(): EventTradingRewardCampaignUpdate {
  return {
    campaignInfo: undefined,
    campaignRewardPools: []
  };
}
export const EventTradingRewardCampaignUpdate = {
  typeUrl: "/injective.exchange.v1beta1.EventTradingRewardCampaignUpdate",
  encode(message: EventTradingRewardCampaignUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.campaignInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.campaignRewardPools) {
      CampaignRewardPool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTradingRewardCampaignUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTradingRewardCampaignUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.campaignRewardPools.push(CampaignRewardPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventTradingRewardCampaignUpdate>): EventTradingRewardCampaignUpdate {
    const message = createBaseEventTradingRewardCampaignUpdate();
    message.campaignInfo = object.campaignInfo !== undefined && object.campaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.campaignInfo) : undefined;
    message.campaignRewardPools = object.campaignRewardPools?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventTradingRewardCampaignUpdateAmino): EventTradingRewardCampaignUpdate {
    return {
      campaignInfo: object?.campaign_info ? TradingRewardCampaignInfo.fromAmino(object.campaign_info) : undefined,
      campaignRewardPools: Array.isArray(object?.campaign_reward_pools) ? object.campaign_reward_pools.map((e: any) => CampaignRewardPool.fromAmino(e)) : []
    };
  },
  toAmino(message: EventTradingRewardCampaignUpdate): EventTradingRewardCampaignUpdateAmino {
    const obj: any = {};
    obj.campaign_info = message.campaignInfo ? TradingRewardCampaignInfo.toAmino(message.campaignInfo) : undefined;
    if (message.campaignRewardPools) {
      obj.campaign_reward_pools = message.campaignRewardPools.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.campaign_reward_pools = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventTradingRewardCampaignUpdateAminoMsg): EventTradingRewardCampaignUpdate {
    return EventTradingRewardCampaignUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTradingRewardCampaignUpdateProtoMsg): EventTradingRewardCampaignUpdate {
    return EventTradingRewardCampaignUpdate.decode(message.value);
  },
  toProto(message: EventTradingRewardCampaignUpdate): Uint8Array {
    return EventTradingRewardCampaignUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventTradingRewardCampaignUpdate): EventTradingRewardCampaignUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventTradingRewardCampaignUpdate",
      value: EventTradingRewardCampaignUpdate.encode(message).finish()
    };
  }
};
function createBaseEventTradingRewardDistribution(): EventTradingRewardDistribution {
  return {
    accountRewards: []
  };
}
export const EventTradingRewardDistribution = {
  typeUrl: "/injective.exchange.v1beta1.EventTradingRewardDistribution",
  encode(message: EventTradingRewardDistribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accountRewards) {
      AccountRewards.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTradingRewardDistribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTradingRewardDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountRewards.push(AccountRewards.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventTradingRewardDistribution>): EventTradingRewardDistribution {
    const message = createBaseEventTradingRewardDistribution();
    message.accountRewards = object.accountRewards?.map(e => AccountRewards.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventTradingRewardDistributionAmino): EventTradingRewardDistribution {
    return {
      accountRewards: Array.isArray(object?.account_rewards) ? object.account_rewards.map((e: any) => AccountRewards.fromAmino(e)) : []
    };
  },
  toAmino(message: EventTradingRewardDistribution): EventTradingRewardDistributionAmino {
    const obj: any = {};
    if (message.accountRewards) {
      obj.account_rewards = message.accountRewards.map(e => e ? AccountRewards.toAmino(e) : undefined);
    } else {
      obj.account_rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventTradingRewardDistributionAminoMsg): EventTradingRewardDistribution {
    return EventTradingRewardDistribution.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTradingRewardDistributionProtoMsg): EventTradingRewardDistribution {
    return EventTradingRewardDistribution.decode(message.value);
  },
  toProto(message: EventTradingRewardDistribution): Uint8Array {
    return EventTradingRewardDistribution.encode(message).finish();
  },
  toProtoMsg(message: EventTradingRewardDistribution): EventTradingRewardDistributionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventTradingRewardDistribution",
      value: EventTradingRewardDistribution.encode(message).finish()
    };
  }
};
function createBaseEventNewConditionalDerivativeOrder(): EventNewConditionalDerivativeOrder {
  return {
    marketId: "",
    order: undefined,
    hash: new Uint8Array(),
    isMarket: false
  };
}
export const EventNewConditionalDerivativeOrder = {
  typeUrl: "/injective.exchange.v1beta1.EventNewConditionalDerivativeOrder",
  encode(message: EventNewConditionalDerivativeOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.order !== undefined) {
      DerivativeOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(26).bytes(message.hash);
    }
    if (message.isMarket === true) {
      writer.uint32(32).bool(message.isMarket);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventNewConditionalDerivativeOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNewConditionalDerivativeOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.order = DerivativeOrder.decode(reader, reader.uint32());
          break;
        case 3:
          message.hash = reader.bytes();
          break;
        case 4:
          message.isMarket = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventNewConditionalDerivativeOrder>): EventNewConditionalDerivativeOrder {
    const message = createBaseEventNewConditionalDerivativeOrder();
    message.marketId = object.marketId ?? "";
    message.order = object.order !== undefined && object.order !== null ? DerivativeOrder.fromPartial(object.order) : undefined;
    message.hash = object.hash ?? new Uint8Array();
    message.isMarket = object.isMarket ?? false;
    return message;
  },
  fromAmino(object: EventNewConditionalDerivativeOrderAmino): EventNewConditionalDerivativeOrder {
    return {
      marketId: object.market_id,
      order: object?.order ? DerivativeOrder.fromAmino(object.order) : undefined,
      hash: object.hash,
      isMarket: object.is_market
    };
  },
  toAmino(message: EventNewConditionalDerivativeOrder): EventNewConditionalDerivativeOrderAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.order = message.order ? DerivativeOrder.toAmino(message.order) : undefined;
    obj.hash = message.hash;
    obj.is_market = message.isMarket;
    return obj;
  },
  fromAminoMsg(object: EventNewConditionalDerivativeOrderAminoMsg): EventNewConditionalDerivativeOrder {
    return EventNewConditionalDerivativeOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventNewConditionalDerivativeOrderProtoMsg): EventNewConditionalDerivativeOrder {
    return EventNewConditionalDerivativeOrder.decode(message.value);
  },
  toProto(message: EventNewConditionalDerivativeOrder): Uint8Array {
    return EventNewConditionalDerivativeOrder.encode(message).finish();
  },
  toProtoMsg(message: EventNewConditionalDerivativeOrder): EventNewConditionalDerivativeOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventNewConditionalDerivativeOrder",
      value: EventNewConditionalDerivativeOrder.encode(message).finish()
    };
  }
};
function createBaseEventCancelConditionalDerivativeOrder(): EventCancelConditionalDerivativeOrder {
  return {
    marketId: "",
    isLimitCancel: false,
    limitOrder: undefined,
    marketOrder: undefined
  };
}
export const EventCancelConditionalDerivativeOrder = {
  typeUrl: "/injective.exchange.v1beta1.EventCancelConditionalDerivativeOrder",
  encode(message: EventCancelConditionalDerivativeOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isLimitCancel === true) {
      writer.uint32(16).bool(message.isLimitCancel);
    }
    if (message.limitOrder !== undefined) {
      DerivativeLimitOrder.encode(message.limitOrder, writer.uint32(26).fork()).ldelim();
    }
    if (message.marketOrder !== undefined) {
      DerivativeMarketOrder.encode(message.marketOrder, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCancelConditionalDerivativeOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelConditionalDerivativeOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.isLimitCancel = reader.bool();
          break;
        case 3:
          message.limitOrder = DerivativeLimitOrder.decode(reader, reader.uint32());
          break;
        case 4:
          message.marketOrder = DerivativeMarketOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventCancelConditionalDerivativeOrder>): EventCancelConditionalDerivativeOrder {
    const message = createBaseEventCancelConditionalDerivativeOrder();
    message.marketId = object.marketId ?? "";
    message.isLimitCancel = object.isLimitCancel ?? false;
    message.limitOrder = object.limitOrder !== undefined && object.limitOrder !== null ? DerivativeLimitOrder.fromPartial(object.limitOrder) : undefined;
    message.marketOrder = object.marketOrder !== undefined && object.marketOrder !== null ? DerivativeMarketOrder.fromPartial(object.marketOrder) : undefined;
    return message;
  },
  fromAmino(object: EventCancelConditionalDerivativeOrderAmino): EventCancelConditionalDerivativeOrder {
    return {
      marketId: object.market_id,
      isLimitCancel: object.isLimitCancel,
      limitOrder: object?.limit_order ? DerivativeLimitOrder.fromAmino(object.limit_order) : undefined,
      marketOrder: object?.market_order ? DerivativeMarketOrder.fromAmino(object.market_order) : undefined
    };
  },
  toAmino(message: EventCancelConditionalDerivativeOrder): EventCancelConditionalDerivativeOrderAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.isLimitCancel = message.isLimitCancel;
    obj.limit_order = message.limitOrder ? DerivativeLimitOrder.toAmino(message.limitOrder) : undefined;
    obj.market_order = message.marketOrder ? DerivativeMarketOrder.toAmino(message.marketOrder) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCancelConditionalDerivativeOrderAminoMsg): EventCancelConditionalDerivativeOrder {
    return EventCancelConditionalDerivativeOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelConditionalDerivativeOrderProtoMsg): EventCancelConditionalDerivativeOrder {
    return EventCancelConditionalDerivativeOrder.decode(message.value);
  },
  toProto(message: EventCancelConditionalDerivativeOrder): Uint8Array {
    return EventCancelConditionalDerivativeOrder.encode(message).finish();
  },
  toProtoMsg(message: EventCancelConditionalDerivativeOrder): EventCancelConditionalDerivativeOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventCancelConditionalDerivativeOrder",
      value: EventCancelConditionalDerivativeOrder.encode(message).finish()
    };
  }
};
function createBaseEventConditionalDerivativeOrderTrigger(): EventConditionalDerivativeOrderTrigger {
  return {
    marketId: new Uint8Array(),
    isLimitTrigger: false,
    triggeredOrderHash: new Uint8Array(),
    placedOrderHash: new Uint8Array()
  };
}
export const EventConditionalDerivativeOrderTrigger = {
  typeUrl: "/injective.exchange.v1beta1.EventConditionalDerivativeOrderTrigger",
  encode(message: EventConditionalDerivativeOrderTrigger, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId.length !== 0) {
      writer.uint32(10).bytes(message.marketId);
    }
    if (message.isLimitTrigger === true) {
      writer.uint32(16).bool(message.isLimitTrigger);
    }
    if (message.triggeredOrderHash.length !== 0) {
      writer.uint32(26).bytes(message.triggeredOrderHash);
    }
    if (message.placedOrderHash.length !== 0) {
      writer.uint32(34).bytes(message.placedOrderHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventConditionalDerivativeOrderTrigger {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventConditionalDerivativeOrderTrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.bytes();
          break;
        case 2:
          message.isLimitTrigger = reader.bool();
          break;
        case 3:
          message.triggeredOrderHash = reader.bytes();
          break;
        case 4:
          message.placedOrderHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventConditionalDerivativeOrderTrigger>): EventConditionalDerivativeOrderTrigger {
    const message = createBaseEventConditionalDerivativeOrderTrigger();
    message.marketId = object.marketId ?? new Uint8Array();
    message.isLimitTrigger = object.isLimitTrigger ?? false;
    message.triggeredOrderHash = object.triggeredOrderHash ?? new Uint8Array();
    message.placedOrderHash = object.placedOrderHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EventConditionalDerivativeOrderTriggerAmino): EventConditionalDerivativeOrderTrigger {
    return {
      marketId: object.market_id,
      isLimitTrigger: object.isLimitTrigger,
      triggeredOrderHash: object.triggered_order_hash,
      placedOrderHash: object.placed_order_hash
    };
  },
  toAmino(message: EventConditionalDerivativeOrderTrigger): EventConditionalDerivativeOrderTriggerAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.isLimitTrigger = message.isLimitTrigger;
    obj.triggered_order_hash = message.triggeredOrderHash;
    obj.placed_order_hash = message.placedOrderHash;
    return obj;
  },
  fromAminoMsg(object: EventConditionalDerivativeOrderTriggerAminoMsg): EventConditionalDerivativeOrderTrigger {
    return EventConditionalDerivativeOrderTrigger.fromAmino(object.value);
  },
  fromProtoMsg(message: EventConditionalDerivativeOrderTriggerProtoMsg): EventConditionalDerivativeOrderTrigger {
    return EventConditionalDerivativeOrderTrigger.decode(message.value);
  },
  toProto(message: EventConditionalDerivativeOrderTrigger): Uint8Array {
    return EventConditionalDerivativeOrderTrigger.encode(message).finish();
  },
  toProtoMsg(message: EventConditionalDerivativeOrderTrigger): EventConditionalDerivativeOrderTriggerProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventConditionalDerivativeOrderTrigger",
      value: EventConditionalDerivativeOrderTrigger.encode(message).finish()
    };
  }
};
function createBaseEventOrderFail(): EventOrderFail {
  return {
    account: new Uint8Array(),
    hashes: [],
    flags: []
  };
}
export const EventOrderFail = {
  typeUrl: "/injective.exchange.v1beta1.EventOrderFail",
  encode(message: EventOrderFail, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account.length !== 0) {
      writer.uint32(10).bytes(message.account);
    }
    for (const v of message.hashes) {
      writer.uint32(18).bytes(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.flags) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventOrderFail {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOrderFail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.bytes();
          break;
        case 2:
          message.hashes.push(reader.bytes());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.flags.push(reader.uint32());
            }
          } else {
            message.flags.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventOrderFail>): EventOrderFail {
    const message = createBaseEventOrderFail();
    message.account = object.account ?? new Uint8Array();
    message.hashes = object.hashes?.map(e => e) || [];
    message.flags = object.flags?.map(e => e) || [];
    return message;
  },
  fromAmino(object: EventOrderFailAmino): EventOrderFail {
    return {
      account: object.account,
      hashes: Array.isArray(object?.hashes) ? object.hashes.map((e: any) => e) : [],
      flags: Array.isArray(object?.flags) ? object.flags.map((e: any) => e) : []
    };
  },
  toAmino(message: EventOrderFail): EventOrderFailAmino {
    const obj: any = {};
    obj.account = message.account;
    if (message.hashes) {
      obj.hashes = message.hashes.map(e => e);
    } else {
      obj.hashes = [];
    }
    if (message.flags) {
      obj.flags = message.flags.map(e => e);
    } else {
      obj.flags = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventOrderFailAminoMsg): EventOrderFail {
    return EventOrderFail.fromAmino(object.value);
  },
  fromProtoMsg(message: EventOrderFailProtoMsg): EventOrderFail {
    return EventOrderFail.decode(message.value);
  },
  toProto(message: EventOrderFail): Uint8Array {
    return EventOrderFail.encode(message).finish();
  },
  toProtoMsg(message: EventOrderFail): EventOrderFailProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EventOrderFail",
      value: EventOrderFail.encode(message).finish()
    };
  }
};