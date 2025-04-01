## 💌 모바일 청첩장

2025년, 결혼식 비용이 너무 비싸 고민하던 중, 문득 생각이 들었습니다.  
**"차라리 직접 청첩장을 만들어 볼까?"**

기왕이면 **누구나 무료로 사용할 수 있도록 공유**한다면 더 의미 있지 않을까 싶었고,  
그렇게 시작된 프로젝트가 바로 이 충림입니다.  

이 프로젝트는 포트폴리오이자 오픈소스 프로젝트이며,  
디자인을 즐기거나 개발에 관심 있는 분들이 자유롭게 활용하고 기여할 수 있도록 제작되었습니다.

### 📌 기술 스택
- **Frontend:** Vue.js, SCSS, CSS
- **API:** Kakao API, Google Maps API, GH Pages, EmailJS

---

## 🌟 주요 기능

### ✅ 다양한 초대장 스타일 제공
- 원하는 스타일의 초대장을 선택하고 세부 정보를 확인할 수 있습니다.  

![readme1.gif](readme1.gif)

### ✅ 개발자 직접 문의 및 사용법 제공
- 카카오톡 문의를 통해 개발자와 바로 소통 가능  
- 프로젝트 사용 방법 및 소스 코드 GitHub에서 확인 가능  

![readme2.gif](readme2.gif)

### ✅ 이스터에그 추가
- 제작진의 정보를 찾아가는 미스터리 선택형 게임 제공  
- 제작진의 신상정보 요약 페이지 존재  

---

## 🚀 프로젝트 사용법 

1️⃣ **원하는 템플릿 선택** – 메인 페이지에서 탐색  
2️⃣ **템플릿 세부 정보 확인 & 공유** – 클릭하여 확인하고 링크 복사  
3️⃣ **소스 코드 확인 & 수정** – GitHub에서 자유롭게 활용  

📢 **자유롭게 사용 가능!**  
배포가 어렵다면 카톡 문의를 주세요. 충림 도메인으로 템플릿을 제공해 드립니다.

---

## 📦 설치 방법

```bash
# 저장소 클론
git clone https://github.com/your-username/your-repo.git

# 디렉토리 이동 후 패키지 설치
cd your-repo
npm install

# 로컬 서버 실행
npm run dev
npm run dev -- --host
```
---

## 💡 API 키 설정

본 프로젝트에서 **카카오톡 JavaScript SDK**와 **EmailJS** 서비스를 개인으로 사용하려면 각각의 API 키를 설정해야 합니다.  
아래의 설정이 완료되면, 프로젝트에서 카카오톡 SDK와 EmailJS 기능을 정상적으로 사용할 수 있습니다!

### 📝 설정 방법:

#### 1. **카카오톡 API 키**

- 카카오톡 JavaScript SDK를 사용하려면 [카카오 개발자 사이트](https://developers.kakao.com/)에서 본인의 애플리케이션을 생성한 후, JavaScript SDK 키를 발급받으세요.
- 발급받은 API 키는 `.sample.env` 파일의 이름을 `.env` 로 바꾼 뒤 `VITE_KAKAO_API_KEY`에 입력하세요.
  
```bash
VITE_KAKAO_API_KEY=여기에 카카오톡 JavaScript SDK 키를 입력하세요
```

#### 2. **EmailJS API 키**

- EmailJS를 사용하려면 [EmailJS 홈페이지](https://www.emailjs.com/)에서 회원가입 후, API 키를 발급받으세요.
- 발급받은 API 키는 `.sample.env` 파일의 이름을 `.env` 로 바꾼 뒤 `VITE_EMAILJS_API_KEY`에 입력하세요.
  
```bash
VITE_EMAILJS_API_KEY=여기에 EmailJS SDK 키를 입력하세요

