import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgCreatePool, MsgCreatePoolResponse, MsgJoinPool, MsgJoinPoolResponse, MsgExitPool, MsgExitPoolResponse, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgFeedMultipleExternalLiquidity, MsgFeedMultipleExternalLiquidityResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  joinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
  exitPool(request: MsgExitPool): Promise<MsgExitPoolResponse>;
  swapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
  swapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
  feedMultipleExternalLiquidity(request: MsgFeedMultipleExternalLiquidity): Promise<MsgFeedMultipleExternalLiquidityResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createPool = this.createPool.bind(this);
    this.joinPool = this.joinPool.bind(this);
    this.exitPool = this.exitPool.bind(this);
    this.swapExactAmountIn = this.swapExactAmountIn.bind(this);
    this.swapExactAmountOut = this.swapExactAmountOut.bind(this);
    this.feedMultipleExternalLiquidity = this.feedMultipleExternalLiquidity.bind(this);
  }
  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Msg", "CreatePool", data);
    return promise.then(data => MsgCreatePoolResponse.decode(new BinaryReader(data)));
  }
  joinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse> {
    const data = MsgJoinPool.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Msg", "JoinPool", data);
    return promise.then(data => MsgJoinPoolResponse.decode(new BinaryReader(data)));
  }
  exitPool(request: MsgExitPool): Promise<MsgExitPoolResponse> {
    const data = MsgExitPool.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Msg", "ExitPool", data);
    return promise.then(data => MsgExitPoolResponse.decode(new BinaryReader(data)));
  }
  swapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse> {
    const data = MsgSwapExactAmountIn.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Msg", "SwapExactAmountIn", data);
    return promise.then(data => MsgSwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
  swapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse> {
    const data = MsgSwapExactAmountOut.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Msg", "SwapExactAmountOut", data);
    return promise.then(data => MsgSwapExactAmountOutResponse.decode(new BinaryReader(data)));
  }
  feedMultipleExternalLiquidity(request: MsgFeedMultipleExternalLiquidity): Promise<MsgFeedMultipleExternalLiquidityResponse> {
    const data = MsgFeedMultipleExternalLiquidity.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Msg", "FeedMultipleExternalLiquidity", data);
    return promise.then(data => MsgFeedMultipleExternalLiquidityResponse.decode(new BinaryReader(data)));
  }
}