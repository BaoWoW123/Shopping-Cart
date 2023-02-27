import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("initial render", () => {
  test("On home page", () => {
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
});
