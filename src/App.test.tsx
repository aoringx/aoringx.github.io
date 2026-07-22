import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the main portfolio sections", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Aaron Xiong" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 1, name: "Research" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 1, name: "Projects" }),
  ).toBeInTheDocument();
});
