//@ts-nocheck
import * as _179 from "./applications/transfer/v1/genesis";
import * as _180 from "./applications/transfer/v1/query";
import * as _181 from "./applications/transfer/v1/transfer";
import * as _182 from "./applications/transfer/v1/tx";
import * as _183 from "./applications/transfer/v2/packet";
import * as _184 from "./core/channel/v1/channel";
import * as _185 from "./core/channel/v1/genesis";
import * as _186 from "./core/channel/v1/query";
import * as _187 from "./core/channel/v1/tx";
import * as _188 from "./core/client/v1/client";
import * as _189 from "./core/client/v1/genesis";
import * as _190 from "./core/client/v1/query";
import * as _191 from "./core/client/v1/tx";
import * as _192 from "./core/commitment/v1/commitment";
import * as _193 from "./core/connection/v1/connection";
import * as _194 from "./core/connection/v1/genesis";
import * as _195 from "./core/connection/v1/query";
import * as _196 from "./core/connection/v1/tx";
import * as _197 from "./lightclients/localhost/v1/localhost";
import * as _198 from "./lightclients/solomachine/v1/solomachine";
import * as _199 from "./lightclients/solomachine/v2/solomachine";
import * as _200 from "./lightclients/tendermint/v1/tendermint";
import * as _318 from "./applications/transfer/v1/tx.amino";
import * as _319 from "./core/channel/v1/tx.amino";
import * as _320 from "./core/client/v1/tx.amino";
import * as _321 from "./core/connection/v1/tx.amino";
import * as _322 from "./applications/transfer/v1/tx.registry";
import * as _323 from "./core/channel/v1/tx.registry";
import * as _324 from "./core/client/v1/tx.registry";
import * as _325 from "./core/connection/v1/tx.registry";
import * as _326 from "./applications/transfer/v1/query.rpc.Query";
import * as _327 from "./core/channel/v1/query.rpc.Query";
import * as _328 from "./core/client/v1/query.rpc.Query";
import * as _329 from "./core/connection/v1/query.rpc.Query";
import * as _330 from "./applications/transfer/v1/tx.rpc.msg";
import * as _331 from "./core/channel/v1/tx.rpc.msg";
import * as _332 from "./core/client/v1/tx.rpc.msg";
import * as _333 from "./core/connection/v1/tx.rpc.msg";
import * as _340 from "./rpc.query";
import * as _341 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._179,
        ..._180,
        ..._181,
        ..._182,
        ..._318,
        ..._322,
        ..._326,
        ..._330
      };
      export const v2 = {
        ..._183
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._184,
        ..._185,
        ..._186,
        ..._187,
        ..._319,
        ..._323,
        ..._327,
        ..._331
      };
    }
    export namespace client {
      export const v1 = {
        ..._188,
        ..._189,
        ..._190,
        ..._191,
        ..._320,
        ..._324,
        ..._328,
        ..._332
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._192
      };
    }
    export namespace connection {
      export const v1 = {
        ..._193,
        ..._194,
        ..._195,
        ..._196,
        ..._321,
        ..._325,
        ..._329,
        ..._333
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._197
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._198
      };
      export const v2 = {
        ..._199
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._200
      };
    }
  }
  export const ClientFactory = {
    ..._340,
    ..._341
  };
}