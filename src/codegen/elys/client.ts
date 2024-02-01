import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as elysAmmTxRegistry from "./amm/tx.registry";
import * as elysAssetprofileTxRegistry from "./assetprofile/tx.registry";
import * as elysClockV1TxRegistry from "./clock/v1/tx.registry";
import * as elysCommitmentTxRegistry from "./commitment/tx.registry";
import * as elysIncentiveTxRegistry from "./incentive/tx.registry";
import * as elysLeveragelpTxRegistry from "./leveragelp/tx.registry";
import * as elysOracleTxRegistry from "./oracle/tx.registry";
import * as elysParameterTxRegistry from "./parameter/tx.registry";
import * as elysPerpetualTxRegistry from "./perpetual/tx.registry";
import * as elysStablestakeTxRegistry from "./stablestake/tx.registry";
import * as elysTokenomicsTxRegistry from "./tokenomics/tx.registry";
import * as elysAmmTxAmino from "./amm/tx.amino";
import * as elysAssetprofileTxAmino from "./assetprofile/tx.amino";
import * as elysClockV1TxAmino from "./clock/v1/tx.amino";
import * as elysCommitmentTxAmino from "./commitment/tx.amino";
import * as elysIncentiveTxAmino from "./incentive/tx.amino";
import * as elysLeveragelpTxAmino from "./leveragelp/tx.amino";
import * as elysOracleTxAmino from "./oracle/tx.amino";
import * as elysParameterTxAmino from "./parameter/tx.amino";
import * as elysPerpetualTxAmino from "./perpetual/tx.amino";
import * as elysStablestakeTxAmino from "./stablestake/tx.amino";
import * as elysTokenomicsTxAmino from "./tokenomics/tx.amino";
export const elysAminoConverters = {
  ...elysAmmTxAmino.AminoConverter,
  ...elysAssetprofileTxAmino.AminoConverter,
  ...elysClockV1TxAmino.AminoConverter,
  ...elysCommitmentTxAmino.AminoConverter,
  ...elysIncentiveTxAmino.AminoConverter,
  ...elysLeveragelpTxAmino.AminoConverter,
  ...elysOracleTxAmino.AminoConverter,
  ...elysParameterTxAmino.AminoConverter,
  ...elysPerpetualTxAmino.AminoConverter,
  ...elysStablestakeTxAmino.AminoConverter,
  ...elysTokenomicsTxAmino.AminoConverter
};
export const elysProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...elysAmmTxRegistry.registry, ...elysAssetprofileTxRegistry.registry, ...elysClockV1TxRegistry.registry, ...elysCommitmentTxRegistry.registry, ...elysIncentiveTxRegistry.registry, ...elysLeveragelpTxRegistry.registry, ...elysOracleTxRegistry.registry, ...elysParameterTxRegistry.registry, ...elysPerpetualTxRegistry.registry, ...elysStablestakeTxRegistry.registry, ...elysTokenomicsTxRegistry.registry];
export const getSigningElysClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...elysProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...elysAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningElysClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningElysClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};