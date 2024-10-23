import { WeatherDetailsSubscribe } from "@/components/weathers";
import coords from "@/tests/mockup-data/coords.json";
import { fireEvent, render, screen } from "@testing-library/react";

const coord = coords[0];

describe("WeatherDetailsSubscribe component", () => {
  test("Render subscribe or unsubscribe", () => {
    render(<WeatherDetailsSubscribe coord={coord} />);
    expect(screen.getByText("Subscribe")).toBeDefined();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Unsubscribe")).toBeDefined();
  });
});

// TODO : Mock useCoordsStore
