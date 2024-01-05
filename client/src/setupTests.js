// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

test("should display github status", async () => {
  const { getByTestId } = render(<App />);
  await waitForElement(() => getByTestId("status"));
  expect(getByTestId("status")).toBeTruthy();
});