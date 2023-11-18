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
import * as _136 from "./commitment/types_cw";
import * as _137 from "./epochs/v1/genesis";
import * as _138 from "./epochs/v1/query";
import * as _139 from "./incentive/distribution";
import * as _140 from "./incentive/elys_staked";
import * as _141 from "./incentive/genesis";
import * as _142 from "./incentive/incentive";
import * as _143 from "./incentive/params";
import * as _144 from "./incentive/pool";
import * as _145 from "./incentive/proposal";
import * as _146 from "./incentive/query";
import * as _147 from "./incentive/tx";
import * as _148 from "./leveragelp/genesis";
import * as _149 from "./leveragelp/params";
import * as _150 from "./leveragelp/pool";
import * as _151 from "./leveragelp/query";
import * as _152 from "./leveragelp/tx";
import * as _153 from "./leveragelp/types";
import * as _154 from "./margin/genesis";
import * as _155 from "./margin/params";
import * as _156 from "./margin/pool";
import * as _157 from "./margin/query";
import * as _158 from "./margin/tx";
import * as _159 from "./margin/types";
import * as _160 from "./oracle/asset_info";
import * as _161 from "./oracle/band_price";
import * as _162 from "./oracle/genesis";
import * as _163 from "./oracle/params";
import * as _164 from "./oracle/price_feeder";
import * as _165 from "./oracle/price";
import * as _166 from "./oracle/proposal";
import * as _167 from "./oracle/query";
import * as _168 from "./oracle/tx";
import * as _169 from "./parameter/ante_handler_param";
import * as _170 from "./parameter/genesis";
import * as _171 from "./parameter/params";
import * as _172 from "./parameter/proposal";
import * as _173 from "./parameter/query";
import * as _174 from "./parameter/tx";
import * as _175 from "./stablestake/debt";
import * as _176 from "./stablestake/genesis";
import * as _177 from "./stablestake/params";
import * as _178 from "./stablestake/query";
import * as _179 from "./stablestake/tx";
import * as _180 from "./stablestake/types";
import * as _181 from "./tokenomics/airdrop";
import * as _182 from "./tokenomics/genesis_inflation";
import * as _183 from "./tokenomics/genesis";
import * as _184 from "./tokenomics/inflation_entry";
import * as _185 from "./tokenomics/params";
import * as _186 from "./tokenomics/query";
import * as _187 from "./tokenomics/time_based_inflation";
import * as _188 from "./tokenomics/tx";
import * as _189 from "./transferhook/genesis";
import * as _190 from "./transferhook/params";
import * as _191 from "./transferhook/query";
import * as _317 from "./amm/tx.amino";
import * as _318 from "./assetprofile/tx.amino";
import * as _319 from "./clock/v1/tx.amino";
import * as _320 from "./commitment/tx.amino";
import * as _321 from "./incentive/tx.amino";
import * as _322 from "./leveragelp/tx.amino";
import * as _323 from "./margin/tx.amino";
import * as _324 from "./oracle/tx.amino";
import * as _325 from "./stablestake/tx.amino";
import * as _326 from "./tokenomics/tx.amino";
import * as _327 from "./amm/tx.registry";
import * as _328 from "./assetprofile/tx.registry";
import * as _329 from "./clock/v1/tx.registry";
import * as _330 from "./commitment/tx.registry";
import * as _331 from "./incentive/tx.registry";
import * as _332 from "./leveragelp/tx.registry";
import * as _333 from "./margin/tx.registry";
import * as _334 from "./oracle/tx.registry";
import * as _335 from "./stablestake/tx.registry";
import * as _336 from "./tokenomics/tx.registry";
import * as _337 from "./accountedpool/query.lcd";
import * as _338 from "./amm/query.lcd";
import * as _339 from "./assetprofile/query.lcd";
import * as _340 from "./burner/query.lcd";
import * as _341 from "./clock/v1/query.lcd";
import * as _342 from "./commitment/query.lcd";
import * as _343 from "./epochs/v1/query.lcd";
import * as _344 from "./incentive/query.lcd";
import * as _345 from "./leveragelp/query.lcd";
import * as _346 from "./margin/query.lcd";
import * as _347 from "./oracle/query.lcd";
import * as _348 from "./parameter/query.lcd";
import * as _349 from "./stablestake/query.lcd";
import * as _350 from "./tokenomics/query.lcd";
import * as _351 from "./transferhook/query.lcd";
import * as _352 from "./accountedpool/query.rpc.Query";
import * as _353 from "./amm/query.rpc.Query";
import * as _354 from "./assetprofile/query.rpc.Query";
import * as _355 from "./burner/query.rpc.Query";
import * as _356 from "./clock/v1/query.rpc.Query";
import * as _357 from "./commitment/query.rpc.Query";
import * as _358 from "./epochs/v1/query.rpc.Query";
import * as _359 from "./incentive/query.rpc.Query";
import * as _360 from "./leveragelp/query.rpc.Query";
import * as _361 from "./margin/query.rpc.Query";
import * as _362 from "./oracle/query.rpc.Query";
import * as _363 from "./parameter/query.rpc.Query";
import * as _364 from "./stablestake/query.rpc.Query";
import * as _365 from "./tokenomics/query.rpc.Query";
import * as _366 from "./transferhook/query.rpc.Query";
import * as _367 from "./amm/tx.rpc.msg";
import * as _368 from "./assetprofile/tx.rpc.msg";
import * as _369 from "./clock/v1/tx.rpc.msg";
import * as _370 from "./commitment/tx.rpc.msg";
import * as _371 from "./incentive/tx.rpc.msg";
import * as _372 from "./leveragelp/tx.rpc.msg";
import * as _373 from "./margin/tx.rpc.msg";
import * as _374 from "./oracle/tx.rpc.msg";
import * as _375 from "./stablestake/tx.rpc.msg";
import * as _376 from "./tokenomics/tx.rpc.msg";
import * as _404 from "./lcd";
import * as _405 from "./rpc.query";
import * as _406 from "./rpc.tx";
export namespace elys {
  export const accountedpool = {
    ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._106,
    ..._337,
    ..._352
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
    ..._317,
    ..._327,
    ..._338,
    ..._353,
    ..._367
  };
  export const assetprofile = {
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._318,
    ..._328,
    ..._339,
    ..._354,
    ..._368
  };
  export const burner = {
    ..._122,
    ..._123,
    ..._124,
    ..._125,
    ..._126,
    ..._340,
    ..._355
  };
  export namespace clock {
    export const v1 = {
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._319,
      ..._329,
      ..._341,
      ..._356,
      ..._369
    };
  }
  export const commitment = {
    ..._131,
    ..._132,
    ..._133,
    ..._134,
    ..._135,
    ..._136,
    ..._320,
    ..._330,
    ..._342,
    ..._357,
    ..._370
  };
  export namespace epochs {
    export const v1 = {
      ..._137,
      ..._138,
      ..._343,
      ..._358
    };
  }
  export const incentive = {
    ..._139,
    ..._140,
    ..._141,
    ..._142,
    ..._143,
    ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._321,
    ..._331,
    ..._344,
    ..._359,
    ..._371
  };
  export const leveragelp = {
    ..._148,
    ..._149,
    ..._150,
    ..._151,
    ..._152,
    ..._153,
    ..._322,
    ..._332,
    ..._345,
    ..._360,
    ..._372
  };
  export const margin = {
    ..._154,
    ..._155,
    ..._156,
    ..._157,
    ..._158,
    ..._159,
    ..._323,
    ..._333,
    ..._346,
    ..._361,
    ..._373
  };
  export const oracle = {
    ..._160,
    ..._161,
    ..._162,
    ..._163,
    ..._164,
    ..._165,
    ..._166,
    ..._167,
    ..._168,
    ..._324,
    ..._334,
    ..._347,
    ..._362,
    ..._374
  };
  export const parameter = {
    ..._169,
    ..._170,
    ..._171,
    ..._172,
    ..._173,
    ..._174,
    ..._348,
    ..._363
  };
  export const stablestake = {
    ..._175,
    ..._176,
    ..._177,
    ..._178,
    ..._179,
    ..._180,
    ..._325,
    ..._335,
    ..._349,
    ..._364,
    ..._375
  };
  export const tokenomics = {
    ..._181,
    ..._182,
    ..._183,
    ..._184,
    ..._185,
    ..._186,
    ..._187,
    ..._188,
    ..._326,
    ..._336,
    ..._350,
    ..._365,
    ..._376
  };
  export const transferhook = {
    ..._189,
    ..._190,
    ..._191,
    ..._351,
    ..._366
  };
  export const ClientFactory = {
    ..._404,
    ..._405,
    ..._406
  };
}