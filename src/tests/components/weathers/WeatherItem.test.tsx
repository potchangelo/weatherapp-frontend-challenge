import { WeatherItem } from "@/components/weathers";
import places from "@/tests/mockup-data/places.json";
import weathers from "@/tests/mockup-data/weathers.json";
import { render, screen } from "@testing-library/react";

const place = places[0];
const weather = weathers[0];

describe("WeatherItem component", () => {
  test("Render with temperature unit C (default)", () => {
    render(<WeatherItem place={place} weather={weather} />);
    expect(screen.getByText(/Siam Paragon/)).toBeDefined();
    expect(screen.getByText(/^\d{1,2}:\d{1,2}\s(am|pm)$/i)).toBeDefined();
    expect(screen.getByText("28 °C")).toBeDefined();
  });

  test("Render with temperature unit F", () => {
    render(<WeatherItem place={place} weather={weather} temperatureUnit="F" />);
    expect(screen.getByText("82 °F")).toBeDefined();
  });

  test("Render with temperature unit K", () => {
    render(<WeatherItem place={place} weather={weather} temperatureUnit="K" />);
    expect(screen.getByText("301.08 K")).toBeDefined();
  });
});
