//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgCreateAirdrop, MsgCreateAirdropResponse, MsgUpdateAirdrop, MsgUpdateAirdropResponse, MsgDeleteAirdrop, MsgDeleteAirdropResponse, MsgClaimAirdrop, MsgClaimAirdropResponse, MsgUpdateGenesisInflation, MsgUpdateGenesisInflationResponse, MsgCreateTimeBasedInflation, MsgCreateTimeBasedInflationResponse, MsgUpdateTimeBasedInflation, MsgUpdateTimeBasedInflationResponse, MsgDeleteTimeBasedInflation, MsgDeleteTimeBasedInflationResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createAirdrop(request: MsgCreateAirdrop): Promise<MsgCreateAirdropResponse>;
  updateAirdrop(request: MsgUpdateAirdrop): Promise<MsgUpdateAirdropResponse>;
  deleteAirdrop(request: MsgDeleteAirdrop): Promise<MsgDeleteAirdropResponse>;
  claimAirdrop(request: MsgClaimAirdrop): Promise<MsgClaimAirdropResponse>;
  updateGenesisInflation(request: MsgUpdateGenesisInflation): Promise<MsgUpdateGenesisInflationResponse>;
  createTimeBasedInflation(request: MsgCreateTimeBasedInflation): Promise<MsgCreateTimeBasedInflationResponse>;
  updateTimeBasedInflation(request: MsgUpdateTimeBasedInflation): Promise<MsgUpdateTimeBasedInflationResponse>;
  deleteTimeBasedInflation(request: MsgDeleteTimeBasedInflation): Promise<MsgDeleteTimeBasedInflationResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createAirdrop = this.createAirdrop.bind(this);
    this.updateAirdrop = this.updateAirdrop.bind(this);
    this.deleteAirdrop = this.deleteAirdrop.bind(this);
    this.claimAirdrop = this.claimAirdrop.bind(this);
    this.updateGenesisInflation = this.updateGenesisInflation.bind(this);
    this.createTimeBasedInflation = this.createTimeBasedInflation.bind(this);
    this.updateTimeBasedInflation = this.updateTimeBasedInflation.bind(this);
    this.deleteTimeBasedInflation = this.deleteTimeBasedInflation.bind(this);
  }
  createAirdrop(request: MsgCreateAirdrop): Promise<MsgCreateAirdropResponse> {
    const data = MsgCreateAirdrop.encode(request).finish();
    const promise = this.rpc.request("elys.tokenomics.Msg", "CreateAirdrop", data);
    return promise.then(data => MsgCreateAirdropResponse.decode(new BinaryReader(data)));
  }
  updateAirdrop(request: MsgUpdateAirdrop): Promise<MsgUpdateAirdropResponse> {
    const data = MsgUpdateAirdrop.encode(request).finish();
    const promise = this.rpc.request("elys.tokenomics.Msg", "UpdateAirdrop", data);
    return promise.then(data => MsgUpdateAirdropResponse.decode(new BinaryReader(data)));
  }
  deleteAirdrop(request: MsgDeleteAirdrop): Promise<MsgDeleteAirdropResponse> {
    const data = MsgDeleteAirdrop.encode(request).finish();
    const promise = this.rpc.request("elys.tokenomics.Msg", "DeleteAirdrop", data);
    return promise.then(data => MsgDeleteAirdropResponse.decode(new BinaryReader(data)));
  }
  claimAirdrop(request: MsgClaimAirdrop): Promise<MsgClaimAirdropResponse> {
    const data = MsgClaimAirdrop.encode(request).finish();
    const promise = this.rpc.request("elys.tokenomics.Msg", "ClaimAirdrop", data);
    return promise.then(data => MsgClaimAirdropResponse.decode(new BinaryReader(data)));
  }
  updateGenesisInflation(request: MsgUpdateGenesisInflation): Promise<MsgUpdateGenesisInflationResponse> {
    const data = MsgUpdateGenesisInflation.encode(request).finish();
    const promise = this.rpc.request("elys.tokenomics.Msg", "UpdateGenesisInflation", data);
    return promise.then(data => MsgUpdateGenesisInflationResponse.decode(new BinaryReader(data)));
  }
  createTimeBasedInflation(request: MsgCreateTimeBasedInflation): Promise<MsgCreateTimeBasedInflationResponse> {
    const data = MsgCreateTimeBasedInflation.encode(request).finish();
    const promise = this.rpc.request("elys.tokenomics.Msg", "CreateTimeBasedInflation", data);
    return promise.then(data => MsgCreateTimeBasedInflationResponse.decode(new BinaryReader(data)));
  }
  updateTimeBasedInflation(request: MsgUpdateTimeBasedInflation): Promise<MsgUpdateTimeBasedInflationResponse> {
    const data = MsgUpdateTimeBasedInflation.encode(request).finish();
    const promise = this.rpc.request("elys.tokenomics.Msg", "UpdateTimeBasedInflation", data);
    return promise.then(data => MsgUpdateTimeBasedInflationResponse.decode(new BinaryReader(data)));
  }
  deleteTimeBasedInflation(request: MsgDeleteTimeBasedInflation): Promise<MsgDeleteTimeBasedInflationResponse> {
    const data = MsgDeleteTimeBasedInflation.encode(request).finish();
    const promise = this.rpc.request("elys.tokenomics.Msg", "DeleteTimeBasedInflation", data);
    return promise.then(data => MsgDeleteTimeBasedInflationResponse.decode(new BinaryReader(data)));
  }
}