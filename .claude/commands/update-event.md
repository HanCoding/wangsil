# 이벤트 팝업 수정

이벤트 팝업(메인 화면 진입 시 뜨는 팝업)의 내용을 수정합니다.

## 담당 파일

팝업 내용은 아래 5개 언어 파일의 `popup` 섹션에서 관리합니다:
- `src/locales/ko.ts` — 한국어 (원본)
- `src/locales/en.ts` — 영어
- `src/locales/ja.ts` — 일본어
- `src/locales/vi.ts` — 베트남어
- `src/locales/zh.ts` — 중국어

## 수정 방법

1. 먼저 `src/locales/ko.ts`의 `popup` 섹션을 읽어서 현재 내용을 파악한다.
2. 클라이언트가 요청한 내용으로 수정한다.
3. **5개 언어 파일 모두** 동일하게 반영한다. 한국어 외 언어는 번역하여 적용한다.

## 주요 항목 목록

| 항목 | 키 이름 |
|------|---------|
| 팝업 제목 | `popup.title` |
| 피부 이벤트 제목 | `popup.skinTitle` |
| 스킨보톡스 | `popup.skinBotox` / `popup.skinBotoxPrice` |
| 물광주사 | `popup.skinHydro` / `popup.skinHydroPrice` |
| 눈성형 이벤트 제목 | `popup.eyeTitle` |
| 눈밑지방재배치 | `popup.eyeFatRepo` / `popup.eyeFatRepoPrice` |
| 눈썹거상술 | `popup.eyeBrowLift` / `popup.eyeBrowLiftPrice` |
| 동안성형 이벤트 제목 | `popup.antiagingTitle` |
| 안면거상 | `popup.antiagingFacelift` / `popup.antiagingFaceliftPrice` |
| 실리프팅 한부위 | `popup.antiagingThreadSingle` / `popup.antiagingThreadSinglePrice` |
| 실리프팅 얼굴전체 | `popup.antiagingThreadFull` / `popup.antiagingThreadFullPrice` |
| 실거상 | `popup.antiagingThreadSilhouette` / `popup.antiagingThreadSilhouettePrice` |
| 필러 이벤트 제목 | `popup.fillerTitle` |
| 풀페이스 필러 | `popup.fillerFull` / `popup.fillerFullPrice` |
| 부가세 안내 | `popup.taxNote` |

## 주의사항

- 가격은 "10만원", "280만원" 형식으로 통일한다.
- 한국어 외 언어의 가격 표기는 해당 언어 파일의 기존 형식을 유지한다.
- 수정 후 변경한 항목을 간단히 요약해서 클라이언트에게 알려준다.
