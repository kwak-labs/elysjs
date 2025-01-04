//@ts-nocheck
import * as _201 from "./abci/types";
import * as _202 from "./crypto/keys";
import * as _203 from "./crypto/proof";
import * as _204 from "./libs/bits/types";
import * as _205 from "./p2p/types";
import * as _206 from "./types/block";
import * as _207 from "./types/evidence";
import * as _208 from "./types/params";
import * as _209 from "./types/types";
import * as _210 from "./types/validator";
import * as _211 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._201
  };
  export const crypto = {
    ..._202,
    ..._203
  };
  export namespace libs {
    export const bits = {
      ..._204
    };
  }
  export const p2p = {
    ..._205
  };
  export const types = {
    ..._206,
    ..._207,
    ..._208,
    ..._209,
    ..._210
  };
  export const version = {
    ..._211
  };
}