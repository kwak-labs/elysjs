import { MsgOpen, MsgClose, MsgUpdateParams, MsgWhitelist, MsgDewhitelist } from "./tx";
export const AminoConverter = {
  "/elys.perpetual.MsgOpen": {
    aminoType: "/elys.perpetual.MsgOpen",
    toAmino: MsgOpen.toAmino,
    fromAmino: MsgOpen.fromAmino
  },
  "/elys.perpetual.MsgClose": {
    aminoType: "/elys.perpetual.MsgClose",
    toAmino: MsgClose.toAmino,
    fromAmino: MsgClose.fromAmino
  },
  "/elys.perpetual.MsgUpdateParams": {
    aminoType: "/elys.perpetual.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/elys.perpetual.MsgWhitelist": {
    aminoType: "/elys.perpetual.MsgWhitelist",
    toAmino: MsgWhitelist.toAmino,
    fromAmino: MsgWhitelist.fromAmino
  },
  "/elys.perpetual.MsgDewhitelist": {
    aminoType: "/elys.perpetual.MsgDewhitelist",
    toAmino: MsgDewhitelist.toAmino,
    fromAmino: MsgDewhitelist.fromAmino
  }
};