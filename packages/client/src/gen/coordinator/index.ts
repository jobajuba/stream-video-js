/* tslint:disable */
/* eslint-disable */
/**
 *
 * @export
 * @interface APIError
 */
export interface APIError {
  /**
   * Response HTTP status code
   * @type {number}
   * @memberof APIError
   */
  StatusCode: number;
  /**
   * API error code
   * @type {string}
   * @memberof APIError
   */
  code: APIErrorCodeEnum;
  /**
   * Additional error-specific information
   * @type {Array<number>}
   * @memberof APIError
   */
  details: Array<number>;
  /**
   * Request duration
   * @type {string}
   * @memberof APIError
   */
  duration: string;
  /**
   * Additional error info
   * @type {{ [key: string]: string; }}
   * @memberof APIError
   */
  exception_fields?: { [key: string]: string };
  /**
   * Message describing an error
   * @type {string}
   * @memberof APIError
   */
  message: string;
  /**
   * URL with additional information
   * @type {string}
   * @memberof APIError
   */
  more_info: string;
}

/**
 * @export
 */
export const APIErrorCodeEnum = {
  INTERNAL_ERROR: 'internal-error',
  ACCESS_KEY_ERROR: 'access-key-error',
  INPUT_ERROR: 'input-error',
  AUTH_FAILED: 'auth-failed',
  DUPLICATE_USERNAME: 'duplicate-username',
  RATE_LIMITED: 'rate-limited',
  NOT_FOUND: 'not-found',
  NOT_ALLOWED: 'not-allowed',
  EVENT_NOT_SUPPORTED: 'event-not-supported',
  CHANNEL_FEATURE_NOT_SUPPORTED: 'channel-feature-not-supported',
  MESSAGE_TOO_LONG: 'message-too-long',
  MULTIPLE_NESTING_LEVEL: 'multiple-nesting-level',
  PAYLOAD_TOO_BIG: 'payload-too-big',
  EXPIRED_TOKEN: 'expired-token',
  TOKEN_NOT_VALID_YET: 'token-not-valid-yet',
  TOKEN_USED_BEFORE_IAT: 'token-used-before-iat',
  INVALID_TOKEN_SIGNATURE: 'invalid-token-signature',
  CUSTOM_COMMAND_ENDPOINT_MISSING: 'custom-command-endpoint-missing',
  CUSTOM_COMMAND_ENDPOINTCALL_ERROR: 'custom-command-endpoint=call-error',
  CONNECTION_ID_NOT_FOUND: 'connection-id-not-found',
  COOL_DOWN: 'cool-down',
  QUERY_CHANNEL_PERMISSIONS_MISMATCH: 'query-channel-permissions-mismatch',
  TOO_MANY_CONNECTIONS: 'too-many-connections',
  NOT_SUPPORTED_IN_PUSH_V1: 'not-supported-in-push-v1',
  MODERATION_FAILED: 'moderation-failed',
  VIDEO_PROVIDER_NOT_CONFIGURED: 'video-provider-not-configured',
  VIDEO_INVALID_CALL_ID: 'video-invalid-call-id',
  VIDEO_CREATE_CALL_FAILED: 'video-create-call-failed',
  APP_SUSPENDED: 'app-suspended',
  VIDEO_NO_DATACENTERS_AVAILABLE: 'video-no-datacenters-available',
  VIDEO_JOIN_CALL_FAILURE: 'video-join-call-failure',
  QUERY_CALLS_PERMISSIONS_MISMATCH: 'query-calls-permissions-mismatch',
} as const;
export type APIErrorCodeEnum =
  (typeof APIErrorCodeEnum)[keyof typeof APIErrorCodeEnum];

/**
 *
 * @export
 * @interface AudioSettings
 */
export interface AudioSettings {
  /**
   *
   * @type {boolean}
   * @memberof AudioSettings
   */
  access_request_enabled: boolean;
  /**
   *
   * @type {boolean}
   * @memberof AudioSettings
   */
  opus_dtx_enabled: boolean;
  /**
   *
   * @type {boolean}
   * @memberof AudioSettings
   */
  redundant_coding_enabled: boolean;
}
/**
 *
 * @export
 * @interface AudioSettingsRequest
 */
export interface AudioSettingsRequest {
  /**
   *
   * @type {boolean}
   * @memberof AudioSettingsRequest
   */
  access_request_enabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof AudioSettingsRequest
   */
  opus_dtx_enabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof AudioSettingsRequest
   */
  redundant_coding_enabled?: boolean;
}
/**
 *
 * @export
 * @interface BackstageSettings
 */
export interface BackstageSettings {
  /**
   *
   * @type {boolean}
   * @memberof BackstageSettings
   */
  enabled: boolean;
}
/**
 *
 * @export
 * @interface BackstageSettingsRequest
 */
export interface BackstageSettingsRequest {
  /**
   *
   * @type {boolean}
   * @memberof BackstageSettingsRequest
   */
  enabled?: boolean;
}
/**
 *
 * @export
 * @interface BlockUserRequest
 */
export interface BlockUserRequest {
  /**
   * the user to block
   * @type {string}
   * @memberof BlockUserRequest
   */
  user_id: string;
}
/**
 *
 * @export
 * @interface BlockUserResponse
 */
export interface BlockUserResponse {
  /**
   * Duration of the request in human-readable format
   * @type {string}
   * @memberof BlockUserResponse
   */
  duration: string;
}
/**
 * This event is sent to call participants to notify when a user is blocked on a call, clients can use this event to show a notification.
 * If the user is the current user, the client should leave the call screen as well
 * @export
 * @interface BlockedUserEvent
 */
export interface BlockedUserEvent {
  /**
   *
   * @type {UserResponse}
   * @memberof BlockedUserEvent
   */
  blocked_by_user?: UserResponse;
  /**
   *
   * @type {string}
   * @memberof BlockedUserEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof BlockedUserEvent
   */
  created_at: string;
  /**
   * The type of event: "call.blocked_user" in this case
   * @type {string}
   * @memberof BlockedUserEvent
   */
  type: string;
  /**
   *
   * @type {UserResponse}
   * @memberof BlockedUserEvent
   */
  user: UserResponse;
}
/**
 *
 * @export
 * @interface BroadcastSettings
 */
export interface BroadcastSettings {
  /**
   *
   * @type {boolean}
   * @memberof BroadcastSettings
   */
  enabled: boolean;
  /**
   *
   * @type {HLSSettings}
   * @memberof BroadcastSettings
   */
  hls: HLSSettings;
}
/**
 * This event is sent by a user accepting an incoming ringing call.
 * Clients receiving this event should dismiss the call screen and move to the call.
 * @export
 * @interface CallAcceptedEvent
 */
export interface CallAcceptedEvent {
  /**
   *
   * @type {string}
   * @memberof CallAcceptedEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof CallAcceptedEvent
   */
  created_at: string;
  /**
   *
   * @type {string}
   * @memberof CallAcceptedEvent
   */
  type: string;
  /**
   *
   * @type {UserResponse}
   * @memberof CallAcceptedEvent
   */
  user: UserResponse;
}
/**
 * This event is sent when call broadcasting has started
 * @export
 * @interface CallBroadcastingStartedEvent
 */
export interface CallBroadcastingStartedEvent {
  /**
   *
   * @type {string}
   * @memberof CallBroadcastingStartedEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof CallBroadcastingStartedEvent
   */
  created_at: string;
  /**
   *
   * @type {string}
   * @memberof CallBroadcastingStartedEvent
   */
  hls_playlist_url: string;
  /**
   * The type of event: "call.broadcasting_started" in this case
   * @type {string}
   * @memberof CallBroadcastingStartedEvent
   */
  type: string;
}
/**
 * This event is sent when call broadcasting has stopped
 * @export
 * @interface CallBroadcastingStoppedEvent
 */
export interface CallBroadcastingStoppedEvent {
  /**
   *
   * @type {string}
   * @memberof CallBroadcastingStoppedEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof CallBroadcastingStoppedEvent
   */
  created_at: string;
  /**
   * The type of event: "call.broadcasting_stopped" in this case
   * @type {string}
   * @memberof CallBroadcastingStoppedEvent
   */
  type: string;
}
/**
 * This event is sent when a call is created. Clients receiving this event should check if the ringing
 * field is set to true and if so, show the call screen
 * @export
 * @interface CallCreatedEvent
 */
