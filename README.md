[README.md](https://github.com/user-attachments/files/32991675/README.md)
# KhuuKhoiDanh's Personal Link

Website cá nhân một trang (single page) giới thiệu về mình, được xây dựng bằng **HTML, CSS và jQuery**. Giao diện gọn gàng, có hiệu ứng chuyển tab mượt và hiển thị tốt trên cả máy tính lẫn điện thoại.

## Tính năng

- **3 tab nội dung**: Home, About, Contact, chuyển đổi tức thì bằng jQuery (không tải lại trang).
- **Responsive**: bố cục tự điều chỉnh cho màn hình nhỏ (dưới 600px).
- **Hiệu ứng**: animation xuất hiện khi đổi tab, hover cho menu và thẻ liên hệ.
- **Tooltip** thuần CSS bằng thuộc tính `data-tooltip`.
- **Trạng thái "Available"** hiển thị ngay trên thanh điều hướng.
- **Nút đổi giao diện sáng/tối** (đã có giao diện, chức năng đang phát triển).

## Công nghệ sử dụng

| Công nghệ | Mục đích |
|-----------|----------|
| HTML5 | Cấu trúc trang |
| CSS3 (Flexbox, Grid, Media Query, Animation) | Giao diện và responsive |
| JavaScript / jQuery 4.0 | Xử lý chuyển tab |
| Font Inter | Phông chữ |

## Cấu trúc thư mục

```
.
├── index.html      # Cấu trúc trang và nội dung
├── style.css       # Toàn bộ giao diện và responsive
├── jquery.js       # Logic chuyển tab (viết bằng jQuery)
├── img/
│   └── avatar.png  # Ảnh đại diện
└── README.md
```

> Lưu ý: `jquery.js` là file script của dự án, **không phải** thư viện jQuery. Thư viện jQuery được tải qua CDN trong `index.html`.

## Chạy dự án

1. Tải mã nguồn về máy:

   ```bash
   git clone https://github.com/khuukhoidanh/<ten-repo>.git
   cd <ten-repo>
   ```

2. Mở file `index.html` bằng trình duyệt (hoặc dùng extension **Live Server** của VS Code).

Không cần cài đặt thêm gì, chỉ cần có kết nối Internet để tải jQuery từ CDN.

## Tùy chỉnh

- **Nội dung**: chỉnh sửa trực tiếp trong các khối `.home`, `.about`, `.contact` ở `index.html`.
- **Ảnh đại diện**: thay file `img/avatar.png`.
- **Liên kết mạng xã hội**: sửa thuộc tính `href` trong các thẻ `.contact_card`.
- **Màu sắc**: đổi các mã màu trong `style.css` (màu nhấn chính là `#087a50`).

## Cách hoạt động

Mỗi mục menu (`.menu_home`, `.menu_about`, `.menu_contact`) có một sự kiện `click` trong `jquery.js`. Khi bấm, script sẽ:

1. Hiện khối nội dung tương ứng bằng `prop('hidden', false)`.
2. Ẩn hai khối còn lại.
3. Thêm class `active` cho mục menu đang chọn và gỡ khỏi các mục khác.

## Lộ trình

- [ ] Hoàn thiện chế độ giao diện sáng/tối
- [ ] Thêm giao diện tiếng anh, tiếng trung
- [ ] Thêm nhiều mục như Project

## Liên hệ

- Facebook: [facebook.com/khuukhoidanh](https://www.facebook.com/khuukhoidanh/)
- Instagram: [@_kuh.kdanh_](https://www.instagram.com/_kuh.kdanh_/)
- GitHub: [khuukhoidanh](https://github.com/khuukhoidanh)
- Email: khuukhoidanh@gmail.com

---

Made with ❤️ by **Khưu Khởi Danh**
