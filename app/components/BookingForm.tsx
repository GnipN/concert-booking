"use client"

import type React from "react"

import { useState, useEffect } from "react"
import ZoneSelection from "./ZoneSelection"
import Timer from "./Timer"

const MAX_TICKETS = 4
const BOOKING_TIME_LIMIT = 300 // 5 minutes in seconds

export default function BookingForm() {
  const [selectedZone, setSelectedZone] = useState("")
  const [ticketCount, setTicketCount] = useState(1)
  const [timeRemaining, setTimeRemaining] = useState(BOOKING_TIME_LIMIT)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Booked ${ticketCount} tickets for ${selectedZone}`)
  }

  useEffect(() => {
    if (timeRemaining === 0) {
      alert("Booking time expired. Please try again.")
      // Here you would typically redirect the user back to the queue
    }
  }, [timeRemaining])

  return (
    <div className="w-full max-w-md">
      <Timer initialTime={BOOKING_TIME_LIMIT} onTimeUp={() => setTimeRemaining(0)} />
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <ZoneSelection onSelectZone={setSelectedZone} />
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ticketCount">
            Number of Tickets
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ticketCount"
            type="number"
            min="1"
            max={MAX_TICKETS}
            value={ticketCount}
            onChange={(e) => setTicketCount(Math.min(Number.parseInt(e.target.value), MAX_TICKETS))}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Book Tickets
          </button>
        </div>
      </form>
    </div>
  )
}

