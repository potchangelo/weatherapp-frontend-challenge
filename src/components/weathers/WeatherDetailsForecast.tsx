import { displayKelvinToUnit } from "@/helpers/functions";
import dayjs from "dayjs";
import Image from "next/image";

interface ComponentProps {
  items: WeatherForecastListItem[];
  temperatureUnit?: TemperatureUnit;
}

export default function WeatherDetailsForecast({ items, temperatureUnit = "C" }: ComponentProps) {
  if (items.length === 0) return null;
  return (
    <div className="bg-white border border-neutral-200 rounded-md shadow-md p-3 md:p-4">
      <h5 className="text-neutral-500 text-sm font-semibold mb-4">24 HOURS FORECAST</h5>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-3 gap-y-5">
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
    <div className="flex flex-col items-center text-center">
      <p className="text-xs">{date.format("h A")}</p>
      <figure className="rounded-full w-8 h-8">
        <Image
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          width={32}
          height={32}
          alt={item.weather[0].main}
        />
      </figure>
      <h6 className="text-sm font-semibold">{displayKelvinToUnit(item.main.temp, temperatureUnit)}</h6>
      <p className="text-xs">{item.weather[0].main}</p>
      <p className="text-neutral-500 text-xs">{item.weather[0].description}</p>
    </div>
  );
}
