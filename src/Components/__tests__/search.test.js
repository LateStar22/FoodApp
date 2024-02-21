import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import api_mock_data from "../mocks/apiData.json";
import { act } from "react-dom/test-utils"; 
import Body from "../Body";
import "@testing-library/jest-dom";

// Mock fetch globally
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(api_mock_data),
    });
});

it("should  search", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });

    const resCardBeforeSearch = screen.getAllByTestId("resCard");
    expect(resCardBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", {name : "Search"});
    const searchInput = screen.getByTestId("searchInput");
    expect(searchInput).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();

    fireEvent.change(searchInput,{target : {value : "burger"}});
    fireEvent.click(searchBtn);

    const resCardsAfterSearch = screen.getAllByTestId("resCard");
    expect(resCardsAfterSearch.length).toBe(1);
});

it("should filter top rated restaurant", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });

    const resCardBeforeClick = screen.getAllByTestId("resCard");
    expect(resCardBeforeClick.length).toBe(20);

    const topRatedSearchBtn = screen.getByRole("button", {name : "Top Restaurants Search"});
    expect(topRatedSearchBtn).toBeInTheDocument();

    fireEvent.click(topRatedSearchBtn);
   
    const resCardsAfterClick = screen.getAllByTestId("resCard");
    expect(resCardsAfterClick.length).toBe(2);
});

