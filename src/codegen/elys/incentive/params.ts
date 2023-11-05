import { IncentiveInfo, IncentiveInfoAmino, IncentiveInfoSDKType } from "./incentive";
import { PoolInfo, PoolInfoAmino, PoolInfoSDKType } from "./pool";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** Params defines the parameters for the module. */
export interface Params {
  lpIncentives: IncentiveInfo[];
  stakeIncentives: IncentiveInfo[];
  communityTax: string;
  withdrawAddrEnabled: boolean;
  /** Dex revenue percent for lps, 100 - reward_portion_for_lps = revenue percent for stakers. */
  rewardPortionForLps: string;
  /**
   * Pool information
   * poolId, reward wallet, mulitplier
   */
  poolInfos: PoolInfo[];
  elysStakeTrackingRate: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.incentive.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  lp_incentives: IncentiveInfoAmino[];
  stake_incentives: IncentiveInfoAmino[];
  community_tax: string;
  withdraw_addr_enabled: boolean;
  /** Dex revenue percent for lps, 100 - reward_portion_for_lps = revenue percent for stakers. */
  reward_portion_for_lps: string;
  /**
   * Pool information
   * poolId, reward wallet, mulitplier
   */
  pool_infos: PoolInfoAmino[];
  elys_stake_tracking_rate: string;
}
export interface ParamsAminoMsg {
  type: "/elys.incentive.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  lp_incentives: IncentiveInfoSDKType[];
  stake_incentives: IncentiveInfoSDKType[];
  community_tax: string;
  withdraw_addr_enabled: boolean;
  reward_portion_for_lps: string;
  pool_infos: PoolInfoSDKType[];
  elys_stake_tracking_rate: bigint;
}
function createBaseParams(): Params {
  return {
    lpIncentives: [],
    stakeIncentives: [],
    communityTax: "",
    withdrawAddrEnabled: false,
    rewardPortionForLps: "",
    poolInfos: [],
    elysStakeTrackingRate: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/elys.incentive.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.lpIncentives) {
      IncentiveInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.stakeIncentives) {
      IncentiveInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.communityTax !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.communityTax, 18).atomics);
    }
    if (message.withdrawAddrEnabled === true) {
      writer.uint32(32).bool(message.withdrawAddrEnabled);
    }
    if (message.rewardPortionForLps !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.rewardPortionForLps, 18).atomics);
    }
    for (const v of message.poolInfos) {
      PoolInfo.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.elysStakeTrackingRate !== BigInt(0)) {
      writer.uint32(56).int64(message.elysStakeTrackingRate);
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
          message.lpIncentives.push(IncentiveInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.stakeIncentives.push(IncentiveInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.communityTax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.withdrawAddrEnabled = reader.bool();
          break;
        case 5:
          message.rewardPortionForLps = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.poolInfos.push(PoolInfo.decode(reader, reader.uint32()));
          break;
        case 7:
          message.elysStakeTrackingRate = reader.int64();
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
    message.lpIncentives = object.lpIncentives?.map(e => IncentiveInfo.fromPartial(e)) || [];
    message.stakeIncentives = object.stakeIncentives?.map(e => IncentiveInfo.fromPartial(e)) || [];
    message.communityTax = object.communityTax ?? "";
    message.withdrawAddrEnabled = object.withdrawAddrEnabled ?? false;
    message.rewardPortionForLps = object.rewardPortionForLps ?? "";
    message.poolInfos = object.poolInfos?.map(e => PoolInfo.fromPartial(e)) || [];
    message.elysStakeTrackingRate = object.elysStakeTrackingRate !== undefined && object.elysStakeTrackingRate !== null ? BigInt(object.elysStakeTrackingRate.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      lpIncentives: Array.isArray(object?.lp_incentives) ? object.lp_incentives.map((e: any) => IncentiveInfo.fromAmino(e)) : [],
      stakeIncentives: Array.isArray(object?.stake_incentives) ? object.stake_incentives.map((e: any) => IncentiveInfo.fromAmino(e)) : [],
      communityTax: object.community_tax,
      withdrawAddrEnabled: object.withdraw_addr_enabled,
      rewardPortionForLps: object.reward_portion_for_lps,
      poolInfos: Array.isArray(object?.pool_infos) ? object.pool_infos.map((e: any) => PoolInfo.fromAmino(e)) : [],
      elysStakeTrackingRate: BigInt(object.elys_stake_tracking_rate)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.lpIncentives) {
      obj.lp_incentives = message.lpIncentives.map(e => e ? IncentiveInfo.toAmino(e) : undefined);
    } else {
      obj.lp_incentives = [];
    }
    if (message.stakeIncentives) {
      obj.stake_incentives = message.stakeIncentives.map(e => e ? IncentiveInfo.toAmino(e) : undefined);
    } else {
      obj.stake_incentives = [];
    }
    obj.community_tax = message.communityTax;
    obj.withdraw_addr_enabled = message.withdrawAddrEnabled;
    obj.reward_portion_for_lps = message.rewardPortionForLps;
    if (message.poolInfos) {
      obj.pool_infos = message.poolInfos.map(e => e ? PoolInfo.toAmino(e) : undefined);
    } else {
      obj.pool_infos = [];
    }
    obj.elys_stake_tracking_rate = message.elysStakeTrackingRate ? message.elysStakeTrackingRate.toString() : undefined;
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