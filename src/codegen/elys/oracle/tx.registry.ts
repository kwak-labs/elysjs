import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgFeedPrice, MsgFeedMultiplePrices, MsgSetPriceFeeder, MsgDeletePriceFeeder } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.oracle.MsgFeedPrice", MsgFeedPrice], ["/elys.oracle.MsgFeedMultiplePrices", MsgFeedMultiplePrices], ["/elys.oracle.MsgSetPriceFeeder", MsgSetPriceFeeder], ["/elys.oracle.MsgDeletePriceFeeder", MsgDeletePriceFeeder]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    feedPrice(value: MsgFeedPrice) {
      return {
        typeUrl: "/elys.oracle.MsgFeedPrice",
        value: MsgFeedPrice.encode(value).finish()
      };
    },
    feedMultiplePrices(value: MsgFeedMultiplePrices) {
      return {
        typeUrl: "/elys.oracle.MsgFeedMultiplePrices",
        value: MsgFeedMultiplePrices.encode(value).finish()
      };
    },
    setPriceFeeder(value: MsgSetPriceFeeder) {
      return {
        typeUrl: "/elys.oracle.MsgSetPriceFeeder",
        value: MsgSetPriceFeeder.encode(value).finish()
      };
    },
    deletePriceFeeder(value: MsgDeletePriceFeeder) {
      return {
        typeUrl: "/elys.oracle.MsgDeletePriceFeeder",
        value: MsgDeletePriceFeeder.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    feedPrice(value: MsgFeedPrice) {
      return {
        typeUrl: "/elys.oracle.MsgFeedPrice",
        value
      };
    },
    feedMultiplePrices(value: MsgFeedMultiplePrices) {
      return {
        typeUrl: "/elys.oracle.MsgFeedMultiplePrices",
        value
      };
    },
    setPriceFeeder(value: MsgSetPriceFeeder) {
      return {
        typeUrl: "/elys.oracle.MsgSetPriceFeeder",
        value
      };
    },
    deletePriceFeeder(value: MsgDeletePriceFeeder) {
      return {
        typeUrl: "/elys.oracle.MsgDeletePriceFeeder",
        value
      };
    }
  },
  fromPartial: {
    feedPrice(value: MsgFeedPrice) {
      return {
        typeUrl: "/elys.oracle.MsgFeedPrice",
        value: MsgFeedPrice.fromPartial(value)
      };
    },
    feedMultiplePrices(value: MsgFeedMultiplePrices) {
      return {
        typeUrl: "/elys.oracle.MsgFeedMultiplePrices",
        value: MsgFeedMultiplePrices.fromPartial(value)
      };
    },
    setPriceFeeder(value: MsgSetPriceFeeder) {
      return {
        typeUrl: "/elys.oracle.MsgSetPriceFeeder",
        value: MsgSetPriceFeeder.fromPartial(value)
      };
    },
    deletePriceFeeder(value: MsgDeletePriceFeeder) {
      return {
        typeUrl: "/elys.oracle.MsgDeletePriceFeeder",
        value: MsgDeletePriceFeeder.fromPartial(value)
      };
    }
  }
};