import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { vi, expect, test, afterEach } from "vitest";
import WeatherWidget from "./WeatherWidget";

afterEach(() => {
  vi.restoreAllMocks();
});

test('Hiển thị "Nắng đẹp" từ dữ liệu giả lập', async () => {
  vi.spyOn(globalThis, "fetch").mockResolvedValue({
    json: async () => ({ message: "Nắng đẹp" }),
  } as Response);

  render(<WeatherWidget />);

  const element = await screen.findByText("Nắng đẹp");
  expect(element).toBeInTheDocument();

  expect(globalThis.fetch).toHaveBeenCalledWith("/api/weather");
});

test("Xử lý tình huống API bị lỗi", async () => {
  vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("API Error"));

  render(<WeatherWidget />);

  const errorElement = await screen.findByText("Lỗi mạng");
  expect(errorElement).toBeInTheDocument();
});
