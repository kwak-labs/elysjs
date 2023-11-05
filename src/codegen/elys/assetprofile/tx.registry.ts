import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateEntry, MsgUpdateEntry, MsgDeleteEntry } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.assetprofile.MsgCreateEntry", MsgCreateEntry], ["/elys.assetprofile.MsgUpdateEntry", MsgUpdateEntry], ["/elys.assetprofile.MsgDeleteEntry", MsgDeleteEntry]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createEntry(value: MsgCreateEntry) {
      return {
        typeUrl: "/elys.assetprofile.MsgCreateEntry",
        value: MsgCreateEntry.encode(value).finish()
      };
    },
    updateEntry(value: MsgUpdateEntry) {
      return {
        typeUrl: "/elys.assetprofile.MsgUpdateEntry",
        value: MsgUpdateEntry.encode(value).finish()
      };
    },
    deleteEntry(value: MsgDeleteEntry) {
      return {
        typeUrl: "/elys.assetprofile.MsgDeleteEntry",
        value: MsgDeleteEntry.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createEntry(value: MsgCreateEntry) {
      return {
        typeUrl: "/elys.assetprofile.MsgCreateEntry",
        value
      };
    },
    updateEntry(value: MsgUpdateEntry) {
      return {
        typeUrl: "/elys.assetprofile.MsgUpdateEntry",
        value
      };
    },
    deleteEntry(value: MsgDeleteEntry) {
      return {
        typeUrl: "/elys.assetprofile.MsgDeleteEntry",
        value
      };
    }
  },
  fromPartial: {
    createEntry(value: MsgCreateEntry) {
      return {
        typeUrl: "/elys.assetprofile.MsgCreateEntry",
        value: MsgCreateEntry.fromPartial(value)
      };
    },
    updateEntry(value: MsgUpdateEntry) {
      return {
        typeUrl: "/elys.assetprofile.MsgUpdateEntry",
        value: MsgUpdateEntry.fromPartial(value)
      };
    },
    deleteEntry(value: MsgDeleteEntry) {
      return {
        typeUrl: "/elys.assetprofile.MsgDeleteEntry",
        value: MsgDeleteEntry.fromPartial(value)
      };
    }
  }
};