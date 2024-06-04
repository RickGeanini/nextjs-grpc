import { Suspense, useMemo } from 'react';
import Link from 'next/link';

// SERVICES
import { DinosaurService } from '@/services/dinosaur';

export default async function Home() {
    /* Vars */
    const dinosaurService: DinosaurService = useMemo(() => {
        return new DinosaurService();
    }, []);

    /* Calls */
    const { dinosaurs } = await dinosaurService.getDinosaurs();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Suspense fallback={<>Loading ...</>}>
                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                    <ul>
                        {(dinosaurs?.dinosaurs ?? []).map(dinosaur => {
                            return (
                                <li key={dinosaur.id}>
                                    <Link href={`/dinosaur/${dinosaur.id}`}>{dinosaur.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Suspense>
        </main>
    );
}
