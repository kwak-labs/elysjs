//@ts-nocheck
import { PoolParams, PoolParamsAmino, PoolParamsSDKType } from "./pool_params";
import { PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "./pool_asset";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./swap_route";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface MsgCreatePool {
  sender: string;
  poolParams: PoolParams;
  poolAssets: PoolAsset[];
}
export interface MsgCreatePoolProtoMsg {
  typeUrl: "/elys.amm.MsgCreatePool";
  value: Uint8Array;
}
export interface MsgCreatePoolAmino {
  sender?: string;
  pool_params?: PoolParamsAmino;
  pool_assets?: PoolAssetAmino[];
}
export interface MsgCreatePoolAminoMsg {
  type: "amm/MsgCreatePool";
  value: MsgCreatePoolAmino;
}
export interface MsgCreatePoolSDKType {
  sender: string;
  pool_params: PoolParamsSDKType;
  pool_assets: PoolAssetSDKType[];
}
export interface MsgCreatePoolResponse {
  poolId: bigint;
}
export interface MsgCreatePoolResponseProtoMsg {
  typeUrl: "/elys.amm.MsgCreatePoolResponse";
  value: Uint8Array;
}
export interface MsgCreatePoolResponseAmino {
  pool_id?: string;
}
export interface MsgCreatePoolResponseAminoMsg {
  type: "/elys.amm.MsgCreatePoolResponse";
  value: MsgCreatePoolResponseAmino;
}
export interface MsgCreatePoolResponseSDKType {
  pool_id: bigint;
}
export interface MsgJoinPool {
  sender: string;
  poolId: bigint;
  maxAmountsIn: Coin[];
  shareAmountOut: string;
}
export interface MsgJoinPoolProtoMsg {
  typeUrl: "/elys.amm.MsgJoinPool";
  value: Uint8Array;
}
export interface MsgJoinPoolAmino {
  sender?: string;
  pool_id?: string;
  max_amounts_in?: CoinAmino[];
  share_amount_out?: string;
}
export interface MsgJoinPoolAminoMsg {
  type: "amm/MsgJoinPool";
  value: MsgJoinPoolAmino;
}
export interface MsgJoinPoolSDKType {
  sender: string;
  pool_id: bigint;
  max_amounts_in: CoinSDKType[];
  share_amount_out: string;
}
export interface MsgJoinPoolResponse {
  shareAmountOut: string;
  tokenIn: Coin[];
}
export interface MsgJoinPoolResponseProtoMsg {
  typeUrl: "/elys.amm.MsgJoinPoolResponse";
  value: Uint8Array;
}
export interface MsgJoinPoolResponseAmino {
  share_amount_out?: string;
  token_in?: CoinAmino[];
}
export interface MsgJoinPoolResponseAminoMsg {
  type: "/elys.amm.MsgJoinPoolResponse";
  value: MsgJoinPoolResponseAmino;
}
export interface MsgJoinPoolResponseSDKType {
  share_amount_out: string;
  token_in: CoinSDKType[];
}
export interface MsgExitPool {
  sender: string;
  poolId: bigint;
  minAmountsOut: Coin[];
  shareAmountIn: string;
  tokenOutDenom: string;
}
export interface MsgExitPoolProtoMsg {
  typeUrl: "/elys.amm.MsgExitPool";
  value: Uint8Array;
}
export interface MsgExitPoolAmino {
  sender?: string;
  pool_id?: string;
  min_amounts_out?: CoinAmino[];
  share_amount_in?: string;
  token_out_denom?: string;
}
export interface MsgExitPoolAminoMsg {
  type: "amm/MsgExitPool";
  value: MsgExitPoolAmino;
}
export interface MsgExitPoolSDKType {
  sender: string;
  pool_id: bigint;
  min_amounts_out: CoinSDKType[];
  share_amount_in: string;
  token_out_denom: string;
}
export interface MsgExitPoolResponse {
  tokenOut: Coin[];
}
export interface MsgExitPoolResponseProtoMsg {
  typeUrl: "/elys.amm.MsgExitPoolResponse";
  value: Uint8Array;
}
export interface MsgExitPoolResponseAmino {
  token_out?: CoinAmino[];
}
export interface MsgExitPoolResponseAminoMsg {
  type: "/elys.amm.MsgExitPoolResponse";
  value: MsgExitPoolResponseAmino;
}
export interface MsgExitPoolResponseSDKType {
  token_out: CoinSDKType[];
}
export interface MsgSwapExactAmountIn {
  sender: string;
  routes: SwapAmountInRoute[];
  tokenIn: Coin;
  tokenOutMinAmount: string;
  recipient: string;
}
export interface MsgSwapExactAmountInProtoMsg {
  typeUrl: "/elys.amm.MsgSwapExactAmountIn";
  value: Uint8Array;
}
export interface MsgSwapExactAmountInAmino {
  sender?: string;
  routes?: SwapAmountInRouteAmino[];
  token_in?: CoinAmino;
  token_out_min_amount?: string;
  recipient?: string;
}
export interface MsgSwapExactAmountInAminoMsg {
  type: "amm/MsgSwapExactAmountIn";
  value: MsgSwapExactAmountInAmino;
}
export interface MsgSwapExactAmountInSDKType {
  sender: string;
  routes: SwapAmountInRouteSDKType[];
  token_in: CoinSDKType;
  token_out_min_amount: string;
  recipient: string;
}
export interface MsgSwapExactAmountInResponse {
  tokenOutAmount: string;
  swapFee: string;
  discount: string;
  recipient: string;
}
export interface MsgSwapExactAmountInResponseProtoMsg {
  typeUrl: "/elys.amm.MsgSwapExactAmountInResponse";
  value: Uint8Array;
}
export interface MsgSwapExactAmountInResponseAmino {
  token_out_amount?: string;
  swap_fee?: string;
  discount?: string;
  recipient?: string;
}
export interface MsgSwapExactAmountInResponseAminoMsg {
  type: "/elys.amm.MsgSwapExactAmountInResponse";
  value: MsgSwapExactAmountInResponseAmino;
}
export interface MsgSwapExactAmountInResponseSDKType {
  token_out_amount: string;
  swap_fee: string;
  discount: string;
  recipient: string;
}
export interface MsgSwapExactAmountOut {
  sender: string;
  routes: SwapAmountOutRoute[];
  tokenOut: Coin;
  tokenInMaxAmount: string;
  recipient: string;
}
export interface MsgSwapExactAmountOutProtoMsg {
  typeUrl: "/elys.amm.MsgSwapExactAmountOut";
  value: Uint8Array;
}
export interface MsgSwapExactAmountOutAmino {
  sender?: string;
  routes?: SwapAmountOutRouteAmino[];
  token_out?: CoinAmino;
  token_in_max_amount?: string;
  recipient?: string;
}
export interface MsgSwapExactAmountOutAminoMsg {
  type: "amm/MsgSwapExactAmountOut";
  value: MsgSwapExactAmountOutAmino;
}
export interface MsgSwapExactAmountOutSDKType {
  sender: string;
  routes: SwapAmountOutRouteSDKType[];
  token_out: CoinSDKType;
  token_in_max_amount: string;
  recipient: string;
}
export interface MsgSwapExactAmountOutResponse {
  tokenInAmount: string;
  swapFee: string;
  discount: string;
  recipient: string;
}
export interface MsgSwapExactAmountOutResponseProtoMsg {
  typeUrl: "/elys.amm.MsgSwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface MsgSwapExactAmountOutResponseAmino {
  token_in_amount?: string;
  swap_fee?: string;
  discount?: string;
  recipient?: string;
}
export interface MsgSwapExactAmountOutResponseAminoMsg {
  type: "/elys.amm.MsgSwapExactAmountOutResponse";
  value: MsgSwapExactAmountOutResponseAmino;
}
export interface MsgSwapExactAmountOutResponseSDKType {
  token_in_amount: string;
  swap_fee: string;
  discount: string;
  recipient: string;
}
export interface MsgFeedMultipleExternalLiquidity {
  sender: string;
  liquidity: ExternalLiquidity[];
}
export interface MsgFeedMultipleExternalLiquidityProtoMsg {
  typeUrl: "/elys.amm.MsgFeedMultipleExternalLiquidity";
  value: Uint8Array;
}
export interface MsgFeedMultipleExternalLiquidityAmino {
  sender?: string;
  liquidity?: ExternalLiquidityAmino[];
}
export interface MsgFeedMultipleExternalLiquidityAminoMsg {
  type: "amm/MsgFeedMultipleExternalLiquidity";
  value: MsgFeedMultipleExternalLiquidityAmino;
}
export interface MsgFeedMultipleExternalLiquiditySDKType {
  sender: string;
  liquidity: ExternalLiquiditySDKType[];
}
export interface MsgFeedMultipleExternalLiquidityResponse {}
export interface MsgFeedMultipleExternalLiquidityResponseProtoMsg {
  typeUrl: "/elys.amm.MsgFeedMultipleExternalLiquidityResponse";
  value: Uint8Array;
}
export interface MsgFeedMultipleExternalLiquidityResponseAmino {}
export interface MsgFeedMultipleExternalLiquidityResponseAminoMsg {
  type: "/elys.amm.MsgFeedMultipleExternalLiquidityResponse";
  value: MsgFeedMultipleExternalLiquidityResponseAmino;
}
export interface MsgFeedMultipleExternalLiquidityResponseSDKType {}
export interface AssetAmountDepth {
  asset: string;
  amount: string;
  depth: string;
}
export interface AssetAmountDepthProtoMsg {
  typeUrl: "/elys.amm.AssetAmountDepth";
  value: Uint8Array;
}
export interface AssetAmountDepthAmino {
  asset?: string;
  amount?: string;
  depth?: string;
}
export interface AssetAmountDepthAminoMsg {
  type: "/elys.amm.AssetAmountDepth";
  value: AssetAmountDepthAmino;
}
export interface AssetAmountDepthSDKType {
  asset: string;
  amount: string;
  depth: string;
}
/**
 * ExternalLiquidity defines price, volume, and time information for an exchange
 * rate.
 */
