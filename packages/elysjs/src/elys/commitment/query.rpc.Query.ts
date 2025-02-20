//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryShowCommitmentsRequest, QueryShowCommitmentsResponse, QueryCommittedTokensLockedRequest, QueryCommittedTokensLockedResponse, QueryNumberOfCommitmentsRequest, QueryNumberOfCommitmentsResponse, QueryCommitmentVestingInfoRequest, QueryCommitmentVestingInfoResponse, QueryAirDropRequest, QueryAirDropResponse, QueryTotalAirDropClaimedRequest, QueryTotalAirDropClaimedResponse, QueryKolRequest, QueryKolResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Commitment item. */
  showCommitments(request: QueryShowCommitmentsRequest): Promise<QueryShowCommitmentsResponse>;
  /** Queries sum of committed tokens locked and not unlockable */
  committedTokensLocked(request: QueryCommittedTokensLockedRequest): Promise<QueryCommittedTokensLockedResponse>;
  /** Queries the total number of commitment items. */
  numberOfCommitments(request?: QueryNumberOfCommitmentsRequest): Promise<QueryNumberOfCommitmentsResponse>;
  /** Queries a list of CommitmentVestingInfo items. */
  commitmentVestingInfo(request: QueryCommitmentVestingInfoRequest): Promise<QueryCommitmentVestingInfoResponse>;
  airDrop(request: QueryAirDropRequest): Promise<QueryAirDropResponse>;
  totalAirdropClaimed(request?: QueryTotalAirDropClaimedRequest): Promise<QueryTotalAirDropClaimedResponse>;
  kol(request: QueryKolRequest): Promise<QueryKolResponse>;
  totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.showCommitments = this.showCommitments.bind(this);
    this.committedTokensLocked = this.committedTokensLocked.bind(this);
    this.numberOfCommitments = this.numberOfCommitments.bind(this);
    this.commitmentVestingInfo = this.commitmentVestingInfo.bind(this);
    this.airDrop = this.airDrop.bind(this);
    this.totalAirdropClaimed = this.totalAirdropClaimed.bind(this);
    this.kol = this.kol.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  showCommitments(request: QueryShowCommitmentsRequest): Promise<QueryShowCommitmentsResponse> {
    const data = QueryShowCommitmentsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Query", "ShowCommitments", data);
    return promise.then(data => QueryShowCommitmentsResponse.decode(new BinaryReader(data)));
  }
  committedTokensLocked(request: QueryCommittedTokensLockedRequest): Promise<QueryCommittedTokensLockedResponse> {
    const data = QueryCommittedTokensLockedRequest.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Query", "CommittedTokensLocked", data);
    return promise.then(data => QueryCommittedTokensLockedResponse.decode(new BinaryReader(data)));
  }
  numberOfCommitments(request: QueryNumberOfCommitmentsRequest = {}): Promise<QueryNumberOfCommitmentsResponse> {
    const data = QueryNumberOfCommitmentsRequest.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Query", "NumberOfCommitments", data);
    return promise.then(data => QueryNumberOfCommitmentsResponse.decode(new BinaryReader(data)));
  }
  commitmentVestingInfo(request: QueryCommitmentVestingInfoRequest): Promise<QueryCommitmentVestingInfoResponse> {
    const data = QueryCommitmentVestingInfoRequest.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Query", "CommitmentVestingInfo", data);
    return promise.then(data => QueryCommitmentVestingInfoResponse.decode(new BinaryReader(data)));
  }
  airDrop(request: QueryAirDropRequest): Promise<QueryAirDropResponse> {
    const data = QueryAirDropRequest.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Query", "AirDrop", data);
    return promise.then(data => QueryAirDropResponse.decode(new BinaryReader(data)));
  }
  totalAirdropClaimed(request: QueryTotalAirDropClaimedRequest = {}): Promise<QueryTotalAirDropClaimedResponse> {
    const data = QueryTotalAirDropClaimedRequest.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Query", "TotalAirdropClaimed", data);
    return promise.then(data => QueryTotalAirDropClaimedResponse.decode(new BinaryReader(data)));
  }
  kol(request: QueryKolRequest): Promise<QueryKolResponse> {
    const data = QueryKolRequest.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Query", "Kol", data);
    return promise.then(data => QueryKolResponse.decode(new BinaryReader(data)));
  }
  totalSupply(request: QueryTotalSupplyRequest = {}): Promise<QueryTotalSupplyResponse> {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("elys.commitment.Query", "TotalSupply", data);
    return promise.then(data => QueryTotalSupplyResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    showCommitments(request: QueryShowCommitmentsRequest): Promise<QueryShowCommitmentsResponse> {
      return queryService.showCommitments(request);
    },
    committedTokensLocked(request: QueryCommittedTokensLockedRequest): Promise<QueryCommittedTokensLockedResponse> {
      return queryService.committedTokensLocked(request);
    },
    numberOfCommitments(request?: QueryNumberOfCommitmentsRequest): Promise<QueryNumberOfCommitmentsResponse> {
      return queryService.numberOfCommitments(request);
    },
    commitmentVestingInfo(request: QueryCommitmentVestingInfoRequest): Promise<QueryCommitmentVestingInfoResponse> {
      return queryService.commitmentVestingInfo(request);
    },
    airDrop(request: QueryAirDropRequest): Promise<QueryAirDropResponse> {
      return queryService.airDrop(request);
    },
    totalAirdropClaimed(request?: QueryTotalAirDropClaimedRequest): Promise<QueryTotalAirDropClaimedResponse> {
      return queryService.totalAirdropClaimed(request);
    },
    kol(request: QueryKolRequest): Promise<QueryKolResponse> {
      return queryService.kol(request);
    },
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
      return queryService.totalSupply(request);
    }
  };
};