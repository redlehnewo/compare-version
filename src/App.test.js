import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("App is running", () => {
  render(<App />);
  const header = screen.getByText("Compare Version");
  expect(header).toBeInTheDocument();
});

test("1.2.1 | 1.0 results to 1", async () => {
  const { getByLabelText, getByText } = render(<App />);

  const inputA = getByLabelText("Enter input #1");
  fireEvent.change(inputA, { target: { value: "1.2.1" } });

  const inputB = getByLabelText("Enter input #2");
  fireEvent.change(inputB, { target: { value: "1.0" } });

  fireEvent.click(getByText("Compare"));

  const result = getByText("Result is: 1");
  expect(result).toBeInTheDocument();
});

test("1.0 | 1.2.1 results to -1", async () => {
  const { getByLabelText, getByText } = render(<App />);

  const inputA = getByLabelText("Enter input #1");
  fireEvent.change(inputA, { target: { value: "1.0" } });

  const inputB = getByLabelText("Enter input #2");
  fireEvent.change(inputB, { target: { value: "1.2.1" } });

  fireEvent.click(getByText("Compare"));

  const result = getByText("Result is: -1");
  expect(result).toBeInTheDocument();
});

test("1 | 1.0.0.0.0.0.0.0 results to 0", async () => {
  const { getByLabelText, getByText } = render(<App />);

  const inputA = getByLabelText("Enter input #1");
  fireEvent.change(inputA, { target: { value: "1" } });

  const inputB = getByLabelText("Enter input #2");
  fireEvent.change(inputB, { target: { value: "1.0.0.0.0.0.0.0" } });

  fireEvent.click(getByText("Compare"));

  const result = getByText("Result is: 0");
  expect(result).toBeInTheDocument();
});
