import * as grpc from '@grpc/grpc-js';

// SERVICES
import { grpcDinosaurService } from './services/dinosaur';

/**
 * Starts an RPC server that receives requests for the dinosaurService service at the
 * sample server port
 */
function main() {
  const server = new grpcDinosaurService();
  server.bindAsync(
    '0.0.0.0:50051',
    grpc.ServerCredentials.createInsecure(),
    (error) => {
      // Start server
      server.start();

      // On error
      if (error) {
        console.error(error);
        return;
      }

      console.log('Starting gRPC server on port: 0.0.0.0:50051');
    }
  );
}

main();
