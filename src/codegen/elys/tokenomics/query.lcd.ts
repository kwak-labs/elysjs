import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetAirdropRequest, QueryGetAirdropResponseSDKType, QueryAllAirdropRequest, QueryAllAirdropResponseSDKType, QueryGetGenesisInflationRequest, QueryGetGenesisInflationResponseSDKType, QueryGetTimeBasedInflationRequest, QueryGetTimeBasedInflationResponseSDKType, QueryAllTimeBasedInflationRequest, QueryAllTimeBasedInflationResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.airdrop = this.airdrop.bind(this);
    this.airdropAll = this.airdropAll.bind(this);
    this.genesisInflation = this.genesisInflation.bind(this);
    this.timeBasedInflation = this.timeBasedInflation.bind(this);
    this.timeBasedInflationAll = this.timeBasedInflationAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `elys-network/elys/tokenomics/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Airdrop items. */
  async airdrop(params: QueryGetAirdropRequest): Promise<QueryGetAirdropResponseSDKType> {
    const endpoint = `elys-network/elys/tokenomics/airdrop/${params.intent}`;
    return await this.req.get<QueryGetAirdropResponseSDKType>(endpoint);
  }
  /* AirdropAll */
  async airdropAll(params: QueryAllAirdropRequest = {
    pagination: undefined
  }): Promise<QueryAllAirdropResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/tokenomics/airdrop`;
    return await this.req.get<QueryAllAirdropResponseSDKType>(endpoint, options);
  }
  /* Queries a GenesisInflation by index. */
  async genesisInflation(_params: QueryGetGenesisInflationRequest = {}): Promise<QueryGetGenesisInflationResponseSDKType> {
    const endpoint = `elys-network/elys/tokenomics/genesis_inflation`;
    return await this.req.get<QueryGetGenesisInflationResponseSDKType>(endpoint);
  }
  /* Queries a list of TimeBasedInflation items. */
  async timeBasedInflation(params: QueryGetTimeBasedInflationRequest): Promise<QueryGetTimeBasedInflationResponseSDKType> {
    const endpoint = `elys-network/elys/tokenomics/time_based_inflation/${params.startBlockHeight}/${params.endBlockHeight}`;
    return await this.req.get<QueryGetTimeBasedInflationResponseSDKType>(endpoint);
  }
  /* TimeBasedInflationAll */
  async timeBasedInflationAll(params: QueryAllTimeBasedInflationRequest = {
    pagination: undefined
  }): Promise<QueryAllTimeBasedInflationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `elys-network/elys/tokenomics/time_based_inflation`;
    return await this.req.get<QueryAllTimeBasedInflationResponseSDKType>(endpoint, options);
  }
}