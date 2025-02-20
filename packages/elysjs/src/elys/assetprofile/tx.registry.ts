//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateEntry, MsgDeleteEntry, MsgAddEntry } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.assetprofile.MsgUpdateEntry", MsgUpdateEntry], ["/elys.assetprofile.MsgDeleteEntry", MsgDeleteEntry], ["/elys.assetprofile.MsgAddEntry", MsgAddEntry]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
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
    },
    addEntry(value: MsgAddEntry) {
      return {
        typeUrl: "/elys.assetprofile.MsgAddEntry",
        value: MsgAddEntry.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
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
    },
    addEntry(value: MsgAddEntry) {
      return {
        typeUrl: "/elys.assetprofile.MsgAddEntry",
        value
      };
    }
  },
  fromPartial: {
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
    },
    addEntry(value: MsgAddEntry) {
      return {
        typeUrl: "/elys.assetprofile.MsgAddEntry",
        value: MsgAddEntry.fromPartial(value)
      };
    }
  }
};