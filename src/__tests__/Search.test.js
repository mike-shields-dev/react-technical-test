import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../components/Search";

const validProps = {
  setSearchResults: jest.fn(),
};

const renderSearch = () => render(<Search {...validProps} />);

describe("Search component", () => {
  it("matches snapshot", () => {
    const { asFragment } = renderSearch();

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays a text input", () => {
    renderSearch();

    expect(
      screen.getByPlaceholderText(/enter your search/i)
    ).toBeInTheDocument();
  });

  it("displays a button", () => {
    renderSearch();

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls setSearchResults function when button is clicked", async () => {
    renderSearch();

    await fireEvent.click(screen.getByRole("button"));

    expect(validProps.setSearchResults).toHaveBeenCalled();
  });
});
