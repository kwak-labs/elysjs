import { EarnType, earnTypeFromJSON } from "../commitment/params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawRewards {
  delegatorAddress: string;
  denom: string;
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
  denom: string;
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
  denom: string;
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
  denom: string;
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
  denom: string;
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
  denom: string;
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
function createBaseMsgWithdrawRewards(): MsgWithdrawRewards {
  return {
    delegatorAddress: "",
    denom: "",
    withdrawType: 0
  };
}
export const MsgWithdrawRewards = {
  typeUrl: "/elys.incentive.MsgWithdrawRewards",
  encode(message: MsgWithdrawRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.withdrawType !== 0) {
      writer.uint32(24).int32(message.withdrawType);
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
          message.denom = reader.string();
          break;
        case 3:
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
    message.denom = object.denom ?? "";
    message.withdrawType = object.withdrawType ?? 0;
    return message;
  },
  fromAmino(object: MsgWithdrawRewardsAmino): MsgWithdrawRewards {
    return {
      delegatorAddress: object.delegator_address,
      denom: object.denom,
      withdrawType: isSet(object.withdraw_type) ? earnTypeFromJSON(object.withdraw_type) : -1
    };
  },
  toAmino(message: MsgWithdrawRewards): MsgWithdrawRewardsAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.denom = message.denom;
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
    validatorAddress: "",
    denom: ""
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
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
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
  fromPartial(object: Partial<MsgWithdrawValidatorCommission>): MsgWithdrawValidatorCommission {
    const message = createBaseMsgWithdrawValidatorCommission();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawValidatorCommissionAmino): MsgWithdrawValidatorCommission {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address,
      denom: object.denom
    };
  },
  toAmino(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.denom = message.denom;
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