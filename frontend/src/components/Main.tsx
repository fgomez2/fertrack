import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useInView } from '../hooks/useInView'
import { BarChartGraphic } from './charts/BarChartGraphic'
import { CircularGraphic } from './charts/CircularGraphic'

export function Main() {
    // Referencia al contenedor padre de los elementos
    // que tendrán animación
    const containerRef = useRef<HTMLElement>(null)

    // Detectar visibilidad para la sección de las graficas
    const { ref: chartsRef, isInView: chartsVisible } = useInView<HTMLDivElement>()

    useGSAP(() => {
        // Seleccionamos los elementos hijos
        // clase común .animate-item
        const elementsToAnimate = gsap.utils.toArray('.animate-item')

        gsap.from(elementsToAnimate, {
            y: -30,
            opacity: 0,
            duration: 1.2, // duración de la animación para cada elemento
            ease: 'power3.out',
            stagger: 0.2, // tiempo de espera entre la animacion de cada elemento
            delay: 0.1,
        })

        // Animación de parpadeo para los iconos
        const flickerIcons = gsap.utils.toArray<HTMLElement>('.flicker-icon')

        flickerIcons.forEach((icon) => {
            const flicker = () => {
                const tl = gsap.timeline({
                    onComplete: () => {
                        gsap.delayedCall(Math.random() * 4 + 1, flicker)
                    }
                })

                const isViolet = Math.random() > 0.5
                const brightness = isViolet ? '#a78bfa' : '#d4d4d8'

                tl.to(icon, { color: brightness, opacity: 0.8, duration: 0.05 })
                    .to(icon, { color: '#3f3f46', opacity: 1, duration: 0.05 })
                    .to(icon, { color: brightness, opacity: 0.7, duration: 0.03 })
                    .to(icon, { color: '#3f3f46', opacity: 1, duration: 0.1 })
            }

            gsap.delayedCall(Math.random() * 2, flicker)
        })
    }, { scope: containerRef }) // que GSAP solo busque dentro de este contenedor

    return (
        <main className="relative min-h-screen bg-zinc-950 overflow-hidden">

            {/* degradado */}
            <div aria-hidden
                className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[2500px] h-[400px] rounded-full"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.25) 0%, rgba(99,102,241,0.10) 45%, transparent 75%)',
                    filter: 'blur(32px)',
                }}
            />

            {/* Hero sect */}
            <section ref={containerRef} className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-0 max-w-4xl mx-auto">

                {/* ESLOGAN */}
                <h2 className="animate-item font-archivo text-4xl sm:text-5xl md:text-6xl leading-tight text-white">
                    Domina tus hábitos.{' '}
                    <br className="hidden sm:block" />
                    <span
                        className="bg-gradient-to-r from-violet-400 via-indigo-400 to-indigo-300 bg-clip-text text-transparent"
                    >
                        Mide cada éxito
                    </span>{' '}
                    desde un solo lugar.
                </h2>

                <p className="animate-item mt-6 max-w-xl text-zinc-400 text-base sm:text-lg leading-relaxed">
                    Registra, visualiza y celebra cada pequeño avance. Tu disciplina merece una herramienta a su altura.
                </p>

                {/* CTAs */}
                <div className="animate-item mt-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-400 transition-all duration-300 text-white font-archivo text-sm font-medium px-8 py-3 rounded-lg cursor-pointer [box-shadow:0_0_20px_rgba(99,102,241,0.40)] hover:[box-shadow:0_0_28px_rgba(99,102,241,0.65)]">
                        Empezar ahora
                    </button>
                </div>

                {/* Sección de iconos minimalistas con efecto neón */}
                <div className="animate-item my-20 flex items-center justify-center gap-8 sm:gap-16">
                    {/* Mancuerna */}
                    <svg className="flicker-icon w-[37px] h-[37px] text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6.5 6.5 11 11" />
                        <path d="m21 21-1-1" />
                        <path d="m3 3 1 1" />
                        <path d="m18 22 4-4a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0l-4 4a2 2 0 0 0 0 2.8l1.4 1.4a2 2 0 0 0 2.8 0Z" />
                        <path d="m2 6 4-4a2 2 0 0 1 2.8 0l1.4 1.4a2 2 0 0 1 0 2.8l-4 4a2 2 0 0 1-2.8 0l-1.4-1.4a2 2 0 0 1 0-2.8Z" />
                    </svg>

                    {/* Manzana */}
                    <svg className="flicker-icon w-[37px] h-[37px] text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                        <path d="M10 2c1 .5 2 2 2 5" />
                    </svg>

                    {/* Libro/Estudio */}
                    <svg className="flicker-icon w-[37px] h-[37px] text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12.5V16a6 6 0 0 0 12 0v-3.5" />
                    </svg>
                </div>
            </section>

            {/* Sección "Seguimimento de hábitos" */}
            <section ref={chartsRef}
                className="animate-item relative z-10 mt-0 px-6 max-w-5xl mx-auto pb-20 sm:pb-24"
            >
                {/* Título */}
                <h3 className="text-3xl sm:text-4xl font-archivo text-center mb-4">
                    <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-indigo-300 bg-clip-text text-transparent">
                        Seguimiento de hábitos
                    </span>
                </h3>

                {/* Descripción */}
                <p className="text-center text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                    Visualiza tus rachas e índices de éxito. Nuestros intuitivos gráficos te ayudarán a comprender dónde debes centrar realmente tu atención.
                </p>

                {/* Contenedor de gráficas */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 [box-shadow:0_4px_24px_rgba(99,102,241,0.12)]">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        {/* Gráfica de barras */}
                        <div className="w-full sm:w-[60%]">
                            <BarChartGraphic isVisible={chartsVisible} />
                        </div>

                        {/* Gráfica circular  */}
                        <div className="w-full sm:w-[40%]">
                            <CircularGraphic isVisible={chartsVisible} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Línea decorativa inferior del hero */}
            <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-full h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)' }}
            />
        </main>
    )
}