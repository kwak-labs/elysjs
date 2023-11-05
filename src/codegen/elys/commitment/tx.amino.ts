import { MsgCommitTokens, MsgUncommitTokens, MsgWithdrawTokens, MsgCommitLiquidTokens, MsgVest, MsgCancelVest, MsgVestNow, MsgUpdateVestingInfo, MsgVestLiquid } from "./tx";
export const AminoConverter = {
  "/elys.commitment.MsgCommitTokens": {
    aminoType: "/elys.commitment.MsgCommitTokens",
    toAmino: MsgCommitTokens.toAmino,
    fromAmino: MsgCommitTokens.fromAmino
  },
  "/elys.commitment.MsgUncommitTokens": {
    aminoType: "/elys.commitment.MsgUncommitTokens",
    toAmino: MsgUncommitTokens.toAmino,
    fromAmino: MsgUncommitTokens.fromAmino
  },
  "/elys.commitment.MsgWithdrawTokens": {
    aminoType: "/elys.commitment.MsgWithdrawTokens",
    toAmino: MsgWithdrawTokens.toAmino,
    fromAmino: MsgWithdrawTokens.fromAmino
  },
  "/elys.commitment.MsgCommitLiquidTokens": {
    aminoType: "/elys.commitment.MsgCommitLiquidTokens",
    toAmino: MsgCommitLiquidTokens.toAmino,
    fromAmino: MsgCommitLiquidTokens.fromAmino
  },
  "/elys.commitment.MsgVest": {
    aminoType: "/elys.commitment.MsgVest",
    toAmino: MsgVest.toAmino,
    fromAmino: MsgVest.fromAmino
  },
  "/elys.commitment.MsgCancelVest": {
    aminoType: "/elys.commitment.MsgCancelVest",
    toAmino: MsgCancelVest.toAmino,
    fromAmino: MsgCancelVest.fromAmino
  },
  "/elys.commitment.MsgVestNow": {
    aminoType: "/elys.commitment.MsgVestNow",
    toAmino: MsgVestNow.toAmino,
    fromAmino: MsgVestNow.fromAmino
  },
  "/elys.commitment.MsgUpdateVestingInfo": {
    aminoType: "/elys.commitment.MsgUpdateVestingInfo",
    toAmino: MsgUpdateVestingInfo.toAmino,
    fromAmino: MsgUpdateVestingInfo.fromAmino
  },
  "/elys.commitment.MsgVestLiquid": {
    aminoType: "/elys.commitment.MsgVestLiquid",
    toAmino: MsgVestLiquid.toAmino,
    fromAmino: MsgVestLiquid.fromAmino
  }
};