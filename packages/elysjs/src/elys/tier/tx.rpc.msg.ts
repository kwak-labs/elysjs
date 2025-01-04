//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgSetPortfolio, MsgSetPortfolioResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  setPortfolio(request: MsgSetPortfolio): Promise<MsgSetPortfolioResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setPortfolio = this.setPortfolio.bind(this);
  }
  setPortfolio(request: MsgSetPortfolio): Promise<MsgSetPortfolioResponse> {
    const data = MsgSetPortfolio.encode(request).finish();
    const promise = this.rpc.request("elys.tier.Msg", "SetPortfolio", data);
    return promise.then(data => MsgSetPortfolioResponse.decode(new BinaryReader(data)));
  }
}