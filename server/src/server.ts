import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

// CLASS
import { DinosaurRequest } from './proto/generated/dinosaurService/DinosaurRequest';
import { DinosaurResponse } from './proto/generated/dinosaurService/DinosaurResponse';
import { ListDinosaursResponse } from './proto/generated/dinosaurService/ListDinosaursResponse';
import { NullRequest } from './proto/generated/dinosaurService/NullRequest';
import { ProtoGrpcType } from './proto/generated/dinosaurService';

const PROTO_PATH = './dist/proto/dinosaurService.proto';

// MOCK
const dinosaursMock: DinosaurResponse[] = [
  {
    id: 1,
    name: 'Tyrannosaurus Rex',
    period: 'Cretáceo',
    diet: 'Carnívoro',
    height: 4.0,
  },
  {
    id: 2,
    name: 'Triceratops',
    period: 'Cretáceo',
    diet: 'Herbívoro',
    height: 3.0,
  },
  {
    id: 3,
    name: 'Velociraptor',
    period: 'Cretáceo',
    diet: 'Carnívoro',
    height: 0.5,
  },
  {
    id: 4,
    name: 'Stegosaurus',
    period: 'Jurássico',
    diet: 'Herbívoro',
    height: 3.0,
  },
  {
    id: 5,
    name: 'Brachiosaurus',
    period: 'Jurássico',
    diet: 'Herbívoro',
    height: 12.0,
  },
  {
    id: 6,
    name: 'Spinosaurus',
    period: 'Cretáceo',
    diet: 'Carnívoro',
    height: 6.0,
  },
  {
    id: 7,
    name: 'Ankylosaurus',
    period: 'Cretáceo',
    diet: 'Herbívoro',
    height: 1.7,
  },
  {
    id: 8,
    name: 'Diplodocus',
    period: 'Jurássico',
    diet: 'Herbívoro',
    height: 4.3,
  },
  {
    id: 9,
    name: 'Allosaurus',
    period: 'Jurássico',
    diet: 'Carnívoro',
    height: 3.5,
  },
  {
    id: 10,
    name: 'Pteranodon',
    period: 'Cretáceo',
    diet: 'Carnívoro',
    height: 1.8,
  },
];

/**
 * Suggested options for similarity to loading grpc.load behavior.
 */
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  defaults: true,
  keepCase: true,
  oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

/**
 * Grab the dinosaurService package from the protobuf file.
 */
const dinosaurService = protoDescriptor.dinosaurService;

class gRPC extends grpc.Server {
  constructor() {
    super();
    this.addService(dinosaurService.DinosaurServiceRoutes.service, {
      getDinosaur: this.getDinosaur,
      listDinosaurs: this.listDinosaurs,
    });
  }

  /**
   * getDinosaur request handler.
   */
  protected getDinosaur(
    call: grpc.ServerUnaryCall<DinosaurRequest, DinosaurResponse>,
    callback: grpc.sendUnaryData<DinosaurResponse>
  ) {
    const id = call.request.id;
    const dinosaur = dinosaursMock?.find((dinosaur) => dinosaur.id === id);
    callback(null, dinosaur);
  }

  /**
   * listDinosaurs request handler.
   */
  protected listDinosaurs(
    call: grpc.ServerUnaryCall<NullRequest, ListDinosaursResponse>,
    callback: grpc.sendUnaryData<ListDinosaursResponse>
  ) {
    callback(null, { dinosaurs: dinosaursMock });
  }
}

/**
 * Starts an RPC server that receives requests for the dinosaurService service at the
 * sample server port
 */
function main() {
  const server = new gRPC();
  server.bindAsync(
    '0.0.0.0:50051',
    grpc.ServerCredentials.createInsecure(),
    (error) => {
      // Start server
      server.start();
      // On error
      if (error) {
        console.error(error);
      } else {
        console.log('Starting gRPC server on port: 0.0.0.0:50051');
      }
    }
  );
}

main();
