//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPortfolioRequest, QueryGetPortfolioResponse, QueryAllPortfolioRequest, QueryAllPortfolioResponse, QueryCalculateDiscountRequest, QueryCalculateDiscountResponse, QueryLeverageLpTotalRequest, QueryLeverageLpTotalResponse, QueryRewardsTotalRequest, QueryRewardsTotalResponse, QueryStakedPoolRequest, QueryStakedPoolResponse, QueryPerpetualRequest, QueryPerpetualResponse, QueryLiquidTotalRequest, QueryLiquidTotalResponse, QueryLockedOrderRequest, QueryLockedOrderResponse, QueryGetAmmPriceRequest, QueryGetAmmPriceResponse, QueryGetConsolidatedPriceRequest, QueryGetConsolidatedPriceResponse, QueryStakedRequest, QueryStakedResponse, QueryGetUsersPoolDataRequest, QueryGetUsersPoolDataResponse, QueryGetAllPricesRequest, QueryGetAllPricesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Portfolio items. */
  portfolio(request: QueryGetPortfolioRequest): Promise<QueryGetPortfolioResponse>;
  portfolioAll(request?: QueryAllPortfolioRequest): Promise<QueryAllPortfolioResponse>;
  /** Queries a list of CalculateDiscount items. */
  calculateDiscount(request: QueryCalculateDiscountRequest): Promise<QueryCalculateDiscountResponse>;
  /** Queries a list of LeverageLpTotal items. */
  leverageLpTotal(request: QueryLeverageLpTotalRequest): Promise<QueryLeverageLpTotalResponse>;
  /** Queries a list of RewardsTotal items. */
  rewardsTotal(request: QueryRewardsTotalRequest): Promise<QueryRewardsTotalResponse>;
  /** Queries a list of StakedPool items. */
  stakedPool(request: QueryStakedPoolRequest): Promise<QueryStakedPoolResponse>;
  /** Queries a list of Perpetual items. */
  perpetual(request: QueryPerpetualRequest): Promise<QueryPerpetualResponse>;
  /** Queries a list of LiquidTotal items. */
  liquidTotal(request: QueryLiquidTotalRequest): Promise<QueryLiquidTotalResponse>;
  /** Queries a list of LockedOrder items. */
  lockedOrder(request: QueryLockedOrderRequest): Promise<QueryLockedOrderResponse>;
  /** Queries a list of GetAmmPrice items. */
  getAmmPrice(request: QueryGetAmmPriceRequest): Promise<QueryGetAmmPriceResponse>;
  /** Queries a list of GetConsolidatedPrice items. */
  getConsolidatedPrice(request: QueryGetConsolidatedPriceRequest): Promise<QueryGetConsolidatedPriceResponse>;
  /** Queries a list of Staked items. */
  staked(request: QueryStakedRequest): Promise<QueryStakedResponse>;
  /** Queries a list of GetUsersPoolData items. */
  getUsersPoolData(request?: QueryGetUsersPoolDataRequest): Promise<QueryGetUsersPoolDataResponse>;
  /** Queries a list of GetConsolidatedPrice items. */
  getAllPrices(request?: QueryGetAllPricesRequest): Promise<QueryGetAllPricesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.portfolio = this.portfolio.bind(this);
    this.portfolioAll = this.portfolioAll.bind(this);
    this.calculateDiscount = this.calculateDiscount.bind(this);
    this.leverageLpTotal = this.leverageLpTotal.bind(this);
    this.rewardsTotal = this.rewardsTotal.bind(this);
    this.stakedPool = this.stakedPool.bind(this);
    this.perpetual = this.perpetual.bind(this);
    this.liquidTotal = this.liquidTotal.bind(this);
    this.lockedOrder = this.lockedOrder.bind(this);
    this.getAmmPrice = this.getAmmPrice.bind(this);
    this.getConsolidatedPrice = this.getConsolidatedPrice.bind(this);
    this.staked = this.staked.bind(this);
    this.getUsersPoolData = this.getUsersPoolData.bind(this);
    this.getAllPrices = this.getAllPrices.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tier.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  portfolio(request: QueryGetPortfolioRequest): Promise<QueryGetPortfolioResponse> {
    const data = QueryGetPortfolioRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tier.Query", "Portfolio", data);
    return promise.then(data => QueryGetPortfolioResponse.decode(new BinaryReader(data)));
  }
  portfolioAll(request: QueryAllPortfolioRequest = {
    pagination: undefined
  }): Promise<QueryAllPortfolioResponse> {
    const data = QueryAllPortfolioRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tier.Query", "PortfolioAll", data);
    return promise.then(data => QueryAllPortfolioResponse.decode(new BinaryReader(data)));
  }
  calculateDiscount(request: QueryCalculateDiscountRequest): Promise<QueryCalculateDiscountResponse> {
    const data = QueryCalculateDiscountRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tier.Query", "CalculateDiscount", data);
    return promise.then(data => QueryCalculateDiscountResponse.decode(new BinaryReader(data)));
  }
  leverageLpTotal(request: QueryLeverageLpTotalRequest): Promise<QueryLeverageLpTotalResponse> {
    const data = QueryLeverageLpTotalRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tier.Query", "LeverageLpTotal", data);
    return promise.then(data => QueryLeverageLpTotalResponse.decode(new BinaryReader(data)));
  }
  rewardsTotal(request: QueryRewardsTotalRequest): Promise<QueryRewardsTotalResponse> {
    const data = QueryRewardsTotalRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tier.Query", "RewardsTotal", data);
    return promise.then(data => QueryRewardsTotalResponse.decode(new BinaryReader(data)));
  }
  stakedPool(request: QueryStakedPoolRequest): Promise<QueryStakedPoolResponse> {
    const data = QueryStakedPoolRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tier.Query", "StakedPool", data);
    return promise.then(data => QueryStakedPoolResponse.decode(new BinaryReader(data)));
  }
  perpetual(request: QueryPerpetualRequest): Promise<QueryPerpetualResponse> {
    const data = QueryPerpetualRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tier.Query", "Perpetual", data);
    return promise.then(data => QueryPerpetualResponse.decode(new BinaryReader(data)));
  }
  liquidTotal(request: QueryLiquidTotalRequest): Promise<QueryLiquidTotalResponse> {
    const data = QueryLiquidTotalRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tier.Query", "LiquidTotal", data);
    return promise.then(data => QueryLiquidTotalResponse.decode(new BinaryReader(data)));
  }
  lockedOrder(request: QueryLockedOrderRequest): Promise<QueryLockedOrderResponse> {
    const data = QueryLockedOrderRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tier.Query", "LockedOrder", data);
    return promise.then(data => QueryLockedOrderResponse.decode(new BinaryReader(data)));
  }
  getAmmPrice(request: QueryGetAmmPriceRequest): Promise<QueryGetAmmPriceResponse> {
    const data = QueryGetAmmPriceRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tier.Query", "GetAmmPrice", data);
    return promise.then(data => QueryGetAmmPriceResponse.decode(new BinaryReader(data)));
  }
  getConsolidatedPrice(request: QueryGetConsolidatedPriceRequest): Promise<QueryGetConsolidatedPriceResponse> {
    const data = QueryGetConsolidatedPriceRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tier.Query", "GetConsolidatedPrice", data);
    return promise.then(data => QueryGetConsolidatedPriceResponse.decode(new BinaryReader(data)));
  }
  staked(request: QueryStakedRequest): Promise<QueryStakedResponse> {
    const data = QueryStakedRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tier.Query", "Staked", data);
    return promise.then(data => QueryStakedResponse.decode(new BinaryReader(data)));
  }
  getUsersPoolData(request: QueryGetUsersPoolDataRequest = {
    pagination: undefined
  }): Promise<QueryGetUsersPoolDataResponse> {
    const data = QueryGetUsersPoolDataRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tier.Query", "GetUsersPoolData", data);
    return promise.then(data => QueryGetUsersPoolDataResponse.decode(new BinaryReader(data)));
  }
  getAllPrices(request: QueryGetAllPricesRequest = {
    pagination: undefined
  }): Promise<QueryGetAllPricesResponse> {
    const data = QueryGetAllPricesRequest.encode(request).finish();
    const promise = this.rpc.request("elys.tier.Query", "GetAllPrices", data);
    return promise.then(data => QueryGetAllPricesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    portfolio(request: QueryGetPortfolioRequest): Promise<QueryGetPortfolioResponse> {
      return queryService.portfolio(request);
    },
    portfolioAll(request?: QueryAllPortfolioRequest): Promise<QueryAllPortfolioResponse> {
      return queryService.portfolioAll(request);
    },
    calculateDiscount(request: QueryCalculateDiscountRequest): Promise<QueryCalculateDiscountResponse> {
      return queryService.calculateDiscount(request);
    },
    leverageLpTotal(request: QueryLeverageLpTotalRequest): Promise<QueryLeverageLpTotalResponse> {
      return queryService.leverageLpTotal(request);
    },
    rewardsTotal(request: QueryRewardsTotalRequest): Promise<QueryRewardsTotalResponse> {
      return queryService.rewardsTotal(request);
    },
    stakedPool(request: QueryStakedPoolRequest): Promise<QueryStakedPoolResponse> {
      return queryService.stakedPool(request);
    },
    perpetual(request: QueryPerpetualRequest): Promise<QueryPerpetualResponse> {
      return queryService.perpetual(request);
    },
    liquidTotal(request: QueryLiquidTotalRequest): Promise<QueryLiquidTotalResponse> {
      return queryService.liquidTotal(request);
    },
    lockedOrder(request: QueryLockedOrderRequest): Promise<QueryLockedOrderResponse> {
      return queryService.lockedOrder(request);
    },
    getAmmPrice(request: QueryGetAmmPriceRequest): Promise<QueryGetAmmPriceResponse> {
      return queryService.getAmmPrice(request);
    },
    getConsolidatedPrice(request: QueryGetConsolidatedPriceRequest): Promise<QueryGetConsolidatedPriceResponse> {
      return queryService.getConsolidatedPrice(request);
    },
    staked(request: QueryStakedRequest): Promise<QueryStakedResponse> {
      return queryService.staked(request);
    },
    getUsersPoolData(request?: QueryGetUsersPoolDataRequest): Promise<QueryGetUsersPoolDataResponse> {
      return queryService.getUsersPoolData(request);
    },
    getAllPrices(request?: QueryGetAllPricesRequest): Promise<QueryGetAllPricesResponse> {
      return queryService.getAllPrices(request);
    }
  };
};