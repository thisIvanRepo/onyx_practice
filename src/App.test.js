import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hairstyle Reflects The Personality Inside You/i);
  expect(linkElement).toBeInTheDocument();
});
