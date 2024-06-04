import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

// SERVICE
import { ProtoGrpcType as DinosaurServiceProtoGrpcType } from '@/proto/generated/dinosaurService';

const DINOSAUR_PROTO_PATH = path.join(process.cwd(), './src/proto/dinosaurService.proto');

const packageDefinition = protoLoader.loadSync(DINOSAUR_PROTO_PATH, {
    defaults: true,
    keepCase: true,
    oneofs: true,
});

const dinosaurService = (
    grpc.loadPackageDefinition(packageDefinition) as unknown as DinosaurServiceProtoGrpcType
).dinosaurService;

const { DinosaurServiceRoutes } = dinosaurService;

export default { DinosaurServiceRoutes };
