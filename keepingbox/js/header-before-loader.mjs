export function loadHeaderBefore() {
  const header = document.createElement("header");

  header.innerHTML = `
  <div class="head-wrap">
    <h1><a href="main-before-login.html"><img src="img/logo.png" alt="logo"></a></h1>
    <nav>
      <ul class="cf">
        <li><a href="notice.html">공지사항</a></li>
        <li><a href="booking.html" class="block-reservation">예약하기</a></li>
        <li><a href="review.html" class="block-reservation">이용후기</a></li>
        <li><a href="login.html">로그인</a></li>
      </ul>
    </nav>
  </div>
  `;
  document.body.prepend(header);
}