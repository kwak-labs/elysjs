import { MsgCreateAirdrop, MsgUpdateAirdrop, MsgDeleteAirdrop, MsgUpdateGenesisInflation, MsgCreateTimeBasedInflation, MsgUpdateTimeBasedInflation, MsgDeleteTimeBasedInflation } from "./tx";
export const AminoConverter = {
  "/elys.tokenomics.MsgCreateAirdrop": {
    aminoType: "/elys.tokenomics.MsgCreateAirdrop",
    toAmino: MsgCreateAirdrop.toAmino,
    fromAmino: MsgCreateAirdrop.fromAmino
  },
  "/elys.tokenomics.MsgUpdateAirdrop": {
    aminoType: "/elys.tokenomics.MsgUpdateAirdrop",
    toAmino: MsgUpdateAirdrop.toAmino,
    fromAmino: MsgUpdateAirdrop.fromAmino
  },
  "/elys.tokenomics.MsgDeleteAirdrop": {
    aminoType: "/elys.tokenomics.MsgDeleteAirdrop",
    toAmino: MsgDeleteAirdrop.toAmino,
    fromAmino: MsgDeleteAirdrop.fromAmino
  },
  "/elys.tokenomics.MsgUpdateGenesisInflation": {
    aminoType: "/elys.tokenomics.MsgUpdateGenesisInflation",
    toAmino: MsgUpdateGenesisInflation.toAmino,
    fromAmino: MsgUpdateGenesisInflation.fromAmino
  },
  "/elys.tokenomics.MsgCreateTimeBasedInflation": {
    aminoType: "/elys.tokenomics.MsgCreateTimeBasedInflation",
    toAmino: MsgCreateTimeBasedInflation.toAmino,
    fromAmino: MsgCreateTimeBasedInflation.fromAmino
  },
  "/elys.tokenomics.MsgUpdateTimeBasedInflation": {
    aminoType: "/elys.tokenomics.MsgUpdateTimeBasedInflation",
    toAmino: MsgUpdateTimeBasedInflation.toAmino,
    fromAmino: MsgUpdateTimeBasedInflation.fromAmino
  },
  "/elys.tokenomics.MsgDeleteTimeBasedInflation": {
    aminoType: "/elys.tokenomics.MsgDeleteTimeBasedInflation",
    toAmino: MsgDeleteTimeBasedInflation.toAmino,
    fromAmino: MsgDeleteTimeBasedInflation.fromAmino
  }
};