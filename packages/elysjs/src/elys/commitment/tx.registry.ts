//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCommitClaimedRewards, MsgUncommitTokens, MsgVest, MsgVestNow, MsgVestLiquid, MsgCancelVest, MsgClaimVesting, MsgUpdateVestingInfo, MsgUpdateEnableVestNow, MsgUpdateAirdropParams, MsgStake, MsgUnstake, MsgClaimAirdrop, MsgClaimKol } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.commitment.MsgCommitClaimedRewards", MsgCommitClaimedRewards], ["/elys.commitment.MsgUncommitTokens", MsgUncommitTokens], ["/elys.commitment.MsgVest", MsgVest], ["/elys.commitment.MsgVestNow", MsgVestNow], ["/elys.commitment.MsgVestLiquid", MsgVestLiquid], ["/elys.commitment.MsgCancelVest", MsgCancelVest], ["/elys.commitment.MsgClaimVesting", MsgClaimVesting], ["/elys.commitment.MsgUpdateVestingInfo", MsgUpdateVestingInfo], ["/elys.commitment.MsgUpdateEnableVestNow", MsgUpdateEnableVestNow], ["/elys.commitment.MsgUpdateAirdropParams", MsgUpdateAirdropParams], ["/elys.commitment.MsgStake", MsgStake], ["/elys.commitment.MsgUnstake", MsgUnstake], ["/elys.commitment.MsgClaimAirdrop", MsgClaimAirdrop], ["/elys.commitment.MsgClaimKol", MsgClaimKol]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    commitClaimedRewards(value: MsgCommitClaimedRewards) {
      return {
        typeUrl: "/elys.commitment.MsgCommitClaimedRewards",
        value: MsgCommitClaimedRewards.encode(value).finish()
      };
    },
    uncommitTokens(value: MsgUncommitTokens) {
      return {
        typeUrl: "/elys.commitment.MsgUncommitTokens",
        value: MsgUncommitTokens.encode(value).finish()
      };
    },
    vest(value: MsgVest) {
      return {
        typeUrl: "/elys.commitment.MsgVest",
        value: MsgVest.encode(value).finish()
      };
    },
    vestNow(value: MsgVestNow) {
      return {
        typeUrl: "/elys.commitment.MsgVestNow",
        value: MsgVestNow.encode(value).finish()
      };
    },
    vestLiquid(value: MsgVestLiquid) {
      return {
        typeUrl: "/elys.commitment.MsgVestLiquid",
        value: MsgVestLiquid.encode(value).finish()
      };
    },
    cancelVest(value: MsgCancelVest) {
      return {
        typeUrl: "/elys.commitment.MsgCancelVest",
        value: MsgCancelVest.encode(value).finish()
      };
    },
    claimVesting(value: MsgClaimVesting) {
      return {
        typeUrl: "/elys.commitment.MsgClaimVesting",
        value: MsgClaimVesting.encode(value).finish()
      };
    },
    updateVestingInfo(value: MsgUpdateVestingInfo) {
      return {
        typeUrl: "/elys.commitment.MsgUpdateVestingInfo",
        value: MsgUpdateVestingInfo.encode(value).finish()
      };
    },
    updateEnableVestNow(value: MsgUpdateEnableVestNow) {
      return {
        typeUrl: "/elys.commitment.MsgUpdateEnableVestNow",
        value: MsgUpdateEnableVestNow.encode(value).finish()
      };
    },
    updateAirdropParams(value: MsgUpdateAirdropParams) {
      return {
        typeUrl: "/elys.commitment.MsgUpdateAirdropParams",
        value: MsgUpdateAirdropParams.encode(value).finish()
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/elys.commitment.MsgStake",
        value: MsgStake.encode(value).finish()
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/elys.commitment.MsgUnstake",
        value: MsgUnstake.encode(value).finish()
      };
    },
    claimAirdrop(value: MsgClaimAirdrop) {
      return {
        typeUrl: "/elys.commitment.MsgClaimAirdrop",
        value: MsgClaimAirdrop.encode(value).finish()
      };
    },
    claimKol(value: MsgClaimKol) {
      return {
        typeUrl: "/elys.commitment.MsgClaimKol",
        value: MsgClaimKol.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    commitClaimedRewards(value: MsgCommitClaimedRewards) {
      return {
        typeUrl: "/elys.commitment.MsgCommitClaimedRewards",
        value
      };
    },
    uncommitTokens(value: MsgUncommitTokens) {
      return {
        typeUrl: "/elys.commitment.MsgUncommitTokens",
        value
      };
    },
    vest(value: MsgVest) {
      return {
        typeUrl: "/elys.commitment.MsgVest",
        value
      };
    },
    vestNow(value: MsgVestNow) {
      return {
        typeUrl: "/elys.commitment.MsgVestNow",
        value
      };
    },
    vestLiquid(value: MsgVestLiquid) {
      return {
        typeUrl: "/elys.commitment.MsgVestLiquid",
        value
      };
    },
    cancelVest(value: MsgCancelVest) {
      return {
        typeUrl: "/elys.commitment.MsgCancelVest",
        value
      };
    },
    claimVesting(value: MsgClaimVesting) {
      return {
        typeUrl: "/elys.commitment.MsgClaimVesting",
        value
      };
    },
    updateVestingInfo(value: MsgUpdateVestingInfo) {
      return {
        typeUrl: "/elys.commitment.MsgUpdateVestingInfo",
        value
      };
    },
    updateEnableVestNow(value: MsgUpdateEnableVestNow) {
      return {
        typeUrl: "/elys.commitment.MsgUpdateEnableVestNow",
        value
      };
    },
    updateAirdropParams(value: MsgUpdateAirdropParams) {
      return {
        typeUrl: "/elys.commitment.MsgUpdateAirdropParams",
        value
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/elys.commitment.MsgStake",
        value
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/elys.commitment.MsgUnstake",
        value
      };
    },
    claimAirdrop(value: MsgClaimAirdrop) {
      return {
        typeUrl: "/elys.commitment.MsgClaimAirdrop",
        value
      };
    },
    claimKol(value: MsgClaimKol) {
      return {
        typeUrl: "/elys.commitment.MsgClaimKol",
        value
      };
    }
  },
  fromPartial: {
    commitClaimedRewards(value: MsgCommitClaimedRewards) {
      return {
        typeUrl: "/elys.commitment.MsgCommitClaimedRewards",
        value: MsgCommitClaimedRewards.fromPartial(value)
      };
    },
    uncommitTokens(value: MsgUncommitTokens) {
      return {
        typeUrl: "/elys.commitment.MsgUncommitTokens",
        value: MsgUncommitTokens.fromPartial(value)
      };
    },
    vest(value: MsgVest) {
      return {
        typeUrl: "/elys.commitment.MsgVest",
        value: MsgVest.fromPartial(value)
      };
    },
    vestNow(value: MsgVestNow) {
      return {
        typeUrl: "/elys.commitment.MsgVestNow",
        value: MsgVestNow.fromPartial(value)
      };
    },
    vestLiquid(value: MsgVestLiquid) {
      return {
        typeUrl: "/elys.commitment.MsgVestLiquid",
        value: MsgVestLiquid.fromPartial(value)
      };
    },
    cancelVest(value: MsgCancelVest) {
      return {
        typeUrl: "/elys.commitment.MsgCancelVest",
        value: MsgCancelVest.fromPartial(value)
      };
    },
    claimVesting(value: MsgClaimVesting) {
      return {
        typeUrl: "/elys.commitment.MsgClaimVesting",
        value: MsgClaimVesting.fromPartial(value)
      };
    },
    updateVestingInfo(value: MsgUpdateVestingInfo) {
      return {
        typeUrl: "/elys.commitment.MsgUpdateVestingInfo",
        value: MsgUpdateVestingInfo.fromPartial(value)
      };
    },
    updateEnableVestNow(value: MsgUpdateEnableVestNow) {
      return {
        typeUrl: "/elys.commitment.MsgUpdateEnableVestNow",
        value: MsgUpdateEnableVestNow.fromPartial(value)
      };
    },
    updateAirdropParams(value: MsgUpdateAirdropParams) {
      return {
        typeUrl: "/elys.commitment.MsgUpdateAirdropParams",
        value: MsgUpdateAirdropParams.fromPartial(value)
      };
    },
    stake(value: MsgStake) {
      return {
        typeUrl: "/elys.commitment.MsgStake",
        value: MsgStake.fromPartial(value)
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/elys.commitment.MsgUnstake",
        value: MsgUnstake.fromPartial(value)
      };
    },
    claimAirdrop(value: MsgClaimAirdrop) {
      return {
        typeUrl: "/elys.commitment.MsgClaimAirdrop",
        value: MsgClaimAirdrop.fromPartial(value)
      };
    },
    claimKol(value: MsgClaimKol) {
      return {
        typeUrl: "/elys.commitment.MsgClaimKol",
        value: MsgClaimKol.fromPartial(value)
      };
    }
  }
};