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
- 담당 부분: 메인, 예약 페이지 UI/UX 설계 및 구현
- 오늘 날짜 이전 선택이 불가하도록 Date 객체로 날짜 비교
- 사이즈/날짜별 요금 자동 계산 기능 구현
- JavaScript를 이용한 폼 유효성 검사와 경고 창을 통해 잘못된 입력 방지

## :rotating_light: 트러블 슈팅
```문제점```
- HTML include 방식으로 구현된 공통 부분에서 보안 및 성능 저하 발생

```해결 방법```
- 공통부분을 ES6 모듈로 리팩토링하여 코드 재사용성을 높이고 성능 및 보안 강화
