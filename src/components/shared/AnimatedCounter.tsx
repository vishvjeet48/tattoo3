import { useCounter } from "@/hooks/useCounter"
import { useInView } from "@/hooks/useInView"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  decimals?: number
  label: string
}

export function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
  label,
}: AnimatedCounterProps) {
  const { ref, isInView } = useInView(0.3)
  const count = useCounter(value, 2000, isInView, decimals)

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-2">
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {suffix}
      </div>
      <div className="text-muted-foreground text-sm md:text-base">{label}</div>
    </div>
  )
}
