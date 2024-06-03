export function loadHeader() {
  const header = document.createElement("header");

  header.innerHTML = `
  <div class="head-wrap">
    <h1><a href="index.html"><img src="img/logo.png" alt="logo"></a></h1>
    <nav>
      <ul class="cf">
        <li><a href="notice.html">공지사항</a></li>
        <li><a href="booking.html">예약하기</a></li>
        <li><a href="review.html">이용후기</a></li>
        <li class="mypage"><a href="javascript:void(0);">마이페이지</a>
          <ul class="mypage-sub">
            <li><a href="empty-booking.html">예약확인</a></li>
            <li><a href="mypage.html">회원정보</a></li>
            <li id="log-out"><a href="#" >로그아웃</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
  `;
  document.body.prepend(header);
}