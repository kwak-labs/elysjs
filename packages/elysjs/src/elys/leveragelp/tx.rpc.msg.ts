//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgOpen, MsgOpenResponse, MsgClose, MsgCloseResponse, MsgClaimRewards, MsgClaimRewardsResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgAddPool, MsgAddPoolResponse, MsgRemovePool, MsgRemovePoolResponse, MsgWhitelist, MsgWhitelistResponse, MsgDewhitelist, MsgDewhitelistResponse, MsgUpdateStopLoss, MsgUpdateStopLossResponse, MsgClosePositions, MsgClosePositionsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  open(request: MsgOpen): Promise<MsgOpenResponse>;
  close(request: MsgClose): Promise<MsgCloseResponse>;
  claimRewards(request: MsgClaimRewards): Promise<MsgClaimRewardsResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  addPool(request: MsgAddPool): Promise<MsgAddPoolResponse>;
  removePool(request: MsgRemovePool): Promise<MsgRemovePoolResponse>;
  whitelist(request: MsgWhitelist): Promise<MsgWhitelistResponse>;
  dewhitelist(request: MsgDewhitelist): Promise<MsgDewhitelistResponse>;
  updateStopLoss(request: MsgUpdateStopLoss): Promise<MsgUpdateStopLossResponse>;
  closePositions(request: MsgClosePositions): Promise<MsgClosePositionsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.claimRewards = this.claimRewards.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.addPool = this.addPool.bind(this);
    this.removePool = this.removePool.bind(this);
    this.whitelist = this.whitelist.bind(this);
    this.dewhitelist = this.dewhitelist.bind(this);
    this.updateStopLoss = this.updateStopLoss.bind(this);
    this.closePositions = this.closePositions.bind(this);
  }
  open(request: MsgOpen): Promise<MsgOpenResponse> {
    const data = MsgOpen.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Msg", "Open", data);
    return promise.then(data => MsgOpenResponse.decode(new BinaryReader(data)));
  }
  close(request: MsgClose): Promise<MsgCloseResponse> {
    const data = MsgClose.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Msg", "Close", data);
    return promise.then(data => MsgCloseResponse.decode(new BinaryReader(data)));
  }
  claimRewards(request: MsgClaimRewards): Promise<MsgClaimRewardsResponse> {
    const data = MsgClaimRewards.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Msg", "ClaimRewards", data);
    return promise.then(data => MsgClaimRewardsResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  addPool(request: MsgAddPool): Promise<MsgAddPoolResponse> {
    const data = MsgAddPool.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Msg", "AddPool", data);
    return promise.then(data => MsgAddPoolResponse.decode(new BinaryReader(data)));
  }
  removePool(request: MsgRemovePool): Promise<MsgRemovePoolResponse> {
    const data = MsgRemovePool.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Msg", "RemovePool", data);
    return promise.then(data => MsgRemovePoolResponse.decode(new BinaryReader(data)));
  }
  whitelist(request: MsgWhitelist): Promise<MsgWhitelistResponse> {
    const data = MsgWhitelist.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Msg", "Whitelist", data);
    return promise.then(data => MsgWhitelistResponse.decode(new BinaryReader(data)));
  }
  dewhitelist(request: MsgDewhitelist): Promise<MsgDewhitelistResponse> {
    const data = MsgDewhitelist.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Msg", "Dewhitelist", data);
    return promise.then(data => MsgDewhitelistResponse.decode(new BinaryReader(data)));
  }
  updateStopLoss(request: MsgUpdateStopLoss): Promise<MsgUpdateStopLossResponse> {
    const data = MsgUpdateStopLoss.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Msg", "UpdateStopLoss", data);
    return promise.then(data => MsgUpdateStopLossResponse.decode(new BinaryReader(data)));
  }
  closePositions(request: MsgClosePositions): Promise<MsgClosePositionsResponse> {
    const data = MsgClosePositions.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Msg", "ClosePositions", data);
    return promise.then(data => MsgClosePositionsResponse.decode(new BinaryReader(data)));
  }
}