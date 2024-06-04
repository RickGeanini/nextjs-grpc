// Original file: src/proto/dinosaurService.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DinosaurRequest as _dinosaurService_DinosaurRequest, DinosaurRequest__Output as _dinosaurService_DinosaurRequest__Output } from '../dinosaurService/DinosaurRequest';
import type { DinosaurResponse as _dinosaurService_DinosaurResponse, DinosaurResponse__Output as _dinosaurService_DinosaurResponse__Output } from '../dinosaurService/DinosaurResponse';
import type { ListDinosaursResponse as _dinosaurService_ListDinosaursResponse, ListDinosaursResponse__Output as _dinosaurService_ListDinosaursResponse__Output } from '../dinosaurService/ListDinosaursResponse';
import type { NullRequest as _dinosaurService_NullRequest, NullRequest__Output as _dinosaurService_NullRequest__Output } from '../dinosaurService/NullRequest';

export interface DinosaurServiceRoutesClient extends grpc.Client {
  getDinosaur(argument: _dinosaurService_DinosaurRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dinosaurService_DinosaurResponse__Output>): grpc.ClientUnaryCall;
  getDinosaur(argument: _dinosaurService_DinosaurRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dinosaurService_DinosaurResponse__Output>): grpc.ClientUnaryCall;
  getDinosaur(argument: _dinosaurService_DinosaurRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dinosaurService_DinosaurResponse__Output>): grpc.ClientUnaryCall;
  getDinosaur(argument: _dinosaurService_DinosaurRequest, callback: grpc.requestCallback<_dinosaurService_DinosaurResponse__Output>): grpc.ClientUnaryCall;
  
  listDinosaurs(argument: _dinosaurService_NullRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dinosaurService_ListDinosaursResponse__Output>): grpc.ClientUnaryCall;
  listDinosaurs(argument: _dinosaurService_NullRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dinosaurService_ListDinosaursResponse__Output>): grpc.ClientUnaryCall;
  listDinosaurs(argument: _dinosaurService_NullRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dinosaurService_ListDinosaursResponse__Output>): grpc.ClientUnaryCall;
  listDinosaurs(argument: _dinosaurService_NullRequest, callback: grpc.requestCallback<_dinosaurService_ListDinosaursResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface DinosaurServiceRoutesHandlers extends grpc.UntypedServiceImplementation {
  getDinosaur: grpc.handleUnaryCall<_dinosaurService_DinosaurRequest__Output, _dinosaurService_DinosaurResponse>;
  
  listDinosaurs: grpc.handleUnaryCall<_dinosaurService_NullRequest__Output, _dinosaurService_ListDinosaursResponse>;
  
}

export interface DinosaurServiceRoutesDefinition extends grpc.ServiceDefinition {
  getDinosaur: MethodDefinition<_dinosaurService_DinosaurRequest, _dinosaurService_DinosaurResponse, _dinosaurService_DinosaurRequest__Output, _dinosaurService_DinosaurResponse__Output>
  listDinosaurs: MethodDefinition<_dinosaurService_NullRequest, _dinosaurService_ListDinosaursResponse, _dinosaurService_NullRequest__Output, _dinosaurService_ListDinosaursResponse__Output>
}
