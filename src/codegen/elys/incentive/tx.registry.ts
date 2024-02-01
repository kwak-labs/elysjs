import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgWithdrawRewards, MsgWithdrawValidatorCommission, MsgUpdateIncentiveParams, MsgUpdatePoolMultipliers } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.incentive.MsgWithdrawRewards", MsgWithdrawRewards], ["/elys.incentive.MsgWithdrawValidatorCommission", MsgWithdrawValidatorCommission], ["/elys.incentive.MsgUpdateIncentiveParams", MsgUpdateIncentiveParams], ["/elys.incentive.MsgUpdatePoolMultipliers", MsgUpdatePoolMultipliers]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    withdrawRewards(value: MsgWithdrawRewards) {
      return {
        typeUrl: "/elys.incentive.MsgWithdrawRewards",
        value: MsgWithdrawRewards.encode(value).finish()
      };
    },
    withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
      return {
        typeUrl: "/elys.incentive.MsgWithdrawValidatorCommission",
        value: MsgWithdrawValidatorCommission.encode(value).finish()
      };
    },
    updateIncentiveParams(value: MsgUpdateIncentiveParams) {
      return {
        typeUrl: "/elys.incentive.MsgUpdateIncentiveParams",
        value: MsgUpdateIncentiveParams.encode(value).finish()
      };
    },
    updatePoolMultipliers(value: MsgUpdatePoolMultipliers) {
      return {
        typeUrl: "/elys.incentive.MsgUpdatePoolMultipliers",
        value: MsgUpdatePoolMultipliers.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    withdrawRewards(value: MsgWithdrawRewards) {
      return {
        typeUrl: "/elys.incentive.MsgWithdrawRewards",
        value
      };
    },
    withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
      return {
        typeUrl: "/elys.incentive.MsgWithdrawValidatorCommission",
        value
      };
    },
    updateIncentiveParams(value: MsgUpdateIncentiveParams) {
      return {
        typeUrl: "/elys.incentive.MsgUpdateIncentiveParams",
        value
      };
    },
    updatePoolMultipliers(value: MsgUpdatePoolMultipliers) {
      return {
        typeUrl: "/elys.incentive.MsgUpdatePoolMultipliers",
        value
      };
    }
  },
  fromPartial: {
    withdrawRewards(value: MsgWithdrawRewards) {
      return {
        typeUrl: "/elys.incentive.MsgWithdrawRewards",
        value: MsgWithdrawRewards.fromPartial(value)
      };
    },
    withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
      return {
        typeUrl: "/elys.incentive.MsgWithdrawValidatorCommission",
        value: MsgWithdrawValidatorCommission.fromPartial(value)
      };
    },
    updateIncentiveParams(value: MsgUpdateIncentiveParams) {
      return {
        typeUrl: "/elys.incentive.MsgUpdateIncentiveParams",
        value: MsgUpdateIncentiveParams.fromPartial(value)
      };
    },
    updatePoolMultipliers(value: MsgUpdatePoolMultipliers) {
      return {
        typeUrl: "/elys.incentive.MsgUpdatePoolMultipliers",
        value: MsgUpdatePoolMultipliers.fromPartial(value)
      };
    }
  }
};