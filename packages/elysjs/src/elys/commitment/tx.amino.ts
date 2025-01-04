//@ts-nocheck
import { MsgCommitClaimedRewards, MsgUncommitTokens, MsgVest, MsgVestNow, MsgVestLiquid, MsgCancelVest, MsgClaimVesting, MsgUpdateVestingInfo, MsgUpdateEnableVestNow, MsgUpdateAirdropParams, MsgStake, MsgUnstake, MsgClaimAirdrop, MsgClaimKol } from "./tx";
export const AminoConverter = {
  "/elys.commitment.MsgCommitClaimedRewards": {
    aminoType: "commitment/MsgCommitClaimedRewards",
    toAmino: MsgCommitClaimedRewards.toAmino,
    fromAmino: MsgCommitClaimedRewards.fromAmino
  },
  "/elys.commitment.MsgUncommitTokens": {
    aminoType: "commitment/MsgUncommitTokens",
    toAmino: MsgUncommitTokens.toAmino,
    fromAmino: MsgUncommitTokens.fromAmino
  },
  "/elys.commitment.MsgVest": {
    aminoType: "commitment/MsgVest",
    toAmino: MsgVest.toAmino,
    fromAmino: MsgVest.fromAmino
  },
  "/elys.commitment.MsgVestNow": {
    aminoType: "commitment/MsgVestNow",
    toAmino: MsgVestNow.toAmino,
    fromAmino: MsgVestNow.fromAmino
  },
  "/elys.commitment.MsgVestLiquid": {
    aminoType: "commitment/MsgVestLiquid",
    toAmino: MsgVestLiquid.toAmino,
    fromAmino: MsgVestLiquid.fromAmino
  },
  "/elys.commitment.MsgCancelVest": {
    aminoType: "commitment/MsgCancelVest",
    toAmino: MsgCancelVest.toAmino,
    fromAmino: MsgCancelVest.fromAmino
  },
  "/elys.commitment.MsgClaimVesting": {
    aminoType: "commitment/MsgClaimVesting",
    toAmino: MsgClaimVesting.toAmino,
    fromAmino: MsgClaimVesting.fromAmino
  },
  "/elys.commitment.MsgUpdateVestingInfo": {
    aminoType: "commitment/MsgUpdateVestingInfo",
    toAmino: MsgUpdateVestingInfo.toAmino,
    fromAmino: MsgUpdateVestingInfo.fromAmino
  },
  "/elys.commitment.MsgUpdateEnableVestNow": {
    aminoType: "commitment/MsgUpdateEnableVestNow",
    toAmino: MsgUpdateEnableVestNow.toAmino,
    fromAmino: MsgUpdateEnableVestNow.fromAmino
  },
  "/elys.commitment.MsgUpdateAirdropParams": {
    aminoType: "commitment/MsgUpdateAirdropParams",
    toAmino: MsgUpdateAirdropParams.toAmino,
    fromAmino: MsgUpdateAirdropParams.fromAmino
  },
  "/elys.commitment.MsgStake": {
    aminoType: "commitment/MsgStake",
    toAmino: MsgStake.toAmino,
    fromAmino: MsgStake.fromAmino
  },
  "/elys.commitment.MsgUnstake": {
    aminoType: "commitment/MsgUnstake",
    toAmino: MsgUnstake.toAmino,
    fromAmino: MsgUnstake.fromAmino
  },
  "/elys.commitment.MsgClaimAirdrop": {
    aminoType: "commitment/MsgClaimAirdrop",
    toAmino: MsgClaimAirdrop.toAmino,
    fromAmino: MsgClaimAirdrop.fromAmino
  },
  "/elys.commitment.MsgClaimKol": {
    aminoType: "commitment/MsgClaimKol",
    toAmino: MsgClaimKol.toAmino,
    fromAmino: MsgClaimKol.fromAmino
  }
};