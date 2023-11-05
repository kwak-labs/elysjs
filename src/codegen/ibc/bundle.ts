import * as _202 from "./applications/transfer/v1/genesis";
import * as _203 from "./applications/transfer/v1/query";
import * as _204 from "./applications/transfer/v1/transfer";
import * as _205 from "./applications/transfer/v1/tx";
import * as _206 from "./applications/transfer/v2/packet";
import * as _207 from "./core/channel/v1/channel";
import * as _208 from "./core/channel/v1/genesis";
import * as _209 from "./core/channel/v1/query";
import * as _210 from "./core/channel/v1/tx";
import * as _211 from "./core/client/v1/client";
import * as _212 from "./core/client/v1/genesis";
import * as _213 from "./core/client/v1/query";
import * as _214 from "./core/client/v1/tx";
import * as _215 from "./core/commitment/v1/commitment";
import * as _216 from "./core/connection/v1/connection";
import * as _217 from "./core/connection/v1/genesis";
import * as _218 from "./core/connection/v1/query";
import * as _219 from "./core/connection/v1/tx";
import * as _220 from "./core/port/v1/query";
import * as _221 from "./core/types/v1/genesis";
import * as _222 from "./lightclients/localhost/v1/localhost";
import * as _223 from "./lightclients/solomachine/v1/solomachine";
import * as _224 from "./lightclients/solomachine/v2/solomachine";
import * as _225 from "./lightclients/tendermint/v1/tendermint";
import * as _381 from "./applications/transfer/v1/tx.amino";
import * as _382 from "./core/channel/v1/tx.amino";
import * as _383 from "./core/client/v1/tx.amino";
import * as _384 from "./core/connection/v1/tx.amino";
import * as _385 from "./applications/transfer/v1/tx.registry";
import * as _386 from "./core/channel/v1/tx.registry";
import * as _387 from "./core/client/v1/tx.registry";
import * as _388 from "./core/connection/v1/tx.registry";
import * as _389 from "./applications/transfer/v1/query.lcd";
import * as _390 from "./core/channel/v1/query.lcd";
import * as _391 from "./core/client/v1/query.lcd";
import * as _392 from "./core/connection/v1/query.lcd";
import * as _393 from "./applications/transfer/v1/query.rpc.Query";
import * as _394 from "./core/channel/v1/query.rpc.Query";
import * as _395 from "./core/client/v1/query.rpc.Query";
import * as _396 from "./core/connection/v1/query.rpc.Query";
import * as _397 from "./core/port/v1/query.rpc.Query";
import * as _398 from "./applications/transfer/v1/tx.rpc.msg";
import * as _399 from "./core/channel/v1/tx.rpc.msg";
import * as _400 from "./core/client/v1/tx.rpc.msg";
import * as _401 from "./core/connection/v1/tx.rpc.msg";
import * as _411 from "./lcd";
import * as _412 from "./rpc.query";
import * as _413 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._202,
        ..._203,
        ..._204,
        ..._205,
        ..._381,
        ..._385,
        ..._389,
        ..._393,
        ..._398
      };
      export const v2 = {
        ..._206
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._207,
        ..._208,
        ..._209,
        ..._210,
        ..._382,
        ..._386,
        ..._390,
        ..._394,
        ..._399
      };
    }
    export namespace client {
      export const v1 = {
        ..._211,
        ..._212,
        ..._213,
        ..._214,
        ..._383,
        ..._387,
        ..._391,
        ..._395,
        ..._400
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._215
      };
    }
    export namespace connection {
      export const v1 = {
        ..._216,
        ..._217,
        ..._218,
        ..._219,
        ..._384,
        ..._388,
        ..._392,
        ..._396,
        ..._401
      };
    }
    export namespace port {
      export const v1 = {
        ..._220,
        ..._397
      };
    }
    export namespace types {
      export const v1 = {
        ..._221
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._222
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._223
      };
      export const v2 = {
        ..._224
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._225
      };
    }
  }
  export const ClientFactory = {
    ..._411,
    ..._412,
    ..._413
  };
}