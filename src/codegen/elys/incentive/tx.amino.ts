import { MsgWithdrawRewards, MsgWithdrawValidatorCommission, MsgUpdateIncentiveParams, MsgUpdatePoolMultipliers } from "./tx";
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
  },
  "/elys.incentive.MsgUpdateIncentiveParams": {
    aminoType: "/elys.incentive.MsgUpdateIncentiveParams",
    toAmino: MsgUpdateIncentiveParams.toAmino,
    fromAmino: MsgUpdateIncentiveParams.fromAmino
  },
  "/elys.incentive.MsgUpdatePoolMultipliers": {
    aminoType: "/elys.incentive.MsgUpdatePoolMultipliers",
    toAmino: MsgUpdatePoolMultipliers.toAmino,
    fromAmino: MsgUpdatePoolMultipliers.fromAmino
  }
};