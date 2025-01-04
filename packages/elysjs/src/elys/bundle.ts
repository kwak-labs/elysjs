//@ts-nocheck
import * as _72 from "./accountedpool/accounted_pool";
import * as _73 from "./accountedpool/genesis";
import * as _74 from "./accountedpool/query";
import * as _75 from "./accountedpool/tx";
import * as _76 from "./amm/denom_liquidity";
import * as _77 from "./amm/genesis";
import * as _78 from "./amm/params";
import * as _79 from "./amm/pool_asset";
import * as _80 from "./amm/pool_params";
import * as _81 from "./amm/pool";
import * as _82 from "./amm/proposal";
import * as _83 from "./amm/query";
import * as _84 from "./amm/swap_route";
import * as _85 from "./amm/tx";
import * as _86 from "./amm/types";
import * as _87 from "./assetprofile/entry";
import * as _88 from "./assetprofile/genesis";
import * as _89 from "./assetprofile/params";
import * as _90 from "./assetprofile/query";
import * as _91 from "./assetprofile/tx";
import * as _92 from "./burner/genesis";
import * as _93 from "./burner/history";
import * as _94 from "./burner/params";
import * as _95 from "./burner/query";
import * as _96 from "./burner/tx";
import * as _97 from "./commitment/airdrop";
import * as _98 from "./commitment/commitments";
import * as _99 from "./commitment/genesis";
import * as _100 from "./commitment/params";
import * as _101 from "./commitment/query";
import * as _102 from "./commitment/tx";
import * as _103 from "./epochs/v1/genesis";
import * as _104 from "./epochs/v1/query";
import * as _105 from "./estaking/dex_rewards_tracker";
import * as _106 from "./estaking/elys_staked";
import * as _107 from "./estaking/genesis";
import * as _108 from "./estaking/incentive";
import * as _109 from "./estaking/params";
import * as _110 from "./estaking/query";
import * as _111 from "./estaking/tx";
import * as _112 from "./leveragelp/genesis";
import * as _113 from "./leveragelp/params";
import * as _114 from "./leveragelp/pool";
import * as _115 from "./leveragelp/query";
import * as _116 from "./leveragelp/tx";
import * as _117 from "./leveragelp/types";
import * as _118 from "./masterchef/external_incentive";
import * as _119 from "./masterchef/genesis";
import * as _120 from "./masterchef/incentive";
import * as _121 from "./masterchef/params";
import * as _122 from "./masterchef/pool";
import * as _123 from "./masterchef/query";
import * as _124 from "./masterchef/tx";
import * as _125 from "./masterchef/types";
import * as _126 from "./oracle/asset_info";
import * as _127 from "./oracle/band_price";
import * as _128 from "./oracle/genesis";
import * as _129 from "./oracle/params";
import * as _130 from "./oracle/price_feeder";
import * as _131 from "./oracle/price";
import * as _132 from "./oracle/query";
import * as _133 from "./oracle/tx";
import * as _134 from "./parameter/genesis";
import * as _135 from "./parameter/params";
import * as _136 from "./parameter/query";
import * as _137 from "./parameter/tx";
import * as _138 from "./perpetual/genesis";
import * as _139 from "./perpetual/params";
import * as _140 from "./perpetual/pool";
import * as _141 from "./perpetual/query";
import * as _142 from "./perpetual/tx";
import * as _143 from "./perpetual/types";
import * as _144 from "./stablestake/debt";
import * as _145 from "./stablestake/genesis";
import * as _146 from "./stablestake/params";
import * as _147 from "./stablestake/query";
import * as _148 from "./stablestake/tx";
import * as _149 from "./stablestake/types";
import * as _150 from "./tier/genesis";
import * as _151 from "./tier/params";
import * as _152 from "./tier/portfolio";
import * as _153 from "./tier/query";
import * as _154 from "./tier/tx";
import * as _155 from "./tier/userdata";
import * as _156 from "./tokenomics/airdrop";
import * as _157 from "./tokenomics/genesis_inflation";
import * as _158 from "./tokenomics/genesis";
import * as _159 from "./tokenomics/inflation_entry";
import * as _160 from "./tokenomics/params";
import * as _161 from "./tokenomics/query";
import * as _162 from "./tokenomics/time_based_inflation";
import * as _163 from "./tokenomics/tx";
import * as _164 from "./tradeshield/genesis";
import * as _165 from "./tradeshield/order";
import * as _166 from "./tradeshield/params";
import * as _167 from "./tradeshield/query";
import * as _168 from "./tradeshield/tx";
import * as _169 from "./tradeshield/types";
import * as _170 from "./transferhook/genesis";
import * as _171 from "./transferhook/params";
import * as _172 from "./transferhook/query";
import * as _259 from "./amm/tx.amino";
import * as _260 from "./assetprofile/tx.amino";
import * as _261 from "./burner/tx.amino";
import * as _262 from "./commitment/tx.amino";
import * as _263 from "./estaking/tx.amino";
import * as _264 from "./leveragelp/tx.amino";
import * as _265 from "./masterchef/tx.amino";
import * as _266 from "./oracle/tx.amino";
import * as _267 from "./parameter/tx.amino";
import * as _268 from "./perpetual/tx.amino";
import * as _269 from "./stablestake/tx.amino";
import * as _270 from "./tier/tx.amino";
import * as _271 from "./tokenomics/tx.amino";
import * as _272 from "./tradeshield/tx.amino";
import * as _273 from "./amm/tx.registry";
import * as _274 from "./assetprofile/tx.registry";
import * as _275 from "./burner/tx.registry";
import * as _276 from "./commitment/tx.registry";
import * as _277 from "./estaking/tx.registry";
import * as _278 from "./leveragelp/tx.registry";
import * as _279 from "./masterchef/tx.registry";
import * as _280 from "./oracle/tx.registry";
import * as _281 from "./parameter/tx.registry";
import * as _282 from "./perpetual/tx.registry";
import * as _283 from "./stablestake/tx.registry";
import * as _284 from "./tier/tx.registry";
import * as _285 from "./tokenomics/tx.registry";
import * as _286 from "./tradeshield/tx.registry";
import * as _287 from "./accountedpool/query.rpc.Query";
import * as _288 from "./amm/query.rpc.Query";
import * as _289 from "./assetprofile/query.rpc.Query";
import * as _290 from "./burner/query.rpc.Query";
import * as _291 from "./commitment/query.rpc.Query";
import * as _292 from "./epochs/v1/query.rpc.Query";
import * as _293 from "./estaking/query.rpc.Query";
import * as _294 from "./leveragelp/query.rpc.Query";
import * as _295 from "./masterchef/query.rpc.Query";
import * as _296 from "./oracle/query.rpc.Query";
import * as _297 from "./parameter/query.rpc.Query";
import * as _298 from "./perpetual/query.rpc.Query";
import * as _299 from "./stablestake/query.rpc.Query";
import * as _300 from "./tier/query.rpc.Query";
import * as _301 from "./tokenomics/query.rpc.Query";
import * as _302 from "./tradeshield/query.rpc.Query";
import * as _303 from "./transferhook/query.rpc.Query";
import * as _304 from "./amm/tx.rpc.msg";
import * as _305 from "./assetprofile/tx.rpc.msg";
import * as _306 from "./burner/tx.rpc.msg";
import * as _307 from "./commitment/tx.rpc.msg";
import * as _308 from "./estaking/tx.rpc.msg";
import * as _309 from "./leveragelp/tx.rpc.msg";
import * as _310 from "./masterchef/tx.rpc.msg";
import * as _311 from "./oracle/tx.rpc.msg";
import * as _312 from "./parameter/tx.rpc.msg";
import * as _313 from "./perpetual/tx.rpc.msg";
import * as _314 from "./stablestake/tx.rpc.msg";
import * as _315 from "./tier/tx.rpc.msg";
import * as _316 from "./tokenomics/tx.rpc.msg";
import * as _317 from "./tradeshield/tx.rpc.msg";
import * as _338 from "./rpc.query";
import * as _339 from "./rpc.tx";
export namespace elys {
  export const accountedpool = {
    ..._72,
    ..._73,
    ..._74,
    ..._75,
    ..._287
  };
  export const amm = {
    ..._76,
    ..._77,
    ..._78,
    ..._79,
    ..._80,
    ..._81,
    ..._82,
    ..._83,
    ..._84,
    ..._85,
    ..._86,
    ..._259,
    ..._273,
    ..._288,
    ..._304
  };
  export const assetprofile = {
    ..._87,
    ..._88,
    ..._89,
    ..._90,
    ..._91,
    ..._260,
    ..._274,
    ..._289,
    ..._305
  };
  export const burner = {
    ..._92,
    ..._93,
    ..._94,
    ..._95,
    ..._96,
    ..._261,
    ..._275,
    ..._290,
    ..._306
  };
  export const commitment = {
    ..._97,
    ..._98,
    ..._99,
    ..._100,
    ..._101,
    ..._102,
    ..._262,
    ..._276,
    ..._291,
    ..._307
  };
  export namespace epochs {
    export const v1 = {
      ..._103,
      ..._104,
      ..._292
    };
  }
  export const estaking = {
    ..._105,
    ..._106,
    ..._107,
    ..._108,
    ..._109,
    ..._110,
    ..._111,
    ..._263,
    ..._277,
    ..._293,
    ..._308
  };
  export const leveragelp = {
    ..._112,
    ..._113,
    ..._114,
    ..._115,
    ..._116,
    ..._117,
    ..._264,
    ..._278,
    ..._294,
    ..._309
  };
  export const masterchef = {
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._122,
    ..._123,
    ..._124,
    ..._125,
    ..._265,
    ..._279,
    ..._295,
    ..._310
  };
  export const oracle = {
    ..._126,
    ..._127,
    ..._128,
    ..._129,
    ..._130,
    ..._131,
    ..._132,
    ..._133,
    ..._266,
    ..._280,
    ..._296,
    ..._311
  };
  export const parameter = {
    ..._134,
    ..._135,
    ..._136,
    ..._137,
    ..._267,
    ..._281,
    ..._297,
    ..._312
  };
  export const perpetual = {
    ..._138,
    ..._139,
    ..._140,
    ..._141,
    ..._142,
    ..._143,
    ..._268,
    ..._282,
    ..._298,
    ..._313
  };
  export const stablestake = {
    ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._148,
    ..._149,
    ..._269,
    ..._283,
    ..._299,
    ..._314
  };
  export const tier = {
    ..._150,
    ..._151,
    ..._152,
    ..._153,
    ..._154,
    ..._155,
    ..._270,
    ..._284,
    ..._300,
    ..._315
  };
  export const tokenomics = {
    ..._156,
    ..._157,
    ..._158,
    ..._159,
    ..._160,
    ..._161,
    ..._162,
    ..._163,
    ..._271,
    ..._285,
    ..._301,
    ..._316
  };
  export const tradeshield = {
    ..._164,
    ..._165,
    ..._166,
    ..._167,
    ..._168,
    ..._169,
    ..._272,
    ..._286,
    ..._302,
    ..._317
  };
  export const transferhook = {
    ..._170,
    ..._171,
    ..._172,
    ..._303
  };
  export const ClientFactory = {
    ..._338,
    ..._339
  };
}