## Next.js using gRPC

### Generate the types:

```bash
cd server
yarn proto-gen-types
```

```bash
cd client
yarn proto-gen-types
```

### Starting Nextjs server:

```bash
cd client
yarn install
yarn dev
```

### Starting gRPC server:

```bash
cd server
yarn install
yarn build
yarn dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [gRPC](https://grpc.io/) - A high performance, open source universal RPC framework
-   [Next.js](https://nextjs.org/docs) - Learn about Next.js features and API.
-   [@grpc/grpc-js](https://github.com/grpc/grpc-node/tree/master) - Implements the core functionality of gRPC purely in JavaScript, without a C++ addon. It works on the latest versions of Node.js on all platforms that Node.js runs on.
-   [@grpc/proto-loader](https://github.com/grpc/grpc-node) - A utility package for loading .proto files for use with gRPC, using the latest Protobuf.js package. Please refer to protobuf.js' documentation to understands its features and limitations.
