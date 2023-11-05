import { Params, ParamsAmino, ParamsSDKType, GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { Valset, ValsetAmino, ValsetSDKType, LastClaimEvent, LastClaimEventAmino, LastClaimEventSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmAmino, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchAmino, MsgConfirmBatchSDKType } from "./msgs";
import { BatchFees, BatchFeesAmino, BatchFeesSDKType } from "./pool";
import { OutgoingTxBatch, OutgoingTxBatchAmino, OutgoingTxBatchSDKType, OutgoingTransferTx, OutgoingTransferTxAmino, OutgoingTransferTxSDKType } from "./batch";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/injective.peggy.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/injective.peggy.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryCurrentValsetRequest {}
export interface QueryCurrentValsetRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryCurrentValsetRequest";
  value: Uint8Array;
}
export interface QueryCurrentValsetRequestAmino {}
export interface QueryCurrentValsetRequestAminoMsg {
  type: "/injective.peggy.v1.QueryCurrentValsetRequest";
  value: QueryCurrentValsetRequestAmino;
}
export interface QueryCurrentValsetRequestSDKType {}
export interface QueryCurrentValsetResponse {
  valset?: Valset;
}
export interface QueryCurrentValsetResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryCurrentValsetResponse";
  value: Uint8Array;
}
export interface QueryCurrentValsetResponseAmino {
  valset?: ValsetAmino;
}
export interface QueryCurrentValsetResponseAminoMsg {
  type: "/injective.peggy.v1.QueryCurrentValsetResponse";
  value: QueryCurrentValsetResponseAmino;
}
export interface QueryCurrentValsetResponseSDKType {
  valset?: ValsetSDKType;
}
export interface QueryValsetRequestRequest {
  nonce: bigint;
}
export interface QueryValsetRequestRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryValsetRequestRequest";
  value: Uint8Array;
}
export interface QueryValsetRequestRequestAmino {
  nonce: string;
}
export interface QueryValsetRequestRequestAminoMsg {
  type: "/injective.peggy.v1.QueryValsetRequestRequest";
  value: QueryValsetRequestRequestAmino;
}
export interface QueryValsetRequestRequestSDKType {
  nonce: bigint;
}
export interface QueryValsetRequestResponse {
  valset?: Valset;
}
export interface QueryValsetRequestResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryValsetRequestResponse";
  value: Uint8Array;
}
export interface QueryValsetRequestResponseAmino {
  valset?: ValsetAmino;
}
export interface QueryValsetRequestResponseAminoMsg {
  type: "/injective.peggy.v1.QueryValsetRequestResponse";
  value: QueryValsetRequestResponseAmino;
}
export interface QueryValsetRequestResponseSDKType {
  valset?: ValsetSDKType;
}
export interface QueryValsetConfirmRequest {
  nonce: bigint;
  address: string;
}
export interface QueryValsetConfirmRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryValsetConfirmRequest";
  value: Uint8Array;
}
export interface QueryValsetConfirmRequestAmino {
  nonce: string;
  address: string;
}
export interface QueryValsetConfirmRequestAminoMsg {
  type: "/injective.peggy.v1.QueryValsetConfirmRequest";
  value: QueryValsetConfirmRequestAmino;
}
export interface QueryValsetConfirmRequestSDKType {
  nonce: bigint;
  address: string;
}
export interface QueryValsetConfirmResponse {
  confirm?: MsgValsetConfirm;
}
export interface QueryValsetConfirmResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryValsetConfirmResponse";
  value: Uint8Array;
}
export interface QueryValsetConfirmResponseAmino {
  confirm?: MsgValsetConfirmAmino;
}
export interface QueryValsetConfirmResponseAminoMsg {
  type: "/injective.peggy.v1.QueryValsetConfirmResponse";
  value: QueryValsetConfirmResponseAmino;
}
export interface QueryValsetConfirmResponseSDKType {
  confirm?: MsgValsetConfirmSDKType;
}
export interface QueryValsetConfirmsByNonceRequest {
  nonce: bigint;
}
export interface QueryValsetConfirmsByNonceRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceRequest";
  value: Uint8Array;
}
export interface QueryValsetConfirmsByNonceRequestAmino {
  nonce: string;
}
export interface QueryValsetConfirmsByNonceRequestAminoMsg {
  type: "/injective.peggy.v1.QueryValsetConfirmsByNonceRequest";
  value: QueryValsetConfirmsByNonceRequestAmino;
}
export interface QueryValsetConfirmsByNonceRequestSDKType {
  nonce: bigint;
}
export interface QueryValsetConfirmsByNonceResponse {
  confirms: MsgValsetConfirm[];
}
export interface QueryValsetConfirmsByNonceResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceResponse";
  value: Uint8Array;
}
export interface QueryValsetConfirmsByNonceResponseAmino {
  confirms: MsgValsetConfirmAmino[];
}
export interface QueryValsetConfirmsByNonceResponseAminoMsg {
  type: "/injective.peggy.v1.QueryValsetConfirmsByNonceResponse";
  value: QueryValsetConfirmsByNonceResponseAmino;
}
export interface QueryValsetConfirmsByNonceResponseSDKType {
  confirms: MsgValsetConfirmSDKType[];
}
export interface QueryLastValsetRequestsRequest {}
export interface QueryLastValsetRequestsRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsRequest";
  value: Uint8Array;
}
export interface QueryLastValsetRequestsRequestAmino {}
export interface QueryLastValsetRequestsRequestAminoMsg {
  type: "/injective.peggy.v1.QueryLastValsetRequestsRequest";
  value: QueryLastValsetRequestsRequestAmino;
}
export interface QueryLastValsetRequestsRequestSDKType {}
export interface QueryLastValsetRequestsResponse {
  valsets: Valset[];
}
export interface QueryLastValsetRequestsResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsResponse";
  value: Uint8Array;
}
export interface QueryLastValsetRequestsResponseAmino {
  valsets: ValsetAmino[];
}
export interface QueryLastValsetRequestsResponseAminoMsg {
  type: "/injective.peggy.v1.QueryLastValsetRequestsResponse";
  value: QueryLastValsetRequestsResponseAmino;
}
export interface QueryLastValsetRequestsResponseSDKType {
  valsets: ValsetSDKType[];
}
export interface QueryLastPendingValsetRequestByAddrRequest {
  address: string;
}
export interface QueryLastPendingValsetRequestByAddrRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest";
  value: Uint8Array;
}
export interface QueryLastPendingValsetRequestByAddrRequestAmino {
  address: string;
}
export interface QueryLastPendingValsetRequestByAddrRequestAminoMsg {
  type: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest";
  value: QueryLastPendingValsetRequestByAddrRequestAmino;
}
export interface QueryLastPendingValsetRequestByAddrRequestSDKType {
  address: string;
}
export interface QueryLastPendingValsetRequestByAddrResponse {
  valsets: Valset[];
}
export interface QueryLastPendingValsetRequestByAddrResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse";
  value: Uint8Array;
}
export interface QueryLastPendingValsetRequestByAddrResponseAmino {
  valsets: ValsetAmino[];
}
export interface QueryLastPendingValsetRequestByAddrResponseAminoMsg {
  type: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse";
  value: QueryLastPendingValsetRequestByAddrResponseAmino;
}
export interface QueryLastPendingValsetRequestByAddrResponseSDKType {
  valsets: ValsetSDKType[];
}
export interface QueryBatchFeeRequest {}
export interface QueryBatchFeeRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryBatchFeeRequest";
  value: Uint8Array;
}
export interface QueryBatchFeeRequestAmino {}
export interface QueryBatchFeeRequestAminoMsg {
  type: "/injective.peggy.v1.QueryBatchFeeRequest";
  value: QueryBatchFeeRequestAmino;
}
export interface QueryBatchFeeRequestSDKType {}
export interface QueryBatchFeeResponse {
  batchFees: BatchFees[];
}
export interface QueryBatchFeeResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryBatchFeeResponse";
  value: Uint8Array;
}
export interface QueryBatchFeeResponseAmino {
  batchFees: BatchFeesAmino[];
}
export interface QueryBatchFeeResponseAminoMsg {
  type: "/injective.peggy.v1.QueryBatchFeeResponse";
  value: QueryBatchFeeResponseAmino;
}
export interface QueryBatchFeeResponseSDKType {
  batchFees: BatchFeesSDKType[];
}
export interface QueryLastPendingBatchRequestByAddrRequest {
  address: string;
}
export interface QueryLastPendingBatchRequestByAddrRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest";
  value: Uint8Array;
}
export interface QueryLastPendingBatchRequestByAddrRequestAmino {
  address: string;
}
export interface QueryLastPendingBatchRequestByAddrRequestAminoMsg {
  type: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest";
  value: QueryLastPendingBatchRequestByAddrRequestAmino;
}
export interface QueryLastPendingBatchRequestByAddrRequestSDKType {
  address: string;
}
export interface QueryLastPendingBatchRequestByAddrResponse {
  batch?: OutgoingTxBatch;
}
export interface QueryLastPendingBatchRequestByAddrResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse";
  value: Uint8Array;
}
export interface QueryLastPendingBatchRequestByAddrResponseAmino {
  batch?: OutgoingTxBatchAmino;
}
export interface QueryLastPendingBatchRequestByAddrResponseAminoMsg {
  type: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse";
  value: QueryLastPendingBatchRequestByAddrResponseAmino;
}
export interface QueryLastPendingBatchRequestByAddrResponseSDKType {
  batch?: OutgoingTxBatchSDKType;
}
export interface QueryOutgoingTxBatchesRequest {}
export interface QueryOutgoingTxBatchesRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesRequest";
  value: Uint8Array;
}
export interface QueryOutgoingTxBatchesRequestAmino {}
export interface QueryOutgoingTxBatchesRequestAminoMsg {
  type: "/injective.peggy.v1.QueryOutgoingTxBatchesRequest";
  value: QueryOutgoingTxBatchesRequestAmino;
}
export interface QueryOutgoingTxBatchesRequestSDKType {}
export interface QueryOutgoingTxBatchesResponse {
  batches: OutgoingTxBatch[];
}
export interface QueryOutgoingTxBatchesResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesResponse";
  value: Uint8Array;
}
export interface QueryOutgoingTxBatchesResponseAmino {
  batches: OutgoingTxBatchAmino[];
}
export interface QueryOutgoingTxBatchesResponseAminoMsg {
  type: "/injective.peggy.v1.QueryOutgoingTxBatchesResponse";
  value: QueryOutgoingTxBatchesResponseAmino;
}
export interface QueryOutgoingTxBatchesResponseSDKType {
  batches: OutgoingTxBatchSDKType[];
}
export interface QueryBatchRequestByNonceRequest {
  nonce: bigint;
  contractAddress: string;
}
export interface QueryBatchRequestByNonceRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceRequest";
  value: Uint8Array;
}
export interface QueryBatchRequestByNonceRequestAmino {
  nonce: string;
  contract_address: string;
}
export interface QueryBatchRequestByNonceRequestAminoMsg {
  type: "/injective.peggy.v1.QueryBatchRequestByNonceRequest";
  value: QueryBatchRequestByNonceRequestAmino;
}
export interface QueryBatchRequestByNonceRequestSDKType {
  nonce: bigint;
  contract_address: string;
}
export interface QueryBatchRequestByNonceResponse {
  batch?: OutgoingTxBatch;
}
export interface QueryBatchRequestByNonceResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceResponse";
  value: Uint8Array;
}
export interface QueryBatchRequestByNonceResponseAmino {
  batch?: OutgoingTxBatchAmino;
}
export interface QueryBatchRequestByNonceResponseAminoMsg {
  type: "/injective.peggy.v1.QueryBatchRequestByNonceResponse";
  value: QueryBatchRequestByNonceResponseAmino;
}
export interface QueryBatchRequestByNonceResponseSDKType {
  batch?: OutgoingTxBatchSDKType;
}
export interface QueryBatchConfirmsRequest {
  nonce: bigint;
  contractAddress: string;
}
export interface QueryBatchConfirmsRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryBatchConfirmsRequest";
  value: Uint8Array;
}
export interface QueryBatchConfirmsRequestAmino {
  nonce: string;
  contract_address: string;
}
export interface QueryBatchConfirmsRequestAminoMsg {
  type: "/injective.peggy.v1.QueryBatchConfirmsRequest";
  value: QueryBatchConfirmsRequestAmino;
}
export interface QueryBatchConfirmsRequestSDKType {
  nonce: bigint;
  contract_address: string;
}
export interface QueryBatchConfirmsResponse {
  confirms: MsgConfirmBatch[];
}
export interface QueryBatchConfirmsResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryBatchConfirmsResponse";
  value: Uint8Array;
}
export interface QueryBatchConfirmsResponseAmino {
  confirms: MsgConfirmBatchAmino[];
}
export interface QueryBatchConfirmsResponseAminoMsg {
  type: "/injective.peggy.v1.QueryBatchConfirmsResponse";
  value: QueryBatchConfirmsResponseAmino;
}
export interface QueryBatchConfirmsResponseSDKType {
  confirms: MsgConfirmBatchSDKType[];
}
export interface QueryLastEventByAddrRequest {
  address: string;
}
export interface QueryLastEventByAddrRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryLastEventByAddrRequest";
  value: Uint8Array;
}
export interface QueryLastEventByAddrRequestAmino {
  address: string;
}
export interface QueryLastEventByAddrRequestAminoMsg {
  type: "/injective.peggy.v1.QueryLastEventByAddrRequest";
  value: QueryLastEventByAddrRequestAmino;
}
export interface QueryLastEventByAddrRequestSDKType {
  address: string;
}
export interface QueryLastEventByAddrResponse {
  lastClaimEvent?: LastClaimEvent;
}
export interface QueryLastEventByAddrResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryLastEventByAddrResponse";
  value: Uint8Array;
}
export interface QueryLastEventByAddrResponseAmino {
  last_claim_event?: LastClaimEventAmino;
}
export interface QueryLastEventByAddrResponseAminoMsg {
  type: "/injective.peggy.v1.QueryLastEventByAddrResponse";
  value: QueryLastEventByAddrResponseAmino;
}
export interface QueryLastEventByAddrResponseSDKType {
  last_claim_event?: LastClaimEventSDKType;
}
export interface QueryERC20ToDenomRequest {
  erc20: string;
}
export interface QueryERC20ToDenomRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryERC20ToDenomRequest";
  value: Uint8Array;
}
export interface QueryERC20ToDenomRequestAmino {
  erc20: string;
}
export interface QueryERC20ToDenomRequestAminoMsg {
  type: "/injective.peggy.v1.QueryERC20ToDenomRequest";
  value: QueryERC20ToDenomRequestAmino;
}
export interface QueryERC20ToDenomRequestSDKType {
  erc20: string;
}
export interface QueryERC20ToDenomResponse {
  denom: string;
  cosmosOriginated: boolean;
}
export interface QueryERC20ToDenomResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryERC20ToDenomResponse";
  value: Uint8Array;
}
export interface QueryERC20ToDenomResponseAmino {
  denom: string;
  cosmos_originated: boolean;
}
export interface QueryERC20ToDenomResponseAminoMsg {
  type: "/injective.peggy.v1.QueryERC20ToDenomResponse";
  value: QueryERC20ToDenomResponseAmino;
}
export interface QueryERC20ToDenomResponseSDKType {
  denom: string;
  cosmos_originated: boolean;
}
export interface QueryDenomToERC20Request {
  denom: string;
}
export interface QueryDenomToERC20RequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryDenomToERC20Request";
  value: Uint8Array;
}
export interface QueryDenomToERC20RequestAmino {
  denom: string;
}
export interface QueryDenomToERC20RequestAminoMsg {
  type: "/injective.peggy.v1.QueryDenomToERC20Request";
  value: QueryDenomToERC20RequestAmino;
}
export interface QueryDenomToERC20RequestSDKType {
  denom: string;
}
export interface QueryDenomToERC20Response {
  erc20: string;
  cosmosOriginated: boolean;
}
export interface QueryDenomToERC20ResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryDenomToERC20Response";
  value: Uint8Array;
}
export interface QueryDenomToERC20ResponseAmino {
  erc20: string;
  cosmos_originated: boolean;
}
export interface QueryDenomToERC20ResponseAminoMsg {
  type: "/injective.peggy.v1.QueryDenomToERC20Response";
  value: QueryDenomToERC20ResponseAmino;
}
export interface QueryDenomToERC20ResponseSDKType {
  erc20: string;
  cosmos_originated: boolean;
}
export interface QueryDelegateKeysByValidatorAddress {
  validatorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddress";
  value: Uint8Array;
}
export interface QueryDelegateKeysByValidatorAddressAmino {
  validator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressAminoMsg {
  type: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddress";
  value: QueryDelegateKeysByValidatorAddressAmino;
}
export interface QueryDelegateKeysByValidatorAddressSDKType {
  validator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressResponse {
  ethAddress: string;
  orchestratorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse";
  value: Uint8Array;
}
export interface QueryDelegateKeysByValidatorAddressResponseAmino {
  eth_address: string;
  orchestrator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressResponseAminoMsg {
  type: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse";
  value: QueryDelegateKeysByValidatorAddressResponseAmino;
}
export interface QueryDelegateKeysByValidatorAddressResponseSDKType {
  eth_address: string;
  orchestrator_address: string;
}
export interface QueryDelegateKeysByEthAddress {
  ethAddress: string;
}
export interface QueryDelegateKeysByEthAddressProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddress";
  value: Uint8Array;
}
export interface QueryDelegateKeysByEthAddressAmino {
  eth_address: string;
}
export interface QueryDelegateKeysByEthAddressAminoMsg {
  type: "/injective.peggy.v1.QueryDelegateKeysByEthAddress";
  value: QueryDelegateKeysByEthAddressAmino;
}
export interface QueryDelegateKeysByEthAddressSDKType {
  eth_address: string;
}
export interface QueryDelegateKeysByEthAddressResponse {
  validatorAddress: string;
  orchestratorAddress: string;
}
export interface QueryDelegateKeysByEthAddressResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddressResponse";
  value: Uint8Array;
}
export interface QueryDelegateKeysByEthAddressResponseAmino {
  validator_address: string;
  orchestrator_address: string;
}
export interface QueryDelegateKeysByEthAddressResponseAminoMsg {
  type: "/injective.peggy.v1.QueryDelegateKeysByEthAddressResponse";
  value: QueryDelegateKeysByEthAddressResponseAmino;
}
export interface QueryDelegateKeysByEthAddressResponseSDKType {
  validator_address: string;
  orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddress {
  orchestratorAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress";
  value: Uint8Array;
}
export interface QueryDelegateKeysByOrchestratorAddressAmino {
  orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressAminoMsg {
  type: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress";
  value: QueryDelegateKeysByOrchestratorAddressAmino;
}
export interface QueryDelegateKeysByOrchestratorAddressSDKType {
  orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponse {
  validatorAddress: string;
  ethAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse";
  value: Uint8Array;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseAmino {
  validator_address: string;
  eth_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseAminoMsg {
  type: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse";
  value: QueryDelegateKeysByOrchestratorAddressResponseAmino;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseSDKType {
  validator_address: string;
  eth_address: string;
}
export interface QueryPendingSendToEth {
  senderAddress: string;
}
export interface QueryPendingSendToEthProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryPendingSendToEth";
  value: Uint8Array;
}
export interface QueryPendingSendToEthAmino {
  sender_address: string;
}
export interface QueryPendingSendToEthAminoMsg {
  type: "/injective.peggy.v1.QueryPendingSendToEth";
  value: QueryPendingSendToEthAmino;
}
export interface QueryPendingSendToEthSDKType {
  sender_address: string;
}
export interface QueryPendingSendToEthResponse {
  transfersInBatches: OutgoingTransferTx[];
  unbatchedTransfers: OutgoingTransferTx[];
}
export interface QueryPendingSendToEthResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryPendingSendToEthResponse";
  value: Uint8Array;
}
export interface QueryPendingSendToEthResponseAmino {
  transfers_in_batches: OutgoingTransferTxAmino[];
  unbatched_transfers: OutgoingTransferTxAmino[];
}
export interface QueryPendingSendToEthResponseAminoMsg {
  type: "/injective.peggy.v1.QueryPendingSendToEthResponse";
  value: QueryPendingSendToEthResponseAmino;
}
export interface QueryPendingSendToEthResponseSDKType {
  transfers_in_batches: OutgoingTransferTxSDKType[];
  unbatched_transfers: OutgoingTransferTxSDKType[];
}
/** QueryModuleStateRequest is the request type for the Query/PeggyModuleState RPC method. */
export interface QueryModuleStateRequest {}
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryModuleStateRequest";
  value: Uint8Array;
}
/** QueryModuleStateRequest is the request type for the Query/PeggyModuleState RPC method. */
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.peggy.v1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
/** QueryModuleStateRequest is the request type for the Query/PeggyModuleState RPC method. */
export interface QueryModuleStateRequestSDKType {}
/** QueryModuleStateResponse is the response type for the Query/PeggyModuleState RPC method. */
export interface QueryModuleStateResponse {
  state?: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.QueryModuleStateResponse";
  value: Uint8Array;
}
/** QueryModuleStateResponse is the response type for the Query/PeggyModuleState RPC method. */
export interface QueryModuleStateResponseAmino {
  state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.peggy.v1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
/** QueryModuleStateResponse is the response type for the Query/PeggyModuleState RPC method. */
export interface QueryModuleStateResponseSDKType {
  state?: GenesisStateSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/injective.peggy.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/injective.peggy.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentValsetRequest(): QueryCurrentValsetRequest {
  return {};
}
export const QueryCurrentValsetRequest = {
  typeUrl: "/injective.peggy.v1.QueryCurrentValsetRequest",
  encode(_: QueryCurrentValsetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentValsetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentValsetRequest();
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
  fromPartial(_: Partial<QueryCurrentValsetRequest>): QueryCurrentValsetRequest {
    const message = createBaseQueryCurrentValsetRequest();
    return message;
  },
  fromAmino(_: QueryCurrentValsetRequestAmino): QueryCurrentValsetRequest {
    return {};
  },
  toAmino(_: QueryCurrentValsetRequest): QueryCurrentValsetRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCurrentValsetRequestAminoMsg): QueryCurrentValsetRequest {
    return QueryCurrentValsetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentValsetRequestProtoMsg): QueryCurrentValsetRequest {
    return QueryCurrentValsetRequest.decode(message.value);
  },
  toProto(message: QueryCurrentValsetRequest): Uint8Array {
    return QueryCurrentValsetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentValsetRequest): QueryCurrentValsetRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryCurrentValsetRequest",
      value: QueryCurrentValsetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentValsetResponse(): QueryCurrentValsetResponse {
  return {
    valset: undefined
  };
}
export const QueryCurrentValsetResponse = {
  typeUrl: "/injective.peggy.v1.QueryCurrentValsetResponse",
  encode(message: QueryCurrentValsetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valset !== undefined) {
      Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentValsetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentValsetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valset = Valset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCurrentValsetResponse>): QueryCurrentValsetResponse {
    const message = createBaseQueryCurrentValsetResponse();
    message.valset = object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
    return message;
  },
  fromAmino(object: QueryCurrentValsetResponseAmino): QueryCurrentValsetResponse {
    return {
      valset: object?.valset ? Valset.fromAmino(object.valset) : undefined
    };
  },
  toAmino(message: QueryCurrentValsetResponse): QueryCurrentValsetResponseAmino {
    const obj: any = {};
    obj.valset = message.valset ? Valset.toAmino(message.valset) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentValsetResponseAminoMsg): QueryCurrentValsetResponse {
    return QueryCurrentValsetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentValsetResponseProtoMsg): QueryCurrentValsetResponse {
    return QueryCurrentValsetResponse.decode(message.value);
  },
  toProto(message: QueryCurrentValsetResponse): Uint8Array {
    return QueryCurrentValsetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentValsetResponse): QueryCurrentValsetResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryCurrentValsetResponse",
      value: QueryCurrentValsetResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValsetRequestRequest(): QueryValsetRequestRequest {
  return {
    nonce: BigInt(0)
  };
}
export const QueryValsetRequestRequest = {
  typeUrl: "/injective.peggy.v1.QueryValsetRequestRequest",
  encode(message: QueryValsetRequestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetRequestRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValsetRequestRequest>): QueryValsetRequestRequest {
    const message = createBaseQueryValsetRequestRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryValsetRequestRequestAmino): QueryValsetRequestRequest {
    return {
      nonce: BigInt(object.nonce)
    };
  },
  toAmino(message: QueryValsetRequestRequest): QueryValsetRequestRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValsetRequestRequestAminoMsg): QueryValsetRequestRequest {
    return QueryValsetRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetRequestRequestProtoMsg): QueryValsetRequestRequest {
    return QueryValsetRequestRequest.decode(message.value);
  },
  toProto(message: QueryValsetRequestRequest): Uint8Array {
    return QueryValsetRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetRequestRequest): QueryValsetRequestRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryValsetRequestRequest",
      value: QueryValsetRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValsetRequestResponse(): QueryValsetRequestResponse {
  return {
    valset: undefined
  };
}
export const QueryValsetRequestResponse = {
  typeUrl: "/injective.peggy.v1.QueryValsetRequestResponse",
  encode(message: QueryValsetRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valset !== undefined) {
      Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valset = Valset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValsetRequestResponse>): QueryValsetRequestResponse {
    const message = createBaseQueryValsetRequestResponse();
    message.valset = object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
    return message;
  },
  fromAmino(object: QueryValsetRequestResponseAmino): QueryValsetRequestResponse {
    return {
      valset: object?.valset ? Valset.fromAmino(object.valset) : undefined
    };
  },
  toAmino(message: QueryValsetRequestResponse): QueryValsetRequestResponseAmino {
    const obj: any = {};
    obj.valset = message.valset ? Valset.toAmino(message.valset) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValsetRequestResponseAminoMsg): QueryValsetRequestResponse {
    return QueryValsetRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetRequestResponseProtoMsg): QueryValsetRequestResponse {
    return QueryValsetRequestResponse.decode(message.value);
  },
  toProto(message: QueryValsetRequestResponse): Uint8Array {
    return QueryValsetRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetRequestResponse): QueryValsetRequestResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryValsetRequestResponse",
      value: QueryValsetRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValsetConfirmRequest(): QueryValsetConfirmRequest {
  return {
    nonce: BigInt(0),
    address: ""
  };
}
export const QueryValsetConfirmRequest = {
  typeUrl: "/injective.peggy.v1.QueryValsetConfirmRequest",
  encode(message: QueryValsetConfirmRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetConfirmRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValsetConfirmRequest>): QueryValsetConfirmRequest {
    const message = createBaseQueryValsetConfirmRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryValsetConfirmRequestAmino): QueryValsetConfirmRequest {
    return {
      nonce: BigInt(object.nonce),
      address: object.address
    };
  },
  toAmino(message: QueryValsetConfirmRequest): QueryValsetConfirmRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryValsetConfirmRequestAminoMsg): QueryValsetConfirmRequest {
    return QueryValsetConfirmRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetConfirmRequestProtoMsg): QueryValsetConfirmRequest {
    return QueryValsetConfirmRequest.decode(message.value);
  },
  toProto(message: QueryValsetConfirmRequest): Uint8Array {
    return QueryValsetConfirmRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetConfirmRequest): QueryValsetConfirmRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryValsetConfirmRequest",
      value: QueryValsetConfirmRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValsetConfirmResponse(): QueryValsetConfirmResponse {
  return {
    confirm: undefined
  };
}
export const QueryValsetConfirmResponse = {
  typeUrl: "/injective.peggy.v1.QueryValsetConfirmResponse",
  encode(message: QueryValsetConfirmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.confirm !== undefined) {
      MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetConfirmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirm = MsgValsetConfirm.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValsetConfirmResponse>): QueryValsetConfirmResponse {
    const message = createBaseQueryValsetConfirmResponse();
    message.confirm = object.confirm !== undefined && object.confirm !== null ? MsgValsetConfirm.fromPartial(object.confirm) : undefined;
    return message;
  },
  fromAmino(object: QueryValsetConfirmResponseAmino): QueryValsetConfirmResponse {
    return {
      confirm: object?.confirm ? MsgValsetConfirm.fromAmino(object.confirm) : undefined
    };
  },
  toAmino(message: QueryValsetConfirmResponse): QueryValsetConfirmResponseAmino {
    const obj: any = {};
    obj.confirm = message.confirm ? MsgValsetConfirm.toAmino(message.confirm) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValsetConfirmResponseAminoMsg): QueryValsetConfirmResponse {
    return QueryValsetConfirmResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetConfirmResponseProtoMsg): QueryValsetConfirmResponse {
    return QueryValsetConfirmResponse.decode(message.value);
  },
  toProto(message: QueryValsetConfirmResponse): Uint8Array {
    return QueryValsetConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetConfirmResponse): QueryValsetConfirmResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryValsetConfirmResponse",
      value: QueryValsetConfirmResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValsetConfirmsByNonceRequest(): QueryValsetConfirmsByNonceRequest {
  return {
    nonce: BigInt(0)
  };
}
export const QueryValsetConfirmsByNonceRequest = {
  typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceRequest",
  encode(message: QueryValsetConfirmsByNonceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetConfirmsByNonceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmsByNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValsetConfirmsByNonceRequest>): QueryValsetConfirmsByNonceRequest {
    const message = createBaseQueryValsetConfirmsByNonceRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryValsetConfirmsByNonceRequestAmino): QueryValsetConfirmsByNonceRequest {
    return {
      nonce: BigInt(object.nonce)
    };
  },
  toAmino(message: QueryValsetConfirmsByNonceRequest): QueryValsetConfirmsByNonceRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValsetConfirmsByNonceRequestAminoMsg): QueryValsetConfirmsByNonceRequest {
    return QueryValsetConfirmsByNonceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetConfirmsByNonceRequestProtoMsg): QueryValsetConfirmsByNonceRequest {
    return QueryValsetConfirmsByNonceRequest.decode(message.value);
  },
  toProto(message: QueryValsetConfirmsByNonceRequest): Uint8Array {
    return QueryValsetConfirmsByNonceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetConfirmsByNonceRequest): QueryValsetConfirmsByNonceRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceRequest",
      value: QueryValsetConfirmsByNonceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValsetConfirmsByNonceResponse(): QueryValsetConfirmsByNonceResponse {
  return {
    confirms: []
  };
}
export const QueryValsetConfirmsByNonceResponse = {
  typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceResponse",
  encode(message: QueryValsetConfirmsByNonceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.confirms) {
      MsgValsetConfirm.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValsetConfirmsByNonceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmsByNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValsetConfirmsByNonceResponse>): QueryValsetConfirmsByNonceResponse {
    const message = createBaseQueryValsetConfirmsByNonceResponse();
    message.confirms = object.confirms?.map(e => MsgValsetConfirm.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryValsetConfirmsByNonceResponseAmino): QueryValsetConfirmsByNonceResponse {
    return {
      confirms: Array.isArray(object?.confirms) ? object.confirms.map((e: any) => MsgValsetConfirm.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryValsetConfirmsByNonceResponse): QueryValsetConfirmsByNonceResponseAmino {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map(e => e ? MsgValsetConfirm.toAmino(e) : undefined);
    } else {
      obj.confirms = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryValsetConfirmsByNonceResponseAminoMsg): QueryValsetConfirmsByNonceResponse {
    return QueryValsetConfirmsByNonceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetConfirmsByNonceResponseProtoMsg): QueryValsetConfirmsByNonceResponse {
    return QueryValsetConfirmsByNonceResponse.decode(message.value);
  },
  toProto(message: QueryValsetConfirmsByNonceResponse): Uint8Array {
    return QueryValsetConfirmsByNonceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetConfirmsByNonceResponse): QueryValsetConfirmsByNonceResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceResponse",
      value: QueryValsetConfirmsByNonceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastValsetRequestsRequest(): QueryLastValsetRequestsRequest {
  return {};
}
export const QueryLastValsetRequestsRequest = {
  typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsRequest",
  encode(_: QueryLastValsetRequestsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastValsetRequestsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastValsetRequestsRequest();
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
  fromPartial(_: Partial<QueryLastValsetRequestsRequest>): QueryLastValsetRequestsRequest {
    const message = createBaseQueryLastValsetRequestsRequest();
    return message;
  },
  fromAmino(_: QueryLastValsetRequestsRequestAmino): QueryLastValsetRequestsRequest {
    return {};
  },
  toAmino(_: QueryLastValsetRequestsRequest): QueryLastValsetRequestsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLastValsetRequestsRequestAminoMsg): QueryLastValsetRequestsRequest {
    return QueryLastValsetRequestsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastValsetRequestsRequestProtoMsg): QueryLastValsetRequestsRequest {
    return QueryLastValsetRequestsRequest.decode(message.value);
  },
  toProto(message: QueryLastValsetRequestsRequest): Uint8Array {
    return QueryLastValsetRequestsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastValsetRequestsRequest): QueryLastValsetRequestsRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsRequest",
      value: QueryLastValsetRequestsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastValsetRequestsResponse(): QueryLastValsetRequestsResponse {
  return {
    valsets: []
  };
}
export const QueryLastValsetRequestsResponse = {
  typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsResponse",
  encode(message: QueryLastValsetRequestsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastValsetRequestsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastValsetRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valsets.push(Valset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLastValsetRequestsResponse>): QueryLastValsetRequestsResponse {
    const message = createBaseQueryLastValsetRequestsResponse();
    message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryLastValsetRequestsResponseAmino): QueryLastValsetRequestsResponse {
    return {
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryLastValsetRequestsResponse): QueryLastValsetRequestsResponseAmino {
    const obj: any = {};
    if (message.valsets) {
      obj.valsets = message.valsets.map(e => e ? Valset.toAmino(e) : undefined);
    } else {
      obj.valsets = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryLastValsetRequestsResponseAminoMsg): QueryLastValsetRequestsResponse {
    return QueryLastValsetRequestsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastValsetRequestsResponseProtoMsg): QueryLastValsetRequestsResponse {
    return QueryLastValsetRequestsResponse.decode(message.value);
  },
  toProto(message: QueryLastValsetRequestsResponse): Uint8Array {
    return QueryLastValsetRequestsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastValsetRequestsResponse): QueryLastValsetRequestsResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsResponse",
      value: QueryLastValsetRequestsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastPendingValsetRequestByAddrRequest(): QueryLastPendingValsetRequestByAddrRequest {
  return {
    address: ""
  };
}
export const QueryLastPendingValsetRequestByAddrRequest = {
  typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest",
  encode(message: QueryLastPendingValsetRequestByAddrRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLastPendingValsetRequestByAddrRequest>): QueryLastPendingValsetRequestByAddrRequest {
    const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryLastPendingValsetRequestByAddrRequestAmino): QueryLastPendingValsetRequestByAddrRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryLastPendingValsetRequestByAddrRequest): QueryLastPendingValsetRequestByAddrRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryLastPendingValsetRequestByAddrRequestAminoMsg): QueryLastPendingValsetRequestByAddrRequest {
    return QueryLastPendingValsetRequestByAddrRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastPendingValsetRequestByAddrRequestProtoMsg): QueryLastPendingValsetRequestByAddrRequest {
    return QueryLastPendingValsetRequestByAddrRequest.decode(message.value);
  },
  toProto(message: QueryLastPendingValsetRequestByAddrRequest): Uint8Array {
    return QueryLastPendingValsetRequestByAddrRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastPendingValsetRequestByAddrRequest): QueryLastPendingValsetRequestByAddrRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest",
      value: QueryLastPendingValsetRequestByAddrRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastPendingValsetRequestByAddrResponse(): QueryLastPendingValsetRequestByAddrResponse {
  return {
    valsets: []
  };
}
export const QueryLastPendingValsetRequestByAddrResponse = {
  typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse",
  encode(message: QueryLastPendingValsetRequestByAddrResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valsets.push(Valset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLastPendingValsetRequestByAddrResponse>): QueryLastPendingValsetRequestByAddrResponse {
    const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
    message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryLastPendingValsetRequestByAddrResponseAmino): QueryLastPendingValsetRequestByAddrResponse {
    return {
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryLastPendingValsetRequestByAddrResponse): QueryLastPendingValsetRequestByAddrResponseAmino {
    const obj: any = {};
    if (message.valsets) {
      obj.valsets = message.valsets.map(e => e ? Valset.toAmino(e) : undefined);
    } else {
      obj.valsets = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryLastPendingValsetRequestByAddrResponseAminoMsg): QueryLastPendingValsetRequestByAddrResponse {
    return QueryLastPendingValsetRequestByAddrResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastPendingValsetRequestByAddrResponseProtoMsg): QueryLastPendingValsetRequestByAddrResponse {
    return QueryLastPendingValsetRequestByAddrResponse.decode(message.value);
  },
  toProto(message: QueryLastPendingValsetRequestByAddrResponse): Uint8Array {
    return QueryLastPendingValsetRequestByAddrResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastPendingValsetRequestByAddrResponse): QueryLastPendingValsetRequestByAddrResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse",
      value: QueryLastPendingValsetRequestByAddrResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBatchFeeRequest(): QueryBatchFeeRequest {
  return {};
}
export const QueryBatchFeeRequest = {
  typeUrl: "/injective.peggy.v1.QueryBatchFeeRequest",
  encode(_: QueryBatchFeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchFeeRequest();
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
  fromPartial(_: Partial<QueryBatchFeeRequest>): QueryBatchFeeRequest {
    const message = createBaseQueryBatchFeeRequest();
    return message;
  },
  fromAmino(_: QueryBatchFeeRequestAmino): QueryBatchFeeRequest {
    return {};
  },
  toAmino(_: QueryBatchFeeRequest): QueryBatchFeeRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBatchFeeRequestAminoMsg): QueryBatchFeeRequest {
    return QueryBatchFeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchFeeRequestProtoMsg): QueryBatchFeeRequest {
    return QueryBatchFeeRequest.decode(message.value);
  },
  toProto(message: QueryBatchFeeRequest): Uint8Array {
    return QueryBatchFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchFeeRequest): QueryBatchFeeRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryBatchFeeRequest",
      value: QueryBatchFeeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBatchFeeResponse(): QueryBatchFeeResponse {
  return {
    batchFees: []
  };
}
export const QueryBatchFeeResponse = {
  typeUrl: "/injective.peggy.v1.QueryBatchFeeResponse",
  encode(message: QueryBatchFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.batchFees) {
      BatchFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchFees.push(BatchFees.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBatchFeeResponse>): QueryBatchFeeResponse {
    const message = createBaseQueryBatchFeeResponse();
    message.batchFees = object.batchFees?.map(e => BatchFees.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBatchFeeResponseAmino): QueryBatchFeeResponse {
    return {
      batchFees: Array.isArray(object?.batchFees) ? object.batchFees.map((e: any) => BatchFees.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryBatchFeeResponse): QueryBatchFeeResponseAmino {
    const obj: any = {};
    if (message.batchFees) {
      obj.batchFees = message.batchFees.map(e => e ? BatchFees.toAmino(e) : undefined);
    } else {
      obj.batchFees = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryBatchFeeResponseAminoMsg): QueryBatchFeeResponse {
    return QueryBatchFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchFeeResponseProtoMsg): QueryBatchFeeResponse {
    return QueryBatchFeeResponse.decode(message.value);
  },
  toProto(message: QueryBatchFeeResponse): Uint8Array {
    return QueryBatchFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchFeeResponse): QueryBatchFeeResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryBatchFeeResponse",
      value: QueryBatchFeeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastPendingBatchRequestByAddrRequest(): QueryLastPendingBatchRequestByAddrRequest {
  return {
    address: ""
  };
}
export const QueryLastPendingBatchRequestByAddrRequest = {
  typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest",
  encode(message: QueryLastPendingBatchRequestByAddrRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLastPendingBatchRequestByAddrRequest>): QueryLastPendingBatchRequestByAddrRequest {
    const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryLastPendingBatchRequestByAddrRequestAmino): QueryLastPendingBatchRequestByAddrRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryLastPendingBatchRequestByAddrRequest): QueryLastPendingBatchRequestByAddrRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryLastPendingBatchRequestByAddrRequestAminoMsg): QueryLastPendingBatchRequestByAddrRequest {
    return QueryLastPendingBatchRequestByAddrRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastPendingBatchRequestByAddrRequestProtoMsg): QueryLastPendingBatchRequestByAddrRequest {
    return QueryLastPendingBatchRequestByAddrRequest.decode(message.value);
  },
  toProto(message: QueryLastPendingBatchRequestByAddrRequest): Uint8Array {
    return QueryLastPendingBatchRequestByAddrRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastPendingBatchRequestByAddrRequest): QueryLastPendingBatchRequestByAddrRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest",
      value: QueryLastPendingBatchRequestByAddrRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastPendingBatchRequestByAddrResponse(): QueryLastPendingBatchRequestByAddrResponse {
  return {
    batch: undefined
  };
}
export const QueryLastPendingBatchRequestByAddrResponse = {
  typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse",
  encode(message: QueryLastPendingBatchRequestByAddrResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batch !== undefined) {
      OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLastPendingBatchRequestByAddrResponse>): QueryLastPendingBatchRequestByAddrResponse {
    const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
    message.batch = object.batch !== undefined && object.batch !== null ? OutgoingTxBatch.fromPartial(object.batch) : undefined;
    return message;
  },
  fromAmino(object: QueryLastPendingBatchRequestByAddrResponseAmino): QueryLastPendingBatchRequestByAddrResponse {
    return {
      batch: object?.batch ? OutgoingTxBatch.fromAmino(object.batch) : undefined
    };
  },
  toAmino(message: QueryLastPendingBatchRequestByAddrResponse): QueryLastPendingBatchRequestByAddrResponseAmino {
    const obj: any = {};
    obj.batch = message.batch ? OutgoingTxBatch.toAmino(message.batch) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLastPendingBatchRequestByAddrResponseAminoMsg): QueryLastPendingBatchRequestByAddrResponse {
    return QueryLastPendingBatchRequestByAddrResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastPendingBatchRequestByAddrResponseProtoMsg): QueryLastPendingBatchRequestByAddrResponse {
    return QueryLastPendingBatchRequestByAddrResponse.decode(message.value);
  },
  toProto(message: QueryLastPendingBatchRequestByAddrResponse): Uint8Array {
    return QueryLastPendingBatchRequestByAddrResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastPendingBatchRequestByAddrResponse): QueryLastPendingBatchRequestByAddrResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse",
      value: QueryLastPendingBatchRequestByAddrResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOutgoingTxBatchesRequest(): QueryOutgoingTxBatchesRequest {
  return {};
}
export const QueryOutgoingTxBatchesRequest = {
  typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesRequest",
  encode(_: QueryOutgoingTxBatchesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOutgoingTxBatchesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutgoingTxBatchesRequest();
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
  fromPartial(_: Partial<QueryOutgoingTxBatchesRequest>): QueryOutgoingTxBatchesRequest {
    const message = createBaseQueryOutgoingTxBatchesRequest();
    return message;
  },
  fromAmino(_: QueryOutgoingTxBatchesRequestAmino): QueryOutgoingTxBatchesRequest {
    return {};
  },
  toAmino(_: QueryOutgoingTxBatchesRequest): QueryOutgoingTxBatchesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryOutgoingTxBatchesRequestAminoMsg): QueryOutgoingTxBatchesRequest {
    return QueryOutgoingTxBatchesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutgoingTxBatchesRequestProtoMsg): QueryOutgoingTxBatchesRequest {
    return QueryOutgoingTxBatchesRequest.decode(message.value);
  },
  toProto(message: QueryOutgoingTxBatchesRequest): Uint8Array {
    return QueryOutgoingTxBatchesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOutgoingTxBatchesRequest): QueryOutgoingTxBatchesRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesRequest",
      value: QueryOutgoingTxBatchesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOutgoingTxBatchesResponse(): QueryOutgoingTxBatchesResponse {
  return {
    batches: []
  };
}
export const QueryOutgoingTxBatchesResponse = {
  typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesResponse",
  encode(message: QueryOutgoingTxBatchesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.batches) {
      OutgoingTxBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOutgoingTxBatchesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutgoingTxBatchesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOutgoingTxBatchesResponse>): QueryOutgoingTxBatchesResponse {
    const message = createBaseQueryOutgoingTxBatchesResponse();
    message.batches = object.batches?.map(e => OutgoingTxBatch.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryOutgoingTxBatchesResponseAmino): QueryOutgoingTxBatchesResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => OutgoingTxBatch.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryOutgoingTxBatchesResponse): QueryOutgoingTxBatchesResponseAmino {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? OutgoingTxBatch.toAmino(e) : undefined);
    } else {
      obj.batches = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryOutgoingTxBatchesResponseAminoMsg): QueryOutgoingTxBatchesResponse {
    return QueryOutgoingTxBatchesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutgoingTxBatchesResponseProtoMsg): QueryOutgoingTxBatchesResponse {
    return QueryOutgoingTxBatchesResponse.decode(message.value);
  },
  toProto(message: QueryOutgoingTxBatchesResponse): Uint8Array {
    return QueryOutgoingTxBatchesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOutgoingTxBatchesResponse): QueryOutgoingTxBatchesResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesResponse",
      value: QueryOutgoingTxBatchesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBatchRequestByNonceRequest(): QueryBatchRequestByNonceRequest {
  return {
    nonce: BigInt(0),
    contractAddress: ""
  };
}
export const QueryBatchRequestByNonceRequest = {
  typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceRequest",
  encode(message: QueryBatchRequestByNonceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchRequestByNonceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchRequestByNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBatchRequestByNonceRequest>): QueryBatchRequestByNonceRequest {
    const message = createBaseQueryBatchRequestByNonceRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryBatchRequestByNonceRequestAmino): QueryBatchRequestByNonceRequest {
    return {
      nonce: BigInt(object.nonce),
      contractAddress: object.contract_address
    };
  },
  toAmino(message: QueryBatchRequestByNonceRequest): QueryBatchRequestByNonceRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryBatchRequestByNonceRequestAminoMsg): QueryBatchRequestByNonceRequest {
    return QueryBatchRequestByNonceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchRequestByNonceRequestProtoMsg): QueryBatchRequestByNonceRequest {
    return QueryBatchRequestByNonceRequest.decode(message.value);
  },
  toProto(message: QueryBatchRequestByNonceRequest): Uint8Array {
    return QueryBatchRequestByNonceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchRequestByNonceRequest): QueryBatchRequestByNonceRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceRequest",
      value: QueryBatchRequestByNonceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBatchRequestByNonceResponse(): QueryBatchRequestByNonceResponse {
  return {
    batch: undefined
  };
}
export const QueryBatchRequestByNonceResponse = {
  typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceResponse",
  encode(message: QueryBatchRequestByNonceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batch !== undefined) {
      OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchRequestByNonceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchRequestByNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBatchRequestByNonceResponse>): QueryBatchRequestByNonceResponse {
    const message = createBaseQueryBatchRequestByNonceResponse();
    message.batch = object.batch !== undefined && object.batch !== null ? OutgoingTxBatch.fromPartial(object.batch) : undefined;
    return message;
  },
  fromAmino(object: QueryBatchRequestByNonceResponseAmino): QueryBatchRequestByNonceResponse {
    return {
      batch: object?.batch ? OutgoingTxBatch.fromAmino(object.batch) : undefined
    };
  },
  toAmino(message: QueryBatchRequestByNonceResponse): QueryBatchRequestByNonceResponseAmino {
    const obj: any = {};
    obj.batch = message.batch ? OutgoingTxBatch.toAmino(message.batch) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBatchRequestByNonceResponseAminoMsg): QueryBatchRequestByNonceResponse {
    return QueryBatchRequestByNonceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchRequestByNonceResponseProtoMsg): QueryBatchRequestByNonceResponse {
    return QueryBatchRequestByNonceResponse.decode(message.value);
  },
  toProto(message: QueryBatchRequestByNonceResponse): Uint8Array {
    return QueryBatchRequestByNonceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchRequestByNonceResponse): QueryBatchRequestByNonceResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceResponse",
      value: QueryBatchRequestByNonceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBatchConfirmsRequest(): QueryBatchConfirmsRequest {
  return {
    nonce: BigInt(0),
    contractAddress: ""
  };
}
export const QueryBatchConfirmsRequest = {
  typeUrl: "/injective.peggy.v1.QueryBatchConfirmsRequest",
  encode(message: QueryBatchConfirmsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchConfirmsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchConfirmsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBatchConfirmsRequest>): QueryBatchConfirmsRequest {
    const message = createBaseQueryBatchConfirmsRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryBatchConfirmsRequestAmino): QueryBatchConfirmsRequest {
    return {
      nonce: BigInt(object.nonce),
      contractAddress: object.contract_address
    };
  },
  toAmino(message: QueryBatchConfirmsRequest): QueryBatchConfirmsRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryBatchConfirmsRequestAminoMsg): QueryBatchConfirmsRequest {
    return QueryBatchConfirmsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchConfirmsRequestProtoMsg): QueryBatchConfirmsRequest {
    return QueryBatchConfirmsRequest.decode(message.value);
  },
  toProto(message: QueryBatchConfirmsRequest): Uint8Array {
    return QueryBatchConfirmsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchConfirmsRequest): QueryBatchConfirmsRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryBatchConfirmsRequest",
      value: QueryBatchConfirmsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBatchConfirmsResponse(): QueryBatchConfirmsResponse {
  return {
    confirms: []
  };
}
export const QueryBatchConfirmsResponse = {
  typeUrl: "/injective.peggy.v1.QueryBatchConfirmsResponse",
  encode(message: QueryBatchConfirmsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.confirms) {
      MsgConfirmBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBatchConfirmsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchConfirmsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBatchConfirmsResponse>): QueryBatchConfirmsResponse {
    const message = createBaseQueryBatchConfirmsResponse();
    message.confirms = object.confirms?.map(e => MsgConfirmBatch.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBatchConfirmsResponseAmino): QueryBatchConfirmsResponse {
    return {
      confirms: Array.isArray(object?.confirms) ? object.confirms.map((e: any) => MsgConfirmBatch.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryBatchConfirmsResponse): QueryBatchConfirmsResponseAmino {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map(e => e ? MsgConfirmBatch.toAmino(e) : undefined);
    } else {
      obj.confirms = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryBatchConfirmsResponseAminoMsg): QueryBatchConfirmsResponse {
    return QueryBatchConfirmsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchConfirmsResponseProtoMsg): QueryBatchConfirmsResponse {
    return QueryBatchConfirmsResponse.decode(message.value);
  },
  toProto(message: QueryBatchConfirmsResponse): Uint8Array {
    return QueryBatchConfirmsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchConfirmsResponse): QueryBatchConfirmsResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryBatchConfirmsResponse",
      value: QueryBatchConfirmsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastEventByAddrRequest(): QueryLastEventByAddrRequest {
  return {
    address: ""
  };
}
export const QueryLastEventByAddrRequest = {
  typeUrl: "/injective.peggy.v1.QueryLastEventByAddrRequest",
  encode(message: QueryLastEventByAddrRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastEventByAddrRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastEventByAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLastEventByAddrRequest>): QueryLastEventByAddrRequest {
    const message = createBaseQueryLastEventByAddrRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryLastEventByAddrRequestAmino): QueryLastEventByAddrRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryLastEventByAddrRequest): QueryLastEventByAddrRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryLastEventByAddrRequestAminoMsg): QueryLastEventByAddrRequest {
    return QueryLastEventByAddrRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastEventByAddrRequestProtoMsg): QueryLastEventByAddrRequest {
    return QueryLastEventByAddrRequest.decode(message.value);
  },
  toProto(message: QueryLastEventByAddrRequest): Uint8Array {
    return QueryLastEventByAddrRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastEventByAddrRequest): QueryLastEventByAddrRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryLastEventByAddrRequest",
      value: QueryLastEventByAddrRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastEventByAddrResponse(): QueryLastEventByAddrResponse {
  return {
    lastClaimEvent: undefined
  };
}
export const QueryLastEventByAddrResponse = {
  typeUrl: "/injective.peggy.v1.QueryLastEventByAddrResponse",
  encode(message: QueryLastEventByAddrResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lastClaimEvent !== undefined) {
      LastClaimEvent.encode(message.lastClaimEvent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastEventByAddrResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastEventByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastClaimEvent = LastClaimEvent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLastEventByAddrResponse>): QueryLastEventByAddrResponse {
    const message = createBaseQueryLastEventByAddrResponse();
    message.lastClaimEvent = object.lastClaimEvent !== undefined && object.lastClaimEvent !== null ? LastClaimEvent.fromPartial(object.lastClaimEvent) : undefined;
    return message;
  },
  fromAmino(object: QueryLastEventByAddrResponseAmino): QueryLastEventByAddrResponse {
    return {
      lastClaimEvent: object?.last_claim_event ? LastClaimEvent.fromAmino(object.last_claim_event) : undefined
    };
  },
  toAmino(message: QueryLastEventByAddrResponse): QueryLastEventByAddrResponseAmino {
    const obj: any = {};
    obj.last_claim_event = message.lastClaimEvent ? LastClaimEvent.toAmino(message.lastClaimEvent) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLastEventByAddrResponseAminoMsg): QueryLastEventByAddrResponse {
    return QueryLastEventByAddrResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastEventByAddrResponseProtoMsg): QueryLastEventByAddrResponse {
    return QueryLastEventByAddrResponse.decode(message.value);
  },
  toProto(message: QueryLastEventByAddrResponse): Uint8Array {
    return QueryLastEventByAddrResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastEventByAddrResponse): QueryLastEventByAddrResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryLastEventByAddrResponse",
      value: QueryLastEventByAddrResponse.encode(message).finish()
    };
  }
};
function createBaseQueryERC20ToDenomRequest(): QueryERC20ToDenomRequest {
  return {
    erc20: ""
  };
}
export const QueryERC20ToDenomRequest = {
  typeUrl: "/injective.peggy.v1.QueryERC20ToDenomRequest",
  encode(message: QueryERC20ToDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryERC20ToDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryERC20ToDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryERC20ToDenomRequest>): QueryERC20ToDenomRequest {
    const message = createBaseQueryERC20ToDenomRequest();
    message.erc20 = object.erc20 ?? "";
    return message;
  },
  fromAmino(object: QueryERC20ToDenomRequestAmino): QueryERC20ToDenomRequest {
    return {
      erc20: object.erc20
    };
  },
  toAmino(message: QueryERC20ToDenomRequest): QueryERC20ToDenomRequestAmino {
    const obj: any = {};
    obj.erc20 = message.erc20;
    return obj;
  },
  fromAminoMsg(object: QueryERC20ToDenomRequestAminoMsg): QueryERC20ToDenomRequest {
    return QueryERC20ToDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryERC20ToDenomRequestProtoMsg): QueryERC20ToDenomRequest {
    return QueryERC20ToDenomRequest.decode(message.value);
  },
  toProto(message: QueryERC20ToDenomRequest): Uint8Array {
    return QueryERC20ToDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryERC20ToDenomRequest): QueryERC20ToDenomRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryERC20ToDenomRequest",
      value: QueryERC20ToDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryERC20ToDenomResponse(): QueryERC20ToDenomResponse {
  return {
    denom: "",
    cosmosOriginated: false
  };
}
export const QueryERC20ToDenomResponse = {
  typeUrl: "/injective.peggy.v1.QueryERC20ToDenomResponse",
  encode(message: QueryERC20ToDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.cosmosOriginated === true) {
      writer.uint32(16).bool(message.cosmosOriginated);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryERC20ToDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryERC20ToDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.cosmosOriginated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryERC20ToDenomResponse>): QueryERC20ToDenomResponse {
    const message = createBaseQueryERC20ToDenomResponse();
    message.denom = object.denom ?? "";
    message.cosmosOriginated = object.cosmosOriginated ?? false;
    return message;
  },
  fromAmino(object: QueryERC20ToDenomResponseAmino): QueryERC20ToDenomResponse {
    return {
      denom: object.denom,
      cosmosOriginated: object.cosmos_originated
    };
  },
  toAmino(message: QueryERC20ToDenomResponse): QueryERC20ToDenomResponseAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.cosmos_originated = message.cosmosOriginated;
    return obj;
  },
  fromAminoMsg(object: QueryERC20ToDenomResponseAminoMsg): QueryERC20ToDenomResponse {
    return QueryERC20ToDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryERC20ToDenomResponseProtoMsg): QueryERC20ToDenomResponse {
    return QueryERC20ToDenomResponse.decode(message.value);
  },
  toProto(message: QueryERC20ToDenomResponse): Uint8Array {
    return QueryERC20ToDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryERC20ToDenomResponse): QueryERC20ToDenomResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryERC20ToDenomResponse",
      value: QueryERC20ToDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomToERC20Request(): QueryDenomToERC20Request {
  return {
    denom: ""
  };
}
export const QueryDenomToERC20Request = {
  typeUrl: "/injective.peggy.v1.QueryDenomToERC20Request",
  encode(message: QueryDenomToERC20Request, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomToERC20Request {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomToERC20Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomToERC20Request>): QueryDenomToERC20Request {
    const message = createBaseQueryDenomToERC20Request();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryDenomToERC20RequestAmino): QueryDenomToERC20Request {
    return {
      denom: object.denom
    };
  },
  toAmino(message: QueryDenomToERC20Request): QueryDenomToERC20RequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryDenomToERC20RequestAminoMsg): QueryDenomToERC20Request {
    return QueryDenomToERC20Request.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomToERC20RequestProtoMsg): QueryDenomToERC20Request {
    return QueryDenomToERC20Request.decode(message.value);
  },
  toProto(message: QueryDenomToERC20Request): Uint8Array {
    return QueryDenomToERC20Request.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomToERC20Request): QueryDenomToERC20RequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryDenomToERC20Request",
      value: QueryDenomToERC20Request.encode(message).finish()
    };
  }
};
function createBaseQueryDenomToERC20Response(): QueryDenomToERC20Response {
  return {
    erc20: "",
    cosmosOriginated: false
  };
}
export const QueryDenomToERC20Response = {
  typeUrl: "/injective.peggy.v1.QueryDenomToERC20Response",
  encode(message: QueryDenomToERC20Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    if (message.cosmosOriginated === true) {
      writer.uint32(16).bool(message.cosmosOriginated);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomToERC20Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomToERC20Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20 = reader.string();
          break;
        case 2:
          message.cosmosOriginated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomToERC20Response>): QueryDenomToERC20Response {
    const message = createBaseQueryDenomToERC20Response();
    message.erc20 = object.erc20 ?? "";
    message.cosmosOriginated = object.cosmosOriginated ?? false;
    return message;
  },
  fromAmino(object: QueryDenomToERC20ResponseAmino): QueryDenomToERC20Response {
    return {
      erc20: object.erc20,
      cosmosOriginated: object.cosmos_originated
    };
  },
  toAmino(message: QueryDenomToERC20Response): QueryDenomToERC20ResponseAmino {
    const obj: any = {};
    obj.erc20 = message.erc20;
    obj.cosmos_originated = message.cosmosOriginated;
    return obj;
  },
  fromAminoMsg(object: QueryDenomToERC20ResponseAminoMsg): QueryDenomToERC20Response {
    return QueryDenomToERC20Response.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomToERC20ResponseProtoMsg): QueryDenomToERC20Response {
    return QueryDenomToERC20Response.decode(message.value);
  },
  toProto(message: QueryDenomToERC20Response): Uint8Array {
    return QueryDenomToERC20Response.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomToERC20Response): QueryDenomToERC20ResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryDenomToERC20Response",
      value: QueryDenomToERC20Response.encode(message).finish()
    };
  }
};
function createBaseQueryDelegateKeysByValidatorAddress(): QueryDelegateKeysByValidatorAddress {
  return {
    validatorAddress: ""
  };
}
export const QueryDelegateKeysByValidatorAddress = {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddress",
  encode(message: QueryDelegateKeysByValidatorAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByValidatorAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegateKeysByValidatorAddress>): QueryDelegateKeysByValidatorAddress {
    const message = createBaseQueryDelegateKeysByValidatorAddress();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByValidatorAddressAmino): QueryDelegateKeysByValidatorAddress {
    return {
      validatorAddress: object.validator_address
    };
  },
  toAmino(message: QueryDelegateKeysByValidatorAddress): QueryDelegateKeysByValidatorAddressAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByValidatorAddressAminoMsg): QueryDelegateKeysByValidatorAddress {
    return QueryDelegateKeysByValidatorAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByValidatorAddressProtoMsg): QueryDelegateKeysByValidatorAddress {
    return QueryDelegateKeysByValidatorAddress.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByValidatorAddress): Uint8Array {
    return QueryDelegateKeysByValidatorAddress.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByValidatorAddress): QueryDelegateKeysByValidatorAddressProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddress",
      value: QueryDelegateKeysByValidatorAddress.encode(message).finish()
    };
  }
};
function createBaseQueryDelegateKeysByValidatorAddressResponse(): QueryDelegateKeysByValidatorAddressResponse {
  return {
    ethAddress: "",
    orchestratorAddress: ""
  };
}
export const QueryDelegateKeysByValidatorAddressResponse = {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse",
  encode(message: QueryDelegateKeysByValidatorAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ethAddress = reader.string();
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
  fromPartial(object: Partial<QueryDelegateKeysByValidatorAddressResponse>): QueryDelegateKeysByValidatorAddressResponse {
    const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
    message.ethAddress = object.ethAddress ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByValidatorAddressResponseAmino): QueryDelegateKeysByValidatorAddressResponse {
    return {
      ethAddress: object.eth_address,
      orchestratorAddress: object.orchestrator_address
    };
  },
  toAmino(message: QueryDelegateKeysByValidatorAddressResponse): QueryDelegateKeysByValidatorAddressResponseAmino {
    const obj: any = {};
    obj.eth_address = message.ethAddress;
    obj.orchestrator_address = message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByValidatorAddressResponseAminoMsg): QueryDelegateKeysByValidatorAddressResponse {
    return QueryDelegateKeysByValidatorAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByValidatorAddressResponseProtoMsg): QueryDelegateKeysByValidatorAddressResponse {
    return QueryDelegateKeysByValidatorAddressResponse.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByValidatorAddressResponse): Uint8Array {
    return QueryDelegateKeysByValidatorAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByValidatorAddressResponse): QueryDelegateKeysByValidatorAddressResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse",
      value: QueryDelegateKeysByValidatorAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegateKeysByEthAddress(): QueryDelegateKeysByEthAddress {
  return {
    ethAddress: ""
  };
}
export const QueryDelegateKeysByEthAddress = {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddress",
  encode(message: QueryDelegateKeysByEthAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByEthAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByEthAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ethAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegateKeysByEthAddress>): QueryDelegateKeysByEthAddress {
    const message = createBaseQueryDelegateKeysByEthAddress();
    message.ethAddress = object.ethAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByEthAddressAmino): QueryDelegateKeysByEthAddress {
    return {
      ethAddress: object.eth_address
    };
  },
  toAmino(message: QueryDelegateKeysByEthAddress): QueryDelegateKeysByEthAddressAmino {
    const obj: any = {};
    obj.eth_address = message.ethAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByEthAddressAminoMsg): QueryDelegateKeysByEthAddress {
    return QueryDelegateKeysByEthAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByEthAddressProtoMsg): QueryDelegateKeysByEthAddress {
    return QueryDelegateKeysByEthAddress.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByEthAddress): Uint8Array {
    return QueryDelegateKeysByEthAddress.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByEthAddress): QueryDelegateKeysByEthAddressProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddress",
      value: QueryDelegateKeysByEthAddress.encode(message).finish()
    };
  }
};
function createBaseQueryDelegateKeysByEthAddressResponse(): QueryDelegateKeysByEthAddressResponse {
  return {
    validatorAddress: "",
    orchestratorAddress: ""
  };
}
export const QueryDelegateKeysByEthAddressResponse = {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddressResponse",
  encode(message: QueryDelegateKeysByEthAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByEthAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByEthAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
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
  fromPartial(object: Partial<QueryDelegateKeysByEthAddressResponse>): QueryDelegateKeysByEthAddressResponse {
    const message = createBaseQueryDelegateKeysByEthAddressResponse();
    message.validatorAddress = object.validatorAddress ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByEthAddressResponseAmino): QueryDelegateKeysByEthAddressResponse {
    return {
      validatorAddress: object.validator_address,
      orchestratorAddress: object.orchestrator_address
    };
  },
  toAmino(message: QueryDelegateKeysByEthAddressResponse): QueryDelegateKeysByEthAddressResponseAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.orchestrator_address = message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByEthAddressResponseAminoMsg): QueryDelegateKeysByEthAddressResponse {
    return QueryDelegateKeysByEthAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByEthAddressResponseProtoMsg): QueryDelegateKeysByEthAddressResponse {
    return QueryDelegateKeysByEthAddressResponse.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByEthAddressResponse): Uint8Array {
    return QueryDelegateKeysByEthAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByEthAddressResponse): QueryDelegateKeysByEthAddressResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddressResponse",
      value: QueryDelegateKeysByEthAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegateKeysByOrchestratorAddress(): QueryDelegateKeysByOrchestratorAddress {
  return {
    orchestratorAddress: ""
  };
}
export const QueryDelegateKeysByOrchestratorAddress = {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress",
  encode(message: QueryDelegateKeysByOrchestratorAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orchestratorAddress !== "") {
      writer.uint32(10).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByOrchestratorAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegateKeysByOrchestratorAddress>): QueryDelegateKeysByOrchestratorAddress {
    const message = createBaseQueryDelegateKeysByOrchestratorAddress();
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByOrchestratorAddressAmino): QueryDelegateKeysByOrchestratorAddress {
    return {
      orchestratorAddress: object.orchestrator_address
    };
  },
  toAmino(message: QueryDelegateKeysByOrchestratorAddress): QueryDelegateKeysByOrchestratorAddressAmino {
    const obj: any = {};
    obj.orchestrator_address = message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByOrchestratorAddressAminoMsg): QueryDelegateKeysByOrchestratorAddress {
    return QueryDelegateKeysByOrchestratorAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByOrchestratorAddressProtoMsg): QueryDelegateKeysByOrchestratorAddress {
    return QueryDelegateKeysByOrchestratorAddress.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByOrchestratorAddress): Uint8Array {
    return QueryDelegateKeysByOrchestratorAddress.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByOrchestratorAddress): QueryDelegateKeysByOrchestratorAddressProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress",
      value: QueryDelegateKeysByOrchestratorAddress.encode(message).finish()
    };
  }
};
function createBaseQueryDelegateKeysByOrchestratorAddressResponse(): QueryDelegateKeysByOrchestratorAddressResponse {
  return {
    validatorAddress: "",
    ethAddress: ""
  };
}
export const QueryDelegateKeysByOrchestratorAddressResponse = {
  typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse",
  encode(message: QueryDelegateKeysByOrchestratorAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.ethAddress !== "") {
      writer.uint32(18).string(message.ethAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.ethAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegateKeysByOrchestratorAddressResponse>): QueryDelegateKeysByOrchestratorAddressResponse {
    const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
    message.validatorAddress = object.validatorAddress ?? "";
    message.ethAddress = object.ethAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByOrchestratorAddressResponseAmino): QueryDelegateKeysByOrchestratorAddressResponse {
    return {
      validatorAddress: object.validator_address,
      ethAddress: object.eth_address
    };
  },
  toAmino(message: QueryDelegateKeysByOrchestratorAddressResponse): QueryDelegateKeysByOrchestratorAddressResponseAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.eth_address = message.ethAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByOrchestratorAddressResponseAminoMsg): QueryDelegateKeysByOrchestratorAddressResponse {
    return QueryDelegateKeysByOrchestratorAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByOrchestratorAddressResponseProtoMsg): QueryDelegateKeysByOrchestratorAddressResponse {
    return QueryDelegateKeysByOrchestratorAddressResponse.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByOrchestratorAddressResponse): Uint8Array {
    return QueryDelegateKeysByOrchestratorAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByOrchestratorAddressResponse): QueryDelegateKeysByOrchestratorAddressResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse",
      value: QueryDelegateKeysByOrchestratorAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPendingSendToEth(): QueryPendingSendToEth {
  return {
    senderAddress: ""
  };
}
export const QueryPendingSendToEth = {
  typeUrl: "/injective.peggy.v1.QueryPendingSendToEth",
  encode(message: QueryPendingSendToEth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingSendToEth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPendingSendToEth>): QueryPendingSendToEth {
    const message = createBaseQueryPendingSendToEth();
    message.senderAddress = object.senderAddress ?? "";
    return message;
  },
  fromAmino(object: QueryPendingSendToEthAmino): QueryPendingSendToEth {
    return {
      senderAddress: object.sender_address
    };
  },
  toAmino(message: QueryPendingSendToEth): QueryPendingSendToEthAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress;
    return obj;
  },
  fromAminoMsg(object: QueryPendingSendToEthAminoMsg): QueryPendingSendToEth {
    return QueryPendingSendToEth.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingSendToEthProtoMsg): QueryPendingSendToEth {
    return QueryPendingSendToEth.decode(message.value);
  },
  toProto(message: QueryPendingSendToEth): Uint8Array {
    return QueryPendingSendToEth.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingSendToEth): QueryPendingSendToEthProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryPendingSendToEth",
      value: QueryPendingSendToEth.encode(message).finish()
    };
  }
};
function createBaseQueryPendingSendToEthResponse(): QueryPendingSendToEthResponse {
  return {
    transfersInBatches: [],
    unbatchedTransfers: []
  };
}
export const QueryPendingSendToEthResponse = {
  typeUrl: "/injective.peggy.v1.QueryPendingSendToEthResponse",
  encode(message: QueryPendingSendToEthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.transfersInBatches) {
      OutgoingTransferTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingSendToEthResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingSendToEthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transfersInBatches.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPendingSendToEthResponse>): QueryPendingSendToEthResponse {
    const message = createBaseQueryPendingSendToEthResponse();
    message.transfersInBatches = object.transfersInBatches?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    message.unbatchedTransfers = object.unbatchedTransfers?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPendingSendToEthResponseAmino): QueryPendingSendToEthResponse {
    return {
      transfersInBatches: Array.isArray(object?.transfers_in_batches) ? object.transfers_in_batches.map((e: any) => OutgoingTransferTx.fromAmino(e)) : [],
      unbatchedTransfers: Array.isArray(object?.unbatched_transfers) ? object.unbatched_transfers.map((e: any) => OutgoingTransferTx.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryPendingSendToEthResponse): QueryPendingSendToEthResponseAmino {
    const obj: any = {};
    if (message.transfersInBatches) {
      obj.transfers_in_batches = message.transfersInBatches.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
    } else {
      obj.transfers_in_batches = [];
    }
    if (message.unbatchedTransfers) {
      obj.unbatched_transfers = message.unbatchedTransfers.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
    } else {
      obj.unbatched_transfers = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPendingSendToEthResponseAminoMsg): QueryPendingSendToEthResponse {
    return QueryPendingSendToEthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingSendToEthResponseProtoMsg): QueryPendingSendToEthResponse {
    return QueryPendingSendToEthResponse.decode(message.value);
  },
  toProto(message: QueryPendingSendToEthResponse): Uint8Array {
    return QueryPendingSendToEthResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingSendToEthResponse): QueryPendingSendToEthResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryPendingSendToEthResponse",
      value: QueryPendingSendToEthResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  typeUrl: "/injective.peggy.v1.QueryModuleStateRequest",
  encode(_: QueryModuleStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateRequest();
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
  fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest {
    return {};
  },
  toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.decode(message.value);
  },
  toProto(message: QueryModuleStateRequest): Uint8Array {
    return QueryModuleStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryModuleStateRequest",
      value: QueryModuleStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}
export const QueryModuleStateResponse = {
  typeUrl: "/injective.peggy.v1.QueryModuleStateResponse",
  encode(message: QueryModuleStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = GenesisState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse {
    return {
      state: object?.state ? GenesisState.fromAmino(object.state) : undefined
    };
  },
  toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.decode(message.value);
  },
  toProto(message: QueryModuleStateResponse): Uint8Array {
    return QueryModuleStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  }
};