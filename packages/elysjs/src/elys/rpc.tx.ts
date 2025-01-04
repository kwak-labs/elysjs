//@ts-nocheck
import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    group: {
      v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  elys: {
    amm: new (await import("./amm/tx.rpc.msg")).MsgClientImpl(rpc),
    assetprofile: new (await import("./assetprofile/tx.rpc.msg")).MsgClientImpl(rpc),
    burner: new (await import("./burner/tx.rpc.msg")).MsgClientImpl(rpc),
    commitment: new (await import("./commitment/tx.rpc.msg")).MsgClientImpl(rpc),
    estaking: new (await import("./estaking/tx.rpc.msg")).MsgClientImpl(rpc),
    leveragelp: new (await import("./leveragelp/tx.rpc.msg")).MsgClientImpl(rpc),
    masterchef: new (await import("./masterchef/tx.rpc.msg")).MsgClientImpl(rpc),
    oracle: new (await import("./oracle/tx.rpc.msg")).MsgClientImpl(rpc),
    parameter: new (await import("./parameter/tx.rpc.msg")).MsgClientImpl(rpc),
    perpetual: new (await import("./perpetual/tx.rpc.msg")).MsgClientImpl(rpc),
    stablestake: new (await import("./stablestake/tx.rpc.msg")).MsgClientImpl(rpc),
    tier: new (await import("./tier/tx.rpc.msg")).MsgClientImpl(rpc),
    tokenomics: new (await import("./tokenomics/tx.rpc.msg")).MsgClientImpl(rpc),
    tradeshield: new (await import("./tradeshield/tx.rpc.msg")).MsgClientImpl(rpc)
  }
});