export interface CallCreatedEvent {
  /**
   *
   * @type {CallResponse}
   * @memberof CallCreatedEvent
   */
  call: CallResponse;
  /**
   *
   * @type {string}
   * @memberof CallCreatedEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof CallCreatedEvent
   */
  created_at: string;
  /**
   * the members added to this call
   * @type {Array<MemberResponse>}
   * @memberof CallCreatedEvent
   */
  members: Array<MemberResponse>;
  /**
   * true when the call was created with ring enabled
   * @type {boolean}
   * @memberof CallCreatedEvent
   */
  ringing: boolean;
  /**
   * The type of event: "call.created" in this case
   * @type {string}
   * @memberof CallCreatedEvent
   */
  type: string;
}
/**
 * This event is sent when a call is mark as ended for all its participants. Clients receiving this event should leave the call screen
 * @export
 * @interface CallEndedEvent
 */
export interface CallEndedEvent {
  /**
   *
   * @type {string}
   * @memberof CallEndedEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof CallEndedEvent
   */
  created_at: string;
  /**
   * The type of event: "call.ended" in this case
   * @type {string}
   * @memberof CallEndedEvent
   */
  type: string;
  /**
   *
   * @type {UserResponse}
   * @memberof CallEndedEvent
   */
  user?: UserResponse;
}
/**
 *
 * @export
 * @interface CallIngressResponse
 */
export interface CallIngressResponse {
  /**
   *
   * @type {RTMPIngress}
   * @memberof CallIngressResponse
   */
  rtmp: RTMPIngress;
}
/**
 * This event is sent when one or more members are added to a call
 * @export
 * @interface CallMemberAddedEvent
 */
export interface CallMemberAddedEvent {
  /**
   *
   * @type {CallResponse}
   * @memberof CallMemberAddedEvent
   */
  call: CallResponse;
  /**
   *
   * @type {string}
   * @memberof CallMemberAddedEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof CallMemberAddedEvent
   */
  created_at: string;
  /**
   * the members added to this call
   * @type {Array<MemberResponse>}
   * @memberof CallMemberAddedEvent
   */
  members: Array<MemberResponse>;
  /**
   * The type of event: "call.member_added" in this case
   * @type {string}
   * @memberof CallMemberAddedEvent
   */
  type: string;
}
/**
 * This event is sent when one or more members are removed from a call
 * @export
 * @interface CallMemberRemovedEvent
 */
export interface CallMemberRemovedEvent {
  /**
   *
   * @type {CallResponse}
   * @memberof CallMemberRemovedEvent
   */
  call: CallResponse;
  /**
   *
   * @type {string}
   * @memberof CallMemberRemovedEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof CallMemberRemovedEvent
   */
  created_at: string;
  /**
   * the list of member IDs removed from the call
   * @type {Array<string>}
   * @memberof CallMemberRemovedEvent
   */
  members: Array<string>;
  /**
   * The type of event: "call.member_added" in this case
   * @type {string}
   * @memberof CallMemberRemovedEvent
   */
  type: string;
}
/**
 * This event is sent when one or more members are updated
 * @export
 * @interface CallMemberUpdatedEvent
 */
export interface CallMemberUpdatedEvent {
  /**
   *
   * @type {CallResponse}
   * @memberof CallMemberUpdatedEvent
   */
  call: CallResponse;
  /**
   *
   * @type {string}
   * @memberof CallMemberUpdatedEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof CallMemberUpdatedEvent
   */
  created_at: string;
  /**
   * The list of members that were updated
   * @type {Array<MemberResponse>}
   * @memberof CallMemberUpdatedEvent
   */
  members: Array<MemberResponse>;
  /**
   * The type of event: "call.member_added" in this case
   * @type {string}
   * @memberof CallMemberUpdatedEvent
   */
  type: string;
}
/**
 * This event is sent when one or more members get its role updated
 * @export
 * @interface CallMemberUpdatedPermissionEvent
 */
export interface CallMemberUpdatedPermissionEvent {
  /**
   *
   * @type {CallResponse}
   * @memberof CallMemberUpdatedPermissionEvent
   */
  call: CallResponse;
  /**
   *
   * @type {string}
   * @memberof CallMemberUpdatedPermissionEvent
   */
  call_cid: string;
  /**
   * The capabilities by role for this call
   * @type {{ [key: string]: Array<string>; }}
   * @memberof CallMemberUpdatedPermissionEvent
   */
  capabilities_by_role: { [key: string]: Array<string> };
  /**
   *
   * @type {string}
   * @memberof CallMemberUpdatedPermissionEvent
   */
  created_at: string;
  /**
   * The list of members that were updated
   * @type {Array<MemberResponse>}
   * @memberof CallMemberUpdatedPermissionEvent
   */
  members: Array<MemberResponse>;
  /**
   * The type of event: "call.member_added" in this case
   * @type {string}
   * @memberof CallMemberUpdatedPermissionEvent
   */
  type: string;
}
/**
 * This event is sent when a reaction is sent in a call, clients should use this to show the reaction in the call screen
 * @export
 * @interface CallReactionEvent
 */
export interface CallReactionEvent {
  /**
   *
   * @type {string}
   * @memberof CallReactionEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof CallReactionEvent
   */
  created_at: string;
  /**
   *
   * @type {ReactionResponse}
   * @memberof CallReactionEvent
   */
  reaction: ReactionResponse;
  /**
   * The type of event: "call.reaction_new" in this case
   * @type {string}
   * @memberof CallReactionEvent
   */
  type: string;
}
/**
 *
 * @export
 * @interface CallRecording
 */
export interface CallRecording {
  /**
   *
   * @type {string}
   * @memberof CallRecording
   */
  end_time: string;
  /**
   *
   * @type {string}
   * @memberof CallRecording
   */
  filename: string;
  /**
   *
   * @type {string}
   * @memberof CallRecording
   */
  start_time: string;
  /**
   *
   * @type {string}
   * @memberof CallRecording
   */
  url: string;
}
/**
 * This event is sent when call recording has started
 * @export
 * @interface CallRecordingStartedEvent
 */
export interface CallRecordingStartedEvent {
  /**
   *
   * @type {string}
   * @memberof CallRecordingStartedEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof CallRecordingStartedEvent
   */
  created_at: string;
  /**
   * The type of event: "call.recording_started" in this case
   * @type {string}
   * @memberof CallRecordingStartedEvent
   */
  type: string;
}
/**
 * This event is sent when call recording has stopped
 * @export
 * @interface CallRecordingStoppedEvent
 */
export interface CallRecordingStoppedEvent {
  /**
   *
   * @type {string}
   * @memberof CallRecordingStoppedEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof CallRecordingStoppedEvent
   */
  created_at: string;
  /**
   * The type of event: "call.recording_stopped" in this case
   * @type {string}
   * @memberof CallRecordingStoppedEvent
   */
  type: string;
}
/**
 * This event is sent when a user rejects a ringing call. Clients receiving this event should dismiss
 * the call screen unless the call includes more users.
 * @export
 * @interface CallRejectedEvent
 */
export interface CallRejectedEvent {
  /**
   *
   * @type {string}
   * @memberof CallRejectedEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof CallRejectedEvent
   */
  created_at: string;
  /**
   * The type of event: "call.rejected" in this case
   * @type {string}
   * @memberof CallRejectedEvent
   */
  type: string;
  /**
   *
   * @type {UserResponse}
   * @memberof CallRejectedEvent
   */
  user: UserResponse;
}
/**
 *
 * @export
 * @interface CallRequest
 */
export interface CallRequest {
  /**
   *
   * @type {UserRequest}
   * @memberof CallRequest
   */
  created_by?: UserRequest;
  /**
   *
   * @type {string}
   * @memberof CallRequest
   */
  created_by_id?: string;
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof CallRequest
   */
  custom?: { [key: string]: any };
  /**
   *
   * @type {Array<MemberRequest>}
   * @memberof CallRequest
   */
  members?: Array<MemberRequest>;
  /**
   *
   * @type {CallSettingsRequest}
   * @memberof CallRequest
   */
  settings_override?: CallSettingsRequest;
  /**
   *
   * @type {string}
   * @memberof CallRequest
   */
  starts_at?: string;
  /**
   *
   * @type {string}
   * @memberof CallRequest
   */
  team?: string;
}
/**
 * Represents a call
 * @export
 * @interface CallResponse
 */
