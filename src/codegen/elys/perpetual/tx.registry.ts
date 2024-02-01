import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgOpen, MsgClose, MsgUpdateParams, MsgWhitelist, MsgDewhitelist } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.perpetual.MsgOpen", MsgOpen], ["/elys.perpetual.MsgClose", MsgClose], ["/elys.perpetual.MsgUpdateParams", MsgUpdateParams], ["/elys.perpetual.MsgWhitelist", MsgWhitelist], ["/elys.perpetual.MsgDewhitelist", MsgDewhitelist]];
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
    }
  }
};