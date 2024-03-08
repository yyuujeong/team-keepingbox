// 회원정보 수정하기
const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const RegExp = /^[a-zA-Z0-9]{4,12}$/; // pwd
    const n_RegExp = /^[가-힣]{2,15}$/; //이름
    const p_RegExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/; // 휴대폰
    const e_RegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //이메일

    const pwd = document.getElementById('pwd');
    const pwdChk = document.getElementById('pwdchk');
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');

    if(pwd.value === "") {
        alert('비밀번호를 입력해 주세요.');
        pwd.focus();
        return false;
    }
    if(!RegExp.test(pwd.value)) {
        alert('비밀번호는 4~12자의 영문 대소문자와 숫자로만 입력해 주세요.');
        return false;
    }
    if(pwdChk.value === "") {
        alert('비밀번호를 입력해 주세요.');
        pwdChk.focus();
        return false;
    }
    if(pwd.value === id.value) {
        alert('비밀번호와 아이디는 동일하면 안됩니다.');
        return false;
    }
    if(pwd.value !== pwdChk.value) {
        alert('비밀번호가 다릅니다. 다시 확인해 주세요.');
        return false;
    }
    if(name.value === "") {
        alert('이름을 입력해 주세요.');
        name.focus();
        return false;
    }
    if(!n_RegExp.test(name.value)) {
        alert('한글로만 입력해 주세요.');
        return false;
    }
    if(phone.value === "") {
        alert('휴대폰 번호를 입력해 주세요.');
        phone.focus();
        return false;
    }
    if(!p_RegExp.test(phone.value)) {
        alert('숫자만 입력해 주세요.');
        return false;
    }
    if(email.value === "") {
        alert('이메일을 입력해 주세요.');
        email.focus();
        return false;
    }
    if(!e_RegExp.test(email.value)) {
        alert('올바른 이메일 형식이 아닙니다.');
        return false;
    }

    alert('회원정보가 수정되었습니다.');
    location.href = "mypage.html";
});