import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service for OCR module. */
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Retrieves the OCR FeedConfig for a given FeedId */
  feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse>;
  /** Retrieves the OCR FeedConfigInfo for a given FeedId */
  feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse>;
  /** Retrieves latest round ID and data, including median answer for that round */
  latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse>;
  /** LatestTransmissionDetails returns details about the latest trasmission recorded on chain for the given feed ID. */
  latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse>;
  /** Retrieves transmitter's owed amount */
  owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse>;
  /** Retrieves the entire OCR module's state */
  ocrModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.feedConfig = this.feedConfig.bind(this);
    this.feedConfigInfo = this.feedConfigInfo.bind(this);
    this.latestRound = this.latestRound.bind(this);
    this.latestTransmissionDetails = this.latestTransmissionDetails.bind(this);
    this.owedAmount = this.owedAmount.bind(this);
    this.ocrModuleState = this.ocrModuleState.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse> {
    const data = QueryFeedConfigRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "FeedConfig", data);
    return promise.then(data => QueryFeedConfigResponse.decode(new BinaryReader(data)));
  }
  feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse> {
    const data = QueryFeedConfigInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "FeedConfigInfo", data);
    return promise.then(data => QueryFeedConfigInfoResponse.decode(new BinaryReader(data)));
  }
  latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse> {
    const data = QueryLatestRoundRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "LatestRound", data);
    return promise.then(data => QueryLatestRoundResponse.decode(new BinaryReader(data)));
  }
  latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse> {
    const data = QueryLatestTransmissionDetailsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "LatestTransmissionDetails", data);
    return promise.then(data => QueryLatestTransmissionDetailsResponse.decode(new BinaryReader(data)));
  }
  owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse> {
    const data = QueryOwedAmountRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "OwedAmount", data);
    return promise.then(data => QueryOwedAmountResponse.decode(new BinaryReader(data)));
  }
  ocrModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "OcrModuleState", data);
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
    feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse> {
      return queryService.feedConfig(request);
    },
    feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse> {
      return queryService.feedConfigInfo(request);
    },
    latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse> {
      return queryService.latestRound(request);
    },
    latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse> {
      return queryService.latestTransmissionDetails(request);
    },
    owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse> {
      return queryService.owedAmount(request);
    },
    ocrModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.ocrModuleState(request);
    }
  };
};