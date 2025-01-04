//@ts-nocheck
import * as _211 from "./applications/transfer/v1/genesis";
import * as _212 from "./applications/transfer/v1/query";
import * as _213 from "./applications/transfer/v1/transfer";
import * as _214 from "./applications/transfer/v1/tx";
import * as _215 from "./applications/transfer/v2/packet";
import * as _216 from "./core/channel/v1/channel";
import * as _217 from "./core/channel/v1/genesis";
import * as _218 from "./core/channel/v1/query";
import * as _219 from "./core/channel/v1/tx";
import * as _220 from "./core/client/v1/client";
import * as _221 from "./core/client/v1/genesis";
import * as _222 from "./core/client/v1/query";
import * as _223 from "./core/client/v1/tx";
import * as _224 from "./core/commitment/v1/commitment";
import * as _225 from "./core/connection/v1/connection";
import * as _226 from "./core/connection/v1/genesis";
import * as _227 from "./core/connection/v1/query";
import * as _228 from "./core/connection/v1/tx";
import * as _229 from "./core/port/v1/query";
import * as _230 from "./core/types/v1/genesis";
import * as _231 from "./lightclients/localhost/v1/localhost";
import * as _232 from "./lightclients/solomachine/v1/solomachine";
import * as _233 from "./lightclients/solomachine/v2/solomachine";
import * as _234 from "./lightclients/tendermint/v1/tendermint";
import * as _369 from "./applications/transfer/v1/tx.amino";
import * as _370 from "./core/channel/v1/tx.amino";
import * as _371 from "./core/client/v1/tx.amino";
import * as _372 from "./core/connection/v1/tx.amino";
import * as _373 from "./applications/transfer/v1/tx.registry";
import * as _374 from "./core/channel/v1/tx.registry";
import * as _375 from "./core/client/v1/tx.registry";
import * as _376 from "./core/connection/v1/tx.registry";
import * as _377 from "./applications/transfer/v1/query.rpc.Query";
import * as _378 from "./core/channel/v1/query.rpc.Query";
import * as _379 from "./core/client/v1/query.rpc.Query";
import * as _380 from "./core/connection/v1/query.rpc.Query";
import * as _381 from "./core/port/v1/query.rpc.Query";
import * as _382 from "./applications/transfer/v1/tx.rpc.msg";
import * as _383 from "./core/channel/v1/tx.rpc.msg";
import * as _384 from "./core/client/v1/tx.rpc.msg";
import * as _385 from "./core/connection/v1/tx.rpc.msg";
import * as _392 from "./rpc.query";
import * as _393 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._211,
        ..._212,
        ..._213,
        ..._214,
        ..._369,
        ..._373,
        ..._377,
        ..._382
      };
      export const v2 = {
        ..._215
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._216,
        ..._217,
        ..._218,
        ..._219,
        ..._370,
        ..._374,
        ..._378,
        ..._383
      };
    }
    export namespace client {
      export const v1 = {
        ..._220,
        ..._221,
        ..._222,
        ..._223,
        ..._371,
        ..._375,
        ..._379,
        ..._384
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._224
      };
    }
    export namespace connection {
      export const v1 = {
        ..._225,
        ..._226,
        ..._227,
        ..._228,
        ..._372,
        ..._376,
        ..._380,
        ..._385
      };
    }
    export namespace port {
      export const v1 = {
        ..._229,
        ..._381
      };
    }
    export namespace types {
      export const v1 = {
        ..._230
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._231
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._232
      };
      export const v2 = {
        ..._233
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._234
      };
    }
  }
  export const ClientFactory = {
    ..._392,
    ..._393
  };
}