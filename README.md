# **📅 직원들을 위한 인트라넷 페이지**

# 배포사이트

https://toy-intranet.vercel.app/

# 프로젝트 제목

![image](https://github.com/hyunsunglimm/toy-intranet/assets/138507900/bd2c4746-12e6-44fa-9f8b-4aad5f1bb242)

# 프로젝트 기간

1/26 ~ 2/8

<h3 align="left">Languages and Tools:</h3>
<p align="left">
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
</a>
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
</a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
</a>
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
  <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/>
</a>
</p>

## 소개

직원을 위한 인트라넷 웹사이트를 제작했습니다.
</br>
기업의 공지와 근무중인 직원, 부재중인 직원을 확인하고 또, 관리할 수 있습니다.

## 기능

### 1. 직원등록

<p align="center"><img src='image.png' width="500px" /></p>

처음 방문한 사용자는 직원등록 창에서 직원을 추가하여 서비스를 사용할 수 있습니다.
<br>
회원가입 시 작성한 정보를 토대로 바로 자동 로그인됩니다.
<br>
로그인 페이지에서 회원가입 페이지로 이동할 수 있습니다.

### 2. 로그인

<p align="center"><img src='image-1.png' width="500px" /></p>

### 3. 시간관리 모달

<p align="center"><img src='image-4.png' width="500" /></p>
헤더에 있는 시계 아이콘 혹은 현재 시간을 클릭하여 아래와 같은 시간관리 모달을 띄울 수 있습니다.
<br>
<br>
<p align="center"><img src='image-3.png' width="500px" /></p>
모달에는 로그인한 직원의 직군, 프로필 이미지, 현재 시간, 근무 시간, 근무중인지 부재중인지를 확인할 수 있습니다.<br>
또한, 아래 스위치버튼으로 근무/부재중을 변경할 수 있습니다.

### 4. 마이페이지

<p align="center"><img src='image-5.png' width="500px" /></p>

로그인한 사용자의 상세 정보를 확인할 수 있습니다.<br>
부재중인 직원의 경우 부재사유를 변경할 수 있고, 직원 탈퇴가 가능합니다.

### 5. 홈페이지의 기능들

- 기업 공지 갤러리

<p align="center"><img src='image-6.png' width="100%" /></p>

슬라이더를 사용하여 여러 공지들을 넘겨가며 확인할 수 있습니다.<br>
공지를 클릭하면 해당 공지의 상세페이지로 이동합니다.

- 근무중인 직원 목록

<p align="center"><img src='image-7.png' width="100%" /></p>

페이지네이션을 구현하여 페이지별로 근무중인 직원을 확인할 수 있습니다.<br>
클릭 시 해당 직원의 상세페이지로 이동합니다.

- 부재중인 직원 목록
<p align="center"><img src='image-8.png' width="100%" /></p>
<p align="center"><img src='image-9.png' width="100%" /></p>
<p align="center"><img src='image-10.png' width="100%" /></p>

페이지네이션을 구현하여 페이지별로 부재중인 직원을 확인할 수 있습니다.<br>
우측 상단의 select를 클릭하여 부재사유별로 직원을 조회할 수 있습니다.<br>
직원 카드의 우측 상단 빨간 알림표시는 부재중이지만 부재사유를 적지 않은 직원을 나타냅니다.<br>
클릭 시 해당 직원의 상세페이지로 이동합니다.

### 6. 공지 상세페이지

<p align="center"><img src='image-11.png' width="100%" /></p

홈페이지에서 클릭한 공지의 상세정보를 보여줍니다.<br>
우측하단에 작성일과 수정일을 볼 수 있습니다.

### 7. 직원 상세페이지

## 팀원 및 역할

- 팀원 1 (역할)
- 팀원 2 (역할)
- 팀원 3 (역할)
- 팀원 4 (역할)

### **[필수 구현사항]**

- 마이페이지 구현✅
  - 사진, 직무, 이름이 표기된 프로필 구현✅
    - 시간 관리 페이지 개발✅
      - 현 시각을 표시하는 시계 (타이머) 구현✅
      - 토글 형태의 근무 시작 / 종료 스위치 구현✅
      - 모달을 활용한 근무 시작 / 종료 확인 창 구현✅
  - 연차/ 반차/시간 조정 등 부재 신청 창 구현✅
  - 부재 신청 내역 확인 창 구현✅
  - 부재 항목에 따른 카테고리 메뉴로 데이터 필터링 가능 구현✅
- 기업 공지 모음 갤러리 구현✅
- netlify 등을 이용한 정적 페이지 배포✅
- 과제에 대한 설명을 포함한 `README.md` 파일 작성✅
  - 팀원별로 구현한 부분 소개✅

### **[선택 구현사항]**

- React / TypeScript 사용은 선택✅
- 마이페이지의 사진 업로드 기능✅
- 로그인 기능✅
- 부재 신청시, 사유 기재 기능✅
- 기타 동작이 완료되기 전에 로딩 애니메이션 구현✅
- 페이지네이션✅
- 관련된 기타 기능도 고려✅
- eslint 설정, 커밋컨벤션, 문서화 등 팀프로젝트시 필요한 추가 작업들✅

## 설치 방법

```bash
git clone https://github.com/yourproject/repo.git
cd repo
npm install
npm start
```
