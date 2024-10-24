import { WeatherDetailsForecast } from "@/components/weathers";
import weatherForecasts from "@/tests/mockup-data/weather-forecasts.json";
import { render, screen } from "@testing-library/react";

const weatherForecast = weatherForecasts[0];

describe("WeatherDetailsForecast component", () => {
  test("Render with completed data", () => {
    render(<WeatherDetailsForecast weatherForecast={weatherForecast} />);
    expect(screen.getAllByText(/^\d{1,2}\s(am|pm)$/i).length).toBe(8);
    expect(screen.getAllByText(/^-*\d+ °C$/i).length).toBe(8);
  });

  test("Render with empty data", () => {
    const { container } = render(<WeatherDetailsForecast weatherForecast={{ ...weatherForecast, list: [] }} />);
    expect(container.innerHTML).toBeFalsy();
  });
});
