//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgOpen, MsgClose, MsgClaimRewards, MsgUpdateParams, MsgAddPool, MsgRemovePool, MsgWhitelist, MsgDewhitelist, MsgUpdateStopLoss, MsgClosePositions } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.leveragelp.MsgOpen", MsgOpen], ["/elys.leveragelp.MsgClose", MsgClose], ["/elys.leveragelp.MsgClaimRewards", MsgClaimRewards], ["/elys.leveragelp.MsgUpdateParams", MsgUpdateParams], ["/elys.leveragelp.MsgAddPool", MsgAddPool], ["/elys.leveragelp.MsgRemovePool", MsgRemovePool], ["/elys.leveragelp.MsgWhitelist", MsgWhitelist], ["/elys.leveragelp.MsgDewhitelist", MsgDewhitelist], ["/elys.leveragelp.MsgUpdateStopLoss", MsgUpdateStopLoss], ["/elys.leveragelp.MsgClosePositions", MsgClosePositions]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    open(value: MsgOpen) {
      return {
        typeUrl: "/elys.leveragelp.MsgOpen",
        value: MsgOpen.encode(value).finish()
      };
    },
    close(value: MsgClose) {
      return {
        typeUrl: "/elys.leveragelp.MsgClose",
        value: MsgClose.encode(value).finish()
      };
    },
    claimRewards(value: MsgClaimRewards) {
      return {
        typeUrl: "/elys.leveragelp.MsgClaimRewards",
        value: MsgClaimRewards.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    addPool(value: MsgAddPool) {
      return {
        typeUrl: "/elys.leveragelp.MsgAddPool",
        value: MsgAddPool.encode(value).finish()
      };
    },
    removePool(value: MsgRemovePool) {
      return {
        typeUrl: "/elys.leveragelp.MsgRemovePool",
        value: MsgRemovePool.encode(value).finish()
      };
    },
    whitelist(value: MsgWhitelist) {
      return {
        typeUrl: "/elys.leveragelp.MsgWhitelist",
        value: MsgWhitelist.encode(value).finish()
      };
    },
    dewhitelist(value: MsgDewhitelist) {
      return {
        typeUrl: "/elys.leveragelp.MsgDewhitelist",
        value: MsgDewhitelist.encode(value).finish()
      };
    },
    updateStopLoss(value: MsgUpdateStopLoss) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateStopLoss",
        value: MsgUpdateStopLoss.encode(value).finish()
      };
    },
    closePositions(value: MsgClosePositions) {
      return {
        typeUrl: "/elys.leveragelp.MsgClosePositions",
        value: MsgClosePositions.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    open(value: MsgOpen) {
      return {
        typeUrl: "/elys.leveragelp.MsgOpen",
        value
      };
    },
    close(value: MsgClose) {
      return {
        typeUrl: "/elys.leveragelp.MsgClose",
        value
      };
    },
    claimRewards(value: MsgClaimRewards) {
      return {
        typeUrl: "/elys.leveragelp.MsgClaimRewards",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateParams",
        value
      };
    },
    addPool(value: MsgAddPool) {
      return {
        typeUrl: "/elys.leveragelp.MsgAddPool",
        value
      };
    },
    removePool(value: MsgRemovePool) {
      return {
        typeUrl: "/elys.leveragelp.MsgRemovePool",
        value
      };
    },
    whitelist(value: MsgWhitelist) {
      return {
        typeUrl: "/elys.leveragelp.MsgWhitelist",
        value
      };
    },
    dewhitelist(value: MsgDewhitelist) {
      return {
        typeUrl: "/elys.leveragelp.MsgDewhitelist",
        value
      };
    },
    updateStopLoss(value: MsgUpdateStopLoss) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateStopLoss",
        value
      };
    },
    closePositions(value: MsgClosePositions) {
      return {
        typeUrl: "/elys.leveragelp.MsgClosePositions",
        value
      };
    }
  },
  fromPartial: {
    open(value: MsgOpen) {
      return {
        typeUrl: "/elys.leveragelp.MsgOpen",
        value: MsgOpen.fromPartial(value)
      };
    },
    close(value: MsgClose) {
      return {
        typeUrl: "/elys.leveragelp.MsgClose",
        value: MsgClose.fromPartial(value)
      };
    },
    claimRewards(value: MsgClaimRewards) {
      return {
        typeUrl: "/elys.leveragelp.MsgClaimRewards",
        value: MsgClaimRewards.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    addPool(value: MsgAddPool) {
      return {
        typeUrl: "/elys.leveragelp.MsgAddPool",
        value: MsgAddPool.fromPartial(value)
      };
    },
    removePool(value: MsgRemovePool) {
      return {
        typeUrl: "/elys.leveragelp.MsgRemovePool",
        value: MsgRemovePool.fromPartial(value)
      };
    },
    whitelist(value: MsgWhitelist) {
      return {
        typeUrl: "/elys.leveragelp.MsgWhitelist",
        value: MsgWhitelist.fromPartial(value)
      };
    },
    dewhitelist(value: MsgDewhitelist) {
      return {
        typeUrl: "/elys.leveragelp.MsgDewhitelist",
        value: MsgDewhitelist.fromPartial(value)
      };
    },
    updateStopLoss(value: MsgUpdateStopLoss) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateStopLoss",
        value: MsgUpdateStopLoss.fromPartial(value)
      };
    },
    closePositions(value: MsgClosePositions) {
      return {
        typeUrl: "/elys.leveragelp.MsgClosePositions",
        value: MsgClosePositions.fromPartial(value)
      };
    }
  }
};