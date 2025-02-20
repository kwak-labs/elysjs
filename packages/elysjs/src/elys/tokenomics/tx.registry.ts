//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateAirdrop, MsgUpdateAirdrop, MsgDeleteAirdrop, MsgClaimAirdrop, MsgUpdateGenesisInflation, MsgCreateTimeBasedInflation, MsgUpdateTimeBasedInflation, MsgDeleteTimeBasedInflation } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.tokenomics.MsgCreateAirdrop", MsgCreateAirdrop], ["/elys.tokenomics.MsgUpdateAirdrop", MsgUpdateAirdrop], ["/elys.tokenomics.MsgDeleteAirdrop", MsgDeleteAirdrop], ["/elys.tokenomics.MsgClaimAirdrop", MsgClaimAirdrop], ["/elys.tokenomics.MsgUpdateGenesisInflation", MsgUpdateGenesisInflation], ["/elys.tokenomics.MsgCreateTimeBasedInflation", MsgCreateTimeBasedInflation], ["/elys.tokenomics.MsgUpdateTimeBasedInflation", MsgUpdateTimeBasedInflation], ["/elys.tokenomics.MsgDeleteTimeBasedInflation", MsgDeleteTimeBasedInflation]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createAirdrop(value: MsgCreateAirdrop) {
      return {
        typeUrl: "/elys.tokenomics.MsgCreateAirdrop",
        value: MsgCreateAirdrop.encode(value).finish()
      };
    },
    updateAirdrop(value: MsgUpdateAirdrop) {
      return {
        typeUrl: "/elys.tokenomics.MsgUpdateAirdrop",
        value: MsgUpdateAirdrop.encode(value).finish()
      };
    },
    deleteAirdrop(value: MsgDeleteAirdrop) {
      return {
        typeUrl: "/elys.tokenomics.MsgDeleteAirdrop",
        value: MsgDeleteAirdrop.encode(value).finish()
      };
    },
    claimAirdrop(value: MsgClaimAirdrop) {
      return {
        typeUrl: "/elys.tokenomics.MsgClaimAirdrop",
        value: MsgClaimAirdrop.encode(value).finish()
      };
    },
    updateGenesisInflation(value: MsgUpdateGenesisInflation) {
      return {
        typeUrl: "/elys.tokenomics.MsgUpdateGenesisInflation",
        value: MsgUpdateGenesisInflation.encode(value).finish()
      };
    },
    createTimeBasedInflation(value: MsgCreateTimeBasedInflation) {
      return {
        typeUrl: "/elys.tokenomics.MsgCreateTimeBasedInflation",
        value: MsgCreateTimeBasedInflation.encode(value).finish()
      };
    },
    updateTimeBasedInflation(value: MsgUpdateTimeBasedInflation) {
      return {
        typeUrl: "/elys.tokenomics.MsgUpdateTimeBasedInflation",
        value: MsgUpdateTimeBasedInflation.encode(value).finish()
      };
    },
    deleteTimeBasedInflation(value: MsgDeleteTimeBasedInflation) {
      return {
        typeUrl: "/elys.tokenomics.MsgDeleteTimeBasedInflation",
        value: MsgDeleteTimeBasedInflation.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createAirdrop(value: MsgCreateAirdrop) {
      return {
        typeUrl: "/elys.tokenomics.MsgCreateAirdrop",
        value
      };
    },
    updateAirdrop(value: MsgUpdateAirdrop) {
      return {
        typeUrl: "/elys.tokenomics.MsgUpdateAirdrop",
        value
      };
    },
    deleteAirdrop(value: MsgDeleteAirdrop) {
      return {
        typeUrl: "/elys.tokenomics.MsgDeleteAirdrop",
        value
      };
    },
    claimAirdrop(value: MsgClaimAirdrop) {
      return {
        typeUrl: "/elys.tokenomics.MsgClaimAirdrop",
        value
      };
    },
    updateGenesisInflation(value: MsgUpdateGenesisInflation) {
      return {
        typeUrl: "/elys.tokenomics.MsgUpdateGenesisInflation",
        value
      };
    },
    createTimeBasedInflation(value: MsgCreateTimeBasedInflation) {
      return {
        typeUrl: "/elys.tokenomics.MsgCreateTimeBasedInflation",
        value
      };
    },
    updateTimeBasedInflation(value: MsgUpdateTimeBasedInflation) {
      return {
        typeUrl: "/elys.tokenomics.MsgUpdateTimeBasedInflation",
        value
      };
    },
    deleteTimeBasedInflation(value: MsgDeleteTimeBasedInflation) {
      return {
        typeUrl: "/elys.tokenomics.MsgDeleteTimeBasedInflation",
        value
      };
    }
  },
  fromPartial: {
    createAirdrop(value: MsgCreateAirdrop) {
      return {
        typeUrl: "/elys.tokenomics.MsgCreateAirdrop",
        value: MsgCreateAirdrop.fromPartial(value)
      };
    },
    updateAirdrop(value: MsgUpdateAirdrop) {
      return {
        typeUrl: "/elys.tokenomics.MsgUpdateAirdrop",
        value: MsgUpdateAirdrop.fromPartial(value)
      };
    },
    deleteAirdrop(value: MsgDeleteAirdrop) {
      return {
        typeUrl: "/elys.tokenomics.MsgDeleteAirdrop",
        value: MsgDeleteAirdrop.fromPartial(value)
      };
    },
    claimAirdrop(value: MsgClaimAirdrop) {
      return {
        typeUrl: "/elys.tokenomics.MsgClaimAirdrop",
        value: MsgClaimAirdrop.fromPartial(value)
      };
    },
    updateGenesisInflation(value: MsgUpdateGenesisInflation) {
      return {
        typeUrl: "/elys.tokenomics.MsgUpdateGenesisInflation",
        value: MsgUpdateGenesisInflation.fromPartial(value)
      };
    },
    createTimeBasedInflation(value: MsgCreateTimeBasedInflation) {
      return {
        typeUrl: "/elys.tokenomics.MsgCreateTimeBasedInflation",
        value: MsgCreateTimeBasedInflation.fromPartial(value)
      };
    },
    updateTimeBasedInflation(value: MsgUpdateTimeBasedInflation) {
      return {
        typeUrl: "/elys.tokenomics.MsgUpdateTimeBasedInflation",
        value: MsgUpdateTimeBasedInflation.fromPartial(value)
      };
    },
    deleteTimeBasedInflation(value: MsgDeleteTimeBasedInflation) {
      return {
        typeUrl: "/elys.tokenomics.MsgDeleteTimeBasedInflation",
        value: MsgDeleteTimeBasedInflation.fromPartial(value)
      };
    }
  }
};