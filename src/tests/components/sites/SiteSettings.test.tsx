import { SiteSettings } from "@/components/sites";
import { fireEvent, render, screen } from "@testing-library/react";

describe("SiteSettings component", () => {
  test("Render dropdown menu", () => {
    render(<SiteSettings />);
    expect(getSettingsMenu()).toBeNull();

    // Open
    fireEvent.click(getSettingsButton());
    expect(screen.getByRole("menu")).toBeDefined();

    // Close
    fireEvent.click(getSettingsButton());
    expect(getSettingsMenu()).toBeDefined();
  });

  test("Change radio fields", () => {
    render(<SiteSettings />);
    fireEvent.click(getSettingsButton());

    // Change to F
    fireEvent.click(screen.getByRole("radio", { name: "Fahrenheit" }))
    expect(screen.getByRole("radio", { name: "Fahrenheit", checked: true })).toBeDefined();

    // Change to K
    fireEvent.click(screen.getByRole("radio", { name: "Kelvin" }))
    expect(screen.getByRole("radio", { name: "Kelvin", checked: true })).toBeDefined();

    // Change to C
    fireEvent.click(screen.getByRole("radio", { name: "Celsius" }))
    expect(screen.getByRole("radio", { name: "Celsius", checked: true })).toBeDefined();
    expect(screen.getByRole("radio", { name: "Fahrenheit", checked: false })).toBeDefined();
    expect(screen.getByRole("radio", { name: "Kelvin", checked: false })).toBeDefined();
  });
});

function getSettingsButton() {
  return screen.getByTitle("Settings");
}

function getSettingsMenu() {
  return screen.queryByRole("menu");
}
