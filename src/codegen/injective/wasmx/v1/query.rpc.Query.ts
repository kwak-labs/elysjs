import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves wasmx params */
  wasmxParams(request?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponse>;
  /** Retrieves the entire wasmx module's state */
  wasmxModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.wasmxParams = this.wasmxParams.bind(this);
    this.wasmxModuleState = this.wasmxModuleState.bind(this);
  }
  wasmxParams(request: QueryWasmxParamsRequest = {}): Promise<QueryWasmxParamsResponse> {
    const data = QueryWasmxParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Query", "WasmxParams", data);
    return promise.then(data => QueryWasmxParamsResponse.decode(new BinaryReader(data)));
  }
  wasmxModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Query", "WasmxModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    wasmxParams(request?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponse> {
      return queryService.wasmxParams(request);
    },
    wasmxModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.wasmxModuleState(request);
    }
  };
};