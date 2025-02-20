//@ts-nocheck
import { MsgOpen, MsgClose, MsgClaimRewards, MsgUpdateParams, MsgAddPool, MsgRemovePool, MsgWhitelist, MsgDewhitelist, MsgUpdateStopLoss, MsgClosePositions, MsgUpdatePool, MsgUpdateEnabledPools } from "./tx";
export const AminoConverter = {
  "/elys.leveragelp.MsgOpen": {
    aminoType: "leveragelp/MsgOpen",
    toAmino: MsgOpen.toAmino,
    fromAmino: MsgOpen.fromAmino
  },
  "/elys.leveragelp.MsgClose": {
    aminoType: "leveragelp/MsgClose",
    toAmino: MsgClose.toAmino,
    fromAmino: MsgClose.fromAmino
  },
  "/elys.leveragelp.MsgClaimRewards": {
    aminoType: "leveragelp/MsgClaimRewards",
    toAmino: MsgClaimRewards.toAmino,
    fromAmino: MsgClaimRewards.fromAmino
  },
  "/elys.leveragelp.MsgUpdateParams": {
    aminoType: "leveragelp/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/elys.leveragelp.MsgAddPool": {
    aminoType: "leveragelp/MsgAddPool",
    toAmino: MsgAddPool.toAmino,
    fromAmino: MsgAddPool.fromAmino
  },
  "/elys.leveragelp.MsgRemovePool": {
    aminoType: "leveragelp/MsgRemovePool",
    toAmino: MsgRemovePool.toAmino,
    fromAmino: MsgRemovePool.fromAmino
  },
  "/elys.leveragelp.MsgWhitelist": {
    aminoType: "leveragelp/MsgWhitelist",
    toAmino: MsgWhitelist.toAmino,
    fromAmino: MsgWhitelist.fromAmino
  },
  "/elys.leveragelp.MsgDewhitelist": {
    aminoType: "leveragelp/MsgDewhitelist",
    toAmino: MsgDewhitelist.toAmino,
    fromAmino: MsgDewhitelist.fromAmino
  },
  "/elys.leveragelp.MsgUpdateStopLoss": {
    aminoType: "leveragelp/MsgUpdateStopLoss",
    toAmino: MsgUpdateStopLoss.toAmino,
    fromAmino: MsgUpdateStopLoss.fromAmino
  },
  "/elys.leveragelp.MsgClosePositions": {
    aminoType: "leveragelp/MsgClosePositions",
    toAmino: MsgClosePositions.toAmino,
    fromAmino: MsgClosePositions.fromAmino
  },
  "/elys.leveragelp.MsgUpdatePool": {
    aminoType: "leveragelp/MsgUpdatePool",
    toAmino: MsgUpdatePool.toAmino,
    fromAmino: MsgUpdatePool.fromAmino
  },
  "/elys.leveragelp.MsgUpdateEnabledPools": {
    aminoType: "leveragelp/MsgUpdateEnabledPools",
    toAmino: MsgUpdateEnabledPools.toAmino,
    fromAmino: MsgUpdateEnabledPools.fromAmino
  }
};