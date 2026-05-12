# 왕실의원 웹사이트

Vite + React + TypeScript + Cloudflare Pages

## 기술 스택

- **빌드**: Vite 5
- **프레임워크**: React 18 + TypeScript
- **배포**: Cloudflare Pages
- **스타일**: CSS Modules (별도 빌드 도구 없음)
- **폰트**: Google Fonts (Cormorant Garamond + Noto Serif/Sans KR)

## 로컬 개발

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
# dist/ 폴더에 정적 파일 생성
```

## Cloudflare Pages 배포

1. GitHub에 저장소 push
2. Cloudflare Dashboard → Pages → Create project
3. GitHub 저장소 연결
4. 빌드 설정:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: `20`
5. 도메인 설정: 기존 한글 도메인(리프팅엔왕실.net) → Custom domain 추가

## 폴더 구조

```
src/
├── components/
│   ├── Header.tsx / Header.module.css
│   ├── Hero.tsx / Hero.module.css
│   ├── TreatmentSection.tsx / TreatmentSection.module.css
│   ├── InfoSection.tsx / InfoSection.module.css
│   ├── RealSelfie.tsx / RealSelfie.module.css
│   ├── CommunitySection.tsx / CommunitySection.module.css
│   ├── Footer.tsx / Footer.module.css
│   └── FloatingButtons.tsx / FloatingButtons.module.css
├── App.tsx
├── App.css
├── index.css   ← 디자인 토큰 (CSS Variables)
└── main.tsx
```

## 디자인 변경 방법

`src/index.css` 상단의 CSS Variables만 수정하면 전체 사이트 색상/간격 변경 가능:

```css
:root {
  --color-gold: #c9a96e;      /* 포인트 색상 */
  --color-dark: #2a1f18;      /* 주요 다크 색상 */
  --color-cream: #faf8f4;     /* 배경 크림 */
  ...
}
```

## 이미지 교체

각 컴포넌트의 `imageUrl` 또는 `src` props를 실제 이미지 경로로 교체.
이미지는 `public/images/` 폴더에 저장 권장.
