import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgCommitTokens, MsgCommitTokensResponse, MsgUncommitTokens, MsgUncommitTokensResponse, MsgWithdrawTokens, MsgWithdrawTokensResponse, MsgCommitLiquidTokens, MsgCommitLiquidTokensResponse, MsgVest, MsgVestResponse, MsgCancelVest, MsgCancelVestResponse, MsgVestNow, MsgVestNowResponse, MsgUpdateVestingInfo, MsgUpdateVestingInfoResponse, MsgVestLiquid, MsgVestLiquidResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  commitTokens(request: MsgCommitTokens): Promise<MsgCommitTokensResponse>;
  uncommitTokens(request: MsgUncommitTokens): Promise<MsgUncommitTokensResponse>;
  withdrawTokens(request: MsgWithdrawTokens): Promise<MsgWithdrawTokensResponse>;
  commitLiquidTokens(request: MsgCommitLiquidTokens): Promise<MsgCommitLiquidTokensResponse>;
  vest(request: MsgVest): Promise<MsgVestResponse>;
  cancelVest(request: MsgCancelVest): Promise<MsgCancelVestResponse>;
  vestNow(request: MsgVestNow): Promise<MsgVestNowResponse>;
  updateVestingInfo(request: MsgUpdateVestingInfo): Promise<MsgUpdateVestingInfoResponse>;
  vestLiquid(request: MsgVestLiquid): Promise<MsgVestLiquidResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.commitTokens = this.commitTokens.bind(this);
    this.uncommitTokens = this.uncommitTokens.bind(this);
    this.withdrawTokens = this.withdrawTokens.bind(this);
    this.commitLiquidTokens = this.commitLiquidTokens.bind(this);
    this.vest = this.vest.bind(this);
    this.cancelVest = this.cancelVest.bind(this);
    this.vestNow = this.vestNow.bind(this);
    this.updateVestingInfo = this.updateVestingInfo.bind(this);
    this.vestLiquid = this.vestLiquid.bind(this);
  }
  commitTokens(request: MsgCommitTokens): Promise<MsgCommitTokensResponse> {
    const data = MsgCommitTokens.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "CommitTokens", data);
    return promise.then(data => MsgCommitTokensResponse.decode(new BinaryReader(data)));
  }
  uncommitTokens(request: MsgUncommitTokens): Promise<MsgUncommitTokensResponse> {
    const data = MsgUncommitTokens.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "UncommitTokens", data);
    return promise.then(data => MsgUncommitTokensResponse.decode(new BinaryReader(data)));
  }
  withdrawTokens(request: MsgWithdrawTokens): Promise<MsgWithdrawTokensResponse> {
    const data = MsgWithdrawTokens.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "WithdrawTokens", data);
    return promise.then(data => MsgWithdrawTokensResponse.decode(new BinaryReader(data)));
  }
  commitLiquidTokens(request: MsgCommitLiquidTokens): Promise<MsgCommitLiquidTokensResponse> {
    const data = MsgCommitLiquidTokens.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "CommitLiquidTokens", data);
    return promise.then(data => MsgCommitLiquidTokensResponse.decode(new BinaryReader(data)));
  }
  vest(request: MsgVest): Promise<MsgVestResponse> {
    const data = MsgVest.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "Vest", data);
    return promise.then(data => MsgVestResponse.decode(new BinaryReader(data)));
  }
  cancelVest(request: MsgCancelVest): Promise<MsgCancelVestResponse> {
    const data = MsgCancelVest.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "CancelVest", data);
    return promise.then(data => MsgCancelVestResponse.decode(new BinaryReader(data)));
  }
  vestNow(request: MsgVestNow): Promise<MsgVestNowResponse> {
    const data = MsgVestNow.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "VestNow", data);
    return promise.then(data => MsgVestNowResponse.decode(new BinaryReader(data)));
  }
  updateVestingInfo(request: MsgUpdateVestingInfo): Promise<MsgUpdateVestingInfoResponse> {
    const data = MsgUpdateVestingInfo.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "UpdateVestingInfo", data);
    return promise.then(data => MsgUpdateVestingInfoResponse.decode(new BinaryReader(data)));
  }
  vestLiquid(request: MsgVestLiquid): Promise<MsgVestLiquidResponse> {
    const data = MsgVestLiquid.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Msg", "VestLiquid", data);
    return promise.then(data => MsgVestLiquidResponse.decode(new BinaryReader(data)));
  }
}