export interface CallResponse {
  /**
   *
   * @type {boolean}
   * @memberof CallResponse
   */
  backstage: boolean;
  /**
   *
   * @type {Array<string>}
   * @memberof CallResponse
   */
  blocked_user_ids: Array<string>;
  /**
   *
   * @type {boolean}
   * @memberof CallResponse
   */
  broadcasting: boolean;
  /**
   * The unique identifier for a call (<type>:<id>)
   * @type {string}
   * @memberof CallResponse
   */
  cid: string;
  /**
   * Date/time of creation
   * @type {string}
   * @memberof CallResponse
   */
  created_at: string;
  /**
   *
   * @type {UserResponse}
   * @memberof CallResponse
   */
  created_by: UserResponse;
  /**
   * Custom data for this object
   * @type {{ [key: string]: any; }}
   * @memberof CallResponse
   */
  custom: { [key: string]: any };
  /**
   * Date/time when the call ended
   * @type {string}
   * @memberof CallResponse
   */
  ended_at?: string;
  /**
   *
   * @type {string}
   * @memberof CallResponse
   */
  hls_playlist_url: string;
  /**
   * Call ID
   * @type {string}
   * @memberof CallResponse
   */
  id: string;
  /**
   *
   * @type {CallIngressResponse}
   * @memberof CallResponse
   */
  ingress: CallIngressResponse;
  /**
   * The capabilities of the current user
   * @type {Array<OwnCapability>}
   * @memberof CallResponse
   */
  own_capabilities: Array<OwnCapability>;
  /**
   *
   * @type {boolean}
   * @memberof CallResponse
   */
  recording: boolean;
  /**
   *
   * @type {CallSettingsResponse}
   * @memberof CallResponse
   */
  settings: CallSettingsResponse;
  /**
   * Date/time when the call will start
   * @type {string}
   * @memberof CallResponse
   */
  starts_at?: string;
  /**
   *
   * @type {string}
   * @memberof CallResponse
   */
  team?: string;
  /**
   *
   * @type {boolean}
   * @memberof CallResponse
   */
  transcribing: boolean;
  /**
   * The type of call
   * @type {string}
   * @memberof CallResponse
   */
  type: string;
  /**
   * Date/time of the last update
   * @type {string}
   * @memberof CallResponse
   */
  updated_at: string;
}
/**
 *
 * @export
 * @interface CallSettingsRequest
 */
export interface CallSettingsRequest {
  /**
   *
   * @type {AudioSettingsRequest}
   * @memberof CallSettingsRequest
   */
  audio?: AudioSettingsRequest;
  /**
   *
   * @type {BackstageSettingsRequest}
   * @memberof CallSettingsRequest
   */
  backstage?: BackstageSettingsRequest;
  /**
   *
   * @type {GeofenceSettingsRequest}
   * @memberof CallSettingsRequest
   */
  geofencing?: GeofenceSettingsRequest;
  /**
   *
   * @type {RecordSettingsRequest}
   * @memberof CallSettingsRequest
   */
  recording?: RecordSettingsRequest;
  /**
   *
   * @type {RingSettingsRequest}
   * @memberof CallSettingsRequest
   */
  ring?: RingSettingsRequest;
  /**
   *
   * @type {ScreensharingSettingsRequest}
   * @memberof CallSettingsRequest
   */
  screensharing?: ScreensharingSettingsRequest;
  /**
   *
   * @type {TranscriptionSettingsRequest}
   * @memberof CallSettingsRequest
   */
  transcription?: TranscriptionSettingsRequest;
  /**
   *
   * @type {VideoSettingsRequest}
   * @memberof CallSettingsRequest
   */
  video?: VideoSettingsRequest;
}
/**
 *
 * @export
 * @interface CallSettingsResponse
 */
export interface CallSettingsResponse {
  /**
   *
   * @type {AudioSettings}
   * @memberof CallSettingsResponse
   */
  audio: AudioSettings;
  /**
   *
   * @type {BackstageSettings}
   * @memberof CallSettingsResponse
   */
  backstage: BackstageSettings;
  /**
   *
   * @type {BroadcastSettings}
   * @memberof CallSettingsResponse
   */
  broadcasting: BroadcastSettings;
  /**
   *
   * @type {GeofenceSettings}
   * @memberof CallSettingsResponse
   */
  geofencing: GeofenceSettings;
  /**
   *
   * @type {RecordSettings}
   * @memberof CallSettingsResponse
   */
  recording: RecordSettings;
  /**
   *
   * @type {RingSettings}
   * @memberof CallSettingsResponse
   */
  ring: RingSettings;
  /**
   *
   * @type {ScreensharingSettings}
   * @memberof CallSettingsResponse
   */
  screensharing: ScreensharingSettings;
  /**
   *
   * @type {TranscriptionSettings}
   * @memberof CallSettingsResponse
   */
  transcription: TranscriptionSettings;
  /**
   *
   * @type {VideoSettings}
   * @memberof CallSettingsResponse
   */
  video: VideoSettings;
}
/**
 *
 * @export
 * @interface CallStateResponseFields
 */
export interface CallStateResponseFields {
  /**
   *
   * @type {Array<UserResponse>}
   * @memberof CallStateResponseFields
   */
  blocked_users: Array<UserResponse>;
  /**
   *
   * @type {CallResponse}
   * @memberof CallStateResponseFields
   */
  call: CallResponse;
  /**
   * List of call members
   * @type {Array<MemberResponse>}
   * @memberof CallStateResponseFields
   */
  members: Array<MemberResponse>;
  /**
   *
   * @type {MemberResponse}
   * @memberof CallStateResponseFields
   */
  membership?: MemberResponse;
}
/**
 *
 * @export
 * @interface CallTypeResponse
 */
export interface CallTypeResponse {
  /**
   *
   * @type {string}
   * @memberof CallTypeResponse
   */
  created_at: string;
  /**
   *
   * @type {{ [key: string]: Array<string>; }}
   * @memberof CallTypeResponse
   */
  grants: { [key: string]: Array<string> };
  /**
   *
   * @type {string}
   * @memberof CallTypeResponse
   */
  name: string;
  /**
   *
   * @type {CallSettingsResponse}
   * @memberof CallTypeResponse
   */
  settings: CallSettingsResponse;
  /**
   *
   * @type {string}
   * @memberof CallTypeResponse
   */
  updated_at: string;
}
/**
 * This event is sent when a call is updated, clients should use this update the local state of the call.
 * This event also contains the capabilities by role for the call, clients should update the own_capability for the current.
 * @export
 * @interface CallUpdatedEvent
 */
export interface CallUpdatedEvent {
  /**
   *
   * @type {CallResponse}
   * @memberof CallUpdatedEvent
   */
  call: CallResponse;
  /**
   *
   * @type {string}
   * @memberof CallUpdatedEvent
   */
  call_cid: string;
  /**
   * The capabilities by role for this call
   * @type {{ [key: string]: Array<string>; }}
   * @memberof CallUpdatedEvent
   */
  capabilities_by_role: { [key: string]: Array<string> };
  /**
   *
   * @type {string}
   * @memberof CallUpdatedEvent
   */
  created_at: string;
  /**
   * The type of event: "call.ended" in this case
   * @type {string}
   * @memberof CallUpdatedEvent
   */
  type: string;
}
/**
 *
 * @export
 * @interface ConnectUserDetailsRequest
 */
export interface ConnectUserDetailsRequest {
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof ConnectUserDetailsRequest
   */
  custom?: { [key: string]: any };
  /**
   *
   * @type {string}
   * @memberof ConnectUserDetailsRequest
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof ConnectUserDetailsRequest
   */
  image?: string;
  /**
   *
   * @type {string}
   * @memberof ConnectUserDetailsRequest
   */
  name?: string;
}
/**
 * This event is sent when the WS connection is established and authenticated, this event contains the full user object as it is stored on the server
 * @export
 * @interface ConnectedEvent
 */
export interface ConnectedEvent {
  /**
   * The connection_id for this client
   * @type {string}
   * @memberof ConnectedEvent
   */
  connection_id: string;
  /**
   *
   * @type {string}
   * @memberof ConnectedEvent
   */
  created_at: string;
  /**
   *
   * @type {OwnUserResponse}
   * @memberof ConnectedEvent
   */
  me: OwnUserResponse;
  /**
   * The type of event: "connection.ok" in this case
   * @type {string}
   * @memberof ConnectedEvent
   */
  type: string;
}
/**
 *
 * @export
 * @interface Coordinates
 */
export interface Coordinates {
  /**
   *
   * @type {number}
   * @memberof Coordinates
   */
  latitude: number;
  /**
   *
   * @type {number}
   * @memberof Coordinates
   */
  longitude: number;
}
/**
 *
 * @export
 * @interface CreateCallTypeRequest
 */
export interface CreateCallTypeRequest {
  /**
   *
   * @type {{ [key: string]: Array<string>; }}
   * @memberof CreateCallTypeRequest
   */
  grants?: { [key: string]: Array<string> };
  /**
   *
   * @type {string}
   * @memberof CreateCallTypeRequest
   */
  name: string;
  /**
   *
   * @type {CallSettingsRequest}
   * @memberof CreateCallTypeRequest
   */
  settings?: CallSettingsRequest;
}
/**
 *
 * @export
 * @interface CreateCallTypeResponse
 */
