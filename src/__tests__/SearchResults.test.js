import React from "react";
import { render, screen } from "@testing-library/react";
import mockApiResponse from "./mockApiResponse.json";
import SearchResults from "../components/SearchResults";

const validProps = {
  results: mockApiResponse.collection.items,
};
const renderSearchResults = () => render(<SearchResults {...validProps} />);

describe("SearchResults", () => {
  it("matches snapshot", () => {
    const { asFragment } = renderSearchResults();

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays a collection of image elements", () => {
    renderSearchResults();

    mockApiResponse.collection.items.forEach((item) => {
      const { title } = item.data[0]

      expect(screen.getByAltText(title)).toBeInTheDocument();
    });
  });
});
