function findSubmit() {
    const formElement = document.querySelector("form");
    const userName = document.getElementById("name");
    const userEmail = document.getElementById("email");
    const email_rule =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

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
    if (confirm("아이디를 찾으시겠습니까?")) {
        formElement.submit();         
        location.href = "id-find-result.html";
    } else {
        return false;
    }
}