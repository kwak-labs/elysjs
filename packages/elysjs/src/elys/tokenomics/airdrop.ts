//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
export interface Airdrop {
  intent: string;
  amount: bigint;
  authority: string;
  expiry: bigint;
}
export interface AirdropProtoMsg {
  typeUrl: "/elys.tokenomics.Airdrop";
  value: Uint8Array;
}
export interface AirdropAmino {
  intent?: string;
  amount?: string;
  authority?: string;
  expiry?: string;
}
export interface AirdropAminoMsg {
  type: "/elys.tokenomics.Airdrop";
  value: AirdropAmino;
}
export interface AirdropSDKType {
  intent: string;
  amount: bigint;
  authority: string;
  expiry: bigint;
}
function createBaseAirdrop(): Airdrop {
  return {
    intent: "",
    amount: BigInt(0),
    authority: "",
    expiry: BigInt(0)
  };
}
export const Airdrop = {
  typeUrl: "/elys.tokenomics.Airdrop",
  encode(message: Airdrop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.intent !== "") {
      writer.uint32(10).string(message.intent);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.authority !== "") {
      writer.uint32(26).string(message.authority);
    }
    if (message.expiry !== BigInt(0)) {
      writer.uint32(32).uint64(message.expiry);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Airdrop {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.intent = reader.string();
          break;
        case 2:
          message.amount = reader.uint64();
          break;
        case 3:
          message.authority = reader.string();
          break;
        case 4:
          message.expiry = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Airdrop>): Airdrop {
    const message = createBaseAirdrop();
    message.intent = object.intent ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.authority = object.authority ?? "";
    message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AirdropAmino): Airdrop {
    const message = createBaseAirdrop();
    if (object.intent !== undefined && object.intent !== null) {
      message.intent = object.intent;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = BigInt(object.expiry);
    }
    return message;
  },
  toAmino(message: Airdrop): AirdropAmino {
    const obj: any = {};
    obj.intent = message.intent === "" ? undefined : message.intent;
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.expiry = message.expiry !== BigInt(0) ? message.expiry?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AirdropAminoMsg): Airdrop {
    return Airdrop.fromAmino(object.value);
  },
  fromProtoMsg(message: AirdropProtoMsg): Airdrop {
    return Airdrop.decode(message.value);
  },
  toProto(message: Airdrop): Uint8Array {
    return Airdrop.encode(message).finish();
  },
  toProtoMsg(message: Airdrop): AirdropProtoMsg {
    return {
      typeUrl: "/elys.tokenomics.Airdrop",
      value: Airdrop.encode(message).finish()
    };
  }
};