//@ts-nocheck
import { EarnType } from "../commitment/params";
import { PageRequest, PageRequestAmino, PageRequestSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ExternalIncentive, ExternalIncentiveAmino, ExternalIncentiveSDKType } from "./external_incentive";
import { PoolInfo, PoolInfoAmino, PoolInfoSDKType, PoolRewardInfo, PoolRewardInfoAmino, PoolRewardInfoSDKType, UserRewardInfo, UserRewardInfoAmino, UserRewardInfoSDKType } from "./pool";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { FeeInfo, FeeInfoAmino, FeeInfoSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface QueryAllLiquidityPoolTVLRequest {}
export interface QueryAllLiquidityPoolTVLRequestProtoMsg {
  typeUrl: "/elys.masterchef.QueryAllLiquidityPoolTVLRequest";
  value: Uint8Array;
}
export interface QueryAllLiquidityPoolTVLRequestAmino {}
export interface QueryAllLiquidityPoolTVLRequestAminoMsg {
  type: "/elys.masterchef.QueryAllLiquidityPoolTVLRequest";
  value: QueryAllLiquidityPoolTVLRequestAmino;
}
export interface QueryAllLiquidityPoolTVLRequestSDKType {}
export interface QueryAllLiquidityPoolTVLResponse {
  total: string;
  pools: string;
  usdcStaking: string;
}
export interface QueryAllLiquidityPoolTVLResponseProtoMsg {
  typeUrl: "/elys.masterchef.QueryAllLiquidityPoolTVLResponse";
  value: Uint8Array;
}
export interface QueryAllLiquidityPoolTVLResponseAmino {
  total?: string;
  pools?: string;
  usdc_staking?: string;
}
export interface QueryAllLiquidityPoolTVLResponseAminoMsg {
  type: "/elys.masterchef.QueryAllLiquidityPoolTVLResponse";
  value: QueryAllLiquidityPoolTVLResponseAmino;
}
export interface QueryAllLiquidityPoolTVLResponseSDKType {
  total: string;
  pools: string;
  usdc_staking: string;
}
export interface QueryChainTVLRequest {}
export interface QueryChainTVLRequestProtoMsg {
  typeUrl: "/elys.masterchef.QueryChainTVLRequest";
  value: Uint8Array;
}
export interface QueryChainTVLRequestAmino {}
export interface QueryChainTVLRequestAminoMsg {
  type: "/elys.masterchef.QueryChainTVLRequest";
  value: QueryChainTVLRequestAmino;
}
export interface QueryChainTVLRequestSDKType {}
export interface QueryChainTVLResponse {
  total: string;
  pools: string;
  usdcStaking: string;
  stakedElys: string;
  stakedEden: string;
}
export interface QueryChainTVLResponseProtoMsg {
  typeUrl: "/elys.masterchef.QueryChainTVLResponse";
  value: Uint8Array;
}
export interface QueryChainTVLResponseAmino {
  total?: string;
  pools?: string;
  usdc_staking?: string;
  staked_elys?: string;
  staked_eden?: string;
}
export interface QueryChainTVLResponseAminoMsg {
  type: "/elys.masterchef.QueryChainTVLResponse";
  value: QueryChainTVLResponseAmino;
}
export interface QueryChainTVLResponseSDKType {
  total: string;
  pools: string;
  usdc_staking: string;
  staked_elys: string;
  staked_eden: string;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/elys.masterchef.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/elys.masterchef.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/elys.masterchef.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/elys.masterchef.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryExternalIncentiveRequest {
  id: bigint;
}
export interface QueryExternalIncentiveRequestProtoMsg {
  typeUrl: "/elys.masterchef.QueryExternalIncentiveRequest";
  value: Uint8Array;
}
export interface QueryExternalIncentiveRequestAmino {
  id?: string;
}
export interface QueryExternalIncentiveRequestAminoMsg {
  type: "/elys.masterchef.QueryExternalIncentiveRequest";
  value: QueryExternalIncentiveRequestAmino;
}
export interface QueryExternalIncentiveRequestSDKType {
  id: bigint;
}
export interface QueryExternalIncentiveResponse {
  externalIncentive: ExternalIncentive;
}
export interface QueryExternalIncentiveResponseProtoMsg {
  typeUrl: "/elys.masterchef.QueryExternalIncentiveResponse";
  value: Uint8Array;
}
export interface QueryExternalIncentiveResponseAmino {
  external_incentive?: ExternalIncentiveAmino;
}
export interface QueryExternalIncentiveResponseAminoMsg {
  type: "/elys.masterchef.QueryExternalIncentiveResponse";
  value: QueryExternalIncentiveResponseAmino;
}
export interface QueryExternalIncentiveResponseSDKType {
  external_incentive: ExternalIncentiveSDKType;
}
export interface QueryPoolInfoRequest {
  poolId: bigint;
}
export interface QueryPoolInfoRequestProtoMsg {
  typeUrl: "/elys.masterchef.QueryPoolInfoRequest";
  value: Uint8Array;
}
export interface QueryPoolInfoRequestAmino {
  pool_id?: string;
}
export interface QueryPoolInfoRequestAminoMsg {
  type: "/elys.masterchef.QueryPoolInfoRequest";
  value: QueryPoolInfoRequestAmino;
}
export interface QueryPoolInfoRequestSDKType {
  pool_id: bigint;
}
export interface QueryPoolInfoResponse {
  poolInfo: PoolInfo;
}
export interface QueryPoolInfoResponseProtoMsg {
  typeUrl: "/elys.masterchef.QueryPoolInfoResponse";
  value: Uint8Array;
}
export interface QueryPoolInfoResponseAmino {
  pool_info?: PoolInfoAmino;
}
export interface QueryPoolInfoResponseAminoMsg {
  type: "/elys.masterchef.QueryPoolInfoResponse";
  value: QueryPoolInfoResponseAmino;
}
export interface QueryPoolInfoResponseSDKType {
  pool_info: PoolInfoSDKType;
}
export interface QueryPoolRewardInfoRequest {
  poolId: bigint;
  rewardDenom: string;
}
export interface QueryPoolRewardInfoRequestProtoMsg {
  typeUrl: "/elys.masterchef.QueryPoolRewardInfoRequest";
  value: Uint8Array;
}
export interface QueryPoolRewardInfoRequestAmino {
  pool_id?: string;
  reward_denom?: string;
}
export interface QueryPoolRewardInfoRequestAminoMsg {
  type: "/elys.masterchef.QueryPoolRewardInfoRequest";
  value: QueryPoolRewardInfoRequestAmino;
}
export interface QueryPoolRewardInfoRequestSDKType {
  pool_id: bigint;
  reward_denom: string;
}
export interface QueryPoolRewardInfoResponse {
  poolRewardInfo: PoolRewardInfo;
}
export interface QueryPoolRewardInfoResponseProtoMsg {
  typeUrl: "/elys.masterchef.QueryPoolRewardInfoResponse";
  value: Uint8Array;
}
export interface QueryPoolRewardInfoResponseAmino {
  pool_reward_info?: PoolRewardInfoAmino;
}
export interface QueryPoolRewardInfoResponseAminoMsg {
  type: "/elys.masterchef.QueryPoolRewardInfoResponse";
  value: QueryPoolRewardInfoResponseAmino;
}
export interface QueryPoolRewardInfoResponseSDKType {
  pool_reward_info: PoolRewardInfoSDKType;
}
export interface QueryUserRewardInfoRequest {
  user: string;
  poolId: bigint;
  rewardDenom: string;
}
export interface QueryUserRewardInfoRequestProtoMsg {
  typeUrl: "/elys.masterchef.QueryUserRewardInfoRequest";
  value: Uint8Array;
}
export interface QueryUserRewardInfoRequestAmino {
  user?: string;
  pool_id?: string;
  reward_denom?: string;
}
export interface QueryUserRewardInfoRequestAminoMsg {
  type: "/elys.masterchef.QueryUserRewardInfoRequest";
  value: QueryUserRewardInfoRequestAmino;
}
export interface QueryUserRewardInfoRequestSDKType {
  user: string;
  pool_id: bigint;
  reward_denom: string;
}
export interface QueryUserRewardInfoResponse {
  userRewardInfo: UserRewardInfo;
}
export interface QueryUserRewardInfoResponseProtoMsg {
  typeUrl: "/elys.masterchef.QueryUserRewardInfoResponse";
  value: Uint8Array;
}
export interface QueryUserRewardInfoResponseAmino {
  user_reward_info?: UserRewardInfoAmino;
}
export interface QueryUserRewardInfoResponseAminoMsg {
  type: "/elys.masterchef.QueryUserRewardInfoResponse";
  value: QueryUserRewardInfoResponseAmino;
}
export interface QueryUserRewardInfoResponseSDKType {
  user_reward_info: UserRewardInfoSDKType;
}
export interface QueryUserPendingRewardRequest {
  user: string;
}
export interface QueryUserPendingRewardRequestProtoMsg {
  typeUrl: "/elys.masterchef.QueryUserPendingRewardRequest";
  value: Uint8Array;
}
export interface QueryUserPendingRewardRequestAmino {
  user?: string;
}
export interface QueryUserPendingRewardRequestAminoMsg {
  type: "/elys.masterchef.QueryUserPendingRewardRequest";
  value: QueryUserPendingRewardRequestAmino;
}
export interface QueryUserPendingRewardRequestSDKType {
  user: string;
}
export interface RewardInfo {
  poolId: bigint;
  reward: Coin[];
}
export interface RewardInfoProtoMsg {
  typeUrl: "/elys.masterchef.RewardInfo";
  value: Uint8Array;
}
export interface RewardInfoAmino {
  pool_id?: string;
  reward?: CoinAmino[];
}
export interface RewardInfoAminoMsg {
  type: "/elys.masterchef.RewardInfo";
  value: RewardInfoAmino;
}
export interface RewardInfoSDKType {
  pool_id: bigint;
  reward: CoinSDKType[];
}
export interface QueryUserPendingRewardResponse {
  rewards: RewardInfo[];
  totalRewards: Coin[];
}
export interface QueryUserPendingRewardResponseProtoMsg {
  typeUrl: "/elys.masterchef.QueryUserPendingRewardResponse";
  value: Uint8Array;
}
export interface QueryUserPendingRewardResponseAmino {
  rewards?: RewardInfoAmino[];
  total_rewards?: CoinAmino[];
}
export interface QueryUserPendingRewardResponseAminoMsg {
  type: "/elys.masterchef.QueryUserPendingRewardResponse";
  value: QueryUserPendingRewardResponseAmino;
}
export interface QueryUserPendingRewardResponseSDKType {
  rewards: RewardInfoSDKType[];
  total_rewards: CoinSDKType[];
}
export interface QueryStableStakeAprRequest {
  denom: string;
}
export interface QueryStableStakeAprRequestProtoMsg {
  typeUrl: "/elys.masterchef.QueryStableStakeAprRequest";
  value: Uint8Array;
}
export interface QueryStableStakeAprRequestAmino {
  denom?: string;
}
export interface QueryStableStakeAprRequestAminoMsg {
  type: "/elys.masterchef.QueryStableStakeAprRequest";
  value: QueryStableStakeAprRequestAmino;
}
export interface QueryStableStakeAprRequestSDKType {
  denom: string;
}
export interface QueryStableStakeAprResponse {
  apr: string;
}
export interface QueryStableStakeAprResponseProtoMsg {
  typeUrl: "/elys.masterchef.QueryStableStakeAprResponse";
  value: Uint8Array;
}
export interface QueryStableStakeAprResponseAmino {
  apr?: string;
}
export interface QueryStableStakeAprResponseAminoMsg {
  type: "/elys.masterchef.QueryStableStakeAprResponse";
  value: QueryStableStakeAprResponseAmino;
}
export interface QueryStableStakeAprResponseSDKType {
  apr: string;
}
export interface QueryPoolAprsRequest {
  poolIds: bigint[];
}
export interface QueryPoolAprsRequestProtoMsg {
  typeUrl: "/elys.masterchef.QueryPoolAprsRequest";
  value: Uint8Array;
}
export interface QueryPoolAprsRequestAmino {
  pool_ids?: string[];
}
export interface QueryPoolAprsRequestAminoMsg {
  type: "/elys.masterchef.QueryPoolAprsRequest";
  value: QueryPoolAprsRequestAmino;
}
export interface QueryPoolAprsRequestSDKType {
  pool_ids: bigint[];
}
export interface QueryPoolAprsResponse {
  data: PoolApr[];
}
export interface QueryPoolAprsResponseProtoMsg {
  typeUrl: "/elys.masterchef.QueryPoolAprsResponse";
  value: Uint8Array;
}
export interface QueryPoolAprsResponseAmino {
  data?: PoolAprAmino[];
}
export interface QueryPoolAprsResponseAminoMsg {
  type: "/elys.masterchef.QueryPoolAprsResponse";
  value: QueryPoolAprsResponseAmino;
}
export interface QueryPoolAprsResponseSDKType {
  data: PoolAprSDKType[];
}
export interface PoolApr {
  poolId: bigint;
  edenApr: string;
  usdcApr: string;
  totalApr: string;
}
export interface PoolAprProtoMsg {
  typeUrl: "/elys.masterchef.PoolApr";
  value: Uint8Array;
}
export interface PoolAprAmino {
  pool_id?: string;
  eden_apr?: string;
  usdc_apr?: string;
  total_apr?: string;
}
export interface PoolAprAminoMsg {
  type: "/elys.masterchef.PoolApr";
  value: PoolAprAmino;
}
export interface PoolAprSDKType {
  pool_id: bigint;
  eden_apr: string;
  usdc_apr: string;
  total_apr: string;
}
export interface QueryShowFeeInfoRequest {
  date: string;
}
export interface QueryShowFeeInfoRequestProtoMsg {
  typeUrl: "/elys.masterchef.QueryShowFeeInfoRequest";
  value: Uint8Array;
}
export interface QueryShowFeeInfoRequestAmino {
  date?: string;
}
export interface QueryShowFeeInfoRequestAminoMsg {
  type: "/elys.masterchef.QueryShowFeeInfoRequest";
  value: QueryShowFeeInfoRequestAmino;
}
export interface QueryShowFeeInfoRequestSDKType {
  date: string;
}
export interface QueryShowFeeInfoResponse {
  feeInfo: FeeInfo;
}
export interface QueryShowFeeInfoResponseProtoMsg {
  typeUrl: "/elys.masterchef.QueryShowFeeInfoResponse";
  value: Uint8Array;
}
export interface QueryShowFeeInfoResponseAmino {
  fee_info?: FeeInfoAmino;
}
export interface QueryShowFeeInfoResponseAminoMsg {
  type: "/elys.masterchef.QueryShowFeeInfoResponse";
  value: QueryShowFeeInfoResponseAmino;
}
export interface QueryShowFeeInfoResponseSDKType {
  fee_info: FeeInfoSDKType;
}
export interface QueryListFeeInfoRequest {}
export interface QueryListFeeInfoRequestProtoMsg {
  typeUrl: "/elys.masterchef.QueryListFeeInfoRequest";
  value: Uint8Array;
}
export interface QueryListFeeInfoRequestAmino {}
export interface QueryListFeeInfoRequestAminoMsg {
  type: "/elys.masterchef.QueryListFeeInfoRequest";
  value: QueryListFeeInfoRequestAmino;
}
export interface QueryListFeeInfoRequestSDKType {}
export interface QueryListFeeInfoResponse {
  feeInfo: FeeInfo[];
}
export interface QueryListFeeInfoResponseProtoMsg {
  typeUrl: "/elys.masterchef.QueryListFeeInfoResponse";
  value: Uint8Array;
}
export interface QueryListFeeInfoResponseAmino {
  fee_info?: FeeInfoAmino[];
}
export interface QueryListFeeInfoResponseAminoMsg {
  type: "/elys.masterchef.QueryListFeeInfoResponse";
  value: QueryListFeeInfoResponseAmino;
}
export interface QueryListFeeInfoResponseSDKType {
  fee_info: FeeInfoSDKType[];
}
export interface QueryAprRequest {
  withdrawType: EarnType;
  denom: string;
}
export interface QueryAprRequestProtoMsg {
  typeUrl: "/elys.masterchef.QueryAprRequest";
  value: Uint8Array;
}
export interface QueryAprRequestAmino {
  withdraw_type?: EarnType;
  denom?: string;
}
export interface QueryAprRequestAminoMsg {
  type: "/elys.masterchef.QueryAprRequest";
  value: QueryAprRequestAmino;
}
export interface QueryAprRequestSDKType {
  withdraw_type: EarnType;
  denom: string;
}
export interface QueryAprResponse {
  apr: string;
}
export interface QueryAprResponseProtoMsg {
  typeUrl: "/elys.masterchef.QueryAprResponse";
  value: Uint8Array;
}
export interface QueryAprResponseAmino {
  apr?: string;
}
export interface QueryAprResponseAminoMsg {
  type: "/elys.masterchef.QueryAprResponse";
  value: QueryAprResponseAmino;
}
export interface QueryAprResponseSDKType {
  apr: string;
}
export interface QueryAprsRequest {}
export interface QueryAprsRequestProtoMsg {
  typeUrl: "/elys.masterchef.QueryAprsRequest";
  value: Uint8Array;
}
export interface QueryAprsRequestAmino {}
export interface QueryAprsRequestAminoMsg {
  type: "/elys.masterchef.QueryAprsRequest";
  value: QueryAprsRequestAmino;
}
export interface QueryAprsRequestSDKType {}
export interface QueryAprsResponse {
  usdcAprUsdc: string;
  edenAprUsdc: string;
  usdcAprEdenb: string;
  edenAprEdenb: string;
  usdcAprEden: string;
  edenAprEden: string;
  edenbAprEden: string;
  usdcAprElys: string;
  edenAprElys: string;
  edenbAprElys: string;
}
export interface QueryAprsResponseProtoMsg {
  typeUrl: "/elys.masterchef.QueryAprsResponse";
  value: Uint8Array;
}
export interface QueryAprsResponseAmino {
  usdc_apr_usdc?: string;
  eden_apr_usdc?: string;
  usdc_apr_edenb?: string;
  eden_apr_edenb?: string;
  usdc_apr_eden?: string;
  eden_apr_eden?: string;
  edenb_apr_eden?: string;
  usdc_apr_elys?: string;
  eden_apr_elys?: string;
  edenb_apr_elys?: string;
}
export interface QueryAprsResponseAminoMsg {
  type: "/elys.masterchef.QueryAprsResponse";
  value: QueryAprsResponseAmino;
}
export interface QueryAprsResponseSDKType {
  usdc_apr_usdc: string;
  eden_apr_usdc: string;
  usdc_apr_edenb: string;
  eden_apr_edenb: string;
  usdc_apr_eden: string;
  eden_apr_eden: string;
  edenb_apr_eden: string;
  usdc_apr_elys: string;
  eden_apr_elys: string;
  edenb_apr_elys: string;
}
export interface QueryPoolRewardsRequest {
  poolIds: bigint[];
  pagination?: PageRequest;
}
export interface QueryPoolRewardsRequestProtoMsg {
  typeUrl: "/elys.masterchef.QueryPoolRewardsRequest";
  value: Uint8Array;
}
export interface QueryPoolRewardsRequestAmino {
  pool_ids?: string[];
  pagination?: PageRequestAmino;
}
export interface QueryPoolRewardsRequestAminoMsg {
  type: "/elys.masterchef.QueryPoolRewardsRequest";
  value: QueryPoolRewardsRequestAmino;
}
export interface QueryPoolRewardsRequestSDKType {
  pool_ids: bigint[];
  pagination?: PageRequestSDKType;
}
export interface PoolRewards {
  poolId: bigint;
  rewardsUsd: string;
  rewardCoins: Coin[];
  edenForward: Coin;
  rewardsUsdApr: string;
  externalRewardsApr: string;
}
export interface PoolRewardsProtoMsg {
  typeUrl: "/elys.masterchef.PoolRewards";
  value: Uint8Array;
}
export interface PoolRewardsAmino {
  pool_id?: string;
  rewards_usd?: string;
  reward_coins?: CoinAmino[];
  eden_forward?: CoinAmino;
  rewards_usd_apr?: string;
  external_rewards_apr?: string;
}
export interface PoolRewardsAminoMsg {
  type: "/elys.masterchef.PoolRewards";
  value: PoolRewardsAmino;
}
export interface PoolRewardsSDKType {
  pool_id: bigint;
  rewards_usd: string;
  reward_coins: CoinSDKType[];
  eden_forward: CoinSDKType;
  rewards_usd_apr: string;
  external_rewards_apr: string;
}
export interface QueryPoolRewardsResponse {
  pools: PoolRewards[];
}
export interface QueryPoolRewardsResponseProtoMsg {
  typeUrl: "/elys.masterchef.QueryPoolRewardsResponse";
  value: Uint8Array;
}
export interface QueryPoolRewardsResponseAmino {
  pools?: PoolRewardsAmino[];
}
export interface QueryPoolRewardsResponseAminoMsg {
  type: "/elys.masterchef.QueryPoolRewardsResponse";
  value: QueryPoolRewardsResponseAmino;
}
export interface QueryPoolRewardsResponseSDKType {
  pools: PoolRewardsSDKType[];
}
function createBaseQueryAllLiquidityPoolTVLRequest(): QueryAllLiquidityPoolTVLRequest {
  return {};
}
export const QueryAllLiquidityPoolTVLRequest = {
  typeUrl: "/elys.masterchef.QueryAllLiquidityPoolTVLRequest",
  encode(_: QueryAllLiquidityPoolTVLRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLiquidityPoolTVLRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLiquidityPoolTVLRequest();
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
  fromPartial(_: Partial<QueryAllLiquidityPoolTVLRequest>): QueryAllLiquidityPoolTVLRequest {
    const message = createBaseQueryAllLiquidityPoolTVLRequest();
    return message;
  },
  fromAmino(_: QueryAllLiquidityPoolTVLRequestAmino): QueryAllLiquidityPoolTVLRequest {
    const message = createBaseQueryAllLiquidityPoolTVLRequest();
    return message;
  },
  toAmino(_: QueryAllLiquidityPoolTVLRequest): QueryAllLiquidityPoolTVLRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllLiquidityPoolTVLRequestAminoMsg): QueryAllLiquidityPoolTVLRequest {
    return QueryAllLiquidityPoolTVLRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllLiquidityPoolTVLRequestProtoMsg): QueryAllLiquidityPoolTVLRequest {
    return QueryAllLiquidityPoolTVLRequest.decode(message.value);
  },
  toProto(message: QueryAllLiquidityPoolTVLRequest): Uint8Array {
    return QueryAllLiquidityPoolTVLRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllLiquidityPoolTVLRequest): QueryAllLiquidityPoolTVLRequestProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryAllLiquidityPoolTVLRequest",
      value: QueryAllLiquidityPoolTVLRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllLiquidityPoolTVLResponse(): QueryAllLiquidityPoolTVLResponse {
  return {
    total: "",
    pools: "",
    usdcStaking: ""
  };
}
export const QueryAllLiquidityPoolTVLResponse = {
  typeUrl: "/elys.masterchef.QueryAllLiquidityPoolTVLResponse",
  encode(message: QueryAllLiquidityPoolTVLResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== "") {
      writer.uint32(10).string(message.total);
    }
    if (message.pools !== "") {
      writer.uint32(18).string(message.pools);
    }
    if (message.usdcStaking !== "") {
      writer.uint32(26).string(message.usdcStaking);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLiquidityPoolTVLResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLiquidityPoolTVLResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.string();
          break;
        case 2:
          message.pools = reader.string();
          break;
        case 3:
          message.usdcStaking = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllLiquidityPoolTVLResponse>): QueryAllLiquidityPoolTVLResponse {
    const message = createBaseQueryAllLiquidityPoolTVLResponse();
    message.total = object.total ?? "";
    message.pools = object.pools ?? "";
    message.usdcStaking = object.usdcStaking ?? "";
    return message;
  },
  fromAmino(object: QueryAllLiquidityPoolTVLResponseAmino): QueryAllLiquidityPoolTVLResponse {
    const message = createBaseQueryAllLiquidityPoolTVLResponse();
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    if (object.pools !== undefined && object.pools !== null) {
      message.pools = object.pools;
    }
    if (object.usdc_staking !== undefined && object.usdc_staking !== null) {
      message.usdcStaking = object.usdc_staking;
    }
    return message;
  },
  toAmino(message: QueryAllLiquidityPoolTVLResponse): QueryAllLiquidityPoolTVLResponseAmino {
    const obj: any = {};
    obj.total = message.total === "" ? undefined : message.total;
    obj.pools = message.pools === "" ? undefined : message.pools;
    obj.usdc_staking = message.usdcStaking === "" ? undefined : message.usdcStaking;
    return obj;
  },
  fromAminoMsg(object: QueryAllLiquidityPoolTVLResponseAminoMsg): QueryAllLiquidityPoolTVLResponse {
    return QueryAllLiquidityPoolTVLResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllLiquidityPoolTVLResponseProtoMsg): QueryAllLiquidityPoolTVLResponse {
    return QueryAllLiquidityPoolTVLResponse.decode(message.value);
  },
  toProto(message: QueryAllLiquidityPoolTVLResponse): Uint8Array {
    return QueryAllLiquidityPoolTVLResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllLiquidityPoolTVLResponse): QueryAllLiquidityPoolTVLResponseProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryAllLiquidityPoolTVLResponse",
      value: QueryAllLiquidityPoolTVLResponse.encode(message).finish()
    };
  }
};
function createBaseQueryChainTVLRequest(): QueryChainTVLRequest {
  return {};
}
export const QueryChainTVLRequest = {
  typeUrl: "/elys.masterchef.QueryChainTVLRequest",
  encode(_: QueryChainTVLRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChainTVLRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChainTVLRequest();
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
  fromPartial(_: Partial<QueryChainTVLRequest>): QueryChainTVLRequest {
    const message = createBaseQueryChainTVLRequest();
    return message;
  },
  fromAmino(_: QueryChainTVLRequestAmino): QueryChainTVLRequest {
    const message = createBaseQueryChainTVLRequest();
    return message;
  },
  toAmino(_: QueryChainTVLRequest): QueryChainTVLRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryChainTVLRequestAminoMsg): QueryChainTVLRequest {
    return QueryChainTVLRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryChainTVLRequestProtoMsg): QueryChainTVLRequest {
    return QueryChainTVLRequest.decode(message.value);
  },
  toProto(message: QueryChainTVLRequest): Uint8Array {
    return QueryChainTVLRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChainTVLRequest): QueryChainTVLRequestProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryChainTVLRequest",
      value: QueryChainTVLRequest.encode(message).finish()
    };
  }
};
function createBaseQueryChainTVLResponse(): QueryChainTVLResponse {
  return {
    total: "",
    pools: "",
    usdcStaking: "",
    stakedElys: "",
    stakedEden: ""
  };
}
export const QueryChainTVLResponse = {
  typeUrl: "/elys.masterchef.QueryChainTVLResponse",
  encode(message: QueryChainTVLResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== "") {
      writer.uint32(10).string(message.total);
    }
    if (message.pools !== "") {
      writer.uint32(18).string(message.pools);
    }
    if (message.usdcStaking !== "") {
      writer.uint32(26).string(message.usdcStaking);
    }
    if (message.stakedElys !== "") {
      writer.uint32(34).string(message.stakedElys);
    }
    if (message.stakedEden !== "") {
      writer.uint32(42).string(message.stakedEden);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChainTVLResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChainTVLResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.string();
          break;
        case 2:
          message.pools = reader.string();
          break;
        case 3:
          message.usdcStaking = reader.string();
          break;
        case 4:
          message.stakedElys = reader.string();
          break;
        case 5:
          message.stakedEden = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryChainTVLResponse>): QueryChainTVLResponse {
    const message = createBaseQueryChainTVLResponse();
    message.total = object.total ?? "";
    message.pools = object.pools ?? "";
    message.usdcStaking = object.usdcStaking ?? "";
    message.stakedElys = object.stakedElys ?? "";
    message.stakedEden = object.stakedEden ?? "";
    return message;
  },
  fromAmino(object: QueryChainTVLResponseAmino): QueryChainTVLResponse {
    const message = createBaseQueryChainTVLResponse();
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    if (object.pools !== undefined && object.pools !== null) {
      message.pools = object.pools;
    }
    if (object.usdc_staking !== undefined && object.usdc_staking !== null) {
      message.usdcStaking = object.usdc_staking;
    }
    if (object.staked_elys !== undefined && object.staked_elys !== null) {
      message.stakedElys = object.staked_elys;
    }
    if (object.staked_eden !== undefined && object.staked_eden !== null) {
      message.stakedEden = object.staked_eden;
    }
    return message;
  },
  toAmino(message: QueryChainTVLResponse): QueryChainTVLResponseAmino {
    const obj: any = {};
    obj.total = message.total === "" ? undefined : message.total;
    obj.pools = message.pools === "" ? undefined : message.pools;
    obj.usdc_staking = message.usdcStaking === "" ? undefined : message.usdcStaking;
    obj.staked_elys = message.stakedElys === "" ? undefined : message.stakedElys;
    obj.staked_eden = message.stakedEden === "" ? undefined : message.stakedEden;
    return obj;
  },
  fromAminoMsg(object: QueryChainTVLResponseAminoMsg): QueryChainTVLResponse {
    return QueryChainTVLResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryChainTVLResponseProtoMsg): QueryChainTVLResponse {
    return QueryChainTVLResponse.decode(message.value);
  },
  toProto(message: QueryChainTVLResponse): Uint8Array {
    return QueryChainTVLResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChainTVLResponse): QueryChainTVLResponseProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryChainTVLResponse",
      value: QueryChainTVLResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/elys.masterchef.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/elys.masterchef.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryExternalIncentiveRequest(): QueryExternalIncentiveRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryExternalIncentiveRequest = {
  typeUrl: "/elys.masterchef.QueryExternalIncentiveRequest",
  encode(message: QueryExternalIncentiveRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExternalIncentiveRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalIncentiveRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryExternalIncentiveRequest>): QueryExternalIncentiveRequest {
    const message = createBaseQueryExternalIncentiveRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryExternalIncentiveRequestAmino): QueryExternalIncentiveRequest {
    const message = createBaseQueryExternalIncentiveRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryExternalIncentiveRequest): QueryExternalIncentiveRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryExternalIncentiveRequestAminoMsg): QueryExternalIncentiveRequest {
    return QueryExternalIncentiveRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExternalIncentiveRequestProtoMsg): QueryExternalIncentiveRequest {
    return QueryExternalIncentiveRequest.decode(message.value);
  },
  toProto(message: QueryExternalIncentiveRequest): Uint8Array {
    return QueryExternalIncentiveRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExternalIncentiveRequest): QueryExternalIncentiveRequestProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryExternalIncentiveRequest",
      value: QueryExternalIncentiveRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExternalIncentiveResponse(): QueryExternalIncentiveResponse {
  return {
    externalIncentive: ExternalIncentive.fromPartial({})
  };
}
export const QueryExternalIncentiveResponse = {
  typeUrl: "/elys.masterchef.QueryExternalIncentiveResponse",
  encode(message: QueryExternalIncentiveResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.externalIncentive !== undefined) {
      ExternalIncentive.encode(message.externalIncentive, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExternalIncentiveResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalIncentiveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalIncentive = ExternalIncentive.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryExternalIncentiveResponse>): QueryExternalIncentiveResponse {
    const message = createBaseQueryExternalIncentiveResponse();
    message.externalIncentive = object.externalIncentive !== undefined && object.externalIncentive !== null ? ExternalIncentive.fromPartial(object.externalIncentive) : undefined;
    return message;
  },
  fromAmino(object: QueryExternalIncentiveResponseAmino): QueryExternalIncentiveResponse {
    const message = createBaseQueryExternalIncentiveResponse();
    if (object.external_incentive !== undefined && object.external_incentive !== null) {
      message.externalIncentive = ExternalIncentive.fromAmino(object.external_incentive);
    }
    return message;
  },
  toAmino(message: QueryExternalIncentiveResponse): QueryExternalIncentiveResponseAmino {
    const obj: any = {};
    obj.external_incentive = message.externalIncentive ? ExternalIncentive.toAmino(message.externalIncentive) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryExternalIncentiveResponseAminoMsg): QueryExternalIncentiveResponse {
    return QueryExternalIncentiveResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExternalIncentiveResponseProtoMsg): QueryExternalIncentiveResponse {
    return QueryExternalIncentiveResponse.decode(message.value);
  },
  toProto(message: QueryExternalIncentiveResponse): Uint8Array {
    return QueryExternalIncentiveResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExternalIncentiveResponse): QueryExternalIncentiveResponseProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryExternalIncentiveResponse",
      value: QueryExternalIncentiveResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolInfoRequest(): QueryPoolInfoRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryPoolInfoRequest = {
  typeUrl: "/elys.masterchef.QueryPoolInfoRequest",
  encode(message: QueryPoolInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolInfoRequest();
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
  fromPartial(object: Partial<QueryPoolInfoRequest>): QueryPoolInfoRequest {
    const message = createBaseQueryPoolInfoRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolInfoRequestAmino): QueryPoolInfoRequest {
    const message = createBaseQueryPoolInfoRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryPoolInfoRequest): QueryPoolInfoRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolInfoRequestAminoMsg): QueryPoolInfoRequest {
    return QueryPoolInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolInfoRequestProtoMsg): QueryPoolInfoRequest {
    return QueryPoolInfoRequest.decode(message.value);
  },
  toProto(message: QueryPoolInfoRequest): Uint8Array {
    return QueryPoolInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolInfoRequest): QueryPoolInfoRequestProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryPoolInfoRequest",
      value: QueryPoolInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolInfoResponse(): QueryPoolInfoResponse {
  return {
    poolInfo: PoolInfo.fromPartial({})
  };
}
export const QueryPoolInfoResponse = {
  typeUrl: "/elys.masterchef.QueryPoolInfoResponse",
  encode(message: QueryPoolInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolInfo !== undefined) {
      PoolInfo.encode(message.poolInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolInfo = PoolInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolInfoResponse>): QueryPoolInfoResponse {
    const message = createBaseQueryPoolInfoResponse();
    message.poolInfo = object.poolInfo !== undefined && object.poolInfo !== null ? PoolInfo.fromPartial(object.poolInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolInfoResponseAmino): QueryPoolInfoResponse {
    const message = createBaseQueryPoolInfoResponse();
    if (object.pool_info !== undefined && object.pool_info !== null) {
      message.poolInfo = PoolInfo.fromAmino(object.pool_info);
    }
    return message;
  },
  toAmino(message: QueryPoolInfoResponse): QueryPoolInfoResponseAmino {
    const obj: any = {};
    obj.pool_info = message.poolInfo ? PoolInfo.toAmino(message.poolInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolInfoResponseAminoMsg): QueryPoolInfoResponse {
    return QueryPoolInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolInfoResponseProtoMsg): QueryPoolInfoResponse {
    return QueryPoolInfoResponse.decode(message.value);
  },
  toProto(message: QueryPoolInfoResponse): Uint8Array {
    return QueryPoolInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolInfoResponse): QueryPoolInfoResponseProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryPoolInfoResponse",
      value: QueryPoolInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolRewardInfoRequest(): QueryPoolRewardInfoRequest {
  return {
    poolId: BigInt(0),
    rewardDenom: ""
  };
}
export const QueryPoolRewardInfoRequest = {
  typeUrl: "/elys.masterchef.QueryPoolRewardInfoRequest",
  encode(message: QueryPoolRewardInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.rewardDenom !== "") {
      writer.uint32(18).string(message.rewardDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRewardInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRewardInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.rewardDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolRewardInfoRequest>): QueryPoolRewardInfoRequest {
    const message = createBaseQueryPoolRewardInfoRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.rewardDenom = object.rewardDenom ?? "";
    return message;
  },
  fromAmino(object: QueryPoolRewardInfoRequestAmino): QueryPoolRewardInfoRequest {
    const message = createBaseQueryPoolRewardInfoRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.reward_denom !== undefined && object.reward_denom !== null) {
      message.rewardDenom = object.reward_denom;
    }
    return message;
  },
  toAmino(message: QueryPoolRewardInfoRequest): QueryPoolRewardInfoRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.reward_denom = message.rewardDenom === "" ? undefined : message.rewardDenom;
    return obj;
  },
  fromAminoMsg(object: QueryPoolRewardInfoRequestAminoMsg): QueryPoolRewardInfoRequest {
    return QueryPoolRewardInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolRewardInfoRequestProtoMsg): QueryPoolRewardInfoRequest {
    return QueryPoolRewardInfoRequest.decode(message.value);
  },
  toProto(message: QueryPoolRewardInfoRequest): Uint8Array {
    return QueryPoolRewardInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRewardInfoRequest): QueryPoolRewardInfoRequestProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryPoolRewardInfoRequest",
      value: QueryPoolRewardInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolRewardInfoResponse(): QueryPoolRewardInfoResponse {
  return {
    poolRewardInfo: PoolRewardInfo.fromPartial({})
  };
}
export const QueryPoolRewardInfoResponse = {
  typeUrl: "/elys.masterchef.QueryPoolRewardInfoResponse",
  encode(message: QueryPoolRewardInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolRewardInfo !== undefined) {
      PoolRewardInfo.encode(message.poolRewardInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRewardInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRewardInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolRewardInfo = PoolRewardInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolRewardInfoResponse>): QueryPoolRewardInfoResponse {
    const message = createBaseQueryPoolRewardInfoResponse();
    message.poolRewardInfo = object.poolRewardInfo !== undefined && object.poolRewardInfo !== null ? PoolRewardInfo.fromPartial(object.poolRewardInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolRewardInfoResponseAmino): QueryPoolRewardInfoResponse {
    const message = createBaseQueryPoolRewardInfoResponse();
    if (object.pool_reward_info !== undefined && object.pool_reward_info !== null) {
      message.poolRewardInfo = PoolRewardInfo.fromAmino(object.pool_reward_info);
    }
    return message;
  },
  toAmino(message: QueryPoolRewardInfoResponse): QueryPoolRewardInfoResponseAmino {
    const obj: any = {};
    obj.pool_reward_info = message.poolRewardInfo ? PoolRewardInfo.toAmino(message.poolRewardInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolRewardInfoResponseAminoMsg): QueryPoolRewardInfoResponse {
    return QueryPoolRewardInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolRewardInfoResponseProtoMsg): QueryPoolRewardInfoResponse {
    return QueryPoolRewardInfoResponse.decode(message.value);
  },
  toProto(message: QueryPoolRewardInfoResponse): Uint8Array {
    return QueryPoolRewardInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRewardInfoResponse): QueryPoolRewardInfoResponseProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryPoolRewardInfoResponse",
      value: QueryPoolRewardInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserRewardInfoRequest(): QueryUserRewardInfoRequest {
  return {
    user: "",
    poolId: BigInt(0),
    rewardDenom: ""
  };
}
export const QueryUserRewardInfoRequest = {
  typeUrl: "/elys.masterchef.QueryUserRewardInfoRequest",
  encode(message: QueryUserRewardInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.rewardDenom !== "") {
      writer.uint32(26).string(message.rewardDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserRewardInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserRewardInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.rewardDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserRewardInfoRequest>): QueryUserRewardInfoRequest {
    const message = createBaseQueryUserRewardInfoRequest();
    message.user = object.user ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.rewardDenom = object.rewardDenom ?? "";
    return message;
  },
  fromAmino(object: QueryUserRewardInfoRequestAmino): QueryUserRewardInfoRequest {
    const message = createBaseQueryUserRewardInfoRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.reward_denom !== undefined && object.reward_denom !== null) {
      message.rewardDenom = object.reward_denom;
    }
    return message;
  },
  toAmino(message: QueryUserRewardInfoRequest): QueryUserRewardInfoRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.reward_denom = message.rewardDenom === "" ? undefined : message.rewardDenom;
    return obj;
  },
  fromAminoMsg(object: QueryUserRewardInfoRequestAminoMsg): QueryUserRewardInfoRequest {
    return QueryUserRewardInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserRewardInfoRequestProtoMsg): QueryUserRewardInfoRequest {
    return QueryUserRewardInfoRequest.decode(message.value);
  },
  toProto(message: QueryUserRewardInfoRequest): Uint8Array {
    return QueryUserRewardInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserRewardInfoRequest): QueryUserRewardInfoRequestProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryUserRewardInfoRequest",
      value: QueryUserRewardInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserRewardInfoResponse(): QueryUserRewardInfoResponse {
  return {
    userRewardInfo: UserRewardInfo.fromPartial({})
  };
}
export const QueryUserRewardInfoResponse = {
  typeUrl: "/elys.masterchef.QueryUserRewardInfoResponse",
  encode(message: QueryUserRewardInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userRewardInfo !== undefined) {
      UserRewardInfo.encode(message.userRewardInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserRewardInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserRewardInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userRewardInfo = UserRewardInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserRewardInfoResponse>): QueryUserRewardInfoResponse {
    const message = createBaseQueryUserRewardInfoResponse();
    message.userRewardInfo = object.userRewardInfo !== undefined && object.userRewardInfo !== null ? UserRewardInfo.fromPartial(object.userRewardInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryUserRewardInfoResponseAmino): QueryUserRewardInfoResponse {
    const message = createBaseQueryUserRewardInfoResponse();
    if (object.user_reward_info !== undefined && object.user_reward_info !== null) {
      message.userRewardInfo = UserRewardInfo.fromAmino(object.user_reward_info);
    }
    return message;
  },
  toAmino(message: QueryUserRewardInfoResponse): QueryUserRewardInfoResponseAmino {
    const obj: any = {};
    obj.user_reward_info = message.userRewardInfo ? UserRewardInfo.toAmino(message.userRewardInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserRewardInfoResponseAminoMsg): QueryUserRewardInfoResponse {
    return QueryUserRewardInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserRewardInfoResponseProtoMsg): QueryUserRewardInfoResponse {
    return QueryUserRewardInfoResponse.decode(message.value);
  },
  toProto(message: QueryUserRewardInfoResponse): Uint8Array {
    return QueryUserRewardInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserRewardInfoResponse): QueryUserRewardInfoResponseProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryUserRewardInfoResponse",
      value: QueryUserRewardInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserPendingRewardRequest(): QueryUserPendingRewardRequest {
  return {
    user: ""
  };
}
export const QueryUserPendingRewardRequest = {
  typeUrl: "/elys.masterchef.QueryUserPendingRewardRequest",
  encode(message: QueryUserPendingRewardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserPendingRewardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPendingRewardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserPendingRewardRequest>): QueryUserPendingRewardRequest {
    const message = createBaseQueryUserPendingRewardRequest();
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: QueryUserPendingRewardRequestAmino): QueryUserPendingRewardRequest {
    const message = createBaseQueryUserPendingRewardRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: QueryUserPendingRewardRequest): QueryUserPendingRewardRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: QueryUserPendingRewardRequestAminoMsg): QueryUserPendingRewardRequest {
    return QueryUserPendingRewardRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserPendingRewardRequestProtoMsg): QueryUserPendingRewardRequest {
    return QueryUserPendingRewardRequest.decode(message.value);
  },
  toProto(message: QueryUserPendingRewardRequest): Uint8Array {
    return QueryUserPendingRewardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserPendingRewardRequest): QueryUserPendingRewardRequestProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryUserPendingRewardRequest",
      value: QueryUserPendingRewardRequest.encode(message).finish()
    };
  }
};
function createBaseRewardInfo(): RewardInfo {
  return {
    poolId: BigInt(0),
    reward: []
  };
}
export const RewardInfo = {
  typeUrl: "/elys.masterchef.RewardInfo",
  encode(message: RewardInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
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
          message.poolId = reader.uint64();
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
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.reward = object.reward?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RewardInfoAmino): RewardInfo {
    const message = createBaseRewardInfo();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.reward = object.reward?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RewardInfo): RewardInfoAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
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
      typeUrl: "/elys.masterchef.RewardInfo",
      value: RewardInfo.encode(message).finish()
    };
  }
};
function createBaseQueryUserPendingRewardResponse(): QueryUserPendingRewardResponse {
  return {
    rewards: [],
    totalRewards: []
  };
}
export const QueryUserPendingRewardResponse = {
  typeUrl: "/elys.masterchef.QueryUserPendingRewardResponse",
  encode(message: QueryUserPendingRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      RewardInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.totalRewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserPendingRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPendingRewardResponse();
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
  fromPartial(object: Partial<QueryUserPendingRewardResponse>): QueryUserPendingRewardResponse {
    const message = createBaseQueryUserPendingRewardResponse();
    message.rewards = object.rewards?.map(e => RewardInfo.fromPartial(e)) || [];
    message.totalRewards = object.totalRewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryUserPendingRewardResponseAmino): QueryUserPendingRewardResponse {
    const message = createBaseQueryUserPendingRewardResponse();
    message.rewards = object.rewards?.map(e => RewardInfo.fromAmino(e)) || [];
    message.totalRewards = object.total_rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryUserPendingRewardResponse): QueryUserPendingRewardResponseAmino {
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
  fromAminoMsg(object: QueryUserPendingRewardResponseAminoMsg): QueryUserPendingRewardResponse {
    return QueryUserPendingRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserPendingRewardResponseProtoMsg): QueryUserPendingRewardResponse {
    return QueryUserPendingRewardResponse.decode(message.value);
  },
  toProto(message: QueryUserPendingRewardResponse): Uint8Array {
    return QueryUserPendingRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserPendingRewardResponse): QueryUserPendingRewardResponseProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryUserPendingRewardResponse",
      value: QueryUserPendingRewardResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStableStakeAprRequest(): QueryStableStakeAprRequest {
  return {
    denom: ""
  };
}
export const QueryStableStakeAprRequest = {
  typeUrl: "/elys.masterchef.QueryStableStakeAprRequest",
  encode(message: QueryStableStakeAprRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStableStakeAprRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStableStakeAprRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStableStakeAprRequest>): QueryStableStakeAprRequest {
    const message = createBaseQueryStableStakeAprRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryStableStakeAprRequestAmino): QueryStableStakeAprRequest {
    const message = createBaseQueryStableStakeAprRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryStableStakeAprRequest): QueryStableStakeAprRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryStableStakeAprRequestAminoMsg): QueryStableStakeAprRequest {
    return QueryStableStakeAprRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStableStakeAprRequestProtoMsg): QueryStableStakeAprRequest {
    return QueryStableStakeAprRequest.decode(message.value);
  },
  toProto(message: QueryStableStakeAprRequest): Uint8Array {
    return QueryStableStakeAprRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStableStakeAprRequest): QueryStableStakeAprRequestProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryStableStakeAprRequest",
      value: QueryStableStakeAprRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStableStakeAprResponse(): QueryStableStakeAprResponse {
  return {
    apr: ""
  };
}
export const QueryStableStakeAprResponse = {
  typeUrl: "/elys.masterchef.QueryStableStakeAprResponse",
  encode(message: QueryStableStakeAprResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.apr !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.apr, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStableStakeAprResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStableStakeAprResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStableStakeAprResponse>): QueryStableStakeAprResponse {
    const message = createBaseQueryStableStakeAprResponse();
    message.apr = object.apr ?? "";
    return message;
  },
  fromAmino(object: QueryStableStakeAprResponseAmino): QueryStableStakeAprResponse {
    const message = createBaseQueryStableStakeAprResponse();
    if (object.apr !== undefined && object.apr !== null) {
      message.apr = object.apr;
    }
    return message;
  },
  toAmino(message: QueryStableStakeAprResponse): QueryStableStakeAprResponseAmino {
    const obj: any = {};
    obj.apr = message.apr === "" ? undefined : message.apr;
    return obj;
  },
  fromAminoMsg(object: QueryStableStakeAprResponseAminoMsg): QueryStableStakeAprResponse {
    return QueryStableStakeAprResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStableStakeAprResponseProtoMsg): QueryStableStakeAprResponse {
    return QueryStableStakeAprResponse.decode(message.value);
  },
  toProto(message: QueryStableStakeAprResponse): Uint8Array {
    return QueryStableStakeAprResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStableStakeAprResponse): QueryStableStakeAprResponseProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryStableStakeAprResponse",
      value: QueryStableStakeAprResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolAprsRequest(): QueryPoolAprsRequest {
  return {
    poolIds: []
  };
}
export const QueryPoolAprsRequest = {
  typeUrl: "/elys.masterchef.QueryPoolAprsRequest",
  encode(message: QueryPoolAprsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.poolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolAprsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolAprsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64());
            }
          } else {
            message.poolIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolAprsRequest>): QueryPoolAprsRequest {
    const message = createBaseQueryPoolAprsRequest();
    message.poolIds = object.poolIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryPoolAprsRequestAmino): QueryPoolAprsRequest {
    const message = createBaseQueryPoolAprsRequest();
    message.poolIds = object.pool_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryPoolAprsRequest): QueryPoolAprsRequestAmino {
    const obj: any = {};
    if (message.poolIds) {
      obj.pool_ids = message.poolIds.map(e => e.toString());
    } else {
      obj.pool_ids = message.poolIds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPoolAprsRequestAminoMsg): QueryPoolAprsRequest {
    return QueryPoolAprsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolAprsRequestProtoMsg): QueryPoolAprsRequest {
    return QueryPoolAprsRequest.decode(message.value);
  },
  toProto(message: QueryPoolAprsRequest): Uint8Array {
    return QueryPoolAprsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolAprsRequest): QueryPoolAprsRequestProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryPoolAprsRequest",
      value: QueryPoolAprsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolAprsResponse(): QueryPoolAprsResponse {
  return {
    data: []
  };
}
export const QueryPoolAprsResponse = {
  typeUrl: "/elys.masterchef.QueryPoolAprsResponse",
  encode(message: QueryPoolAprsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      PoolApr.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolAprsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolAprsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(PoolApr.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolAprsResponse>): QueryPoolAprsResponse {
    const message = createBaseQueryPoolAprsResponse();
    message.data = object.data?.map(e => PoolApr.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPoolAprsResponseAmino): QueryPoolAprsResponse {
    const message = createBaseQueryPoolAprsResponse();
    message.data = object.data?.map(e => PoolApr.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPoolAprsResponse): QueryPoolAprsResponseAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? PoolApr.toAmino(e) : undefined);
    } else {
      obj.data = message.data;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPoolAprsResponseAminoMsg): QueryPoolAprsResponse {
    return QueryPoolAprsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolAprsResponseProtoMsg): QueryPoolAprsResponse {
    return QueryPoolAprsResponse.decode(message.value);
  },
  toProto(message: QueryPoolAprsResponse): Uint8Array {
    return QueryPoolAprsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolAprsResponse): QueryPoolAprsResponseProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryPoolAprsResponse",
      value: QueryPoolAprsResponse.encode(message).finish()
    };
  }
};
function createBasePoolApr(): PoolApr {
  return {
    poolId: BigInt(0),
    edenApr: "",
    usdcApr: "",
    totalApr: ""
  };
}
export const PoolApr = {
  typeUrl: "/elys.masterchef.PoolApr",
  encode(message: PoolApr, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.edenApr !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.edenApr, 18).atomics);
    }
    if (message.usdcApr !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.usdcApr, 18).atomics);
    }
    if (message.totalApr !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.totalApr, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolApr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolApr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.edenApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.usdcApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.totalApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PoolApr>): PoolApr {
    const message = createBasePoolApr();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.edenApr = object.edenApr ?? "";
    message.usdcApr = object.usdcApr ?? "";
    message.totalApr = object.totalApr ?? "";
    return message;
  },
  fromAmino(object: PoolAprAmino): PoolApr {
    const message = createBasePoolApr();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.eden_apr !== undefined && object.eden_apr !== null) {
      message.edenApr = object.eden_apr;
    }
    if (object.usdc_apr !== undefined && object.usdc_apr !== null) {
      message.usdcApr = object.usdc_apr;
    }
    if (object.total_apr !== undefined && object.total_apr !== null) {
      message.totalApr = object.total_apr;
    }
    return message;
  },
  toAmino(message: PoolApr): PoolAprAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.eden_apr = message.edenApr === "" ? undefined : message.edenApr;
    obj.usdc_apr = message.usdcApr === "" ? undefined : message.usdcApr;
    obj.total_apr = message.totalApr === "" ? undefined : message.totalApr;
    return obj;
  },
  fromAminoMsg(object: PoolAprAminoMsg): PoolApr {
    return PoolApr.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolAprProtoMsg): PoolApr {
    return PoolApr.decode(message.value);
  },
  toProto(message: PoolApr): Uint8Array {
    return PoolApr.encode(message).finish();
  },
  toProtoMsg(message: PoolApr): PoolAprProtoMsg {
    return {
      typeUrl: "/elys.masterchef.PoolApr",
      value: PoolApr.encode(message).finish()
    };
  }
};
function createBaseQueryShowFeeInfoRequest(): QueryShowFeeInfoRequest {
  return {
    date: ""
  };
}
export const QueryShowFeeInfoRequest = {
  typeUrl: "/elys.masterchef.QueryShowFeeInfoRequest",
  encode(message: QueryShowFeeInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.date !== "") {
      writer.uint32(10).string(message.date);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowFeeInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowFeeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.date = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowFeeInfoRequest>): QueryShowFeeInfoRequest {
    const message = createBaseQueryShowFeeInfoRequest();
    message.date = object.date ?? "";
    return message;
  },
  fromAmino(object: QueryShowFeeInfoRequestAmino): QueryShowFeeInfoRequest {
    const message = createBaseQueryShowFeeInfoRequest();
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    }
    return message;
  },
  toAmino(message: QueryShowFeeInfoRequest): QueryShowFeeInfoRequestAmino {
    const obj: any = {};
    obj.date = message.date === "" ? undefined : message.date;
    return obj;
  },
  fromAminoMsg(object: QueryShowFeeInfoRequestAminoMsg): QueryShowFeeInfoRequest {
    return QueryShowFeeInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowFeeInfoRequestProtoMsg): QueryShowFeeInfoRequest {
    return QueryShowFeeInfoRequest.decode(message.value);
  },
  toProto(message: QueryShowFeeInfoRequest): Uint8Array {
    return QueryShowFeeInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowFeeInfoRequest): QueryShowFeeInfoRequestProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryShowFeeInfoRequest",
      value: QueryShowFeeInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShowFeeInfoResponse(): QueryShowFeeInfoResponse {
  return {
    feeInfo: FeeInfo.fromPartial({})
  };
}
export const QueryShowFeeInfoResponse = {
  typeUrl: "/elys.masterchef.QueryShowFeeInfoResponse",
  encode(message: QueryShowFeeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeInfo !== undefined) {
      FeeInfo.encode(message.feeInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowFeeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowFeeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeInfo = FeeInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowFeeInfoResponse>): QueryShowFeeInfoResponse {
    const message = createBaseQueryShowFeeInfoResponse();
    message.feeInfo = object.feeInfo !== undefined && object.feeInfo !== null ? FeeInfo.fromPartial(object.feeInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryShowFeeInfoResponseAmino): QueryShowFeeInfoResponse {
    const message = createBaseQueryShowFeeInfoResponse();
    if (object.fee_info !== undefined && object.fee_info !== null) {
      message.feeInfo = FeeInfo.fromAmino(object.fee_info);
    }
    return message;
  },
  toAmino(message: QueryShowFeeInfoResponse): QueryShowFeeInfoResponseAmino {
    const obj: any = {};
    obj.fee_info = message.feeInfo ? FeeInfo.toAmino(message.feeInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowFeeInfoResponseAminoMsg): QueryShowFeeInfoResponse {
    return QueryShowFeeInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowFeeInfoResponseProtoMsg): QueryShowFeeInfoResponse {
    return QueryShowFeeInfoResponse.decode(message.value);
  },
  toProto(message: QueryShowFeeInfoResponse): Uint8Array {
    return QueryShowFeeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowFeeInfoResponse): QueryShowFeeInfoResponseProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryShowFeeInfoResponse",
      value: QueryShowFeeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListFeeInfoRequest(): QueryListFeeInfoRequest {
  return {};
}
export const QueryListFeeInfoRequest = {
  typeUrl: "/elys.masterchef.QueryListFeeInfoRequest",
  encode(_: QueryListFeeInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListFeeInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListFeeInfoRequest();
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
  fromPartial(_: Partial<QueryListFeeInfoRequest>): QueryListFeeInfoRequest {
    const message = createBaseQueryListFeeInfoRequest();
    return message;
  },
  fromAmino(_: QueryListFeeInfoRequestAmino): QueryListFeeInfoRequest {
    const message = createBaseQueryListFeeInfoRequest();
    return message;
  },
  toAmino(_: QueryListFeeInfoRequest): QueryListFeeInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryListFeeInfoRequestAminoMsg): QueryListFeeInfoRequest {
    return QueryListFeeInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListFeeInfoRequestProtoMsg): QueryListFeeInfoRequest {
    return QueryListFeeInfoRequest.decode(message.value);
  },
  toProto(message: QueryListFeeInfoRequest): Uint8Array {
    return QueryListFeeInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListFeeInfoRequest): QueryListFeeInfoRequestProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryListFeeInfoRequest",
      value: QueryListFeeInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListFeeInfoResponse(): QueryListFeeInfoResponse {
  return {
    feeInfo: []
  };
}
export const QueryListFeeInfoResponse = {
  typeUrl: "/elys.masterchef.QueryListFeeInfoResponse",
  encode(message: QueryListFeeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.feeInfo) {
      FeeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListFeeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListFeeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeInfo.push(FeeInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryListFeeInfoResponse>): QueryListFeeInfoResponse {
    const message = createBaseQueryListFeeInfoResponse();
    message.feeInfo = object.feeInfo?.map(e => FeeInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryListFeeInfoResponseAmino): QueryListFeeInfoResponse {
    const message = createBaseQueryListFeeInfoResponse();
    message.feeInfo = object.fee_info?.map(e => FeeInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryListFeeInfoResponse): QueryListFeeInfoResponseAmino {
    const obj: any = {};
    if (message.feeInfo) {
      obj.fee_info = message.feeInfo.map(e => e ? FeeInfo.toAmino(e) : undefined);
    } else {
      obj.fee_info = message.feeInfo;
    }
    return obj;
  },
  fromAminoMsg(object: QueryListFeeInfoResponseAminoMsg): QueryListFeeInfoResponse {
    return QueryListFeeInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListFeeInfoResponseProtoMsg): QueryListFeeInfoResponse {
    return QueryListFeeInfoResponse.decode(message.value);
  },
  toProto(message: QueryListFeeInfoResponse): Uint8Array {
    return QueryListFeeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListFeeInfoResponse): QueryListFeeInfoResponseProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryListFeeInfoResponse",
      value: QueryListFeeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAprRequest(): QueryAprRequest {
  return {
    withdrawType: 0,
    denom: ""
  };
}
export const QueryAprRequest = {
  typeUrl: "/elys.masterchef.QueryAprRequest",
  encode(message: QueryAprRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withdrawType !== 0) {
      writer.uint32(8).int32(message.withdrawType);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAprRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAprRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawType = reader.int32() as any;
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAprRequest>): QueryAprRequest {
    const message = createBaseQueryAprRequest();
    message.withdrawType = object.withdrawType ?? 0;
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryAprRequestAmino): QueryAprRequest {
    const message = createBaseQueryAprRequest();
    if (object.withdraw_type !== undefined && object.withdraw_type !== null) {
      message.withdrawType = object.withdraw_type;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryAprRequest): QueryAprRequestAmino {
    const obj: any = {};
    obj.withdraw_type = message.withdrawType === 0 ? undefined : message.withdrawType;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryAprRequestAminoMsg): QueryAprRequest {
    return QueryAprRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAprRequestProtoMsg): QueryAprRequest {
    return QueryAprRequest.decode(message.value);
  },
  toProto(message: QueryAprRequest): Uint8Array {
    return QueryAprRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAprRequest): QueryAprRequestProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryAprRequest",
      value: QueryAprRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAprResponse(): QueryAprResponse {
  return {
    apr: ""
  };
}
export const QueryAprResponse = {
  typeUrl: "/elys.masterchef.QueryAprResponse",
  encode(message: QueryAprResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.apr !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.apr, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAprResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAprResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAprResponse>): QueryAprResponse {
    const message = createBaseQueryAprResponse();
    message.apr = object.apr ?? "";
    return message;
  },
  fromAmino(object: QueryAprResponseAmino): QueryAprResponse {
    const message = createBaseQueryAprResponse();
    if (object.apr !== undefined && object.apr !== null) {
      message.apr = object.apr;
    }
    return message;
  },
  toAmino(message: QueryAprResponse): QueryAprResponseAmino {
    const obj: any = {};
    obj.apr = message.apr === "" ? undefined : message.apr;
    return obj;
  },
  fromAminoMsg(object: QueryAprResponseAminoMsg): QueryAprResponse {
    return QueryAprResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAprResponseProtoMsg): QueryAprResponse {
    return QueryAprResponse.decode(message.value);
  },
  toProto(message: QueryAprResponse): Uint8Array {
    return QueryAprResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAprResponse): QueryAprResponseProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryAprResponse",
      value: QueryAprResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAprsRequest(): QueryAprsRequest {
  return {};
}
export const QueryAprsRequest = {
  typeUrl: "/elys.masterchef.QueryAprsRequest",
  encode(_: QueryAprsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAprsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAprsRequest();
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
  fromPartial(_: Partial<QueryAprsRequest>): QueryAprsRequest {
    const message = createBaseQueryAprsRequest();
    return message;
  },
  fromAmino(_: QueryAprsRequestAmino): QueryAprsRequest {
    const message = createBaseQueryAprsRequest();
    return message;
  },
  toAmino(_: QueryAprsRequest): QueryAprsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAprsRequestAminoMsg): QueryAprsRequest {
    return QueryAprsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAprsRequestProtoMsg): QueryAprsRequest {
    return QueryAprsRequest.decode(message.value);
  },
  toProto(message: QueryAprsRequest): Uint8Array {
    return QueryAprsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAprsRequest): QueryAprsRequestProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryAprsRequest",
      value: QueryAprsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAprsResponse(): QueryAprsResponse {
  return {
    usdcAprUsdc: "",
    edenAprUsdc: "",
    usdcAprEdenb: "",
    edenAprEdenb: "",
    usdcAprEden: "",
    edenAprEden: "",
    edenbAprEden: "",
    usdcAprElys: "",
    edenAprElys: "",
    edenbAprElys: ""
  };
}
export const QueryAprsResponse = {
  typeUrl: "/elys.masterchef.QueryAprsResponse",
  encode(message: QueryAprsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.usdcAprUsdc !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.usdcAprUsdc, 18).atomics);
    }
    if (message.edenAprUsdc !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.edenAprUsdc, 18).atomics);
    }
    if (message.usdcAprEdenb !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.usdcAprEdenb, 18).atomics);
    }
    if (message.edenAprEdenb !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.edenAprEdenb, 18).atomics);
    }
    if (message.usdcAprEden !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.usdcAprEden, 18).atomics);
    }
    if (message.edenAprEden !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.edenAprEden, 18).atomics);
    }
    if (message.edenbAprEden !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.edenbAprEden, 18).atomics);
    }
    if (message.usdcAprElys !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.usdcAprElys, 18).atomics);
    }
    if (message.edenAprElys !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.edenAprElys, 18).atomics);
    }
    if (message.edenbAprElys !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.edenbAprElys, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAprsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAprsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.usdcAprUsdc = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.edenAprUsdc = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.usdcAprEdenb = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.edenAprEdenb = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.usdcAprEden = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.edenAprEden = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.edenbAprEden = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.usdcAprElys = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.edenAprElys = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.edenbAprElys = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAprsResponse>): QueryAprsResponse {
    const message = createBaseQueryAprsResponse();
    message.usdcAprUsdc = object.usdcAprUsdc ?? "";
    message.edenAprUsdc = object.edenAprUsdc ?? "";
    message.usdcAprEdenb = object.usdcAprEdenb ?? "";
    message.edenAprEdenb = object.edenAprEdenb ?? "";
    message.usdcAprEden = object.usdcAprEden ?? "";
    message.edenAprEden = object.edenAprEden ?? "";
    message.edenbAprEden = object.edenbAprEden ?? "";
    message.usdcAprElys = object.usdcAprElys ?? "";
    message.edenAprElys = object.edenAprElys ?? "";
    message.edenbAprElys = object.edenbAprElys ?? "";
    return message;
  },
  fromAmino(object: QueryAprsResponseAmino): QueryAprsResponse {
    const message = createBaseQueryAprsResponse();
    if (object.usdc_apr_usdc !== undefined && object.usdc_apr_usdc !== null) {
      message.usdcAprUsdc = object.usdc_apr_usdc;
    }
    if (object.eden_apr_usdc !== undefined && object.eden_apr_usdc !== null) {
      message.edenAprUsdc = object.eden_apr_usdc;
    }
    if (object.usdc_apr_edenb !== undefined && object.usdc_apr_edenb !== null) {
      message.usdcAprEdenb = object.usdc_apr_edenb;
    }
    if (object.eden_apr_edenb !== undefined && object.eden_apr_edenb !== null) {
      message.edenAprEdenb = object.eden_apr_edenb;
    }
    if (object.usdc_apr_eden !== undefined && object.usdc_apr_eden !== null) {
      message.usdcAprEden = object.usdc_apr_eden;
    }
    if (object.eden_apr_eden !== undefined && object.eden_apr_eden !== null) {
      message.edenAprEden = object.eden_apr_eden;
    }
    if (object.edenb_apr_eden !== undefined && object.edenb_apr_eden !== null) {
      message.edenbAprEden = object.edenb_apr_eden;
    }
    if (object.usdc_apr_elys !== undefined && object.usdc_apr_elys !== null) {
      message.usdcAprElys = object.usdc_apr_elys;
    }
    if (object.eden_apr_elys !== undefined && object.eden_apr_elys !== null) {
      message.edenAprElys = object.eden_apr_elys;
    }
    if (object.edenb_apr_elys !== undefined && object.edenb_apr_elys !== null) {
      message.edenbAprElys = object.edenb_apr_elys;
    }
    return message;
  },
  toAmino(message: QueryAprsResponse): QueryAprsResponseAmino {
    const obj: any = {};
    obj.usdc_apr_usdc = message.usdcAprUsdc === "" ? undefined : message.usdcAprUsdc;
    obj.eden_apr_usdc = message.edenAprUsdc === "" ? undefined : message.edenAprUsdc;
    obj.usdc_apr_edenb = message.usdcAprEdenb === "" ? undefined : message.usdcAprEdenb;
    obj.eden_apr_edenb = message.edenAprEdenb === "" ? undefined : message.edenAprEdenb;
    obj.usdc_apr_eden = message.usdcAprEden === "" ? undefined : message.usdcAprEden;
    obj.eden_apr_eden = message.edenAprEden === "" ? undefined : message.edenAprEden;
    obj.edenb_apr_eden = message.edenbAprEden === "" ? undefined : message.edenbAprEden;
    obj.usdc_apr_elys = message.usdcAprElys === "" ? undefined : message.usdcAprElys;
    obj.eden_apr_elys = message.edenAprElys === "" ? undefined : message.edenAprElys;
    obj.edenb_apr_elys = message.edenbAprElys === "" ? undefined : message.edenbAprElys;
    return obj;
  },
  fromAminoMsg(object: QueryAprsResponseAminoMsg): QueryAprsResponse {
    return QueryAprsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAprsResponseProtoMsg): QueryAprsResponse {
    return QueryAprsResponse.decode(message.value);
  },
  toProto(message: QueryAprsResponse): Uint8Array {
    return QueryAprsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAprsResponse): QueryAprsResponseProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryAprsResponse",
      value: QueryAprsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolRewardsRequest(): QueryPoolRewardsRequest {
  return {
    poolIds: [],
    pagination: undefined
  };
}
export const QueryPoolRewardsRequest = {
  typeUrl: "/elys.masterchef.QueryPoolRewardsRequest",
  encode(message: QueryPoolRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.poolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64());
            }
          } else {
            message.poolIds.push(reader.uint64());
          }
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
  fromPartial(object: Partial<QueryPoolRewardsRequest>): QueryPoolRewardsRequest {
    const message = createBaseQueryPoolRewardsRequest();
    message.poolIds = object.poolIds?.map(e => BigInt(e.toString())) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolRewardsRequestAmino): QueryPoolRewardsRequest {
    const message = createBaseQueryPoolRewardsRequest();
    message.poolIds = object.pool_ids?.map(e => BigInt(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolRewardsRequest): QueryPoolRewardsRequestAmino {
    const obj: any = {};
    if (message.poolIds) {
      obj.pool_ids = message.poolIds.map(e => e.toString());
    } else {
      obj.pool_ids = message.poolIds;
    }
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolRewardsRequestAminoMsg): QueryPoolRewardsRequest {
    return QueryPoolRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolRewardsRequestProtoMsg): QueryPoolRewardsRequest {
    return QueryPoolRewardsRequest.decode(message.value);
  },
  toProto(message: QueryPoolRewardsRequest): Uint8Array {
    return QueryPoolRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRewardsRequest): QueryPoolRewardsRequestProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryPoolRewardsRequest",
      value: QueryPoolRewardsRequest.encode(message).finish()
    };
  }
};
function createBasePoolRewards(): PoolRewards {
  return {
    poolId: BigInt(0),
    rewardsUsd: "",
    rewardCoins: [],
    edenForward: Coin.fromPartial({}),
    rewardsUsdApr: "",
    externalRewardsApr: ""
  };
}
export const PoolRewards = {
  typeUrl: "/elys.masterchef.PoolRewards",
  encode(message: PoolRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.rewardsUsd !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.rewardsUsd, 18).atomics);
    }
    for (const v of message.rewardCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.edenForward !== undefined) {
      Coin.encode(message.edenForward, writer.uint32(34).fork()).ldelim();
    }
    if (message.rewardsUsdApr !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.rewardsUsdApr, 18).atomics);
    }
    if (message.externalRewardsApr !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.externalRewardsApr, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.rewardsUsd = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.rewardCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.edenForward = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.rewardsUsdApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.externalRewardsApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PoolRewards>): PoolRewards {
    const message = createBasePoolRewards();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.rewardsUsd = object.rewardsUsd ?? "";
    message.rewardCoins = object.rewardCoins?.map(e => Coin.fromPartial(e)) || [];
    message.edenForward = object.edenForward !== undefined && object.edenForward !== null ? Coin.fromPartial(object.edenForward) : undefined;
    message.rewardsUsdApr = object.rewardsUsdApr ?? "";
    message.externalRewardsApr = object.externalRewardsApr ?? "";
    return message;
  },
  fromAmino(object: PoolRewardsAmino): PoolRewards {
    const message = createBasePoolRewards();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.rewards_usd !== undefined && object.rewards_usd !== null) {
      message.rewardsUsd = object.rewards_usd;
    }
    message.rewardCoins = object.reward_coins?.map(e => Coin.fromAmino(e)) || [];
    if (object.eden_forward !== undefined && object.eden_forward !== null) {
      message.edenForward = Coin.fromAmino(object.eden_forward);
    }
    if (object.rewards_usd_apr !== undefined && object.rewards_usd_apr !== null) {
      message.rewardsUsdApr = object.rewards_usd_apr;
    }
    if (object.external_rewards_apr !== undefined && object.external_rewards_apr !== null) {
      message.externalRewardsApr = object.external_rewards_apr;
    }
    return message;
  },
  toAmino(message: PoolRewards): PoolRewardsAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.rewards_usd = message.rewardsUsd === "" ? undefined : message.rewardsUsd;
    if (message.rewardCoins) {
      obj.reward_coins = message.rewardCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.reward_coins = message.rewardCoins;
    }
    obj.eden_forward = message.edenForward ? Coin.toAmino(message.edenForward) : undefined;
    obj.rewards_usd_apr = message.rewardsUsdApr === "" ? undefined : message.rewardsUsdApr;
    obj.external_rewards_apr = message.externalRewardsApr === "" ? undefined : message.externalRewardsApr;
    return obj;
  },
  fromAminoMsg(object: PoolRewardsAminoMsg): PoolRewards {
    return PoolRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolRewardsProtoMsg): PoolRewards {
    return PoolRewards.decode(message.value);
  },
  toProto(message: PoolRewards): Uint8Array {
    return PoolRewards.encode(message).finish();
  },
  toProtoMsg(message: PoolRewards): PoolRewardsProtoMsg {
    return {
      typeUrl: "/elys.masterchef.PoolRewards",
      value: PoolRewards.encode(message).finish()
    };
  }
};
function createBaseQueryPoolRewardsResponse(): QueryPoolRewardsResponse {
  return {
    pools: []
  };
}
export const QueryPoolRewardsResponse = {
  typeUrl: "/elys.masterchef.QueryPoolRewardsResponse",
  encode(message: QueryPoolRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      PoolRewards.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(PoolRewards.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolRewardsResponse>): QueryPoolRewardsResponse {
    const message = createBaseQueryPoolRewardsResponse();
    message.pools = object.pools?.map(e => PoolRewards.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPoolRewardsResponseAmino): QueryPoolRewardsResponse {
    const message = createBaseQueryPoolRewardsResponse();
    message.pools = object.pools?.map(e => PoolRewards.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPoolRewardsResponse): QueryPoolRewardsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? PoolRewards.toAmino(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPoolRewardsResponseAminoMsg): QueryPoolRewardsResponse {
    return QueryPoolRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolRewardsResponseProtoMsg): QueryPoolRewardsResponse {
    return QueryPoolRewardsResponse.decode(message.value);
  },
  toProto(message: QueryPoolRewardsResponse): Uint8Array {
    return QueryPoolRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRewardsResponse): QueryPoolRewardsResponseProtoMsg {
    return {
      typeUrl: "/elys.masterchef.QueryPoolRewardsResponse",
      value: QueryPoolRewardsResponse.encode(message).finish()
    };
  }
};