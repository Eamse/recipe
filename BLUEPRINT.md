# Recipe App Blueprint

## 프로젝트 개요

다양한 요리 레시피를 볼 수 있는 요리 레시피 웹.
관리자가 등록한 레시피를 누구나 조건 없이 볼 수 있다.

---

## 기술 스택

- **HTML5 / CSS3 / Vanilla JS** — 순수 웹 기술
- **CSS Custom Properties** — 테마 관리
- **LocalStorage** — 레시피·카테고리 데이터 저장

---

## 역할자(Actor) 및 담당 시스템

### 1. 방문자 (Visitor)

로그인 없이 레시피를 조회하는 모든 사용자

- **레시피 시스템** — 레시피 목록 조회, 상세 조회, 카테고리 필터
- **검색 시스템** — 키워드·재료로 레시피 검색

### 2. 관리자 (Admin)

레시피 콘텐츠를 관리하는 운영자 — Admin 테이블로 관리

- **인증 시스템** — 관리자 로그인·로그아웃
- **레시피 시스템** — 레시피 등록·수정·삭제
- **카테고리 시스템** — 카테고리 관리

### 3. 자동 시스템 (System)

- **인증 가드** — 관리자 페이지 접근 시 로그인 여부 체크 → 미인증 시 관리자 로그인 페이지 이동

---

## 역할자 × 시스템 × 기능

| 역할자            | 시스템          | 기능                                       |
| ----------------- | --------------- | ------------------------------------------ |
| **방문자**        | 레시피 시스템   | 레시피 목록 조회, 상세 조회, 카테고리 필터 |
| **방문자**        | 검색 시스템     | 키워드 검색, 재료명 검색                   |
| **관리자**        | 인증 시스템     | 관리자 로그인, 로그아웃                    |
| **관리자**        | 레시피 시스템   | 레시피 등록·수정·삭제, 재료·순서 관리      |
| **관리자**        | 카테고리 시스템 | 카테고리 추가·수정·삭제                    |
| **시스템 (자동)** | 인증 가드       | 관리자 페이지 접근 시 로그인 여부 체크     |

---

## 화면 구성

### 1. 홈 (/)

- 히어로 배너 + CTA 버튼
- 카테고리 탭 (한식·중식·일식·양식·디저트)
- 레시피 카드 그리드

### 2. 레시피 목록 (/recipes/)

- 카테고리 필터 탭
- 키워드 검색창
- 레시피 카드 목록 (이미지·제목·소요시간·난이도)

### 3. 레시피 상세 (/recipes/detail.html)

- 제목 / 카테고리 / 소요시간 / 난이도
- 재료 목록
- 조리 순서

### 4. 관리자 로그인 (/admin/login.html)

- 관리자 전용 아이디·비밀번호 입력
- 로그인 → sessionStorage에 관리자 세션 저장

### 5. 관리자 대시보드 (/admin/)

- 전체 레시피 수·카테고리별 통계

### 6. 관리자 레시피 관리 (/admin/recipes/)

- 레시피 목록·등록·수정·삭제

### 7. 관리자 카테고리 관리 (/admin/categories/)

- 카테고리 목록·등록·삭제

---

## 파일 구조

```
recipe/
├── BLUEPRINT.md
├── TODO.md
│
├── index.html                        # /
├── index.css
├── index.js
│
├── shared/                           # 전역 공유
│   ├── variables.css
│   ├── data.js                       # 초기 레시피 데이터
│   └── auth.js                       # 관리자 인증
│
├── recipes/                          # /recipes/
│   ├── index.html                    # 레시피 목록
│   ├── index.css
│   ├── index.js
│   ├── detail.html                   # /recipes/detail.html
│   ├── detail.css                    # /상세 레시피
│   └── detail.js
│
└── admin/                            # /admin/
    ├── login.html                    # /admin/login.html
    ├── login.css
    ├── login.js
    ├── index.html                    # 대시보드
    ├── index.css
    ├── index.js
    ├── recipes/
    │   ├── list.html                # /admin/recipes/list.html
    │   ├── list.css                 # /목록
    │   ├── list.js
    │   ├── create.html               # /admin/recipes/create.html
    │   ├── create.css                # /생성
    │   ├── create.js
    │   ├── edit.html                 # /admin/recipes/edit.html
    │   ├── edit.css                  # /수정,삭제
    │   └── edit.js
    └── categories/
        ├── list.html                # /admin/categories/list.html
        ├── list.css                 # /목록
        ├── list.js
        ├── create.html              # /admin/categories/create.html
        ├── create.css               # /추가
        ├── create.js
        ├── edit.html                # /admin/categories/edit.html
        ├── edit.css                 # /수정·삭제
        └── edit.js

```
