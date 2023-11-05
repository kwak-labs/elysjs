import * as _95 from "./wasm/v1/authz";
import * as _96 from "./wasm/v1/genesis";
import * as _97 from "./wasm/v1/ibc";
import * as _98 from "./wasm/v1/proposal";
import * as _99 from "./wasm/v1/query";
import * as _100 from "./wasm/v1/tx";
import * as _101 from "./wasm/v1/types";
import * as _356 from "./wasm/v1/tx.amino";
import * as _357 from "./wasm/v1/tx.registry";
import * as _358 from "./wasm/v1/query.lcd";
import * as _359 from "./wasm/v1/query.rpc.Query";
import * as _360 from "./wasm/v1/tx.rpc.msg";
import * as _479 from "./lcd";
import * as _480 from "./rpc.query";
import * as _481 from "./rpc.tx";
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
      ..._356,
      ..._357,
      ..._358,
      ..._359,
      ..._360
    };
  }
  export const ClientFactory = {
    ..._479,
    ..._480,
    ..._481
  };
}