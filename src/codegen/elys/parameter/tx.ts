import { BinaryReader, BinaryWriter } from "../../binary";
export interface MsgUpdateMinCommission {
  creator: string;
  minCommission: string;
}
export interface MsgUpdateMinCommissionProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateMinCommission";
  value: Uint8Array;
}
export interface MsgUpdateMinCommissionAmino {
  creator: string;
  min_commission: string;
}
export interface MsgUpdateMinCommissionAminoMsg {
  type: "/elys.parameter.MsgUpdateMinCommission";
  value: MsgUpdateMinCommissionAmino;
}
export interface MsgUpdateMinCommissionSDKType {
  creator: string;
  min_commission: string;
}
export interface MsgUpdateMinCommissionResponse {}
export interface MsgUpdateMinCommissionResponseProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateMinCommissionResponse";
  value: Uint8Array;
}
export interface MsgUpdateMinCommissionResponseAmino {}
export interface MsgUpdateMinCommissionResponseAminoMsg {
  type: "/elys.parameter.MsgUpdateMinCommissionResponse";
  value: MsgUpdateMinCommissionResponseAmino;
}
export interface MsgUpdateMinCommissionResponseSDKType {}
export interface MsgUpdateMaxVotingPower {
  creator: string;
  maxVotingPower: string;
}
export interface MsgUpdateMaxVotingPowerProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateMaxVotingPower";
  value: Uint8Array;
}
export interface MsgUpdateMaxVotingPowerAmino {
  creator: string;
  max_voting_power: string;
}
export interface MsgUpdateMaxVotingPowerAminoMsg {
  type: "/elys.parameter.MsgUpdateMaxVotingPower";
  value: MsgUpdateMaxVotingPowerAmino;
}
export interface MsgUpdateMaxVotingPowerSDKType {
  creator: string;
  max_voting_power: string;
}
export interface MsgUpdateMaxVotingPowerResponse {}
export interface MsgUpdateMaxVotingPowerResponseProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateMaxVotingPowerResponse";
  value: Uint8Array;
}
export interface MsgUpdateMaxVotingPowerResponseAmino {}
export interface MsgUpdateMaxVotingPowerResponseAminoMsg {
  type: "/elys.parameter.MsgUpdateMaxVotingPowerResponse";
  value: MsgUpdateMaxVotingPowerResponseAmino;
}
export interface MsgUpdateMaxVotingPowerResponseSDKType {}
export interface MsgUpdateMinSelfDelegation {
  creator: string;
  minSelfDelegation: string;
}
export interface MsgUpdateMinSelfDelegationProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateMinSelfDelegation";
  value: Uint8Array;
}
export interface MsgUpdateMinSelfDelegationAmino {
  creator: string;
  min_self_delegation: string;
}
export interface MsgUpdateMinSelfDelegationAminoMsg {
  type: "/elys.parameter.MsgUpdateMinSelfDelegation";
  value: MsgUpdateMinSelfDelegationAmino;
}
export interface MsgUpdateMinSelfDelegationSDKType {
  creator: string;
  min_self_delegation: string;
}
export interface MsgUpdateMinSelfDelegationResponse {}
export interface MsgUpdateMinSelfDelegationResponseProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateMinSelfDelegationResponse";
  value: Uint8Array;
}
export interface MsgUpdateMinSelfDelegationResponseAmino {}
export interface MsgUpdateMinSelfDelegationResponseAminoMsg {
  type: "/elys.parameter.MsgUpdateMinSelfDelegationResponse";
  value: MsgUpdateMinSelfDelegationResponseAmino;
}
export interface MsgUpdateMinSelfDelegationResponseSDKType {}
export interface MsgUpdateBrokerAddress {
  creator: string;
  brokerAddress: string;
}
export interface MsgUpdateBrokerAddressProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateBrokerAddress";
  value: Uint8Array;
}
export interface MsgUpdateBrokerAddressAmino {
  creator: string;
  broker_address: string;
}
export interface MsgUpdateBrokerAddressAminoMsg {
  type: "/elys.parameter.MsgUpdateBrokerAddress";
  value: MsgUpdateBrokerAddressAmino;
}
export interface MsgUpdateBrokerAddressSDKType {
  creator: string;
  broker_address: string;
}
export interface MsgUpdateBrokerAddressResponse {}
export interface MsgUpdateBrokerAddressResponseProtoMsg {
  typeUrl: "/elys.parameter.MsgUpdateBrokerAddressResponse";
  value: Uint8Array;
}
export interface MsgUpdateBrokerAddressResponseAmino {}
export interface MsgUpdateBrokerAddressResponseAminoMsg {
  type: "/elys.parameter.MsgUpdateBrokerAddressResponse";
  value: MsgUpdateBrokerAddressResponseAmino;
}
export interface MsgUpdateBrokerAddressResponseSDKType {}
function createBaseMsgUpdateMinCommission(): MsgUpdateMinCommission {
  return {
    creator: "",
    minCommission: ""
  };
}
export const MsgUpdateMinCommission = {
  typeUrl: "/elys.parameter.MsgUpdateMinCommission",
  encode(message: MsgUpdateMinCommission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.minCommission !== "") {
      writer.uint32(18).string(message.minCommission);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMinCommission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMinCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.minCommission = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateMinCommission>): MsgUpdateMinCommission {
    const message = createBaseMsgUpdateMinCommission();
    message.creator = object.creator ?? "";
    message.minCommission = object.minCommission ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateMinCommissionAmino): MsgUpdateMinCommission {
    return {
      creator: object.creator,
      minCommission: object.min_commission
    };
  },
  toAmino(message: MsgUpdateMinCommission): MsgUpdateMinCommissionAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.min_commission = message.minCommission;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMinCommissionAminoMsg): MsgUpdateMinCommission {
    return MsgUpdateMinCommission.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMinCommissionProtoMsg): MsgUpdateMinCommission {
    return MsgUpdateMinCommission.decode(message.value);
  },
  toProto(message: MsgUpdateMinCommission): Uint8Array {
    return MsgUpdateMinCommission.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMinCommission): MsgUpdateMinCommissionProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateMinCommission",
      value: MsgUpdateMinCommission.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMinCommissionResponse(): MsgUpdateMinCommissionResponse {
  return {};
}
export const MsgUpdateMinCommissionResponse = {
  typeUrl: "/elys.parameter.MsgUpdateMinCommissionResponse",
  encode(_: MsgUpdateMinCommissionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMinCommissionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMinCommissionResponse();
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
  fromPartial(_: Partial<MsgUpdateMinCommissionResponse>): MsgUpdateMinCommissionResponse {
    const message = createBaseMsgUpdateMinCommissionResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMinCommissionResponseAmino): MsgUpdateMinCommissionResponse {
    return {};
  },
  toAmino(_: MsgUpdateMinCommissionResponse): MsgUpdateMinCommissionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMinCommissionResponseAminoMsg): MsgUpdateMinCommissionResponse {
    return MsgUpdateMinCommissionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMinCommissionResponseProtoMsg): MsgUpdateMinCommissionResponse {
    return MsgUpdateMinCommissionResponse.decode(message.value);
  },
  toProto(message: MsgUpdateMinCommissionResponse): Uint8Array {
    return MsgUpdateMinCommissionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMinCommissionResponse): MsgUpdateMinCommissionResponseProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateMinCommissionResponse",
      value: MsgUpdateMinCommissionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMaxVotingPower(): MsgUpdateMaxVotingPower {
  return {
    creator: "",
    maxVotingPower: ""
  };
}
export const MsgUpdateMaxVotingPower = {
  typeUrl: "/elys.parameter.MsgUpdateMaxVotingPower",
  encode(message: MsgUpdateMaxVotingPower, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.maxVotingPower !== "") {
      writer.uint32(26).string(message.maxVotingPower);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMaxVotingPower {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMaxVotingPower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.maxVotingPower = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateMaxVotingPower>): MsgUpdateMaxVotingPower {
    const message = createBaseMsgUpdateMaxVotingPower();
    message.creator = object.creator ?? "";
    message.maxVotingPower = object.maxVotingPower ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateMaxVotingPowerAmino): MsgUpdateMaxVotingPower {
    return {
      creator: object.creator,
      maxVotingPower: object.max_voting_power
    };
  },
  toAmino(message: MsgUpdateMaxVotingPower): MsgUpdateMaxVotingPowerAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.max_voting_power = message.maxVotingPower;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMaxVotingPowerAminoMsg): MsgUpdateMaxVotingPower {
    return MsgUpdateMaxVotingPower.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMaxVotingPowerProtoMsg): MsgUpdateMaxVotingPower {
    return MsgUpdateMaxVotingPower.decode(message.value);
  },
  toProto(message: MsgUpdateMaxVotingPower): Uint8Array {
    return MsgUpdateMaxVotingPower.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMaxVotingPower): MsgUpdateMaxVotingPowerProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateMaxVotingPower",
      value: MsgUpdateMaxVotingPower.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMaxVotingPowerResponse(): MsgUpdateMaxVotingPowerResponse {
  return {};
}
export const MsgUpdateMaxVotingPowerResponse = {
  typeUrl: "/elys.parameter.MsgUpdateMaxVotingPowerResponse",
  encode(_: MsgUpdateMaxVotingPowerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMaxVotingPowerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMaxVotingPowerResponse();
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
  fromPartial(_: Partial<MsgUpdateMaxVotingPowerResponse>): MsgUpdateMaxVotingPowerResponse {
    const message = createBaseMsgUpdateMaxVotingPowerResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMaxVotingPowerResponseAmino): MsgUpdateMaxVotingPowerResponse {
    return {};
  },
  toAmino(_: MsgUpdateMaxVotingPowerResponse): MsgUpdateMaxVotingPowerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMaxVotingPowerResponseAminoMsg): MsgUpdateMaxVotingPowerResponse {
    return MsgUpdateMaxVotingPowerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMaxVotingPowerResponseProtoMsg): MsgUpdateMaxVotingPowerResponse {
    return MsgUpdateMaxVotingPowerResponse.decode(message.value);
  },
  toProto(message: MsgUpdateMaxVotingPowerResponse): Uint8Array {
    return MsgUpdateMaxVotingPowerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMaxVotingPowerResponse): MsgUpdateMaxVotingPowerResponseProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateMaxVotingPowerResponse",
      value: MsgUpdateMaxVotingPowerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMinSelfDelegation(): MsgUpdateMinSelfDelegation {
  return {
    creator: "",
    minSelfDelegation: ""
  };
}
export const MsgUpdateMinSelfDelegation = {
  typeUrl: "/elys.parameter.MsgUpdateMinSelfDelegation",
  encode(message: MsgUpdateMinSelfDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(26).string(message.minSelfDelegation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMinSelfDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMinSelfDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.minSelfDelegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateMinSelfDelegation>): MsgUpdateMinSelfDelegation {
    const message = createBaseMsgUpdateMinSelfDelegation();
    message.creator = object.creator ?? "";
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateMinSelfDelegationAmino): MsgUpdateMinSelfDelegation {
    return {
      creator: object.creator,
      minSelfDelegation: object.min_self_delegation
    };
  },
  toAmino(message: MsgUpdateMinSelfDelegation): MsgUpdateMinSelfDelegationAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.min_self_delegation = message.minSelfDelegation;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMinSelfDelegationAminoMsg): MsgUpdateMinSelfDelegation {
    return MsgUpdateMinSelfDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMinSelfDelegationProtoMsg): MsgUpdateMinSelfDelegation {
    return MsgUpdateMinSelfDelegation.decode(message.value);
  },
  toProto(message: MsgUpdateMinSelfDelegation): Uint8Array {
    return MsgUpdateMinSelfDelegation.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMinSelfDelegation): MsgUpdateMinSelfDelegationProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateMinSelfDelegation",
      value: MsgUpdateMinSelfDelegation.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMinSelfDelegationResponse(): MsgUpdateMinSelfDelegationResponse {
  return {};
}
export const MsgUpdateMinSelfDelegationResponse = {
  typeUrl: "/elys.parameter.MsgUpdateMinSelfDelegationResponse",
  encode(_: MsgUpdateMinSelfDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMinSelfDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMinSelfDelegationResponse();
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
  fromPartial(_: Partial<MsgUpdateMinSelfDelegationResponse>): MsgUpdateMinSelfDelegationResponse {
    const message = createBaseMsgUpdateMinSelfDelegationResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMinSelfDelegationResponseAmino): MsgUpdateMinSelfDelegationResponse {
    return {};
  },
  toAmino(_: MsgUpdateMinSelfDelegationResponse): MsgUpdateMinSelfDelegationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMinSelfDelegationResponseAminoMsg): MsgUpdateMinSelfDelegationResponse {
    return MsgUpdateMinSelfDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMinSelfDelegationResponseProtoMsg): MsgUpdateMinSelfDelegationResponse {
    return MsgUpdateMinSelfDelegationResponse.decode(message.value);
  },
  toProto(message: MsgUpdateMinSelfDelegationResponse): Uint8Array {
    return MsgUpdateMinSelfDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMinSelfDelegationResponse): MsgUpdateMinSelfDelegationResponseProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateMinSelfDelegationResponse",
      value: MsgUpdateMinSelfDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBrokerAddress(): MsgUpdateBrokerAddress {
  return {
    creator: "",
    brokerAddress: ""
  };
}
export const MsgUpdateBrokerAddress = {
  typeUrl: "/elys.parameter.MsgUpdateBrokerAddress",
  encode(message: MsgUpdateBrokerAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.brokerAddress !== "") {
      writer.uint32(26).string(message.brokerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateBrokerAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBrokerAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.brokerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateBrokerAddress>): MsgUpdateBrokerAddress {
    const message = createBaseMsgUpdateBrokerAddress();
    message.creator = object.creator ?? "";
    message.brokerAddress = object.brokerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateBrokerAddressAmino): MsgUpdateBrokerAddress {
    return {
      creator: object.creator,
      brokerAddress: object.broker_address
    };
  },
  toAmino(message: MsgUpdateBrokerAddress): MsgUpdateBrokerAddressAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.broker_address = message.brokerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBrokerAddressAminoMsg): MsgUpdateBrokerAddress {
    return MsgUpdateBrokerAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBrokerAddressProtoMsg): MsgUpdateBrokerAddress {
    return MsgUpdateBrokerAddress.decode(message.value);
  },
  toProto(message: MsgUpdateBrokerAddress): Uint8Array {
    return MsgUpdateBrokerAddress.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBrokerAddress): MsgUpdateBrokerAddressProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateBrokerAddress",
      value: MsgUpdateBrokerAddress.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBrokerAddressResponse(): MsgUpdateBrokerAddressResponse {
  return {};
}
export const MsgUpdateBrokerAddressResponse = {
  typeUrl: "/elys.parameter.MsgUpdateBrokerAddressResponse",
  encode(_: MsgUpdateBrokerAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateBrokerAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBrokerAddressResponse();
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
  fromPartial(_: Partial<MsgUpdateBrokerAddressResponse>): MsgUpdateBrokerAddressResponse {
    const message = createBaseMsgUpdateBrokerAddressResponse();
    return message;
  },
  fromAmino(_: MsgUpdateBrokerAddressResponseAmino): MsgUpdateBrokerAddressResponse {
    return {};
  },
  toAmino(_: MsgUpdateBrokerAddressResponse): MsgUpdateBrokerAddressResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBrokerAddressResponseAminoMsg): MsgUpdateBrokerAddressResponse {
    return MsgUpdateBrokerAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBrokerAddressResponseProtoMsg): MsgUpdateBrokerAddressResponse {
    return MsgUpdateBrokerAddressResponse.decode(message.value);
  },
  toProto(message: MsgUpdateBrokerAddressResponse): Uint8Array {
    return MsgUpdateBrokerAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBrokerAddressResponse): MsgUpdateBrokerAddressResponseProtoMsg {
    return {
      typeUrl: "/elys.parameter.MsgUpdateBrokerAddressResponse",
      value: MsgUpdateBrokerAddressResponse.encode(message).finish()
    };
  }
};