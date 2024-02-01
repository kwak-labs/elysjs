import { IncentiveInfo, IncentiveInfoAmino, IncentiveInfoSDKType } from "./incentive";
import { PoolInfo, PoolInfoAmino, PoolInfoSDKType } from "./pool";
import { DexRewardsTracker, DexRewardsTrackerAmino, DexRewardsTrackerSDKType } from "./dex_rewards_traker";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** Params defines the parameters for the module. */
export interface Params {
  lpIncentives?: IncentiveInfo;
  stakeIncentives?: IncentiveInfo;
  /** Dex revenue percent for lps, `100 - reward_portion_for_lps - reward_portion_for_stakers = revenue percent for protocol`. */
  rewardPortionForLps: string;
  /** Dex revenue percent for lps, `100 - reward_portion_for_lps - reward_portion_for_stakers = revenue percent for protocol`. */
  rewardPortionForStakers: string;
  /**
   * Pool information
   * poolId, reward wallet, **multiplier**, dex rewards given
   */
  poolInfos: PoolInfo[];
  /** Number of blocks to update elys staked amount for delegators */
  elysStakeSnapInterval: bigint;
  /** Tracking dex rewards given to stakers */
  dexRewardsStakers: DexRewardsTracker;
  /** Tracking dex rewards given to LPs */
  dexRewardsLps: DexRewardsTracker;
  /** Maximum eden reward apr for stakers - [0 - 0.3] */
  maxEdenRewardAprStakers: string;
  /** Maximum eden reward apr for lps - [0 - 0.3] */
  maxEdenRewardAprLps: string;
  /** Distribution interval in blocks - number of blocks on distribution epoch */
  distributionInterval: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.incentive.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  lp_incentives?: IncentiveInfoAmino;
  stake_incentives?: IncentiveInfoAmino;
  /** Dex revenue percent for lps, `100 - reward_portion_for_lps - reward_portion_for_stakers = revenue percent for protocol`. */
  reward_portion_for_lps: string;
  /** Dex revenue percent for lps, `100 - reward_portion_for_lps - reward_portion_for_stakers = revenue percent for protocol`. */
  reward_portion_for_stakers: string;
  /**
   * Pool information
   * poolId, reward wallet, **multiplier**, dex rewards given
   */
  pool_infos: PoolInfoAmino[];
  /** Number of blocks to update elys staked amount for delegators */
  elys_stake_snap_interval: string;
  /** Tracking dex rewards given to stakers */
  dex_rewards_stakers?: DexRewardsTrackerAmino;
  /** Tracking dex rewards given to LPs */
  dex_rewards_lps?: DexRewardsTrackerAmino;
  /** Maximum eden reward apr for stakers - [0 - 0.3] */
  max_eden_reward_apr_stakers: string;
  /** Maximum eden reward apr for lps - [0 - 0.3] */
  max_eden_reward_apr_lps: string;
  /** Distribution interval in blocks - number of blocks on distribution epoch */
  distribution_interval: string;
}
export interface ParamsAminoMsg {
  type: "/elys.incentive.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  lp_incentives?: IncentiveInfoSDKType;
  stake_incentives?: IncentiveInfoSDKType;
  reward_portion_for_lps: string;
  reward_portion_for_stakers: string;
  pool_infos: PoolInfoSDKType[];
  elys_stake_snap_interval: bigint;
  dex_rewards_stakers: DexRewardsTrackerSDKType;
  dex_rewards_lps: DexRewardsTrackerSDKType;
  max_eden_reward_apr_stakers: string;
  max_eden_reward_apr_lps: string;
  distribution_interval: bigint;
}
function createBaseParams(): Params {
  return {
    lpIncentives: undefined,
    stakeIncentives: undefined,
    rewardPortionForLps: "",
    rewardPortionForStakers: "",
    poolInfos: [],
    elysStakeSnapInterval: BigInt(0),
    dexRewardsStakers: DexRewardsTracker.fromPartial({}),
    dexRewardsLps: DexRewardsTracker.fromPartial({}),
    maxEdenRewardAprStakers: "",
    maxEdenRewardAprLps: "",
    distributionInterval: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/elys.incentive.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lpIncentives !== undefined) {
      IncentiveInfo.encode(message.lpIncentives, writer.uint32(10).fork()).ldelim();
    }
    if (message.stakeIncentives !== undefined) {
      IncentiveInfo.encode(message.stakeIncentives, writer.uint32(18).fork()).ldelim();
    }
    if (message.rewardPortionForLps !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rewardPortionForLps, 18).atomics);
    }
    if (message.rewardPortionForStakers !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.rewardPortionForStakers, 18).atomics);
    }
    for (const v of message.poolInfos) {
      PoolInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.elysStakeSnapInterval !== BigInt(0)) {
      writer.uint32(48).int64(message.elysStakeSnapInterval);
    }
    if (message.dexRewardsStakers !== undefined) {
      DexRewardsTracker.encode(message.dexRewardsStakers, writer.uint32(58).fork()).ldelim();
    }
    if (message.dexRewardsLps !== undefined) {
      DexRewardsTracker.encode(message.dexRewardsLps, writer.uint32(66).fork()).ldelim();
    }
    if (message.maxEdenRewardAprStakers !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.maxEdenRewardAprStakers, 18).atomics);
    }
    if (message.maxEdenRewardAprLps !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.maxEdenRewardAprLps, 18).atomics);
    }
    if (message.distributionInterval !== BigInt(0)) {
      writer.uint32(88).int64(message.distributionInterval);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lpIncentives = IncentiveInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.stakeIncentives = IncentiveInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.rewardPortionForLps = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.rewardPortionForStakers = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.poolInfos.push(PoolInfo.decode(reader, reader.uint32()));
          break;
        case 6:
          message.elysStakeSnapInterval = reader.int64();
          break;
        case 7:
          message.dexRewardsStakers = DexRewardsTracker.decode(reader, reader.uint32());
          break;
        case 8:
          message.dexRewardsLps = DexRewardsTracker.decode(reader, reader.uint32());
          break;
        case 9:
          message.maxEdenRewardAprStakers = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.maxEdenRewardAprLps = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.distributionInterval = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.lpIncentives = object.lpIncentives !== undefined && object.lpIncentives !== null ? IncentiveInfo.fromPartial(object.lpIncentives) : undefined;
    message.stakeIncentives = object.stakeIncentives !== undefined && object.stakeIncentives !== null ? IncentiveInfo.fromPartial(object.stakeIncentives) : undefined;
    message.rewardPortionForLps = object.rewardPortionForLps ?? "";
    message.rewardPortionForStakers = object.rewardPortionForStakers ?? "";
    message.poolInfos = object.poolInfos?.map(e => PoolInfo.fromPartial(e)) || [];
    message.elysStakeSnapInterval = object.elysStakeSnapInterval !== undefined && object.elysStakeSnapInterval !== null ? BigInt(object.elysStakeSnapInterval.toString()) : BigInt(0);
    message.dexRewardsStakers = object.dexRewardsStakers !== undefined && object.dexRewardsStakers !== null ? DexRewardsTracker.fromPartial(object.dexRewardsStakers) : undefined;
    message.dexRewardsLps = object.dexRewardsLps !== undefined && object.dexRewardsLps !== null ? DexRewardsTracker.fromPartial(object.dexRewardsLps) : undefined;
    message.maxEdenRewardAprStakers = object.maxEdenRewardAprStakers ?? "";
    message.maxEdenRewardAprLps = object.maxEdenRewardAprLps ?? "";
    message.distributionInterval = object.distributionInterval !== undefined && object.distributionInterval !== null ? BigInt(object.distributionInterval.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      lpIncentives: object?.lp_incentives ? IncentiveInfo.fromAmino(object.lp_incentives) : undefined,
      stakeIncentives: object?.stake_incentives ? IncentiveInfo.fromAmino(object.stake_incentives) : undefined,
      rewardPortionForLps: object.reward_portion_for_lps,
      rewardPortionForStakers: object.reward_portion_for_stakers,
      poolInfos: Array.isArray(object?.pool_infos) ? object.pool_infos.map((e: any) => PoolInfo.fromAmino(e)) : [],
      elysStakeSnapInterval: BigInt(object.elys_stake_snap_interval),
      dexRewardsStakers: object?.dex_rewards_stakers ? DexRewardsTracker.fromAmino(object.dex_rewards_stakers) : undefined,
      dexRewardsLps: object?.dex_rewards_lps ? DexRewardsTracker.fromAmino(object.dex_rewards_lps) : undefined,
      maxEdenRewardAprStakers: object.max_eden_reward_apr_stakers,
      maxEdenRewardAprLps: object.max_eden_reward_apr_lps,
      distributionInterval: BigInt(object.distribution_interval)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.lp_incentives = message.lpIncentives ? IncentiveInfo.toAmino(message.lpIncentives) : undefined;
    obj.stake_incentives = message.stakeIncentives ? IncentiveInfo.toAmino(message.stakeIncentives) : undefined;
    obj.reward_portion_for_lps = message.rewardPortionForLps;
    obj.reward_portion_for_stakers = message.rewardPortionForStakers;
    if (message.poolInfos) {
      obj.pool_infos = message.poolInfos.map(e => e ? PoolInfo.toAmino(e) : undefined);
    } else {
      obj.pool_infos = [];
    }
    obj.elys_stake_snap_interval = message.elysStakeSnapInterval ? message.elysStakeSnapInterval.toString() : undefined;
    obj.dex_rewards_stakers = message.dexRewardsStakers ? DexRewardsTracker.toAmino(message.dexRewardsStakers) : undefined;
    obj.dex_rewards_lps = message.dexRewardsLps ? DexRewardsTracker.toAmino(message.dexRewardsLps) : undefined;
    obj.max_eden_reward_apr_stakers = message.maxEdenRewardAprStakers;
    obj.max_eden_reward_apr_lps = message.maxEdenRewardAprLps;
    obj.distribution_interval = message.distributionInterval ? message.distributionInterval.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/elys.incentive.Params",
      value: Params.encode(message).finish()
    };
  }
};