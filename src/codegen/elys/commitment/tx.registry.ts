import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCommitLiquidTokens, MsgCommitClaimedRewards, MsgUncommitTokens, MsgVest, MsgVestNow, MsgVestLiquid, MsgCancelVest, MsgUpdateVestingInfo, MsgStake, MsgUnstake } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.commitment.MsgCommitLiquidTokens", MsgCommitLiquidTokens], ["/elys.commitment.MsgCommitClaimedRewards", MsgCommitClaimedRewards], ["/elys.commitment.MsgUncommitTokens", MsgUncommitTokens], ["/elys.commitment.MsgVest", MsgVest], ["/elys.commitment.MsgVestNow", MsgVestNow], ["/elys.commitment.MsgVestLiquid", MsgVestLiquid], ["/elys.commitment.MsgCancelVest", MsgCancelVest], ["/elys.commitment.MsgUpdateVestingInfo", MsgUpdateVestingInfo], ["/elys.commitment.MsgStake", MsgStake], ["/elys.commitment.MsgUnstake", MsgUnstake]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    commitLiquidTokens(value: MsgCommitLiquidTokens) {
      return {
        typeUrl: "/elys.commitment.MsgCommitLiquidTokens",
        value: MsgCommitLiquidTokens.encode(value).finish()
      };
    },
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
    updateVestingInfo(value: MsgUpdateVestingInfo) {
      return {
        typeUrl: "/elys.commitment.MsgUpdateVestingInfo",
        value: MsgUpdateVestingInfo.encode(value).finish()
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
    }
  },
  withTypeUrl: {
    commitLiquidTokens(value: MsgCommitLiquidTokens) {
      return {
        typeUrl: "/elys.commitment.MsgCommitLiquidTokens",
        value
      };
    },
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
    updateVestingInfo(value: MsgUpdateVestingInfo) {
      return {
        typeUrl: "/elys.commitment.MsgUpdateVestingInfo",
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
    }
  },
  fromPartial: {
    commitLiquidTokens(value: MsgCommitLiquidTokens) {
      return {
        typeUrl: "/elys.commitment.MsgCommitLiquidTokens",
        value: MsgCommitLiquidTokens.fromPartial(value)
      };
    },
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
    updateVestingInfo(value: MsgUpdateVestingInfo) {
      return {
        typeUrl: "/elys.commitment.MsgUpdateVestingInfo",
        value: MsgUpdateVestingInfo.fromPartial(value)
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
    }
  }
};