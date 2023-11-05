import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateInsuranceFund, MsgCreateInsuranceFundResponse, MsgUnderwrite, MsgUnderwriteResponse, MsgRequestRedemption, MsgRequestRedemptionResponse } from "./tx";
/** Msg defines the insurance Msg service. */
export interface Msg {
  /** CreateInsuranceFund defines a method for creating an insurance fund */
  createInsuranceFund(request: MsgCreateInsuranceFund): Promise<MsgCreateInsuranceFundResponse>;
  /** Underwrite defines a method for depositing tokens to underwrite an insurance fund */
  underwrite(request: MsgUnderwrite): Promise<MsgUnderwriteResponse>;
  /** RequestRedemption defines a method for requesting a redemption of the sender's insurance fund tokens */
  requestRedemption(request: MsgRequestRedemption): Promise<MsgRequestRedemptionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createInsuranceFund = this.createInsuranceFund.bind(this);
    this.underwrite = this.underwrite.bind(this);
    this.requestRedemption = this.requestRedemption.bind(this);
  }
  createInsuranceFund(request: MsgCreateInsuranceFund): Promise<MsgCreateInsuranceFundResponse> {
    const data = MsgCreateInsuranceFund.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Msg", "CreateInsuranceFund", data);
    return promise.then(data => MsgCreateInsuranceFundResponse.decode(new BinaryReader(data)));
  }
  underwrite(request: MsgUnderwrite): Promise<MsgUnderwriteResponse> {
    const data = MsgUnderwrite.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Msg", "Underwrite", data);
    return promise.then(data => MsgUnderwriteResponse.decode(new BinaryReader(data)));
  }
  requestRedemption(request: MsgRequestRedemption): Promise<MsgRequestRedemptionResponse> {
    const data = MsgRequestRedemption.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Msg", "RequestRedemption", data);
    return promise.then(data => MsgRequestRedemptionResponse.decode(new BinaryReader(data)));
  }
}