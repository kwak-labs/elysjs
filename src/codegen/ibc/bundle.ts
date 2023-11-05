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
import * as _423 from "./applications/transfer/v1/tx.amino";
import * as _424 from "./core/channel/v1/tx.amino";
import * as _425 from "./core/client/v1/tx.amino";
import * as _426 from "./core/connection/v1/tx.amino";
import * as _427 from "./applications/transfer/v1/tx.registry";
import * as _428 from "./core/channel/v1/tx.registry";
import * as _429 from "./core/client/v1/tx.registry";
import * as _430 from "./core/connection/v1/tx.registry";
import * as _431 from "./applications/transfer/v1/query.lcd";
import * as _432 from "./core/channel/v1/query.lcd";
import * as _433 from "./core/client/v1/query.lcd";
import * as _434 from "./core/connection/v1/query.lcd";
import * as _435 from "./applications/transfer/v1/query.rpc.Query";
import * as _436 from "./core/channel/v1/query.rpc.Query";
import * as _437 from "./core/client/v1/query.rpc.Query";
import * as _438 from "./core/connection/v1/query.rpc.Query";
import * as _439 from "./core/port/v1/query.rpc.Query";
import * as _440 from "./applications/transfer/v1/tx.rpc.msg";
import * as _441 from "./core/channel/v1/tx.rpc.msg";
import * as _442 from "./core/client/v1/tx.rpc.msg";
import * as _443 from "./core/connection/v1/tx.rpc.msg";
import * as _485 from "./lcd";
import * as _486 from "./rpc.query";
import * as _487 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._202,
        ..._203,
        ..._204,
        ..._205,
        ..._423,
        ..._427,
        ..._431,
        ..._435,
        ..._440
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
        ..._424,
        ..._428,
        ..._432,
        ..._436,
        ..._441
      };
    }
    export namespace client {
      export const v1 = {
        ..._211,
        ..._212,
        ..._213,
        ..._214,
        ..._425,
        ..._429,
        ..._433,
        ..._437,
        ..._442
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
        ..._426,
        ..._430,
        ..._434,
        ..._438,
        ..._443
      };
    }
    export namespace port {
      export const v1 = {
        ..._220,
        ..._439
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
    ..._485,
    ..._486,
    ..._487
  };
}