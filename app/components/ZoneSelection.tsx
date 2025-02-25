interface ZoneSelectionProps {
  onSelectZone: (zone: string) => void
}

export default function ZoneSelection({ onSelectZone }: ZoneSelectionProps) {
  const zones = ["VIP", "Gold", "Silver", "Bronze"]

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Select Zone</label>
      <div className="flex flex-wrap -mx-2">
        {zones.map((zone) => (
          <div key={zone} className="px-2 w-1/2 mb-2">
            <button
              type="button"
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
              onClick={() => onSelectZone(zone)}
            >
              {zone}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

