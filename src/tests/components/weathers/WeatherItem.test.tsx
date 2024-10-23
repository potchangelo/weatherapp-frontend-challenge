import { WeatherItem } from "@/components/weathers";
import coords from "@/tests/mockup-data/coords.json";
import weathers from "@/tests/mockup-data/weathers.json";
import { render, screen } from "@testing-library/react";

const coord = coords[0];
const weather = weathers[0];

describe("WeatherItem component", () => {
  test("Render with temperature unit C (default)", () => {
    render(<WeatherItem weather={weather} coord={coord} />);
    expect(screen.getByText(/Ratchathewi.+TH/i)).toBeDefined();
    expect(screen.getByText(/^\d{1,2}:\d{1,2}\s(am|pm)$/i)).toBeDefined();
    expect(screen.getByText("28 °C")).toBeDefined();
  });

  test("Render with temperature unit F", () => {
    render(<WeatherItem weather={weather} coord={coord} temperatureUnit="F" />);
    expect(screen.getByText("82 °F")).toBeDefined();
  });

  test("Render with temperature unit K", () => {
    render(<WeatherItem weather={weather} coord={coord} temperatureUnit="K" />);
    expect(screen.getByText("301.08 K")).toBeDefined();
  });
});
