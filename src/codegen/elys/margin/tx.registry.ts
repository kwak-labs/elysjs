import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgOpen, MsgClose, MsgUpdateParams, MsgUpdatePools, MsgWhitelist, MsgDewhitelist } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.margin.MsgOpen", MsgOpen], ["/elys.margin.MsgClose", MsgClose], ["/elys.margin.MsgUpdateParams", MsgUpdateParams], ["/elys.margin.MsgUpdatePools", MsgUpdatePools], ["/elys.margin.MsgWhitelist", MsgWhitelist], ["/elys.margin.MsgDewhitelist", MsgDewhitelist]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    open(value: MsgOpen) {
      return {
        typeUrl: "/elys.margin.MsgOpen",
        value: MsgOpen.encode(value).finish()
      };
    },
    close(value: MsgClose) {
      return {
        typeUrl: "/elys.margin.MsgClose",
        value: MsgClose.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.margin.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updatePools(value: MsgUpdatePools) {
      return {
        typeUrl: "/elys.margin.MsgUpdatePools",
        value: MsgUpdatePools.encode(value).finish()
      };
    },
    whitelist(value: MsgWhitelist) {
      return {
        typeUrl: "/elys.margin.MsgWhitelist",
        value: MsgWhitelist.encode(value).finish()
      };
    },
    dewhitelist(value: MsgDewhitelist) {
      return {
        typeUrl: "/elys.margin.MsgDewhitelist",
        value: MsgDewhitelist.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    open(value: MsgOpen) {
      return {
        typeUrl: "/elys.margin.MsgOpen",
        value
      };
    },
    close(value: MsgClose) {
      return {
        typeUrl: "/elys.margin.MsgClose",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.margin.MsgUpdateParams",
        value
      };
    },
    updatePools(value: MsgUpdatePools) {
      return {
        typeUrl: "/elys.margin.MsgUpdatePools",
        value
      };
    },
    whitelist(value: MsgWhitelist) {
      return {
        typeUrl: "/elys.margin.MsgWhitelist",
        value
      };
    },
    dewhitelist(value: MsgDewhitelist) {
      return {
        typeUrl: "/elys.margin.MsgDewhitelist",
        value
      };
    }
  },
  fromPartial: {
    open(value: MsgOpen) {
      return {
        typeUrl: "/elys.margin.MsgOpen",
        value: MsgOpen.fromPartial(value)
      };
    },
    close(value: MsgClose) {
      return {
        typeUrl: "/elys.margin.MsgClose",
        value: MsgClose.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.margin.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updatePools(value: MsgUpdatePools) {
      return {
        typeUrl: "/elys.margin.MsgUpdatePools",
        value: MsgUpdatePools.fromPartial(value)
      };
    },
    whitelist(value: MsgWhitelist) {
      return {
        typeUrl: "/elys.margin.MsgWhitelist",
        value: MsgWhitelist.fromPartial(value)
      };
    },
    dewhitelist(value: MsgDewhitelist) {
      return {
        typeUrl: "/elys.margin.MsgDewhitelist",
        value: MsgDewhitelist.fromPartial(value)
      };
    }
  }
};