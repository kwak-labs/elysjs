import { MsgBid } from "./tx";
export const AminoConverter = {
  "/injective.auction.v1beta1.MsgBid": {
    aminoType: "/injective.auction.v1beta1.MsgBid",
    toAmino: MsgBid.toAmino,
    fromAmino: MsgBid.fromAmino
  }
};