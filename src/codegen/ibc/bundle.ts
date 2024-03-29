import * as _198 from "./applications/transfer/v1/genesis";
import * as _199 from "./applications/transfer/v1/query";
import * as _200 from "./applications/transfer/v1/transfer";
import * as _201 from "./applications/transfer/v1/tx";
import * as _202 from "./applications/transfer/v2/packet";
import * as _203 from "./core/channel/v1/channel";
import * as _204 from "./core/channel/v1/genesis";
import * as _205 from "./core/channel/v1/query";
import * as _206 from "./core/channel/v1/tx";
import * as _207 from "./core/client/v1/client";
import * as _208 from "./core/client/v1/genesis";
import * as _209 from "./core/client/v1/query";
import * as _210 from "./core/client/v1/tx";
import * as _211 from "./core/commitment/v1/commitment";
import * as _212 from "./core/connection/v1/connection";
import * as _213 from "./core/connection/v1/genesis";
import * as _214 from "./core/connection/v1/query";
import * as _215 from "./core/connection/v1/tx";
import * as _216 from "./core/port/v1/query";
import * as _217 from "./core/types/v1/genesis";
import * as _218 from "./lightclients/localhost/v1/localhost";
import * as _219 from "./lightclients/solomachine/v1/solomachine";
import * as _220 from "./lightclients/solomachine/v2/solomachine";
import * as _221 from "./lightclients/tendermint/v1/tendermint";
import * as _378 from "./applications/transfer/v1/tx.amino";
import * as _379 from "./core/channel/v1/tx.amino";
import * as _380 from "./core/client/v1/tx.amino";
import * as _381 from "./core/connection/v1/tx.amino";
import * as _382 from "./applications/transfer/v1/tx.registry";
import * as _383 from "./core/channel/v1/tx.registry";
import * as _384 from "./core/client/v1/tx.registry";
import * as _385 from "./core/connection/v1/tx.registry";
import * as _386 from "./applications/transfer/v1/query.lcd";
import * as _387 from "./core/channel/v1/query.lcd";
import * as _388 from "./core/client/v1/query.lcd";
import * as _389 from "./core/connection/v1/query.lcd";
import * as _390 from "./applications/transfer/v1/query.rpc.Query";
import * as _391 from "./core/channel/v1/query.rpc.Query";
import * as _392 from "./core/client/v1/query.rpc.Query";
import * as _393 from "./core/connection/v1/query.rpc.Query";
import * as _394 from "./core/port/v1/query.rpc.Query";
import * as _395 from "./applications/transfer/v1/tx.rpc.msg";
import * as _396 from "./core/channel/v1/tx.rpc.msg";
import * as _397 from "./core/client/v1/tx.rpc.msg";
import * as _398 from "./core/connection/v1/tx.rpc.msg";
import * as _408 from "./lcd";
import * as _409 from "./rpc.query";
import * as _410 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._198,
        ..._199,
        ..._200,
        ..._201,
        ..._378,
        ..._382,
        ..._386,
        ..._390,
        ..._395
      };
      export const v2 = {
        ..._202
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._203,
        ..._204,
        ..._205,
        ..._206,
        ..._379,
        ..._383,
        ..._387,
        ..._391,
        ..._396
      };
    }
    export namespace client {
      export const v1 = {
        ..._207,
        ..._208,
        ..._209,
        ..._210,
        ..._380,
        ..._384,
        ..._388,
        ..._392,
        ..._397
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._211
      };
    }
    export namespace connection {
      export const v1 = {
        ..._212,
        ..._213,
        ..._214,
        ..._215,
        ..._381,
        ..._385,
        ..._389,
        ..._393,
        ..._398
      };
    }
    export namespace port {
      export const v1 = {
        ..._216,
        ..._394
      };
    }
    export namespace types {
      export const v1 = {
        ..._217
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._218
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._219
      };
      export const v2 = {
        ..._220
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._221
      };
    }
  }
  export const ClientFactory = {
    ..._408,
    ..._409,
    ..._410
  };
}