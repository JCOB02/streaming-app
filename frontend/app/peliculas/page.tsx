
export default function Peliculas() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    Peliculas
                </h1>   
                <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Aquí puedes encontrar una lista de películas recomendadas para ver.
                </p>
                <ul className="list-disc pl-5 text-left">
                    <li className="text-zinc-800 dark:text-zinc-200">Inception (2010)</li>
                    <li className="text-zinc-800 dark:text-zinc-200">The Dark Knight (2008)</li>
                    <li className="text-zinc-800 dark:text-zinc-200">Interstellar (2014)</li>
                    <li className="text-zinc-800 dark:text-zinc-200">The Matrix (1999)</li>
                    <li className="text-zinc-800 dark:text-zinc-200">Pulp Fiction (1994)</li>   
                </ul>
            </main>
        </div>
    )
}   
