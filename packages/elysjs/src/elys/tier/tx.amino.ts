//@ts-nocheck
import { MsgSetPortfolio } from "./tx";
export const AminoConverter = {
  "/elys.tier.MsgSetPortfolio": {
    aminoType: "tier/MsgSetPortfolio",
    toAmino: MsgSetPortfolio.toAmino,
    fromAmino: MsgSetPortfolio.fromAmino
  }
};