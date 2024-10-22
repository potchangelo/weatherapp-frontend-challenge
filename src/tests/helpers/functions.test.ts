import { displayKelvinToUnit, kelvinToUnit } from "@/helpers/functions";

describe("kelvinToUnit function", () => {
  test("Kelvin to Anything", () => {
    expect(kelvinToUnit(273.15, "K")).toBe(273.15);
    expect(kelvinToUnit(273.15, "C")).toBe(0);
    expect(kelvinToUnit(0, "C")).toBe(-273);
    expect(kelvinToUnit(273.15, "F")).toBe(32);
    expect(kelvinToUnit(0, "F")).toBe(-460);
  });
});

describe("displayKelvinToUnit function", () => {
  test("Display any temperature of unit", () => {
    expect(displayKelvinToUnit(273.15, "K")).toBe("273.15 K");
    expect(displayKelvinToUnit(273.15, "C")).toBe("0 °C");
    expect(displayKelvinToUnit(0, "C")).toBe("-273 °C");
    expect(displayKelvinToUnit(273.15, "F")).toBe("32 °F");
    expect(displayKelvinToUnit(0, "F")).toBe("-460 °F");
  });
});
