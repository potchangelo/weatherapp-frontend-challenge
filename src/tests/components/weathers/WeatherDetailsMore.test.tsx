import { WeatherDetailsMore } from "@/components/weathers";
import weathers from "@/tests/mockup-data/weathers.json";
import { render, screen } from "@testing-library/react";

const weather = weathers[1];

describe("WeatherDetailsMore component", () => {
  test("Render with completed data", () => {
    render(<WeatherDetailsMore weather={weather} />);
    expect(screen.getAllByRole("listitem").length).toBe(4);
  });

  test("Render with incompleted data", () => {
    const weatherWithoutRain = {...weather};
    delete weatherWithoutRain.rain;
    render(<WeatherDetailsMore weather={weatherWithoutRain} />);
    expect(screen.getAllByRole("listitem").length).toBe(3);
  });
});
