export default function WeatherDetailsForecast() {
  return (
    <div className="bg-white border border-neutral-200 rounded-md shadow-md p-3 md:p-4">
      <h5 className="text-neutral-500 text-sm font-semibold mb-3">24 HOURS FORECAST</h5>
      <div className="grid grid-cols-6 gap-x-2 gap-y-3">
        {Array.from({ length: 12 }, (_, index) => index + 1).map(v => (
          <div key={v} className="flex flex-col items-center">
            <p className="text-xs mb-1">{8 + v * 3} AM</p>
            <figure className="bg-neutral-400 rounded-full w-6 h-6 mb-1"></figure>
            <p>18&deg;</p>
          </div>
        ))}
      </div>
    </div>
  )
}
