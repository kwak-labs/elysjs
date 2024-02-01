import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgWithdrawRewards, MsgWithdrawRewardsResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgUpdateIncentiveParams, MsgUpdateIncentiveParamsResponse, MsgUpdatePoolMultipliers, MsgUpdatePoolMultipliersResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  withdrawRewards(request: MsgWithdrawRewards): Promise<MsgWithdrawRewardsResponse>;
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  withdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
  updateIncentiveParams(request: MsgUpdateIncentiveParams): Promise<MsgUpdateIncentiveParamsResponse>;
  updatePoolMultipliers(request: MsgUpdatePoolMultipliers): Promise<MsgUpdatePoolMultipliersResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.withdrawRewards = this.withdrawRewards.bind(this);
    this.withdrawValidatorCommission = this.withdrawValidatorCommission.bind(this);
    this.updateIncentiveParams = this.updateIncentiveParams.bind(this);
    this.updatePoolMultipliers = this.updatePoolMultipliers.bind(this);
  }
  withdrawRewards(request: MsgWithdrawRewards): Promise<MsgWithdrawRewardsResponse> {
    const data = MsgWithdrawRewards.encode(request).finish();
    const promise = this.rpc.request("elys.incentive.Msg", "WithdrawRewards", data);
    return promise.then(data => MsgWithdrawRewardsResponse.decode(new BinaryReader(data)));
  }
  withdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse> {
    const data = MsgWithdrawValidatorCommission.encode(request).finish();
    const promise = this.rpc.request("elys.incentive.Msg", "WithdrawValidatorCommission", data);
    return promise.then(data => MsgWithdrawValidatorCommissionResponse.decode(new BinaryReader(data)));
  }
  updateIncentiveParams(request: MsgUpdateIncentiveParams): Promise<MsgUpdateIncentiveParamsResponse> {
    const data = MsgUpdateIncentiveParams.encode(request).finish();
    const promise = this.rpc.request("elys.incentive.Msg", "UpdateIncentiveParams", data);
    return promise.then(data => MsgUpdateIncentiveParamsResponse.decode(new BinaryReader(data)));
  }
  updatePoolMultipliers(request: MsgUpdatePoolMultipliers): Promise<MsgUpdatePoolMultipliersResponse> {
    const data = MsgUpdatePoolMultipliers.encode(request).finish();
    const promise = this.rpc.request("elys.incentive.Msg", "UpdatePoolMultipliers", data);
    return promise.then(data => MsgUpdatePoolMultipliersResponse.decode(new BinaryReader(data)));
  }
}