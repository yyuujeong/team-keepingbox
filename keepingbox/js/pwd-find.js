function findPwdSubmit(e) {
    e.preventDefault();
    const formElement = document.querySelector("form");
    const userId = document.getElementById("user-id");
    const userName = document.getElementById("name");
    const userEmail = document.getElementById("email");
    const email_rule =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if(userId.value == null || userId.value === "") {
        alert('아이디를 입력해 주세요.');
        userId.focus();
        return false;
    }
    if(userName.value == null || userName.value === "") {
        alert('이름을 입력해 주세요.');
        userName.focus();
        return false;
    }
    if(userEmail.value == null || userEmail.value === "") {
        alert('이메일을 입력해 주세요.');
        userEmail.focus();
        return false;
    }
    if(!email_rule.test(userEmail.value)) {
        alert('올바른 이메일 형식이 아닙니다.');
        return false;
    }
    if(confirm("비밀번호를 찾으시겠습니까?")) {
        formElement.submit();         
        location.href = "pwd-find-result.html";
        return false;
    }
}

const pwdFind = document.getElementById("pwd-find");
pwdFind.addEventListener("click", findPwdSubmit);

// 회원가입, 로그인 클릭 시
const goJoin = document.getElementById("go-join");
const goLogin = document.getElementById("go-login");
goJoin.addEventListener("click", () => {
    location.href = "join.html";
});
goLogin.addEventListener("click", () => {
    location.href = "login.html";
});