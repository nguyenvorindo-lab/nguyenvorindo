/* ============================================================
   SỢI & MÀU — dữ liệu nội dung mẫu (dùng chung cho toàn bộ site)
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

/* Mỗi bài viết: id, category, title, excerpt, image (seed), date, author,
   tags[], readTime, content[] (đoạn văn), featured (bool),
   event: {date, location} — chỉ có ở category "su-kien" */
const ARTICLES = [
  // ---------------- TIN TỨC ----------------
  {
    id: 1,
    category: "tin-tuc",
    title: "Thương hiệu An Nhiên công bố dùng 100% vải tái chế từ năm sau",
    excerpt: "Một cam kết hiếm thấy từ một thương hiệu nội địa: toàn bộ dây chuyền sản xuất sẽ chuyển sang vải sợi tái chế trong vòng 12 tháng.",
    image: "seed/annhien-1/900/600",
    date: "2026-07-01",
    author: "Thu Hà",
    tags: ["bền vững", "thương hiệu Việt", "sản xuất"],
    readTime: 4,
    featured: true,
    content: [
      "Trong buổi họp báo sáng thứ Ba, đại diện thương hiệu An Nhiên khẳng định đây là bước đi bắt buộc chứ không phải một chiến dịch truyền thông. Toàn bộ nguyên liệu vải cotton mới sẽ được thay thế bằng sợi tái chế từ chai nhựa và vải vụn thu gom trong nước.",
      "Quyết định này đến sau hai năm thử nghiệm âm thầm với ba dòng sản phẩm giới hạn, vốn nhận được phản hồi tích cực từ khách hàng trẻ vốn ngày càng quan tâm đến nguồn gốc vật liệu.",
      "Giá thành sản phẩm dự kiến tăng nhẹ khoảng 8-10%, nhưng thương hiệu tin rằng đây là mức chấp nhận được khi so với lợi ích môi trường lâu dài. Nhiều đối tác bán lẻ cũng đã cam kết đồng hành trong giai đoạn chuyển đổi.",
      "Đây được xem là một trong những động thái mạnh tay nhất của một thương hiệu nội địa tầm trung, trong bối cảnh áp lực về phát triển bền vững ngày càng lớn từ cả người tiêu dùng và các nhà đầu tư quốc tế.",
    ],
  },
  {
    id: 2,
    category: "tin-tuc",
    title: "Chuỗi cửa hàng pop-up của các nhà thiết kế trẻ mở rộng ra 5 thành phố",
    excerpt: "Mô hình gian hàng luân chuyển giúp các nhà thiết kế độc lập tiếp cận khách hàng mà không cần gánh chi phí thuê mặt bằng dài hạn.",
    image: "seed/popup-2/900/600",
    date: "2026-06-28",
    author: "Minh Khuê",
    tags: ["thương hiệu Việt", "kinh doanh", "nhà thiết kế trẻ"],
    readTime: 3,
    content: [
      "Sau thành công tại hai thành phố lớn, mô hình cửa hàng pop-up dành riêng cho các nhà thiết kế trẻ sẽ mở rộng thêm ba điểm mới trong quý này.",
      "Mỗi gian hàng chỉ hoạt động từ hai đến bốn tuần, cho phép nhiều thương hiệu nhỏ luân phiên trưng bày sản phẩm mà không phải ký hợp đồng thuê dài hạn — vốn là rào cản lớn nhất với các nhà thiết kế mới ra trường.",
      "Ban tổ chức cho biết doanh thu trung bình mỗi gian hàng trong đợt thử nghiệm đầu tăng 40% so với kỳ vọng ban đầu, phần lớn nhờ hiệu ứng lan truyền trên mạng xã hội.",
    ],
  },
  {
    id: 3,
    category: "tin-tuc",
    title: "Ngành dệt may nội địa ghi nhận đơn hàng xuất khẩu tăng trở lại",
    excerpt: "Sau giai đoạn trầm lắng, số liệu mới cho thấy tín hiệu phục hồi rõ rệt ở nhóm hàng thời trang trung và cao cấp.",
    image: "seed/textile-3/900/600",
    date: "2026-06-20",
    author: "Đức Anh",
    tags: ["xuất khẩu", "sản xuất", "kinh doanh"],
    readTime: 5,
    content: [
      "Số liệu công bố gần đây cho thấy đơn hàng xuất khẩu của nhóm doanh nghiệp dệt may vừa và nhỏ tăng đáng kể so với cùng kỳ, chủ yếu đến từ các thị trường có xu hướng chuyển dịch nguồn cung.",
      "Giới trong ngành nhận định đây là kết quả của quá trình đầu tư vào công nghệ dệt và nhuộm sạch hơn trong hai năm qua, giúp nhiều nhà máy đáp ứng được tiêu chuẩn khắt khe của các nhãn hàng quốc tế.",
      "Tuy vậy, thách thức về chi phí logistics và biến động giá nguyên liệu vẫn được xem là rủi ro cần theo dõi trong nửa cuối năm.",
    ],
  },
  {
    id: 4,
    category: "tin-tuc",
    title: "Ứng dụng thử đồ bằng AI bắt đầu được các sàn thương mại điện tử tích hợp",
    excerpt: "Công nghệ dựng hình 3D cho phép khách hàng xem trước trang phục trên cơ thể mình trước khi đặt mua.",
    image: "seed/ai-tryon-4/900/600",
    date: "2026-06-15",
    author: "Thu Hà",
    tags: ["công nghệ", "mua sắm trực tuyến"],
    readTime: 4,
    content: [
      "Một số sàn thương mại điện tử thời trang trong nước đã bắt đầu thử nghiệm tính năng 'thử đồ ảo', sử dụng ảnh chụp của người dùng để dựng mô hình 3D ước lượng dáng đứng và độ vừa vặn của trang phục.",
      "Tính năng này được kỳ vọng giúp giảm tỷ lệ hoàn trả hàng — một trong những chi phí lớn nhất của ngành bán lẻ trực tuyến.",
      "Dù độ chính xác chưa hoàn hảo, phản hồi ban đầu từ người dùng thử nghiệm khá tích cực, đặc biệt với nhóm sản phẩm áo khoác và váy dạ hội.",
    ],
  },

  // ---------------- SỰ KIỆN ----------------
  {
    id: 5,
    category: "su-kien",
    title: "Tuần lễ Thời trang Mùa Thu khởi động với 24 nhà thiết kế tham gia",
    excerpt: "Sự kiện quy tụ dàn thiết kế đa thế hệ, từ những tên tuổi kỳ cựu đến các gương mặt vừa tốt nghiệp.",
    image: "seed/fashionweek-5/900/600",
    date: "2026-06-30",
    author: "Ban biên tập",
    tags: ["tuần lễ thời trang", "sàn diễn"],
    readTime: 3,
    featured: true,
    event: { date: "18–22/09/2026", location: "Trung tâm Hội chợ & Triển lãm, TP.HCM" },
    content: [
      "Chương trình năm nay mở rộng quy mô với 24 nhà thiết kế, tăng gần gấp đôi so với kỳ trước, trong đó có 9 gương mặt lần đầu xuất hiện trên sàn diễn chính thức.",
      "Chủ đề xuyên suốt được ban tổ chức hé lộ là 'Ký ức và Tái tạo' — tập trung vào việc tái sử dụng chất liệu cũ theo tinh thần đương đại.",
      "Vé xem show mở bán trực tuyến từ đầu tháng 8, với một số buổi diễn giới hạn số lượng khách tham dự để đảm bảo trải nghiệm.",
    ],
  },
  {
    id: 6,
    category: "su-kien",
    title: "Triển lãm 'Vải và Ký ức' trưng bày 200 mẫu thổ cẩm phục dựng",
    excerpt: "Không gian triển lãm tái hiện kỹ thuật dệt truyền thống của nhiều vùng miền, kết hợp trình diễn thời trang đương đại.",
    image: "seed/exhibit-6/900/600",
    date: "2026-06-25",
    author: "Lan Chi",
    tags: ["di sản", "triển lãm", "thổ cẩm"],
    readTime: 4,
    event: { date: "02–15/08/2026", location: "Bảo tàng Dân tộc học" },
    content: [
      "Triển lãm quy tụ hơn 200 mẫu vải và trang phục được phục dựng từ kỹ thuật dệt tay của nhiều cộng đồng dân tộc, phần lớn được sưu tầm trong ba năm gần đây.",
      "Điểm nhấn của sự kiện là hai buổi trình diễn thời trang kết hợp giữa nhà thiết kế đương đại và nghệ nhân dệt, nhằm cho thấy chất liệu truyền thống hoàn toàn có thể bước vào đời sống hiện đại.",
      "Ban tổ chức cho biết vé vào triển lãm miễn phí nhưng vé xem trình diễn thời trang có số lượng giới hạn.",
    ],
  },
  {
    id: 7,
    category: "su-kien",
    title: "Hội thảo 'Thời trang và AI' dành cho sinh viên thiết kế",
    excerpt: "Chuỗi hội thảo miễn phí giúp sinh viên tiếp cận công cụ dựng mẫu và mô phỏng chất liệu bằng trí tuệ nhân tạo.",
    image: "seed/workshop-7/900/600",
    date: "2026-06-18",
    author: "Đức Anh",
    tags: ["giáo dục", "công nghệ", "hội thảo"],
    readTime: 3,
    event: { date: "10/07/2026", location: "Trực tuyến & tại 3 trường đại học" },
    content: [
      "Chuỗi hội thảo được tổ chức nhằm giúp sinh viên ngành thiết kế thời trang tiếp cận sớm với các công cụ mô phỏng chất liệu và dựng mẫu 3D — kỹ năng ngày càng được các studio thiết kế yêu cầu.",
      "Ngoài phần lý thuyết, sinh viên sẽ được thực hành trực tiếp trên phần mềm dựng mẫu để tạo ra một thiết kế hoàn chỉnh chỉ trong một buổi.",
      "Ban tổ chức dự kiến mở rộng chương trình ra thêm nhiều trường trong học kỳ tới nếu phản hồi tích cực.",
    ],
  },
  {
    id: 8,
    category: "su-kien",
    title: "Chợ phiên đồ cũ tái chế thu hút hơn 3.000 lượt khách trong 2 ngày",
    excerpt: "Sự kiện swap-shop giúp người tham gia đổi và mua lại quần áo cũ với mức giá tượng trưng, hướng đến tiêu dùng bền vững.",
    image: "seed/swapshop-8/900/600",
    date: "2026-06-10",
    author: "Minh Khuê",
    tags: ["bền vững", "đồ cũ", "cộng đồng"],
    readTime: 3,
    event: { date: "Đã diễn ra 07–08/06/2026", location: "Công viên trung tâm" },
    content: [
      "Sự kiện chợ phiên lần này thu hút số lượng khách tham dự đông hơn dự kiến, buộc ban tổ chức phải kéo dài thời gian mở cửa trong ngày thứ hai.",
      "Ngoài hoạt động đổi đồ, sự kiện còn có góc sửa chữa quần áo miễn phí, giúp kéo dài tuổi thọ trang phục cũ thay vì bỏ đi.",
      "Nhiều người tham gia chia sẻ đây là lần đầu họ thử hình thức mua sắm không dùng tiền mặt trực tiếp mà quy đổi qua điểm thưởng.",
    ],
  },

  // ---------------- XU HƯỚNG ----------------
  {
    id: 9,
    category: "xu-huong",
    title: "Gam màu đất nung trở lại thống trị mùa Thu năm nay",
    excerpt: "Từ sàn diễn đến đường phố, sắc cam đất, nâu đỏ và terracotta xuất hiện dày đặc trong các bộ sưu tập mới.",
    image: "seed/terracotta-9/900/600",
    date: "2026-07-02",
    author: "Lan Chi",
    tags: ["màu sắc", "mùa thu", "sàn diễn"],
    readTime: 3,
    featured: true,
    content: [
      "Không phải ngẫu nhiên mà gam màu đất nung xuất hiện ở gần một phần ba các bộ sưu tập mùa Thu năm nay — đây là gam màu vừa ấm áp vừa dễ phối, phù hợp với xu hướng quay về sự tối giản có cảm xúc.",
      "Trên đường phố, sắc terracotta thường được kết hợp với chất liệu da lộn và len thô để tăng cảm giác 'chạm' — một yếu tố ngày càng được người mặc chú trọng bên cạnh hình ảnh.",
      "Các chuyên gia dự đoán gam màu này sẽ còn kéo dài sang mùa lễ hội cuối năm, đặc biệt trong nhóm sản phẩm áo khoác và túi da.",
    ],
  },
  {
    id: 10,
    category: "xu-huong",
    title: "Quần ống rộng 'wide-leg' áp đảo phong cách công sở",
    excerpt: "Dáng quần thoải mái dần thay thế quần suông ôm truyền thống trong tủ đồ đi làm của giới trẻ.",
    image: "seed/wideleg-10/900/600",
    date: "2026-06-27",
    author: "Thu Hà",
    tags: ["công sở", "dáng quần", "streetstyle"],
    readTime: 3,
    content: [
      "Không còn là lựa chọn 'chỉ hợp đi chơi', quần ống rộng đang len lỏi vào tủ đồ công sở nhờ cách phối cùng áo blazer form vừa và giày mũi nhọn.",
      "Nhiều thương hiệu công sở nội địa đã nhanh chóng ra mắt các phiên bản wide-leg bằng vải ít nhăn, đáp ứng nhu cầu di chuyển nhiều trong ngày.",
      "Điểm cộng của dáng quần này là khả năng che khuyết điểm vòng 3, vòng đùi — lý do khiến nó được yêu thích rộng rãi hơn quần suông truyền thống.",
    ],
  },
  {
    id: 11,
    category: "xu-huong",
    title: "Phụ kiện 'chunky' — khi càng to càng được yêu thích",
    excerpt: "Vòng cổ, khuyên tai và giày đế bản lớn tiếp tục là điểm nhấn không thể thiếu trong các set đồ tối giản.",
    image: "seed/chunky-11/900/600",
    date: "2026-06-22",
    author: "Minh Khuê",
    tags: ["phụ kiện", "streetstyle"],
    readTime: 2,
    content: [
      "Xu hướng phụ kiện kích thước lớn tiếp tục là cách nhanh nhất để một set đồ tối giản trở nên có điểm nhấn, không cần thay đổi cả trang phục.",
      "Đặc biệt, giày đế bản lớn kết hợp cùng quần jeans ống suông đang là công thức phối đồ được lặp lại nhiều nhất trên các nền tảng mạng xã hội trong tháng qua.",
    ],
  },
  {
    id: 12,
    category: "xu-huong",
    title: "Vải denim loang màu 'acid wash' quay lại sau hai thập kỷ",
    excerpt: "Chất liệu từng gắn liền với thập niên 90 bất ngờ trở thành từ khóa tìm kiếm tăng mạnh trên các sàn mua sắm.",
    image: "seed/acidwash-12/900/600",
    date: "2026-06-14",
    author: "Đức Anh",
    tags: ["denim", "hoài niệm"],
    readTime: 3,
    content: [
      "Sau nhiều năm vắng bóng, denim loang màu acid wash bất ngờ quay lại nhờ làn sóng thời trang hoài niệm những năm 90 lan rộng trên mạng xã hội.",
      "Khác với bản gốc thường đi kèm dáng ôm, phiên bản hiện tại được cắt may theo dáng rộng, dễ mặc hơn với số đông.",
      "Nhiều cửa hàng đồ cũ ghi nhận lượng tìm mua áo khoác denim acid wash tăng rõ rệt trong tháng gần đây.",
    ],
  },

  // ---------------- LÀM ĐẸP ----------------
  {
    id: 13,
    category: "lam-dep",
    title: "Trang điểm 'da căng bóng' tiếp tục lên ngôi sau mùa hè",
    excerpt: "Phong cách lớp nền mỏng, tôn da thật thay thế dần kiểu makeup phủ dày, matte hoàn toàn.",
    image: "seed/dewy-13/900/600",
    date: "2026-07-03",
    author: "Lan Chi",
    tags: ["trang điểm", "chăm sóc da"],
    readTime: 3,
    featured: true,
    content: [
      "Phong cách trang điểm tôn da thật — với lớp nền mỏng, độ bóng nhẹ tự nhiên — tiếp tục được ưa chuộng nhờ cảm giác 'ít can thiệp' mà vẫn rạng rỡ.",
      "Bí quyết để đạt được hiệu ứng này không nằm ở kem nền, mà ở bước chăm sóc da trước đó: dưỡng ẩm đủ và không bỏ qua bước xịt khoáng cố định lớp nền.",
      "Các chuyên gia lưu ý phong cách này phù hợp nhất với da đã được cấp ẩm tốt; da quá khô nên ưu tiên kem nền có thêm dưỡng chất trước khi thử.",
    ],
  },
  {
    id: 14,
    category: "lam-dep",
    title: "Chăm sóc tóc bằng dầu thực vật lên ngôi nhờ xu hướng 'làm đẹp chậm'",
    excerpt: "Nhiều người tiêu dùng chuyển sang dùng dầu dừa, dầu argan nguyên chất thay cho các sản phẩm tóc công nghiệp.",
    image: "seed/hairoil-14/900/600",
    date: "2026-06-26",
    author: "Thu Hà",
    tags: ["chăm sóc tóc", "làm đẹp chậm"],
    readTime: 3,
    content: [
      "Xu hướng 'làm đẹp chậm' — ưu tiên sản phẩm ít thành phần, quy trình đơn giản — đang khiến nhiều người quay lại với các loại dầu thực vật quen thuộc như dầu dừa, dầu argan.",
      "Khác với sản phẩm công nghiệp, dầu nguyên chất cần thời gian ủ lâu hơn để thấy hiệu quả, nhưng được đánh giá lành tính hơn với tóc đã qua xử lý hóa chất.",
      "Chuyên gia khuyên chỉ nên dùng lượng nhỏ và tập trung vào phần ngọn tóc để tránh gây bết ở da đầu.",
    ],
  },
  {
    id: 15,
    category: "lam-dep",
    title: "Chống nắng dạng xịt được ưa chuộng nhờ tiện lợi khi dặm lại",
    excerpt: "Định dạng xịt giúp việc bôi lại kem chống nắng giữa ngày trở nên dễ dàng hơn, đặc biệt khi đã trang điểm.",
    image: "seed/sunscreen-15/900/600",
    date: "2026-06-19",
    author: "Minh Khuê",
    tags: ["chăm sóc da", "chống nắng"],
    readTime: 2,
    content: [
      "Một trong những lý do khiến nhiều người bỏ qua việc dặm lại kem chống nắng giữa ngày là sợ làm trôi lớp trang điểm — và đây chính là vấn đề mà định dạng xịt được sinh ra để giải quyết.",
      "Dù tiện lợi, chuyên gia da liễu khuyến cáo cần xịt đủ lượng và xoa đều để đảm bảo độ che phủ, tránh xịt qua loa khiến hiệu quả chống nắng không đạt như công bố.",
    ],
  },
  {
    id: 16,
    category: "lam-dep",
    title: "Serum chứa lợi khuẩn — bước chăm da mới được nhiều thương hiệu ra mắt",
    excerpt: "Các sản phẩm hỗ trợ hệ vi sinh trên da đang trở thành từ khóa được tìm kiếm nhiều trong ngành mỹ phẩm.",
    image: "seed/probiotic-16/900/600",
    date: "2026-06-11",
    author: "Đức Anh",
    tags: ["chăm sóc da", "công nghệ mỹ phẩm"],
    readTime: 4,
    content: [
      "Sau giai đoạn tập trung vào việc 'tẩy sạch' bằng các hoạt chất mạnh, ngành mỹ phẩm đang chuyển hướng sang các sản phẩm hỗ trợ cân bằng hệ vi sinh tự nhiên trên da.",
      "Serum chứa lợi khuẩn hoặc hậu sinh học được quảng cáo giúp da giảm kích ứng và phục hồi hàng rào bảo vệ tốt hơn, đặc biệt với da nhạy cảm.",
      "Tuy nhiên, các bác sĩ da liễu lưu ý người dùng nên thử trên diện nhỏ trước và không nên kỳ vọng hiệu quả tức thì như các sản phẩm tẩy tế bào chết hóa học.",
    ],
  },
];

/* Bình luận mẫu ban đầu cho một số bài viết (id bài viết -> danh sách bình luận) */
const SEED_COMMENTS = {
  1: [
    { name: "Ngọc Anh", time: "2 giờ trước", text: "Ủng hộ hướng đi này, mong các thương hiệu khác cũng làm theo!", likes: 12 },
    { name: "Hoàng Long", time: "5 giờ trước", text: "Giá tăng 8-10% cũng hợp lý, miễn chất lượng vẫn ổn.", likes: 4 },
  ],
  9: [
    { name: "Bích Trâm", time: "1 giờ trước", text: "Mình vừa mua một áo khoác màu này, đúng là dễ phối thật.", likes: 7 },
  ],
  13: [
    { name: "Thảo My", time: "3 giờ trước", text: "Bài viết hữu ích, mình sẽ thử đổi quy trình dưỡng da trước khi trang điểm.", likes: 9 },
    { name: "Quang Huy", time: "hôm qua", text: "Da dầu có hợp với kiểu trang điểm này không nhỉ?", likes: 2 },
  ],
};

function imgUrl(seedPath) {
  return `https://picsum.photos/${seedPath}`;
}
