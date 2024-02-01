import { BinaryReader, BinaryWriter } from "../../binary";
/** Incentive Info */
export interface IncentiveInfo {
  /** reward amount in eden for 1 year */
  edenAmountPerYear: string;
  /** starting block height of the distribution */
  distributionStartBlock: string;
  /** distribution duration - block number per year */
  totalBlocksPerYear: string;
  /** we set block count in 24 hrs */
  epochNumBlocks: string;
  /** maximum eden allocation per day that won't exceed 30% apr */
  maxEdenPerAllocation: string;
  /** number of block intervals that distribute rewards, set from params.distribution_interval */
  distributionEpochInBlocks: string;
  /** current epoch in block number */
  currentEpochInBlocks: string;
}
export interface IncentiveInfoProtoMsg {
  typeUrl: "/elys.incentive.IncentiveInfo";
  value: Uint8Array;
}
/** Incentive Info */
export interface IncentiveInfoAmino {
  /** reward amount in eden for 1 year */
  eden_amount_per_year: string;
  /** starting block height of the distribution */
  distribution_start_block: string;
  /** distribution duration - block number per year */
  total_blocks_per_year: string;
  /** we set block count in 24 hrs */
  epoch_num_blocks: string;
  /** maximum eden allocation per day that won't exceed 30% apr */
  max_eden_per_allocation: string;
  /** number of block intervals that distribute rewards, set from params.distribution_interval */
  distribution_epoch_in_blocks: string;
  /** current epoch in block number */
  current_epoch_in_blocks: string;
}
export interface IncentiveInfoAminoMsg {
  type: "/elys.incentive.IncentiveInfo";
  value: IncentiveInfoAmino;
}
/** Incentive Info */
export interface IncentiveInfoSDKType {
  eden_amount_per_year: string;
  distribution_start_block: string;
  total_blocks_per_year: string;
  epoch_num_blocks: string;
  max_eden_per_allocation: string;
  distribution_epoch_in_blocks: string;
  current_epoch_in_blocks: string;
}
function createBaseIncentiveInfo(): IncentiveInfo {
  return {
    edenAmountPerYear: "",
    distributionStartBlock: "",
    totalBlocksPerYear: "",
    epochNumBlocks: "",
    maxEdenPerAllocation: "",
    distributionEpochInBlocks: "",
    currentEpochInBlocks: ""
  };
}
export const IncentiveInfo = {
  typeUrl: "/elys.incentive.IncentiveInfo",
  encode(message: IncentiveInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.edenAmountPerYear !== "") {
      writer.uint32(10).string(message.edenAmountPerYear);
    }
    if (message.distributionStartBlock !== "") {
      writer.uint32(18).string(message.distributionStartBlock);
    }
    if (message.totalBlocksPerYear !== "") {
      writer.uint32(26).string(message.totalBlocksPerYear);
    }
    if (message.epochNumBlocks !== "") {
      writer.uint32(34).string(message.epochNumBlocks);
    }
    if (message.maxEdenPerAllocation !== "") {
      writer.uint32(42).string(message.maxEdenPerAllocation);
    }
    if (message.distributionEpochInBlocks !== "") {
      writer.uint32(50).string(message.distributionEpochInBlocks);
    }
    if (message.currentEpochInBlocks !== "") {
      writer.uint32(58).string(message.currentEpochInBlocks);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentiveInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.edenAmountPerYear = reader.string();
          break;
        case 2:
          message.distributionStartBlock = reader.string();
          break;
        case 3:
          message.totalBlocksPerYear = reader.string();
          break;
        case 4:
          message.epochNumBlocks = reader.string();
          break;
        case 5:
          message.maxEdenPerAllocation = reader.string();
          break;
        case 6:
          message.distributionEpochInBlocks = reader.string();
          break;
        case 7:
          message.currentEpochInBlocks = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IncentiveInfo>): IncentiveInfo {
    const message = createBaseIncentiveInfo();
    message.edenAmountPerYear = object.edenAmountPerYear ?? "";
    message.distributionStartBlock = object.distributionStartBlock ?? "";
    message.totalBlocksPerYear = object.totalBlocksPerYear ?? "";
    message.epochNumBlocks = object.epochNumBlocks ?? "";
    message.maxEdenPerAllocation = object.maxEdenPerAllocation ?? "";
    message.distributionEpochInBlocks = object.distributionEpochInBlocks ?? "";
    message.currentEpochInBlocks = object.currentEpochInBlocks ?? "";
    return message;
  },
  fromAmino(object: IncentiveInfoAmino): IncentiveInfo {
    return {
      edenAmountPerYear: object.eden_amount_per_year,
      distributionStartBlock: object.distribution_start_block,
      totalBlocksPerYear: object.total_blocks_per_year,
      epochNumBlocks: object.epoch_num_blocks,
      maxEdenPerAllocation: object.max_eden_per_allocation,
      distributionEpochInBlocks: object.distribution_epoch_in_blocks,
      currentEpochInBlocks: object.current_epoch_in_blocks
    };
  },
  toAmino(message: IncentiveInfo): IncentiveInfoAmino {
    const obj: any = {};
    obj.eden_amount_per_year = message.edenAmountPerYear;
    obj.distribution_start_block = message.distributionStartBlock;
    obj.total_blocks_per_year = message.totalBlocksPerYear;
    obj.epoch_num_blocks = message.epochNumBlocks;
    obj.max_eden_per_allocation = message.maxEdenPerAllocation;
    obj.distribution_epoch_in_blocks = message.distributionEpochInBlocks;
    obj.current_epoch_in_blocks = message.currentEpochInBlocks;
    return obj;
  },
  fromAminoMsg(object: IncentiveInfoAminoMsg): IncentiveInfo {
    return IncentiveInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: IncentiveInfoProtoMsg): IncentiveInfo {
    return IncentiveInfo.decode(message.value);
  },
  toProto(message: IncentiveInfo): Uint8Array {
    return IncentiveInfo.encode(message).finish();
  },
  toProtoMsg(message: IncentiveInfo): IncentiveInfoProtoMsg {
    return {
      typeUrl: "/elys.incentive.IncentiveInfo",
      value: IncentiveInfo.encode(message).finish()
    };
  }
};