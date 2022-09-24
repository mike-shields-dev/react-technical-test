import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a search box", () => {
    render(<App />);

    expect(
      screen.getByPlaceholderText(/enter your search/i)
    ).toBeInTheDocument();
  });
});
