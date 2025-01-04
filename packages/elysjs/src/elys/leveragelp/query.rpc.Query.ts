//@ts-nocheck
import { PositionRequest } from "./types";
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsResponse, PositionsRequest, PositionsResponse, PositionsByPoolRequest, PositionsByPoolResponse, StatusRequest, StatusResponse, PositionsForAddressRequest, PositionsForAddressResponse, WhitelistRequest, WhitelistResponse, IsWhitelistedRequest, IsWhitelistedResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryAllPoolRequest, QueryAllPoolResponse, PositionResponse, QueryLiquidationPriceRequest, QueryLiquidationPriceResponse, QueryOpenEstRequest, QueryOpenEstResponse, QueryCloseEstRequest, QueryCloseEstResponse, QueryRewardsRequest, QueryRewardsResponse, QueryCommittedTokensLockedRequest, QueryCommittedTokensLockedResponse } from "./query";
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
  /** Query a liquidation price for a position */
  liquidationPrice(request: QueryLiquidationPriceRequest): Promise<QueryLiquidationPriceResponse>;
  /** Get estimated amount of return value opening a position */
  openEst(request: QueryOpenEstRequest): Promise<QueryOpenEstResponse>;
  /** Get estimated amount of return value closing a position */
  closeEst(request: QueryCloseEstRequest): Promise<QueryCloseEstResponse>;
  /** Queries rewards on leveragelp */
  rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse>;
  /** Queries a list of CommittedTokensLocked items. */
  committedTokensLocked(request: QueryCommittedTokensLockedRequest): Promise<QueryCommittedTokensLockedResponse>;
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
    this.liquidationPrice = this.liquidationPrice.bind(this);
    this.openEst = this.openEst.bind(this);
    this.closeEst = this.closeEst.bind(this);
    this.rewards = this.rewards.bind(this);
    this.committedTokensLocked = this.committedTokensLocked.bind(this);
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
  liquidationPrice(request: QueryLiquidationPriceRequest): Promise<QueryLiquidationPriceResponse> {
    const data = QueryLiquidationPriceRequest.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Query", "LiquidationPrice", data);
    return promise.then(data => QueryLiquidationPriceResponse.decode(new BinaryReader(data)));
  }
  openEst(request: QueryOpenEstRequest): Promise<QueryOpenEstResponse> {
    const data = QueryOpenEstRequest.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Query", "OpenEst", data);
    return promise.then(data => QueryOpenEstResponse.decode(new BinaryReader(data)));
  }
  closeEst(request: QueryCloseEstRequest): Promise<QueryCloseEstResponse> {
    const data = QueryCloseEstRequest.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Query", "CloseEst", data);
    return promise.then(data => QueryCloseEstResponse.decode(new BinaryReader(data)));
  }
  rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse> {
    const data = QueryRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Query", "Rewards", data);
    return promise.then(data => QueryRewardsResponse.decode(new BinaryReader(data)));
  }
  committedTokensLocked(request: QueryCommittedTokensLockedRequest): Promise<QueryCommittedTokensLockedResponse> {
    const data = QueryCommittedTokensLockedRequest.encode(request).finish();
    const promise = this.rpc.request("elys.leveragelp.Query", "CommittedTokensLocked", data);
    return promise.then(data => QueryCommittedTokensLockedResponse.decode(new BinaryReader(data)));
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
    },
    liquidationPrice(request: QueryLiquidationPriceRequest): Promise<QueryLiquidationPriceResponse> {
      return queryService.liquidationPrice(request);
    },
    openEst(request: QueryOpenEstRequest): Promise<QueryOpenEstResponse> {
      return queryService.openEst(request);
    },
    closeEst(request: QueryCloseEstRequest): Promise<QueryCloseEstResponse> {
      return queryService.closeEst(request);
    },
    rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse> {
      return queryService.rewards(request);
    },
    committedTokensLocked(request: QueryCommittedTokensLockedRequest): Promise<QueryCommittedTokensLockedResponse> {
      return queryService.committedTokensLocked(request);
    }
  };
};