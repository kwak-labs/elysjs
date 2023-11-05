import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccount {
  baseAccount?: BaseAccount;
  codeHash: Uint8Array;
}
export interface EthAccountProtoMsg {
  typeUrl: "/injective.types.v1beta1.EthAccount";
  value: Uint8Array;
}
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccountAmino {
  base_account?: BaseAccountAmino;
  code_hash: Uint8Array;
}
export interface EthAccountAminoMsg {
  type: "/injective.types.v1beta1.EthAccount";
  value: EthAccountAmino;
}
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccountSDKType {
  base_account?: BaseAccountSDKType;
  code_hash: Uint8Array;
}
function createBaseEthAccount(): EthAccount {
  return {
    baseAccount: undefined,
    codeHash: new Uint8Array()
  };
}
export const EthAccount = {
  typeUrl: "/injective.types.v1beta1.EthAccount",
  encode(message: EthAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(18).bytes(message.codeHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EthAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEthAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.codeHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EthAccount>): EthAccount {
    const message = createBaseEthAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.codeHash = object.codeHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EthAccountAmino): EthAccount {
    return {
      baseAccount: object?.base_account ? BaseAccount.fromAmino(object.base_account) : undefined,
      codeHash: object.code_hash
    };
  },
  toAmino(message: EthAccount): EthAccountAmino {
    const obj: any = {};
    obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : undefined;
    obj.code_hash = message.codeHash;
    return obj;
  },
  fromAminoMsg(object: EthAccountAminoMsg): EthAccount {
    return EthAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: EthAccountProtoMsg): EthAccount {
    return EthAccount.decode(message.value);
  },
  toProto(message: EthAccount): Uint8Array {
    return EthAccount.encode(message).finish();
  },
  toProtoMsg(message: EthAccount): EthAccountProtoMsg {
    return {
      typeUrl: "/injective.types.v1beta1.EthAccount",
      value: EthAccount.encode(message).finish()
    };
  }
};