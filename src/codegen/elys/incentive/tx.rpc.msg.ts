import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgWithdrawRewards, MsgWithdrawRewardsResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse } from "./tx";
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
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.withdrawRewards = this.withdrawRewards.bind(this);
    this.withdrawValidatorCommission = this.withdrawValidatorCommission.bind(this);
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
}