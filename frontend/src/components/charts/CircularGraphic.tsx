import { useState, useEffect } from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts'

interface CircularGraphicProps {
    isVisible: boolean
}

export function CircularGraphic({ isVisible }: CircularGraphicProps) {
    const progress = 85
    const [displayValue, setDisplayValue] = useState(0)

    // Contador de 0 al progreso marcado cuando el componente es visible
    useEffect(() => {
        if (!isVisible) return // No animar hasta que sea visible

        let start = 0
        const end = progress
        const duration = 1500
        const increment = end / (duration / 16)

        // retraso de 200ms para efecto stagger (despues del gráfico de barras)
        const delayTimer = setTimeout(() => {
            const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                    setDisplayValue(end)
                    clearInterval(timer)
                } else {
                    setDisplayValue(Math.floor(start))
                }
            }, 16)

            return () => clearInterval(timer)
        }, 200)

        return () => clearTimeout(delayTimer)
    }, [progress, isVisible])

    const data = [
        { name: 'completed', value: progress, fill: '#6366f1' },
        { name: 'remaining', value: 100 - progress, fill: '#27272a' },
    ]

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 h-full flex flex-col">
            <h4 className="text-sm text-zinc-400 mb-2 font-archivo">
                Tasa de éxito: Meditación (mes actual)
            </h4>
            <div className="flex-1 flex items-center justify-center relative">
                <ResponsiveContainer width="100%" height={180}
                    key={isVisible ? 'visible' : 'hidden'}
                >
                    <PieChart>
                        <Pie data={data} cx="50%"
                            cy="50%" innerRadius={50}
                            outerRadius={70} startAngle={90}
                            endAngle={-270} dataKey="value"
                            stroke="none" isAnimationActive={true}
                            animationDuration={1500} animationEasing="ease-out"
                        />
                    </PieChart>
                </ResponsiveContainer>

                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white font-archivo">
                        {displayValue}%
                    </span>
                </div>
            </div>

            <div className="mt-2 text-right">
                <span className="text-sm font-inter font-medium tracking-tight text-zinc-400">
                    <span className="text-green-500 font-semibold">↑ +12%</span> respecto al mes pasado
                </span>
            </div>
        </div>
    )
}
