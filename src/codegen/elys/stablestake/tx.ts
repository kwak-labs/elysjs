import { BinaryReader, BinaryWriter } from "../../binary";
export interface MsgBond {
  creator: string;
  amount: string;
}
export interface MsgBondProtoMsg {
  typeUrl: "/elys.stablestake.MsgBond";
  value: Uint8Array;
}
export interface MsgBondAmino {
  creator: string;
  amount: string;
}
export interface MsgBondAminoMsg {
  type: "/elys.stablestake.MsgBond";
  value: MsgBondAmino;
}
export interface MsgBondSDKType {
  creator: string;
  amount: string;
}
export interface MsgBondResponse {}
export interface MsgBondResponseProtoMsg {
  typeUrl: "/elys.stablestake.MsgBondResponse";
  value: Uint8Array;
}
export interface MsgBondResponseAmino {}
export interface MsgBondResponseAminoMsg {
  type: "/elys.stablestake.MsgBondResponse";
  value: MsgBondResponseAmino;
}
export interface MsgBondResponseSDKType {}
export interface MsgUnbond {
  creator: string;
  amount: string;
}
export interface MsgUnbondProtoMsg {
  typeUrl: "/elys.stablestake.MsgUnbond";
  value: Uint8Array;
}
export interface MsgUnbondAmino {
  creator: string;
  amount: string;
}
export interface MsgUnbondAminoMsg {
  type: "/elys.stablestake.MsgUnbond";
  value: MsgUnbondAmino;
}
export interface MsgUnbondSDKType {
  creator: string;
  amount: string;
}
export interface MsgUnbondResponse {}
export interface MsgUnbondResponseProtoMsg {
  typeUrl: "/elys.stablestake.MsgUnbondResponse";
  value: Uint8Array;
}
export interface MsgUnbondResponseAmino {}
export interface MsgUnbondResponseAminoMsg {
  type: "/elys.stablestake.MsgUnbondResponse";
  value: MsgUnbondResponseAmino;
}
export interface MsgUnbondResponseSDKType {}
function createBaseMsgBond(): MsgBond {
  return {
    creator: "",
    amount: ""
  };
}
export const MsgBond = {
  typeUrl: "/elys.stablestake.MsgBond",
  encode(message: MsgBond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
  fromPartial(object: Partial<MsgBond>): MsgBond {
    const message = createBaseMsgBond();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgBondAmino): MsgBond {
    return {
      creator: object.creator,
      amount: object.amount
    };
  },
  toAmino(message: MsgBond): MsgBondAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgBondAminoMsg): MsgBond {
    return MsgBond.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBondProtoMsg): MsgBond {
    return MsgBond.decode(message.value);
  },
  toProto(message: MsgBond): Uint8Array {
    return MsgBond.encode(message).finish();
  },
  toProtoMsg(message: MsgBond): MsgBondProtoMsg {
    return {
      typeUrl: "/elys.stablestake.MsgBond",
      value: MsgBond.encode(message).finish()
    };
  }
};
function createBaseMsgBondResponse(): MsgBondResponse {
  return {};
}
export const MsgBondResponse = {
  typeUrl: "/elys.stablestake.MsgBondResponse",
  encode(_: MsgBondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBondResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBondResponse();
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
  fromPartial(_: Partial<MsgBondResponse>): MsgBondResponse {
    const message = createBaseMsgBondResponse();
    return message;
  },
  fromAmino(_: MsgBondResponseAmino): MsgBondResponse {
    return {};
  },
  toAmino(_: MsgBondResponse): MsgBondResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBondResponseAminoMsg): MsgBondResponse {
    return MsgBondResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBondResponseProtoMsg): MsgBondResponse {
    return MsgBondResponse.decode(message.value);
  },
  toProto(message: MsgBondResponse): Uint8Array {
    return MsgBondResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBondResponse): MsgBondResponseProtoMsg {
    return {
      typeUrl: "/elys.stablestake.MsgBondResponse",
      value: MsgBondResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnbond(): MsgUnbond {
  return {
    creator: "",
    amount: ""
  };
}
export const MsgUnbond = {
  typeUrl: "/elys.stablestake.MsgUnbond",
  encode(message: MsgUnbond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
  fromPartial(object: Partial<MsgUnbond>): MsgUnbond {
    const message = createBaseMsgUnbond();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgUnbondAmino): MsgUnbond {
    return {
      creator: object.creator,
      amount: object.amount
    };
  },
  toAmino(message: MsgUnbond): MsgUnbondAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgUnbondAminoMsg): MsgUnbond {
    return MsgUnbond.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnbondProtoMsg): MsgUnbond {
    return MsgUnbond.decode(message.value);
  },
  toProto(message: MsgUnbond): Uint8Array {
    return MsgUnbond.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbond): MsgUnbondProtoMsg {
    return {
      typeUrl: "/elys.stablestake.MsgUnbond",
      value: MsgUnbond.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondResponse(): MsgUnbondResponse {
  return {};
}
export const MsgUnbondResponse = {
  typeUrl: "/elys.stablestake.MsgUnbondResponse",
  encode(_: MsgUnbondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondResponse();
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
  fromPartial(_: Partial<MsgUnbondResponse>): MsgUnbondResponse {
    const message = createBaseMsgUnbondResponse();
    return message;
  },
  fromAmino(_: MsgUnbondResponseAmino): MsgUnbondResponse {
    return {};
  },
  toAmino(_: MsgUnbondResponse): MsgUnbondResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnbondResponseAminoMsg): MsgUnbondResponse {
    return MsgUnbondResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnbondResponseProtoMsg): MsgUnbondResponse {
    return MsgUnbondResponse.decode(message.value);
  },
  toProto(message: MsgUnbondResponse): Uint8Array {
    return MsgUnbondResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondResponse): MsgUnbondResponseProtoMsg {
    return {
      typeUrl: "/elys.stablestake.MsgUnbondResponse",
      value: MsgUnbondResponse.encode(message).finish()
    };
  }
};