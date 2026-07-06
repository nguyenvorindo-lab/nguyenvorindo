/* ============================================================
   MODE. — tương tác phía client bằng jQuery
   ============================================================ */

/* ---------- trạng thái bình luận trong bộ nhớ (mất khi tải lại trang) ---------- */
const SESSION_COMMENTS = {}; // { articleId: [ {name,time,text,likes} ] }

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function catColor(catKey) { return CATEGORIES[catKey] ? CATEGORIES[catKey].color : "berry"; }
function catLabel(catKey) { return CATEGORIES[catKey] ? CATEGORIES[catKey].label : catKey; }
function catPage(catKey)  { return CATEGORIES[catKey] ? CATEGORIES[catKey].page : "index.html"; }

/* ---------- templates ---------- */
function cardTemplate(a) {
  return `
  <article class="card fade-item" data-tags="${a.tags.join('|')}">
    <a href="bai-viet.html?id=${a.id}">
      <div class="card-figure"><img src="${imgUrl(a.image)}" alt="${a.title}" loading="lazy"></div>
      <div class="card-top">
        <span class="tag tag--${catColor(a.category)}">${catLabel(a.category)}</span>
        <span class="card-meta">${a.readTime} phút đọc</span>
      </div>
      <h3>${a.title}</h3>
      <p class="excerpt">${a.excerpt}</p>
      <div class="card-meta">${formatDate(a.date)} · ${a.author}</div>
    </a>
  </article>`;
}

function rowTemplate(a) {
  return `
  <a class="card-row" href="bai-viet.html?id=${a.id}">
    <div class="thumb"><img src="${imgUrl(a.image)}" alt="${a.title}"></div>
    <div>
      <span class="tag tag--${catColor(a.category)}" style="margin-bottom:6px;">${catLabel(a.category)}</span>
      <h4>${a.title}</h4>
      <div class="card-meta">${formatDate(a.date)}</div>
    </div>
  </a>`;
}

function eventCardTemplate(a) {
  const info = a.event ? a.event.date : "";
  return `
  <article class="card fade-item" data-tags="${a.tags.join('|')}">
    <a href="bai-viet.html?id=${a.id}">
      <div class="card-figure"><img src="${imgUrl(a.image)}" alt="${a.title}" loading="lazy"></div>
      <div class="card-top">
        <span class="event-date-badge">${info}</span>
      </div>
      <h3>${a.title}</h3>
      <p class="excerpt">${a.excerpt}</p>
      <div class="card-meta">${a.event ? a.event.location : ""}</div>
    </a>
  </article>`;
}

function templateFor(a) { return a.category === "su-kien" ? eventCardTemplate(a) : cardTemplate(a); }

/* ============================================================
   KHUNG CHUNG: masthead, search, active nav, back-to-top, newsletter
   ============================================================ */
