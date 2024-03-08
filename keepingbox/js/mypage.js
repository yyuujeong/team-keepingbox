// 회원탈퇴, 수정하기 클릭
const withDrawalBtn = document.getElementById("withdrawal-btn");
const modifyBtn = document.getElementById("modify-btn");

withDrawalBtn.addEventListener("click", () => {
    location.href = "withdrawal.html";
});
modifyBtn.addEventListener("click", () => {
    location.href = "mypage-modify.html";
});