export interface ExternalLiquidity {
  poolId: bigint;
  amountDepthInfo: AssetAmountDepth[];
}
export interface ExternalLiquidityProtoMsg {
  typeUrl: "/elys.amm.ExternalLiquidity";
  value: Uint8Array;
}
/**
 * ExternalLiquidity defines price, volume, and time information for an exchange
 * rate.
 */
export interface ExternalLiquidityAmino {
  pool_id?: string;
  amount_depth_info?: AssetAmountDepthAmino[];
}
export interface ExternalLiquidityAminoMsg {
  type: "/elys.amm.ExternalLiquidity";
  value: ExternalLiquidityAmino;
}
/**
 * ExternalLiquidity defines price, volume, and time information for an exchange
 * rate.
 */
export interface ExternalLiquiditySDKType {
  pool_id: bigint;
  amount_depth_info: AssetAmountDepthSDKType[];
}
export interface MsgSwapByDenom {
  sender: string;
  amount: Coin;
  minAmount: Coin;
  maxAmount: Coin;
  denomIn: string;
  denomOut: string;
  recipient: string;
}
export interface MsgSwapByDenomProtoMsg {
  typeUrl: "/elys.amm.MsgSwapByDenom";
  value: Uint8Array;
}
export interface MsgSwapByDenomAmino {
  sender?: string;
  amount?: CoinAmino;
  min_amount?: CoinAmino;
  max_amount?: CoinAmino;
  denom_in?: string;
  denom_out?: string;
  recipient?: string;
}
export interface MsgSwapByDenomAminoMsg {
  type: "amm/MsgSwapByDenom";
  value: MsgSwapByDenomAmino;
}
export interface MsgSwapByDenomSDKType {
  sender: string;
  amount: CoinSDKType;
  min_amount: CoinSDKType;
  max_amount: CoinSDKType;
  denom_in: string;
  denom_out: string;
  recipient: string;
}
export interface MsgSwapByDenomResponse {
  amount: Coin;
  inRoute: SwapAmountInRoute[];
  outRoute: SwapAmountOutRoute[];
  spotPrice: string;
  swapFee: string;
  discount: string;
  recipient: string;
}
export interface MsgSwapByDenomResponseProtoMsg {
  typeUrl: "/elys.amm.MsgSwapByDenomResponse";
  value: Uint8Array;
}
export interface MsgSwapByDenomResponseAmino {
  amount?: CoinAmino;
  in_route?: SwapAmountInRouteAmino[];
  out_route?: SwapAmountOutRouteAmino[];
  spot_price?: string;
  swap_fee?: string;
  discount?: string;
  recipient?: string;
}
export interface MsgSwapByDenomResponseAminoMsg {
  type: "/elys.amm.MsgSwapByDenomResponse";
  value: MsgSwapByDenomResponseAmino;
}
export interface MsgSwapByDenomResponseSDKType {
  amount: CoinSDKType;
  in_route: SwapAmountInRouteSDKType[];
  out_route: SwapAmountOutRouteSDKType[];
  spot_price: string;
  swap_fee: string;
  discount: string;
  recipient: string;
}
export interface MsgUpdatePoolParams {
  authority: string;
  poolId: bigint;
  poolParams: PoolParams;
}
export interface MsgUpdatePoolParamsProtoMsg {
  typeUrl: "/elys.amm.MsgUpdatePoolParams";
  value: Uint8Array;
}
export interface MsgUpdatePoolParamsAmino {
  authority?: string;
  pool_id?: string;
  pool_params?: PoolParamsAmino;
}
export interface MsgUpdatePoolParamsAminoMsg {
  type: "amm/MsgUpdatePoolParams";
  value: MsgUpdatePoolParamsAmino;
}
export interface MsgUpdatePoolParamsSDKType {
  authority: string;
  pool_id: bigint;
  pool_params: PoolParamsSDKType;
}
export interface MsgUpdatePoolParamsResponse {
  poolId: bigint;
  poolParams?: PoolParams;
}
export interface MsgUpdatePoolParamsResponseProtoMsg {
  typeUrl: "/elys.amm.MsgUpdatePoolParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdatePoolParamsResponseAmino {
  pool_id?: string;
  pool_params?: PoolParamsAmino;
}
export interface MsgUpdatePoolParamsResponseAminoMsg {
  type: "/elys.amm.MsgUpdatePoolParamsResponse";
  value: MsgUpdatePoolParamsResponseAmino;
}
export interface MsgUpdatePoolParamsResponseSDKType {
  pool_id: bigint;
  pool_params?: PoolParamsSDKType;
}
export interface MsgUpdateParams {
  authority: string;
  params?: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/elys.amm.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  authority?: string;
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "amm/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/elys.amm.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/elys.amm.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    sender: "",
    poolParams: PoolParams.fromPartial({}),
    poolAssets: []
  };
}
export const MsgCreatePool = {
  typeUrl: "/elys.amm.MsgCreatePool",
  encode(message: MsgCreatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.sender = object.sender ?? "";
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.poolAssets = object.poolAssets?.map(e => PoolAsset.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreatePoolAmino): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.pool_params !== undefined && object.pool_params !== null) {
      message.poolParams = PoolParams.fromAmino(object.pool_params);
    }
    message.poolAssets = object.pool_assets?.map(e => PoolAsset.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreatePool): MsgCreatePoolAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.pool_params = message.poolParams ? PoolParams.toAmino(message.poolParams) : undefined;
    if (message.poolAssets) {
      obj.pool_assets = message.poolAssets.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.pool_assets = message.poolAssets;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolAminoMsg): MsgCreatePool {
    return MsgCreatePool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreatePool): MsgCreatePoolAminoMsg {
    return {
      type: "amm/MsgCreatePool",
      value: MsgCreatePool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreatePoolProtoMsg): MsgCreatePool {
    return MsgCreatePool.decode(message.value);
  },
  toProto(message: MsgCreatePool): Uint8Array {
    return MsgCreatePool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePool): MsgCreatePoolProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgCreatePool",
      value: MsgCreatePool.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {
    poolId: BigInt(0)
  };
}
export const MsgCreatePoolResponse = {
  typeUrl: "/elys.amm.MsgCreatePoolResponse",
  encode(message: MsgCreatePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreatePoolResponseAmino): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgCreatePoolResponse): MsgCreatePoolResponseAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolResponseAminoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePoolResponseProtoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.decode(message.value);
  },
  toProto(message: MsgCreatePoolResponse): Uint8Array {
    return MsgCreatePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePoolResponse): MsgCreatePoolResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgCreatePoolResponse",
      value: MsgCreatePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgJoinPool(): MsgJoinPool {
  return {
    sender: "",
    poolId: BigInt(0),
    maxAmountsIn: [],
    shareAmountOut: ""
  };
}
export const MsgJoinPool = {
  typeUrl: "/elys.amm.MsgJoinPool",
  encode(message: MsgJoinPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.maxAmountsIn) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.shareAmountOut !== "") {
      writer.uint32(34).string(message.shareAmountOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.maxAmountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.shareAmountOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgJoinPool>): MsgJoinPool {
    const message = createBaseMsgJoinPool();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.maxAmountsIn = object.maxAmountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.shareAmountOut = object.shareAmountOut ?? "";
    return message;
  },
  fromAmino(object: MsgJoinPoolAmino): MsgJoinPool {
    const message = createBaseMsgJoinPool();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.maxAmountsIn = object.max_amounts_in?.map(e => Coin.fromAmino(e)) || [];
    if (object.share_amount_out !== undefined && object.share_amount_out !== null) {
      message.shareAmountOut = object.share_amount_out;
    }
    return message;
  },
  toAmino(message: MsgJoinPool): MsgJoinPoolAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.maxAmountsIn) {
      obj.max_amounts_in = message.maxAmountsIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.max_amounts_in = message.maxAmountsIn;
    }
    obj.share_amount_out = message.shareAmountOut === "" ? undefined : message.shareAmountOut;
    return obj;
  },
  fromAminoMsg(object: MsgJoinPoolAminoMsg): MsgJoinPool {
    return MsgJoinPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinPool): MsgJoinPoolAminoMsg {
    return {
      type: "amm/MsgJoinPool",
      value: MsgJoinPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinPoolProtoMsg): MsgJoinPool {
    return MsgJoinPool.decode(message.value);
  },
  toProto(message: MsgJoinPool): Uint8Array {
    return MsgJoinPool.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinPool): MsgJoinPoolProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgJoinPool",
      value: MsgJoinPool.encode(message).finish()
    };
  }
};
function createBaseMsgJoinPoolResponse(): MsgJoinPoolResponse {
  return {
    shareAmountOut: "",
    tokenIn: []
  };
}
export const MsgJoinPoolResponse = {
  typeUrl: "/elys.amm.MsgJoinPoolResponse",
  encode(message: MsgJoinPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shareAmountOut !== "") {
      writer.uint32(10).string(message.shareAmountOut);
    }
    for (const v of message.tokenIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareAmountOut = reader.string();
          break;
        case 2:
          message.tokenIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgJoinPoolResponse>): MsgJoinPoolResponse {
    const message = createBaseMsgJoinPoolResponse();
    message.shareAmountOut = object.shareAmountOut ?? "";
    message.tokenIn = object.tokenIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgJoinPoolResponseAmino): MsgJoinPoolResponse {
    const message = createBaseMsgJoinPoolResponse();
    if (object.share_amount_out !== undefined && object.share_amount_out !== null) {
      message.shareAmountOut = object.share_amount_out;
    }
    message.tokenIn = object.token_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgJoinPoolResponse): MsgJoinPoolResponseAmino {
    const obj: any = {};
    obj.share_amount_out = message.shareAmountOut === "" ? undefined : message.shareAmountOut;
    if (message.tokenIn) {
      obj.token_in = message.tokenIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.token_in = message.tokenIn;
    }
    return obj;
  },
  fromAminoMsg(object: MsgJoinPoolResponseAminoMsg): MsgJoinPoolResponse {
    return MsgJoinPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgJoinPoolResponseProtoMsg): MsgJoinPoolResponse {
    return MsgJoinPoolResponse.decode(message.value);
  },
  toProto(message: MsgJoinPoolResponse): Uint8Array {
    return MsgJoinPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinPoolResponse): MsgJoinPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgJoinPoolResponse",
      value: MsgJoinPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExitPool(): MsgExitPool {
  return {
    sender: "",
    poolId: BigInt(0),
    minAmountsOut: [],
    shareAmountIn: "",
    tokenOutDenom: ""
  };
}
export const MsgExitPool = {
  typeUrl: "/elys.amm.MsgExitPool",
  encode(message: MsgExitPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.minAmountsOut) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.shareAmountIn !== "") {
      writer.uint32(34).string(message.shareAmountIn);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(42).string(message.tokenOutDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.minAmountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.shareAmountIn = reader.string();
          break;
        case 5:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgExitPool>): MsgExitPool {
    const message = createBaseMsgExitPool();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.minAmountsOut = object.minAmountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.shareAmountIn = object.shareAmountIn ?? "";
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
  fromAmino(object: MsgExitPoolAmino): MsgExitPool {
    const message = createBaseMsgExitPool();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.minAmountsOut = object.min_amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.share_amount_in !== undefined && object.share_amount_in !== null) {
      message.shareAmountIn = object.share_amount_in;
    }
    if (object.token_out_denom !== undefined && object.token_out_denom !== null) {
      message.tokenOutDenom = object.token_out_denom;
    }
    return message;
  },
  toAmino(message: MsgExitPool): MsgExitPoolAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.minAmountsOut) {
      obj.min_amounts_out = message.minAmountsOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_amounts_out = message.minAmountsOut;
    }
    obj.share_amount_in = message.shareAmountIn === "" ? undefined : message.shareAmountIn;
    obj.token_out_denom = message.tokenOutDenom === "" ? undefined : message.tokenOutDenom;
    return obj;
  },
  fromAminoMsg(object: MsgExitPoolAminoMsg): MsgExitPool {
    return MsgExitPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitPool): MsgExitPoolAminoMsg {
    return {
      type: "amm/MsgExitPool",
      value: MsgExitPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitPoolProtoMsg): MsgExitPool {
    return MsgExitPool.decode(message.value);
  },
  toProto(message: MsgExitPool): Uint8Array {
    return MsgExitPool.encode(message).finish();
  },
  toProtoMsg(message: MsgExitPool): MsgExitPoolProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgExitPool",
      value: MsgExitPool.encode(message).finish()
    };
  }
};
function createBaseMsgExitPoolResponse(): MsgExitPoolResponse {
  return {
    tokenOut: []
  };
}
export const MsgExitPoolResponse = {
  typeUrl: "/elys.amm.MsgExitPoolResponse",
  encode(message: MsgExitPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokenOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgExitPoolResponse>): MsgExitPoolResponse {
    const message = createBaseMsgExitPoolResponse();
    message.tokenOut = object.tokenOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgExitPoolResponseAmino): MsgExitPoolResponse {
    const message = createBaseMsgExitPoolResponse();
    message.tokenOut = object.token_out?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgExitPoolResponse): MsgExitPoolResponseAmino {
    const obj: any = {};
    if (message.tokenOut) {
      obj.token_out = message.tokenOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.token_out = message.tokenOut;
    }
    return obj;
  },
  fromAminoMsg(object: MsgExitPoolResponseAminoMsg): MsgExitPoolResponse {
    return MsgExitPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExitPoolResponseProtoMsg): MsgExitPoolResponse {
    return MsgExitPoolResponse.decode(message.value);
  },
  toProto(message: MsgExitPoolResponse): Uint8Array {
    return MsgExitPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitPoolResponse): MsgExitPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgExitPoolResponse",
      value: MsgExitPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountIn(): MsgSwapExactAmountIn {
  return {
    sender: "",
    routes: [],
    tokenIn: Coin.fromPartial({}),
    tokenOutMinAmount: "",
    recipient: ""
  };
}
export const MsgSwapExactAmountIn = {
  typeUrl: "/elys.amm.MsgSwapExactAmountIn",
  encode(message: MsgSwapExactAmountIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOutMinAmount !== "") {
      writer.uint32(34).string(message.tokenOutMinAmount);
    }
    if (message.recipient !== "") {
      writer.uint32(42).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenOutMinAmount = reader.string();
          break;
        case 5:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn {
    const message = createBaseMsgSwapExactAmountIn();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
    message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgSwapExactAmountInAmino): MsgSwapExactAmountIn {
    const message = createBaseMsgSwapExactAmountIn();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = Coin.fromAmino(object.token_in);
    }
    if (object.token_out_min_amount !== undefined && object.token_out_min_amount !== null) {
      message.tokenOutMinAmount = object.token_out_min_amount;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
    obj.token_out_min_amount = message.tokenOutMinAmount === "" ? undefined : message.tokenOutMinAmount;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountInAminoMsg): MsgSwapExactAmountIn {
    return MsgSwapExactAmountIn.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAminoMsg {
    return {
      type: "amm/MsgSwapExactAmountIn",
      value: MsgSwapExactAmountIn.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapExactAmountInProtoMsg): MsgSwapExactAmountIn {
    return MsgSwapExactAmountIn.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountIn): Uint8Array {
    return MsgSwapExactAmountIn.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgSwapExactAmountIn",
      value: MsgSwapExactAmountIn.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountInResponse(): MsgSwapExactAmountInResponse {
  return {
    tokenOutAmount: "",
    swapFee: "",
    discount: "",
    recipient: ""
  };
}
export const MsgSwapExactAmountInResponse = {
  typeUrl: "/elys.amm.MsgSwapExactAmountInResponse",
  encode(message: MsgSwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    if (message.swapFee !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.discount !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.discount, 18).atomics);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;
        case 2:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwapExactAmountInResponse>): MsgSwapExactAmountInResponse {
    const message = createBaseMsgSwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    message.swapFee = object.swapFee ?? "";
    message.discount = object.discount ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgSwapExactAmountInResponseAmino): MsgSwapExactAmountInResponse {
    const message = createBaseMsgSwapExactAmountInResponse();
    if (object.token_out_amount !== undefined && object.token_out_amount !== null) {
      message.tokenOutAmount = object.token_out_amount;
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    if (object.discount !== undefined && object.discount !== null) {
      message.discount = object.discount;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount === "" ? undefined : message.tokenOutAmount;
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    obj.discount = message.discount === "" ? undefined : message.discount;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountInResponseAminoMsg): MsgSwapExactAmountInResponse {
    return MsgSwapExactAmountInResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapExactAmountInResponseProtoMsg): MsgSwapExactAmountInResponse {
    return MsgSwapExactAmountInResponse.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountInResponse): Uint8Array {
    return MsgSwapExactAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgSwapExactAmountInResponse",
      value: MsgSwapExactAmountInResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountOut(): MsgSwapExactAmountOut {
  return {
    sender: "",
    routes: [],
    tokenOut: Coin.fromPartial({}),
    tokenInMaxAmount: "",
    recipient: ""
  };
}
export const MsgSwapExactAmountOut = {
  typeUrl: "/elys.amm.MsgSwapExactAmountOut",
  encode(message: MsgSwapExactAmountOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenInMaxAmount !== "") {
      writer.uint32(34).string(message.tokenInMaxAmount);
    }
    if (message.recipient !== "") {
      writer.uint32(42).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenInMaxAmount = reader.string();
          break;
        case 5:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwapExactAmountOut>): MsgSwapExactAmountOut {
    const message = createBaseMsgSwapExactAmountOut();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? Coin.fromPartial(object.tokenOut) : undefined;
    message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgSwapExactAmountOutAmino): MsgSwapExactAmountOut {
    const message = createBaseMsgSwapExactAmountOut();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = Coin.fromAmino(object.token_out);
    }
    if (object.token_in_max_amount !== undefined && object.token_in_max_amount !== null) {
      message.tokenInMaxAmount = object.token_in_max_amount;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    obj.token_out = message.tokenOut ? Coin.toAmino(message.tokenOut) : undefined;
    obj.token_in_max_amount = message.tokenInMaxAmount === "" ? undefined : message.tokenInMaxAmount;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountOutAminoMsg): MsgSwapExactAmountOut {
    return MsgSwapExactAmountOut.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAminoMsg {
    return {
      type: "amm/MsgSwapExactAmountOut",
      value: MsgSwapExactAmountOut.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapExactAmountOutProtoMsg): MsgSwapExactAmountOut {
    return MsgSwapExactAmountOut.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountOut): Uint8Array {
    return MsgSwapExactAmountOut.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgSwapExactAmountOut",
      value: MsgSwapExactAmountOut.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountOutResponse(): MsgSwapExactAmountOutResponse {
  return {
    tokenInAmount: "",
    swapFee: "",
    discount: "",
    recipient: ""
  };
}
export const MsgSwapExactAmountOutResponse = {
  typeUrl: "/elys.amm.MsgSwapExactAmountOutResponse",
  encode(message: MsgSwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    if (message.swapFee !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.discount !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.discount, 18).atomics);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        case 2:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwapExactAmountOutResponse>): MsgSwapExactAmountOutResponse {
    const message = createBaseMsgSwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    message.swapFee = object.swapFee ?? "";
    message.discount = object.discount ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgSwapExactAmountOutResponseAmino): MsgSwapExactAmountOutResponse {
    const message = createBaseMsgSwapExactAmountOutResponse();
    if (object.token_in_amount !== undefined && object.token_in_amount !== null) {
      message.tokenInAmount = object.token_in_amount;
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    if (object.discount !== undefined && object.discount !== null) {
      message.discount = object.discount;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount === "" ? undefined : message.tokenInAmount;
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    obj.discount = message.discount === "" ? undefined : message.discount;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountOutResponseAminoMsg): MsgSwapExactAmountOutResponse {
    return MsgSwapExactAmountOutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapExactAmountOutResponseProtoMsg): MsgSwapExactAmountOutResponse {
    return MsgSwapExactAmountOutResponse.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountOutResponse): Uint8Array {
    return MsgSwapExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgSwapExactAmountOutResponse",
      value: MsgSwapExactAmountOutResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFeedMultipleExternalLiquidity(): MsgFeedMultipleExternalLiquidity {
  return {
    sender: "",
    liquidity: []
  };
}
export const MsgFeedMultipleExternalLiquidity = {
  typeUrl: "/elys.amm.MsgFeedMultipleExternalLiquidity",
  encode(message: MsgFeedMultipleExternalLiquidity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.liquidity) {
      ExternalLiquidity.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFeedMultipleExternalLiquidity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFeedMultipleExternalLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.liquidity.push(ExternalLiquidity.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgFeedMultipleExternalLiquidity>): MsgFeedMultipleExternalLiquidity {
    const message = createBaseMsgFeedMultipleExternalLiquidity();
    message.sender = object.sender ?? "";
    message.liquidity = object.liquidity?.map(e => ExternalLiquidity.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgFeedMultipleExternalLiquidityAmino): MsgFeedMultipleExternalLiquidity {
    const message = createBaseMsgFeedMultipleExternalLiquidity();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.liquidity = object.liquidity?.map(e => ExternalLiquidity.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgFeedMultipleExternalLiquidity): MsgFeedMultipleExternalLiquidityAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? ExternalLiquidity.toAmino(e) : undefined);
    } else {
      obj.liquidity = message.liquidity;
    }
    return obj;
  },
  fromAminoMsg(object: MsgFeedMultipleExternalLiquidityAminoMsg): MsgFeedMultipleExternalLiquidity {
    return MsgFeedMultipleExternalLiquidity.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFeedMultipleExternalLiquidity): MsgFeedMultipleExternalLiquidityAminoMsg {
    return {
      type: "amm/MsgFeedMultipleExternalLiquidity",
      value: MsgFeedMultipleExternalLiquidity.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFeedMultipleExternalLiquidityProtoMsg): MsgFeedMultipleExternalLiquidity {
    return MsgFeedMultipleExternalLiquidity.decode(message.value);
  },
  toProto(message: MsgFeedMultipleExternalLiquidity): Uint8Array {
    return MsgFeedMultipleExternalLiquidity.encode(message).finish();
  },
  toProtoMsg(message: MsgFeedMultipleExternalLiquidity): MsgFeedMultipleExternalLiquidityProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgFeedMultipleExternalLiquidity",
      value: MsgFeedMultipleExternalLiquidity.encode(message).finish()
    };
  }
};
function createBaseMsgFeedMultipleExternalLiquidityResponse(): MsgFeedMultipleExternalLiquidityResponse {
  return {};
}
export const MsgFeedMultipleExternalLiquidityResponse = {
  typeUrl: "/elys.amm.MsgFeedMultipleExternalLiquidityResponse",
  encode(_: MsgFeedMultipleExternalLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFeedMultipleExternalLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFeedMultipleExternalLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgFeedMultipleExternalLiquidityResponse>): MsgFeedMultipleExternalLiquidityResponse {
    const message = createBaseMsgFeedMultipleExternalLiquidityResponse();
    return message;
  },
  fromAmino(_: MsgFeedMultipleExternalLiquidityResponseAmino): MsgFeedMultipleExternalLiquidityResponse {
    const message = createBaseMsgFeedMultipleExternalLiquidityResponse();
    return message;
  },
  toAmino(_: MsgFeedMultipleExternalLiquidityResponse): MsgFeedMultipleExternalLiquidityResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFeedMultipleExternalLiquidityResponseAminoMsg): MsgFeedMultipleExternalLiquidityResponse {
    return MsgFeedMultipleExternalLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFeedMultipleExternalLiquidityResponseProtoMsg): MsgFeedMultipleExternalLiquidityResponse {
    return MsgFeedMultipleExternalLiquidityResponse.decode(message.value);
  },
  toProto(message: MsgFeedMultipleExternalLiquidityResponse): Uint8Array {
    return MsgFeedMultipleExternalLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFeedMultipleExternalLiquidityResponse): MsgFeedMultipleExternalLiquidityResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgFeedMultipleExternalLiquidityResponse",
      value: MsgFeedMultipleExternalLiquidityResponse.encode(message).finish()
    };
  }
};
function createBaseAssetAmountDepth(): AssetAmountDepth {
  return {
    asset: "",
    amount: "",
    depth: ""
  };
}
export const AssetAmountDepth = {
  typeUrl: "/elys.amm.AssetAmountDepth",
  encode(message: AssetAmountDepth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.amount, 18).atomics);
    }
    if (message.depth !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.depth, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AssetAmountDepth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetAmountDepth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.amount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.depth = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AssetAmountDepth>): AssetAmountDepth {
    const message = createBaseAssetAmountDepth();
    message.asset = object.asset ?? "";
    message.amount = object.amount ?? "";
    message.depth = object.depth ?? "";
    return message;
  },
  fromAmino(object: AssetAmountDepthAmino): AssetAmountDepth {
    const message = createBaseAssetAmountDepth();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = object.depth;
    }
    return message;
  },
  toAmino(message: AssetAmountDepth): AssetAmountDepthAmino {
    const obj: any = {};
    obj.asset = message.asset === "" ? undefined : message.asset;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.depth = message.depth === "" ? undefined : message.depth;
    return obj;
  },
  fromAminoMsg(object: AssetAmountDepthAminoMsg): AssetAmountDepth {
    return AssetAmountDepth.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetAmountDepthProtoMsg): AssetAmountDepth {
    return AssetAmountDepth.decode(message.value);
  },
  toProto(message: AssetAmountDepth): Uint8Array {
    return AssetAmountDepth.encode(message).finish();
  },
  toProtoMsg(message: AssetAmountDepth): AssetAmountDepthProtoMsg {
    return {
      typeUrl: "/elys.amm.AssetAmountDepth",
      value: AssetAmountDepth.encode(message).finish()
    };
  }
};
function createBaseExternalLiquidity(): ExternalLiquidity {
  return {
    poolId: BigInt(0),
    amountDepthInfo: []
  };
}
export const ExternalLiquidity = {
  typeUrl: "/elys.amm.ExternalLiquidity",
  encode(message: ExternalLiquidity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountDepthInfo) {
      AssetAmountDepth.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExternalLiquidity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.amountDepthInfo.push(AssetAmountDepth.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ExternalLiquidity>): ExternalLiquidity {
    const message = createBaseExternalLiquidity();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountDepthInfo = object.amountDepthInfo?.map(e => AssetAmountDepth.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ExternalLiquidityAmino): ExternalLiquidity {
    const message = createBaseExternalLiquidity();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountDepthInfo = object.amount_depth_info?.map(e => AssetAmountDepth.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ExternalLiquidity): ExternalLiquidityAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.amountDepthInfo) {
      obj.amount_depth_info = message.amountDepthInfo.map(e => e ? AssetAmountDepth.toAmino(e) : undefined);
    } else {
      obj.amount_depth_info = message.amountDepthInfo;
    }
    return obj;
  },
  fromAminoMsg(object: ExternalLiquidityAminoMsg): ExternalLiquidity {
    return ExternalLiquidity.fromAmino(object.value);
  },
  fromProtoMsg(message: ExternalLiquidityProtoMsg): ExternalLiquidity {
    return ExternalLiquidity.decode(message.value);
  },
  toProto(message: ExternalLiquidity): Uint8Array {
    return ExternalLiquidity.encode(message).finish();
  },
  toProtoMsg(message: ExternalLiquidity): ExternalLiquidityProtoMsg {
    return {
      typeUrl: "/elys.amm.ExternalLiquidity",
      value: ExternalLiquidity.encode(message).finish()
    };
  }
};
function createBaseMsgSwapByDenom(): MsgSwapByDenom {
  return {
    sender: "",
    amount: Coin.fromPartial({}),
    minAmount: Coin.fromPartial({}),
    maxAmount: Coin.fromPartial({}),
    denomIn: "",
    denomOut: "",
    recipient: ""
  };
}
export const MsgSwapByDenom = {
  typeUrl: "/elys.amm.MsgSwapByDenom",
  encode(message: MsgSwapByDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.minAmount !== undefined) {
      Coin.encode(message.minAmount, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxAmount !== undefined) {
      Coin.encode(message.maxAmount, writer.uint32(34).fork()).ldelim();
    }
    if (message.denomIn !== "") {
      writer.uint32(42).string(message.denomIn);
    }
    if (message.denomOut !== "") {
      writer.uint32(50).string(message.denomOut);
    }
    if (message.recipient !== "") {
      writer.uint32(58).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapByDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapByDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.minAmount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.maxAmount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.denomIn = reader.string();
          break;
        case 6:
          message.denomOut = reader.string();
          break;
        case 7:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwapByDenom>): MsgSwapByDenom {
    const message = createBaseMsgSwapByDenom();
    message.sender = object.sender ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.minAmount = object.minAmount !== undefined && object.minAmount !== null ? Coin.fromPartial(object.minAmount) : undefined;
    message.maxAmount = object.maxAmount !== undefined && object.maxAmount !== null ? Coin.fromPartial(object.maxAmount) : undefined;
    message.denomIn = object.denomIn ?? "";
    message.denomOut = object.denomOut ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgSwapByDenomAmino): MsgSwapByDenom {
    const message = createBaseMsgSwapByDenom();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.min_amount !== undefined && object.min_amount !== null) {
      message.minAmount = Coin.fromAmino(object.min_amount);
    }
    if (object.max_amount !== undefined && object.max_amount !== null) {
      message.maxAmount = Coin.fromAmino(object.max_amount);
    }
    if (object.denom_in !== undefined && object.denom_in !== null) {
      message.denomIn = object.denom_in;
    }
    if (object.denom_out !== undefined && object.denom_out !== null) {
      message.denomOut = object.denom_out;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: MsgSwapByDenom): MsgSwapByDenomAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.min_amount = message.minAmount ? Coin.toAmino(message.minAmount) : undefined;
    obj.max_amount = message.maxAmount ? Coin.toAmino(message.maxAmount) : undefined;
    obj.denom_in = message.denomIn === "" ? undefined : message.denomIn;
    obj.denom_out = message.denomOut === "" ? undefined : message.denomOut;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgSwapByDenomAminoMsg): MsgSwapByDenom {
    return MsgSwapByDenom.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapByDenom): MsgSwapByDenomAminoMsg {
    return {
      type: "amm/MsgSwapByDenom",
      value: MsgSwapByDenom.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapByDenomProtoMsg): MsgSwapByDenom {
    return MsgSwapByDenom.decode(message.value);
  },
  toProto(message: MsgSwapByDenom): Uint8Array {
    return MsgSwapByDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapByDenom): MsgSwapByDenomProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgSwapByDenom",
      value: MsgSwapByDenom.encode(message).finish()
    };
  }
};
function createBaseMsgSwapByDenomResponse(): MsgSwapByDenomResponse {
  return {
    amount: Coin.fromPartial({}),
    inRoute: [],
    outRoute: [],
    spotPrice: "",
    swapFee: "",
    discount: "",
    recipient: ""
  };
}
export const MsgSwapByDenomResponse = {
  typeUrl: "/elys.amm.MsgSwapByDenomResponse",
  encode(message: MsgSwapByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.inRoute) {
      SwapAmountInRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.outRoute) {
      SwapAmountOutRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.spotPrice !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.spotPrice, 18).atomics);
    }
    if (message.swapFee !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.discount !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.discount, 18).atomics);
    }
    if (message.recipient !== "") {
      writer.uint32(58).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.inRoute.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.outRoute.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.spotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwapByDenomResponse>): MsgSwapByDenomResponse {
    const message = createBaseMsgSwapByDenomResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.inRoute = object.inRoute?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    message.outRoute = object.outRoute?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.spotPrice = object.spotPrice ?? "";
    message.swapFee = object.swapFee ?? "";
    message.discount = object.discount ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgSwapByDenomResponseAmino): MsgSwapByDenomResponse {
    const message = createBaseMsgSwapByDenomResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    message.inRoute = object.in_route?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
    message.outRoute = object.out_route?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    if (object.discount !== undefined && object.discount !== null) {
      message.discount = object.discount;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: MsgSwapByDenomResponse): MsgSwapByDenomResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    if (message.inRoute) {
      obj.in_route = message.inRoute.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.in_route = message.inRoute;
    }
    if (message.outRoute) {
      obj.out_route = message.outRoute.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.out_route = message.outRoute;
    }
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    obj.discount = message.discount === "" ? undefined : message.discount;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgSwapByDenomResponseAminoMsg): MsgSwapByDenomResponse {
    return MsgSwapByDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapByDenomResponseProtoMsg): MsgSwapByDenomResponse {
    return MsgSwapByDenomResponse.decode(message.value);
  },
  toProto(message: MsgSwapByDenomResponse): Uint8Array {
    return MsgSwapByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapByDenomResponse): MsgSwapByDenomResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgSwapByDenomResponse",
      value: MsgSwapByDenomResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePoolParams(): MsgUpdatePoolParams {
  return {
    authority: "",
    poolId: BigInt(0),
    poolParams: PoolParams.fromPartial({})
  };
}
export const MsgUpdatePoolParams = {
  typeUrl: "/elys.amm.MsgUpdatePoolParams",
  encode(message: MsgUpdatePoolParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePoolParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePoolParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdatePoolParams>): MsgUpdatePoolParams {
    const message = createBaseMsgUpdatePoolParams();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdatePoolParamsAmino): MsgUpdatePoolParams {
    const message = createBaseMsgUpdatePoolParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pool_params !== undefined && object.pool_params !== null) {
      message.poolParams = PoolParams.fromAmino(object.pool_params);
    }
    return message;
  },
  toAmino(message: MsgUpdatePoolParams): MsgUpdatePoolParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.pool_params = message.poolParams ? PoolParams.toAmino(message.poolParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePoolParamsAminoMsg): MsgUpdatePoolParams {
    return MsgUpdatePoolParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdatePoolParams): MsgUpdatePoolParamsAminoMsg {
    return {
      type: "amm/MsgUpdatePoolParams",
      value: MsgUpdatePoolParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdatePoolParamsProtoMsg): MsgUpdatePoolParams {
    return MsgUpdatePoolParams.decode(message.value);
  },
  toProto(message: MsgUpdatePoolParams): Uint8Array {
    return MsgUpdatePoolParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePoolParams): MsgUpdatePoolParamsProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgUpdatePoolParams",
      value: MsgUpdatePoolParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePoolParamsResponse(): MsgUpdatePoolParamsResponse {
  return {
    poolId: BigInt(0),
    poolParams: undefined
  };
}
export const MsgUpdatePoolParamsResponse = {
  typeUrl: "/elys.amm.MsgUpdatePoolParamsResponse",
  encode(message: MsgUpdatePoolParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePoolParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePoolParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdatePoolParamsResponse>): MsgUpdatePoolParamsResponse {
    const message = createBaseMsgUpdatePoolParamsResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdatePoolParamsResponseAmino): MsgUpdatePoolParamsResponse {
    const message = createBaseMsgUpdatePoolParamsResponse();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pool_params !== undefined && object.pool_params !== null) {
      message.poolParams = PoolParams.fromAmino(object.pool_params);
    }
    return message;
  },
  toAmino(message: MsgUpdatePoolParamsResponse): MsgUpdatePoolParamsResponseAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.pool_params = message.poolParams ? PoolParams.toAmino(message.poolParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePoolParamsResponseAminoMsg): MsgUpdatePoolParamsResponse {
    return MsgUpdatePoolParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePoolParamsResponseProtoMsg): MsgUpdatePoolParamsResponse {
    return MsgUpdatePoolParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePoolParamsResponse): Uint8Array {
    return MsgUpdatePoolParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePoolParamsResponse): MsgUpdatePoolParamsResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgUpdatePoolParamsResponse",
      value: MsgUpdatePoolParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  typeUrl: "/elys.amm.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "amm/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/elys.amm.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};