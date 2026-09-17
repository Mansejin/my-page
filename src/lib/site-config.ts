/**
 * 사이트에 표시되는 모든 내용을 여기서 관리합니다.
 * 이 파일만 고치면 페이지 전체가 바뀝니다.
 */

export const siteConfig = {
  name: "홍길동",
  nameEn: "Gildong Hong",
  role: "소프트웨어 엔지니어",
  tagline: "웹과 자동화를 좋아하는 개발자입니다.",
  intro:
    "사용자에게 실제로 쓸모 있는 제품을 만드는 데 관심이 많습니다. 프론트엔드부터 배포·운영까지 전 과정을 직접 다루며, 복잡한 문제를 단순한 구조로 정리하는 일을 즐깁니다.",
  location: "서울, 대한민국",
  email: "hello@example.com",
  siteUrl: "https://example.com",
  avatarInitials: "홍",

  links: [
    { label: "GitHub", href: "https://github.com/your-id" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-id" },
    { label: "Blog", href: "https://your-blog.example.com" },
  ],

  skills: [
    {
      category: "Frontend",
      items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "PostgreSQL", "REST / GraphQL"],
    },
    {
      category: "Infra & Tools",
      items: ["Vercel", "Docker", "GitHub Actions", "Git"],
    },
  ],

  experience: [
    {
      company: "예시 회사",
      role: "프론트엔드 엔지니어",
      period: "2023 — 현재",
      description:
        "핵심 제품의 웹 프론트엔드를 담당하며 성능 개선과 디자인 시스템 구축을 주도했습니다.",
      highlights: [
        "초기 로딩 시간 40% 단축",
        "공용 컴포넌트 라이브러리 설계 및 도입",
      ],
    },
    {
      company: "이전 회사",
      role: "주니어 개발자",
      period: "2021 — 2023",
      description:
        "사내 운영 도구를 개발하고 반복 업무를 자동화하는 스크립트를 만들었습니다.",
      highlights: ["수작업 리포팅 자동화로 월 20시간 절감"],
    },
  ],

  projects: [
    {
      title: "프로젝트 이름",
      description:
        "무엇을 만들었고 어떤 문제를 해결했는지 한두 문장으로 설명합니다.",
      tags: ["Next.js", "TypeScript"],
      href: "https://github.com/your-id/project",
    },
    {
      title: "또 다른 프로젝트",
      description:
        "직접 만든 도구나 사이드 프로젝트를 소개하는 자리입니다.",
      tags: ["Python", "Automation"],
      href: "https://github.com/your-id/another-project",
    },
    {
      title: "세 번째 프로젝트",
      description:
        "필요 없으면 이 항목을 지우고, 더 필요하면 복사해서 추가하세요.",
      tags: ["React", "Tailwind"],
      href: "https://github.com/your-id/third-project",
    },
  ],
} as const;

export const navItems = [
  { label: "소개", href: "#about" },
  { label: "기술", href: "#skills" },
  { label: "경력", href: "#experience" },
  { label: "프로젝트", href: "#projects" },
  { label: "연락", href: "#contact" },
] as const;
