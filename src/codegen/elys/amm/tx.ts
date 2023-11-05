import { PoolParams, PoolParamsAmino, PoolParamsSDKType } from "./pool_params";
import { PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "./pool_asset";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./swap_route";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface MsgCreatePool {
  sender: string;
  poolParams?: PoolParams;
  poolAssets: PoolAsset[];
}
export interface MsgCreatePoolProtoMsg {
  typeUrl: "/elys.amm.MsgCreatePool";
  value: Uint8Array;
}
export interface MsgCreatePoolAmino {
  sender: string;
  poolParams?: PoolParamsAmino;
  poolAssets: PoolAssetAmino[];
}
export interface MsgCreatePoolAminoMsg {
  type: "/elys.amm.MsgCreatePool";
  value: MsgCreatePoolAmino;
}
export interface MsgCreatePoolSDKType {
  sender: string;
  poolParams?: PoolParamsSDKType;
  poolAssets: PoolAssetSDKType[];
}
export interface MsgCreatePoolResponse {
  poolId: bigint;
}
export interface MsgCreatePoolResponseProtoMsg {
  typeUrl: "/elys.amm.MsgCreatePoolResponse";
  value: Uint8Array;
}
export interface MsgCreatePoolResponseAmino {
  pool_id: string;
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
  noRemaining: boolean;
}
export interface MsgJoinPoolProtoMsg {
  typeUrl: "/elys.amm.MsgJoinPool";
  value: Uint8Array;
}
export interface MsgJoinPoolAmino {
  sender: string;
  poolId: string;
  maxAmountsIn: CoinAmino[];
  shareAmountOut: string;
  noRemaining: boolean;
}
export interface MsgJoinPoolAminoMsg {
  type: "/elys.amm.MsgJoinPool";
  value: MsgJoinPoolAmino;
}
export interface MsgJoinPoolSDKType {
  sender: string;
  poolId: bigint;
  maxAmountsIn: CoinSDKType[];
  shareAmountOut: string;
  noRemaining: boolean;
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
  shareAmountOut: string;
  tokenIn: CoinAmino[];
}
export interface MsgJoinPoolResponseAminoMsg {
  type: "/elys.amm.MsgJoinPoolResponse";
  value: MsgJoinPoolResponseAmino;
}
export interface MsgJoinPoolResponseSDKType {
  shareAmountOut: string;
  tokenIn: CoinSDKType[];
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
  sender: string;
  poolId: string;
  minAmountsOut: CoinAmino[];
  shareAmountIn: string;
  tokenOutDenom: string;
}
export interface MsgExitPoolAminoMsg {
  type: "/elys.amm.MsgExitPool";
  value: MsgExitPoolAmino;
}
export interface MsgExitPoolSDKType {
  sender: string;
  poolId: bigint;
  minAmountsOut: CoinSDKType[];
  shareAmountIn: string;
  tokenOutDenom: string;
}
export interface MsgExitPoolResponse {
  tokenOut: Coin[];
}
export interface MsgExitPoolResponseProtoMsg {
  typeUrl: "/elys.amm.MsgExitPoolResponse";
  value: Uint8Array;
}
export interface MsgExitPoolResponseAmino {
  tokenOut: CoinAmino[];
}
export interface MsgExitPoolResponseAminoMsg {
  type: "/elys.amm.MsgExitPoolResponse";
  value: MsgExitPoolResponseAmino;
}
export interface MsgExitPoolResponseSDKType {
  tokenOut: CoinSDKType[];
}
export interface MsgSwapExactAmountIn {
  sender: string;
  routes: SwapAmountInRoute[];
  tokenIn: Coin;
  tokenOutMinAmount: string;
}
export interface MsgSwapExactAmountInProtoMsg {
  typeUrl: "/elys.amm.MsgSwapExactAmountIn";
  value: Uint8Array;
}
export interface MsgSwapExactAmountInAmino {
  sender: string;
  routes: SwapAmountInRouteAmino[];
  tokenIn?: CoinAmino;
  tokenOutMinAmount: string;
}
export interface MsgSwapExactAmountInAminoMsg {
  type: "/elys.amm.MsgSwapExactAmountIn";
  value: MsgSwapExactAmountInAmino;
}
export interface MsgSwapExactAmountInSDKType {
  sender: string;
  routes: SwapAmountInRouteSDKType[];
  tokenIn: CoinSDKType;
  tokenOutMinAmount: string;
}
export interface MsgSwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface MsgSwapExactAmountInResponseProtoMsg {
  typeUrl: "/elys.amm.MsgSwapExactAmountInResponse";
  value: Uint8Array;
}
export interface MsgSwapExactAmountInResponseAmino {
  tokenOutAmount: string;
}
export interface MsgSwapExactAmountInResponseAminoMsg {
  type: "/elys.amm.MsgSwapExactAmountInResponse";
  value: MsgSwapExactAmountInResponseAmino;
}
export interface MsgSwapExactAmountInResponseSDKType {
  tokenOutAmount: string;
}
export interface MsgSwapExactAmountOut {
  sender: string;
  routes: SwapAmountOutRoute[];
  tokenOut: Coin;
  tokenInMaxAmount: string;
}
export interface MsgSwapExactAmountOutProtoMsg {
  typeUrl: "/elys.amm.MsgSwapExactAmountOut";
  value: Uint8Array;
}
export interface MsgSwapExactAmountOutAmino {
  sender: string;
  routes: SwapAmountOutRouteAmino[];
  tokenOut?: CoinAmino;
  tokenInMaxAmount: string;
}
export interface MsgSwapExactAmountOutAminoMsg {
  type: "/elys.amm.MsgSwapExactAmountOut";
  value: MsgSwapExactAmountOutAmino;
}
export interface MsgSwapExactAmountOutSDKType {
  sender: string;
  routes: SwapAmountOutRouteSDKType[];
  tokenOut: CoinSDKType;
  tokenInMaxAmount: string;
}
export interface MsgSwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface MsgSwapExactAmountOutResponseProtoMsg {
  typeUrl: "/elys.amm.MsgSwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface MsgSwapExactAmountOutResponseAmino {
  tokenInAmount: string;
}
export interface MsgSwapExactAmountOutResponseAminoMsg {
  type: "/elys.amm.MsgSwapExactAmountOutResponse";
  value: MsgSwapExactAmountOutResponseAmino;
}
export interface MsgSwapExactAmountOutResponseSDKType {
  tokenInAmount: string;
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
  sender: string;
  liquidity: ExternalLiquidityAmino[];
}
export interface MsgFeedMultipleExternalLiquidityAminoMsg {
  type: "/elys.amm.MsgFeedMultipleExternalLiquidity";
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
  asset: string;
  amount: string;
  depth: string;
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
/** ExternalLiquidity defines price, volume, and time information for an exchange rate. */
export interface ExternalLiquidity {
  poolId: bigint;
  amountDepthInfo: AssetAmountDepth[];
}
export interface ExternalLiquidityProtoMsg {
  typeUrl: "/elys.amm.ExternalLiquidity";
  value: Uint8Array;
}
/** ExternalLiquidity defines price, volume, and time information for an exchange rate. */
export interface ExternalLiquidityAmino {
  poolId: string;
  amountDepthInfo: AssetAmountDepthAmino[];
}
export interface ExternalLiquidityAminoMsg {
  type: "/elys.amm.ExternalLiquidity";
  value: ExternalLiquidityAmino;
}
/** ExternalLiquidity defines price, volume, and time information for an exchange rate. */
export interface ExternalLiquiditySDKType {
  poolId: bigint;
  amountDepthInfo: AssetAmountDepthSDKType[];
}
function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    sender: "",
    poolParams: undefined,
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
    return {
      sender: object.sender,
      poolParams: object?.poolParams ? PoolParams.fromAmino(object.poolParams) : undefined,
      poolAssets: Array.isArray(object?.poolAssets) ? object.poolAssets.map((e: any) => PoolAsset.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgCreatePool): MsgCreatePoolAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.poolParams = message.poolParams ? PoolParams.toAmino(message.poolParams) : undefined;
    if (message.poolAssets) {
      obj.poolAssets = message.poolAssets.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.poolAssets = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolAminoMsg): MsgCreatePool {
    return MsgCreatePool.fromAmino(object.value);
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
    return {
      poolId: BigInt(object.pool_id)
    };
  },
  toAmino(message: MsgCreatePoolResponse): MsgCreatePoolResponseAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
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
    shareAmountOut: "",
    noRemaining: false
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
    if (message.noRemaining === true) {
      writer.uint32(40).bool(message.noRemaining);
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
        case 5:
          message.noRemaining = reader.bool();
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
    message.noRemaining = object.noRemaining ?? false;
    return message;
  },
  fromAmino(object: MsgJoinPoolAmino): MsgJoinPool {
    return {
      sender: object.sender,
      poolId: BigInt(object.poolId),
      maxAmountsIn: Array.isArray(object?.maxAmountsIn) ? object.maxAmountsIn.map((e: any) => Coin.fromAmino(e)) : [],
      shareAmountOut: object.shareAmountOut,
      noRemaining: object.noRemaining
    };
  },
  toAmino(message: MsgJoinPool): MsgJoinPoolAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.poolId = message.poolId ? message.poolId.toString() : undefined;
    if (message.maxAmountsIn) {
      obj.maxAmountsIn = message.maxAmountsIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.maxAmountsIn = [];
    }
    obj.shareAmountOut = message.shareAmountOut;
    obj.noRemaining = message.noRemaining;
    return obj;
  },
  fromAminoMsg(object: MsgJoinPoolAminoMsg): MsgJoinPool {
    return MsgJoinPool.fromAmino(object.value);
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
    return {
      shareAmountOut: object.shareAmountOut,
      tokenIn: Array.isArray(object?.tokenIn) ? object.tokenIn.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgJoinPoolResponse): MsgJoinPoolResponseAmino {
    const obj: any = {};
    obj.shareAmountOut = message.shareAmountOut;
    if (message.tokenIn) {
      obj.tokenIn = message.tokenIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokenIn = [];
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
    return {
      sender: object.sender,
      poolId: BigInt(object.poolId),
      minAmountsOut: Array.isArray(object?.minAmountsOut) ? object.minAmountsOut.map((e: any) => Coin.fromAmino(e)) : [],
      shareAmountIn: object.shareAmountIn,
      tokenOutDenom: object.tokenOutDenom
    };
  },
  toAmino(message: MsgExitPool): MsgExitPoolAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.poolId = message.poolId ? message.poolId.toString() : undefined;
    if (message.minAmountsOut) {
      obj.minAmountsOut = message.minAmountsOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.minAmountsOut = [];
    }
    obj.shareAmountIn = message.shareAmountIn;
    obj.tokenOutDenom = message.tokenOutDenom;
    return obj;
  },
  fromAminoMsg(object: MsgExitPoolAminoMsg): MsgExitPool {
    return MsgExitPool.fromAmino(object.value);
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
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
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
        case 2:
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
    return {
      tokenOut: Array.isArray(object?.tokenOut) ? object.tokenOut.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgExitPoolResponse): MsgExitPoolResponseAmino {
    const obj: any = {};
    if (message.tokenOut) {
      obj.tokenOut = message.tokenOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokenOut = [];
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
    tokenOutMinAmount: ""
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
    return message;
  },
  fromAmino(object: MsgSwapExactAmountInAmino): MsgSwapExactAmountIn {
    return {
      sender: object.sender,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromAmino(e)) : [],
      tokenIn: object?.tokenIn ? Coin.fromAmino(object.tokenIn) : undefined,
      tokenOutMinAmount: object.tokenOutMinAmount
    };
  },
  toAmino(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.tokenIn = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
    obj.tokenOutMinAmount = message.tokenOutMinAmount;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountInAminoMsg): MsgSwapExactAmountIn {
    return MsgSwapExactAmountIn.fromAmino(object.value);
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
    tokenOutAmount: ""
  };
}
export const MsgSwapExactAmountInResponse = {
  typeUrl: "/elys.amm.MsgSwapExactAmountInResponse",
  encode(message: MsgSwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
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
    return message;
  },
  fromAmino(object: MsgSwapExactAmountInResponseAmino): MsgSwapExactAmountInResponse {
    return {
      tokenOutAmount: object.tokenOutAmount
    };
  },
  toAmino(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.tokenOutAmount = message.tokenOutAmount;
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
    tokenInMaxAmount: ""
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
    return message;
  },
  fromAmino(object: MsgSwapExactAmountOutAmino): MsgSwapExactAmountOut {
    return {
      sender: object.sender,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromAmino(e)) : [],
      tokenOut: object?.tokenOut ? Coin.fromAmino(object.tokenOut) : undefined,
      tokenInMaxAmount: object.tokenInMaxAmount
    };
  },
  toAmino(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.tokenOut = message.tokenOut ? Coin.toAmino(message.tokenOut) : undefined;
    obj.tokenInMaxAmount = message.tokenInMaxAmount;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountOutAminoMsg): MsgSwapExactAmountOut {
    return MsgSwapExactAmountOut.fromAmino(object.value);
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
    tokenInAmount: ""
  };
}
export const MsgSwapExactAmountOutResponse = {
  typeUrl: "/elys.amm.MsgSwapExactAmountOutResponse",
  encode(message: MsgSwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
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
    return message;
  },
  fromAmino(object: MsgSwapExactAmountOutResponseAmino): MsgSwapExactAmountOutResponse {
    return {
      tokenInAmount: object.tokenInAmount
    };
  },
  toAmino(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.tokenInAmount = message.tokenInAmount;
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
    return {
      sender: object.sender,
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => ExternalLiquidity.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgFeedMultipleExternalLiquidity): MsgFeedMultipleExternalLiquidityAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? ExternalLiquidity.toAmino(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgFeedMultipleExternalLiquidityAminoMsg): MsgFeedMultipleExternalLiquidity {
    return MsgFeedMultipleExternalLiquidity.fromAmino(object.value);
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
    return {};
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
    return {
      asset: object.asset,
      amount: object.amount,
      depth: object.depth
    };
  },
  toAmino(message: AssetAmountDepth): AssetAmountDepthAmino {
    const obj: any = {};
    obj.asset = message.asset;
    obj.amount = message.amount;
    obj.depth = message.depth;
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
    return {
      poolId: BigInt(object.poolId),
      amountDepthInfo: Array.isArray(object?.amountDepthInfo) ? object.amountDepthInfo.map((e: any) => AssetAmountDepth.fromAmino(e)) : []
    };
  },
  toAmino(message: ExternalLiquidity): ExternalLiquidityAmino {
    const obj: any = {};
    obj.poolId = message.poolId ? message.poolId.toString() : undefined;
    if (message.amountDepthInfo) {
      obj.amountDepthInfo = message.amountDepthInfo.map(e => e ? AssetAmountDepth.toAmino(e) : undefined);
    } else {
      obj.amountDepthInfo = [];
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