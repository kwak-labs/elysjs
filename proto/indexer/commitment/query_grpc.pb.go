// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package commitment

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type QueryClient interface {
	// Parameters queries the parameters of the module.
	Params(ctx context.Context, in *QueryParamsRequest, opts ...grpc.CallOption) (*QueryParamsResponse, error)
	// Queries a Commitment item.
	ShowCommitments(ctx context.Context, in *QueryShowCommitmentsRequest, opts ...grpc.CallOption) (*QueryShowCommitmentsResponse, error)
	// Queries sum of committed tokens locked and not unlockable
	CommittedTokensLocked(ctx context.Context, in *QueryCommittedTokensLockedRequest, opts ...grpc.CallOption) (*QueryCommittedTokensLockedResponse, error)
	// Queries the total number of commitment items.
	NumberOfCommitments(ctx context.Context, in *QueryNumberOfCommitmentsRequest, opts ...grpc.CallOption) (*QueryNumberOfCommitmentsResponse, error)
	// Queries a list of CommitmentVestingInfo items.
	CommitmentVestingInfo(ctx context.Context, in *QueryCommitmentVestingInfoRequest, opts ...grpc.CallOption) (*QueryCommitmentVestingInfoResponse, error)
	AirDrop(ctx context.Context, in *QueryAirDropRequest, opts ...grpc.CallOption) (*QueryAirDropResponse, error)
	TotalAirdropClaimed(ctx context.Context, in *QueryTotalAirDropClaimedRequest, opts ...grpc.CallOption) (*QueryTotalAirDropClaimedResponse, error)
	Kol(ctx context.Context, in *QueryKolRequest, opts ...grpc.CallOption) (*QueryKolResponse, error)
}

type queryClient struct {
	cc grpc.ClientConnInterface
}

