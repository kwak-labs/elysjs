//@ts-nocheck
import { MsgBond, MsgUnbond, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/elys.stablestake.MsgBond": {
    aminoType: "stablestake/MsgBond",
    toAmino: MsgBond.toAmino,
    fromAmino: MsgBond.fromAmino
  },
  "/elys.stablestake.MsgUnbond": {
    aminoType: "stablestake/MsgUnbond",
    toAmino: MsgUnbond.toAmino,
    fromAmino: MsgUnbond.fromAmino
  },
  "/elys.stablestake.MsgUpdateParams": {
    aminoType: "stablestake/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};