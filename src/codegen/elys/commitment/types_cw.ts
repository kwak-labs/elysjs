import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Lockup, LockupAmino, LockupSDKType } from "./commitments";
import { EarnType, earnTypeFromJSON } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface QueryBorrowAmountRequest {
  address: string;
}
export interface QueryBorrowAmountRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryBorrowAmountRequest";
  value: Uint8Array;
}
export interface QueryBorrowAmountRequestAmino {
  address: string;
}
export interface QueryBorrowAmountRequestAminoMsg {
  type: "/elys.commitment.QueryBorrowAmountRequest";
  value: QueryBorrowAmountRequestAmino;
}
export interface QueryBorrowAmountRequestSDKType {
  address: string;
}
export interface QueryDelegatorDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddress: string;
}
export interface QueryDelegatorDelegationsRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryDelegatorDelegationsRequest";
  value: Uint8Array;
}
export interface QueryDelegatorDelegationsRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_address: string;
}
export interface QueryDelegatorDelegationsRequestAminoMsg {
  type: "/elys.commitment.QueryDelegatorDelegationsRequest";
  value: QueryDelegatorDelegationsRequestAmino;
}
export interface QueryDelegatorDelegationsRequestSDKType {
  delegator_address: string;
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface Delegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validatorAddress: string;
  /** shares define the delegation shares received. */
  shares: string;
}
export interface DelegationProtoMsg {
  typeUrl: "/elys.commitment.Delegation";
  value: Uint8Array;
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface DelegationAmino {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validator_address: string;
  /** shares define the delegation shares received. */
  shares: string;
}
export interface DelegationAminoMsg {
  type: "/elys.commitment.Delegation";
  value: DelegationAmino;
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface DelegationSDKType {
  delegator_address: string;
  validator_address: string;
  shares: string;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
  delegation: Delegation;
  balance: Coin;
}
export interface DelegationResponseProtoMsg {
  typeUrl: "/elys.commitment.DelegationResponse";
  value: Uint8Array;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponseAmino {
  delegation?: DelegationAmino;
  balance?: CoinAmino;
}
export interface DelegationResponseAminoMsg {
  type: "/elys.commitment.DelegationResponse";
  value: DelegationResponseAmino;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponseSDKType {
  delegation: DelegationSDKType;
  balance: CoinSDKType;
}
/**
 * QueryDelegatorDelegationsResponse is response message for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegationResponses: DelegationResponse[];
}
export interface QueryDelegatorDelegationsResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryDelegatorDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorDelegationsResponse is response message for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponseAmino {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegation_responses: DelegationResponseAmino[];
}
export interface QueryDelegatorDelegationsResponseAminoMsg {
  type: "/elys.commitment.QueryDelegatorDelegationsResponse";
  value: QueryDelegatorDelegationsResponseAmino;
}
/**
 * QueryDelegatorDelegationsResponse is response message for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponseSDKType {
  delegation_responses: DelegationResponseSDKType[];
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntry {
  /** creation_height is the height which the unbonding took place. */
  creationHeight: bigint;
  /** completion_time is the unix time for unbonding completion. */
  completionTime: bigint;
  /** initial_balance defines the tokens initially scheduled to receive at completion. */
  initialBalance: string;
  /** balance defines the tokens to receive at completion. */
  balance: string;
  /** Incrementing id that uniquely identifies this entry */
  unbondingId: bigint;
}
export interface UnbondingDelegationEntryProtoMsg {
  typeUrl: "/elys.commitment.UnbondingDelegationEntry";
  value: Uint8Array;
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntryAmino {
  /** creation_height is the height which the unbonding took place. */
  creation_height: string;
  /** completion_time is the unix time for unbonding completion. */
  completion_time: string;
  /** initial_balance defines the tokens initially scheduled to receive at completion. */
  initial_balance: string;
  /** balance defines the tokens to receive at completion. */
  balance: string;
  /** Incrementing id that uniquely identifies this entry */
  unbonding_id: string;
}
export interface UnbondingDelegationEntryAminoMsg {
  type: "/elys.commitment.UnbondingDelegationEntry";
  value: UnbondingDelegationEntryAmino;
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntrySDKType {
  creation_height: bigint;
  completion_time: bigint;
  initial_balance: string;
  balance: string;
  unbonding_id: bigint;
}
/** QueryDelegatorUnbondingDelegationsRequest is request message for the */
export interface QueryDelegatorUnbondingDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddress: string;
}
export interface QueryDelegatorUnbondingDelegationsRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryDelegatorUnbondingDelegationsRequest";
  value: Uint8Array;
}
/** QueryDelegatorUnbondingDelegationsRequest is request message for the */
export interface QueryDelegatorUnbondingDelegationsRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_address: string;
}
export interface QueryDelegatorUnbondingDelegationsRequestAminoMsg {
  type: "/elys.commitment.QueryDelegatorUnbondingDelegationsRequest";
  value: QueryDelegatorUnbondingDelegationsRequestAmino;
}
/** QueryDelegatorUnbondingDelegationsRequest is request message for the */
export interface QueryDelegatorUnbondingDelegationsRequestSDKType {
  delegator_address: string;
}
export interface UnbondingDelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validatorAddress: string;
  /** entries are the unbonding delegation entries. */
  entries: UnbondingDelegationEntry[];
}
export interface UnbondingDelegationProtoMsg {
  typeUrl: "/elys.commitment.UnbondingDelegation";
  value: Uint8Array;
}
export interface UnbondingDelegationAmino {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validator_address: string;
  /** entries are the unbonding delegation entries. */
  entries: UnbondingDelegationEntryAmino[];
}
export interface UnbondingDelegationAminoMsg {
  type: "/elys.commitment.UnbondingDelegation";
  value: UnbondingDelegationAmino;
}
export interface UnbondingDelegationSDKType {
  delegator_address: string;
  validator_address: string;
  entries: UnbondingDelegationEntrySDKType[];
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response message for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
}
export interface QueryDelegatorUnbondingDelegationsResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryDelegatorUnbondingDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response message for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponseAmino {
  unbonding_responses: UnbondingDelegationAmino[];
}
export interface QueryDelegatorUnbondingDelegationsResponseAminoMsg {
  type: "/elys.commitment.QueryDelegatorUnbondingDelegationsResponse";
  value: QueryDelegatorUnbondingDelegationsResponseAmino;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response message for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponseSDKType {
  unbonding_responses: UnbondingDelegationSDKType[];
}
/** QueryValidatorsRequest is request message for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
  /** status enables to query for validators matching a given status. */
  delegatorAddress: string;
}
export interface QueryValidatorsRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryValidatorsRequest";
  value: Uint8Array;
}
/** QueryValidatorsRequest is request message for Query/Validators RPC method. */
export interface QueryValidatorsRequestAmino {
  /** status enables to query for validators matching a given status. */
  delegator_address: string;
}
export interface QueryValidatorsRequestAminoMsg {
  type: "/elys.commitment.QueryValidatorsRequest";
  value: QueryValidatorsRequestAmino;
}
/** QueryValidatorsRequest is request message for Query/Validators RPC method. */
export interface QueryValidatorsRequestSDKType {
  delegator_address: string;
}
/**
 * QueryDelegatorValidatorsResponse is response message for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the validators' info of a delegator. */
  validators: ValidatorDetail[];
}
export interface QueryDelegatorValidatorsResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryDelegatorValidatorsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsResponse is response message for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseAmino {
  /** validators defines the validators' info of a delegator. */
  validators: ValidatorDetailAmino[];
}
export interface QueryDelegatorValidatorsResponseAminoMsg {
  type: "/elys.commitment.QueryDelegatorValidatorsResponse";
  value: QueryDelegatorValidatorsResponseAmino;
}
/**
 * QueryDelegatorValidatorsResponse is response message for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseSDKType {
  validators: ValidatorDetailSDKType[];
}
export interface BalanceAvailable {
  amount: string;
  usdAmount: string;
}
export interface BalanceAvailableProtoMsg {
  typeUrl: "/elys.commitment.BalanceAvailable";
  value: Uint8Array;
}
export interface BalanceAvailableAmino {
  amount: string;
  usd_amount: string;
}
export interface BalanceAvailableAminoMsg {
  type: "/elys.commitment.BalanceAvailable";
  value: BalanceAvailableAmino;
}
export interface BalanceAvailableSDKType {
  amount: string;
  usd_amount: string;
}
export interface StakedAvailable {
  amount: string;
  usdAmount: string;
  lockups: Lockup[];
}
export interface StakedAvailableProtoMsg {
  typeUrl: "/elys.commitment.StakedAvailable";
  value: Uint8Array;
}
export interface StakedAvailableAmino {
  amount: string;
  usd_amount: string;
  lockups: LockupAmino[];
}
export interface StakedAvailableAminoMsg {
  type: "/elys.commitment.StakedAvailable";
  value: StakedAvailableAmino;
}
export interface StakedAvailableSDKType {
  amount: string;
  usd_amount: string;
  lockups: LockupSDKType[];
}
export interface ValidatorDetail {
  /** The validator address. */
  address: string;
  /** The validator name. */
  name: string;
  /** Voting power percentage for this validator. */
  votingPower: string;
  /** Comission percentage for the validator. */
  commission: string;
  /** The url of the validator profile picture */
  profilePictureSrc: string;
  /**
   * The staked amount the user has w/ this validator
   * Only available if there's some and if address.
   * is sent in request object.
   */
  staked: BalanceAvailable;
}
export interface ValidatorDetailProtoMsg {
  typeUrl: "/elys.commitment.ValidatorDetail";
  value: Uint8Array;
}
export interface ValidatorDetailAmino {
  /** The validator address. */
  address: string;
  /** The validator name. */
  name: string;
  /** Voting power percentage for this validator. */
  voting_power: string;
  /** Comission percentage for the validator. */
  commission: string;
  /** The url of the validator profile picture */
  profile_picture_src: string;
  /**
   * The staked amount the user has w/ this validator
   * Only available if there's some and if address.
   * is sent in request object.
   */
  staked?: BalanceAvailableAmino;
}
export interface ValidatorDetailAminoMsg {
  type: "/elys.commitment.ValidatorDetail";
  value: ValidatorDetailAmino;
}
export interface ValidatorDetailSDKType {
  address: string;
  name: string;
  voting_power: string;
  commission: string;
  profile_picture_src: string;
  staked: BalanceAvailableSDKType;
}
export interface StakingValidator {
  /** The validator address. */
  address: string;
  /** The validator name. */
  name: string;
  /** Voting power percentage for this validator. */
  votingPower: string;
  /** Comission percentage for the validator. */
  commission: string;
  /** The url of the validator profile picture */
  profilePictureSrc: string;
}
export interface StakingValidatorProtoMsg {
  typeUrl: "/elys.commitment.StakingValidator";
  value: Uint8Array;
}
export interface StakingValidatorAmino {
  /** The validator address. */
  address: string;
  /** The validator name. */
  name: string;
  /** Voting power percentage for this validator. */
  voting_power: string;
  /** Comission percentage for the validator. */
  commission: string;
  /** The url of the validator profile picture */
  profile_picture_src: string;
}
export interface StakingValidatorAminoMsg {
  type: "/elys.commitment.StakingValidator";
  value: StakingValidatorAmino;
}
export interface StakingValidatorSDKType {
  address: string;
  name: string;
  voting_power: string;
  commission: string;
  profile_picture_src: string;
}
export interface StakedPosition {
  /** The position ID. */
  id: string;
  /** The validator that's being unstaked from. */
  validator: StakingValidator;
  /** The amount that's being staked. */
  staked: BalanceAvailable;
}
export interface StakedPositionProtoMsg {
  typeUrl: "/elys.commitment.StakedPosition";
  value: Uint8Array;
}
export interface StakedPositionAmino {
  /** The position ID. */
  id: string;
  /** The validator that's being unstaked from. */
  validator?: StakingValidatorAmino;
  /** The amount that's being staked. */
  staked?: BalanceAvailableAmino;
}
export interface StakedPositionAminoMsg {
  type: "/elys.commitment.StakedPosition";
  value: StakedPositionAmino;
}
export interface StakedPositionSDKType {
  id: string;
  validator: StakingValidatorSDKType;
  staked: BalanceAvailableSDKType;
}
export interface QueryStakedPositionResponse {
  stakedPosition: StakedPosition[];
}
export interface QueryStakedPositionResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryStakedPositionResponse";
  value: Uint8Array;
}
export interface QueryStakedPositionResponseAmino {
  staked_position: StakedPositionAmino[];
}
export interface QueryStakedPositionResponseAminoMsg {
  type: "/elys.commitment.QueryStakedPositionResponse";
  value: QueryStakedPositionResponseAmino;
}
export interface QueryStakedPositionResponseSDKType {
  staked_position: StakedPositionSDKType[];
}
export interface UnstakedPosition {
  /** The position ID. */
  id: string;
  /** The validator that's being unstaked from. */
  validator: StakingValidator;
  /** Remaining time to unstake in days. */
  remainingTime: bigint;
  /** The amount that's being staked. */
  unstaked: BalanceAvailable;
}
export interface UnstakedPositionProtoMsg {
  typeUrl: "/elys.commitment.UnstakedPosition";
  value: Uint8Array;
}
export interface UnstakedPositionAmino {
  /** The position ID. */
  id: string;
  /** The validator that's being unstaked from. */
  validator?: StakingValidatorAmino;
  /** Remaining time to unstake in days. */
  remaining_time: string;
  /** The amount that's being staked. */
  unstaked?: BalanceAvailableAmino;
}
export interface UnstakedPositionAminoMsg {
  type: "/elys.commitment.UnstakedPosition";
  value: UnstakedPositionAmino;
}
export interface UnstakedPositionSDKType {
  id: string;
  validator: StakingValidatorSDKType;
  remaining_time: bigint;
  unstaked: BalanceAvailableSDKType;
}
export interface QueryUnstakedPositionResponse {
  unstakedPosition: UnstakedPosition[];
}
export interface QueryUnstakedPositionResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryUnstakedPositionResponse";
  value: Uint8Array;
}
export interface QueryUnstakedPositionResponseAmino {
  unstaked_position: UnstakedPositionAmino[];
}
export interface QueryUnstakedPositionResponseAminoMsg {
  type: "/elys.commitment.QueryUnstakedPositionResponse";
  value: QueryUnstakedPositionResponseAmino;
}
export interface QueryUnstakedPositionResponseSDKType {
  unstaked_position: UnstakedPositionSDKType[];
}
export interface QuerySubBucketBalanceRequest {
  address: string;
  denom: string;
  program: EarnType;
}
export interface QuerySubBucketBalanceRequestProtoMsg {
  typeUrl: "/elys.commitment.QuerySubBucketBalanceRequest";
  value: Uint8Array;
}
export interface QuerySubBucketBalanceRequestAmino {
  address: string;
  denom: string;
  program: EarnType;
}
export interface QuerySubBucketBalanceRequestAminoMsg {
  type: "/elys.commitment.QuerySubBucketBalanceRequest";
  value: QuerySubBucketBalanceRequestAmino;
}
export interface QuerySubBucketBalanceRequestSDKType {
  address: string;
  denom: string;
  program: EarnType;
}
export interface QueryVestingInfoRequest {
  address: string;
}
export interface QueryVestingInfoRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryVestingInfoRequest";
  value: Uint8Array;
}
export interface QueryVestingInfoRequestAmino {
  address: string;
}
export interface QueryVestingInfoRequestAminoMsg {
  type: "/elys.commitment.QueryVestingInfoRequest";
  value: QueryVestingInfoRequestAmino;
}
export interface QueryVestingInfoRequestSDKType {
  address: string;
}
export interface VestingDetail {
  id: string;
  /** The total vest for the current vest */
  totalVest: BalanceAvailable;
  /** The balance that's already vested */
  balanceVested: BalanceAvailable;
  /** The remaining amount to vest */
  remainingVest: BalanceAvailable;
  /** Remaining time to vest. Javascript timestamp. */
  remainingTime: bigint;
}
export interface VestingDetailProtoMsg {
  typeUrl: "/elys.commitment.VestingDetail";
  value: Uint8Array;
}
export interface VestingDetailAmino {
  id: string;
  /** The total vest for the current vest */
  total_vest?: BalanceAvailableAmino;
  /** The balance that's already vested */
  balance_vested?: BalanceAvailableAmino;
  /** The remaining amount to vest */
  remaining_vest?: BalanceAvailableAmino;
  /** Remaining time to vest. Javascript timestamp. */
  remaining_time: string;
}
export interface VestingDetailAminoMsg {
  type: "/elys.commitment.VestingDetail";
  value: VestingDetailAmino;
}
export interface VestingDetailSDKType {
  id: string;
  total_vest: BalanceAvailableSDKType;
  balance_vested: BalanceAvailableSDKType;
  remaining_vest: BalanceAvailableSDKType;
  remaining_time: bigint;
}
export interface QueryVestingInfoResponse {
  vesting: BalanceAvailable;
  vestingDetails: VestingDetail[];
}
export interface QueryVestingInfoResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryVestingInfoResponse";
  value: Uint8Array;
}
export interface QueryVestingInfoResponseAmino {
  vesting?: BalanceAvailableAmino;
  vesting_details: VestingDetailAmino[];
}
export interface QueryVestingInfoResponseAminoMsg {
  type: "/elys.commitment.QueryVestingInfoResponse";
  value: QueryVestingInfoResponseAmino;
}
export interface QueryVestingInfoResponseSDKType {
  vesting: BalanceAvailableSDKType;
  vesting_details: VestingDetailSDKType[];
}
function createBaseQueryBorrowAmountRequest(): QueryBorrowAmountRequest {
  return {
    address: ""
  };
}
export const QueryBorrowAmountRequest = {
  typeUrl: "/elys.commitment.QueryBorrowAmountRequest",
  encode(message: QueryBorrowAmountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBorrowAmountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBorrowAmountRequest();
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
  fromPartial(object: Partial<QueryBorrowAmountRequest>): QueryBorrowAmountRequest {
    const message = createBaseQueryBorrowAmountRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryBorrowAmountRequestAmino): QueryBorrowAmountRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryBorrowAmountRequest): QueryBorrowAmountRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryBorrowAmountRequestAminoMsg): QueryBorrowAmountRequest {
    return QueryBorrowAmountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBorrowAmountRequestProtoMsg): QueryBorrowAmountRequest {
    return QueryBorrowAmountRequest.decode(message.value);
  },
  toProto(message: QueryBorrowAmountRequest): Uint8Array {
    return QueryBorrowAmountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBorrowAmountRequest): QueryBorrowAmountRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryBorrowAmountRequest",
      value: QueryBorrowAmountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorDelegationsRequest(): QueryDelegatorDelegationsRequest {
  return {
    delegatorAddress: ""
  };
}
export const QueryDelegatorDelegationsRequest = {
  typeUrl: "/elys.commitment.QueryDelegatorDelegationsRequest",
  encode(message: QueryDelegatorDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorDelegationsRequest>): QueryDelegatorDelegationsRequest {
    const message = createBaseQueryDelegatorDelegationsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorDelegationsRequestAmino): QueryDelegatorDelegationsRequest {
    return {
      delegatorAddress: object.delegator_address
    };
  },
  toAmino(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorDelegationsRequestAminoMsg): QueryDelegatorDelegationsRequest {
    return QueryDelegatorDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorDelegationsRequestProtoMsg): QueryDelegatorDelegationsRequest {
    return QueryDelegatorDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorDelegationsRequest): Uint8Array {
    return QueryDelegatorDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryDelegatorDelegationsRequest",
      value: QueryDelegatorDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseDelegation(): Delegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    shares: ""
  };
}
export const Delegation = {
  typeUrl: "/elys.commitment.Delegation",
  encode(message: Delegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.shares, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
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
          message.shares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Delegation>): Delegation {
    const message = createBaseDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.shares = object.shares ?? "";
    return message;
  },
  fromAmino(object: DelegationAmino): Delegation {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address,
      shares: object.shares
    };
  },
  toAmino(message: Delegation): DelegationAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.shares = message.shares;
    return obj;
  },
  fromAminoMsg(object: DelegationAminoMsg): Delegation {
    return Delegation.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationProtoMsg): Delegation {
    return Delegation.decode(message.value);
  },
  toProto(message: Delegation): Uint8Array {
    return Delegation.encode(message).finish();
  },
  toProtoMsg(message: Delegation): DelegationProtoMsg {
    return {
      typeUrl: "/elys.commitment.Delegation",
      value: Delegation.encode(message).finish()
    };
  }
};
function createBaseDelegationResponse(): DelegationResponse {
  return {
    delegation: Delegation.fromPartial({}),
    balance: Coin.fromPartial({})
  };
}
export const DelegationResponse = {
  typeUrl: "/elys.commitment.DelegationResponse",
  encode(message: DelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DelegationResponse>): DelegationResponse {
    const message = createBaseDelegationResponse();
    message.delegation = object.delegation !== undefined && object.delegation !== null ? Delegation.fromPartial(object.delegation) : undefined;
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  },
  fromAmino(object: DelegationResponseAmino): DelegationResponse {
    return {
      delegation: object?.delegation ? Delegation.fromAmino(object.delegation) : undefined,
      balance: object?.balance ? Coin.fromAmino(object.balance) : undefined
    };
  },
  toAmino(message: DelegationResponse): DelegationResponseAmino {
    const obj: any = {};
    obj.delegation = message.delegation ? Delegation.toAmino(message.delegation) : undefined;
    obj.balance = message.balance ? Coin.toAmino(message.balance) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegationResponseAminoMsg): DelegationResponse {
    return DelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationResponseProtoMsg): DelegationResponse {
    return DelegationResponse.decode(message.value);
  },
  toProto(message: DelegationResponse): Uint8Array {
    return DelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: DelegationResponse): DelegationResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.DelegationResponse",
      value: DelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorDelegationsResponse(): QueryDelegatorDelegationsResponse {
  return {
    delegationResponses: []
  };
}
export const QueryDelegatorDelegationsResponse = {
  typeUrl: "/elys.commitment.QueryDelegatorDelegationsResponse",
  encode(message: QueryDelegatorDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorDelegationsResponse>): QueryDelegatorDelegationsResponse {
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map(e => DelegationResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDelegatorDelegationsResponseAmino): QueryDelegatorDelegationsResponse {
    return {
      delegationResponses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e: any) => DelegationResponse.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegation_responses = message.delegationResponses.map(e => e ? DelegationResponse.toAmino(e) : undefined);
    } else {
      obj.delegation_responses = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorDelegationsResponseAminoMsg): QueryDelegatorDelegationsResponse {
    return QueryDelegatorDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorDelegationsResponseProtoMsg): QueryDelegatorDelegationsResponse {
    return QueryDelegatorDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorDelegationsResponse): Uint8Array {
    return QueryDelegatorDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryDelegatorDelegationsResponse",
      value: QueryDelegatorDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseUnbondingDelegationEntry(): UnbondingDelegationEntry {
  return {
    creationHeight: BigInt(0),
    completionTime: BigInt(0),
    initialBalance: "",
    balance: "",
    unbondingId: BigInt(0)
  };
}
export const UnbondingDelegationEntry = {
  typeUrl: "/elys.commitment.UnbondingDelegationEntry",
  encode(message: UnbondingDelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== BigInt(0)) {
      writer.uint32(16).int64(message.completionTime);
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    if (message.unbondingId !== BigInt(0)) {
      writer.uint32(40).uint64(message.unbondingId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = reader.int64();
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.balance = reader.string();
          break;
        case 5:
          message.unbondingId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UnbondingDelegationEntry>): UnbondingDelegationEntry {
    const message = createBaseUnbondingDelegationEntry();
    message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? BigInt(object.completionTime.toString()) : BigInt(0);
    message.initialBalance = object.initialBalance ?? "";
    message.balance = object.balance ?? "";
    message.unbondingId = object.unbondingId !== undefined && object.unbondingId !== null ? BigInt(object.unbondingId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UnbondingDelegationEntryAmino): UnbondingDelegationEntry {
    return {
      creationHeight: BigInt(object.creation_height),
      completionTime: BigInt(object.completion_time),
      initialBalance: object.initial_balance,
      balance: object.balance,
      unbondingId: BigInt(object.unbonding_id)
    };
  },
  toAmino(message: UnbondingDelegationEntry): UnbondingDelegationEntryAmino {
    const obj: any = {};
    obj.creation_height = message.creationHeight ? message.creationHeight.toString() : undefined;
    obj.completion_time = message.completionTime ? message.completionTime.toString() : undefined;
    obj.initial_balance = message.initialBalance;
    obj.balance = message.balance;
    obj.unbonding_id = message.unbondingId ? message.unbondingId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UnbondingDelegationEntryAminoMsg): UnbondingDelegationEntry {
    return UnbondingDelegationEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: UnbondingDelegationEntryProtoMsg): UnbondingDelegationEntry {
    return UnbondingDelegationEntry.decode(message.value);
  },
  toProto(message: UnbondingDelegationEntry): Uint8Array {
    return UnbondingDelegationEntry.encode(message).finish();
  },
  toProtoMsg(message: UnbondingDelegationEntry): UnbondingDelegationEntryProtoMsg {
    return {
      typeUrl: "/elys.commitment.UnbondingDelegationEntry",
      value: UnbondingDelegationEntry.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorUnbondingDelegationsRequest(): QueryDelegatorUnbondingDelegationsRequest {
  return {
    delegatorAddress: ""
  };
}
export const QueryDelegatorUnbondingDelegationsRequest = {
  typeUrl: "/elys.commitment.QueryDelegatorUnbondingDelegationsRequest",
  encode(message: QueryDelegatorUnbondingDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorUnbondingDelegationsRequest>): QueryDelegatorUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorUnbondingDelegationsRequestAmino): QueryDelegatorUnbondingDelegationsRequest {
    return {
      delegatorAddress: object.delegator_address
    };
  },
  toAmino(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorUnbondingDelegationsRequestAminoMsg): QueryDelegatorUnbondingDelegationsRequest {
    return QueryDelegatorUnbondingDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorUnbondingDelegationsRequestProtoMsg): QueryDelegatorUnbondingDelegationsRequest {
    return QueryDelegatorUnbondingDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorUnbondingDelegationsRequest): Uint8Array {
    return QueryDelegatorUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryDelegatorUnbondingDelegationsRequest",
      value: QueryDelegatorUnbondingDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseUnbondingDelegation(): UnbondingDelegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    entries: []
  };
}
export const UnbondingDelegation = {
  typeUrl: "/elys.commitment.UnbondingDelegation",
  encode(message: UnbondingDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegation();
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
          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UnbondingDelegation>): UnbondingDelegation {
    const message = createBaseUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.entries = object.entries?.map(e => UnbondingDelegationEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UnbondingDelegationAmino): UnbondingDelegation {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address,
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => UnbondingDelegationEntry.fromAmino(e)) : []
    };
  },
  toAmino(message: UnbondingDelegation): UnbondingDelegationAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? UnbondingDelegationEntry.toAmino(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAminoMsg(object: UnbondingDelegationAminoMsg): UnbondingDelegation {
    return UnbondingDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: UnbondingDelegationProtoMsg): UnbondingDelegation {
    return UnbondingDelegation.decode(message.value);
  },
  toProto(message: UnbondingDelegation): Uint8Array {
    return UnbondingDelegation.encode(message).finish();
  },
  toProtoMsg(message: UnbondingDelegation): UnbondingDelegationProtoMsg {
    return {
      typeUrl: "/elys.commitment.UnbondingDelegation",
      value: UnbondingDelegation.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorUnbondingDelegationsResponse(): QueryDelegatorUnbondingDelegationsResponse {
  return {
    unbondingResponses: []
  };
}
export const QueryDelegatorUnbondingDelegationsResponse = {
  typeUrl: "/elys.commitment.QueryDelegatorUnbondingDelegationsResponse",
  encode(message: QueryDelegatorUnbondingDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorUnbondingDelegationsResponse>): QueryDelegatorUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDelegatorUnbondingDelegationsResponseAmino): QueryDelegatorUnbondingDelegationsResponse {
    return {
      unbondingResponses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e: any) => UnbondingDelegation.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseAmino {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbonding_responses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
    } else {
      obj.unbonding_responses = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorUnbondingDelegationsResponseAminoMsg): QueryDelegatorUnbondingDelegationsResponse {
    return QueryDelegatorUnbondingDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorUnbondingDelegationsResponseProtoMsg): QueryDelegatorUnbondingDelegationsResponse {
    return QueryDelegatorUnbondingDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorUnbondingDelegationsResponse): Uint8Array {
    return QueryDelegatorUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryDelegatorUnbondingDelegationsResponse",
      value: QueryDelegatorUnbondingDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorsRequest(): QueryValidatorsRequest {
  return {
    delegatorAddress: ""
  };
}
export const QueryValidatorsRequest = {
  typeUrl: "/elys.commitment.QueryValidatorsRequest",
  encode(message: QueryValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorsRequest>): QueryValidatorsRequest {
    const message = createBaseQueryValidatorsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryValidatorsRequestAmino): QueryValidatorsRequest {
    return {
      delegatorAddress: object.delegator_address
    };
  },
  toAmino(message: QueryValidatorsRequest): QueryValidatorsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorsRequestAminoMsg): QueryValidatorsRequest {
    return QueryValidatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorsRequestProtoMsg): QueryValidatorsRequest {
    return QueryValidatorsRequest.decode(message.value);
  },
  toProto(message: QueryValidatorsRequest): Uint8Array {
    return QueryValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorsRequest): QueryValidatorsRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryValidatorsRequest",
      value: QueryValidatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return {
    validators: []
  };
}
export const QueryDelegatorValidatorsResponse = {
  typeUrl: "/elys.commitment.QueryDelegatorValidatorsResponse",
  encode(message: QueryDelegatorValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      ValidatorDetail.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(ValidatorDetail.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map(e => ValidatorDetail.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDelegatorValidatorsResponseAmino): QueryDelegatorValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => ValidatorDetail.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? ValidatorDetail.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorsResponseAminoMsg): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorValidatorsResponseProtoMsg): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorValidatorsResponse): Uint8Array {
    return QueryDelegatorValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseBalanceAvailable(): BalanceAvailable {
  return {
    amount: "",
    usdAmount: ""
  };
}
export const BalanceAvailable = {
  typeUrl: "/elys.commitment.BalanceAvailable",
  encode(message: BalanceAvailable, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.usdAmount !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.usdAmount, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BalanceAvailable {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceAvailable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.usdAmount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BalanceAvailable>): BalanceAvailable {
    const message = createBaseBalanceAvailable();
    message.amount = object.amount ?? "";
    message.usdAmount = object.usdAmount ?? "";
    return message;
  },
  fromAmino(object: BalanceAvailableAmino): BalanceAvailable {
    return {
      amount: object.amount,
      usdAmount: object.usd_amount
    };
  },
  toAmino(message: BalanceAvailable): BalanceAvailableAmino {
    const obj: any = {};
    obj.amount = message.amount;
    obj.usd_amount = message.usdAmount;
    return obj;
  },
  fromAminoMsg(object: BalanceAvailableAminoMsg): BalanceAvailable {
    return BalanceAvailable.fromAmino(object.value);
  },
  fromProtoMsg(message: BalanceAvailableProtoMsg): BalanceAvailable {
    return BalanceAvailable.decode(message.value);
  },
  toProto(message: BalanceAvailable): Uint8Array {
    return BalanceAvailable.encode(message).finish();
  },
  toProtoMsg(message: BalanceAvailable): BalanceAvailableProtoMsg {
    return {
      typeUrl: "/elys.commitment.BalanceAvailable",
      value: BalanceAvailable.encode(message).finish()
    };
  }
};
function createBaseStakedAvailable(): StakedAvailable {
  return {
    amount: "",
    usdAmount: "",
    lockups: []
  };
}
export const StakedAvailable = {
  typeUrl: "/elys.commitment.StakedAvailable",
  encode(message: StakedAvailable, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.usdAmount !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.usdAmount, 18).atomics);
    }
    for (const v of message.lockups) {
      Lockup.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakedAvailable {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakedAvailable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.usdAmount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.lockups.push(Lockup.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakedAvailable>): StakedAvailable {
    const message = createBaseStakedAvailable();
    message.amount = object.amount ?? "";
    message.usdAmount = object.usdAmount ?? "";
    message.lockups = object.lockups?.map(e => Lockup.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: StakedAvailableAmino): StakedAvailable {
    return {
      amount: object.amount,
      usdAmount: object.usd_amount,
      lockups: Array.isArray(object?.lockups) ? object.lockups.map((e: any) => Lockup.fromAmino(e)) : []
    };
  },
  toAmino(message: StakedAvailable): StakedAvailableAmino {
    const obj: any = {};
    obj.amount = message.amount;
    obj.usd_amount = message.usdAmount;
    if (message.lockups) {
      obj.lockups = message.lockups.map(e => e ? Lockup.toAmino(e) : undefined);
    } else {
      obj.lockups = [];
    }
    return obj;
  },
  fromAminoMsg(object: StakedAvailableAminoMsg): StakedAvailable {
    return StakedAvailable.fromAmino(object.value);
  },
  fromProtoMsg(message: StakedAvailableProtoMsg): StakedAvailable {
    return StakedAvailable.decode(message.value);
  },
  toProto(message: StakedAvailable): Uint8Array {
    return StakedAvailable.encode(message).finish();
  },
  toProtoMsg(message: StakedAvailable): StakedAvailableProtoMsg {
    return {
      typeUrl: "/elys.commitment.StakedAvailable",
      value: StakedAvailable.encode(message).finish()
    };
  }
};
function createBaseValidatorDetail(): ValidatorDetail {
  return {
    address: "",
    name: "",
    votingPower: "",
    commission: "",
    profilePictureSrc: "",
    staked: BalanceAvailable.fromPartial({})
  };
}
export const ValidatorDetail = {
  typeUrl: "/elys.commitment.ValidatorDetail",
  encode(message: ValidatorDetail, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.votingPower !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.votingPower, 18).atomics);
    }
    if (message.commission !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.commission, 18).atomics);
    }
    if (message.profilePictureSrc !== "") {
      writer.uint32(42).string(message.profilePictureSrc);
    }
    if (message.staked !== undefined) {
      BalanceAvailable.encode(message.staked, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorDetail {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.votingPower = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.commission = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.profilePictureSrc = reader.string();
          break;
        case 6:
          message.staked = BalanceAvailable.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ValidatorDetail>): ValidatorDetail {
    const message = createBaseValidatorDetail();
    message.address = object.address ?? "";
    message.name = object.name ?? "";
    message.votingPower = object.votingPower ?? "";
    message.commission = object.commission ?? "";
    message.profilePictureSrc = object.profilePictureSrc ?? "";
    message.staked = object.staked !== undefined && object.staked !== null ? BalanceAvailable.fromPartial(object.staked) : undefined;
    return message;
  },
  fromAmino(object: ValidatorDetailAmino): ValidatorDetail {
    return {
      address: object.address,
      name: object.name,
      votingPower: object.voting_power,
      commission: object.commission,
      profilePictureSrc: object.profile_picture_src,
      staked: object?.staked ? BalanceAvailable.fromAmino(object.staked) : undefined
    };
  },
  toAmino(message: ValidatorDetail): ValidatorDetailAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.name = message.name;
    obj.voting_power = message.votingPower;
    obj.commission = message.commission;
    obj.profile_picture_src = message.profilePictureSrc;
    obj.staked = message.staked ? BalanceAvailable.toAmino(message.staked) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorDetailAminoMsg): ValidatorDetail {
    return ValidatorDetail.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorDetailProtoMsg): ValidatorDetail {
    return ValidatorDetail.decode(message.value);
  },
  toProto(message: ValidatorDetail): Uint8Array {
    return ValidatorDetail.encode(message).finish();
  },
  toProtoMsg(message: ValidatorDetail): ValidatorDetailProtoMsg {
    return {
      typeUrl: "/elys.commitment.ValidatorDetail",
      value: ValidatorDetail.encode(message).finish()
    };
  }
};
function createBaseStakingValidator(): StakingValidator {
  return {
    address: "",
    name: "",
    votingPower: "",
    commission: "",
    profilePictureSrc: ""
  };
}
export const StakingValidator = {
  typeUrl: "/elys.commitment.StakingValidator",
  encode(message: StakingValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.votingPower !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.votingPower, 18).atomics);
    }
    if (message.commission !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.commission, 18).atomics);
    }
    if (message.profilePictureSrc !== "") {
      writer.uint32(42).string(message.profilePictureSrc);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.votingPower = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.commission = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.profilePictureSrc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakingValidator>): StakingValidator {
    const message = createBaseStakingValidator();
    message.address = object.address ?? "";
    message.name = object.name ?? "";
    message.votingPower = object.votingPower ?? "";
    message.commission = object.commission ?? "";
    message.profilePictureSrc = object.profilePictureSrc ?? "";
    return message;
  },
  fromAmino(object: StakingValidatorAmino): StakingValidator {
    return {
      address: object.address,
      name: object.name,
      votingPower: object.voting_power,
      commission: object.commission,
      profilePictureSrc: object.profile_picture_src
    };
  },
  toAmino(message: StakingValidator): StakingValidatorAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.name = message.name;
    obj.voting_power = message.votingPower;
    obj.commission = message.commission;
    obj.profile_picture_src = message.profilePictureSrc;
    return obj;
  },
  fromAminoMsg(object: StakingValidatorAminoMsg): StakingValidator {
    return StakingValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingValidatorProtoMsg): StakingValidator {
    return StakingValidator.decode(message.value);
  },
  toProto(message: StakingValidator): Uint8Array {
    return StakingValidator.encode(message).finish();
  },
  toProtoMsg(message: StakingValidator): StakingValidatorProtoMsg {
    return {
      typeUrl: "/elys.commitment.StakingValidator",
      value: StakingValidator.encode(message).finish()
    };
  }
};
function createBaseStakedPosition(): StakedPosition {
  return {
    id: "",
    validator: StakingValidator.fromPartial({}),
    staked: BalanceAvailable.fromPartial({})
  };
}
export const StakedPosition = {
  typeUrl: "/elys.commitment.StakedPosition",
  encode(message: StakedPosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.validator !== undefined) {
      StakingValidator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (message.staked !== undefined) {
      BalanceAvailable.encode(message.staked, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakedPosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakedPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.validator = StakingValidator.decode(reader, reader.uint32());
          break;
        case 3:
          message.staked = BalanceAvailable.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakedPosition>): StakedPosition {
    const message = createBaseStakedPosition();
    message.id = object.id ?? "";
    message.validator = object.validator !== undefined && object.validator !== null ? StakingValidator.fromPartial(object.validator) : undefined;
    message.staked = object.staked !== undefined && object.staked !== null ? BalanceAvailable.fromPartial(object.staked) : undefined;
    return message;
  },
  fromAmino(object: StakedPositionAmino): StakedPosition {
    return {
      id: object.id,
      validator: object?.validator ? StakingValidator.fromAmino(object.validator) : undefined,
      staked: object?.staked ? BalanceAvailable.fromAmino(object.staked) : undefined
    };
  },
  toAmino(message: StakedPosition): StakedPositionAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.validator = message.validator ? StakingValidator.toAmino(message.validator) : undefined;
    obj.staked = message.staked ? BalanceAvailable.toAmino(message.staked) : undefined;
    return obj;
  },
  fromAminoMsg(object: StakedPositionAminoMsg): StakedPosition {
    return StakedPosition.fromAmino(object.value);
  },
  fromProtoMsg(message: StakedPositionProtoMsg): StakedPosition {
    return StakedPosition.decode(message.value);
  },
  toProto(message: StakedPosition): Uint8Array {
    return StakedPosition.encode(message).finish();
  },
  toProtoMsg(message: StakedPosition): StakedPositionProtoMsg {
    return {
      typeUrl: "/elys.commitment.StakedPosition",
      value: StakedPosition.encode(message).finish()
    };
  }
};
function createBaseQueryStakedPositionResponse(): QueryStakedPositionResponse {
  return {
    stakedPosition: []
  };
}
export const QueryStakedPositionResponse = {
  typeUrl: "/elys.commitment.QueryStakedPositionResponse",
  encode(message: QueryStakedPositionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stakedPosition) {
      StakedPosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakedPositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakedPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakedPosition.push(StakedPosition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStakedPositionResponse>): QueryStakedPositionResponse {
    const message = createBaseQueryStakedPositionResponse();
    message.stakedPosition = object.stakedPosition?.map(e => StakedPosition.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryStakedPositionResponseAmino): QueryStakedPositionResponse {
    return {
      stakedPosition: Array.isArray(object?.staked_position) ? object.staked_position.map((e: any) => StakedPosition.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryStakedPositionResponse): QueryStakedPositionResponseAmino {
    const obj: any = {};
    if (message.stakedPosition) {
      obj.staked_position = message.stakedPosition.map(e => e ? StakedPosition.toAmino(e) : undefined);
    } else {
      obj.staked_position = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryStakedPositionResponseAminoMsg): QueryStakedPositionResponse {
    return QueryStakedPositionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakedPositionResponseProtoMsg): QueryStakedPositionResponse {
    return QueryStakedPositionResponse.decode(message.value);
  },
  toProto(message: QueryStakedPositionResponse): Uint8Array {
    return QueryStakedPositionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakedPositionResponse): QueryStakedPositionResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryStakedPositionResponse",
      value: QueryStakedPositionResponse.encode(message).finish()
    };
  }
};
function createBaseUnstakedPosition(): UnstakedPosition {
  return {
    id: "",
    validator: StakingValidator.fromPartial({}),
    remainingTime: BigInt(0),
    unstaked: BalanceAvailable.fromPartial({})
  };
}
export const UnstakedPosition = {
  typeUrl: "/elys.commitment.UnstakedPosition",
  encode(message: UnstakedPosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.validator !== undefined) {
      StakingValidator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (message.remainingTime !== BigInt(0)) {
      writer.uint32(24).uint64(message.remainingTime);
    }
    if (message.unstaked !== undefined) {
      BalanceAvailable.encode(message.unstaked, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnstakedPosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnstakedPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.validator = StakingValidator.decode(reader, reader.uint32());
          break;
        case 3:
          message.remainingTime = reader.uint64();
          break;
        case 4:
          message.unstaked = BalanceAvailable.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UnstakedPosition>): UnstakedPosition {
    const message = createBaseUnstakedPosition();
    message.id = object.id ?? "";
    message.validator = object.validator !== undefined && object.validator !== null ? StakingValidator.fromPartial(object.validator) : undefined;
    message.remainingTime = object.remainingTime !== undefined && object.remainingTime !== null ? BigInt(object.remainingTime.toString()) : BigInt(0);
    message.unstaked = object.unstaked !== undefined && object.unstaked !== null ? BalanceAvailable.fromPartial(object.unstaked) : undefined;
    return message;
  },
  fromAmino(object: UnstakedPositionAmino): UnstakedPosition {
    return {
      id: object.id,
      validator: object?.validator ? StakingValidator.fromAmino(object.validator) : undefined,
      remainingTime: BigInt(object.remaining_time),
      unstaked: object?.unstaked ? BalanceAvailable.fromAmino(object.unstaked) : undefined
    };
  },
  toAmino(message: UnstakedPosition): UnstakedPositionAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.validator = message.validator ? StakingValidator.toAmino(message.validator) : undefined;
    obj.remaining_time = message.remainingTime ? message.remainingTime.toString() : undefined;
    obj.unstaked = message.unstaked ? BalanceAvailable.toAmino(message.unstaked) : undefined;
    return obj;
  },
  fromAminoMsg(object: UnstakedPositionAminoMsg): UnstakedPosition {
    return UnstakedPosition.fromAmino(object.value);
  },
  fromProtoMsg(message: UnstakedPositionProtoMsg): UnstakedPosition {
    return UnstakedPosition.decode(message.value);
  },
  toProto(message: UnstakedPosition): Uint8Array {
    return UnstakedPosition.encode(message).finish();
  },
  toProtoMsg(message: UnstakedPosition): UnstakedPositionProtoMsg {
    return {
      typeUrl: "/elys.commitment.UnstakedPosition",
      value: UnstakedPosition.encode(message).finish()
    };
  }
};
function createBaseQueryUnstakedPositionResponse(): QueryUnstakedPositionResponse {
  return {
    unstakedPosition: []
  };
}
export const QueryUnstakedPositionResponse = {
  typeUrl: "/elys.commitment.QueryUnstakedPositionResponse",
  encode(message: QueryUnstakedPositionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unstakedPosition) {
      UnstakedPosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnstakedPositionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnstakedPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unstakedPosition.push(UnstakedPosition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUnstakedPositionResponse>): QueryUnstakedPositionResponse {
    const message = createBaseQueryUnstakedPositionResponse();
    message.unstakedPosition = object.unstakedPosition?.map(e => UnstakedPosition.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryUnstakedPositionResponseAmino): QueryUnstakedPositionResponse {
    return {
      unstakedPosition: Array.isArray(object?.unstaked_position) ? object.unstaked_position.map((e: any) => UnstakedPosition.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryUnstakedPositionResponse): QueryUnstakedPositionResponseAmino {
    const obj: any = {};
    if (message.unstakedPosition) {
      obj.unstaked_position = message.unstakedPosition.map(e => e ? UnstakedPosition.toAmino(e) : undefined);
    } else {
      obj.unstaked_position = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryUnstakedPositionResponseAminoMsg): QueryUnstakedPositionResponse {
    return QueryUnstakedPositionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnstakedPositionResponseProtoMsg): QueryUnstakedPositionResponse {
    return QueryUnstakedPositionResponse.decode(message.value);
  },
  toProto(message: QueryUnstakedPositionResponse): Uint8Array {
    return QueryUnstakedPositionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnstakedPositionResponse): QueryUnstakedPositionResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryUnstakedPositionResponse",
      value: QueryUnstakedPositionResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubBucketBalanceRequest(): QuerySubBucketBalanceRequest {
  return {
    address: "",
    denom: "",
    program: 0
  };
}
export const QuerySubBucketBalanceRequest = {
  typeUrl: "/elys.commitment.QuerySubBucketBalanceRequest",
  encode(message: QuerySubBucketBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.program !== 0) {
      writer.uint32(24).int32(message.program);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubBucketBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubBucketBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.program = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySubBucketBalanceRequest>): QuerySubBucketBalanceRequest {
    const message = createBaseQuerySubBucketBalanceRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    message.program = object.program ?? 0;
    return message;
  },
  fromAmino(object: QuerySubBucketBalanceRequestAmino): QuerySubBucketBalanceRequest {
    return {
      address: object.address,
      denom: object.denom,
      program: isSet(object.program) ? earnTypeFromJSON(object.program) : -1
    };
  },
  toAmino(message: QuerySubBucketBalanceRequest): QuerySubBucketBalanceRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.denom = message.denom;
    obj.program = message.program;
    return obj;
  },
  fromAminoMsg(object: QuerySubBucketBalanceRequestAminoMsg): QuerySubBucketBalanceRequest {
    return QuerySubBucketBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubBucketBalanceRequestProtoMsg): QuerySubBucketBalanceRequest {
    return QuerySubBucketBalanceRequest.decode(message.value);
  },
  toProto(message: QuerySubBucketBalanceRequest): Uint8Array {
    return QuerySubBucketBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubBucketBalanceRequest): QuerySubBucketBalanceRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QuerySubBucketBalanceRequest",
      value: QuerySubBucketBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVestingInfoRequest(): QueryVestingInfoRequest {
  return {
    address: ""
  };
}
export const QueryVestingInfoRequest = {
  typeUrl: "/elys.commitment.QueryVestingInfoRequest",
  encode(message: QueryVestingInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVestingInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVestingInfoRequest();
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
  fromPartial(object: Partial<QueryVestingInfoRequest>): QueryVestingInfoRequest {
    const message = createBaseQueryVestingInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryVestingInfoRequestAmino): QueryVestingInfoRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryVestingInfoRequest): QueryVestingInfoRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryVestingInfoRequestAminoMsg): QueryVestingInfoRequest {
    return QueryVestingInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVestingInfoRequestProtoMsg): QueryVestingInfoRequest {
    return QueryVestingInfoRequest.decode(message.value);
  },
  toProto(message: QueryVestingInfoRequest): Uint8Array {
    return QueryVestingInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVestingInfoRequest): QueryVestingInfoRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryVestingInfoRequest",
      value: QueryVestingInfoRequest.encode(message).finish()
    };
  }
};
function createBaseVestingDetail(): VestingDetail {
  return {
    id: "",
    totalVest: BalanceAvailable.fromPartial({}),
    balanceVested: BalanceAvailable.fromPartial({}),
    remainingVest: BalanceAvailable.fromPartial({}),
    remainingTime: BigInt(0)
  };
}
export const VestingDetail = {
  typeUrl: "/elys.commitment.VestingDetail",
  encode(message: VestingDetail, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.totalVest !== undefined) {
      BalanceAvailable.encode(message.totalVest, writer.uint32(18).fork()).ldelim();
    }
    if (message.balanceVested !== undefined) {
      BalanceAvailable.encode(message.balanceVested, writer.uint32(26).fork()).ldelim();
    }
    if (message.remainingVest !== undefined) {
      BalanceAvailable.encode(message.remainingVest, writer.uint32(34).fork()).ldelim();
    }
    if (message.remainingTime !== BigInt(0)) {
      writer.uint32(40).int64(message.remainingTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VestingDetail {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVestingDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.totalVest = BalanceAvailable.decode(reader, reader.uint32());
          break;
        case 3:
          message.balanceVested = BalanceAvailable.decode(reader, reader.uint32());
          break;
        case 4:
          message.remainingVest = BalanceAvailable.decode(reader, reader.uint32());
          break;
        case 5:
          message.remainingTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VestingDetail>): VestingDetail {
    const message = createBaseVestingDetail();
    message.id = object.id ?? "";
    message.totalVest = object.totalVest !== undefined && object.totalVest !== null ? BalanceAvailable.fromPartial(object.totalVest) : undefined;
    message.balanceVested = object.balanceVested !== undefined && object.balanceVested !== null ? BalanceAvailable.fromPartial(object.balanceVested) : undefined;
    message.remainingVest = object.remainingVest !== undefined && object.remainingVest !== null ? BalanceAvailable.fromPartial(object.remainingVest) : undefined;
    message.remainingTime = object.remainingTime !== undefined && object.remainingTime !== null ? BigInt(object.remainingTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VestingDetailAmino): VestingDetail {
    return {
      id: object.id,
      totalVest: object?.total_vest ? BalanceAvailable.fromAmino(object.total_vest) : undefined,
      balanceVested: object?.balance_vested ? BalanceAvailable.fromAmino(object.balance_vested) : undefined,
      remainingVest: object?.remaining_vest ? BalanceAvailable.fromAmino(object.remaining_vest) : undefined,
      remainingTime: BigInt(object.remaining_time)
    };
  },
  toAmino(message: VestingDetail): VestingDetailAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.total_vest = message.totalVest ? BalanceAvailable.toAmino(message.totalVest) : undefined;
    obj.balance_vested = message.balanceVested ? BalanceAvailable.toAmino(message.balanceVested) : undefined;
    obj.remaining_vest = message.remainingVest ? BalanceAvailable.toAmino(message.remainingVest) : undefined;
    obj.remaining_time = message.remainingTime ? message.remainingTime.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VestingDetailAminoMsg): VestingDetail {
    return VestingDetail.fromAmino(object.value);
  },
  fromProtoMsg(message: VestingDetailProtoMsg): VestingDetail {
    return VestingDetail.decode(message.value);
  },
  toProto(message: VestingDetail): Uint8Array {
    return VestingDetail.encode(message).finish();
  },
  toProtoMsg(message: VestingDetail): VestingDetailProtoMsg {
    return {
      typeUrl: "/elys.commitment.VestingDetail",
      value: VestingDetail.encode(message).finish()
    };
  }
};
function createBaseQueryVestingInfoResponse(): QueryVestingInfoResponse {
  return {
    vesting: BalanceAvailable.fromPartial({}),
    vestingDetails: []
  };
}
export const QueryVestingInfoResponse = {
  typeUrl: "/elys.commitment.QueryVestingInfoResponse",
  encode(message: QueryVestingInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vesting !== undefined) {
      BalanceAvailable.encode(message.vesting, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.vestingDetails) {
      VestingDetail.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVestingInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVestingInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vesting = BalanceAvailable.decode(reader, reader.uint32());
          break;
        case 2:
          message.vestingDetails.push(VestingDetail.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVestingInfoResponse>): QueryVestingInfoResponse {
    const message = createBaseQueryVestingInfoResponse();
    message.vesting = object.vesting !== undefined && object.vesting !== null ? BalanceAvailable.fromPartial(object.vesting) : undefined;
    message.vestingDetails = object.vestingDetails?.map(e => VestingDetail.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryVestingInfoResponseAmino): QueryVestingInfoResponse {
    return {
      vesting: object?.vesting ? BalanceAvailable.fromAmino(object.vesting) : undefined,
      vestingDetails: Array.isArray(object?.vesting_details) ? object.vesting_details.map((e: any) => VestingDetail.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryVestingInfoResponse): QueryVestingInfoResponseAmino {
    const obj: any = {};
    obj.vesting = message.vesting ? BalanceAvailable.toAmino(message.vesting) : undefined;
    if (message.vestingDetails) {
      obj.vesting_details = message.vestingDetails.map(e => e ? VestingDetail.toAmino(e) : undefined);
    } else {
      obj.vesting_details = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryVestingInfoResponseAminoMsg): QueryVestingInfoResponse {
    return QueryVestingInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVestingInfoResponseProtoMsg): QueryVestingInfoResponse {
    return QueryVestingInfoResponse.decode(message.value);
  },
  toProto(message: QueryVestingInfoResponse): Uint8Array {
    return QueryVestingInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVestingInfoResponse): QueryVestingInfoResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryVestingInfoResponse",
      value: QueryVestingInfoResponse.encode(message).finish()
    };
  }
};