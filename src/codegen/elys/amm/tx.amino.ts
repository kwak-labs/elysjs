import { MsgCreatePool, MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgSwapByDenom, MsgFeedMultipleExternalLiquidity, MsgUpdatePoolParams } from "./tx";
export const AminoConverter = {
  "/elys.amm.MsgCreatePool": {
    aminoType: "/elys.amm.MsgCreatePool",
    toAmino: MsgCreatePool.toAmino,
    fromAmino: MsgCreatePool.fromAmino
  },
  "/elys.amm.MsgJoinPool": {
    aminoType: "/elys.amm.MsgJoinPool",
    toAmino: MsgJoinPool.toAmino,
    fromAmino: MsgJoinPool.fromAmino
  },
  "/elys.amm.MsgExitPool": {
    aminoType: "/elys.amm.MsgExitPool",
    toAmino: MsgExitPool.toAmino,
    fromAmino: MsgExitPool.fromAmino
  },
  "/elys.amm.MsgSwapExactAmountIn": {
    aminoType: "/elys.amm.MsgSwapExactAmountIn",
    toAmino: MsgSwapExactAmountIn.toAmino,
    fromAmino: MsgSwapExactAmountIn.fromAmino
  },
  "/elys.amm.MsgSwapExactAmountOut": {
    aminoType: "/elys.amm.MsgSwapExactAmountOut",
    toAmino: MsgSwapExactAmountOut.toAmino,
    fromAmino: MsgSwapExactAmountOut.fromAmino
  },
  "/elys.amm.MsgSwapByDenom": {
    aminoType: "/elys.amm.MsgSwapByDenom",
    toAmino: MsgSwapByDenom.toAmino,
    fromAmino: MsgSwapByDenom.fromAmino
  },
  "/elys.amm.MsgFeedMultipleExternalLiquidity": {
    aminoType: "/elys.amm.MsgFeedMultipleExternalLiquidity",
    toAmino: MsgFeedMultipleExternalLiquidity.toAmino,
    fromAmino: MsgFeedMultipleExternalLiquidity.fromAmino
  },
  "/elys.amm.MsgUpdatePoolParams": {
    aminoType: "/elys.amm.MsgUpdatePoolParams",
    toAmino: MsgUpdatePoolParams.toAmino,
    fromAmino: MsgUpdatePoolParams.fromAmino
  }
};