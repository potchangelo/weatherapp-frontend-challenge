import { displayKelvinToUnit } from "@/helpers/functions";
import dayjs from "dayjs";

interface ComponentProps {
  items: WeatherForecastListItem[];
  temperatureUnit?: TemperatureUnit;
}

export default function WeatherDetailsForecast({ items, temperatureUnit = "C" }: ComponentProps) {
  if (items.length === 0) return null;
  return (
    <div className="bg-white border border-neutral-200 rounded-md shadow-md p-3 md:p-4">
      <h5 className="text-neutral-500 text-sm font-semibold mb-3">24 HOURS FORECAST</h5>
      <div className="grid grid-cols-4 gap-x-2 gap-y-3">
        {items.map(item => (
          <WeatherDetailsForecastItem
            key={item.dt}
            item={item}
            temperatureUnit={temperatureUnit}
          />
        ))}
      </div>
    </div>
  );
}

interface ItemComponentProps {
  item: WeatherForecastListItem;
  temperatureUnit?: TemperatureUnit;
}

function WeatherDetailsForecastItem({ item, temperatureUnit = "C" }: ItemComponentProps) {
  const date = dayjs.unix(item.dt);
  return (
    <div className="flex flex-col items-center">
      <p className="text-xs mb-1">{date.format("h A")}</p>
      <figure className="bg-neutral-400 rounded-full w-6 h-6 mb-1"></figure>
      <p className="text-sm">{displayKelvinToUnit(item.main.temp, temperatureUnit)}</p>
    </div>
  );
}
