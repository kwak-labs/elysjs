//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Commitments, CommitmentsAmino, CommitmentsSDKType } from "./commitments";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/elys.commitment.QueryParamsRequest";
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
  typeUrl: "/elys.commitment.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/elys.commitment.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryShowCommitmentsRequest {
  creator: string;
}
export interface QueryShowCommitmentsRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryShowCommitmentsRequest";
  value: Uint8Array;
}
export interface QueryShowCommitmentsRequestAmino {
  creator?: string;
}
export interface QueryShowCommitmentsRequestAminoMsg {
  type: "/elys.commitment.QueryShowCommitmentsRequest";
  value: QueryShowCommitmentsRequestAmino;
}
export interface QueryShowCommitmentsRequestSDKType {
  creator: string;
}
export interface QueryShowCommitmentsResponse {
  commitments: Commitments;
}
export interface QueryShowCommitmentsResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryShowCommitmentsResponse";
  value: Uint8Array;
}
export interface QueryShowCommitmentsResponseAmino {
  commitments: CommitmentsAmino;
}
export interface QueryShowCommitmentsResponseAminoMsg {
  type: "/elys.commitment.QueryShowCommitmentsResponse";
  value: QueryShowCommitmentsResponseAmino;
}
export interface QueryShowCommitmentsResponseSDKType {
  commitments: CommitmentsSDKType;
}
export interface QueryNumberOfCommitmentsRequest {}
export interface QueryNumberOfCommitmentsRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryNumberOfCommitmentsRequest";
  value: Uint8Array;
}
export interface QueryNumberOfCommitmentsRequestAmino {}
export interface QueryNumberOfCommitmentsRequestAminoMsg {
  type: "/elys.commitment.QueryNumberOfCommitmentsRequest";
  value: QueryNumberOfCommitmentsRequestAmino;
}
export interface QueryNumberOfCommitmentsRequestSDKType {}
export interface QueryNumberOfCommitmentsResponse {
  number: bigint;
}
export interface QueryNumberOfCommitmentsResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryNumberOfCommitmentsResponse";
  value: Uint8Array;
}
export interface QueryNumberOfCommitmentsResponseAmino {
  number?: string;
}
export interface QueryNumberOfCommitmentsResponseAminoMsg {
  type: "/elys.commitment.QueryNumberOfCommitmentsResponse";
  value: QueryNumberOfCommitmentsResponseAmino;
}
export interface QueryNumberOfCommitmentsResponseSDKType {
  number: bigint;
}
export interface QueryCommittedTokensLockedRequest {
  address: string;
}
export interface QueryCommittedTokensLockedRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryCommittedTokensLockedRequest";
  value: Uint8Array;
}
export interface QueryCommittedTokensLockedRequestAmino {
  address?: string;
}
export interface QueryCommittedTokensLockedRequestAminoMsg {
  type: "/elys.commitment.QueryCommittedTokensLockedRequest";
  value: QueryCommittedTokensLockedRequestAmino;
}
export interface QueryCommittedTokensLockedRequestSDKType {
  address: string;
}
export interface QueryCommittedTokensLockedResponse {
  address: string;
  lockedCommitted: Coin[];
  totalCommitted: Coin[];
}
export interface QueryCommittedTokensLockedResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryCommittedTokensLockedResponse";
  value: Uint8Array;
}
export interface QueryCommittedTokensLockedResponseAmino {
  address?: string;
  locked_committed?: CoinAmino[];
  total_committed?: CoinAmino[];
}
export interface QueryCommittedTokensLockedResponseAminoMsg {
  type: "/elys.commitment.QueryCommittedTokensLockedResponse";
  value: QueryCommittedTokensLockedResponseAmino;
}
export interface QueryCommittedTokensLockedResponseSDKType {
  address: string;
  locked_committed: CoinSDKType[];
  total_committed: CoinSDKType[];
}
export interface QueryCommitmentVestingInfoRequest {
  address: string;
}
export interface QueryCommitmentVestingInfoRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryCommitmentVestingInfoRequest";
  value: Uint8Array;
}
export interface QueryCommitmentVestingInfoRequestAmino {
  address?: string;
}
export interface QueryCommitmentVestingInfoRequestAminoMsg {
  type: "/elys.commitment.QueryCommitmentVestingInfoRequest";
  value: QueryCommitmentVestingInfoRequestAmino;
}
export interface QueryCommitmentVestingInfoRequestSDKType {
  address: string;
}
export interface QueryCommitmentVestingInfoResponse {
  total: string;
  vestingDetails: VestingDetails[];
}
export interface QueryCommitmentVestingInfoResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryCommitmentVestingInfoResponse";
  value: Uint8Array;
}
export interface QueryCommitmentVestingInfoResponseAmino {
  total?: string;
  vesting_details: VestingDetailsAmino[];
}
export interface QueryCommitmentVestingInfoResponseAminoMsg {
  type: "/elys.commitment.QueryCommitmentVestingInfoResponse";
  value: QueryCommitmentVestingInfoResponseAmino;
}
export interface QueryCommitmentVestingInfoResponseSDKType {
  total: string;
  vesting_details: VestingDetailsSDKType[];
}
export interface VestingDetails {
  id: string;
  totalVesting: string;
  claimed: string;
  vestedSoFar: string;
  remainingBlocks: bigint;
}
export interface VestingDetailsProtoMsg {
  typeUrl: "/elys.commitment.VestingDetails";
  value: Uint8Array;
}
export interface VestingDetailsAmino {
  id?: string;
  total_vesting?: string;
  claimed?: string;
  vested_so_far?: string;
  remaining_blocks?: string;
}
export interface VestingDetailsAminoMsg {
  type: "/elys.commitment.VestingDetails";
  value: VestingDetailsAmino;
}
export interface VestingDetailsSDKType {
  id: string;
  total_vesting: string;
  claimed: string;
  vested_so_far: string;
  remaining_blocks: bigint;
}
export interface QueryAirDropRequest {
  address: string;
}
export interface QueryAirDropRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryAirDropRequest";
  value: Uint8Array;
}
export interface QueryAirDropRequestAmino {
  address?: string;
}
export interface QueryAirDropRequestAminoMsg {
  type: "/elys.commitment.QueryAirDropRequest";
  value: QueryAirDropRequestAmino;
}
export interface QueryAirDropRequestSDKType {
  address: string;
}
export interface QueryAirDropResponse {
  atomStaking: string;
  cadet: string;
  nftHolder: string;
  governor: string;
  claimed: boolean;
}
export interface QueryAirDropResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryAirDropResponse";
  value: Uint8Array;
}
export interface QueryAirDropResponseAmino {
  atom_staking?: string;
  cadet?: string;
  nft_holder?: string;
  governor?: string;
  claimed?: boolean;
}
export interface QueryAirDropResponseAminoMsg {
  type: "/elys.commitment.QueryAirDropResponse";
  value: QueryAirDropResponseAmino;
}
export interface QueryAirDropResponseSDKType {
  atom_staking: string;
  cadet: string;
  nft_holder: string;
  governor: string;
  claimed: boolean;
}
export interface QueryTotalAirDropClaimedRequest {}
export interface QueryTotalAirDropClaimedRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryTotalAirDropClaimedRequest";
  value: Uint8Array;
}
export interface QueryTotalAirDropClaimedRequestAmino {}
export interface QueryTotalAirDropClaimedRequestAminoMsg {
  type: "/elys.commitment.QueryTotalAirDropClaimedRequest";
  value: QueryTotalAirDropClaimedRequestAmino;
}
export interface QueryTotalAirDropClaimedRequestSDKType {}
export interface QueryTotalAirDropClaimedResponse {
  totalElysClaimed: string;
  totalEdenClaimed: string;
}
export interface QueryTotalAirDropClaimedResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryTotalAirDropClaimedResponse";
  value: Uint8Array;
}
export interface QueryTotalAirDropClaimedResponseAmino {
  total_elys_claimed?: string;
  total_eden_claimed?: string;
}
export interface QueryTotalAirDropClaimedResponseAminoMsg {
  type: "/elys.commitment.QueryTotalAirDropClaimedResponse";
  value: QueryTotalAirDropClaimedResponseAmino;
}
export interface QueryTotalAirDropClaimedResponseSDKType {
  total_elys_claimed: string;
  total_eden_claimed: string;
}
export interface QueryKolRequest {
  address: string;
}
export interface QueryKolRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryKolRequest";
  value: Uint8Array;
}
export interface QueryKolRequestAmino {
  address?: string;
}
export interface QueryKolRequestAminoMsg {
  type: "/elys.commitment.QueryKolRequest";
  value: QueryKolRequestAmino;
}
export interface QueryKolRequestSDKType {
  address: string;
}
export interface QueryKolResponse {
  elysAmount: string;
  claimed: boolean;
  refunded: boolean;
}
export interface QueryKolResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryKolResponse";
  value: Uint8Array;
}
export interface QueryKolResponseAmino {
  elys_amount?: string;
  claimed?: boolean;
  refunded?: boolean;
}
export interface QueryKolResponseAminoMsg {
  type: "/elys.commitment.QueryKolResponse";
  value: QueryKolResponseAmino;
}
export interface QueryKolResponseSDKType {
  elys_amount: string;
  claimed: boolean;
  refunded: boolean;
}
export interface QueryTotalSupplyRequest {}
export interface QueryTotalSupplyRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryTotalSupplyRequest";
  value: Uint8Array;
}
export interface QueryTotalSupplyRequestAmino {}
export interface QueryTotalSupplyRequestAminoMsg {
  type: "/elys.commitment.QueryTotalSupplyRequest";
  value: QueryTotalSupplyRequestAmino;
}
export interface QueryTotalSupplyRequestSDKType {}
export interface QueryTotalSupplyResponse {
  totalEden: string;
  totalEdenb: string;
}
export interface QueryTotalSupplyResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryTotalSupplyResponse";
  value: Uint8Array;
}
export interface QueryTotalSupplyResponseAmino {
  total_eden?: string;
  total_edenb?: string;
}
export interface QueryTotalSupplyResponseAminoMsg {
  type: "/elys.commitment.QueryTotalSupplyResponse";
  value: QueryTotalSupplyResponseAmino;
}
export interface QueryTotalSupplyResponseSDKType {
  total_eden: string;
  total_edenb: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/elys.commitment.QueryParamsRequest",
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
      typeUrl: "/elys.commitment.QueryParamsRequest",
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
  typeUrl: "/elys.commitment.QueryParamsResponse",
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
      typeUrl: "/elys.commitment.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShowCommitmentsRequest(): QueryShowCommitmentsRequest {
  return {
    creator: ""
  };
}
export const QueryShowCommitmentsRequest = {
  typeUrl: "/elys.commitment.QueryShowCommitmentsRequest",
  encode(message: QueryShowCommitmentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowCommitmentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowCommitmentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowCommitmentsRequest>): QueryShowCommitmentsRequest {
    const message = createBaseQueryShowCommitmentsRequest();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: QueryShowCommitmentsRequestAmino): QueryShowCommitmentsRequest {
    const message = createBaseQueryShowCommitmentsRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: QueryShowCommitmentsRequest): QueryShowCommitmentsRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: QueryShowCommitmentsRequestAminoMsg): QueryShowCommitmentsRequest {
    return QueryShowCommitmentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowCommitmentsRequestProtoMsg): QueryShowCommitmentsRequest {
    return QueryShowCommitmentsRequest.decode(message.value);
  },
  toProto(message: QueryShowCommitmentsRequest): Uint8Array {
    return QueryShowCommitmentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowCommitmentsRequest): QueryShowCommitmentsRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryShowCommitmentsRequest",
      value: QueryShowCommitmentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShowCommitmentsResponse(): QueryShowCommitmentsResponse {
  return {
    commitments: Commitments.fromPartial({})
  };
}
export const QueryShowCommitmentsResponse = {
  typeUrl: "/elys.commitment.QueryShowCommitmentsResponse",
  encode(message: QueryShowCommitmentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commitments !== undefined) {
      Commitments.encode(message.commitments, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowCommitmentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowCommitmentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitments = Commitments.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowCommitmentsResponse>): QueryShowCommitmentsResponse {
    const message = createBaseQueryShowCommitmentsResponse();
    message.commitments = object.commitments !== undefined && object.commitments !== null ? Commitments.fromPartial(object.commitments) : undefined;
    return message;
  },
  fromAmino(object: QueryShowCommitmentsResponseAmino): QueryShowCommitmentsResponse {
    const message = createBaseQueryShowCommitmentsResponse();
    if (object.commitments !== undefined && object.commitments !== null) {
      message.commitments = Commitments.fromAmino(object.commitments);
    }
    return message;
  },
  toAmino(message: QueryShowCommitmentsResponse): QueryShowCommitmentsResponseAmino {
    const obj: any = {};
    obj.commitments = message.commitments ? Commitments.toAmino(message.commitments) : Commitments.toAmino(Commitments.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryShowCommitmentsResponseAminoMsg): QueryShowCommitmentsResponse {
    return QueryShowCommitmentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowCommitmentsResponseProtoMsg): QueryShowCommitmentsResponse {
    return QueryShowCommitmentsResponse.decode(message.value);
  },
  toProto(message: QueryShowCommitmentsResponse): Uint8Array {
    return QueryShowCommitmentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowCommitmentsResponse): QueryShowCommitmentsResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryShowCommitmentsResponse",
      value: QueryShowCommitmentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNumberOfCommitmentsRequest(): QueryNumberOfCommitmentsRequest {
  return {};
}
export const QueryNumberOfCommitmentsRequest = {
  typeUrl: "/elys.commitment.QueryNumberOfCommitmentsRequest",
  encode(_: QueryNumberOfCommitmentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNumberOfCommitmentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumberOfCommitmentsRequest();
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
  fromPartial(_: Partial<QueryNumberOfCommitmentsRequest>): QueryNumberOfCommitmentsRequest {
    const message = createBaseQueryNumberOfCommitmentsRequest();
    return message;
  },
  fromAmino(_: QueryNumberOfCommitmentsRequestAmino): QueryNumberOfCommitmentsRequest {
    const message = createBaseQueryNumberOfCommitmentsRequest();
    return message;
  },
  toAmino(_: QueryNumberOfCommitmentsRequest): QueryNumberOfCommitmentsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryNumberOfCommitmentsRequestAminoMsg): QueryNumberOfCommitmentsRequest {
    return QueryNumberOfCommitmentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNumberOfCommitmentsRequestProtoMsg): QueryNumberOfCommitmentsRequest {
    return QueryNumberOfCommitmentsRequest.decode(message.value);
  },
  toProto(message: QueryNumberOfCommitmentsRequest): Uint8Array {
    return QueryNumberOfCommitmentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNumberOfCommitmentsRequest): QueryNumberOfCommitmentsRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryNumberOfCommitmentsRequest",
      value: QueryNumberOfCommitmentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNumberOfCommitmentsResponse(): QueryNumberOfCommitmentsResponse {
  return {
    number: BigInt(0)
  };
}
export const QueryNumberOfCommitmentsResponse = {
  typeUrl: "/elys.commitment.QueryNumberOfCommitmentsResponse",
  encode(message: QueryNumberOfCommitmentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.number !== BigInt(0)) {
      writer.uint32(8).int64(message.number);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNumberOfCommitmentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumberOfCommitmentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryNumberOfCommitmentsResponse>): QueryNumberOfCommitmentsResponse {
    const message = createBaseQueryNumberOfCommitmentsResponse();
    message.number = object.number !== undefined && object.number !== null ? BigInt(object.number.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryNumberOfCommitmentsResponseAmino): QueryNumberOfCommitmentsResponse {
    const message = createBaseQueryNumberOfCommitmentsResponse();
    if (object.number !== undefined && object.number !== null) {
      message.number = BigInt(object.number);
    }
    return message;
  },
  toAmino(message: QueryNumberOfCommitmentsResponse): QueryNumberOfCommitmentsResponseAmino {
    const obj: any = {};
    obj.number = message.number !== BigInt(0) ? message.number?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNumberOfCommitmentsResponseAminoMsg): QueryNumberOfCommitmentsResponse {
    return QueryNumberOfCommitmentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNumberOfCommitmentsResponseProtoMsg): QueryNumberOfCommitmentsResponse {
    return QueryNumberOfCommitmentsResponse.decode(message.value);
  },
  toProto(message: QueryNumberOfCommitmentsResponse): Uint8Array {
    return QueryNumberOfCommitmentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNumberOfCommitmentsResponse): QueryNumberOfCommitmentsResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryNumberOfCommitmentsResponse",
      value: QueryNumberOfCommitmentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCommittedTokensLockedRequest(): QueryCommittedTokensLockedRequest {
  return {
    address: ""
  };
}
export const QueryCommittedTokensLockedRequest = {
  typeUrl: "/elys.commitment.QueryCommittedTokensLockedRequest",
  encode(message: QueryCommittedTokensLockedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommittedTokensLockedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommittedTokensLockedRequest();
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
  fromPartial(object: Partial<QueryCommittedTokensLockedRequest>): QueryCommittedTokensLockedRequest {
    const message = createBaseQueryCommittedTokensLockedRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryCommittedTokensLockedRequestAmino): QueryCommittedTokensLockedRequest {
    const message = createBaseQueryCommittedTokensLockedRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryCommittedTokensLockedRequest): QueryCommittedTokensLockedRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryCommittedTokensLockedRequestAminoMsg): QueryCommittedTokensLockedRequest {
    return QueryCommittedTokensLockedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommittedTokensLockedRequestProtoMsg): QueryCommittedTokensLockedRequest {
    return QueryCommittedTokensLockedRequest.decode(message.value);
  },
  toProto(message: QueryCommittedTokensLockedRequest): Uint8Array {
    return QueryCommittedTokensLockedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCommittedTokensLockedRequest): QueryCommittedTokensLockedRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryCommittedTokensLockedRequest",
      value: QueryCommittedTokensLockedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCommittedTokensLockedResponse(): QueryCommittedTokensLockedResponse {
  return {
    address: "",
    lockedCommitted: [],
    totalCommitted: []
  };
}
export const QueryCommittedTokensLockedResponse = {
  typeUrl: "/elys.commitment.QueryCommittedTokensLockedResponse",
  encode(message: QueryCommittedTokensLockedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.lockedCommitted) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.totalCommitted) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommittedTokensLockedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommittedTokensLockedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.lockedCommitted.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalCommitted.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCommittedTokensLockedResponse>): QueryCommittedTokensLockedResponse {
    const message = createBaseQueryCommittedTokensLockedResponse();
    message.address = object.address ?? "";
    message.lockedCommitted = object.lockedCommitted?.map(e => Coin.fromPartial(e)) || [];
    message.totalCommitted = object.totalCommitted?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCommittedTokensLockedResponseAmino): QueryCommittedTokensLockedResponse {
    const message = createBaseQueryCommittedTokensLockedResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.lockedCommitted = object.locked_committed?.map(e => Coin.fromAmino(e)) || [];
    message.totalCommitted = object.total_committed?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCommittedTokensLockedResponse): QueryCommittedTokensLockedResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.lockedCommitted) {
      obj.locked_committed = message.lockedCommitted.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.locked_committed = message.lockedCommitted;
    }
    if (message.totalCommitted) {
      obj.total_committed = message.totalCommitted.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_committed = message.totalCommitted;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCommittedTokensLockedResponseAminoMsg): QueryCommittedTokensLockedResponse {
    return QueryCommittedTokensLockedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommittedTokensLockedResponseProtoMsg): QueryCommittedTokensLockedResponse {
    return QueryCommittedTokensLockedResponse.decode(message.value);
  },
  toProto(message: QueryCommittedTokensLockedResponse): Uint8Array {
    return QueryCommittedTokensLockedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCommittedTokensLockedResponse): QueryCommittedTokensLockedResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryCommittedTokensLockedResponse",
      value: QueryCommittedTokensLockedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCommitmentVestingInfoRequest(): QueryCommitmentVestingInfoRequest {
  return {
    address: ""
  };
}
export const QueryCommitmentVestingInfoRequest = {
  typeUrl: "/elys.commitment.QueryCommitmentVestingInfoRequest",
  encode(message: QueryCommitmentVestingInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommitmentVestingInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitmentVestingInfoRequest();
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
  fromPartial(object: Partial<QueryCommitmentVestingInfoRequest>): QueryCommitmentVestingInfoRequest {
    const message = createBaseQueryCommitmentVestingInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryCommitmentVestingInfoRequestAmino): QueryCommitmentVestingInfoRequest {
    const message = createBaseQueryCommitmentVestingInfoRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryCommitmentVestingInfoRequest): QueryCommitmentVestingInfoRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryCommitmentVestingInfoRequestAminoMsg): QueryCommitmentVestingInfoRequest {
    return QueryCommitmentVestingInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommitmentVestingInfoRequestProtoMsg): QueryCommitmentVestingInfoRequest {
    return QueryCommitmentVestingInfoRequest.decode(message.value);
  },
  toProto(message: QueryCommitmentVestingInfoRequest): Uint8Array {
    return QueryCommitmentVestingInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCommitmentVestingInfoRequest): QueryCommitmentVestingInfoRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryCommitmentVestingInfoRequest",
      value: QueryCommitmentVestingInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCommitmentVestingInfoResponse(): QueryCommitmentVestingInfoResponse {
  return {
    total: "",
    vestingDetails: []
  };
}
export const QueryCommitmentVestingInfoResponse = {
  typeUrl: "/elys.commitment.QueryCommitmentVestingInfoResponse",
  encode(message: QueryCommitmentVestingInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== "") {
      writer.uint32(10).string(message.total);
    }
    for (const v of message.vestingDetails) {
      VestingDetails.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommitmentVestingInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitmentVestingInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.string();
          break;
        case 2:
          message.vestingDetails.push(VestingDetails.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCommitmentVestingInfoResponse>): QueryCommitmentVestingInfoResponse {
    const message = createBaseQueryCommitmentVestingInfoResponse();
    message.total = object.total ?? "";
    message.vestingDetails = object.vestingDetails?.map(e => VestingDetails.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCommitmentVestingInfoResponseAmino): QueryCommitmentVestingInfoResponse {
    const message = createBaseQueryCommitmentVestingInfoResponse();
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    message.vestingDetails = object.vesting_details?.map(e => VestingDetails.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCommitmentVestingInfoResponse): QueryCommitmentVestingInfoResponseAmino {
    const obj: any = {};
    obj.total = message.total === "" ? undefined : message.total;
    if (message.vestingDetails) {
      obj.vesting_details = message.vestingDetails.map(e => e ? VestingDetails.toAmino(e) : undefined);
    } else {
      obj.vesting_details = message.vestingDetails;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCommitmentVestingInfoResponseAminoMsg): QueryCommitmentVestingInfoResponse {
    return QueryCommitmentVestingInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommitmentVestingInfoResponseProtoMsg): QueryCommitmentVestingInfoResponse {
    return QueryCommitmentVestingInfoResponse.decode(message.value);
  },
  toProto(message: QueryCommitmentVestingInfoResponse): Uint8Array {
    return QueryCommitmentVestingInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCommitmentVestingInfoResponse): QueryCommitmentVestingInfoResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryCommitmentVestingInfoResponse",
      value: QueryCommitmentVestingInfoResponse.encode(message).finish()
    };
  }
};
function createBaseVestingDetails(): VestingDetails {
  return {
    id: "",
    totalVesting: "",
    claimed: "",
    vestedSoFar: "",
    remainingBlocks: BigInt(0)
  };
}
export const VestingDetails = {
  typeUrl: "/elys.commitment.VestingDetails",
  encode(message: VestingDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.totalVesting !== "") {
      writer.uint32(18).string(message.totalVesting);
    }
    if (message.claimed !== "") {
      writer.uint32(26).string(message.claimed);
    }
    if (message.vestedSoFar !== "") {
      writer.uint32(34).string(message.vestedSoFar);
    }
    if (message.remainingBlocks !== BigInt(0)) {
      writer.uint32(40).int64(message.remainingBlocks);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VestingDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVestingDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.totalVesting = reader.string();
          break;
        case 3:
          message.claimed = reader.string();
          break;
        case 4:
          message.vestedSoFar = reader.string();
          break;
        case 5:
          message.remainingBlocks = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VestingDetails>): VestingDetails {
    const message = createBaseVestingDetails();
    message.id = object.id ?? "";
    message.totalVesting = object.totalVesting ?? "";
    message.claimed = object.claimed ?? "";
    message.vestedSoFar = object.vestedSoFar ?? "";
    message.remainingBlocks = object.remainingBlocks !== undefined && object.remainingBlocks !== null ? BigInt(object.remainingBlocks.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VestingDetailsAmino): VestingDetails {
    const message = createBaseVestingDetails();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.total_vesting !== undefined && object.total_vesting !== null) {
      message.totalVesting = object.total_vesting;
    }
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    if (object.vested_so_far !== undefined && object.vested_so_far !== null) {
      message.vestedSoFar = object.vested_so_far;
    }
    if (object.remaining_blocks !== undefined && object.remaining_blocks !== null) {
      message.remainingBlocks = BigInt(object.remaining_blocks);
    }
    return message;
  },
  toAmino(message: VestingDetails): VestingDetailsAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.total_vesting = message.totalVesting === "" ? undefined : message.totalVesting;
    obj.claimed = message.claimed === "" ? undefined : message.claimed;
    obj.vested_so_far = message.vestedSoFar === "" ? undefined : message.vestedSoFar;
    obj.remaining_blocks = message.remainingBlocks !== BigInt(0) ? message.remainingBlocks?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VestingDetailsAminoMsg): VestingDetails {
    return VestingDetails.fromAmino(object.value);
  },
  fromProtoMsg(message: VestingDetailsProtoMsg): VestingDetails {
    return VestingDetails.decode(message.value);
  },
  toProto(message: VestingDetails): Uint8Array {
    return VestingDetails.encode(message).finish();
  },
  toProtoMsg(message: VestingDetails): VestingDetailsProtoMsg {
    return {
      typeUrl: "/elys.commitment.VestingDetails",
      value: VestingDetails.encode(message).finish()
    };
  }
};
function createBaseQueryAirDropRequest(): QueryAirDropRequest {
  return {
    address: ""
  };
}
export const QueryAirDropRequest = {
  typeUrl: "/elys.commitment.QueryAirDropRequest",
  encode(message: QueryAirDropRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAirDropRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirDropRequest();
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
  fromPartial(object: Partial<QueryAirDropRequest>): QueryAirDropRequest {
    const message = createBaseQueryAirDropRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAirDropRequestAmino): QueryAirDropRequest {
    const message = createBaseQueryAirDropRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAirDropRequest): QueryAirDropRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAirDropRequestAminoMsg): QueryAirDropRequest {
    return QueryAirDropRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAirDropRequestProtoMsg): QueryAirDropRequest {
    return QueryAirDropRequest.decode(message.value);
  },
  toProto(message: QueryAirDropRequest): Uint8Array {
    return QueryAirDropRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAirDropRequest): QueryAirDropRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryAirDropRequest",
      value: QueryAirDropRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAirDropResponse(): QueryAirDropResponse {
  return {
    atomStaking: "",
    cadet: "",
    nftHolder: "",
    governor: "",
    claimed: false
  };
}
export const QueryAirDropResponse = {
  typeUrl: "/elys.commitment.QueryAirDropResponse",
  encode(message: QueryAirDropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.atomStaking !== "") {
      writer.uint32(10).string(message.atomStaking);
    }
    if (message.cadet !== "") {
      writer.uint32(18).string(message.cadet);
    }
    if (message.nftHolder !== "") {
      writer.uint32(26).string(message.nftHolder);
    }
    if (message.governor !== "") {
      writer.uint32(34).string(message.governor);
    }
    if (message.claimed === true) {
      writer.uint32(40).bool(message.claimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAirDropResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirDropResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.atomStaking = reader.string();
          break;
        case 2:
          message.cadet = reader.string();
          break;
        case 3:
          message.nftHolder = reader.string();
          break;
        case 4:
          message.governor = reader.string();
          break;
        case 5:
          message.claimed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAirDropResponse>): QueryAirDropResponse {
    const message = createBaseQueryAirDropResponse();
    message.atomStaking = object.atomStaking ?? "";
    message.cadet = object.cadet ?? "";
    message.nftHolder = object.nftHolder ?? "";
    message.governor = object.governor ?? "";
    message.claimed = object.claimed ?? false;
    return message;
  },
  fromAmino(object: QueryAirDropResponseAmino): QueryAirDropResponse {
    const message = createBaseQueryAirDropResponse();
    if (object.atom_staking !== undefined && object.atom_staking !== null) {
      message.atomStaking = object.atom_staking;
    }
    if (object.cadet !== undefined && object.cadet !== null) {
      message.cadet = object.cadet;
    }
    if (object.nft_holder !== undefined && object.nft_holder !== null) {
      message.nftHolder = object.nft_holder;
    }
    if (object.governor !== undefined && object.governor !== null) {
      message.governor = object.governor;
    }
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    return message;
  },
  toAmino(message: QueryAirDropResponse): QueryAirDropResponseAmino {
    const obj: any = {};
    obj.atom_staking = message.atomStaking === "" ? undefined : message.atomStaking;
    obj.cadet = message.cadet === "" ? undefined : message.cadet;
    obj.nft_holder = message.nftHolder === "" ? undefined : message.nftHolder;
    obj.governor = message.governor === "" ? undefined : message.governor;
    obj.claimed = message.claimed === false ? undefined : message.claimed;
    return obj;
  },
  fromAminoMsg(object: QueryAirDropResponseAminoMsg): QueryAirDropResponse {
    return QueryAirDropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAirDropResponseProtoMsg): QueryAirDropResponse {
    return QueryAirDropResponse.decode(message.value);
  },
  toProto(message: QueryAirDropResponse): Uint8Array {
    return QueryAirDropResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAirDropResponse): QueryAirDropResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryAirDropResponse",
      value: QueryAirDropResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalAirDropClaimedRequest(): QueryTotalAirDropClaimedRequest {
  return {};
}
export const QueryTotalAirDropClaimedRequest = {
  typeUrl: "/elys.commitment.QueryTotalAirDropClaimedRequest",
  encode(_: QueryTotalAirDropClaimedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalAirDropClaimedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAirDropClaimedRequest();
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
  fromPartial(_: Partial<QueryTotalAirDropClaimedRequest>): QueryTotalAirDropClaimedRequest {
    const message = createBaseQueryTotalAirDropClaimedRequest();
    return message;
  },
  fromAmino(_: QueryTotalAirDropClaimedRequestAmino): QueryTotalAirDropClaimedRequest {
    const message = createBaseQueryTotalAirDropClaimedRequest();
    return message;
  },
  toAmino(_: QueryTotalAirDropClaimedRequest): QueryTotalAirDropClaimedRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalAirDropClaimedRequestAminoMsg): QueryTotalAirDropClaimedRequest {
    return QueryTotalAirDropClaimedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalAirDropClaimedRequestProtoMsg): QueryTotalAirDropClaimedRequest {
    return QueryTotalAirDropClaimedRequest.decode(message.value);
  },
  toProto(message: QueryTotalAirDropClaimedRequest): Uint8Array {
    return QueryTotalAirDropClaimedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalAirDropClaimedRequest): QueryTotalAirDropClaimedRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryTotalAirDropClaimedRequest",
      value: QueryTotalAirDropClaimedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalAirDropClaimedResponse(): QueryTotalAirDropClaimedResponse {
  return {
    totalElysClaimed: "",
    totalEdenClaimed: ""
  };
}
export const QueryTotalAirDropClaimedResponse = {
  typeUrl: "/elys.commitment.QueryTotalAirDropClaimedResponse",
  encode(message: QueryTotalAirDropClaimedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalElysClaimed !== "") {
      writer.uint32(10).string(message.totalElysClaimed);
    }
    if (message.totalEdenClaimed !== "") {
      writer.uint32(18).string(message.totalEdenClaimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalAirDropClaimedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAirDropClaimedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalElysClaimed = reader.string();
          break;
        case 2:
          message.totalEdenClaimed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalAirDropClaimedResponse>): QueryTotalAirDropClaimedResponse {
    const message = createBaseQueryTotalAirDropClaimedResponse();
    message.totalElysClaimed = object.totalElysClaimed ?? "";
    message.totalEdenClaimed = object.totalEdenClaimed ?? "";
    return message;
  },
  fromAmino(object: QueryTotalAirDropClaimedResponseAmino): QueryTotalAirDropClaimedResponse {
    const message = createBaseQueryTotalAirDropClaimedResponse();
    if (object.total_elys_claimed !== undefined && object.total_elys_claimed !== null) {
      message.totalElysClaimed = object.total_elys_claimed;
    }
    if (object.total_eden_claimed !== undefined && object.total_eden_claimed !== null) {
      message.totalEdenClaimed = object.total_eden_claimed;
    }
    return message;
  },
  toAmino(message: QueryTotalAirDropClaimedResponse): QueryTotalAirDropClaimedResponseAmino {
    const obj: any = {};
    obj.total_elys_claimed = message.totalElysClaimed === "" ? undefined : message.totalElysClaimed;
    obj.total_eden_claimed = message.totalEdenClaimed === "" ? undefined : message.totalEdenClaimed;
    return obj;
  },
  fromAminoMsg(object: QueryTotalAirDropClaimedResponseAminoMsg): QueryTotalAirDropClaimedResponse {
    return QueryTotalAirDropClaimedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalAirDropClaimedResponseProtoMsg): QueryTotalAirDropClaimedResponse {
    return QueryTotalAirDropClaimedResponse.decode(message.value);
  },
  toProto(message: QueryTotalAirDropClaimedResponse): Uint8Array {
    return QueryTotalAirDropClaimedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalAirDropClaimedResponse): QueryTotalAirDropClaimedResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryTotalAirDropClaimedResponse",
      value: QueryTotalAirDropClaimedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryKolRequest(): QueryKolRequest {
  return {
    address: ""
  };
}
export const QueryKolRequest = {
  typeUrl: "/elys.commitment.QueryKolRequest",
  encode(message: QueryKolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryKolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryKolRequest();
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
  fromPartial(object: Partial<QueryKolRequest>): QueryKolRequest {
    const message = createBaseQueryKolRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryKolRequestAmino): QueryKolRequest {
    const message = createBaseQueryKolRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryKolRequest): QueryKolRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryKolRequestAminoMsg): QueryKolRequest {
    return QueryKolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryKolRequestProtoMsg): QueryKolRequest {
    return QueryKolRequest.decode(message.value);
  },
  toProto(message: QueryKolRequest): Uint8Array {
    return QueryKolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryKolRequest): QueryKolRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryKolRequest",
      value: QueryKolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryKolResponse(): QueryKolResponse {
  return {
    elysAmount: "",
    claimed: false,
    refunded: false
  };
}
export const QueryKolResponse = {
  typeUrl: "/elys.commitment.QueryKolResponse",
  encode(message: QueryKolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.elysAmount !== "") {
      writer.uint32(10).string(message.elysAmount);
    }
    if (message.claimed === true) {
      writer.uint32(16).bool(message.claimed);
    }
    if (message.refunded === true) {
      writer.uint32(24).bool(message.refunded);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryKolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryKolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elysAmount = reader.string();
          break;
        case 2:
          message.claimed = reader.bool();
          break;
        case 3:
          message.refunded = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryKolResponse>): QueryKolResponse {
    const message = createBaseQueryKolResponse();
    message.elysAmount = object.elysAmount ?? "";
    message.claimed = object.claimed ?? false;
    message.refunded = object.refunded ?? false;
    return message;
  },
  fromAmino(object: QueryKolResponseAmino): QueryKolResponse {
    const message = createBaseQueryKolResponse();
    if (object.elys_amount !== undefined && object.elys_amount !== null) {
      message.elysAmount = object.elys_amount;
    }
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    if (object.refunded !== undefined && object.refunded !== null) {
      message.refunded = object.refunded;
    }
    return message;
  },
  toAmino(message: QueryKolResponse): QueryKolResponseAmino {
    const obj: any = {};
    obj.elys_amount = message.elysAmount === "" ? undefined : message.elysAmount;
    obj.claimed = message.claimed === false ? undefined : message.claimed;
    obj.refunded = message.refunded === false ? undefined : message.refunded;
    return obj;
  },
  fromAminoMsg(object: QueryKolResponseAminoMsg): QueryKolResponse {
    return QueryKolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryKolResponseProtoMsg): QueryKolResponse {
    return QueryKolResponse.decode(message.value);
  },
  toProto(message: QueryKolResponse): Uint8Array {
    return QueryKolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryKolResponse): QueryKolResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryKolResponse",
      value: QueryKolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalSupplyRequest(): QueryTotalSupplyRequest {
  return {};
}
export const QueryTotalSupplyRequest = {
  typeUrl: "/elys.commitment.QueryTotalSupplyRequest",
  encode(_: QueryTotalSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyRequest();
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
  fromPartial(_: Partial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    return message;
  },
  fromAmino(_: QueryTotalSupplyRequestAmino): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    return message;
  },
  toAmino(_: QueryTotalSupplyRequest): QueryTotalSupplyRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalSupplyRequestAminoMsg): QueryTotalSupplyRequest {
    return QueryTotalSupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalSupplyRequestProtoMsg): QueryTotalSupplyRequest {
    return QueryTotalSupplyRequest.decode(message.value);
  },
  toProto(message: QueryTotalSupplyRequest): Uint8Array {
    return QueryTotalSupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryTotalSupplyRequest",
      value: QueryTotalSupplyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalSupplyResponse(): QueryTotalSupplyResponse {
  return {
    totalEden: "",
    totalEdenb: ""
  };
}
export const QueryTotalSupplyResponse = {
  typeUrl: "/elys.commitment.QueryTotalSupplyResponse",
  encode(message: QueryTotalSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalEden !== "") {
      writer.uint32(10).string(message.totalEden);
    }
    if (message.totalEdenb !== "") {
      writer.uint32(18).string(message.totalEdenb);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalEden = reader.string();
          break;
        case 2:
          message.totalEdenb = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.totalEden = object.totalEden ?? "";
    message.totalEdenb = object.totalEdenb ?? "";
    return message;
  },
  fromAmino(object: QueryTotalSupplyResponseAmino): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    if (object.total_eden !== undefined && object.total_eden !== null) {
      message.totalEden = object.total_eden;
    }
    if (object.total_edenb !== undefined && object.total_edenb !== null) {
      message.totalEdenb = object.total_edenb;
    }
    return message;
  },
  toAmino(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAmino {
    const obj: any = {};
    obj.total_eden = message.totalEden === "" ? undefined : message.totalEden;
    obj.total_edenb = message.totalEdenb === "" ? undefined : message.totalEdenb;
    return obj;
  },
  fromAminoMsg(object: QueryTotalSupplyResponseAminoMsg): QueryTotalSupplyResponse {
    return QueryTotalSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalSupplyResponseProtoMsg): QueryTotalSupplyResponse {
    return QueryTotalSupplyResponse.decode(message.value);
  },
  toProto(message: QueryTotalSupplyResponse): Uint8Array {
    return QueryTotalSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryTotalSupplyResponse",
      value: QueryTotalSupplyResponse.encode(message).finish()
    };
  }
};