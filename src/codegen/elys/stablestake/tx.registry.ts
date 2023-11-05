import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBond, MsgUnbond } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.stablestake.MsgBond", MsgBond], ["/elys.stablestake.MsgUnbond", MsgUnbond]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    bond(value: MsgBond) {
      return {
        typeUrl: "/elys.stablestake.MsgBond",
        value: MsgBond.encode(value).finish()
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/elys.stablestake.MsgUnbond",
        value: MsgUnbond.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    bond(value: MsgBond) {
      return {
        typeUrl: "/elys.stablestake.MsgBond",
        value
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/elys.stablestake.MsgUnbond",
        value
      };
    }
  },
  fromPartial: {
    bond(value: MsgBond) {
      return {
        typeUrl: "/elys.stablestake.MsgBond",
        value: MsgBond.fromPartial(value)
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/elys.stablestake.MsgUnbond",
        value: MsgUnbond.fromPartial(value)
      };
    }
  }
};