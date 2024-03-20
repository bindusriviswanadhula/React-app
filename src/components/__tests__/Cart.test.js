import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA_NAME from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import "@testing-library/jest-dom";



global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA_NAME),
    })
);

it("Should Load Restaurant Menu Component", async () => {

 await act ( async () =>
  render(
    <BrowserRouter>
 <Provider store={appStore}>
    <Header/>
  <RestaurantMenu />
  </Provider>
  </BrowserRouter>
  )
  );

  const accordionHeader = screen.getByText("Classic Pizza (Serves 2) (15)");
  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(15);

  const addBtns = screen.getAllByRole("button", { name: "Add +"});

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

})