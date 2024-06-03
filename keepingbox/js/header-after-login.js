import { loadHeader } from './header-loader.mjs';
import { loadFooter } from './footer-loader.mjs';
loadHeader();
loadFooter();

const logOutBtn = document.getElementById('log-out');
logOutBtn.addEventListener('click', function() {
  if(confirm("로그아웃 하시겠습니까?")) {
    alert("로그아웃 되었습니다. 다시 로그인 해 주세요.");
    location.href = 'main-before-login.html';
  } else {
    return false;
  }
});