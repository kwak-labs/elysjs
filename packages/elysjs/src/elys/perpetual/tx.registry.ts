//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgOpen, MsgClose, MsgUpdateParams, MsgWhitelist, MsgDewhitelist, MsgUpdateStopLoss, MsgClosePositions, MsgUpdateTakeProfitPrice, MsgUpdateMaxLeverageForPool, MsgUpdateEnabledPools } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.perpetual.MsgOpen", MsgOpen], ["/elys.perpetual.MsgClose", MsgClose], ["/elys.perpetual.MsgUpdateParams", MsgUpdateParams], ["/elys.perpetual.MsgWhitelist", MsgWhitelist], ["/elys.perpetual.MsgDewhitelist", MsgDewhitelist], ["/elys.perpetual.MsgUpdateStopLoss", MsgUpdateStopLoss], ["/elys.perpetual.MsgClosePositions", MsgClosePositions], ["/elys.perpetual.MsgUpdateTakeProfitPrice", MsgUpdateTakeProfitPrice], ["/elys.perpetual.MsgUpdateMaxLeverageForPool", MsgUpdateMaxLeverageForPool], ["/elys.perpetual.MsgUpdateEnabledPools", MsgUpdateEnabledPools]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    open(value: MsgOpen) {
      return {
        typeUrl: "/elys.perpetual.MsgOpen",
        value: MsgOpen.encode(value).finish()
      };
    },
    close(value: MsgClose) {
      return {
        typeUrl: "/elys.perpetual.MsgClose",
        value: MsgClose.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.perpetual.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    whitelist(value: MsgWhitelist) {
      return {
        typeUrl: "/elys.perpetual.MsgWhitelist",
        value: MsgWhitelist.encode(value).finish()
      };
    },
    dewhitelist(value: MsgDewhitelist) {
      return {
        typeUrl: "/elys.perpetual.MsgDewhitelist",
        value: MsgDewhitelist.encode(value).finish()
      };
    },
    updateStopLoss(value: MsgUpdateStopLoss) {
      return {
        typeUrl: "/elys.perpetual.MsgUpdateStopLoss",
        value: MsgUpdateStopLoss.encode(value).finish()
      };
    },
    closePositions(value: MsgClosePositions) {
      return {
        typeUrl: "/elys.perpetual.MsgClosePositions",
        value: MsgClosePositions.encode(value).finish()
      };
    },
    updateTakeProfitPrice(value: MsgUpdateTakeProfitPrice) {
      return {
        typeUrl: "/elys.perpetual.MsgUpdateTakeProfitPrice",
        value: MsgUpdateTakeProfitPrice.encode(value).finish()
      };
    },
    updateMaxLeverageForPool(value: MsgUpdateMaxLeverageForPool) {
      return {
        typeUrl: "/elys.perpetual.MsgUpdateMaxLeverageForPool",
        value: MsgUpdateMaxLeverageForPool.encode(value).finish()
      };
    },
    updateEnabledPools(value: MsgUpdateEnabledPools) {
      return {
        typeUrl: "/elys.perpetual.MsgUpdateEnabledPools",
        value: MsgUpdateEnabledPools.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    open(value: MsgOpen) {
      return {
        typeUrl: "/elys.perpetual.MsgOpen",
        value
      };
    },
    close(value: MsgClose) {
      return {
        typeUrl: "/elys.perpetual.MsgClose",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.perpetual.MsgUpdateParams",
        value
      };
    },
    whitelist(value: MsgWhitelist) {
      return {
        typeUrl: "/elys.perpetual.MsgWhitelist",
        value
      };
    },
    dewhitelist(value: MsgDewhitelist) {
      return {
        typeUrl: "/elys.perpetual.MsgDewhitelist",
        value
      };
    },
    updateStopLoss(value: MsgUpdateStopLoss) {
      return {
        typeUrl: "/elys.perpetual.MsgUpdateStopLoss",
        value
      };
    },
    closePositions(value: MsgClosePositions) {
      return {
        typeUrl: "/elys.perpetual.MsgClosePositions",
        value
      };
    },
    updateTakeProfitPrice(value: MsgUpdateTakeProfitPrice) {
      return {
        typeUrl: "/elys.perpetual.MsgUpdateTakeProfitPrice",
        value
      };
    },
    updateMaxLeverageForPool(value: MsgUpdateMaxLeverageForPool) {
      return {
        typeUrl: "/elys.perpetual.MsgUpdateMaxLeverageForPool",
        value
      };
    },
    updateEnabledPools(value: MsgUpdateEnabledPools) {
      return {
        typeUrl: "/elys.perpetual.MsgUpdateEnabledPools",
        value
      };
    }
  },
  fromPartial: {
    open(value: MsgOpen) {
      return {
        typeUrl: "/elys.perpetual.MsgOpen",
        value: MsgOpen.fromPartial(value)
      };
    },
    close(value: MsgClose) {
      return {
        typeUrl: "/elys.perpetual.MsgClose",
        value: MsgClose.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.perpetual.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    whitelist(value: MsgWhitelist) {
      return {
        typeUrl: "/elys.perpetual.MsgWhitelist",
        value: MsgWhitelist.fromPartial(value)
      };
    },
    dewhitelist(value: MsgDewhitelist) {
      return {
        typeUrl: "/elys.perpetual.MsgDewhitelist",
        value: MsgDewhitelist.fromPartial(value)
      };
    },
    updateStopLoss(value: MsgUpdateStopLoss) {
      return {
        typeUrl: "/elys.perpetual.MsgUpdateStopLoss",
        value: MsgUpdateStopLoss.fromPartial(value)
      };
    },
    closePositions(value: MsgClosePositions) {
      return {
        typeUrl: "/elys.perpetual.MsgClosePositions",
        value: MsgClosePositions.fromPartial(value)
      };
    },
    updateTakeProfitPrice(value: MsgUpdateTakeProfitPrice) {
      return {
        typeUrl: "/elys.perpetual.MsgUpdateTakeProfitPrice",
        value: MsgUpdateTakeProfitPrice.fromPartial(value)
      };
    },
    updateMaxLeverageForPool(value: MsgUpdateMaxLeverageForPool) {
      return {
        typeUrl: "/elys.perpetual.MsgUpdateMaxLeverageForPool",
        value: MsgUpdateMaxLeverageForPool.fromPartial(value)
      };
    },
    updateEnabledPools(value: MsgUpdateEnabledPools) {
      return {
        typeUrl: "/elys.perpetual.MsgUpdateEnabledPools",
        value: MsgUpdateEnabledPools.fromPartial(value)
      };
    }
  }
};