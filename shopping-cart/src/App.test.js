import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("initial render", () => {
  test("Snapshot home page ", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  test("link to shop page renders shop", async () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const shopBtn = container.querySelector(".shopLink");
    await userEvent.click(shopBtn);
    expect(screen.getByRole("heading", { name: "Products" }).textContent).toBe(
      "Products"
    );
  });
});

describe("update render after userEvents", () => {
  test("Click on Cart buttons renders cart", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const cartBtn = screen.getByAltText("cart image");
    userEvent.click(cartBtn);
    expect(screen.getByRole("heading", { name: "Cart" }).textContent).toBe(
      "Cart"
    );
  });
  test("click on cart button again hides cart", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const cartBtn = screen.getByAltText("cart image");
    const cart = container.getElementsByClassName("cart");
    expect(cart[0].className).toBe("cart visuallyHidden hidden");
    userEvent.click(cartBtn);
    expect(cart[0].className).toBe("cart visuallyHidden");
    userEvent.click(cartBtn);
    expect(cart[0].className).toBe("cart visuallyHidden");
    //setTimeout affects toBe value
  });
});

/* SCRAPPED TESTS
describe("shopping cart logic", () => { 
  test("go to shop", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading", { name: "Products" }).textContent).toBe(
      "Products"
    );
  });
  test("go to product", async () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const product = container.getElementsByClassName("product");
      console.log(product[0].lastChild)
    await userEvent.click(product[0].lastChild) //structureClone bug
    expect(screen.getByRole("heading", {name: 'Small brush'}).textContent).toBe('Small brush')
  });
  test("add one product to cart & updates cart", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
}); */
