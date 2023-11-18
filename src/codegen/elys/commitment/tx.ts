import { BinaryReader, BinaryWriter } from "../../binary";
export interface MsgCommitClaimedRewards {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgCommitClaimedRewardsProtoMsg {
  typeUrl: "/elys.commitment.MsgCommitClaimedRewards";
  value: Uint8Array;
}
export interface MsgCommitClaimedRewardsAmino {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgCommitClaimedRewardsAminoMsg {
  type: "/elys.commitment.MsgCommitClaimedRewards";
  value: MsgCommitClaimedRewardsAmino;
}
export interface MsgCommitClaimedRewardsSDKType {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgCommitClaimedRewardsResponse {}
export interface MsgCommitClaimedRewardsResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgCommitClaimedRewardsResponse";
  value: Uint8Array;
}
export interface MsgCommitClaimedRewardsResponseAmino {}
export interface MsgCommitClaimedRewardsResponseAminoMsg {
  type: "/elys.commitment.MsgCommitClaimedRewardsResponse";
  value: MsgCommitClaimedRewardsResponseAmino;
}
export interface MsgCommitClaimedRewardsResponseSDKType {}
export interface MsgUncommitTokens {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgUncommitTokensProtoMsg {
  typeUrl: "/elys.commitment.MsgUncommitTokens";
  value: Uint8Array;
}
export interface MsgUncommitTokensAmino {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgUncommitTokensAminoMsg {
  type: "/elys.commitment.MsgUncommitTokens";
  value: MsgUncommitTokensAmino;
}
export interface MsgUncommitTokensSDKType {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgUncommitTokensResponse {}
export interface MsgUncommitTokensResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgUncommitTokensResponse";
  value: Uint8Array;
}
export interface MsgUncommitTokensResponseAmino {}
export interface MsgUncommitTokensResponseAminoMsg {
  type: "/elys.commitment.MsgUncommitTokensResponse";
  value: MsgUncommitTokensResponseAmino;
}
export interface MsgUncommitTokensResponseSDKType {}
export interface MsgClaimReward {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgClaimRewardProtoMsg {
  typeUrl: "/elys.commitment.MsgClaimReward";
  value: Uint8Array;
}
export interface MsgClaimRewardAmino {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgClaimRewardAminoMsg {
  type: "/elys.commitment.MsgClaimReward";
  value: MsgClaimRewardAmino;
}
export interface MsgClaimRewardSDKType {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgClaimRewardResponse {}
export interface MsgClaimRewardResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgClaimRewardResponse";
  value: Uint8Array;
}
export interface MsgClaimRewardResponseAmino {}
export interface MsgClaimRewardResponseAminoMsg {
  type: "/elys.commitment.MsgClaimRewardResponse";
  value: MsgClaimRewardResponseAmino;
}
export interface MsgClaimRewardResponseSDKType {}
export interface MsgCommitLiquidTokens {
  creator: string;
  amount: string;
  denom: string;
  /** minimum lock duration to wait until it is claimable */
  minLock: bigint;
}
export interface MsgCommitLiquidTokensProtoMsg {
  typeUrl: "/elys.commitment.MsgCommitLiquidTokens";
  value: Uint8Array;
}
export interface MsgCommitLiquidTokensAmino {
  creator: string;
  amount: string;
  denom: string;
  /** minimum lock duration to wait until it is claimable */
  min_lock: string;
}
export interface MsgCommitLiquidTokensAminoMsg {
  type: "/elys.commitment.MsgCommitLiquidTokens";
  value: MsgCommitLiquidTokensAmino;
}
export interface MsgCommitLiquidTokensSDKType {
  creator: string;
  amount: string;
  denom: string;
  min_lock: bigint;
}
export interface MsgCommitLiquidTokensResponse {}
export interface MsgCommitLiquidTokensResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgCommitLiquidTokensResponse";
  value: Uint8Array;
}
export interface MsgCommitLiquidTokensResponseAmino {}
export interface MsgCommitLiquidTokensResponseAminoMsg {
  type: "/elys.commitment.MsgCommitLiquidTokensResponse";
  value: MsgCommitLiquidTokensResponseAmino;
}
export interface MsgCommitLiquidTokensResponseSDKType {}
export interface MsgVest {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgVestProtoMsg {
  typeUrl: "/elys.commitment.MsgVest";
  value: Uint8Array;
}
export interface MsgVestAmino {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgVestAminoMsg {
  type: "/elys.commitment.MsgVest";
  value: MsgVestAmino;
}
export interface MsgVestSDKType {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgVestResponse {}
export interface MsgVestResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgVestResponse";
  value: Uint8Array;
}
export interface MsgVestResponseAmino {}
export interface MsgVestResponseAminoMsg {
  type: "/elys.commitment.MsgVestResponse";
  value: MsgVestResponseAmino;
}
export interface MsgVestResponseSDKType {}
export interface MsgCancelVest {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgCancelVestProtoMsg {
  typeUrl: "/elys.commitment.MsgCancelVest";
  value: Uint8Array;
}
export interface MsgCancelVestAmino {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgCancelVestAminoMsg {
  type: "/elys.commitment.MsgCancelVest";
  value: MsgCancelVestAmino;
}
export interface MsgCancelVestSDKType {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgCancelVestResponse {}
export interface MsgCancelVestResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgCancelVestResponse";
  value: Uint8Array;
}
export interface MsgCancelVestResponseAmino {}
export interface MsgCancelVestResponseAminoMsg {
  type: "/elys.commitment.MsgCancelVestResponse";
  value: MsgCancelVestResponseAmino;
}
export interface MsgCancelVestResponseSDKType {}
export interface MsgVestNow {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgVestNowProtoMsg {
  typeUrl: "/elys.commitment.MsgVestNow";
  value: Uint8Array;
}
export interface MsgVestNowAmino {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgVestNowAminoMsg {
  type: "/elys.commitment.MsgVestNow";
  value: MsgVestNowAmino;
}
export interface MsgVestNowSDKType {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgVestNowResponse {}
export interface MsgVestNowResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgVestNowResponse";
  value: Uint8Array;
}
export interface MsgVestNowResponseAmino {}
export interface MsgVestNowResponseAminoMsg {
  type: "/elys.commitment.MsgVestNowResponse";
  value: MsgVestNowResponseAmino;
}
export interface MsgVestNowResponseSDKType {}
export interface MsgUpdateVestingInfo {
  authority: string;
  baseDenom: string;
  vestingDenom: string;
  epochIdentifier: string;
  numEpochs: bigint;
  vestNowFactor: bigint;
  numMaxVestings: bigint;
}
export interface MsgUpdateVestingInfoProtoMsg {
  typeUrl: "/elys.commitment.MsgUpdateVestingInfo";
  value: Uint8Array;
}
export interface MsgUpdateVestingInfoAmino {
  authority: string;
  base_denom: string;
  vesting_denom: string;
  epoch_identifier: string;
  num_epochs: string;
  vest_now_factor: string;
  num_max_vestings: string;
}
export interface MsgUpdateVestingInfoAminoMsg {
  type: "/elys.commitment.MsgUpdateVestingInfo";
  value: MsgUpdateVestingInfoAmino;
}
export interface MsgUpdateVestingInfoSDKType {
  authority: string;
  base_denom: string;
  vesting_denom: string;
  epoch_identifier: string;
  num_epochs: bigint;
  vest_now_factor: bigint;
  num_max_vestings: bigint;
}
export interface MsgUpdateVestingInfoResponse {}
export interface MsgUpdateVestingInfoResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgUpdateVestingInfoResponse";
  value: Uint8Array;
}
export interface MsgUpdateVestingInfoResponseAmino {}
export interface MsgUpdateVestingInfoResponseAminoMsg {
  type: "/elys.commitment.MsgUpdateVestingInfoResponse";
  value: MsgUpdateVestingInfoResponseAmino;
}
export interface MsgUpdateVestingInfoResponseSDKType {}
export interface MsgVestLiquid {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgVestLiquidProtoMsg {
  typeUrl: "/elys.commitment.MsgVestLiquid";
  value: Uint8Array;
}
export interface MsgVestLiquidAmino {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgVestLiquidAminoMsg {
  type: "/elys.commitment.MsgVestLiquid";
  value: MsgVestLiquidAmino;
}
export interface MsgVestLiquidSDKType {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgVestLiquidResponse {}
export interface MsgVestLiquidResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgVestLiquidResponse";
  value: Uint8Array;
}
export interface MsgVestLiquidResponseAmino {}
export interface MsgVestLiquidResponseAminoMsg {
  type: "/elys.commitment.MsgVestLiquidResponse";
  value: MsgVestLiquidResponseAmino;
}
export interface MsgVestLiquidResponseSDKType {}
export interface MsgClaimRewards {
  creator: string;
}
export interface MsgClaimRewardsProtoMsg {
  typeUrl: "/elys.commitment.MsgClaimRewards";
  value: Uint8Array;
}
export interface MsgClaimRewardsAmino {
  creator: string;
}
export interface MsgClaimRewardsAminoMsg {
  type: "/elys.commitment.MsgClaimRewards";
  value: MsgClaimRewardsAmino;
}
export interface MsgClaimRewardsSDKType {
  creator: string;
}
export interface MsgClaimRewardsResponse {}
export interface MsgClaimRewardsResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgClaimRewardsResponse";
  value: Uint8Array;
}
export interface MsgClaimRewardsResponseAmino {}
export interface MsgClaimRewardsResponseAminoMsg {
  type: "/elys.commitment.MsgClaimRewardsResponse";
  value: MsgClaimRewardsResponseAmino;
}
export interface MsgClaimRewardsResponseSDKType {}
export interface MsgStake {
  creator: string;
  amount: string;
  asset: string;
  validatorAddress: string;
}
export interface MsgStakeProtoMsg {
  typeUrl: "/elys.commitment.MsgStake";
  value: Uint8Array;
}
export interface MsgStakeAmino {
  creator: string;
  amount: string;
  asset: string;
  validator_address: string;
}
export interface MsgStakeAminoMsg {
  type: "/elys.commitment.MsgStake";
  value: MsgStakeAmino;
}
export interface MsgStakeSDKType {
  creator: string;
  amount: string;
  asset: string;
  validator_address: string;
}
export interface MsgStakeResponse {
  code: bigint;
  result: string;
}
export interface MsgStakeResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgStakeResponse";
  value: Uint8Array;
}
export interface MsgStakeResponseAmino {
  code: string;
  result: string;
}
export interface MsgStakeResponseAminoMsg {
  type: "/elys.commitment.MsgStakeResponse";
  value: MsgStakeResponseAmino;
}
export interface MsgStakeResponseSDKType {
  code: bigint;
  result: string;
}
export interface MsgUnstake {
  creator: string;
  amount: string;
  asset: string;
  validatorAddress: string;
}
export interface MsgUnstakeProtoMsg {
  typeUrl: "/elys.commitment.MsgUnstake";
  value: Uint8Array;
}
export interface MsgUnstakeAmino {
  creator: string;
  amount: string;
  asset: string;
  validator_address: string;
}
export interface MsgUnstakeAminoMsg {
  type: "/elys.commitment.MsgUnstake";
  value: MsgUnstakeAmino;
}
export interface MsgUnstakeSDKType {
  creator: string;
  amount: string;
  asset: string;
  validator_address: string;
}
export interface MsgUnstakeResponse {
  code: bigint;
  result: string;
}
export interface MsgUnstakeResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgUnstakeResponse";
  value: Uint8Array;
}
export interface MsgUnstakeResponseAmino {
  code: string;
  result: string;
}
export interface MsgUnstakeResponseAminoMsg {
  type: "/elys.commitment.MsgUnstakeResponse";
  value: MsgUnstakeResponseAmino;
}
export interface MsgUnstakeResponseSDKType {
  code: bigint;
  result: string;
}
function createBaseMsgCommitClaimedRewards(): MsgCommitClaimedRewards {
  return {
    creator: "",
    amount: "",
    denom: ""
  };
}
export const MsgCommitClaimedRewards = {
  typeUrl: "/elys.commitment.MsgCommitClaimedRewards",
  encode(message: MsgCommitClaimedRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCommitClaimedRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommitClaimedRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCommitClaimedRewards>): MsgCommitClaimedRewards {
    const message = createBaseMsgCommitClaimedRewards();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgCommitClaimedRewardsAmino): MsgCommitClaimedRewards {
    return {
      creator: object.creator,
      amount: object.amount,
      denom: object.denom
    };
  },
  toAmino(message: MsgCommitClaimedRewards): MsgCommitClaimedRewardsAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgCommitClaimedRewardsAminoMsg): MsgCommitClaimedRewards {
    return MsgCommitClaimedRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCommitClaimedRewardsProtoMsg): MsgCommitClaimedRewards {
    return MsgCommitClaimedRewards.decode(message.value);
  },
  toProto(message: MsgCommitClaimedRewards): Uint8Array {
    return MsgCommitClaimedRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgCommitClaimedRewards): MsgCommitClaimedRewardsProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgCommitClaimedRewards",
      value: MsgCommitClaimedRewards.encode(message).finish()
    };
  }
};
function createBaseMsgCommitClaimedRewardsResponse(): MsgCommitClaimedRewardsResponse {
  return {};
}
export const MsgCommitClaimedRewardsResponse = {
  typeUrl: "/elys.commitment.MsgCommitClaimedRewardsResponse",
  encode(_: MsgCommitClaimedRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCommitClaimedRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommitClaimedRewardsResponse();
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
  fromPartial(_: Partial<MsgCommitClaimedRewardsResponse>): MsgCommitClaimedRewardsResponse {
    const message = createBaseMsgCommitClaimedRewardsResponse();
    return message;
  },
  fromAmino(_: MsgCommitClaimedRewardsResponseAmino): MsgCommitClaimedRewardsResponse {
    return {};
  },
  toAmino(_: MsgCommitClaimedRewardsResponse): MsgCommitClaimedRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCommitClaimedRewardsResponseAminoMsg): MsgCommitClaimedRewardsResponse {
    return MsgCommitClaimedRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCommitClaimedRewardsResponseProtoMsg): MsgCommitClaimedRewardsResponse {
    return MsgCommitClaimedRewardsResponse.decode(message.value);
  },
  toProto(message: MsgCommitClaimedRewardsResponse): Uint8Array {
    return MsgCommitClaimedRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCommitClaimedRewardsResponse): MsgCommitClaimedRewardsResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgCommitClaimedRewardsResponse",
      value: MsgCommitClaimedRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUncommitTokens(): MsgUncommitTokens {
  return {
    creator: "",
    amount: "",
    denom: ""
  };
}
export const MsgUncommitTokens = {
  typeUrl: "/elys.commitment.MsgUncommitTokens",
  encode(message: MsgUncommitTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUncommitTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUncommitTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUncommitTokens>): MsgUncommitTokens {
    const message = createBaseMsgUncommitTokens();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgUncommitTokensAmino): MsgUncommitTokens {
    return {
      creator: object.creator,
      amount: object.amount,
      denom: object.denom
    };
  },
  toAmino(message: MsgUncommitTokens): MsgUncommitTokensAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgUncommitTokensAminoMsg): MsgUncommitTokens {
    return MsgUncommitTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUncommitTokensProtoMsg): MsgUncommitTokens {
    return MsgUncommitTokens.decode(message.value);
  },
  toProto(message: MsgUncommitTokens): Uint8Array {
    return MsgUncommitTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgUncommitTokens): MsgUncommitTokensProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgUncommitTokens",
      value: MsgUncommitTokens.encode(message).finish()
    };
  }
};
function createBaseMsgUncommitTokensResponse(): MsgUncommitTokensResponse {
  return {};
}
export const MsgUncommitTokensResponse = {
  typeUrl: "/elys.commitment.MsgUncommitTokensResponse",
  encode(_: MsgUncommitTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUncommitTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUncommitTokensResponse();
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
  fromPartial(_: Partial<MsgUncommitTokensResponse>): MsgUncommitTokensResponse {
    const message = createBaseMsgUncommitTokensResponse();
    return message;
  },
  fromAmino(_: MsgUncommitTokensResponseAmino): MsgUncommitTokensResponse {
    return {};
  },
  toAmino(_: MsgUncommitTokensResponse): MsgUncommitTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUncommitTokensResponseAminoMsg): MsgUncommitTokensResponse {
    return MsgUncommitTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUncommitTokensResponseProtoMsg): MsgUncommitTokensResponse {
    return MsgUncommitTokensResponse.decode(message.value);
  },
  toProto(message: MsgUncommitTokensResponse): Uint8Array {
    return MsgUncommitTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUncommitTokensResponse): MsgUncommitTokensResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgUncommitTokensResponse",
      value: MsgUncommitTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimReward(): MsgClaimReward {
  return {
    creator: "",
    amount: "",
    denom: ""
  };
}
export const MsgClaimReward = {
  typeUrl: "/elys.commitment.MsgClaimReward",
  encode(message: MsgClaimReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimReward>): MsgClaimReward {
    const message = createBaseMsgClaimReward();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgClaimRewardAmino): MsgClaimReward {
    return {
      creator: object.creator,
      amount: object.amount,
      denom: object.denom
    };
  },
  toAmino(message: MsgClaimReward): MsgClaimRewardAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgClaimRewardAminoMsg): MsgClaimReward {
    return MsgClaimReward.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimRewardProtoMsg): MsgClaimReward {
    return MsgClaimReward.decode(message.value);
  },
  toProto(message: MsgClaimReward): Uint8Array {
    return MsgClaimReward.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimReward): MsgClaimRewardProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgClaimReward",
      value: MsgClaimReward.encode(message).finish()
    };
  }
};
function createBaseMsgClaimRewardResponse(): MsgClaimRewardResponse {
  return {};
}
export const MsgClaimRewardResponse = {
  typeUrl: "/elys.commitment.MsgClaimRewardResponse",
  encode(_: MsgClaimRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRewardResponse();
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
  fromPartial(_: Partial<MsgClaimRewardResponse>): MsgClaimRewardResponse {
    const message = createBaseMsgClaimRewardResponse();
    return message;
  },
  fromAmino(_: MsgClaimRewardResponseAmino): MsgClaimRewardResponse {
    return {};
  },
  toAmino(_: MsgClaimRewardResponse): MsgClaimRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimRewardResponseAminoMsg): MsgClaimRewardResponse {
    return MsgClaimRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimRewardResponseProtoMsg): MsgClaimRewardResponse {
    return MsgClaimRewardResponse.decode(message.value);
  },
  toProto(message: MsgClaimRewardResponse): Uint8Array {
    return MsgClaimRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimRewardResponse): MsgClaimRewardResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgClaimRewardResponse",
      value: MsgClaimRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCommitLiquidTokens(): MsgCommitLiquidTokens {
  return {
    creator: "",
    amount: "",
    denom: "",
    minLock: BigInt(0)
  };
}
export const MsgCommitLiquidTokens = {
  typeUrl: "/elys.commitment.MsgCommitLiquidTokens",
  encode(message: MsgCommitLiquidTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.minLock !== BigInt(0)) {
      writer.uint32(32).uint64(message.minLock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCommitLiquidTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommitLiquidTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.minLock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCommitLiquidTokens>): MsgCommitLiquidTokens {
    const message = createBaseMsgCommitLiquidTokens();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.minLock = object.minLock !== undefined && object.minLock !== null ? BigInt(object.minLock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCommitLiquidTokensAmino): MsgCommitLiquidTokens {
    return {
      creator: object.creator,
      amount: object.amount,
      denom: object.denom,
      minLock: BigInt(object.min_lock)
    };
  },
  toAmino(message: MsgCommitLiquidTokens): MsgCommitLiquidTokensAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.denom = message.denom;
    obj.min_lock = message.minLock ? message.minLock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCommitLiquidTokensAminoMsg): MsgCommitLiquidTokens {
    return MsgCommitLiquidTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCommitLiquidTokensProtoMsg): MsgCommitLiquidTokens {
    return MsgCommitLiquidTokens.decode(message.value);
  },
  toProto(message: MsgCommitLiquidTokens): Uint8Array {
    return MsgCommitLiquidTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgCommitLiquidTokens): MsgCommitLiquidTokensProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgCommitLiquidTokens",
      value: MsgCommitLiquidTokens.encode(message).finish()
    };
  }
};
function createBaseMsgCommitLiquidTokensResponse(): MsgCommitLiquidTokensResponse {
  return {};
}
export const MsgCommitLiquidTokensResponse = {
  typeUrl: "/elys.commitment.MsgCommitLiquidTokensResponse",
  encode(_: MsgCommitLiquidTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCommitLiquidTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommitLiquidTokensResponse();
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
  fromPartial(_: Partial<MsgCommitLiquidTokensResponse>): MsgCommitLiquidTokensResponse {
    const message = createBaseMsgCommitLiquidTokensResponse();
    return message;
  },
  fromAmino(_: MsgCommitLiquidTokensResponseAmino): MsgCommitLiquidTokensResponse {
    return {};
  },
  toAmino(_: MsgCommitLiquidTokensResponse): MsgCommitLiquidTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCommitLiquidTokensResponseAminoMsg): MsgCommitLiquidTokensResponse {
    return MsgCommitLiquidTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCommitLiquidTokensResponseProtoMsg): MsgCommitLiquidTokensResponse {
    return MsgCommitLiquidTokensResponse.decode(message.value);
  },
  toProto(message: MsgCommitLiquidTokensResponse): Uint8Array {
    return MsgCommitLiquidTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCommitLiquidTokensResponse): MsgCommitLiquidTokensResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgCommitLiquidTokensResponse",
      value: MsgCommitLiquidTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVest(): MsgVest {
  return {
    creator: "",
    amount: "",
    denom: ""
  };
}
export const MsgVest = {
  typeUrl: "/elys.commitment.MsgVest",
  encode(message: MsgVest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgVest>): MsgVest {
    const message = createBaseMsgVest();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgVestAmino): MsgVest {
    return {
      creator: object.creator,
      amount: object.amount,
      denom: object.denom
    };
  },
  toAmino(message: MsgVest): MsgVestAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgVestAminoMsg): MsgVest {
    return MsgVest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVestProtoMsg): MsgVest {
    return MsgVest.decode(message.value);
  },
  toProto(message: MsgVest): Uint8Array {
    return MsgVest.encode(message).finish();
  },
  toProtoMsg(message: MsgVest): MsgVestProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgVest",
      value: MsgVest.encode(message).finish()
    };
  }
};
function createBaseMsgVestResponse(): MsgVestResponse {
  return {};
}
export const MsgVestResponse = {
  typeUrl: "/elys.commitment.MsgVestResponse",
  encode(_: MsgVestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVestResponse();
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
  fromPartial(_: Partial<MsgVestResponse>): MsgVestResponse {
    const message = createBaseMsgVestResponse();
    return message;
  },
  fromAmino(_: MsgVestResponseAmino): MsgVestResponse {
    return {};
  },
  toAmino(_: MsgVestResponse): MsgVestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVestResponseAminoMsg): MsgVestResponse {
    return MsgVestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVestResponseProtoMsg): MsgVestResponse {
    return MsgVestResponse.decode(message.value);
  },
  toProto(message: MsgVestResponse): Uint8Array {
    return MsgVestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVestResponse): MsgVestResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgVestResponse",
      value: MsgVestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelVest(): MsgCancelVest {
  return {
    creator: "",
    amount: "",
    denom: ""
  };
}
export const MsgCancelVest = {
  typeUrl: "/elys.commitment.MsgCancelVest",
  encode(message: MsgCancelVest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelVest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelVest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCancelVest>): MsgCancelVest {
    const message = createBaseMsgCancelVest();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgCancelVestAmino): MsgCancelVest {
    return {
      creator: object.creator,
      amount: object.amount,
      denom: object.denom
    };
  },
  toAmino(message: MsgCancelVest): MsgCancelVestAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgCancelVestAminoMsg): MsgCancelVest {
    return MsgCancelVest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelVestProtoMsg): MsgCancelVest {
    return MsgCancelVest.decode(message.value);
  },
  toProto(message: MsgCancelVest): Uint8Array {
    return MsgCancelVest.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelVest): MsgCancelVestProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgCancelVest",
      value: MsgCancelVest.encode(message).finish()
    };
  }
};
function createBaseMsgCancelVestResponse(): MsgCancelVestResponse {
  return {};
}
export const MsgCancelVestResponse = {
  typeUrl: "/elys.commitment.MsgCancelVestResponse",
  encode(_: MsgCancelVestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelVestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelVestResponse();
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
  fromPartial(_: Partial<MsgCancelVestResponse>): MsgCancelVestResponse {
    const message = createBaseMsgCancelVestResponse();
    return message;
  },
  fromAmino(_: MsgCancelVestResponseAmino): MsgCancelVestResponse {
    return {};
  },
  toAmino(_: MsgCancelVestResponse): MsgCancelVestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelVestResponseAminoMsg): MsgCancelVestResponse {
    return MsgCancelVestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelVestResponseProtoMsg): MsgCancelVestResponse {
    return MsgCancelVestResponse.decode(message.value);
  },
  toProto(message: MsgCancelVestResponse): Uint8Array {
    return MsgCancelVestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelVestResponse): MsgCancelVestResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgCancelVestResponse",
      value: MsgCancelVestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVestNow(): MsgVestNow {
  return {
    creator: "",
    amount: "",
    denom: ""
  };
}
export const MsgVestNow = {
  typeUrl: "/elys.commitment.MsgVestNow",
  encode(message: MsgVestNow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVestNow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVestNow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgVestNow>): MsgVestNow {
    const message = createBaseMsgVestNow();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgVestNowAmino): MsgVestNow {
    return {
      creator: object.creator,
      amount: object.amount,
      denom: object.denom
    };
  },
  toAmino(message: MsgVestNow): MsgVestNowAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgVestNowAminoMsg): MsgVestNow {
    return MsgVestNow.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVestNowProtoMsg): MsgVestNow {
    return MsgVestNow.decode(message.value);
  },
  toProto(message: MsgVestNow): Uint8Array {
    return MsgVestNow.encode(message).finish();
  },
  toProtoMsg(message: MsgVestNow): MsgVestNowProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgVestNow",
      value: MsgVestNow.encode(message).finish()
    };
  }
};
function createBaseMsgVestNowResponse(): MsgVestNowResponse {
  return {};
}
export const MsgVestNowResponse = {
  typeUrl: "/elys.commitment.MsgVestNowResponse",
  encode(_: MsgVestNowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVestNowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVestNowResponse();
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
  fromPartial(_: Partial<MsgVestNowResponse>): MsgVestNowResponse {
    const message = createBaseMsgVestNowResponse();
    return message;
  },
  fromAmino(_: MsgVestNowResponseAmino): MsgVestNowResponse {
    return {};
  },
  toAmino(_: MsgVestNowResponse): MsgVestNowResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVestNowResponseAminoMsg): MsgVestNowResponse {
    return MsgVestNowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVestNowResponseProtoMsg): MsgVestNowResponse {
    return MsgVestNowResponse.decode(message.value);
  },
  toProto(message: MsgVestNowResponse): Uint8Array {
    return MsgVestNowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVestNowResponse): MsgVestNowResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgVestNowResponse",
      value: MsgVestNowResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateVestingInfo(): MsgUpdateVestingInfo {
  return {
    authority: "",
    baseDenom: "",
    vestingDenom: "",
    epochIdentifier: "",
    numEpochs: BigInt(0),
    vestNowFactor: BigInt(0),
    numMaxVestings: BigInt(0)
  };
}
export const MsgUpdateVestingInfo = {
  typeUrl: "/elys.commitment.MsgUpdateVestingInfo",
  encode(message: MsgUpdateVestingInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.vestingDenom !== "") {
      writer.uint32(26).string(message.vestingDenom);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(34).string(message.epochIdentifier);
    }
    if (message.numEpochs !== BigInt(0)) {
      writer.uint32(40).int64(message.numEpochs);
    }
    if (message.vestNowFactor !== BigInt(0)) {
      writer.uint32(48).int64(message.vestNowFactor);
    }
    if (message.numMaxVestings !== BigInt(0)) {
      writer.uint32(56).int64(message.numMaxVestings);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateVestingInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateVestingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        case 3:
          message.vestingDenom = reader.string();
          break;
        case 4:
          message.epochIdentifier = reader.string();
          break;
        case 5:
          message.numEpochs = reader.int64();
          break;
        case 6:
          message.vestNowFactor = reader.int64();
          break;
        case 7:
          message.numMaxVestings = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateVestingInfo>): MsgUpdateVestingInfo {
    const message = createBaseMsgUpdateVestingInfo();
    message.authority = object.authority ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.vestingDenom = object.vestingDenom ?? "";
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.numEpochs = object.numEpochs !== undefined && object.numEpochs !== null ? BigInt(object.numEpochs.toString()) : BigInt(0);
    message.vestNowFactor = object.vestNowFactor !== undefined && object.vestNowFactor !== null ? BigInt(object.vestNowFactor.toString()) : BigInt(0);
    message.numMaxVestings = object.numMaxVestings !== undefined && object.numMaxVestings !== null ? BigInt(object.numMaxVestings.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateVestingInfoAmino): MsgUpdateVestingInfo {
    return {
      authority: object.authority,
      baseDenom: object.base_denom,
      vestingDenom: object.vesting_denom,
      epochIdentifier: object.epoch_identifier,
      numEpochs: BigInt(object.num_epochs),
      vestNowFactor: BigInt(object.vest_now_factor),
      numMaxVestings: BigInt(object.num_max_vestings)
    };
  },
  toAmino(message: MsgUpdateVestingInfo): MsgUpdateVestingInfoAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.base_denom = message.baseDenom;
    obj.vesting_denom = message.vestingDenom;
    obj.epoch_identifier = message.epochIdentifier;
    obj.num_epochs = message.numEpochs ? message.numEpochs.toString() : undefined;
    obj.vest_now_factor = message.vestNowFactor ? message.vestNowFactor.toString() : undefined;
    obj.num_max_vestings = message.numMaxVestings ? message.numMaxVestings.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateVestingInfoAminoMsg): MsgUpdateVestingInfo {
    return MsgUpdateVestingInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateVestingInfoProtoMsg): MsgUpdateVestingInfo {
    return MsgUpdateVestingInfo.decode(message.value);
  },
  toProto(message: MsgUpdateVestingInfo): Uint8Array {
    return MsgUpdateVestingInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateVestingInfo): MsgUpdateVestingInfoProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgUpdateVestingInfo",
      value: MsgUpdateVestingInfo.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateVestingInfoResponse(): MsgUpdateVestingInfoResponse {
  return {};
}
export const MsgUpdateVestingInfoResponse = {
  typeUrl: "/elys.commitment.MsgUpdateVestingInfoResponse",
  encode(_: MsgUpdateVestingInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateVestingInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateVestingInfoResponse();
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
  fromPartial(_: Partial<MsgUpdateVestingInfoResponse>): MsgUpdateVestingInfoResponse {
    const message = createBaseMsgUpdateVestingInfoResponse();
    return message;
  },
  fromAmino(_: MsgUpdateVestingInfoResponseAmino): MsgUpdateVestingInfoResponse {
    return {};
  },
  toAmino(_: MsgUpdateVestingInfoResponse): MsgUpdateVestingInfoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateVestingInfoResponseAminoMsg): MsgUpdateVestingInfoResponse {
    return MsgUpdateVestingInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateVestingInfoResponseProtoMsg): MsgUpdateVestingInfoResponse {
    return MsgUpdateVestingInfoResponse.decode(message.value);
  },
  toProto(message: MsgUpdateVestingInfoResponse): Uint8Array {
    return MsgUpdateVestingInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateVestingInfoResponse): MsgUpdateVestingInfoResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgUpdateVestingInfoResponse",
      value: MsgUpdateVestingInfoResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVestLiquid(): MsgVestLiquid {
  return {
    creator: "",
    amount: "",
    denom: ""
  };
}
export const MsgVestLiquid = {
  typeUrl: "/elys.commitment.MsgVestLiquid",
  encode(message: MsgVestLiquid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVestLiquid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVestLiquid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgVestLiquid>): MsgVestLiquid {
    const message = createBaseMsgVestLiquid();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgVestLiquidAmino): MsgVestLiquid {
    return {
      creator: object.creator,
      amount: object.amount,
      denom: object.denom
    };
  },
  toAmino(message: MsgVestLiquid): MsgVestLiquidAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgVestLiquidAminoMsg): MsgVestLiquid {
    return MsgVestLiquid.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVestLiquidProtoMsg): MsgVestLiquid {
    return MsgVestLiquid.decode(message.value);
  },
  toProto(message: MsgVestLiquid): Uint8Array {
    return MsgVestLiquid.encode(message).finish();
  },
  toProtoMsg(message: MsgVestLiquid): MsgVestLiquidProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgVestLiquid",
      value: MsgVestLiquid.encode(message).finish()
    };
  }
};
function createBaseMsgVestLiquidResponse(): MsgVestLiquidResponse {
  return {};
}
export const MsgVestLiquidResponse = {
  typeUrl: "/elys.commitment.MsgVestLiquidResponse",
  encode(_: MsgVestLiquidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVestLiquidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVestLiquidResponse();
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
  fromPartial(_: Partial<MsgVestLiquidResponse>): MsgVestLiquidResponse {
    const message = createBaseMsgVestLiquidResponse();
    return message;
  },
  fromAmino(_: MsgVestLiquidResponseAmino): MsgVestLiquidResponse {
    return {};
  },
  toAmino(_: MsgVestLiquidResponse): MsgVestLiquidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVestLiquidResponseAminoMsg): MsgVestLiquidResponse {
    return MsgVestLiquidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVestLiquidResponseProtoMsg): MsgVestLiquidResponse {
    return MsgVestLiquidResponse.decode(message.value);
  },
  toProto(message: MsgVestLiquidResponse): Uint8Array {
    return MsgVestLiquidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVestLiquidResponse): MsgVestLiquidResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgVestLiquidResponse",
      value: MsgVestLiquidResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimRewards(): MsgClaimRewards {
  return {
    creator: ""
  };
}
export const MsgClaimRewards = {
  typeUrl: "/elys.commitment.MsgClaimRewards",
  encode(message: MsgClaimRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimRewards>): MsgClaimRewards {
    const message = createBaseMsgClaimRewards();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgClaimRewardsAmino): MsgClaimRewards {
    return {
      creator: object.creator
    };
  },
  toAmino(message: MsgClaimRewards): MsgClaimRewardsAmino {
    const obj: any = {};
    obj.creator = message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgClaimRewardsAminoMsg): MsgClaimRewards {
    return MsgClaimRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimRewardsProtoMsg): MsgClaimRewards {
    return MsgClaimRewards.decode(message.value);
  },
  toProto(message: MsgClaimRewards): Uint8Array {
    return MsgClaimRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimRewards): MsgClaimRewardsProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgClaimRewards",
      value: MsgClaimRewards.encode(message).finish()
    };
  }
};
function createBaseMsgClaimRewardsResponse(): MsgClaimRewardsResponse {
  return {};
}
export const MsgClaimRewardsResponse = {
  typeUrl: "/elys.commitment.MsgClaimRewardsResponse",
  encode(_: MsgClaimRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRewardsResponse();
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
  fromPartial(_: Partial<MsgClaimRewardsResponse>): MsgClaimRewardsResponse {
    const message = createBaseMsgClaimRewardsResponse();
    return message;
  },
  fromAmino(_: MsgClaimRewardsResponseAmino): MsgClaimRewardsResponse {
    return {};
  },
  toAmino(_: MsgClaimRewardsResponse): MsgClaimRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimRewardsResponseAminoMsg): MsgClaimRewardsResponse {
    return MsgClaimRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimRewardsResponseProtoMsg): MsgClaimRewardsResponse {
    return MsgClaimRewardsResponse.decode(message.value);
  },
  toProto(message: MsgClaimRewardsResponse): Uint8Array {
    return MsgClaimRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimRewardsResponse): MsgClaimRewardsResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgClaimRewardsResponse",
      value: MsgClaimRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStake(): MsgStake {
  return {
    creator: "",
    amount: "",
    asset: "",
    validatorAddress: ""
  };
}
export const MsgStake = {
  typeUrl: "/elys.commitment.MsgStake",
  encode(message: MsgStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.asset !== "") {
      writer.uint32(26).string(message.asset);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(34).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.asset = reader.string();
          break;
        case 4:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgStake>): MsgStake {
    const message = createBaseMsgStake();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.asset = object.asset ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgStakeAmino): MsgStake {
    return {
      creator: object.creator,
      amount: object.amount,
      asset: object.asset,
      validatorAddress: object.validator_address
    };
  },
  toAmino(message: MsgStake): MsgStakeAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.asset = message.asset;
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgStakeAminoMsg): MsgStake {
    return MsgStake.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeProtoMsg): MsgStake {
    return MsgStake.decode(message.value);
  },
  toProto(message: MsgStake): Uint8Array {
    return MsgStake.encode(message).finish();
  },
  toProtoMsg(message: MsgStake): MsgStakeProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgStake",
      value: MsgStake.encode(message).finish()
    };
  }
};
function createBaseMsgStakeResponse(): MsgStakeResponse {
  return {
    code: BigInt(0),
    result: ""
  };
}
export const MsgStakeResponse = {
  typeUrl: "/elys.commitment.MsgStakeResponse",
  encode(message: MsgStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== BigInt(0)) {
      writer.uint32(8).uint64(message.code);
    }
    if (message.result !== "") {
      writer.uint32(18).string(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint64();
          break;
        case 2:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgStakeResponse>): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    message.code = object.code !== undefined && object.code !== null ? BigInt(object.code.toString()) : BigInt(0);
    message.result = object.result ?? "";
    return message;
  },
  fromAmino(object: MsgStakeResponseAmino): MsgStakeResponse {
    return {
      code: BigInt(object.code),
      result: object.result
    };
  },
  toAmino(message: MsgStakeResponse): MsgStakeResponseAmino {
    const obj: any = {};
    obj.code = message.code ? message.code.toString() : undefined;
    obj.result = message.result;
    return obj;
  },
  fromAminoMsg(object: MsgStakeResponseAminoMsg): MsgStakeResponse {
    return MsgStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeResponseProtoMsg): MsgStakeResponse {
    return MsgStakeResponse.decode(message.value);
  },
  toProto(message: MsgStakeResponse): Uint8Array {
    return MsgStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeResponse): MsgStakeResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgStakeResponse",
      value: MsgStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnstake(): MsgUnstake {
  return {
    creator: "",
    amount: "",
    asset: "",
    validatorAddress: ""
  };
}
export const MsgUnstake = {
  typeUrl: "/elys.commitment.MsgUnstake",
  encode(message: MsgUnstake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.asset !== "") {
      writer.uint32(26).string(message.asset);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(34).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.asset = reader.string();
          break;
        case 4:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnstake>): MsgUnstake {
    const message = createBaseMsgUnstake();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.asset = object.asset ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnstakeAmino): MsgUnstake {
    return {
      creator: object.creator,
      amount: object.amount,
      asset: object.asset,
      validatorAddress: object.validator_address
    };
  },
  toAmino(message: MsgUnstake): MsgUnstakeAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.asset = message.asset;
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeAminoMsg): MsgUnstake {
    return MsgUnstake.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeProtoMsg): MsgUnstake {
    return MsgUnstake.decode(message.value);
  },
  toProto(message: MsgUnstake): Uint8Array {
    return MsgUnstake.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstake): MsgUnstakeProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgUnstake",
      value: MsgUnstake.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeResponse(): MsgUnstakeResponse {
  return {
    code: BigInt(0),
    result: ""
  };
}
export const MsgUnstakeResponse = {
  typeUrl: "/elys.commitment.MsgUnstakeResponse",
  encode(message: MsgUnstakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== BigInt(0)) {
      writer.uint32(8).uint64(message.code);
    }
    if (message.result !== "") {
      writer.uint32(18).string(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint64();
          break;
        case 2:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnstakeResponse>): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    message.code = object.code !== undefined && object.code !== null ? BigInt(object.code.toString()) : BigInt(0);
    message.result = object.result ?? "";
    return message;
  },
  fromAmino(object: MsgUnstakeResponseAmino): MsgUnstakeResponse {
    return {
      code: BigInt(object.code),
      result: object.result
    };
  },
  toAmino(message: MsgUnstakeResponse): MsgUnstakeResponseAmino {
    const obj: any = {};
    obj.code = message.code ? message.code.toString() : undefined;
    obj.result = message.result;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeResponseAminoMsg): MsgUnstakeResponse {
    return MsgUnstakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeResponseProtoMsg): MsgUnstakeResponse {
    return MsgUnstakeResponse.decode(message.value);
  },
  toProto(message: MsgUnstakeResponse): Uint8Array {
    return MsgUnstakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeResponse): MsgUnstakeResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgUnstakeResponse",
      value: MsgUnstakeResponse.encode(message).finish()
    };
  }
};