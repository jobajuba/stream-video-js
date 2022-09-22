/* eslint-disable */
// @generated by protobuf-ts 2.8.1 with parameter long_type_string,client_generic,server_none,eslint_disable
// @generated from protobuf file "video/coordinator/client_v1_rpc/client_rpc.proto" (package "stream.video.coordinator.client_v1_rpc", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ClientRPC } from "./client_rpc";
import type { ReportIssueResponse } from "./client_rpc";
import type { ReportIssueRequest } from "./client_rpc";
import type { ReviewCallResponse } from "./client_rpc";
import type { ReviewCallRequest } from "./client_rpc";
import type { ReportCallStatsResponse } from "./client_rpc";
import type { ReportCallStatsRequest } from "./client_rpc";
import type { SendCustomEventResponse } from "./client_rpc";
import type { SendCustomEventRequest } from "./client_rpc";
import type { DeleteCallMembersResponse } from "./client_rpc";
import type { DeleteCallMembersRequest } from "./client_rpc";
import type { UpdateCallMembersResponse } from "./client_rpc";
import type { UpdateCallMembersRequest } from "./client_rpc";
import type { QueryDevicesResponse } from "./client_rpc";
import type { QueryDevicesRequest } from "./client_rpc";
import type { DeleteDeviceResponse } from "./client_rpc";
import type { DeleteDeviceRequest } from "./client_rpc";
import type { CreateDeviceResponse } from "./client_rpc";
import type { CreateDeviceRequest } from "./client_rpc";
import type { QueryMembersResponse } from "./client_rpc";
import type { QueryMembersRequest } from "./client_rpc";
import type { QueryCallsResponse } from "./client_rpc";
import type { QueryCallsRequest } from "./client_rpc";
import type { UpdateCallResponse } from "./client_rpc";
import type { UpdateCallRequest } from "./client_rpc";
import type { GetCallEdgeServerResponse } from "./client_rpc";
import type { GetCallEdgeServerRequest } from "./client_rpc";
import type { JoinCallResponse } from "./client_rpc";
import type { JoinCallRequest } from "./client_rpc";
import type { GetOrCreateCallResponse } from "./client_rpc";
import type { GetOrCreateCallRequest } from "./client_rpc";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { CreateCallResponse } from "./client_rpc";
import type { CreateCallRequest } from "./client_rpc";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service stream.video.coordinator.client_v1_rpc.ClientRPC
 */
export interface IClientRPCClient {
    /**
     *  rpc GetCall(GetCallRequest) returns (GetCallResponse);
     *
     * @generated from protobuf rpc: CreateCall(stream.video.coordinator.client_v1_rpc.CreateCallRequest) returns (stream.video.coordinator.client_v1_rpc.CreateCallResponse);
     */
    createCall(input: CreateCallRequest, options?: RpcOptions): UnaryCall<CreateCallRequest, CreateCallResponse>;
    /**
     * @generated from protobuf rpc: GetOrCreateCall(stream.video.coordinator.client_v1_rpc.GetOrCreateCallRequest) returns (stream.video.coordinator.client_v1_rpc.GetOrCreateCallResponse);
     */
    getOrCreateCall(input: GetOrCreateCallRequest, options?: RpcOptions): UnaryCall<GetOrCreateCallRequest, GetOrCreateCallResponse>;
    /**
     * JoinCall acts as GetOrCreateCall, but additionally returns list of datacenters to measure latency
     *
     * @generated from protobuf rpc: JoinCall(stream.video.coordinator.client_v1_rpc.JoinCallRequest) returns (stream.video.coordinator.client_v1_rpc.JoinCallResponse);
     */
    joinCall(input: JoinCallRequest, options?: RpcOptions): UnaryCall<JoinCallRequest, JoinCallResponse>;
    /**
     * GetCallSFU returns SFU information that is required to establish a connection
     *
     * @generated from protobuf rpc: GetCallEdgeServer(stream.video.coordinator.client_v1_rpc.GetCallEdgeServerRequest) returns (stream.video.coordinator.client_v1_rpc.GetCallEdgeServerResponse);
     */
    getCallEdgeServer(input: GetCallEdgeServerRequest, options?: RpcOptions): UnaryCall<GetCallEdgeServerRequest, GetCallEdgeServerResponse>;
    /**
     *  rpc EndCall();
     *
     * @generated from protobuf rpc: UpdateCall(stream.video.coordinator.client_v1_rpc.UpdateCallRequest) returns (stream.video.coordinator.client_v1_rpc.UpdateCallResponse);
     */
    updateCall(input: UpdateCallRequest, options?: RpcOptions): UnaryCall<UpdateCallRequest, UpdateCallResponse>;
    /**
     * @generated from protobuf rpc: QueryCalls(stream.video.coordinator.client_v1_rpc.QueryCallsRequest) returns (stream.video.coordinator.client_v1_rpc.QueryCallsResponse);
     */
    queryCalls(input: QueryCallsRequest, options?: RpcOptions): UnaryCall<QueryCallsRequest, QueryCallsResponse>;
    /**
     * QueryMembers gets a list of members that match your query criteria
     *
     * @generated from protobuf rpc: QueryMembers(stream.video.coordinator.client_v1_rpc.QueryMembersRequest) returns (stream.video.coordinator.client_v1_rpc.QueryMembersResponse);
     */
    queryMembers(input: QueryMembersRequest, options?: RpcOptions): UnaryCall<QueryMembersRequest, QueryMembersResponse>;
    /**
     * @generated from protobuf rpc: CreateDevice(stream.video.coordinator.client_v1_rpc.CreateDeviceRequest) returns (stream.video.coordinator.client_v1_rpc.CreateDeviceResponse);
     */
    createDevice(input: CreateDeviceRequest, options?: RpcOptions): UnaryCall<CreateDeviceRequest, CreateDeviceResponse>;
    /**
     * @generated from protobuf rpc: DeleteDevice(stream.video.coordinator.client_v1_rpc.DeleteDeviceRequest) returns (stream.video.coordinator.client_v1_rpc.DeleteDeviceResponse);
     */
    deleteDevice(input: DeleteDeviceRequest, options?: RpcOptions): UnaryCall<DeleteDeviceRequest, DeleteDeviceResponse>;
    /**
     * @generated from protobuf rpc: QueryDevices(stream.video.coordinator.client_v1_rpc.QueryDevicesRequest) returns (stream.video.coordinator.client_v1_rpc.QueryDevicesResponse);
     */
    queryDevices(input: QueryDevicesRequest, options?: RpcOptions): UnaryCall<QueryDevicesRequest, QueryDevicesResponse>;
    // UNSTABLE ENDPOINTS BELOW

