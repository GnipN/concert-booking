"use client"

import { useState, useEffect } from "react"

interface TimerProps {
  initialTime: number
  onTimeUp: () => void
}

export default function Timer({ initialTime, onTimeUp }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime)

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, onTimeUp])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className="text-center mb-4">
      <p className="text-xl font-semibold">
        Time remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  )
}

