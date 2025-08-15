# 🎬 Notflix

코알누님 리액트 스터티 마지막 프로젝트, 짭플릭스(낫플릭스) 만들기 프로젝트입니다.
https://netflix-sanghwi.vercel.app/

## 📖 프로젝트 소개

Notflix는 The Movie Database (TMDB) API를 활용하여 영화 정보를 검색하고 상세 내용을 확인할 수 있는 웹 애플리케이션입니다. React와 Vite를 기반으로 구축되었으며, 최신 영화, 인기 영화, 평점 높은 영화 등 다양한 카테고리의 영화를 탐색할 수 있습니다.

## ✨ 주요 기능

- **영화 검색**: 키워드를 통해 원하는 영화를 검색할 수 있습니다.
- **영화 정보 제공**: 인기 영화, 평점 높은 영화, 상영 예정 영화 목록을 제공합니다.
- **상세 정보 확인**: 영화 포스터, 줄거리, 평점, 예고편 등 상세 정보를 확인할 수 있습니다.
- **장르별 필터링**: 원하는 장르의 영화만 모아볼 수 있습니다.
- **반응형 디자인**: 다양한 디바이스에서 최적화된 화면을 제공합니다.

## 🛠️ 기술 스택

- **Frontend**: React, Vite
- **State Management**: Zustand, React Query
- **Routing**: React Router
- **HTTP Client**: Axios
- **Styling**:
  - Tailwind CSS
  - Bootstrap / React-Bootstrap
  - Styled-components
  - Material-UI
  - Emotion
- **Linting**: ESLint

## 🚀 시작하기

### 전제 조건

- Node.js
- npm 또는 yarn

### 설치 및 실행

1.  저장소를 클론합니다.
    ```bash
    git clone https://github.com/your-username/netflix-sanghwi.git
    cd netflix-sanghwi
    ```

2.  의존성을 설치합니다.
    ```bash
    npm install
    ```
    
3.  환경변수 설정합니다.
    TMDB Access Token(VITE_TMDB_ACCESS_TOKEN)만 설정해주면 됩니다.
    필수는 아니지만 노출을 막으려면 VITE_를 빼서 배포해야 합니다. 

4.  개발 서버를 실행합니다.
    ```bash
    npm run dev
    ```

## 📜 사용 가능한 스크립트

- `npm run dev`: 개발 모드로 프로젝트를 실행합니다.
- `npm run build`: 프로덕션용으로 프로젝트를 빌드합니다.
- `npm run lint`: ESLint를 사용하여 코드 스타일을 검사합니다.
- `npm run preview`: 빌드된 결과물을 미리 봅니다.

