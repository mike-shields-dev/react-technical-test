import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

const validProps = {
  results: [
    "https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg",
    "https://images-assets.nasa.gov/image/PIA13517/PIA13517~thumb.jpg",
    "https://images-assets.nasa.gov/image/PIA12228/PIA12228~thumb.jpg",
  ],
};
const renderSearchResults = () => render(<SearchResults {...validProps} />);

describe("SearchResults", () => {
  it("matches snapshot", () => {
    const { asFragment } = renderSearchResults();

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays a collection of image elements", () => {
    renderSearchResults();

    expect(screen.getByTestId("search-results")).toBeInTheDocument();
  });
});
