import { WeatherDetailsForecast } from "@/components/weathers";
import weatherForecasts from "@/tests/mockup-data/weather-forecasts.json";
import { render, screen } from "@testing-library/react";

const weatherForecastListItems = weatherForecasts[1].list;

describe("WeatherDetailsForecast component", () => {
  test("Render with completed data", () => {
    render(<WeatherDetailsForecast items={weatherForecastListItems} />);
    expect(screen.getAllByText(/^\d{1,2}\s(am|pm)$/i).length).toBe(8);
    expect(screen.getAllByText(/^-*\d+ °C$/i).length).toBe(8);
  });

  test("Render with empty data", () => {
    const { container } = render(<WeatherDetailsForecast items={[]} />);
    expect(container.innerHTML).toBeFalsy();
  });
});
