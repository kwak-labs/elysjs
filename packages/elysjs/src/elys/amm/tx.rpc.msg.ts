//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgCreatePool, MsgCreatePoolResponse, MsgJoinPool, MsgJoinPoolResponse, MsgExitPool, MsgExitPoolResponse, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgSwapByDenom, MsgSwapByDenomResponse, MsgFeedMultipleExternalLiquidity, MsgFeedMultipleExternalLiquidityResponse, MsgUpdatePoolParams, MsgUpdatePoolParamsResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  joinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
  exitPool(request: MsgExitPool): Promise<MsgExitPoolResponse>;
  swapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
  swapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
  swapByDenom(request: MsgSwapByDenom): Promise<MsgSwapByDenomResponse>;
  feedMultipleExternalLiquidity(request: MsgFeedMultipleExternalLiquidity): Promise<MsgFeedMultipleExternalLiquidityResponse>;
  updatePoolParams(request: MsgUpdatePoolParams): Promise<MsgUpdatePoolParamsResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
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
    this.swapByDenom = this.swapByDenom.bind(this);
    this.feedMultipleExternalLiquidity = this.feedMultipleExternalLiquidity.bind(this);
    this.updatePoolParams = this.updatePoolParams.bind(this);
    this.updateParams = this.updateParams.bind(this);
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
  swapByDenom(request: MsgSwapByDenom): Promise<MsgSwapByDenomResponse> {
    const data = MsgSwapByDenom.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Msg", "SwapByDenom", data);
    return promise.then(data => MsgSwapByDenomResponse.decode(new BinaryReader(data)));
  }
  feedMultipleExternalLiquidity(request: MsgFeedMultipleExternalLiquidity): Promise<MsgFeedMultipleExternalLiquidityResponse> {
    const data = MsgFeedMultipleExternalLiquidity.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Msg", "FeedMultipleExternalLiquidity", data);
    return promise.then(data => MsgFeedMultipleExternalLiquidityResponse.decode(new BinaryReader(data)));
  }
  updatePoolParams(request: MsgUpdatePoolParams): Promise<MsgUpdatePoolParamsResponse> {
    const data = MsgUpdatePoolParams.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Msg", "UpdatePoolParams", data);
    return promise.then(data => MsgUpdatePoolParamsResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("elys.amm.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}