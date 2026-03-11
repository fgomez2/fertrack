export function Footer() {
    return (
        <footer className="relative w-full bg-zinc-950 border-t border-zinc-800 overflow-hidden">
            <div aria-hidden
                className="pointer-events-none absolute top-0 left-0 w-full h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)' }}
            />

            <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

                {/* Logo / marca */}
                <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">FT</span>
                    <span className="text-white text-base tracking-tight font-archivo">
                        Fer<span className="text-indigo-400">Track</span>
                    </span>
                </div>

                {/* Copy */}
                <p className="text-zinc-500 text-xs font-archivo text-center">
                    © {new Date().getFullYear()} FerTrack. Todos los derechos reservados.
                </p>

                {/* Links */}
                <nav className="flex items-center gap-5 text-xs font-archivo text-zinc-400">
                    <a href="#" className="hover:text-violet-400 hover:[text-shadow:0_0_12px_rgba(167,139,250,0.85)] transition-all duration-300">Privacidad</a>
                    <a href="#" className="hover:text-violet-400 hover:[text-shadow:0_0_12px_rgba(167,139,250,0.85)] transition-all duration-300">Términos</a>
                    <a href="#" className="hover:text-violet-400 hover:[text-shadow:0_0_12px_rgba(167,139,250,0.85)] transition-all duration-300">Contacto</a>
                </nav>
            </div>
        </footer>
    )
}
