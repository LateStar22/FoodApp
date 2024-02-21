import MOCK_DATA from "../mocks/resCardMock.json"
import MOCK_DATA_PROMOTED_RESTRO from "../mocks/promotedResCard.json"
import { render,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import {withPromotedLabel} from "../RestaurantCard"
import "@testing-library/jest-dom"

// In case of testing components which are receiving props, we need to create mock data and pass it as a prop.
it("should render restaurant Card component with props", () => {
    render(<RestaurantCard resCard={MOCK_DATA}></RestaurantCard>);

    const restaurantName = screen.getByText("KFC");
    expect(restaurantName).toBeInTheDocument();

});

it("should render restaurant card component with promoted Label", () => {
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard); // Apply the HOC to the component
    render(<PromotedRestaurantCard resCard={MOCK_DATA_PROMOTED_RESTRO} />); // Render the enhanced component
    const promotedRestaurant = screen.getByText("Promoted");
    expect(promotedRestaurant).toBeInTheDocument();
});

//withPromotedLabel HOC is applied on RestaurantCard,resulting in an enhanced component that includes the "Promoted" label.
//This enhanced component is then rendered using render(<PromotedRestaurantCard resCard={MOCK_DATA_PROMOTED_RESTRO} />);.