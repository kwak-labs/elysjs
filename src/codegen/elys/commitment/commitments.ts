import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the commitment module's genesis state. */
export interface Commitments {
  creator: string;
  committedTokens: CommittedTokens[];
  rewardsUnclaimed: Coin[];
  claimed: Coin[];
  vestingTokens: VestingTokens[];
  rewardsByElysUnclaimed: Coin[];
  rewardsByEdenUnclaimed: Coin[];
  rewardsByEdenbUnclaimed: Coin[];
  rewardsByUsdcUnclaimed: Coin[];
}
export interface CommitmentsProtoMsg {
  typeUrl: "/elys.commitment.Commitments";
  value: Uint8Array;
}
/** GenesisState defines the commitment module's genesis state. */
export interface CommitmentsAmino {
  creator: string;
  committed_tokens: CommittedTokensAmino[];
  rewards_unclaimed: CoinAmino[];
  claimed: CoinAmino[];
  vesting_tokens: VestingTokensAmino[];
  rewards_by_elys_unclaimed: CoinAmino[];
  rewards_by_eden_unclaimed: CoinAmino[];
  rewards_by_edenb_unclaimed: CoinAmino[];
  rewards_by_usdc_unclaimed: CoinAmino[];
}
export interface CommitmentsAminoMsg {
  type: "/elys.commitment.Commitments";
  value: CommitmentsAmino;
}
/** GenesisState defines the commitment module's genesis state. */
export interface CommitmentsSDKType {
  creator: string;
  committed_tokens: CommittedTokensSDKType[];
  rewards_unclaimed: CoinSDKType[];
  claimed: CoinSDKType[];
  vesting_tokens: VestingTokensSDKType[];
  rewards_by_elys_unclaimed: CoinSDKType[];
  rewards_by_eden_unclaimed: CoinSDKType[];
  rewards_by_edenb_unclaimed: CoinSDKType[];
  rewards_by_usdc_unclaimed: CoinSDKType[];
}
export interface Lockup {
  amount: string;
  unlockTimestamp: bigint;
}
export interface LockupProtoMsg {
  typeUrl: "/elys.commitment.Lockup";
  value: Uint8Array;
}
export interface LockupAmino {
  amount: string;
  unlock_timestamp: string;
}
export interface LockupAminoMsg {
  type: "/elys.commitment.Lockup";
  value: LockupAmino;
}
export interface LockupSDKType {
  amount: string;
  unlock_timestamp: bigint;
}
export interface CommittedTokens {
  denom: string;
  amount: string;
  lockups: Lockup[];
}
export interface CommittedTokensProtoMsg {
  typeUrl: "/elys.commitment.CommittedTokens";
  value: Uint8Array;
}
export interface CommittedTokensAmino {
  denom: string;
  amount: string;
  lockups: LockupAmino[];
}
export interface CommittedTokensAminoMsg {
  type: "/elys.commitment.CommittedTokens";
  value: CommittedTokensAmino;
}
export interface CommittedTokensSDKType {
  denom: string;
  amount: string;
  lockups: LockupSDKType[];
}
export interface RewardsUnclaimed {
  denom: string;
  amount: string;
}
export interface RewardsUnclaimedProtoMsg {
  typeUrl: "/elys.commitment.RewardsUnclaimed";
  value: Uint8Array;
}
export interface RewardsUnclaimedAmino {
  denom: string;
  amount: string;
}
export interface RewardsUnclaimedAminoMsg {
  type: "/elys.commitment.RewardsUnclaimed";
  value: RewardsUnclaimedAmino;
}
export interface RewardsUnclaimedSDKType {
  denom: string;
  amount: string;
}
export interface VestingTokens {
  denom: string;
  totalAmount: string;
  unvestedAmount: string;
  epochIdentifier: string;
  numEpochs: bigint;
  currentEpoch: bigint;
  vestStartedTimestamp: bigint;
}
export interface VestingTokensProtoMsg {
  typeUrl: "/elys.commitment.VestingTokens";
  value: Uint8Array;
}
export interface VestingTokensAmino {
  denom: string;
  total_amount: string;
  unvested_amount: string;
  epoch_identifier: string;
  num_epochs: string;
  current_epoch: string;
  vest_started_timestamp: string;
}
export interface VestingTokensAminoMsg {
  type: "/elys.commitment.VestingTokens";
  value: VestingTokensAmino;
}
export interface VestingTokensSDKType {
  denom: string;
  total_amount: string;
  unvested_amount: string;
  epoch_identifier: string;
  num_epochs: bigint;
  current_epoch: bigint;
  vest_started_timestamp: bigint;
}
function createBaseCommitments(): Commitments {
  return {
    creator: "",
    committedTokens: [],
    rewardsUnclaimed: [],
    claimed: [],
    vestingTokens: [],
    rewardsByElysUnclaimed: [],
    rewardsByEdenUnclaimed: [],
    rewardsByEdenbUnclaimed: [],
    rewardsByUsdcUnclaimed: []
  };
}
export const Commitments = {
  typeUrl: "/elys.commitment.Commitments",
  encode(message: Commitments, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.committedTokens) {
      CommittedTokens.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rewardsUnclaimed) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.claimed) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.vestingTokens) {
      VestingTokens.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.rewardsByElysUnclaimed) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.rewardsByEdenUnclaimed) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.rewardsByEdenbUnclaimed) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.rewardsByUsdcUnclaimed) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Commitments {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitments();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.committedTokens.push(CommittedTokens.decode(reader, reader.uint32()));
          break;
        case 3:
          message.rewardsUnclaimed.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.claimed.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.vestingTokens.push(VestingTokens.decode(reader, reader.uint32()));
          break;
        case 6:
          message.rewardsByElysUnclaimed.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.rewardsByEdenUnclaimed.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.rewardsByEdenbUnclaimed.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.rewardsByUsdcUnclaimed.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Commitments>): Commitments {
    const message = createBaseCommitments();
    message.creator = object.creator ?? "";
    message.committedTokens = object.committedTokens?.map(e => CommittedTokens.fromPartial(e)) || [];
    message.rewardsUnclaimed = object.rewardsUnclaimed?.map(e => Coin.fromPartial(e)) || [];
    message.claimed = object.claimed?.map(e => Coin.fromPartial(e)) || [];
    message.vestingTokens = object.vestingTokens?.map(e => VestingTokens.fromPartial(e)) || [];
    message.rewardsByElysUnclaimed = object.rewardsByElysUnclaimed?.map(e => Coin.fromPartial(e)) || [];
    message.rewardsByEdenUnclaimed = object.rewardsByEdenUnclaimed?.map(e => Coin.fromPartial(e)) || [];
    message.rewardsByEdenbUnclaimed = object.rewardsByEdenbUnclaimed?.map(e => Coin.fromPartial(e)) || [];
    message.rewardsByUsdcUnclaimed = object.rewardsByUsdcUnclaimed?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommitmentsAmino): Commitments {
    return {
      creator: object.creator,
      committedTokens: Array.isArray(object?.committed_tokens) ? object.committed_tokens.map((e: any) => CommittedTokens.fromAmino(e)) : [],
      rewardsUnclaimed: Array.isArray(object?.rewards_unclaimed) ? object.rewards_unclaimed.map((e: any) => Coin.fromAmino(e)) : [],
      claimed: Array.isArray(object?.claimed) ? object.claimed.map((e: any) => Coin.fromAmino(e)) : [],
      vestingTokens: Array.isArray(object?.vesting_tokens) ? object.vesting_tokens.map((e: any) => VestingTokens.fromAmino(e)) : [],
      rewardsByElysUnclaimed: Array.isArray(object?.rewards_by_elys_unclaimed) ? object.rewards_by_elys_unclaimed.map((e: any) => Coin.fromAmino(e)) : [],
      rewardsByEdenUnclaimed: Array.isArray(object?.rewards_by_eden_unclaimed) ? object.rewards_by_eden_unclaimed.map((e: any) => Coin.fromAmino(e)) : [],
      rewardsByEdenbUnclaimed: Array.isArray(object?.rewards_by_edenb_unclaimed) ? object.rewards_by_edenb_unclaimed.map((e: any) => Coin.fromAmino(e)) : [],
      rewardsByUsdcUnclaimed: Array.isArray(object?.rewards_by_usdc_unclaimed) ? object.rewards_by_usdc_unclaimed.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: Commitments): CommitmentsAmino {
    const obj: any = {};
    obj.creator = message.creator;
    if (message.committedTokens) {
      obj.committed_tokens = message.committedTokens.map(e => e ? CommittedTokens.toAmino(e) : undefined);
    } else {
      obj.committed_tokens = [];
    }
    if (message.rewardsUnclaimed) {
      obj.rewards_unclaimed = message.rewardsUnclaimed.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards_unclaimed = [];
    }
    if (message.claimed) {
      obj.claimed = message.claimed.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimed = [];
    }
    if (message.vestingTokens) {
      obj.vesting_tokens = message.vestingTokens.map(e => e ? VestingTokens.toAmino(e) : undefined);
    } else {
      obj.vesting_tokens = [];
    }
    if (message.rewardsByElysUnclaimed) {
      obj.rewards_by_elys_unclaimed = message.rewardsByElysUnclaimed.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards_by_elys_unclaimed = [];
    }
    if (message.rewardsByEdenUnclaimed) {
      obj.rewards_by_eden_unclaimed = message.rewardsByEdenUnclaimed.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards_by_eden_unclaimed = [];
    }
    if (message.rewardsByEdenbUnclaimed) {
      obj.rewards_by_edenb_unclaimed = message.rewardsByEdenbUnclaimed.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards_by_edenb_unclaimed = [];
    }
    if (message.rewardsByUsdcUnclaimed) {
      obj.rewards_by_usdc_unclaimed = message.rewardsByUsdcUnclaimed.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards_by_usdc_unclaimed = [];
    }
    return obj;
  },
  fromAminoMsg(object: CommitmentsAminoMsg): Commitments {
    return Commitments.fromAmino(object.value);
  },
  fromProtoMsg(message: CommitmentsProtoMsg): Commitments {
    return Commitments.decode(message.value);
  },
  toProto(message: Commitments): Uint8Array {
    return Commitments.encode(message).finish();
  },
  toProtoMsg(message: Commitments): CommitmentsProtoMsg {
    return {
      typeUrl: "/elys.commitment.Commitments",
      value: Commitments.encode(message).finish()
    };
  }
};
function createBaseLockup(): Lockup {
  return {
    amount: "",
    unlockTimestamp: BigInt(0)
  };
}
export const Lockup = {
  typeUrl: "/elys.commitment.Lockup",
  encode(message: Lockup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.unlockTimestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.unlockTimestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Lockup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.unlockTimestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Lockup>): Lockup {
    const message = createBaseLockup();
    message.amount = object.amount ?? "";
    message.unlockTimestamp = object.unlockTimestamp !== undefined && object.unlockTimestamp !== null ? BigInt(object.unlockTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LockupAmino): Lockup {
    return {
      amount: object.amount,
      unlockTimestamp: BigInt(object.unlock_timestamp)
    };
  },
  toAmino(message: Lockup): LockupAmino {
    const obj: any = {};
    obj.amount = message.amount;
    obj.unlock_timestamp = message.unlockTimestamp ? message.unlockTimestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LockupAminoMsg): Lockup {
    return Lockup.fromAmino(object.value);
  },
  fromProtoMsg(message: LockupProtoMsg): Lockup {
    return Lockup.decode(message.value);
  },
  toProto(message: Lockup): Uint8Array {
    return Lockup.encode(message).finish();
  },
  toProtoMsg(message: Lockup): LockupProtoMsg {
    return {
      typeUrl: "/elys.commitment.Lockup",
      value: Lockup.encode(message).finish()
    };
  }
};
function createBaseCommittedTokens(): CommittedTokens {
  return {
    denom: "",
    amount: "",
    lockups: []
  };
}
export const CommittedTokens = {
  typeUrl: "/elys.commitment.CommittedTokens",
  encode(message: CommittedTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    for (const v of message.lockups) {
      Lockup.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommittedTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommittedTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
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
  fromPartial(object: Partial<CommittedTokens>): CommittedTokens {
    const message = createBaseCommittedTokens();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.lockups = object.lockups?.map(e => Lockup.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommittedTokensAmino): CommittedTokens {
    return {
      denom: object.denom,
      amount: object.amount,
      lockups: Array.isArray(object?.lockups) ? object.lockups.map((e: any) => Lockup.fromAmino(e)) : []
    };
  },
  toAmino(message: CommittedTokens): CommittedTokensAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.amount = message.amount;
    if (message.lockups) {
      obj.lockups = message.lockups.map(e => e ? Lockup.toAmino(e) : undefined);
    } else {
      obj.lockups = [];
    }
    return obj;
  },
  fromAminoMsg(object: CommittedTokensAminoMsg): CommittedTokens {
    return CommittedTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: CommittedTokensProtoMsg): CommittedTokens {
    return CommittedTokens.decode(message.value);
  },
  toProto(message: CommittedTokens): Uint8Array {
    return CommittedTokens.encode(message).finish();
  },
  toProtoMsg(message: CommittedTokens): CommittedTokensProtoMsg {
    return {
      typeUrl: "/elys.commitment.CommittedTokens",
      value: CommittedTokens.encode(message).finish()
    };
  }
};
function createBaseRewardsUnclaimed(): RewardsUnclaimed {
  return {
    denom: "",
    amount: ""
  };
}
export const RewardsUnclaimed = {
  typeUrl: "/elys.commitment.RewardsUnclaimed",
  encode(message: RewardsUnclaimed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardsUnclaimed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsUnclaimed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RewardsUnclaimed>): RewardsUnclaimed {
    const message = createBaseRewardsUnclaimed();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: RewardsUnclaimedAmino): RewardsUnclaimed {
    return {
      denom: object.denom,
      amount: object.amount
    };
  },
  toAmino(message: RewardsUnclaimed): RewardsUnclaimedAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: RewardsUnclaimedAminoMsg): RewardsUnclaimed {
    return RewardsUnclaimed.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardsUnclaimedProtoMsg): RewardsUnclaimed {
    return RewardsUnclaimed.decode(message.value);
  },
  toProto(message: RewardsUnclaimed): Uint8Array {
    return RewardsUnclaimed.encode(message).finish();
  },
  toProtoMsg(message: RewardsUnclaimed): RewardsUnclaimedProtoMsg {
    return {
      typeUrl: "/elys.commitment.RewardsUnclaimed",
      value: RewardsUnclaimed.encode(message).finish()
    };
  }
};
function createBaseVestingTokens(): VestingTokens {
  return {
    denom: "",
    totalAmount: "",
    unvestedAmount: "",
    epochIdentifier: "",
    numEpochs: BigInt(0),
    currentEpoch: BigInt(0),
    vestStartedTimestamp: BigInt(0)
  };
}
export const VestingTokens = {
  typeUrl: "/elys.commitment.VestingTokens",
  encode(message: VestingTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.totalAmount !== "") {
      writer.uint32(18).string(message.totalAmount);
    }
    if (message.unvestedAmount !== "") {
      writer.uint32(26).string(message.unvestedAmount);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(34).string(message.epochIdentifier);
    }
    if (message.numEpochs !== BigInt(0)) {
      writer.uint32(40).int64(message.numEpochs);
    }
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(48).int64(message.currentEpoch);
    }
    if (message.vestStartedTimestamp !== BigInt(0)) {
      writer.uint32(56).int64(message.vestStartedTimestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VestingTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVestingTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.totalAmount = reader.string();
          break;
        case 3:
          message.unvestedAmount = reader.string();
          break;
        case 4:
          message.epochIdentifier = reader.string();
          break;
        case 5:
          message.numEpochs = reader.int64();
          break;
        case 6:
          message.currentEpoch = reader.int64();
          break;
        case 7:
          message.vestStartedTimestamp = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VestingTokens>): VestingTokens {
    const message = createBaseVestingTokens();
    message.denom = object.denom ?? "";
    message.totalAmount = object.totalAmount ?? "";
    message.unvestedAmount = object.unvestedAmount ?? "";
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.numEpochs = object.numEpochs !== undefined && object.numEpochs !== null ? BigInt(object.numEpochs.toString()) : BigInt(0);
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    message.vestStartedTimestamp = object.vestStartedTimestamp !== undefined && object.vestStartedTimestamp !== null ? BigInt(object.vestStartedTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VestingTokensAmino): VestingTokens {
    return {
      denom: object.denom,
      totalAmount: object.total_amount,
      unvestedAmount: object.unvested_amount,
      epochIdentifier: object.epoch_identifier,
      numEpochs: BigInt(object.num_epochs),
      currentEpoch: BigInt(object.current_epoch),
      vestStartedTimestamp: BigInt(object.vest_started_timestamp)
    };
  },
  toAmino(message: VestingTokens): VestingTokensAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.total_amount = message.totalAmount;
    obj.unvested_amount = message.unvestedAmount;
    obj.epoch_identifier = message.epochIdentifier;
    obj.num_epochs = message.numEpochs ? message.numEpochs.toString() : undefined;
    obj.current_epoch = message.currentEpoch ? message.currentEpoch.toString() : undefined;
    obj.vest_started_timestamp = message.vestStartedTimestamp ? message.vestStartedTimestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VestingTokensAminoMsg): VestingTokens {
    return VestingTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: VestingTokensProtoMsg): VestingTokens {
    return VestingTokens.decode(message.value);
  },
  toProto(message: VestingTokens): Uint8Array {
    return VestingTokens.encode(message).finish();
  },
  toProtoMsg(message: VestingTokens): VestingTokensProtoMsg {
    return {
      typeUrl: "/elys.commitment.VestingTokens",
      value: VestingTokens.encode(message).finish()
    };
  }
};