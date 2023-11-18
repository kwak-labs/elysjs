import { MsgCommitLiquidTokens, MsgCommitClaimedRewards, MsgUncommitTokens, MsgVest, MsgVestNow, MsgVestLiquid, MsgCancelVest, MsgUpdateVestingInfo, MsgStake, MsgUnstake } from "./tx";
export const AminoConverter = {
  "/elys.commitment.MsgCommitLiquidTokens": {
    aminoType: "/elys.commitment.MsgCommitLiquidTokens",
    toAmino: MsgCommitLiquidTokens.toAmino,
    fromAmino: MsgCommitLiquidTokens.fromAmino
  },
  "/elys.commitment.MsgCommitClaimedRewards": {
    aminoType: "/elys.commitment.MsgCommitClaimedRewards",
    toAmino: MsgCommitClaimedRewards.toAmino,
    fromAmino: MsgCommitClaimedRewards.fromAmino
  },
  "/elys.commitment.MsgUncommitTokens": {
    aminoType: "/elys.commitment.MsgUncommitTokens",
    toAmino: MsgUncommitTokens.toAmino,
    fromAmino: MsgUncommitTokens.fromAmino
  },
  "/elys.commitment.MsgVest": {
    aminoType: "/elys.commitment.MsgVest",
    toAmino: MsgVest.toAmino,
    fromAmino: MsgVest.fromAmino
  },
  "/elys.commitment.MsgVestNow": {
    aminoType: "/elys.commitment.MsgVestNow",
    toAmino: MsgVestNow.toAmino,
    fromAmino: MsgVestNow.fromAmino
  },
  "/elys.commitment.MsgVestLiquid": {
    aminoType: "/elys.commitment.MsgVestLiquid",
    toAmino: MsgVestLiquid.toAmino,
    fromAmino: MsgVestLiquid.fromAmino
  },
  "/elys.commitment.MsgCancelVest": {
    aminoType: "/elys.commitment.MsgCancelVest",
    toAmino: MsgCancelVest.toAmino,
    fromAmino: MsgCancelVest.fromAmino
  },
  "/elys.commitment.MsgUpdateVestingInfo": {
    aminoType: "/elys.commitment.MsgUpdateVestingInfo",
    toAmino: MsgUpdateVestingInfo.toAmino,
    fromAmino: MsgUpdateVestingInfo.fromAmino
  },
  "/elys.commitment.MsgStake": {
    aminoType: "/elys.commitment.MsgStake",
    toAmino: MsgStake.toAmino,
    fromAmino: MsgStake.fromAmino
  },
  "/elys.commitment.MsgUnstake": {
    aminoType: "/elys.commitment.MsgUnstake",
    toAmino: MsgUnstake.toAmino,
    fromAmino: MsgUnstake.fromAmino
  }
};