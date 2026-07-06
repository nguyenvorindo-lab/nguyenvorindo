/* ============================================================
   SỢI & MÀU — dữ liệu nội dung đã cập nhật hình ảnh
   ============================================================ */

const SITE = {
  name: "MODE.",
  tagline: "Thời trang. Xu hướng. Làm đẹp.",
};

const CATEGORIES = {
  "tin-tuc": { label: "Tin tức", color: "berry", page: "tin-tuc.html", desc: "Chuyển động mới nhất của làng thời trang trong nước và quốc tế." },
  "su-kien": { label: "Sự kiện", color: "gold", page: "su-kien.html", desc: "Tuần lễ thời trang, show diễn, triển lãm và những cuộc hẹn không thể bỏ lỡ." },
  "xu-huong": { label: "Xu hướng", color: "teal", page: "xu-huong.html", desc: "Những gì đang lên ngôi trên đường phố, sàn diễn và mạng xã hội." },
  "lam-dep": { label: "Làm đẹp", color: "rose", page: "lam-dep.html", desc: "Da, tóc, trang điểm — bí quyết và sản phẩm đáng thử." },
};

const ARTICLES = [
  {
    id: 1,
    category: "tin-tuc",
    title: "Thương hiệu An Nhiên công bố dùng 100% vải tái chế từ năm sau",
    excerpt: "Một cam kết hiếm thấy từ một thương hiệu nội địa: toàn bộ dây chuyền sản xuất sẽ chuyển sang vải sợi tái chế trong vòng 12 tháng.",
    image: "https://vaimaycaocap.com/wp-content/uploads/2021/05/vai-tai-che-vai-may-cao-cap-thomas-nguyen.png",
    date: "2026-07-01",
    author: "Thu Hà",
    tags: ["bền vững", "thương hiệu Việt", "sản xuất"],
    readTime: 4,
    featured: true,
    content: ["Trong buổi họp báo sáng thứ Ba, đại diện thương hiệu An Nhiên khẳng định đây là bước đi bắt buộc chứ không phải một chiến dịch truyền thông. Toàn bộ nguyên liệu vải cotton mới sẽ được thay thế bằng sợi tái chế từ chai nhựa và vải vụn thu gom trong nước.", "Quyết định này đến sau hai năm thử nghiệm âm thầm với ba dòng sản phẩm giới hạn, vốn nhận được phản hồi tích cực từ khách hàng trẻ vốn ngày càng quan tâm đến nguồn gốc vật liệu.", "Giá thành sản phẩm dự kiến tăng nhẹ khoảng 8-10%, nhưng thương hiệu tin rằng đây là mức chấp nhận được khi so với lợi ích môi trường lâu dài. Nhiều đối tác bán lẻ cũng đã cam kết đồng hành trong giai đoạn chuyển đổi.", "Đây được xem là một trong những động thái mạnh tay nhất của một thương hiệu nội địa tầm trung, trong bối cảnh áp lực về phát triển bền vững ngày càng lớn từ cả người tiêu dùng và các nhà đầu tư quốc tế."]
  },
  {
    id: 2,
    category: "tin-tuc",
    title: "Chuỗi cửa hàng pop-up của các nhà thiết kế trẻ mở rộng ra 5 thành phố",
    excerpt: "Mô hình gian hàng luân chuyển giúp các nhà thiết kế độc lập tiếp cận khách hàng mà không cần gánh chi phí thuê mặt bằng dài hạn.",
    image: "https://phunuvietnam.mediacdn.vn/179072216278405120/2025/9/29/photo-1759134614011-1759134616474418410408.jpg",
    date: "2026-06-28",
    author: "Minh Khuê",
    tags: ["thương hiệu Việt", "kinh doanh", "nhà thiết kế trẻ"],
    readTime: 3,
    content: ["Sau thành công tại hai thành phố lớn, mô hình cửa hàng pop-up dành riêng cho các nhà thiết kế trẻ sẽ mở rộng thêm ba điểm mới trong quý này.", "Mỗi gian hàng chỉ hoạt động từ hai đến bốn tuần, cho phép nhiều thương hiệu nhỏ luân phiên trưng bày sản phẩm mà không phải ký hợp đồng thuê dài hạn — vốn là rào cản lớn nhất với các nhà thiết kế mới ra trường.", "Ban tổ chức cho biết doanh thu trung bình mỗi gian hàng trong đợt thử nghiệm đầu tăng 40% so với kỳ vọng ban đầu, phần lớn nhờ hiệu ứng lan truyền trên mạng xã hội."]
  },
  {
    id: 3,
    category: "tin-tuc",
    title: "Ngành dệt may nội địa ghi nhận đơn hàng xuất khẩu tăng trở lại",
    excerpt: "Sau giai đoạn trầm lắng, số liệu mới cho thấy tín hiệu phục hồi rõ rệt ở nhóm hàng thời trang trung và cao cấp.",
    image: "https://i.ex-cdn.com/nhadautu.vn/files/news/2026/04/16/img-2253-1-0029.jpg",
    date: "2026-06-20",
    author: "Đức Anh",
    tags: ["xuất khẩu", "sản xuất", "kinh doanh"],
    readTime: 5,
    content: ["Số liệu công bố gần đây cho thấy đơn hàng xuất khẩu của nhóm doanh nghiệp dệt may vừa và nhỏ tăng đáng kể so với cùng kỳ, chủ yếu đến từ các thị trường có xu hướng chuyển dịch nguồn cung.", "Giới trong ngành nhận định đây là kết quả của quá trình đầu tư vào công nghệ dệt và nhuộm sạch hơn trong hai năm qua, giúp nhiều nhà máy đáp ứng được tiêu chuẩn khắt khe của các nhãn hàng quốc tế.", "Tuy vậy, thách thức về chi phí logistics và biến động giá nguyên liệu vẫn được xem là rủi ro cần theo dõi trong nửa cuối năm."]
  },
  {
    id: 4,
    category: "tin-tuc",
    title: "Ứng dụng thử đồ bằng AI bắt đầu được các sàn thương mại điện tử tích hợp",
    excerpt: "Công nghệ dựng hình 3D cho phép khách hàng xem trước trang phục trên cơ thể mình trước khi đặt mua.",
    image: "https://cdn.advertisingvietnam.com/image/2025/01/20/1737362832686.jpg",
    date: "2026-06-15",
    author: "Thu Hà",
    tags: ["công nghệ", "mua sắm trực tuyến"],
    readTime: 4,
    content: ["Một số sàn thương mại điện tử thời trang trong nước đã bắt đầu thử nghiệm tính năng 'thử đồ ảo', sử dụng ảnh chụp của người dùng để dựng mô hình 3D ước lượng dáng đứng và độ vừa vặn của trang phục.", "Tính năng này được kỳ vọng giúp giảm tỷ lệ hoàn trả hàng — một trong những chi phí lớn nhất của ngành bán lẻ trực tuyến.", "Dù độ chính xác chưa hoàn hảo, phản hồi ban đầu từ người dùng thử nghiệm khá tích cực, đặc biệt với nhóm sản phẩm áo khoác và váy dạ hội."]
  },
  {
    id: 5,
    category: "su-kien",
    title: "Tuần lễ Thời trang Mùa Thu khởi động với 24 nhà thiết kế tham gia",
    excerpt: "Sự kiện quy tụ dàn thiết kế đa thế hệ, từ những tên tuổi kỳ cựu đến các gương mặt vừa tốt nghiệp.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaAhq7EM9hTw_Fe7SJ1TtKf1ahOamaoXLkcWnpesaiB80YZeKxfQXUNMg&s=10",
    date: "2026-06-30",
    author: "Ban biên tập",
    tags: ["tuần lễ thời trang", "sàn diễn"],
    readTime: 3,
    featured: true,
    event: { date: "18–22/09/2026", location: "Trung tâm Hội chợ & Triển lãm, TP.HCM" },
    content: ["Chương trình năm nay mở rộng quy mô với 24 nhà thiết kế, tăng gần gấp đôi so với kỳ trước, trong đó có 9 gương mặt lần đầu xuất hiện trên sàn diễn chính thức.", "Chủ đề xuyên suốt được ban tổ chức hé lộ là 'Ký ức và Tái tạo' — tập trung vào việc tái sử dụng chất liệu cũ theo tinh thần đương đại.", "Vé xem show mở bán trực tuyến từ đầu tháng 8, với một số buổi diễn giới hạn số lượng khách tham dự để đảm bảo trải nghiệm."]
  },
  {
    id: 6,
    category: "su-kien",
    title: "Triển lãm 'Vải và Ký ức' trưng bày 200 mẫu thổ cẩm phục dựng",
    excerpt: "Không gian triển lãm tái hiện kỹ thuật dệt truyền thống của nhiều vùng miền, kết hợp trình diễn thời trang đương đại.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDMFVrFul7sl_2YWAS_30ZJWnYwgZN4QsplseiXKGiK4_1eVy4TifGhmu&s=10",
    date: "2026-06-25",
    author: "Lan Chi",
    tags: ["di sản", "triển lãm", "thổ cẩm"],
    readTime: 4,
    event: { date: "02–15/08/2026", location: "Bảo tàng Dân tộc học" },
    content: ["Triển lãm quy tụ hơn 200 mẫu vải và trang phục được phục dựng từ kỹ thuật dệt tay của nhiều cộng đồng dân tộc, phần lớn được sưu tầm trong ba năm gần đây.", "Điểm nhấn của sự kiện là hai buổi trình diễn thời trang kết hợp giữa nhà thiết kế đương đại và nghệ nhân dệt, nhằm cho thấy chất liệu truyền thống hoàn toàn có thể bước vào đời sống hiện đại.", "Ban tổ chức cho biết vé vào triển lãm miễn phí nhưng vé xem trình diễn thời trang có số lượng giới hạn."]
  },
  {
    id: 7,
    category: "su-kien",
    title: "Hội thảo 'Thời trang và AI' dành cho sinh viên thiết kế",
    excerpt: "Chuỗi hội thảo miễn phí giúp sinh viên tiếp cận công cụ dựng mẫu và mô phỏng chất liệu bằng trí tuệ nhân tạo.",
    image: "https://vluwebmedia.s3.ap-southeast-1.amazonaws.com/vlu_sinh_vien_nganh_thiet_ke_thoi_trang_thoa_suc_sang_tao_tai_hoi_thao_nghe_thuat_da_thu_cong_b_7e4b443c98.JPG",
    date: "2026-06-18",
    author: "Đức Anh",
    tags: ["giáo dục", "công nghệ", "hội thảo"],
    readTime: 3,
    event: { date: "10/07/2026", location: "Trực tuyến & tại 3 trường đại học" },
    content: ["Chuỗi hội thảo được tổ chức nhằm giúp sinh viên ngành thiết kế thời trang tiếp cận sớm với các công cụ mô phỏng chất liệu và dựng mẫu 3D — kỹ năng ngày càng được các studio thiết kế yêu cầu.", "Ngoài phần lý thuyết, sinh viên sẽ được thực hành trực tiếp trên phần mềm dựng mẫu để tạo ra một thiết kế hoàn chỉnh chỉ trong một buổi.", "Ban tổ chức dự kiến mở rộng chương trình ra thêm nhiều trường trong học kỳ tới nếu phản hồi tích cực."]
  },
  {
    id: 8,
    category: "su-kien",
    title: "Chợ phiên đồ cũ tái chế thu hút hơn 3.000 lượt khách trong 2 ngày",
    excerpt: "Sự kiện swap-shop giúp người tham gia đổi và mua lại quần áo cũ với mức giá tượng trưng, hướng đến tiêu dùng bền vững.",
    image: "