    /**
     * UpdateMembers creates or updates members in a room.
     * If a member is not found, It will be created.
     * TODO: response with room data
     *
     * @generated from protobuf rpc: UpdateCallMembers(stream.video.coordinator.client_v1_rpc.UpdateCallMembersRequest) returns (stream.video.coordinator.client_v1_rpc.UpdateCallMembersResponse);
     */
    updateCallMembers(input: UpdateCallMembersRequest, options?: RpcOptions): UnaryCall<UpdateCallMembersRequest, UpdateCallMembersResponse>;
    /**
     * DeleteMembers deletes members from a room.
     * TODO: response with room data
     *
     * @generated from protobuf rpc: DeleteCallMembers(stream.video.coordinator.client_v1_rpc.DeleteCallMembersRequest) returns (stream.video.coordinator.client_v1_rpc.DeleteCallMembersResponse);
     */
    deleteCallMembers(input: DeleteCallMembersRequest, options?: RpcOptions): UnaryCall<DeleteCallMembersRequest, DeleteCallMembersResponse>;
    /**
     * @generated from protobuf rpc: SendCustomEvent(stream.video.coordinator.client_v1_rpc.SendCustomEventRequest) returns (stream.video.coordinator.client_v1_rpc.SendCustomEventResponse);
     */
    sendCustomEvent(input: SendCustomEventRequest, options?: RpcOptions): UnaryCall<SendCustomEventRequest, SendCustomEventResponse>;
    // room is a confusing name. better to call it breakout room
    // breakout rooms have their own audio/video track
    // breakout rooms have their own chat

    // *
    // TODO
    // rpc CreateBreakoutRoom(CreateBreakoutRoomRequest) returns (CreateBreakoutRoomResponse);
    // rpc JoinBreakoutRoom() returns ();
    // rpc LeaveBreakoutRoom() returns ();
    // rpc DeleteBreakoutRoom() returns ();

