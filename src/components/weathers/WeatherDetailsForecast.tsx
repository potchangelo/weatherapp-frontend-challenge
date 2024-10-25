import { displayKelvinToUnit } from "@/helpers/functions";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import Image from "next/image";

interface ComponentProps {
  weatherForecast: WeatherForecast;
  temperatureUnit?: TemperatureUnit;
}

dayjs.extend(utc);

export default function WeatherDetailsForecast({ weatherForecast, temperatureUnit = "C" }: ComponentProps) {
  const items = weatherForecast.list;
  const timezone = weatherForecast.city.timezone;
  if (items.length === 0) return null;
  return (
    <div className="bg-white border border-neutral-200 rounded-md shadow-md p-3 md:p-4">
      <h5 className="text-neutral-500 text-sm font-semibold mb-4">24 HOURS FORECAST</h5>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-3 gap-y-5">
        {items.map(item => (
          <WeatherDetailsForecastItem key={item.dt} item={item} timezone={timezone} temperatureUnit={temperatureUnit} />
        ))}
      </div>
    </div>
  );
}

interface ItemComponentProps {
  item: WeatherForecastListItem;
  timezone?: number;
  temperatureUnit?: TemperatureUnit;
}

function WeatherDetailsForecastItem({ item, timezone = 0, temperatureUnit = "C" }: ItemComponentProps) {
  const currentDate = dayjs.unix(item.dt).utcOffset(timezone / 3600);
  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-xs">{currentDate.format("h A")}</p>
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
