//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryExternalIncentiveRequest, QueryExternalIncentiveResponse, QueryPoolInfoRequest, QueryPoolInfoResponse, QueryPoolRewardInfoRequest, QueryPoolRewardInfoResponse, QueryUserRewardInfoRequest, QueryUserRewardInfoResponse, QueryUserPendingRewardRequest, QueryUserPendingRewardResponse, QueryStableStakeAprRequest, QueryStableStakeAprResponse, QueryPoolAprsRequest, QueryPoolAprsResponse, QueryShowFeeInfoRequest, QueryShowFeeInfoResponse, QueryListFeeInfoRequest, QueryListFeeInfoResponse, QueryAprRequest, QueryAprResponse, QueryAprsRequest, QueryAprsResponse, QueryPoolRewardsRequest, QueryPoolRewardsResponse, QueryAllLiquidityPoolTVLRequest, QueryAllLiquidityPoolTVLResponse, QueryChainTVLRequest, QueryChainTVLResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  externalIncentive(request: QueryExternalIncentiveRequest): Promise<QueryExternalIncentiveResponse>;
  poolInfo(request: QueryPoolInfoRequest): Promise<QueryPoolInfoResponse>;
  poolRewardInfo(request: QueryPoolRewardInfoRequest): Promise<QueryPoolRewardInfoResponse>;
  userRewardInfo(request: QueryUserRewardInfoRequest): Promise<QueryUserRewardInfoResponse>;
  userPendingReward(request: QueryUserPendingRewardRequest): Promise<QueryUserPendingRewardResponse>;
  stableStakeApr(request: QueryStableStakeAprRequest): Promise<QueryStableStakeAprResponse>;
  poolAprs(request: QueryPoolAprsRequest): Promise<QueryPoolAprsResponse>;
  /** Queries a list of ShowFeeInfo items. */
  showFeeInfo(request: QueryShowFeeInfoRequest): Promise<QueryShowFeeInfoResponse>;
  /** Queries a list of ListFeeInfo items. */
  listFeeInfo(request?: QueryListFeeInfoRequest): Promise<QueryListFeeInfoResponse>;
  /** Calculate APR */
  apr(request: QueryAprRequest): Promise<QueryAprResponse>;
  /** Calculate APRs */
  aprs(request?: QueryAprsRequest): Promise<QueryAprsResponse>;
  /** Queries PoolReward items */
  poolRewards(request: QueryPoolRewardsRequest): Promise<QueryPoolRewardsResponse>;
  allLiquidityPoolTVL(request?: QueryAllLiquidityPoolTVLRequest): Promise<QueryAllLiquidityPoolTVLResponse>;
  chainTVL(request?: QueryChainTVLRequest): Promise<QueryChainTVLResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.externalIncentive = this.externalIncentive.bind(this);
    this.poolInfo = this.poolInfo.bind(this);
    this.poolRewardInfo = this.poolRewardInfo.bind(this);
    this.userRewardInfo = this.userRewardInfo.bind(this);
    this.userPendingReward = this.userPendingReward.bind(this);
    this.stableStakeApr = this.stableStakeApr.bind(this);
    this.poolAprs = this.poolAprs.bind(this);
    this.showFeeInfo = this.showFeeInfo.bind(this);
    this.listFeeInfo = this.listFeeInfo.bind(this);
    this.apr = this.apr.bind(this);
    this.aprs = this.aprs.bind(this);
    this.poolRewards = this.poolRewards.bind(this);
    this.allLiquidityPoolTVL = this.allLiquidityPoolTVL.bind(this);
    this.chainTVL = this.chainTVL.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  externalIncentive(request: QueryExternalIncentiveRequest): Promise<QueryExternalIncentiveResponse> {
    const data = QueryExternalIncentiveRequest.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Query", "ExternalIncentive", data);
    return promise.then(data => QueryExternalIncentiveResponse.decode(new BinaryReader(data)));
  }
  poolInfo(request: QueryPoolInfoRequest): Promise<QueryPoolInfoResponse> {
    const data = QueryPoolInfoRequest.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Query", "PoolInfo", data);
    return promise.then(data => QueryPoolInfoResponse.decode(new BinaryReader(data)));
  }
  poolRewardInfo(request: QueryPoolRewardInfoRequest): Promise<QueryPoolRewardInfoResponse> {
    const data = QueryPoolRewardInfoRequest.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Query", "PoolRewardInfo", data);
    return promise.then(data => QueryPoolRewardInfoResponse.decode(new BinaryReader(data)));
  }
  userRewardInfo(request: QueryUserRewardInfoRequest): Promise<QueryUserRewardInfoResponse> {
    const data = QueryUserRewardInfoRequest.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Query", "UserRewardInfo", data);
    return promise.then(data => QueryUserRewardInfoResponse.decode(new BinaryReader(data)));
  }
  userPendingReward(request: QueryUserPendingRewardRequest): Promise<QueryUserPendingRewardResponse> {
    const data = QueryUserPendingRewardRequest.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Query", "UserPendingReward", data);
    return promise.then(data => QueryUserPendingRewardResponse.decode(new BinaryReader(data)));
  }
  stableStakeApr(request: QueryStableStakeAprRequest): Promise<QueryStableStakeAprResponse> {
    const data = QueryStableStakeAprRequest.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Query", "StableStakeApr", data);
    return promise.then(data => QueryStableStakeAprResponse.decode(new BinaryReader(data)));
  }
  poolAprs(request: QueryPoolAprsRequest): Promise<QueryPoolAprsResponse> {
    const data = QueryPoolAprsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Query", "PoolAprs", data);
    return promise.then(data => QueryPoolAprsResponse.decode(new BinaryReader(data)));
  }
  showFeeInfo(request: QueryShowFeeInfoRequest): Promise<QueryShowFeeInfoResponse> {
    const data = QueryShowFeeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Query", "ShowFeeInfo", data);
    return promise.then(data => QueryShowFeeInfoResponse.decode(new BinaryReader(data)));
  }
  listFeeInfo(request: QueryListFeeInfoRequest = {}): Promise<QueryListFeeInfoResponse> {
    const data = QueryListFeeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Query", "ListFeeInfo", data);
    return promise.then(data => QueryListFeeInfoResponse.decode(new BinaryReader(data)));
  }
  apr(request: QueryAprRequest): Promise<QueryAprResponse> {
    const data = QueryAprRequest.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Query", "Apr", data);
    return promise.then(data => QueryAprResponse.decode(new BinaryReader(data)));
  }
  aprs(request: QueryAprsRequest = {}): Promise<QueryAprsResponse> {
    const data = QueryAprsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Query", "Aprs", data);
    return promise.then(data => QueryAprsResponse.decode(new BinaryReader(data)));
  }
  poolRewards(request: QueryPoolRewardsRequest): Promise<QueryPoolRewardsResponse> {
    const data = QueryPoolRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Query", "PoolRewards", data);
    return promise.then(data => QueryPoolRewardsResponse.decode(new BinaryReader(data)));
  }
  allLiquidityPoolTVL(request: QueryAllLiquidityPoolTVLRequest = {}): Promise<QueryAllLiquidityPoolTVLResponse> {
    const data = QueryAllLiquidityPoolTVLRequest.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Query", "AllLiquidityPoolTVL", data);
    return promise.then(data => QueryAllLiquidityPoolTVLResponse.decode(new BinaryReader(data)));
  }
  chainTVL(request: QueryChainTVLRequest = {}): Promise<QueryChainTVLResponse> {
    const data = QueryChainTVLRequest.encode(request).finish();
    const promise = this.rpc.request("elys.masterchef.Query", "ChainTVL", data);
    return promise.then(data => QueryChainTVLResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    externalIncentive(request: QueryExternalIncentiveRequest): Promise<QueryExternalIncentiveResponse> {
      return queryService.externalIncentive(request);
    },
    poolInfo(request: QueryPoolInfoRequest): Promise<QueryPoolInfoResponse> {
      return queryService.poolInfo(request);
    },
    poolRewardInfo(request: QueryPoolRewardInfoRequest): Promise<QueryPoolRewardInfoResponse> {
      return queryService.poolRewardInfo(request);
    },
    userRewardInfo(request: QueryUserRewardInfoRequest): Promise<QueryUserRewardInfoResponse> {
      return queryService.userRewardInfo(request);
    },
    userPendingReward(request: QueryUserPendingRewardRequest): Promise<QueryUserPendingRewardResponse> {
      return queryService.userPendingReward(request);
    },
    stableStakeApr(request: QueryStableStakeAprRequest): Promise<QueryStableStakeAprResponse> {
      return queryService.stableStakeApr(request);
    },
    poolAprs(request: QueryPoolAprsRequest): Promise<QueryPoolAprsResponse> {
      return queryService.poolAprs(request);
    },
    showFeeInfo(request: QueryShowFeeInfoRequest): Promise<QueryShowFeeInfoResponse> {
      return queryService.showFeeInfo(request);
    },
    listFeeInfo(request?: QueryListFeeInfoRequest): Promise<QueryListFeeInfoResponse> {
      return queryService.listFeeInfo(request);
    },
    apr(request: QueryAprRequest): Promise<QueryAprResponse> {
      return queryService.apr(request);
    },
    aprs(request?: QueryAprsRequest): Promise<QueryAprsResponse> {
      return queryService.aprs(request);
    },
    poolRewards(request: QueryPoolRewardsRequest): Promise<QueryPoolRewardsResponse> {
      return queryService.poolRewards(request);
    },
    allLiquidityPoolTVL(request?: QueryAllLiquidityPoolTVLRequest): Promise<QueryAllLiquidityPoolTVLResponse> {
      return queryService.allLiquidityPoolTVL(request);
    },
    chainTVL(request?: QueryChainTVLRequest): Promise<QueryChainTVLResponse> {
      return queryService.chainTVL(request);
    }
  };
};