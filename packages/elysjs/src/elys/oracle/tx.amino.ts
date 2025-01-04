//@ts-nocheck
import { MsgFeedPrice, MsgFeedMultiplePrices, MsgSetPriceFeeder, MsgDeletePriceFeeder, MsgRemoveAssetInfo, MsgAddPriceFeeders, MsgRemovePriceFeeders, MsgUpdateParams, MsgCreateAssetInfo } from "./tx";
export const AminoConverter = {
  "/elys.oracle.MsgFeedPrice": {
    aminoType: "oracle/MsgFeedPrice",
    toAmino: MsgFeedPrice.toAmino,
    fromAmino: MsgFeedPrice.fromAmino
  },
  "/elys.oracle.MsgFeedMultiplePrices": {
    aminoType: "oracle/MsgFeedMultiplePrices",
    toAmino: MsgFeedMultiplePrices.toAmino,
    fromAmino: MsgFeedMultiplePrices.fromAmino
  },
  "/elys.oracle.MsgSetPriceFeeder": {
    aminoType: "oracle/MsgSetPriceFeeder",
    toAmino: MsgSetPriceFeeder.toAmino,
    fromAmino: MsgSetPriceFeeder.fromAmino
  },
  "/elys.oracle.MsgDeletePriceFeeder": {
    aminoType: "oracle/MsgDeletePriceFeeder",
    toAmino: MsgDeletePriceFeeder.toAmino,
    fromAmino: MsgDeletePriceFeeder.fromAmino
  },
  "/elys.oracle.MsgRemoveAssetInfo": {
    aminoType: "oracle/MsgRemoveAssetInfo",
    toAmino: MsgRemoveAssetInfo.toAmino,
    fromAmino: MsgRemoveAssetInfo.fromAmino
  },
  "/elys.oracle.MsgAddPriceFeeders": {
    aminoType: "oracle/MsgAddPriceFeeders",
    toAmino: MsgAddPriceFeeders.toAmino,
    fromAmino: MsgAddPriceFeeders.fromAmino
  },
  "/elys.oracle.MsgRemovePriceFeeders": {
    aminoType: "oracle/MsgRemovePriceFeeders",
    toAmino: MsgRemovePriceFeeders.toAmino,
    fromAmino: MsgRemovePriceFeeders.fromAmino
  },
  "/elys.oracle.MsgUpdateParams": {
    aminoType: "oracle/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/elys.oracle.MsgCreateAssetInfo": {
    aminoType: "oracle/MsgCreateAssetInfo",
    toAmino: MsgCreateAssetInfo.toAmino,
    fromAmino: MsgCreateAssetInfo.fromAmino
  }
};