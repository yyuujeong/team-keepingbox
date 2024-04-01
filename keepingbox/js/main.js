// Scroll Animation (스크롤 애니메이션)
const aniFunc = function() {
    const aniTriggerMargin = 60;
    const aniElementList = document.querySelectorAll('.ani');
    for(const element of aniElementList) {
        if(!element.classList.contains('show')) {
            if(window.innerHeight > element.getBoundingClientRect().top + aniTriggerMargin) {
                element.classList.add('show');
            }
        }
    }
}
window.addEventListener('load', aniFunc);
window.addEventListener('scroll', aniFunc);

// 로그인 후 사용 가능
const blockReservation = document.querySelectorAll(".block-reservation");
for(let i=0; i < blockReservation.length; i++) {    
    blockReservation[i].addEventListener("click", function(e) {
        e.preventDefault();
        alert("로그인 후 사용 가능합니다.");
    });
};

// 로그아웃 시
function logOut() {
    if(confirm("로그아웃 하시겠습니까?")) {
        alert("로그아웃 되었습니다. 다시 로그인 해 주세요.");
        location.href = 'main-before-login.html';
    } else {
        return false;
    }
}