import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Params {
  /** Set the status to active to indicate that the contract is to be executed in begin blocker. */
  isExecutionEnabled: boolean;
  /** registry_contract is the address of the registry contract that will be used to register contract executions in begin blocker. */
  registryContract: string;
  /** Maximum aggregate total gas to be used for the contract executions in the BeginBlocker. */
  maxBeginBlockTotalGas: bigint;
  /** the maximum gas limit each individual contract can consume in the BeginBlocker. */
  maxContractGasLimit: bigint;
  /** min_gas_price defines the minimum gas price the contracts must pay to be executed in the BeginBlocker. */
  minGasPrice: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/injective.wasmx.v1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  /** Set the status to active to indicate that the contract is to be executed in begin blocker. */
  is_execution_enabled: boolean;
  /** registry_contract is the address of the registry contract that will be used to register contract executions in begin blocker. */
  registry_contract: string;
  /** Maximum aggregate total gas to be used for the contract executions in the BeginBlocker. */
  max_begin_block_total_gas: string;
  /** the maximum gas limit each individual contract can consume in the BeginBlocker. */
  max_contract_gas_limit: string;
  /** min_gas_price defines the minimum gas price the contracts must pay to be executed in the BeginBlocker. */
  min_gas_price: string;
}
export interface ParamsAminoMsg {
  type: "/injective.wasmx.v1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  is_execution_enabled: boolean;
  registry_contract: string;
  max_begin_block_total_gas: bigint;
  max_contract_gas_limit: bigint;
  min_gas_price: string;
}
export interface ContractRegistrationRequestProposal {
  title: string;
  description: string;
  contractRegistrationRequest: ContractRegistrationRequest;
}
export interface ContractRegistrationRequestProposalProtoMsg {
  typeUrl: "/injective.wasmx.v1.ContractRegistrationRequestProposal";
  value: Uint8Array;
}
export interface ContractRegistrationRequestProposalAmino {
  title: string;
  description: string;
  contract_registration_request?: ContractRegistrationRequestAmino;
}
export interface ContractRegistrationRequestProposalAminoMsg {
  type: "/injective.wasmx.v1.ContractRegistrationRequestProposal";
  value: ContractRegistrationRequestProposalAmino;
}
export interface ContractRegistrationRequestProposalSDKType {
  title: string;
  description: string;
  contract_registration_request: ContractRegistrationRequestSDKType;
}
export interface BatchContractRegistrationRequestProposal {
  title: string;
  description: string;
  contractRegistrationRequests: ContractRegistrationRequest[];
}
export interface BatchContractRegistrationRequestProposalProtoMsg {
  typeUrl: "/injective.wasmx.v1.BatchContractRegistrationRequestProposal";
  value: Uint8Array;
}
export interface BatchContractRegistrationRequestProposalAmino {
  title: string;
  description: string;
  contract_registration_requests: ContractRegistrationRequestAmino[];
}
export interface BatchContractRegistrationRequestProposalAminoMsg {
  type: "/injective.wasmx.v1.BatchContractRegistrationRequestProposal";
  value: BatchContractRegistrationRequestProposalAmino;
}
export interface BatchContractRegistrationRequestProposalSDKType {
  title: string;
  description: string;
  contract_registration_requests: ContractRegistrationRequestSDKType[];
}
export interface ContractRegistrationRequest {
  /** Unique Identifier for contract instance to be registered. */
  contractAddress: string;
  /** Maximum gas to be used for the smart contract execution. */
  gasLimit: bigint;
  /** gas price to be used for the smart contract execution. */
  gasPrice: string;
  pinContract: boolean;
}
export interface ContractRegistrationRequestProtoMsg {
  typeUrl: "/injective.wasmx.v1.ContractRegistrationRequest";
  value: Uint8Array;
}
export interface ContractRegistrationRequestAmino {
  /** Unique Identifier for contract instance to be registered. */
  contract_address: string;
  /** Maximum gas to be used for the smart contract execution. */
  gas_limit: string;
  /** gas price to be used for the smart contract execution. */
  gas_price: string;
  pin_contract: boolean;
}
export interface ContractRegistrationRequestAminoMsg {
  type: "/injective.wasmx.v1.ContractRegistrationRequest";
  value: ContractRegistrationRequestAmino;
}
export interface ContractRegistrationRequestSDKType {
  contract_address: string;
  gas_limit: bigint;
  gas_price: string;
  pin_contract: boolean;
}
function createBaseParams(): Params {
  return {
    isExecutionEnabled: false,
    registryContract: "",
    maxBeginBlockTotalGas: BigInt(0),
    maxContractGasLimit: BigInt(0),
    minGasPrice: ""
  };
}
export const Params = {
  typeUrl: "/injective.wasmx.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isExecutionEnabled === true) {
      writer.uint32(8).bool(message.isExecutionEnabled);
    }
    if (message.registryContract !== "") {
      writer.uint32(18).string(message.registryContract);
    }
    if (message.maxBeginBlockTotalGas !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxBeginBlockTotalGas);
    }
    if (message.maxContractGasLimit !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxContractGasLimit);
    }
    if (message.minGasPrice !== "") {
      writer.uint32(42).string(message.minGasPrice);
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
          message.isExecutionEnabled = reader.bool();
          break;
        case 2:
          message.registryContract = reader.string();
          break;
        case 3:
          message.maxBeginBlockTotalGas = reader.uint64();
          break;
        case 4:
          message.maxContractGasLimit = reader.uint64();
          break;
        case 5:
          message.minGasPrice = reader.string();
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
    message.isExecutionEnabled = object.isExecutionEnabled ?? false;
    message.registryContract = object.registryContract ?? "";
    message.maxBeginBlockTotalGas = object.maxBeginBlockTotalGas !== undefined && object.maxBeginBlockTotalGas !== null ? BigInt(object.maxBeginBlockTotalGas.toString()) : BigInt(0);
    message.maxContractGasLimit = object.maxContractGasLimit !== undefined && object.maxContractGasLimit !== null ? BigInt(object.maxContractGasLimit.toString()) : BigInt(0);
    message.minGasPrice = object.minGasPrice ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      isExecutionEnabled: object.is_execution_enabled,
      registryContract: object.registry_contract,
      maxBeginBlockTotalGas: BigInt(object.max_begin_block_total_gas),
      maxContractGasLimit: BigInt(object.max_contract_gas_limit),
      minGasPrice: object.min_gas_price
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.is_execution_enabled = message.isExecutionEnabled;
    obj.registry_contract = message.registryContract;
    obj.max_begin_block_total_gas = message.maxBeginBlockTotalGas ? message.maxBeginBlockTotalGas.toString() : undefined;
    obj.max_contract_gas_limit = message.maxContractGasLimit ? message.maxContractGasLimit.toString() : undefined;
    obj.min_gas_price = message.minGasPrice;
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
      typeUrl: "/injective.wasmx.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseContractRegistrationRequestProposal(): ContractRegistrationRequestProposal {
  return {
    title: "",
    description: "",
    contractRegistrationRequest: ContractRegistrationRequest.fromPartial({})
  };
}
export const ContractRegistrationRequestProposal = {
  typeUrl: "/injective.wasmx.v1.ContractRegistrationRequestProposal",
  encode(message: ContractRegistrationRequestProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contractRegistrationRequest !== undefined) {
      ContractRegistrationRequest.encode(message.contractRegistrationRequest, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractRegistrationRequestProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractRegistrationRequestProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contractRegistrationRequest = ContractRegistrationRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ContractRegistrationRequestProposal>): ContractRegistrationRequestProposal {
    const message = createBaseContractRegistrationRequestProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contractRegistrationRequest = object.contractRegistrationRequest !== undefined && object.contractRegistrationRequest !== null ? ContractRegistrationRequest.fromPartial(object.contractRegistrationRequest) : undefined;
    return message;
  },
  fromAmino(object: ContractRegistrationRequestProposalAmino): ContractRegistrationRequestProposal {
    return {
      title: object.title,
      description: object.description,
      contractRegistrationRequest: object?.contract_registration_request ? ContractRegistrationRequest.fromAmino(object.contract_registration_request) : undefined
    };
  },
  toAmino(message: ContractRegistrationRequestProposal): ContractRegistrationRequestProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.contract_registration_request = message.contractRegistrationRequest ? ContractRegistrationRequest.toAmino(message.contractRegistrationRequest) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractRegistrationRequestProposalAminoMsg): ContractRegistrationRequestProposal {
    return ContractRegistrationRequestProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractRegistrationRequestProposalProtoMsg): ContractRegistrationRequestProposal {
    return ContractRegistrationRequestProposal.decode(message.value);
  },
  toProto(message: ContractRegistrationRequestProposal): Uint8Array {
    return ContractRegistrationRequestProposal.encode(message).finish();
  },
  toProtoMsg(message: ContractRegistrationRequestProposal): ContractRegistrationRequestProposalProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.ContractRegistrationRequestProposal",
      value: ContractRegistrationRequestProposal.encode(message).finish()
    };
  }
};
function createBaseBatchContractRegistrationRequestProposal(): BatchContractRegistrationRequestProposal {
  return {
    title: "",
    description: "",
    contractRegistrationRequests: []
  };
}
export const BatchContractRegistrationRequestProposal = {
  typeUrl: "/injective.wasmx.v1.BatchContractRegistrationRequestProposal",
  encode(message: BatchContractRegistrationRequestProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.contractRegistrationRequests) {
      ContractRegistrationRequest.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchContractRegistrationRequestProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchContractRegistrationRequestProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contractRegistrationRequests.push(ContractRegistrationRequest.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BatchContractRegistrationRequestProposal>): BatchContractRegistrationRequestProposal {
    const message = createBaseBatchContractRegistrationRequestProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contractRegistrationRequests = object.contractRegistrationRequests?.map(e => ContractRegistrationRequest.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BatchContractRegistrationRequestProposalAmino): BatchContractRegistrationRequestProposal {
    return {
      title: object.title,
      description: object.description,
      contractRegistrationRequests: Array.isArray(object?.contract_registration_requests) ? object.contract_registration_requests.map((e: any) => ContractRegistrationRequest.fromAmino(e)) : []
    };
  },
  toAmino(message: BatchContractRegistrationRequestProposal): BatchContractRegistrationRequestProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.contractRegistrationRequests) {
      obj.contract_registration_requests = message.contractRegistrationRequests.map(e => e ? ContractRegistrationRequest.toAmino(e) : undefined);
    } else {
      obj.contract_registration_requests = [];
    }
    return obj;
  },
  fromAminoMsg(object: BatchContractRegistrationRequestProposalAminoMsg): BatchContractRegistrationRequestProposal {
    return BatchContractRegistrationRequestProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchContractRegistrationRequestProposalProtoMsg): BatchContractRegistrationRequestProposal {
    return BatchContractRegistrationRequestProposal.decode(message.value);
  },
  toProto(message: BatchContractRegistrationRequestProposal): Uint8Array {
    return BatchContractRegistrationRequestProposal.encode(message).finish();
  },
  toProtoMsg(message: BatchContractRegistrationRequestProposal): BatchContractRegistrationRequestProposalProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.BatchContractRegistrationRequestProposal",
      value: BatchContractRegistrationRequestProposal.encode(message).finish()
    };
  }
};
function createBaseContractRegistrationRequest(): ContractRegistrationRequest {
  return {
    contractAddress: "",
    gasLimit: BigInt(0),
    gasPrice: "",
    pinContract: false
  };
}
export const ContractRegistrationRequest = {
  typeUrl: "/injective.wasmx.v1.ContractRegistrationRequest",
  encode(message: ContractRegistrationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.gasLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.gasLimit);
    }
    if (message.gasPrice !== "") {
      writer.uint32(26).string(message.gasPrice);
    }
    if (message.pinContract === true) {
      writer.uint32(32).bool(message.pinContract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractRegistrationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractRegistrationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.gasLimit = reader.uint64();
          break;
        case 3:
          message.gasPrice = reader.string();
          break;
        case 4:
          message.pinContract = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ContractRegistrationRequest>): ContractRegistrationRequest {
    const message = createBaseContractRegistrationRequest();
    message.contractAddress = object.contractAddress ?? "";
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
    message.gasPrice = object.gasPrice ?? "";
    message.pinContract = object.pinContract ?? false;
    return message;
  },
  fromAmino(object: ContractRegistrationRequestAmino): ContractRegistrationRequest {
    return {
      contractAddress: object.contract_address,
      gasLimit: BigInt(object.gas_limit),
      gasPrice: object.gas_price,
      pinContract: object.pin_contract
    };
  },
  toAmino(message: ContractRegistrationRequest): ContractRegistrationRequestAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.gas_limit = message.gasLimit ? message.gasLimit.toString() : undefined;
    obj.gas_price = message.gasPrice;
    obj.pin_contract = message.pinContract;
    return obj;
  },
  fromAminoMsg(object: ContractRegistrationRequestAminoMsg): ContractRegistrationRequest {
    return ContractRegistrationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractRegistrationRequestProtoMsg): ContractRegistrationRequest {
    return ContractRegistrationRequest.decode(message.value);
  },
  toProto(message: ContractRegistrationRequest): Uint8Array {
    return ContractRegistrationRequest.encode(message).finish();
  },
  toProtoMsg(message: ContractRegistrationRequest): ContractRegistrationRequestProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.ContractRegistrationRequest",
      value: ContractRegistrationRequest.encode(message).finish()
    };
  }
};