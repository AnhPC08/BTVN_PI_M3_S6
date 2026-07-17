# Bài 8: Phân tích Đa giải pháp - Array/Object Matchers

Phân tích bẫy dữ liệu (Data Trap)

- Vấn đề: Khi đối tượng có thêm thuộc tính ngẫu nhiên sinh ra tại thời điểm test (ví dụ: lastLoginDate), việc dùng toContainEqual() hoặc toEqual() bình thường sẽ bị VỠ (FAIL).
- Nguyên nhân: Các hàm Matcher mặc định yêu cầu so sánh khớp chính xác 100% (Strict Match) toàn bộ các key của đối tượng. Nếu đối tượng trả về dư ra thuộc tính lastLoginDate, test sẽ báo lỗi.
- Cách xử lý: Bắt buộc phải sử dụng hàm expect.objectContaining(). Hàm này giúp Assert Library hiểu rằng: "Chỉ cần đối tượng có chứa thuộc tính name là 'Admin', các thuộc tính khác (như lastLoginDate) cứ bỏ qua".



