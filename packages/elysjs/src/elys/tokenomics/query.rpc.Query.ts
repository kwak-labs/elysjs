//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetAirdropRequest, QueryGetAirdropResponse, QueryAllAirdropRequest, QueryAllAirdropResponse, QueryGetGenesisInflationRequest, QueryGetGenesisInflationResponse, QueryGetTimeBasedInflationRequest, QueryGetTimeBasedInflationResponse, QueryAllTimeBasedInflationRequest, QueryAllTimeBasedInflationResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Airdrop items. */
  airdrop(request: QueryGetAirdropRequest): Promise<QueryGetAirdropResponse>;
  airdropAll(request?: QueryAllAirdropRequest): Promise<QueryAllAirdropResponse>;
  /** Queries a GenesisInflation by index. */
  genesisInflation(request?: QueryGetGenesisInflationRequest): Promise<QueryGetGenesisInflationResponse>;
  /** Queries a list of TimeBasedInflation items. */
  timeBasedInflation(request: QueryGetTimeBasedInflationRequest): Promise<QueryGetTimeBasedInflationResponse>;
  timeBasedInflationAll(request?: QueryAllTimeBasedInflationRequest): Promise<QueryAllTimeBasedInflationResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.airdrop = this.airdrop.bind(this);
    this.airdropAll = this.airdropAll.bind(this);
    this.genesisInflation = this.genesisInflation.bind(this);
    this.timeBasedInflation = this.timeBasedInflation.bind(this);
    this.timeBasedInflationAll = this.timeBasedInflationAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tokenomics.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  airdrop(request: QueryGetAirdropRequest): Promise<QueryGetAirdropResponse> {
    const data = QueryGetAirdropRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tokenomics.Query", "Airdrop", data);
    return promise.then(data => QueryGetAirdropResponse.decode(new BinaryReader(data)));
  }
  airdropAll(request: QueryAllAirdropRequest = {
    pagination: undefined
  }): Promise<QueryAllAirdropResponse> {
    const data = QueryAllAirdropRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tokenomics.Query", "AirdropAll", data);
    return promise.then(data => QueryAllAirdropResponse.decode(new BinaryReader(data)));
  }
  genesisInflation(request: QueryGetGenesisInflationRequest = {}): Promise<QueryGetGenesisInflationResponse> {
    const data = QueryGetGenesisInflationRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tokenomics.Query", "GenesisInflation", data);
    return promise.then(data => QueryGetGenesisInflationResponse.decode(new BinaryReader(data)));
  }
  timeBasedInflation(request: QueryGetTimeBasedInflationRequest): Promise<QueryGetTimeBasedInflationResponse> {
    const data = QueryGetTimeBasedInflationRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tokenomics.Query", "TimeBasedInflation", data);
    return promise.then(data => QueryGetTimeBasedInflationResponse.decode(new BinaryReader(data)));
  }
  timeBasedInflationAll(request: QueryAllTimeBasedInflationRequest = {
    pagination: undefined
  }): Promise<QueryAllTimeBasedInflationResponse> {
    const data = QueryAllTimeBasedInflationRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tokenomics.Query", "TimeBasedInflationAll", data);
    return promise.then(data => QueryAllTimeBasedInflationResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    airdrop(request: QueryGetAirdropRequest): Promise<QueryGetAirdropResponse> {
      return queryService.airdrop(request);
    },
    airdropAll(request?: QueryAllAirdropRequest): Promise<QueryAllAirdropResponse> {
      return queryService.airdropAll(request);
    },
    genesisInflation(request?: QueryGetGenesisInflationRequest): Promise<QueryGetGenesisInflationResponse> {
      return queryService.genesisInflation(request);
    },
    timeBasedInflation(request: QueryGetTimeBasedInflationRequest): Promise<QueryGetTimeBasedInflationResponse> {
      return queryService.timeBasedInflation(request);
    },
    timeBasedInflationAll(request?: QueryAllTimeBasedInflationRequest): Promise<QueryAllTimeBasedInflationResponse> {
      return queryService.timeBasedInflationAll(request);
    }
  };
};