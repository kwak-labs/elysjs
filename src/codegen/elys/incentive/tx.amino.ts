import { MsgWithdrawRewards, MsgWithdrawValidatorCommission } from "./tx";
export const AminoConverter = {
  "/elys.incentive.MsgWithdrawRewards": {
    aminoType: "/elys.incentive.MsgWithdrawRewards",
    toAmino: MsgWithdrawRewards.toAmino,
    fromAmino: MsgWithdrawRewards.fromAmino
  },
  "/elys.incentive.MsgWithdrawValidatorCommission": {
    aminoType: "/elys.incentive.MsgWithdrawValidatorCommission",
    toAmino: MsgWithdrawValidatorCommission.toAmino,
    fromAmino: MsgWithdrawValidatorCommission.fromAmino
  }
};