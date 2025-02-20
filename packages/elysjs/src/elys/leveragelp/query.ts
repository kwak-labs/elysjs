//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { QueryPosition, QueryPositionAmino, QueryPositionSDKType, PositionAndInterest, PositionAndInterestAmino, PositionAndInterestSDKType } from "./types";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** ParamsRequest is request type for the Query/Params RPC method. */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/elys.leveragelp.ParamsRequest";
  value: Uint8Array;
}
/** ParamsRequest is request type for the Query/Params RPC method. */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "/elys.leveragelp.ParamsRequest";
  value: ParamsRequestAmino;
}
/** ParamsRequest is request type for the Query/Params RPC method. */
export interface ParamsRequestSDKType {}
/** ParamsResponse is response type for the Query/Params RPC method. */
export interface ParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/elys.leveragelp.ParamsResponse";
  value: Uint8Array;
}
/** ParamsResponse is response type for the Query/Params RPC method. */
export interface ParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "/elys.leveragelp.ParamsResponse";
  value: ParamsResponseAmino;
}
/** ParamsResponse is response type for the Query/Params RPC method. */
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface PositionsRequest {
  pagination?: PageRequest;
}
export interface PositionsRequestProtoMsg {
  typeUrl: "/elys.leveragelp.PositionsRequest";
  value: Uint8Array;
}
export interface PositionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface PositionsRequestAminoMsg {
  type: "/elys.leveragelp.PositionsRequest";
  value: PositionsRequestAmino;
}
export interface PositionsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface PositionsResponse {
  positions: QueryPosition[];
  pagination?: PageResponse;
}
export interface PositionsResponseProtoMsg {
  typeUrl: "/elys.leveragelp.PositionsResponse";
  value: Uint8Array;
}
export interface PositionsResponseAmino {
  positions?: QueryPositionAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsResponseAminoMsg {
  type: "/elys.leveragelp.PositionsResponse";
  value: PositionsResponseAmino;
}
export interface PositionsResponseSDKType {
  positions: QueryPositionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface PositionsByPoolRequest {
  ammPoolId: bigint;
  pagination?: PageRequest;
}
export interface PositionsByPoolRequestProtoMsg {
  typeUrl: "/elys.leveragelp.PositionsByPoolRequest";
  value: Uint8Array;
}
export interface PositionsByPoolRequestAmino {
  amm_pool_id?: string;
  pagination?: PageRequestAmino;
}
export interface PositionsByPoolRequestAminoMsg {
  type: "/elys.leveragelp.PositionsByPoolRequest";
  value: PositionsByPoolRequestAmino;
}
export interface PositionsByPoolRequestSDKType {
  amm_pool_id: bigint;
  pagination?: PageRequestSDKType;
}
export interface PositionsByPoolResponse {
  positions: QueryPosition[];
  pagination?: PageResponse;
}
export interface PositionsByPoolResponseProtoMsg {
  typeUrl: "/elys.leveragelp.PositionsByPoolResponse";
  value: Uint8Array;
}
export interface PositionsByPoolResponseAmino {
  positions?: QueryPositionAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsByPoolResponseAminoMsg {
  type: "/elys.leveragelp.PositionsByPoolResponse";
  value: PositionsByPoolResponseAmino;
}
export interface PositionsByPoolResponseSDKType {
  positions: QueryPositionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface StatusRequest {}
export interface StatusRequestProtoMsg {
  typeUrl: "/elys.leveragelp.StatusRequest";
  value: Uint8Array;
}
export interface StatusRequestAmino {}
export interface StatusRequestAminoMsg {
  type: "/elys.leveragelp.StatusRequest";
  value: StatusRequestAmino;
}
export interface StatusRequestSDKType {}
export interface StatusResponse {
  openPositionCount: bigint;
  lifetimePositionCount: bigint;
}
export interface StatusResponseProtoMsg {
  typeUrl: "/elys.leveragelp.StatusResponse";
  value: Uint8Array;
}
export interface StatusResponseAmino {
  open_position_count?: string;
  lifetime_position_count?: string;
}
export interface StatusResponseAminoMsg {
  type: "/elys.leveragelp.StatusResponse";
  value: StatusResponseAmino;
}
export interface StatusResponseSDKType {
  open_position_count: bigint;
  lifetime_position_count: bigint;
}
export interface PositionsForAddressRequest {
  address: string;
  pagination?: PageRequest;
}
export interface PositionsForAddressRequestProtoMsg {
  typeUrl: "/elys.leveragelp.PositionsForAddressRequest";
  value: Uint8Array;
}
export interface PositionsForAddressRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface PositionsForAddressRequestAminoMsg {
  type: "/elys.leveragelp.PositionsForAddressRequest";
  value: PositionsForAddressRequestAmino;
}
export interface PositionsForAddressRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface PositionsForAddressResponse {
  positions: PositionAndInterest[];
  pagination?: PageResponse;
}
export interface PositionsForAddressResponseProtoMsg {
  typeUrl: "/elys.leveragelp.PositionsForAddressResponse";
  value: Uint8Array;
}
export interface PositionsForAddressResponseAmino {
  positions?: PositionAndInterestAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsForAddressResponseAminoMsg {
  type: "/elys.leveragelp.PositionsForAddressResponse";
  value: PositionsForAddressResponseAmino;
}
export interface PositionsForAddressResponseSDKType {
  positions: PositionAndInterestSDKType[];
  pagination?: PageResponseSDKType;
}
export interface WhitelistRequest {
  pagination?: PageRequest;
}
export interface WhitelistRequestProtoMsg {
  typeUrl: "/elys.leveragelp.WhitelistRequest";
  value: Uint8Array;
}
export interface WhitelistRequestAmino {
  pagination?: PageRequestAmino;
}
export interface WhitelistRequestAminoMsg {
  type: "/elys.leveragelp.WhitelistRequest";
  value: WhitelistRequestAmino;
}
export interface WhitelistRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface WhitelistResponse {
  whitelist: string[];
  pagination?: PageResponse;
}
export interface WhitelistResponseProtoMsg {
  typeUrl: "/elys.leveragelp.WhitelistResponse";
  value: Uint8Array;
}
export interface WhitelistResponseAmino {
  whitelist?: string[];
  pagination?: PageResponseAmino;
}
export interface WhitelistResponseAminoMsg {
  type: "/elys.leveragelp.WhitelistResponse";
  value: WhitelistResponseAmino;
}
export interface WhitelistResponseSDKType {
  whitelist: string[];
  pagination?: PageResponseSDKType;
}
export interface IsWhitelistedRequest {
  address: string;
}
export interface IsWhitelistedRequestProtoMsg {
  typeUrl: "/elys.leveragelp.IsWhitelistedRequest";
  value: Uint8Array;
}
export interface IsWhitelistedRequestAmino {
  address?: string;
}
export interface IsWhitelistedRequestAminoMsg {
  type: "/elys.leveragelp.IsWhitelistedRequest";
  value: IsWhitelistedRequestAmino;
}
export interface IsWhitelistedRequestSDKType {
  address: string;
}
export interface IsWhitelistedResponse {
  address: string;
  isWhitelisted: boolean;
}
export interface IsWhitelistedResponseProtoMsg {
  typeUrl: "/elys.leveragelp.IsWhitelistedResponse";
  value: Uint8Array;
}
export interface IsWhitelistedResponseAmino {
  address?: string;
  is_whitelisted?: boolean;
}
export interface IsWhitelistedResponseAminoMsg {
  type: "/elys.leveragelp.IsWhitelistedResponse";
  value: IsWhitelistedResponseAmino;
}
export interface IsWhitelistedResponseSDKType {
  address: string;
  is_whitelisted: boolean;
}
export interface QueryGetPoolRequest {
  index: bigint;
}
export interface QueryGetPoolRequestProtoMsg {
  typeUrl: "/elys.leveragelp.QueryGetPoolRequest";
  value: Uint8Array;
}
export interface QueryGetPoolRequestAmino {
  index?: string;
}
export interface QueryGetPoolRequestAminoMsg {
  type: "/elys.leveragelp.QueryGetPoolRequest";
  value: QueryGetPoolRequestAmino;
}
export interface QueryGetPoolRequestSDKType {
  index: bigint;
}
export interface QueryGetPoolResponse {
  pool: Pool;
}
export interface QueryGetPoolResponseProtoMsg {
  typeUrl: "/elys.leveragelp.QueryGetPoolResponse";
  value: Uint8Array;
}
export interface QueryGetPoolResponseAmino {
  pool?: PoolAmino;
}
export interface QueryGetPoolResponseAminoMsg {
  type: "/elys.leveragelp.QueryGetPoolResponse";
  value: QueryGetPoolResponseAmino;
}
export interface QueryGetPoolResponseSDKType {
  pool: PoolSDKType;
}
export interface QueryAllPoolRequest {
  pagination?: PageRequest;
}
export interface QueryAllPoolRequestProtoMsg {
  typeUrl: "/elys.leveragelp.QueryAllPoolRequest";
  value: Uint8Array;
}
export interface QueryAllPoolRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPoolRequestAminoMsg {
  type: "/elys.leveragelp.QueryAllPoolRequest";
  value: QueryAllPoolRequestAmino;
}
export interface QueryAllPoolRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPoolResponse {
  pool: Pool[];
  pagination?: PageResponse;
}
export interface QueryAllPoolResponseProtoMsg {
  typeUrl: "/elys.leveragelp.QueryAllPoolResponse";
  value: Uint8Array;
}
export interface QueryAllPoolResponseAmino {
  pool?: PoolAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPoolResponseAminoMsg {
  type: "/elys.leveragelp.QueryAllPoolResponse";
  value: QueryAllPoolResponseAmino;
}
export interface QueryAllPoolResponseSDKType {
  pool: PoolSDKType[];
  pagination?: PageResponseSDKType;
}
export interface PositionResponse {
  position?: QueryPosition;
  lockedLpToken: string;
}
export interface PositionResponseProtoMsg {
  typeUrl: "/elys.leveragelp.PositionResponse";
  value: Uint8Array;
}
export interface PositionResponseAmino {
  position?: QueryPositionAmino;
  locked_lp_token?: string;
}
export interface PositionResponseAminoMsg {
  type: "/elys.leveragelp.PositionResponse";
  value: PositionResponseAmino;
}
export interface PositionResponseSDKType {
  position?: QueryPositionSDKType;
  locked_lp_token: string;
}
export interface QueryLiquidationPriceRequest {
  address: string;
  positionId: bigint;
}
export interface QueryLiquidationPriceRequestProtoMsg {
  typeUrl: "/elys.leveragelp.QueryLiquidationPriceRequest";
  value: Uint8Array;
}
export interface QueryLiquidationPriceRequestAmino {
  address?: string;
  position_id?: string;
}
export interface QueryLiquidationPriceRequestAminoMsg {
  type: "/elys.leveragelp.QueryLiquidationPriceRequest";
  value: QueryLiquidationPriceRequestAmino;
}
export interface QueryLiquidationPriceRequestSDKType {
  address: string;
  position_id: bigint;
}
export interface QueryLiquidationPriceResponse {
  price: string;
}
export interface QueryLiquidationPriceResponseProtoMsg {
  typeUrl: "/elys.leveragelp.QueryLiquidationPriceResponse";
  value: Uint8Array;
}
export interface QueryLiquidationPriceResponseAmino {
  price?: string;
}
export interface QueryLiquidationPriceResponseAminoMsg {
  type: "/elys.leveragelp.QueryLiquidationPriceResponse";
  value: QueryLiquidationPriceResponseAmino;
}
export interface QueryLiquidationPriceResponseSDKType {
  price: string;
}
export interface QueryOpenEstRequest {
  collateralAsset: string;
  collateralAmount: string;
  ammPoolId: bigint;
  leverage: string;
}
export interface QueryOpenEstRequestProtoMsg {
  typeUrl: "/elys.leveragelp.QueryOpenEstRequest";
  value: Uint8Array;
}
export interface QueryOpenEstRequestAmino {
  collateral_asset?: string;
  collateral_amount?: string;
  amm_pool_id?: string;
  leverage?: string;
}
export interface QueryOpenEstRequestAminoMsg {
  type: "/elys.leveragelp.QueryOpenEstRequest";
  value: QueryOpenEstRequestAmino;
}
export interface QueryOpenEstRequestSDKType {
  collateral_asset: string;
  collateral_amount: string;
  amm_pool_id: bigint;
  leverage: string;
}
export interface QueryOpenEstResponse {
  positionSize: string;
  weightBalanceRatio: string;
  borrowFee: string;
}
export interface QueryOpenEstResponseProtoMsg {
  typeUrl: "/elys.leveragelp.QueryOpenEstResponse";
  value: Uint8Array;
}
export interface QueryOpenEstResponseAmino {
  position_size?: string;
  weight_balance_ratio?: string;
  borrow_fee?: string;
}
export interface QueryOpenEstResponseAminoMsg {
  type: "/elys.leveragelp.QueryOpenEstResponse";
  value: QueryOpenEstResponseAmino;
}
export interface QueryOpenEstResponseSDKType {
  position_size: string;
  weight_balance_ratio: string;
  borrow_fee: string;
}
export interface QueryCloseEstRequest {
  owner: string;
  id: bigint;
  lpAmount: string;
}
export interface QueryCloseEstRequestProtoMsg {
  typeUrl: "/elys.leveragelp.QueryCloseEstRequest";
  value: Uint8Array;
}
export interface QueryCloseEstRequestAmino {
  owner?: string;
  id?: string;
  lp_amount?: string;
}
export interface QueryCloseEstRequestAminoMsg {
  type: "/elys.leveragelp.QueryCloseEstRequest";
  value: QueryCloseEstRequestAmino;
}
export interface QueryCloseEstRequestSDKType {
  owner: string;
  id: bigint;
  lp_amount: string;
}
export interface QueryRewardsRequest {
  address: string;
  ids: bigint[];
}
export interface QueryRewardsRequestProtoMsg {
  typeUrl: "/elys.leveragelp.QueryRewardsRequest";
  value: Uint8Array;
}
export interface QueryRewardsRequestAmino {
  address?: string;
  ids?: string[];
}
export interface QueryRewardsRequestAminoMsg {
  type: "/elys.leveragelp.QueryRewardsRequest";
  value: QueryRewardsRequestAmino;
}
export interface QueryRewardsRequestSDKType {
  address: string;
  ids: bigint[];
}
export interface RewardInfo {
  positionId: bigint;
  reward: Coin[];
}
export interface RewardInfoProtoMsg {
  typeUrl: "/elys.leveragelp.RewardInfo";
  value: Uint8Array;
}
export interface RewardInfoAmino {
  position_id?: string;
  reward?: CoinAmino[];
}
export interface RewardInfoAminoMsg {
  type: "/elys.leveragelp.RewardInfo";
  value: RewardInfoAmino;
}
export interface RewardInfoSDKType {
  position_id: bigint;
  reward: CoinSDKType[];
}
export interface QueryRewardsResponse {
  rewards: RewardInfo[];
  totalRewards: Coin[];
}
export interface QueryRewardsResponseProtoMsg {
  typeUrl: "/elys.leveragelp.QueryRewardsResponse";
  value: Uint8Array;
}
export interface QueryRewardsResponseAmino {
  rewards?: RewardInfoAmino[];
  total_rewards?: CoinAmino[];
}
export interface QueryRewardsResponseAminoMsg {
  type: "/elys.leveragelp.QueryRewardsResponse";
  value: QueryRewardsResponseAmino;
}
export interface QueryRewardsResponseSDKType {
  rewards: RewardInfoSDKType[];
  total_rewards: CoinSDKType[];
}
export interface QueryCloseEstResponse {
  repayAmount: string;
  finalClosingRatio: string;
  closingLpAmount: string;
  coinsToAmm: Coin[];
  userReturnTokens: Coin[];
  exitWeightFee: string;
  weightBreakingFee: string;
  exitSlippageFee: string;
  exitSwapFee: string;
}
export interface QueryCloseEstResponseProtoMsg {
  typeUrl: "/elys.leveragelp.QueryCloseEstResponse";
  value: Uint8Array;
}
export interface QueryCloseEstResponseAmino {
  repay_amount?: string;
  final_closing_ratio?: string;
  closing_lp_amount?: string;
  coins_to_amm?: CoinAmino[];
  user_return_tokens?: CoinAmino[];
  exit_weight_fee?: string;
  weight_breaking_fee?: string;
  exit_slippage_fee?: string;
  exit_swap_fee?: string;
}
export interface QueryCloseEstResponseAminoMsg {
  type: "/elys.leveragelp.QueryCloseEstResponse";
  value: QueryCloseEstResponseAmino;
}
export interface QueryCloseEstResponseSDKType {
  repay_amount: string;
  final_closing_ratio: string;
  closing_lp_amount: string;
  coins_to_amm: CoinSDKType[];
  user_return_tokens: CoinSDKType[];
  exit_weight_fee: string;
  weight_breaking_fee: string;
  exit_slippage_fee: string;
  exit_swap_fee: string;
}
export interface QueryCommittedTokensLockedRequest {
  address: string;
}
export interface QueryCommittedTokensLockedRequestProtoMsg {
  typeUrl: "/elys.leveragelp.QueryCommittedTokensLockedRequest";
  value: Uint8Array;
}
export interface QueryCommittedTokensLockedRequestAmino {
  address?: string;
}
export interface QueryCommittedTokensLockedRequestAminoMsg {
  type: "/elys.leveragelp.QueryCommittedTokensLockedRequest";
  value: QueryCommittedTokensLockedRequestAmino;
}
export interface QueryCommittedTokensLockedRequestSDKType {
  address: string;
}
export interface QueryCommittedTokensLockedResponse {
  address: string;
  lockedCommitted: Coin[];
  totalCommitted: Coin[];
}
export interface QueryCommittedTokensLockedResponseProtoMsg {
  typeUrl: "/elys.leveragelp.QueryCommittedTokensLockedResponse";
  value: Uint8Array;
}
export interface QueryCommittedTokensLockedResponseAmino {
  address?: string;
  locked_committed?: CoinAmino[];
  total_committed?: CoinAmino[];
}
export interface QueryCommittedTokensLockedResponseAminoMsg {
  type: "/elys.leveragelp.QueryCommittedTokensLockedResponse";
  value: QueryCommittedTokensLockedResponseAmino;
}
export interface QueryCommittedTokensLockedResponseSDKType {
  address: string;
  locked_committed: CoinSDKType[];
  total_committed: CoinSDKType[];
}
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/elys.leveragelp.ParamsRequest",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
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
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/elys.leveragelp.ParamsResponse",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};
function createBasePositionsRequest(): PositionsRequest {
  return {
    pagination: undefined
  };
}
export const PositionsRequest = {
  typeUrl: "/elys.leveragelp.PositionsRequest",
  encode(message: PositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionsRequest>): PositionsRequest {
    const message = createBasePositionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsRequestAmino): PositionsRequest {
    const message = createBasePositionsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsRequest): PositionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsRequestAminoMsg): PositionsRequest {
    return PositionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsRequestProtoMsg): PositionsRequest {
    return PositionsRequest.decode(message.value);
  },
  toProto(message: PositionsRequest): Uint8Array {
    return PositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionsRequest): PositionsRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionsRequest",
      value: PositionsRequest.encode(message).finish()
    };
  }
};
function createBasePositionsResponse(): PositionsResponse {
  return {
    positions: [],
    pagination: undefined
  };
}
export const PositionsResponse = {
  typeUrl: "/elys.leveragelp.PositionsResponse",
  encode(message: PositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.positions) {
      QueryPosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positions.push(QueryPosition.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionsResponse>): PositionsResponse {
    const message = createBasePositionsResponse();
    message.positions = object.positions?.map(e => QueryPosition.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsResponseAmino): PositionsResponse {
    const message = createBasePositionsResponse();
    message.positions = object.positions?.map(e => QueryPosition.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsResponse): PositionsResponseAmino {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? QueryPosition.toAmino(e) : undefined);
    } else {
      obj.positions = message.positions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsResponseAminoMsg): PositionsResponse {
    return PositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsResponseProtoMsg): PositionsResponse {
    return PositionsResponse.decode(message.value);
  },
  toProto(message: PositionsResponse): Uint8Array {
    return PositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionsResponse): PositionsResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionsResponse",
      value: PositionsResponse.encode(message).finish()
    };
  }
};
function createBasePositionsByPoolRequest(): PositionsByPoolRequest {
  return {
    ammPoolId: BigInt(0),
    pagination: undefined
  };
}
export const PositionsByPoolRequest = {
  typeUrl: "/elys.leveragelp.PositionsByPoolRequest",
  encode(message: PositionsByPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.ammPoolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsByPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsByPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ammPoolId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionsByPoolRequest>): PositionsByPoolRequest {
    const message = createBasePositionsByPoolRequest();
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsByPoolRequestAmino): PositionsByPoolRequest {
    const message = createBasePositionsByPoolRequest();
    if (object.amm_pool_id !== undefined && object.amm_pool_id !== null) {
      message.ammPoolId = BigInt(object.amm_pool_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsByPoolRequest): PositionsByPoolRequestAmino {
    const obj: any = {};
    obj.amm_pool_id = message.ammPoolId !== BigInt(0) ? message.ammPoolId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsByPoolRequestAminoMsg): PositionsByPoolRequest {
    return PositionsByPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsByPoolRequestProtoMsg): PositionsByPoolRequest {
    return PositionsByPoolRequest.decode(message.value);
  },
  toProto(message: PositionsByPoolRequest): Uint8Array {
    return PositionsByPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionsByPoolRequest): PositionsByPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionsByPoolRequest",
      value: PositionsByPoolRequest.encode(message).finish()
    };
  }
};
function createBasePositionsByPoolResponse(): PositionsByPoolResponse {
  return {
    positions: [],
    pagination: undefined
  };
}
export const PositionsByPoolResponse = {
  typeUrl: "/elys.leveragelp.PositionsByPoolResponse",
  encode(message: PositionsByPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.positions) {
      QueryPosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsByPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsByPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positions.push(QueryPosition.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionsByPoolResponse>): PositionsByPoolResponse {
    const message = createBasePositionsByPoolResponse();
    message.positions = object.positions?.map(e => QueryPosition.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsByPoolResponseAmino): PositionsByPoolResponse {
    const message = createBasePositionsByPoolResponse();
    message.positions = object.positions?.map(e => QueryPosition.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsByPoolResponse): PositionsByPoolResponseAmino {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? QueryPosition.toAmino(e) : undefined);
    } else {
      obj.positions = message.positions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsByPoolResponseAminoMsg): PositionsByPoolResponse {
    return PositionsByPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsByPoolResponseProtoMsg): PositionsByPoolResponse {
    return PositionsByPoolResponse.decode(message.value);
  },
  toProto(message: PositionsByPoolResponse): Uint8Array {
    return PositionsByPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionsByPoolResponse): PositionsByPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionsByPoolResponse",
      value: PositionsByPoolResponse.encode(message).finish()
    };
  }
};
function createBaseStatusRequest(): StatusRequest {
  return {};
}
export const StatusRequest = {
  typeUrl: "/elys.leveragelp.StatusRequest",
  encode(_: StatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();
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
  fromPartial(_: Partial<StatusRequest>): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
  fromAmino(_: StatusRequestAmino): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
  toAmino(_: StatusRequest): StatusRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: StatusRequestAminoMsg): StatusRequest {
    return StatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusRequestProtoMsg): StatusRequest {
    return StatusRequest.decode(message.value);
  },
  toProto(message: StatusRequest): Uint8Array {
    return StatusRequest.encode(message).finish();
  },
  toProtoMsg(message: StatusRequest): StatusRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.StatusRequest",
      value: StatusRequest.encode(message).finish()
    };
  }
};
function createBaseStatusResponse(): StatusResponse {
  return {
    openPositionCount: BigInt(0),
    lifetimePositionCount: BigInt(0)
  };
}
export const StatusResponse = {
  typeUrl: "/elys.leveragelp.StatusResponse",
  encode(message: StatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.openPositionCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.openPositionCount);
    }
    if (message.lifetimePositionCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.lifetimePositionCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.openPositionCount = reader.uint64();
          break;
        case 2:
          message.lifetimePositionCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StatusResponse>): StatusResponse {
    const message = createBaseStatusResponse();
    message.openPositionCount = object.openPositionCount !== undefined && object.openPositionCount !== null ? BigInt(object.openPositionCount.toString()) : BigInt(0);
    message.lifetimePositionCount = object.lifetimePositionCount !== undefined && object.lifetimePositionCount !== null ? BigInt(object.lifetimePositionCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StatusResponseAmino): StatusResponse {
    const message = createBaseStatusResponse();
    if (object.open_position_count !== undefined && object.open_position_count !== null) {
      message.openPositionCount = BigInt(object.open_position_count);
    }
    if (object.lifetime_position_count !== undefined && object.lifetime_position_count !== null) {
      message.lifetimePositionCount = BigInt(object.lifetime_position_count);
    }
    return message;
  },
  toAmino(message: StatusResponse): StatusResponseAmino {
    const obj: any = {};
    obj.open_position_count = message.openPositionCount !== BigInt(0) ? message.openPositionCount?.toString() : undefined;
    obj.lifetime_position_count = message.lifetimePositionCount !== BigInt(0) ? message.lifetimePositionCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StatusResponseAminoMsg): StatusResponse {
    return StatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusResponseProtoMsg): StatusResponse {
    return StatusResponse.decode(message.value);
  },
  toProto(message: StatusResponse): Uint8Array {
    return StatusResponse.encode(message).finish();
  },
  toProtoMsg(message: StatusResponse): StatusResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.StatusResponse",
      value: StatusResponse.encode(message).finish()
    };
  }
};
function createBasePositionsForAddressRequest(): PositionsForAddressRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const PositionsForAddressRequest = {
  typeUrl: "/elys.leveragelp.PositionsForAddressRequest",
  encode(message: PositionsForAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsForAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsForAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionsForAddressRequest>): PositionsForAddressRequest {
    const message = createBasePositionsForAddressRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsForAddressRequestAmino): PositionsForAddressRequest {
    const message = createBasePositionsForAddressRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsForAddressRequest): PositionsForAddressRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsForAddressRequestAminoMsg): PositionsForAddressRequest {
    return PositionsForAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsForAddressRequestProtoMsg): PositionsForAddressRequest {
    return PositionsForAddressRequest.decode(message.value);
  },
  toProto(message: PositionsForAddressRequest): Uint8Array {
    return PositionsForAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionsForAddressRequest): PositionsForAddressRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionsForAddressRequest",
      value: PositionsForAddressRequest.encode(message).finish()
    };
  }
};
function createBasePositionsForAddressResponse(): PositionsForAddressResponse {
  return {
    positions: [],
    pagination: undefined
  };
}
export const PositionsForAddressResponse = {
  typeUrl: "/elys.leveragelp.PositionsForAddressResponse",
  encode(message: PositionsForAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.positions) {
      PositionAndInterest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsForAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsForAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positions.push(PositionAndInterest.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionsForAddressResponse>): PositionsForAddressResponse {
    const message = createBasePositionsForAddressResponse();
    message.positions = object.positions?.map(e => PositionAndInterest.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsForAddressResponseAmino): PositionsForAddressResponse {
    const message = createBasePositionsForAddressResponse();
    message.positions = object.positions?.map(e => PositionAndInterest.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsForAddressResponse): PositionsForAddressResponseAmino {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? PositionAndInterest.toAmino(e) : undefined);
    } else {
      obj.positions = message.positions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsForAddressResponseAminoMsg): PositionsForAddressResponse {
    return PositionsForAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsForAddressResponseProtoMsg): PositionsForAddressResponse {
    return PositionsForAddressResponse.decode(message.value);
  },
  toProto(message: PositionsForAddressResponse): Uint8Array {
    return PositionsForAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionsForAddressResponse): PositionsForAddressResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionsForAddressResponse",
      value: PositionsForAddressResponse.encode(message).finish()
    };
  }
};
function createBaseWhitelistRequest(): WhitelistRequest {
  return {
    pagination: undefined
  };
}
export const WhitelistRequest = {
  typeUrl: "/elys.leveragelp.WhitelistRequest",
  encode(message: WhitelistRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WhitelistRequest>): WhitelistRequest {
    const message = createBaseWhitelistRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: WhitelistRequestAmino): WhitelistRequest {
    const message = createBaseWhitelistRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: WhitelistRequest): WhitelistRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: WhitelistRequestAminoMsg): WhitelistRequest {
    return WhitelistRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: WhitelistRequestProtoMsg): WhitelistRequest {
    return WhitelistRequest.decode(message.value);
  },
  toProto(message: WhitelistRequest): Uint8Array {
    return WhitelistRequest.encode(message).finish();
  },
  toProtoMsg(message: WhitelistRequest): WhitelistRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.WhitelistRequest",
      value: WhitelistRequest.encode(message).finish()
    };
  }
};
function createBaseWhitelistResponse(): WhitelistResponse {
  return {
    whitelist: [],
    pagination: undefined
  };
}
export const WhitelistResponse = {
  typeUrl: "/elys.leveragelp.WhitelistResponse",
  encode(message: WhitelistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.whitelist) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelist.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WhitelistResponse>): WhitelistResponse {
    const message = createBaseWhitelistResponse();
    message.whitelist = object.whitelist?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: WhitelistResponseAmino): WhitelistResponse {
    const message = createBaseWhitelistResponse();
    message.whitelist = object.whitelist?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: WhitelistResponse): WhitelistResponseAmino {
    const obj: any = {};
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map(e => e);
    } else {
      obj.whitelist = message.whitelist;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: WhitelistResponseAminoMsg): WhitelistResponse {
    return WhitelistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: WhitelistResponseProtoMsg): WhitelistResponse {
    return WhitelistResponse.decode(message.value);
  },
  toProto(message: WhitelistResponse): Uint8Array {
    return WhitelistResponse.encode(message).finish();
  },
  toProtoMsg(message: WhitelistResponse): WhitelistResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.WhitelistResponse",
      value: WhitelistResponse.encode(message).finish()
    };
  }
};
function createBaseIsWhitelistedRequest(): IsWhitelistedRequest {
  return {
    address: ""
  };
}
export const IsWhitelistedRequest = {
  typeUrl: "/elys.leveragelp.IsWhitelistedRequest",
  encode(message: IsWhitelistedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IsWhitelistedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsWhitelistedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IsWhitelistedRequest>): IsWhitelistedRequest {
    const message = createBaseIsWhitelistedRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: IsWhitelistedRequestAmino): IsWhitelistedRequest {
    const message = createBaseIsWhitelistedRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: IsWhitelistedRequest): IsWhitelistedRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: IsWhitelistedRequestAminoMsg): IsWhitelistedRequest {
    return IsWhitelistedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: IsWhitelistedRequestProtoMsg): IsWhitelistedRequest {
    return IsWhitelistedRequest.decode(message.value);
  },
  toProto(message: IsWhitelistedRequest): Uint8Array {
    return IsWhitelistedRequest.encode(message).finish();
  },
  toProtoMsg(message: IsWhitelistedRequest): IsWhitelistedRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.IsWhitelistedRequest",
      value: IsWhitelistedRequest.encode(message).finish()
    };
  }
};
function createBaseIsWhitelistedResponse(): IsWhitelistedResponse {
  return {
    address: "",
    isWhitelisted: false
  };
}
export const IsWhitelistedResponse = {
  typeUrl: "/elys.leveragelp.IsWhitelistedResponse",
  encode(message: IsWhitelistedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.isWhitelisted === true) {
      writer.uint32(16).bool(message.isWhitelisted);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IsWhitelistedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsWhitelistedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.isWhitelisted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IsWhitelistedResponse>): IsWhitelistedResponse {
    const message = createBaseIsWhitelistedResponse();
    message.address = object.address ?? "";
    message.isWhitelisted = object.isWhitelisted ?? false;
    return message;
  },
  fromAmino(object: IsWhitelistedResponseAmino): IsWhitelistedResponse {
    const message = createBaseIsWhitelistedResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.is_whitelisted !== undefined && object.is_whitelisted !== null) {
      message.isWhitelisted = object.is_whitelisted;
    }
    return message;
  },
  toAmino(message: IsWhitelistedResponse): IsWhitelistedResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.is_whitelisted = message.isWhitelisted === false ? undefined : message.isWhitelisted;
    return obj;
  },
  fromAminoMsg(object: IsWhitelistedResponseAminoMsg): IsWhitelistedResponse {
    return IsWhitelistedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: IsWhitelistedResponseProtoMsg): IsWhitelistedResponse {
    return IsWhitelistedResponse.decode(message.value);
  },
  toProto(message: IsWhitelistedResponse): Uint8Array {
    return IsWhitelistedResponse.encode(message).finish();
  },
  toProtoMsg(message: IsWhitelistedResponse): IsWhitelistedResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.IsWhitelistedResponse",
      value: IsWhitelistedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return {
    index: BigInt(0)
  };
}
export const QueryGetPoolRequest = {
  typeUrl: "/elys.leveragelp.QueryGetPoolRequest",
  encode(message: QueryGetPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPoolRequestAmino): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    return message;
  },
  toAmino(message: QueryGetPoolRequest): QueryGetPoolRequestAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolRequestAminoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolRequestProtoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.decode(message.value);
  },
  toProto(message: QueryGetPoolRequest): Uint8Array {
    return QueryGetPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolRequest): QueryGetPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.QueryGetPoolRequest",
      value: QueryGetPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolResponse(): QueryGetPoolResponse {
  return {
    pool: Pool.fromPartial({})
  };
}
export const QueryGetPoolResponse = {
  typeUrl: "/elys.leveragelp.QueryGetPoolResponse",
  encode(message: QueryGetPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolResponseAmino): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryGetPoolResponse): QueryGetPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolResponseAminoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolResponseProtoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.decode(message.value);
  },
  toProto(message: QueryGetPoolResponse): Uint8Array {
    return QueryGetPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolResponse): QueryGetPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.QueryGetPoolResponse",
      value: QueryGetPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolRequest(): QueryAllPoolRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPoolRequest = {
  typeUrl: "/elys.leveragelp.QueryAllPoolRequest",
  encode(message: QueryAllPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllPoolRequest>): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolRequestAmino): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolRequest): QueryAllPoolRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolRequestAminoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolRequestProtoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.decode(message.value);
  },
  toProto(message: QueryAllPoolRequest): Uint8Array {
    return QueryAllPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolRequest): QueryAllPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.QueryAllPoolRequest",
      value: QueryAllPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolResponse(): QueryAllPoolResponse {
  return {
    pool: [],
    pagination: undefined
  };
}
export const QueryAllPoolResponse = {
  typeUrl: "/elys.leveragelp.QueryAllPoolResponse",
  encode(message: QueryAllPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(Pool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllPoolResponse>): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolResponseAmino): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolResponse): QueryAllPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pool = message.pool;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolResponseAminoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolResponseProtoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.decode(message.value);
  },
  toProto(message: QueryAllPoolResponse): Uint8Array {
    return QueryAllPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolResponse): QueryAllPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.QueryAllPoolResponse",
      value: QueryAllPoolResponse.encode(message).finish()
    };
  }
};
function createBasePositionResponse(): PositionResponse {
  return {
    position: undefined,
    lockedLpToken: ""
  };
}
export const PositionResponse = {
  typeUrl: "/elys.leveragelp.PositionResponse",
  encode(message: PositionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      QueryPosition.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.lockedLpToken !== "") {
      writer.uint32(18).string(message.lockedLpToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = QueryPosition.decode(reader, reader.uint32());
          break;
        case 2:
          message.lockedLpToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionResponse>): PositionResponse {
    const message = createBasePositionResponse();
    message.position = object.position !== undefined && object.position !== null ? QueryPosition.fromPartial(object.position) : undefined;
    message.lockedLpToken = object.lockedLpToken ?? "";
    return message;
  },
  fromAmino(object: PositionResponseAmino): PositionResponse {
    const message = createBasePositionResponse();
    if (object.position !== undefined && object.position !== null) {
      message.position = QueryPosition.fromAmino(object.position);
    }
    if (object.locked_lp_token !== undefined && object.locked_lp_token !== null) {
      message.lockedLpToken = object.locked_lp_token;
    }
    return message;
  },
  toAmino(message: PositionResponse): PositionResponseAmino {
    const obj: any = {};
    obj.position = message.position ? QueryPosition.toAmino(message.position) : undefined;
    obj.locked_lp_token = message.lockedLpToken === "" ? undefined : message.lockedLpToken;
    return obj;
  },
  fromAminoMsg(object: PositionResponseAminoMsg): PositionResponse {
    return PositionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionResponseProtoMsg): PositionResponse {
    return PositionResponse.decode(message.value);
  },
  toProto(message: PositionResponse): Uint8Array {
    return PositionResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionResponse): PositionResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionResponse",
      value: PositionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidationPriceRequest(): QueryLiquidationPriceRequest {
  return {
    address: "",
    positionId: BigInt(0)
  };
}
export const QueryLiquidationPriceRequest = {
  typeUrl: "/elys.leveragelp.QueryLiquidationPriceRequest",
  encode(message: QueryLiquidationPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.positionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.positionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidationPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidationPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.positionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLiquidationPriceRequest>): QueryLiquidationPriceRequest {
    const message = createBaseQueryLiquidationPriceRequest();
    message.address = object.address ?? "";
    message.positionId = object.positionId !== undefined && object.positionId !== null ? BigInt(object.positionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryLiquidationPriceRequestAmino): QueryLiquidationPriceRequest {
    const message = createBaseQueryLiquidationPriceRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.position_id !== undefined && object.position_id !== null) {
      message.positionId = BigInt(object.position_id);
    }
    return message;
  },
  toAmino(message: QueryLiquidationPriceRequest): QueryLiquidationPriceRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.position_id = message.positionId !== BigInt(0) ? message.positionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidationPriceRequestAminoMsg): QueryLiquidationPriceRequest {
    return QueryLiquidationPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidationPriceRequestProtoMsg): QueryLiquidationPriceRequest {
    return QueryLiquidationPriceRequest.decode(message.value);
  },
  toProto(message: QueryLiquidationPriceRequest): Uint8Array {
    return QueryLiquidationPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidationPriceRequest): QueryLiquidationPriceRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.QueryLiquidationPriceRequest",
      value: QueryLiquidationPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidationPriceResponse(): QueryLiquidationPriceResponse {
  return {
    price: ""
  };
}
export const QueryLiquidationPriceResponse = {
  typeUrl: "/elys.leveragelp.QueryLiquidationPriceResponse",
  encode(message: QueryLiquidationPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidationPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidationPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLiquidationPriceResponse>): QueryLiquidationPriceResponse {
    const message = createBaseQueryLiquidationPriceResponse();
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: QueryLiquidationPriceResponseAmino): QueryLiquidationPriceResponse {
    const message = createBaseQueryLiquidationPriceResponse();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: QueryLiquidationPriceResponse): QueryLiquidationPriceResponseAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : message.price;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidationPriceResponseAminoMsg): QueryLiquidationPriceResponse {
    return QueryLiquidationPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidationPriceResponseProtoMsg): QueryLiquidationPriceResponse {
    return QueryLiquidationPriceResponse.decode(message.value);
  },
  toProto(message: QueryLiquidationPriceResponse): Uint8Array {
    return QueryLiquidationPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidationPriceResponse): QueryLiquidationPriceResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.QueryLiquidationPriceResponse",
      value: QueryLiquidationPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOpenEstRequest(): QueryOpenEstRequest {
  return {
    collateralAsset: "",
    collateralAmount: "",
    ammPoolId: BigInt(0),
    leverage: ""
  };
}
export const QueryOpenEstRequest = {
  typeUrl: "/elys.leveragelp.QueryOpenEstRequest",
  encode(message: QueryOpenEstRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collateralAsset !== "") {
      writer.uint32(10).string(message.collateralAsset);
    }
    if (message.collateralAmount !== "") {
      writer.uint32(18).string(message.collateralAmount);
    }
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.ammPoolId);
    }
    if (message.leverage !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.leverage, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOpenEstRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOpenEstRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralAsset = reader.string();
          break;
        case 2:
          message.collateralAmount = reader.string();
          break;
        case 3:
          message.ammPoolId = reader.uint64();
          break;
        case 4:
          message.leverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOpenEstRequest>): QueryOpenEstRequest {
    const message = createBaseQueryOpenEstRequest();
    message.collateralAsset = object.collateralAsset ?? "";
    message.collateralAmount = object.collateralAmount ?? "";
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.leverage = object.leverage ?? "";
    return message;
  },
  fromAmino(object: QueryOpenEstRequestAmino): QueryOpenEstRequest {
    const message = createBaseQueryOpenEstRequest();
    if (object.collateral_asset !== undefined && object.collateral_asset !== null) {
      message.collateralAsset = object.collateral_asset;
    }
    if (object.collateral_amount !== undefined && object.collateral_amount !== null) {
      message.collateralAmount = object.collateral_amount;
    }
    if (object.amm_pool_id !== undefined && object.amm_pool_id !== null) {
      message.ammPoolId = BigInt(object.amm_pool_id);
    }
    if (object.leverage !== undefined && object.leverage !== null) {
      message.leverage = object.leverage;
    }
    return message;
  },
  toAmino(message: QueryOpenEstRequest): QueryOpenEstRequestAmino {
    const obj: any = {};
    obj.collateral_asset = message.collateralAsset === "" ? undefined : message.collateralAsset;
    obj.collateral_amount = message.collateralAmount === "" ? undefined : message.collateralAmount;
    obj.amm_pool_id = message.ammPoolId !== BigInt(0) ? message.ammPoolId?.toString() : undefined;
    obj.leverage = message.leverage === "" ? undefined : message.leverage;
    return obj;
  },
  fromAminoMsg(object: QueryOpenEstRequestAminoMsg): QueryOpenEstRequest {
    return QueryOpenEstRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOpenEstRequestProtoMsg): QueryOpenEstRequest {
    return QueryOpenEstRequest.decode(message.value);
  },
  toProto(message: QueryOpenEstRequest): Uint8Array {
    return QueryOpenEstRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOpenEstRequest): QueryOpenEstRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.QueryOpenEstRequest",
      value: QueryOpenEstRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOpenEstResponse(): QueryOpenEstResponse {
  return {
    positionSize: "",
    weightBalanceRatio: "",
    borrowFee: ""
  };
}
export const QueryOpenEstResponse = {
  typeUrl: "/elys.leveragelp.QueryOpenEstResponse",
  encode(message: QueryOpenEstResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionSize !== "") {
      writer.uint32(10).string(message.positionSize);
    }
    if (message.weightBalanceRatio !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weightBalanceRatio, 18).atomics);
    }
    if (message.borrowFee !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.borrowFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOpenEstResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOpenEstResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionSize = reader.string();
          break;
        case 2:
          message.weightBalanceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.borrowFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOpenEstResponse>): QueryOpenEstResponse {
    const message = createBaseQueryOpenEstResponse();
    message.positionSize = object.positionSize ?? "";
    message.weightBalanceRatio = object.weightBalanceRatio ?? "";
    message.borrowFee = object.borrowFee ?? "";
    return message;
  },
  fromAmino(object: QueryOpenEstResponseAmino): QueryOpenEstResponse {
    const message = createBaseQueryOpenEstResponse();
    if (object.position_size !== undefined && object.position_size !== null) {
      message.positionSize = object.position_size;
    }
    if (object.weight_balance_ratio !== undefined && object.weight_balance_ratio !== null) {
      message.weightBalanceRatio = object.weight_balance_ratio;
    }
    if (object.borrow_fee !== undefined && object.borrow_fee !== null) {
      message.borrowFee = object.borrow_fee;
    }
    return message;
  },
  toAmino(message: QueryOpenEstResponse): QueryOpenEstResponseAmino {
    const obj: any = {};
    obj.position_size = message.positionSize === "" ? undefined : message.positionSize;
    obj.weight_balance_ratio = message.weightBalanceRatio === "" ? undefined : message.weightBalanceRatio;
    obj.borrow_fee = message.borrowFee === "" ? undefined : message.borrowFee;
    return obj;
  },
  fromAminoMsg(object: QueryOpenEstResponseAminoMsg): QueryOpenEstResponse {
    return QueryOpenEstResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOpenEstResponseProtoMsg): QueryOpenEstResponse {
    return QueryOpenEstResponse.decode(message.value);
  },
  toProto(message: QueryOpenEstResponse): Uint8Array {
    return QueryOpenEstResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOpenEstResponse): QueryOpenEstResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.QueryOpenEstResponse",
      value: QueryOpenEstResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCloseEstRequest(): QueryCloseEstRequest {
  return {
    owner: "",
    id: BigInt(0),
    lpAmount: ""
  };
}
export const QueryCloseEstRequest = {
  typeUrl: "/elys.leveragelp.QueryCloseEstRequest",
  encode(message: QueryCloseEstRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.lpAmount !== "") {
      writer.uint32(26).string(message.lpAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCloseEstRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCloseEstRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.lpAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCloseEstRequest>): QueryCloseEstRequest {
    const message = createBaseQueryCloseEstRequest();
    message.owner = object.owner ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.lpAmount = object.lpAmount ?? "";
    return message;
  },
  fromAmino(object: QueryCloseEstRequestAmino): QueryCloseEstRequest {
    const message = createBaseQueryCloseEstRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.lp_amount !== undefined && object.lp_amount !== null) {
      message.lpAmount = object.lp_amount;
    }
    return message;
  },
  toAmino(message: QueryCloseEstRequest): QueryCloseEstRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.lp_amount = message.lpAmount === "" ? undefined : message.lpAmount;
    return obj;
  },
  fromAminoMsg(object: QueryCloseEstRequestAminoMsg): QueryCloseEstRequest {
    return QueryCloseEstRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCloseEstRequestProtoMsg): QueryCloseEstRequest {
    return QueryCloseEstRequest.decode(message.value);
  },
  toProto(message: QueryCloseEstRequest): Uint8Array {
    return QueryCloseEstRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCloseEstRequest): QueryCloseEstRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.QueryCloseEstRequest",
      value: QueryCloseEstRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRewardsRequest(): QueryRewardsRequest {
  return {
    address: "",
    ids: []
  };
}
export const QueryRewardsRequest = {
  typeUrl: "/elys.leveragelp.QueryRewardsRequest",
  encode(message: QueryRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    writer.uint32(18).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64());
            }
          } else {
            message.ids.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRewardsRequest>): QueryRewardsRequest {
    const message = createBaseQueryRewardsRequest();
    message.address = object.address ?? "";
    message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryRewardsRequestAmino): QueryRewardsRequest {
    const message = createBaseQueryRewardsRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.ids = object.ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryRewardsRequest): QueryRewardsRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.ids) {
      obj.ids = message.ids.map(e => e.toString());
    } else {
      obj.ids = message.ids;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRewardsRequestAminoMsg): QueryRewardsRequest {
    return QueryRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardsRequestProtoMsg): QueryRewardsRequest {
    return QueryRewardsRequest.decode(message.value);
  },
  toProto(message: QueryRewardsRequest): Uint8Array {
    return QueryRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardsRequest): QueryRewardsRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.QueryRewardsRequest",
      value: QueryRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseRewardInfo(): RewardInfo {
  return {
    positionId: BigInt(0),
    reward: []
  };
}
export const RewardInfo = {
  typeUrl: "/elys.leveragelp.RewardInfo",
  encode(message: RewardInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    for (const v of message.reward) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        case 2:
          message.reward.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RewardInfo>): RewardInfo {
    const message = createBaseRewardInfo();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? BigInt(object.positionId.toString()) : BigInt(0);
    message.reward = object.reward?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RewardInfoAmino): RewardInfo {
    const message = createBaseRewardInfo();
    if (object.position_id !== undefined && object.position_id !== null) {
      message.positionId = BigInt(object.position_id);
    }
    message.reward = object.reward?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RewardInfo): RewardInfoAmino {
    const obj: any = {};
    obj.position_id = message.positionId !== BigInt(0) ? message.positionId?.toString() : undefined;
    if (message.reward) {
      obj.reward = message.reward.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.reward = message.reward;
    }
    return obj;
  },
  fromAminoMsg(object: RewardInfoAminoMsg): RewardInfo {
    return RewardInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardInfoProtoMsg): RewardInfo {
    return RewardInfo.decode(message.value);
  },
  toProto(message: RewardInfo): Uint8Array {
    return RewardInfo.encode(message).finish();
  },
  toProtoMsg(message: RewardInfo): RewardInfoProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.RewardInfo",
      value: RewardInfo.encode(message).finish()
    };
  }
};
function createBaseQueryRewardsResponse(): QueryRewardsResponse {
  return {
    rewards: [],
    totalRewards: []
  };
}
export const QueryRewardsResponse = {
  typeUrl: "/elys.leveragelp.QueryRewardsResponse",
  encode(message: QueryRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      RewardInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.totalRewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(RewardInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalRewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRewardsResponse>): QueryRewardsResponse {
    const message = createBaseQueryRewardsResponse();
    message.rewards = object.rewards?.map(e => RewardInfo.fromPartial(e)) || [];
    message.totalRewards = object.totalRewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRewardsResponseAmino): QueryRewardsResponse {
    const message = createBaseQueryRewardsResponse();
    message.rewards = object.rewards?.map(e => RewardInfo.fromAmino(e)) || [];
    message.totalRewards = object.total_rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRewardsResponse): QueryRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? RewardInfo.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    if (message.totalRewards) {
      obj.total_rewards = message.totalRewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_rewards = message.totalRewards;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRewardsResponseAminoMsg): QueryRewardsResponse {
    return QueryRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardsResponseProtoMsg): QueryRewardsResponse {
    return QueryRewardsResponse.decode(message.value);
  },
  toProto(message: QueryRewardsResponse): Uint8Array {
    return QueryRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardsResponse): QueryRewardsResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.QueryRewardsResponse",
      value: QueryRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCloseEstResponse(): QueryCloseEstResponse {
  return {
    repayAmount: "",
    finalClosingRatio: "",
    closingLpAmount: "",
    coinsToAmm: [],
    userReturnTokens: [],
    exitWeightFee: "",
    weightBreakingFee: "",
    exitSlippageFee: "",
    exitSwapFee: ""
  };
}
export const QueryCloseEstResponse = {
  typeUrl: "/elys.leveragelp.QueryCloseEstResponse",
  encode(message: QueryCloseEstResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.repayAmount !== "") {
      writer.uint32(10).string(message.repayAmount);
    }
    if (message.finalClosingRatio !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.finalClosingRatio, 18).atomics);
    }
    if (message.closingLpAmount !== "") {
      writer.uint32(26).string(message.closingLpAmount);
    }
    for (const v of message.coinsToAmm) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.userReturnTokens) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.exitWeightFee !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.exitWeightFee, 18).atomics);
    }
    if (message.weightBreakingFee !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.weightBreakingFee, 18).atomics);
    }
    if (message.exitSlippageFee !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.exitSlippageFee, 18).atomics);
    }
    if (message.exitSwapFee !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.exitSwapFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCloseEstResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCloseEstResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.repayAmount = reader.string();
          break;
        case 2:
          message.finalClosingRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.closingLpAmount = reader.string();
          break;
        case 4:
          message.coinsToAmm.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.userReturnTokens.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.exitWeightFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.weightBreakingFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.exitSlippageFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.exitSwapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCloseEstResponse>): QueryCloseEstResponse {
    const message = createBaseQueryCloseEstResponse();
    message.repayAmount = object.repayAmount ?? "";
    message.finalClosingRatio = object.finalClosingRatio ?? "";
    message.closingLpAmount = object.closingLpAmount ?? "";
    message.coinsToAmm = object.coinsToAmm?.map(e => Coin.fromPartial(e)) || [];
    message.userReturnTokens = object.userReturnTokens?.map(e => Coin.fromPartial(e)) || [];
    message.exitWeightFee = object.exitWeightFee ?? "";
    message.weightBreakingFee = object.weightBreakingFee ?? "";
    message.exitSlippageFee = object.exitSlippageFee ?? "";
    message.exitSwapFee = object.exitSwapFee ?? "";
    return message;
  },
  fromAmino(object: QueryCloseEstResponseAmino): QueryCloseEstResponse {
    const message = createBaseQueryCloseEstResponse();
    if (object.repay_amount !== undefined && object.repay_amount !== null) {
      message.repayAmount = object.repay_amount;
    }
    if (object.final_closing_ratio !== undefined && object.final_closing_ratio !== null) {
      message.finalClosingRatio = object.final_closing_ratio;
    }
    if (object.closing_lp_amount !== undefined && object.closing_lp_amount !== null) {
      message.closingLpAmount = object.closing_lp_amount;
    }
    message.coinsToAmm = object.coins_to_amm?.map(e => Coin.fromAmino(e)) || [];
    message.userReturnTokens = object.user_return_tokens?.map(e => Coin.fromAmino(e)) || [];
    if (object.exit_weight_fee !== undefined && object.exit_weight_fee !== null) {
      message.exitWeightFee = object.exit_weight_fee;
    }
    if (object.weight_breaking_fee !== undefined && object.weight_breaking_fee !== null) {
      message.weightBreakingFee = object.weight_breaking_fee;
    }
    if (object.exit_slippage_fee !== undefined && object.exit_slippage_fee !== null) {
      message.exitSlippageFee = object.exit_slippage_fee;
    }
    if (object.exit_swap_fee !== undefined && object.exit_swap_fee !== null) {
      message.exitSwapFee = object.exit_swap_fee;
    }
    return message;
  },
  toAmino(message: QueryCloseEstResponse): QueryCloseEstResponseAmino {
    const obj: any = {};
    obj.repay_amount = message.repayAmount === "" ? undefined : message.repayAmount;
    obj.final_closing_ratio = message.finalClosingRatio === "" ? undefined : message.finalClosingRatio;
    obj.closing_lp_amount = message.closingLpAmount === "" ? undefined : message.closingLpAmount;
    if (message.coinsToAmm) {
      obj.coins_to_amm = message.coinsToAmm.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins_to_amm = message.coinsToAmm;
    }
    if (message.userReturnTokens) {
      obj.user_return_tokens = message.userReturnTokens.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.user_return_tokens = message.userReturnTokens;
    }
    obj.exit_weight_fee = message.exitWeightFee === "" ? undefined : message.exitWeightFee;
    obj.weight_breaking_fee = message.weightBreakingFee === "" ? undefined : message.weightBreakingFee;
    obj.exit_slippage_fee = message.exitSlippageFee === "" ? undefined : message.exitSlippageFee;
    obj.exit_swap_fee = message.exitSwapFee === "" ? undefined : message.exitSwapFee;
    return obj;
  },
  fromAminoMsg(object: QueryCloseEstResponseAminoMsg): QueryCloseEstResponse {
    return QueryCloseEstResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCloseEstResponseProtoMsg): QueryCloseEstResponse {
    return QueryCloseEstResponse.decode(message.value);
  },
  toProto(message: QueryCloseEstResponse): Uint8Array {
    return QueryCloseEstResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCloseEstResponse): QueryCloseEstResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.QueryCloseEstResponse",
      value: QueryCloseEstResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCommittedTokensLockedRequest(): QueryCommittedTokensLockedRequest {
  return {
    address: ""
  };
}
export const QueryCommittedTokensLockedRequest = {
  typeUrl: "/elys.leveragelp.QueryCommittedTokensLockedRequest",
  encode(message: QueryCommittedTokensLockedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommittedTokensLockedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommittedTokensLockedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCommittedTokensLockedRequest>): QueryCommittedTokensLockedRequest {
    const message = createBaseQueryCommittedTokensLockedRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryCommittedTokensLockedRequestAmino): QueryCommittedTokensLockedRequest {
    const message = createBaseQueryCommittedTokensLockedRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryCommittedTokensLockedRequest): QueryCommittedTokensLockedRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryCommittedTokensLockedRequestAminoMsg): QueryCommittedTokensLockedRequest {
    return QueryCommittedTokensLockedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommittedTokensLockedRequestProtoMsg): QueryCommittedTokensLockedRequest {
    return QueryCommittedTokensLockedRequest.decode(message.value);
  },
  toProto(message: QueryCommittedTokensLockedRequest): Uint8Array {
    return QueryCommittedTokensLockedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCommittedTokensLockedRequest): QueryCommittedTokensLockedRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.QueryCommittedTokensLockedRequest",
      value: QueryCommittedTokensLockedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCommittedTokensLockedResponse(): QueryCommittedTokensLockedResponse {
  return {
    address: "",
    lockedCommitted: [],
    totalCommitted: []
  };
}
export const QueryCommittedTokensLockedResponse = {
  typeUrl: "/elys.leveragelp.QueryCommittedTokensLockedResponse",
  encode(message: QueryCommittedTokensLockedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.lockedCommitted) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.totalCommitted) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommittedTokensLockedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommittedTokensLockedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.lockedCommitted.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalCommitted.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCommittedTokensLockedResponse>): QueryCommittedTokensLockedResponse {
    const message = createBaseQueryCommittedTokensLockedResponse();
    message.address = object.address ?? "";
    message.lockedCommitted = object.lockedCommitted?.map(e => Coin.fromPartial(e)) || [];
    message.totalCommitted = object.totalCommitted?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCommittedTokensLockedResponseAmino): QueryCommittedTokensLockedResponse {
    const message = createBaseQueryCommittedTokensLockedResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.lockedCommitted = object.locked_committed?.map(e => Coin.fromAmino(e)) || [];
    message.totalCommitted = object.total_committed?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCommittedTokensLockedResponse): QueryCommittedTokensLockedResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.lockedCommitted) {
      obj.locked_committed = message.lockedCommitted.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.locked_committed = message.lockedCommitted;
    }
    if (message.totalCommitted) {
      obj.total_committed = message.totalCommitted.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_committed = message.totalCommitted;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCommittedTokensLockedResponseAminoMsg): QueryCommittedTokensLockedResponse {
    return QueryCommittedTokensLockedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommittedTokensLockedResponseProtoMsg): QueryCommittedTokensLockedResponse {
    return QueryCommittedTokensLockedResponse.decode(message.value);
  },
  toProto(message: QueryCommittedTokensLockedResponse): Uint8Array {
    return QueryCommittedTokensLockedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCommittedTokensLockedResponse): QueryCommittedTokensLockedResponseProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.QueryCommittedTokensLockedResponse",
      value: QueryCommittedTokensLockedResponse.encode(message).finish()
    };
  }
};