# my-page

개인 포트폴리오 홈페이지. Next.js 16 (App Router) + TypeScript + Tailwind CSS v4로 만들었고 Vercel에 배포합니다.

## 내용 수정하기

이름, 소개, 기술 스택, 경력, 프로젝트, 링크 등 페이지에 보이는 모든 텍스트는 아래 파일 한 곳에 모여 있습니다.

```
src/lib/site-config.ts
```

이 파일만 고치면 사이트 전체에 반영됩니다. 항목을 추가하려면 배열에 객체를 하나 더 넣고, 빼려면 지우면 됩니다.

## 개발

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 프로덕션 빌드
npm run lint
```

## 구조

```
src/
├─ app/
│  ├─ layout.tsx      # 메타데이터, 폰트, 전역 레이아웃
│  ├─ page.tsx        # 섹션 조립
│  └─ globals.css     # Tailwind 및 기본 스타일
├─ components/        # 섹션별 컴포넌트
└─ lib/site-config.ts # 사이트 콘텐츠 (여기를 수정)
```

## 배포

`main` 브랜치에 push하면 Vercel이 자동으로 빌드·배포합니다.