export interface CreateCallTypeResponse {
  /**
   *
   * @type {string}
   * @memberof CreateCallTypeResponse
   */
  created_at: string;
  /**
   *
   * @type {string}
   * @memberof CreateCallTypeResponse
   */
  duration: string;
  /**
   *
   * @type {{ [key: string]: Array<string>; }}
   * @memberof CreateCallTypeResponse
   */
  grants: { [key: string]: Array<string> };
  /**
   *
   * @type {string}
   * @memberof CreateCallTypeResponse
   */
  name: string;
  /**
   *
   * @type {CallSettingsResponse}
   * @memberof CreateCallTypeResponse
   */
  settings: CallSettingsResponse;
  /**
   *
   * @type {string}
   * @memberof CreateCallTypeResponse
   */
  updated_at: string;
}
/**
 *
 * @export
 * @interface CreateDeviceRequest
 */
export interface CreateDeviceRequest {
  /**
   *
   * @type {string}
   * @memberof CreateDeviceRequest
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof CreateDeviceRequest
   */
  push_provider?: CreateDeviceRequestPushProviderEnum;
  /**
   *
   * @type {string}
   * @memberof CreateDeviceRequest
   */
  push_provider_name?: string;
  /**
   *
   * @type {UserRequest}
   * @memberof CreateDeviceRequest
   */
  user?: UserRequest;
  /**
   *
   * @type {string}
   * @memberof CreateDeviceRequest
   */
  user_id?: string;
}

/**
 * @export
 */
export const CreateDeviceRequestPushProviderEnum = {
  FIREBASE: 'firebase',
  APN: 'apn',
  HUAWEI: 'huawei',
  XIAOMI: 'xiaomi',
} as const;
export type CreateDeviceRequestPushProviderEnum =
  (typeof CreateDeviceRequestPushProviderEnum)[keyof typeof CreateDeviceRequestPushProviderEnum];

/**
 *
 * @export
 * @interface CreateGuestRequest
 */
export interface CreateGuestRequest {
  /**
   *
   * @type {UserRequest}
   * @memberof CreateGuestRequest
   */
  user: UserRequest;
}
/**
 *
 * @export
 * @interface CreateGuestResponse
 */
export interface CreateGuestResponse {
  /**
   * the access token to authenticate the user
   * @type {string}
   * @memberof CreateGuestResponse
   */
  access_token: string;
  /**
   *
   * @type {string}
   * @memberof CreateGuestResponse
   */
  duration: string;
  /**
   *
   * @type {UserResponse}
   * @memberof CreateGuestResponse
   */
  user: UserResponse;
}
/**
 *
 * @export
 * @interface Credentials
 */
export interface Credentials {
  /**
   *
   * @type {Array<ICEServer>}
   * @memberof Credentials
   */
  ice_servers: Array<ICEServer>;
  /**
   *
   * @type {SFUResponse}
   * @memberof Credentials
   */
  server: SFUResponse;
  /**
   *
   * @type {string}
   * @memberof Credentials
   */
  token: string;
}
/**
 * A custom event, this event is used to send custom events to other participants in the call.
 * @export
 * @interface CustomVideoEvent
 */
export interface CustomVideoEvent {
  /**
   *
   * @type {string}
   * @memberof CustomVideoEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof CustomVideoEvent
   */
  created_at: string;
  /**
   * Custom data for this object
   * @type {{ [key: string]: any; }}
   * @memberof CustomVideoEvent
   */
  custom: { [key: string]: any };
  /**
   * The type of event, "custom" in this case
   * @type {string}
   * @memberof CustomVideoEvent
   */
  type: string;
  /**
   *
   * @type {UserResponse}
   * @memberof CustomVideoEvent
   */
  user: UserResponse;
}
/**
 *
 * @export
 * @interface DatacenterResponse
 */
export interface DatacenterResponse {
  /**
   *
   * @type {Coordinates}
   * @memberof DatacenterResponse
   */
  coordinates: Coordinates;
  /**
   *
   * @type {string}
   * @memberof DatacenterResponse
   */
  latency_url: string;
  /**
   *
   * @type {string}
   * @memberof DatacenterResponse
   */
  name: string;
}
/**
 *
 * @export
 * @interface Device
 */
export interface Device {
  /**
   * Date/time of creation
   * @type {string}
   * @memberof Device
   */
  created_at: string;
  /**
   * Whether device is disabled or not
   * @type {boolean}
   * @memberof Device
   */
  disabled?: boolean;
  /**
   * Reason explaining why device had been disabled
   * @type {string}
   * @memberof Device
   */
  disabled_reason?: string;
  /**
   *
   * @type {string}
   * @memberof Device
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Device
   */
  push_provider: string;
  /**
   *
   * @type {string}
   * @memberof Device
   */
  push_provider_name?: string;
}
/**
 *
 * @export
 * @interface DeviceFieldsRequest
 */
export interface DeviceFieldsRequest {
  /**
   * Device ID
   * @type {string}
   * @memberof DeviceFieldsRequest
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof DeviceFieldsRequest
   */
  push_provider: DeviceFieldsRequestPushProviderEnum;
  /**
   * Name of the push provider configuration
   * @type {string}
   * @memberof DeviceFieldsRequest
   */
  push_provider_name?: string;
}

/**
 * @export
 */
export const DeviceFieldsRequestPushProviderEnum = {
  FIREBASE: 'firebase',
  APN: 'apn',
  HUAWEI: 'huawei',
  XIAOMI: 'xiaomi',
} as const;
export type DeviceFieldsRequestPushProviderEnum =
  (typeof DeviceFieldsRequestPushProviderEnum)[keyof typeof DeviceFieldsRequestPushProviderEnum];

/**
 *
 * @export
 * @interface EdgeResponse
 */
export interface EdgeResponse {
  /**
   *
   * @type {string}
   * @memberof EdgeResponse
   */
  continent_code: string;
  /**
   *
   * @type {string}
   * @memberof EdgeResponse
   */
  country_iso_code: string;
  /**
   *
   * @type {number}
   * @memberof EdgeResponse
   */
  green: number;
  /**
   *
   * @type {string}
   * @memberof EdgeResponse
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof EdgeResponse
   */
  latency_test_url: string;
  /**
   *
   * @type {number}
   * @memberof EdgeResponse
   */
  latitude: number;
  /**
   *
   * @type {number}
   * @memberof EdgeResponse
   */
  longitude: number;
  /**
   *
   * @type {number}
   * @memberof EdgeResponse
   */
  red: number;
  /**
   *
   * @type {string}
   * @memberof EdgeResponse
   */
  subdivision_iso_code: string;
  /**
   *
   * @type {number}
   * @memberof EdgeResponse
   */
  yellow: number;
}
/**
 *
 * @export
 * @interface EndCallResponse
 */
export interface EndCallResponse {
  /**
   *
   * @type {string}
   * @memberof EndCallResponse
   */
  duration: string;
}
/**
 *
 * @export
 * @interface GeofenceSettings
 */
export interface GeofenceSettings {
  /**
   *
   * @type {Array<string>}
   * @memberof GeofenceSettings
   */
  names: Array<string>;
}
/**
 *
 * @export
 * @interface GeofenceSettingsRequest
 */
export interface GeofenceSettingsRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof GeofenceSettingsRequest
   */
  names?: Array<string>;
}
/**
 *
 * @export
 * @interface GetCallEdgeServerRequest
 */
export interface GetCallEdgeServerRequest {
  /**
   *
   * @type {{ [key: string]: Array<number>; }}
   * @memberof GetCallEdgeServerRequest
   */
  latency_measurements: { [key: string]: Array<number> };
}
/**
 *
 * @export
 * @interface GetCallEdgeServerResponse
 */
export interface GetCallEdgeServerResponse {
  /**
   *
   * @type {Array<UserResponse>}
   * @memberof GetCallEdgeServerResponse
   */
  blocked_users: Array<UserResponse>;
  /**
   *
   * @type {CallResponse}
   * @memberof GetCallEdgeServerResponse
   */
  call: CallResponse;
  /**
   *
   * @type {Credentials}
   * @memberof GetCallEdgeServerResponse
   */
  credentials: Credentials;
  /**
   * Duration of the request in human-readable format
   * @type {string}
   * @memberof GetCallEdgeServerResponse
   */
  duration: string;
  /**
   *
   * @type {Array<MemberResponse>}
   * @memberof GetCallEdgeServerResponse
   */
  members: Array<MemberResponse>;
  /**
   *
   * @type {MemberResponse}
   * @memberof GetCallEdgeServerResponse
   */
  membership?: MemberResponse;
}
/**
 *
 * @export
 * @interface GetCallResponse
 */
