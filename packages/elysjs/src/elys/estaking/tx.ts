//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/elys.estaking.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  authority?: string;
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "estaking/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/elys.estaking.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/elys.estaking.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
/**
 * MsgWithdrawReward represents delegation withdrawal to a delegator from a
 * single validator.
 */
export interface MsgWithdrawReward {
  delegatorAddress: string;
  validatorAddress: string;
}
export interface MsgWithdrawRewardProtoMsg {
  typeUrl: "/elys.estaking.MsgWithdrawReward";
  value: Uint8Array;
}
/**
 * MsgWithdrawReward represents delegation withdrawal to a delegator from a
 * single validator.
 */
export interface MsgWithdrawRewardAmino {
  delegator_address?: string;
  validator_address?: string;
}
export interface MsgWithdrawRewardAminoMsg {
  type: "estaking/MsgWithdrawReward";
  value: MsgWithdrawRewardAmino;
}
/**
 * MsgWithdrawReward represents delegation withdrawal to a delegator from a
 * single validator.
 */
export interface MsgWithdrawRewardSDKType {
  delegator_address: string;
  validator_address: string;
}
/**
 * MsgWithdrawRewardResponse defines the Msg/WithdrawDelegatorReward response
 * type.
 */
export interface MsgWithdrawRewardResponse {
  amount: Coin[];
}
export interface MsgWithdrawRewardResponseProtoMsg {
  typeUrl: "/elys.estaking.MsgWithdrawRewardResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawRewardResponse defines the Msg/WithdrawDelegatorReward response
 * type.
 */
export interface MsgWithdrawRewardResponseAmino {
  amount?: CoinAmino[];
}
export interface MsgWithdrawRewardResponseAminoMsg {
  type: "/elys.estaking.MsgWithdrawRewardResponse";
  value: MsgWithdrawRewardResponseAmino;
}
/**
 * MsgWithdrawRewardResponse defines the Msg/WithdrawDelegatorReward response
 * type.
 */
export interface MsgWithdrawRewardResponseSDKType {
  amount: CoinSDKType[];
}
/**
 * MsgWithdrawElysStakingRewards represents delegation withdrawal to a delegator
 * from all the validators.
 */
export interface MsgWithdrawElysStakingRewards {
  delegatorAddress: string;
}
export interface MsgWithdrawElysStakingRewardsProtoMsg {
  typeUrl: "/elys.estaking.MsgWithdrawElysStakingRewards";
  value: Uint8Array;
}
/**
 * MsgWithdrawElysStakingRewards represents delegation withdrawal to a delegator
 * from all the validators.
 */
export interface MsgWithdrawElysStakingRewardsAmino {
  delegator_address?: string;
}
export interface MsgWithdrawElysStakingRewardsAminoMsg {
  type: "estaking/MsgWithdrawElysStakingRewards";
  value: MsgWithdrawElysStakingRewardsAmino;
}
/**
 * MsgWithdrawElysStakingRewards represents delegation withdrawal to a delegator
 * from all the validators.
 */
export interface MsgWithdrawElysStakingRewardsSDKType {
  delegator_address: string;
}
/**
 * MsgWithdrawElysStakingRewards defines the Msg/WithdrawElysStakingRewards
 * response type.
 */
export interface MsgWithdrawElysStakingRewardsResponse {
  amount: Coin[];
}
export interface MsgWithdrawElysStakingRewardsResponseProtoMsg {
  typeUrl: "/elys.estaking.MsgWithdrawElysStakingRewardsResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawElysStakingRewards defines the Msg/WithdrawElysStakingRewards
 * response type.
 */
export interface MsgWithdrawElysStakingRewardsResponseAmino {
  amount?: CoinAmino[];
}
export interface MsgWithdrawElysStakingRewardsResponseAminoMsg {
  type: "/elys.estaking.MsgWithdrawElysStakingRewardsResponse";
  value: MsgWithdrawElysStakingRewardsResponseAmino;
}
/**
 * MsgWithdrawElysStakingRewards defines the Msg/WithdrawElysStakingRewards
 * response type.
 */
export interface MsgWithdrawElysStakingRewardsResponseSDKType {
  amount: CoinSDKType[];
}
/**
 * MsgWithdrawAllRewards represents delegation withdrawal to a delegator from
 * all the validators and Eden/EdenB commitment.
 */
export interface MsgWithdrawAllRewards {
  delegatorAddress: string;
}
export interface MsgWithdrawAllRewardsProtoMsg {
  typeUrl: "/elys.estaking.MsgWithdrawAllRewards";
  value: Uint8Array;
}
/**
 * MsgWithdrawAllRewards represents delegation withdrawal to a delegator from
 * all the validators and Eden/EdenB commitment.
 */
export interface MsgWithdrawAllRewardsAmino {
  delegator_address?: string;
}
export interface MsgWithdrawAllRewardsAminoMsg {
  type: "estaking/MsgWithdrawAllRewards";
  value: MsgWithdrawAllRewardsAmino;
}
/**
 * MsgWithdrawAllRewards represents delegation withdrawal to a delegator from
 * all the validators and Eden/EdenB commitment.
 */
export interface MsgWithdrawAllRewardsSDKType {
  delegator_address: string;
}
/**
 * MsgWithdrawAllRewardsResponse defines the Msg/WithdrawAllRewards response
 * type.
 */
export interface MsgWithdrawAllRewardsResponse {
  amount: Coin[];
}
export interface MsgWithdrawAllRewardsResponseProtoMsg {
  typeUrl: "/elys.estaking.MsgWithdrawAllRewardsResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawAllRewardsResponse defines the Msg/WithdrawAllRewards response
 * type.
 */
export interface MsgWithdrawAllRewardsResponseAmino {
  amount?: CoinAmino[];
}
export interface MsgWithdrawAllRewardsResponseAminoMsg {
  type: "/elys.estaking.MsgWithdrawAllRewardsResponse";
  value: MsgWithdrawAllRewardsResponseAmino;
}
/**
 * MsgWithdrawAllRewardsResponse defines the Msg/WithdrawAllRewards response
 * type.
 */
export interface MsgWithdrawAllRewardsResponseSDKType {
  amount: CoinSDKType[];
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/elys.estaking.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "estaking/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/elys.estaking.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/elys.estaking.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/elys.estaking.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawReward(): MsgWithdrawReward {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
export const MsgWithdrawReward = {
  typeUrl: "/elys.estaking.MsgWithdrawReward",
  encode(message: MsgWithdrawReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawReward();
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
  fromPartial(object: Partial<MsgWithdrawReward>): MsgWithdrawReward {
    const message = createBaseMsgWithdrawReward();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawRewardAmino): MsgWithdrawReward {
    const message = createBaseMsgWithdrawReward();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: MsgWithdrawReward): MsgWithdrawRewardAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawRewardAminoMsg): MsgWithdrawReward {
    return MsgWithdrawReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawReward): MsgWithdrawRewardAminoMsg {
    return {
      type: "estaking/MsgWithdrawReward",
      value: MsgWithdrawReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawRewardProtoMsg): MsgWithdrawReward {
    return MsgWithdrawReward.decode(message.value);
  },
  toProto(message: MsgWithdrawReward): Uint8Array {
    return MsgWithdrawReward.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawReward): MsgWithdrawRewardProtoMsg {
    return {
      typeUrl: "/elys.estaking.MsgWithdrawReward",
      value: MsgWithdrawReward.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawRewardResponse(): MsgWithdrawRewardResponse {
  return {
    amount: []
  };
}
export const MsgWithdrawRewardResponse = {
  typeUrl: "/elys.estaking.MsgWithdrawRewardResponse",
  encode(message: MsgWithdrawRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawRewardResponse>): MsgWithdrawRewardResponse {
    const message = createBaseMsgWithdrawRewardResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgWithdrawRewardResponseAmino): MsgWithdrawRewardResponse {
    const message = createBaseMsgWithdrawRewardResponse();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgWithdrawRewardResponse): MsgWithdrawRewardResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawRewardResponseAminoMsg): MsgWithdrawRewardResponse {
    return MsgWithdrawRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawRewardResponseProtoMsg): MsgWithdrawRewardResponse {
    return MsgWithdrawRewardResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawRewardResponse): Uint8Array {
    return MsgWithdrawRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawRewardResponse): MsgWithdrawRewardResponseProtoMsg {
    return {
      typeUrl: "/elys.estaking.MsgWithdrawRewardResponse",
      value: MsgWithdrawRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawElysStakingRewards(): MsgWithdrawElysStakingRewards {
  return {
    delegatorAddress: ""
  };
}
export const MsgWithdrawElysStakingRewards = {
  typeUrl: "/elys.estaking.MsgWithdrawElysStakingRewards",
  encode(message: MsgWithdrawElysStakingRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawElysStakingRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawElysStakingRewards();
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
  fromPartial(object: Partial<MsgWithdrawElysStakingRewards>): MsgWithdrawElysStakingRewards {
    const message = createBaseMsgWithdrawElysStakingRewards();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawElysStakingRewardsAmino): MsgWithdrawElysStakingRewards {
    const message = createBaseMsgWithdrawElysStakingRewards();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: MsgWithdrawElysStakingRewards): MsgWithdrawElysStakingRewardsAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawElysStakingRewardsAminoMsg): MsgWithdrawElysStakingRewards {
    return MsgWithdrawElysStakingRewards.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawElysStakingRewards): MsgWithdrawElysStakingRewardsAminoMsg {
    return {
      type: "estaking/MsgWithdrawElysStakingRewards",
      value: MsgWithdrawElysStakingRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawElysStakingRewardsProtoMsg): MsgWithdrawElysStakingRewards {
    return MsgWithdrawElysStakingRewards.decode(message.value);
  },
  toProto(message: MsgWithdrawElysStakingRewards): Uint8Array {
    return MsgWithdrawElysStakingRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawElysStakingRewards): MsgWithdrawElysStakingRewardsProtoMsg {
    return {
      typeUrl: "/elys.estaking.MsgWithdrawElysStakingRewards",
      value: MsgWithdrawElysStakingRewards.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawElysStakingRewardsResponse(): MsgWithdrawElysStakingRewardsResponse {
  return {
    amount: []
  };
}
export const MsgWithdrawElysStakingRewardsResponse = {
  typeUrl: "/elys.estaking.MsgWithdrawElysStakingRewardsResponse",
  encode(message: MsgWithdrawElysStakingRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawElysStakingRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawElysStakingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawElysStakingRewardsResponse>): MsgWithdrawElysStakingRewardsResponse {
    const message = createBaseMsgWithdrawElysStakingRewardsResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgWithdrawElysStakingRewardsResponseAmino): MsgWithdrawElysStakingRewardsResponse {
    const message = createBaseMsgWithdrawElysStakingRewardsResponse();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgWithdrawElysStakingRewardsResponse): MsgWithdrawElysStakingRewardsResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawElysStakingRewardsResponseAminoMsg): MsgWithdrawElysStakingRewardsResponse {
    return MsgWithdrawElysStakingRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawElysStakingRewardsResponseProtoMsg): MsgWithdrawElysStakingRewardsResponse {
    return MsgWithdrawElysStakingRewardsResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawElysStakingRewardsResponse): Uint8Array {
    return MsgWithdrawElysStakingRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawElysStakingRewardsResponse): MsgWithdrawElysStakingRewardsResponseProtoMsg {
    return {
      typeUrl: "/elys.estaking.MsgWithdrawElysStakingRewardsResponse",
      value: MsgWithdrawElysStakingRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawAllRewards(): MsgWithdrawAllRewards {
  return {
    delegatorAddress: ""
  };
}
export const MsgWithdrawAllRewards = {
  typeUrl: "/elys.estaking.MsgWithdrawAllRewards",
  encode(message: MsgWithdrawAllRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawAllRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllRewards();
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
  fromPartial(object: Partial<MsgWithdrawAllRewards>): MsgWithdrawAllRewards {
    const message = createBaseMsgWithdrawAllRewards();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawAllRewardsAmino): MsgWithdrawAllRewards {
    const message = createBaseMsgWithdrawAllRewards();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: MsgWithdrawAllRewards): MsgWithdrawAllRewardsAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAllRewardsAminoMsg): MsgWithdrawAllRewards {
    return MsgWithdrawAllRewards.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawAllRewards): MsgWithdrawAllRewardsAminoMsg {
    return {
      type: "estaking/MsgWithdrawAllRewards",
      value: MsgWithdrawAllRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawAllRewardsProtoMsg): MsgWithdrawAllRewards {
    return MsgWithdrawAllRewards.decode(message.value);
  },
  toProto(message: MsgWithdrawAllRewards): Uint8Array {
    return MsgWithdrawAllRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawAllRewards): MsgWithdrawAllRewardsProtoMsg {
    return {
      typeUrl: "/elys.estaking.MsgWithdrawAllRewards",
      value: MsgWithdrawAllRewards.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawAllRewardsResponse(): MsgWithdrawAllRewardsResponse {
  return {
    amount: []
  };
}
export const MsgWithdrawAllRewardsResponse = {
  typeUrl: "/elys.estaking.MsgWithdrawAllRewardsResponse",
  encode(message: MsgWithdrawAllRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawAllRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawAllRewardsResponse>): MsgWithdrawAllRewardsResponse {
    const message = createBaseMsgWithdrawAllRewardsResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgWithdrawAllRewardsResponseAmino): MsgWithdrawAllRewardsResponse {
    const message = createBaseMsgWithdrawAllRewardsResponse();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgWithdrawAllRewardsResponse): MsgWithdrawAllRewardsResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAllRewardsResponseAminoMsg): MsgWithdrawAllRewardsResponse {
    return MsgWithdrawAllRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawAllRewardsResponseProtoMsg): MsgWithdrawAllRewardsResponse {
    return MsgWithdrawAllRewardsResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawAllRewardsResponse): Uint8Array {
    return MsgWithdrawAllRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawAllRewardsResponse): MsgWithdrawAllRewardsResponseProtoMsg {
    return {
      typeUrl: "/elys.estaking.MsgWithdrawAllRewardsResponse",
      value: MsgWithdrawAllRewardsResponse.encode(message).finish()
    };
  }
};