import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgValsetConfirm, MsgValsetConfirmResponse, MsgSendToEth, MsgSendToEthResponse, MsgRequestBatch, MsgRequestBatchResponse, MsgConfirmBatch, MsgConfirmBatchResponse, MsgDepositClaim, MsgDepositClaimResponse, MsgWithdrawClaim, MsgWithdrawClaimResponse, MsgValsetUpdatedClaim, MsgValsetUpdatedClaimResponse, MsgERC20DeployedClaim, MsgERC20DeployedClaimResponse, MsgSetOrchestratorAddresses, MsgSetOrchestratorAddressesResponse, MsgCancelSendToEth, MsgCancelSendToEthResponse, MsgSubmitBadSignatureEvidence, MsgSubmitBadSignatureEvidenceResponse } from "./msgs";
export interface Msg {
  valsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse>;
  sendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse>;
  requestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse>;
  confirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse>;
  depositClaim(request: MsgDepositClaim): Promise<MsgDepositClaimResponse>;
  withdrawClaim(request: MsgWithdrawClaim): Promise<MsgWithdrawClaimResponse>;
  valsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse>;
  eRC20DeployedClaim(request: MsgERC20DeployedClaim): Promise<MsgERC20DeployedClaimResponse>;
  setOrchestratorAddresses(request: MsgSetOrchestratorAddresses): Promise<MsgSetOrchestratorAddressesResponse>;
  cancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse>;
  submitBadSignatureEvidence(request: MsgSubmitBadSignatureEvidence): Promise<MsgSubmitBadSignatureEvidenceResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.valsetConfirm = this.valsetConfirm.bind(this);
    this.sendToEth = this.sendToEth.bind(this);
    this.requestBatch = this.requestBatch.bind(this);
    this.confirmBatch = this.confirmBatch.bind(this);
    this.depositClaim = this.depositClaim.bind(this);
    this.withdrawClaim = this.withdrawClaim.bind(this);
    this.valsetUpdateClaim = this.valsetUpdateClaim.bind(this);
    this.eRC20DeployedClaim = this.eRC20DeployedClaim.bind(this);
    this.setOrchestratorAddresses = this.setOrchestratorAddresses.bind(this);
    this.cancelSendToEth = this.cancelSendToEth.bind(this);
    this.submitBadSignatureEvidence = this.submitBadSignatureEvidence.bind(this);
  }
  valsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse> {
    const data = MsgValsetConfirm.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "ValsetConfirm", data);
    return promise.then(data => MsgValsetConfirmResponse.decode(new BinaryReader(data)));
  }
  sendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse> {
    const data = MsgSendToEth.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "SendToEth", data);
    return promise.then(data => MsgSendToEthResponse.decode(new BinaryReader(data)));
  }
  requestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse> {
    const data = MsgRequestBatch.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "RequestBatch", data);
    return promise.then(data => MsgRequestBatchResponse.decode(new BinaryReader(data)));
  }
  confirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse> {
    const data = MsgConfirmBatch.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "ConfirmBatch", data);
    return promise.then(data => MsgConfirmBatchResponse.decode(new BinaryReader(data)));
  }
  depositClaim(request: MsgDepositClaim): Promise<MsgDepositClaimResponse> {
    const data = MsgDepositClaim.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "DepositClaim", data);
    return promise.then(data => MsgDepositClaimResponse.decode(new BinaryReader(data)));
  }
  withdrawClaim(request: MsgWithdrawClaim): Promise<MsgWithdrawClaimResponse> {
    const data = MsgWithdrawClaim.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "WithdrawClaim", data);
    return promise.then(data => MsgWithdrawClaimResponse.decode(new BinaryReader(data)));
  }
  valsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse> {
    const data = MsgValsetUpdatedClaim.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "ValsetUpdateClaim", data);
    return promise.then(data => MsgValsetUpdatedClaimResponse.decode(new BinaryReader(data)));
  }
  eRC20DeployedClaim(request: MsgERC20DeployedClaim): Promise<MsgERC20DeployedClaimResponse> {
    const data = MsgERC20DeployedClaim.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "ERC20DeployedClaim", data);
    return promise.then(data => MsgERC20DeployedClaimResponse.decode(new BinaryReader(data)));
  }
  setOrchestratorAddresses(request: MsgSetOrchestratorAddresses): Promise<MsgSetOrchestratorAddressesResponse> {
    const data = MsgSetOrchestratorAddresses.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "SetOrchestratorAddresses", data);
    return promise.then(data => MsgSetOrchestratorAddressesResponse.decode(new BinaryReader(data)));
  }
  cancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse> {
    const data = MsgCancelSendToEth.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "CancelSendToEth", data);
    return promise.then(data => MsgCancelSendToEthResponse.decode(new BinaryReader(data)));
  }
  submitBadSignatureEvidence(request: MsgSubmitBadSignatureEvidence): Promise<MsgSubmitBadSignatureEvidenceResponse> {
    const data = MsgSubmitBadSignatureEvidence.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Msg", "SubmitBadSignatureEvidence", data);
    return promise.then(data => MsgSubmitBadSignatureEvidenceResponse.decode(new BinaryReader(data)));
  }
}