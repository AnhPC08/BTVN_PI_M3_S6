import { describe, it, expect } from "vitest";

// 1. Hàm chức năng và Bẫy dữ liệu
const filterActiveUsers = (users: any[]) => {
  return users
    .filter((u) => u.isActive)
    .map((u) => ({
      ...u,
      lastLoginDate: Date.now(), // Bẫy dữ liệu: Sinh ra thuộc tính ngẫu nhiên
    }));
};

// 2. Dữ liệu mock
const mockUsers = [
  { id: 1, name: "Admin", isActive: true },
  { id: 2, name: "Guest", isActive: false },
];

// 3. Kịch bản test
describe("Bài 8: Kiểm thử filterActiveUsers", () => {
  const result = filterActiveUsers(mockUsers);

  it("Giải pháp 1: Sử dụng arrayContaining kết hợp objectContaining", () => {
    // Ép thư viện chỉ quan tâm thuộc tính name, bỏ qua lastLoginDate
    expect(result).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: "Admin" })]),
    );
  });

  it("Giải pháp 2: Duyệt vòng lặp và toEqual", () => {
    const adminUser = result.find((user) => user.name === "Admin");

    expect(adminUser).toBeDefined();
    // Vẫn phải dùng objectContaining để né bẫy lastLoginDate
    expect(adminUser).toEqual(
      expect.objectContaining({ name: "Admin", isActive: true }),
    );
  });
});

// npm test sẽ thấy test pass xanh mượt và né được bẫy dữ liệu
