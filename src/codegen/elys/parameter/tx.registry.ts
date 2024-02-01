import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateMinCommission, MsgUpdateMaxVotingPower, MsgUpdateMinSelfDelegation, MsgUpdateBrokerAddress } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.parameter.MsgUpdateMinCommission", MsgUpdateMinCommission], ["/elys.parameter.MsgUpdateMaxVotingPower", MsgUpdateMaxVotingPower], ["/elys.parameter.MsgUpdateMinSelfDelegation", MsgUpdateMinSelfDelegation], ["/elys.parameter.MsgUpdateBrokerAddress", MsgUpdateBrokerAddress]];
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
    updateBrokerAddress(value: MsgUpdateBrokerAddress) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateBrokerAddress",
        value: MsgUpdateBrokerAddress.encode(value).finish()
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
    updateBrokerAddress(value: MsgUpdateBrokerAddress) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateBrokerAddress",
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
    updateBrokerAddress(value: MsgUpdateBrokerAddress) {
      return {
        typeUrl: "/elys.parameter.MsgUpdateBrokerAddress",
        value: MsgUpdateBrokerAddress.fromPartial(value)
      };
    }
  }
};