    /**
     * endpoint for storing stats (perhaps we should move this to the SFU layer though)
     *
     * @generated from protobuf rpc: ReportCallStats(stream.video.coordinator.client_v1_rpc.ReportCallStatsRequest) returns (stream.video.coordinator.client_v1_rpc.ReportCallStatsResponse);
     */
    reportCallStats(input: ReportCallStatsRequest, options?: RpcOptions): UnaryCall<ReportCallStatsRequest, ReportCallStatsResponse>;
    /**
     * endpoint for reviewing/rating the quality of calls
     *
     * @generated from protobuf rpc: ReviewCall(stream.video.coordinator.client_v1_rpc.ReviewCallRequest) returns (stream.video.coordinator.client_v1_rpc.ReviewCallResponse);
     */
    reviewCall(input: ReviewCallRequest, options?: RpcOptions): UnaryCall<ReviewCallRequest, ReviewCallResponse>;
    /**
     * endpoint for users to report issues with a call
     *
     * @generated from protobuf rpc: ReportIssue(stream.video.coordinator.client_v1_rpc.ReportIssueRequest) returns (stream.video.coordinator.client_v1_rpc.ReportIssueResponse);
     */
    reportIssue(input: ReportIssueRequest, options?: RpcOptions): UnaryCall<ReportIssueRequest, ReportIssueResponse>;
}
/**
 * @generated from protobuf service stream.video.coordinator.client_v1_rpc.ClientRPC
 */
