import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BridgeValidator, BridgeValidatorAmino, BridgeValidatorSDKType } from "./types";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgSetOrchestratorAddresses
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this validator
 * on Ethereum
 */
export interface MsgSetOrchestratorAddresses {
  sender: string;
  orchestrator: string;
  ethAddress: string;
}
export interface MsgSetOrchestratorAddressesProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses";
  value: Uint8Array;
}
/**
 * MsgSetOrchestratorAddresses
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this validator
 * on Ethereum
 */
export interface MsgSetOrchestratorAddressesAmino {
  sender: string;
  orchestrator: string;
  eth_address: string;
}
export interface MsgSetOrchestratorAddressesAminoMsg {
  type: "/injective.peggy.v1.MsgSetOrchestratorAddresses";
  value: MsgSetOrchestratorAddressesAmino;
}
/**
 * MsgSetOrchestratorAddresses
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this validator
 * on Ethereum
 */
export interface MsgSetOrchestratorAddressesSDKType {
  sender: string;
  orchestrator: string;
  eth_address: string;
}
export interface MsgSetOrchestratorAddressesResponse {}
export interface MsgSetOrchestratorAddressesResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddressesResponse";
  value: Uint8Array;
}
export interface MsgSetOrchestratorAddressesResponseAmino {}
export interface MsgSetOrchestratorAddressesResponseAminoMsg {
  type: "/injective.peggy.v1.MsgSetOrchestratorAddressesResponse";
  value: MsgSetOrchestratorAddressesResponseAmino;
}
export interface MsgSetOrchestratorAddressesResponseSDKType {}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 * 
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirm {
  nonce: bigint;
  orchestrator: string;
  ethAddress: string;
  signature: string;
}
export interface MsgValsetConfirmProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgValsetConfirm";
  value: Uint8Array;
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 * 
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirmAmino {
  nonce: string;
  orchestrator: string;
  eth_address: string;
  signature: string;
}
export interface MsgValsetConfirmAminoMsg {
  type: "/injective.peggy.v1.MsgValsetConfirm";
  value: MsgValsetConfirmAmino;
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 * 
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirmSDKType {
  nonce: bigint;
  orchestrator: string;
  eth_address: string;
  signature: string;
}
export interface MsgValsetConfirmResponse {}
export interface MsgValsetConfirmResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgValsetConfirmResponse";
  value: Uint8Array;
}
export interface MsgValsetConfirmResponseAmino {}
export interface MsgValsetConfirmResponseAminoMsg {
  type: "/injective.peggy.v1.MsgValsetConfirmResponse";
  value: MsgValsetConfirmResponseAmino;
}
export interface MsgValsetConfirmResponseSDKType {}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToEth {
  sender: string;
  ethDest: string;
  amount: Coin;
  bridgeFee: Coin;
}
export interface MsgSendToEthProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgSendToEth";
  value: Uint8Array;
}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToEthAmino {
  sender: string;
  eth_dest: string;
  amount?: CoinAmino;
  bridge_fee?: CoinAmino;
}
export interface MsgSendToEthAminoMsg {
  type: "/injective.peggy.v1.MsgSendToEth";
  value: MsgSendToEthAmino;
}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToEthSDKType {
  sender: string;
  eth_dest: string;
  amount: CoinSDKType;
  bridge_fee: CoinSDKType;
}
export interface MsgSendToEthResponse {}
export interface MsgSendToEthResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgSendToEthResponse";
  value: Uint8Array;
}
export interface MsgSendToEthResponseAmino {}
export interface MsgSendToEthResponseAminoMsg {
  type: "/injective.peggy.v1.MsgSendToEthResponse";
  value: MsgSendToEthResponseAmino;
}
export interface MsgSendToEthResponseSDKType {}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatch {
  orchestrator: string;
  denom: string;
}
export interface MsgRequestBatchProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgRequestBatch";
  value: Uint8Array;
}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatchAmino {
  orchestrator: string;
  denom: string;
}
export interface MsgRequestBatchAminoMsg {
  type: "/injective.peggy.v1.MsgRequestBatch";
  value: MsgRequestBatchAmino;
}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatchSDKType {
  orchestrator: string;
  denom: string;
}
export interface MsgRequestBatchResponse {}
export interface MsgRequestBatchResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgRequestBatchResponse";
  value: Uint8Array;
}
export interface MsgRequestBatchResponseAmino {}
export interface MsgRequestBatchResponseAminoMsg {
  type: "/injective.peggy.v1.MsgRequestBatchResponse";
  value: MsgRequestBatchResponseAmino;
}
export interface MsgRequestBatchResponseSDKType {}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatch {
  nonce: bigint;
  tokenContract: string;
  ethSigner: string;
  orchestrator: string;
  signature: string;
}
export interface MsgConfirmBatchProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgConfirmBatch";
  value: Uint8Array;
}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatchAmino {
  nonce: string;
  token_contract: string;
  eth_signer: string;
  orchestrator: string;
  signature: string;
}
export interface MsgConfirmBatchAminoMsg {
  type: "/injective.peggy.v1.MsgConfirmBatch";
  value: MsgConfirmBatchAmino;
}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatchSDKType {
  nonce: bigint;
  token_contract: string;
  eth_signer: string;
  orchestrator: string;
  signature: string;
}
export interface MsgConfirmBatchResponse {}
export interface MsgConfirmBatchResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgConfirmBatchResponse";
  value: Uint8Array;
}
export interface MsgConfirmBatchResponseAmino {}
export interface MsgConfirmBatchResponseAminoMsg {
  type: "/injective.peggy.v1.MsgConfirmBatchResponse";
  value: MsgConfirmBatchResponseAmino;
}
export interface MsgConfirmBatchResponseSDKType {}
/**
 * EthereumBridgeDepositClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgDepositClaim {
  eventNonce: bigint;
  blockHeight: bigint;
  tokenContract: string;
  amount: string;
  ethereumSender: string;
  cosmosReceiver: string;
  orchestrator: string;
  data: string;
}
export interface MsgDepositClaimProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgDepositClaim";
  value: Uint8Array;
}
/**
 * EthereumBridgeDepositClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgDepositClaimAmino {
  event_nonce: string;
  block_height: string;
  token_contract: string;
  amount: string;
  ethereum_sender: string;
  cosmos_receiver: string;
  orchestrator: string;
  data: string;
}
export interface MsgDepositClaimAminoMsg {
  type: "/injective.peggy.v1.MsgDepositClaim";
  value: MsgDepositClaimAmino;
}
/**
 * EthereumBridgeDepositClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgDepositClaimSDKType {
  event_nonce: bigint;
  block_height: bigint;
  token_contract: string;
  amount: string;
  ethereum_sender: string;
  cosmos_receiver: string;
  orchestrator: string;
  data: string;
}
export interface MsgDepositClaimResponse {}
export interface MsgDepositClaimResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgDepositClaimResponse";
  value: Uint8Array;
}
export interface MsgDepositClaimResponseAmino {}
export interface MsgDepositClaimResponseAminoMsg {
  type: "/injective.peggy.v1.MsgDepositClaimResponse";
  value: MsgDepositClaimResponseAmino;
}
export interface MsgDepositClaimResponseSDKType {}
/**
 * WithdrawClaim claims that a batch of withdrawal
 * operations on the bridge contract was executed.
 */
