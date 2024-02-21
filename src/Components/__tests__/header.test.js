import { Provider } from "react-redux"
import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

test("it should render header with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        )

        const loginButton = screen.getByRole("button", {name : "Log In"});
        // assertion,
        expect(loginButton).toBeInTheDocument();
});

test("it should render header with cart items zero", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        )

        const cart = screen.getByText(/Cart/); //This is called regex
        // assertion,
        expect(cart).toBeInTheDocument();
});

test("it should change login button to logout button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        )

        const loginButton1 = screen.getByRole("button", {name : "Log In"}); //This is called regex
        fireEvent.click(loginButton1);  //to fire an event
        // assertion,
        const logoutButton1 = screen.getByRole("button", {name : "LogOut"})
        expect(logoutButton1).toBeInTheDocument();
});


// In order to write test cases for the component having access to redux store and having Link tag, we need to
// pass store through provider and Link through BrowserRouter respectively.