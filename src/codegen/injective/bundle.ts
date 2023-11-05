import * as _226 from "./auction/v1beta1/auction";
import * as _227 from "./auction/v1beta1/genesis";
import * as _228 from "./auction/v1beta1/query";
import * as _229 from "./auction/v1beta1/tx";
import * as _230 from "./crypto/v1beta1/ethsecp256k1/keys";
import * as _231 from "./exchange/v1beta1/authz";
import * as _232 from "./exchange/v1beta1/events";
import * as _233 from "./exchange/v1beta1/exchange";
import * as _234 from "./exchange/v1beta1/genesis";
import * as _235 from "./exchange/v1beta1/query";
import * as _236 from "./exchange/v1beta1/tx";
import * as _237 from "./insurance/v1beta1/genesis";
import * as _238 from "./insurance/v1beta1/insurance";
import * as _239 from "./insurance/v1beta1/query";
import * as _240 from "./insurance/v1beta1/tx";
import * as _241 from "./ocr/v1beta1/genesis";
import * as _242 from "./ocr/v1beta1/ocr";
import * as _243 from "./ocr/v1beta1/query";
import * as _244 from "./ocr/v1beta1/tx";
import * as _245 from "./oracle/v1beta1/events";
import * as _246 from "./oracle/v1beta1/genesis";
import * as _247 from "./oracle/v1beta1/oracle";
import * as _248 from "./oracle/v1beta1/proposal";
import * as _249 from "./oracle/v1beta1/query";
import * as _250 from "./oracle/v1beta1/tx";
import * as _251 from "./peggy/v1/attestation";
import * as _252 from "./peggy/v1/batch";
import * as _253 from "./peggy/v1/ethereum_signer";
import * as _254 from "./peggy/v1/events";
import * as _255 from "./peggy/v1/genesis";
import * as _256 from "./peggy/v1/msgs";
import * as _257 from "./peggy/v1/pool";
import * as _258 from "./peggy/v1/proposal";
import * as _259 from "./peggy/v1/query";
import * as _260 from "./peggy/v1/types";
import * as _261 from "./types/v1beta1/account";
import * as _262 from "./types/v1beta1/tx_ext";
import * as _263 from "./types/v1beta1/tx_response";
import * as _264 from "./wasmx/v1/genesis";
import * as _265 from "./wasmx/v1/query";
import * as _266 from "./wasmx/v1/tx";
import * as _267 from "./wasmx/v1/wasmx";
import * as _444 from "./auction/v1beta1/tx.amino";
import * as _445 from "./exchange/v1beta1/tx.amino";
import * as _446 from "./insurance/v1beta1/tx.amino";
import * as _447 from "./ocr/v1beta1/tx.amino";
import * as _448 from "./oracle/v1beta1/tx.amino";
import * as _449 from "./peggy/v1/msgs.amino";
import * as _450 from "./auction/v1beta1/tx.registry";
import * as _451 from "./exchange/v1beta1/tx.registry";
import * as _452 from "./insurance/v1beta1/tx.registry";
import * as _453 from "./ocr/v1beta1/tx.registry";
import * as _454 from "./oracle/v1beta1/tx.registry";
import * as _455 from "./peggy/v1/msgs.registry";
import * as _456 from "./auction/v1beta1/query.lcd";
import * as _457 from "./exchange/v1beta1/query.lcd";
import * as _458 from "./insurance/v1beta1/query.lcd";
import * as _459 from "./ocr/v1beta1/query.lcd";
import * as _460 from "./oracle/v1beta1/query.lcd";
import * as _461 from "./peggy/v1/query.lcd";
import * as _462 from "./wasmx/v1/query.lcd";
import * as _463 from "./auction/v1beta1/query.rpc.Query";
import * as _464 from "./exchange/v1beta1/query.rpc.Query";
import * as _465 from "./insurance/v1beta1/query.rpc.Query";
import * as _466 from "./ocr/v1beta1/query.rpc.Query";
import * as _467 from "./oracle/v1beta1/query.rpc.Query";
import * as _468 from "./peggy/v1/query.rpc.Query";
import * as _469 from "./wasmx/v1/query.rpc.Query";
import * as _470 from "./auction/v1beta1/tx.rpc.msg";
import * as _471 from "./exchange/v1beta1/tx.rpc.msg";
import * as _472 from "./insurance/v1beta1/tx.rpc.msg";
import * as _473 from "./ocr/v1beta1/tx.rpc.msg";
import * as _474 from "./oracle/v1beta1/tx.rpc.msg";
import * as _475 from "./peggy/v1/msgs.rpc.msg";
import * as _488 from "./lcd";
import * as _489 from "./rpc.query";
import * as _490 from "./rpc.tx";
export namespace injective {
  export namespace auction {
    export const v1beta1 = {
      ..._226,
      ..._227,
      ..._228,
      ..._229,
      ..._444,
      ..._450,
      ..._456,
      ..._463,
      ..._470
    };
  }
  export namespace crypto {
    export namespace v1beta1 {
      export const ethsecp256k1 = {
        ..._230
      };
    }
  }
  export namespace exchange {
    export const v1beta1 = {
      ..._231,
      ..._232,
      ..._233,
      ..._234,
      ..._235,
      ..._236,
      ..._445,
      ..._451,
      ..._457,
      ..._464,
      ..._471
    };
  }
  export namespace insurance {
    export const v1beta1 = {
      ..._237,
      ..._238,
      ..._239,
      ..._240,
      ..._446,
      ..._452,
      ..._458,
      ..._465,
      ..._472
    };
  }
  export namespace ocr {
    export const v1beta1 = {
      ..._241,
      ..._242,
      ..._243,
      ..._244,
      ..._447,
      ..._453,
      ..._459,
      ..._466,
      ..._473
    };
  }
  export namespace oracle {
    export const v1beta1 = {
      ..._245,
      ..._246,
      ..._247,
      ..._248,
      ..._249,
      ..._250,
      ..._448,
      ..._454,
      ..._460,
      ..._467,
      ..._474
    };
  }
  export namespace peggy {
    export const v1 = {
      ..._251,
      ..._252,
      ..._253,
      ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._258,
      ..._259,
      ..._260,
      ..._449,
      ..._455,
      ..._461,
      ..._468,
      ..._475
    };
  }
  export namespace types {
    export const v1beta1 = {
      ..._261,
      ..._262,
      ..._263
    };
  }
  export namespace wasmx {
    export const v1 = {
      ..._264,
      ..._265,
      ..._266,
      ..._267,
      ..._462,
      ..._469
    };
  }
  export const ClientFactory = {
    ..._488,
    ..._489,
    ..._490
  };
}