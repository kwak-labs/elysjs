import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { ParamsRequest, ParamsResponseSDKType, PositionsRequest, PositionsResponseSDKType, PositionsByPoolRequest, PositionsByPoolResponseSDKType, StatusRequest, StatusResponseSDKType, PositionsForAddressRequest, PositionsForAddressResponseSDKType, WhitelistRequest, WhitelistResponseSDKType, IsWhitelistedRequest, IsWhitelistedResponseSDKType, QueryGetPoolRequest, QueryGetPoolResponseSDKType, QueryAllPoolRequest, QueryAllPoolResponseSDKType, MTPRequest, MTPResponseSDKType } from "./query";
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
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: ParamsRequest = {}): Promise<ParamsResponseSDKType> {
    const endpoint = `elys-network/elys/margin/params`;
    return await this.req.get<ParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of GetPositions items. */
  async getPositions(params: PositionsRequest = {
    pagination: undefined
  }): Promise<PositionsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/margin/positions/${params.pagination.key}`;
    return await this.req.get<PositionsResponseSDKType>(endpoint, options);
  }
  /* Queries a list of GetPositionsByPool items. */
  async getPositionsByPool(params: PositionsByPoolRequest): Promise<PositionsByPoolResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/margin/mtps-by-pool/${params.ammPoolId}/${params.pagination.key}`;
    return await this.req.get<PositionsByPoolResponseSDKType>(endpoint, options);
  }
  /* Queries a list of GetStatus items. */
  async getStatus(_params: StatusRequest = {}): Promise<StatusResponseSDKType> {
    const endpoint = `elys-network/elys/margin/status`;
    return await this.req.get<StatusResponseSDKType>(endpoint);
  }
  /* Queries a list of GetPositionsForAddress items. */
  async getPositionsForAddress(params: PositionsForAddressRequest): Promise<PositionsForAddressResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/margin/mtps-for-address/${params.address}/${params.pagination.key}`;
    return await this.req.get<PositionsForAddressResponseSDKType>(endpoint, options);
  }
  /* Queries a list of GetWhitelist items. */
  async getWhitelist(params: WhitelistRequest = {
    pagination: undefined
  }): Promise<WhitelistResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/margin/whitelist/${params.pagination.key}`;
    return await this.req.get<WhitelistResponseSDKType>(endpoint, options);
  }
  /* Queries a list of IsWhitelisted items. */
  async isWhitelisted(params: IsWhitelistedRequest): Promise<IsWhitelistedResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    const endpoint = `elys-network/elys/margin/is-whitelisted`;
    return await this.req.get<IsWhitelistedResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Pool items. */
  async pool(params: QueryGetPoolRequest): Promise<QueryGetPoolResponseSDKType> {
    const endpoint = `elys-network/elys/margin/pool/${params.index}`;
    return await this.req.get<QueryGetPoolResponseSDKType>(endpoint);
  }
  /* Pools */
  async pools(params: QueryAllPoolRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/margin/pool/${params.pagination.key}`;
    return await this.req.get<QueryAllPoolResponseSDKType>(endpoint, options);
  }
  /* Queries a list of MTP items. */
  async mTP(params: MTPRequest): Promise<MTPResponseSDKType> {
    const endpoint = `elys-network/elys/margin/mtp/${params.address}/${params.id}`;
    return await this.req.get<MTPResponseSDKType>(endpoint);
  }
}