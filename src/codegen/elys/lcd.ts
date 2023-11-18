import { LCDClient } from "@cosmology/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    cosmos: {
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      base: {
        tendermint: {
          v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      evidence: {
        v1beta1: new (await import("../cosmos/evidence/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      group: {
        v1: new (await import("../cosmos/group/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      nft: {
        v1beta1: new (await import("../cosmos/nft/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      params: {
        v1beta1: new (await import("../cosmos/params/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      slashing: {
        v1beta1: new (await import("../cosmos/slashing/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.lcd")).LCDQueryClient({
          requestClient
        })
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    },
    elys: {
      accountedpool: new (await import("./accountedpool/query.lcd")).LCDQueryClient({
        requestClient
      }),
      amm: new (await import("./amm/query.lcd")).LCDQueryClient({
        requestClient
      }),
      assetprofile: new (await import("./assetprofile/query.lcd")).LCDQueryClient({
        requestClient
      }),
      burner: new (await import("./burner/query.lcd")).LCDQueryClient({
        requestClient
      }),
      clock: {
        v1: new (await import("./clock/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      commitment: new (await import("./commitment/query.lcd")).LCDQueryClient({
        requestClient
      }),
      epochs: {
        v1: new (await import("./epochs/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      incentive: new (await import("./incentive/query.lcd")).LCDQueryClient({
        requestClient
      }),
      leveragelp: new (await import("./leveragelp/query.lcd")).LCDQueryClient({
        requestClient
      }),
      margin: new (await import("./margin/query.lcd")).LCDQueryClient({
        requestClient
      }),
      oracle: new (await import("./oracle/query.lcd")).LCDQueryClient({
        requestClient
      }),
      parameter: new (await import("./parameter/query.lcd")).LCDQueryClient({
        requestClient
      }),
      stablestake: new (await import("./stablestake/query.lcd")).LCDQueryClient({
        requestClient
      }),
      tokenomics: new (await import("./tokenomics/query.lcd")).LCDQueryClient({
        requestClient
      }),
      transferhook: new (await import("./transferhook/query.lcd")).LCDQueryClient({
        requestClient
      })
    }
  };
};