import { BinaryReader, BinaryWriter } from "../../binary";
export interface MsgCommitTokens {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgCommitTokensProtoMsg {
  typeUrl: "/elys.commitment.MsgCommitTokens";
  value: Uint8Array;
}
export interface MsgCommitTokensAmino {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgCommitTokensAminoMsg {
  type: "/elys.commitment.MsgCommitTokens";
  value: MsgCommitTokensAmino;
}
export interface MsgCommitTokensSDKType {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgCommitTokensResponse {}
export interface MsgCommitTokensResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgCommitTokensResponse";
  value: Uint8Array;
}
export interface MsgCommitTokensResponseAmino {}
export interface MsgCommitTokensResponseAminoMsg {
  type: "/elys.commitment.MsgCommitTokensResponse";
  value: MsgCommitTokensResponseAmino;
}
export interface MsgCommitTokensResponseSDKType {}
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
export interface MsgWithdrawTokens {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgWithdrawTokensProtoMsg {
  typeUrl: "/elys.commitment.MsgWithdrawTokens";
  value: Uint8Array;
}
export interface MsgWithdrawTokensAmino {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgWithdrawTokensAminoMsg {
  type: "/elys.commitment.MsgWithdrawTokens";
  value: MsgWithdrawTokensAmino;
}
export interface MsgWithdrawTokensSDKType {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgWithdrawTokensResponse {}
export interface MsgWithdrawTokensResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgWithdrawTokensResponse";
  value: Uint8Array;
}
export interface MsgWithdrawTokensResponseAmino {}
export interface MsgWithdrawTokensResponseAminoMsg {
  type: "/elys.commitment.MsgWithdrawTokensResponse";
  value: MsgWithdrawTokensResponseAmino;
}
export interface MsgWithdrawTokensResponseSDKType {}
export interface MsgCommitLiquidTokens {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgCommitLiquidTokensProtoMsg {
  typeUrl: "/elys.commitment.MsgCommitLiquidTokens";
  value: Uint8Array;
}
export interface MsgCommitLiquidTokensAmino {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgCommitLiquidTokensAminoMsg {
  type: "/elys.commitment.MsgCommitLiquidTokens";
  value: MsgCommitLiquidTokensAmino;
}
export interface MsgCommitLiquidTokensSDKType {
  creator: string;
  amount: string;
  denom: string;
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
  baseDenom: string;
  vestingDenom: string;
  epochIdentifier: string;
  numEpochs: string;
  vestNowFactor: string;
  numMaxVestings: string;
}
export interface MsgUpdateVestingInfoAminoMsg {
  type: "/elys.commitment.MsgUpdateVestingInfo";
  value: MsgUpdateVestingInfoAmino;
}
export interface MsgUpdateVestingInfoSDKType {
  authority: string;
  baseDenom: string;
  vestingDenom: string;
  epochIdentifier: string;
  numEpochs: bigint;
  vestNowFactor: bigint;
  numMaxVestings: bigint;
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
function createBaseMsgCommitTokens(): MsgCommitTokens {
  return {
    creator: "",
    amount: "",
    denom: ""
  };
}
export const MsgCommitTokens = {
  typeUrl: "/elys.commitment.MsgCommitTokens",
  encode(message: MsgCommitTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCommitTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommitTokens();
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
  fromPartial(object: Partial<MsgCommitTokens>): MsgCommitTokens {
    const message = createBaseMsgCommitTokens();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgCommitTokensAmino): MsgCommitTokens {
    return {
      creator: object.creator,
      amount: object.amount,
      denom: object.denom
    };
  },
  toAmino(message: MsgCommitTokens): MsgCommitTokensAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgCommitTokensAminoMsg): MsgCommitTokens {
    return MsgCommitTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCommitTokensProtoMsg): MsgCommitTokens {
    return MsgCommitTokens.decode(message.value);
  },
  toProto(message: MsgCommitTokens): Uint8Array {
    return MsgCommitTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgCommitTokens): MsgCommitTokensProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgCommitTokens",
      value: MsgCommitTokens.encode(message).finish()
    };
  }
};
function createBaseMsgCommitTokensResponse(): MsgCommitTokensResponse {
  return {};
}
export const MsgCommitTokensResponse = {
  typeUrl: "/elys.commitment.MsgCommitTokensResponse",
  encode(_: MsgCommitTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCommitTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommitTokensResponse();
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
  fromPartial(_: Partial<MsgCommitTokensResponse>): MsgCommitTokensResponse {
    const message = createBaseMsgCommitTokensResponse();
    return message;
  },
  fromAmino(_: MsgCommitTokensResponseAmino): MsgCommitTokensResponse {
    return {};
  },
  toAmino(_: MsgCommitTokensResponse): MsgCommitTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCommitTokensResponseAminoMsg): MsgCommitTokensResponse {
    return MsgCommitTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCommitTokensResponseProtoMsg): MsgCommitTokensResponse {
    return MsgCommitTokensResponse.decode(message.value);
  },
  toProto(message: MsgCommitTokensResponse): Uint8Array {
    return MsgCommitTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCommitTokensResponse): MsgCommitTokensResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgCommitTokensResponse",
      value: MsgCommitTokensResponse.encode(message).finish()
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
function createBaseMsgWithdrawTokens(): MsgWithdrawTokens {
  return {
    creator: "",
    amount: "",
    denom: ""
  };
}
export const MsgWithdrawTokens = {
  typeUrl: "/elys.commitment.MsgWithdrawTokens",
  encode(message: MsgWithdrawTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTokens();
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
  fromPartial(object: Partial<MsgWithdrawTokens>): MsgWithdrawTokens {
    const message = createBaseMsgWithdrawTokens();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawTokensAmino): MsgWithdrawTokens {
    return {
      creator: object.creator,
      amount: object.amount,
      denom: object.denom
    };
  },
  toAmino(message: MsgWithdrawTokens): MsgWithdrawTokensAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawTokensAminoMsg): MsgWithdrawTokens {
    return MsgWithdrawTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawTokensProtoMsg): MsgWithdrawTokens {
    return MsgWithdrawTokens.decode(message.value);
  },
  toProto(message: MsgWithdrawTokens): Uint8Array {
    return MsgWithdrawTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawTokens): MsgWithdrawTokensProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgWithdrawTokens",
      value: MsgWithdrawTokens.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawTokensResponse(): MsgWithdrawTokensResponse {
  return {};
}
export const MsgWithdrawTokensResponse = {
  typeUrl: "/elys.commitment.MsgWithdrawTokensResponse",
  encode(_: MsgWithdrawTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTokensResponse();
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
  fromPartial(_: Partial<MsgWithdrawTokensResponse>): MsgWithdrawTokensResponse {
    const message = createBaseMsgWithdrawTokensResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawTokensResponseAmino): MsgWithdrawTokensResponse {
    return {};
  },
  toAmino(_: MsgWithdrawTokensResponse): MsgWithdrawTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawTokensResponseAminoMsg): MsgWithdrawTokensResponse {
    return MsgWithdrawTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawTokensResponseProtoMsg): MsgWithdrawTokensResponse {
    return MsgWithdrawTokensResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawTokensResponse): Uint8Array {
    return MsgWithdrawTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawTokensResponse): MsgWithdrawTokensResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgWithdrawTokensResponse",
      value: MsgWithdrawTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCommitLiquidTokens(): MsgCommitLiquidTokens {
  return {
    creator: "",
    amount: "",
    denom: ""
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
    return message;
  },
  fromAmino(object: MsgCommitLiquidTokensAmino): MsgCommitLiquidTokens {
    return {
      creator: object.creator,
      amount: object.amount,
      denom: object.denom
    };
  },
  toAmino(message: MsgCommitLiquidTokens): MsgCommitLiquidTokensAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.denom = message.denom;
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
      baseDenom: object.baseDenom,
      vestingDenom: object.vestingDenom,
      epochIdentifier: object.epochIdentifier,
      numEpochs: BigInt(object.numEpochs),
      vestNowFactor: BigInt(object.vestNowFactor),
      numMaxVestings: BigInt(object.numMaxVestings)
    };
  },
  toAmino(message: MsgUpdateVestingInfo): MsgUpdateVestingInfoAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.baseDenom = message.baseDenom;
    obj.vestingDenom = message.vestingDenom;
    obj.epochIdentifier = message.epochIdentifier;
    obj.numEpochs = message.numEpochs ? message.numEpochs.toString() : undefined;
    obj.vestNowFactor = message.vestNowFactor ? message.vestNowFactor.toString() : undefined;
    obj.numMaxVestings = message.numMaxVestings ? message.numMaxVestings.toString() : undefined;
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