func NewQueryClient(cc grpc.ClientConnInterface) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) Params(ctx context.Context, in *QueryParamsRequest, opts ...grpc.CallOption) (*QueryParamsResponse, error) {
	out := new(QueryParamsResponse)
	err := c.cc.Invoke(ctx, "/elys.commitment.Query/Params", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) ShowCommitments(ctx context.Context, in *QueryShowCommitmentsRequest, opts ...grpc.CallOption) (*QueryShowCommitmentsResponse, error) {
	out := new(QueryShowCommitmentsResponse)
	err := c.cc.Invoke(ctx, "/elys.commitment.Query/ShowCommitments", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) CommittedTokensLocked(ctx context.Context, in *QueryCommittedTokensLockedRequest, opts ...grpc.CallOption) (*QueryCommittedTokensLockedResponse, error) {
	out := new(QueryCommittedTokensLockedResponse)
	err := c.cc.Invoke(ctx, "/elys.commitment.Query/CommittedTokensLocked", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) NumberOfCommitments(ctx context.Context, in *QueryNumberOfCommitmentsRequest, opts ...grpc.CallOption) (*QueryNumberOfCommitmentsResponse, error) {
	out := new(QueryNumberOfCommitmentsResponse)
	err := c.cc.Invoke(ctx, "/elys.commitment.Query/NumberOfCommitments", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) CommitmentVestingInfo(ctx context.Context, in *QueryCommitmentVestingInfoRequest, opts ...grpc.CallOption) (*QueryCommitmentVestingInfoResponse, error) {
	out := new(QueryCommitmentVestingInfoResponse)
	err := c.cc.Invoke(ctx, "/elys.commitment.Query/CommitmentVestingInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) AirDrop(ctx context.Context, in *QueryAirDropRequest, opts ...grpc.CallOption) (*QueryAirDropResponse, error) {
	out := new(QueryAirDropResponse)
	err := c.cc.Invoke(ctx, "/elys.commitment.Query/AirDrop", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) TotalAirdropClaimed(ctx context.Context, in *QueryTotalAirDropClaimedRequest, opts ...grpc.CallOption) (*QueryTotalAirDropClaimedResponse, error) {
	out := new(QueryTotalAirDropClaimedResponse)
	err := c.cc.Invoke(ctx, "/elys.commitment.Query/TotalAirdropClaimed", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) Kol(ctx context.Context, in *QueryKolRequest, opts ...grpc.CallOption) (*QueryKolResponse, error) {
	out := new(QueryKolResponse)
	err := c.cc.Invoke(ctx, "/elys.commitment.Query/Kol", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
// All implementations must embed UnimplementedQueryServer
// for forward compatibility
type QueryServer interface {
	// Parameters queries the parameters of the module.
	Params(context.Context, *QueryParamsRequest) (*QueryParamsResponse, error)
	// Queries a Commitment item.
	ShowCommitments(context.Context, *QueryShowCommitmentsRequest) (*QueryShowCommitmentsResponse, error)
	// Queries sum of committed tokens locked and not unlockable
	CommittedTokensLocked(context.Context, *QueryCommittedTokensLockedRequest) (*QueryCommittedTokensLockedResponse, error)
	// Queries the total number of commitment items.
	NumberOfCommitments(context.Context, *QueryNumberOfCommitmentsRequest) (*QueryNumberOfCommitmentsResponse, error)
	// Queries a list of CommitmentVestingInfo items.
	CommitmentVestingInfo(context.Context, *QueryCommitmentVestingInfoRequest) (*QueryCommitmentVestingInfoResponse, error)
	AirDrop(context.Context, *QueryAirDropRequest) (*QueryAirDropResponse, error)
	TotalAirdropClaimed(context.Context, *QueryTotalAirDropClaimedRequest) (*QueryTotalAirDropClaimedResponse, error)
	Kol(context.Context, *QueryKolRequest) (*QueryKolResponse, error)
	mustEmbedUnimplementedQueryServer()
}

// UnimplementedQueryServer must be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (UnimplementedQueryServer) Params(context.Context, *QueryParamsRequest) (*QueryParamsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Params not implemented")
}
func (UnimplementedQueryServer) ShowCommitments(context.Context, *QueryShowCommitmentsRequest) (*QueryShowCommitmentsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ShowCommitments not implemented")
}
func (UnimplementedQueryServer) CommittedTokensLocked(context.Context, *QueryCommittedTokensLockedRequest) (*QueryCommittedTokensLockedResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CommittedTokensLocked not implemented")
}
func (UnimplementedQueryServer) NumberOfCommitments(context.Context, *QueryNumberOfCommitmentsRequest) (*QueryNumberOfCommitmentsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method NumberOfCommitments not implemented")
}
func (UnimplementedQueryServer) CommitmentVestingInfo(context.Context, *QueryCommitmentVestingInfoRequest) (*QueryCommitmentVestingInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CommitmentVestingInfo not implemented")
}
func (UnimplementedQueryServer) AirDrop(context.Context, *QueryAirDropRequest) (*QueryAirDropResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AirDrop not implemented")
}
func (UnimplementedQueryServer) TotalAirdropClaimed(context.Context, *QueryTotalAirDropClaimedRequest) (*QueryTotalAirDropClaimedResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TotalAirdropClaimed not implemented")
}
func (UnimplementedQueryServer) Kol(context.Context, *QueryKolRequest) (*QueryKolResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Kol not implemented")
}
func (UnimplementedQueryServer) mustEmbedUnimplementedQueryServer() {}

// UnsafeQueryServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to QueryServer will
// result in compilation errors.
type UnsafeQueryServer interface {
	mustEmbedUnimplementedQueryServer()
}

func RegisterQueryServer(s grpc.ServiceRegistrar, srv QueryServer) {
	s.RegisterService(&Query_ServiceDesc, srv)
}

func _Query_Params_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryParamsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Params(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/elys.commitment.Query/Params",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Params(ctx, req.(*QueryParamsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_ShowCommitments_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryShowCommitmentsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).ShowCommitments(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/elys.commitment.Query/ShowCommitments",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).ShowCommitments(ctx, req.(*QueryShowCommitmentsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_CommittedTokensLocked_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryCommittedTokensLockedRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).CommittedTokensLocked(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/elys.commitment.Query/CommittedTokensLocked",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).CommittedTokensLocked(ctx, req.(*QueryCommittedTokensLockedRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_NumberOfCommitments_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryNumberOfCommitmentsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).NumberOfCommitments(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/elys.commitment.Query/NumberOfCommitments",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).NumberOfCommitments(ctx, req.(*QueryNumberOfCommitmentsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_CommitmentVestingInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryCommitmentVestingInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).CommitmentVestingInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/elys.commitment.Query/CommitmentVestingInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).CommitmentVestingInfo(ctx, req.(*QueryCommitmentVestingInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_AirDrop_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryAirDropRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).AirDrop(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/elys.commitment.Query/AirDrop",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).AirDrop(ctx, req.(*QueryAirDropRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_TotalAirdropClaimed_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryTotalAirDropClaimedRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).TotalAirdropClaimed(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/elys.commitment.Query/TotalAirdropClaimed",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).TotalAirdropClaimed(ctx, req.(*QueryTotalAirDropClaimedRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_Kol_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryKolRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Kol(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/elys.commitment.Query/Kol",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Kol(ctx, req.(*QueryKolRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Query_ServiceDesc is the grpc.ServiceDesc for Query service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Query_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "elys.commitment.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Params",
			Handler:    _Query_Params_Handler,
		},
		{
			MethodName: "ShowCommitments",
			Handler:    _Query_ShowCommitments_Handler,
		},
		{
			MethodName: "CommittedTokensLocked",
			Handler:    _Query_CommittedTokensLocked_Handler,
		},
		{
			MethodName: "NumberOfCommitments",
			Handler:    _Query_NumberOfCommitments_Handler,
		},
		{
			MethodName: "CommitmentVestingInfo",
			Handler:    _Query_CommitmentVestingInfo_Handler,
		},
		{
			MethodName: "AirDrop",
			Handler:    _Query_AirDrop_Handler,
		},
		{
			MethodName: "TotalAirdropClaimed",
			Handler:    _Query_TotalAirdropClaimed_Handler,
		},
		{
			MethodName: "Kol",
			Handler:    _Query_Kol_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "elys/commitment/query.proto",
}
