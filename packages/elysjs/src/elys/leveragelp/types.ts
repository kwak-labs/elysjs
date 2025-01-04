//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface PositionRequest {
  address: string;
  id: bigint;
}
export interface PositionRequestProtoMsg {
  typeUrl: "/elys.leveragelp.PositionRequest";
  value: Uint8Array;
}
export interface PositionRequestAmino {
  address?: string;
  id?: string;
}
export interface PositionRequestAminoMsg {
  type: "/elys.leveragelp.PositionRequest";
  value: PositionRequestAmino;
}
export interface PositionRequestSDKType {
  address: string;
  id: bigint;
}
export interface Position {
  address: string;
  collateral: Coin;
  liabilities: string;
  leveragedLpAmount: string;
  positionHealth: string;
  id: bigint;
  ammPoolId: bigint;
  stopLossPrice: string;
}
export interface PositionProtoMsg {
  typeUrl: "/elys.leveragelp.Position";
  value: Uint8Array;
}
export interface PositionAmino {
  address?: string;
  collateral?: CoinAmino;
  liabilities?: string;
  leveraged_lp_amount?: string;
  position_health?: string;
  id?: string;
  amm_pool_id?: string;
  stop_loss_price?: string;
}
export interface PositionAminoMsg {
  type: "/elys.leveragelp.Position";
  value: PositionAmino;
}
export interface PositionSDKType {
  address: string;
  collateral: CoinSDKType;
  liabilities: string;
  leveraged_lp_amount: string;
  position_health: string;
  id: bigint;
  amm_pool_id: bigint;
  stop_loss_price: string;
}
export interface LegacyPosition {
  address: string;
  collateral: Coin;
  liabilities: string;
  leverage: string;
  leveragedLpAmount: string;
  positionHealth: string;
  id: bigint;
  ammPoolId: bigint;
  stopLossPrice: string;
}
export interface LegacyPositionProtoMsg {
  typeUrl: "/elys.leveragelp.LegacyPosition";
  value: Uint8Array;
}
export interface LegacyPositionAmino {
  address?: string;
  collateral?: CoinAmino;
  liabilities?: string;
  leverage?: string;
  leveraged_lp_amount?: string;
  position_health?: string;
  id?: string;
  amm_pool_id?: string;
  stop_loss_price?: string;
}
export interface LegacyPositionAminoMsg {
  type: "/elys.leveragelp.LegacyPosition";
  value: LegacyPositionAmino;
}
export interface LegacyPositionSDKType {
  address: string;
  collateral: CoinSDKType;
  liabilities: string;
  leverage: string;
  leveraged_lp_amount: string;
  position_health: string;
  id: bigint;
  amm_pool_id: bigint;
  stop_loss_price: string;
}
export interface QueryPosition {
  position?: Position;
  updatedLeverage: string;
  positionUsdValue: string;
}
export interface QueryPositionProtoMsg {
  typeUrl: "/elys.leveragelp.QueryPosition";
  value: Uint8Array;
}
export interface QueryPositionAmino {
  position?: PositionAmino;
  updated_leverage?: string;
  position_usd_value?: string;
}
export interface QueryPositionAminoMsg {
  type: "/elys.leveragelp.QueryPosition";
  value: QueryPositionAmino;
}
export interface QueryPositionSDKType {
  position?: PositionSDKType;
  updated_leverage: string;
  position_usd_value: string;
}
export interface PositionAndInterest {
  position?: QueryPosition;
  interestRateHour: string;
  interestRateHourUsd: string;
}
export interface PositionAndInterestProtoMsg {
  typeUrl: "/elys.leveragelp.PositionAndInterest";
  value: Uint8Array;
}
export interface PositionAndInterestAmino {
  position?: QueryPositionAmino;
  interest_rate_hour?: string;
  interest_rate_hour_usd?: string;
}
export interface PositionAndInterestAminoMsg {
  type: "/elys.leveragelp.PositionAndInterest";
  value: PositionAndInterestAmino;
}
export interface PositionAndInterestSDKType {
  position?: QueryPositionSDKType;
  interest_rate_hour: string;
  interest_rate_hour_usd: string;
}
function createBasePositionRequest(): PositionRequest {
  return {
    address: "",
    id: BigInt(0)
  };
}
export const PositionRequest = {
  typeUrl: "/elys.leveragelp.PositionRequest",
  encode(message: PositionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionRequest();
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
  fromPartial(object: Partial<PositionRequest>): PositionRequest {
    const message = createBasePositionRequest();
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PositionRequestAmino): PositionRequest {
    const message = createBasePositionRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: PositionRequest): PositionRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionRequestAminoMsg): PositionRequest {
    return PositionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionRequestProtoMsg): PositionRequest {
    return PositionRequest.decode(message.value);
  },
  toProto(message: PositionRequest): Uint8Array {
    return PositionRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionRequest): PositionRequestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionRequest",
      value: PositionRequest.encode(message).finish()
    };
  }
};
function createBasePosition(): Position {
  return {
    address: "",
    collateral: Coin.fromPartial({}),
    liabilities: "",
    leveragedLpAmount: "",
    positionHealth: "",
    id: BigInt(0),
    ammPoolId: BigInt(0),
    stopLossPrice: ""
  };
}
export const Position = {
  typeUrl: "/elys.leveragelp.Position",
  encode(message: Position, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
    }
    if (message.liabilities !== "") {
      writer.uint32(26).string(message.liabilities);
    }
    if (message.leveragedLpAmount !== "") {
      writer.uint32(34).string(message.leveragedLpAmount);
    }
    if (message.positionHealth !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.positionHealth, 18).atomics);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(48).uint64(message.id);
    }
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(56).uint64(message.ammPoolId);
    }
    if (message.stopLossPrice !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.stopLossPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Position {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.liabilities = reader.string();
          break;
        case 4:
          message.leveragedLpAmount = reader.string();
          break;
        case 5:
          message.positionHealth = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.id = reader.uint64();
          break;
        case 7:
          message.ammPoolId = reader.uint64();
          break;
        case 8:
          message.stopLossPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Position>): Position {
    const message = createBasePosition();
    message.address = object.address ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.liabilities = object.liabilities ?? "";
    message.leveragedLpAmount = object.leveragedLpAmount ?? "";
    message.positionHealth = object.positionHealth ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.stopLossPrice = object.stopLossPrice ?? "";
    return message;
  },
  fromAmino(object: PositionAmino): Position {
    const message = createBasePosition();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromAmino(object.collateral);
    }
    if (object.liabilities !== undefined && object.liabilities !== null) {
      message.liabilities = object.liabilities;
    }
    if (object.leveraged_lp_amount !== undefined && object.leveraged_lp_amount !== null) {
      message.leveragedLpAmount = object.leveraged_lp_amount;
    }
    if (object.position_health !== undefined && object.position_health !== null) {
      message.positionHealth = object.position_health;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.amm_pool_id !== undefined && object.amm_pool_id !== null) {
      message.ammPoolId = BigInt(object.amm_pool_id);
    }
    if (object.stop_loss_price !== undefined && object.stop_loss_price !== null) {
      message.stopLossPrice = object.stop_loss_price;
    }
    return message;
  },
  toAmino(message: Position): PositionAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.liabilities = message.liabilities === "" ? undefined : message.liabilities;
    obj.leveraged_lp_amount = message.leveragedLpAmount === "" ? undefined : message.leveragedLpAmount;
    obj.position_health = message.positionHealth === "" ? undefined : message.positionHealth;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.amm_pool_id = message.ammPoolId !== BigInt(0) ? message.ammPoolId?.toString() : undefined;
    obj.stop_loss_price = message.stopLossPrice === "" ? undefined : message.stopLossPrice;
    return obj;
  },
  fromAminoMsg(object: PositionAminoMsg): Position {
    return Position.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionProtoMsg): Position {
    return Position.decode(message.value);
  },
  toProto(message: Position): Uint8Array {
    return Position.encode(message).finish();
  },
  toProtoMsg(message: Position): PositionProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.Position",
      value: Position.encode(message).finish()
    };
  }
};
function createBaseLegacyPosition(): LegacyPosition {
  return {
    address: "",
    collateral: Coin.fromPartial({}),
    liabilities: "",
    leverage: "",
    leveragedLpAmount: "",
    positionHealth: "",
    id: BigInt(0),
    ammPoolId: BigInt(0),
    stopLossPrice: ""
  };
}
export const LegacyPosition = {
  typeUrl: "/elys.leveragelp.LegacyPosition",
  encode(message: LegacyPosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
    }
    if (message.liabilities !== "") {
      writer.uint32(26).string(message.liabilities);
    }
    if (message.leverage !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.leverage, 18).atomics);
    }
    if (message.leveragedLpAmount !== "") {
      writer.uint32(42).string(message.leveragedLpAmount);
    }
    if (message.positionHealth !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.positionHealth, 18).atomics);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(56).uint64(message.id);
    }
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(64).uint64(message.ammPoolId);
    }
    if (message.stopLossPrice !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.stopLossPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyPosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.liabilities = reader.string();
          break;
        case 4:
          message.leverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.leveragedLpAmount = reader.string();
          break;
        case 6:
          message.positionHealth = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.id = reader.uint64();
          break;
        case 8:
          message.ammPoolId = reader.uint64();
          break;
        case 9:
          message.stopLossPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LegacyPosition>): LegacyPosition {
    const message = createBaseLegacyPosition();
    message.address = object.address ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.liabilities = object.liabilities ?? "";
    message.leverage = object.leverage ?? "";
    message.leveragedLpAmount = object.leveragedLpAmount ?? "";
    message.positionHealth = object.positionHealth ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.stopLossPrice = object.stopLossPrice ?? "";
    return message;
  },
  fromAmino(object: LegacyPositionAmino): LegacyPosition {
    const message = createBaseLegacyPosition();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromAmino(object.collateral);
    }
    if (object.liabilities !== undefined && object.liabilities !== null) {
      message.liabilities = object.liabilities;
    }
    if (object.leverage !== undefined && object.leverage !== null) {
      message.leverage = object.leverage;
    }
    if (object.leveraged_lp_amount !== undefined && object.leveraged_lp_amount !== null) {
      message.leveragedLpAmount = object.leveraged_lp_amount;
    }
    if (object.position_health !== undefined && object.position_health !== null) {
      message.positionHealth = object.position_health;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.amm_pool_id !== undefined && object.amm_pool_id !== null) {
      message.ammPoolId = BigInt(object.amm_pool_id);
    }
    if (object.stop_loss_price !== undefined && object.stop_loss_price !== null) {
      message.stopLossPrice = object.stop_loss_price;
    }
    return message;
  },
  toAmino(message: LegacyPosition): LegacyPositionAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.liabilities = message.liabilities === "" ? undefined : message.liabilities;
    obj.leverage = message.leverage === "" ? undefined : message.leverage;
    obj.leveraged_lp_amount = message.leveragedLpAmount === "" ? undefined : message.leveragedLpAmount;
    obj.position_health = message.positionHealth === "" ? undefined : message.positionHealth;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.amm_pool_id = message.ammPoolId !== BigInt(0) ? message.ammPoolId?.toString() : undefined;
    obj.stop_loss_price = message.stopLossPrice === "" ? undefined : message.stopLossPrice;
    return obj;
  },
  fromAminoMsg(object: LegacyPositionAminoMsg): LegacyPosition {
    return LegacyPosition.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyPositionProtoMsg): LegacyPosition {
    return LegacyPosition.decode(message.value);
  },
  toProto(message: LegacyPosition): Uint8Array {
    return LegacyPosition.encode(message).finish();
  },
  toProtoMsg(message: LegacyPosition): LegacyPositionProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.LegacyPosition",
      value: LegacyPosition.encode(message).finish()
    };
  }
};
function createBaseQueryPosition(): QueryPosition {
  return {
    position: undefined,
    updatedLeverage: "",
    positionUsdValue: ""
  };
}
export const QueryPosition = {
  typeUrl: "/elys.leveragelp.QueryPosition",
  encode(message: QueryPosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.updatedLeverage !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.updatedLeverage, 18).atomics);
    }
    if (message.positionUsdValue !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.positionUsdValue, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;
        case 2:
          message.updatedLeverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.positionUsdValue = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPosition>): QueryPosition {
    const message = createBaseQueryPosition();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    message.updatedLeverage = object.updatedLeverage ?? "";
    message.positionUsdValue = object.positionUsdValue ?? "";
    return message;
  },
  fromAmino(object: QueryPositionAmino): QueryPosition {
    const message = createBaseQueryPosition();
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromAmino(object.position);
    }
    if (object.updated_leverage !== undefined && object.updated_leverage !== null) {
      message.updatedLeverage = object.updated_leverage;
    }
    if (object.position_usd_value !== undefined && object.position_usd_value !== null) {
      message.positionUsdValue = object.position_usd_value;
    }
    return message;
  },
  toAmino(message: QueryPosition): QueryPositionAmino {
    const obj: any = {};
    obj.position = message.position ? Position.toAmino(message.position) : undefined;
    obj.updated_leverage = message.updatedLeverage === "" ? undefined : message.updatedLeverage;
    obj.position_usd_value = message.positionUsdValue === "" ? undefined : message.positionUsdValue;
    return obj;
  },
  fromAminoMsg(object: QueryPositionAminoMsg): QueryPosition {
    return QueryPosition.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPositionProtoMsg): QueryPosition {
    return QueryPosition.decode(message.value);
  },
  toProto(message: QueryPosition): Uint8Array {
    return QueryPosition.encode(message).finish();
  },
  toProtoMsg(message: QueryPosition): QueryPositionProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.QueryPosition",
      value: QueryPosition.encode(message).finish()
    };
  }
};
function createBasePositionAndInterest(): PositionAndInterest {
  return {
    position: undefined,
    interestRateHour: "",
    interestRateHourUsd: ""
  };
}
export const PositionAndInterest = {
  typeUrl: "/elys.leveragelp.PositionAndInterest",
  encode(message: PositionAndInterest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      QueryPosition.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.interestRateHour !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.interestRateHour, 18).atomics);
    }
    if (message.interestRateHourUsd !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.interestRateHourUsd, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionAndInterest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionAndInterest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = QueryPosition.decode(reader, reader.uint32());
          break;
        case 2:
          message.interestRateHour = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.interestRateHourUsd = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionAndInterest>): PositionAndInterest {
    const message = createBasePositionAndInterest();
    message.position = object.position !== undefined && object.position !== null ? QueryPosition.fromPartial(object.position) : undefined;
    message.interestRateHour = object.interestRateHour ?? "";
    message.interestRateHourUsd = object.interestRateHourUsd ?? "";
    return message;
  },
  fromAmino(object: PositionAndInterestAmino): PositionAndInterest {
    const message = createBasePositionAndInterest();
    if (object.position !== undefined && object.position !== null) {
      message.position = QueryPosition.fromAmino(object.position);
    }
    if (object.interest_rate_hour !== undefined && object.interest_rate_hour !== null) {
      message.interestRateHour = object.interest_rate_hour;
    }
    if (object.interest_rate_hour_usd !== undefined && object.interest_rate_hour_usd !== null) {
      message.interestRateHourUsd = object.interest_rate_hour_usd;
    }
    return message;
  },
  toAmino(message: PositionAndInterest): PositionAndInterestAmino {
    const obj: any = {};
    obj.position = message.position ? QueryPosition.toAmino(message.position) : undefined;
    obj.interest_rate_hour = message.interestRateHour === "" ? undefined : message.interestRateHour;
    obj.interest_rate_hour_usd = message.interestRateHourUsd === "" ? undefined : message.interestRateHourUsd;
    return obj;
  },
  fromAminoMsg(object: PositionAndInterestAminoMsg): PositionAndInterest {
    return PositionAndInterest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionAndInterestProtoMsg): PositionAndInterest {
    return PositionAndInterest.decode(message.value);
  },
  toProto(message: PositionAndInterest): Uint8Array {
    return PositionAndInterest.encode(message).finish();
  },
  toProtoMsg(message: PositionAndInterest): PositionAndInterestProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.PositionAndInterest",
      value: PositionAndInterest.encode(message).finish()
    };
  }
};