import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgWithdrawRewards, MsgWithdrawValidatorCommission } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.incentive.MsgWithdrawRewards", MsgWithdrawRewards], ["/elys.incentive.MsgWithdrawValidatorCommission", MsgWithdrawValidatorCommission]];
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
    }
  }
};