export class ClientRPCClient implements IClientRPCClient, ServiceInfo {
    typeName = ClientRPC.typeName;
    methods = ClientRPC.methods;
    options = ClientRPC.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     *  rpc GetCall(GetCallRequest) returns (GetCallResponse);
     *
     * @generated from protobuf rpc: CreateCall(stream.video.coordinator.client_v1_rpc.CreateCallRequest) returns (stream.video.coordinator.client_v1_rpc.CreateCallResponse);
     */
    createCall(input: CreateCallRequest, options?: RpcOptions): UnaryCall<CreateCallRequest, CreateCallResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateCallRequest, CreateCallResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetOrCreateCall(stream.video.coordinator.client_v1_rpc.GetOrCreateCallRequest) returns (stream.video.coordinator.client_v1_rpc.GetOrCreateCallResponse);
     */
    getOrCreateCall(input: GetOrCreateCallRequest, options?: RpcOptions): UnaryCall<GetOrCreateCallRequest, GetOrCreateCallResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetOrCreateCallRequest, GetOrCreateCallResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * JoinCall acts as GetOrCreateCall, but additionally returns list of datacenters to measure latency
     *
     * @generated from protobuf rpc: JoinCall(stream.video.coordinator.client_v1_rpc.JoinCallRequest) returns (stream.video.coordinator.client_v1_rpc.JoinCallResponse);
     */
    joinCall(input: JoinCallRequest, options?: RpcOptions): UnaryCall<JoinCallRequest, JoinCallResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<JoinCallRequest, JoinCallResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * GetCallSFU returns SFU information that is required to establish a connection
     *
     * @generated from protobuf rpc: GetCallEdgeServer(stream.video.coordinator.client_v1_rpc.GetCallEdgeServerRequest) returns (stream.video.coordinator.client_v1_rpc.GetCallEdgeServerResponse);
     */
    getCallEdgeServer(input: GetCallEdgeServerRequest, options?: RpcOptions): UnaryCall<GetCallEdgeServerRequest, GetCallEdgeServerResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetCallEdgeServerRequest, GetCallEdgeServerResponse>("unary", this._transport, method, opt, input);
    }
    /**
     *  rpc EndCall();
     *
     * @generated from protobuf rpc: UpdateCall(stream.video.coordinator.client_v1_rpc.UpdateCallRequest) returns (stream.video.coordinator.client_v1_rpc.UpdateCallResponse);
     */
    updateCall(input: UpdateCallRequest, options?: RpcOptions): UnaryCall<UpdateCallRequest, UpdateCallResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdateCallRequest, UpdateCallResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: QueryCalls(stream.video.coordinator.client_v1_rpc.QueryCallsRequest) returns (stream.video.coordinator.client_v1_rpc.QueryCallsResponse);
     */
    queryCalls(input: QueryCallsRequest, options?: RpcOptions): UnaryCall<QueryCallsRequest, QueryCallsResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryCallsRequest, QueryCallsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * QueryMembers gets a list of members that match your query criteria
     *
     * @generated from protobuf rpc: QueryMembers(stream.video.coordinator.client_v1_rpc.QueryMembersRequest) returns (stream.video.coordinator.client_v1_rpc.QueryMembersResponse);
     */
    queryMembers(input: QueryMembersRequest, options?: RpcOptions): UnaryCall<QueryMembersRequest, QueryMembersResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryMembersRequest, QueryMembersResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CreateDevice(stream.video.coordinator.client_v1_rpc.CreateDeviceRequest) returns (stream.video.coordinator.client_v1_rpc.CreateDeviceResponse);
     */
    createDevice(input: CreateDeviceRequest, options?: RpcOptions): UnaryCall<CreateDeviceRequest, CreateDeviceResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateDeviceRequest, CreateDeviceResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeleteDevice(stream.video.coordinator.client_v1_rpc.DeleteDeviceRequest) returns (stream.video.coordinator.client_v1_rpc.DeleteDeviceResponse);
     */
    deleteDevice(input: DeleteDeviceRequest, options?: RpcOptions): UnaryCall<DeleteDeviceRequest, DeleteDeviceResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteDeviceRequest, DeleteDeviceResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: QueryDevices(stream.video.coordinator.client_v1_rpc.QueryDevicesRequest) returns (stream.video.coordinator.client_v1_rpc.QueryDevicesResponse);
     */
    queryDevices(input: QueryDevicesRequest, options?: RpcOptions): UnaryCall<QueryDevicesRequest, QueryDevicesResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryDevicesRequest, QueryDevicesResponse>("unary", this._transport, method, opt, input);
    }
    // UNSTABLE ENDPOINTS BELOW

    /**
     * UpdateMembers creates or updates members in a room.
     * If a member is not found, It will be created.
     * TODO: response with room data
     *
     * @generated from protobuf rpc: UpdateCallMembers(stream.video.coordinator.client_v1_rpc.UpdateCallMembersRequest) returns (stream.video.coordinator.client_v1_rpc.UpdateCallMembersResponse);
     */
    updateCallMembers(input: UpdateCallMembersRequest, options?: RpcOptions): UnaryCall<UpdateCallMembersRequest, UpdateCallMembersResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdateCallMembersRequest, UpdateCallMembersResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * DeleteMembers deletes members from a room.
     * TODO: response with room data
     *
     * @generated from protobuf rpc: DeleteCallMembers(stream.video.coordinator.client_v1_rpc.DeleteCallMembersRequest) returns (stream.video.coordinator.client_v1_rpc.DeleteCallMembersResponse);
     */
    deleteCallMembers(input: DeleteCallMembersRequest, options?: RpcOptions): UnaryCall<DeleteCallMembersRequest, DeleteCallMembersResponse> {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteCallMembersRequest, DeleteCallMembersResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SendCustomEvent(stream.video.coordinator.client_v1_rpc.SendCustomEventRequest) returns (stream.video.coordinator.client_v1_rpc.SendCustomEventResponse);
     */
    sendCustomEvent(input: SendCustomEventRequest, options?: RpcOptions): UnaryCall<SendCustomEventRequest, SendCustomEventResponse> {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept<SendCustomEventRequest, SendCustomEventResponse>("unary", this._transport, method, opt, input);
    }
    // room is a confusing name. better to call it breakout room
    // breakout rooms have their own audio/video track
    // breakout rooms have their own chat

    // *
    // TODO
    // rpc CreateBreakoutRoom(CreateBreakoutRoomRequest) returns (CreateBreakoutRoomResponse);
    // rpc JoinBreakoutRoom() returns ();
    // rpc LeaveBreakoutRoom() returns ();
    // rpc DeleteBreakoutRoom() returns ();

    /**
     * endpoint for storing stats (perhaps we should move this to the SFU layer though)
     *
     * @generated from protobuf rpc: ReportCallStats(stream.video.coordinator.client_v1_rpc.ReportCallStatsRequest) returns (stream.video.coordinator.client_v1_rpc.ReportCallStatsResponse);
     */
    reportCallStats(input: ReportCallStatsRequest, options?: RpcOptions): UnaryCall<ReportCallStatsRequest, ReportCallStatsResponse> {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return stackIntercept<ReportCallStatsRequest, ReportCallStatsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * endpoint for reviewing/rating the quality of calls
     *
     * @generated from protobuf rpc: ReviewCall(stream.video.coordinator.client_v1_rpc.ReviewCallRequest) returns (stream.video.coordinator.client_v1_rpc.ReviewCallResponse);
     */
    reviewCall(input: ReviewCallRequest, options?: RpcOptions): UnaryCall<ReviewCallRequest, ReviewCallResponse> {
        const method = this.methods[14], opt = this._transport.mergeOptions(options);
        return stackIntercept<ReviewCallRequest, ReviewCallResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * endpoint for users to report issues with a call
     *
     * @generated from protobuf rpc: ReportIssue(stream.video.coordinator.client_v1_rpc.ReportIssueRequest) returns (stream.video.coordinator.client_v1_rpc.ReportIssueResponse);
     */
    reportIssue(input: ReportIssueRequest, options?: RpcOptions): UnaryCall<ReportIssueRequest, ReportIssueResponse> {
        const method = this.methods[15], opt = this._transport.mergeOptions(options);
        return stackIntercept<ReportIssueRequest, ReportIssueResponse>("unary", this._transport, method, opt, input);
    }
}
