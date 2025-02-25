"use client"

import { useState, useEffect } from "react"

interface QueueSystemProps {
  onQueueComplete: () => void
}

export default function QueueSystem({ onQueueComplete }: QueueSystemProps) {
  const [queuePosition, setQueuePosition] = useState(100)

  useEffect(() => {
    const interval = setInterval(() => {
      setQueuePosition((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          onQueueComplete()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [onQueueComplete])

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">You are in the queue</h2>
      <p className="text-xl">Your position: {queuePosition}</p>
      <p className="mt-2">Please wait, you will be redirected to the booking form soon.</p>
    </div>
  )
}

