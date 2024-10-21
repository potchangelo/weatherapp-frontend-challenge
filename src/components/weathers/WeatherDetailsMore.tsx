interface ComponentProps {
  weather: Weather;
}

// TODO : Chance of rain
// TODO : WeatherDetailsMoreItem
export default function WeatherDetailsMore({ weather }: ComponentProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-md shadow-md p-3 md:p-4">
      <h5 className="text-neutral-500 text-sm font-semibold mb-3">CURRENT DETAILS</h5>
      <div className="flex mb-1">
        <div className="w-32">
          <p className="text-neutral-500 text-sm">Humidity:</p>
        </div>
        <div className="flex-1">
          <p className="text-sm">{weather.main.humidity}%</p>
        </div>
      </div>
      <div className="flex mb-1">
        <div className="w-32">
          <p className="text-neutral-500 text-sm">Wind:</p>
        </div>
        <div className="flex-1">
          <p className="text-sm">{weather.wind.speed} km/h</p>
        </div>
      </div>
      <div className="flex mb-1">
        <div className="w-32">
          <p className="text-neutral-500 text-sm">Pressure:</p>
        </div>
        <div className="flex-1">
          <p className="text-sm">{weather.main.pressure.toLocaleString("en-US")} mBar</p>
        </div>
      </div>
      <div className="flex mb-1">
        <div className="w-32">
          <p className="text-neutral-500 text-sm">Chance of rain:</p>
        </div>
        <div className="flex-1">
          <p className="text-sm">
            {weather.rain ? (
              `${weather.rain["1h"] * 100}%`
            ) : "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
}
