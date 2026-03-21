import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts'
import type { BarData } from './types'

interface BarChartGraphicProps {
    isVisible: boolean
}

export function BarChartGraphic({ isVisible }: BarChartGraphicProps) {
    const data: BarData[] = [
        { day: 'L', value: 6512 },
        { day: 'M', value: 7890 },
        { day: 'X', value: 6890 },
        { day: 'J', value: 5123 },
        { day: 'V', value: 9001 },
        { day: 'S', value: 6789 },
        { day: 'D', value: 8489 },
    ]

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 h-full">
            <h4 className="text-sm text-zinc-400 mb-3 font-archivo">
                Pasos diarios (Semana actual)
            </h4>
            <ResponsiveContainer width="100%" height={200} 
                key={isVisible ? 'visible' : 'hidden'}
            >
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="day" stroke="#a1a1aa"
                        tick={{ fill: '#a1a1aa', fontSize: 12 }}
                    />
                    <YAxis stroke="#a1a1aa" tick={{ fill: '#a1a1aa', fontSize: 12 }} />
                    <Bar dataKey="value" fill="#6366f1"
                        radius={[8, 8, 0, 0]} isAnimationActive={true}
                        animationDuration={1000} animationEasing="ease-out"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
