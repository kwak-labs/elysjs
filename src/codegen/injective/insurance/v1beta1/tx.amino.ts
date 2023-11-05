import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption } from "./tx";
export const AminoConverter = {
  "/injective.insurance.v1beta1.MsgCreateInsuranceFund": {
    aminoType: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
    toAmino: MsgCreateInsuranceFund.toAmino,
    fromAmino: MsgCreateInsuranceFund.fromAmino
  },
  "/injective.insurance.v1beta1.MsgUnderwrite": {
    aminoType: "/injective.insurance.v1beta1.MsgUnderwrite",
    toAmino: MsgUnderwrite.toAmino,
    fromAmino: MsgUnderwrite.fromAmino
  },
  "/injective.insurance.v1beta1.MsgRequestRedemption": {
    aminoType: "/injective.insurance.v1beta1.MsgRequestRedemption",
    toAmino: MsgRequestRedemption.toAmino,
    fromAmino: MsgRequestRedemption.fromAmino
  }
};