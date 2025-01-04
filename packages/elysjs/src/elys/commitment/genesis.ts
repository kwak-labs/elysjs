//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Commitments, CommitmentsAmino, CommitmentsSDKType } from "./commitments";
import { AtomStaker, AtomStakerAmino, AtomStakerSDKType, NftHolder, NftHolderAmino, NftHolderSDKType, Cadet, CadetAmino, CadetSDKType, Governor, GovernorAmino, GovernorSDKType, KolList, KolListAmino, KolListSDKType } from "./airdrop";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the commitment module's genesis state. */
export interface GenesisState {
  params: Params;
  commitments: Commitments[];
  atomStakers: AtomStaker[];
  nftHolders: NftHolder[];
  cadets: Cadet[];
  governors: Governor[];
  kolList: KolList[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.commitment.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the commitment module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  commitments?: CommitmentsAmino[];
  atom_stakers?: AtomStakerAmino[];
  nft_holders?: NftHolderAmino[];
  cadets?: CadetAmino[];
  governors?: GovernorAmino[];
  kol_list?: KolListAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/elys.commitment.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the commitment module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  commitments: CommitmentsSDKType[];
  atom_stakers: AtomStakerSDKType[];
  nft_holders: NftHolderSDKType[];
  cadets: CadetSDKType[];
  governors: GovernorSDKType[];
  kol_list: KolListSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    commitments: [],
    atomStakers: [],
    nftHolders: [],
    cadets: [],
    governors: [],
    kolList: []
  };
}
export const GenesisState = {
  typeUrl: "/elys.commitment.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.commitments) {
      Commitments.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.atomStakers) {
      AtomStaker.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.nftHolders) {
      NftHolder.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.cadets) {
      Cadet.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.governors) {
      Governor.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.kolList) {
      KolList.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.commitments.push(Commitments.decode(reader, reader.uint32()));
          break;
        case 3:
          message.atomStakers.push(AtomStaker.decode(reader, reader.uint32()));
          break;
        case 4:
          message.nftHolders.push(NftHolder.decode(reader, reader.uint32()));
          break;
        case 5:
          message.cadets.push(Cadet.decode(reader, reader.uint32()));
          break;
        case 6:
          message.governors.push(Governor.decode(reader, reader.uint32()));
          break;
        case 7:
          message.kolList.push(KolList.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.commitments = object.commitments?.map(e => Commitments.fromPartial(e)) || [];
    message.atomStakers = object.atomStakers?.map(e => AtomStaker.fromPartial(e)) || [];
    message.nftHolders = object.nftHolders?.map(e => NftHolder.fromPartial(e)) || [];
    message.cadets = object.cadets?.map(e => Cadet.fromPartial(e)) || [];
    message.governors = object.governors?.map(e => Governor.fromPartial(e)) || [];
    message.kolList = object.kolList?.map(e => KolList.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.commitments = object.commitments?.map(e => Commitments.fromAmino(e)) || [];
    message.atomStakers = object.atom_stakers?.map(e => AtomStaker.fromAmino(e)) || [];
    message.nftHolders = object.nft_holders?.map(e => NftHolder.fromAmino(e)) || [];
    message.cadets = object.cadets?.map(e => Cadet.fromAmino(e)) || [];
    message.governors = object.governors?.map(e => Governor.fromAmino(e)) || [];
    message.kolList = object.kol_list?.map(e => KolList.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? Commitments.toAmino(e) : undefined);
    } else {
      obj.commitments = message.commitments;
    }
    if (message.atomStakers) {
      obj.atom_stakers = message.atomStakers.map(e => e ? AtomStaker.toAmino(e) : undefined);
    } else {
      obj.atom_stakers = message.atomStakers;
    }
    if (message.nftHolders) {
      obj.nft_holders = message.nftHolders.map(e => e ? NftHolder.toAmino(e) : undefined);
    } else {
      obj.nft_holders = message.nftHolders;
    }
    if (message.cadets) {
      obj.cadets = message.cadets.map(e => e ? Cadet.toAmino(e) : undefined);
    } else {
      obj.cadets = message.cadets;
    }
    if (message.governors) {
      obj.governors = message.governors.map(e => e ? Governor.toAmino(e) : undefined);
    } else {
      obj.governors = message.governors;
    }
    if (message.kolList) {
      obj.kol_list = message.kolList.map(e => e ? KolList.toAmino(e) : undefined);
    } else {
      obj.kol_list = message.kolList;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/elys.commitment.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};