$(function () {
  /* đổ bóng khi cuộn */
  $(window).on("scroll", function () {
    $(".masthead").toggleClass("is-scrolled", $(window).scrollTop() > 6);
    $("#backToTop").fadeToggle($(window).scrollTop() > 500 ? true : false);
    updateReadingProgress();
  });

  /* menu di động */
  $(".burger").on("click", function () {
    $(".nav-row").toggleClass("is-open");
  });

  /* ô tìm kiếm */
  $(".search-toggle").on("click", function () {
    $(".search-panel").toggleClass("is-open");
    if ($(".search-panel").hasClass("is-open")) $(".search-panel input").focus();
  });

  $(".search-panel input").on("input", function () {
    const q = $(this).val().trim().toLowerCase();
    const $res = $(".search-results");
    if (!q) { $res.empty().hide(); return; }
    const matches = ARTICLES.filter(a => a.title.toLowerCase().includes(q) || a.tags.some(t => t.toLowerCase().includes(q))).slice(0, 6);
    $res.empty();
    if (matches.length === 0) {
      $res.append(`<div class="sr-empty">Không tìm thấy bài viết phù hợp với “${q}”.</div>`);
    } else {
      matches.forEach(a => {
        $res.append(`<a href="bai-viet.html?id=${a.id}">
            <img src="${imgUrl(a.image)}" style="width:48px;height:48px;object-fit:cover;border-radius:3px;flex-shrink:0;">
            <span><span class="sr-title">${a.title}</span><br><span class="card-meta">${catLabel(a.category)}</span></span>
          </a>`);
      });
    }
    $res.show();
  });

  /* đánh dấu mục menu đang active theo tên file hiện tại */
  const current = location.pathname.split("/").pop() || "index.html";
  $(".nav a").each(function () {
    if ($(this).attr("href") === current) $(this).addClass("active");
  });

  /* nút lên đầu trang */
  $("#backToTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

  /* form đăng ký nhận tin */
  $(".newsletter-form").on("submit", function (e) {
    e.preventDefault();
    const $input = $(this).find("input");
    const val = $input.val().trim();
    const $msg = $(this).siblings(".newsletter-msg").length ? $(this).siblings(".newsletter-msg") : $(this).parent().find(".newsletter-msg");
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    if (!isEmail) {
      $msg.text("Vui lòng nhập một địa chỉ email hợp lệ.").css("color", "#E6A5B0").addClass("show");
      return;
    }
    $msg.text(`Đã đăng ký thành công với ${val}. Cảm ơn bạn đã đồng hành cùng MODE.!`).css("color", "#EBD8A6").addClass("show");
    $input.val("");
  });

  if (typeof window.PageInit === "function") window.PageInit();
});

function updateReadingProgress() {
  const $bar = $(".progress-bar");
  if (!$bar.length) return;
  const doc = document.documentElement;
  const scrollTop = window.scrollY || doc.scrollTop;
  const height = doc.scrollHeight - doc.clientHeight;
  const pct = height > 0 ? (scrollTop / height) * 100 : 0;
  $bar.css("width", pct + "%");
}

/* ============================================================
   TRANG CHỦ
   ============================================================ */
function renderHome() {
  const featured = ARTICLES.find(a => a.featured) || ARTICLES[0];
  $("#hero-eyebrow").text("Nổi bật hôm nay").css("color", `var(--${catColor(featured.category)})`);
  $("#hero-title").text(featured.title);
  $("#hero-excerpt").text(featured.excerpt);
  $("#hero-meta").text(`${catLabel(featured.category)} · ${formatDate(featured.date)} · ${featured.author}`);
  $("#hero-link").attr("href", `bai-viet.html?id=${featured.id}`);
  $("#hero-img").attr("src", imgUrl(featured.image)).attr("alt", featured.title);
  $("#hero-cap").text(featured.excerpt.slice(0, 70) + "…");

  Object.keys(CATEGORIES).forEach(key => {
    const items = ARTICLES.filter(a => a.category === key).slice(0, 3);
    const $grid = $(`#home-${key}`);
    $grid.empty();
    items.forEach(a => $grid.append(templateFor(a)));
  });
}

/* ============================================================
   TRANG CHỦ ĐỀ (tin-tuc / su-kien / xu-huong / lam-dep)
   ============================================================ */
function renderCategoryPage(catKey) {
  const cat = CATEGORIES[catKey];
  const items = ARTICLES.filter(a => a.category === catKey).sort((a, b) => new Date(b.date) - new Date(a.date));

  $("#cat-eyebrow").text("Chủ đề").css("color", `var(--${cat.color})`);
  $("#cat-title").text(cat.label);
  $("#cat-desc").text(cat.desc);
  document.title = `${cat.label} — MODE.`;

  /* chip lọc theo tag */
  const allTags = [...new Set(items.flatMap(a => a.tags))];
  const $filters = $("#filters");
  $filters.empty();
  $filters.append(`<button class="chip is-active" data-tag="all">Tất cả</button>`);
  allTags.forEach(t => $filters.append(`<button class="chip" data-tag="${t}">${t}</button>`));

  const PAGE_SIZE = 6;
  let shown = PAGE_SIZE;

  function draw() {
    $("#no-results").hide();
    const $grid = $("#cat-grid");
    $grid.empty();
    items.forEach((a, i) => {
      const el = $(templateFor(a));
      if (i >= shown) el.addClass("is-hidden");
      $grid.append(el);
    });
    $("#loadmore-btn").toggle(shown < items.length);
  }
  draw();

  $filters.on("click", ".chip", function () {
    $filters.find(".chip").removeClass("is-active");
    $(this).addClass("is-active");
    const tag = $(this).data("tag");
    shown = PAGE_SIZE;
    draw();
    if (tag !== "all") filterByTag(tag);
  });

  function filterByTag(tag) {
    let visibleCount = 0;
    $("#cat-grid .fade-item").each(function () {
      const tags = ($(this).data("tags") || "").split("|");
      const match = tag === "all" || tags.includes(tag);
      if (match) { $(this).removeClass("is-hidden"); visibleCount++; }
      else { $(this).addClass("is-hidden"); }
    });
    $("#no-results").toggle(visibleCount === 0);
    $("#loadmore-btn").hide();
  }

  $("#loadmore-btn").on("click", function () {
    shown += PAGE_SIZE;
    const activeTag = $filters.find(".chip.is-active").data("tag");
    draw();
    if (activeTag !== "all") filterByTag(activeTag);
  });

  /* sidebar: xu hướng nhiều người đọc (chọn ngẫu nhiên có kiểm soát từ toàn site) */
  const trending = ARTICLES.filter(a => a.category !== catKey).slice(0, 4);
  const $trend = $("#sidebar-trending");
  $trend.empty();
  trending.forEach(a => $trend.append(rowTemplate(a)));
}

/* ============================================================
   TRANG BÀI VIẾT
   ============================================================ */
function renderArticlePage() {
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get("id"), 10) || ARTICLES[0].id;
  const article = ARTICLES.find(a => a.id === id) || ARTICLES[0];
  const cat = CATEGORIES[article.category];

  document.title = `${article.title} — MODE.`;
  $("#art-tag").text(cat.label).attr("class", `tag tag--${cat.color}`);
  $("#art-title").text(article.title);
  $("#art-meta").html(`Tác giả <b>${article.author}</b> &nbsp;·&nbsp; ${formatDate(article.date)} &nbsp;·&nbsp; ${article.readTime} phút đọc`);
  $("#art-img").attr("src", imgUrl(article.image)).attr("alt", article.title);

  if (article.event) {
    $("#event-box").html(`<b>Thời gian:</b> ${article.event.date} &nbsp;&nbsp; <b>Địa điểm:</b> ${article.event.location}`).show();
  } else {
    $("#event-box").hide();
  }

  const $body = $("#art-body");
  $body.empty();
  article.content.forEach(p => $body.append(`<p>${p}</p>`));

  const $tags = $("#art-tags");
  $tags.empty();
  article.tags.forEach(t => $tags.append(`<span class="tag tag--${cat.color}">${t}</span>`));

  renderRelated(article);
  renderComments(article.id);

  $("#share-fb, #share-x, #share-copy").off("click").on("click", function (e) {
    e.preventDefault();
    const id2 = $(this).attr("id");
    if (id2 === "share-copy") {
      navigator.clipboard?.writeText(location.href);
      $(this).text("Đã sao chép ✓");
      setTimeout(() => $(this).text("Sao chép liên kết"), 1500);
    } else {
      alert("Đây là bản demo — chức năng chia sẻ sẽ mở cửa sổ mạng xã hội tương ứng.");
    }
  });
}

