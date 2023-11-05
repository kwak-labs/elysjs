import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgCreateEntry, MsgCreateEntryResponse, MsgUpdateEntry, MsgUpdateEntryResponse, MsgDeleteEntry, MsgDeleteEntryResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createEntry(request: MsgCreateEntry): Promise<MsgCreateEntryResponse>;
  updateEntry(request: MsgUpdateEntry): Promise<MsgUpdateEntryResponse>;
  deleteEntry(request: MsgDeleteEntry): Promise<MsgDeleteEntryResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createEntry = this.createEntry.bind(this);
    this.updateEntry = this.updateEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }
  createEntry(request: MsgCreateEntry): Promise<MsgCreateEntryResponse> {
    const data = MsgCreateEntry.encode(request).finish();
    const promise = this.rpc.request("elys.assetprofile.Msg", "CreateEntry", data);
    return promise.then(data => MsgCreateEntryResponse.decode(new BinaryReader(data)));
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
}