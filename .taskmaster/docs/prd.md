# 투자 포트폴리오 관리 앱 - Next.js 프론트엔드 PRD

## 프로젝트 개요

투자 포트폴리오 관리 앱의 Next.js 기반 웹 프론트엔드 - 대화형 인터페이스를 통해 사용자가 AI 백엔드와 소통하며 포트폴리오를 생성, 최적화, 관리할 수 있는 모던한 웹 애플리케이션.

## 핵심 기능

### V1 핵심 기능 (MVP)

- **대화형 채팅 인터페이스**: AI 포트폴리오 어드바이저와의 실시간 채팅 UI
- **포트폴리오 시각화**: 자산 배분을 보여주는 인터랙티브 차트 및 그래프
- **백테스팅 결과 대시보드**: 성과 지표와 차트를 표시하는 분석 대시보드
- **포트폴리오 리포트 뷰어**: PDF 리포트 미리보기 및 다운로드 기능

### V2 확장 기능

- **사용자 대시보드**: 포트폴리오 성과 모니터링을 위한 개인화된 대시보드
- **실시간 알림**: 리밸런싱 및 거래 실행 알림 표시
- **전략 마켓플레이스**: 커뮤니티 전략 탐색 및 공유 인터페이스
- **모바일 반응형**: 모든 디바이스에서 최적화된 경험

## 기술 스택

### 프레임워크 및 라이브러리

- **Next.js 15**: App Router 기반 풀스택 프레임워크
- **React 19**: 컴포넌트 기반 UI 라이브러리
- **TypeScript**: 타입 안전성 확보
- **Tailwind CSS**: 유틸리티 우선 스타일링

### UI/UX 라이브러리

- **shadcn/ui**: 재사용 가능한 컴포넌트 시스템
- **Radix UI**: 접근성을 고려한 헤드리스 UI 컴포넌트
- **Lucide React**: 일관된 아이콘 시스템
- **Framer Motion**: 부드러운 애니메이션 및 전환

### 차트 및 시각화

- **D3.js**: 커스텀 금융 데이터 시각화

### 상태 관리 및 데이터

- **React Query/TanStack Query**: 서버 상태 관리
- **Zustand**: 클라이언트 상태 관리
- **Socket.io Client**: 실시간 데이터 연결 (V2)

### 개발 및 빌드 도구

- **ESLint + Prettier**: 코드 품질 및 포맷팅
- **Husky**: Git 훅을 통한 코드 품질 자동화
- **Jest + Testing Library**: 단위 및 통합 테스트
- **Playwright**: E2E 테스트

## 사용자 인터페이스 설계

### 페이지 구조

#### 1. 홈페이지 (`/`)

- 서비스 소개 및 시작하기 버튼
- 로그인/회원가입 (V2)

#### 2. 채팅 포트폴리오 빌더 (`/chat`)

- AI 챗봇과의 대화형 인터페이스
- 실시간 채팅 메시지 표시
- 포트폴리오 구성 실시간 업데이트
- 사이드바에 현재 포트폴리오 미리보기

#### 3. 백테스팅 대시보드 (`/backtesting`)

- 포트폴리오 성과 차트
- 위험 지표 표시 (샤프 비율, 변동성, 최대 손실)
- 벤치마크 비교
- 기간별 필터링 옵션

#### 4. 포트폴리오 리포트 (`/reports/[id]`)

- 완성된 포트폴리오 상세 분석
- PDF 다운로드 기능
- 소셜 공유 옵션 (V2)

#### 5. 사용자 대시보드 (`/dashboard` - V2)

- 포트폴리오 목록
- 성과 요약
- 알림 설정
- 계정 관리

#### 6. 전략 마켓플레이스 (`/marketplace` - V2)

- 공유 전략 탐색
- 필터링 및 검색
- 평점 및 리뷰
- 전략 가져오기

### 컴포넌트 아키텍처

#### 공통 컴포넌트

- `Layout`: 네비게이션 및 기본 레이아웃
- `ChatInterface`: 재사용 가능한 채팅 UI
- `PortfolioCard`: 포트폴리오 요약 카드
- `ChartContainer`: 차트 래퍼 컴포넌트

#### 페이지별 컴포넌트

- `ChatBot`: AI 대화 관리
- `PortfolioBuilder`: 포트폴리오 구성 UI
- `BacktestingChart`: 성과 차트 컴포넌트
- `RiskMetrics`: 위험 지표 표시
- `ReportViewer`: PDF 리포트 뷰어

## API 연동

### 백엔드 API 엔드포인트

