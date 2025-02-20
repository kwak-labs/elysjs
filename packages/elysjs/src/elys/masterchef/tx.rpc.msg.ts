//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgAddExternalRewardDenom, MsgAddExternalRewardDenomResponse, MsgAddExternalIncentive, MsgAddExternalIncentiveResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdatePoolMultipliers, MsgUpdatePoolMultipliersResponse, MsgClaimRewards, MsgClaimRewardsResponse, MsgTogglePoolEdenRewards, MsgTogglePoolEdenRewardsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  addExternalRewardDenom(request: MsgAddExternalRewardDenom): Promise<MsgAddExternalRewardDenomResponse>;
  addExternalIncentive(request: MsgAddExternalIncentive): Promise<MsgAddExternalIncentiveResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  updatePoolMultipliers(request: MsgUpdatePoolMultipliers): Promise<MsgUpdatePoolMultipliersResponse>;
  claimRewards(request: MsgClaimRewards): Promise<MsgClaimRewardsResponse>;
  togglePoolEdenRewards(request: MsgTogglePoolEdenRewards): Promise<MsgTogglePoolEdenRewardsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.addExternalRewardDenom = this.addExternalRewardDenom.bind(this);
    this.addExternalIncentive = this.addExternalIncentive.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.updatePoolMultipliers = this.updatePoolMultipliers.bind(this);
    this.claimRewards = this.claimRewards.bind(this);
    this.togglePoolEdenRewards = this.togglePoolEdenRewards.bind(this);
  }
  addExternalRewardDenom(request: MsgAddExternalRewardDenom): Promise<MsgAddExternalRewardDenomResponse> {
    const data = MsgAddExternalRewardDenom.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Msg", "AddExternalRewardDenom", data);
    return promise.then(data => MsgAddExternalRewardDenomResponse.decode(new BinaryReader(data)));
  }
  addExternalIncentive(request: MsgAddExternalIncentive): Promise<MsgAddExternalIncentiveResponse> {
    const data = MsgAddExternalIncentive.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Msg", "AddExternalIncentive", data);
    return promise.then(data => MsgAddExternalIncentiveResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  updatePoolMultipliers(request: MsgUpdatePoolMultipliers): Promise<MsgUpdatePoolMultipliersResponse> {
    const data = MsgUpdatePoolMultipliers.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Msg", "UpdatePoolMultipliers", data);
    return promise.then(data => MsgUpdatePoolMultipliersResponse.decode(new BinaryReader(data)));
  }
  claimRewards(request: MsgClaimRewards): Promise<MsgClaimRewardsResponse> {
    const data = MsgClaimRewards.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Msg", "ClaimRewards", data);
    return promise.then(data => MsgClaimRewardsResponse.decode(new BinaryReader(data)));
  }
  togglePoolEdenRewards(request: MsgTogglePoolEdenRewards): Promise<MsgTogglePoolEdenRewardsResponse> {
    const data = MsgTogglePoolEdenRewards.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Msg", "TogglePoolEdenRewards", data);
    return promise.then(data => MsgTogglePoolEdenRewardsResponse.decode(new BinaryReader(data)));
  }
}