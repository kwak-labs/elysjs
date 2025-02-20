//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgCreateSpotOrder, MsgCreateSpotOrderResponse, MsgUpdateSpotOrder, MsgUpdateSpotOrderResponse, MsgCancelSpotOrder, MsgCancelSpotOrderResponse, MsgCancelSpotOrders, MsgCancelSpotOrdersResponse, MsgCreatePerpetualOpenOrder, MsgCreatePerpetualOpenOrderResponse, MsgCreatePerpetualCloseOrder, MsgCreatePerpetualCloseOrderResponse, MsgUpdatePerpetualOrder, MsgUpdatePerpetualOrderResponse, MsgCancelPerpetualOrder, MsgCancelPerpetualOrderResponse, MsgCancelPerpetualOrders, MsgCancelPerpetualOrdersResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgExecuteOrders, MsgExecuteOrdersResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createSpotOrder(request: MsgCreateSpotOrder): Promise<MsgCreateSpotOrderResponse>;
  updateSpotOrder(request: MsgUpdateSpotOrder): Promise<MsgUpdateSpotOrderResponse>;
  cancelSpotOrder(request: MsgCancelSpotOrder): Promise<MsgCancelSpotOrderResponse>;
  cancelSpotOrders(request: MsgCancelSpotOrders): Promise<MsgCancelSpotOrdersResponse>;
  createPerpetualOpenOrder(request: MsgCreatePerpetualOpenOrder): Promise<MsgCreatePerpetualOpenOrderResponse>;
  createPerpetualCloseOrder(request: MsgCreatePerpetualCloseOrder): Promise<MsgCreatePerpetualCloseOrderResponse>;
  updatePerpetualOrder(request: MsgUpdatePerpetualOrder): Promise<MsgUpdatePerpetualOrderResponse>;
  cancelPerpetualOrder(request: MsgCancelPerpetualOrder): Promise<MsgCancelPerpetualOrderResponse>;
  cancelPerpetualOrders(request: MsgCancelPerpetualOrders): Promise<MsgCancelPerpetualOrdersResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  executeOrders(request: MsgExecuteOrders): Promise<MsgExecuteOrdersResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createSpotOrder = this.createSpotOrder.bind(this);
    this.updateSpotOrder = this.updateSpotOrder.bind(this);
    this.cancelSpotOrder = this.cancelSpotOrder.bind(this);
    this.cancelSpotOrders = this.cancelSpotOrders.bind(this);
    this.createPerpetualOpenOrder = this.createPerpetualOpenOrder.bind(this);
    this.createPerpetualCloseOrder = this.createPerpetualCloseOrder.bind(this);
    this.updatePerpetualOrder = this.updatePerpetualOrder.bind(this);
    this.cancelPerpetualOrder = this.cancelPerpetualOrder.bind(this);
    this.cancelPerpetualOrders = this.cancelPerpetualOrders.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.executeOrders = this.executeOrders.bind(this);
  }
  createSpotOrder(request: MsgCreateSpotOrder): Promise<MsgCreateSpotOrderResponse> {
    const data = MsgCreateSpotOrder.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Msg", "CreateSpotOrder", data);
    return promise.then(data => MsgCreateSpotOrderResponse.decode(new BinaryReader(data)));
  }
  updateSpotOrder(request: MsgUpdateSpotOrder): Promise<MsgUpdateSpotOrderResponse> {
    const data = MsgUpdateSpotOrder.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Msg", "UpdateSpotOrder", data);
    return promise.then(data => MsgUpdateSpotOrderResponse.decode(new BinaryReader(data)));
  }
  cancelSpotOrder(request: MsgCancelSpotOrder): Promise<MsgCancelSpotOrderResponse> {
    const data = MsgCancelSpotOrder.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Msg", "CancelSpotOrder", data);
    return promise.then(data => MsgCancelSpotOrderResponse.decode(new BinaryReader(data)));
  }
  cancelSpotOrders(request: MsgCancelSpotOrders): Promise<MsgCancelSpotOrdersResponse> {
    const data = MsgCancelSpotOrders.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Msg", "CancelSpotOrders", data);
    return promise.then(data => MsgCancelSpotOrdersResponse.decode(new BinaryReader(data)));
  }
  createPerpetualOpenOrder(request: MsgCreatePerpetualOpenOrder): Promise<MsgCreatePerpetualOpenOrderResponse> {
    const data = MsgCreatePerpetualOpenOrder.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Msg", "CreatePerpetualOpenOrder", data);
    return promise.then(data => MsgCreatePerpetualOpenOrderResponse.decode(new BinaryReader(data)));
  }
  createPerpetualCloseOrder(request: MsgCreatePerpetualCloseOrder): Promise<MsgCreatePerpetualCloseOrderResponse> {
    const data = MsgCreatePerpetualCloseOrder.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Msg", "CreatePerpetualCloseOrder", data);
    return promise.then(data => MsgCreatePerpetualCloseOrderResponse.decode(new BinaryReader(data)));
  }
  updatePerpetualOrder(request: MsgUpdatePerpetualOrder): Promise<MsgUpdatePerpetualOrderResponse> {
    const data = MsgUpdatePerpetualOrder.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Msg", "UpdatePerpetualOrder", data);
    return promise.then(data => MsgUpdatePerpetualOrderResponse.decode(new BinaryReader(data)));
  }
  cancelPerpetualOrder(request: MsgCancelPerpetualOrder): Promise<MsgCancelPerpetualOrderResponse> {
    const data = MsgCancelPerpetualOrder.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Msg", "CancelPerpetualOrder", data);
    return promise.then(data => MsgCancelPerpetualOrderResponse.decode(new BinaryReader(data)));
  }
  cancelPerpetualOrders(request: MsgCancelPerpetualOrders): Promise<MsgCancelPerpetualOrdersResponse> {
    const data = MsgCancelPerpetualOrders.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Msg", "CancelPerpetualOrders", data);
    return promise.then(data => MsgCancelPerpetualOrdersResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  executeOrders(request: MsgExecuteOrders): Promise<MsgExecuteOrdersResponse> {
    const data = MsgExecuteOrders.encode(request).finish();
    const promise = this.rpc.request("elys.tradeshield.Msg", "ExecuteOrders", data);
    return promise.then(data => MsgExecuteOrdersResponse.decode(new BinaryReader(data)));
  }
}