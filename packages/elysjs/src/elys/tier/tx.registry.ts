//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetPortfolio } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.tier.MsgSetPortfolio", MsgSetPortfolio]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setPortfolio(value: MsgSetPortfolio) {
      return {
        typeUrl: "/elys.tier.MsgSetPortfolio",
        value: MsgSetPortfolio.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setPortfolio(value: MsgSetPortfolio) {
      return {
        typeUrl: "/elys.tier.MsgSetPortfolio",
        value
      };
    }
  },
  fromPartial: {
    setPortfolio(value: MsgSetPortfolio) {
      return {
        typeUrl: "/elys.tier.MsgSetPortfolio",
        value: MsgSetPortfolio.fromPartial(value)
      };
    }
  }
};