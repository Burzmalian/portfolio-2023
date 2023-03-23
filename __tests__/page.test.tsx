import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

describe("Page", () => {
  it("renders a page", () => {
    render(<Page />);

    const button = screen.getByTestId("button");

    expect(button).toBeInTheDocument();
  });
});