export interface MsgWithdrawClaim {
  eventNonce: bigint;
  blockHeight: bigint;
  batchNonce: bigint;
  tokenContract: string;
  orchestrator: string;
}
export interface MsgWithdrawClaimProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgWithdrawClaim";
  value: Uint8Array;
}
/**
 * WithdrawClaim claims that a batch of withdrawal
 * operations on the bridge contract was executed.
 */
export interface MsgWithdrawClaimAmino {
  event_nonce: string;
  block_height: string;
  batch_nonce: string;
  token_contract: string;
  orchestrator: string;
}
export interface MsgWithdrawClaimAminoMsg {
  type: "/injective.peggy.v1.MsgWithdrawClaim";
  value: MsgWithdrawClaimAmino;
}
/**
 * WithdrawClaim claims that a batch of withdrawal
 * operations on the bridge contract was executed.
 */
export interface MsgWithdrawClaimSDKType {
  event_nonce: bigint;
  block_height: bigint;
  batch_nonce: bigint;
  token_contract: string;
  orchestrator: string;
}
export interface MsgWithdrawClaimResponse {}
export interface MsgWithdrawClaimResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgWithdrawClaimResponse";
  value: Uint8Array;
}
export interface MsgWithdrawClaimResponseAmino {}
export interface MsgWithdrawClaimResponseAminoMsg {
  type: "/injective.peggy.v1.MsgWithdrawClaimResponse";
  value: MsgWithdrawClaimResponseAmino;
}
export interface MsgWithdrawClaimResponseSDKType {}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaim {
  eventNonce: bigint;
  blockHeight: bigint;
  cosmosDenom: string;
  tokenContract: string;
  name: string;
  symbol: string;
  decimals: bigint;
  orchestrator: string;
}
export interface MsgERC20DeployedClaimProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim";
  value: Uint8Array;
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaimAmino {
  event_nonce: string;
  block_height: string;
  cosmos_denom: string;
  token_contract: string;
  name: string;
  symbol: string;
  decimals: string;
  orchestrator: string;
}
export interface MsgERC20DeployedClaimAminoMsg {
  type: "/injective.peggy.v1.MsgERC20DeployedClaim";
  value: MsgERC20DeployedClaimAmino;
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaimSDKType {
  event_nonce: bigint;
  block_height: bigint;
  cosmos_denom: string;
  token_contract: string;
  name: string;
  symbol: string;
  decimals: bigint;
  orchestrator: string;
}
export interface MsgERC20DeployedClaimResponse {}
export interface MsgERC20DeployedClaimResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaimResponse";
  value: Uint8Array;
}
export interface MsgERC20DeployedClaimResponseAmino {}
export interface MsgERC20DeployedClaimResponseAminoMsg {
  type: "/injective.peggy.v1.MsgERC20DeployedClaimResponse";
  value: MsgERC20DeployedClaimResponseAmino;
}
export interface MsgERC20DeployedClaimResponseSDKType {}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEth {
  transactionId: bigint;
  sender: string;
}
export interface MsgCancelSendToEthProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgCancelSendToEth";
  value: Uint8Array;
}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEthAmino {
  transaction_id: string;
  sender: string;
}
export interface MsgCancelSendToEthAminoMsg {
  type: "/injective.peggy.v1.MsgCancelSendToEth";
  value: MsgCancelSendToEthAmino;
}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEthSDKType {
  transaction_id: bigint;
  sender: string;
}
export interface MsgCancelSendToEthResponse {}
export interface MsgCancelSendToEthResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgCancelSendToEthResponse";
  value: Uint8Array;
}
export interface MsgCancelSendToEthResponseAmino {}
export interface MsgCancelSendToEthResponseAminoMsg {
  type: "/injective.peggy.v1.MsgCancelSendToEthResponse";
  value: MsgCancelSendToEthResponseAmino;
}
export interface MsgCancelSendToEthResponseSDKType {}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed. Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidence {
  subject?: Any;
  signature: string;
  sender: string;
}
export interface MsgSubmitBadSignatureEvidenceProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence";
  value: Uint8Array;
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed. Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidenceAmino {
  subject?: AnyAmino;
  signature: string;
  sender: string;
}
export interface MsgSubmitBadSignatureEvidenceAminoMsg {
  type: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence";
  value: MsgSubmitBadSignatureEvidenceAmino;
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed. Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidenceSDKType {
  subject?: AnySDKType;
  signature: string;
  sender: string;
}
export interface MsgSubmitBadSignatureEvidenceResponse {}
export interface MsgSubmitBadSignatureEvidenceResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidenceResponse";
  value: Uint8Array;
}
export interface MsgSubmitBadSignatureEvidenceResponseAmino {}
export interface MsgSubmitBadSignatureEvidenceResponseAminoMsg {
  type: "/injective.peggy.v1.MsgSubmitBadSignatureEvidenceResponse";
  value: MsgSubmitBadSignatureEvidenceResponseAmino;
}
export interface MsgSubmitBadSignatureEvidenceResponseSDKType {}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaim {
  eventNonce: bigint;
  valsetNonce: bigint;
  blockHeight: bigint;
  members: BridgeValidator[];
  rewardAmount: string;
  rewardToken: string;
  orchestrator: string;
}
export interface MsgValsetUpdatedClaimProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim";
  value: Uint8Array;
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaimAmino {
  event_nonce: string;
  valset_nonce: string;
  block_height: string;
  members: BridgeValidatorAmino[];
  reward_amount: string;
  reward_token: string;
  orchestrator: string;
}
export interface MsgValsetUpdatedClaimAminoMsg {
  type: "/injective.peggy.v1.MsgValsetUpdatedClaim";
  value: MsgValsetUpdatedClaimAmino;
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaimSDKType {
  event_nonce: bigint;
  valset_nonce: bigint;
  block_height: bigint;
  members: BridgeValidatorSDKType[];
  reward_amount: string;
  reward_token: string;
  orchestrator: string;
}
export interface MsgValsetUpdatedClaimResponse {}
export interface MsgValsetUpdatedClaimResponseProtoMsg {
  typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaimResponse";
  value: Uint8Array;
}
export interface MsgValsetUpdatedClaimResponseAmino {}
export interface MsgValsetUpdatedClaimResponseAminoMsg {
  type: "/injective.peggy.v1.MsgValsetUpdatedClaimResponse";
  value: MsgValsetUpdatedClaimResponseAmino;
}
export interface MsgValsetUpdatedClaimResponseSDKType {}
function createBaseMsgSetOrchestratorAddresses(): MsgSetOrchestratorAddresses {
  return {
    sender: "",
    orchestrator: "",
    ethAddress: ""
  };
}
export const MsgSetOrchestratorAddresses = {
  typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
  encode(message: MsgSetOrchestratorAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.orchestrator !== "") {
      writer.uint32(18).string(message.orchestrator);
    }
    if (message.ethAddress !== "") {
      writer.uint32(26).string(message.ethAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetOrchestratorAddresses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOrchestratorAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.orchestrator = reader.string();
          break;
        case 3:
          message.ethAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetOrchestratorAddresses>): MsgSetOrchestratorAddresses {
    const message = createBaseMsgSetOrchestratorAddresses();
    message.sender = object.sender ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    return message;
  },
  fromAmino(object: MsgSetOrchestratorAddressesAmino): MsgSetOrchestratorAddresses {
    return {
      sender: object.sender,
      orchestrator: object.orchestrator,
      ethAddress: object.eth_address
    };
  },
  toAmino(message: MsgSetOrchestratorAddresses): MsgSetOrchestratorAddressesAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.orchestrator = message.orchestrator;
    obj.eth_address = message.ethAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSetOrchestratorAddressesAminoMsg): MsgSetOrchestratorAddresses {
    return MsgSetOrchestratorAddresses.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOrchestratorAddressesProtoMsg): MsgSetOrchestratorAddresses {
    return MsgSetOrchestratorAddresses.decode(message.value);
  },
  toProto(message: MsgSetOrchestratorAddresses): Uint8Array {
    return MsgSetOrchestratorAddresses.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOrchestratorAddresses): MsgSetOrchestratorAddressesProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
      value: MsgSetOrchestratorAddresses.encode(message).finish()
    };
  }
};
function createBaseMsgSetOrchestratorAddressesResponse(): MsgSetOrchestratorAddressesResponse {
  return {};
}
export const MsgSetOrchestratorAddressesResponse = {
  typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddressesResponse",
  encode(_: MsgSetOrchestratorAddressesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetOrchestratorAddressesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOrchestratorAddressesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSetOrchestratorAddressesResponse>): MsgSetOrchestratorAddressesResponse {
    const message = createBaseMsgSetOrchestratorAddressesResponse();
    return message;
  },
  fromAmino(_: MsgSetOrchestratorAddressesResponseAmino): MsgSetOrchestratorAddressesResponse {
    return {};
  },
  toAmino(_: MsgSetOrchestratorAddressesResponse): MsgSetOrchestratorAddressesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetOrchestratorAddressesResponseAminoMsg): MsgSetOrchestratorAddressesResponse {
    return MsgSetOrchestratorAddressesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOrchestratorAddressesResponseProtoMsg): MsgSetOrchestratorAddressesResponse {
    return MsgSetOrchestratorAddressesResponse.decode(message.value);
  },
  toProto(message: MsgSetOrchestratorAddressesResponse): Uint8Array {
    return MsgSetOrchestratorAddressesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOrchestratorAddressesResponse): MsgSetOrchestratorAddressesResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddressesResponse",
      value: MsgSetOrchestratorAddressesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgValsetConfirm(): MsgValsetConfirm {
  return {
    nonce: BigInt(0),
    orchestrator: "",
    ethAddress: "",
    signature: ""
  };
}
export const MsgValsetConfirm = {
  typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
  encode(message: MsgValsetConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.orchestrator !== "") {
      writer.uint32(18).string(message.orchestrator);
    }
    if (message.ethAddress !== "") {
      writer.uint32(26).string(message.ethAddress);
    }
    if (message.signature !== "") {
      writer.uint32(34).string(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgValsetConfirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        case 2:
          message.orchestrator = reader.string();
          break;
        case 3:
          message.ethAddress = reader.string();
          break;
        case 4:
          message.signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgValsetConfirm>): MsgValsetConfirm {
    const message = createBaseMsgValsetConfirm();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.orchestrator = object.orchestrator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
  fromAmino(object: MsgValsetConfirmAmino): MsgValsetConfirm {
    return {
      nonce: BigInt(object.nonce),
      orchestrator: object.orchestrator,
      ethAddress: object.eth_address,
      signature: object.signature
    };
  },
  toAmino(message: MsgValsetConfirm): MsgValsetConfirmAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.orchestrator = message.orchestrator;
    obj.eth_address = message.ethAddress;
    obj.signature = message.signature;
    return obj;
  },
  fromAminoMsg(object: MsgValsetConfirmAminoMsg): MsgValsetConfirm {
    return MsgValsetConfirm.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgValsetConfirmProtoMsg): MsgValsetConfirm {
    return MsgValsetConfirm.decode(message.value);
  },
  toProto(message: MsgValsetConfirm): Uint8Array {
    return MsgValsetConfirm.encode(message).finish();
  },
  toProtoMsg(message: MsgValsetConfirm): MsgValsetConfirmProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
      value: MsgValsetConfirm.encode(message).finish()
    };
  }
};
function createBaseMsgValsetConfirmResponse(): MsgValsetConfirmResponse {
  return {};
}
export const MsgValsetConfirmResponse = {
  typeUrl: "/injective.peggy.v1.MsgValsetConfirmResponse",
  encode(_: MsgValsetConfirmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgValsetConfirmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgValsetConfirmResponse>): MsgValsetConfirmResponse {
    const message = createBaseMsgValsetConfirmResponse();
    return message;
  },
  fromAmino(_: MsgValsetConfirmResponseAmino): MsgValsetConfirmResponse {
    return {};
  },
  toAmino(_: MsgValsetConfirmResponse): MsgValsetConfirmResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgValsetConfirmResponseAminoMsg): MsgValsetConfirmResponse {
    return MsgValsetConfirmResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgValsetConfirmResponseProtoMsg): MsgValsetConfirmResponse {
    return MsgValsetConfirmResponse.decode(message.value);
  },
  toProto(message: MsgValsetConfirmResponse): Uint8Array {
    return MsgValsetConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgValsetConfirmResponse): MsgValsetConfirmResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgValsetConfirmResponse",
      value: MsgValsetConfirmResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSendToEth(): MsgSendToEth {
  return {
    sender: "",
    ethDest: "",
    amount: Coin.fromPartial({}),
    bridgeFee: Coin.fromPartial({})
  };
}
export const MsgSendToEth = {
  typeUrl: "/injective.peggy.v1.MsgSendToEth",
  encode(message: MsgSendToEth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ethDest !== "") {
      writer.uint32(18).string(message.ethDest);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.bridgeFee !== undefined) {
      Coin.encode(message.bridgeFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendToEth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.ethDest = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.bridgeFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSendToEth>): MsgSendToEth {
    const message = createBaseMsgSendToEth();
    message.sender = object.sender ?? "";
    message.ethDest = object.ethDest ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.bridgeFee = object.bridgeFee !== undefined && object.bridgeFee !== null ? Coin.fromPartial(object.bridgeFee) : undefined;
    return message;
  },
  fromAmino(object: MsgSendToEthAmino): MsgSendToEth {
    return {
      sender: object.sender,
      ethDest: object.eth_dest,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      bridgeFee: object?.bridge_fee ? Coin.fromAmino(object.bridge_fee) : undefined
    };
  },
  toAmino(message: MsgSendToEth): MsgSendToEthAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.eth_dest = message.ethDest;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.bridge_fee = message.bridgeFee ? Coin.toAmino(message.bridgeFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSendToEthAminoMsg): MsgSendToEth {
    return MsgSendToEth.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendToEthProtoMsg): MsgSendToEth {
    return MsgSendToEth.decode(message.value);
  },
  toProto(message: MsgSendToEth): Uint8Array {
    return MsgSendToEth.encode(message).finish();
  },
  toProtoMsg(message: MsgSendToEth): MsgSendToEthProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgSendToEth",
      value: MsgSendToEth.encode(message).finish()
    };
  }
};
function createBaseMsgSendToEthResponse(): MsgSendToEthResponse {
  return {};
}
export const MsgSendToEthResponse = {
  typeUrl: "/injective.peggy.v1.MsgSendToEthResponse",
  encode(_: MsgSendToEthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendToEthResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToEthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSendToEthResponse>): MsgSendToEthResponse {
    const message = createBaseMsgSendToEthResponse();
    return message;
  },
  fromAmino(_: MsgSendToEthResponseAmino): MsgSendToEthResponse {
    return {};
  },
  toAmino(_: MsgSendToEthResponse): MsgSendToEthResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSendToEthResponseAminoMsg): MsgSendToEthResponse {
    return MsgSendToEthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendToEthResponseProtoMsg): MsgSendToEthResponse {
    return MsgSendToEthResponse.decode(message.value);
  },
  toProto(message: MsgSendToEthResponse): Uint8Array {
    return MsgSendToEthResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendToEthResponse): MsgSendToEthResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgSendToEthResponse",
      value: MsgSendToEthResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRequestBatch(): MsgRequestBatch {
  return {
    orchestrator: "",
    denom: ""
  };
}
export const MsgRequestBatch = {
  typeUrl: "/injective.peggy.v1.MsgRequestBatch",
  encode(message: MsgRequestBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orchestrator !== "") {
      writer.uint32(10).string(message.orchestrator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orchestrator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRequestBatch>): MsgRequestBatch {
    const message = createBaseMsgRequestBatch();
    message.orchestrator = object.orchestrator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgRequestBatchAmino): MsgRequestBatch {
    return {
      orchestrator: object.orchestrator,
      denom: object.denom
    };
  },
  toAmino(message: MsgRequestBatch): MsgRequestBatchAmino {
    const obj: any = {};
    obj.orchestrator = message.orchestrator;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgRequestBatchAminoMsg): MsgRequestBatch {
    return MsgRequestBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestBatchProtoMsg): MsgRequestBatch {
    return MsgRequestBatch.decode(message.value);
  },
  toProto(message: MsgRequestBatch): Uint8Array {
    return MsgRequestBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestBatch): MsgRequestBatchProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgRequestBatch",
      value: MsgRequestBatch.encode(message).finish()
    };
  }
};
function createBaseMsgRequestBatchResponse(): MsgRequestBatchResponse {
  return {};
}
export const MsgRequestBatchResponse = {
  typeUrl: "/injective.peggy.v1.MsgRequestBatchResponse",
  encode(_: MsgRequestBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestBatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgRequestBatchResponse>): MsgRequestBatchResponse {
    const message = createBaseMsgRequestBatchResponse();
    return message;
  },
  fromAmino(_: MsgRequestBatchResponseAmino): MsgRequestBatchResponse {
    return {};
  },
  toAmino(_: MsgRequestBatchResponse): MsgRequestBatchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestBatchResponseAminoMsg): MsgRequestBatchResponse {
    return MsgRequestBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestBatchResponseProtoMsg): MsgRequestBatchResponse {
    return MsgRequestBatchResponse.decode(message.value);
  },
  toProto(message: MsgRequestBatchResponse): Uint8Array {
    return MsgRequestBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestBatchResponse): MsgRequestBatchResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgRequestBatchResponse",
      value: MsgRequestBatchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmBatch(): MsgConfirmBatch {
  return {
    nonce: BigInt(0),
    tokenContract: "",
    ethSigner: "",
    orchestrator: "",
    signature: ""
  };
}
export const MsgConfirmBatch = {
  typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
  encode(message: MsgConfirmBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(18).string(message.tokenContract);
    }
    if (message.ethSigner !== "") {
      writer.uint32(26).string(message.ethSigner);
    }
    if (message.orchestrator !== "") {
      writer.uint32(34).string(message.orchestrator);
    }
    if (message.signature !== "") {
      writer.uint32(42).string(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        case 2:
          message.tokenContract = reader.string();
          break;
        case 3:
          message.ethSigner = reader.string();
          break;
        case 4:
          message.orchestrator = reader.string();
          break;
        case 5:
          message.signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgConfirmBatch>): MsgConfirmBatch {
    const message = createBaseMsgConfirmBatch();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.tokenContract = object.tokenContract ?? "";
    message.ethSigner = object.ethSigner ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
  fromAmino(object: MsgConfirmBatchAmino): MsgConfirmBatch {
    return {
      nonce: BigInt(object.nonce),
      tokenContract: object.token_contract,
      ethSigner: object.eth_signer,
      orchestrator: object.orchestrator,
      signature: object.signature
    };
  },
  toAmino(message: MsgConfirmBatch): MsgConfirmBatchAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.token_contract = message.tokenContract;
    obj.eth_signer = message.ethSigner;
    obj.orchestrator = message.orchestrator;
    obj.signature = message.signature;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmBatchAminoMsg): MsgConfirmBatch {
    return MsgConfirmBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmBatchProtoMsg): MsgConfirmBatch {
    return MsgConfirmBatch.decode(message.value);
  },
  toProto(message: MsgConfirmBatch): Uint8Array {
    return MsgConfirmBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmBatch): MsgConfirmBatchProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
      value: MsgConfirmBatch.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmBatchResponse(): MsgConfirmBatchResponse {
  return {};
}
export const MsgConfirmBatchResponse = {
  typeUrl: "/injective.peggy.v1.MsgConfirmBatchResponse",
  encode(_: MsgConfirmBatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmBatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgConfirmBatchResponse>): MsgConfirmBatchResponse {
    const message = createBaseMsgConfirmBatchResponse();
    return message;
  },
  fromAmino(_: MsgConfirmBatchResponseAmino): MsgConfirmBatchResponse {
    return {};
  },
  toAmino(_: MsgConfirmBatchResponse): MsgConfirmBatchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfirmBatchResponseAminoMsg): MsgConfirmBatchResponse {
    return MsgConfirmBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmBatchResponseProtoMsg): MsgConfirmBatchResponse {
    return MsgConfirmBatchResponse.decode(message.value);
  },
  toProto(message: MsgConfirmBatchResponse): Uint8Array {
    return MsgConfirmBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmBatchResponse): MsgConfirmBatchResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgConfirmBatchResponse",
      value: MsgConfirmBatchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDepositClaim(): MsgDepositClaim {
  return {
    eventNonce: BigInt(0),
    blockHeight: BigInt(0),
    tokenContract: "",
    amount: "",
    ethereumSender: "",
    cosmosReceiver: "",
    orchestrator: "",
    data: ""
  };
}
export const MsgDepositClaim = {
  typeUrl: "/injective.peggy.v1.MsgDepositClaim",
  encode(message: MsgDepositClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.tokenContract !== "") {
      writer.uint32(26).string(message.tokenContract);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.ethereumSender !== "") {
      writer.uint32(42).string(message.ethereumSender);
    }
    if (message.cosmosReceiver !== "") {
      writer.uint32(50).string(message.cosmosReceiver);
    }
    if (message.orchestrator !== "") {
      writer.uint32(58).string(message.orchestrator);
    }
    if (message.data !== "") {
      writer.uint32(66).string(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.blockHeight = reader.uint64();
          break;
        case 3:
          message.tokenContract = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.ethereumSender = reader.string();
          break;
        case 6:
          message.cosmosReceiver = reader.string();
          break;
        case 7:
          message.orchestrator = reader.string();
          break;
        case 8:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDepositClaim>): MsgDepositClaim {
    const message = createBaseMsgDepositClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.tokenContract = object.tokenContract ?? "";
    message.amount = object.amount ?? "";
    message.ethereumSender = object.ethereumSender ?? "";
    message.cosmosReceiver = object.cosmosReceiver ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.data = object.data ?? "";
    return message;
  },
  fromAmino(object: MsgDepositClaimAmino): MsgDepositClaim {
    return {
      eventNonce: BigInt(object.event_nonce),
      blockHeight: BigInt(object.block_height),
      tokenContract: object.token_contract,
      amount: object.amount,
      ethereumSender: object.ethereum_sender,
      cosmosReceiver: object.cosmos_receiver,
      orchestrator: object.orchestrator,
      data: object.data
    };
  },
  toAmino(message: MsgDepositClaim): MsgDepositClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.token_contract = message.tokenContract;
    obj.amount = message.amount;
    obj.ethereum_sender = message.ethereumSender;
    obj.cosmos_receiver = message.cosmosReceiver;
    obj.orchestrator = message.orchestrator;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: MsgDepositClaimAminoMsg): MsgDepositClaim {
    return MsgDepositClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositClaimProtoMsg): MsgDepositClaim {
    return MsgDepositClaim.decode(message.value);
  },
  toProto(message: MsgDepositClaim): Uint8Array {
    return MsgDepositClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositClaim): MsgDepositClaimProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgDepositClaim",
      value: MsgDepositClaim.encode(message).finish()
    };
  }
};
function createBaseMsgDepositClaimResponse(): MsgDepositClaimResponse {
  return {};
}
export const MsgDepositClaimResponse = {
  typeUrl: "/injective.peggy.v1.MsgDepositClaimResponse",
  encode(_: MsgDepositClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgDepositClaimResponse>): MsgDepositClaimResponse {
    const message = createBaseMsgDepositClaimResponse();
    return message;
  },
  fromAmino(_: MsgDepositClaimResponseAmino): MsgDepositClaimResponse {
    return {};
  },
  toAmino(_: MsgDepositClaimResponse): MsgDepositClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositClaimResponseAminoMsg): MsgDepositClaimResponse {
    return MsgDepositClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositClaimResponseProtoMsg): MsgDepositClaimResponse {
    return MsgDepositClaimResponse.decode(message.value);
  },
  toProto(message: MsgDepositClaimResponse): Uint8Array {
    return MsgDepositClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositClaimResponse): MsgDepositClaimResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgDepositClaimResponse",
      value: MsgDepositClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawClaim(): MsgWithdrawClaim {
  return {
    eventNonce: BigInt(0),
    blockHeight: BigInt(0),
    batchNonce: BigInt(0),
    tokenContract: "",
    orchestrator: ""
  };
}
export const MsgWithdrawClaim = {
  typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
  encode(message: MsgWithdrawClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.batchNonce !== BigInt(0)) {
      writer.uint32(24).uint64(message.batchNonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }
    if (message.orchestrator !== "") {
      writer.uint32(42).string(message.orchestrator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.blockHeight = reader.uint64();
          break;
        case 3:
          message.batchNonce = reader.uint64();
          break;
        case 4:
          message.tokenContract = reader.string();
          break;
        case 5:
          message.orchestrator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawClaim>): MsgWithdrawClaim {
    const message = createBaseMsgWithdrawClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce.toString()) : BigInt(0);
    message.tokenContract = object.tokenContract ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawClaimAmino): MsgWithdrawClaim {
    return {
      eventNonce: BigInt(object.event_nonce),
      blockHeight: BigInt(object.block_height),
      batchNonce: BigInt(object.batch_nonce),
      tokenContract: object.token_contract,
      orchestrator: object.orchestrator
    };
  },
  toAmino(message: MsgWithdrawClaim): MsgWithdrawClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.batch_nonce = message.batchNonce ? message.batchNonce.toString() : undefined;
    obj.token_contract = message.tokenContract;
    obj.orchestrator = message.orchestrator;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawClaimAminoMsg): MsgWithdrawClaim {
    return MsgWithdrawClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawClaimProtoMsg): MsgWithdrawClaim {
    return MsgWithdrawClaim.decode(message.value);
  },
  toProto(message: MsgWithdrawClaim): Uint8Array {
    return MsgWithdrawClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawClaim): MsgWithdrawClaimProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
      value: MsgWithdrawClaim.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawClaimResponse(): MsgWithdrawClaimResponse {
  return {};
}
export const MsgWithdrawClaimResponse = {
  typeUrl: "/injective.peggy.v1.MsgWithdrawClaimResponse",
  encode(_: MsgWithdrawClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgWithdrawClaimResponse>): MsgWithdrawClaimResponse {
    const message = createBaseMsgWithdrawClaimResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawClaimResponseAmino): MsgWithdrawClaimResponse {
    return {};
  },
  toAmino(_: MsgWithdrawClaimResponse): MsgWithdrawClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawClaimResponseAminoMsg): MsgWithdrawClaimResponse {
    return MsgWithdrawClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawClaimResponseProtoMsg): MsgWithdrawClaimResponse {
    return MsgWithdrawClaimResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawClaimResponse): Uint8Array {
    return MsgWithdrawClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawClaimResponse): MsgWithdrawClaimResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgWithdrawClaimResponse",
      value: MsgWithdrawClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgERC20DeployedClaim(): MsgERC20DeployedClaim {
  return {
    eventNonce: BigInt(0),
    blockHeight: BigInt(0),
    cosmosDenom: "",
    tokenContract: "",
    name: "",
    symbol: "",
    decimals: BigInt(0),
    orchestrator: ""
  };
}
export const MsgERC20DeployedClaim = {
  typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
  encode(message: MsgERC20DeployedClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.cosmosDenom !== "") {
      writer.uint32(26).string(message.cosmosDenom);
    }
    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(50).string(message.symbol);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(56).uint64(message.decimals);
    }
    if (message.orchestrator !== "") {
      writer.uint32(66).string(message.orchestrator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgERC20DeployedClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgERC20DeployedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.blockHeight = reader.uint64();
          break;
        case 3:
          message.cosmosDenom = reader.string();
          break;
        case 4:
          message.tokenContract = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.symbol = reader.string();
          break;
        case 7:
          message.decimals = reader.uint64();
          break;
        case 8:
          message.orchestrator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgERC20DeployedClaim>): MsgERC20DeployedClaim {
    const message = createBaseMsgERC20DeployedClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.cosmosDenom = object.cosmosDenom ?? "";
    message.tokenContract = object.tokenContract ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
  fromAmino(object: MsgERC20DeployedClaimAmino): MsgERC20DeployedClaim {
    return {
      eventNonce: BigInt(object.event_nonce),
      blockHeight: BigInt(object.block_height),
      cosmosDenom: object.cosmos_denom,
      tokenContract: object.token_contract,
      name: object.name,
      symbol: object.symbol,
      decimals: BigInt(object.decimals),
      orchestrator: object.orchestrator
    };
  },
  toAmino(message: MsgERC20DeployedClaim): MsgERC20DeployedClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.cosmos_denom = message.cosmosDenom;
    obj.token_contract = message.tokenContract;
    obj.name = message.name;
    obj.symbol = message.symbol;
    obj.decimals = message.decimals ? message.decimals.toString() : undefined;
    obj.orchestrator = message.orchestrator;
    return obj;
  },
  fromAminoMsg(object: MsgERC20DeployedClaimAminoMsg): MsgERC20DeployedClaim {
    return MsgERC20DeployedClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgERC20DeployedClaimProtoMsg): MsgERC20DeployedClaim {
    return MsgERC20DeployedClaim.decode(message.value);
  },
  toProto(message: MsgERC20DeployedClaim): Uint8Array {
    return MsgERC20DeployedClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgERC20DeployedClaim): MsgERC20DeployedClaimProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
      value: MsgERC20DeployedClaim.encode(message).finish()
    };
  }
};
function createBaseMsgERC20DeployedClaimResponse(): MsgERC20DeployedClaimResponse {
  return {};
}
export const MsgERC20DeployedClaimResponse = {
  typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaimResponse",
  encode(_: MsgERC20DeployedClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgERC20DeployedClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgERC20DeployedClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgERC20DeployedClaimResponse>): MsgERC20DeployedClaimResponse {
    const message = createBaseMsgERC20DeployedClaimResponse();
    return message;
  },
  fromAmino(_: MsgERC20DeployedClaimResponseAmino): MsgERC20DeployedClaimResponse {
    return {};
  },
  toAmino(_: MsgERC20DeployedClaimResponse): MsgERC20DeployedClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgERC20DeployedClaimResponseAminoMsg): MsgERC20DeployedClaimResponse {
    return MsgERC20DeployedClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgERC20DeployedClaimResponseProtoMsg): MsgERC20DeployedClaimResponse {
    return MsgERC20DeployedClaimResponse.decode(message.value);
  },
  toProto(message: MsgERC20DeployedClaimResponse): Uint8Array {
    return MsgERC20DeployedClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgERC20DeployedClaimResponse): MsgERC20DeployedClaimResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaimResponse",
      value: MsgERC20DeployedClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelSendToEth(): MsgCancelSendToEth {
  return {
    transactionId: BigInt(0),
    sender: ""
  };
}
export const MsgCancelSendToEth = {
  typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
  encode(message: MsgCancelSendToEth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transactionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.transactionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelSendToEth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCancelSendToEth>): MsgCancelSendToEth {
    const message = createBaseMsgCancelSendToEth();
    message.transactionId = object.transactionId !== undefined && object.transactionId !== null ? BigInt(object.transactionId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgCancelSendToEthAmino): MsgCancelSendToEth {
    return {
      transactionId: BigInt(object.transaction_id),
      sender: object.sender
    };
  },
  toAmino(message: MsgCancelSendToEth): MsgCancelSendToEthAmino {
    const obj: any = {};
    obj.transaction_id = message.transactionId ? message.transactionId.toString() : undefined;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgCancelSendToEthAminoMsg): MsgCancelSendToEth {
    return MsgCancelSendToEth.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSendToEthProtoMsg): MsgCancelSendToEth {
    return MsgCancelSendToEth.decode(message.value);
  },
  toProto(message: MsgCancelSendToEth): Uint8Array {
    return MsgCancelSendToEth.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSendToEth): MsgCancelSendToEthProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
      value: MsgCancelSendToEth.encode(message).finish()
    };
  }
};
function createBaseMsgCancelSendToEthResponse(): MsgCancelSendToEthResponse {
  return {};
}
export const MsgCancelSendToEthResponse = {
  typeUrl: "/injective.peggy.v1.MsgCancelSendToEthResponse",
  encode(_: MsgCancelSendToEthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelSendToEthResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToEthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgCancelSendToEthResponse>): MsgCancelSendToEthResponse {
    const message = createBaseMsgCancelSendToEthResponse();
    return message;
  },
  fromAmino(_: MsgCancelSendToEthResponseAmino): MsgCancelSendToEthResponse {
    return {};
  },
  toAmino(_: MsgCancelSendToEthResponse): MsgCancelSendToEthResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelSendToEthResponseAminoMsg): MsgCancelSendToEthResponse {
    return MsgCancelSendToEthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSendToEthResponseProtoMsg): MsgCancelSendToEthResponse {
    return MsgCancelSendToEthResponse.decode(message.value);
  },
  toProto(message: MsgCancelSendToEthResponse): Uint8Array {
    return MsgCancelSendToEthResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSendToEthResponse): MsgCancelSendToEthResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgCancelSendToEthResponse",
      value: MsgCancelSendToEthResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitBadSignatureEvidence(): MsgSubmitBadSignatureEvidence {
  return {
    subject: undefined,
    signature: "",
    sender: ""
  };
}
export const MsgSubmitBadSignatureEvidence = {
  typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
  encode(message: MsgSubmitBadSignatureEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subject !== undefined) {
      Any.encode(message.subject, writer.uint32(10).fork()).ldelim();
    }
    if (message.signature !== "") {
      writer.uint32(18).string(message.signature);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitBadSignatureEvidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitBadSignatureEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subject = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.signature = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitBadSignatureEvidence>): MsgSubmitBadSignatureEvidence {
    const message = createBaseMsgSubmitBadSignatureEvidence();
    message.subject = object.subject !== undefined && object.subject !== null ? Any.fromPartial(object.subject) : undefined;
    message.signature = object.signature ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitBadSignatureEvidenceAmino): MsgSubmitBadSignatureEvidence {
    return {
      subject: object?.subject ? Any.fromAmino(object.subject) : undefined,
      signature: object.signature,
      sender: object.sender
    };
  },
  toAmino(message: MsgSubmitBadSignatureEvidence): MsgSubmitBadSignatureEvidenceAmino {
    const obj: any = {};
    obj.subject = message.subject ? Any.toAmino(message.subject) : undefined;
    obj.signature = message.signature;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitBadSignatureEvidenceAminoMsg): MsgSubmitBadSignatureEvidence {
    return MsgSubmitBadSignatureEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitBadSignatureEvidenceProtoMsg): MsgSubmitBadSignatureEvidence {
    return MsgSubmitBadSignatureEvidence.decode(message.value);
  },
  toProto(message: MsgSubmitBadSignatureEvidence): Uint8Array {
    return MsgSubmitBadSignatureEvidence.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitBadSignatureEvidence): MsgSubmitBadSignatureEvidenceProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
      value: MsgSubmitBadSignatureEvidence.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitBadSignatureEvidenceResponse(): MsgSubmitBadSignatureEvidenceResponse {
  return {};
}
export const MsgSubmitBadSignatureEvidenceResponse = {
  typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidenceResponse",
  encode(_: MsgSubmitBadSignatureEvidenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitBadSignatureEvidenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSubmitBadSignatureEvidenceResponse>): MsgSubmitBadSignatureEvidenceResponse {
    const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
    return message;
  },
  fromAmino(_: MsgSubmitBadSignatureEvidenceResponseAmino): MsgSubmitBadSignatureEvidenceResponse {
    return {};
  },
  toAmino(_: MsgSubmitBadSignatureEvidenceResponse): MsgSubmitBadSignatureEvidenceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitBadSignatureEvidenceResponseAminoMsg): MsgSubmitBadSignatureEvidenceResponse {
    return MsgSubmitBadSignatureEvidenceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitBadSignatureEvidenceResponseProtoMsg): MsgSubmitBadSignatureEvidenceResponse {
    return MsgSubmitBadSignatureEvidenceResponse.decode(message.value);
  },
  toProto(message: MsgSubmitBadSignatureEvidenceResponse): Uint8Array {
    return MsgSubmitBadSignatureEvidenceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitBadSignatureEvidenceResponse): MsgSubmitBadSignatureEvidenceResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidenceResponse",
      value: MsgSubmitBadSignatureEvidenceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgValsetUpdatedClaim(): MsgValsetUpdatedClaim {
  return {
    eventNonce: BigInt(0),
    valsetNonce: BigInt(0),
    blockHeight: BigInt(0),
    members: [],
    rewardAmount: "",
    rewardToken: "",
    orchestrator: ""
  };
}
export const MsgValsetUpdatedClaim = {
  typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
  encode(message: MsgValsetUpdatedClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.valsetNonce !== BigInt(0)) {
      writer.uint32(16).uint64(message.valsetNonce);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.blockHeight);
    }
    for (const v of message.members) {
      BridgeValidator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.rewardAmount !== "") {
      writer.uint32(42).string(message.rewardAmount);
    }
    if (message.rewardToken !== "") {
      writer.uint32(50).string(message.rewardToken);
    }
    if (message.orchestrator !== "") {
      writer.uint32(58).string(message.orchestrator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgValsetUpdatedClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetUpdatedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.valsetNonce = reader.uint64();
          break;
        case 3:
          message.blockHeight = reader.uint64();
          break;
        case 4:
          message.members.push(BridgeValidator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.rewardAmount = reader.string();
          break;
        case 6:
          message.rewardToken = reader.string();
          break;
        case 7:
          message.orchestrator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgValsetUpdatedClaim>): MsgValsetUpdatedClaim {
    const message = createBaseMsgValsetUpdatedClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? BigInt(object.valsetNonce.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.members = object.members?.map(e => BridgeValidator.fromPartial(e)) || [];
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
  fromAmino(object: MsgValsetUpdatedClaimAmino): MsgValsetUpdatedClaim {
    return {
      eventNonce: BigInt(object.event_nonce),
      valsetNonce: BigInt(object.valset_nonce),
      blockHeight: BigInt(object.block_height),
      members: Array.isArray(object?.members) ? object.members.map((e: any) => BridgeValidator.fromAmino(e)) : [],
      rewardAmount: object.reward_amount,
      rewardToken: object.reward_token,
      orchestrator: object.orchestrator
    };
  },
  toAmino(message: MsgValsetUpdatedClaim): MsgValsetUpdatedClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.valset_nonce = message.valsetNonce ? message.valsetNonce.toString() : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    if (message.members) {
      obj.members = message.members.map(e => e ? BridgeValidator.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.reward_amount = message.rewardAmount;
    obj.reward_token = message.rewardToken;
    obj.orchestrator = message.orchestrator;
    return obj;
  },
  fromAminoMsg(object: MsgValsetUpdatedClaimAminoMsg): MsgValsetUpdatedClaim {
    return MsgValsetUpdatedClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgValsetUpdatedClaimProtoMsg): MsgValsetUpdatedClaim {
    return MsgValsetUpdatedClaim.decode(message.value);
  },
  toProto(message: MsgValsetUpdatedClaim): Uint8Array {
    return MsgValsetUpdatedClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgValsetUpdatedClaim): MsgValsetUpdatedClaimProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
      value: MsgValsetUpdatedClaim.encode(message).finish()
    };
  }
};
function createBaseMsgValsetUpdatedClaimResponse(): MsgValsetUpdatedClaimResponse {
  return {};
}
export const MsgValsetUpdatedClaimResponse = {
  typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaimResponse",
  encode(_: MsgValsetUpdatedClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgValsetUpdatedClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetUpdatedClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgValsetUpdatedClaimResponse>): MsgValsetUpdatedClaimResponse {
    const message = createBaseMsgValsetUpdatedClaimResponse();
    return message;
  },
  fromAmino(_: MsgValsetUpdatedClaimResponseAmino): MsgValsetUpdatedClaimResponse {
    return {};
  },
  toAmino(_: MsgValsetUpdatedClaimResponse): MsgValsetUpdatedClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgValsetUpdatedClaimResponseAminoMsg): MsgValsetUpdatedClaimResponse {
    return MsgValsetUpdatedClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgValsetUpdatedClaimResponseProtoMsg): MsgValsetUpdatedClaimResponse {
    return MsgValsetUpdatedClaimResponse.decode(message.value);
  },
  toProto(message: MsgValsetUpdatedClaimResponse): Uint8Array {
    return MsgValsetUpdatedClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgValsetUpdatedClaimResponse): MsgValsetUpdatedClaimResponseProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaimResponse",
      value: MsgValsetUpdatedClaimResponse.encode(message).finish()
    };
  }
};