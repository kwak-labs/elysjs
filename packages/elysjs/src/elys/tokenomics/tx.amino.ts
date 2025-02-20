//@ts-nocheck
import { MsgCreateAirdrop, MsgUpdateAirdrop, MsgDeleteAirdrop, MsgClaimAirdrop, MsgUpdateGenesisInflation, MsgCreateTimeBasedInflation, MsgUpdateTimeBasedInflation, MsgDeleteTimeBasedInflation } from "./tx";
export const AminoConverter = {
  "/elys.tokenomics.MsgCreateAirdrop": {
    aminoType: "tokenomics/MsgCreateAirdrop",
    toAmino: MsgCreateAirdrop.toAmino,
    fromAmino: MsgCreateAirdrop.fromAmino
  },
  "/elys.tokenomics.MsgUpdateAirdrop": {
    aminoType: "tokenomics/MsgUpdateAirdrop",
    toAmino: MsgUpdateAirdrop.toAmino,
    fromAmino: MsgUpdateAirdrop.fromAmino
  },
  "/elys.tokenomics.MsgDeleteAirdrop": {
    aminoType: "tokenomics/MsgDeleteAirdrop",
    toAmino: MsgDeleteAirdrop.toAmino,
    fromAmino: MsgDeleteAirdrop.fromAmino
  },
  "/elys.tokenomics.MsgClaimAirdrop": {
    aminoType: "tokenomics/MsgClaimAirdrop",
    toAmino: MsgClaimAirdrop.toAmino,
    fromAmino: MsgClaimAirdrop.fromAmino
  },
  "/elys.tokenomics.MsgUpdateGenesisInflation": {
    aminoType: "tokenomics/MsgUpdateGenesisInflation",
    toAmino: MsgUpdateGenesisInflation.toAmino,
    fromAmino: MsgUpdateGenesisInflation.fromAmino
  },
  "/elys.tokenomics.MsgCreateTimeBasedInflation": {
    aminoType: "tokenomics/MsgCreateTimeBasedInflation",
    toAmino: MsgCreateTimeBasedInflation.toAmino,
    fromAmino: MsgCreateTimeBasedInflation.fromAmino
  },
  "/elys.tokenomics.MsgUpdateTimeBasedInflation": {
    aminoType: "tokenomics/MsgUpdateTimeBasedInflation",
    toAmino: MsgUpdateTimeBasedInflation.toAmino,
    fromAmino: MsgUpdateTimeBasedInflation.fromAmino
  },
  "/elys.tokenomics.MsgDeleteTimeBasedInflation": {
    aminoType: "tokenomics/MsgDeleteTimeBasedInflation",
    toAmino: MsgDeleteTimeBasedInflation.toAmino,
    fromAmino: MsgDeleteTimeBasedInflation.fromAmino
  }
};