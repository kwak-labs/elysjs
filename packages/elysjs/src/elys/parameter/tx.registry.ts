//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateMinCommission, MsgUpdateMaxVotingPower, MsgUpdateMinSelfDelegation, MsgUpdateTotalBlocksPerYear, MsgUpdateRewardsDataLifetime } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.parameter.MsgUpdateMinCommission", MsgUpdateMinCommission], ["/elys.parameter.MsgUpdateMaxVotingPower", MsgUpdateMaxVotingPower], ["/elys.parameter.MsgUpdateMinSelfDelegation", MsgUpdateMinSelfDelegation], ["/elys.parameter.MsgUpdateTotalBlocksPerYear", MsgUpdateTotalBlocksPerYear], ["/elys.parameter.MsgUpdateRewardsDataLifetime", MsgUpdateRewardsDataLifetime]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateMinCommission(value: MsgUpdateMinCommission) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateMinCommission",
        value: MsgUpdateMinCommission.encode(value).finish()
      };
    },
    updateMaxVotingPower(value: MsgUpdateMaxVotingPower) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateMaxVotingPower",
        value: MsgUpdateMaxVotingPower.encode(value).finish()
      };
    },
    updateMinSelfDelegation(value: MsgUpdateMinSelfDelegation) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateMinSelfDelegation",
        value: MsgUpdateMinSelfDelegation.encode(value).finish()
      };
    },
    updateTotalBlocksPerYear(value: MsgUpdateTotalBlocksPerYear) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateTotalBlocksPerYear",
        value: MsgUpdateTotalBlocksPerYear.encode(value).finish()
      };
    },
    updateRewardsDataLifetime(value: MsgUpdateRewardsDataLifetime) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateRewardsDataLifetime",
        value: MsgUpdateRewardsDataLifetime.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateMinCommission(value: MsgUpdateMinCommission) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateMinCommission",
        value
      };
    },
    updateMaxVotingPower(value: MsgUpdateMaxVotingPower) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateMaxVotingPower",
        value
      };
    },
    updateMinSelfDelegation(value: MsgUpdateMinSelfDelegation) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateMinSelfDelegation",
        value
      };
    },
    updateTotalBlocksPerYear(value: MsgUpdateTotalBlocksPerYear) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateTotalBlocksPerYear",
        value
      };
    },
    updateRewardsDataLifetime(value: MsgUpdateRewardsDataLifetime) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateRewardsDataLifetime",
        value
      };
    }
  },
  fromPartial: {
    updateMinCommission(value: MsgUpdateMinCommission) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateMinCommission",
        value: MsgUpdateMinCommission.fromPartial(value)
      };
    },
    updateMaxVotingPower(value: MsgUpdateMaxVotingPower) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateMaxVotingPower",
        value: MsgUpdateMaxVotingPower.fromPartial(value)
      };
    },
    updateMinSelfDelegation(value: MsgUpdateMinSelfDelegation) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateMinSelfDelegation",
        value: MsgUpdateMinSelfDelegation.fromPartial(value)
      };
    },
    updateTotalBlocksPerYear(value: MsgUpdateTotalBlocksPerYear) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateTotalBlocksPerYear",
        value: MsgUpdateTotalBlocksPerYear.fromPartial(value)
      };
    },
    updateRewardsDataLifetime(value: MsgUpdateRewardsDataLifetime) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateRewardsDataLifetime",
        value: MsgUpdateRewardsDataLifetime.fromPartial(value)
      };
    }
  }
};