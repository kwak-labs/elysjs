import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Position, MTP, MTPAmino, MTPSDKType, positionFromJSON } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
/** ParamsRequest is request type for the Query/Params RPC method. */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/elys.perpetual.ParamsRequest";
  value: Uint8Array;
}
/** ParamsRequest is request type for the Query/Params RPC method. */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "/elys.perpetual.ParamsRequest";
  value: ParamsRequestAmino;
}
/** ParamsRequest is request type for the Query/Params RPC method. */
export interface ParamsRequestSDKType {}
/** ParamsResponse is response type for the Query/Params RPC method. */
export interface ParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/elys.perpetual.ParamsResponse";
  value: Uint8Array;
}
/** ParamsResponse is response type for the Query/Params RPC method. */
export interface ParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "/elys.perpetual.ParamsResponse";
  value: ParamsResponseAmino;
}
/** ParamsResponse is response type for the Query/Params RPC method. */
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface PositionsRequest {
  pagination?: PageRequest;
}
export interface PositionsRequestProtoMsg {
  typeUrl: "/elys.perpetual.PositionsRequest";
  value: Uint8Array;
}
export interface PositionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface PositionsRequestAminoMsg {
  type: "/elys.perpetual.PositionsRequest";
  value: PositionsRequestAmino;
}
export interface PositionsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface PositionsResponse {
  mtps: MTP[];
  pagination?: PageResponse;
}
export interface PositionsResponseProtoMsg {
  typeUrl: "/elys.perpetual.PositionsResponse";
  value: Uint8Array;
}
export interface PositionsResponseAmino {
  mtps: MTPAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsResponseAminoMsg {
  type: "/elys.perpetual.PositionsResponse";
  value: PositionsResponseAmino;
}
export interface PositionsResponseSDKType {
  mtps: MTPSDKType[];
  pagination?: PageResponseSDKType;
}
export interface PositionsByPoolRequest {
  ammPoolId: bigint;
  pagination?: PageRequest;
}
export interface PositionsByPoolRequestProtoMsg {
  typeUrl: "/elys.perpetual.PositionsByPoolRequest";
  value: Uint8Array;
}
export interface PositionsByPoolRequestAmino {
  amm_pool_id: string;
  pagination?: PageRequestAmino;
}
export interface PositionsByPoolRequestAminoMsg {
  type: "/elys.perpetual.PositionsByPoolRequest";
  value: PositionsByPoolRequestAmino;
}
export interface PositionsByPoolRequestSDKType {
  amm_pool_id: bigint;
  pagination?: PageRequestSDKType;
}
export interface PositionsByPoolResponse {
  mtps: MTP[];
  pagination?: PageResponse;
}
export interface PositionsByPoolResponseProtoMsg {
  typeUrl: "/elys.perpetual.PositionsByPoolResponse";
  value: Uint8Array;
}
export interface PositionsByPoolResponseAmino {
  mtps: MTPAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsByPoolResponseAminoMsg {
  type: "/elys.perpetual.PositionsByPoolResponse";
  value: PositionsByPoolResponseAmino;
}
export interface PositionsByPoolResponseSDKType {
  mtps: MTPSDKType[];
  pagination?: PageResponseSDKType;
}
export interface StatusRequest {}
export interface StatusRequestProtoMsg {
  typeUrl: "/elys.perpetual.StatusRequest";
  value: Uint8Array;
}
export interface StatusRequestAmino {}
export interface StatusRequestAminoMsg {
  type: "/elys.perpetual.StatusRequest";
  value: StatusRequestAmino;
}
export interface StatusRequestSDKType {}
export interface StatusResponse {
  openMtpCount: bigint;
  lifetimeMtpCount: bigint;
}
export interface StatusResponseProtoMsg {
  typeUrl: "/elys.perpetual.StatusResponse";
  value: Uint8Array;
}
export interface StatusResponseAmino {
  open_mtp_count: string;
  lifetime_mtp_count: string;
}
export interface StatusResponseAminoMsg {
  type: "/elys.perpetual.StatusResponse";
  value: StatusResponseAmino;
}
export interface StatusResponseSDKType {
  open_mtp_count: bigint;
  lifetime_mtp_count: bigint;
}
export interface PositionsForAddressRequest {
  address: string;
  pagination?: PageRequest;
}
export interface PositionsForAddressRequestProtoMsg {
  typeUrl: "/elys.perpetual.PositionsForAddressRequest";
  value: Uint8Array;
}
export interface PositionsForAddressRequestAmino {
  address: string;
  pagination?: PageRequestAmino;
}
export interface PositionsForAddressRequestAminoMsg {
  type: "/elys.perpetual.PositionsForAddressRequest";
  value: PositionsForAddressRequestAmino;
}
export interface PositionsForAddressRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface PositionsForAddressResponse {
  mtps: MTP[];
  pagination?: PageResponse;
}
export interface PositionsForAddressResponseProtoMsg {
  typeUrl: "/elys.perpetual.PositionsForAddressResponse";
  value: Uint8Array;
}
export interface PositionsForAddressResponseAmino {
  mtps: MTPAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsForAddressResponseAminoMsg {
  type: "/elys.perpetual.PositionsForAddressResponse";
  value: PositionsForAddressResponseAmino;
}
export interface PositionsForAddressResponseSDKType {
  mtps: MTPSDKType[];
  pagination?: PageResponseSDKType;
}
export interface WhitelistRequest {
  pagination?: PageRequest;
}
export interface WhitelistRequestProtoMsg {
  typeUrl: "/elys.perpetual.WhitelistRequest";
  value: Uint8Array;
}
export interface WhitelistRequestAmino {
  pagination?: PageRequestAmino;
}
export interface WhitelistRequestAminoMsg {
  type: "/elys.perpetual.WhitelistRequest";
  value: WhitelistRequestAmino;
}
export interface WhitelistRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface WhitelistResponse {
  whitelist: string[];
  pagination?: PageResponse;
}
export interface WhitelistResponseProtoMsg {
  typeUrl: "/elys.perpetual.WhitelistResponse";
  value: Uint8Array;
}
export interface WhitelistResponseAmino {
  whitelist: string[];
  pagination?: PageResponseAmino;
}
export interface WhitelistResponseAminoMsg {
  type: "/elys.perpetual.WhitelistResponse";
  value: WhitelistResponseAmino;
}
export interface WhitelistResponseSDKType {
  whitelist: string[];
  pagination?: PageResponseSDKType;
}
export interface IsWhitelistedRequest {
  address: string;
}
export interface IsWhitelistedRequestProtoMsg {
  typeUrl: "/elys.perpetual.IsWhitelistedRequest";
  value: Uint8Array;
}
export interface IsWhitelistedRequestAmino {
  address: string;
}
export interface IsWhitelistedRequestAminoMsg {
  type: "/elys.perpetual.IsWhitelistedRequest";
  value: IsWhitelistedRequestAmino;
}
export interface IsWhitelistedRequestSDKType {
  address: string;
}
export interface IsWhitelistedResponse {
  address: string;
  isWhitelisted: boolean;
}
export interface IsWhitelistedResponseProtoMsg {
  typeUrl: "/elys.perpetual.IsWhitelistedResponse";
  value: Uint8Array;
}
export interface IsWhitelistedResponseAmino {
  address: string;
  is_whitelisted: boolean;
}
export interface IsWhitelistedResponseAminoMsg {
  type: "/elys.perpetual.IsWhitelistedResponse";
  value: IsWhitelistedResponseAmino;
}
export interface IsWhitelistedResponseSDKType {
  address: string;
  is_whitelisted: boolean;
}
export interface QueryGetPoolRequest {
  index: bigint;
}
export interface QueryGetPoolRequestProtoMsg {
  typeUrl: "/elys.perpetual.QueryGetPoolRequest";
  value: Uint8Array;
}
export interface QueryGetPoolRequestAmino {
  index: string;
}
export interface QueryGetPoolRequestAminoMsg {
  type: "/elys.perpetual.QueryGetPoolRequest";
  value: QueryGetPoolRequestAmino;
}
export interface QueryGetPoolRequestSDKType {
  index: bigint;
}
export interface QueryGetPoolResponse {
  pool: Pool;
}
export interface QueryGetPoolResponseProtoMsg {
  typeUrl: "/elys.perpetual.QueryGetPoolResponse";
  value: Uint8Array;
}
export interface QueryGetPoolResponseAmino {
  pool?: PoolAmino;
}
export interface QueryGetPoolResponseAminoMsg {
  type: "/elys.perpetual.QueryGetPoolResponse";
  value: QueryGetPoolResponseAmino;
}
export interface QueryGetPoolResponseSDKType {
  pool: PoolSDKType;
}
export interface QueryAllPoolRequest {
  pagination?: PageRequest;
}
export interface QueryAllPoolRequestProtoMsg {
  typeUrl: "/elys.perpetual.QueryAllPoolRequest";
  value: Uint8Array;
}
export interface QueryAllPoolRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPoolRequestAminoMsg {
  type: "/elys.perpetual.QueryAllPoolRequest";
  value: QueryAllPoolRequestAmino;
}
export interface QueryAllPoolRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPoolResponse {
  pool: Pool[];
  pagination?: PageResponse;
}
export interface QueryAllPoolResponseProtoMsg {
  typeUrl: "/elys.perpetual.QueryAllPoolResponse";
  value: Uint8Array;
}
export interface QueryAllPoolResponseAmino {
  pool: PoolAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPoolResponseAminoMsg {
  type: "/elys.perpetual.QueryAllPoolResponse";
  value: QueryAllPoolResponseAmino;
}
export interface QueryAllPoolResponseSDKType {
  pool: PoolSDKType[];
  pagination?: PageResponseSDKType;
}
export interface MTPRequest {
  address: string;
  id: bigint;
}
export interface MTPRequestProtoMsg {
  typeUrl: "/elys.perpetual.MTPRequest";
  value: Uint8Array;
}
export interface MTPRequestAmino {
  address: string;
  id: string;
}
export interface MTPRequestAminoMsg {
  type: "/elys.perpetual.MTPRequest";
  value: MTPRequestAmino;
}
export interface MTPRequestSDKType {
  address: string;
  id: bigint;
}
export interface MTPResponse {
  mtp?: MTP;
}
export interface MTPResponseProtoMsg {
  typeUrl: "/elys.perpetual.MTPResponse";
  value: Uint8Array;
}
export interface MTPResponseAmino {
  mtp?: MTPAmino;
}
export interface MTPResponseAminoMsg {
  type: "/elys.perpetual.MTPResponse";
  value: MTPResponseAmino;
}
export interface MTPResponseSDKType {
  mtp?: MTPSDKType;
}
export interface QueryOpenEstimationRequest {
  position: Position;
  leverage: string;
  tradingAsset: string;
  collateral: Coin;
  discount: string;
  takeProfitPrice: string;
}
export interface QueryOpenEstimationRequestProtoMsg {
  typeUrl: "/elys.perpetual.QueryOpenEstimationRequest";
  value: Uint8Array;
}
export interface QueryOpenEstimationRequestAmino {
  position: Position;
  leverage: string;
  trading_asset: string;
  collateral?: CoinAmino;
  discount: string;
  take_profit_price: string;
}
export interface QueryOpenEstimationRequestAminoMsg {
  type: "/elys.perpetual.QueryOpenEstimationRequest";
  value: QueryOpenEstimationRequestAmino;
}
export interface QueryOpenEstimationRequestSDKType {
  position: Position;
  leverage: string;
  trading_asset: string;
  collateral: CoinSDKType;
  discount: string;
  take_profit_price: string;
}
export interface QueryOpenEstimationResponse {
  position: Position;
  leverage: string;
  tradingAsset: string;
  collateral: Coin;
  minCollateral: Coin;
  validCollateral: boolean;
  positionSize: Coin;
  swapFee: string;
  discount: string;
  openPrice: string;
  takeProfitPrice: string;
  liquidationPrice: string;
  estimatedPnl: string;
  availableLiquidity: Coin;
  weightBalanceRatio: string;
  borrowInterestRate: string;
  fundingRate: string;
  priceImpact: string;
}
export interface QueryOpenEstimationResponseProtoMsg {
  typeUrl: "/elys.perpetual.QueryOpenEstimationResponse";
  value: Uint8Array;
}
export interface QueryOpenEstimationResponseAmino {
  position: Position;
  leverage: string;
  trading_asset: string;
  collateral?: CoinAmino;
  min_collateral?: CoinAmino;
  valid_collateral: boolean;
  position_size?: CoinAmino;
  swap_fee: string;
  discount: string;
  open_price: string;
  take_profit_price: string;
  liquidation_price: string;
  estimated_pnl: string;
  available_liquidity?: CoinAmino;
  weight_balance_ratio: string;
  borrow_interest_rate: string;
  funding_rate: string;
  price_impact: string;
}
export interface QueryOpenEstimationResponseAminoMsg {
  type: "/elys.perpetual.QueryOpenEstimationResponse";
  value: QueryOpenEstimationResponseAmino;
}
export interface QueryOpenEstimationResponseSDKType {
  position: Position;
  leverage: string;
  trading_asset: string;
  collateral: CoinSDKType;
  min_collateral: CoinSDKType;
  valid_collateral: boolean;
  position_size: CoinSDKType;
  swap_fee: string;
  discount: string;
  open_price: string;
  take_profit_price: string;
  liquidation_price: string;
  estimated_pnl: string;
  available_liquidity: CoinSDKType;
  weight_balance_ratio: string;
  borrow_interest_rate: string;
  funding_rate: string;
  price_impact: string;
}
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/elys.perpetual.ParamsRequest",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
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
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    return {};
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/elys.perpetual.ParamsResponse",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
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
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};
function createBasePositionsRequest(): PositionsRequest {
  return {
    pagination: undefined
  };
}
export const PositionsRequest = {
  typeUrl: "/elys.perpetual.PositionsRequest",
  encode(message: PositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsRequest();
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
  fromPartial(object: Partial<PositionsRequest>): PositionsRequest {
    const message = createBasePositionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsRequestAmino): PositionsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: PositionsRequest): PositionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsRequestAminoMsg): PositionsRequest {
    return PositionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsRequestProtoMsg): PositionsRequest {
    return PositionsRequest.decode(message.value);
  },
  toProto(message: PositionsRequest): Uint8Array {
    return PositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionsRequest): PositionsRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.PositionsRequest",
      value: PositionsRequest.encode(message).finish()
    };
  }
};
function createBasePositionsResponse(): PositionsResponse {
  return {
    mtps: [],
    pagination: undefined
  };
}
export const PositionsResponse = {
  typeUrl: "/elys.perpetual.PositionsResponse",
  encode(message: PositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.mtps) {
      MTP.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mtps.push(MTP.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<PositionsResponse>): PositionsResponse {
    const message = createBasePositionsResponse();
    message.mtps = object.mtps?.map(e => MTP.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsResponseAmino): PositionsResponse {
    return {
      mtps: Array.isArray(object?.mtps) ? object.mtps.map((e: any) => MTP.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: PositionsResponse): PositionsResponseAmino {
    const obj: any = {};
    if (message.mtps) {
      obj.mtps = message.mtps.map(e => e ? MTP.toAmino(e) : undefined);
    } else {
      obj.mtps = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsResponseAminoMsg): PositionsResponse {
    return PositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsResponseProtoMsg): PositionsResponse {
    return PositionsResponse.decode(message.value);
  },
  toProto(message: PositionsResponse): Uint8Array {
    return PositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionsResponse): PositionsResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.PositionsResponse",
      value: PositionsResponse.encode(message).finish()
    };
  }
};
function createBasePositionsByPoolRequest(): PositionsByPoolRequest {
  return {
    ammPoolId: BigInt(0),
    pagination: undefined
  };
}
export const PositionsByPoolRequest = {
  typeUrl: "/elys.perpetual.PositionsByPoolRequest",
  encode(message: PositionsByPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.ammPoolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsByPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsByPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ammPoolId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionsByPoolRequest>): PositionsByPoolRequest {
    const message = createBasePositionsByPoolRequest();
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsByPoolRequestAmino): PositionsByPoolRequest {
    return {
      ammPoolId: BigInt(object.amm_pool_id),
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: PositionsByPoolRequest): PositionsByPoolRequestAmino {
    const obj: any = {};
    obj.amm_pool_id = message.ammPoolId ? message.ammPoolId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsByPoolRequestAminoMsg): PositionsByPoolRequest {
    return PositionsByPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsByPoolRequestProtoMsg): PositionsByPoolRequest {
    return PositionsByPoolRequest.decode(message.value);
  },
  toProto(message: PositionsByPoolRequest): Uint8Array {
    return PositionsByPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionsByPoolRequest): PositionsByPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.PositionsByPoolRequest",
      value: PositionsByPoolRequest.encode(message).finish()
    };
  }
};
function createBasePositionsByPoolResponse(): PositionsByPoolResponse {
  return {
    mtps: [],
    pagination: undefined
  };
}
export const PositionsByPoolResponse = {
  typeUrl: "/elys.perpetual.PositionsByPoolResponse",
  encode(message: PositionsByPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.mtps) {
      MTP.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsByPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsByPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mtps.push(MTP.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<PositionsByPoolResponse>): PositionsByPoolResponse {
    const message = createBasePositionsByPoolResponse();
    message.mtps = object.mtps?.map(e => MTP.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsByPoolResponseAmino): PositionsByPoolResponse {
    return {
      mtps: Array.isArray(object?.mtps) ? object.mtps.map((e: any) => MTP.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: PositionsByPoolResponse): PositionsByPoolResponseAmino {
    const obj: any = {};
    if (message.mtps) {
      obj.mtps = message.mtps.map(e => e ? MTP.toAmino(e) : undefined);
    } else {
      obj.mtps = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsByPoolResponseAminoMsg): PositionsByPoolResponse {
    return PositionsByPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsByPoolResponseProtoMsg): PositionsByPoolResponse {
    return PositionsByPoolResponse.decode(message.value);
  },
  toProto(message: PositionsByPoolResponse): Uint8Array {
    return PositionsByPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionsByPoolResponse): PositionsByPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.PositionsByPoolResponse",
      value: PositionsByPoolResponse.encode(message).finish()
    };
  }
};
function createBaseStatusRequest(): StatusRequest {
  return {};
}
export const StatusRequest = {
  typeUrl: "/elys.perpetual.StatusRequest",
  encode(_: StatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();
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
  fromPartial(_: Partial<StatusRequest>): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
  fromAmino(_: StatusRequestAmino): StatusRequest {
    return {};
  },
  toAmino(_: StatusRequest): StatusRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: StatusRequestAminoMsg): StatusRequest {
    return StatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusRequestProtoMsg): StatusRequest {
    return StatusRequest.decode(message.value);
  },
  toProto(message: StatusRequest): Uint8Array {
    return StatusRequest.encode(message).finish();
  },
  toProtoMsg(message: StatusRequest): StatusRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.StatusRequest",
      value: StatusRequest.encode(message).finish()
    };
  }
};
function createBaseStatusResponse(): StatusResponse {
  return {
    openMtpCount: BigInt(0),
    lifetimeMtpCount: BigInt(0)
  };
}
export const StatusResponse = {
  typeUrl: "/elys.perpetual.StatusResponse",
  encode(message: StatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.openMtpCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.openMtpCount);
    }
    if (message.lifetimeMtpCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.lifetimeMtpCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.openMtpCount = reader.uint64();
          break;
        case 2:
          message.lifetimeMtpCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StatusResponse>): StatusResponse {
    const message = createBaseStatusResponse();
    message.openMtpCount = object.openMtpCount !== undefined && object.openMtpCount !== null ? BigInt(object.openMtpCount.toString()) : BigInt(0);
    message.lifetimeMtpCount = object.lifetimeMtpCount !== undefined && object.lifetimeMtpCount !== null ? BigInt(object.lifetimeMtpCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StatusResponseAmino): StatusResponse {
    return {
      openMtpCount: BigInt(object.open_mtp_count),
      lifetimeMtpCount: BigInt(object.lifetime_mtp_count)
    };
  },
  toAmino(message: StatusResponse): StatusResponseAmino {
    const obj: any = {};
    obj.open_mtp_count = message.openMtpCount ? message.openMtpCount.toString() : undefined;
    obj.lifetime_mtp_count = message.lifetimeMtpCount ? message.lifetimeMtpCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StatusResponseAminoMsg): StatusResponse {
    return StatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusResponseProtoMsg): StatusResponse {
    return StatusResponse.decode(message.value);
  },
  toProto(message: StatusResponse): Uint8Array {
    return StatusResponse.encode(message).finish();
  },
  toProtoMsg(message: StatusResponse): StatusResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.StatusResponse",
      value: StatusResponse.encode(message).finish()
    };
  }
};
function createBasePositionsForAddressRequest(): PositionsForAddressRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const PositionsForAddressRequest = {
  typeUrl: "/elys.perpetual.PositionsForAddressRequest",
  encode(message: PositionsForAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsForAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsForAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionsForAddressRequest>): PositionsForAddressRequest {
    const message = createBasePositionsForAddressRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsForAddressRequestAmino): PositionsForAddressRequest {
    return {
      address: object.address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: PositionsForAddressRequest): PositionsForAddressRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsForAddressRequestAminoMsg): PositionsForAddressRequest {
    return PositionsForAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsForAddressRequestProtoMsg): PositionsForAddressRequest {
    return PositionsForAddressRequest.decode(message.value);
  },
  toProto(message: PositionsForAddressRequest): Uint8Array {
    return PositionsForAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionsForAddressRequest): PositionsForAddressRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.PositionsForAddressRequest",
      value: PositionsForAddressRequest.encode(message).finish()
    };
  }
};
function createBasePositionsForAddressResponse(): PositionsForAddressResponse {
  return {
    mtps: [],
    pagination: undefined
  };
}
export const PositionsForAddressResponse = {
  typeUrl: "/elys.perpetual.PositionsForAddressResponse",
  encode(message: PositionsForAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.mtps) {
      MTP.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionsForAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsForAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mtps.push(MTP.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<PositionsForAddressResponse>): PositionsForAddressResponse {
    const message = createBasePositionsForAddressResponse();
    message.mtps = object.mtps?.map(e => MTP.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PositionsForAddressResponseAmino): PositionsForAddressResponse {
    return {
      mtps: Array.isArray(object?.mtps) ? object.mtps.map((e: any) => MTP.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: PositionsForAddressResponse): PositionsForAddressResponseAmino {
    const obj: any = {};
    if (message.mtps) {
      obj.mtps = message.mtps.map(e => e ? MTP.toAmino(e) : undefined);
    } else {
      obj.mtps = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsForAddressResponseAminoMsg): PositionsForAddressResponse {
    return PositionsForAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsForAddressResponseProtoMsg): PositionsForAddressResponse {
    return PositionsForAddressResponse.decode(message.value);
  },
  toProto(message: PositionsForAddressResponse): Uint8Array {
    return PositionsForAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionsForAddressResponse): PositionsForAddressResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.PositionsForAddressResponse",
      value: PositionsForAddressResponse.encode(message).finish()
    };
  }
};
function createBaseWhitelistRequest(): WhitelistRequest {
  return {
    pagination: undefined
  };
}
export const WhitelistRequest = {
  typeUrl: "/elys.perpetual.WhitelistRequest",
  encode(message: WhitelistRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistRequest();
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
  fromPartial(object: Partial<WhitelistRequest>): WhitelistRequest {
    const message = createBaseWhitelistRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: WhitelistRequestAmino): WhitelistRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: WhitelistRequest): WhitelistRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: WhitelistRequestAminoMsg): WhitelistRequest {
    return WhitelistRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: WhitelistRequestProtoMsg): WhitelistRequest {
    return WhitelistRequest.decode(message.value);
  },
  toProto(message: WhitelistRequest): Uint8Array {
    return WhitelistRequest.encode(message).finish();
  },
  toProtoMsg(message: WhitelistRequest): WhitelistRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.WhitelistRequest",
      value: WhitelistRequest.encode(message).finish()
    };
  }
};
function createBaseWhitelistResponse(): WhitelistResponse {
  return {
    whitelist: [],
    pagination: undefined
  };
}
export const WhitelistResponse = {
  typeUrl: "/elys.perpetual.WhitelistResponse",
  encode(message: WhitelistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.whitelist) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelist.push(reader.string());
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
  fromPartial(object: Partial<WhitelistResponse>): WhitelistResponse {
    const message = createBaseWhitelistResponse();
    message.whitelist = object.whitelist?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: WhitelistResponseAmino): WhitelistResponse {
    return {
      whitelist: Array.isArray(object?.whitelist) ? object.whitelist.map((e: any) => e) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: WhitelistResponse): WhitelistResponseAmino {
    const obj: any = {};
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map(e => e);
    } else {
      obj.whitelist = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: WhitelistResponseAminoMsg): WhitelistResponse {
    return WhitelistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: WhitelistResponseProtoMsg): WhitelistResponse {
    return WhitelistResponse.decode(message.value);
  },
  toProto(message: WhitelistResponse): Uint8Array {
    return WhitelistResponse.encode(message).finish();
  },
  toProtoMsg(message: WhitelistResponse): WhitelistResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.WhitelistResponse",
      value: WhitelistResponse.encode(message).finish()
    };
  }
};
function createBaseIsWhitelistedRequest(): IsWhitelistedRequest {
  return {
    address: ""
  };
}
export const IsWhitelistedRequest = {
  typeUrl: "/elys.perpetual.IsWhitelistedRequest",
  encode(message: IsWhitelistedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IsWhitelistedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsWhitelistedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IsWhitelistedRequest>): IsWhitelistedRequest {
    const message = createBaseIsWhitelistedRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: IsWhitelistedRequestAmino): IsWhitelistedRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: IsWhitelistedRequest): IsWhitelistedRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: IsWhitelistedRequestAminoMsg): IsWhitelistedRequest {
    return IsWhitelistedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: IsWhitelistedRequestProtoMsg): IsWhitelistedRequest {
    return IsWhitelistedRequest.decode(message.value);
  },
  toProto(message: IsWhitelistedRequest): Uint8Array {
    return IsWhitelistedRequest.encode(message).finish();
  },
  toProtoMsg(message: IsWhitelistedRequest): IsWhitelistedRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.IsWhitelistedRequest",
      value: IsWhitelistedRequest.encode(message).finish()
    };
  }
};
function createBaseIsWhitelistedResponse(): IsWhitelistedResponse {
  return {
    address: "",
    isWhitelisted: false
  };
}
export const IsWhitelistedResponse = {
  typeUrl: "/elys.perpetual.IsWhitelistedResponse",
  encode(message: IsWhitelistedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.isWhitelisted === true) {
      writer.uint32(16).bool(message.isWhitelisted);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IsWhitelistedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsWhitelistedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.isWhitelisted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IsWhitelistedResponse>): IsWhitelistedResponse {
    const message = createBaseIsWhitelistedResponse();
    message.address = object.address ?? "";
    message.isWhitelisted = object.isWhitelisted ?? false;
    return message;
  },
  fromAmino(object: IsWhitelistedResponseAmino): IsWhitelistedResponse {
    return {
      address: object.address,
      isWhitelisted: object.is_whitelisted
    };
  },
  toAmino(message: IsWhitelistedResponse): IsWhitelistedResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.is_whitelisted = message.isWhitelisted;
    return obj;
  },
  fromAminoMsg(object: IsWhitelistedResponseAminoMsg): IsWhitelistedResponse {
    return IsWhitelistedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: IsWhitelistedResponseProtoMsg): IsWhitelistedResponse {
    return IsWhitelistedResponse.decode(message.value);
  },
  toProto(message: IsWhitelistedResponse): Uint8Array {
    return IsWhitelistedResponse.encode(message).finish();
  },
  toProtoMsg(message: IsWhitelistedResponse): IsWhitelistedResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.IsWhitelistedResponse",
      value: IsWhitelistedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return {
    index: BigInt(0)
  };
}
export const QueryGetPoolRequest = {
  typeUrl: "/elys.perpetual.QueryGetPoolRequest",
  encode(message: QueryGetPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPoolRequestAmino): QueryGetPoolRequest {
    return {
      index: BigInt(object.index)
    };
  },
  toAmino(message: QueryGetPoolRequest): QueryGetPoolRequestAmino {
    const obj: any = {};
    obj.index = message.index ? message.index.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolRequestAminoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolRequestProtoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.decode(message.value);
  },
  toProto(message: QueryGetPoolRequest): Uint8Array {
    return QueryGetPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolRequest): QueryGetPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.QueryGetPoolRequest",
      value: QueryGetPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolResponse(): QueryGetPoolResponse {
  return {
    pool: Pool.fromPartial({})
  };
}
export const QueryGetPoolResponse = {
  typeUrl: "/elys.perpetual.QueryGetPoolResponse",
  encode(message: QueryGetPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolResponseAmino): QueryGetPoolResponse {
    return {
      pool: object?.pool ? Pool.fromAmino(object.pool) : undefined
    };
  },
  toAmino(message: QueryGetPoolResponse): QueryGetPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolResponseAminoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolResponseProtoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.decode(message.value);
  },
  toProto(message: QueryGetPoolResponse): Uint8Array {
    return QueryGetPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolResponse): QueryGetPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.QueryGetPoolResponse",
      value: QueryGetPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolRequest(): QueryAllPoolRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPoolRequest = {
  typeUrl: "/elys.perpetual.QueryAllPoolRequest",
  encode(message: QueryAllPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRequest();
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
  fromPartial(object: Partial<QueryAllPoolRequest>): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolRequestAmino): QueryAllPoolRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllPoolRequest): QueryAllPoolRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolRequestAminoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolRequestProtoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.decode(message.value);
  },
  toProto(message: QueryAllPoolRequest): Uint8Array {
    return QueryAllPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolRequest): QueryAllPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.QueryAllPoolRequest",
      value: QueryAllPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolResponse(): QueryAllPoolResponse {
  return {
    pool: [],
    pagination: undefined
  };
}
export const QueryAllPoolResponse = {
  typeUrl: "/elys.perpetual.QueryAllPoolResponse",
  encode(message: QueryAllPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(Pool.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllPoolResponse>): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolResponseAmino): QueryAllPoolResponse {
    return {
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => Pool.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllPoolResponse): QueryAllPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pool = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolResponseAminoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolResponseProtoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.decode(message.value);
  },
  toProto(message: QueryAllPoolResponse): Uint8Array {
    return QueryAllPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolResponse): QueryAllPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.QueryAllPoolResponse",
      value: QueryAllPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMTPRequest(): MTPRequest {
  return {
    address: "",
    id: BigInt(0)
  };
}
export const MTPRequest = {
  typeUrl: "/elys.perpetual.MTPRequest",
  encode(message: MTPRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MTPRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMTPRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MTPRequest>): MTPRequest {
    const message = createBaseMTPRequest();
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MTPRequestAmino): MTPRequest {
    return {
      address: object.address,
      id: BigInt(object.id)
    };
  },
  toAmino(message: MTPRequest): MTPRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MTPRequestAminoMsg): MTPRequest {
    return MTPRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MTPRequestProtoMsg): MTPRequest {
    return MTPRequest.decode(message.value);
  },
  toProto(message: MTPRequest): Uint8Array {
    return MTPRequest.encode(message).finish();
  },
  toProtoMsg(message: MTPRequest): MTPRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.MTPRequest",
      value: MTPRequest.encode(message).finish()
    };
  }
};
function createBaseMTPResponse(): MTPResponse {
  return {
    mtp: undefined
  };
}
export const MTPResponse = {
  typeUrl: "/elys.perpetual.MTPResponse",
  encode(message: MTPResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mtp !== undefined) {
      MTP.encode(message.mtp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MTPResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMTPResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mtp = MTP.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MTPResponse>): MTPResponse {
    const message = createBaseMTPResponse();
    message.mtp = object.mtp !== undefined && object.mtp !== null ? MTP.fromPartial(object.mtp) : undefined;
    return message;
  },
  fromAmino(object: MTPResponseAmino): MTPResponse {
    return {
      mtp: object?.mtp ? MTP.fromAmino(object.mtp) : undefined
    };
  },
  toAmino(message: MTPResponse): MTPResponseAmino {
    const obj: any = {};
    obj.mtp = message.mtp ? MTP.toAmino(message.mtp) : undefined;
    return obj;
  },
  fromAminoMsg(object: MTPResponseAminoMsg): MTPResponse {
    return MTPResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MTPResponseProtoMsg): MTPResponse {
    return MTPResponse.decode(message.value);
  },
  toProto(message: MTPResponse): Uint8Array {
    return MTPResponse.encode(message).finish();
  },
  toProtoMsg(message: MTPResponse): MTPResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.MTPResponse",
      value: MTPResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOpenEstimationRequest(): QueryOpenEstimationRequest {
  return {
    position: 0,
    leverage: "",
    tradingAsset: "",
    collateral: Coin.fromPartial({}),
    discount: "",
    takeProfitPrice: ""
  };
}
export const QueryOpenEstimationRequest = {
  typeUrl: "/elys.perpetual.QueryOpenEstimationRequest",
  encode(message: QueryOpenEstimationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== 0) {
      writer.uint32(8).int32(message.position);
    }
    if (message.leverage !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.leverage, 18).atomics);
    }
    if (message.tradingAsset !== "") {
      writer.uint32(26).string(message.tradingAsset);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
    }
    if (message.discount !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.discount, 18).atomics);
    }
    if (message.takeProfitPrice !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.takeProfitPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOpenEstimationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOpenEstimationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = (reader.int32() as any);
          break;
        case 2:
          message.leverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.tradingAsset = reader.string();
          break;
        case 4:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.takeProfitPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOpenEstimationRequest>): QueryOpenEstimationRequest {
    const message = createBaseQueryOpenEstimationRequest();
    message.position = object.position ?? 0;
    message.leverage = object.leverage ?? "";
    message.tradingAsset = object.tradingAsset ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.discount = object.discount ?? "";
    message.takeProfitPrice = object.takeProfitPrice ?? "";
    return message;
  },
  fromAmino(object: QueryOpenEstimationRequestAmino): QueryOpenEstimationRequest {
    return {
      position: isSet(object.position) ? positionFromJSON(object.position) : -1,
      leverage: object.leverage,
      tradingAsset: object.trading_asset,
      collateral: object?.collateral ? Coin.fromAmino(object.collateral) : undefined,
      discount: object.discount,
      takeProfitPrice: object.take_profit_price
    };
  },
  toAmino(message: QueryOpenEstimationRequest): QueryOpenEstimationRequestAmino {
    const obj: any = {};
    obj.position = message.position;
    obj.leverage = message.leverage;
    obj.trading_asset = message.tradingAsset;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.discount = message.discount;
    obj.take_profit_price = message.takeProfitPrice;
    return obj;
  },
  fromAminoMsg(object: QueryOpenEstimationRequestAminoMsg): QueryOpenEstimationRequest {
    return QueryOpenEstimationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOpenEstimationRequestProtoMsg): QueryOpenEstimationRequest {
    return QueryOpenEstimationRequest.decode(message.value);
  },
  toProto(message: QueryOpenEstimationRequest): Uint8Array {
    return QueryOpenEstimationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOpenEstimationRequest): QueryOpenEstimationRequestProtoMsg {
    return {
      typeUrl: "/elys.perpetual.QueryOpenEstimationRequest",
      value: QueryOpenEstimationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOpenEstimationResponse(): QueryOpenEstimationResponse {
  return {
    position: 0,
    leverage: "",
    tradingAsset: "",
    collateral: Coin.fromPartial({}),
    minCollateral: Coin.fromPartial({}),
    validCollateral: false,
    positionSize: Coin.fromPartial({}),
    swapFee: "",
    discount: "",
    openPrice: "",
    takeProfitPrice: "",
    liquidationPrice: "",
    estimatedPnl: "",
    availableLiquidity: Coin.fromPartial({}),
    weightBalanceRatio: "",
    borrowInterestRate: "",
    fundingRate: "",
    priceImpact: ""
  };
}
export const QueryOpenEstimationResponse = {
  typeUrl: "/elys.perpetual.QueryOpenEstimationResponse",
  encode(message: QueryOpenEstimationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== 0) {
      writer.uint32(8).int32(message.position);
    }
    if (message.leverage !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.leverage, 18).atomics);
    }
    if (message.tradingAsset !== "") {
      writer.uint32(26).string(message.tradingAsset);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
    }
    if (message.minCollateral !== undefined) {
      Coin.encode(message.minCollateral, writer.uint32(42).fork()).ldelim();
    }
    if (message.validCollateral === true) {
      writer.uint32(48).bool(message.validCollateral);
    }
    if (message.positionSize !== undefined) {
      Coin.encode(message.positionSize, writer.uint32(58).fork()).ldelim();
    }
    if (message.swapFee !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.discount !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.discount, 18).atomics);
    }
    if (message.openPrice !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.openPrice, 18).atomics);
    }
    if (message.takeProfitPrice !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.takeProfitPrice, 18).atomics);
    }
    if (message.liquidationPrice !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.liquidationPrice, 18).atomics);
    }
    if (message.estimatedPnl !== "") {
      writer.uint32(106).string(message.estimatedPnl);
    }
    if (message.availableLiquidity !== undefined) {
      Coin.encode(message.availableLiquidity, writer.uint32(114).fork()).ldelim();
    }
    if (message.weightBalanceRatio !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.weightBalanceRatio, 18).atomics);
    }
    if (message.borrowInterestRate !== "") {
      writer.uint32(130).string(Decimal.fromUserInput(message.borrowInterestRate, 18).atomics);
    }
    if (message.fundingRate !== "") {
      writer.uint32(138).string(Decimal.fromUserInput(message.fundingRate, 18).atomics);
    }
    if (message.priceImpact !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.priceImpact, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOpenEstimationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOpenEstimationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = (reader.int32() as any);
          break;
        case 2:
          message.leverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.tradingAsset = reader.string();
          break;
        case 4:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.minCollateral = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.validCollateral = reader.bool();
          break;
        case 7:
          message.positionSize = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.openPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.takeProfitPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.liquidationPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.estimatedPnl = reader.string();
          break;
        case 14:
          message.availableLiquidity = Coin.decode(reader, reader.uint32());
          break;
        case 15:
          message.weightBalanceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 16:
          message.borrowInterestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 17:
          message.fundingRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 18:
          message.priceImpact = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOpenEstimationResponse>): QueryOpenEstimationResponse {
    const message = createBaseQueryOpenEstimationResponse();
    message.position = object.position ?? 0;
    message.leverage = object.leverage ?? "";
    message.tradingAsset = object.tradingAsset ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.minCollateral = object.minCollateral !== undefined && object.minCollateral !== null ? Coin.fromPartial(object.minCollateral) : undefined;
    message.validCollateral = object.validCollateral ?? false;
    message.positionSize = object.positionSize !== undefined && object.positionSize !== null ? Coin.fromPartial(object.positionSize) : undefined;
    message.swapFee = object.swapFee ?? "";
    message.discount = object.discount ?? "";
    message.openPrice = object.openPrice ?? "";
    message.takeProfitPrice = object.takeProfitPrice ?? "";
    message.liquidationPrice = object.liquidationPrice ?? "";
    message.estimatedPnl = object.estimatedPnl ?? "";
    message.availableLiquidity = object.availableLiquidity !== undefined && object.availableLiquidity !== null ? Coin.fromPartial(object.availableLiquidity) : undefined;
    message.weightBalanceRatio = object.weightBalanceRatio ?? "";
    message.borrowInterestRate = object.borrowInterestRate ?? "";
    message.fundingRate = object.fundingRate ?? "";
    message.priceImpact = object.priceImpact ?? "";
    return message;
  },
  fromAmino(object: QueryOpenEstimationResponseAmino): QueryOpenEstimationResponse {
    return {
      position: isSet(object.position) ? positionFromJSON(object.position) : -1,
      leverage: object.leverage,
      tradingAsset: object.trading_asset,
      collateral: object?.collateral ? Coin.fromAmino(object.collateral) : undefined,
      minCollateral: object?.min_collateral ? Coin.fromAmino(object.min_collateral) : undefined,
      validCollateral: object.valid_collateral,
      positionSize: object?.position_size ? Coin.fromAmino(object.position_size) : undefined,
      swapFee: object.swap_fee,
      discount: object.discount,
      openPrice: object.open_price,
      takeProfitPrice: object.take_profit_price,
      liquidationPrice: object.liquidation_price,
      estimatedPnl: object.estimated_pnl,
      availableLiquidity: object?.available_liquidity ? Coin.fromAmino(object.available_liquidity) : undefined,
      weightBalanceRatio: object.weight_balance_ratio,
      borrowInterestRate: object.borrow_interest_rate,
      fundingRate: object.funding_rate,
      priceImpact: object.price_impact
    };
  },
  toAmino(message: QueryOpenEstimationResponse): QueryOpenEstimationResponseAmino {
    const obj: any = {};
    obj.position = message.position;
    obj.leverage = message.leverage;
    obj.trading_asset = message.tradingAsset;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.min_collateral = message.minCollateral ? Coin.toAmino(message.minCollateral) : undefined;
    obj.valid_collateral = message.validCollateral;
    obj.position_size = message.positionSize ? Coin.toAmino(message.positionSize) : undefined;
    obj.swap_fee = message.swapFee;
    obj.discount = message.discount;
    obj.open_price = message.openPrice;
    obj.take_profit_price = message.takeProfitPrice;
    obj.liquidation_price = message.liquidationPrice;
    obj.estimated_pnl = message.estimatedPnl;
    obj.available_liquidity = message.availableLiquidity ? Coin.toAmino(message.availableLiquidity) : undefined;
    obj.weight_balance_ratio = message.weightBalanceRatio;
    obj.borrow_interest_rate = message.borrowInterestRate;
    obj.funding_rate = message.fundingRate;
    obj.price_impact = message.priceImpact;
    return obj;
  },
  fromAminoMsg(object: QueryOpenEstimationResponseAminoMsg): QueryOpenEstimationResponse {
    return QueryOpenEstimationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOpenEstimationResponseProtoMsg): QueryOpenEstimationResponse {
    return QueryOpenEstimationResponse.decode(message.value);
  },
  toProto(message: QueryOpenEstimationResponse): Uint8Array {
    return QueryOpenEstimationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOpenEstimationResponse): QueryOpenEstimationResponseProtoMsg {
    return {
      typeUrl: "/elys.perpetual.QueryOpenEstimationResponse",
      value: QueryOpenEstimationResponse.encode(message).finish()
    };
  }
};