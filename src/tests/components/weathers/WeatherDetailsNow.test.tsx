import { WeatherDetailsNow } from "@/components/weathers";
import places from "@/tests/mockup-data/places.json";
import weathers from "@/tests/mockup-data/weathers.json";
import { render, screen } from "@testing-library/react";

const place = places[1];
const weather = weathers[1];

describe("WeatherDetailsNow component", () => {
  test("Render with temperature unit C (default)", () => {
    render(<WeatherDetailsNow place={place} weather={weather} />);
    expect(screen.getByText(/Phra Nakhon Si Ayutthaya/i)).toBeDefined();
    expect(screen.getByText(/^\w+day,\s\d{1,2}\s\w+\s\d{4}$/)).toBeDefined();
    expect(screen.getByText(/^\d{1,2}:\d{1,2}\s(am|pm)$/i)).toBeDefined();
    expect(screen.getByText("26 °C")).toBeDefined();
    expect(screen.getByText(/Rain.+moderate\srain/i)).toBeDefined();
    expect(screen.getByText("MIN 26 °C")).toBeDefined();
    expect(screen.getByText("MAX 28 °C")).toBeDefined();
  });

  test("Render with temperature unit F", () => {
    render(<WeatherDetailsNow place={place} weather={weather} temperatureUnit="F" />);
    expect(screen.getByText("80 °F")).toBeDefined();
    expect(screen.getByText("MIN 78 °F")).toBeDefined();
    expect(screen.getByText("MAX 82 °F")).toBeDefined();
  });

  test("Render with temperature unit K", () => {
    render(<WeatherDetailsNow place={place} weather={weather} temperatureUnit="K" />);
    expect(screen.getByText("299.58 K")).toBeDefined();
    expect(screen.getByText("MIN 298.76 K")).toBeDefined();
    expect(screen.getByText("MAX 301.14 K")).toBeDefined();
  });

  test("Render with another mock data", () => {
    render(<WeatherDetailsNow place={places[0]} weather={weathers[0]} />);
    expect(screen.getByText(/Siam Paragon/i)).toBeDefined();
    expect(screen.getByText(/^\w+day,\s\d{1,2}\s\w+\s\d{4}$/)).toBeDefined();
    expect(screen.getByText(/^\d{1,2}:\d{1,2}\s(am|pm)$/i)).toBeDefined();
    expect(screen.getByText("28 °C")).toBeDefined();
    expect(screen.getByText(/Clouds.+overcast\sclouds/i)).toBeDefined();
    expect(screen.getByText("MIN 28 °C")).toBeDefined();
    expect(screen.getByText("MAX 28 °C")).toBeDefined();
  });
});
