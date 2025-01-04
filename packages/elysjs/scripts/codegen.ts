import { TelescopeInput } from '@cosmology/telescope';
import telescope from '@cosmology/telescope';
import { join } from 'path';
import { rimrafSync as rimraf } from 'rimraf';

import { AMINO_MAP } from './aminos';

const protoDirs: string[] = [join(__dirname, '/../proto')];
const outPath: string = join(__dirname, '../src');
rimraf(outPath);

export const options: TelescopeInput = {
  protoDirs,
  outPath,
  options: {
    interfaces: {
      enabled: true,
      useUnionTypes: true
    },
    prototypes: {
      enabled: true,
      excluded: {
        packages: [
          'ibc.applications.fee.v1', // issue with parsing protos (LCD routes with nested objects in params)
        ]
      },
    },

    bundle: {
      enabled: true
    },

    tsDisable: {
      files: [],
      patterns: [],
      disableAll: true
    },

    eslintDisable: {
      files: [],
      patterns: [],
      disableAll: false
    },

    stargateClients: {
      enabled: true,
      includeCosmosDefaultTypes: true
    },

    aminoEncoding: {
      enabled: true,
      customTypes: {
        useCosmosSDKDec: false
      },
      exceptions: {
        ...AMINO_MAP
      },
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      type: 'tendermint',
      enabled: true
    },

    reactQuery: {
      enabled: false
    },

    mobx: {
      enabled: false
    },

    pinia: {
      enabled: false
    }
  }
};


telescope(options)
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
