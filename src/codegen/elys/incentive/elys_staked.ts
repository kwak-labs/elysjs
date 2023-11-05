import { BinaryReader, BinaryWriter } from "../../binary";
/** Elys staked */
export interface ElysStaked {
  address: string;
  amount: string;
}
export interface ElysStakedProtoMsg {
  typeUrl: "/elys.incentive.ElysStaked";
  value: Uint8Array;
}
/** Elys staked */
export interface ElysStakedAmino {
  address: string;
  amount: string;
}
export interface ElysStakedAminoMsg {
  type: "/elys.incentive.ElysStaked";
  value: ElysStakedAmino;
}
/** Elys staked */
export interface ElysStakedSDKType {
  address: string;
  amount: string;
}
function createBaseElysStaked(): ElysStaked {
  return {
    address: "",
    amount: ""
  };
}
export const ElysStaked = {
  typeUrl: "/elys.incentive.ElysStaked",
  encode(message: ElysStaked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ElysStaked {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseElysStaked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromPartial(object: Partial<ElysStaked>): ElysStaked {
    const message = createBaseElysStaked();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: ElysStakedAmino): ElysStaked {
    return {
      address: object.address,
      amount: object.amount
    };
  },
  toAmino(message: ElysStaked): ElysStakedAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: ElysStakedAminoMsg): ElysStaked {
    return ElysStaked.fromAmino(object.value);
  },
  fromProtoMsg(message: ElysStakedProtoMsg): ElysStaked {
    return ElysStaked.decode(message.value);
  },
  toProto(message: ElysStaked): Uint8Array {
    return ElysStaked.encode(message).finish();
  },
  toProtoMsg(message: ElysStaked): ElysStakedProtoMsg {
    return {
      typeUrl: "/elys.incentive.ElysStaked",
      value: ElysStaked.encode(message).finish()
    };
  }
};