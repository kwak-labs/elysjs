import { EarnType, earnTypeFromJSON } from "../commitment/params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { Decimal } from "@cosmjs/math";
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawRewards {
  delegatorAddress: string;
  withdrawType: EarnType;
}
export interface MsgWithdrawRewardsProtoMsg {
  typeUrl: "/elys.incentive.MsgWithdrawRewards";
  value: Uint8Array;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawRewardsAmino {
  delegator_address: string;
  withdraw_type: EarnType;
}
export interface MsgWithdrawRewardsAminoMsg {
  type: "/elys.incentive.MsgWithdrawRewards";
  value: MsgWithdrawRewardsAmino;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawRewardsSDKType {
  delegator_address: string;
  withdraw_type: EarnType;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawRewardsResponse {}
export interface MsgWithdrawRewardsResponseProtoMsg {
  typeUrl: "/elys.incentive.MsgWithdrawRewardsResponse";
  value: Uint8Array;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawRewardsResponseAmino {}
export interface MsgWithdrawRewardsResponseAminoMsg {
  type: "/elys.incentive.MsgWithdrawRewardsResponse";
  value: MsgWithdrawRewardsResponseAmino;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawRewardsResponseSDKType {}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
  delegatorAddress: string;
  validatorAddress: string;
}
export interface MsgWithdrawValidatorCommissionProtoMsg {
  typeUrl: "/elys.incentive.MsgWithdrawValidatorCommission";
  value: Uint8Array;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommissionAmino {
  delegator_address: string;
  validator_address: string;
}
export interface MsgWithdrawValidatorCommissionAminoMsg {
  type: "/elys.incentive.MsgWithdrawValidatorCommission";
  value: MsgWithdrawValidatorCommissionAmino;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommissionSDKType {
  delegator_address: string;
  validator_address: string;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponse {}
export interface MsgWithdrawValidatorCommissionResponseProtoMsg {
  typeUrl: "/elys.incentive.MsgWithdrawValidatorCommissionResponse";
  value: Uint8Array;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponseAmino {}
export interface MsgWithdrawValidatorCommissionResponseAminoMsg {
  type: "/elys.incentive.MsgWithdrawValidatorCommissionResponse";
  value: MsgWithdrawValidatorCommissionResponseAmino;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponseSDKType {}
export interface MsgUpdateIncentiveParams {
  authority: string;
  rewardPortionForLps: string;
  rewardPortionForStakers: string;
  elysStakeSnapInterval: bigint;
  maxEdenRewardAprStakers: string;
  maxEdenRewardAprLps: string;
  distributionInterval: bigint;
}
export interface MsgUpdateIncentiveParamsProtoMsg {
  typeUrl: "/elys.incentive.MsgUpdateIncentiveParams";
  value: Uint8Array;
}
export interface MsgUpdateIncentiveParamsAmino {
  authority: string;
  rewardPortionForLps: string;
  rewardPortionForStakers: string;
  elysStakeSnapInterval: string;
  maxEdenRewardAprStakers: string;
  maxEdenRewardAprLps: string;
  distributionInterval: string;
}
export interface MsgUpdateIncentiveParamsAminoMsg {
  type: "/elys.incentive.MsgUpdateIncentiveParams";
  value: MsgUpdateIncentiveParamsAmino;
}
export interface MsgUpdateIncentiveParamsSDKType {
  authority: string;
  rewardPortionForLps: string;
  rewardPortionForStakers: string;
  elysStakeSnapInterval: bigint;
  maxEdenRewardAprStakers: string;
  maxEdenRewardAprLps: string;
  distributionInterval: bigint;
}
export interface MsgUpdateIncentiveParamsResponse {}
export interface MsgUpdateIncentiveParamsResponseProtoMsg {
  typeUrl: "/elys.incentive.MsgUpdateIncentiveParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateIncentiveParamsResponseAmino {}
export interface MsgUpdateIncentiveParamsResponseAminoMsg {
  type: "/elys.incentive.MsgUpdateIncentiveParamsResponse";
  value: MsgUpdateIncentiveParamsResponseAmino;
}
export interface MsgUpdateIncentiveParamsResponseSDKType {}
export interface MsgBeginRedelegate {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
  amount: Coin;
}
export interface MsgBeginRedelegateProtoMsg {
  typeUrl: "/elys.incentive.MsgBeginRedelegate";
  value: Uint8Array;
}
export interface MsgBeginRedelegateAmino {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
  amount?: CoinAmino;
}
export interface MsgBeginRedelegateAminoMsg {
  type: "/elys.incentive.MsgBeginRedelegate";
  value: MsgBeginRedelegateAmino;
}
export interface MsgBeginRedelegateSDKType {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
  amount: CoinSDKType;
}
export interface MsgCancelUnbondingDelegation {
  delegatorAddress: string;
  validatorAddress: string;
  /** amount is always less than or equal to unbonding delegation entry balance */
  amount: Coin;
  /** creation_height is the height which the unbonding took place. */
  creationHeight: bigint;
}
export interface MsgCancelUnbondingDelegationProtoMsg {
  typeUrl: "/elys.incentive.MsgCancelUnbondingDelegation";
  value: Uint8Array;
}
export interface MsgCancelUnbondingDelegationAmino {
  delegator_address: string;
  validator_address: string;
  /** amount is always less than or equal to unbonding delegation entry balance */
  amount?: CoinAmino;
  /** creation_height is the height which the unbonding took place. */
  creation_height: string;
}
export interface MsgCancelUnbondingDelegationAminoMsg {
  type: "/elys.incentive.MsgCancelUnbondingDelegation";
  value: MsgCancelUnbondingDelegationAmino;
}
export interface MsgCancelUnbondingDelegationSDKType {
  delegator_address: string;
  validator_address: string;
  amount: CoinSDKType;
  creation_height: bigint;
}
export interface PoolMultiplier {
  poolId: bigint;
  multiplier: string;
}
export interface PoolMultiplierProtoMsg {
  typeUrl: "/elys.incentive.PoolMultiplier";
  value: Uint8Array;
}
export interface PoolMultiplierAmino {
  pool_id: string;
  multiplier: string;
}
export interface PoolMultiplierAminoMsg {
  type: "/elys.incentive.PoolMultiplier";
  value: PoolMultiplierAmino;
}
export interface PoolMultiplierSDKType {
  pool_id: bigint;
  multiplier: string;
}
export interface MsgUpdatePoolMultipliers {
  authority: string;
  poolMultipliers: PoolMultiplier[];
}
export interface MsgUpdatePoolMultipliersProtoMsg {
  typeUrl: "/elys.incentive.MsgUpdatePoolMultipliers";
  value: Uint8Array;
}
export interface MsgUpdatePoolMultipliersAmino {
  authority: string;
  pool_multipliers: PoolMultiplierAmino[];
}
export interface MsgUpdatePoolMultipliersAminoMsg {
  type: "/elys.incentive.MsgUpdatePoolMultipliers";
  value: MsgUpdatePoolMultipliersAmino;
}
export interface MsgUpdatePoolMultipliersSDKType {
  authority: string;
  pool_multipliers: PoolMultiplierSDKType[];
}
export interface MsgUpdatePoolMultipliersResponse {}
export interface MsgUpdatePoolMultipliersResponseProtoMsg {
  typeUrl: "/elys.incentive.MsgUpdatePoolMultipliersResponse";
  value: Uint8Array;
}
export interface MsgUpdatePoolMultipliersResponseAmino {}
export interface MsgUpdatePoolMultipliersResponseAminoMsg {
  type: "/elys.incentive.MsgUpdatePoolMultipliersResponse";
  value: MsgUpdatePoolMultipliersResponseAmino;
}
export interface MsgUpdatePoolMultipliersResponseSDKType {}
function createBaseMsgWithdrawRewards(): MsgWithdrawRewards {
  return {
    delegatorAddress: "",
    withdrawType: 0
  };
}
export const MsgWithdrawRewards = {
  typeUrl: "/elys.incentive.MsgWithdrawRewards",
  encode(message: MsgWithdrawRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawType !== 0) {
      writer.uint32(16).int32(message.withdrawType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.withdrawType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawRewards>): MsgWithdrawRewards {
    const message = createBaseMsgWithdrawRewards();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.withdrawType = object.withdrawType ?? 0;
    return message;
  },
  fromAmino(object: MsgWithdrawRewardsAmino): MsgWithdrawRewards {
    return {
      delegatorAddress: object.delegator_address,
      withdrawType: isSet(object.withdraw_type) ? earnTypeFromJSON(object.withdraw_type) : -1
    };
  },
  toAmino(message: MsgWithdrawRewards): MsgWithdrawRewardsAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.withdraw_type = message.withdrawType;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawRewardsAminoMsg): MsgWithdrawRewards {
    return MsgWithdrawRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawRewardsProtoMsg): MsgWithdrawRewards {
    return MsgWithdrawRewards.decode(message.value);
  },
  toProto(message: MsgWithdrawRewards): Uint8Array {
    return MsgWithdrawRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawRewards): MsgWithdrawRewardsProtoMsg {
    return {
      typeUrl: "/elys.incentive.MsgWithdrawRewards",
      value: MsgWithdrawRewards.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawRewardsResponse(): MsgWithdrawRewardsResponse {
  return {};
}
export const MsgWithdrawRewardsResponse = {
  typeUrl: "/elys.incentive.MsgWithdrawRewardsResponse",
  encode(_: MsgWithdrawRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewardsResponse();
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
  fromPartial(_: Partial<MsgWithdrawRewardsResponse>): MsgWithdrawRewardsResponse {
    const message = createBaseMsgWithdrawRewardsResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawRewardsResponseAmino): MsgWithdrawRewardsResponse {
    return {};
  },
  toAmino(_: MsgWithdrawRewardsResponse): MsgWithdrawRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawRewardsResponseAminoMsg): MsgWithdrawRewardsResponse {
    return MsgWithdrawRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawRewardsResponseProtoMsg): MsgWithdrawRewardsResponse {
    return MsgWithdrawRewardsResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawRewardsResponse): Uint8Array {
    return MsgWithdrawRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawRewardsResponse): MsgWithdrawRewardsResponseProtoMsg {
    return {
      typeUrl: "/elys.incentive.MsgWithdrawRewardsResponse",
      value: MsgWithdrawRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawValidatorCommission(): MsgWithdrawValidatorCommission {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
export const MsgWithdrawValidatorCommission = {
  typeUrl: "/elys.incentive.MsgWithdrawValidatorCommission",
  encode(message: MsgWithdrawValidatorCommission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawValidatorCommission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawValidatorCommission>): MsgWithdrawValidatorCommission {
    const message = createBaseMsgWithdrawValidatorCommission();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawValidatorCommissionAmino): MsgWithdrawValidatorCommission {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address
    };
  },
  toAmino(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawValidatorCommissionAminoMsg): MsgWithdrawValidatorCommission {
    return MsgWithdrawValidatorCommission.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawValidatorCommissionProtoMsg): MsgWithdrawValidatorCommission {
    return MsgWithdrawValidatorCommission.decode(message.value);
  },
  toProto(message: MsgWithdrawValidatorCommission): Uint8Array {
    return MsgWithdrawValidatorCommission.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionProtoMsg {
    return {
      typeUrl: "/elys.incentive.MsgWithdrawValidatorCommission",
      value: MsgWithdrawValidatorCommission.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawValidatorCommissionResponse(): MsgWithdrawValidatorCommissionResponse {
  return {};
}
export const MsgWithdrawValidatorCommissionResponse = {
  typeUrl: "/elys.incentive.MsgWithdrawValidatorCommissionResponse",
  encode(_: MsgWithdrawValidatorCommissionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawValidatorCommissionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
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
  fromPartial(_: Partial<MsgWithdrawValidatorCommissionResponse>): MsgWithdrawValidatorCommissionResponse {
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawValidatorCommissionResponseAmino): MsgWithdrawValidatorCommissionResponse {
    return {};
  },
  toAmino(_: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawValidatorCommissionResponseAminoMsg): MsgWithdrawValidatorCommissionResponse {
    return MsgWithdrawValidatorCommissionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawValidatorCommissionResponseProtoMsg): MsgWithdrawValidatorCommissionResponse {
    return MsgWithdrawValidatorCommissionResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawValidatorCommissionResponse): Uint8Array {
    return MsgWithdrawValidatorCommissionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseProtoMsg {
    return {
      typeUrl: "/elys.incentive.MsgWithdrawValidatorCommissionResponse",
      value: MsgWithdrawValidatorCommissionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateIncentiveParams(): MsgUpdateIncentiveParams {
  return {
    authority: "",
    rewardPortionForLps: "",
    rewardPortionForStakers: "",
    elysStakeSnapInterval: BigInt(0),
    maxEdenRewardAprStakers: "",
    maxEdenRewardAprLps: "",
    distributionInterval: BigInt(0)
  };
}
export const MsgUpdateIncentiveParams = {
  typeUrl: "/elys.incentive.MsgUpdateIncentiveParams",
  encode(message: MsgUpdateIncentiveParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.rewardPortionForLps !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.rewardPortionForLps, 18).atomics);
    }
    if (message.rewardPortionForStakers !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rewardPortionForStakers, 18).atomics);
    }
    if (message.elysStakeSnapInterval !== BigInt(0)) {
      writer.uint32(32).int64(message.elysStakeSnapInterval);
    }
    if (message.maxEdenRewardAprStakers !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.maxEdenRewardAprStakers, 18).atomics);
    }
    if (message.maxEdenRewardAprLps !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.maxEdenRewardAprLps, 18).atomics);
    }
    if (message.distributionInterval !== BigInt(0)) {
      writer.uint32(56).int64(message.distributionInterval);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateIncentiveParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateIncentiveParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.rewardPortionForLps = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.rewardPortionForStakers = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.elysStakeSnapInterval = reader.int64();
          break;
        case 5:
          message.maxEdenRewardAprStakers = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.maxEdenRewardAprLps = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.distributionInterval = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateIncentiveParams>): MsgUpdateIncentiveParams {
    const message = createBaseMsgUpdateIncentiveParams();
    message.authority = object.authority ?? "";
    message.rewardPortionForLps = object.rewardPortionForLps ?? "";
    message.rewardPortionForStakers = object.rewardPortionForStakers ?? "";
    message.elysStakeSnapInterval = object.elysStakeSnapInterval !== undefined && object.elysStakeSnapInterval !== null ? BigInt(object.elysStakeSnapInterval.toString()) : BigInt(0);
    message.maxEdenRewardAprStakers = object.maxEdenRewardAprStakers ?? "";
    message.maxEdenRewardAprLps = object.maxEdenRewardAprLps ?? "";
    message.distributionInterval = object.distributionInterval !== undefined && object.distributionInterval !== null ? BigInt(object.distributionInterval.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateIncentiveParamsAmino): MsgUpdateIncentiveParams {
    return {
      authority: object.authority,
      rewardPortionForLps: object.rewardPortionForLps,
      rewardPortionForStakers: object.rewardPortionForStakers,
      elysStakeSnapInterval: BigInt(object.elysStakeSnapInterval),
      maxEdenRewardAprStakers: object.maxEdenRewardAprStakers,
      maxEdenRewardAprLps: object.maxEdenRewardAprLps,
      distributionInterval: BigInt(object.distributionInterval)
    };
  },
  toAmino(message: MsgUpdateIncentiveParams): MsgUpdateIncentiveParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.rewardPortionForLps = message.rewardPortionForLps;
    obj.rewardPortionForStakers = message.rewardPortionForStakers;
    obj.elysStakeSnapInterval = message.elysStakeSnapInterval ? message.elysStakeSnapInterval.toString() : undefined;
    obj.maxEdenRewardAprStakers = message.maxEdenRewardAprStakers;
    obj.maxEdenRewardAprLps = message.maxEdenRewardAprLps;
    obj.distributionInterval = message.distributionInterval ? message.distributionInterval.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateIncentiveParamsAminoMsg): MsgUpdateIncentiveParams {
    return MsgUpdateIncentiveParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateIncentiveParamsProtoMsg): MsgUpdateIncentiveParams {
    return MsgUpdateIncentiveParams.decode(message.value);
  },
  toProto(message: MsgUpdateIncentiveParams): Uint8Array {
    return MsgUpdateIncentiveParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateIncentiveParams): MsgUpdateIncentiveParamsProtoMsg {
    return {
      typeUrl: "/elys.incentive.MsgUpdateIncentiveParams",
      value: MsgUpdateIncentiveParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateIncentiveParamsResponse(): MsgUpdateIncentiveParamsResponse {
  return {};
}
export const MsgUpdateIncentiveParamsResponse = {
  typeUrl: "/elys.incentive.MsgUpdateIncentiveParamsResponse",
  encode(_: MsgUpdateIncentiveParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateIncentiveParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateIncentiveParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateIncentiveParamsResponse>): MsgUpdateIncentiveParamsResponse {
    const message = createBaseMsgUpdateIncentiveParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateIncentiveParamsResponseAmino): MsgUpdateIncentiveParamsResponse {
    return {};
  },
  toAmino(_: MsgUpdateIncentiveParamsResponse): MsgUpdateIncentiveParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateIncentiveParamsResponseAminoMsg): MsgUpdateIncentiveParamsResponse {
    return MsgUpdateIncentiveParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateIncentiveParamsResponseProtoMsg): MsgUpdateIncentiveParamsResponse {
    return MsgUpdateIncentiveParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateIncentiveParamsResponse): Uint8Array {
    return MsgUpdateIncentiveParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateIncentiveParamsResponse): MsgUpdateIncentiveParamsResponseProtoMsg {
    return {
      typeUrl: "/elys.incentive.MsgUpdateIncentiveParamsResponse",
      value: MsgUpdateIncentiveParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBeginRedelegate(): MsgBeginRedelegate {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgBeginRedelegate = {
  typeUrl: "/elys.incentive.MsgBeginRedelegate",
  encode(message: MsgBeginRedelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginRedelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBeginRedelegate>): MsgBeginRedelegate {
    const message = createBaseMsgBeginRedelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgBeginRedelegateAmino): MsgBeginRedelegate {
    return {
      delegatorAddress: object.delegator_address,
      validatorSrcAddress: object.validator_src_address,
      validatorDstAddress: object.validator_dst_address,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgBeginRedelegate): MsgBeginRedelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_src_address = message.validatorSrcAddress;
    obj.validator_dst_address = message.validatorDstAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBeginRedelegateAminoMsg): MsgBeginRedelegate {
    return MsgBeginRedelegate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBeginRedelegateProtoMsg): MsgBeginRedelegate {
    return MsgBeginRedelegate.decode(message.value);
  },
  toProto(message: MsgBeginRedelegate): Uint8Array {
    return MsgBeginRedelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginRedelegate): MsgBeginRedelegateProtoMsg {
    return {
      typeUrl: "/elys.incentive.MsgBeginRedelegate",
      value: MsgBeginRedelegate.encode(message).finish()
    };
  }
};
function createBaseMsgCancelUnbondingDelegation(): MsgCancelUnbondingDelegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: Coin.fromPartial({}),
    creationHeight: BigInt(0)
  };
}
export const MsgCancelUnbondingDelegation = {
  typeUrl: "/elys.incentive.MsgCancelUnbondingDelegation",
  encode(message: MsgCancelUnbondingDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.creationHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUnbondingDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.creationHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCancelUnbondingDelegation>): MsgCancelUnbondingDelegation {
    const message = createBaseMsgCancelUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelUnbondingDelegationAmino): MsgCancelUnbondingDelegation {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      creationHeight: BigInt(object.creation_height)
    };
  },
  toAmino(message: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.creation_height = message.creationHeight ? message.creationHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelUnbondingDelegationAminoMsg): MsgCancelUnbondingDelegation {
    return MsgCancelUnbondingDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelUnbondingDelegationProtoMsg): MsgCancelUnbondingDelegation {
    return MsgCancelUnbondingDelegation.decode(message.value);
  },
  toProto(message: MsgCancelUnbondingDelegation): Uint8Array {
    return MsgCancelUnbondingDelegation.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationProtoMsg {
    return {
      typeUrl: "/elys.incentive.MsgCancelUnbondingDelegation",
      value: MsgCancelUnbondingDelegation.encode(message).finish()
    };
  }
};
function createBasePoolMultiplier(): PoolMultiplier {
  return {
    poolId: BigInt(0),
    multiplier: ""
  };
}
export const PoolMultiplier = {
  typeUrl: "/elys.incentive.PoolMultiplier",
  encode(message: PoolMultiplier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.multiplier !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.multiplier, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolMultiplier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolMultiplier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.multiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PoolMultiplier>): PoolMultiplier {
    const message = createBasePoolMultiplier();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.multiplier = object.multiplier ?? "";
    return message;
  },
  fromAmino(object: PoolMultiplierAmino): PoolMultiplier {
    return {
      poolId: BigInt(object.pool_id),
      multiplier: object.multiplier
    };
  },
  toAmino(message: PoolMultiplier): PoolMultiplierAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.multiplier = message.multiplier;
    return obj;
  },
  fromAminoMsg(object: PoolMultiplierAminoMsg): PoolMultiplier {
    return PoolMultiplier.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolMultiplierProtoMsg): PoolMultiplier {
    return PoolMultiplier.decode(message.value);
  },
  toProto(message: PoolMultiplier): Uint8Array {
    return PoolMultiplier.encode(message).finish();
  },
  toProtoMsg(message: PoolMultiplier): PoolMultiplierProtoMsg {
    return {
      typeUrl: "/elys.incentive.PoolMultiplier",
      value: PoolMultiplier.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePoolMultipliers(): MsgUpdatePoolMultipliers {
  return {
    authority: "",
    poolMultipliers: []
  };
}
export const MsgUpdatePoolMultipliers = {
  typeUrl: "/elys.incentive.MsgUpdatePoolMultipliers",
  encode(message: MsgUpdatePoolMultipliers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.poolMultipliers) {
      PoolMultiplier.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePoolMultipliers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePoolMultipliers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolMultipliers.push(PoolMultiplier.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdatePoolMultipliers>): MsgUpdatePoolMultipliers {
    const message = createBaseMsgUpdatePoolMultipliers();
    message.authority = object.authority ?? "";
    message.poolMultipliers = object.poolMultipliers?.map(e => PoolMultiplier.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUpdatePoolMultipliersAmino): MsgUpdatePoolMultipliers {
    return {
      authority: object.authority,
      poolMultipliers: Array.isArray(object?.pool_multipliers) ? object.pool_multipliers.map((e: any) => PoolMultiplier.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgUpdatePoolMultipliers): MsgUpdatePoolMultipliersAmino {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.poolMultipliers) {
      obj.pool_multipliers = message.poolMultipliers.map(e => e ? PoolMultiplier.toAmino(e) : undefined);
    } else {
      obj.pool_multipliers = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePoolMultipliersAminoMsg): MsgUpdatePoolMultipliers {
    return MsgUpdatePoolMultipliers.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePoolMultipliersProtoMsg): MsgUpdatePoolMultipliers {
    return MsgUpdatePoolMultipliers.decode(message.value);
  },
  toProto(message: MsgUpdatePoolMultipliers): Uint8Array {
    return MsgUpdatePoolMultipliers.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePoolMultipliers): MsgUpdatePoolMultipliersProtoMsg {
    return {
      typeUrl: "/elys.incentive.MsgUpdatePoolMultipliers",
      value: MsgUpdatePoolMultipliers.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePoolMultipliersResponse(): MsgUpdatePoolMultipliersResponse {
  return {};
}
export const MsgUpdatePoolMultipliersResponse = {
  typeUrl: "/elys.incentive.MsgUpdatePoolMultipliersResponse",
  encode(_: MsgUpdatePoolMultipliersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePoolMultipliersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePoolMultipliersResponse();
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
  fromPartial(_: Partial<MsgUpdatePoolMultipliersResponse>): MsgUpdatePoolMultipliersResponse {
    const message = createBaseMsgUpdatePoolMultipliersResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePoolMultipliersResponseAmino): MsgUpdatePoolMultipliersResponse {
    return {};
  },
  toAmino(_: MsgUpdatePoolMultipliersResponse): MsgUpdatePoolMultipliersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePoolMultipliersResponseAminoMsg): MsgUpdatePoolMultipliersResponse {
    return MsgUpdatePoolMultipliersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePoolMultipliersResponseProtoMsg): MsgUpdatePoolMultipliersResponse {
    return MsgUpdatePoolMultipliersResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePoolMultipliersResponse): Uint8Array {
    return MsgUpdatePoolMultipliersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePoolMultipliersResponse): MsgUpdatePoolMultipliersResponseProtoMsg {
    return {
      typeUrl: "/elys.incentive.MsgUpdatePoolMultipliersResponse",
      value: MsgUpdatePoolMultipliersResponse.encode(message).finish()
    };
  }
};