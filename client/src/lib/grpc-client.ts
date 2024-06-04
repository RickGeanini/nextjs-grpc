import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

// SERVICE
import { ProtoGrpcType } from '@/proto/generated/clientService';

const PROTO_PATH = path.join(process.cwd(), './src/proto/clientService.proto');

// suggested options for similarity to loading grpc.load behavior
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    defaults: true,
    keepCase: true,
    oneofs: true,
});

const clientService = (grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType)
    .clientService;

export const { ClientServiceRoutes } = clientService;
