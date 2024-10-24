import { SiteSearchBox } from "@/components/sites";
import { fireEvent, render, screen } from "@testing-library/react";

describe("SiteSearchBox component", () => {
  test("Change search input", () => {
    render(<SiteSearchBox />);
    expect(getSearchInput().value).toBe("");
    fireEvent.change(getSearchInput(), { target: { value: "abcd" } });
    expect(getSearchInput().value).toBe("abcd");
  });
});

function getSearchInput() {
  return screen.getByRole<HTMLInputElement>("searchbox");
}
