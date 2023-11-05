import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 */
export enum ClaimType {
  CLAIM_TYPE_UNKNOWN = 0,
  CLAIM_TYPE_DEPOSIT = 1,
  CLAIM_TYPE_WITHDRAW = 2,
  CLAIM_TYPE_ERC20_DEPLOYED = 3,
  CLAIM_TYPE_VALSET_UPDATED = 4,
  UNRECOGNIZED = -1,
}
export const ClaimTypeSDKType = ClaimType;
export const ClaimTypeAmino = ClaimType;
export function claimTypeFromJSON(object: any): ClaimType {
  switch (object) {
    case 0:
    case "CLAIM_TYPE_UNKNOWN":
      return ClaimType.CLAIM_TYPE_UNKNOWN;
    case 1:
    case "CLAIM_TYPE_DEPOSIT":
      return ClaimType.CLAIM_TYPE_DEPOSIT;
    case 2:
    case "CLAIM_TYPE_WITHDRAW":
      return ClaimType.CLAIM_TYPE_WITHDRAW;
    case 3:
    case "CLAIM_TYPE_ERC20_DEPLOYED":
      return ClaimType.CLAIM_TYPE_ERC20_DEPLOYED;
    case 4:
    case "CLAIM_TYPE_VALSET_UPDATED":
      return ClaimType.CLAIM_TYPE_VALSET_UPDATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimType.UNRECOGNIZED;
  }
}
export function claimTypeToJSON(object: ClaimType): string {
  switch (object) {
    case ClaimType.CLAIM_TYPE_UNKNOWN:
      return "CLAIM_TYPE_UNKNOWN";
    case ClaimType.CLAIM_TYPE_DEPOSIT:
      return "CLAIM_TYPE_DEPOSIT";
    case ClaimType.CLAIM_TYPE_WITHDRAW:
      return "CLAIM_TYPE_WITHDRAW";
    case ClaimType.CLAIM_TYPE_ERC20_DEPLOYED:
      return "CLAIM_TYPE_ERC20_DEPLOYED";
    case ClaimType.CLAIM_TYPE_VALSET_UPDATED:
      return "CLAIM_TYPE_VALSET_UPDATED";
    case ClaimType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the peggy contract that is unique per event fired
 * These event nonces must be relayed in order. This is a correctness issue,
 * if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the peggy state machine
 * 
 * The actual content of the claims is passed in with the transaction making the claim
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the claim
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */
export interface Attestation {
  observed: boolean;
  votes: string[];
  height: bigint;
  claim?: Any;
}
export interface AttestationProtoMsg {
  typeUrl: "/injective.peggy.v1.Attestation";
  value: Uint8Array;
}
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the peggy contract that is unique per event fired
 * These event nonces must be relayed in order. This is a correctness issue,
 * if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the peggy state machine
 * 
 * The actual content of the claims is passed in with the transaction making the claim
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the claim
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */
export interface AttestationAmino {
  observed: boolean;
  votes: string[];
  height: string;
  claim?: AnyAmino;
}
export interface AttestationAminoMsg {
  type: "/injective.peggy.v1.Attestation";
  value: AttestationAmino;
}
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the peggy contract that is unique per event fired
 * These event nonces must be relayed in order. This is a correctness issue,
 * if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the peggy state machine
 * 
 * The actual content of the claims is passed in with the transaction making the claim
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the claim
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */
export interface AttestationSDKType {
  observed: boolean;
  votes: string[];
  height: bigint;
  claim?: AnySDKType;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to display for UI)
 */
export interface ERC20Token {
  contract: string;
  amount: string;
}
export interface ERC20TokenProtoMsg {
  typeUrl: "/injective.peggy.v1.ERC20Token";
  value: Uint8Array;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to display for UI)
 */
export interface ERC20TokenAmino {
  contract: string;
  amount: string;
}
export interface ERC20TokenAminoMsg {
  type: "/injective.peggy.v1.ERC20Token";
  value: ERC20TokenAmino;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to display for UI)
 */
export interface ERC20TokenSDKType {
  contract: string;
  amount: string;
}
function createBaseAttestation(): Attestation {
  return {
    observed: false,
    votes: [],
    height: BigInt(0),
    claim: undefined
  };
}
export const Attestation = {
  typeUrl: "/injective.peggy.v1.Attestation",
  encode(message: Attestation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.observed === true) {
      writer.uint32(8).bool(message.observed);
    }
    for (const v of message.votes) {
      writer.uint32(18).string(v!);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.claim !== undefined) {
      Any.encode(message.claim, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Attestation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.observed = reader.bool();
          break;
        case 2:
          message.votes.push(reader.string());
          break;
        case 3:
          message.height = reader.uint64();
          break;
        case 4:
          message.claim = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Attestation>): Attestation {
    const message = createBaseAttestation();
    message.observed = object.observed ?? false;
    message.votes = object.votes?.map(e => e) || [];
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.claim = object.claim !== undefined && object.claim !== null ? Any.fromPartial(object.claim) : undefined;
    return message;
  },
  fromAmino(object: AttestationAmino): Attestation {
    return {
      observed: object.observed,
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => e) : [],
      height: BigInt(object.height),
      claim: object?.claim ? Any.fromAmino(object.claim) : undefined
    };
  },
  toAmino(message: Attestation): AttestationAmino {
    const obj: any = {};
    obj.observed = message.observed;
    if (message.votes) {
      obj.votes = message.votes.map(e => e);
    } else {
      obj.votes = [];
    }
    obj.height = message.height ? message.height.toString() : undefined;
    obj.claim = message.claim ? Any.toAmino(message.claim) : undefined;
    return obj;
  },
  fromAminoMsg(object: AttestationAminoMsg): Attestation {
    return Attestation.fromAmino(object.value);
  },
  fromProtoMsg(message: AttestationProtoMsg): Attestation {
    return Attestation.decode(message.value);
  },
  toProto(message: Attestation): Uint8Array {
    return Attestation.encode(message).finish();
  },
  toProtoMsg(message: Attestation): AttestationProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.Attestation",
      value: Attestation.encode(message).finish()
    };
  }
};
function createBaseERC20Token(): ERC20Token {
  return {
    contract: "",
    amount: ""
  };
}
export const ERC20Token = {
  typeUrl: "/injective.peggy.v1.ERC20Token",
  encode(message: ERC20Token, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ERC20Token {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20Token();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
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
  fromPartial(object: Partial<ERC20Token>): ERC20Token {
    const message = createBaseERC20Token();
    message.contract = object.contract ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: ERC20TokenAmino): ERC20Token {
    return {
      contract: object.contract,
      amount: object.amount
    };
  },
  toAmino(message: ERC20Token): ERC20TokenAmino {
    const obj: any = {};
    obj.contract = message.contract;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: ERC20TokenAminoMsg): ERC20Token {
    return ERC20Token.fromAmino(object.value);
  },
  fromProtoMsg(message: ERC20TokenProtoMsg): ERC20Token {
    return ERC20Token.decode(message.value);
  },
  toProto(message: ERC20Token): Uint8Array {
    return ERC20Token.encode(message).finish();
  },
  toProtoMsg(message: ERC20Token): ERC20TokenProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.ERC20Token",
      value: ERC20Token.encode(message).finish()
    };
  }
};