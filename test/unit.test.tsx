import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../src/App";
import Button from "../src/components/Button";

describe("CountButton", () => {
  test("renders", () => {
    render(<App />);
    const countElement = screen.getByText(/count/i);
    expect(countElement).toBeDefined();
  });
});

test("Button increments count by 2 when clicked twice", () => {
  const setCount = vi.fn();
  const { getByText } = render(<Button count={0} setCount={setCount} />);
  const button = getByText(/count is 0/i);

  fireEvent.click(button);
  fireEvent.click(button);

  expect(setCount).toHaveBeenCalledTimes(2);
});