export interface GetCallResponse {
  /**
   *
   * @type {Array<UserResponse>}
   * @memberof GetCallResponse
   */
  blocked_users: Array<UserResponse>;
  /**
   *
   * @type {CallResponse}
   * @memberof GetCallResponse
   */
  call: CallResponse;
  /**
   *
   * @type {string}
   * @memberof GetCallResponse
   */
  duration: string;
  /**
   *
   * @type {Array<MemberResponse>}
   * @memberof GetCallResponse
   */
  members: Array<MemberResponse>;
  /**
   *
   * @type {MemberResponse}
   * @memberof GetCallResponse
   */
  membership?: MemberResponse;
}
/**
 *
 * @export
 * @interface GetCallTypeResponse
 */
export interface GetCallTypeResponse {
  /**
   *
   * @type {string}
   * @memberof GetCallTypeResponse
   */
  created_at: string;
  /**
   *
   * @type {string}
   * @memberof GetCallTypeResponse
   */
  duration: string;
  /**
   *
   * @type {{ [key: string]: Array<string>; }}
   * @memberof GetCallTypeResponse
   */
  grants: { [key: string]: Array<string> };
  /**
   *
   * @type {string}
   * @memberof GetCallTypeResponse
   */
  name: string;
  /**
   *
   * @type {CallSettingsResponse}
   * @memberof GetCallTypeResponse
   */
  settings: CallSettingsResponse;
  /**
   *
   * @type {string}
   * @memberof GetCallTypeResponse
   */
  updated_at: string;
}
/**
 *
 * @export
 * @interface GetEdgesResponse
 */
export interface GetEdgesResponse {
  /**
   * Duration of the request in human-readable format
   * @type {string}
   * @memberof GetEdgesResponse
   */
  duration: string;
  /**
   *
   * @type {Array<EdgeResponse>}
   * @memberof GetEdgesResponse
   */
  edges: Array<EdgeResponse>;
}
/**
 *
 * @export
 * @interface GetOrCreateCallRequest
 */
export interface GetOrCreateCallRequest {
  /**
   *
   * @type {CallRequest}
   * @memberof GetOrCreateCallRequest
   */
  data?: CallRequest;
  /**
   *
   * @type {number}
   * @memberof GetOrCreateCallRequest
   */
  members_limit?: number;
  /**
   * if provided it overrides the default ring setting for this call
   * @type {boolean}
   * @memberof GetOrCreateCallRequest
   */
  ring?: boolean;
}
/**
 *
 * @export
 * @interface GetOrCreateCallResponse
 */
export interface GetOrCreateCallResponse {
  /**
   *
   * @type {Array<UserResponse>}
   * @memberof GetOrCreateCallResponse
   */
  blocked_users: Array<UserResponse>;
  /**
   *
   * @type {CallResponse}
   * @memberof GetOrCreateCallResponse
   */
  call: CallResponse;
  /**
   *
   * @type {boolean}
   * @memberof GetOrCreateCallResponse
   */
  created: boolean;
  /**
   *
   * @type {string}
   * @memberof GetOrCreateCallResponse
   */
  duration: string;
  /**
   *
   * @type {Array<MemberResponse>}
   * @memberof GetOrCreateCallResponse
   */
  members: Array<MemberResponse>;
  /**
   *
   * @type {MemberResponse}
   * @memberof GetOrCreateCallResponse
   */
  membership?: MemberResponse;
}
/**
 *
 * @export
 * @interface GoLiveResponse
 */
export interface GoLiveResponse {
  /**
   *
   * @type {CallResponse}
   * @memberof GoLiveResponse
   */
  call: CallResponse;
  /**
   * Duration of the request in human-readable format
   * @type {string}
   * @memberof GoLiveResponse
   */
  duration: string;
}
/**
 *
 * @export
 * @interface HLSSettings
 */
export interface HLSSettings {
  /**
   *
   * @type {boolean}
   * @memberof HLSSettings
   */
  auto_on: boolean;
  /**
   *
   * @type {boolean}
   * @memberof HLSSettings
   */
  enabled: boolean;
  /**
   *
   * @type {Array<string>}
   * @memberof HLSSettings
   */
  quality_tracks: Array<string>;
}
/**
 *
 * @export
 * @interface HealthCheckEvent
 */
export interface HealthCheckEvent {
  /**
   * The connection_id for this client
   * @type {string}
   * @memberof HealthCheckEvent
   */
  connection_id: string;
  /**
   *
   * @type {string}
   * @memberof HealthCheckEvent
   */
  created_at: string;
  /**
   * The type of event: "health.check" in this case
   * @type {string}
   * @memberof HealthCheckEvent
   */
  type: string;
}
/**
 *
 * @export
 * @interface ICEServer
 */
export interface ICEServer {
  /**
   *
   * @type {string}
   * @memberof ICEServer
   */
  password: string;
  /**
   *
   * @type {Array<string>}
   * @memberof ICEServer
   */
  urls: Array<string>;
  /**
   *
   * @type {string}
   * @memberof ICEServer
   */
  username: string;
}
/**
 *
 * @export
 * @interface JoinCallRequest
 */
export interface JoinCallRequest {
  /**
   * if true the call will be created if it doesn't exist
   * @type {boolean}
   * @memberof JoinCallRequest
   */
  create?: boolean;
  /**
   *
   * @type {CallRequest}
   * @memberof JoinCallRequest
   */
  data?: CallRequest;
  /**
   *
   * @type {string}
   * @memberof JoinCallRequest
   */
  datacenter_hinted_id?: string;
  /**
   *
   * @type {number}
   * @memberof JoinCallRequest
   */
  members_limit?: number;
  /**
   * if true and the call is created, the notification will include ring=true
   * @type {boolean}
   * @memberof JoinCallRequest
   */
  ring?: boolean;
}
/**
 *
 * @export
 * @interface JoinCallResponse
 */
export interface JoinCallResponse {
  /**
   *
   * @type {Array<UserResponse>}
   * @memberof JoinCallResponse
   */
  blocked_users: Array<UserResponse>;
  /**
   *
   * @type {CallResponse}
   * @memberof JoinCallResponse
   */
  call: CallResponse;
  /**
   *
   * @type {boolean}
   * @memberof JoinCallResponse
   */
  created: boolean;
  /**
   *
   * @type {string}
   * @memberof JoinCallResponse
   */
  duration: string;
  /**
   *
   * @type {Array<DatacenterResponse>}
   * @memberof JoinCallResponse
   */
  edges: Array<DatacenterResponse>;
  /**
   *
   * @type {Array<MemberResponse>}
   * @memberof JoinCallResponse
   */
  members: Array<MemberResponse>;
  /**
   *
   * @type {MemberResponse}
   * @memberof JoinCallResponse
   */
  membership?: MemberResponse;
}
/**
 *
 * @export
 * @interface ListCallTypeResponse
 */
export interface ListCallTypeResponse {
  /**
   *
   * @type {{ [key: string]: CallTypeResponse; }}
   * @memberof ListCallTypeResponse
   */
  call_types: { [key: string]: CallTypeResponse };
  /**
   *
   * @type {string}
   * @memberof ListCallTypeResponse
   */
  duration: string;
}
/**
 *
 * @export
 * @interface ListDevicesResponse
 */
export interface ListDevicesResponse {
  /**
   * List of devices
   * @type {Array<Device>}
   * @memberof ListDevicesResponse
   */
  devices: Array<Device>;
  /**
   *
   * @type {string}
   * @memberof ListDevicesResponse
   */
  duration: string;
}
/**
 *
 * @export
 * @interface ListRecordingsResponse
 */
export interface ListRecordingsResponse {
  /**
   *
   * @type {string}
   * @memberof ListRecordingsResponse
   */
  duration: string;
  /**
   *
   * @type {Array<CallRecording>}
   * @memberof ListRecordingsResponse
   */
  recordings: Array<CallRecording>;
}
/**
 *
 * @export
 * @interface MemberRequest
 */
export interface MemberRequest {
  /**
   * Custom data for this object
   * @type {{ [key: string]: any; }}
   * @memberof MemberRequest
   */
  custom?: { [key: string]: any };
  /**
   *
   * @type {string}
   * @memberof MemberRequest
   */
  role?: string;
  /**
   *
   * @type {string}
   * @memberof MemberRequest
   */
  user_id: string;
}
/**
 *
 * @export
 * @interface MemberResponse
 */
export interface MemberResponse {
  /**
   * Date/time of creation
   * @type {string}
   * @memberof MemberResponse
   */
  created_at: string;
  /**
   * Custom member response data
   * @type {{ [key: string]: any; }}
   * @memberof MemberResponse
   */
  custom: { [key: string]: any };
  /**
   * Date/time of deletion
   * @type {string}
   * @memberof MemberResponse
   */
  deleted_at?: string;
  /**
   *
   * @type {string}
   * @memberof MemberResponse
   */
  role?: string;
  /**
   * Date/time of the last update
   * @type {string}
   * @memberof MemberResponse
   */
  updated_at: string;
  /**
   *
   * @type {UserResponse}
   * @memberof MemberResponse
   */
  user: UserResponse;
  /**
   *
   * @type {string}
   * @memberof MemberResponse
   */
  user_id: string;
}
/**
 *
 * @export
 * @interface MuteUsersRequest
 */
