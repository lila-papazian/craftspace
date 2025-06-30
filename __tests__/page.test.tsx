import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home page", () => {
  it("renders a dummy element", () => {
    render(<h1>Hello world</h1>);
    expect(screen.getByText("Hello world")).toBeTruthy();

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
