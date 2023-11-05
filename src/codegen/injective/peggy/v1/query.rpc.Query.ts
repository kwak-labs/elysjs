import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryValsetRequestRequest, QueryValsetRequestResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastEventByAddrRequest, QueryLastEventByAddrResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** Deployments queries deployments */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** valset */
  currentValset(request?: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse>;
  valsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse>;
  valsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse>;
  valsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse>;
  lastValsetRequests(request?: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse>;
  lastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse>;
  /** claim */
  lastEventByAddr(request: QueryLastEventByAddrRequest): Promise<QueryLastEventByAddrResponse>;
  /** batch */
  getPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse>;
  batchFees(request?: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse>;
  outgoingTxBatches(request?: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse>;
  lastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse>;
  batchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse>;
  batchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse>;
  eRC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse>;
  denomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response>;
  getDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse>;
  getDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse>;
  getDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse>;
  /** Retrieves the entire peggy module's state */
  peggyModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.currentValset = this.currentValset.bind(this);
    this.valsetRequest = this.valsetRequest.bind(this);
    this.valsetConfirm = this.valsetConfirm.bind(this);
    this.valsetConfirmsByNonce = this.valsetConfirmsByNonce.bind(this);
    this.lastValsetRequests = this.lastValsetRequests.bind(this);
    this.lastPendingValsetRequestByAddr = this.lastPendingValsetRequestByAddr.bind(this);
    this.lastEventByAddr = this.lastEventByAddr.bind(this);
    this.getPendingSendToEth = this.getPendingSendToEth.bind(this);
    this.batchFees = this.batchFees.bind(this);
    this.outgoingTxBatches = this.outgoingTxBatches.bind(this);
    this.lastPendingBatchRequestByAddr = this.lastPendingBatchRequestByAddr.bind(this);
    this.batchRequestByNonce = this.batchRequestByNonce.bind(this);
    this.batchConfirms = this.batchConfirms.bind(this);
    this.eRC20ToDenom = this.eRC20ToDenom.bind(this);
    this.denomToERC20 = this.denomToERC20.bind(this);
    this.getDelegateKeyByValidator = this.getDelegateKeyByValidator.bind(this);
    this.getDelegateKeyByEth = this.getDelegateKeyByEth.bind(this);
    this.getDelegateKeyByOrchestrator = this.getDelegateKeyByOrchestrator.bind(this);
    this.peggyModuleState = this.peggyModuleState.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  currentValset(request: QueryCurrentValsetRequest = {}): Promise<QueryCurrentValsetResponse> {
    const data = QueryCurrentValsetRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "CurrentValset", data);
    return promise.then(data => QueryCurrentValsetResponse.decode(new BinaryReader(data)));
  }
  valsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse> {
    const data = QueryValsetRequestRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetRequest", data);
    return promise.then(data => QueryValsetRequestResponse.decode(new BinaryReader(data)));
  }
  valsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse> {
    const data = QueryValsetConfirmRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetConfirm", data);
    return promise.then(data => QueryValsetConfirmResponse.decode(new BinaryReader(data)));
  }
  valsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse> {
    const data = QueryValsetConfirmsByNonceRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetConfirmsByNonce", data);
    return promise.then(data => QueryValsetConfirmsByNonceResponse.decode(new BinaryReader(data)));
  }
  lastValsetRequests(request: QueryLastValsetRequestsRequest = {}): Promise<QueryLastValsetRequestsResponse> {
    const data = QueryLastValsetRequestsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "LastValsetRequests", data);
    return promise.then(data => QueryLastValsetRequestsResponse.decode(new BinaryReader(data)));
  }
  lastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse> {
    const data = QueryLastPendingValsetRequestByAddrRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "LastPendingValsetRequestByAddr", data);
    return promise.then(data => QueryLastPendingValsetRequestByAddrResponse.decode(new BinaryReader(data)));
  }
  lastEventByAddr(request: QueryLastEventByAddrRequest): Promise<QueryLastEventByAddrResponse> {
    const data = QueryLastEventByAddrRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "LastEventByAddr", data);
    return promise.then(data => QueryLastEventByAddrResponse.decode(new BinaryReader(data)));
  }
  getPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse> {
    const data = QueryPendingSendToEth.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "GetPendingSendToEth", data);
    return promise.then(data => QueryPendingSendToEthResponse.decode(new BinaryReader(data)));
  }
  batchFees(request: QueryBatchFeeRequest = {}): Promise<QueryBatchFeeResponse> {
    const data = QueryBatchFeeRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "BatchFees", data);
    return promise.then(data => QueryBatchFeeResponse.decode(new BinaryReader(data)));
  }
  outgoingTxBatches(request: QueryOutgoingTxBatchesRequest = {}): Promise<QueryOutgoingTxBatchesResponse> {
    const data = QueryOutgoingTxBatchesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "OutgoingTxBatches", data);
    return promise.then(data => QueryOutgoingTxBatchesResponse.decode(new BinaryReader(data)));
  }
  lastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse> {
    const data = QueryLastPendingBatchRequestByAddrRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "LastPendingBatchRequestByAddr", data);
    return promise.then(data => QueryLastPendingBatchRequestByAddrResponse.decode(new BinaryReader(data)));
  }
  batchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse> {
    const data = QueryBatchRequestByNonceRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "BatchRequestByNonce", data);
    return promise.then(data => QueryBatchRequestByNonceResponse.decode(new BinaryReader(data)));
  }
  batchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse> {
    const data = QueryBatchConfirmsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "BatchConfirms", data);
    return promise.then(data => QueryBatchConfirmsResponse.decode(new BinaryReader(data)));
  }
  eRC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse> {
    const data = QueryERC20ToDenomRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "ERC20ToDenom", data);
    return promise.then(data => QueryERC20ToDenomResponse.decode(new BinaryReader(data)));
  }
  denomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response> {
    const data = QueryDenomToERC20Request.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "DenomToERC20", data);
    return promise.then(data => QueryDenomToERC20Response.decode(new BinaryReader(data)));
  }
  getDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse> {
    const data = QueryDelegateKeysByValidatorAddress.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByValidator", data);
    return promise.then(data => QueryDelegateKeysByValidatorAddressResponse.decode(new BinaryReader(data)));
  }
  getDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse> {
    const data = QueryDelegateKeysByEthAddress.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByEth", data);
    return promise.then(data => QueryDelegateKeysByEthAddressResponse.decode(new BinaryReader(data)));
  }
  getDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse> {
    const data = QueryDelegateKeysByOrchestratorAddress.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByOrchestrator", data);
    return promise.then(data => QueryDelegateKeysByOrchestratorAddressResponse.decode(new BinaryReader(data)));
  }
  peggyModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "PeggyModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    currentValset(request?: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse> {
      return queryService.currentValset(request);
    },
    valsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse> {
      return queryService.valsetRequest(request);
    },
    valsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse> {
      return queryService.valsetConfirm(request);
    },
    valsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse> {
      return queryService.valsetConfirmsByNonce(request);
    },
    lastValsetRequests(request?: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse> {
      return queryService.lastValsetRequests(request);
    },
    lastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse> {
      return queryService.lastPendingValsetRequestByAddr(request);
    },
    lastEventByAddr(request: QueryLastEventByAddrRequest): Promise<QueryLastEventByAddrResponse> {
      return queryService.lastEventByAddr(request);
    },
    getPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse> {
      return queryService.getPendingSendToEth(request);
    },
    batchFees(request?: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse> {
      return queryService.batchFees(request);
    },
    outgoingTxBatches(request?: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse> {
      return queryService.outgoingTxBatches(request);
    },
    lastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse> {
      return queryService.lastPendingBatchRequestByAddr(request);
    },
    batchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse> {
      return queryService.batchRequestByNonce(request);
    },
    batchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse> {
      return queryService.batchConfirms(request);
    },
    eRC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse> {
      return queryService.eRC20ToDenom(request);
    },
    denomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response> {
      return queryService.denomToERC20(request);
    },
    getDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse> {
      return queryService.getDelegateKeyByValidator(request);
    },
    getDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse> {
      return queryService.getDelegateKeyByEth(request);
    },
    getDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse> {
      return queryService.getDelegateKeyByOrchestrator(request);
    },
    peggyModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.peggyModuleState(request);
    }
  };
};