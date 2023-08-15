import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";
import Index from "../pages";

it("renders status", async () => {
  (useSession as jest.Mock).mockReturnValue({ status: "unauthenticated" });

  render(<Index />);

  expect(screen.getByText("unauthenticated")).toBeInTheDocument();
});
