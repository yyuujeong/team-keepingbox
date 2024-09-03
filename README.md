# 키핑박스

<img width="948" alt="kb" align="center" src="https://github.com/yyuujeong/team-keepingbox/assets/161145357/b5bf2c70-6855-41be-a9d0-cced19c9390e">
<br/>
짐 보관 예약 서비스를 주제로 제작한 사이트입니다.

<br/>
<br/>

- 2인 개발
- 기간: 2022.05 - 2022.06
- 배포 사이트: [사이트](https://yyuujeong.github.io/team-keepingbox/keepingbox/)
- 사용 기술: ```HTML5``` ```CSS3``` ```JavaScript```

## :mag_right: 개발 내용
- 담당 부분: 메인 페이지 및 예약 페이지의 UI/UX 설계 및 구현
- Date 객체를 활용하여 날짜를 비교한 후 오늘 날짜 이전은 선택이 안되도록 설정
- 사이즈와 날짜에 따른 요금 자동 계산 기능 구현
- JavaScript를 사용하여 폼 유효성 검사를 수행하고 경고 및 확인 창으로 잘못된 입력 방지
- 공통부분을 ES6 모듈로 리팩토링하여 유지 보수성과 안전성 향상

## :rotating_light: 트러블 슈팅
```문제점```
- API 키 보호를 위해 .env 파일을 만들어 .gitignore에 추가했으나 여전히 네트워크 창에서 키 노출

```해결 방법```
- Express를 이용해 서버 측에서 RESTful API를 작성하고 dotenv를 사용하여 환경 변수 관리
- 서버를 Vercel에 배포하고 클라이언트는 서버를 통해서만 API 요청을 수행하도록 변경
이를 통해 API 키는 서버 내에서만 사용되어 클라이언트에서의 노출 방지
