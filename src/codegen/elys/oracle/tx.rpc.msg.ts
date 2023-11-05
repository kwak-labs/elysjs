import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgFeedPrice, MsgFeedPriceResponse, MsgFeedMultiplePrices, MsgFeedMultiplePricesResponse, MsgRequestBandPrice, MsgRequestBandPriceResponse, MsgSetPriceFeeder, MsgSetPriceFeederResponse, MsgDeletePriceFeeder, MsgDeletePriceFeederResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  feedPrice(request: MsgFeedPrice): Promise<MsgFeedPriceResponse>;
  feedMultiplePrices(request: MsgFeedMultiplePrices): Promise<MsgFeedMultiplePricesResponse>;
  requestBandPrice(request: MsgRequestBandPrice): Promise<MsgRequestBandPriceResponse>;
  setPriceFeeder(request: MsgSetPriceFeeder): Promise<MsgSetPriceFeederResponse>;
  deletePriceFeeder(request: MsgDeletePriceFeeder): Promise<MsgDeletePriceFeederResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.feedPrice = this.feedPrice.bind(this);
    this.feedMultiplePrices = this.feedMultiplePrices.bind(this);
    this.requestBandPrice = this.requestBandPrice.bind(this);
    this.setPriceFeeder = this.setPriceFeeder.bind(this);
    this.deletePriceFeeder = this.deletePriceFeeder.bind(this);
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
  requestBandPrice(request: MsgRequestBandPrice): Promise<MsgRequestBandPriceResponse> {
    const data = MsgRequestBandPrice.encode(request).finish();
    const promise = this.rpc.request("elys.oracle.Msg", "RequestBandPrice", data);
    return promise.then(data => MsgRequestBandPriceResponse.decode(new BinaryReader(data)));
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
}