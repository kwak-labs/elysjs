import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the commitment module's genesis state. */
export interface Commitments {
  creator: string;
  committedTokens: CommittedTokens[];
  uncommittedTokens: UncommittedTokens[];
  vestingTokens: VestingTokens[];
}
export interface CommitmentsProtoMsg {
  typeUrl: "/elys.commitment.Commitments";
  value: Uint8Array;
}
/** GenesisState defines the commitment module's genesis state. */
export interface CommitmentsAmino {
  creator: string;
  committed_tokens: CommittedTokensAmino[];
  uncommitted_tokens: UncommittedTokensAmino[];
  vesting_tokens: VestingTokensAmino[];
}
export interface CommitmentsAminoMsg {
  type: "/elys.commitment.Commitments";
  value: CommitmentsAmino;
}
/** GenesisState defines the commitment module's genesis state. */
export interface CommitmentsSDKType {
  creator: string;
  committed_tokens: CommittedTokensSDKType[];
  uncommitted_tokens: UncommittedTokensSDKType[];
  vesting_tokens: VestingTokensSDKType[];
}
export interface CommittedTokens {
  denom: string;
  amount: string;
}
export interface CommittedTokensProtoMsg {
  typeUrl: "/elys.commitment.CommittedTokens";
  value: Uint8Array;
}
export interface CommittedTokensAmino {
  denom: string;
  amount: string;
}
export interface CommittedTokensAminoMsg {
  type: "/elys.commitment.CommittedTokens";
  value: CommittedTokensAmino;
}
export interface CommittedTokensSDKType {
  denom: string;
  amount: string;
}
export interface UncommittedTokens {
  denom: string;
  amount: string;
}
export interface UncommittedTokensProtoMsg {
  typeUrl: "/elys.commitment.UncommittedTokens";
  value: Uint8Array;
}
export interface UncommittedTokensAmino {
  denom: string;
  amount: string;
}
export interface UncommittedTokensAminoMsg {
  type: "/elys.commitment.UncommittedTokens";
  value: UncommittedTokensAmino;
}
export interface UncommittedTokensSDKType {
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
}
function createBaseCommitments(): Commitments {
  return {
    creator: "",
    committedTokens: [],
    uncommittedTokens: [],
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
    for (const v of message.uncommittedTokens) {
      UncommittedTokens.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.uncommittedTokens.push(UncommittedTokens.decode(reader, reader.uint32()));
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
    message.uncommittedTokens = object.uncommittedTokens?.map(e => UncommittedTokens.fromPartial(e)) || [];
    message.vestingTokens = object.vestingTokens?.map(e => VestingTokens.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommitmentsAmino): Commitments {
    return {
      creator: object.creator,
      committedTokens: Array.isArray(object?.committed_tokens) ? object.committed_tokens.map((e: any) => CommittedTokens.fromAmino(e)) : [],
      uncommittedTokens: Array.isArray(object?.uncommitted_tokens) ? object.uncommitted_tokens.map((e: any) => UncommittedTokens.fromAmino(e)) : [],
      vestingTokens: Array.isArray(object?.vesting_tokens) ? object.vesting_tokens.map((e: any) => VestingTokens.fromAmino(e)) : []
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
    if (message.uncommittedTokens) {
      obj.uncommitted_tokens = message.uncommittedTokens.map(e => e ? UncommittedTokens.toAmino(e) : undefined);
    } else {
      obj.uncommitted_tokens = [];
    }
    if (message.vestingTokens) {
      obj.vesting_tokens = message.vestingTokens.map(e => e ? VestingTokens.toAmino(e) : undefined);
    } else {
      obj.vesting_tokens = [];
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
function createBaseCommittedTokens(): CommittedTokens {
  return {
    denom: "",
    amount: ""
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
    return message;
  },
  fromAmino(object: CommittedTokensAmino): CommittedTokens {
    return {
      denom: object.denom,
      amount: object.amount
    };
  },
  toAmino(message: CommittedTokens): CommittedTokensAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.amount = message.amount;
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
function createBaseUncommittedTokens(): UncommittedTokens {
  return {
    denom: "",
    amount: ""
  };
}
export const UncommittedTokens = {
  typeUrl: "/elys.commitment.UncommittedTokens",
  encode(message: UncommittedTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UncommittedTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUncommittedTokens();
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
  fromPartial(object: Partial<UncommittedTokens>): UncommittedTokens {
    const message = createBaseUncommittedTokens();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: UncommittedTokensAmino): UncommittedTokens {
    return {
      denom: object.denom,
      amount: object.amount
    };
  },
  toAmino(message: UncommittedTokens): UncommittedTokensAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: UncommittedTokensAminoMsg): UncommittedTokens {
    return UncommittedTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: UncommittedTokensProtoMsg): UncommittedTokens {
    return UncommittedTokens.decode(message.value);
  },
  toProto(message: UncommittedTokens): Uint8Array {
    return UncommittedTokens.encode(message).finish();
  },
  toProtoMsg(message: UncommittedTokens): UncommittedTokensProtoMsg {
    return {
      typeUrl: "/elys.commitment.UncommittedTokens",
      value: UncommittedTokens.encode(message).finish()
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
    currentEpoch: BigInt(0)
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
    return message;
  },
  fromAmino(object: VestingTokensAmino): VestingTokens {
    return {
      denom: object.denom,
      totalAmount: object.total_amount,
      unvestedAmount: object.unvested_amount,
      epochIdentifier: object.epoch_identifier,
      numEpochs: BigInt(object.num_epochs),
      currentEpoch: BigInt(object.current_epoch)
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