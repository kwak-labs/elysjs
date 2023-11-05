import { MsgCreateEntry, MsgUpdateEntry, MsgDeleteEntry } from "./tx";
export const AminoConverter = {
  "/elys.assetprofile.MsgCreateEntry": {
    aminoType: "/elys.assetprofile.MsgCreateEntry",
    toAmino: MsgCreateEntry.toAmino,
    fromAmino: MsgCreateEntry.fromAmino
  },
  "/elys.assetprofile.MsgUpdateEntry": {
    aminoType: "/elys.assetprofile.MsgUpdateEntry",
    toAmino: MsgUpdateEntry.toAmino,
    fromAmino: MsgUpdateEntry.fromAmino
  },
  "/elys.assetprofile.MsgDeleteEntry": {
    aminoType: "/elys.assetprofile.MsgDeleteEntry",
    toAmino: MsgDeleteEntry.toAmino,
    fromAmino: MsgDeleteEntry.fromAmino
  }
};