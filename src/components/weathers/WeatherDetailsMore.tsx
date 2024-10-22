interface ComponentProps {
  weather: Weather;
}

export default function WeatherDetailsMore({ weather }: ComponentProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-md shadow-md p-3 md:p-4">
      <h5 className="text-neutral-500 text-sm font-semibold mb-3">CURRENT DETAILS</h5>
      <WeatherDetailsMoreItem
        label="Humidity"
        value={`${weather.main.humidity}%`}
      />
      <WeatherDetailsMoreItem
        label="Wind speed"
        value={`${weather.wind.speed} km/h`}
      />
      <WeatherDetailsMoreItem
        label="Pressure"
        value={`${weather.main.pressure.toLocaleString("en-US")} mBar`}
      />
      {weather.rain && (
        <WeatherDetailsMoreItem
          label="Rain volume"
          value={`${weather.rain["1h"]} mm/h`}
        />
      )}
    </div>
  );
}

interface ItemComponentProps {
  label: string;
  value: string;
}

function WeatherDetailsMoreItem({ label, value }: ItemComponentProps) {
  return (
    <div className="flex mb-1" role="listitem">
      <div className="w-32">
        <p className="text-neutral-500 text-sm">{label}:</p>
      </div>
      <div className="flex-1">
        <p className="text-sm">{value}</p>
      </div>
    </div>
  );
}
