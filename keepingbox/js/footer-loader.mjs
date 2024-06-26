export function loadFooter() {
  // footer 요소 생성
  const footer = document.createElement("footer");

  footer.innerHTML = `
  <div class="cf">
    <ul class="footer-left">
      <li><span class="en">Keeping<br>Box</span></li>
      <li>(주)Keeping Box | 사업자등록번호: 123-45-67899 | 대표이사: 김김김</li>
      <li>주소: 서울특별시 마포구 아현동 백범로</li>
      <li>COPYRIGHTⓒ 2022 KEEPINGBOX KOREA INC. ALL RIGHTS RESERVED</li>
    </ul>
    <ul class="footer-right">
      <li>고객센터 1111-1111</li>
      <li>월~금 9:00~18:00 (공휴일 · 주말 휴무)</li>
    </ul>
  </div>
  `;
  
  // 생성한 footer 삽입
  document.body.appendChild(footer);
}