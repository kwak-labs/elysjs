//@ts-nocheck
import { MsgUpdateEntry, MsgDeleteEntry, MsgAddEntry } from "./tx";
export const AminoConverter = {
  "/elys.assetprofile.MsgUpdateEntry": {
    aminoType: "assetprofile/MsgUpdateEntry",
    toAmino: MsgUpdateEntry.toAmino,
    fromAmino: MsgUpdateEntry.fromAmino
  },
  "/elys.assetprofile.MsgDeleteEntry": {
    aminoType: "assetprofile/MsgDeleteEntry",
    toAmino: MsgDeleteEntry.toAmino,
    fromAmino: MsgDeleteEntry.fromAmino
  },
  "/elys.assetprofile.MsgAddEntry": {
    aminoType: "assetprofile/MsgAddEntry",
    toAmino: MsgAddEntry.toAmino,
    fromAmino: MsgAddEntry.fromAmino
  }
};