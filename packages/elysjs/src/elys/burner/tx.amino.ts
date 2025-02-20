//@ts-nocheck
import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/elys.burner.MsgUpdateParams": {
    aminoType: "burner/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};