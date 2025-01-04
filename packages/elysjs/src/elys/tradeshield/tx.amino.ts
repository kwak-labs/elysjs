//@ts-nocheck
import { MsgCreateSpotOrder, MsgUpdateSpotOrder, MsgCancelSpotOrder, MsgCancelSpotOrders, MsgCreatePerpetualOpenOrder, MsgCreatePerpetualCloseOrder, MsgUpdatePerpetualOrder, MsgCancelPerpetualOrder, MsgCancelPerpetualOrders, MsgUpdateParams, MsgExecuteOrders } from "./tx";
export const AminoConverter = {
  "/elys.tradeshield.MsgCreateSpotOrder": {
    aminoType: "tradeshield/MsgCreateSpotOrder",
    toAmino: MsgCreateSpotOrder.toAmino,
    fromAmino: MsgCreateSpotOrder.fromAmino
  },
  "/elys.tradeshield.MsgUpdateSpotOrder": {
    aminoType: "tradeshield/MsgUpdateSpotOrder",
    toAmino: MsgUpdateSpotOrder.toAmino,
    fromAmino: MsgUpdateSpotOrder.fromAmino
  },
  "/elys.tradeshield.MsgCancelSpotOrder": {
    aminoType: "tradeshield/MsgCancelSpotOrder",
    toAmino: MsgCancelSpotOrder.toAmino,
    fromAmino: MsgCancelSpotOrder.fromAmino
  },
  "/elys.tradeshield.MsgCancelSpotOrders": {
    aminoType: "tradeshield/MsgCancelSpotOrders",
    toAmino: MsgCancelSpotOrders.toAmino,
    fromAmino: MsgCancelSpotOrders.fromAmino
  },
  "/elys.tradeshield.MsgCreatePerpetualOpenOrder": {
    aminoType: "tradeshield/MsgCreatePerpetualOpenOrder",
    toAmino: MsgCreatePerpetualOpenOrder.toAmino,
    fromAmino: MsgCreatePerpetualOpenOrder.fromAmino
  },
  "/elys.tradeshield.MsgCreatePerpetualCloseOrder": {
    aminoType: "tradeshield/CreatePerpetualCloseOrder",
    toAmino: MsgCreatePerpetualCloseOrder.toAmino,
    fromAmino: MsgCreatePerpetualCloseOrder.fromAmino
  },
  "/elys.tradeshield.MsgUpdatePerpetualOrder": {
    aminoType: "tradeshield/MsgUpdatePerpetualOrder",
    toAmino: MsgUpdatePerpetualOrder.toAmino,
    fromAmino: MsgUpdatePerpetualOrder.fromAmino
  },
  "/elys.tradeshield.MsgCancelPerpetualOrder": {
    aminoType: "tradeshield/MsgCancelPerpetualOrder",
    toAmino: MsgCancelPerpetualOrder.toAmino,
    fromAmino: MsgCancelPerpetualOrder.fromAmino
  },
  "/elys.tradeshield.MsgCancelPerpetualOrders": {
    aminoType: "tradeshield/MsgCancelPerpetualOrders",
    toAmino: MsgCancelPerpetualOrders.toAmino,
    fromAmino: MsgCancelPerpetualOrders.fromAmino
  },
  "/elys.tradeshield.MsgUpdateParams": {
    aminoType: "tradeshield/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/elys.tradeshield.MsgExecuteOrders": {
    aminoType: "tradeshield/MsgExecuteOrders",
    toAmino: MsgExecuteOrders.toAmino,
    fromAmino: MsgExecuteOrders.fromAmino
  }
};