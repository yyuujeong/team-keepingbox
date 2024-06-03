// 예약취소, 메인으로 돌아가기 클릭 시
const cancelBtn = document.getElementById("cancel-btn");
const mainBtn = document.getElementById("main-btn");

cancelBtn.addEventListener("click", () => {
    if(confirm("예약을 취소하시겠습니까?")) {
    alert("취소되었습니다.");
    location.href = "empty-booking.html";
    } else {
        return false;
    }
});
mainBtn.addEventListener("click", () => {
    location.href = "index.html";
});