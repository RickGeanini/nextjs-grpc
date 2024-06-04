import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { DinosaurServiceRoutesClient as _dinosaurService_DinosaurServiceRoutesClient, DinosaurServiceRoutesDefinition as _dinosaurService_DinosaurServiceRoutesDefinition } from './dinosaurService/DinosaurServiceRoutes';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  dinosaurService: {
    DinosaurRequest: MessageTypeDefinition
    DinosaurResponse: MessageTypeDefinition
    DinosaurServiceRoutes: SubtypeConstructor<typeof grpc.Client, _dinosaurService_DinosaurServiceRoutesClient> & { service: _dinosaurService_DinosaurServiceRoutesDefinition }
    ListDinosaursResponse: MessageTypeDefinition
    NullRequest: MessageTypeDefinition
  }
}

