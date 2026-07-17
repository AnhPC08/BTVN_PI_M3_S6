import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SmartCounter from "./SmartCounter";

describe("TDD - SmartCounter", () => {
  it("Hiển thị ban đầu là 0", () => {
    render(<SmartCounter />);
    expect(screen.getByTestId("count-display").textContent).toBe("0");
  });

  it("Bấm Tăng lên 1", () => {
    render(<SmartCounter />);
    fireEvent.click(screen.getByText("Tăng"));
    expect(screen.getByTestId("count-display").textContent).toBe("1");
  });

  it("Bấm Giảm không được phép âm", () => {
    render(<SmartCounter />);
    fireEvent.click(screen.getByText("Giảm"));
    expect(screen.getByTestId("count-display").textContent).toBe("999");
  });
});
