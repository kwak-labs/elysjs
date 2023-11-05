import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePool, MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgFeedMultipleExternalLiquidity } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.amm.MsgCreatePool", MsgCreatePool], ["/elys.amm.MsgJoinPool", MsgJoinPool], ["/elys.amm.MsgExitPool", MsgExitPool], ["/elys.amm.MsgSwapExactAmountIn", MsgSwapExactAmountIn], ["/elys.amm.MsgSwapExactAmountOut", MsgSwapExactAmountOut], ["/elys.amm.MsgFeedMultipleExternalLiquidity", MsgFeedMultipleExternalLiquidity]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/elys.amm.MsgCreatePool",
        value: MsgCreatePool.encode(value).finish()
      };
    },
    joinPool(value: MsgJoinPool) {
      return {
        typeUrl: "/elys.amm.MsgJoinPool",
        value: MsgJoinPool.encode(value).finish()
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/elys.amm.MsgExitPool",
        value: MsgExitPool.encode(value).finish()
      };
    },
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/elys.amm.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.encode(value).finish()
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/elys.amm.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.encode(value).finish()
      };
    },
    feedMultipleExternalLiquidity(value: MsgFeedMultipleExternalLiquidity) {
      return {
        typeUrl: "/elys.amm.MsgFeedMultipleExternalLiquidity",
        value: MsgFeedMultipleExternalLiquidity.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/elys.amm.MsgCreatePool",
        value
      };
    },
    joinPool(value: MsgJoinPool) {
      return {
        typeUrl: "/elys.amm.MsgJoinPool",
        value
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/elys.amm.MsgExitPool",
        value
      };
    },
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/elys.amm.MsgSwapExactAmountIn",
        value
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/elys.amm.MsgSwapExactAmountOut",
        value
      };
    },
    feedMultipleExternalLiquidity(value: MsgFeedMultipleExternalLiquidity) {
      return {
        typeUrl: "/elys.amm.MsgFeedMultipleExternalLiquidity",
        value
      };
    }
  },
  fromPartial: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/elys.amm.MsgCreatePool",
        value: MsgCreatePool.fromPartial(value)
      };
    },
    joinPool(value: MsgJoinPool) {
      return {
        typeUrl: "/elys.amm.MsgJoinPool",
        value: MsgJoinPool.fromPartial(value)
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/elys.amm.MsgExitPool",
        value: MsgExitPool.fromPartial(value)
      };
    },
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/elys.amm.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.fromPartial(value)
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/elys.amm.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.fromPartial(value)
      };
    },
    feedMultipleExternalLiquidity(value: MsgFeedMultipleExternalLiquidity) {
      return {
        typeUrl: "/elys.amm.MsgFeedMultipleExternalLiquidity",
        value: MsgFeedMultipleExternalLiquidity.fromPartial(value)
      };
    }
  }
};