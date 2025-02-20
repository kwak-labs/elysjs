//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgWithdrawReward, MsgWithdrawRewardResponse, MsgWithdrawElysStakingRewards, MsgWithdrawElysStakingRewardsResponse, MsgWithdrawAllRewards, MsgWithdrawAllRewardsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a governance operation for updating the x/distribution
   * module parameters. The authority is defined in the keeper.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * WithdrawReward defines a method to withdraw rewards of delegator from a
   * single validator.
   */
  withdrawReward(request: MsgWithdrawReward): Promise<MsgWithdrawRewardResponse>;
  /**
   * WithdrawElysStakingRewards defines a method to withdraw rewards of
   * delegator from all the validators.
   */
  withdrawElysStakingRewards(request: MsgWithdrawElysStakingRewards): Promise<MsgWithdrawElysStakingRewardsResponse>;
  /**
   * WithdrawAllRewards defines a method to withdraw rewards of delegator from
   * all the validators and Eden/EdenB commitment.
   */
  withdrawAllRewards(request: MsgWithdrawAllRewards): Promise<MsgWithdrawAllRewardsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.withdrawReward = this.withdrawReward.bind(this);
    this.withdrawElysStakingRewards = this.withdrawElysStakingRewards.bind(this);
    this.withdrawAllRewards = this.withdrawAllRewards.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("elys.estaking.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  withdrawReward(request: MsgWithdrawReward): Promise<MsgWithdrawRewardResponse> {
    const data = MsgWithdrawReward.encode(request).finish();
    const promise = this.rpc.request("elys.estaking.Msg", "WithdrawReward", data);
    return promise.then(data => MsgWithdrawRewardResponse.decode(new BinaryReader(data)));
  }
  withdrawElysStakingRewards(request: MsgWithdrawElysStakingRewards): Promise<MsgWithdrawElysStakingRewardsResponse> {
    const data = MsgWithdrawElysStakingRewards.encode(request).finish();
    const promise = this.rpc.request("elys.estaking.Msg", "WithdrawElysStakingRewards", data);
    return promise.then(data => MsgWithdrawElysStakingRewardsResponse.decode(new BinaryReader(data)));
  }
  withdrawAllRewards(request: MsgWithdrawAllRewards): Promise<MsgWithdrawAllRewardsResponse> {
    const data = MsgWithdrawAllRewards.encode(request).finish();
    const promise = this.rpc.request("elys.estaking.Msg", "WithdrawAllRewards", data);
    return promise.then(data => MsgWithdrawAllRewardsResponse.decode(new BinaryReader(data)));
  }
}