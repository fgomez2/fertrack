import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <header className="w-full bg-zinc-950 border-b border-zinc-800 px-6 py-4">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div>
                    <Link to="/" className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-md bg-indigo-500 flex items-center justify-center text-white text-sm font-bold">FT</span>
                        <h1 className="text-white text-xl tracking-tight font-archivo">
                            Fer<span className="text-indigo-400">Track</span>
                        </h1>
                    </Link>
                </div>

                {/* Nav — en desktop */}
                <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-400 font-archivo">
                    <Link to="/dashboard" className="hover:text-violet-400 hover:[text-shadow:0_0_12px_rgba(167,139,250,0.85)] transition-all duration-300">Dashboard</Link>
                    <Link to="/habits" className="hover:text-violet-400 hover:[text-shadow:0_0_12px_rgba(167,139,250,0.85)] transition-all duration-300">Habits</Link>
                    <Link to="/stats" className="hover:text-violet-400 hover:[text-shadow:0_0_12px_rgba(167,139,250,0.85)] transition-all duration-300">Stats</Link>
                </nav>

                {/* Parte derecha */}
                <div className="flex items-center gap-3">
                    {/* CTA — en desktop */}
                    <button className="hidden sm:block bg-indigo-500 hover:bg-indigo-400 transition-colors text-white text-sm font-medium px-4 py-1.5 rounded-lg cursor-pointer">
                        New Habit
                    </button>
                    <button className="hidden sm:block border border-zinc-600 hover:border-violet-500 hover:text-violet-400 hover:[box-shadow:0_0_12px_rgba(167,139,250,0.35)] transition-all duration-300 text-zinc-300 text-sm font-medium px-4 py-1.5 rounded-lg cursor-pointer">
                        Login
                    </button>

                    {/* Hamburger icono — en móvil */}
                    <button className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
                        onClick={() => setMenuOpen(!isMenuOpen)} aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-0.5 bg-zinc-400 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-zinc-400 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-zinc-400 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Nav — móvil dropdown */}
            {isMenuOpen && (
                <div className="sm:hidden mt-4 border-t border-zinc-800 pt-4 flex flex-col gap-3">
                    <Link to="/dashboard" className="font-archivo text-sm text-zinc-400 hover:text-violet-400 hover:[text-shadow:0_0_12px_rgba(167,139,250,0.85)] transition-all duration-300">Dashboard</Link>
                    <Link to="/habits" className="font-archivo text-sm text-zinc-400 hover:text-violet-400 hover:[text-shadow:0_0_12px_rgba(167,139,250,0.85)] transition-all duration-300">Habits</Link>
                    <Link to="/stats" className="font-archivo text-sm text-zinc-400 hover:text-violet-400 hover:[text-shadow:0_0_12px_rgba(167,139,250,0.85)] transition-all duration-300">Stats</Link>
                    <button className="mt-1 w-full bg-indigo-500 hover:bg-indigo-400 transition-colors text-white text-sm font-medium px-4 py-2 rounded-lg cursor-pointer">
                        New Habit
                    </button>
                    <button className="w-full border border-zinc-600 hover:border-violet-500 hover:text-violet-400 hover:[box-shadow:0_0_12px_rgba(167,139,250,0.35)] transition-all duration-300 text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg cursor-pointer">
                        Login
                    </button>
                </div>
            )}
        </header>
    )
}