#### 채팅 API

```typescript
POST /api/chat
GET /api/chat/history/:sessionId
POST /api/chat/session
```

#### 포트폴리오 API

```typescript
GET /api/portfolio/:id
POST /api/portfolio
PUT /api/portfolio/:id
DELETE /api/portfolio/:id
```

#### 백테스팅 API

```typescript
POST /api/backtesting/run
GET /api/backtesting/results/:id
```

#### 리포트 API

```typescript
GET /api/reports/:portfolioId
GET /api/reports/:portfolioId/pdf
```

### API 클라이언트 설계

```typescript
// lib/api/client.ts
class APIClient {
  chat: ChatAPI;
  portfolio: PortfolioAPI;
  backtesting: BacktestingAPI;
  reports: ReportsAPI;
}

// React Query 쿼리 키 팩토리
const queryKeys = {
  chat: (sessionId: string) => ["chat", sessionId],
  portfolio: (id: string) => ["portfolio", id],
  backtesting: (id: string) => ["backtesting", id],
};
```

## 개발 로드맵

### 1단계: 기본 인프라 (V1)

#### 프로젝트 설정

- Next.js 15 프로젝트 초기화
- TypeScript 및 Tailwind CSS 설정
- ESLint, Prettier 설정
- shadcn/ui 컴포넌트 시스템 설치

#### 기본 레이아웃 및 라우팅

- App Router 기반 페이지 구조 설정
- 공통 레이아웃 컴포넌트
- 네비게이션 시스템
- 404 및 에러 페이지

#### API 클라이언트 설정

- Axios 또는 fetch 기반 API 클라이언트
- React Query 설정 및 쿼리 팩토리
- API 에러 핸들링
- 로딩 상태 관리

### 2단계: 핵심 채팅 기능 (V1)

#### 채팅 인터페이스

- 실시간 메시지 표시 UI
- 메시지 입력 및 전송
- 타이핑 인디케이터
- 메시지 기록 스크롤

#### AI 대화 관리

- WebSocket 또는 Server-Sent Events 연결
- 세션 상태 관리
- 대화 컨텍스트 유지
- 에러 복구 메커니즘

#### 포트폴리오 실시간 업데이트

- 채팅을 통한 포트폴리오 구성 변경
- 실시간 자산 배분 시각화
- 변경 사항 애니메이션
- 포트폴리오 검증 및 피드백

### 3단계: 데이터 시각화 (V1)

#### 차트 컴포넌트

- 원형 차트 (자산 배분)
- 선형 차트 (성과 추이)
- 막대 차트 (위험 지표)
- 반응형 차트 레이아웃

#### 백테스팅 대시보드

- 성과 지표 카드 레이아웃
- 인터랙티브 차트 필터링
- 기간 선택기
- 벤치마크 비교 뷰

#### 포트폴리오 분석 뷰

- 자산별 성과 분석
- 위험-수익률 산점도
- 상관관계 히트맵
- 리밸런싱 제안 표시

### 4단계: 리포트 시스템 (V1 완성)

#### 리포트 뷰어

- PDF 임베드 뷰어
- 리포트 메타데이터 표시
- 다운로드 및 공유 옵션
- 리포트 생성 진행 상태

#### 포트폴리오 요약

- 현재 포트폴리오 상태 카드
- 주요 지표 요약
- 최근 변경 사항 로그
- 다음 단계 제안

### 5단계: 사용자 관리 (V2)

#### 인증 시스템

- 로그인/회원가입 폼
- JWT 토큰 관리
- 보호된 라우트
- 사용자 프로필 페이지

#### 개인화 기능

- 사용자별 포트폴리오 목록
- 선호도 설정
- 알림 설정 관리
- 테마 및 언어 설정

### 6단계: 커뮤니티 기능 (V2)

#### 전략 마켓플레이스

- 전략 카드 레이아웃
- 필터링 및 검색
- 평점 및 리뷰 시스템
- 전략 상세 페이지

#### 소셜 기능

- 사용자 프로필 공개
- 팔로우 시스템
- 포트폴리오 공유
- 성과 리더보드

## 상태 관리 전략

### 전역 상태 (Zustand)

```typescript
interface AppState {
  user: User | null;
  currentPortfolio: Portfolio | null;
  chatSession: ChatSession | null;
  preferences: UserPreferences;
}
```

### 서버 상태 (React Query)

```typescript
// 채팅 메시지
const { data: messages } = useQuery(queryKeys.chat(sessionId), () =>
  fetchChatHistory(sessionId)
);

// 포트폴리오 데이터
const { data: portfolio } = useQuery(queryKeys.portfolio(portfolioId), () =>
  fetchPortfolio(portfolioId)
);
```

