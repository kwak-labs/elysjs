import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetEntryRequest, QueryGetEntryResponseSDKType, QueryAllEntryRequest, QueryAllEntryResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.entry = this.entry.bind(this);
    this.entryAll = this.entryAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `elys-network/elys/assetprofile/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Entry items. */
  async entry(params: QueryGetEntryRequest): Promise<QueryGetEntryResponseSDKType> {
    const endpoint = `elys-network/elys/assetprofile/entry/${params.baseDenom}`;
    return await this.req.get<QueryGetEntryResponseSDKType>(endpoint);
  }
  /* EntryAll */
  async entryAll(params: QueryAllEntryRequest = {
    pagination: undefined
  }): Promise<QueryAllEntryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/assetprofile/entry`;
    return await this.req.get<QueryAllEntryResponseSDKType>(endpoint, options);
  }
}