//@ts-nocheck
import * as _65 from "./wasm/v1/authz";
import * as _66 from "./wasm/v1/genesis";
import * as _67 from "./wasm/v1/ibc";
import * as _68 from "./wasm/v1/proposal";
import * as _69 from "./wasm/v1/query";
import * as _70 from "./wasm/v1/tx";
import * as _71 from "./wasm/v1/types";
import * as _255 from "./wasm/v1/tx.amino";
import * as _256 from "./wasm/v1/tx.registry";
import * as _257 from "./wasm/v1/query.rpc.Query";
import * as _258 from "./wasm/v1/tx.rpc.msg";
import * as _336 from "./rpc.query";
import * as _337 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._255,
      ..._256,
      ..._257,
      ..._258
    };
  }
  export const ClientFactory = {
    ..._336,
    ..._337
  };
}