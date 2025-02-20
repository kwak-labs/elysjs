//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateMinCommission, MsgUpdateMinCommissionResponse, MsgUpdateMaxVotingPower, MsgUpdateMaxVotingPowerResponse, MsgUpdateMinSelfDelegation, MsgUpdateMinSelfDelegationResponse, MsgUpdateTotalBlocksPerYear, MsgUpdateTotalBlocksPerYearResponse, MsgUpdateRewardsDataLifetime, MsgUpdateRewardsDataLifetimeResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  updateMinCommission(request: MsgUpdateMinCommission): Promise<MsgUpdateMinCommissionResponse>;
  updateMaxVotingPower(request: MsgUpdateMaxVotingPower): Promise<MsgUpdateMaxVotingPowerResponse>;
  updateMinSelfDelegation(request: MsgUpdateMinSelfDelegation): Promise<MsgUpdateMinSelfDelegationResponse>;
  updateTotalBlocksPerYear(request: MsgUpdateTotalBlocksPerYear): Promise<MsgUpdateTotalBlocksPerYearResponse>;
  updateRewardsDataLifetime(request: MsgUpdateRewardsDataLifetime): Promise<MsgUpdateRewardsDataLifetimeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateMinCommission = this.updateMinCommission.bind(this);
    this.updateMaxVotingPower = this.updateMaxVotingPower.bind(this);
    this.updateMinSelfDelegation = this.updateMinSelfDelegation.bind(this);
    this.updateTotalBlocksPerYear = this.updateTotalBlocksPerYear.bind(this);
    this.updateRewardsDataLifetime = this.updateRewardsDataLifetime.bind(this);
  }
  updateMinCommission(request: MsgUpdateMinCommission): Promise<MsgUpdateMinCommissionResponse> {
    const data = MsgUpdateMinCommission.encode(request).finish();
    const promise = this.rpc.request("elys.parameter.Msg", "UpdateMinCommission", data);
    return promise.then(data => MsgUpdateMinCommissionResponse.decode(new BinaryReader(data)));
  }
  updateMaxVotingPower(request: MsgUpdateMaxVotingPower): Promise<MsgUpdateMaxVotingPowerResponse> {
    const data = MsgUpdateMaxVotingPower.encode(request).finish();
    const promise = this.rpc.request("elys.parameter.Msg", "UpdateMaxVotingPower", data);
    return promise.then(data => MsgUpdateMaxVotingPowerResponse.decode(new BinaryReader(data)));
  }
  updateMinSelfDelegation(request: MsgUpdateMinSelfDelegation): Promise<MsgUpdateMinSelfDelegationResponse> {
    const data = MsgUpdateMinSelfDelegation.encode(request).finish();
    const promise = this.rpc.request("elys.parameter.Msg", "UpdateMinSelfDelegation", data);
    return promise.then(data => MsgUpdateMinSelfDelegationResponse.decode(new BinaryReader(data)));
  }
  updateTotalBlocksPerYear(request: MsgUpdateTotalBlocksPerYear): Promise<MsgUpdateTotalBlocksPerYearResponse> {
    const data = MsgUpdateTotalBlocksPerYear.encode(request).finish();
    const promise = this.rpc.request("elys.parameter.Msg", "UpdateTotalBlocksPerYear", data);
    return promise.then(data => MsgUpdateTotalBlocksPerYearResponse.decode(new BinaryReader(data)));
  }
  updateRewardsDataLifetime(request: MsgUpdateRewardsDataLifetime): Promise<MsgUpdateRewardsDataLifetimeResponse> {
    const data = MsgUpdateRewardsDataLifetime.encode(request).finish();
    const promise = this.rpc.request("elys.parameter.Msg", "UpdateRewardsDataLifetime", data);
    return promise.then(data => MsgUpdateRewardsDataLifetimeResponse.decode(new BinaryReader(data)));
  }
}