//@ts-nocheck
import { MsgOpen, MsgClose, MsgUpdateParams, MsgWhitelist, MsgDewhitelist, MsgUpdateStopLoss, MsgClosePositions, MsgUpdateTakeProfitPrice, MsgUpdateMaxLeverageForPool, MsgUpdateEnabledPools } from "./tx";
export const AminoConverter = {
  "/elys.perpetual.MsgOpen": {
    aminoType: "perpetual/MsgOpen",
    toAmino: MsgOpen.toAmino,
    fromAmino: MsgOpen.fromAmino
  },
  "/elys.perpetual.MsgClose": {
    aminoType: "perpetual/MsgClose",
    toAmino: MsgClose.toAmino,
    fromAmino: MsgClose.fromAmino
  },
  "/elys.perpetual.MsgUpdateParams": {
    aminoType: "perpetual/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/elys.perpetual.MsgWhitelist": {
    aminoType: "perpetual/MsgWhitelist",
    toAmino: MsgWhitelist.toAmino,
    fromAmino: MsgWhitelist.fromAmino
  },
  "/elys.perpetual.MsgDewhitelist": {
    aminoType: "perpetual/MsgDewhitelist",
    toAmino: MsgDewhitelist.toAmino,
    fromAmino: MsgDewhitelist.fromAmino
  },
  "/elys.perpetual.MsgUpdateStopLoss": {
    aminoType: "perpetual/MsgUpdateStopLoss",
    toAmino: MsgUpdateStopLoss.toAmino,
    fromAmino: MsgUpdateStopLoss.fromAmino
  },
  "/elys.perpetual.MsgClosePositions": {
    aminoType: "perpetual/MsgClosePositions",
    toAmino: MsgClosePositions.toAmino,
    fromAmino: MsgClosePositions.fromAmino
  },
  "/elys.perpetual.MsgUpdateTakeProfitPrice": {
    aminoType: "perpetual/MsgUpdateTakeProfitPrice",
    toAmino: MsgUpdateTakeProfitPrice.toAmino,
    fromAmino: MsgUpdateTakeProfitPrice.fromAmino
  },
  "/elys.perpetual.MsgUpdateMaxLeverageForPool": {
    aminoType: "perpetual/MsgUpdateMaxLeverageForPool",
    toAmino: MsgUpdateMaxLeverageForPool.toAmino,
    fromAmino: MsgUpdateMaxLeverageForPool.fromAmino
  },
  "/elys.perpetual.MsgUpdateEnabledPools": {
    aminoType: "perpetual/MsgUpdateEnabledPools",
    toAmino: MsgUpdateEnabledPools.toAmino,
    fromAmino: MsgUpdateEnabledPools.fromAmino
  }
};