export interface MuteUsersRequest {
  /**
   *
   * @type {boolean}
   * @memberof MuteUsersRequest
   */
  audio?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MuteUsersRequest
   */
  mute_all_users?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MuteUsersRequest
   */
  screenshare?: boolean;
  /**
   *
   * @type {Array<string>}
   * @memberof MuteUsersRequest
   */
  user_ids?: Array<string>;
  /**
   *
   * @type {boolean}
   * @memberof MuteUsersRequest
   */
  video?: boolean;
}
/**
 *
 * @export
 * @interface MuteUsersResponse
 */
export interface MuteUsersResponse {
  /**
   * Duration of the request in human-readable format
   * @type {string}
   * @memberof MuteUsersResponse
   */
  duration: string;
}

/**
 * All possibility of string to use
 * @export
 */
export const OwnCapability = {
  BLOCK_USERS: 'block-users',
  CREATE_CALL: 'create-call',
  CREATE_REACTION: 'create-reaction',
  END_CALL: 'end-call',
  JOIN_BACKSTAGE: 'join-backstage',
  JOIN_CALL: 'join-call',
  JOIN_ENDED_CALL: 'join-ended-call',
  MUTE_USERS: 'mute-users',
  READ_CALL: 'read-call',
  REMOVE_CALL_MEMBER: 'remove-call-member',
  SCREENSHARE: 'screenshare',
  SEND_AUDIO: 'send-audio',
  SEND_VIDEO: 'send-video',
  START_BROADCAST_CALL: 'start-broadcast-call',
  START_RECORD_CALL: 'start-record-call',
  START_TRANSCRIPTION_CALL: 'start-transcription-call',
  STOP_BROADCAST_CALL: 'stop-broadcast-call',
  STOP_RECORD_CALL: 'stop-record-call',
  STOP_TRANSCRIPTION_CALL: 'stop-transcription-call',
  UPDATE_CALL: 'update-call',
  UPDATE_CALL_MEMBER: 'update-call-member',
  UPDATE_CALL_PERMISSIONS: 'update-call-permissions',
  UPDATE_CALL_SETTINGS: 'update-call-settings',
} as const;
export type OwnCapability = (typeof OwnCapability)[keyof typeof OwnCapability];

/**
 *
 * @export
 * @interface OwnUserResponse
 */
export interface OwnUserResponse {
  /**
   *
   * @type {string}
   * @memberof OwnUserResponse
   */
  created_at: string;
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof OwnUserResponse
   */
  custom: { [key: string]: any };
  /**
   *
   * @type {string}
   * @memberof OwnUserResponse
   */
  deleted_at?: string;
  /**
   *
   * @type {Array<Device>}
   * @memberof OwnUserResponse
   */
  devices: Array<Device>;
  /**
   *
   * @type {string}
   * @memberof OwnUserResponse
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof OwnUserResponse
   */
  image?: string;
  /**
   *
   * @type {string}
   * @memberof OwnUserResponse
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof OwnUserResponse
   */
  role: string;
  /**
   *
   * @type {Array<string>}
   * @memberof OwnUserResponse
   */
  teams: Array<string>;
  /**
   *
   * @type {string}
   * @memberof OwnUserResponse
   */
  updated_at: string;
}
/**
 * This event is sent when a user requests access to a feature on a call,
 * clients receiving this event should display a permission request to the user
 * @export
 * @interface PermissionRequestEvent
 */
export interface PermissionRequestEvent {
  /**
   *
   * @type {string}
   * @memberof PermissionRequestEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof PermissionRequestEvent
   */
  created_at: string;
  /**
   * The list of permissions requested by the user
   * @type {Array<string>}
   * @memberof PermissionRequestEvent
   */
  permissions: Array<string>;
  /**
   * The type of event: "call.permission_request" in this case
   * @type {string}
   * @memberof PermissionRequestEvent
   */
  type: string;
  /**
   *
   * @type {UserResponse}
   * @memberof PermissionRequestEvent
   */
  user: UserResponse;
}
/**
 *
 * @export
 * @interface QueryCallsRequest
 */
export interface QueryCallsRequest {
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof QueryCallsRequest
   */
  filter_conditions?: { [key: string]: any };
  /**
   *
   * @type {number}
   * @memberof QueryCallsRequest
   */
  limit?: number;
  /**
   *
   * @type {string}
   * @memberof QueryCallsRequest
   */
  next?: string;
  /**
   *
   * @type {string}
   * @memberof QueryCallsRequest
   */
  prev?: string;
  /**
   *
   * @type {Array<SortParamRequest>}
   * @memberof QueryCallsRequest
   */
  sort: Array<SortParamRequest>;
  /**
   *
   * @type {boolean}
   * @memberof QueryCallsRequest
   */
  watch?: boolean;
}
/**
 *
 * @export
 * @interface QueryCallsResponse
 */
export interface QueryCallsResponse {
  /**
   *
   * @type {Array<CallStateResponseFields>}
   * @memberof QueryCallsResponse
   */
  calls: Array<CallStateResponseFields>;
  /**
   *
   * @type {string}
   * @memberof QueryCallsResponse
   */
  duration: string;
  /**
   *
   * @type {string}
   * @memberof QueryCallsResponse
   */
  next?: string;
  /**
   *
   * @type {string}
   * @memberof QueryCallsResponse
   */
  prev?: string;
}
/**
 *
 * @export
 * @interface QueryMembersRequest
 */
export interface QueryMembersRequest {
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof QueryMembersRequest
   */
  filter_conditions?: { [key: string]: any };
  /**
   *
   * @type {string}
   * @memberof QueryMembersRequest
   */
  id?: string;
  /**
   *
   * @type {number}
   * @memberof QueryMembersRequest
   */
  limit?: number;
  /**
   *
   * @type {string}
   * @memberof QueryMembersRequest
   */
  next?: string;
  /**
   *
   * @type {string}
   * @memberof QueryMembersRequest
   */
  prev?: string;
  /**
   *
   * @type {Array<SortParamRequest>}
   * @memberof QueryMembersRequest
   */
  sort?: Array<SortParamRequest>;
  /**
   *
   * @type {string}
   * @memberof QueryMembersRequest
   */
  type: string;
}
/**
 *
 * @export
 * @interface QueryMembersResponse
 */
export interface QueryMembersResponse {
  /**
   * Duration of the request in human-readable format
   * @type {string}
   * @memberof QueryMembersResponse
   */
  duration: string;
  /**
   *
   * @type {Array<MemberResponse>}
   * @memberof QueryMembersResponse
   */
  members: Array<MemberResponse>;
  /**
   *
   * @type {string}
   * @memberof QueryMembersResponse
   */
  next?: string;
  /**
   *
   * @type {string}
   * @memberof QueryMembersResponse
   */
  prev?: string;
}
/**
 * RTMP input settings
 * @export
 * @interface RTMPIngress
 */
export interface RTMPIngress {
  /**
   *
   * @type {string}
   * @memberof RTMPIngress
   */
  address: string;
}
/**
 *
 * @export
 * @interface ReactionResponse
 */
export interface ReactionResponse {
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof ReactionResponse
   */
  custom?: { [key: string]: any };
  /**
   *
   * @type {string}
   * @memberof ReactionResponse
   */
  emoji_code?: string;
  /**
   *
   * @type {string}
   * @memberof ReactionResponse
   */
  type: string;
  /**
   *
   * @type {UserResponse}
   * @memberof ReactionResponse
   */
  user: UserResponse;
}
/**
 *
 * @export
 * @interface RecordSettings
 */
export interface RecordSettings {
  /**
   *
   * @type {boolean}
   * @memberof RecordSettings
   */
  audio_only: boolean;
  /**
   *
   * @type {string}
   * @memberof RecordSettings
   */
  mode: RecordSettingsModeEnum;
  /**
   *
   * @type {string}
   * @memberof RecordSettings
   */
  quality: RecordSettingsQualityEnum;
}

/**
 * @export
 */
export const RecordSettingsModeEnum = {
  AVAILABLE: 'available',
  DISABLED: 'disabled',
  AUTO_ON: 'auto-on',
} as const;
export type RecordSettingsModeEnum =
  (typeof RecordSettingsModeEnum)[keyof typeof RecordSettingsModeEnum];

/**
 * @export
 */
export const RecordSettingsQualityEnum = {
  AUDIO_ONLY: 'audio-only',
  _360P: '360p',
  _480P: '480p',
  _720P: '720p',
  _1080P: '1080p',
  _1440P: '1440p',
} as const;
export type RecordSettingsQualityEnum =
  (typeof RecordSettingsQualityEnum)[keyof typeof RecordSettingsQualityEnum];

