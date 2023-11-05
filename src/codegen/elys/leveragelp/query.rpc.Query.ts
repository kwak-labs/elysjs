import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsResponse, PositionsRequest, PositionsResponse, PositionsByPoolRequest, PositionsByPoolResponse, StatusRequest, StatusResponse, PositionsForAddressRequest, PositionsForAddressResponse, WhitelistRequest, WhitelistResponse, IsWhitelistedRequest, IsWhitelistedResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryAllPoolRequest, QueryAllPoolResponse, PositionRequest, PositionResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: ParamsRequest): Promise<ParamsResponse>;
  /** Queries a list of GetPositions items. */
  queryPositions(request?: PositionsRequest): Promise<PositionsResponse>;
  /** Queries a list of GetPositionsByPool items. */
  queryPositionsByPool(request: PositionsByPoolRequest): Promise<PositionsByPoolResponse>;
  /** Queries a list of GetStatus items. */
  getStatus(request?: StatusRequest): Promise<StatusResponse>;
  /** Queries a list of GetPositionsForAddress items. */
  queryPositionsForAddress(request: PositionsForAddressRequest): Promise<PositionsForAddressResponse>;
  /** Queries a list of GetWhitelist items. */
  getWhitelist(request?: WhitelistRequest): Promise<WhitelistResponse>;
  /** Queries a list of IsWhitelisted items. */
  isWhitelisted(request: IsWhitelistedRequest): Promise<IsWhitelistedResponse>;
  /** Queries a list of Pool items. */
  pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
  pools(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
  /** Queries a list of Position items. */
  position(request: PositionRequest): Promise<PositionResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.queryPositions = this.queryPositions.bind(this);
    this.queryPositionsByPool = this.queryPositionsByPool.bind(this);
    this.getStatus = this.getStatus.bind(this);
    this.queryPositionsForAddress = this.queryPositionsForAddress.bind(this);
    this.getWhitelist = this.getWhitelist.bind(this);
    this.isWhitelisted = this.isWhitelisted.bind(this);
    this.pool = this.pool.bind(this);
    this.pools = this.pools.bind(this);
    this.position = this.position.bind(this);
  }
  params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Query", "Params", data);
    return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
  }
  queryPositions(request: PositionsRequest = {
    pagination: undefined
  }): Promise<PositionsResponse> {
    const data = PositionsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Query", "QueryPositions", data);
    return promise.then(data => PositionsResponse.decode(new BinaryReader(data)));
  }
  queryPositionsByPool(request: PositionsByPoolRequest): Promise<PositionsByPoolResponse> {
    const data = PositionsByPoolRequest.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Query", "QueryPositionsByPool", data);
    return promise.then(data => PositionsByPoolResponse.decode(new BinaryReader(data)));
  }
  getStatus(request: StatusRequest = {}): Promise<StatusResponse> {
    const data = StatusRequest.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Query", "GetStatus", data);
    return promise.then(data => StatusResponse.decode(new BinaryReader(data)));
  }
  queryPositionsForAddress(request: PositionsForAddressRequest): Promise<PositionsForAddressResponse> {
    const data = PositionsForAddressRequest.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Query", "QueryPositionsForAddress", data);
    return promise.then(data => PositionsForAddressResponse.decode(new BinaryReader(data)));
  }
  getWhitelist(request: WhitelistRequest = {
    pagination: undefined
  }): Promise<WhitelistResponse> {
    const data = WhitelistRequest.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Query", "GetWhitelist", data);
    return promise.then(data => WhitelistResponse.decode(new BinaryReader(data)));
  }
  isWhitelisted(request: IsWhitelistedRequest): Promise<IsWhitelistedResponse> {
    const data = IsWhitelistedRequest.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Query", "IsWhitelisted", data);
    return promise.then(data => IsWhitelistedResponse.decode(new BinaryReader(data)));
  }
  pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
    const data = QueryGetPoolRequest.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Query", "Pool", data);
    return promise.then(data => QueryGetPoolResponse.decode(new BinaryReader(data)));
  }
  pools(request: QueryAllPoolRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolResponse> {
    const data = QueryAllPoolRequest.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Query", "Pools", data);
    return promise.then(data => QueryAllPoolResponse.decode(new BinaryReader(data)));
  }
  position(request: PositionRequest): Promise<PositionResponse> {
    const data = PositionRequest.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Query", "Position", data);
    return promise.then(data => PositionResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: ParamsRequest): Promise<ParamsResponse> {
      return queryService.params(request);
    },
    queryPositions(request?: PositionsRequest): Promise<PositionsResponse> {
      return queryService.queryPositions(request);
    },
    queryPositionsByPool(request: PositionsByPoolRequest): Promise<PositionsByPoolResponse> {
      return queryService.queryPositionsByPool(request);
    },
    getStatus(request?: StatusRequest): Promise<StatusResponse> {
      return queryService.getStatus(request);
    },
    queryPositionsForAddress(request: PositionsForAddressRequest): Promise<PositionsForAddressResponse> {
      return queryService.queryPositionsForAddress(request);
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
    position(request: PositionRequest): Promise<PositionResponse> {
      return queryService.position(request);
    }
  };
};