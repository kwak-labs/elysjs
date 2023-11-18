import { MsgOpen, MsgClose, MsgBrokerOpen, MsgBrokerClose, MsgUpdateParams, MsgUpdatePools, MsgWhitelist, MsgDewhitelist } from "./tx";
export const AminoConverter = {
  "/elys.margin.MsgOpen": {
    aminoType: "/elys.margin.MsgOpen",
    toAmino: MsgOpen.toAmino,
    fromAmino: MsgOpen.fromAmino
  },
  "/elys.margin.MsgClose": {
    aminoType: "/elys.margin.MsgClose",
    toAmino: MsgClose.toAmino,
    fromAmino: MsgClose.fromAmino
  },
  "/elys.margin.MsgBrokerOpen": {
    aminoType: "/elys.margin.MsgBrokerOpen",
    toAmino: MsgBrokerOpen.toAmino,
    fromAmino: MsgBrokerOpen.fromAmino
  },
  "/elys.margin.MsgBrokerClose": {
    aminoType: "/elys.margin.MsgBrokerClose",
    toAmino: MsgBrokerClose.toAmino,
    fromAmino: MsgBrokerClose.fromAmino
  },
  "/elys.margin.MsgUpdateParams": {
    aminoType: "/elys.margin.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/elys.margin.MsgUpdatePools": {
    aminoType: "/elys.margin.MsgUpdatePools",
    toAmino: MsgUpdatePools.toAmino,
    fromAmino: MsgUpdatePools.fromAmino
  },
  "/elys.margin.MsgWhitelist": {
    aminoType: "/elys.margin.MsgWhitelist",
    toAmino: MsgWhitelist.toAmino,
    fromAmino: MsgWhitelist.fromAmino
  },
  "/elys.margin.MsgDewhitelist": {
    aminoType: "/elys.margin.MsgDewhitelist",
    toAmino: MsgDewhitelist.toAmino,
    fromAmino: MsgDewhitelist.fromAmino
  }
};