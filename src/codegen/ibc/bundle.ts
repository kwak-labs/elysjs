import * as _200 from "./applications/transfer/v1/genesis";
import * as _201 from "./applications/transfer/v1/query";
import * as _202 from "./applications/transfer/v1/transfer";
import * as _203 from "./applications/transfer/v1/tx";
import * as _204 from "./applications/transfer/v2/packet";
import * as _205 from "./core/channel/v1/channel";
import * as _206 from "./core/channel/v1/genesis";
import * as _207 from "./core/channel/v1/query";
import * as _208 from "./core/channel/v1/tx";
import * as _209 from "./core/client/v1/client";
import * as _210 from "./core/client/v1/genesis";
import * as _211 from "./core/client/v1/query";
import * as _212 from "./core/client/v1/tx";
import * as _213 from "./core/commitment/v1/commitment";
import * as _214 from "./core/connection/v1/connection";
import * as _215 from "./core/connection/v1/genesis";
import * as _216 from "./core/connection/v1/query";
import * as _217 from "./core/connection/v1/tx";
import * as _218 from "./core/port/v1/query";
import * as _219 from "./core/types/v1/genesis";
import * as _220 from "./lightclients/localhost/v1/localhost";
import * as _221 from "./lightclients/solomachine/v1/solomachine";
import * as _222 from "./lightclients/solomachine/v2/solomachine";
import * as _223 from "./lightclients/tendermint/v1/tendermint";
import * as _377 from "./applications/transfer/v1/tx.amino";
import * as _378 from "./core/channel/v1/tx.amino";
import * as _379 from "./core/client/v1/tx.amino";
import * as _380 from "./core/connection/v1/tx.amino";
import * as _381 from "./applications/transfer/v1/tx.registry";
import * as _382 from "./core/channel/v1/tx.registry";
import * as _383 from "./core/client/v1/tx.registry";
import * as _384 from "./core/connection/v1/tx.registry";
import * as _385 from "./applications/transfer/v1/query.lcd";
import * as _386 from "./core/channel/v1/query.lcd";
import * as _387 from "./core/client/v1/query.lcd";
import * as _388 from "./core/connection/v1/query.lcd";
import * as _389 from "./applications/transfer/v1/query.rpc.Query";
import * as _390 from "./core/channel/v1/query.rpc.Query";
import * as _391 from "./core/client/v1/query.rpc.Query";
import * as _392 from "./core/connection/v1/query.rpc.Query";
import * as _393 from "./core/port/v1/query.rpc.Query";
import * as _394 from "./applications/transfer/v1/tx.rpc.msg";
import * as _395 from "./core/channel/v1/tx.rpc.msg";
import * as _396 from "./core/client/v1/tx.rpc.msg";
import * as _397 from "./core/connection/v1/tx.rpc.msg";
import * as _407 from "./lcd";
import * as _408 from "./rpc.query";
import * as _409 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._200,
        ..._201,
        ..._202,
        ..._203,
        ..._377,
        ..._381,
        ..._385,
        ..._389,
        ..._394
      };
      export const v2 = {
        ..._204
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._205,
        ..._206,
        ..._207,
        ..._208,
        ..._378,
        ..._382,
        ..._386,
        ..._390,
        ..._395
      };
    }
    export namespace client {
      export const v1 = {
        ..._209,
        ..._210,
        ..._211,
        ..._212,
        ..._379,
        ..._383,
        ..._387,
        ..._391,
        ..._396
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._213
      };
    }
    export namespace connection {
      export const v1 = {
        ..._214,
        ..._215,
        ..._216,
        ..._217,
        ..._380,
        ..._384,
        ..._388,
        ..._392,
        ..._397
      };
    }
    export namespace port {
      export const v1 = {
        ..._218,
        ..._393
      };
    }
    export namespace types {
      export const v1 = {
        ..._219
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._220
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._221
      };
      export const v2 = {
        ..._222
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._223
      };
    }
  }
  export const ClientFactory = {
    ..._407,
    ..._408,
    ..._409
  };
}