/**
 *
 * @export
 * @interface RecordSettingsRequest
 */
export interface RecordSettingsRequest {
  /**
   *
   * @type {boolean}
   * @memberof RecordSettingsRequest
   */
  audio_only?: boolean;
  /**
   *
   * @type {string}
   * @memberof RecordSettingsRequest
   */
  mode?: RecordSettingsRequestModeEnum;
  /**
   *
   * @type {string}
   * @memberof RecordSettingsRequest
   */
  quality?: RecordSettingsRequestQualityEnum;
}

/**
 * @export
 */
export const RecordSettingsRequestModeEnum = {
  AVAILABLE: 'available',
  DISABLED: 'disabled',
  AUTO_ON: 'auto-on',
} as const;
export type RecordSettingsRequestModeEnum =
  (typeof RecordSettingsRequestModeEnum)[keyof typeof RecordSettingsRequestModeEnum];

/**
 * @export
 */
export const RecordSettingsRequestQualityEnum = {
  AUDIO_ONLY: 'audio-only',
  _360P: '360p',
  _480P: '480p',
  _720P: '720p',
  _1080P: '1080p',
  _1440P: '1440p',
} as const;
export type RecordSettingsRequestQualityEnum =
  (typeof RecordSettingsRequestQualityEnum)[keyof typeof RecordSettingsRequestQualityEnum];

/**
 *
 * @export
 * @interface RequestPermissionRequest
 */
export interface RequestPermissionRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof RequestPermissionRequest
   */
  permissions: Array<string>;
}
/**
 *
 * @export
 * @interface RequestPermissionResponse
 */
export interface RequestPermissionResponse {
  /**
   *
   * @type {string}
   * @memberof RequestPermissionResponse
   */
  duration: string;
}
/**
 *
 * @export
 * @interface Response
 */
export interface Response {
  /**
   * Duration of the request in human-readable format
   * @type {string}
   * @memberof Response
   */
  duration: string;
}
/**
 *
 * @export
 * @interface RingSettings
 */
export interface RingSettings {
  /**
   *
   * @type {number}
   * @memberof RingSettings
   */
  auto_cancel_timeout_ms: number;
  /**
   *
   * @type {number}
   * @memberof RingSettings
   */
  auto_reject_timeout_ms: number;
}
/**
 *
 * @export
 * @interface RingSettingsRequest
 */
export interface RingSettingsRequest {
  /**
   *
   * @type {number}
   * @memberof RingSettingsRequest
   */
  auto_cancel_timeout_ms?: number;
  /**
   *
   * @type {number}
   * @memberof RingSettingsRequest
   */
  auto_reject_timeout_ms?: number;
}
/**
 *
 * @export
 * @interface SFUResponse
 */
export interface SFUResponse {
  /**
   *
   * @type {string}
   * @memberof SFUResponse
   */
  edge_name: string;
  /**
   *
   * @type {string}
   * @memberof SFUResponse
   */
  url: string;
}
/**
 *
 * @export
 * @interface ScreensharingSettings
 */
export interface ScreensharingSettings {
  /**
   *
   * @type {boolean}
   * @memberof ScreensharingSettings
   */
  access_request_enabled: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ScreensharingSettings
   */
  enabled: boolean;
}
/**
 *
 * @export
 * @interface ScreensharingSettingsRequest
 */
export interface ScreensharingSettingsRequest {
  /**
   *
   * @type {boolean}
   * @memberof ScreensharingSettingsRequest
   */
  access_request_enabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ScreensharingSettingsRequest
   */
  enabled?: boolean;
}
/**
 *
 * @export
 * @interface SendEventRequest
 */
export interface SendEventRequest {
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof SendEventRequest
   */
  custom?: { [key: string]: any };
  /**
   *
   * @type {string}
   * @memberof SendEventRequest
   */
  type: string;
}
/**
 *
 * @export
 * @interface SendEventResponse
 */
export interface SendEventResponse {
  /**
   *
   * @type {string}
   * @memberof SendEventResponse
   */
  duration: string;
}
/**
 *
 * @export
 * @interface SendReactionRequest
 */
export interface SendReactionRequest {
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof SendReactionRequest
   */
  custom?: { [key: string]: any };
  /**
   *
   * @type {string}
   * @memberof SendReactionRequest
   */
  emoji_code?: string;
  /**
   *
   * @type {string}
   * @memberof SendReactionRequest
   */
  type: string;
}
/**
 *
 * @export
 * @interface SendReactionResponse
 */
export interface SendReactionResponse {
  /**
   * Duration of the request in human-readable format
   * @type {string}
   * @memberof SendReactionResponse
   */
  duration: string;
  /**
   *
   * @type {ReactionResponse}
   * @memberof SendReactionResponse
   */
  reaction: ReactionResponse;
}
/**
 *
 * @export
 * @interface SortParamRequest
 */
export interface SortParamRequest {
  /**
   *
   * @type {number}
   * @memberof SortParamRequest
   */
  direction?: number;
  /**
   *
   * @type {string}
   * @memberof SortParamRequest
   */
  field?: string;
}
/**
 *
 * @export
 * @interface StopLiveResponse
 */
export interface StopLiveResponse {
  /**
   *
   * @type {CallResponse}
   * @memberof StopLiveResponse
   */
  call: CallResponse;
  /**
   * Duration of the request in human-readable format
   * @type {string}
   * @memberof StopLiveResponse
   */
  duration: string;
}
/**
 *
 * @export
 * @interface TranscriptionSettings
 */
export interface TranscriptionSettings {
  /**
   *
   * @type {string}
   * @memberof TranscriptionSettings
   */
  closed_caption_mode: string;
  /**
   *
   * @type {string}
   * @memberof TranscriptionSettings
   */
  mode: TranscriptionSettingsModeEnum;
}

/**
 * @export
 */
export const TranscriptionSettingsModeEnum = {
  AVAILABLE: 'available',
  DISABLED: 'disabled',
  AUTO_ON: 'auto-on',
} as const;
export type TranscriptionSettingsModeEnum =
  (typeof TranscriptionSettingsModeEnum)[keyof typeof TranscriptionSettingsModeEnum];

/**
 *
 * @export
 * @interface TranscriptionSettingsRequest
 */
export interface TranscriptionSettingsRequest {
  /**
   *
   * @type {string}
   * @memberof TranscriptionSettingsRequest
   */
  closed_caption_mode?: string;
  /**
   *
   * @type {string}
   * @memberof TranscriptionSettingsRequest
   */
  mode?: TranscriptionSettingsRequestModeEnum;
}

/**
 * @export
 */
export const TranscriptionSettingsRequestModeEnum = {
  AVAILABLE: 'available',
  DISABLED: 'disabled',
  AUTO_ON: 'auto-on',
} as const;
export type TranscriptionSettingsRequestModeEnum =
  (typeof TranscriptionSettingsRequestModeEnum)[keyof typeof TranscriptionSettingsRequestModeEnum];

/**
 *
 * @export
 * @interface UnblockUserRequest
 */
export interface UnblockUserRequest {
  /**
   * the user to unblock
   * @type {string}
   * @memberof UnblockUserRequest
   */
  user_id: string;
}
/**
 *
 * @export
 * @interface UnblockUserResponse
 */
export interface UnblockUserResponse {
  /**
   * Duration of the request in human-readable format
   * @type {string}
   * @memberof UnblockUserResponse
   */
  duration: string;
}
/**
 * This event is sent when a user is unblocked on a call,
 * this can be useful to notify the user that they can now join the call again
 * @export
 * @interface UnblockedUserEvent
 */
export interface UnblockedUserEvent {
  /**
   *
   * @type {string}
   * @memberof UnblockedUserEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof UnblockedUserEvent
   */
  created_at: string;
  /**
   * The type of event: "call.unblocked_user" in this case
   * @type {string}
   * @memberof UnblockedUserEvent
   */
  type: string;
  /**
   *
   * @type {UserResponse}
   * @memberof UnblockedUserEvent
   */
  user: UserResponse;
}
/**
 *
 * @export
 * @interface UpdateCallMembersRequest
 */
export interface UpdateCallMembersRequest {
  /**
   * List of userID to remove
   * @type {Array<string>}
   * @memberof UpdateCallMembersRequest
   */
  remove_members?: Array<string>;
  /**
   * List of members to update or insert
   * @type {Array<MemberRequest>}
   * @memberof UpdateCallMembersRequest
   */
  update_members?: Array<MemberRequest>;
}
/**
 *
 * @export
 * @interface UpdateCallMembersResponse
 */
