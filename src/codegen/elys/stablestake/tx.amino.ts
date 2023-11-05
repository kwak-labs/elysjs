import { MsgBond, MsgUnbond } from "./tx";
export const AminoConverter = {
  "/elys.stablestake.MsgBond": {
    aminoType: "/elys.stablestake.MsgBond",
    toAmino: MsgBond.toAmino,
    fromAmino: MsgBond.fromAmino
  },
  "/elys.stablestake.MsgUnbond": {
    aminoType: "/elys.stablestake.MsgUnbond",
    toAmino: MsgUnbond.toAmino,
    fromAmino: MsgUnbond.fromAmino
  }
};