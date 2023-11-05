import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryBandPriceRequest, QueryBandPriceResponseSDKType, QueryLastBandRequestIdRequest, QueryLastBandRequestIdResponseSDKType, QueryGetAssetInfoRequest, QueryGetAssetInfoResponseSDKType, QueryAllAssetInfoRequest, QueryAllAssetInfoResponseSDKType, QueryGetPriceRequest, QueryGetPriceResponseSDKType, QueryAllPriceRequest, QueryAllPriceResponseSDKType, QueryGetPriceFeederRequest, QueryGetPriceFeederResponseSDKType, QueryAllPriceFeederRequest, QueryAllPriceFeederResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.bandPriceResult = this.bandPriceResult.bind(this);
    this.lastBandRequestId = this.lastBandRequestId.bind(this);
    this.assetInfo = this.assetInfo.bind(this);
    this.assetInfoAll = this.assetInfoAll.bind(this);
    this.price = this.price.bind(this);
    this.priceAll = this.priceAll.bind(this);
    this.priceFeeder = this.priceFeeder.bind(this);
    this.priceFeederAll = this.priceFeederAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `elys-network/elys/oracle/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* BandPriceResult defines a rpc handler method for MsgRequestBandPrice. */
  async bandPriceResult(params: QueryBandPriceRequest): Promise<QueryBandPriceResponseSDKType> {
    const endpoint = `elys/oracle/band_price_result/${params.requestId}`;
    return await this.req.get<QueryBandPriceResponseSDKType>(endpoint);
  }
  /* LastBandRequestId query the last BandPrice result id */
  async lastBandRequestId(_params: QueryLastBandRequestIdRequest = {}): Promise<QueryLastBandRequestIdResponseSDKType> {
    const endpoint = `elys/oracle/last_band_price_request_id`;
    return await this.req.get<QueryLastBandRequestIdResponseSDKType>(endpoint);
  }
  /* Queries a AssetInfo by denom. */
  async assetInfo(params: QueryGetAssetInfoRequest): Promise<QueryGetAssetInfoResponseSDKType> {
    const endpoint = `elys-network/elys/oracle/asset_info/${params.denom}`;
    return await this.req.get<QueryGetAssetInfoResponseSDKType>(endpoint);
  }
  /* Queries a list of AssetInfo items. */
  async assetInfoAll(params: QueryAllAssetInfoRequest = {
    pagination: undefined
  }): Promise<QueryAllAssetInfoResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/oracle/asset_info`;
    return await this.req.get<QueryAllAssetInfoResponseSDKType>(endpoint, options);
  }
  /* Queries a Price by asset. */
  async price(params: QueryGetPriceRequest): Promise<QueryGetPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.asset !== "undefined") {
      options.params.asset = params.asset;
    }
    if (typeof params?.source !== "undefined") {
      options.params.source = params.source;
    }
    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }
    const endpoint = `elys-network/elys/oracle/price`;
    return await this.req.get<QueryGetPriceResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Price items. */
  async priceAll(params: QueryAllPriceRequest = {
    pagination: undefined
  }): Promise<QueryAllPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/oracle/price`;
    return await this.req.get<QueryAllPriceResponseSDKType>(endpoint, options);
  }
  /* Queries a PriceFeeder by feeder. */
  async priceFeeder(params: QueryGetPriceFeederRequest): Promise<QueryGetPriceFeederResponseSDKType> {
    const endpoint = `elys-network/elys/oracle/price_feeder/${params.feeder}`;
    return await this.req.get<QueryGetPriceFeederResponseSDKType>(endpoint);
  }
  /* Queries a list of PriceFeeder items. */
  async priceFeederAll(params: QueryAllPriceFeederRequest = {
    pagination: undefined
  }): Promise<QueryAllPriceFeederResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/oracle/price_feeder`;
    return await this.req.get<QueryAllPriceFeederResponseSDKType>(endpoint, options);
  }
}