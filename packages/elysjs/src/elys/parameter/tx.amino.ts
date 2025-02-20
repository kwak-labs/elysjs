//@ts-nocheck
import { MsgUpdateMinCommission, MsgUpdateMaxVotingPower, MsgUpdateMinSelfDelegation, MsgUpdateTotalBlocksPerYear, MsgUpdateRewardsDataLifetime } from "./tx";
export const AminoConverter = {
  "/elys.parameter.MsgUpdateMinCommission": {
    aminoType: "parameter/MsgUpdateMinCommission",
    toAmino: MsgUpdateMinCommission.toAmino,
    fromAmino: MsgUpdateMinCommission.fromAmino
  },
  "/elys.parameter.MsgUpdateMaxVotingPower": {
    aminoType: "parameter/MsgUpdateMaxVotingPower",
    toAmino: MsgUpdateMaxVotingPower.toAmino,
    fromAmino: MsgUpdateMaxVotingPower.fromAmino
  },
  "/elys.parameter.MsgUpdateMinSelfDelegation": {
    aminoType: "parameter/MsgUpdateMinSelfDelegation",
    toAmino: MsgUpdateMinSelfDelegation.toAmino,
    fromAmino: MsgUpdateMinSelfDelegation.fromAmino
  },
  "/elys.parameter.MsgUpdateTotalBlocksPerYear": {
    aminoType: "parameter/MsgUpdateTotalBlocksPerYear",
    toAmino: MsgUpdateTotalBlocksPerYear.toAmino,
    fromAmino: MsgUpdateTotalBlocksPerYear.fromAmino
  },
  "/elys.parameter.MsgUpdateRewardsDataLifetime": {
    aminoType: "parameter/MsgUpdateRewardsDataLifetime",
    toAmino: MsgUpdateRewardsDataLifetime.toAmino,
    fromAmino: MsgUpdateRewardsDataLifetime.fromAmino
  }
};