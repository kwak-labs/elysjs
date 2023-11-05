import { MsgOpen, MsgClose, MsgUpdateParams, MsgUpdatePools, MsgWhitelist, MsgDewhitelist } from "./tx";
export const AminoConverter = {
  "/elys.leveragelp.MsgOpen": {
    aminoType: "/elys.leveragelp.MsgOpen",
    toAmino: MsgOpen.toAmino,
    fromAmino: MsgOpen.fromAmino
  },
  "/elys.leveragelp.MsgClose": {
    aminoType: "/elys.leveragelp.MsgClose",
    toAmino: MsgClose.toAmino,
    fromAmino: MsgClose.fromAmino
  },
  "/elys.leveragelp.MsgUpdateParams": {
    aminoType: "/elys.leveragelp.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/elys.leveragelp.MsgUpdatePools": {
    aminoType: "/elys.leveragelp.MsgUpdatePools",
    toAmino: MsgUpdatePools.toAmino,
    fromAmino: MsgUpdatePools.fromAmino
  },
  "/elys.leveragelp.MsgWhitelist": {
    aminoType: "/elys.leveragelp.MsgWhitelist",
    toAmino: MsgWhitelist.toAmino,
    fromAmino: MsgWhitelist.fromAmino
  },
  "/elys.leveragelp.MsgDewhitelist": {
    aminoType: "/elys.leveragelp.MsgDewhitelist",
    toAmino: MsgDewhitelist.toAmino,
    fromAmino: MsgDewhitelist.fromAmino
  }
};