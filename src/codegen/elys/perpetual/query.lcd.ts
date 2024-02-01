import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { ParamsRequest, ParamsResponseSDKType, PositionsRequest, PositionsResponseSDKType, PositionsByPoolRequest, PositionsByPoolResponseSDKType, StatusRequest, StatusResponseSDKType, PositionsForAddressRequest, PositionsForAddressResponseSDKType, WhitelistRequest, WhitelistResponseSDKType, IsWhitelistedRequest, IsWhitelistedResponseSDKType, QueryGetPoolRequest, QueryGetPoolResponseSDKType, QueryAllPoolRequest, QueryAllPoolResponseSDKType, MTPRequest, MTPResponseSDKType, QueryOpenEstimationRequest, QueryOpenEstimationResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: ParamsRequest = {}): Promise<ParamsResponseSDKType> {
    const endpoint = `elys-network/elys/perpetual/params`;
    return await this.req.get<ParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of positions. */
  async getPositions(params: PositionsRequest = {
    pagination: undefined
  }): Promise<PositionsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/perpetual/positions/${params.pagination.key}`;
    return await this.req.get<PositionsResponseSDKType>(endpoint, options);
  }
  /* Queries a list of mtp positions by pool. */
  async getPositionsByPool(params: PositionsByPoolRequest): Promise<PositionsByPoolResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/perpetual/mtps-by-pool/${params.ammPoolId}/${params.pagination.key}`;
    return await this.req.get<PositionsByPoolResponseSDKType>(endpoint, options);
  }
  /* Retuns the total number of open and lifetime mtps. */
  async getStatus(_params: StatusRequest = {}): Promise<StatusResponseSDKType> {
    const endpoint = `elys-network/elys/perpetual/status`;
    return await this.req.get<StatusResponseSDKType>(endpoint);
  }
  /* Queries a list of mtp positions for a given address. */
  async getPositionsForAddress(params: PositionsForAddressRequest): Promise<PositionsForAddressResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/perpetual/mtps-for-address/${params.address}/${params.pagination.key}`;
    return await this.req.get<PositionsForAddressResponseSDKType>(endpoint, options);
  }
  /* Queries a list of whitelisted addresses. */
  async getWhitelist(params: WhitelistRequest = {
    pagination: undefined
  }): Promise<WhitelistResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/perpetual/whitelist/${params.pagination.key}`;
    return await this.req.get<WhitelistResponseSDKType>(endpoint, options);
  }
  /* Is an address whitelisted? */
  async isWhitelisted(params: IsWhitelistedRequest): Promise<IsWhitelistedResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    const endpoint = `elys-network/elys/perpetual/is-whitelisted`;
    return await this.req.get<IsWhitelistedResponseSDKType>(endpoint, options);
  }
  /* Queries a single pool given its index. */
  async pool(params: QueryGetPoolRequest): Promise<QueryGetPoolResponseSDKType> {
    const endpoint = `elys-network/elys/perpetual/pool/${params.index}`;
    return await this.req.get<QueryGetPoolResponseSDKType>(endpoint);
  }
  /* Queries a list of all pools. */
  async pools(params: QueryAllPoolRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/perpetual/pool/${params.pagination.key}`;
    return await this.req.get<QueryAllPoolResponseSDKType>(endpoint, options);
  }
  /* Queries a single mtp position given its address and id. */
  async mTP(params: MTPRequest): Promise<MTPResponseSDKType> {
    const endpoint = `elys-network/elys/perpetual/mtp/${params.address}/${params.id}`;
    return await this.req.get<MTPResponseSDKType>(endpoint);
  }
  /* Queries an estimation of a new open position details. */
  async openEstimation(params: QueryOpenEstimationRequest): Promise<QueryOpenEstimationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.position !== "undefined") {
      options.params.position = params.position;
    }
    if (typeof params?.leverage !== "undefined") {
      options.params.leverage = params.leverage;
    }
    if (typeof params?.tradingAsset !== "undefined") {
      options.params.trading_asset = params.tradingAsset;
    }
    if (typeof params?.collateral !== "undefined") {
      options.params.collateral = params.collateral;
    }
    if (typeof params?.discount !== "undefined") {
      options.params.discount = params.discount;
    }
    if (typeof params?.takeProfitPrice !== "undefined") {
      options.params.take_profit_price = params.takeProfitPrice;
    }
    const endpoint = `elys-network/elys/perpetual/open-estimation`;
    return await this.req.get<QueryOpenEstimationResponseSDKType>(endpoint, options);
  }
}