import { loadHeaderBefore } from './header-before-loader.mjs';
import { loadFooter } from './footer-loader.mjs';
loadHeaderBefore();
loadFooter();

// 로그인 후 사용 가능
const blockReservation = document.querySelectorAll(".block-reservation");
for(let i=0; i < blockReservation.length; i++) {    
  blockReservation[i].addEventListener("click", function(e) {
    e.preventDefault();
    alert("로그인 후 사용 가능합니다.");
  });
};

// 로그인
const loginBtn = document.getElementById('btn');
loginBtn.addEventListener('click', function() {
  let id = document.getElementById('id');
  let pwd = document.getElementById('pwd');
  if(id.value === "") {
    alert('아이디를 입력하세요');
    id.focus();
    return false;
  } else if (pwd.value === "") {
    alert('비밀번호를 입력하세요');
    pwd.focus();
    return false;
  } else {
    location.href = "main-after-login.html";
  }
});