import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Hook personalizado para detectar si un elemento está en siendo visto por el usuario
export function useInView<T extends HTMLElement>() {
    const ref = useRef<T>(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const trigger = ScrollTrigger.create({
            trigger: element,
            start: 'top 75%', // Anima cuando el elemento está 25% visible
            onEnter: () => setIsInView(true),
            once: true, // Solo se activa una vez
        })

        return () => {
            trigger.kill()
        }
    }, [])

    return { ref, isInView }
}
