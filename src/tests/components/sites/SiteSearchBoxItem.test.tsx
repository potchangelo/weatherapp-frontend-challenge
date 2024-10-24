import { SiteSearchBoxItem } from "@/components/sites";
import coords from "@/tests/mockup-data/coords.json";
import places from "@/tests/mockup-data/places.json";
import { render, screen } from "@testing-library/react";

const place = places[0];

describe("SiteSearchBoxItem component", () => {
  test("Render unselected place", () => {
    render(<SiteSearchBoxItem place={place} onItemClick={_ => {}} />);
    expect(screen.getByText(/Siam Paragon/i)).toBeDefined();
    expect(screen.getByRole("listitem")).toBeDefined();
  });

  test("Render selected place", () => {
    render(<SiteSearchBoxItem place={place} selectedCoords={coords} onItemClick={_ => {}} />);
    expect(screen.queryByRole("listitem")).toBeNull();
  });
});
