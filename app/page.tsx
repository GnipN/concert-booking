"use client"

import { useState } from "react"
import QueueSystem from "./components/QueueSystem"
import BookingForm from "./components/BookingForm"

export default function Home() {
  const [inQueue, setInQueue] = useState(true)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Concert Ticket Booking</h1>
      {inQueue ? <QueueSystem onQueueComplete={() => setInQueue(false)} /> : <BookingForm />}
    </main>
  )
}

