import { promisify } from 'util';
import * as grpc from '@grpc/grpc-js';

// LIB
import grpcLib from '@/lib/grpc';

export class DinosaurService extends grpcLib.DinosaurServiceRoutes {
    constructor() {
        super(process.env.NEXT_PUBLIC_GRPC_TARGET ?? '', grpc.credentials.createInsecure());
    }

    public async getDinosaurById(id: number) {
        const dinosaurInfo = promisify(this.getDinosaur).bind(this);
        return await dinosaurInfo({ id })
            .then(dinosaur => ({ dinosaur, error: null }))
            .catch(error => ({ error, dinosaur: null }));
    }

    public async getDinosaurs() {
        const listDinosaurs = promisify(this.listDinosaurs).bind(this);
        return await listDinosaurs({})
            .then(dinosaurs => ({ dinosaurs, error: null }))
            .catch(error => ({ error, dinosaurs: null }));
    }
}
