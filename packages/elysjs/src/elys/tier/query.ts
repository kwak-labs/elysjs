//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Portfolio, PortfolioAmino, PortfolioSDKType } from "./portfolio";
import { MembershipTier, MembershipTierAmino, MembershipTierSDKType, UserData, UserDataAmino, UserDataSDKType } from "./userdata";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/elys.tier.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/elys.tier.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/elys.tier.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/elys.tier.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetPortfolioRequest {
  user: string;
}
export interface QueryGetPortfolioRequestProtoMsg {
  typeUrl: "/elys.tier.QueryGetPortfolioRequest";
  value: Uint8Array;
}
export interface QueryGetPortfolioRequestAmino {
  user?: string;
}
export interface QueryGetPortfolioRequestAminoMsg {
  type: "/elys.tier.QueryGetPortfolioRequest";
  value: QueryGetPortfolioRequestAmino;
}
export interface QueryGetPortfolioRequestSDKType {
  user: string;
}
export interface QueryGetPortfolioResponse {
  totalPortfolio: string;
}
export interface QueryGetPortfolioResponseProtoMsg {
  typeUrl: "/elys.tier.QueryGetPortfolioResponse";
  value: Uint8Array;
}
export interface QueryGetPortfolioResponseAmino {
  total_portfolio?: string;
}
export interface QueryGetPortfolioResponseAminoMsg {
  type: "/elys.tier.QueryGetPortfolioResponse";
  value: QueryGetPortfolioResponseAmino;
}
export interface QueryGetPortfolioResponseSDKType {
  total_portfolio: string;
}
export interface QueryAllPortfolioRequest {
  pagination?: PageRequest;
}
export interface QueryAllPortfolioRequestProtoMsg {
  typeUrl: "/elys.tier.QueryAllPortfolioRequest";
  value: Uint8Array;
}
export interface QueryAllPortfolioRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPortfolioRequestAminoMsg {
  type: "/elys.tier.QueryAllPortfolioRequest";
  value: QueryAllPortfolioRequestAmino;
}
export interface QueryAllPortfolioRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPortfolioResponse {
  portfolio: Portfolio[];
  pagination?: PageResponse;
}
export interface QueryAllPortfolioResponseProtoMsg {
  typeUrl: "/elys.tier.QueryAllPortfolioResponse";
  value: Uint8Array;
}
export interface QueryAllPortfolioResponseAmino {
  portfolio?: PortfolioAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPortfolioResponseAminoMsg {
  type: "/elys.tier.QueryAllPortfolioResponse";
  value: QueryAllPortfolioResponseAmino;
}
export interface QueryAllPortfolioResponseSDKType {
  portfolio: PortfolioSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryCalculateDiscountRequest {
  user: string;
}
export interface QueryCalculateDiscountRequestProtoMsg {
  typeUrl: "/elys.tier.QueryCalculateDiscountRequest";
  value: Uint8Array;
}
export interface QueryCalculateDiscountRequestAmino {
  user?: string;
}
export interface QueryCalculateDiscountRequestAminoMsg {
  type: "/elys.tier.QueryCalculateDiscountRequest";
  value: QueryCalculateDiscountRequestAmino;
}
export interface QueryCalculateDiscountRequestSDKType {
  user: string;
}
export interface QueryCalculateDiscountResponse {
  membershipTier?: MembershipTier;
  portfolio: string;
}
export interface QueryCalculateDiscountResponseProtoMsg {
  typeUrl: "/elys.tier.QueryCalculateDiscountResponse";
  value: Uint8Array;
}
export interface QueryCalculateDiscountResponseAmino {
  membership_tier?: MembershipTierAmino;
  portfolio?: string;
}
export interface QueryCalculateDiscountResponseAminoMsg {
  type: "/elys.tier.QueryCalculateDiscountResponse";
  value: QueryCalculateDiscountResponseAmino;
}
export interface QueryCalculateDiscountResponseSDKType {
  membership_tier?: MembershipTierSDKType;
  portfolio: string;
}
export interface QueryLeverageLpTotalRequest {
  user: string;
}
export interface QueryLeverageLpTotalRequestProtoMsg {
  typeUrl: "/elys.tier.QueryLeverageLpTotalRequest";
  value: Uint8Array;
}
export interface QueryLeverageLpTotalRequestAmino {
  user?: string;
}
export interface QueryLeverageLpTotalRequestAminoMsg {
  type: "/elys.tier.QueryLeverageLpTotalRequest";
  value: QueryLeverageLpTotalRequestAmino;
}
export interface QueryLeverageLpTotalRequestSDKType {
  user: string;
}
export interface QueryLeverageLpTotalResponse {
  totalValue: string;
  totalBorrows: string;
}
export interface QueryLeverageLpTotalResponseProtoMsg {
  typeUrl: "/elys.tier.QueryLeverageLpTotalResponse";
  value: Uint8Array;
}
export interface QueryLeverageLpTotalResponseAmino {
  total_value?: string;
  total_borrows?: string;
}
export interface QueryLeverageLpTotalResponseAminoMsg {
  type: "/elys.tier.QueryLeverageLpTotalResponse";
  value: QueryLeverageLpTotalResponseAmino;
}
export interface QueryLeverageLpTotalResponseSDKType {
  total_value: string;
  total_borrows: string;
}
export interface QueryRewardsTotalRequest {
  user: string;
}
export interface QueryRewardsTotalRequestProtoMsg {
  typeUrl: "/elys.tier.QueryRewardsTotalRequest";
  value: Uint8Array;
}
export interface QueryRewardsTotalRequestAmino {
  user?: string;
}
export interface QueryRewardsTotalRequestAminoMsg {
  type: "/elys.tier.QueryRewardsTotalRequest";
  value: QueryRewardsTotalRequestAmino;
}
export interface QueryRewardsTotalRequestSDKType {
  user: string;
}
export interface QueryRewardsTotalResponse {
  total: string;
}
export interface QueryRewardsTotalResponseProtoMsg {
  typeUrl: "/elys.tier.QueryRewardsTotalResponse";
  value: Uint8Array;
}
export interface QueryRewardsTotalResponseAmino {
  total?: string;
}
export interface QueryRewardsTotalResponseAminoMsg {
  type: "/elys.tier.QueryRewardsTotalResponse";
  value: QueryRewardsTotalResponseAmino;
}
export interface QueryRewardsTotalResponseSDKType {
  total: string;
}
export interface QueryStakedPoolRequest {
  user: string;
}
export interface QueryStakedPoolRequestProtoMsg {
  typeUrl: "/elys.tier.QueryStakedPoolRequest";
  value: Uint8Array;
}
export interface QueryStakedPoolRequestAmino {
  user?: string;
}
export interface QueryStakedPoolRequestAminoMsg {
  type: "/elys.tier.QueryStakedPoolRequest";
  value: QueryStakedPoolRequestAmino;
}
export interface QueryStakedPoolRequestSDKType {
  user: string;
}
export interface QueryStakedPoolResponse {
  total: string;
}
export interface QueryStakedPoolResponseProtoMsg {
  typeUrl: "/elys.tier.QueryStakedPoolResponse";
  value: Uint8Array;
}
export interface QueryStakedPoolResponseAmino {
  total?: string;
}
export interface QueryStakedPoolResponseAminoMsg {
  type: "/elys.tier.QueryStakedPoolResponse";
  value: QueryStakedPoolResponseAmino;
}
export interface QueryStakedPoolResponseSDKType {
  total: string;
}
export interface QueryPerpetualRequest {
  user: string;
}
export interface QueryPerpetualRequestProtoMsg {
  typeUrl: "/elys.tier.QueryPerpetualRequest";
  value: Uint8Array;
}
export interface QueryPerpetualRequestAmino {
  user?: string;
}
export interface QueryPerpetualRequestAminoMsg {
  type: "/elys.tier.QueryPerpetualRequest";
  value: QueryPerpetualRequestAmino;
}
export interface QueryPerpetualRequestSDKType {
  user: string;
}
export interface QueryPerpetualResponse {
  totalValue: string;
  totalBorrows: string;
}
export interface QueryPerpetualResponseProtoMsg {
  typeUrl: "/elys.tier.QueryPerpetualResponse";
  value: Uint8Array;
}
export interface QueryPerpetualResponseAmino {
  total_value?: string;
  total_borrows?: string;
}
export interface QueryPerpetualResponseAminoMsg {
  type: "/elys.tier.QueryPerpetualResponse";
  value: QueryPerpetualResponseAmino;
}
export interface QueryPerpetualResponseSDKType {
  total_value: string;
  total_borrows: string;
}
export interface QueryLiquidTotalRequest {
  user: string;
}
export interface QueryLiquidTotalRequestProtoMsg {
  typeUrl: "/elys.tier.QueryLiquidTotalRequest";
  value: Uint8Array;
}
export interface QueryLiquidTotalRequestAmino {
  user?: string;
}
export interface QueryLiquidTotalRequestAminoMsg {
  type: "/elys.tier.QueryLiquidTotalRequest";
  value: QueryLiquidTotalRequestAmino;
}
export interface QueryLiquidTotalRequestSDKType {
  user: string;
}
export interface QueryLiquidTotalResponse {
  total: string;
}
export interface QueryLiquidTotalResponseProtoMsg {
  typeUrl: "/elys.tier.QueryLiquidTotalResponse";
  value: Uint8Array;
}
export interface QueryLiquidTotalResponseAmino {
  total?: string;
}
export interface QueryLiquidTotalResponseAminoMsg {
  type: "/elys.tier.QueryLiquidTotalResponse";
  value: QueryLiquidTotalResponseAmino;
}
export interface QueryLiquidTotalResponseSDKType {
  total: string;
}
export interface QueryLockedOrderRequest {
  user: string;
}
export interface QueryLockedOrderRequestProtoMsg {
  typeUrl: "/elys.tier.QueryLockedOrderRequest";
  value: Uint8Array;
}
export interface QueryLockedOrderRequestAmino {
  user?: string;
}
export interface QueryLockedOrderRequestAminoMsg {
  type: "/elys.tier.QueryLockedOrderRequest";
  value: QueryLockedOrderRequestAmino;
}
export interface QueryLockedOrderRequestSDKType {
  user: string;
}
export interface QueryLockedOrderResponse {
  total: string;
}
export interface QueryLockedOrderResponseProtoMsg {
  typeUrl: "/elys.tier.QueryLockedOrderResponse";
  value: Uint8Array;
}
export interface QueryLockedOrderResponseAmino {
  total?: string;
}
export interface QueryLockedOrderResponseAminoMsg {
  type: "/elys.tier.QueryLockedOrderResponse";
  value: QueryLockedOrderResponseAmino;
}
export interface QueryLockedOrderResponseSDKType {
  total: string;
}
export interface QueryGetAmmPriceRequest {
  denom: string;
  decimal: number;
}
export interface QueryGetAmmPriceRequestProtoMsg {
  typeUrl: "/elys.tier.QueryGetAmmPriceRequest";
  value: Uint8Array;
}
export interface QueryGetAmmPriceRequestAmino {
  denom?: string;
  decimal?: number;
}
export interface QueryGetAmmPriceRequestAminoMsg {
  type: "/elys.tier.QueryGetAmmPriceRequest";
  value: QueryGetAmmPriceRequestAmino;
}
export interface QueryGetAmmPriceRequestSDKType {
  denom: string;
  decimal: number;
}
/**
 * We use a submessage to avoid the issue with the gRPC codec
 * https://github.com/cosmos/cosmos-sdk/issues/18430
 */
export interface GetAmmPriceResponseResult {
  total: string;
}
export interface GetAmmPriceResponseResultProtoMsg {
  typeUrl: "/elys.tier.GetAmmPriceResponseResult";
  value: Uint8Array;
}
/**
 * We use a submessage to avoid the issue with the gRPC codec
 * https://github.com/cosmos/cosmos-sdk/issues/18430
 */
export interface GetAmmPriceResponseResultAmino {
  total?: string;
}
export interface GetAmmPriceResponseResultAminoMsg {
  type: "/elys.tier.GetAmmPriceResponseResult";
  value: GetAmmPriceResponseResultAmino;
}
/**
 * We use a submessage to avoid the issue with the gRPC codec
 * https://github.com/cosmos/cosmos-sdk/issues/18430
 */
export interface GetAmmPriceResponseResultSDKType {
  total: string;
}
export interface QueryGetAmmPriceResponse {
  result?: GetAmmPriceResponseResult;
}
export interface QueryGetAmmPriceResponseProtoMsg {
  typeUrl: "/elys.tier.QueryGetAmmPriceResponse";
  value: Uint8Array;
}
export interface QueryGetAmmPriceResponseAmino {
  result?: GetAmmPriceResponseResultAmino;
}
export interface QueryGetAmmPriceResponseAminoMsg {
  type: "/elys.tier.QueryGetAmmPriceResponse";
  value: QueryGetAmmPriceResponseAmino;
}
export interface QueryGetAmmPriceResponseSDKType {
  result?: GetAmmPriceResponseResultSDKType;
}
export interface QueryGetConsolidatedPriceRequest {
  denom: string;
}
export interface QueryGetConsolidatedPriceRequestProtoMsg {
  typeUrl: "/elys.tier.QueryGetConsolidatedPriceRequest";
  value: Uint8Array;
}
export interface QueryGetConsolidatedPriceRequestAmino {
  denom?: string;
}
export interface QueryGetConsolidatedPriceRequestAminoMsg {
  type: "/elys.tier.QueryGetConsolidatedPriceRequest";
  value: QueryGetConsolidatedPriceRequestAmino;
}
export interface QueryGetConsolidatedPriceRequestSDKType {
  denom: string;
}
export interface QueryGetConsolidatedPriceResponse {
  ammPrice: string;
  oraclePrice: string;
  oraclePriceDec: string;
}
export interface QueryGetConsolidatedPriceResponseProtoMsg {
  typeUrl: "/elys.tier.QueryGetConsolidatedPriceResponse";
  value: Uint8Array;
}
export interface QueryGetConsolidatedPriceResponseAmino {
  amm_price?: string;
  oracle_price?: string;
  oracle_price_dec?: string;
}
export interface QueryGetConsolidatedPriceResponseAminoMsg {
  type: "/elys.tier.QueryGetConsolidatedPriceResponse";
  value: QueryGetConsolidatedPriceResponseAmino;
}
export interface QueryGetConsolidatedPriceResponseSDKType {
  amm_price: string;
  oracle_price: string;
  oracle_price_dec: string;
}
export interface QueryStakedRequest {
  user: string;
}
export interface QueryStakedRequestProtoMsg {
  typeUrl: "/elys.tier.QueryStakedRequest";
  value: Uint8Array;
}
export interface QueryStakedRequestAmino {
  user?: string;
}
export interface QueryStakedRequestAminoMsg {
  type: "/elys.tier.QueryStakedRequest";
  value: QueryStakedRequestAmino;
}
export interface QueryStakedRequestSDKType {
  user: string;
}
export interface QueryStakedResponse {
  commitments: string;
  delegations: string;
  unbondings: string;
  totalVested: string;
}
export interface QueryStakedResponseProtoMsg {
  typeUrl: "/elys.tier.QueryStakedResponse";
  value: Uint8Array;
}
export interface QueryStakedResponseAmino {
  commitments?: string;
  delegations?: string;
  unbondings?: string;
  total_vested?: string;
}
export interface QueryStakedResponseAminoMsg {
  type: "/elys.tier.QueryStakedResponse";
  value: QueryStakedResponseAmino;
}
export interface QueryStakedResponseSDKType {
  commitments: string;
  delegations: string;
  unbondings: string;
  total_vested: string;
}
export interface QueryGetUsersPoolDataRequest {
  pagination?: PageRequest;
}
export interface QueryGetUsersPoolDataRequestProtoMsg {
  typeUrl: "/elys.tier.QueryGetUsersPoolDataRequest";
  value: Uint8Array;
}
export interface QueryGetUsersPoolDataRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryGetUsersPoolDataRequestAminoMsg {
  type: "/elys.tier.QueryGetUsersPoolDataRequest";
  value: QueryGetUsersPoolDataRequestAmino;
}
export interface QueryGetUsersPoolDataRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryGetUsersPoolDataResponse {
  users: UserData[];
  pagination?: PageResponse;
}
export interface QueryGetUsersPoolDataResponseProtoMsg {
  typeUrl: "/elys.tier.QueryGetUsersPoolDataResponse";
  value: Uint8Array;
}
export interface QueryGetUsersPoolDataResponseAmino {
  users?: UserDataAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryGetUsersPoolDataResponseAminoMsg {
  type: "/elys.tier.QueryGetUsersPoolDataResponse";
  value: QueryGetUsersPoolDataResponseAmino;
}
export interface QueryGetUsersPoolDataResponseSDKType {
  users: UserDataSDKType[];
  pagination?: PageResponseSDKType;
}
export interface Price {
  denom: string;
  oraclePrice: string;
  ammPrice: string;
}
export interface PriceProtoMsg {
  typeUrl: "/elys.tier.Price";
  value: Uint8Array;
}
export interface PriceAmino {
  denom?: string;
  oracle_price?: string;
  amm_price?: string;
}
export interface PriceAminoMsg {
  type: "/elys.tier.Price";
  value: PriceAmino;
}
export interface PriceSDKType {
  denom: string;
  oracle_price: string;
  amm_price: string;
}
export interface QueryGetAllPricesRequest {
  pagination?: PageRequest;
}
export interface QueryGetAllPricesRequestProtoMsg {
  typeUrl: "/elys.tier.QueryGetAllPricesRequest";
  value: Uint8Array;
}
export interface QueryGetAllPricesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryGetAllPricesRequestAminoMsg {
  type: "/elys.tier.QueryGetAllPricesRequest";
  value: QueryGetAllPricesRequestAmino;
}
export interface QueryGetAllPricesRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryGetAllPricesResponse {
  prices: Price[];
  pagination?: PageResponse;
}
export interface QueryGetAllPricesResponseProtoMsg {
  typeUrl: "/elys.tier.QueryGetAllPricesResponse";
  value: Uint8Array;
}
export interface QueryGetAllPricesResponseAmino {
  prices?: PriceAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryGetAllPricesResponseAminoMsg {
  type: "/elys.tier.QueryGetAllPricesResponse";
  value: QueryGetAllPricesResponseAmino;
}
export interface QueryGetAllPricesResponseSDKType {
  prices: PriceSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/elys.tier.QueryParamsRequest",
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
    const message = createBaseQueryParamsRequest();
    return message;
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
      typeUrl: "/elys.tier.QueryParamsRequest",
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
  typeUrl: "/elys.tier.QueryParamsResponse",
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
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
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
      typeUrl: "/elys.tier.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPortfolioRequest(): QueryGetPortfolioRequest {
  return {
    user: ""
  };
}
export const QueryGetPortfolioRequest = {
  typeUrl: "/elys.tier.QueryGetPortfolioRequest",
  encode(message: QueryGetPortfolioRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPortfolioRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPortfolioRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPortfolioRequest>): QueryGetPortfolioRequest {
    const message = createBaseQueryGetPortfolioRequest();
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: QueryGetPortfolioRequestAmino): QueryGetPortfolioRequest {
    const message = createBaseQueryGetPortfolioRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: QueryGetPortfolioRequest): QueryGetPortfolioRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: QueryGetPortfolioRequestAminoMsg): QueryGetPortfolioRequest {
    return QueryGetPortfolioRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPortfolioRequestProtoMsg): QueryGetPortfolioRequest {
    return QueryGetPortfolioRequest.decode(message.value);
  },
  toProto(message: QueryGetPortfolioRequest): Uint8Array {
    return QueryGetPortfolioRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPortfolioRequest): QueryGetPortfolioRequestProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryGetPortfolioRequest",
      value: QueryGetPortfolioRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPortfolioResponse(): QueryGetPortfolioResponse {
  return {
    totalPortfolio: ""
  };
}
export const QueryGetPortfolioResponse = {
  typeUrl: "/elys.tier.QueryGetPortfolioResponse",
  encode(message: QueryGetPortfolioResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalPortfolio !== "") {
      writer.uint32(10).string(message.totalPortfolio);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPortfolioResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPortfolioResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalPortfolio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPortfolioResponse>): QueryGetPortfolioResponse {
    const message = createBaseQueryGetPortfolioResponse();
    message.totalPortfolio = object.totalPortfolio ?? "";
    return message;
  },
  fromAmino(object: QueryGetPortfolioResponseAmino): QueryGetPortfolioResponse {
    const message = createBaseQueryGetPortfolioResponse();
    if (object.total_portfolio !== undefined && object.total_portfolio !== null) {
      message.totalPortfolio = object.total_portfolio;
    }
    return message;
  },
  toAmino(message: QueryGetPortfolioResponse): QueryGetPortfolioResponseAmino {
    const obj: any = {};
    obj.total_portfolio = message.totalPortfolio === "" ? undefined : message.totalPortfolio;
    return obj;
  },
  fromAminoMsg(object: QueryGetPortfolioResponseAminoMsg): QueryGetPortfolioResponse {
    return QueryGetPortfolioResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPortfolioResponseProtoMsg): QueryGetPortfolioResponse {
    return QueryGetPortfolioResponse.decode(message.value);
  },
  toProto(message: QueryGetPortfolioResponse): Uint8Array {
    return QueryGetPortfolioResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPortfolioResponse): QueryGetPortfolioResponseProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryGetPortfolioResponse",
      value: QueryGetPortfolioResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPortfolioRequest(): QueryAllPortfolioRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPortfolioRequest = {
  typeUrl: "/elys.tier.QueryAllPortfolioRequest",
  encode(message: QueryAllPortfolioRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPortfolioRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPortfolioRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllPortfolioRequest>): QueryAllPortfolioRequest {
    const message = createBaseQueryAllPortfolioRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPortfolioRequestAmino): QueryAllPortfolioRequest {
    const message = createBaseQueryAllPortfolioRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPortfolioRequest): QueryAllPortfolioRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPortfolioRequestAminoMsg): QueryAllPortfolioRequest {
    return QueryAllPortfolioRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPortfolioRequestProtoMsg): QueryAllPortfolioRequest {
    return QueryAllPortfolioRequest.decode(message.value);
  },
  toProto(message: QueryAllPortfolioRequest): Uint8Array {
    return QueryAllPortfolioRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPortfolioRequest): QueryAllPortfolioRequestProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryAllPortfolioRequest",
      value: QueryAllPortfolioRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPortfolioResponse(): QueryAllPortfolioResponse {
  return {
    portfolio: [],
    pagination: undefined
  };
}
export const QueryAllPortfolioResponse = {
  typeUrl: "/elys.tier.QueryAllPortfolioResponse",
  encode(message: QueryAllPortfolioResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.portfolio) {
      Portfolio.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPortfolioResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPortfolioResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portfolio.push(Portfolio.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllPortfolioResponse>): QueryAllPortfolioResponse {
    const message = createBaseQueryAllPortfolioResponse();
    message.portfolio = object.portfolio?.map(e => Portfolio.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPortfolioResponseAmino): QueryAllPortfolioResponse {
    const message = createBaseQueryAllPortfolioResponse();
    message.portfolio = object.portfolio?.map(e => Portfolio.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPortfolioResponse): QueryAllPortfolioResponseAmino {
    const obj: any = {};
    if (message.portfolio) {
      obj.portfolio = message.portfolio.map(e => e ? Portfolio.toAmino(e) : undefined);
    } else {
      obj.portfolio = message.portfolio;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPortfolioResponseAminoMsg): QueryAllPortfolioResponse {
    return QueryAllPortfolioResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPortfolioResponseProtoMsg): QueryAllPortfolioResponse {
    return QueryAllPortfolioResponse.decode(message.value);
  },
  toProto(message: QueryAllPortfolioResponse): Uint8Array {
    return QueryAllPortfolioResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPortfolioResponse): QueryAllPortfolioResponseProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryAllPortfolioResponse",
      value: QueryAllPortfolioResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCalculateDiscountRequest(): QueryCalculateDiscountRequest {
  return {
    user: ""
  };
}
export const QueryCalculateDiscountRequest = {
  typeUrl: "/elys.tier.QueryCalculateDiscountRequest",
  encode(message: QueryCalculateDiscountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalculateDiscountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalculateDiscountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCalculateDiscountRequest>): QueryCalculateDiscountRequest {
    const message = createBaseQueryCalculateDiscountRequest();
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: QueryCalculateDiscountRequestAmino): QueryCalculateDiscountRequest {
    const message = createBaseQueryCalculateDiscountRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: QueryCalculateDiscountRequest): QueryCalculateDiscountRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: QueryCalculateDiscountRequestAminoMsg): QueryCalculateDiscountRequest {
    return QueryCalculateDiscountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCalculateDiscountRequestProtoMsg): QueryCalculateDiscountRequest {
    return QueryCalculateDiscountRequest.decode(message.value);
  },
  toProto(message: QueryCalculateDiscountRequest): Uint8Array {
    return QueryCalculateDiscountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalculateDiscountRequest): QueryCalculateDiscountRequestProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryCalculateDiscountRequest",
      value: QueryCalculateDiscountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCalculateDiscountResponse(): QueryCalculateDiscountResponse {
  return {
    membershipTier: undefined,
    portfolio: ""
  };
}
export const QueryCalculateDiscountResponse = {
  typeUrl: "/elys.tier.QueryCalculateDiscountResponse",
  encode(message: QueryCalculateDiscountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.membershipTier !== undefined) {
      MembershipTier.encode(message.membershipTier, writer.uint32(10).fork()).ldelim();
    }
    if (message.portfolio !== "") {
      writer.uint32(18).string(message.portfolio);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalculateDiscountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalculateDiscountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.membershipTier = MembershipTier.decode(reader, reader.uint32());
          break;
        case 2:
          message.portfolio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCalculateDiscountResponse>): QueryCalculateDiscountResponse {
    const message = createBaseQueryCalculateDiscountResponse();
    message.membershipTier = object.membershipTier !== undefined && object.membershipTier !== null ? MembershipTier.fromPartial(object.membershipTier) : undefined;
    message.portfolio = object.portfolio ?? "";
    return message;
  },
  fromAmino(object: QueryCalculateDiscountResponseAmino): QueryCalculateDiscountResponse {
    const message = createBaseQueryCalculateDiscountResponse();
    if (object.membership_tier !== undefined && object.membership_tier !== null) {
      message.membershipTier = MembershipTier.fromAmino(object.membership_tier);
    }
    if (object.portfolio !== undefined && object.portfolio !== null) {
      message.portfolio = object.portfolio;
    }
    return message;
  },
  toAmino(message: QueryCalculateDiscountResponse): QueryCalculateDiscountResponseAmino {
    const obj: any = {};
    obj.membership_tier = message.membershipTier ? MembershipTier.toAmino(message.membershipTier) : undefined;
    obj.portfolio = message.portfolio === "" ? undefined : message.portfolio;
    return obj;
  },
  fromAminoMsg(object: QueryCalculateDiscountResponseAminoMsg): QueryCalculateDiscountResponse {
    return QueryCalculateDiscountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCalculateDiscountResponseProtoMsg): QueryCalculateDiscountResponse {
    return QueryCalculateDiscountResponse.decode(message.value);
  },
  toProto(message: QueryCalculateDiscountResponse): Uint8Array {
    return QueryCalculateDiscountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalculateDiscountResponse): QueryCalculateDiscountResponseProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryCalculateDiscountResponse",
      value: QueryCalculateDiscountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLeverageLpTotalRequest(): QueryLeverageLpTotalRequest {
  return {
    user: ""
  };
}
export const QueryLeverageLpTotalRequest = {
  typeUrl: "/elys.tier.QueryLeverageLpTotalRequest",
  encode(message: QueryLeverageLpTotalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLeverageLpTotalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeverageLpTotalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLeverageLpTotalRequest>): QueryLeverageLpTotalRequest {
    const message = createBaseQueryLeverageLpTotalRequest();
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: QueryLeverageLpTotalRequestAmino): QueryLeverageLpTotalRequest {
    const message = createBaseQueryLeverageLpTotalRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: QueryLeverageLpTotalRequest): QueryLeverageLpTotalRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: QueryLeverageLpTotalRequestAminoMsg): QueryLeverageLpTotalRequest {
    return QueryLeverageLpTotalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLeverageLpTotalRequestProtoMsg): QueryLeverageLpTotalRequest {
    return QueryLeverageLpTotalRequest.decode(message.value);
  },
  toProto(message: QueryLeverageLpTotalRequest): Uint8Array {
    return QueryLeverageLpTotalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLeverageLpTotalRequest): QueryLeverageLpTotalRequestProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryLeverageLpTotalRequest",
      value: QueryLeverageLpTotalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLeverageLpTotalResponse(): QueryLeverageLpTotalResponse {
  return {
    totalValue: "",
    totalBorrows: ""
  };
}
export const QueryLeverageLpTotalResponse = {
  typeUrl: "/elys.tier.QueryLeverageLpTotalResponse",
  encode(message: QueryLeverageLpTotalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalValue !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.totalValue, 18).atomics);
    }
    if (message.totalBorrows !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.totalBorrows, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLeverageLpTotalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeverageLpTotalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalValue = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.totalBorrows = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLeverageLpTotalResponse>): QueryLeverageLpTotalResponse {
    const message = createBaseQueryLeverageLpTotalResponse();
    message.totalValue = object.totalValue ?? "";
    message.totalBorrows = object.totalBorrows ?? "";
    return message;
  },
  fromAmino(object: QueryLeverageLpTotalResponseAmino): QueryLeverageLpTotalResponse {
    const message = createBaseQueryLeverageLpTotalResponse();
    if (object.total_value !== undefined && object.total_value !== null) {
      message.totalValue = object.total_value;
    }
    if (object.total_borrows !== undefined && object.total_borrows !== null) {
      message.totalBorrows = object.total_borrows;
    }
    return message;
  },
  toAmino(message: QueryLeverageLpTotalResponse): QueryLeverageLpTotalResponseAmino {
    const obj: any = {};
    obj.total_value = message.totalValue === "" ? undefined : message.totalValue;
    obj.total_borrows = message.totalBorrows === "" ? undefined : message.totalBorrows;
    return obj;
  },
  fromAminoMsg(object: QueryLeverageLpTotalResponseAminoMsg): QueryLeverageLpTotalResponse {
    return QueryLeverageLpTotalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLeverageLpTotalResponseProtoMsg): QueryLeverageLpTotalResponse {
    return QueryLeverageLpTotalResponse.decode(message.value);
  },
  toProto(message: QueryLeverageLpTotalResponse): Uint8Array {
    return QueryLeverageLpTotalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLeverageLpTotalResponse): QueryLeverageLpTotalResponseProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryLeverageLpTotalResponse",
      value: QueryLeverageLpTotalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRewardsTotalRequest(): QueryRewardsTotalRequest {
  return {
    user: ""
  };
}
export const QueryRewardsTotalRequest = {
  typeUrl: "/elys.tier.QueryRewardsTotalRequest",
  encode(message: QueryRewardsTotalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsTotalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsTotalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRewardsTotalRequest>): QueryRewardsTotalRequest {
    const message = createBaseQueryRewardsTotalRequest();
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: QueryRewardsTotalRequestAmino): QueryRewardsTotalRequest {
    const message = createBaseQueryRewardsTotalRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: QueryRewardsTotalRequest): QueryRewardsTotalRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: QueryRewardsTotalRequestAminoMsg): QueryRewardsTotalRequest {
    return QueryRewardsTotalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardsTotalRequestProtoMsg): QueryRewardsTotalRequest {
    return QueryRewardsTotalRequest.decode(message.value);
  },
  toProto(message: QueryRewardsTotalRequest): Uint8Array {
    return QueryRewardsTotalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardsTotalRequest): QueryRewardsTotalRequestProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryRewardsTotalRequest",
      value: QueryRewardsTotalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRewardsTotalResponse(): QueryRewardsTotalResponse {
  return {
    total: ""
  };
}
export const QueryRewardsTotalResponse = {
  typeUrl: "/elys.tier.QueryRewardsTotalResponse",
  encode(message: QueryRewardsTotalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.total, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsTotalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsTotalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRewardsTotalResponse>): QueryRewardsTotalResponse {
    const message = createBaseQueryRewardsTotalResponse();
    message.total = object.total ?? "";
    return message;
  },
  fromAmino(object: QueryRewardsTotalResponseAmino): QueryRewardsTotalResponse {
    const message = createBaseQueryRewardsTotalResponse();
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    return message;
  },
  toAmino(message: QueryRewardsTotalResponse): QueryRewardsTotalResponseAmino {
    const obj: any = {};
    obj.total = message.total === "" ? undefined : message.total;
    return obj;
  },
  fromAminoMsg(object: QueryRewardsTotalResponseAminoMsg): QueryRewardsTotalResponse {
    return QueryRewardsTotalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardsTotalResponseProtoMsg): QueryRewardsTotalResponse {
    return QueryRewardsTotalResponse.decode(message.value);
  },
  toProto(message: QueryRewardsTotalResponse): Uint8Array {
    return QueryRewardsTotalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardsTotalResponse): QueryRewardsTotalResponseProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryRewardsTotalResponse",
      value: QueryRewardsTotalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStakedPoolRequest(): QueryStakedPoolRequest {
  return {
    user: ""
  };
}
export const QueryStakedPoolRequest = {
  typeUrl: "/elys.tier.QueryStakedPoolRequest",
  encode(message: QueryStakedPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakedPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakedPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStakedPoolRequest>): QueryStakedPoolRequest {
    const message = createBaseQueryStakedPoolRequest();
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: QueryStakedPoolRequestAmino): QueryStakedPoolRequest {
    const message = createBaseQueryStakedPoolRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: QueryStakedPoolRequest): QueryStakedPoolRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: QueryStakedPoolRequestAminoMsg): QueryStakedPoolRequest {
    return QueryStakedPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakedPoolRequestProtoMsg): QueryStakedPoolRequest {
    return QueryStakedPoolRequest.decode(message.value);
  },
  toProto(message: QueryStakedPoolRequest): Uint8Array {
    return QueryStakedPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStakedPoolRequest): QueryStakedPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryStakedPoolRequest",
      value: QueryStakedPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStakedPoolResponse(): QueryStakedPoolResponse {
  return {
    total: ""
  };
}
export const QueryStakedPoolResponse = {
  typeUrl: "/elys.tier.QueryStakedPoolResponse",
  encode(message: QueryStakedPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.total, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStakedPoolResponse>): QueryStakedPoolResponse {
    const message = createBaseQueryStakedPoolResponse();
    message.total = object.total ?? "";
    return message;
  },
  fromAmino(object: QueryStakedPoolResponseAmino): QueryStakedPoolResponse {
    const message = createBaseQueryStakedPoolResponse();
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    return message;
  },
  toAmino(message: QueryStakedPoolResponse): QueryStakedPoolResponseAmino {
    const obj: any = {};
    obj.total = message.total === "" ? undefined : message.total;
    return obj;
  },
  fromAminoMsg(object: QueryStakedPoolResponseAminoMsg): QueryStakedPoolResponse {
    return QueryStakedPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakedPoolResponseProtoMsg): QueryStakedPoolResponse {
    return QueryStakedPoolResponse.decode(message.value);
  },
  toProto(message: QueryStakedPoolResponse): Uint8Array {
    return QueryStakedPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakedPoolResponse): QueryStakedPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryStakedPoolResponse",
      value: QueryStakedPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPerpetualRequest(): QueryPerpetualRequest {
  return {
    user: ""
  };
}
export const QueryPerpetualRequest = {
  typeUrl: "/elys.tier.QueryPerpetualRequest",
  encode(message: QueryPerpetualRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPerpetualRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPerpetualRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPerpetualRequest>): QueryPerpetualRequest {
    const message = createBaseQueryPerpetualRequest();
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: QueryPerpetualRequestAmino): QueryPerpetualRequest {
    const message = createBaseQueryPerpetualRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: QueryPerpetualRequest): QueryPerpetualRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: QueryPerpetualRequestAminoMsg): QueryPerpetualRequest {
    return QueryPerpetualRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPerpetualRequestProtoMsg): QueryPerpetualRequest {
    return QueryPerpetualRequest.decode(message.value);
  },
  toProto(message: QueryPerpetualRequest): Uint8Array {
    return QueryPerpetualRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPerpetualRequest): QueryPerpetualRequestProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryPerpetualRequest",
      value: QueryPerpetualRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPerpetualResponse(): QueryPerpetualResponse {
  return {
    totalValue: "",
    totalBorrows: ""
  };
}
export const QueryPerpetualResponse = {
  typeUrl: "/elys.tier.QueryPerpetualResponse",
  encode(message: QueryPerpetualResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalValue !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.totalValue, 18).atomics);
    }
    if (message.totalBorrows !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.totalBorrows, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPerpetualResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPerpetualResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalValue = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.totalBorrows = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPerpetualResponse>): QueryPerpetualResponse {
    const message = createBaseQueryPerpetualResponse();
    message.totalValue = object.totalValue ?? "";
    message.totalBorrows = object.totalBorrows ?? "";
    return message;
  },
  fromAmino(object: QueryPerpetualResponseAmino): QueryPerpetualResponse {
    const message = createBaseQueryPerpetualResponse();
    if (object.total_value !== undefined && object.total_value !== null) {
      message.totalValue = object.total_value;
    }
    if (object.total_borrows !== undefined && object.total_borrows !== null) {
      message.totalBorrows = object.total_borrows;
    }
    return message;
  },
  toAmino(message: QueryPerpetualResponse): QueryPerpetualResponseAmino {
    const obj: any = {};
    obj.total_value = message.totalValue === "" ? undefined : message.totalValue;
    obj.total_borrows = message.totalBorrows === "" ? undefined : message.totalBorrows;
    return obj;
  },
  fromAminoMsg(object: QueryPerpetualResponseAminoMsg): QueryPerpetualResponse {
    return QueryPerpetualResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPerpetualResponseProtoMsg): QueryPerpetualResponse {
    return QueryPerpetualResponse.decode(message.value);
  },
  toProto(message: QueryPerpetualResponse): Uint8Array {
    return QueryPerpetualResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPerpetualResponse): QueryPerpetualResponseProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryPerpetualResponse",
      value: QueryPerpetualResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidTotalRequest(): QueryLiquidTotalRequest {
  return {
    user: ""
  };
}
export const QueryLiquidTotalRequest = {
  typeUrl: "/elys.tier.QueryLiquidTotalRequest",
  encode(message: QueryLiquidTotalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidTotalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidTotalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLiquidTotalRequest>): QueryLiquidTotalRequest {
    const message = createBaseQueryLiquidTotalRequest();
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: QueryLiquidTotalRequestAmino): QueryLiquidTotalRequest {
    const message = createBaseQueryLiquidTotalRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: QueryLiquidTotalRequest): QueryLiquidTotalRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidTotalRequestAminoMsg): QueryLiquidTotalRequest {
    return QueryLiquidTotalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidTotalRequestProtoMsg): QueryLiquidTotalRequest {
    return QueryLiquidTotalRequest.decode(message.value);
  },
  toProto(message: QueryLiquidTotalRequest): Uint8Array {
    return QueryLiquidTotalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidTotalRequest): QueryLiquidTotalRequestProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryLiquidTotalRequest",
      value: QueryLiquidTotalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidTotalResponse(): QueryLiquidTotalResponse {
  return {
    total: ""
  };
}
export const QueryLiquidTotalResponse = {
  typeUrl: "/elys.tier.QueryLiquidTotalResponse",
  encode(message: QueryLiquidTotalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.total, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidTotalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidTotalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLiquidTotalResponse>): QueryLiquidTotalResponse {
    const message = createBaseQueryLiquidTotalResponse();
    message.total = object.total ?? "";
    return message;
  },
  fromAmino(object: QueryLiquidTotalResponseAmino): QueryLiquidTotalResponse {
    const message = createBaseQueryLiquidTotalResponse();
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    return message;
  },
  toAmino(message: QueryLiquidTotalResponse): QueryLiquidTotalResponseAmino {
    const obj: any = {};
    obj.total = message.total === "" ? undefined : message.total;
    return obj;
  },
  fromAminoMsg(object: QueryLiquidTotalResponseAminoMsg): QueryLiquidTotalResponse {
    return QueryLiquidTotalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidTotalResponseProtoMsg): QueryLiquidTotalResponse {
    return QueryLiquidTotalResponse.decode(message.value);
  },
  toProto(message: QueryLiquidTotalResponse): Uint8Array {
    return QueryLiquidTotalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidTotalResponse): QueryLiquidTotalResponseProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryLiquidTotalResponse",
      value: QueryLiquidTotalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLockedOrderRequest(): QueryLockedOrderRequest {
  return {
    user: ""
  };
}
export const QueryLockedOrderRequest = {
  typeUrl: "/elys.tier.QueryLockedOrderRequest",
  encode(message: QueryLockedOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockedOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLockedOrderRequest>): QueryLockedOrderRequest {
    const message = createBaseQueryLockedOrderRequest();
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: QueryLockedOrderRequestAmino): QueryLockedOrderRequest {
    const message = createBaseQueryLockedOrderRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: QueryLockedOrderRequest): QueryLockedOrderRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: QueryLockedOrderRequestAminoMsg): QueryLockedOrderRequest {
    return QueryLockedOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLockedOrderRequestProtoMsg): QueryLockedOrderRequest {
    return QueryLockedOrderRequest.decode(message.value);
  },
  toProto(message: QueryLockedOrderRequest): Uint8Array {
    return QueryLockedOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLockedOrderRequest): QueryLockedOrderRequestProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryLockedOrderRequest",
      value: QueryLockedOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLockedOrderResponse(): QueryLockedOrderResponse {
  return {
    total: ""
  };
}
export const QueryLockedOrderResponse = {
  typeUrl: "/elys.tier.QueryLockedOrderResponse",
  encode(message: QueryLockedOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.total, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockedOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLockedOrderResponse>): QueryLockedOrderResponse {
    const message = createBaseQueryLockedOrderResponse();
    message.total = object.total ?? "";
    return message;
  },
  fromAmino(object: QueryLockedOrderResponseAmino): QueryLockedOrderResponse {
    const message = createBaseQueryLockedOrderResponse();
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    return message;
  },
  toAmino(message: QueryLockedOrderResponse): QueryLockedOrderResponseAmino {
    const obj: any = {};
    obj.total = message.total === "" ? undefined : message.total;
    return obj;
  },
  fromAminoMsg(object: QueryLockedOrderResponseAminoMsg): QueryLockedOrderResponse {
    return QueryLockedOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLockedOrderResponseProtoMsg): QueryLockedOrderResponse {
    return QueryLockedOrderResponse.decode(message.value);
  },
  toProto(message: QueryLockedOrderResponse): Uint8Array {
    return QueryLockedOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLockedOrderResponse): QueryLockedOrderResponseProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryLockedOrderResponse",
      value: QueryLockedOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetAmmPriceRequest(): QueryGetAmmPriceRequest {
  return {
    denom: "",
    decimal: 0
  };
}
export const QueryGetAmmPriceRequest = {
  typeUrl: "/elys.tier.QueryGetAmmPriceRequest",
  encode(message: QueryGetAmmPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.decimal !== 0) {
      writer.uint32(16).int32(message.decimal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAmmPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAmmPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.decimal = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAmmPriceRequest>): QueryGetAmmPriceRequest {
    const message = createBaseQueryGetAmmPriceRequest();
    message.denom = object.denom ?? "";
    message.decimal = object.decimal ?? 0;
    return message;
  },
  fromAmino(object: QueryGetAmmPriceRequestAmino): QueryGetAmmPriceRequest {
    const message = createBaseQueryGetAmmPriceRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.decimal !== undefined && object.decimal !== null) {
      message.decimal = object.decimal;
    }
    return message;
  },
  toAmino(message: QueryGetAmmPriceRequest): QueryGetAmmPriceRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.decimal = message.decimal === 0 ? undefined : message.decimal;
    return obj;
  },
  fromAminoMsg(object: QueryGetAmmPriceRequestAminoMsg): QueryGetAmmPriceRequest {
    return QueryGetAmmPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAmmPriceRequestProtoMsg): QueryGetAmmPriceRequest {
    return QueryGetAmmPriceRequest.decode(message.value);
  },
  toProto(message: QueryGetAmmPriceRequest): Uint8Array {
    return QueryGetAmmPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAmmPriceRequest): QueryGetAmmPriceRequestProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryGetAmmPriceRequest",
      value: QueryGetAmmPriceRequest.encode(message).finish()
    };
  }
};
function createBaseGetAmmPriceResponseResult(): GetAmmPriceResponseResult {
  return {
    total: ""
  };
}
export const GetAmmPriceResponseResult = {
  typeUrl: "/elys.tier.GetAmmPriceResponseResult",
  encode(message: GetAmmPriceResponseResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.total, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAmmPriceResponseResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAmmPriceResponseResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GetAmmPriceResponseResult>): GetAmmPriceResponseResult {
    const message = createBaseGetAmmPriceResponseResult();
    message.total = object.total ?? "";
    return message;
  },
  fromAmino(object: GetAmmPriceResponseResultAmino): GetAmmPriceResponseResult {
    const message = createBaseGetAmmPriceResponseResult();
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    return message;
  },
  toAmino(message: GetAmmPriceResponseResult): GetAmmPriceResponseResultAmino {
    const obj: any = {};
    obj.total = message.total === "" ? undefined : message.total;
    return obj;
  },
  fromAminoMsg(object: GetAmmPriceResponseResultAminoMsg): GetAmmPriceResponseResult {
    return GetAmmPriceResponseResult.fromAmino(object.value);
  },
  fromProtoMsg(message: GetAmmPriceResponseResultProtoMsg): GetAmmPriceResponseResult {
    return GetAmmPriceResponseResult.decode(message.value);
  },
  toProto(message: GetAmmPriceResponseResult): Uint8Array {
    return GetAmmPriceResponseResult.encode(message).finish();
  },
  toProtoMsg(message: GetAmmPriceResponseResult): GetAmmPriceResponseResultProtoMsg {
    return {
      typeUrl: "/elys.tier.GetAmmPriceResponseResult",
      value: GetAmmPriceResponseResult.encode(message).finish()
    };
  }
};
function createBaseQueryGetAmmPriceResponse(): QueryGetAmmPriceResponse {
  return {
    result: undefined
  };
}
export const QueryGetAmmPriceResponse = {
  typeUrl: "/elys.tier.QueryGetAmmPriceResponse",
  encode(message: QueryGetAmmPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== undefined) {
      GetAmmPriceResponseResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAmmPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAmmPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = GetAmmPriceResponseResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAmmPriceResponse>): QueryGetAmmPriceResponse {
    const message = createBaseQueryGetAmmPriceResponse();
    message.result = object.result !== undefined && object.result !== null ? GetAmmPriceResponseResult.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAmmPriceResponseAmino): QueryGetAmmPriceResponse {
    const message = createBaseQueryGetAmmPriceResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = GetAmmPriceResponseResult.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: QueryGetAmmPriceResponse): QueryGetAmmPriceResponseAmino {
    const obj: any = {};
    obj.result = message.result ? GetAmmPriceResponseResult.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAmmPriceResponseAminoMsg): QueryGetAmmPriceResponse {
    return QueryGetAmmPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAmmPriceResponseProtoMsg): QueryGetAmmPriceResponse {
    return QueryGetAmmPriceResponse.decode(message.value);
  },
  toProto(message: QueryGetAmmPriceResponse): Uint8Array {
    return QueryGetAmmPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAmmPriceResponse): QueryGetAmmPriceResponseProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryGetAmmPriceResponse",
      value: QueryGetAmmPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetConsolidatedPriceRequest(): QueryGetConsolidatedPriceRequest {
  return {
    denom: ""
  };
}
export const QueryGetConsolidatedPriceRequest = {
  typeUrl: "/elys.tier.QueryGetConsolidatedPriceRequest",
  encode(message: QueryGetConsolidatedPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetConsolidatedPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetConsolidatedPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetConsolidatedPriceRequest>): QueryGetConsolidatedPriceRequest {
    const message = createBaseQueryGetConsolidatedPriceRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetConsolidatedPriceRequestAmino): QueryGetConsolidatedPriceRequest {
    const message = createBaseQueryGetConsolidatedPriceRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetConsolidatedPriceRequest): QueryGetConsolidatedPriceRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetConsolidatedPriceRequestAminoMsg): QueryGetConsolidatedPriceRequest {
    return QueryGetConsolidatedPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetConsolidatedPriceRequestProtoMsg): QueryGetConsolidatedPriceRequest {
    return QueryGetConsolidatedPriceRequest.decode(message.value);
  },
  toProto(message: QueryGetConsolidatedPriceRequest): Uint8Array {
    return QueryGetConsolidatedPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetConsolidatedPriceRequest): QueryGetConsolidatedPriceRequestProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryGetConsolidatedPriceRequest",
      value: QueryGetConsolidatedPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetConsolidatedPriceResponse(): QueryGetConsolidatedPriceResponse {
  return {
    ammPrice: "",
    oraclePrice: "",
    oraclePriceDec: ""
  };
}
export const QueryGetConsolidatedPriceResponse = {
  typeUrl: "/elys.tier.QueryGetConsolidatedPriceResponse",
  encode(message: QueryGetConsolidatedPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ammPrice !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.ammPrice, 18).atomics);
    }
    if (message.oraclePrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.oraclePrice, 18).atomics);
    }
    if (message.oraclePriceDec !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.oraclePriceDec, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetConsolidatedPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetConsolidatedPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ammPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.oraclePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.oraclePriceDec = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetConsolidatedPriceResponse>): QueryGetConsolidatedPriceResponse {
    const message = createBaseQueryGetConsolidatedPriceResponse();
    message.ammPrice = object.ammPrice ?? "";
    message.oraclePrice = object.oraclePrice ?? "";
    message.oraclePriceDec = object.oraclePriceDec ?? "";
    return message;
  },
  fromAmino(object: QueryGetConsolidatedPriceResponseAmino): QueryGetConsolidatedPriceResponse {
    const message = createBaseQueryGetConsolidatedPriceResponse();
    if (object.amm_price !== undefined && object.amm_price !== null) {
      message.ammPrice = object.amm_price;
    }
    if (object.oracle_price !== undefined && object.oracle_price !== null) {
      message.oraclePrice = object.oracle_price;
    }
    if (object.oracle_price_dec !== undefined && object.oracle_price_dec !== null) {
      message.oraclePriceDec = object.oracle_price_dec;
    }
    return message;
  },
  toAmino(message: QueryGetConsolidatedPriceResponse): QueryGetConsolidatedPriceResponseAmino {
    const obj: any = {};
    obj.amm_price = message.ammPrice === "" ? undefined : message.ammPrice;
    obj.oracle_price = message.oraclePrice === "" ? undefined : message.oraclePrice;
    obj.oracle_price_dec = message.oraclePriceDec === "" ? undefined : message.oraclePriceDec;
    return obj;
  },
  fromAminoMsg(object: QueryGetConsolidatedPriceResponseAminoMsg): QueryGetConsolidatedPriceResponse {
    return QueryGetConsolidatedPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetConsolidatedPriceResponseProtoMsg): QueryGetConsolidatedPriceResponse {
    return QueryGetConsolidatedPriceResponse.decode(message.value);
  },
  toProto(message: QueryGetConsolidatedPriceResponse): Uint8Array {
    return QueryGetConsolidatedPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetConsolidatedPriceResponse): QueryGetConsolidatedPriceResponseProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryGetConsolidatedPriceResponse",
      value: QueryGetConsolidatedPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStakedRequest(): QueryStakedRequest {
  return {
    user: ""
  };
}
export const QueryStakedRequest = {
  typeUrl: "/elys.tier.QueryStakedRequest",
  encode(message: QueryStakedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStakedRequest>): QueryStakedRequest {
    const message = createBaseQueryStakedRequest();
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: QueryStakedRequestAmino): QueryStakedRequest {
    const message = createBaseQueryStakedRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: QueryStakedRequest): QueryStakedRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: QueryStakedRequestAminoMsg): QueryStakedRequest {
    return QueryStakedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakedRequestProtoMsg): QueryStakedRequest {
    return QueryStakedRequest.decode(message.value);
  },
  toProto(message: QueryStakedRequest): Uint8Array {
    return QueryStakedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStakedRequest): QueryStakedRequestProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryStakedRequest",
      value: QueryStakedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStakedResponse(): QueryStakedResponse {
  return {
    commitments: "",
    delegations: "",
    unbondings: "",
    totalVested: ""
  };
}
export const QueryStakedResponse = {
  typeUrl: "/elys.tier.QueryStakedResponse",
  encode(message: QueryStakedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commitments !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.commitments, 18).atomics);
    }
    if (message.delegations !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.delegations, 18).atomics);
    }
    if (message.unbondings !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.unbondings, 18).atomics);
    }
    if (message.totalVested !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.totalVested, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitments = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.delegations = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.unbondings = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.totalVested = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStakedResponse>): QueryStakedResponse {
    const message = createBaseQueryStakedResponse();
    message.commitments = object.commitments ?? "";
    message.delegations = object.delegations ?? "";
    message.unbondings = object.unbondings ?? "";
    message.totalVested = object.totalVested ?? "";
    return message;
  },
  fromAmino(object: QueryStakedResponseAmino): QueryStakedResponse {
    const message = createBaseQueryStakedResponse();
    if (object.commitments !== undefined && object.commitments !== null) {
      message.commitments = object.commitments;
    }
    if (object.delegations !== undefined && object.delegations !== null) {
      message.delegations = object.delegations;
    }
    if (object.unbondings !== undefined && object.unbondings !== null) {
      message.unbondings = object.unbondings;
    }
    if (object.total_vested !== undefined && object.total_vested !== null) {
      message.totalVested = object.total_vested;
    }
    return message;
  },
  toAmino(message: QueryStakedResponse): QueryStakedResponseAmino {
    const obj: any = {};
    obj.commitments = message.commitments === "" ? undefined : message.commitments;
    obj.delegations = message.delegations === "" ? undefined : message.delegations;
    obj.unbondings = message.unbondings === "" ? undefined : message.unbondings;
    obj.total_vested = message.totalVested === "" ? undefined : message.totalVested;
    return obj;
  },
  fromAminoMsg(object: QueryStakedResponseAminoMsg): QueryStakedResponse {
    return QueryStakedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakedResponseProtoMsg): QueryStakedResponse {
    return QueryStakedResponse.decode(message.value);
  },
  toProto(message: QueryStakedResponse): Uint8Array {
    return QueryStakedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakedResponse): QueryStakedResponseProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryStakedResponse",
      value: QueryStakedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetUsersPoolDataRequest(): QueryGetUsersPoolDataRequest {
  return {
    pagination: undefined
  };
}
export const QueryGetUsersPoolDataRequest = {
  typeUrl: "/elys.tier.QueryGetUsersPoolDataRequest",
  encode(message: QueryGetUsersPoolDataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUsersPoolDataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUsersPoolDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetUsersPoolDataRequest>): QueryGetUsersPoolDataRequest {
    const message = createBaseQueryGetUsersPoolDataRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGetUsersPoolDataRequestAmino): QueryGetUsersPoolDataRequest {
    const message = createBaseQueryGetUsersPoolDataRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGetUsersPoolDataRequest): QueryGetUsersPoolDataRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUsersPoolDataRequestAminoMsg): QueryGetUsersPoolDataRequest {
    return QueryGetUsersPoolDataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUsersPoolDataRequestProtoMsg): QueryGetUsersPoolDataRequest {
    return QueryGetUsersPoolDataRequest.decode(message.value);
  },
  toProto(message: QueryGetUsersPoolDataRequest): Uint8Array {
    return QueryGetUsersPoolDataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUsersPoolDataRequest): QueryGetUsersPoolDataRequestProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryGetUsersPoolDataRequest",
      value: QueryGetUsersPoolDataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetUsersPoolDataResponse(): QueryGetUsersPoolDataResponse {
  return {
    users: [],
    pagination: undefined
  };
}
export const QueryGetUsersPoolDataResponse = {
  typeUrl: "/elys.tier.QueryGetUsersPoolDataResponse",
  encode(message: QueryGetUsersPoolDataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.users) {
      UserData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUsersPoolDataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUsersPoolDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(UserData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetUsersPoolDataResponse>): QueryGetUsersPoolDataResponse {
    const message = createBaseQueryGetUsersPoolDataResponse();
    message.users = object.users?.map(e => UserData.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGetUsersPoolDataResponseAmino): QueryGetUsersPoolDataResponse {
    const message = createBaseQueryGetUsersPoolDataResponse();
    message.users = object.users?.map(e => UserData.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGetUsersPoolDataResponse): QueryGetUsersPoolDataResponseAmino {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map(e => e ? UserData.toAmino(e) : undefined);
    } else {
      obj.users = message.users;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUsersPoolDataResponseAminoMsg): QueryGetUsersPoolDataResponse {
    return QueryGetUsersPoolDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUsersPoolDataResponseProtoMsg): QueryGetUsersPoolDataResponse {
    return QueryGetUsersPoolDataResponse.decode(message.value);
  },
  toProto(message: QueryGetUsersPoolDataResponse): Uint8Array {
    return QueryGetUsersPoolDataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUsersPoolDataResponse): QueryGetUsersPoolDataResponseProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryGetUsersPoolDataResponse",
      value: QueryGetUsersPoolDataResponse.encode(message).finish()
    };
  }
};
function createBasePrice(): Price {
  return {
    denom: "",
    oraclePrice: "",
    ammPrice: ""
  };
}
export const Price = {
  typeUrl: "/elys.tier.Price",
  encode(message: Price, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.oraclePrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.oraclePrice, 18).atomics);
    }
    if (message.ammPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.ammPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Price {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.oraclePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.ammPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Price>): Price {
    const message = createBasePrice();
    message.denom = object.denom ?? "";
    message.oraclePrice = object.oraclePrice ?? "";
    message.ammPrice = object.ammPrice ?? "";
    return message;
  },
  fromAmino(object: PriceAmino): Price {
    const message = createBasePrice();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.oracle_price !== undefined && object.oracle_price !== null) {
      message.oraclePrice = object.oracle_price;
    }
    if (object.amm_price !== undefined && object.amm_price !== null) {
      message.ammPrice = object.amm_price;
    }
    return message;
  },
  toAmino(message: Price): PriceAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.oracle_price = message.oraclePrice === "" ? undefined : message.oraclePrice;
    obj.amm_price = message.ammPrice === "" ? undefined : message.ammPrice;
    return obj;
  },
  fromAminoMsg(object: PriceAminoMsg): Price {
    return Price.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceProtoMsg): Price {
    return Price.decode(message.value);
  },
  toProto(message: Price): Uint8Array {
    return Price.encode(message).finish();
  },
  toProtoMsg(message: Price): PriceProtoMsg {
    return {
      typeUrl: "/elys.tier.Price",
      value: Price.encode(message).finish()
    };
  }
};
function createBaseQueryGetAllPricesRequest(): QueryGetAllPricesRequest {
  return {
    pagination: undefined
  };
}
export const QueryGetAllPricesRequest = {
  typeUrl: "/elys.tier.QueryGetAllPricesRequest",
  encode(message: QueryGetAllPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAllPricesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllPricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAllPricesRequest>): QueryGetAllPricesRequest {
    const message = createBaseQueryGetAllPricesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAllPricesRequestAmino): QueryGetAllPricesRequest {
    const message = createBaseQueryGetAllPricesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGetAllPricesRequest): QueryGetAllPricesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAllPricesRequestAminoMsg): QueryGetAllPricesRequest {
    return QueryGetAllPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAllPricesRequestProtoMsg): QueryGetAllPricesRequest {
    return QueryGetAllPricesRequest.decode(message.value);
  },
  toProto(message: QueryGetAllPricesRequest): Uint8Array {
    return QueryGetAllPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAllPricesRequest): QueryGetAllPricesRequestProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryGetAllPricesRequest",
      value: QueryGetAllPricesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetAllPricesResponse(): QueryGetAllPricesResponse {
  return {
    prices: [],
    pagination: undefined
  };
}
export const QueryGetAllPricesResponse = {
  typeUrl: "/elys.tier.QueryGetAllPricesResponse",
  encode(message: QueryGetAllPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.prices) {
      Price.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAllPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(Price.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAllPricesResponse>): QueryGetAllPricesResponse {
    const message = createBaseQueryGetAllPricesResponse();
    message.prices = object.prices?.map(e => Price.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAllPricesResponseAmino): QueryGetAllPricesResponse {
    const message = createBaseQueryGetAllPricesResponse();
    message.prices = object.prices?.map(e => Price.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGetAllPricesResponse): QueryGetAllPricesResponseAmino {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? Price.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAllPricesResponseAminoMsg): QueryGetAllPricesResponse {
    return QueryGetAllPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAllPricesResponseProtoMsg): QueryGetAllPricesResponse {
    return QueryGetAllPricesResponse.decode(message.value);
  },
  toProto(message: QueryGetAllPricesResponse): Uint8Array {
    return QueryGetAllPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAllPricesResponse): QueryGetAllPricesResponseProtoMsg {
    return {
      typeUrl: "/elys.tier.QueryGetAllPricesResponse",
      value: QueryGetAllPricesResponse.encode(message).finish()
    };
  }
};