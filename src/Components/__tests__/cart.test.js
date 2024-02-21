import { render,screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../Restaurantmenu";
import {mockdata_resMenu} from "../mocks/resMenu.json"
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(mockdata_resMenu),
    });
});

it("should load Restaurant menu component correctly", async () => {
    await act( async () => {
        render(<RestaurantMenu />)

        const accordianHeader = screen.getByText("Chandigarh Flavours")
        expect(accordianHeader).toBeInTheDocument();
    })
})