export function Main() {
    return (
        <main className="relative min-h-screen bg-zinc-950 overflow-hidden">

            {/* degradado */}
            <div aria-hidden
                className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.25) 0%, rgba(99,102,241,0.10) 45%, transparent 75%)',
                    filter: 'blur(32px)',
                }}
            />

            {/* Hero sect */}
            <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 max-w-4xl mx-auto">

                {/* ESLOGAN */}
                <h2 className="font-archivo text-4xl sm:text-5xl md:text-6xl leading-tight text-white">
                    Domina tus hábitos..{' '}
                    <br className="hidden sm:block" />
                    <span
                        className="bg-gradient-to-r from-violet-400 via-indigo-400 to-indigo-300 bg-clip-text text-transparent"
                    >
                        Mide cada éxito
                    </span>{' '}
                    desde un solo lugar.
                </h2>

                <p className="mt-6 max-w-xl text-zinc-400 text-base sm:text-lg leading-relaxed">
                    Registra, visualiza y celebra cada pequeño avance. Tu disciplina merece una herramienta a su altura.
                </p>

                {/* CTAs */}
                <div className="mt-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-400 transition-all duration-300 text-white font-archivo text-sm font-medium px-8 py-3 rounded-lg cursor-pointer [box-shadow:0_0_20px_rgba(99,102,241,0.40)] hover:[box-shadow:0_0_28px_rgba(99,102,241,0.65)]">
                        Empezar ahora
                    </button>
                </div>
            </section>

            {/* Línea decorativa inferior del hero */}
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-0 w-full h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)' }}
            />
        </main>
    )
}