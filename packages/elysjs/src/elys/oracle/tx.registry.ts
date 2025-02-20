//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgFeedPrice, MsgFeedMultiplePrices, MsgSetPriceFeeder, MsgDeletePriceFeeder, MsgRemoveAssetInfo, MsgAddPriceFeeders, MsgRemovePriceFeeders, MsgUpdateParams, MsgCreateAssetInfo } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.oracle.MsgFeedPrice", MsgFeedPrice], ["/elys.oracle.MsgFeedMultiplePrices", MsgFeedMultiplePrices], ["/elys.oracle.MsgSetPriceFeeder", MsgSetPriceFeeder], ["/elys.oracle.MsgDeletePriceFeeder", MsgDeletePriceFeeder], ["/elys.oracle.MsgRemoveAssetInfo", MsgRemoveAssetInfo], ["/elys.oracle.MsgAddPriceFeeders", MsgAddPriceFeeders], ["/elys.oracle.MsgRemovePriceFeeders", MsgRemovePriceFeeders], ["/elys.oracle.MsgUpdateParams", MsgUpdateParams], ["/elys.oracle.MsgCreateAssetInfo", MsgCreateAssetInfo]];
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
    },
    removeAssetInfo(value: MsgRemoveAssetInfo) {
      return {
        typeUrl: "/elys.oracle.MsgRemoveAssetInfo",
        value: MsgRemoveAssetInfo.encode(value).finish()
      };
    },
    addPriceFeeders(value: MsgAddPriceFeeders) {
      return {
        typeUrl: "/elys.oracle.MsgAddPriceFeeders",
        value: MsgAddPriceFeeders.encode(value).finish()
      };
    },
    removePriceFeeders(value: MsgRemovePriceFeeders) {
      return {
        typeUrl: "/elys.oracle.MsgRemovePriceFeeders",
        value: MsgRemovePriceFeeders.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.oracle.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createAssetInfo(value: MsgCreateAssetInfo) {
      return {
        typeUrl: "/elys.oracle.MsgCreateAssetInfo",
        value: MsgCreateAssetInfo.encode(value).finish()
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
    },
    removeAssetInfo(value: MsgRemoveAssetInfo) {
      return {
        typeUrl: "/elys.oracle.MsgRemoveAssetInfo",
        value
      };
    },
    addPriceFeeders(value: MsgAddPriceFeeders) {
      return {
        typeUrl: "/elys.oracle.MsgAddPriceFeeders",
        value
      };
    },
    removePriceFeeders(value: MsgRemovePriceFeeders) {
      return {
        typeUrl: "/elys.oracle.MsgRemovePriceFeeders",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.oracle.MsgUpdateParams",
        value
      };
    },
    createAssetInfo(value: MsgCreateAssetInfo) {
      return {
        typeUrl: "/elys.oracle.MsgCreateAssetInfo",
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
    },
    removeAssetInfo(value: MsgRemoveAssetInfo) {
      return {
        typeUrl: "/elys.oracle.MsgRemoveAssetInfo",
        value: MsgRemoveAssetInfo.fromPartial(value)
      };
    },
    addPriceFeeders(value: MsgAddPriceFeeders) {
      return {
        typeUrl: "/elys.oracle.MsgAddPriceFeeders",
        value: MsgAddPriceFeeders.fromPartial(value)
      };
    },
    removePriceFeeders(value: MsgRemovePriceFeeders) {
      return {
        typeUrl: "/elys.oracle.MsgRemovePriceFeeders",
        value: MsgRemovePriceFeeders.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.oracle.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createAssetInfo(value: MsgCreateAssetInfo) {
      return {
        typeUrl: "/elys.oracle.MsgCreateAssetInfo",
        value: MsgCreateAssetInfo.fromPartial(value)
      };
    }
  }
};