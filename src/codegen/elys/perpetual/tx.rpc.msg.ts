import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgOpen, MsgOpenResponse, MsgClose, MsgCloseResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgWhitelist, MsgWhitelistResponse, MsgDewhitelist, MsgDewhitelistResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  open(request: MsgOpen): Promise<MsgOpenResponse>;
  close(request: MsgClose): Promise<MsgCloseResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  whitelist(request: MsgWhitelist): Promise<MsgWhitelistResponse>;
  dewhitelist(request: MsgDewhitelist): Promise<MsgDewhitelistResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.whitelist = this.whitelist.bind(this);
    this.dewhitelist = this.dewhitelist.bind(this);
  }
  open(request: MsgOpen): Promise<MsgOpenResponse> {
    const data = MsgOpen.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Msg", "Open", data);
    return promise.then(data => MsgOpenResponse.decode(new BinaryReader(data)));
  }
  close(request: MsgClose): Promise<MsgCloseResponse> {
    const data = MsgClose.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Msg", "Close", data);
    return promise.then(data => MsgCloseResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  whitelist(request: MsgWhitelist): Promise<MsgWhitelistResponse> {
    const data = MsgWhitelist.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Msg", "Whitelist", data);
    return promise.then(data => MsgWhitelistResponse.decode(new BinaryReader(data)));
  }
  dewhitelist(request: MsgDewhitelist): Promise<MsgDewhitelistResponse> {
    const data = MsgDewhitelist.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Msg", "Dewhitelist", data);
    return promise.then(data => MsgDewhitelistResponse.decode(new BinaryReader(data)));
  }
}