//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/elys.estaking.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/elys.estaking.QueryParamsRequest";
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
  typeUrl: "/elys.estaking.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/elys.estaking.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryRewardsRequest {
  address: string;
}
export interface QueryRewardsRequestProtoMsg {
  typeUrl: "/elys.estaking.QueryRewardsRequest";
  value: Uint8Array;
}
export interface QueryRewardsRequestAmino {
  address?: string;
}
export interface QueryRewardsRequestAminoMsg {
  type: "/elys.estaking.QueryRewardsRequest";
  value: QueryRewardsRequestAmino;
}
export interface QueryRewardsRequestSDKType {
  address: string;
}
export interface DelegationDelegatorReward {
  validatorAddress: string;
  reward: Coin[];
}
export interface DelegationDelegatorRewardProtoMsg {
  typeUrl: "/elys.estaking.DelegationDelegatorReward";
  value: Uint8Array;
}
export interface DelegationDelegatorRewardAmino {
  validator_address?: string;
  reward?: CoinAmino[];
}
export interface DelegationDelegatorRewardAminoMsg {
  type: "/elys.estaking.DelegationDelegatorReward";
  value: DelegationDelegatorRewardAmino;
}
export interface DelegationDelegatorRewardSDKType {
  validator_address: string;
  reward: CoinSDKType[];
}
export interface QueryRewardsResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: DelegationDelegatorReward[];
  /** total defines the sum of all the rewards. */
  total: Coin[];
}
export interface QueryRewardsResponseProtoMsg {
  typeUrl: "/elys.estaking.QueryRewardsResponse";
  value: Uint8Array;
}
export interface QueryRewardsResponseAmino {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards?: DelegationDelegatorRewardAmino[];
  /** total defines the sum of all the rewards. */
  total?: CoinAmino[];
}
export interface QueryRewardsResponseAminoMsg {
  type: "/elys.estaking.QueryRewardsResponse";
  value: QueryRewardsResponseAmino;
}
export interface QueryRewardsResponseSDKType {
  rewards: DelegationDelegatorRewardSDKType[];
  total: CoinSDKType[];
}
export interface QueryInvariantRequest {}
export interface QueryInvariantRequestProtoMsg {
  typeUrl: "/elys.estaking.QueryInvariantRequest";
  value: Uint8Array;
}
export interface QueryInvariantRequestAmino {}
export interface QueryInvariantRequestAminoMsg {
  type: "/elys.estaking.QueryInvariantRequest";
  value: QueryInvariantRequestAmino;
}
export interface QueryInvariantRequestSDKType {}
export interface QueryInvariantResponse {
  totalBonded: string;
  bondedValidatorTokensSum: string;
}
export interface QueryInvariantResponseProtoMsg {
  typeUrl: "/elys.estaking.QueryInvariantResponse";
  value: Uint8Array;
}
export interface QueryInvariantResponseAmino {
  total_bonded?: string;
  bonded_validator_tokens_sum?: string;
}
export interface QueryInvariantResponseAminoMsg {
  type: "/elys.estaking.QueryInvariantResponse";
  value: QueryInvariantResponseAmino;
}
export interface QueryInvariantResponseSDKType {
  total_bonded: string;
  bonded_validator_tokens_sum: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/elys.estaking.QueryParamsRequest",
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
      typeUrl: "/elys.estaking.QueryParamsRequest",
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
  typeUrl: "/elys.estaking.QueryParamsResponse",
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
      typeUrl: "/elys.estaking.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRewardsRequest(): QueryRewardsRequest {
  return {
    address: ""
  };
}
export const QueryRewardsRequest = {
  typeUrl: "/elys.estaking.QueryRewardsRequest",
  encode(message: QueryRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsRequest();
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
  fromPartial(object: Partial<QueryRewardsRequest>): QueryRewardsRequest {
    const message = createBaseQueryRewardsRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryRewardsRequestAmino): QueryRewardsRequest {
    const message = createBaseQueryRewardsRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryRewardsRequest): QueryRewardsRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryRewardsRequestAminoMsg): QueryRewardsRequest {
    return QueryRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardsRequestProtoMsg): QueryRewardsRequest {
    return QueryRewardsRequest.decode(message.value);
  },
  toProto(message: QueryRewardsRequest): Uint8Array {
    return QueryRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardsRequest): QueryRewardsRequestProtoMsg {
    return {
      typeUrl: "/elys.estaking.QueryRewardsRequest",
      value: QueryRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseDelegationDelegatorReward(): DelegationDelegatorReward {
  return {
    validatorAddress: "",
    reward: []
  };
}
export const DelegationDelegatorReward = {
  typeUrl: "/elys.estaking.DelegationDelegatorReward",
  encode(message: DelegationDelegatorReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    for (const v of message.reward) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegationDelegatorReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
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
  fromPartial(object: Partial<DelegationDelegatorReward>): DelegationDelegatorReward {
    const message = createBaseDelegationDelegatorReward();
    message.validatorAddress = object.validatorAddress ?? "";
    message.reward = object.reward?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegationDelegatorRewardAmino): DelegationDelegatorReward {
    const message = createBaseDelegationDelegatorReward();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    message.reward = object.reward?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DelegationDelegatorReward): DelegationDelegatorRewardAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    if (message.reward) {
      obj.reward = message.reward.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.reward = message.reward;
    }
    return obj;
  },
  fromAminoMsg(object: DelegationDelegatorRewardAminoMsg): DelegationDelegatorReward {
    return DelegationDelegatorReward.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationDelegatorRewardProtoMsg): DelegationDelegatorReward {
    return DelegationDelegatorReward.decode(message.value);
  },
  toProto(message: DelegationDelegatorReward): Uint8Array {
    return DelegationDelegatorReward.encode(message).finish();
  },
  toProtoMsg(message: DelegationDelegatorReward): DelegationDelegatorRewardProtoMsg {
    return {
      typeUrl: "/elys.estaking.DelegationDelegatorReward",
      value: DelegationDelegatorReward.encode(message).finish()
    };
  }
};
function createBaseQueryRewardsResponse(): QueryRewardsResponse {
  return {
    rewards: [],
    total: []
  };
}
export const QueryRewardsResponse = {
  typeUrl: "/elys.estaking.QueryRewardsResponse",
  encode(message: QueryRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      DelegationDelegatorReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRewardsResponse>): QueryRewardsResponse {
    const message = createBaseQueryRewardsResponse();
    message.rewards = object.rewards?.map(e => DelegationDelegatorReward.fromPartial(e)) || [];
    message.total = object.total?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRewardsResponseAmino): QueryRewardsResponse {
    const message = createBaseQueryRewardsResponse();
    message.rewards = object.rewards?.map(e => DelegationDelegatorReward.fromAmino(e)) || [];
    message.total = object.total?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRewardsResponse): QueryRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DelegationDelegatorReward.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total = message.total;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRewardsResponseAminoMsg): QueryRewardsResponse {
    return QueryRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardsResponseProtoMsg): QueryRewardsResponse {
    return QueryRewardsResponse.decode(message.value);
  },
  toProto(message: QueryRewardsResponse): Uint8Array {
    return QueryRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardsResponse): QueryRewardsResponseProtoMsg {
    return {
      typeUrl: "/elys.estaking.QueryRewardsResponse",
      value: QueryRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInvariantRequest(): QueryInvariantRequest {
  return {};
}
export const QueryInvariantRequest = {
  typeUrl: "/elys.estaking.QueryInvariantRequest",
  encode(_: QueryInvariantRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInvariantRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInvariantRequest();
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
  fromPartial(_: Partial<QueryInvariantRequest>): QueryInvariantRequest {
    const message = createBaseQueryInvariantRequest();
    return message;
  },
  fromAmino(_: QueryInvariantRequestAmino): QueryInvariantRequest {
    const message = createBaseQueryInvariantRequest();
    return message;
  },
  toAmino(_: QueryInvariantRequest): QueryInvariantRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryInvariantRequestAminoMsg): QueryInvariantRequest {
    return QueryInvariantRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInvariantRequestProtoMsg): QueryInvariantRequest {
    return QueryInvariantRequest.decode(message.value);
  },
  toProto(message: QueryInvariantRequest): Uint8Array {
    return QueryInvariantRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInvariantRequest): QueryInvariantRequestProtoMsg {
    return {
      typeUrl: "/elys.estaking.QueryInvariantRequest",
      value: QueryInvariantRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInvariantResponse(): QueryInvariantResponse {
  return {
    totalBonded: "",
    bondedValidatorTokensSum: ""
  };
}
export const QueryInvariantResponse = {
  typeUrl: "/elys.estaking.QueryInvariantResponse",
  encode(message: QueryInvariantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalBonded !== "") {
      writer.uint32(10).string(message.totalBonded);
    }
    if (message.bondedValidatorTokensSum !== "") {
      writer.uint32(18).string(message.bondedValidatorTokensSum);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInvariantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInvariantResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalBonded = reader.string();
          break;
        case 2:
          message.bondedValidatorTokensSum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryInvariantResponse>): QueryInvariantResponse {
    const message = createBaseQueryInvariantResponse();
    message.totalBonded = object.totalBonded ?? "";
    message.bondedValidatorTokensSum = object.bondedValidatorTokensSum ?? "";
    return message;
  },
  fromAmino(object: QueryInvariantResponseAmino): QueryInvariantResponse {
    const message = createBaseQueryInvariantResponse();
    if (object.total_bonded !== undefined && object.total_bonded !== null) {
      message.totalBonded = object.total_bonded;
    }
    if (object.bonded_validator_tokens_sum !== undefined && object.bonded_validator_tokens_sum !== null) {
      message.bondedValidatorTokensSum = object.bonded_validator_tokens_sum;
    }
    return message;
  },
  toAmino(message: QueryInvariantResponse): QueryInvariantResponseAmino {
    const obj: any = {};
    obj.total_bonded = message.totalBonded === "" ? undefined : message.totalBonded;
    obj.bonded_validator_tokens_sum = message.bondedValidatorTokensSum === "" ? undefined : message.bondedValidatorTokensSum;
    return obj;
  },
  fromAminoMsg(object: QueryInvariantResponseAminoMsg): QueryInvariantResponse {
    return QueryInvariantResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInvariantResponseProtoMsg): QueryInvariantResponse {
    return QueryInvariantResponse.decode(message.value);
  },
  toProto(message: QueryInvariantResponse): Uint8Array {
    return QueryInvariantResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInvariantResponse): QueryInvariantResponseProtoMsg {
    return {
      typeUrl: "/elys.estaking.QueryInvariantResponse",
      value: QueryInvariantResponse.encode(message).finish()
    };
  }
};