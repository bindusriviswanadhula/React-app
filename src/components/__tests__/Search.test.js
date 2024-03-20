import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/resListMockData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should render the Res List for Desserts text input", async () => {
    await act(async () => render(
    <BrowserRouter>  
    <Body />
    </BrowserRouter>  
    ) );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", {name: "search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "Desserts"}})

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(3);
    
    



    
});


it("Should filter Top rated Restaurant", async () => {
    await act(async () => render(
    <BrowserRouter>  
    <Body />
    </BrowserRouter>  
    ) );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);

    
    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants" });

    fireEvent.click(topRatedBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(3);
    
    



    
});

