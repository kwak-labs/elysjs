//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the commitment module's genesis state. */
export interface Commitments {
  creator: string;
  committedTokens: CommittedTokens[];
  claimed: Coin[];
  vestingTokens: VestingTokens[];
}
export interface CommitmentsProtoMsg {
  typeUrl: "/elys.commitment.Commitments";
  value: Uint8Array;
}
/** GenesisState defines the commitment module's genesis state. */
export interface CommitmentsAmino {
  creator?: string;
  committed_tokens?: CommittedTokensAmino[];
  claimed?: CoinAmino[];
  vesting_tokens?: VestingTokensAmino[];
}
export interface CommitmentsAminoMsg {
  type: "/elys.commitment.Commitments";
  value: CommitmentsAmino;
}
/** GenesisState defines the commitment module's genesis state. */
export interface CommitmentsSDKType {
  creator: string;
  committed_tokens: CommittedTokensSDKType[];
  claimed: CoinSDKType[];
  vesting_tokens: VestingTokensSDKType[];
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
  amount?: string;
  unlock_timestamp?: string;
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
  denom?: string;
  amount?: string;
  lockups?: LockupAmino[];
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
export interface VestingTokens {
  denom: string;
  totalAmount: string;
  claimedAmount: string;
  numBlocks: bigint;
  startBlock: bigint;
  vestStartedTimestamp: bigint;
}
export interface VestingTokensProtoMsg {
  typeUrl: "/elys.commitment.VestingTokens";
  value: Uint8Array;
}
export interface VestingTokensAmino {
  denom?: string;
  total_amount?: string;
  claimed_amount?: string;
  num_blocks?: string;
  start_block?: string;
  vest_started_timestamp?: string;
}
export interface VestingTokensAminoMsg {
  type: "/elys.commitment.VestingTokens";
  value: VestingTokensAmino;
}
export interface VestingTokensSDKType {
  denom: string;
  total_amount: string;
  claimed_amount: string;
  num_blocks: bigint;
  start_block: bigint;
  vest_started_timestamp: bigint;
}
function createBaseCommitments(): Commitments {
  return {
    creator: "",
    committedTokens: [],
    claimed: [],
    vestingTokens: []
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
    for (const v of message.claimed) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.vestingTokens) {
      VestingTokens.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.claimed.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.vestingTokens.push(VestingTokens.decode(reader, reader.uint32()));
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
    message.claimed = object.claimed?.map(e => Coin.fromPartial(e)) || [];
    message.vestingTokens = object.vestingTokens?.map(e => VestingTokens.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommitmentsAmino): Commitments {
    const message = createBaseCommitments();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.committedTokens = object.committed_tokens?.map(e => CommittedTokens.fromAmino(e)) || [];
    message.claimed = object.claimed?.map(e => Coin.fromAmino(e)) || [];
    message.vestingTokens = object.vesting_tokens?.map(e => VestingTokens.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Commitments): CommitmentsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.committedTokens) {
      obj.committed_tokens = message.committedTokens.map(e => e ? CommittedTokens.toAmino(e) : undefined);
    } else {
      obj.committed_tokens = message.committedTokens;
    }
    if (message.claimed) {
      obj.claimed = message.claimed.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimed = message.claimed;
    }
    if (message.vestingTokens) {
      obj.vesting_tokens = message.vestingTokens.map(e => e ? VestingTokens.toAmino(e) : undefined);
    } else {
      obj.vesting_tokens = message.vestingTokens;
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
    const message = createBaseLockup();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.unlock_timestamp !== undefined && object.unlock_timestamp !== null) {
      message.unlockTimestamp = BigInt(object.unlock_timestamp);
    }
    return message;
  },
  toAmino(message: Lockup): LockupAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.unlock_timestamp = message.unlockTimestamp !== BigInt(0) ? message.unlockTimestamp?.toString() : undefined;
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
    const message = createBaseCommittedTokens();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    message.lockups = object.lockups?.map(e => Lockup.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CommittedTokens): CommittedTokensAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    if (message.lockups) {
      obj.lockups = message.lockups.map(e => e ? Lockup.toAmino(e) : undefined);
    } else {
      obj.lockups = message.lockups;
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
function createBaseVestingTokens(): VestingTokens {
  return {
    denom: "",
    totalAmount: "",
    claimedAmount: "",
    numBlocks: BigInt(0),
    startBlock: BigInt(0),
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
    if (message.claimedAmount !== "") {
      writer.uint32(26).string(message.claimedAmount);
    }
    if (message.numBlocks !== BigInt(0)) {
      writer.uint32(40).int64(message.numBlocks);
    }
    if (message.startBlock !== BigInt(0)) {
      writer.uint32(48).int64(message.startBlock);
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
          message.claimedAmount = reader.string();
          break;
        case 5:
          message.numBlocks = reader.int64();
          break;
        case 6:
          message.startBlock = reader.int64();
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
    message.claimedAmount = object.claimedAmount ?? "";
    message.numBlocks = object.numBlocks !== undefined && object.numBlocks !== null ? BigInt(object.numBlocks.toString()) : BigInt(0);
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? BigInt(object.startBlock.toString()) : BigInt(0);
    message.vestStartedTimestamp = object.vestStartedTimestamp !== undefined && object.vestStartedTimestamp !== null ? BigInt(object.vestStartedTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VestingTokensAmino): VestingTokens {
    const message = createBaseVestingTokens();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.totalAmount = object.total_amount;
    }
    if (object.claimed_amount !== undefined && object.claimed_amount !== null) {
      message.claimedAmount = object.claimed_amount;
    }
    if (object.num_blocks !== undefined && object.num_blocks !== null) {
      message.numBlocks = BigInt(object.num_blocks);
    }
    if (object.start_block !== undefined && object.start_block !== null) {
      message.startBlock = BigInt(object.start_block);
    }
    if (object.vest_started_timestamp !== undefined && object.vest_started_timestamp !== null) {
      message.vestStartedTimestamp = BigInt(object.vest_started_timestamp);
    }
    return message;
  },
  toAmino(message: VestingTokens): VestingTokensAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.total_amount = message.totalAmount === "" ? undefined : message.totalAmount;
    obj.claimed_amount = message.claimedAmount === "" ? undefined : message.claimedAmount;
    obj.num_blocks = message.numBlocks !== BigInt(0) ? message.numBlocks?.toString() : undefined;
    obj.start_block = message.startBlock !== BigInt(0) ? message.startBlock?.toString() : undefined;
    obj.vest_started_timestamp = message.vestStartedTimestamp !== BigInt(0) ? message.vestStartedTimestamp?.toString() : undefined;
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