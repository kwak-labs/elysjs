import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCommitTokens, MsgUncommitTokens, MsgWithdrawTokens, MsgCommitLiquidTokens, MsgVest, MsgCancelVest, MsgVestNow, MsgUpdateVestingInfo, MsgVestLiquid } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.commitment.MsgCommitTokens", MsgCommitTokens], ["/elys.commitment.MsgUncommitTokens", MsgUncommitTokens], ["/elys.commitment.MsgWithdrawTokens", MsgWithdrawTokens], ["/elys.commitment.MsgCommitLiquidTokens", MsgCommitLiquidTokens], ["/elys.commitment.MsgVest", MsgVest], ["/elys.commitment.MsgCancelVest", MsgCancelVest], ["/elys.commitment.MsgVestNow", MsgVestNow], ["/elys.commitment.MsgUpdateVestingInfo", MsgUpdateVestingInfo], ["/elys.commitment.MsgVestLiquid", MsgVestLiquid]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    commitTokens(value: MsgCommitTokens) {
      return {
        typeUrl: "/elys.commitment.MsgCommitTokens",
        value: MsgCommitTokens.encode(value).finish()
      };
    },
    uncommitTokens(value: MsgUncommitTokens) {
      return {
        typeUrl: "/elys.commitment.MsgUncommitTokens",
        value: MsgUncommitTokens.encode(value).finish()
      };
    },
    withdrawTokens(value: MsgWithdrawTokens) {
      return {
        typeUrl: "/elys.commitment.MsgWithdrawTokens",
        value: MsgWithdrawTokens.encode(value).finish()
      };
    },
    commitLiquidTokens(value: MsgCommitLiquidTokens) {
      return {
        typeUrl: "/elys.commitment.MsgCommitLiquidTokens",
        value: MsgCommitLiquidTokens.encode(value).finish()
      };
    },
    vest(value: MsgVest) {
      return {
        typeUrl: "/elys.commitment.MsgVest",
        value: MsgVest.encode(value).finish()
      };
    },
    cancelVest(value: MsgCancelVest) {
      return {
        typeUrl: "/elys.commitment.MsgCancelVest",
        value: MsgCancelVest.encode(value).finish()
      };
    },
    vestNow(value: MsgVestNow) {
      return {
        typeUrl: "/elys.commitment.MsgVestNow",
        value: MsgVestNow.encode(value).finish()
      };
    },
    updateVestingInfo(value: MsgUpdateVestingInfo) {
      return {
        typeUrl: "/elys.commitment.MsgUpdateVestingInfo",
        value: MsgUpdateVestingInfo.encode(value).finish()
      };
    },
    vestLiquid(value: MsgVestLiquid) {
      return {
        typeUrl: "/elys.commitment.MsgVestLiquid",
        value: MsgVestLiquid.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    commitTokens(value: MsgCommitTokens) {
      return {
        typeUrl: "/elys.commitment.MsgCommitTokens",
        value
      };
    },
    uncommitTokens(value: MsgUncommitTokens) {
      return {
        typeUrl: "/elys.commitment.MsgUncommitTokens",
        value
      };
    },
    withdrawTokens(value: MsgWithdrawTokens) {
      return {
        typeUrl: "/elys.commitment.MsgWithdrawTokens",
        value
      };
    },
    commitLiquidTokens(value: MsgCommitLiquidTokens) {
      return {
        typeUrl: "/elys.commitment.MsgCommitLiquidTokens",
        value
      };
    },
    vest(value: MsgVest) {
      return {
        typeUrl: "/elys.commitment.MsgVest",
        value
      };
    },
    cancelVest(value: MsgCancelVest) {
      return {
        typeUrl: "/elys.commitment.MsgCancelVest",
        value
      };
    },
    vestNow(value: MsgVestNow) {
      return {
        typeUrl: "/elys.commitment.MsgVestNow",
        value
      };
    },
    updateVestingInfo(value: MsgUpdateVestingInfo) {
      return {
        typeUrl: "/elys.commitment.MsgUpdateVestingInfo",
        value
      };
    },
    vestLiquid(value: MsgVestLiquid) {
      return {
        typeUrl: "/elys.commitment.MsgVestLiquid",
        value
      };
    }
  },
  fromPartial: {
    commitTokens(value: MsgCommitTokens) {
      return {
        typeUrl: "/elys.commitment.MsgCommitTokens",
        value: MsgCommitTokens.fromPartial(value)
      };
    },
    uncommitTokens(value: MsgUncommitTokens) {
      return {
        typeUrl: "/elys.commitment.MsgUncommitTokens",
        value: MsgUncommitTokens.fromPartial(value)
      };
    },
    withdrawTokens(value: MsgWithdrawTokens) {
      return {
        typeUrl: "/elys.commitment.MsgWithdrawTokens",
        value: MsgWithdrawTokens.fromPartial(value)
      };
    },
    commitLiquidTokens(value: MsgCommitLiquidTokens) {
      return {
        typeUrl: "/elys.commitment.MsgCommitLiquidTokens",
        value: MsgCommitLiquidTokens.fromPartial(value)
      };
    },
    vest(value: MsgVest) {
      return {
        typeUrl: "/elys.commitment.MsgVest",
        value: MsgVest.fromPartial(value)
      };
    },
    cancelVest(value: MsgCancelVest) {
      return {
        typeUrl: "/elys.commitment.MsgCancelVest",
        value: MsgCancelVest.fromPartial(value)
      };
    },
    vestNow(value: MsgVestNow) {
      return {
        typeUrl: "/elys.commitment.MsgVestNow",
        value: MsgVestNow.fromPartial(value)
      };
    },
    updateVestingInfo(value: MsgUpdateVestingInfo) {
      return {
        typeUrl: "/elys.commitment.MsgUpdateVestingInfo",
        value: MsgUpdateVestingInfo.fromPartial(value)
      };
    },
    vestLiquid(value: MsgVestLiquid) {
      return {
        typeUrl: "/elys.commitment.MsgVestLiquid",
        value: MsgVestLiquid.fromPartial(value)
      };
    }
  }
};