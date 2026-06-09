# 빌드 & 배포

웹사이트를 빌드하고 Cloudflare Pages에 배포합니다.

## 배포 순서

다음 순서로 진행한다. 각 단계에서 오류가 발생하면 즉시 중단하고 클라이언트에게 알린다.

### 1단계: 빌드

```
npm run build
```

- TypeScript 컴파일 → Vite 빌드 → SSR 빌드 → Pre-rendering 순서로 실행된다.
- 빌드 결과물은 `dist/` 폴더에 생성된다.
- 빌드 시간: 약 1~3분

### 2단계: 배포

```
npx wrangler pages deploy dist
```

- Cloudflare Pages에 `dist/` 폴더를 업로드한다.
- 배포 후 라이브 URL이 출력된다.

## 주의사항

- 배포 전 반드시 변경사항이 저장되어 있는지 확인한다.
- 빌드 오류가 있으면 배포를 진행하지 않는다.
- 배포 완료 후 실제 사이트에서 변경 내용이 반영되었는지 확인을 권장한다.
- 배포에는 Cloudflare 인증이 필요하다. 로그인이 안 되어 있으면 `npx wrangler login` 먼저 실행한다.

## 빠른 확인

배포 전 로컬에서 미리 보고 싶다면:

```
npm run preview
```
