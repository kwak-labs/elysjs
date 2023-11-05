import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgOpen, MsgClose, MsgUpdateParams, MsgUpdatePools, MsgWhitelist, MsgDewhitelist } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.leveragelp.MsgOpen", MsgOpen], ["/elys.leveragelp.MsgClose", MsgClose], ["/elys.leveragelp.MsgUpdateParams", MsgUpdateParams], ["/elys.leveragelp.MsgUpdatePools", MsgUpdatePools], ["/elys.leveragelp.MsgWhitelist", MsgWhitelist], ["/elys.leveragelp.MsgDewhitelist", MsgDewhitelist]];
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
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updatePools(value: MsgUpdatePools) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdatePools",
        value: MsgUpdatePools.encode(value).finish()
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
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateParams",
        value
      };
    },
    updatePools(value: MsgUpdatePools) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdatePools",
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
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updatePools(value: MsgUpdatePools) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdatePools",
        value: MsgUpdatePools.fromPartial(value)
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
    }
  }
};