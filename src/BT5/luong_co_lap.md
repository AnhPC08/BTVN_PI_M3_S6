Để kiểm thử hiệu quả, chúng ta cần chặn đứng lời gọi mạng ngay tại tầng trình duyệt (Global scope).

- Nguyên lý: Thay vì để lời gọi fetch đi ra ngoài internet, chúng ta dùng vi.spyOn(global, 'fetch').

- Kịch bản:

1. Test chạy -> render Component.
2. useEffect kích hoạt fetch.
3. jest/vitest bắt được lời gọi đó và trả về dữ liệu giả lập ngay lập tức.
4. Component nhận dữ liệu "Nắng đẹp" và render -> Test thành công.

- Ưu điểm: Không có network request thật, dữ liệu luôn nhất quán, test chạy offline vẫn pass.
