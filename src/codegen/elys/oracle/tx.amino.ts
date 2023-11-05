import { MsgFeedPrice, MsgFeedMultiplePrices, MsgRequestBandPrice, MsgSetPriceFeeder, MsgDeletePriceFeeder } from "./tx";
export const AminoConverter = {
  "/elys.oracle.MsgFeedPrice": {
    aminoType: "/elys.oracle.MsgFeedPrice",
    toAmino: MsgFeedPrice.toAmino,
    fromAmino: MsgFeedPrice.fromAmino
  },
  "/elys.oracle.MsgFeedMultiplePrices": {
    aminoType: "/elys.oracle.MsgFeedMultiplePrices",
    toAmino: MsgFeedMultiplePrices.toAmino,
    fromAmino: MsgFeedMultiplePrices.fromAmino
  },
  "/elys.oracle.MsgRequestBandPrice": {
    aminoType: "/elys.oracle.MsgRequestBandPrice",
    toAmino: MsgRequestBandPrice.toAmino,
    fromAmino: MsgRequestBandPrice.fromAmino
  },
  "/elys.oracle.MsgSetPriceFeeder": {
    aminoType: "/elys.oracle.MsgSetPriceFeeder",
    toAmino: MsgSetPriceFeeder.toAmino,
    fromAmino: MsgSetPriceFeeder.fromAmino
  },
  "/elys.oracle.MsgDeletePriceFeeder": {
    aminoType: "/elys.oracle.MsgDeletePriceFeeder",
    toAmino: MsgDeletePriceFeeder.toAmino,
    fromAmino: MsgDeletePriceFeeder.fromAmino
  }
};