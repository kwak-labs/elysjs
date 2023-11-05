import * as _102 from "./accountedpool/accounted_pool";
import * as _103 from "./accountedpool/genesis";
import * as _104 from "./accountedpool/params";
import * as _105 from "./accountedpool/query";
import * as _106 from "./accountedpool/tx";
import * as _107 from "./amm/denom_liquidity";
import * as _108 from "./amm/genesis";
import * as _109 from "./amm/params";
import * as _110 from "./amm/pool_asset";
import * as _111 from "./amm/pool_params";
import * as _112 from "./amm/pool";
import * as _113 from "./amm/proposal";
import * as _114 from "./amm/query";
import * as _115 from "./amm/swap_route";
import * as _116 from "./amm/tx";
import * as _117 from "./assetprofile/entry";
import * as _118 from "./assetprofile/genesis";
import * as _119 from "./assetprofile/params";
import * as _120 from "./assetprofile/query";
import * as _121 from "./assetprofile/tx";
import * as _122 from "./burner/genesis";
import * as _123 from "./burner/history";
import * as _124 from "./burner/params";
import * as _125 from "./burner/query";
import * as _126 from "./burner/tx";
import * as _127 from "./clock/v1/genesis";
import * as _128 from "./clock/v1/params";
import * as _129 from "./clock/v1/query";
import * as _130 from "./clock/v1/tx";
import * as _131 from "./commitment/commitments";
import * as _132 from "./commitment/genesis";
import * as _133 from "./commitment/params";
import * as _134 from "./commitment/query";
import * as _135 from "./commitment/tx";
import * as _136 from "./epochs/v1/genesis";
import * as _137 from "./epochs/v1/query";
import * as _138 from "./incentive/distribution";
import * as _139 from "./incentive/elys_staked";
import * as _140 from "./incentive/genesis";
import * as _141 from "./incentive/incentive";
import * as _142 from "./incentive/params";
import * as _143 from "./incentive/pool";
import * as _144 from "./incentive/proposal";
import * as _145 from "./incentive/query";
import * as _146 from "./incentive/tx";
import * as _147 from "./leveragelp/genesis";
import * as _148 from "./leveragelp/params";
import * as _149 from "./leveragelp/pool";
import * as _150 from "./leveragelp/query";
import * as _151 from "./leveragelp/tx";
import * as _152 from "./leveragelp/types";
import * as _153 from "./liquidityprovider/genesis";
import * as _154 from "./liquidityprovider/params";
import * as _155 from "./liquidityprovider/query";
import * as _156 from "./liquidityprovider/tx";
import * as _157 from "./margin/genesis";
import * as _158 from "./margin/params";
import * as _159 from "./margin/pool";
import * as _160 from "./margin/query";
import * as _161 from "./margin/tx";
import * as _162 from "./margin/types";
import * as _163 from "./oracle/asset_info";
import * as _164 from "./oracle/band_price";
import * as _165 from "./oracle/genesis";
import * as _166 from "./oracle/params";
import * as _167 from "./oracle/price_feeder";
import * as _168 from "./oracle/price";
import * as _169 from "./oracle/proposal";
import * as _170 from "./oracle/query";
import * as _171 from "./oracle/tx";
import * as _172 from "./parameter/ante_handler_param";
import * as _173 from "./parameter/genesis";
import * as _174 from "./parameter/params";
import * as _175 from "./parameter/proposal";
import * as _176 from "./parameter/query";
import * as _177 from "./parameter/tx";
import * as _178 from "./stablestake/debt";
import * as _179 from "./stablestake/genesis";
import * as _180 from "./stablestake/params";
import * as _181 from "./stablestake/query";
import * as _182 from "./stablestake/tx";
import * as _183 from "./tokenomics/airdrop";
import * as _184 from "./tokenomics/genesis_inflation";
import * as _185 from "./tokenomics/genesis";
import * as _186 from "./tokenomics/inflation_entry";
import * as _187 from "./tokenomics/params";
import * as _188 from "./tokenomics/query";
import * as _189 from "./tokenomics/time_based_inflation";
import * as _190 from "./tokenomics/tx";
import * as _191 from "./transferhook/genesis";
import * as _192 from "./transferhook/params";
import * as _193 from "./transferhook/query";
import * as _361 from "./amm/tx.amino";
import * as _362 from "./assetprofile/tx.amino";
import * as _363 from "./clock/v1/tx.amino";
import * as _364 from "./commitment/tx.amino";
import * as _365 from "./incentive/tx.amino";
import * as _366 from "./leveragelp/tx.amino";
import * as _367 from "./margin/tx.amino";
import * as _368 from "./oracle/tx.amino";
import * as _369 from "./stablestake/tx.amino";
import * as _370 from "./tokenomics/tx.amino";
import * as _371 from "./amm/tx.registry";
import * as _372 from "./assetprofile/tx.registry";
import * as _373 from "./clock/v1/tx.registry";
import * as _374 from "./commitment/tx.registry";
import * as _375 from "./incentive/tx.registry";
import * as _376 from "./leveragelp/tx.registry";
import * as _377 from "./margin/tx.registry";
import * as _378 from "./oracle/tx.registry";
import * as _379 from "./stablestake/tx.registry";
import * as _380 from "./tokenomics/tx.registry";
import * as _381 from "./accountedpool/query.lcd";
import * as _382 from "./amm/query.lcd";
import * as _383 from "./assetprofile/query.lcd";
import * as _384 from "./burner/query.lcd";
import * as _385 from "./clock/v1/query.lcd";
import * as _386 from "./commitment/query.lcd";
import * as _387 from "./epochs/v1/query.lcd";
import * as _388 from "./incentive/query.lcd";
import * as _389 from "./leveragelp/query.lcd";
import * as _390 from "./liquidityprovider/query.lcd";
import * as _391 from "./margin/query.lcd";
import * as _392 from "./oracle/query.lcd";
import * as _393 from "./parameter/query.lcd";
import * as _394 from "./stablestake/query.lcd";
import * as _395 from "./tokenomics/query.lcd";
import * as _396 from "./transferhook/query.lcd";
import * as _397 from "./accountedpool/query.rpc.Query";
import * as _398 from "./amm/query.rpc.Query";
import * as _399 from "./assetprofile/query.rpc.Query";
import * as _400 from "./burner/query.rpc.Query";
import * as _401 from "./clock/v1/query.rpc.Query";
import * as _402 from "./commitment/query.rpc.Query";
import * as _403 from "./epochs/v1/query.rpc.Query";
import * as _404 from "./incentive/query.rpc.Query";
import * as _405 from "./leveragelp/query.rpc.Query";
import * as _406 from "./liquidityprovider/query.rpc.Query";
import * as _407 from "./margin/query.rpc.Query";
import * as _408 from "./oracle/query.rpc.Query";
import * as _409 from "./parameter/query.rpc.Query";
import * as _410 from "./stablestake/query.rpc.Query";
import * as _411 from "./tokenomics/query.rpc.Query";
import * as _412 from "./transferhook/query.rpc.Query";
import * as _413 from "./amm/tx.rpc.msg";
import * as _414 from "./assetprofile/tx.rpc.msg";
import * as _415 from "./clock/v1/tx.rpc.msg";
import * as _416 from "./commitment/tx.rpc.msg";
import * as _417 from "./incentive/tx.rpc.msg";
import * as _418 from "./leveragelp/tx.rpc.msg";
import * as _419 from "./margin/tx.rpc.msg";
import * as _420 from "./oracle/tx.rpc.msg";
import * as _421 from "./stablestake/tx.rpc.msg";
import * as _422 from "./tokenomics/tx.rpc.msg";
import * as _482 from "./lcd";
import * as _483 from "./rpc.query";
import * as _484 from "./rpc.tx";
export namespace elys {
  export const accountedpool = {
    ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._106,
    ..._381,
    ..._397
  };
  export const amm = {
    ..._107,
    ..._108,
    ..._109,
    ..._110,
    ..._111,
    ..._112,
    ..._113,
    ..._114,
    ..._115,
    ..._116,
    ..._361,
    ..._371,
    ..._382,
    ..._398,
    ..._413
  };
  export const assetprofile = {
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._362,
    ..._372,
    ..._383,
    ..._399,
    ..._414
  };
  export const burner = {
    ..._122,
    ..._123,
    ..._124,
    ..._125,
    ..._126,
    ..._384,
    ..._400
  };
  export namespace clock {
    export const v1 = {
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._363,
      ..._373,
      ..._385,
      ..._401,
      ..._415
    };
  }
  export const commitment = {
    ..._131,
    ..._132,
    ..._133,
    ..._134,
    ..._135,
    ..._364,
    ..._374,
    ..._386,
    ..._402,
    ..._416
  };
  export namespace epochs {
    export const v1 = {
      ..._136,
      ..._137,
      ..._387,
      ..._403
    };
  }
  export const incentive = {
    ..._138,
    ..._139,
    ..._140,
    ..._141,
    ..._142,
    ..._143,
    ..._144,
    ..._145,
    ..._146,
    ..._365,
    ..._375,
    ..._388,
    ..._404,
    ..._417
  };
  export const leveragelp = {
    ..._147,
    ..._148,
    ..._149,
    ..._150,
    ..._151,
    ..._152,
    ..._366,
    ..._376,
    ..._389,
    ..._405,
    ..._418
  };
  export const liquidityprovider = {
    ..._153,
    ..._154,
    ..._155,
    ..._156,
    ..._390,
    ..._406
  };
  export const margin = {
    ..._157,
    ..._158,
    ..._159,
    ..._160,
    ..._161,
    ..._162,
    ..._367,
    ..._377,
    ..._391,
    ..._407,
    ..._419
  };
  export const oracle = {
    ..._163,
    ..._164,
    ..._165,
    ..._166,
    ..._167,
    ..._168,
    ..._169,
    ..._170,
    ..._171,
    ..._368,
    ..._378,
    ..._392,
    ..._408,
    ..._420
  };
  export const parameter = {
    ..._172,
    ..._173,
    ..._174,
    ..._175,
    ..._176,
    ..._177,
    ..._393,
    ..._409
  };
  export const stablestake = {
    ..._178,
    ..._179,
    ..._180,
    ..._181,
    ..._182,
    ..._369,
    ..._379,
    ..._394,
    ..._410,
    ..._421
  };
  export const tokenomics = {
    ..._183,
    ..._184,
    ..._185,
    ..._186,
    ..._187,
    ..._188,
    ..._189,
    ..._190,
    ..._370,
    ..._380,
    ..._395,
    ..._411,
    ..._422
  };
  export const transferhook = {
    ..._191,
    ..._192,
    ..._193,
    ..._396,
    ..._412
  };
  export const ClientFactory = {
    ..._482,
    ..._483,
    ..._484
  };
}