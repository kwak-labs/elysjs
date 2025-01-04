//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgCommitClaimedRewards, MsgCommitClaimedRewardsResponse, MsgUncommitTokens, MsgUncommitTokensResponse, MsgVest, MsgVestResponse, MsgVestNow, MsgVestNowResponse, MsgVestLiquid, MsgVestLiquidResponse, MsgCancelVest, MsgCancelVestResponse, MsgClaimVesting, MsgClaimVestingResponse, MsgUpdateVestingInfo, MsgUpdateVestingInfoResponse, MsgUpdateEnableVestNow, MsgUpdateEnableVestNowResponse, MsgUpdateAirdropParams, MsgUpdateAirdropParamsResponse, MsgStake, MsgStakeResponse, MsgUnstake, MsgUnstakeResponse, MsgClaimAirdrop, MsgClaimAirdropResponse, MsgClaimKol, MsgClaimKolResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** CommitClaimedRewards commit the tokens on claimed store to committed */
  commitClaimedRewards(request: MsgCommitClaimedRewards): Promise<MsgCommitClaimedRewardsResponse>;
  /**
   * UncommitTokens uncommits the tokens from committed store and make it liquid
   * immediately
   */
  uncommitTokens(request: MsgUncommitTokens): Promise<MsgUncommitTokensResponse>;
  /**
   * Vest converts user's commitment to vesting - start with unclaimed rewards
   * and if it's not enough deduct from committed bucket mainly utilized for
   * Eden
   */
  vest(request: MsgVest): Promise<MsgVestResponse>;
  /**
   * VestNow provides functionality to get the token immediately but lower
   * amount than original e.g. user can burn 1000 ueden and get 800 uelys when
   * the ratio is 80%
   */
  vestNow(request: MsgVestNow): Promise<MsgVestNowResponse>;
  /**
   * VestLiquid converts user's balance to vesting to be utilized for normal
   * tokens vesting like ATOM vesting
   */
  vestLiquid(request: MsgVestLiquid): Promise<MsgVestLiquidResponse>;
  /**
   * CancelVest cancel the user's vesting and the user reject to get vested
   * tokens
   */
  cancelVest(request: MsgCancelVest): Promise<MsgCancelVestResponse>;
  /** ClaimVesting claims already vested amount */
  claimVesting(request: MsgClaimVesting): Promise<MsgClaimVestingResponse>;
  /** UpdateVestingInfo add/update specific vesting info by denom on Params */
  updateVestingInfo(request: MsgUpdateVestingInfo): Promise<MsgUpdateVestingInfoResponse>;
  /** UpdateEnableVestNow add/update enable vest now on Params */
  updateEnableVestNow(request: MsgUpdateEnableVestNow): Promise<MsgUpdateEnableVestNowResponse>;
  updateAirdropParams(request: MsgUpdateAirdropParams): Promise<MsgUpdateAirdropParamsResponse>;
  stake(request: MsgStake): Promise<MsgStakeResponse>;
  unstake(request: MsgUnstake): Promise<MsgUnstakeResponse>;
  claimAirdrop(request: MsgClaimAirdrop): Promise<MsgClaimAirdropResponse>;
  claimKol(request: MsgClaimKol): Promise<MsgClaimKolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.commitClaimedRewards = this.commitClaimedRewards.bind(this);
    this.uncommitTokens = this.uncommitTokens.bind(this);
    this.vest = this.vest.bind(this);
    this.vestNow = this.vestNow.bind(this);
    this.vestLiquid = this.vestLiquid.bind(this);
    this.cancelVest = this.cancelVest.bind(this);
    this.claimVesting = this.claimVesting.bind(this);
    this.updateVestingInfo = this.updateVestingInfo.bind(this);
    this.updateEnableVestNow = this.updateEnableVestNow.bind(this);
    this.updateAirdropParams = this.updateAirdropParams.bind(this);
    this.stake = this.stake.bind(this);
    this.unstake = this.unstake.bind(this);
    this.claimAirdrop = this.claimAirdrop.bind(this);
    this.claimKol = this.claimKol.bind(this);
  }
  commitClaimedRewards(request: MsgCommitClaimedRewards): Promise<MsgCommitClaimedRewardsResponse> {
    const data = MsgCommitClaimedRewards.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "CommitClaimedRewards", data);
    return promise.then(data => MsgCommitClaimedRewardsResponse.decode(new BinaryReader(data)));
  }
  uncommitTokens(request: MsgUncommitTokens): Promise<MsgUncommitTokensResponse> {
    const data = MsgUncommitTokens.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "UncommitTokens", data);
    return promise.then(data => MsgUncommitTokensResponse.decode(new BinaryReader(data)));
  }
  vest(request: MsgVest): Promise<MsgVestResponse> {
    const data = MsgVest.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "Vest", data);
    return promise.then(data => MsgVestResponse.decode(new BinaryReader(data)));
  }
  vestNow(request: MsgVestNow): Promise<MsgVestNowResponse> {
    const data = MsgVestNow.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "VestNow", data);
    return promise.then(data => MsgVestNowResponse.decode(new BinaryReader(data)));
  }
  vestLiquid(request: MsgVestLiquid): Promise<MsgVestLiquidResponse> {
    const data = MsgVestLiquid.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "VestLiquid", data);
    return promise.then(data => MsgVestLiquidResponse.decode(new BinaryReader(data)));
  }
  cancelVest(request: MsgCancelVest): Promise<MsgCancelVestResponse> {
    const data = MsgCancelVest.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "CancelVest", data);
    return promise.then(data => MsgCancelVestResponse.decode(new BinaryReader(data)));
  }
  claimVesting(request: MsgClaimVesting): Promise<MsgClaimVestingResponse> {
    const data = MsgClaimVesting.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "ClaimVesting", data);
    return promise.then(data => MsgClaimVestingResponse.decode(new BinaryReader(data)));
  }
  updateVestingInfo(request: MsgUpdateVestingInfo): Promise<MsgUpdateVestingInfoResponse> {
    const data = MsgUpdateVestingInfo.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "UpdateVestingInfo", data);
    return promise.then(data => MsgUpdateVestingInfoResponse.decode(new BinaryReader(data)));
  }
  updateEnableVestNow(request: MsgUpdateEnableVestNow): Promise<MsgUpdateEnableVestNowResponse> {
    const data = MsgUpdateEnableVestNow.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "UpdateEnableVestNow", data);
    return promise.then(data => MsgUpdateEnableVestNowResponse.decode(new BinaryReader(data)));
  }
  updateAirdropParams(request: MsgUpdateAirdropParams): Promise<MsgUpdateAirdropParamsResponse> {
    const data = MsgUpdateAirdropParams.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "UpdateAirdropParams", data);
    return promise.then(data => MsgUpdateAirdropParamsResponse.decode(new BinaryReader(data)));
  }
  stake(request: MsgStake): Promise<MsgStakeResponse> {
    const data = MsgStake.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "Stake", data);
    return promise.then(data => MsgStakeResponse.decode(new BinaryReader(data)));
  }
  unstake(request: MsgUnstake): Promise<MsgUnstakeResponse> {
    const data = MsgUnstake.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "Unstake", data);
    return promise.then(data => MsgUnstakeResponse.decode(new BinaryReader(data)));
  }
  claimAirdrop(request: MsgClaimAirdrop): Promise<MsgClaimAirdropResponse> {
    const data = MsgClaimAirdrop.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "ClaimAirdrop", data);
    return promise.then(data => MsgClaimAirdropResponse.decode(new BinaryReader(data)));
  }
  claimKol(request: MsgClaimKol): Promise<MsgClaimKolResponse> {
    const data = MsgClaimKol.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "ClaimKol", data);
    return promise.then(data => MsgClaimKolResponse.decode(new BinaryReader(data)));
  }
}