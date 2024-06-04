import { Suspense, useMemo } from 'react';

// SERVICES
import { ClientService } from '@/services/client';

export default async function Home() {
    /* Vars */
    const clientService: ClientService = useMemo(() => {
        return new ClientService();
    }, []);

    /* Calls */
    const { clients } = await clientService.getClients();

    console.log({ clients });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Suspense fallback={<>Loading ...</>}>
                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
            </Suspense>
        </main>
    );
}