export interface UpdateCallMembersResponse {
  /**
   * Duration of the request in human-readable format
   * @type {string}
   * @memberof UpdateCallMembersResponse
   */
  duration: string;
  /**
   *
   * @type {Array<MemberResponse>}
   * @memberof UpdateCallMembersResponse
   */
  members: Array<MemberResponse>;
}
/**
 *
 * @export
 * @interface UpdateCallRequest
 */
export interface UpdateCallRequest {
  /**
   * Custom data for this object
   * @type {{ [key: string]: any; }}
   * @memberof UpdateCallRequest
   */
  custom?: { [key: string]: any };
  /**
   *
   * @type {CallSettingsRequest}
   * @memberof UpdateCallRequest
   */
  settings_override?: CallSettingsRequest;
  /**
   * the time the call is scheduled to start
   * @type {string}
   * @memberof UpdateCallRequest
   */
  starts_at?: string;
}
/**
 * Represents a call
 * @export
 * @interface UpdateCallResponse
 */
export interface UpdateCallResponse {
  /**
   *
   * @type {CallResponse}
   * @memberof UpdateCallResponse
   */
  call: CallResponse;
  /**
   *
   * @type {string}
   * @memberof UpdateCallResponse
   */
  duration: string;
}
/**
 *
 * @export
 * @interface UpdateCallTypeRequest
 */
export interface UpdateCallTypeRequest {
  /**
   *
   * @type {{ [key: string]: Array<string>; }}
   * @memberof UpdateCallTypeRequest
   */
  grants?: { [key: string]: Array<string> };
  /**
   *
   * @type {CallSettingsRequest}
   * @memberof UpdateCallTypeRequest
   */
  settings?: CallSettingsRequest;
}
/**
 *
 * @export
 * @interface UpdateCallTypeResponse
 */
export interface UpdateCallTypeResponse {
  /**
   *
   * @type {string}
   * @memberof UpdateCallTypeResponse
   */
  created_at: string;
  /**
   *
   * @type {string}
   * @memberof UpdateCallTypeResponse
   */
  duration: string;
  /**
   *
   * @type {{ [key: string]: Array<string>; }}
   * @memberof UpdateCallTypeResponse
   */
  grants: { [key: string]: Array<string> };
  /**
   *
   * @type {string}
   * @memberof UpdateCallTypeResponse
   */
  name: string;
  /**
   *
   * @type {CallSettingsResponse}
   * @memberof UpdateCallTypeResponse
   */
  settings: CallSettingsResponse;
  /**
   *
   * @type {string}
   * @memberof UpdateCallTypeResponse
   */
  updated_at: string;
}
/**
 *
 * @export
 * @interface UpdateUserPermissionsRequest
 */
export interface UpdateUserPermissionsRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof UpdateUserPermissionsRequest
   */
  grant_permissions?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof UpdateUserPermissionsRequest
   */
  revoke_permissions?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof UpdateUserPermissionsRequest
   */
  user_id: string;
}
/**
 *
 * @export
 * @interface UpdateUserPermissionsResponse
 */
export interface UpdateUserPermissionsResponse {
  /**
   * Duration of the request in human-readable format
   * @type {string}
   * @memberof UpdateUserPermissionsResponse
   */
  duration: string;
}
/**
 * This event is sent to notify about permission changes for a user, clients receiving this event should update their UI accordingly
 * @export
 * @interface UpdatedCallPermissionsEvent
 */
export interface UpdatedCallPermissionsEvent {
  /**
   *
   * @type {string}
   * @memberof UpdatedCallPermissionsEvent
   */
  call_cid: string;
  /**
   *
   * @type {string}
   * @memberof UpdatedCallPermissionsEvent
   */
  created_at: string;
  /**
   * The capabilities of the current user
   * @type {Array<OwnCapability>}
   * @memberof UpdatedCallPermissionsEvent
   */
  own_capabilities: Array<OwnCapability>;
  /**
   * The type of event: "call.permissions_updated" in this case
   * @type {string}
   * @memberof UpdatedCallPermissionsEvent
   */
  type: string;
  /**
   *
   * @type {UserResponse}
   * @memberof UpdatedCallPermissionsEvent
   */
  user: UserResponse;
}
/**
 *
 * @export
 * @interface UserRequest
 */
export interface UserRequest {
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof UserRequest
   */
  custom?: { [key: string]: any };
  /**
   * User ID
   * @type {string}
   * @memberof UserRequest
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof UserRequest
   */
  image?: string;
  /**
   * Optional name of user
   * @type {string}
   * @memberof UserRequest
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof UserRequest
   */
  role?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof UserRequest
   */
  teams?: Array<string>;
}
/**
 *
 * @export
 * @interface UserResponse
 */
export interface UserResponse {
  /**
   * Date/time of creation
   * @type {string}
   * @memberof UserResponse
   */
  created_at: string;
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof UserResponse
   */
  custom: { [key: string]: any };
  /**
   * Date/time of deletion
   * @type {string}
   * @memberof UserResponse
   */
  deleted_at?: string;
  /**
   *
   * @type {string}
   * @memberof UserResponse
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof UserResponse
   */
  image?: string;
  /**
   *
   * @type {string}
   * @memberof UserResponse
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof UserResponse
   */
  role: string;
  /**
   *
   * @type {Array<string>}
   * @memberof UserResponse
   */
  teams: Array<string>;
  /**
   * Date/time of the last update
   * @type {string}
   * @memberof UserResponse
   */
  updated_at: string;
}
/**
 * @type VideoEvent
 * The discriminator object for all websocket events, you should use this to map event payloads to their own type
 * @export
 */
export type VideoEvent =
  | ({ type: 'call.accepted' } & CallAcceptedEvent)
  | ({ type: 'call.blocked_user' } & BlockedUserEvent)
  | ({ type: 'call.broadcasting_started' } & CallBroadcastingStartedEvent)
  | ({ type: 'call.broadcasting_stopped' } & CallBroadcastingStoppedEvent)
  | ({ type: 'call.created' } & CallCreatedEvent)
  | ({ type: 'call.ended' } & CallEndedEvent)
  | ({ type: 'call.member_added' } & CallMemberAddedEvent)
  | ({ type: 'call.member_removed' } & CallMemberRemovedEvent)
  | ({ type: 'call.member_updated' } & CallMemberUpdatedEvent)
  | ({ type: 'call.permission_request' } & PermissionRequestEvent)
  | ({ type: 'call.permissions_updated' } & UpdatedCallPermissionsEvent)
  | ({ type: 'call.reaction_new' } & CallReactionEvent)
  | ({ type: 'call.recording_started' } & CallRecordingStartedEvent)
  | ({ type: 'call.recording_stopped' } & CallRecordingStoppedEvent)
  | ({ type: 'call.rejected' } & CallRejectedEvent)
  | ({ type: 'call.unblocked_user' } & UnblockedUserEvent)
  | ({ type: 'call.updated' } & CallUpdatedEvent)
  | ({ type: 'call.updated_permission' } & CallMemberUpdatedPermissionEvent)
  | ({ type: 'connection.ok' } & ConnectedEvent)
  | ({ type: 'custom' } & CustomVideoEvent)
  | ({ type: 'health.check' } & HealthCheckEvent);
/**
 *
 * @export
 * @interface VideoSettings
 */
export interface VideoSettings {
  /**
   *
   * @type {boolean}
   * @memberof VideoSettings
   */
  access_request_enabled: boolean;
  /**
   *
   * @type {boolean}
   * @memberof VideoSettings
   */
  enabled: boolean;
}
/**
 *
 * @export
 * @interface VideoSettingsRequest
 */
export interface VideoSettingsRequest {
  /**
   *
   * @type {boolean}
   * @memberof VideoSettingsRequest
   */
  access_request_enabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof VideoSettingsRequest
   */
  enabled?: boolean;
}
/**
 *
 * @export
 * @interface WSAuthMessageRequest
 */
export interface WSAuthMessageRequest {
  /**
   *
   * @type {DeviceFieldsRequest}
   * @memberof WSAuthMessageRequest
   */
  device?: DeviceFieldsRequest;
  /**
   *
   * @type {string}
   * @memberof WSAuthMessageRequest
   */
  token: string;
  /**
   *
   * @type {ConnectUserDetailsRequest}
   * @memberof WSAuthMessageRequest
   */
  user_details: ConnectUserDetailsRequest;
}
/**
 * This is just a placeholder for all client events
 * @export
 * @interface WSCallEvent
 */
export interface WSCallEvent {
  /**
   *
   * @type {string}
   * @memberof WSCallEvent
   */
  call_id?: string;
}
/**
 * This is just a placeholder for all client events
 * @export
 * @interface WSClientEvent
 */
export interface WSClientEvent {
  /**
   *
   * @type {string}
   * @memberof WSClientEvent
   */
  connection_id?: string;
}
