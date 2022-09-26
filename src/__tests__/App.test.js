import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the NASA logo", () => {
    render(<App />);

    expect(screen.getByAltText("nasa logo")).toBeInTheDocument();
  });

  it("renders Search component", () => {
    render(<App />);

    expect(screen.getByRole("form")).toBeInTheDocument();
  });
});
