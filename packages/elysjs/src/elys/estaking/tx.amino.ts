//@ts-nocheck
import { MsgUpdateParams, MsgWithdrawReward, MsgWithdrawElysStakingRewards, MsgWithdrawAllRewards } from "./tx";
export const AminoConverter = {
  "/elys.estaking.MsgUpdateParams": {
    aminoType: "estaking/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/elys.estaking.MsgWithdrawReward": {
    aminoType: "estaking/MsgWithdrawReward",
    toAmino: MsgWithdrawReward.toAmino,
    fromAmino: MsgWithdrawReward.fromAmino
  },
  "/elys.estaking.MsgWithdrawElysStakingRewards": {
    aminoType: "estaking/MsgWithdrawElysStakingRewards",
    toAmino: MsgWithdrawElysStakingRewards.toAmino,
    fromAmino: MsgWithdrawElysStakingRewards.fromAmino
  },
  "/elys.estaking.MsgWithdrawAllRewards": {
    aminoType: "estaking/MsgWithdrawAllRewards",
    toAmino: MsgWithdrawAllRewards.toAmino,
    fromAmino: MsgWithdrawAllRewards.fromAmino
  }
};