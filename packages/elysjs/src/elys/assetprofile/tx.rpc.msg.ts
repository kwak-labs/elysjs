//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateEntry, MsgUpdateEntryResponse, MsgDeleteEntry, MsgDeleteEntryResponse, MsgAddEntry, MsgAddEntryResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  updateEntry(request: MsgUpdateEntry): Promise<MsgUpdateEntryResponse>;
  deleteEntry(request: MsgDeleteEntry): Promise<MsgDeleteEntryResponse>;
  addEntry(request: MsgAddEntry): Promise<MsgAddEntryResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateEntry = this.updateEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.addEntry = this.addEntry.bind(this);
  }
  updateEntry(request: MsgUpdateEntry): Promise<MsgUpdateEntryResponse> {
    const data = MsgUpdateEntry.encode(request).finish();
    const promise = this.rpc.request("elys.assetprofile.Msg", "UpdateEntry", data);
    return promise.then(data => MsgUpdateEntryResponse.decode(new BinaryReader(data)));
  }
  deleteEntry(request: MsgDeleteEntry): Promise<MsgDeleteEntryResponse> {
    const data = MsgDeleteEntry.encode(request).finish();
    const promise = this.rpc.request("elys.assetprofile.Msg", "DeleteEntry", data);
    return promise.then(data => MsgDeleteEntryResponse.decode(new BinaryReader(data)));
  }
  addEntry(request: MsgAddEntry): Promise<MsgAddEntryResponse> {
    const data = MsgAddEntry.encode(request).finish();
    const promise = this.rpc.request("elys.assetprofile.Msg", "AddEntry", data);
    return promise.then(data => MsgAddEntryResponse.decode(new BinaryReader(data)));
  }
}