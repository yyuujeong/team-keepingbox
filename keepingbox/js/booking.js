// 오늘 날짜 이전으로 선택X
const nowUtc = Date.now(); // 현재까지의 밀리초 (Number 형으로)
const timeOff = new Date().getTimezoneOffset() * 60000; // 분단위를 밀리초로 반환
const today = new Date(nowUtc - timeOff).toISOString().split("T")[0];
document.getElementById("start-day").setAttribute("min", today);
document.getElementById("end-day").setAttribute("min", today);

// 사이즈, 날짜별 요금 계산
const intMoney = document.getElementById("intmoney");
const stringSize = document.getElementById("stringsize");
const checkPrice = document.querySelectorAll(".check-price");

for(let i=0; i < checkPrice.length; i++) {    
  checkPrice[i].addEventListener("click", function() {
    const startDay = document.getElementById("start-day").value;
    const endDay = document.getElementById("end-day").value;
    const ar1 = startDay.split("-");
    const ar2 = endDay.split("-");
    const da1 = new Date(ar1[0], ar1[1], ar1[2]);
    const da2 = new Date(ar2[0], ar2[1], ar2[2]);
    const dateDiff = Math.abs((da2 - da1) / (24 * 60 * 60 * 1000));

    // 하루 이상 요금
    if(startDay && endDay) {
      intMoney.value = ((dateDiff * 2) * stringSize.value).toLocaleString() +'원';
    }

    // 당일 요금
    if(startDay && endDay && dateDiff === 0) {
      intMoney.value = (stringSize.value).toLocaleString() +'원';
      console.log(intMoney.value);
    }
  });
};

// 예약하기 클릭 시
const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", () => {
  const stringCity = document.getElementById("stringcity");
  if(stringCity.value == "" || stringSize.value == "" || intMoney.value < 5000) {
    alert("위 항목들을 선택해 주세요.");
  } else if(confirm("예약하시겠습니까?")) {
    alert("예약되었습니다.");
    location.href = "mypage-booking-check.html";
  } else {
    return false;
  }
});