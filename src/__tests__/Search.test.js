import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Search />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays a text input", () => {
    render(<Search />);

    expect(
      screen.getByPlaceholderText(/enter your search/i)
    ).toBeInTheDocument();
  });
});
