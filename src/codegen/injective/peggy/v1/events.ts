import { ClaimType, claimTypeFromJSON } from "./attestation";
import { BridgeValidator, BridgeValidatorAmino, BridgeValidatorSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface EventAttestationObserved {
  attestationType: ClaimType;
  bridgeContract: string;
  bridgeChainId: bigint;
  attestationId: Uint8Array;
  nonce: bigint;
}
export interface EventAttestationObservedProtoMsg {
  typeUrl: "/injective.peggy.v1.EventAttestationObserved";
  value: Uint8Array;
}
export interface EventAttestationObservedAmino {
  attestation_type: ClaimType;
  bridge_contract: string;
  bridge_chain_id: string;
  attestation_id: Uint8Array;
  nonce: string;
}
export interface EventAttestationObservedAminoMsg {
  type: "/injective.peggy.v1.EventAttestationObserved";
  value: EventAttestationObservedAmino;
}
export interface EventAttestationObservedSDKType {
  attestation_type: ClaimType;
  bridge_contract: string;
  bridge_chain_id: bigint;
  attestation_id: Uint8Array;
  nonce: bigint;
}
export interface EventBridgeWithdrawCanceled {
  bridgeContract: string;
  bridgeChainId: bigint;
}
export interface EventBridgeWithdrawCanceledProtoMsg {
  typeUrl: "/injective.peggy.v1.EventBridgeWithdrawCanceled";
  value: Uint8Array;
}
export interface EventBridgeWithdrawCanceledAmino {
  bridge_contract: string;
  bridge_chain_id: string;
}
export interface EventBridgeWithdrawCanceledAminoMsg {
  type: "/injective.peggy.v1.EventBridgeWithdrawCanceled";
  value: EventBridgeWithdrawCanceledAmino;
}
export interface EventBridgeWithdrawCanceledSDKType {
  bridge_contract: string;
  bridge_chain_id: bigint;
}
export interface EventOutgoingBatch {
  denom: string;
  orchestratorAddress: string;
  batchNonce: bigint;
  batchTimeout: bigint;
  batchTxIds: bigint[];
}
export interface EventOutgoingBatchProtoMsg {
  typeUrl: "/injective.peggy.v1.EventOutgoingBatch";
  value: Uint8Array;
}
export interface EventOutgoingBatchAmino {
  denom: string;
  orchestrator_address: string;
  batch_nonce: string;
  batch_timeout: string;
  batch_tx_ids: string[];
}
export interface EventOutgoingBatchAminoMsg {
  type: "/injective.peggy.v1.EventOutgoingBatch";
  value: EventOutgoingBatchAmino;
}
export interface EventOutgoingBatchSDKType {
  denom: string;
  orchestrator_address: string;
  batch_nonce: bigint;
  batch_timeout: bigint;
  batch_tx_ids: bigint[];
}
export interface EventOutgoingBatchCanceled {
  bridgeContract: string;
  bridgeChainId: bigint;
  batchId: bigint;
  nonce: bigint;
}
export interface EventOutgoingBatchCanceledProtoMsg {
  typeUrl: "/injective.peggy.v1.EventOutgoingBatchCanceled";
  value: Uint8Array;
}
export interface EventOutgoingBatchCanceledAmino {
  bridge_contract: string;
  bridge_chain_id: string;
  batch_id: string;
  nonce: string;
}
export interface EventOutgoingBatchCanceledAminoMsg {
  type: "/injective.peggy.v1.EventOutgoingBatchCanceled";
  value: EventOutgoingBatchCanceledAmino;
}
export interface EventOutgoingBatchCanceledSDKType {
  bridge_contract: string;
  bridge_chain_id: bigint;
  batch_id: bigint;
  nonce: bigint;
}
export interface EventValsetUpdateRequest {
  valsetNonce: bigint;
  valsetHeight: bigint;
  valsetMembers: BridgeValidator[];
  rewardAmount: string;
  rewardToken: string;
}
export interface EventValsetUpdateRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.EventValsetUpdateRequest";
  value: Uint8Array;
}
export interface EventValsetUpdateRequestAmino {
  valset_nonce: string;
  valset_height: string;
  valset_members: BridgeValidatorAmino[];
  reward_amount: string;
  reward_token: string;
}
export interface EventValsetUpdateRequestAminoMsg {
  type: "/injective.peggy.v1.EventValsetUpdateRequest";
  value: EventValsetUpdateRequestAmino;
}
export interface EventValsetUpdateRequestSDKType {
  valset_nonce: bigint;
  valset_height: bigint;
  valset_members: BridgeValidatorSDKType[];
  reward_amount: string;
  reward_token: string;
}
export interface EventSetOrchestratorAddresses {
  validatorAddress: string;
  orchestratorAddress: string;
  operatorEthAddress: string;
}
export interface EventSetOrchestratorAddressesProtoMsg {
  typeUrl: "/injective.peggy.v1.EventSetOrchestratorAddresses";
  value: Uint8Array;
}
export interface EventSetOrchestratorAddressesAmino {
  validator_address: string;
  orchestrator_address: string;
  operator_eth_address: string;
}
export interface EventSetOrchestratorAddressesAminoMsg {
  type: "/injective.peggy.v1.EventSetOrchestratorAddresses";
  value: EventSetOrchestratorAddressesAmino;
}
export interface EventSetOrchestratorAddressesSDKType {
  validator_address: string;
  orchestrator_address: string;
  operator_eth_address: string;
}
export interface EventValsetConfirm {
  valsetNonce: bigint;
  orchestratorAddress: string;
}
export interface EventValsetConfirmProtoMsg {
  typeUrl: "/injective.peggy.v1.EventValsetConfirm";
  value: Uint8Array;
}
export interface EventValsetConfirmAmino {
  valset_nonce: string;
  orchestrator_address: string;
}
export interface EventValsetConfirmAminoMsg {
  type: "/injective.peggy.v1.EventValsetConfirm";
  value: EventValsetConfirmAmino;
}
export interface EventValsetConfirmSDKType {
  valset_nonce: bigint;
  orchestrator_address: string;
}
export interface EventSendToEth {
  outgoingTxId: bigint;
  sender: string;
  receiver: string;
  amount: string;
  bridgeFee: string;
}
export interface EventSendToEthProtoMsg {
  typeUrl: "/injective.peggy.v1.EventSendToEth";
  value: Uint8Array;
}
export interface EventSendToEthAmino {
  outgoing_tx_id: string;
  sender: string;
  receiver: string;
  amount: string;
  bridge_fee: string;
}
export interface EventSendToEthAminoMsg {
  type: "/injective.peggy.v1.EventSendToEth";
  value: EventSendToEthAmino;
}
export interface EventSendToEthSDKType {
  outgoing_tx_id: bigint;
  sender: string;
  receiver: string;
  amount: string;
  bridge_fee: string;
}
export interface EventConfirmBatch {
  batchNonce: bigint;
  orchestratorAddress: string;
}
export interface EventConfirmBatchProtoMsg {
  typeUrl: "/injective.peggy.v1.EventConfirmBatch";
  value: Uint8Array;
}
export interface EventConfirmBatchAmino {
  batch_nonce: string;
  orchestrator_address: string;
}
export interface EventConfirmBatchAminoMsg {
  type: "/injective.peggy.v1.EventConfirmBatch";
  value: EventConfirmBatchAmino;
}
export interface EventConfirmBatchSDKType {
  batch_nonce: bigint;
  orchestrator_address: string;
}
export interface EventAttestationVote {
  eventNonce: bigint;
  attestationId: Uint8Array;
  voter: string;
}
export interface EventAttestationVoteProtoMsg {
  typeUrl: "/injective.peggy.v1.EventAttestationVote";
  value: Uint8Array;
}
export interface EventAttestationVoteAmino {
  event_nonce: string;
  attestation_id: Uint8Array;
  voter: string;
}
export interface EventAttestationVoteAminoMsg {
  type: "/injective.peggy.v1.EventAttestationVote";
  value: EventAttestationVoteAmino;
}
export interface EventAttestationVoteSDKType {
  event_nonce: bigint;
  attestation_id: Uint8Array;
  voter: string;
}
export interface EventDepositClaim {
  eventNonce: bigint;
  eventHeight: bigint;
  attestationId: Uint8Array;
  ethereumSender: string;
  cosmosReceiver: string;
  tokenContract: string;
  amount: string;
  orchestratorAddress: string;
  data: string;
}
export interface EventDepositClaimProtoMsg {
  typeUrl: "/injective.peggy.v1.EventDepositClaim";
  value: Uint8Array;
}
export interface EventDepositClaimAmino {
  event_nonce: string;
  event_height: string;
  attestation_id: Uint8Array;
  ethereum_sender: string;
  cosmos_receiver: string;
  token_contract: string;
  amount: string;
  orchestrator_address: string;
  data: string;
}
export interface EventDepositClaimAminoMsg {
  type: "/injective.peggy.v1.EventDepositClaim";
  value: EventDepositClaimAmino;
}
export interface EventDepositClaimSDKType {
  event_nonce: bigint;
  event_height: bigint;
  attestation_id: Uint8Array;
  ethereum_sender: string;
  cosmos_receiver: string;
  token_contract: string;
  amount: string;
  orchestrator_address: string;
  data: string;
}
export interface EventWithdrawClaim {
  eventNonce: bigint;
  eventHeight: bigint;
  attestationId: Uint8Array;
  batchNonce: bigint;
  tokenContract: string;
  orchestratorAddress: string;
}
export interface EventWithdrawClaimProtoMsg {
  typeUrl: "/injective.peggy.v1.EventWithdrawClaim";
  value: Uint8Array;
}
export interface EventWithdrawClaimAmino {
  event_nonce: string;
  event_height: string;
  attestation_id: Uint8Array;
  batch_nonce: string;
  token_contract: string;
  orchestrator_address: string;
}
export interface EventWithdrawClaimAminoMsg {
  type: "/injective.peggy.v1.EventWithdrawClaim";
  value: EventWithdrawClaimAmino;
}
export interface EventWithdrawClaimSDKType {
  event_nonce: bigint;
  event_height: bigint;
  attestation_id: Uint8Array;
  batch_nonce: bigint;
  token_contract: string;
  orchestrator_address: string;
}
export interface EventERC20DeployedClaim {
  eventNonce: bigint;
  eventHeight: bigint;
  attestationId: Uint8Array;
  cosmosDenom: string;
  tokenContract: string;
  name: string;
  symbol: string;
  decimals: bigint;
  orchestratorAddress: string;
}
export interface EventERC20DeployedClaimProtoMsg {
  typeUrl: "/injective.peggy.v1.EventERC20DeployedClaim";
  value: Uint8Array;
}
export interface EventERC20DeployedClaimAmino {
  event_nonce: string;
  event_height: string;
  attestation_id: Uint8Array;
  cosmos_denom: string;
  token_contract: string;
  name: string;
  symbol: string;
  decimals: string;
  orchestrator_address: string;
}
export interface EventERC20DeployedClaimAminoMsg {
  type: "/injective.peggy.v1.EventERC20DeployedClaim";
  value: EventERC20DeployedClaimAmino;
}
export interface EventERC20DeployedClaimSDKType {
  event_nonce: bigint;
  event_height: bigint;
  attestation_id: Uint8Array;
  cosmos_denom: string;
  token_contract: string;
  name: string;
  symbol: string;
  decimals: bigint;
  orchestrator_address: string;
}
export interface EventValsetUpdateClaim {
  eventNonce: bigint;
  eventHeight: bigint;
  attestationId: Uint8Array;
  valsetNonce: bigint;
  valsetMembers: BridgeValidator[];
  rewardAmount: string;
  rewardToken: string;
  orchestratorAddress: string;
}
export interface EventValsetUpdateClaimProtoMsg {
  typeUrl: "/injective.peggy.v1.EventValsetUpdateClaim";
  value: Uint8Array;
}
export interface EventValsetUpdateClaimAmino {
  event_nonce: string;
  event_height: string;
  attestation_id: Uint8Array;
  valset_nonce: string;
  valset_members: BridgeValidatorAmino[];
  reward_amount: string;
  reward_token: string;
  orchestrator_address: string;
}
export interface EventValsetUpdateClaimAminoMsg {
  type: "/injective.peggy.v1.EventValsetUpdateClaim";
  value: EventValsetUpdateClaimAmino;
}
export interface EventValsetUpdateClaimSDKType {
  event_nonce: bigint;
  event_height: bigint;
  attestation_id: Uint8Array;
  valset_nonce: bigint;
  valset_members: BridgeValidatorSDKType[];
  reward_amount: string;
  reward_token: string;
  orchestrator_address: string;
}
export interface EventCancelSendToEth {
  outgoingTxId: bigint;
}
export interface EventCancelSendToEthProtoMsg {
  typeUrl: "/injective.peggy.v1.EventCancelSendToEth";
  value: Uint8Array;
}
export interface EventCancelSendToEthAmino {
  outgoing_tx_id: string;
}
export interface EventCancelSendToEthAminoMsg {
  type: "/injective.peggy.v1.EventCancelSendToEth";
  value: EventCancelSendToEthAmino;
}
export interface EventCancelSendToEthSDKType {
  outgoing_tx_id: bigint;
}
export interface EventSubmitBadSignatureEvidence {
  badEthSignature: string;
  badEthSignatureSubject: string;
}
export interface EventSubmitBadSignatureEvidenceProtoMsg {
  typeUrl: "/injective.peggy.v1.EventSubmitBadSignatureEvidence";
  value: Uint8Array;
}
export interface EventSubmitBadSignatureEvidenceAmino {
  bad_eth_signature: string;
  bad_eth_signature_subject: string;
}
export interface EventSubmitBadSignatureEvidenceAminoMsg {
  type: "/injective.peggy.v1.EventSubmitBadSignatureEvidence";
  value: EventSubmitBadSignatureEvidenceAmino;
}
export interface EventSubmitBadSignatureEvidenceSDKType {
  bad_eth_signature: string;
  bad_eth_signature_subject: string;
}
function createBaseEventAttestationObserved(): EventAttestationObserved {
  return {
    attestationType: 0,
    bridgeContract: "",
    bridgeChainId: BigInt(0),
    attestationId: new Uint8Array(),
    nonce: BigInt(0)
  };
}
export const EventAttestationObserved = {
  typeUrl: "/injective.peggy.v1.EventAttestationObserved",
  encode(message: EventAttestationObserved, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.attestationType !== 0) {
      writer.uint32(8).int32(message.attestationType);
    }
    if (message.bridgeContract !== "") {
      writer.uint32(18).string(message.bridgeContract);
    }
    if (message.bridgeChainId !== BigInt(0)) {
      writer.uint32(24).uint64(message.bridgeChainId);
    }
    if (message.attestationId.length !== 0) {
      writer.uint32(34).bytes(message.attestationId);
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(40).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAttestationObserved {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttestationObserved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestationType = (reader.int32() as any);
          break;
        case 2:
          message.bridgeContract = reader.string();
          break;
        case 3:
          message.bridgeChainId = reader.uint64();
          break;
        case 4:
          message.attestationId = reader.bytes();
          break;
        case 5:
          message.nonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventAttestationObserved>): EventAttestationObserved {
    const message = createBaseEventAttestationObserved();
    message.attestationType = object.attestationType ?? 0;
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? BigInt(object.bridgeChainId.toString()) : BigInt(0);
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventAttestationObservedAmino): EventAttestationObserved {
    return {
      attestationType: isSet(object.attestation_type) ? claimTypeFromJSON(object.attestation_type) : -1,
      bridgeContract: object.bridge_contract,
      bridgeChainId: BigInt(object.bridge_chain_id),
      attestationId: object.attestation_id,
      nonce: BigInt(object.nonce)
    };
  },
  toAmino(message: EventAttestationObserved): EventAttestationObservedAmino {
    const obj: any = {};
    obj.attestation_type = message.attestationType;
    obj.bridge_contract = message.bridgeContract;
    obj.bridge_chain_id = message.bridgeChainId ? message.bridgeChainId.toString() : undefined;
    obj.attestation_id = message.attestationId;
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventAttestationObservedAminoMsg): EventAttestationObserved {
    return EventAttestationObserved.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAttestationObservedProtoMsg): EventAttestationObserved {
    return EventAttestationObserved.decode(message.value);
  },
  toProto(message: EventAttestationObserved): Uint8Array {
    return EventAttestationObserved.encode(message).finish();
  },
  toProtoMsg(message: EventAttestationObserved): EventAttestationObservedProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventAttestationObserved",
      value: EventAttestationObserved.encode(message).finish()
    };
  }
};
function createBaseEventBridgeWithdrawCanceled(): EventBridgeWithdrawCanceled {
  return {
    bridgeContract: "",
    bridgeChainId: BigInt(0)
  };
}
export const EventBridgeWithdrawCanceled = {
  typeUrl: "/injective.peggy.v1.EventBridgeWithdrawCanceled",
  encode(message: EventBridgeWithdrawCanceled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bridgeContract !== "") {
      writer.uint32(10).string(message.bridgeContract);
    }
    if (message.bridgeChainId !== BigInt(0)) {
      writer.uint32(16).uint64(message.bridgeChainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBridgeWithdrawCanceled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBridgeWithdrawCanceled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeContract = reader.string();
          break;
        case 2:
          message.bridgeChainId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBridgeWithdrawCanceled>): EventBridgeWithdrawCanceled {
    const message = createBaseEventBridgeWithdrawCanceled();
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? BigInt(object.bridgeChainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventBridgeWithdrawCanceledAmino): EventBridgeWithdrawCanceled {
    return {
      bridgeContract: object.bridge_contract,
      bridgeChainId: BigInt(object.bridge_chain_id)
    };
  },
  toAmino(message: EventBridgeWithdrawCanceled): EventBridgeWithdrawCanceledAmino {
    const obj: any = {};
    obj.bridge_contract = message.bridgeContract;
    obj.bridge_chain_id = message.bridgeChainId ? message.bridgeChainId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBridgeWithdrawCanceledAminoMsg): EventBridgeWithdrawCanceled {
    return EventBridgeWithdrawCanceled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBridgeWithdrawCanceledProtoMsg): EventBridgeWithdrawCanceled {
    return EventBridgeWithdrawCanceled.decode(message.value);
  },
  toProto(message: EventBridgeWithdrawCanceled): Uint8Array {
    return EventBridgeWithdrawCanceled.encode(message).finish();
  },
  toProtoMsg(message: EventBridgeWithdrawCanceled): EventBridgeWithdrawCanceledProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventBridgeWithdrawCanceled",
      value: EventBridgeWithdrawCanceled.encode(message).finish()
    };
  }
};
function createBaseEventOutgoingBatch(): EventOutgoingBatch {
  return {
    denom: "",
    orchestratorAddress: "",
    batchNonce: BigInt(0),
    batchTimeout: BigInt(0),
    batchTxIds: []
  };
}
export const EventOutgoingBatch = {
  typeUrl: "/injective.peggy.v1.EventOutgoingBatch",
  encode(message: EventOutgoingBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    if (message.batchNonce !== BigInt(0)) {
      writer.uint32(24).uint64(message.batchNonce);
    }
    if (message.batchTimeout !== BigInt(0)) {
      writer.uint32(32).uint64(message.batchTimeout);
    }
    writer.uint32(42).fork();
    for (const v of message.batchTxIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventOutgoingBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOutgoingBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.orchestratorAddress = reader.string();
          break;
        case 3:
          message.batchNonce = reader.uint64();
          break;
        case 4:
          message.batchTimeout = reader.uint64();
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.batchTxIds.push(reader.uint64());
            }
          } else {
            message.batchTxIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventOutgoingBatch>): EventOutgoingBatch {
    const message = createBaseEventOutgoingBatch();
    message.denom = object.denom ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce.toString()) : BigInt(0);
    message.batchTimeout = object.batchTimeout !== undefined && object.batchTimeout !== null ? BigInt(object.batchTimeout.toString()) : BigInt(0);
    message.batchTxIds = object.batchTxIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: EventOutgoingBatchAmino): EventOutgoingBatch {
    return {
      denom: object.denom,
      orchestratorAddress: object.orchestrator_address,
      batchNonce: BigInt(object.batch_nonce),
      batchTimeout: BigInt(object.batch_timeout),
      batchTxIds: Array.isArray(object?.batch_tx_ids) ? object.batch_tx_ids.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: EventOutgoingBatch): EventOutgoingBatchAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.orchestrator_address = message.orchestratorAddress;
    obj.batch_nonce = message.batchNonce ? message.batchNonce.toString() : undefined;
    obj.batch_timeout = message.batchTimeout ? message.batchTimeout.toString() : undefined;
    if (message.batchTxIds) {
      obj.batch_tx_ids = message.batchTxIds.map(e => e.toString());
    } else {
      obj.batch_tx_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventOutgoingBatchAminoMsg): EventOutgoingBatch {
    return EventOutgoingBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: EventOutgoingBatchProtoMsg): EventOutgoingBatch {
    return EventOutgoingBatch.decode(message.value);
  },
  toProto(message: EventOutgoingBatch): Uint8Array {
    return EventOutgoingBatch.encode(message).finish();
  },
  toProtoMsg(message: EventOutgoingBatch): EventOutgoingBatchProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventOutgoingBatch",
      value: EventOutgoingBatch.encode(message).finish()
    };
  }
};
function createBaseEventOutgoingBatchCanceled(): EventOutgoingBatchCanceled {
  return {
    bridgeContract: "",
    bridgeChainId: BigInt(0),
    batchId: BigInt(0),
    nonce: BigInt(0)
  };
}
export const EventOutgoingBatchCanceled = {
  typeUrl: "/injective.peggy.v1.EventOutgoingBatchCanceled",
  encode(message: EventOutgoingBatchCanceled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bridgeContract !== "") {
      writer.uint32(10).string(message.bridgeContract);
    }
    if (message.bridgeChainId !== BigInt(0)) {
      writer.uint32(16).uint64(message.bridgeChainId);
    }
    if (message.batchId !== BigInt(0)) {
      writer.uint32(24).uint64(message.batchId);
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(32).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventOutgoingBatchCanceled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOutgoingBatchCanceled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeContract = reader.string();
          break;
        case 2:
          message.bridgeChainId = reader.uint64();
          break;
        case 3:
          message.batchId = reader.uint64();
          break;
        case 4:
          message.nonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventOutgoingBatchCanceled>): EventOutgoingBatchCanceled {
    const message = createBaseEventOutgoingBatchCanceled();
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? BigInt(object.bridgeChainId.toString()) : BigInt(0);
    message.batchId = object.batchId !== undefined && object.batchId !== null ? BigInt(object.batchId.toString()) : BigInt(0);
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventOutgoingBatchCanceledAmino): EventOutgoingBatchCanceled {
    return {
      bridgeContract: object.bridge_contract,
      bridgeChainId: BigInt(object.bridge_chain_id),
      batchId: BigInt(object.batch_id),
      nonce: BigInt(object.nonce)
    };
  },
  toAmino(message: EventOutgoingBatchCanceled): EventOutgoingBatchCanceledAmino {
    const obj: any = {};
    obj.bridge_contract = message.bridgeContract;
    obj.bridge_chain_id = message.bridgeChainId ? message.bridgeChainId.toString() : undefined;
    obj.batch_id = message.batchId ? message.batchId.toString() : undefined;
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventOutgoingBatchCanceledAminoMsg): EventOutgoingBatchCanceled {
    return EventOutgoingBatchCanceled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventOutgoingBatchCanceledProtoMsg): EventOutgoingBatchCanceled {
    return EventOutgoingBatchCanceled.decode(message.value);
  },
  toProto(message: EventOutgoingBatchCanceled): Uint8Array {
    return EventOutgoingBatchCanceled.encode(message).finish();
  },
  toProtoMsg(message: EventOutgoingBatchCanceled): EventOutgoingBatchCanceledProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventOutgoingBatchCanceled",
      value: EventOutgoingBatchCanceled.encode(message).finish()
    };
  }
};
function createBaseEventValsetUpdateRequest(): EventValsetUpdateRequest {
  return {
    valsetNonce: BigInt(0),
    valsetHeight: BigInt(0),
    valsetMembers: [],
    rewardAmount: "",
    rewardToken: ""
  };
}
export const EventValsetUpdateRequest = {
  typeUrl: "/injective.peggy.v1.EventValsetUpdateRequest",
  encode(message: EventValsetUpdateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valsetNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.valsetNonce);
    }
    if (message.valsetHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.valsetHeight);
    }
    for (const v of message.valsetMembers) {
      BridgeValidator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.rewardAmount !== "") {
      writer.uint32(34).string(message.rewardAmount);
    }
    if (message.rewardToken !== "") {
      writer.uint32(42).string(message.rewardToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventValsetUpdateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventValsetUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valsetNonce = reader.uint64();
          break;
        case 2:
          message.valsetHeight = reader.uint64();
          break;
        case 3:
          message.valsetMembers.push(BridgeValidator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.rewardAmount = reader.string();
          break;
        case 5:
          message.rewardToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventValsetUpdateRequest>): EventValsetUpdateRequest {
    const message = createBaseEventValsetUpdateRequest();
    message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? BigInt(object.valsetNonce.toString()) : BigInt(0);
    message.valsetHeight = object.valsetHeight !== undefined && object.valsetHeight !== null ? BigInt(object.valsetHeight.toString()) : BigInt(0);
    message.valsetMembers = object.valsetMembers?.map(e => BridgeValidator.fromPartial(e)) || [];
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    return message;
  },
  fromAmino(object: EventValsetUpdateRequestAmino): EventValsetUpdateRequest {
    return {
      valsetNonce: BigInt(object.valset_nonce),
      valsetHeight: BigInt(object.valset_height),
      valsetMembers: Array.isArray(object?.valset_members) ? object.valset_members.map((e: any) => BridgeValidator.fromAmino(e)) : [],
      rewardAmount: object.reward_amount,
      rewardToken: object.reward_token
    };
  },
  toAmino(message: EventValsetUpdateRequest): EventValsetUpdateRequestAmino {
    const obj: any = {};
    obj.valset_nonce = message.valsetNonce ? message.valsetNonce.toString() : undefined;
    obj.valset_height = message.valsetHeight ? message.valsetHeight.toString() : undefined;
    if (message.valsetMembers) {
      obj.valset_members = message.valsetMembers.map(e => e ? BridgeValidator.toAmino(e) : undefined);
    } else {
      obj.valset_members = [];
    }
    obj.reward_amount = message.rewardAmount;
    obj.reward_token = message.rewardToken;
    return obj;
  },
  fromAminoMsg(object: EventValsetUpdateRequestAminoMsg): EventValsetUpdateRequest {
    return EventValsetUpdateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EventValsetUpdateRequestProtoMsg): EventValsetUpdateRequest {
    return EventValsetUpdateRequest.decode(message.value);
  },
  toProto(message: EventValsetUpdateRequest): Uint8Array {
    return EventValsetUpdateRequest.encode(message).finish();
  },
  toProtoMsg(message: EventValsetUpdateRequest): EventValsetUpdateRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventValsetUpdateRequest",
      value: EventValsetUpdateRequest.encode(message).finish()
    };
  }
};
function createBaseEventSetOrchestratorAddresses(): EventSetOrchestratorAddresses {
  return {
    validatorAddress: "",
    orchestratorAddress: "",
    operatorEthAddress: ""
  };
}
export const EventSetOrchestratorAddresses = {
  typeUrl: "/injective.peggy.v1.EventSetOrchestratorAddresses",
  encode(message: EventSetOrchestratorAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    if (message.operatorEthAddress !== "") {
      writer.uint32(26).string(message.operatorEthAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetOrchestratorAddresses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetOrchestratorAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.orchestratorAddress = reader.string();
          break;
        case 3:
          message.operatorEthAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventSetOrchestratorAddresses>): EventSetOrchestratorAddresses {
    const message = createBaseEventSetOrchestratorAddresses();
    message.validatorAddress = object.validatorAddress ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    message.operatorEthAddress = object.operatorEthAddress ?? "";
    return message;
  },
  fromAmino(object: EventSetOrchestratorAddressesAmino): EventSetOrchestratorAddresses {
    return {
      validatorAddress: object.validator_address,
      orchestratorAddress: object.orchestrator_address,
      operatorEthAddress: object.operator_eth_address
    };
  },
  toAmino(message: EventSetOrchestratorAddresses): EventSetOrchestratorAddressesAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.orchestrator_address = message.orchestratorAddress;
    obj.operator_eth_address = message.operatorEthAddress;
    return obj;
  },
  fromAminoMsg(object: EventSetOrchestratorAddressesAminoMsg): EventSetOrchestratorAddresses {
    return EventSetOrchestratorAddresses.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetOrchestratorAddressesProtoMsg): EventSetOrchestratorAddresses {
    return EventSetOrchestratorAddresses.decode(message.value);
  },
  toProto(message: EventSetOrchestratorAddresses): Uint8Array {
    return EventSetOrchestratorAddresses.encode(message).finish();
  },
  toProtoMsg(message: EventSetOrchestratorAddresses): EventSetOrchestratorAddressesProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventSetOrchestratorAddresses",
      value: EventSetOrchestratorAddresses.encode(message).finish()
    };
  }
};
function createBaseEventValsetConfirm(): EventValsetConfirm {
  return {
    valsetNonce: BigInt(0),
    orchestratorAddress: ""
  };
}
export const EventValsetConfirm = {
  typeUrl: "/injective.peggy.v1.EventValsetConfirm",
  encode(message: EventValsetConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valsetNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.valsetNonce);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventValsetConfirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventValsetConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valsetNonce = reader.uint64();
          break;
        case 2:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventValsetConfirm>): EventValsetConfirm {
    const message = createBaseEventValsetConfirm();
    message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? BigInt(object.valsetNonce.toString()) : BigInt(0);
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: EventValsetConfirmAmino): EventValsetConfirm {
    return {
      valsetNonce: BigInt(object.valset_nonce),
      orchestratorAddress: object.orchestrator_address
    };
  },
  toAmino(message: EventValsetConfirm): EventValsetConfirmAmino {
    const obj: any = {};
    obj.valset_nonce = message.valsetNonce ? message.valsetNonce.toString() : undefined;
    obj.orchestrator_address = message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: EventValsetConfirmAminoMsg): EventValsetConfirm {
    return EventValsetConfirm.fromAmino(object.value);
  },
  fromProtoMsg(message: EventValsetConfirmProtoMsg): EventValsetConfirm {
    return EventValsetConfirm.decode(message.value);
  },
  toProto(message: EventValsetConfirm): Uint8Array {
    return EventValsetConfirm.encode(message).finish();
  },
  toProtoMsg(message: EventValsetConfirm): EventValsetConfirmProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventValsetConfirm",
      value: EventValsetConfirm.encode(message).finish()
    };
  }
};
function createBaseEventSendToEth(): EventSendToEth {
  return {
    outgoingTxId: BigInt(0),
    sender: "",
    receiver: "",
    amount: "",
    bridgeFee: ""
  };
}
export const EventSendToEth = {
  typeUrl: "/injective.peggy.v1.EventSendToEth",
  encode(message: EventSendToEth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.outgoingTxId !== BigInt(0)) {
      writer.uint32(8).uint64(message.outgoingTxId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.bridgeFee !== "") {
      writer.uint32(42).string(message.bridgeFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSendToEth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outgoingTxId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.bridgeFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventSendToEth>): EventSendToEth {
    const message = createBaseEventSendToEth();
    message.outgoingTxId = object.outgoingTxId !== undefined && object.outgoingTxId !== null ? BigInt(object.outgoingTxId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    message.bridgeFee = object.bridgeFee ?? "";
    return message;
  },
  fromAmino(object: EventSendToEthAmino): EventSendToEth {
    return {
      outgoingTxId: BigInt(object.outgoing_tx_id),
      sender: object.sender,
      receiver: object.receiver,
      amount: object.amount,
      bridgeFee: object.bridge_fee
    };
  },
  toAmino(message: EventSendToEth): EventSendToEthAmino {
    const obj: any = {};
    obj.outgoing_tx_id = message.outgoingTxId ? message.outgoingTxId.toString() : undefined;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    obj.amount = message.amount;
    obj.bridge_fee = message.bridgeFee;
    return obj;
  },
  fromAminoMsg(object: EventSendToEthAminoMsg): EventSendToEth {
    return EventSendToEth.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSendToEthProtoMsg): EventSendToEth {
    return EventSendToEth.decode(message.value);
  },
  toProto(message: EventSendToEth): Uint8Array {
    return EventSendToEth.encode(message).finish();
  },
  toProtoMsg(message: EventSendToEth): EventSendToEthProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventSendToEth",
      value: EventSendToEth.encode(message).finish()
    };
  }
};
function createBaseEventConfirmBatch(): EventConfirmBatch {
  return {
    batchNonce: BigInt(0),
    orchestratorAddress: ""
  };
}
export const EventConfirmBatch = {
  typeUrl: "/injective.peggy.v1.EventConfirmBatch",
  encode(message: EventConfirmBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.batchNonce);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventConfirmBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventConfirmBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchNonce = reader.uint64();
          break;
        case 2:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventConfirmBatch>): EventConfirmBatch {
    const message = createBaseEventConfirmBatch();
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce.toString()) : BigInt(0);
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: EventConfirmBatchAmino): EventConfirmBatch {
    return {
      batchNonce: BigInt(object.batch_nonce),
      orchestratorAddress: object.orchestrator_address
    };
  },
  toAmino(message: EventConfirmBatch): EventConfirmBatchAmino {
    const obj: any = {};
    obj.batch_nonce = message.batchNonce ? message.batchNonce.toString() : undefined;
    obj.orchestrator_address = message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: EventConfirmBatchAminoMsg): EventConfirmBatch {
    return EventConfirmBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: EventConfirmBatchProtoMsg): EventConfirmBatch {
    return EventConfirmBatch.decode(message.value);
  },
  toProto(message: EventConfirmBatch): Uint8Array {
    return EventConfirmBatch.encode(message).finish();
  },
  toProtoMsg(message: EventConfirmBatch): EventConfirmBatchProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventConfirmBatch",
      value: EventConfirmBatch.encode(message).finish()
    };
  }
};
function createBaseEventAttestationVote(): EventAttestationVote {
  return {
    eventNonce: BigInt(0),
    attestationId: new Uint8Array(),
    voter: ""
  };
}
export const EventAttestationVote = {
  typeUrl: "/injective.peggy.v1.EventAttestationVote",
  encode(message: EventAttestationVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.attestationId.length !== 0) {
      writer.uint32(18).bytes(message.attestationId);
    }
    if (message.voter !== "") {
      writer.uint32(26).string(message.voter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAttestationVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttestationVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.attestationId = reader.bytes();
          break;
        case 3:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventAttestationVote>): EventAttestationVote {
    const message = createBaseEventAttestationVote();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.voter = object.voter ?? "";
    return message;
  },
  fromAmino(object: EventAttestationVoteAmino): EventAttestationVote {
    return {
      eventNonce: BigInt(object.event_nonce),
      attestationId: object.attestation_id,
      voter: object.voter
    };
  },
  toAmino(message: EventAttestationVote): EventAttestationVoteAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.attestation_id = message.attestationId;
    obj.voter = message.voter;
    return obj;
  },
  fromAminoMsg(object: EventAttestationVoteAminoMsg): EventAttestationVote {
    return EventAttestationVote.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAttestationVoteProtoMsg): EventAttestationVote {
    return EventAttestationVote.decode(message.value);
  },
  toProto(message: EventAttestationVote): Uint8Array {
    return EventAttestationVote.encode(message).finish();
  },
  toProtoMsg(message: EventAttestationVote): EventAttestationVoteProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventAttestationVote",
      value: EventAttestationVote.encode(message).finish()
    };
  }
};
function createBaseEventDepositClaim(): EventDepositClaim {
  return {
    eventNonce: BigInt(0),
    eventHeight: BigInt(0),
    attestationId: new Uint8Array(),
    ethereumSender: "",
    cosmosReceiver: "",
    tokenContract: "",
    amount: "",
    orchestratorAddress: "",
    data: ""
  };
}
export const EventDepositClaim = {
  typeUrl: "/injective.peggy.v1.EventDepositClaim",
  encode(message: EventDepositClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.eventHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.eventHeight);
    }
    if (message.attestationId.length !== 0) {
      writer.uint32(26).bytes(message.attestationId);
    }
    if (message.ethereumSender !== "") {
      writer.uint32(34).string(message.ethereumSender);
    }
    if (message.cosmosReceiver !== "") {
      writer.uint32(42).string(message.cosmosReceiver);
    }
    if (message.tokenContract !== "") {
      writer.uint32(50).string(message.tokenContract);
    }
    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(66).string(message.orchestratorAddress);
    }
    if (message.data !== "") {
      writer.uint32(74).string(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDepositClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDepositClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.eventHeight = reader.uint64();
          break;
        case 3:
          message.attestationId = reader.bytes();
          break;
        case 4:
          message.ethereumSender = reader.string();
          break;
        case 5:
          message.cosmosReceiver = reader.string();
          break;
        case 6:
          message.tokenContract = reader.string();
          break;
        case 7:
          message.amount = reader.string();
          break;
        case 8:
          message.orchestratorAddress = reader.string();
          break;
        case 9:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventDepositClaim>): EventDepositClaim {
    const message = createBaseEventDepositClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.eventHeight = object.eventHeight !== undefined && object.eventHeight !== null ? BigInt(object.eventHeight.toString()) : BigInt(0);
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.ethereumSender = object.ethereumSender ?? "";
    message.cosmosReceiver = object.cosmosReceiver ?? "";
    message.tokenContract = object.tokenContract ?? "";
    message.amount = object.amount ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    message.data = object.data ?? "";
    return message;
  },
  fromAmino(object: EventDepositClaimAmino): EventDepositClaim {
    return {
      eventNonce: BigInt(object.event_nonce),
      eventHeight: BigInt(object.event_height),
      attestationId: object.attestation_id,
      ethereumSender: object.ethereum_sender,
      cosmosReceiver: object.cosmos_receiver,
      tokenContract: object.token_contract,
      amount: object.amount,
      orchestratorAddress: object.orchestrator_address,
      data: object.data
    };
  },
  toAmino(message: EventDepositClaim): EventDepositClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.event_height = message.eventHeight ? message.eventHeight.toString() : undefined;
    obj.attestation_id = message.attestationId;
    obj.ethereum_sender = message.ethereumSender;
    obj.cosmos_receiver = message.cosmosReceiver;
    obj.token_contract = message.tokenContract;
    obj.amount = message.amount;
    obj.orchestrator_address = message.orchestratorAddress;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: EventDepositClaimAminoMsg): EventDepositClaim {
    return EventDepositClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDepositClaimProtoMsg): EventDepositClaim {
    return EventDepositClaim.decode(message.value);
  },
  toProto(message: EventDepositClaim): Uint8Array {
    return EventDepositClaim.encode(message).finish();
  },
  toProtoMsg(message: EventDepositClaim): EventDepositClaimProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventDepositClaim",
      value: EventDepositClaim.encode(message).finish()
    };
  }
};
function createBaseEventWithdrawClaim(): EventWithdrawClaim {
  return {
    eventNonce: BigInt(0),
    eventHeight: BigInt(0),
    attestationId: new Uint8Array(),
    batchNonce: BigInt(0),
    tokenContract: "",
    orchestratorAddress: ""
  };
}
export const EventWithdrawClaim = {
  typeUrl: "/injective.peggy.v1.EventWithdrawClaim",
  encode(message: EventWithdrawClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.eventHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.eventHeight);
    }
    if (message.attestationId.length !== 0) {
      writer.uint32(26).bytes(message.attestationId);
    }
    if (message.batchNonce !== BigInt(0)) {
      writer.uint32(32).uint64(message.batchNonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(42).string(message.tokenContract);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(50).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventWithdrawClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.eventHeight = reader.uint64();
          break;
        case 3:
          message.attestationId = reader.bytes();
          break;
        case 4:
          message.batchNonce = reader.uint64();
          break;
        case 5:
          message.tokenContract = reader.string();
          break;
        case 6:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventWithdrawClaim>): EventWithdrawClaim {
    const message = createBaseEventWithdrawClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.eventHeight = object.eventHeight !== undefined && object.eventHeight !== null ? BigInt(object.eventHeight.toString()) : BigInt(0);
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce.toString()) : BigInt(0);
    message.tokenContract = object.tokenContract ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: EventWithdrawClaimAmino): EventWithdrawClaim {
    return {
      eventNonce: BigInt(object.event_nonce),
      eventHeight: BigInt(object.event_height),
      attestationId: object.attestation_id,
      batchNonce: BigInt(object.batch_nonce),
      tokenContract: object.token_contract,
      orchestratorAddress: object.orchestrator_address
    };
  },
  toAmino(message: EventWithdrawClaim): EventWithdrawClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.event_height = message.eventHeight ? message.eventHeight.toString() : undefined;
    obj.attestation_id = message.attestationId;
    obj.batch_nonce = message.batchNonce ? message.batchNonce.toString() : undefined;
    obj.token_contract = message.tokenContract;
    obj.orchestrator_address = message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: EventWithdrawClaimAminoMsg): EventWithdrawClaim {
    return EventWithdrawClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWithdrawClaimProtoMsg): EventWithdrawClaim {
    return EventWithdrawClaim.decode(message.value);
  },
  toProto(message: EventWithdrawClaim): Uint8Array {
    return EventWithdrawClaim.encode(message).finish();
  },
  toProtoMsg(message: EventWithdrawClaim): EventWithdrawClaimProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventWithdrawClaim",
      value: EventWithdrawClaim.encode(message).finish()
    };
  }
};
function createBaseEventERC20DeployedClaim(): EventERC20DeployedClaim {
  return {
    eventNonce: BigInt(0),
    eventHeight: BigInt(0),
    attestationId: new Uint8Array(),
    cosmosDenom: "",
    tokenContract: "",
    name: "",
    symbol: "",
    decimals: BigInt(0),
    orchestratorAddress: ""
  };
}
export const EventERC20DeployedClaim = {
  typeUrl: "/injective.peggy.v1.EventERC20DeployedClaim",
  encode(message: EventERC20DeployedClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.eventHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.eventHeight);
    }
    if (message.attestationId.length !== 0) {
      writer.uint32(26).bytes(message.attestationId);
    }
    if (message.cosmosDenom !== "") {
      writer.uint32(34).string(message.cosmosDenom);
    }
    if (message.tokenContract !== "") {
      writer.uint32(42).string(message.tokenContract);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(58).string(message.symbol);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(64).uint64(message.decimals);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(74).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventERC20DeployedClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventERC20DeployedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.eventHeight = reader.uint64();
          break;
        case 3:
          message.attestationId = reader.bytes();
          break;
        case 4:
          message.cosmosDenom = reader.string();
          break;
        case 5:
          message.tokenContract = reader.string();
          break;
        case 6:
          message.name = reader.string();
          break;
        case 7:
          message.symbol = reader.string();
          break;
        case 8:
          message.decimals = reader.uint64();
          break;
        case 9:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventERC20DeployedClaim>): EventERC20DeployedClaim {
    const message = createBaseEventERC20DeployedClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.eventHeight = object.eventHeight !== undefined && object.eventHeight !== null ? BigInt(object.eventHeight.toString()) : BigInt(0);
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.cosmosDenom = object.cosmosDenom ?? "";
    message.tokenContract = object.tokenContract ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: EventERC20DeployedClaimAmino): EventERC20DeployedClaim {
    return {
      eventNonce: BigInt(object.event_nonce),
      eventHeight: BigInt(object.event_height),
      attestationId: object.attestation_id,
      cosmosDenom: object.cosmos_denom,
      tokenContract: object.token_contract,
      name: object.name,
      symbol: object.symbol,
      decimals: BigInt(object.decimals),
      orchestratorAddress: object.orchestrator_address
    };
  },
  toAmino(message: EventERC20DeployedClaim): EventERC20DeployedClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.event_height = message.eventHeight ? message.eventHeight.toString() : undefined;
    obj.attestation_id = message.attestationId;
    obj.cosmos_denom = message.cosmosDenom;
    obj.token_contract = message.tokenContract;
    obj.name = message.name;
    obj.symbol = message.symbol;
    obj.decimals = message.decimals ? message.decimals.toString() : undefined;
    obj.orchestrator_address = message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: EventERC20DeployedClaimAminoMsg): EventERC20DeployedClaim {
    return EventERC20DeployedClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: EventERC20DeployedClaimProtoMsg): EventERC20DeployedClaim {
    return EventERC20DeployedClaim.decode(message.value);
  },
  toProto(message: EventERC20DeployedClaim): Uint8Array {
    return EventERC20DeployedClaim.encode(message).finish();
  },
  toProtoMsg(message: EventERC20DeployedClaim): EventERC20DeployedClaimProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventERC20DeployedClaim",
      value: EventERC20DeployedClaim.encode(message).finish()
    };
  }
};
function createBaseEventValsetUpdateClaim(): EventValsetUpdateClaim {
  return {
    eventNonce: BigInt(0),
    eventHeight: BigInt(0),
    attestationId: new Uint8Array(),
    valsetNonce: BigInt(0),
    valsetMembers: [],
    rewardAmount: "",
    rewardToken: "",
    orchestratorAddress: ""
  };
}
export const EventValsetUpdateClaim = {
  typeUrl: "/injective.peggy.v1.EventValsetUpdateClaim",
  encode(message: EventValsetUpdateClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.eventHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.eventHeight);
    }
    if (message.attestationId.length !== 0) {
      writer.uint32(26).bytes(message.attestationId);
    }
    if (message.valsetNonce !== BigInt(0)) {
      writer.uint32(32).uint64(message.valsetNonce);
    }
    for (const v of message.valsetMembers) {
      BridgeValidator.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.rewardAmount !== "") {
      writer.uint32(50).string(message.rewardAmount);
    }
    if (message.rewardToken !== "") {
      writer.uint32(58).string(message.rewardToken);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(66).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventValsetUpdateClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventValsetUpdateClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.eventHeight = reader.uint64();
          break;
        case 3:
          message.attestationId = reader.bytes();
          break;
        case 4:
          message.valsetNonce = reader.uint64();
          break;
        case 5:
          message.valsetMembers.push(BridgeValidator.decode(reader, reader.uint32()));
          break;
        case 6:
          message.rewardAmount = reader.string();
          break;
        case 7:
          message.rewardToken = reader.string();
          break;
        case 8:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventValsetUpdateClaim>): EventValsetUpdateClaim {
    const message = createBaseEventValsetUpdateClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.eventHeight = object.eventHeight !== undefined && object.eventHeight !== null ? BigInt(object.eventHeight.toString()) : BigInt(0);
    message.attestationId = object.attestationId ?? new Uint8Array();
    message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? BigInt(object.valsetNonce.toString()) : BigInt(0);
    message.valsetMembers = object.valsetMembers?.map(e => BridgeValidator.fromPartial(e)) || [];
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: EventValsetUpdateClaimAmino): EventValsetUpdateClaim {
    return {
      eventNonce: BigInt(object.event_nonce),
      eventHeight: BigInt(object.event_height),
      attestationId: object.attestation_id,
      valsetNonce: BigInt(object.valset_nonce),
      valsetMembers: Array.isArray(object?.valset_members) ? object.valset_members.map((e: any) => BridgeValidator.fromAmino(e)) : [],
      rewardAmount: object.reward_amount,
      rewardToken: object.reward_token,
      orchestratorAddress: object.orchestrator_address
    };
  },
  toAmino(message: EventValsetUpdateClaim): EventValsetUpdateClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.event_height = message.eventHeight ? message.eventHeight.toString() : undefined;
    obj.attestation_id = message.attestationId;
    obj.valset_nonce = message.valsetNonce ? message.valsetNonce.toString() : undefined;
    if (message.valsetMembers) {
      obj.valset_members = message.valsetMembers.map(e => e ? BridgeValidator.toAmino(e) : undefined);
    } else {
      obj.valset_members = [];
    }
    obj.reward_amount = message.rewardAmount;
    obj.reward_token = message.rewardToken;
    obj.orchestrator_address = message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: EventValsetUpdateClaimAminoMsg): EventValsetUpdateClaim {
    return EventValsetUpdateClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: EventValsetUpdateClaimProtoMsg): EventValsetUpdateClaim {
    return EventValsetUpdateClaim.decode(message.value);
  },
  toProto(message: EventValsetUpdateClaim): Uint8Array {
    return EventValsetUpdateClaim.encode(message).finish();
  },
  toProtoMsg(message: EventValsetUpdateClaim): EventValsetUpdateClaimProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventValsetUpdateClaim",
      value: EventValsetUpdateClaim.encode(message).finish()
    };
  }
};
function createBaseEventCancelSendToEth(): EventCancelSendToEth {
  return {
    outgoingTxId: BigInt(0)
  };
}
export const EventCancelSendToEth = {
  typeUrl: "/injective.peggy.v1.EventCancelSendToEth",
  encode(message: EventCancelSendToEth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.outgoingTxId !== BigInt(0)) {
      writer.uint32(8).uint64(message.outgoingTxId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCancelSendToEth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outgoingTxId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventCancelSendToEth>): EventCancelSendToEth {
    const message = createBaseEventCancelSendToEth();
    message.outgoingTxId = object.outgoingTxId !== undefined && object.outgoingTxId !== null ? BigInt(object.outgoingTxId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventCancelSendToEthAmino): EventCancelSendToEth {
    return {
      outgoingTxId: BigInt(object.outgoing_tx_id)
    };
  },
  toAmino(message: EventCancelSendToEth): EventCancelSendToEthAmino {
    const obj: any = {};
    obj.outgoing_tx_id = message.outgoingTxId ? message.outgoingTxId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCancelSendToEthAminoMsg): EventCancelSendToEth {
    return EventCancelSendToEth.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelSendToEthProtoMsg): EventCancelSendToEth {
    return EventCancelSendToEth.decode(message.value);
  },
  toProto(message: EventCancelSendToEth): Uint8Array {
    return EventCancelSendToEth.encode(message).finish();
  },
  toProtoMsg(message: EventCancelSendToEth): EventCancelSendToEthProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventCancelSendToEth",
      value: EventCancelSendToEth.encode(message).finish()
    };
  }
};
function createBaseEventSubmitBadSignatureEvidence(): EventSubmitBadSignatureEvidence {
  return {
    badEthSignature: "",
    badEthSignatureSubject: ""
  };
}
export const EventSubmitBadSignatureEvidence = {
  typeUrl: "/injective.peggy.v1.EventSubmitBadSignatureEvidence",
  encode(message: EventSubmitBadSignatureEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.badEthSignature !== "") {
      writer.uint32(10).string(message.badEthSignature);
    }
    if (message.badEthSignatureSubject !== "") {
      writer.uint32(18).string(message.badEthSignatureSubject);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSubmitBadSignatureEvidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubmitBadSignatureEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.badEthSignature = reader.string();
          break;
        case 2:
          message.badEthSignatureSubject = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventSubmitBadSignatureEvidence>): EventSubmitBadSignatureEvidence {
    const message = createBaseEventSubmitBadSignatureEvidence();
    message.badEthSignature = object.badEthSignature ?? "";
    message.badEthSignatureSubject = object.badEthSignatureSubject ?? "";
    return message;
  },
  fromAmino(object: EventSubmitBadSignatureEvidenceAmino): EventSubmitBadSignatureEvidence {
    return {
      badEthSignature: object.bad_eth_signature,
      badEthSignatureSubject: object.bad_eth_signature_subject
    };
  },
  toAmino(message: EventSubmitBadSignatureEvidence): EventSubmitBadSignatureEvidenceAmino {
    const obj: any = {};
    obj.bad_eth_signature = message.badEthSignature;
    obj.bad_eth_signature_subject = message.badEthSignatureSubject;
    return obj;
  },
  fromAminoMsg(object: EventSubmitBadSignatureEvidenceAminoMsg): EventSubmitBadSignatureEvidence {
    return EventSubmitBadSignatureEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSubmitBadSignatureEvidenceProtoMsg): EventSubmitBadSignatureEvidence {
    return EventSubmitBadSignatureEvidence.decode(message.value);
  },
  toProto(message: EventSubmitBadSignatureEvidence): Uint8Array {
    return EventSubmitBadSignatureEvidence.encode(message).finish();
  },
  toProtoMsg(message: EventSubmitBadSignatureEvidence): EventSubmitBadSignatureEvidenceProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.EventSubmitBadSignatureEvidence",
      value: EventSubmitBadSignatureEvidence.encode(message).finish()
    };
  }
};