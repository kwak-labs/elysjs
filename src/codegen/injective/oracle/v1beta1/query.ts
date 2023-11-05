import { OracleType, OracleInfo, OracleInfoAmino, OracleInfoSDKType, Params, ParamsAmino, ParamsSDKType, BandPriceState, BandPriceStateAmino, BandPriceStateSDKType, PriceFeedState, PriceFeedStateAmino, PriceFeedStateSDKType, CoinbasePriceState, CoinbasePriceStateAmino, CoinbasePriceStateSDKType, PriceState, PriceStateAmino, PriceStateSDKType, PriceRecords, PriceRecordsAmino, PriceRecordsSDKType, MetadataStatistics, MetadataStatisticsAmino, MetadataStatisticsSDKType, PriceRecord, PriceRecordAmino, PriceRecordSDKType, ProviderInfo, ProviderInfoAmino, ProviderInfoSDKType, ProviderState, ProviderStateAmino, ProviderStateSDKType, oracleTypeFromJSON } from "./oracle";
import { GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** QueryOracleParamsRequest is the request type for the Query/OracleParams RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryOracleParamsRequest is the request type for the Query/OracleParams RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryOracleParamsRequest is the request type for the Query/OracleParams RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryOracleParamsResponse is the response type for the Query/OracleParams RPC method. */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryOracleParamsResponse is the response type for the Query/OracleParams RPC method. */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryOracleParamsResponse is the response type for the Query/OracleParams RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryBandRelayersRequest is the request type for the Query/BandRelayers RPC method. */
export interface QueryBandRelayersRequest {}
export interface QueryBandRelayersRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersRequest";
  value: Uint8Array;
}
/** QueryBandRelayersRequest is the request type for the Query/BandRelayers RPC method. */
export interface QueryBandRelayersRequestAmino {}
export interface QueryBandRelayersRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryBandRelayersRequest";
  value: QueryBandRelayersRequestAmino;
}
/** QueryBandRelayersRequest is the request type for the Query/BandRelayers RPC method. */
export interface QueryBandRelayersRequestSDKType {}
/** QueryBandRelayersResponse is the response type for the Query/BandRelayers RPC method. */
export interface QueryBandRelayersResponse {
  relayers: string[];
}
export interface QueryBandRelayersResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersResponse";
  value: Uint8Array;
}
/** QueryBandRelayersResponse is the response type for the Query/BandRelayers RPC method. */
export interface QueryBandRelayersResponseAmino {
  relayers: string[];
}
export interface QueryBandRelayersResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryBandRelayersResponse";
  value: QueryBandRelayersResponseAmino;
}
/** QueryBandRelayersResponse is the response type for the Query/BandRelayers RPC method. */
export interface QueryBandRelayersResponseSDKType {
  relayers: string[];
}
/** QueryBandPriceStatesRequest is the request type for the Query/BandPriceStates RPC method. */
export interface QueryBandPriceStatesRequest {}
export interface QueryBandPriceStatesRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesRequest";
  value: Uint8Array;
}
/** QueryBandPriceStatesRequest is the request type for the Query/BandPriceStates RPC method. */
export interface QueryBandPriceStatesRequestAmino {}
export interface QueryBandPriceStatesRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryBandPriceStatesRequest";
  value: QueryBandPriceStatesRequestAmino;
}
/** QueryBandPriceStatesRequest is the request type for the Query/BandPriceStates RPC method. */
export interface QueryBandPriceStatesRequestSDKType {}
/** QueryBandPriceStatesResponse is the response type for the Query/BandPriceStates RPC method. */
export interface QueryBandPriceStatesResponse {
  priceStates: BandPriceState[];
}
export interface QueryBandPriceStatesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesResponse";
  value: Uint8Array;
}
/** QueryBandPriceStatesResponse is the response type for the Query/BandPriceStates RPC method. */
export interface QueryBandPriceStatesResponseAmino {
  price_states: BandPriceStateAmino[];
}
export interface QueryBandPriceStatesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryBandPriceStatesResponse";
  value: QueryBandPriceStatesResponseAmino;
}
/** QueryBandPriceStatesResponse is the response type for the Query/BandPriceStates RPC method. */
export interface QueryBandPriceStatesResponseSDKType {
  price_states: BandPriceStateSDKType[];
}
/** QueryBandIBCPriceStatesRequest is the request type for the Query/BandIBCPriceStates RPC method. */
export interface QueryBandIBCPriceStatesRequest {}
export interface QueryBandIBCPriceStatesRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesRequest";
  value: Uint8Array;
}
/** QueryBandIBCPriceStatesRequest is the request type for the Query/BandIBCPriceStates RPC method. */
export interface QueryBandIBCPriceStatesRequestAmino {}
export interface QueryBandIBCPriceStatesRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesRequest";
  value: QueryBandIBCPriceStatesRequestAmino;
}
/** QueryBandIBCPriceStatesRequest is the request type for the Query/BandIBCPriceStates RPC method. */
export interface QueryBandIBCPriceStatesRequestSDKType {}
/** QueryBandIBCPriceStatesResponse is the response type for the Query/BandIBCPriceStates RPC method. */
export interface QueryBandIBCPriceStatesResponse {
  priceStates: BandPriceState[];
}
export interface QueryBandIBCPriceStatesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesResponse";
  value: Uint8Array;
}
/** QueryBandIBCPriceStatesResponse is the response type for the Query/BandIBCPriceStates RPC method. */
export interface QueryBandIBCPriceStatesResponseAmino {
  price_states: BandPriceStateAmino[];
}
export interface QueryBandIBCPriceStatesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesResponse";
  value: QueryBandIBCPriceStatesResponseAmino;
}
/** QueryBandIBCPriceStatesResponse is the response type for the Query/BandIBCPriceStates RPC method. */
export interface QueryBandIBCPriceStatesResponseSDKType {
  price_states: BandPriceStateSDKType[];
}
/** QueryPriceFeedPriceStatesRequest is the request type for the Query/PriceFeedPriceStates RPC method. */
export interface QueryPriceFeedPriceStatesRequest {}
export interface QueryPriceFeedPriceStatesRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesRequest";
  value: Uint8Array;
}
/** QueryPriceFeedPriceStatesRequest is the request type for the Query/PriceFeedPriceStates RPC method. */
export interface QueryPriceFeedPriceStatesRequestAmino {}
export interface QueryPriceFeedPriceStatesRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesRequest";
  value: QueryPriceFeedPriceStatesRequestAmino;
}
/** QueryPriceFeedPriceStatesRequest is the request type for the Query/PriceFeedPriceStates RPC method. */
export interface QueryPriceFeedPriceStatesRequestSDKType {}
/** QueryPriceFeedPriceStatesResponse is the response type for the Query/PriceFeedPriceStates RPC method. */
export interface QueryPriceFeedPriceStatesResponse {
  priceStates: PriceFeedState[];
}
export interface QueryPriceFeedPriceStatesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesResponse";
  value: Uint8Array;
}
/** QueryPriceFeedPriceStatesResponse is the response type for the Query/PriceFeedPriceStates RPC method. */
export interface QueryPriceFeedPriceStatesResponseAmino {
  price_states: PriceFeedStateAmino[];
}
export interface QueryPriceFeedPriceStatesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesResponse";
  value: QueryPriceFeedPriceStatesResponseAmino;
}
/** QueryPriceFeedPriceStatesResponse is the response type for the Query/PriceFeedPriceStates RPC method. */
export interface QueryPriceFeedPriceStatesResponseSDKType {
  price_states: PriceFeedStateSDKType[];
}
/** QueryCoinbasePriceStatesRequest is the request type for the Query/CoinbasePriceStates RPC method. */
export interface QueryCoinbasePriceStatesRequest {}
export interface QueryCoinbasePriceStatesRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesRequest";
  value: Uint8Array;
}
/** QueryCoinbasePriceStatesRequest is the request type for the Query/CoinbasePriceStates RPC method. */
export interface QueryCoinbasePriceStatesRequestAmino {}
export interface QueryCoinbasePriceStatesRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesRequest";
  value: QueryCoinbasePriceStatesRequestAmino;
}
/** QueryCoinbasePriceStatesRequest is the request type for the Query/CoinbasePriceStates RPC method. */
export interface QueryCoinbasePriceStatesRequestSDKType {}
/** QueryCoinbasePriceStatesResponse is the response type for the Query/CoinbasePriceStates RPC method. */
export interface QueryCoinbasePriceStatesResponse {
  priceStates: CoinbasePriceState[];
}
export interface QueryCoinbasePriceStatesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesResponse";
  value: Uint8Array;
}
/** QueryCoinbasePriceStatesResponse is the response type for the Query/CoinbasePriceStates RPC method. */
export interface QueryCoinbasePriceStatesResponseAmino {
  price_states: CoinbasePriceStateAmino[];
}
export interface QueryCoinbasePriceStatesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesResponse";
  value: QueryCoinbasePriceStatesResponseAmino;
}
/** QueryCoinbasePriceStatesResponse is the response type for the Query/CoinbasePriceStates RPC method. */
export interface QueryCoinbasePriceStatesResponseSDKType {
  price_states: CoinbasePriceStateSDKType[];
}
/** QueryProviderPriceStateRequest is the request type for the Query/ProviderPriceState RPC method. */
export interface QueryProviderPriceStateRequest {
  provider: string;
  symbol: string;
}
export interface QueryProviderPriceStateRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateRequest";
  value: Uint8Array;
}
/** QueryProviderPriceStateRequest is the request type for the Query/ProviderPriceState RPC method. */
export interface QueryProviderPriceStateRequestAmino {
  provider: string;
  symbol: string;
}
export interface QueryProviderPriceStateRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryProviderPriceStateRequest";
  value: QueryProviderPriceStateRequestAmino;
}
/** QueryProviderPriceStateRequest is the request type for the Query/ProviderPriceState RPC method. */
export interface QueryProviderPriceStateRequestSDKType {
  provider: string;
  symbol: string;
}
/** QueryProviderPriceStatesResponse is the response type for the Query/ProviderPriceStates RPC method. */
export interface QueryProviderPriceStateResponse {
  priceState?: PriceState;
}
export interface QueryProviderPriceStateResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateResponse";
  value: Uint8Array;
}
/** QueryProviderPriceStatesResponse is the response type for the Query/ProviderPriceStates RPC method. */
export interface QueryProviderPriceStateResponseAmino {
  price_state?: PriceStateAmino;
}
export interface QueryProviderPriceStateResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryProviderPriceStateResponse";
  value: QueryProviderPriceStateResponseAmino;
}
/** QueryProviderPriceStatesResponse is the response type for the Query/ProviderPriceStates RPC method. */
export interface QueryProviderPriceStateResponseSDKType {
  price_state?: PriceStateSDKType;
}
/** QueryModuleStateRequest is the request type for the Query/OracleModuleState RPC method. */
export interface QueryModuleStateRequest {}
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryModuleStateRequest";
  value: Uint8Array;
}
/** QueryModuleStateRequest is the request type for the Query/OracleModuleState RPC method. */
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
/** QueryModuleStateRequest is the request type for the Query/OracleModuleState RPC method. */
export interface QueryModuleStateRequestSDKType {}
/** QueryModuleStateResponse is the response type for the Query/OracleModuleState RPC method. */
export interface QueryModuleStateResponse {
  state?: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryModuleStateResponse";
  value: Uint8Array;
}
/** QueryModuleStateResponse is the response type for the Query/OracleModuleState RPC method. */
export interface QueryModuleStateResponseAmino {
  state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
/** QueryModuleStateResponse is the response type for the Query/OracleModuleState RPC method. */
export interface QueryModuleStateResponseSDKType {
  state?: GenesisStateSDKType;
}
export interface QueryHistoricalPriceRecordsRequest {
  oracle: OracleType;
  symbolId: string;
}
export interface QueryHistoricalPriceRecordsRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsRequest";
  value: Uint8Array;
}
export interface QueryHistoricalPriceRecordsRequestAmino {
  oracle: OracleType;
  symbol_id: string;
}
export interface QueryHistoricalPriceRecordsRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsRequest";
  value: QueryHistoricalPriceRecordsRequestAmino;
}
export interface QueryHistoricalPriceRecordsRequestSDKType {
  oracle: OracleType;
  symbol_id: string;
}
export interface QueryHistoricalPriceRecordsResponse {
  priceRecords: PriceRecords[];
}
export interface QueryHistoricalPriceRecordsResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsResponse";
  value: Uint8Array;
}
export interface QueryHistoricalPriceRecordsResponseAmino {
  price_records: PriceRecordsAmino[];
}
export interface QueryHistoricalPriceRecordsResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsResponse";
  value: QueryHistoricalPriceRecordsResponseAmino;
}
export interface QueryHistoricalPriceRecordsResponseSDKType {
  price_records: PriceRecordsSDKType[];
}
export interface OracleHistoryOptions {
  /**
   * MaxAge restricts the oracle price records oldest age in seconds from the current block time to consider.
   * A value of 0 means use all the records present on the chain.
   */
  maxAge: bigint;
  /** If IncludeRawHistory is true, the raw underlying data used for the computation is included in the response */
  includeRawHistory: boolean;
  /** If IncludeMetadata is true, metadata on the computation is included in the response */
  includeMetadata: boolean;
}
export interface OracleHistoryOptionsProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.OracleHistoryOptions";
  value: Uint8Array;
}
export interface OracleHistoryOptionsAmino {
  /**
   * MaxAge restricts the oracle price records oldest age in seconds from the current block time to consider.
   * A value of 0 means use all the records present on the chain.
   */
  max_age: string;
  /** If IncludeRawHistory is true, the raw underlying data used for the computation is included in the response */
  include_raw_history: boolean;
  /** If IncludeMetadata is true, metadata on the computation is included in the response */
  include_metadata: boolean;
}
export interface OracleHistoryOptionsAminoMsg {
  type: "/injective.oracle.v1beta1.OracleHistoryOptions";
  value: OracleHistoryOptionsAmino;
}
export interface OracleHistoryOptionsSDKType {
  max_age: bigint;
  include_raw_history: boolean;
  include_metadata: boolean;
}
/** QueryOracleVolatilityRequest is the request type for Query/OracleVolatility RPC method. */
export interface QueryOracleVolatilityRequest {
  baseInfo?: OracleInfo;
  quoteInfo?: OracleInfo;
  oracleHistoryOptions?: OracleHistoryOptions;
}
export interface QueryOracleVolatilityRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityRequest";
  value: Uint8Array;
}
/** QueryOracleVolatilityRequest is the request type for Query/OracleVolatility RPC method. */
export interface QueryOracleVolatilityRequestAmino {
  base_info?: OracleInfoAmino;
  quote_info?: OracleInfoAmino;
  oracle_history_options?: OracleHistoryOptionsAmino;
}
export interface QueryOracleVolatilityRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryOracleVolatilityRequest";
  value: QueryOracleVolatilityRequestAmino;
}
/** QueryOracleVolatilityRequest is the request type for Query/OracleVolatility RPC method. */
export interface QueryOracleVolatilityRequestSDKType {
  base_info?: OracleInfoSDKType;
  quote_info?: OracleInfoSDKType;
  oracle_history_options?: OracleHistoryOptionsSDKType;
}
/** QueryOracleVolatilityResponse is the response type for Query/OracleVolatility RPC method. */
export interface QueryOracleVolatilityResponse {
  volatility: string;
  historyMetadata?: MetadataStatistics;
  rawHistory: PriceRecord[];
}
export interface QueryOracleVolatilityResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityResponse";
  value: Uint8Array;
}
/** QueryOracleVolatilityResponse is the response type for Query/OracleVolatility RPC method. */
export interface QueryOracleVolatilityResponseAmino {
  volatility: string;
  history_metadata?: MetadataStatisticsAmino;
  raw_history: PriceRecordAmino[];
}
export interface QueryOracleVolatilityResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryOracleVolatilityResponse";
  value: QueryOracleVolatilityResponseAmino;
}
/** QueryOracleVolatilityResponse is the response type for Query/OracleVolatility RPC method. */
export interface QueryOracleVolatilityResponseSDKType {
  volatility: string;
  history_metadata?: MetadataStatisticsSDKType;
  raw_history: PriceRecordSDKType[];
}
export interface QueryOracleProvidersInfoRequest {}
export interface QueryOracleProvidersInfoRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoRequest";
  value: Uint8Array;
}
export interface QueryOracleProvidersInfoRequestAmino {}
export interface QueryOracleProvidersInfoRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryOracleProvidersInfoRequest";
  value: QueryOracleProvidersInfoRequestAmino;
}
export interface QueryOracleProvidersInfoRequestSDKType {}
export interface QueryOracleProvidersInfoResponse {
  providers: ProviderInfo[];
}
export interface QueryOracleProvidersInfoResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoResponse";
  value: Uint8Array;
}
export interface QueryOracleProvidersInfoResponseAmino {
  providers: ProviderInfoAmino[];
}
export interface QueryOracleProvidersInfoResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryOracleProvidersInfoResponse";
  value: QueryOracleProvidersInfoResponseAmino;
}
export interface QueryOracleProvidersInfoResponseSDKType {
  providers: ProviderInfoSDKType[];
}
export interface QueryOracleProviderPricesRequest {
  provider: string;
}
export interface QueryOracleProviderPricesRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesRequest";
  value: Uint8Array;
}
export interface QueryOracleProviderPricesRequestAmino {
  provider: string;
}
export interface QueryOracleProviderPricesRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryOracleProviderPricesRequest";
  value: QueryOracleProviderPricesRequestAmino;
}
export interface QueryOracleProviderPricesRequestSDKType {
  provider: string;
}
export interface QueryOracleProviderPricesResponse {
  providerState: ProviderState[];
}
export interface QueryOracleProviderPricesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesResponse";
  value: Uint8Array;
}
export interface QueryOracleProviderPricesResponseAmino {
  providerState: ProviderStateAmino[];
}
export interface QueryOracleProviderPricesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryOracleProviderPricesResponse";
  value: QueryOracleProviderPricesResponseAmino;
}
export interface QueryOracleProviderPricesResponseSDKType {
  providerState: ProviderStateSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBandRelayersRequest(): QueryBandRelayersRequest {
  return {};
}
export const QueryBandRelayersRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersRequest",
  encode(_: QueryBandRelayersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBandRelayersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandRelayersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryBandRelayersRequest>): QueryBandRelayersRequest {
    const message = createBaseQueryBandRelayersRequest();
    return message;
  },
  fromAmino(_: QueryBandRelayersRequestAmino): QueryBandRelayersRequest {
    return {};
  },
  toAmino(_: QueryBandRelayersRequest): QueryBandRelayersRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBandRelayersRequestAminoMsg): QueryBandRelayersRequest {
    return QueryBandRelayersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBandRelayersRequestProtoMsg): QueryBandRelayersRequest {
    return QueryBandRelayersRequest.decode(message.value);
  },
  toProto(message: QueryBandRelayersRequest): Uint8Array {
    return QueryBandRelayersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBandRelayersRequest): QueryBandRelayersRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersRequest",
      value: QueryBandRelayersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBandRelayersResponse(): QueryBandRelayersResponse {
  return {
    relayers: []
  };
}
export const QueryBandRelayersResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersResponse",
  encode(message: QueryBandRelayersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.relayers) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBandRelayersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandRelayersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBandRelayersResponse>): QueryBandRelayersResponse {
    const message = createBaseQueryBandRelayersResponse();
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryBandRelayersResponseAmino): QueryBandRelayersResponse {
    return {
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  toAmino(message: QueryBandRelayersResponse): QueryBandRelayersResponseAmino {
    const obj: any = {};
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryBandRelayersResponseAminoMsg): QueryBandRelayersResponse {
    return QueryBandRelayersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBandRelayersResponseProtoMsg): QueryBandRelayersResponse {
    return QueryBandRelayersResponse.decode(message.value);
  },
  toProto(message: QueryBandRelayersResponse): Uint8Array {
    return QueryBandRelayersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBandRelayersResponse): QueryBandRelayersResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersResponse",
      value: QueryBandRelayersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBandPriceStatesRequest(): QueryBandPriceStatesRequest {
  return {};
}
export const QueryBandPriceStatesRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesRequest",
  encode(_: QueryBandPriceStatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBandPriceStatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandPriceStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryBandPriceStatesRequest>): QueryBandPriceStatesRequest {
    const message = createBaseQueryBandPriceStatesRequest();
    return message;
  },
  fromAmino(_: QueryBandPriceStatesRequestAmino): QueryBandPriceStatesRequest {
    return {};
  },
  toAmino(_: QueryBandPriceStatesRequest): QueryBandPriceStatesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBandPriceStatesRequestAminoMsg): QueryBandPriceStatesRequest {
    return QueryBandPriceStatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBandPriceStatesRequestProtoMsg): QueryBandPriceStatesRequest {
    return QueryBandPriceStatesRequest.decode(message.value);
  },
  toProto(message: QueryBandPriceStatesRequest): Uint8Array {
    return QueryBandPriceStatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBandPriceStatesRequest): QueryBandPriceStatesRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesRequest",
      value: QueryBandPriceStatesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBandPriceStatesResponse(): QueryBandPriceStatesResponse {
  return {
    priceStates: []
  };
}
export const QueryBandPriceStatesResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesResponse",
  encode(message: QueryBandPriceStatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceStates) {
      BandPriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBandPriceStatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandPriceStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceStates.push(BandPriceState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBandPriceStatesResponse>): QueryBandPriceStatesResponse {
    const message = createBaseQueryBandPriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => BandPriceState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBandPriceStatesResponseAmino): QueryBandPriceStatesResponse {
    return {
      priceStates: Array.isArray(object?.price_states) ? object.price_states.map((e: any) => BandPriceState.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryBandPriceStatesResponse): QueryBandPriceStatesResponseAmino {
    const obj: any = {};
    if (message.priceStates) {
      obj.price_states = message.priceStates.map(e => e ? BandPriceState.toAmino(e) : undefined);
    } else {
      obj.price_states = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryBandPriceStatesResponseAminoMsg): QueryBandPriceStatesResponse {
    return QueryBandPriceStatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBandPriceStatesResponseProtoMsg): QueryBandPriceStatesResponse {
    return QueryBandPriceStatesResponse.decode(message.value);
  },
  toProto(message: QueryBandPriceStatesResponse): Uint8Array {
    return QueryBandPriceStatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBandPriceStatesResponse): QueryBandPriceStatesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesResponse",
      value: QueryBandPriceStatesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBandIBCPriceStatesRequest(): QueryBandIBCPriceStatesRequest {
  return {};
}
export const QueryBandIBCPriceStatesRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesRequest",
  encode(_: QueryBandIBCPriceStatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBandIBCPriceStatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandIBCPriceStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryBandIBCPriceStatesRequest>): QueryBandIBCPriceStatesRequest {
    const message = createBaseQueryBandIBCPriceStatesRequest();
    return message;
  },
  fromAmino(_: QueryBandIBCPriceStatesRequestAmino): QueryBandIBCPriceStatesRequest {
    return {};
  },
  toAmino(_: QueryBandIBCPriceStatesRequest): QueryBandIBCPriceStatesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBandIBCPriceStatesRequestAminoMsg): QueryBandIBCPriceStatesRequest {
    return QueryBandIBCPriceStatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBandIBCPriceStatesRequestProtoMsg): QueryBandIBCPriceStatesRequest {
    return QueryBandIBCPriceStatesRequest.decode(message.value);
  },
  toProto(message: QueryBandIBCPriceStatesRequest): Uint8Array {
    return QueryBandIBCPriceStatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBandIBCPriceStatesRequest): QueryBandIBCPriceStatesRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesRequest",
      value: QueryBandIBCPriceStatesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBandIBCPriceStatesResponse(): QueryBandIBCPriceStatesResponse {
  return {
    priceStates: []
  };
}
export const QueryBandIBCPriceStatesResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesResponse",
  encode(message: QueryBandIBCPriceStatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceStates) {
      BandPriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBandIBCPriceStatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandIBCPriceStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceStates.push(BandPriceState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBandIBCPriceStatesResponse>): QueryBandIBCPriceStatesResponse {
    const message = createBaseQueryBandIBCPriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => BandPriceState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBandIBCPriceStatesResponseAmino): QueryBandIBCPriceStatesResponse {
    return {
      priceStates: Array.isArray(object?.price_states) ? object.price_states.map((e: any) => BandPriceState.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryBandIBCPriceStatesResponse): QueryBandIBCPriceStatesResponseAmino {
    const obj: any = {};
    if (message.priceStates) {
      obj.price_states = message.priceStates.map(e => e ? BandPriceState.toAmino(e) : undefined);
    } else {
      obj.price_states = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryBandIBCPriceStatesResponseAminoMsg): QueryBandIBCPriceStatesResponse {
    return QueryBandIBCPriceStatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBandIBCPriceStatesResponseProtoMsg): QueryBandIBCPriceStatesResponse {
    return QueryBandIBCPriceStatesResponse.decode(message.value);
  },
  toProto(message: QueryBandIBCPriceStatesResponse): Uint8Array {
    return QueryBandIBCPriceStatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBandIBCPriceStatesResponse): QueryBandIBCPriceStatesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesResponse",
      value: QueryBandIBCPriceStatesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPriceFeedPriceStatesRequest(): QueryPriceFeedPriceStatesRequest {
  return {};
}
export const QueryPriceFeedPriceStatesRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesRequest",
  encode(_: QueryPriceFeedPriceStatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPriceFeedPriceStatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceFeedPriceStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryPriceFeedPriceStatesRequest>): QueryPriceFeedPriceStatesRequest {
    const message = createBaseQueryPriceFeedPriceStatesRequest();
    return message;
  },
  fromAmino(_: QueryPriceFeedPriceStatesRequestAmino): QueryPriceFeedPriceStatesRequest {
    return {};
  },
  toAmino(_: QueryPriceFeedPriceStatesRequest): QueryPriceFeedPriceStatesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPriceFeedPriceStatesRequestAminoMsg): QueryPriceFeedPriceStatesRequest {
    return QueryPriceFeedPriceStatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceFeedPriceStatesRequestProtoMsg): QueryPriceFeedPriceStatesRequest {
    return QueryPriceFeedPriceStatesRequest.decode(message.value);
  },
  toProto(message: QueryPriceFeedPriceStatesRequest): Uint8Array {
    return QueryPriceFeedPriceStatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceFeedPriceStatesRequest): QueryPriceFeedPriceStatesRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesRequest",
      value: QueryPriceFeedPriceStatesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPriceFeedPriceStatesResponse(): QueryPriceFeedPriceStatesResponse {
  return {
    priceStates: []
  };
}
export const QueryPriceFeedPriceStatesResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesResponse",
  encode(message: QueryPriceFeedPriceStatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceStates) {
      PriceFeedState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPriceFeedPriceStatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceFeedPriceStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceStates.push(PriceFeedState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPriceFeedPriceStatesResponse>): QueryPriceFeedPriceStatesResponse {
    const message = createBaseQueryPriceFeedPriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => PriceFeedState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPriceFeedPriceStatesResponseAmino): QueryPriceFeedPriceStatesResponse {
    return {
      priceStates: Array.isArray(object?.price_states) ? object.price_states.map((e: any) => PriceFeedState.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryPriceFeedPriceStatesResponse): QueryPriceFeedPriceStatesResponseAmino {
    const obj: any = {};
    if (message.priceStates) {
      obj.price_states = message.priceStates.map(e => e ? PriceFeedState.toAmino(e) : undefined);
    } else {
      obj.price_states = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPriceFeedPriceStatesResponseAminoMsg): QueryPriceFeedPriceStatesResponse {
    return QueryPriceFeedPriceStatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceFeedPriceStatesResponseProtoMsg): QueryPriceFeedPriceStatesResponse {
    return QueryPriceFeedPriceStatesResponse.decode(message.value);
  },
  toProto(message: QueryPriceFeedPriceStatesResponse): Uint8Array {
    return QueryPriceFeedPriceStatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceFeedPriceStatesResponse): QueryPriceFeedPriceStatesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesResponse",
      value: QueryPriceFeedPriceStatesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCoinbasePriceStatesRequest(): QueryCoinbasePriceStatesRequest {
  return {};
}
export const QueryCoinbasePriceStatesRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesRequest",
  encode(_: QueryCoinbasePriceStatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCoinbasePriceStatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCoinbasePriceStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryCoinbasePriceStatesRequest>): QueryCoinbasePriceStatesRequest {
    const message = createBaseQueryCoinbasePriceStatesRequest();
    return message;
  },
  fromAmino(_: QueryCoinbasePriceStatesRequestAmino): QueryCoinbasePriceStatesRequest {
    return {};
  },
  toAmino(_: QueryCoinbasePriceStatesRequest): QueryCoinbasePriceStatesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCoinbasePriceStatesRequestAminoMsg): QueryCoinbasePriceStatesRequest {
    return QueryCoinbasePriceStatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCoinbasePriceStatesRequestProtoMsg): QueryCoinbasePriceStatesRequest {
    return QueryCoinbasePriceStatesRequest.decode(message.value);
  },
  toProto(message: QueryCoinbasePriceStatesRequest): Uint8Array {
    return QueryCoinbasePriceStatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCoinbasePriceStatesRequest): QueryCoinbasePriceStatesRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesRequest",
      value: QueryCoinbasePriceStatesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCoinbasePriceStatesResponse(): QueryCoinbasePriceStatesResponse {
  return {
    priceStates: []
  };
}
export const QueryCoinbasePriceStatesResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesResponse",
  encode(message: QueryCoinbasePriceStatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceStates) {
      CoinbasePriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCoinbasePriceStatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCoinbasePriceStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceStates.push(CoinbasePriceState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCoinbasePriceStatesResponse>): QueryCoinbasePriceStatesResponse {
    const message = createBaseQueryCoinbasePriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => CoinbasePriceState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCoinbasePriceStatesResponseAmino): QueryCoinbasePriceStatesResponse {
    return {
      priceStates: Array.isArray(object?.price_states) ? object.price_states.map((e: any) => CoinbasePriceState.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryCoinbasePriceStatesResponse): QueryCoinbasePriceStatesResponseAmino {
    const obj: any = {};
    if (message.priceStates) {
      obj.price_states = message.priceStates.map(e => e ? CoinbasePriceState.toAmino(e) : undefined);
    } else {
      obj.price_states = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryCoinbasePriceStatesResponseAminoMsg): QueryCoinbasePriceStatesResponse {
    return QueryCoinbasePriceStatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCoinbasePriceStatesResponseProtoMsg): QueryCoinbasePriceStatesResponse {
    return QueryCoinbasePriceStatesResponse.decode(message.value);
  },
  toProto(message: QueryCoinbasePriceStatesResponse): Uint8Array {
    return QueryCoinbasePriceStatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCoinbasePriceStatesResponse): QueryCoinbasePriceStatesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesResponse",
      value: QueryCoinbasePriceStatesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProviderPriceStateRequest(): QueryProviderPriceStateRequest {
  return {
    provider: "",
    symbol: ""
  };
}
export const QueryProviderPriceStateRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateRequest",
  encode(message: QueryProviderPriceStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderPriceStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderPriceStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryProviderPriceStateRequest>): QueryProviderPriceStateRequest {
    const message = createBaseQueryProviderPriceStateRequest();
    message.provider = object.provider ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  },
  fromAmino(object: QueryProviderPriceStateRequestAmino): QueryProviderPriceStateRequest {
    return {
      provider: object.provider,
      symbol: object.symbol
    };
  },
  toAmino(message: QueryProviderPriceStateRequest): QueryProviderPriceStateRequestAmino {
    const obj: any = {};
    obj.provider = message.provider;
    obj.symbol = message.symbol;
    return obj;
  },
  fromAminoMsg(object: QueryProviderPriceStateRequestAminoMsg): QueryProviderPriceStateRequest {
    return QueryProviderPriceStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderPriceStateRequestProtoMsg): QueryProviderPriceStateRequest {
    return QueryProviderPriceStateRequest.decode(message.value);
  },
  toProto(message: QueryProviderPriceStateRequest): Uint8Array {
    return QueryProviderPriceStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderPriceStateRequest): QueryProviderPriceStateRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateRequest",
      value: QueryProviderPriceStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProviderPriceStateResponse(): QueryProviderPriceStateResponse {
  return {
    priceState: undefined
  };
}
export const QueryProviderPriceStateResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateResponse",
  encode(message: QueryProviderPriceStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceState !== undefined) {
      PriceState.encode(message.priceState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderPriceStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderPriceStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceState = PriceState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryProviderPriceStateResponse>): QueryProviderPriceStateResponse {
    const message = createBaseQueryProviderPriceStateResponse();
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    return message;
  },
  fromAmino(object: QueryProviderPriceStateResponseAmino): QueryProviderPriceStateResponse {
    return {
      priceState: object?.price_state ? PriceState.fromAmino(object.price_state) : undefined
    };
  },
  toAmino(message: QueryProviderPriceStateResponse): QueryProviderPriceStateResponseAmino {
    const obj: any = {};
    obj.price_state = message.priceState ? PriceState.toAmino(message.priceState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProviderPriceStateResponseAminoMsg): QueryProviderPriceStateResponse {
    return QueryProviderPriceStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderPriceStateResponseProtoMsg): QueryProviderPriceStateResponse {
    return QueryProviderPriceStateResponse.decode(message.value);
  },
  toProto(message: QueryProviderPriceStateResponse): Uint8Array {
    return QueryProviderPriceStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderPriceStateResponse): QueryProviderPriceStateResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateResponse",
      value: QueryProviderPriceStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryModuleStateRequest",
  encode(_: QueryModuleStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest {
    return {};
  },
  toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.decode(message.value);
  },
  toProto(message: QueryModuleStateRequest): Uint8Array {
    return QueryModuleStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryModuleStateRequest",
      value: QueryModuleStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}
export const QueryModuleStateResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryModuleStateResponse",
  encode(message: QueryModuleStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = GenesisState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse {
    return {
      state: object?.state ? GenesisState.fromAmino(object.state) : undefined
    };
  },
  toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.decode(message.value);
  },
  toProto(message: QueryModuleStateResponse): Uint8Array {
    return QueryModuleStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHistoricalPriceRecordsRequest(): QueryHistoricalPriceRecordsRequest {
  return {
    oracle: 0,
    symbolId: ""
  };
}
export const QueryHistoricalPriceRecordsRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsRequest",
  encode(message: QueryHistoricalPriceRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracle !== 0) {
      writer.uint32(8).int32(message.oracle);
    }
    if (message.symbolId !== "") {
      writer.uint32(18).string(message.symbolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalPriceRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalPriceRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracle = (reader.int32() as any);
          break;
        case 2:
          message.symbolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHistoricalPriceRecordsRequest>): QueryHistoricalPriceRecordsRequest {
    const message = createBaseQueryHistoricalPriceRecordsRequest();
    message.oracle = object.oracle ?? 0;
    message.symbolId = object.symbolId ?? "";
    return message;
  },
  fromAmino(object: QueryHistoricalPriceRecordsRequestAmino): QueryHistoricalPriceRecordsRequest {
    return {
      oracle: isSet(object.oracle) ? oracleTypeFromJSON(object.oracle) : -1,
      symbolId: object.symbol_id
    };
  },
  toAmino(message: QueryHistoricalPriceRecordsRequest): QueryHistoricalPriceRecordsRequestAmino {
    const obj: any = {};
    obj.oracle = message.oracle;
    obj.symbol_id = message.symbolId;
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalPriceRecordsRequestAminoMsg): QueryHistoricalPriceRecordsRequest {
    return QueryHistoricalPriceRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalPriceRecordsRequestProtoMsg): QueryHistoricalPriceRecordsRequest {
    return QueryHistoricalPriceRecordsRequest.decode(message.value);
  },
  toProto(message: QueryHistoricalPriceRecordsRequest): Uint8Array {
    return QueryHistoricalPriceRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalPriceRecordsRequest): QueryHistoricalPriceRecordsRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsRequest",
      value: QueryHistoricalPriceRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHistoricalPriceRecordsResponse(): QueryHistoricalPriceRecordsResponse {
  return {
    priceRecords: []
  };
}
export const QueryHistoricalPriceRecordsResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsResponse",
  encode(message: QueryHistoricalPriceRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceRecords) {
      PriceRecords.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalPriceRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalPriceRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceRecords.push(PriceRecords.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHistoricalPriceRecordsResponse>): QueryHistoricalPriceRecordsResponse {
    const message = createBaseQueryHistoricalPriceRecordsResponse();
    message.priceRecords = object.priceRecords?.map(e => PriceRecords.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryHistoricalPriceRecordsResponseAmino): QueryHistoricalPriceRecordsResponse {
    return {
      priceRecords: Array.isArray(object?.price_records) ? object.price_records.map((e: any) => PriceRecords.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryHistoricalPriceRecordsResponse): QueryHistoricalPriceRecordsResponseAmino {
    const obj: any = {};
    if (message.priceRecords) {
      obj.price_records = message.priceRecords.map(e => e ? PriceRecords.toAmino(e) : undefined);
    } else {
      obj.price_records = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalPriceRecordsResponseAminoMsg): QueryHistoricalPriceRecordsResponse {
    return QueryHistoricalPriceRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalPriceRecordsResponseProtoMsg): QueryHistoricalPriceRecordsResponse {
    return QueryHistoricalPriceRecordsResponse.decode(message.value);
  },
  toProto(message: QueryHistoricalPriceRecordsResponse): Uint8Array {
    return QueryHistoricalPriceRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalPriceRecordsResponse): QueryHistoricalPriceRecordsResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsResponse",
      value: QueryHistoricalPriceRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseOracleHistoryOptions(): OracleHistoryOptions {
  return {
    maxAge: BigInt(0),
    includeRawHistory: false,
    includeMetadata: false
  };
}
export const OracleHistoryOptions = {
  typeUrl: "/injective.oracle.v1beta1.OracleHistoryOptions",
  encode(message: OracleHistoryOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxAge !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxAge);
    }
    if (message.includeRawHistory === true) {
      writer.uint32(16).bool(message.includeRawHistory);
    }
    if (message.includeMetadata === true) {
      writer.uint32(24).bool(message.includeMetadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OracleHistoryOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleHistoryOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAge = reader.uint64();
          break;
        case 2:
          message.includeRawHistory = reader.bool();
          break;
        case 3:
          message.includeMetadata = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OracleHistoryOptions>): OracleHistoryOptions {
    const message = createBaseOracleHistoryOptions();
    message.maxAge = object.maxAge !== undefined && object.maxAge !== null ? BigInt(object.maxAge.toString()) : BigInt(0);
    message.includeRawHistory = object.includeRawHistory ?? false;
    message.includeMetadata = object.includeMetadata ?? false;
    return message;
  },
  fromAmino(object: OracleHistoryOptionsAmino): OracleHistoryOptions {
    return {
      maxAge: BigInt(object.max_age),
      includeRawHistory: object.include_raw_history,
      includeMetadata: object.include_metadata
    };
  },
  toAmino(message: OracleHistoryOptions): OracleHistoryOptionsAmino {
    const obj: any = {};
    obj.max_age = message.maxAge ? message.maxAge.toString() : undefined;
    obj.include_raw_history = message.includeRawHistory;
    obj.include_metadata = message.includeMetadata;
    return obj;
  },
  fromAminoMsg(object: OracleHistoryOptionsAminoMsg): OracleHistoryOptions {
    return OracleHistoryOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleHistoryOptionsProtoMsg): OracleHistoryOptions {
    return OracleHistoryOptions.decode(message.value);
  },
  toProto(message: OracleHistoryOptions): Uint8Array {
    return OracleHistoryOptions.encode(message).finish();
  },
  toProtoMsg(message: OracleHistoryOptions): OracleHistoryOptionsProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.OracleHistoryOptions",
      value: OracleHistoryOptions.encode(message).finish()
    };
  }
};
function createBaseQueryOracleVolatilityRequest(): QueryOracleVolatilityRequest {
  return {
    baseInfo: undefined,
    quoteInfo: undefined,
    oracleHistoryOptions: undefined
  };
}
export const QueryOracleVolatilityRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityRequest",
  encode(message: QueryOracleVolatilityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseInfo !== undefined) {
      OracleInfo.encode(message.baseInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.quoteInfo !== undefined) {
      OracleInfo.encode(message.quoteInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.oracleHistoryOptions !== undefined) {
      OracleHistoryOptions.encode(message.oracleHistoryOptions, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleVolatilityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleVolatilityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseInfo = OracleInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.quoteInfo = OracleInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.oracleHistoryOptions = OracleHistoryOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOracleVolatilityRequest>): QueryOracleVolatilityRequest {
    const message = createBaseQueryOracleVolatilityRequest();
    message.baseInfo = object.baseInfo !== undefined && object.baseInfo !== null ? OracleInfo.fromPartial(object.baseInfo) : undefined;
    message.quoteInfo = object.quoteInfo !== undefined && object.quoteInfo !== null ? OracleInfo.fromPartial(object.quoteInfo) : undefined;
    message.oracleHistoryOptions = object.oracleHistoryOptions !== undefined && object.oracleHistoryOptions !== null ? OracleHistoryOptions.fromPartial(object.oracleHistoryOptions) : undefined;
    return message;
  },
  fromAmino(object: QueryOracleVolatilityRequestAmino): QueryOracleVolatilityRequest {
    return {
      baseInfo: object?.base_info ? OracleInfo.fromAmino(object.base_info) : undefined,
      quoteInfo: object?.quote_info ? OracleInfo.fromAmino(object.quote_info) : undefined,
      oracleHistoryOptions: object?.oracle_history_options ? OracleHistoryOptions.fromAmino(object.oracle_history_options) : undefined
    };
  },
  toAmino(message: QueryOracleVolatilityRequest): QueryOracleVolatilityRequestAmino {
    const obj: any = {};
    obj.base_info = message.baseInfo ? OracleInfo.toAmino(message.baseInfo) : undefined;
    obj.quote_info = message.quoteInfo ? OracleInfo.toAmino(message.quoteInfo) : undefined;
    obj.oracle_history_options = message.oracleHistoryOptions ? OracleHistoryOptions.toAmino(message.oracleHistoryOptions) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOracleVolatilityRequestAminoMsg): QueryOracleVolatilityRequest {
    return QueryOracleVolatilityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOracleVolatilityRequestProtoMsg): QueryOracleVolatilityRequest {
    return QueryOracleVolatilityRequest.decode(message.value);
  },
  toProto(message: QueryOracleVolatilityRequest): Uint8Array {
    return QueryOracleVolatilityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOracleVolatilityRequest): QueryOracleVolatilityRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityRequest",
      value: QueryOracleVolatilityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOracleVolatilityResponse(): QueryOracleVolatilityResponse {
  return {
    volatility: "",
    historyMetadata: undefined,
    rawHistory: []
  };
}
export const QueryOracleVolatilityResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityResponse",
  encode(message: QueryOracleVolatilityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.volatility !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.volatility, 18).atomics);
    }
    if (message.historyMetadata !== undefined) {
      MetadataStatistics.encode(message.historyMetadata, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rawHistory) {
      PriceRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleVolatilityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleVolatilityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volatility = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.historyMetadata = MetadataStatistics.decode(reader, reader.uint32());
          break;
        case 3:
          message.rawHistory.push(PriceRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOracleVolatilityResponse>): QueryOracleVolatilityResponse {
    const message = createBaseQueryOracleVolatilityResponse();
    message.volatility = object.volatility ?? "";
    message.historyMetadata = object.historyMetadata !== undefined && object.historyMetadata !== null ? MetadataStatistics.fromPartial(object.historyMetadata) : undefined;
    message.rawHistory = object.rawHistory?.map(e => PriceRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryOracleVolatilityResponseAmino): QueryOracleVolatilityResponse {
    return {
      volatility: object.volatility,
      historyMetadata: object?.history_metadata ? MetadataStatistics.fromAmino(object.history_metadata) : undefined,
      rawHistory: Array.isArray(object?.raw_history) ? object.raw_history.map((e: any) => PriceRecord.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryOracleVolatilityResponse): QueryOracleVolatilityResponseAmino {
    const obj: any = {};
    obj.volatility = message.volatility;
    obj.history_metadata = message.historyMetadata ? MetadataStatistics.toAmino(message.historyMetadata) : undefined;
    if (message.rawHistory) {
      obj.raw_history = message.rawHistory.map(e => e ? PriceRecord.toAmino(e) : undefined);
    } else {
      obj.raw_history = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryOracleVolatilityResponseAminoMsg): QueryOracleVolatilityResponse {
    return QueryOracleVolatilityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOracleVolatilityResponseProtoMsg): QueryOracleVolatilityResponse {
    return QueryOracleVolatilityResponse.decode(message.value);
  },
  toProto(message: QueryOracleVolatilityResponse): Uint8Array {
    return QueryOracleVolatilityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOracleVolatilityResponse): QueryOracleVolatilityResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityResponse",
      value: QueryOracleVolatilityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOracleProvidersInfoRequest(): QueryOracleProvidersInfoRequest {
  return {};
}
export const QueryOracleProvidersInfoRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoRequest",
  encode(_: QueryOracleProvidersInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleProvidersInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleProvidersInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryOracleProvidersInfoRequest>): QueryOracleProvidersInfoRequest {
    const message = createBaseQueryOracleProvidersInfoRequest();
    return message;
  },
  fromAmino(_: QueryOracleProvidersInfoRequestAmino): QueryOracleProvidersInfoRequest {
    return {};
  },
  toAmino(_: QueryOracleProvidersInfoRequest): QueryOracleProvidersInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryOracleProvidersInfoRequestAminoMsg): QueryOracleProvidersInfoRequest {
    return QueryOracleProvidersInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOracleProvidersInfoRequestProtoMsg): QueryOracleProvidersInfoRequest {
    return QueryOracleProvidersInfoRequest.decode(message.value);
  },
  toProto(message: QueryOracleProvidersInfoRequest): Uint8Array {
    return QueryOracleProvidersInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOracleProvidersInfoRequest): QueryOracleProvidersInfoRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoRequest",
      value: QueryOracleProvidersInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOracleProvidersInfoResponse(): QueryOracleProvidersInfoResponse {
  return {
    providers: []
  };
}
export const QueryOracleProvidersInfoResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoResponse",
  encode(message: QueryOracleProvidersInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providers) {
      ProviderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleProvidersInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleProvidersInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(ProviderInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOracleProvidersInfoResponse>): QueryOracleProvidersInfoResponse {
    const message = createBaseQueryOracleProvidersInfoResponse();
    message.providers = object.providers?.map(e => ProviderInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryOracleProvidersInfoResponseAmino): QueryOracleProvidersInfoResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => ProviderInfo.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryOracleProvidersInfoResponse): QueryOracleProvidersInfoResponseAmino {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? ProviderInfo.toAmino(e) : undefined);
    } else {
      obj.providers = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryOracleProvidersInfoResponseAminoMsg): QueryOracleProvidersInfoResponse {
    return QueryOracleProvidersInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOracleProvidersInfoResponseProtoMsg): QueryOracleProvidersInfoResponse {
    return QueryOracleProvidersInfoResponse.decode(message.value);
  },
  toProto(message: QueryOracleProvidersInfoResponse): Uint8Array {
    return QueryOracleProvidersInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOracleProvidersInfoResponse): QueryOracleProvidersInfoResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoResponse",
      value: QueryOracleProvidersInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOracleProviderPricesRequest(): QueryOracleProviderPricesRequest {
  return {
    provider: ""
  };
}
export const QueryOracleProviderPricesRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesRequest",
  encode(message: QueryOracleProviderPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleProviderPricesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleProviderPricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOracleProviderPricesRequest>): QueryOracleProviderPricesRequest {
    const message = createBaseQueryOracleProviderPricesRequest();
    message.provider = object.provider ?? "";
    return message;
  },
  fromAmino(object: QueryOracleProviderPricesRequestAmino): QueryOracleProviderPricesRequest {
    return {
      provider: object.provider
    };
  },
  toAmino(message: QueryOracleProviderPricesRequest): QueryOracleProviderPricesRequestAmino {
    const obj: any = {};
    obj.provider = message.provider;
    return obj;
  },
  fromAminoMsg(object: QueryOracleProviderPricesRequestAminoMsg): QueryOracleProviderPricesRequest {
    return QueryOracleProviderPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOracleProviderPricesRequestProtoMsg): QueryOracleProviderPricesRequest {
    return QueryOracleProviderPricesRequest.decode(message.value);
  },
  toProto(message: QueryOracleProviderPricesRequest): Uint8Array {
    return QueryOracleProviderPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOracleProviderPricesRequest): QueryOracleProviderPricesRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesRequest",
      value: QueryOracleProviderPricesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOracleProviderPricesResponse(): QueryOracleProviderPricesResponse {
  return {
    providerState: []
  };
}
export const QueryOracleProviderPricesResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesResponse",
  encode(message: QueryOracleProviderPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providerState) {
      ProviderState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleProviderPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleProviderPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerState.push(ProviderState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOracleProviderPricesResponse>): QueryOracleProviderPricesResponse {
    const message = createBaseQueryOracleProviderPricesResponse();
    message.providerState = object.providerState?.map(e => ProviderState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryOracleProviderPricesResponseAmino): QueryOracleProviderPricesResponse {
    return {
      providerState: Array.isArray(object?.providerState) ? object.providerState.map((e: any) => ProviderState.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryOracleProviderPricesResponse): QueryOracleProviderPricesResponseAmino {
    const obj: any = {};
    if (message.providerState) {
      obj.providerState = message.providerState.map(e => e ? ProviderState.toAmino(e) : undefined);
    } else {
      obj.providerState = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryOracleProviderPricesResponseAminoMsg): QueryOracleProviderPricesResponse {
    return QueryOracleProviderPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOracleProviderPricesResponseProtoMsg): QueryOracleProviderPricesResponse {
    return QueryOracleProviderPricesResponse.decode(message.value);
  },
  toProto(message: QueryOracleProviderPricesResponse): Uint8Array {
    return QueryOracleProviderPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOracleProviderPricesResponse): QueryOracleProviderPricesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesResponse",
      value: QueryOracleProviderPricesResponse.encode(message).finish()
    };
  }
};