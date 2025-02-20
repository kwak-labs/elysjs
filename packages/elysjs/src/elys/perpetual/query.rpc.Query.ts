//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsResponse, PositionsRequest, PositionsResponse, PositionsByPoolRequest, PositionsByPoolResponse, StatusRequest, StatusResponse, PositionsForAddressRequest, PositionsForAddressResponse, WhitelistRequest, WhitelistResponse, IsWhitelistedRequest, IsWhitelistedResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryAllPoolRequest, QueryAllPoolResponse, MTPRequest, MTPResponse, QueryOpenEstimationRequest, QueryOpenEstimationResponse, QueryCloseEstimationRequest, QueryCloseEstimationResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: ParamsRequest): Promise<ParamsResponse>;
  /** Queries a list of positions. */
  getPositions(request?: PositionsRequest): Promise<PositionsResponse>;
  /** Queries a list of mtp positions by pool. */
  getPositionsByPool(request: PositionsByPoolRequest): Promise<PositionsByPoolResponse>;
  /** Retuns the total number of open and lifetime mtps. */
  getStatus(request?: StatusRequest): Promise<StatusResponse>;
  /** Queries a list of mtp positions for a given address. */
  getPositionsForAddress(request: PositionsForAddressRequest): Promise<PositionsForAddressResponse>;
  /** Queries a list of whitelisted addresses. */
  getWhitelist(request?: WhitelistRequest): Promise<WhitelistResponse>;
  /** Is an address whitelisted? */
  isWhitelisted(request: IsWhitelistedRequest): Promise<IsWhitelistedResponse>;
  /** Queries a single pool given its index. */
  pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
  /** Queries a list of all pools. */
  pools(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
  /** Queries a single mtp position given its address and id. */
  mTP(request: MTPRequest): Promise<MTPResponse>;
  /** Queries an estimation of a new open position details. */
  openEstimation(request: QueryOpenEstimationRequest): Promise<QueryOpenEstimationResponse>;
  /** Queries a list of CloseEstimation items. */
  closeEstimation(request: QueryCloseEstimationRequest): Promise<QueryCloseEstimationResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.getPositions = this.getPositions.bind(this);
    this.getPositionsByPool = this.getPositionsByPool.bind(this);
    this.getStatus = this.getStatus.bind(this);
    this.getPositionsForAddress = this.getPositionsForAddress.bind(this);
    this.getWhitelist = this.getWhitelist.bind(this);
    this.isWhitelisted = this.isWhitelisted.bind(this);
    this.pool = this.pool.bind(this);
    this.pools = this.pools.bind(this);
    this.mTP = this.mTP.bind(this);
    this.openEstimation = this.openEstimation.bind(this);
    this.closeEstimation = this.closeEstimation.bind(this);
  }
  params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Query", "Params", data);
    return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
  }
  getPositions(request: PositionsRequest = {
    pagination: undefined
  }): Promise<PositionsResponse> {
    const data = PositionsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Query", "GetPositions", data);
    return promise.then(data => PositionsResponse.decode(new BinaryReader(data)));
  }
  getPositionsByPool(request: PositionsByPoolRequest): Promise<PositionsByPoolResponse> {
    const data = PositionsByPoolRequest.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Query", "GetPositionsByPool", data);
    return promise.then(data => PositionsByPoolResponse.decode(new BinaryReader(data)));
  }
  getStatus(request: StatusRequest = {}): Promise<StatusResponse> {
    const data = StatusRequest.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Query", "GetStatus", data);
    return promise.then(data => StatusResponse.decode(new BinaryReader(data)));
  }
  getPositionsForAddress(request: PositionsForAddressRequest): Promise<PositionsForAddressResponse> {
    const data = PositionsForAddressRequest.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Query", "GetPositionsForAddress", data);
    return promise.then(data => PositionsForAddressResponse.decode(new BinaryReader(data)));
  }
  getWhitelist(request: WhitelistRequest = {
    pagination: undefined
  }): Promise<WhitelistResponse> {
    const data = WhitelistRequest.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Query", "GetWhitelist", data);
    return promise.then(data => WhitelistResponse.decode(new BinaryReader(data)));
  }
  isWhitelisted(request: IsWhitelistedRequest): Promise<IsWhitelistedResponse> {
    const data = IsWhitelistedRequest.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Query", "IsWhitelisted", data);
    return promise.then(data => IsWhitelistedResponse.decode(new BinaryReader(data)));
  }
  pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
    const data = QueryGetPoolRequest.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Query", "Pool", data);
    return promise.then(data => QueryGetPoolResponse.decode(new BinaryReader(data)));
  }
  pools(request: QueryAllPoolRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolResponse> {
    const data = QueryAllPoolRequest.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Query", "Pools", data);
    return promise.then(data => QueryAllPoolResponse.decode(new BinaryReader(data)));
  }
  mTP(request: MTPRequest): Promise<MTPResponse> {
    const data = MTPRequest.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Query", "MTP", data);
    return promise.then(data => MTPResponse.decode(new BinaryReader(data)));
  }
  openEstimation(request: QueryOpenEstimationRequest): Promise<QueryOpenEstimationResponse> {
    const data = QueryOpenEstimationRequest.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Query", "OpenEstimation", data);
    return promise.then(data => QueryOpenEstimationResponse.decode(new BinaryReader(data)));
  }
  closeEstimation(request: QueryCloseEstimationRequest): Promise<QueryCloseEstimationResponse> {
    const data = QueryCloseEstimationRequest.encode(request).finish();
    const promise = this.rpc.request("elys.perpetual.Query", "CloseEstimation", data);
    return promise.then(data => QueryCloseEstimationResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: ParamsRequest): Promise<ParamsResponse> {
      return queryService.params(request);
    },
    getPositions(request?: PositionsRequest): Promise<PositionsResponse> {
      return queryService.getPositions(request);
    },
    getPositionsByPool(request: PositionsByPoolRequest): Promise<PositionsByPoolResponse> {
      return queryService.getPositionsByPool(request);
    },
    getStatus(request?: StatusRequest): Promise<StatusResponse> {
      return queryService.getStatus(request);
    },
    getPositionsForAddress(request: PositionsForAddressRequest): Promise<PositionsForAddressResponse> {
      return queryService.getPositionsForAddress(request);
    },
    getWhitelist(request?: WhitelistRequest): Promise<WhitelistResponse> {
      return queryService.getWhitelist(request);
    },
    isWhitelisted(request: IsWhitelistedRequest): Promise<IsWhitelistedResponse> {
      return queryService.isWhitelisted(request);
    },
    pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
      return queryService.pool(request);
    },
    pools(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse> {
      return queryService.pools(request);
    },
    mTP(request: MTPRequest): Promise<MTPResponse> {
      return queryService.mTP(request);
    },
    openEstimation(request: QueryOpenEstimationRequest): Promise<QueryOpenEstimationResponse> {
      return queryService.openEstimation(request);
    },
    closeEstimation(request: QueryCloseEstimationRequest): Promise<QueryCloseEstimationResponse> {
      return queryService.closeEstimation(request);
    }
  };
};