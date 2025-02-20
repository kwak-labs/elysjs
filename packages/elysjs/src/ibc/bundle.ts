//@ts-nocheck
import * as _212 from "./applications/transfer/v1/genesis";
import * as _213 from "./applications/transfer/v1/query";
import * as _214 from "./applications/transfer/v1/transfer";
import * as _215 from "./applications/transfer/v1/tx";
import * as _216 from "./applications/transfer/v2/packet";
import * as _217 from "./core/channel/v1/channel";
import * as _218 from "./core/channel/v1/genesis";
import * as _219 from "./core/channel/v1/query";
import * as _220 from "./core/channel/v1/tx";
import * as _221 from "./core/client/v1/client";
import * as _222 from "./core/client/v1/genesis";
import * as _223 from "./core/client/v1/query";
import * as _224 from "./core/client/v1/tx";
import * as _225 from "./core/commitment/v1/commitment";
import * as _226 from "./core/connection/v1/connection";
import * as _227 from "./core/connection/v1/genesis";
import * as _228 from "./core/connection/v1/query";
import * as _229 from "./core/connection/v1/tx";
import * as _230 from "./core/port/v1/query";
import * as _231 from "./core/types/v1/genesis";
import * as _232 from "./lightclients/localhost/v1/localhost";
import * as _233 from "./lightclients/solomachine/v1/solomachine";
import * as _234 from "./lightclients/solomachine/v2/solomachine";
import * as _235 from "./lightclients/tendermint/v1/tendermint";
import * as _370 from "./applications/transfer/v1/tx.amino";
import * as _371 from "./core/channel/v1/tx.amino";
import * as _372 from "./core/client/v1/tx.amino";
import * as _373 from "./core/connection/v1/tx.amino";
import * as _374 from "./applications/transfer/v1/tx.registry";
import * as _375 from "./core/channel/v1/tx.registry";
import * as _376 from "./core/client/v1/tx.registry";
import * as _377 from "./core/connection/v1/tx.registry";
import * as _378 from "./applications/transfer/v1/query.rpc.Query";
import * as _379 from "./core/channel/v1/query.rpc.Query";
import * as _380 from "./core/client/v1/query.rpc.Query";
import * as _381 from "./core/connection/v1/query.rpc.Query";
import * as _382 from "./core/port/v1/query.rpc.Query";
import * as _383 from "./applications/transfer/v1/tx.rpc.msg";
import * as _384 from "./core/channel/v1/tx.rpc.msg";
import * as _385 from "./core/client/v1/tx.rpc.msg";
import * as _386 from "./core/connection/v1/tx.rpc.msg";
import * as _393 from "./rpc.query";
import * as _394 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._212,
        ..._213,
        ..._214,
        ..._215,
        ..._370,
        ..._374,
        ..._378,
        ..._383
      };
      export const v2 = {
        ..._216
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._217,
        ..._218,
        ..._219,
        ..._220,
        ..._371,
        ..._375,
        ..._379,
        ..._384
      };
    }
    export namespace client {
      export const v1 = {
        ..._221,
        ..._222,
        ..._223,
        ..._224,
        ..._372,
        ..._376,
        ..._380,
        ..._385
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._225
      };
    }
    export namespace connection {
      export const v1 = {
        ..._226,
        ..._227,
        ..._228,
        ..._229,
        ..._373,
        ..._377,
        ..._381,
        ..._386
      };
    }
    export namespace port {
      export const v1 = {
        ..._230,
        ..._382
      };
    }
    export namespace types {
      export const v1 = {
        ..._231
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._232
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._233
      };
      export const v2 = {
        ..._234
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._235
      };
    }
  }
  export const ClientFactory = {
    ..._393,
    ..._394
  };
}