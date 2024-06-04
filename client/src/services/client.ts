import { promisify } from 'util';
import * as grpc from '@grpc/grpc-js';

// LIB
import { ClientServiceRoutes } from '@/lib/grpc-client';

export class ClientService extends ClientServiceRoutes {
    constructor() {
        super(process.env.NEXT_PUBLIC_GRPC_TARGET ?? '', grpc.credentials.createInsecure());
    }

    public async getClient(id: number) {
        const clientInfo = promisify(this.client).bind(this);
        return await clientInfo({ id })
            .then(client => ({ client, error: null }))
            .catch(error => ({ error, client: null }));
    }

    public async getClients() {
        const clientsList = promisify(this.clients).bind(this);
        return await clientsList({})
            .then(clients => ({ clients, error: null }))
            .catch(error => ({ error, clients: null }));
    }
}
