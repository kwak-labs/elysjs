import { PageRequest, PageRequestAmino, PageRequestSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "./pool_asset";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { Decimal } from "@cosmjs/math";
export enum FilterType {
  FilterAll = 0,
  FilterPerpetual = 1,
  FilterFixedWeight = 2,
  FilterDynamicWeight = 3,
  FilterLeverage = 4,
  UNRECOGNIZED = -1,
}
export const FilterTypeSDKType = FilterType;
export const FilterTypeAmino = FilterType;
export function filterTypeFromJSON(object: any): FilterType {
  switch (object) {
    case 0:
    case "FilterAll":
      return FilterType.FilterAll;
    case 1:
    case "FilterPerpetual":
      return FilterType.FilterPerpetual;
    case 2:
    case "FilterFixedWeight":
      return FilterType.FilterFixedWeight;
    case 3:
    case "FilterDynamicWeight":
      return FilterType.FilterDynamicWeight;
    case 4:
    case "FilterLeverage":
      return FilterType.FilterLeverage;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FilterType.UNRECOGNIZED;
  }
}
export function filterTypeToJSON(object: FilterType): string {
  switch (object) {
    case FilterType.FilterAll:
      return "FilterAll";
    case FilterType.FilterPerpetual:
      return "FilterPerpetual";
    case FilterType.FilterFixedWeight:
      return "FilterFixedWeight";
    case FilterType.FilterDynamicWeight:
      return "FilterDynamicWeight";
    case FilterType.FilterLeverage:
      return "FilterLeverage";
    case FilterType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface QueryEarnPoolRequest {
  poolIds: bigint[];
  filterType: FilterType;
  pagination?: PageRequest;
}
export interface QueryEarnPoolRequestProtoMsg {
  typeUrl: "/elys.amm.QueryEarnPoolRequest";
  value: Uint8Array;
}
export interface QueryEarnPoolRequestAmino {
  pool_ids: string[];
  filter_type: FilterType;
  pagination?: PageRequestAmino;
}
export interface QueryEarnPoolRequestAminoMsg {
  type: "/elys.amm.QueryEarnPoolRequest";
  value: QueryEarnPoolRequestAmino;
}
export interface QueryEarnPoolRequestSDKType {
  pool_ids: bigint[];
  filter_type: FilterType;
  pagination?: PageRequestSDKType;
}
export interface EarnPool {
  assets: PoolAsset[];
  poolRatio: string;
  rewardsApr: string;
  borrowApr: string;
  leverageLp: string;
  perpetual: string;
  tvl: string;
  rewards: string;
}
export interface EarnPoolProtoMsg {
  typeUrl: "/elys.amm.EarnPool";
  value: Uint8Array;
}
export interface EarnPoolAmino {
  assets: PoolAssetAmino[];
  pool_ratio: string;
  rewards_apr: string;
  borrow_apr: string;
  leverage_lp: string;
  perpetual: string;
  tvl: string;
  rewards: string;
}
export interface EarnPoolAminoMsg {
  type: "/elys.amm.EarnPool";
  value: EarnPoolAmino;
}
export interface EarnPoolSDKType {
  assets: PoolAssetSDKType[];
  pool_ratio: string;
  rewards_apr: string;
  borrow_apr: string;
  leverage_lp: string;
  perpetual: string;
  tvl: string;
  rewards: string;
}
export interface QueryEarnPoolResponse {
  pools: EarnPool[];
}
export interface QueryEarnPoolResponseProtoMsg {
  typeUrl: "/elys.amm.QueryEarnPoolResponse";
  value: Uint8Array;
}
export interface QueryEarnPoolResponseAmino {
  pools: EarnPoolAmino[];
}
export interface QueryEarnPoolResponseAminoMsg {
  type: "/elys.amm.QueryEarnPoolResponse";
  value: QueryEarnPoolResponseAmino;
}
export interface QueryEarnPoolResponseSDKType {
  pools: EarnPoolSDKType[];
}
function createBaseQueryEarnPoolRequest(): QueryEarnPoolRequest {
  return {
    poolIds: [],
    filterType: 0,
    pagination: undefined
  };
}
export const QueryEarnPoolRequest = {
  typeUrl: "/elys.amm.QueryEarnPoolRequest",
  encode(message: QueryEarnPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.poolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.filterType !== 0) {
      writer.uint32(16).int32(message.filterType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEarnPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEarnPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64());
            }
          } else {
            message.poolIds.push(reader.uint64());
          }
          break;
        case 2:
          message.filterType = (reader.int32() as any);
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEarnPoolRequest>): QueryEarnPoolRequest {
    const message = createBaseQueryEarnPoolRequest();
    message.poolIds = object.poolIds?.map(e => BigInt(e.toString())) || [];
    message.filterType = object.filterType ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEarnPoolRequestAmino): QueryEarnPoolRequest {
    return {
      poolIds: Array.isArray(object?.pool_ids) ? object.pool_ids.map((e: any) => BigInt(e)) : [],
      filterType: isSet(object.filter_type) ? filterTypeFromJSON(object.filter_type) : -1,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryEarnPoolRequest): QueryEarnPoolRequestAmino {
    const obj: any = {};
    if (message.poolIds) {
      obj.pool_ids = message.poolIds.map(e => e.toString());
    } else {
      obj.pool_ids = [];
    }
    obj.filter_type = message.filterType;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEarnPoolRequestAminoMsg): QueryEarnPoolRequest {
    return QueryEarnPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEarnPoolRequestProtoMsg): QueryEarnPoolRequest {
    return QueryEarnPoolRequest.decode(message.value);
  },
  toProto(message: QueryEarnPoolRequest): Uint8Array {
    return QueryEarnPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEarnPoolRequest): QueryEarnPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryEarnPoolRequest",
      value: QueryEarnPoolRequest.encode(message).finish()
    };
  }
};
function createBaseEarnPool(): EarnPool {
  return {
    assets: [],
    poolRatio: "",
    rewardsApr: "",
    borrowApr: "",
    leverageLp: "",
    perpetual: "",
    tvl: "",
    rewards: ""
  };
}
export const EarnPool = {
  typeUrl: "/elys.amm.EarnPool",
  encode(message: EarnPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assets) {
      PoolAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.poolRatio !== "") {
      writer.uint32(18).string(message.poolRatio);
    }
    if (message.rewardsApr !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rewardsApr, 18).atomics);
    }
    if (message.borrowApr !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.borrowApr, 18).atomics);
    }
    if (message.leverageLp !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.leverageLp, 18).atomics);
    }
    if (message.perpetual !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.perpetual, 18).atomics);
    }
    if (message.tvl !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.tvl, 18).atomics);
    }
    if (message.rewards !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.rewards, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EarnPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEarnPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 2:
          message.poolRatio = reader.string();
          break;
        case 3:
          message.rewardsApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.borrowApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.leverageLp = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.perpetual = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.tvl = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.rewards = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EarnPool>): EarnPool {
    const message = createBaseEarnPool();
    message.assets = object.assets?.map(e => PoolAsset.fromPartial(e)) || [];
    message.poolRatio = object.poolRatio ?? "";
    message.rewardsApr = object.rewardsApr ?? "";
    message.borrowApr = object.borrowApr ?? "";
    message.leverageLp = object.leverageLp ?? "";
    message.perpetual = object.perpetual ?? "";
    message.tvl = object.tvl ?? "";
    message.rewards = object.rewards ?? "";
    return message;
  },
  fromAmino(object: EarnPoolAmino): EarnPool {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => PoolAsset.fromAmino(e)) : [],
      poolRatio: object.pool_ratio,
      rewardsApr: object.rewards_apr,
      borrowApr: object.borrow_apr,
      leverageLp: object.leverage_lp,
      perpetual: object.perpetual,
      tvl: object.tvl,
      rewards: object.rewards
    };
  },
  toAmino(message: EarnPool): EarnPoolAmino {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.assets = [];
    }
    obj.pool_ratio = message.poolRatio;
    obj.rewards_apr = message.rewardsApr;
    obj.borrow_apr = message.borrowApr;
    obj.leverage_lp = message.leverageLp;
    obj.perpetual = message.perpetual;
    obj.tvl = message.tvl;
    obj.rewards = message.rewards;
    return obj;
  },
  fromAminoMsg(object: EarnPoolAminoMsg): EarnPool {
    return EarnPool.fromAmino(object.value);
  },
  fromProtoMsg(message: EarnPoolProtoMsg): EarnPool {
    return EarnPool.decode(message.value);
  },
  toProto(message: EarnPool): Uint8Array {
    return EarnPool.encode(message).finish();
  },
  toProtoMsg(message: EarnPool): EarnPoolProtoMsg {
    return {
      typeUrl: "/elys.amm.EarnPool",
      value: EarnPool.encode(message).finish()
    };
  }
};
function createBaseQueryEarnPoolResponse(): QueryEarnPoolResponse {
  return {
    pools: []
  };
}
export const QueryEarnPoolResponse = {
  typeUrl: "/elys.amm.QueryEarnPoolResponse",
  encode(message: QueryEarnPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      EarnPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEarnPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEarnPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(EarnPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEarnPoolResponse>): QueryEarnPoolResponse {
    const message = createBaseQueryEarnPoolResponse();
    message.pools = object.pools?.map(e => EarnPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryEarnPoolResponseAmino): QueryEarnPoolResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => EarnPool.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryEarnPoolResponse): QueryEarnPoolResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? EarnPool.toAmino(e) : undefined);
    } else {
      obj.pools = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryEarnPoolResponseAminoMsg): QueryEarnPoolResponse {
    return QueryEarnPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEarnPoolResponseProtoMsg): QueryEarnPoolResponse {
    return QueryEarnPoolResponse.decode(message.value);
  },
  toProto(message: QueryEarnPoolResponse): Uint8Array {
    return QueryEarnPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEarnPoolResponse): QueryEarnPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryEarnPoolResponse",
      value: QueryEarnPoolResponse.encode(message).finish()
    };
  }
};