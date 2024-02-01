import { MsgUpdateMinCommission, MsgUpdateMaxVotingPower, MsgUpdateMinSelfDelegation, MsgUpdateBrokerAddress } from "./tx";
export const AminoConverter = {
  "/elys.parameter.MsgUpdateMinCommission": {
    aminoType: "/elys.parameter.MsgUpdateMinCommission",
    toAmino: MsgUpdateMinCommission.toAmino,
    fromAmino: MsgUpdateMinCommission.fromAmino
  },
  "/elys.parameter.MsgUpdateMaxVotingPower": {
    aminoType: "/elys.parameter.MsgUpdateMaxVotingPower",
    toAmino: MsgUpdateMaxVotingPower.toAmino,
    fromAmino: MsgUpdateMaxVotingPower.fromAmino
  },
  "/elys.parameter.MsgUpdateMinSelfDelegation": {
    aminoType: "/elys.parameter.MsgUpdateMinSelfDelegation",
    toAmino: MsgUpdateMinSelfDelegation.toAmino,
    fromAmino: MsgUpdateMinSelfDelegation.fromAmino
  },
  "/elys.parameter.MsgUpdateBrokerAddress": {
    aminoType: "/elys.parameter.MsgUpdateBrokerAddress",
    toAmino: MsgUpdateBrokerAddress.toAmino,
    fromAmino: MsgUpdateBrokerAddress.fromAmino
  }
};