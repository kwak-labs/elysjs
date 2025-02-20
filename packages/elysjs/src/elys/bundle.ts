//@ts-nocheck
import * as _102 from "./accountedpool/accounted_pool";
import * as _103 from "./accountedpool/genesis";
import * as _104 from "./accountedpool/query";
import * as _105 from "./accountedpool/tx";
import * as _106 from "./amm/denom_liquidity";
import * as _107 from "./amm/genesis";
import * as _108 from "./amm/params";
import * as _109 from "./amm/pool_asset";
import * as _110 from "./amm/pool_params";
import * as _111 from "./amm/pool";
import * as _112 from "./amm/proposal";
import * as _113 from "./amm/query";
import * as _114 from "./amm/swap_route";
import * as _115 from "./amm/tx";
import * as _116 from "./amm/types";
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
import * as _127 from "./commitment/airdrop";
import * as _128 from "./commitment/commitments";
import * as _129 from "./commitment/genesis";
import * as _130 from "./commitment/params";
import * as _131 from "./commitment/query";
import * as _132 from "./commitment/tx";
import * as _133 from "./epochs/v1/genesis";
import * as _134 from "./epochs/v1/query";
import * as _135 from "./estaking/dex_rewards_tracker";
import * as _136 from "./estaking/elys_staked";
import * as _137 from "./estaking/genesis";
import * as _138 from "./estaking/incentive";
import * as _139 from "./estaking/params";
import * as _140 from "./estaking/query";
import * as _141 from "./estaking/tx";
import * as _142 from "./leveragelp/genesis";
import * as _143 from "./leveragelp/params";
import * as _144 from "./leveragelp/pool";
import * as _145 from "./leveragelp/query";
import * as _146 from "./leveragelp/tx";
import * as _147 from "./leveragelp/types";
import * as _148 from "./masterchef/external_incentive";
import * as _149 from "./masterchef/genesis";
import * as _150 from "./masterchef/incentive";
import * as _151 from "./masterchef/params";
import * as _152 from "./masterchef/pool";
import * as _153 from "./masterchef/query";
import * as _154 from "./masterchef/tx";
import * as _155 from "./masterchef/types";
import * as _156 from "./oracle/asset_info";
import * as _157 from "./oracle/band_price";
import * as _158 from "./oracle/genesis";
import * as _159 from "./oracle/params";
import * as _160 from "./oracle/price_feeder";
import * as _161 from "./oracle/price";
import * as _162 from "./oracle/query";
import * as _163 from "./oracle/tx";
import * as _164 from "./parameter/genesis";
import * as _165 from "./parameter/params";
import * as _166 from "./parameter/query";
import * as _167 from "./parameter/tx";
import * as _168 from "./perpetual/genesis";
import * as _169 from "./perpetual/params";
import * as _170 from "./perpetual/pool";
import * as _171 from "./perpetual/query";
import * as _172 from "./perpetual/tx";
import * as _173 from "./perpetual/types";
import * as _174 from "./stablestake/debt";
import * as _175 from "./stablestake/genesis";
import * as _176 from "./stablestake/params";
import * as _177 from "./stablestake/pool";
import * as _178 from "./stablestake/query";
import * as _179 from "./stablestake/tx";
import * as _180 from "./stablestake/types";
import * as _181 from "./tier/genesis";
import * as _182 from "./tier/params";
import * as _183 from "./tier/portfolio";
import * as _184 from "./tier/query";
import * as _185 from "./tier/tx";
import * as _186 from "./tier/userdata";
import * as _187 from "./tokenomics/airdrop";
import * as _188 from "./tokenomics/genesis_inflation";
import * as _189 from "./tokenomics/genesis";
import * as _190 from "./tokenomics/inflation_entry";
import * as _191 from "./tokenomics/params";
import * as _192 from "./tokenomics/query";
import * as _193 from "./tokenomics/time_based_inflation";
import * as _194 from "./tokenomics/tx";
import * as _195 from "./tradeshield/genesis";
import * as _196 from "./tradeshield/order";
import * as _197 from "./tradeshield/params";
import * as _198 from "./tradeshield/query";
import * as _199 from "./tradeshield/tx";
import * as _200 from "./tradeshield/types";
import * as _201 from "./transferhook/genesis";
import * as _202 from "./transferhook/params";
import * as _203 from "./transferhook/query";
import * as _311 from "./amm/tx.amino";
import * as _312 from "./assetprofile/tx.amino";
import * as _313 from "./burner/tx.amino";
import * as _314 from "./commitment/tx.amino";
import * as _315 from "./estaking/tx.amino";
import * as _316 from "./leveragelp/tx.amino";
import * as _317 from "./masterchef/tx.amino";
import * as _318 from "./oracle/tx.amino";
import * as _319 from "./parameter/tx.amino";
import * as _320 from "./perpetual/tx.amino";
import * as _321 from "./stablestake/tx.amino";
import * as _322 from "./tier/tx.amino";
import * as _323 from "./tokenomics/tx.amino";
import * as _324 from "./tradeshield/tx.amino";
import * as _325 from "./amm/tx.registry";
import * as _326 from "./assetprofile/tx.registry";
import * as _327 from "./burner/tx.registry";
import * as _328 from "./commitment/tx.registry";
import * as _329 from "./estaking/tx.registry";
import * as _330 from "./leveragelp/tx.registry";
import * as _331 from "./masterchef/tx.registry";
import * as _332 from "./oracle/tx.registry";
import * as _333 from "./parameter/tx.registry";
import * as _334 from "./perpetual/tx.registry";
import * as _335 from "./stablestake/tx.registry";
import * as _336 from "./tier/tx.registry";
import * as _337 from "./tokenomics/tx.registry";
import * as _338 from "./tradeshield/tx.registry";
import * as _339 from "./accountedpool/query.rpc.Query";
import * as _340 from "./amm/query.rpc.Query";
import * as _341 from "./assetprofile/query.rpc.Query";
import * as _342 from "./burner/query.rpc.Query";
import * as _343 from "./commitment/query.rpc.Query";
import * as _344 from "./epochs/v1/query.rpc.Query";
import * as _345 from "./estaking/query.rpc.Query";
import * as _346 from "./leveragelp/query.rpc.Query";
import * as _347 from "./masterchef/query.rpc.Query";
import * as _348 from "./oracle/query.rpc.Query";
import * as _349 from "./parameter/query.rpc.Query";
import * as _350 from "./perpetual/query.rpc.Query";
import * as _351 from "./stablestake/query.rpc.Query";
import * as _352 from "./tier/query.rpc.Query";
import * as _353 from "./tokenomics/query.rpc.Query";
import * as _354 from "./tradeshield/query.rpc.Query";
import * as _355 from "./transferhook/query.rpc.Query";
import * as _356 from "./amm/tx.rpc.msg";
import * as _357 from "./assetprofile/tx.rpc.msg";
import * as _358 from "./burner/tx.rpc.msg";
import * as _359 from "./commitment/tx.rpc.msg";
import * as _360 from "./estaking/tx.rpc.msg";
import * as _361 from "./leveragelp/tx.rpc.msg";
import * as _362 from "./masterchef/tx.rpc.msg";
import * as _363 from "./oracle/tx.rpc.msg";
import * as _364 from "./parameter/tx.rpc.msg";
import * as _365 from "./perpetual/tx.rpc.msg";
import * as _366 from "./stablestake/tx.rpc.msg";
import * as _367 from "./tier/tx.rpc.msg";
import * as _368 from "./tokenomics/tx.rpc.msg";
import * as _369 from "./tradeshield/tx.rpc.msg";
import * as _391 from "./rpc.query";
import * as _392 from "./rpc.tx";
export namespace elys {
  export const accountedpool = {
    ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._339
  };
  export const amm = {
    ..._106,
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
    ..._311,
    ..._325,
    ..._340,
    ..._356
  };
  export const assetprofile = {
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._312,
    ..._326,
    ..._341,
    ..._357
  };
  export const burner = {
    ..._122,
    ..._123,
    ..._124,
    ..._125,
    ..._126,
    ..._313,
    ..._327,
    ..._342,
    ..._358
  };
  export const commitment = {
    ..._127,
    ..._128,
    ..._129,
    ..._130,
    ..._131,
    ..._132,
    ..._314,
    ..._328,
    ..._343,
    ..._359
  };
  export namespace epochs {
    export const v1 = {
      ..._133,
      ..._134,
      ..._344
    };
  }
  export const estaking = {
    ..._135,
    ..._136,
    ..._137,
    ..._138,
    ..._139,
    ..._140,
    ..._141,
    ..._315,
    ..._329,
    ..._345,
    ..._360
  };
  export const leveragelp = {
    ..._142,
    ..._143,
    ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._316,
    ..._330,
    ..._346,
    ..._361
  };
  export const masterchef = {
    ..._148,
    ..._149,
    ..._150,
    ..._151,
    ..._152,
    ..._153,
    ..._154,
    ..._155,
    ..._317,
    ..._331,
    ..._347,
    ..._362
  };
  export const oracle = {
    ..._156,
    ..._157,
    ..._158,
    ..._159,
    ..._160,
    ..._161,
    ..._162,
    ..._163,
    ..._318,
    ..._332,
    ..._348,
    ..._363
  };
  export const parameter = {
    ..._164,
    ..._165,
    ..._166,
    ..._167,
    ..._319,
    ..._333,
    ..._349,
    ..._364
  };
  export const perpetual = {
    ..._168,
    ..._169,
    ..._170,
    ..._171,
    ..._172,
    ..._173,
    ..._320,
    ..._334,
    ..._350,
    ..._365
  };
  export const stablestake = {
    ..._174,
    ..._175,
    ..._176,
    ..._177,
    ..._178,
    ..._179,
    ..._180,
    ..._321,
    ..._335,
    ..._351,
    ..._366
  };
  export const tier = {
    ..._181,
    ..._182,
    ..._183,
    ..._184,
    ..._185,
    ..._186,
    ..._322,
    ..._336,
    ..._352,
    ..._367
  };
  export const tokenomics = {
    ..._187,
    ..._188,
    ..._189,
    ..._190,
    ..._191,
    ..._192,
    ..._193,
    ..._194,
    ..._323,
    ..._337,
    ..._353,
    ..._368
  };
  export const tradeshield = {
    ..._195,
    ..._196,
    ..._197,
    ..._198,
    ..._199,
    ..._200,
    ..._324,
    ..._338,
    ..._354,
    ..._369
  };
  export const transferhook = {
    ..._201,
    ..._202,
    ..._203,
    ..._355
  };
  export const ClientFactory = {
    ..._391,
    ..._392
  };
}