function renderRelated(article) {
  let related = ARTICLES.filter(a => a.id !== article.id && a.category === article.category);
  related = related.filter(a => a.tags.some(t => article.tags.includes(t))).concat(related).filter((v, i, arr) => arr.findIndex(x => x.id === v.id) === i);
  if (related.length < 4) {
    const others = ARTICLES.filter(a => a.id !== article.id && !related.some(r => r.id === a.id));
    related = related.concat(others);
  }
  related = related.slice(0, 4);

  const $wrap = $("#related-grid");
  $wrap.empty();
  related.forEach(a => $wrap.append(templateFor(a)));
}

/* ---------- bình luận ---------- */
function allCommentsFor(id) {
  const seed = SEED_COMMENTS[id] || [];
  const extra = SESSION_COMMENTS[id] || [];
  return extra.concat(seed);
}

function renderComments(id) {
  const list = allCommentsFor(id);
  $("#comment-count").text(list.length);
  const $list = $("#comment-list");
  $list.empty();
  if (list.length === 0) {
    $list.append(`<p class="no-results">Chưa có bình luận nào. Hãy là người đầu tiên chia sẻ ý kiến!</p>`);
  } else {
    list.forEach(c => $list.append(commentTemplate(c)));
  }

  $("#comment-form").off("submit").on("submit", function (e) {
    e.preventDefault();
    const name = $("#c-name").val().trim();
    const text = $("#c-text").val().trim();
    const $msg = $("#comment-form-msg");
    if (!name || !text) {
      $msg.text("Vui lòng nhập đầy đủ tên và nội dung bình luận.").removeClass("ok").addClass("err show");
      return;
    }
    const comment = { name, time: "vừa xong", text, likes: 0 };
    SESSION_COMMENTS[id] = SESSION_COMMENTS[id] || [];
    SESSION_COMMENTS[id].unshift(comment);

    if ($("#comment-list .no-results").length) $("#comment-list").empty();
    $(commentTemplate(comment)).addClass("new-comment").prependTo("#comment-list");
    $("#comment-count").text(allCommentsFor(id).length);
    $msg.text("Đã đăng bình luận của bạn. Cảm ơn bạn đã chia sẻ!").removeClass("err").addClass("ok show");
    $("#c-name, #c-text").val("");
    setTimeout(() => $msg.removeClass("show"), 3000);
  });
}

function commentTemplate(c) {
  const initial = c.name.trim().charAt(0).toUpperCase() || "?";
  return `
  <div class="comment-item">
    <div class="avatar">${initial}</div>
    <div class="comment-body">
      <div class="comment-top">
        <span class="comment-name">${escapeHtml(c.name)}</span>
        <span class="comment-time">${c.time}</span>
      </div>
      <p class="comment-text">${escapeHtml(c.text)}</p>
      <div class="comment-actions">
        <button class="like-btn"><span class="like-icon">♡</span> <span class="like-count">${c.likes}</span> thích</button>
      </div>
    </div>
  </div>`;
}

$(document).on("click", ".like-btn", function () {
  const $btn = $(this);
  const liked = $btn.hasClass("liked");
  const $count = $btn.find(".like-count");
  let n = parseInt($count.text(), 10);
  if (liked) { n -= 1; $btn.removeClass("liked"); $btn.find(".like-icon").text("♡"); }
  else { n += 1; $btn.addClass("liked"); $btn.find(".like-icon").text("♥"); }
  $count.text(n);
});

function escapeHtml(str) {
  return $("<div>").text(str).html();
}
