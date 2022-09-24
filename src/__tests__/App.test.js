import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a Search component", () => {
    render(<App />);

    expect(screen.getByRole("form")).toBeInTheDocument();
  });
});
