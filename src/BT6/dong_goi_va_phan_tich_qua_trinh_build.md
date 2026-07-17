1. Thực hiện Đóng gói (Build): npm run build
2. Sự khác biệt cấu trúc file giữa môi trường Dev và Prod:
   A. Môi trường Development (Dev)
   Mục đích: Tối ưu cho trải nghiệm lập trình viên (DX). Ưu tiên khả năng debug, đọc hiểu mã nguồn và phản hồi nhanh khi thay đổi code.
   Dung lượng: Rất lớn (thường hàng trăm MB) vì bao gồm toàn bộ thư mục node_modules và các công cụ hỗ trợ phát triển.
   Cấu trúc file: Giữ nguyên cấu trúc thư mục gốc của dự án, các file .tsx/.ts không bị nén, giữ nguyên comment và định dạng mã nguồn giúp lập trình viên dễ dàng tìm lỗi.
   Cơ chế: Chạy trực tiếp qua máy chủ phát triển (Dev server), không cần đóng gói, hỗ trợ tính năng HMR (Hot Module Replacement) để cập nhật thay đổi tức thì.

B. Môi trường Production (Prod)
Mục đích: Tối ưu cho người dùng cuối (UX). Ưu tiên tốc độ tải trang nhanh nhất, dung lượng nhỏ nhất và bảo mật mã nguồn.
Dung lượng: Rất nhỏ, chỉ bao gồm các file đã được tối ưu hóa (thường chỉ vài MB).
Cấu trúc file: Tất cả mã nguồn được gộp (bundle) và nén (minify) lại thành các file JS/CSS/HTML đơn giản. Toàn bộ comment và định dạng code đều bị xóa bỏ, tên file thường chứa mã băm (hash) để kiểm soát cache.
Cơ chế: Đã loại bỏ hoàn toàn các công cụ phát triển, chỉ để lại những file cần thiết nhất để trình duyệt có thể thực thi ứng dụng ngay lập tức mà không cần qua bước xử lý trung gian nào.

3. Tại sao code bị đổi tên và không thể đọc hiểu?
   A. Đổi tên file có chứa mã băm (Hashing) giải quyết bài toán Cache Busting:
   Trình duyệt web luôn có xu hướng lưu lại (cache) các file JS/CSS để lần sau load trang nhanh hơn. Nếu bạn cập nhật code mới nhưng vẫn giữ tên index.js, trình duyệt của khách hàng sẽ dùng lại file cũ trong máy họ, dẫn đến giao diện không thay đổi. Bằng cách thêm mã băm ngẫu nhiên (VD: D8gR3zP) mỗi khi có sự thay đổi code, trình duyệt bắt buộc phải tải file mới về.

   B. Mã nguồn không thể đọc hiểu (Minification & Obfuscation) giải quyết bài toán Băng thông và Bảo mật:
   - Tiết kiệm băng thông (Minification): Trình đóng gói (như Rollup hoặc Webpack) đã xóa bỏ toàn bộ dấu cách, dấu xuống dòng, comment, và đổi tên các biến dài thòng (ví dụ: const calculateTotalPrice = ...) thành tên siêu ngắn (ví dụ: const a = ...).
     Điều này giúp giảm dung lượng file xuống mức thấp nhất, giúp khách hàng tải trang web nhanh hơn.

   - Che giấu logic (Obfuscation): Gây khó khăn cho việc sao chép hoặc dịch ngược (reverse engineer) các logic nghiệp vụ quan trọng của hệ thống từ phía người dùng bên ngoài.
