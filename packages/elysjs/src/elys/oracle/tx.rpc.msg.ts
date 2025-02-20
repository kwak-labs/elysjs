//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgFeedPrice, MsgFeedPriceResponse, MsgFeedMultiplePrices, MsgFeedMultiplePricesResponse, MsgSetPriceFeeder, MsgSetPriceFeederResponse, MsgDeletePriceFeeder, MsgDeletePriceFeederResponse, MsgRemoveAssetInfo, MsgRemoveAssetInfoResponse, MsgAddPriceFeeders, MsgAddPriceFeedersResponse, MsgRemovePriceFeeders, MsgRemovePriceFeedersResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateAssetInfo, MsgCreateAssetInfoResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  feedPrice(request: MsgFeedPrice): Promise<MsgFeedPriceResponse>;
  feedMultiplePrices(request: MsgFeedMultiplePrices): Promise<MsgFeedMultiplePricesResponse>;
  setPriceFeeder(request: MsgSetPriceFeeder): Promise<MsgSetPriceFeederResponse>;
  deletePriceFeeder(request: MsgDeletePriceFeeder): Promise<MsgDeletePriceFeederResponse>;
  /** proposals */
  removeAssetInfo(request: MsgRemoveAssetInfo): Promise<MsgRemoveAssetInfoResponse>;
  addPriceFeeders(request: MsgAddPriceFeeders): Promise<MsgAddPriceFeedersResponse>;
  removePriceFeeders(request: MsgRemovePriceFeeders): Promise<MsgRemovePriceFeedersResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  createAssetInfo(request: MsgCreateAssetInfo): Promise<MsgCreateAssetInfoResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.feedPrice = this.feedPrice.bind(this);
    this.feedMultiplePrices = this.feedMultiplePrices.bind(this);
    this.setPriceFeeder = this.setPriceFeeder.bind(this);
    this.deletePriceFeeder = this.deletePriceFeeder.bind(this);
    this.removeAssetInfo = this.removeAssetInfo.bind(this);
    this.addPriceFeeders = this.addPriceFeeders.bind(this);
    this.removePriceFeeders = this.removePriceFeeders.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.createAssetInfo = this.createAssetInfo.bind(this);
  }
  feedPrice(request: MsgFeedPrice): Promise<MsgFeedPriceResponse> {
    const data = MsgFeedPrice.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Msg", "FeedPrice", data);
    return promise.then(data => MsgFeedPriceResponse.decode(new BinaryReader(data)));
  }
  feedMultiplePrices(request: MsgFeedMultiplePrices): Promise<MsgFeedMultiplePricesResponse> {
    const data = MsgFeedMultiplePrices.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Msg", "FeedMultiplePrices", data);
    return promise.then(data => MsgFeedMultiplePricesResponse.decode(new BinaryReader(data)));
  }
  setPriceFeeder(request: MsgSetPriceFeeder): Promise<MsgSetPriceFeederResponse> {
    const data = MsgSetPriceFeeder.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Msg", "SetPriceFeeder", data);
    return promise.then(data => MsgSetPriceFeederResponse.decode(new BinaryReader(data)));
  }
  deletePriceFeeder(request: MsgDeletePriceFeeder): Promise<MsgDeletePriceFeederResponse> {
    const data = MsgDeletePriceFeeder.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Msg", "DeletePriceFeeder", data);
    return promise.then(data => MsgDeletePriceFeederResponse.decode(new BinaryReader(data)));
  }
  removeAssetInfo(request: MsgRemoveAssetInfo): Promise<MsgRemoveAssetInfoResponse> {
    const data = MsgRemoveAssetInfo.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Msg", "RemoveAssetInfo", data);
    return promise.then(data => MsgRemoveAssetInfoResponse.decode(new BinaryReader(data)));
  }
  addPriceFeeders(request: MsgAddPriceFeeders): Promise<MsgAddPriceFeedersResponse> {
    const data = MsgAddPriceFeeders.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Msg", "AddPriceFeeders", data);
    return promise.then(data => MsgAddPriceFeedersResponse.decode(new BinaryReader(data)));
  }
  removePriceFeeders(request: MsgRemovePriceFeeders): Promise<MsgRemovePriceFeedersResponse> {
    const data = MsgRemovePriceFeeders.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Msg", "RemovePriceFeeders", data);
    return promise.then(data => MsgRemovePriceFeedersResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  createAssetInfo(request: MsgCreateAssetInfo): Promise<MsgCreateAssetInfoResponse> {
    const data = MsgCreateAssetInfo.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Msg", "CreateAssetInfo", data);
    return promise.then(data => MsgCreateAssetInfoResponse.decode(new BinaryReader(data)));
  }
}