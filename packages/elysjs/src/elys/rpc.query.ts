//@ts-nocheck
import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      app: {
        v1alpha1: (await import("../cosmos/app/v1alpha1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      base: {
        tendermint: {
          v1beta1: (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      evidence: {
        v1beta1: (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gov: {
        v1: (await import("../cosmos/gov/v1/query.rpc.Query")).createRpcQueryExtension(client),
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      group: {
        v1: (await import("../cosmos/group/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      nft: {
        v1beta1: (await import("../cosmos/nft/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      slashing: {
        v1beta1: (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    },
    elys: {
      accountedpool: (await import("./accountedpool/query.rpc.Query")).createRpcQueryExtension(client),
      amm: (await import("./amm/query.rpc.Query")).createRpcQueryExtension(client),
      assetprofile: (await import("./assetprofile/query.rpc.Query")).createRpcQueryExtension(client),
      burner: (await import("./burner/query.rpc.Query")).createRpcQueryExtension(client),
      commitment: (await import("./commitment/query.rpc.Query")).createRpcQueryExtension(client),
      epochs: {
        v1: (await import("./epochs/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      estaking: (await import("./estaking/query.rpc.Query")).createRpcQueryExtension(client),
      leveragelp: (await import("./leveragelp/query.rpc.Query")).createRpcQueryExtension(client),
      masterchef: (await import("./masterchef/query.rpc.Query")).createRpcQueryExtension(client),
      oracle: (await import("./oracle/query.rpc.Query")).createRpcQueryExtension(client),
      parameter: (await import("./parameter/query.rpc.Query")).createRpcQueryExtension(client),
      perpetual: (await import("./perpetual/query.rpc.Query")).createRpcQueryExtension(client),
      stablestake: (await import("./stablestake/query.rpc.Query")).createRpcQueryExtension(client),
      tier: (await import("./tier/query.rpc.Query")).createRpcQueryExtension(client),
      tokenomics: (await import("./tokenomics/query.rpc.Query")).createRpcQueryExtension(client),
      tradeshield: (await import("./tradeshield/query.rpc.Query")).createRpcQueryExtension(client),
      transferhook: (await import("./transferhook/query.rpc.Query")).createRpcQueryExtension(client)
    }
  };
};