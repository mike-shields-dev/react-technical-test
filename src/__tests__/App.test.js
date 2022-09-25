import { fireEvent, render, screen } from "@testing-library/react";
import App from "../components/App";
import mockApiResponse from "./mockApiResponse.json";
import nock from "nock";

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

  it("displays SearchResults component on successful search", async () => {
    render(<App />);
    nock("http://images-api.nasa.gov/")
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
        "access-control-allow-credentials": "true",
      })
      .get("/search")
      .query({ q: "moon" })
      .reply(200, mockApiResponse);

    const searchInput = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.change(searchInput, { target: { value: "moon" } });
    fireEvent.click(button);

    const searchResults = await screen.findByTestId("search-results");

    expect(searchResults).toBeInTheDocument();
  });
});
