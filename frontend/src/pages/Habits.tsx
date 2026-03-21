export default function Habits() {
    const userAuthenticated = String(import.meta.env.VITE_LOGGED_IN).toLowerCase() === 'true'

    if (!userAuthenticated) {
        return (
            <main className="min-h-screen bg-zinc-950 px-6 pt-24 pb-16">
                <div className="max-w-5xl mx-auto">
                    <p className="text-2xl text-zinc-100 font-bold mb-6 font-archivo">
                        Por favor, inicia sesión para ver tus hábitos.
                    </p>
                </div>
            </main>
        )
    } else {
        return (
            <main className="min-h-screen bg-zinc-950 px-6 pt-24 pb-16">
                <div className="max-w-5xl mx-auto">
                    <p className="text-2xl text-zinc-100 font-bold mb-6 font-archivo">
                        Tus hábitos
                    </p>
                </div>
            </main>
        )
    }
}