## 성능 최적화

### 코드 스플리팅

- 페이지별 동적 임포트
- 차트 라이브러리 지연 로딩
- 컴포넌트별 청크 분할

### 이미지 및 에셋

- Next.js Image 컴포넌트 활용
- WebP 포맷 사용
- 차트 데이터 메모이제이션

### 캐싱 전략

- React Query 캐싱 설정
- Next.js ISR 활용 (정적 데이터)
- 브라우저 캐싱 헤더 설정

## 보안 고려사항

### 클라이언트 사이드 보안

- XSS 방지를 위한 입력 sanitization
- CSRF 토큰 처리
- 민감 데이터 로컬 저장 방지

### API 보안

- JWT 토큰 자동 갱신
- API 키 환경 변수 관리
- HTTPS 통신 강제

## 테스트 전략

### 단위 테스트

- React 컴포넌트 (Testing Library)
- 유틸리티 함수
- 커스텀 훅
- API 클라이언트

### 통합 테스트

- 페이지별 렌더링 테스트
- API 통합 시나리오
- 사용자 플로우 테스트

### E2E 테스트

- 포트폴리오 생성 플로우
- 채팅 인터페이스 상호작용
- 리포트 생성 및 다운로드
- 반응형 디자인 검증

## 배포 및 운영

### 배포 환경

- **개발**: localhost:3000
- **스테이징**: Vercel Preview
- **프로덕션**: Vercel Production

### 환경 변수

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SOCKET_URL=ws://localhost:8000
NEXT_PUBLIC_APP_ENV=development
```

### 모니터링

- Vercel Analytics 통합
- 사용자 행동 추적
- 성능 메트릭 수집
- 에러 로깅 (Sentry)

## 반응형 디자인

### 브레이크포인트

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

### 모바일 최적화

- 터치 친화적 버튼 크기
- 스와이프 제스처 지원
- 모바일 네비게이션 메뉴
- 포트폴리오 차트 모바일 최적화

## 접근성 (a11y)

### 웹 접근성 기준

- WCAG 2.1 AA 준수
- 키보드 네비게이션 지원
- 스크린 리더 최적화
- 색상 대비 기준 준수

### 구현 요소

- ARIA 레이블 및 역할
- 포커스 관리
- 시맨틱 HTML 구조
- 대체 텍스트 제공

## 국제화 (i18n)

### 지원 언어

- 한국어 (기본)
- 영어 (V2)

### 구현 방식

- Next.js 내장 i18n 활용
- 동적 로케일 전환
- 날짜/숫자 형식 로컬라이제이션
- 금융 데이터 지역별 표시

## 성공 지표

### V1 성공 기준

- 페이지 로드 시간 < 2초
- 채팅 응답 지연 < 500ms
- 모바일에서 포트폴리오 생성 완료율 > 75%
- 백테스팅 차트 렌더링 < 3초

### V2 성공 기준

- 사용자 세션 지속 시간 > 15분
- 일일 활성 사용자 증가율 > 5%
- 전략 공유율 > 20%
- 모바일 사용률 > 40%

## 개발 우선순위

### 우선순위 1: 핵심 사용자 플로우

1. 홈페이지 및 네비게이션
2. 채팅 인터페이스 기본 구조
3. API 클라이언트 및 상태 관리 설정
4. 포트폴리오 시각화 컴포넌트

### 우선순위 2: MVP 완성

5. 백테스팅 결과 대시보드
6. 리포트 뷰어
7. 반응형 디자인 구현
8. 기본 에러 핸들링

### 우선순위 3: 사용자 경험 향상

9. 로딩 상태 및 스켈레톤 UI
10. 애니메이션 및 전환 효과
11. 접근성 개선
12. 성능 최적화

### 우선순위 4: V2 기능

13. 사용자 인증 시스템
14. 개인 대시보드
15. 실시간 알림
16. 전략 마켓플레이스

## 품질 보증

### 코드 품질

- TypeScript strict 모드
- ESLint 규칙 준수
- 100% 타입 커버리지
- 컴포넌트 재사용성 > 80%

### 테스트 커버리지

- 단위 테스트 > 90%
- 통합 테스트 > 70%
- E2E 테스트 주요 플로우 100%

### 성능 기준

- Lighthouse 스코어 > 90
- Core Web Vitals 통과
- 번들 크기 < 1MB (압축)
- 트리 셰이킹 최적화
