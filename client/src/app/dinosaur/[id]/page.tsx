import { Suspense, useMemo } from 'react';

// SERVICES
import { DinosaurService } from '@/services/dinosaur';

interface IDinosaurPageProps {
    params: {
        id: number;
    };
}

export default async function DinosaurPage({ params }: IDinosaurPageProps) {
    /* Vars */
    const dinosaurService: DinosaurService = useMemo(() => {
        return new DinosaurService();
    }, []);

    /* Calls */
    const { dinosaur } = await dinosaurService.getDinosaurById(params.id ?? 0);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Suspense fallback={<>Loading ...</>}>
                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                    <div>
                        <p>Nome</p>
                        <p>{dinosaur?.name}</p>
                    </div>
                    <div>
                        <p>Dieta</p>
                        <p>{dinosaur?.diet}</p>
                    </div>
                    <div>
                        <p>Altura</p>
                        <p>{dinosaur?.height}</p>
                    </div>
                    <div>
                        <p>Periodo</p>
                        <p>{dinosaur?.period}</p>
                    </div>
                </div>
            </Suspense>
        </main>
    );
}
