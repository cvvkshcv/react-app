import { render } from "@testing-library/react";
import Billing from "../Billing";
// import { useUser } from "../../store/useUser";

jest.mock("../store/useUser.ts", () => {
  return {
    useUser: () => {
      return {
        fdsa: "afds",
      };
    },
  };
});

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the main page", () => {
  jest.mock("useUser", () => {
    return {
      fetchUserDetail: () => null,
      setUserInfo: () => null,
      isSubmitSuccess: () => null,
      isSubmitting: () => null,
      loading: () => null,
      userInfo: {
        address: {
          number: 1,
          city: 1,
          zipcode: 1,
          street: 1,
        },
      },
      error: () => null,
    };
  });
  render(<Billing />);
  expect(true).toBeTruthy();
});
