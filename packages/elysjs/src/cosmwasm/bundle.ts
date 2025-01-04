//@ts-nocheck
import * as _95 from "./wasm/v1/authz";
import * as _96 from "./wasm/v1/genesis";
import * as _97 from "./wasm/v1/ibc";
import * as _98 from "./wasm/v1/proposal";
import * as _99 from "./wasm/v1/query";
import * as _100 from "./wasm/v1/tx";
import * as _101 from "./wasm/v1/types";
import * as _306 from "./wasm/v1/tx.amino";
import * as _307 from "./wasm/v1/tx.registry";
import * as _308 from "./wasm/v1/query.rpc.Query";
import * as _309 from "./wasm/v1/tx.rpc.msg";
import * as _388 from "./rpc.query";
import * as _389 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._306,
      ..._307,
      ..._308,
      ..._309
    };
  }
  export const ClientFactory = {
    ..._388,
    ..._389
  };
}