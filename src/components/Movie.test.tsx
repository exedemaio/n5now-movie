import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import Movie from "./Movie";
import { api } from "../api";

jest.mock("../api");

(api.get as jest.Mock).mockResolvedValue({
  data: {
    cast: [], // replace with your mock data
  },
});

describe("Movie", () => {
  it("renders correctly", () => {
    render(<Movie />);
  });

  it("calls the API correctly", async () => {
    const mockData = { data: { cast: [] } };
    (api.get as jest.Mock).mockResolvedValue(mockData);

    render(<Movie />);

    await waitFor(() =>
      expect(api.get).toHaveBeenCalledWith("/671/credits?language=es-AR")
    );
  });

  it("renders List when data is loaded", async () => {
    const mockData = { data: { cast: [] } };
    (api.get as jest.Mock).mockResolvedValue(mockData);

    render(<Movie />);

    await screen.findByTestId("list");
  });
});
