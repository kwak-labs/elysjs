import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateMinCommission, MsgUpdateMinCommissionResponse, MsgUpdateMaxVotingPower, MsgUpdateMaxVotingPowerResponse, MsgUpdateMinSelfDelegation, MsgUpdateMinSelfDelegationResponse, MsgUpdateBrokerAddress, MsgUpdateBrokerAddressResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  updateMinCommission(request: MsgUpdateMinCommission): Promise<MsgUpdateMinCommissionResponse>;
  updateMaxVotingPower(request: MsgUpdateMaxVotingPower): Promise<MsgUpdateMaxVotingPowerResponse>;
  updateMinSelfDelegation(request: MsgUpdateMinSelfDelegation): Promise<MsgUpdateMinSelfDelegationResponse>;
  updateBrokerAddress(request: MsgUpdateBrokerAddress): Promise<MsgUpdateBrokerAddressResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateMinCommission = this.updateMinCommission.bind(this);
    this.updateMaxVotingPower = this.updateMaxVotingPower.bind(this);
    this.updateMinSelfDelegation = this.updateMinSelfDelegation.bind(this);
    this.updateBrokerAddress = this.updateBrokerAddress.bind(this);
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
  updateBrokerAddress(request: MsgUpdateBrokerAddress): Promise<MsgUpdateBrokerAddressResponse> {
    const data = MsgUpdateBrokerAddress.encode(request).finish();
    const promise = this.rpc.request("elys.parameter.Msg", "UpdateBrokerAddress", data);
    return promise.then(data => MsgUpdateBrokerAddressResponse.decode(new BinaryReader(data)));
  }
}