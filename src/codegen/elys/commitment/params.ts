import { BinaryReader, BinaryWriter } from "../../binary";
export enum EarnType {
  ALL_PROGRAM = 0,
  USDC_PROGRAM = 1,
  ELYS_PROGRAM = 2,
  EDEN_PROGRAM = 3,
  EDENB_PROGRAM = 4,
  UNRECOGNIZED = -1,
}
export const EarnTypeSDKType = EarnType;
export const EarnTypeAmino = EarnType;
export function earnTypeFromJSON(object: any): EarnType {
  switch (object) {
    case 0:
    case "ALL_PROGRAM":
      return EarnType.ALL_PROGRAM;
    case 1:
    case "USDC_PROGRAM":
      return EarnType.USDC_PROGRAM;
    case 2:
    case "ELYS_PROGRAM":
      return EarnType.ELYS_PROGRAM;
    case 3:
    case "EDEN_PROGRAM":
      return EarnType.EDEN_PROGRAM;
    case 4:
    case "EDENB_PROGRAM":
      return EarnType.EDENB_PROGRAM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EarnType.UNRECOGNIZED;
  }
}
export function earnTypeToJSON(object: EarnType): string {
  switch (object) {
    case EarnType.ALL_PROGRAM:
      return "ALL_PROGRAM";
    case EarnType.USDC_PROGRAM:
      return "USDC_PROGRAM";
    case EarnType.ELYS_PROGRAM:
      return "ELYS_PROGRAM";
    case EarnType.EDEN_PROGRAM:
      return "EDEN_PROGRAM";
    case EarnType.EDENB_PROGRAM:
      return "EDENB_PROGRAM";
    case EarnType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params defines the parameters for the module. */
export interface Params {
  vestingInfos: VestingInfo[];
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.commitment.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  vesting_infos: VestingInfoAmino[];
}
export interface ParamsAminoMsg {
  type: "/elys.commitment.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  vesting_infos: VestingInfoSDKType[];
}
export interface VestingInfo {
  baseDenom: string;
  vestingDenom: string;
  epochIdentifier: string;
  numEpochs: bigint;
  vestNowFactor: string;
  numMaxVestings: bigint;
}
export interface VestingInfoProtoMsg {
  typeUrl: "/elys.commitment.VestingInfo";
  value: Uint8Array;
}
export interface VestingInfoAmino {
  base_denom: string;
  vesting_denom: string;
  epoch_identifier: string;
  num_epochs: string;
  vest_now_factor: string;
  num_max_vestings: string;
}
export interface VestingInfoAminoMsg {
  type: "/elys.commitment.VestingInfo";
  value: VestingInfoAmino;
}
export interface VestingInfoSDKType {
  base_denom: string;
  vesting_denom: string;
  epoch_identifier: string;
  num_epochs: bigint;
  vest_now_factor: string;
  num_max_vestings: bigint;
}
function createBaseParams(): Params {
  return {
    vestingInfos: []
  };
}
export const Params = {
  typeUrl: "/elys.commitment.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.vestingInfos) {
      VestingInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vestingInfos.push(VestingInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.vestingInfos = object.vestingInfos?.map(e => VestingInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      vestingInfos: Array.isArray(object?.vesting_infos) ? object.vesting_infos.map((e: any) => VestingInfo.fromAmino(e)) : []
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.vestingInfos) {
      obj.vesting_infos = message.vestingInfos.map(e => e ? VestingInfo.toAmino(e) : undefined);
    } else {
      obj.vesting_infos = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/elys.commitment.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseVestingInfo(): VestingInfo {
  return {
    baseDenom: "",
    vestingDenom: "",
    epochIdentifier: "",
    numEpochs: BigInt(0),
    vestNowFactor: "",
    numMaxVestings: BigInt(0)
  };
}
export const VestingInfo = {
  typeUrl: "/elys.commitment.VestingInfo",
  encode(message: VestingInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.vestingDenom !== "") {
      writer.uint32(18).string(message.vestingDenom);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(26).string(message.epochIdentifier);
    }
    if (message.numEpochs !== BigInt(0)) {
      writer.uint32(32).int64(message.numEpochs);
    }
    if (message.vestNowFactor !== "") {
      writer.uint32(42).string(message.vestNowFactor);
    }
    if (message.numMaxVestings !== BigInt(0)) {
      writer.uint32(48).int64(message.numMaxVestings);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VestingInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVestingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.vestingDenom = reader.string();
          break;
        case 3:
          message.epochIdentifier = reader.string();
          break;
        case 4:
          message.numEpochs = reader.int64();
          break;
        case 5:
          message.vestNowFactor = reader.string();
          break;
        case 6:
          message.numMaxVestings = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VestingInfo>): VestingInfo {
    const message = createBaseVestingInfo();
    message.baseDenom = object.baseDenom ?? "";
    message.vestingDenom = object.vestingDenom ?? "";
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.numEpochs = object.numEpochs !== undefined && object.numEpochs !== null ? BigInt(object.numEpochs.toString()) : BigInt(0);
    message.vestNowFactor = object.vestNowFactor ?? "";
    message.numMaxVestings = object.numMaxVestings !== undefined && object.numMaxVestings !== null ? BigInt(object.numMaxVestings.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VestingInfoAmino): VestingInfo {
    return {
      baseDenom: object.base_denom,
      vestingDenom: object.vesting_denom,
      epochIdentifier: object.epoch_identifier,
      numEpochs: BigInt(object.num_epochs),
      vestNowFactor: object.vest_now_factor,
      numMaxVestings: BigInt(object.num_max_vestings)
    };
  },
  toAmino(message: VestingInfo): VestingInfoAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom;
    obj.vesting_denom = message.vestingDenom;
    obj.epoch_identifier = message.epochIdentifier;
    obj.num_epochs = message.numEpochs ? message.numEpochs.toString() : undefined;
    obj.vest_now_factor = message.vestNowFactor;
    obj.num_max_vestings = message.numMaxVestings ? message.numMaxVestings.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VestingInfoAminoMsg): VestingInfo {
    return VestingInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: VestingInfoProtoMsg): VestingInfo {
    return VestingInfo.decode(message.value);
  },
  toProto(message: VestingInfo): Uint8Array {
    return VestingInfo.encode(message).finish();
  },
  toProtoMsg(message: VestingInfo): VestingInfoProtoMsg {
    return {
      typeUrl: "/elys.commitment.VestingInfo",
      value: VestingInfo.encode(message).finish()
    };
  }
};