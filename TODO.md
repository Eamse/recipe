# Recipe 앱 구현 TODO

## Phase 1. 기반 세팅 (shared/)

- [x] `shared/variables.css` — 색상·폰트 CSS 변수
- [x] `shared/data.js` — 초기 레시피 데이터 (카테고리별 샘플)
- [ ] `shared/auth.js` — 관리자 인증 가드 (세션 체크·미인증 시 관리자 로그인 리다이렉트)

---

## Phase 2. 관리자 로그인 (/admin/login.html)

- [ ] `admin/login.html` — 관리자 전용 아이디·비밀번호 입력 폼
- [ ] `admin/login.css` — 관리자 로그인 스타일
- [ ] `admin/login.js` — Admin 테이블 검증·sessionStorage 세션 저장

---

## Phase 3. 홈 (/)

- [ ] `index.html` — 히어로 배너·카테고리 탭·레시피 카드 그리드 마크업
- [ ] `index.css` — 홈 스타일
- [ ] `index.js` — 카테고리 필터·레시피 렌더링

---

## Phase 4. 레시피 목록 (/recipes/)

- [ ] `recipes/index.html` — 카테고리 필터 탭·키워드 검색창·카드 목록 마크업
- [ ] `recipes/index.css` — 목록 스타일
- [ ] `recipes/index.js` — 목록 렌더링·키워드 검색·카테고리 필터

---

## Phase 5. 레시피 상세 (/recipes/detail.html)

- [ ] `recipes/detail.html` — 제목·카테고리·소요시간·난이도·재료·조리순서 마크업
- [ ] `recipes/detail.css` — 상세 스타일
- [ ] `recipes/detail.js` — URL 파라미터로 데이터 조회·렌더링

---

## Phase 6. 관리자 대시보드 (/admin/)

- [ ] `admin/index.html` — 통계 대시보드 마크업
- [ ] `admin/index.css` — 대시보드 스타일
- [ ] `admin/index.js` — 전체 레시피 수·카테고리별 통계 렌더링

---

## Phase 7. 관리자 레시피 관리 (/admin/recipes/)

- [ ] `admin/recipes/list.html` — 레시피 목록 테이블 마크업
- [ ] `admin/recipes/list.css`
- [ ] `admin/recipes/list.js` — 목록 렌더링·삭제
- [ ] `admin/recipes/create.html` — 레시피 등록 폼 마크업
- [ ] `admin/recipes/create.css`
- [ ] `admin/recipes/create.js` — 등록 폼 유효성 검사·저장
- [ ] `admin/recipes/edit.html` — 레시피 수정 폼 마크업
- [ ] `admin/recipes/edit.css`
- [ ] `admin/recipes/edit.js` — 기존 데이터 불러오기·수정·저장

---

## Phase 8. 관리자 카테고리 관리 (/admin/categories/)

- [ ] `admin/categories/list.html` — 카테고리 목록 마크업
- [ ] `admin/categories/list.css`
- [ ] `admin/categories/list.js` — 카테고리 렌더링·추가·삭제

---

## Phase 9. 마무리

- [ ] 전체 페이지 내비게이션 연결 확인
- [ ] 반응형 (모바일) 대응
- [ ] 빈 상태(Empty State) UI 처리
- [ ] 크로스 브라우저 테스트
