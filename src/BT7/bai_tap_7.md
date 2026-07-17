1. Giải pháp 1: File Dashboard.shallow.test.js
   import { shallow } from 'enzyme';
   import Dashboard from './Dashboard';

describe('Kiem thu Dashboard voi Shallow', () => {
it('Hien thi dung tieu de', () => {
const wrapper = shallow(<Dashboard/>);
expect(wrapper.find('h1').text()).toEqual('Title');
});
});

2. Giải pháp 2: File Dashboard.mount.test.js
   import { mount } from 'enzyme';
   import Dashboard from './Dashboard';

describe('Kiem thu Dashboard voi Mount', () => {
it('Hien thi dung tieu de', () => {
const wrapper = mount(<Dashboard/>);
expect(wrapper.find('h1').text()).toEqual('Title');
});
});

3. Đánh giá thời gian thực thi (Trade-off)

- Phương pháp shallow():
  - Chỉ render Component cha, bỏ qua 10 biểu đồ con.
  - Thời gian thực thi rất nhanh (vài ms).
  - Ưu điểm: Tính cô lập cao, không bị ảnh hưởng bởi lỗi của component con.
  - Nhược điểm: Độ phủ (Coverage) thấp.

- Phương pháp mount():
  - Render toàn bộ Component cha và 10 biểu đồ con.
  - Thời gian thực thi rất chậm (hàng trăm ms).
  - Ưu điểm: Độ phủ cao, bao phủ toàn bộ cây DOM.
  - Nhược điểm: Lãng phí tài nguyên, dễ tạo ra lỗi dây chuyền (Flaky test).

4. Chốt giải pháp kiến trúc

- Lựa chọn: Sử dụng shallow().
- Lý do: Yêu cầu chỉ kiểm tra sự tồn tại của thẻ h1 tĩnh trên Dashboard. Việc sử dụng mount() để ép hệ thống render 10 biểu đồ phức tạp là hoàn toàn không cần thiết. Đánh đổi độ phủ sâu để lấy hiệu suất thực thi tối đa từ shallow() là quyết định tối ưu nhất.
