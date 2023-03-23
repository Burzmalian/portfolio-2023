import { render, screen } from "@testing-library/react";
import { Button } from "@/ui/components";

describe("Button", () => {
  it("renders a button", () => {
    render(<Button />);

    const button = screen.getByTestId("button");

    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
  });
});
