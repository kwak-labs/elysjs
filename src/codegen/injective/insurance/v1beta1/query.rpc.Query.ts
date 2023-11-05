import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves insurance params */
  insuranceParams(request?: QueryInsuranceParamsRequest): Promise<QueryInsuranceParamsResponse>;
  /** Retrieves individual insurance fund information from market id */
  insuranceFund(request: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse>;
  /** Retrieves all insurance funds */
  insuranceFunds(request?: QueryInsuranceFundsRequest): Promise<QueryInsuranceFundsResponse>;
  /** Retrives the value of insurance fund share token at current price (not pending redemption) */
  estimatedRedemptions(request: QueryEstimatedRedemptionsRequest): Promise<QueryEstimatedRedemptionsResponse>;
  /** Retrieves pending redemptions' share token at current price */
  pendingRedemptions(request: QueryPendingRedemptionsRequest): Promise<QueryPendingRedemptionsResponse>;
  /** Retrieves the entire insurance module's state */
  insuranceModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.insuranceParams = this.insuranceParams.bind(this);
    this.insuranceFund = this.insuranceFund.bind(this);
    this.insuranceFunds = this.insuranceFunds.bind(this);
    this.estimatedRedemptions = this.estimatedRedemptions.bind(this);
    this.pendingRedemptions = this.pendingRedemptions.bind(this);
    this.insuranceModuleState = this.insuranceModuleState.bind(this);
  }
  insuranceParams(request: QueryInsuranceParamsRequest = {}): Promise<QueryInsuranceParamsResponse> {
    const data = QueryInsuranceParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceParams", data);
    return promise.then(data => QueryInsuranceParamsResponse.decode(new BinaryReader(data)));
  }
  insuranceFund(request: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse> {
    const data = QueryInsuranceFundRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceFund", data);
    return promise.then(data => QueryInsuranceFundResponse.decode(new BinaryReader(data)));
  }
  insuranceFunds(request: QueryInsuranceFundsRequest = {}): Promise<QueryInsuranceFundsResponse> {
    const data = QueryInsuranceFundsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceFunds", data);
    return promise.then(data => QueryInsuranceFundsResponse.decode(new BinaryReader(data)));
  }
  estimatedRedemptions(request: QueryEstimatedRedemptionsRequest): Promise<QueryEstimatedRedemptionsResponse> {
    const data = QueryEstimatedRedemptionsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "EstimatedRedemptions", data);
    return promise.then(data => QueryEstimatedRedemptionsResponse.decode(new BinaryReader(data)));
  }
  pendingRedemptions(request: QueryPendingRedemptionsRequest): Promise<QueryPendingRedemptionsResponse> {
    const data = QueryPendingRedemptionsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "PendingRedemptions", data);
    return promise.then(data => QueryPendingRedemptionsResponse.decode(new BinaryReader(data)));
  }
  insuranceModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    insuranceParams(request?: QueryInsuranceParamsRequest): Promise<QueryInsuranceParamsResponse> {
      return queryService.insuranceParams(request);
    },
    insuranceFund(request: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse> {
      return queryService.insuranceFund(request);
    },
    insuranceFunds(request?: QueryInsuranceFundsRequest): Promise<QueryInsuranceFundsResponse> {
      return queryService.insuranceFunds(request);
    },
    estimatedRedemptions(request: QueryEstimatedRedemptionsRequest): Promise<QueryEstimatedRedemptionsResponse> {
      return queryService.estimatedRedemptions(request);
    },
    pendingRedemptions(request: QueryPendingRedemptionsRequest): Promise<QueryPendingRedemptionsResponse> {
      return queryService.pendingRedemptions(request);
    },
    insuranceModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.insuranceModuleState(request);
    }
  };
};