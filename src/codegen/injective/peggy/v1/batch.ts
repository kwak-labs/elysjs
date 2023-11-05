import { ERC20Token, ERC20TokenAmino, ERC20TokenSDKType } from "./attestation";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** OutgoingTxBatch represents a batch of transactions going from Peggy to ETH */
export interface OutgoingTxBatch {
  batchNonce: bigint;
  batchTimeout: bigint;
  transactions: OutgoingTransferTx[];
  tokenContract: string;
  block: bigint;
}
export interface OutgoingTxBatchProtoMsg {
  typeUrl: "/injective.peggy.v1.OutgoingTxBatch";
  value: Uint8Array;
}
/** OutgoingTxBatch represents a batch of transactions going from Peggy to ETH */
export interface OutgoingTxBatchAmino {
  batch_nonce: string;
  batch_timeout: string;
  transactions: OutgoingTransferTxAmino[];
  token_contract: string;
  block: string;
}
export interface OutgoingTxBatchAminoMsg {
  type: "/injective.peggy.v1.OutgoingTxBatch";
  value: OutgoingTxBatchAmino;
}
/** OutgoingTxBatch represents a batch of transactions going from Peggy to ETH */
export interface OutgoingTxBatchSDKType {
  batch_nonce: bigint;
  batch_timeout: bigint;
  transactions: OutgoingTransferTxSDKType[];
  token_contract: string;
  block: bigint;
}
/** OutgoingTransferTx represents an individual send from Peggy to ETH */
export interface OutgoingTransferTx {
  id: bigint;
  sender: string;
  destAddress: string;
  erc20Token?: ERC20Token;
  erc20Fee?: ERC20Token;
}
export interface OutgoingTransferTxProtoMsg {
  typeUrl: "/injective.peggy.v1.OutgoingTransferTx";
  value: Uint8Array;
}
/** OutgoingTransferTx represents an individual send from Peggy to ETH */
export interface OutgoingTransferTxAmino {
  id: string;
  sender: string;
  dest_address: string;
  erc20_token?: ERC20TokenAmino;
  erc20_fee?: ERC20TokenAmino;
}
export interface OutgoingTransferTxAminoMsg {
  type: "/injective.peggy.v1.OutgoingTransferTx";
  value: OutgoingTransferTxAmino;
}
/** OutgoingTransferTx represents an individual send from Peggy to ETH */
export interface OutgoingTransferTxSDKType {
  id: bigint;
  sender: string;
  dest_address: string;
  erc20_token?: ERC20TokenSDKType;
  erc20_fee?: ERC20TokenSDKType;
}
function createBaseOutgoingTxBatch(): OutgoingTxBatch {
  return {
    batchNonce: BigInt(0),
    batchTimeout: BigInt(0),
    transactions: [],
    tokenContract: "",
    block: BigInt(0)
  };
}
export const OutgoingTxBatch = {
  typeUrl: "/injective.peggy.v1.OutgoingTxBatch",
  encode(message: OutgoingTxBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.batchNonce);
    }
    if (message.batchTimeout !== BigInt(0)) {
      writer.uint32(16).uint64(message.batchTimeout);
    }
    for (const v of message.transactions) {
      OutgoingTransferTx.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(40).uint64(message.block);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OutgoingTxBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutgoingTxBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchNonce = reader.uint64();
          break;
        case 2:
          message.batchTimeout = reader.uint64();
          break;
        case 3:
          message.transactions.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;
        case 4:
          message.tokenContract = reader.string();
          break;
        case 5:
          message.block = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OutgoingTxBatch>): OutgoingTxBatch {
    const message = createBaseOutgoingTxBatch();
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce.toString()) : BigInt(0);
    message.batchTimeout = object.batchTimeout !== undefined && object.batchTimeout !== null ? BigInt(object.batchTimeout.toString()) : BigInt(0);
    message.transactions = object.transactions?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    message.tokenContract = object.tokenContract ?? "";
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OutgoingTxBatchAmino): OutgoingTxBatch {
    return {
      batchNonce: BigInt(object.batch_nonce),
      batchTimeout: BigInt(object.batch_timeout),
      transactions: Array.isArray(object?.transactions) ? object.transactions.map((e: any) => OutgoingTransferTx.fromAmino(e)) : [],
      tokenContract: object.token_contract,
      block: BigInt(object.block)
    };
  },
  toAmino(message: OutgoingTxBatch): OutgoingTxBatchAmino {
    const obj: any = {};
    obj.batch_nonce = message.batchNonce ? message.batchNonce.toString() : undefined;
    obj.batch_timeout = message.batchTimeout ? message.batchTimeout.toString() : undefined;
    if (message.transactions) {
      obj.transactions = message.transactions.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
    } else {
      obj.transactions = [];
    }
    obj.token_contract = message.tokenContract;
    obj.block = message.block ? message.block.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OutgoingTxBatchAminoMsg): OutgoingTxBatch {
    return OutgoingTxBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: OutgoingTxBatchProtoMsg): OutgoingTxBatch {
    return OutgoingTxBatch.decode(message.value);
  },
  toProto(message: OutgoingTxBatch): Uint8Array {
    return OutgoingTxBatch.encode(message).finish();
  },
  toProtoMsg(message: OutgoingTxBatch): OutgoingTxBatchProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.OutgoingTxBatch",
      value: OutgoingTxBatch.encode(message).finish()
    };
  }
};
function createBaseOutgoingTransferTx(): OutgoingTransferTx {
  return {
    id: BigInt(0),
    sender: "",
    destAddress: "",
    erc20Token: undefined,
    erc20Fee: undefined
  };
}
export const OutgoingTransferTx = {
  typeUrl: "/injective.peggy.v1.OutgoingTransferTx",
  encode(message: OutgoingTransferTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.destAddress !== "") {
      writer.uint32(26).string(message.destAddress);
    }
    if (message.erc20Token !== undefined) {
      ERC20Token.encode(message.erc20Token, writer.uint32(34).fork()).ldelim();
    }
    if (message.erc20Fee !== undefined) {
      ERC20Token.encode(message.erc20Fee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OutgoingTransferTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutgoingTransferTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.destAddress = reader.string();
          break;
        case 4:
          message.erc20Token = ERC20Token.decode(reader, reader.uint32());
          break;
        case 5:
          message.erc20Fee = ERC20Token.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OutgoingTransferTx>): OutgoingTransferTx {
    const message = createBaseOutgoingTransferTx();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.destAddress = object.destAddress ?? "";
    message.erc20Token = object.erc20Token !== undefined && object.erc20Token !== null ? ERC20Token.fromPartial(object.erc20Token) : undefined;
    message.erc20Fee = object.erc20Fee !== undefined && object.erc20Fee !== null ? ERC20Token.fromPartial(object.erc20Fee) : undefined;
    return message;
  },
  fromAmino(object: OutgoingTransferTxAmino): OutgoingTransferTx {
    return {
      id: BigInt(object.id),
      sender: object.sender,
      destAddress: object.dest_address,
      erc20Token: object?.erc20_token ? ERC20Token.fromAmino(object.erc20_token) : undefined,
      erc20Fee: object?.erc20_fee ? ERC20Token.fromAmino(object.erc20_fee) : undefined
    };
  },
  toAmino(message: OutgoingTransferTx): OutgoingTransferTxAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.sender = message.sender;
    obj.dest_address = message.destAddress;
    obj.erc20_token = message.erc20Token ? ERC20Token.toAmino(message.erc20Token) : undefined;
    obj.erc20_fee = message.erc20Fee ? ERC20Token.toAmino(message.erc20Fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: OutgoingTransferTxAminoMsg): OutgoingTransferTx {
    return OutgoingTransferTx.fromAmino(object.value);
  },
  fromProtoMsg(message: OutgoingTransferTxProtoMsg): OutgoingTransferTx {
    return OutgoingTransferTx.decode(message.value);
  },
  toProto(message: OutgoingTransferTx): Uint8Array {
    return OutgoingTransferTx.encode(message).finish();
  },
  toProtoMsg(message: OutgoingTransferTx): OutgoingTransferTxProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.OutgoingTransferTx",
      value: OutgoingTransferTx.encode(message).finish()
    };
  }
};