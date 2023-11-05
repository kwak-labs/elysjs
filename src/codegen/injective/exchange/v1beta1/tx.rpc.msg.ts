import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgDeposit, MsgDepositResponse, MsgWithdraw, MsgWithdrawResponse, MsgInstantSpotMarketLaunch, MsgInstantSpotMarketLaunchResponse, MsgInstantPerpetualMarketLaunch, MsgInstantPerpetualMarketLaunchResponse, MsgInstantExpiryFuturesMarketLaunch, MsgInstantExpiryFuturesMarketLaunchResponse, MsgCreateSpotLimitOrder, MsgCreateSpotLimitOrderResponse, MsgBatchCreateSpotLimitOrders, MsgBatchCreateSpotLimitOrdersResponse, MsgCreateSpotMarketOrder, MsgCreateSpotMarketOrderResponse, MsgCancelSpotOrder, MsgCancelSpotOrderResponse, MsgBatchCancelSpotOrders, MsgBatchCancelSpotOrdersResponse, MsgBatchUpdateOrders, MsgBatchUpdateOrdersResponse, MsgExec, MsgExecResponse, MsgCreateDerivativeLimitOrder, MsgCreateDerivativeLimitOrderResponse, MsgBatchCreateDerivativeLimitOrders, MsgBatchCreateDerivativeLimitOrdersResponse, MsgCreateDerivativeMarketOrder, MsgCreateDerivativeMarketOrderResponse, MsgCancelDerivativeOrder, MsgCancelDerivativeOrderResponse, MsgBatchCancelDerivativeOrders, MsgBatchCancelDerivativeOrdersResponse, MsgInstantBinaryOptionsMarketLaunch, MsgInstantBinaryOptionsMarketLaunchResponse, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsLimitOrderResponse, MsgCreateBinaryOptionsMarketOrder, MsgCreateBinaryOptionsMarketOrderResponse, MsgCancelBinaryOptionsOrder, MsgCancelBinaryOptionsOrderResponse, MsgBatchCancelBinaryOptionsOrders, MsgBatchCancelBinaryOptionsOrdersResponse, MsgSubaccountTransfer, MsgSubaccountTransferResponse, MsgExternalTransfer, MsgExternalTransferResponse, MsgLiquidatePosition, MsgLiquidatePositionResponse, MsgIncreasePositionMargin, MsgIncreasePositionMarginResponse, MsgRewardsOptOut, MsgRewardsOptOutResponse, MsgAdminUpdateBinaryOptionsMarket, MsgAdminUpdateBinaryOptionsMarketResponse } from "./tx";
/** Msg defines the staking Msg service. */
export interface Msg {
  /** Deposit defines a method for transferring coins from the sender's bank balance into the subaccount's exchange deposits */
  deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /** Withdraw defines a method for withdrawing coins from a subaccount's deposits to the user's bank balance */
  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  /** InstantSpotMarketLaunch defines method for creating a spot market by paying listing fee without governance */
  instantSpotMarketLaunch(request: MsgInstantSpotMarketLaunch): Promise<MsgInstantSpotMarketLaunchResponse>;
  /** InstantPerpetualMarketLaunch defines a method for creating a new perpetual futures market by paying listing fee without governance */
  instantPerpetualMarketLaunch(request: MsgInstantPerpetualMarketLaunch): Promise<MsgInstantPerpetualMarketLaunchResponse>;
  /** InstantExpiryFuturesMarketLaunch defines a method for creating a new expiry futures market by paying listing fee without governance */
  instantExpiryFuturesMarketLaunch(request: MsgInstantExpiryFuturesMarketLaunch): Promise<MsgInstantExpiryFuturesMarketLaunchResponse>;
  /** CreateSpotLimitOrder defines a method for creating a new spot limit order. */
  createSpotLimitOrder(request: MsgCreateSpotLimitOrder): Promise<MsgCreateSpotLimitOrderResponse>;
  /** BatchCreateSpotLimitOrder defines a method for creating a new batch of spot limit orders. */
  batchCreateSpotLimitOrders(request: MsgBatchCreateSpotLimitOrders): Promise<MsgBatchCreateSpotLimitOrdersResponse>;
  /** CreateSpotMarketOrder defines a method for creating a new spot market order. */
  createSpotMarketOrder(request: MsgCreateSpotMarketOrder): Promise<MsgCreateSpotMarketOrderResponse>;
  /** MsgCancelSpotOrder defines a method for cancelling a spot order. */
  cancelSpotOrder(request: MsgCancelSpotOrder): Promise<MsgCancelSpotOrderResponse>;
  /** BatchCancelSpotOrders defines a method for cancelling a batch of spot orders in a given market. */
  batchCancelSpotOrders(request: MsgBatchCancelSpotOrders): Promise<MsgBatchCancelSpotOrdersResponse>;
  /** BatchUpdateOrders defines a method for updating a batch of orders. */
  batchUpdateOrders(request: MsgBatchUpdateOrders): Promise<MsgBatchUpdateOrdersResponse>;
  /** Exec defines a method for executing a Cosmwasm contract from the exchange module with privileged capabilities. */
  exec(request: MsgExec): Promise<MsgExecResponse>;
  /** CreateDerivativeLimitOrder defines a method for creating a new derivative limit order. */
  createDerivativeLimitOrder(request: MsgCreateDerivativeLimitOrder): Promise<MsgCreateDerivativeLimitOrderResponse>;
  /** BatchCreateDerivativeLimitOrders defines a method for creating a new batch of derivative limit orders. */
  batchCreateDerivativeLimitOrders(request: MsgBatchCreateDerivativeLimitOrders): Promise<MsgBatchCreateDerivativeLimitOrdersResponse>;
  /** MsgCreateDerivativeLimitOrder defines a method for creating a new derivative market order. */
  createDerivativeMarketOrder(request: MsgCreateDerivativeMarketOrder): Promise<MsgCreateDerivativeMarketOrderResponse>;
  /** MsgCancelDerivativeOrder defines a method for cancelling a derivative order. */
  cancelDerivativeOrder(request: MsgCancelDerivativeOrder): Promise<MsgCancelDerivativeOrderResponse>;
  /** MsgBatchCancelDerivativeOrders defines a method for cancelling a batch of derivative limit orders. */
  batchCancelDerivativeOrders(request: MsgBatchCancelDerivativeOrders): Promise<MsgBatchCancelDerivativeOrdersResponse>;
  /** InstantBinaryOptionsMarketLaunch defines method for creating a binary options market by paying listing fee without governance */
  instantBinaryOptionsMarketLaunch(request: MsgInstantBinaryOptionsMarketLaunch): Promise<MsgInstantBinaryOptionsMarketLaunchResponse>;
  /** CreateBinaryOptionsLimitOrder defines a method for creating a new binary options limit order. */
  createBinaryOptionsLimitOrder(request: MsgCreateBinaryOptionsLimitOrder): Promise<MsgCreateBinaryOptionsLimitOrderResponse>;
  /** CreateBinaryOptionsMarketOrder defines a method for creating a new binary options market order. */
  createBinaryOptionsMarketOrder(request: MsgCreateBinaryOptionsMarketOrder): Promise<MsgCreateBinaryOptionsMarketOrderResponse>;
  /** MsgCancelBinaryOptionsOrder defines a method for cancelling a binary options order. */
  cancelBinaryOptionsOrder(request: MsgCancelBinaryOptionsOrder): Promise<MsgCancelBinaryOptionsOrderResponse>;
  /** BatchCancelBinaryOptionsOrders defines a method for cancelling a batch of binary options limit orders. */
  batchCancelBinaryOptionsOrders(request: MsgBatchCancelBinaryOptionsOrders): Promise<MsgBatchCancelBinaryOptionsOrdersResponse>;
  /** SubaccountTransfer defines a method for transfer between subaccounts */
  subaccountTransfer(request: MsgSubaccountTransfer): Promise<MsgSubaccountTransferResponse>;
  /** ExternalTransfer defines a method for transfer between external accounts */
  externalTransfer(request: MsgExternalTransfer): Promise<MsgExternalTransferResponse>;
  /** LiquidatePosition defines a method for liquidating a position */
  liquidatePosition(request: MsgLiquidatePosition): Promise<MsgLiquidatePositionResponse>;
  /** IncreasePositionMargin defines a method for increasing margin of a position */
  increasePositionMargin(request: MsgIncreasePositionMargin): Promise<MsgIncreasePositionMarginResponse>;
  /** RewardsOptOut defines a method for opting out of rewards */
  rewardsOptOut(request: MsgRewardsOptOut): Promise<MsgRewardsOptOutResponse>;
  /** AdminUpdateBinaryOptionsMarket defines method for updating a binary options market by admin */
  adminUpdateBinaryOptionsMarket(request: MsgAdminUpdateBinaryOptionsMarket): Promise<MsgAdminUpdateBinaryOptionsMarketResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.instantSpotMarketLaunch = this.instantSpotMarketLaunch.bind(this);
    this.instantPerpetualMarketLaunch = this.instantPerpetualMarketLaunch.bind(this);
    this.instantExpiryFuturesMarketLaunch = this.instantExpiryFuturesMarketLaunch.bind(this);
    this.createSpotLimitOrder = this.createSpotLimitOrder.bind(this);
    this.batchCreateSpotLimitOrders = this.batchCreateSpotLimitOrders.bind(this);
    this.createSpotMarketOrder = this.createSpotMarketOrder.bind(this);
    this.cancelSpotOrder = this.cancelSpotOrder.bind(this);
    this.batchCancelSpotOrders = this.batchCancelSpotOrders.bind(this);
    this.batchUpdateOrders = this.batchUpdateOrders.bind(this);
    this.exec = this.exec.bind(this);
    this.createDerivativeLimitOrder = this.createDerivativeLimitOrder.bind(this);
    this.batchCreateDerivativeLimitOrders = this.batchCreateDerivativeLimitOrders.bind(this);
    this.createDerivativeMarketOrder = this.createDerivativeMarketOrder.bind(this);
    this.cancelDerivativeOrder = this.cancelDerivativeOrder.bind(this);
    this.batchCancelDerivativeOrders = this.batchCancelDerivativeOrders.bind(this);
    this.instantBinaryOptionsMarketLaunch = this.instantBinaryOptionsMarketLaunch.bind(this);
    this.createBinaryOptionsLimitOrder = this.createBinaryOptionsLimitOrder.bind(this);
    this.createBinaryOptionsMarketOrder = this.createBinaryOptionsMarketOrder.bind(this);
    this.cancelBinaryOptionsOrder = this.cancelBinaryOptionsOrder.bind(this);
    this.batchCancelBinaryOptionsOrders = this.batchCancelBinaryOptionsOrders.bind(this);
    this.subaccountTransfer = this.subaccountTransfer.bind(this);
    this.externalTransfer = this.externalTransfer.bind(this);
    this.liquidatePosition = this.liquidatePosition.bind(this);
    this.increasePositionMargin = this.increasePositionMargin.bind(this);
    this.rewardsOptOut = this.rewardsOptOut.bind(this);
    this.adminUpdateBinaryOptionsMarket = this.adminUpdateBinaryOptionsMarket.bind(this);
  }
  deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new BinaryReader(data)));
  }
  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new BinaryReader(data)));
  }
  instantSpotMarketLaunch(request: MsgInstantSpotMarketLaunch): Promise<MsgInstantSpotMarketLaunchResponse> {
    const data = MsgInstantSpotMarketLaunch.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantSpotMarketLaunch", data);
    return promise.then(data => MsgInstantSpotMarketLaunchResponse.decode(new BinaryReader(data)));
  }
  instantPerpetualMarketLaunch(request: MsgInstantPerpetualMarketLaunch): Promise<MsgInstantPerpetualMarketLaunchResponse> {
    const data = MsgInstantPerpetualMarketLaunch.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantPerpetualMarketLaunch", data);
    return promise.then(data => MsgInstantPerpetualMarketLaunchResponse.decode(new BinaryReader(data)));
  }
  instantExpiryFuturesMarketLaunch(request: MsgInstantExpiryFuturesMarketLaunch): Promise<MsgInstantExpiryFuturesMarketLaunchResponse> {
    const data = MsgInstantExpiryFuturesMarketLaunch.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantExpiryFuturesMarketLaunch", data);
    return promise.then(data => MsgInstantExpiryFuturesMarketLaunchResponse.decode(new BinaryReader(data)));
  }
  createSpotLimitOrder(request: MsgCreateSpotLimitOrder): Promise<MsgCreateSpotLimitOrderResponse> {
    const data = MsgCreateSpotLimitOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateSpotLimitOrder", data);
    return promise.then(data => MsgCreateSpotLimitOrderResponse.decode(new BinaryReader(data)));
  }
  batchCreateSpotLimitOrders(request: MsgBatchCreateSpotLimitOrders): Promise<MsgBatchCreateSpotLimitOrdersResponse> {
    const data = MsgBatchCreateSpotLimitOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCreateSpotLimitOrders", data);
    return promise.then(data => MsgBatchCreateSpotLimitOrdersResponse.decode(new BinaryReader(data)));
  }
  createSpotMarketOrder(request: MsgCreateSpotMarketOrder): Promise<MsgCreateSpotMarketOrderResponse> {
    const data = MsgCreateSpotMarketOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateSpotMarketOrder", data);
    return promise.then(data => MsgCreateSpotMarketOrderResponse.decode(new BinaryReader(data)));
  }
  cancelSpotOrder(request: MsgCancelSpotOrder): Promise<MsgCancelSpotOrderResponse> {
    const data = MsgCancelSpotOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CancelSpotOrder", data);
    return promise.then(data => MsgCancelSpotOrderResponse.decode(new BinaryReader(data)));
  }
  batchCancelSpotOrders(request: MsgBatchCancelSpotOrders): Promise<MsgBatchCancelSpotOrdersResponse> {
    const data = MsgBatchCancelSpotOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCancelSpotOrders", data);
    return promise.then(data => MsgBatchCancelSpotOrdersResponse.decode(new BinaryReader(data)));
  }
  batchUpdateOrders(request: MsgBatchUpdateOrders): Promise<MsgBatchUpdateOrdersResponse> {
    const data = MsgBatchUpdateOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchUpdateOrders", data);
    return promise.then(data => MsgBatchUpdateOrdersResponse.decode(new BinaryReader(data)));
  }
  exec(request: MsgExec): Promise<MsgExecResponse> {
    const data = MsgExec.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "Exec", data);
    return promise.then(data => MsgExecResponse.decode(new BinaryReader(data)));
  }
  createDerivativeLimitOrder(request: MsgCreateDerivativeLimitOrder): Promise<MsgCreateDerivativeLimitOrderResponse> {
    const data = MsgCreateDerivativeLimitOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateDerivativeLimitOrder", data);
    return promise.then(data => MsgCreateDerivativeLimitOrderResponse.decode(new BinaryReader(data)));
  }
  batchCreateDerivativeLimitOrders(request: MsgBatchCreateDerivativeLimitOrders): Promise<MsgBatchCreateDerivativeLimitOrdersResponse> {
    const data = MsgBatchCreateDerivativeLimitOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCreateDerivativeLimitOrders", data);
    return promise.then(data => MsgBatchCreateDerivativeLimitOrdersResponse.decode(new BinaryReader(data)));
  }
  createDerivativeMarketOrder(request: MsgCreateDerivativeMarketOrder): Promise<MsgCreateDerivativeMarketOrderResponse> {
    const data = MsgCreateDerivativeMarketOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateDerivativeMarketOrder", data);
    return promise.then(data => MsgCreateDerivativeMarketOrderResponse.decode(new BinaryReader(data)));
  }
  cancelDerivativeOrder(request: MsgCancelDerivativeOrder): Promise<MsgCancelDerivativeOrderResponse> {
    const data = MsgCancelDerivativeOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CancelDerivativeOrder", data);
    return promise.then(data => MsgCancelDerivativeOrderResponse.decode(new BinaryReader(data)));
  }
  batchCancelDerivativeOrders(request: MsgBatchCancelDerivativeOrders): Promise<MsgBatchCancelDerivativeOrdersResponse> {
    const data = MsgBatchCancelDerivativeOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCancelDerivativeOrders", data);
    return promise.then(data => MsgBatchCancelDerivativeOrdersResponse.decode(new BinaryReader(data)));
  }
  instantBinaryOptionsMarketLaunch(request: MsgInstantBinaryOptionsMarketLaunch): Promise<MsgInstantBinaryOptionsMarketLaunchResponse> {
    const data = MsgInstantBinaryOptionsMarketLaunch.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantBinaryOptionsMarketLaunch", data);
    return promise.then(data => MsgInstantBinaryOptionsMarketLaunchResponse.decode(new BinaryReader(data)));
  }
  createBinaryOptionsLimitOrder(request: MsgCreateBinaryOptionsLimitOrder): Promise<MsgCreateBinaryOptionsLimitOrderResponse> {
    const data = MsgCreateBinaryOptionsLimitOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateBinaryOptionsLimitOrder", data);
    return promise.then(data => MsgCreateBinaryOptionsLimitOrderResponse.decode(new BinaryReader(data)));
  }
  createBinaryOptionsMarketOrder(request: MsgCreateBinaryOptionsMarketOrder): Promise<MsgCreateBinaryOptionsMarketOrderResponse> {
    const data = MsgCreateBinaryOptionsMarketOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateBinaryOptionsMarketOrder", data);
    return promise.then(data => MsgCreateBinaryOptionsMarketOrderResponse.decode(new BinaryReader(data)));
  }
  cancelBinaryOptionsOrder(request: MsgCancelBinaryOptionsOrder): Promise<MsgCancelBinaryOptionsOrderResponse> {
    const data = MsgCancelBinaryOptionsOrder.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CancelBinaryOptionsOrder", data);
    return promise.then(data => MsgCancelBinaryOptionsOrderResponse.decode(new BinaryReader(data)));
  }
  batchCancelBinaryOptionsOrders(request: MsgBatchCancelBinaryOptionsOrders): Promise<MsgBatchCancelBinaryOptionsOrdersResponse> {
    const data = MsgBatchCancelBinaryOptionsOrders.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCancelBinaryOptionsOrders", data);
    return promise.then(data => MsgBatchCancelBinaryOptionsOrdersResponse.decode(new BinaryReader(data)));
  }
  subaccountTransfer(request: MsgSubaccountTransfer): Promise<MsgSubaccountTransferResponse> {
    const data = MsgSubaccountTransfer.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "SubaccountTransfer", data);
    return promise.then(data => MsgSubaccountTransferResponse.decode(new BinaryReader(data)));
  }
  externalTransfer(request: MsgExternalTransfer): Promise<MsgExternalTransferResponse> {
    const data = MsgExternalTransfer.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "ExternalTransfer", data);
    return promise.then(data => MsgExternalTransferResponse.decode(new BinaryReader(data)));
  }
  liquidatePosition(request: MsgLiquidatePosition): Promise<MsgLiquidatePositionResponse> {
    const data = MsgLiquidatePosition.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "LiquidatePosition", data);
    return promise.then(data => MsgLiquidatePositionResponse.decode(new BinaryReader(data)));
  }
  increasePositionMargin(request: MsgIncreasePositionMargin): Promise<MsgIncreasePositionMarginResponse> {
    const data = MsgIncreasePositionMargin.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "IncreasePositionMargin", data);
    return promise.then(data => MsgIncreasePositionMarginResponse.decode(new BinaryReader(data)));
  }
  rewardsOptOut(request: MsgRewardsOptOut): Promise<MsgRewardsOptOutResponse> {
    const data = MsgRewardsOptOut.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "RewardsOptOut", data);
    return promise.then(data => MsgRewardsOptOutResponse.decode(new BinaryReader(data)));
  }
  adminUpdateBinaryOptionsMarket(request: MsgAdminUpdateBinaryOptionsMarket): Promise<MsgAdminUpdateBinaryOptionsMarketResponse> {
    const data = MsgAdminUpdateBinaryOptionsMarket.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "AdminUpdateBinaryOptionsMarket", data);
    return promise.then(data => MsgAdminUpdateBinaryOptionsMarketResponse.decode(new BinaryReader(data)));
  }
}