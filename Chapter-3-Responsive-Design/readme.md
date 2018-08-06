# [Chapter 3] 반응형 디자인 (Responsive Design)

## [3-1] RWD 반응형 웹 디자인이란?

### 참고자료
- [반응형 웹 디자인 (Responsive Web Design)](http://alistapart.com/article/responsive-web-design)
- [반응형 웹디자인 (도서)](http://book.naver.com/bookdb/book_detail.nhn?bid=12712464)

## [3-2] RWD 콘텐츠 중심 전략 및 구성 방법과 레이아웃

### 참고자료
- [콘텐츠 구성 (Content Choreography)](https://trentwalton.com/2011/07/14/content-choreography/)
- [반응형 웹사이트를 위한 콘텐츠 구성 (Content Choreography for responsive Websites)](https://blog.kulturbanause.de/2013/12/content-choreography-fur-responsive-websites/)
- [콘텐츠 구성 빌딩 (Building with Content Choreography)](https://fastcampus.teachable.com/courses/291242/lectures/jordanm.co.uk/2012/04/26/building-with-content-choreography.html)
- [CSS 플렉스박스 레이아웃 모듈](https://www.w3.org/TR/css-flexbox-1/)

## [3-3] RWD 유연한 그리드 (Fluid Grids)

- [실습 : RWD - 유연한 그리드(Fluid Grids)](https://codepen.io/fireworks80/pen/eKBEzy)

### 참고자료
- [유연한 그리드 (Fluid Grids)](http://alistapart.com/article/fluidgrids)
- [상대 단위 - rem - can i use](https://caniuse.com/#feat=rem)
- [상대 단위 - 뷰포트(Viewport) vw, vh, vmin, vmax - can i use](https://caniuse.com/#feat=viewport-units)
- [calc() 함수 - can i use](https://caniuse.com/#feat=calc)

## [3-4] RWD 유연한 이미지 (Fluid Images)

### 실습 링크

- [RWD - 유연한 콘텐츠 이미지 (실습 용도)](https://codepen.io/yamoo9/pen/geVPNb)
- [RWD - 유연한 배경 이미지 (실습 용도)](https://codepen.io/yamoo9/pen/GxVjWz)

### 참고자료
- [유연한 이미지 (Fluid Images)](https://alistapart.com/article/fluid-images)

## [3-5] RWD 재단 이미지 (Crop Images)

### 실습 링크

- [RWD - 크롭 배경 이미지 (실습 용도)](https://codepen.io/fireworks80/pen/pKNrKa)
- [RWD - 크롭 콘텐츠 이미지 (실습 용도)](https://codepen.io/fireworks80/pen/XYNaYx)

### 참고자료

- [다른 크롭 이미지 방법 (콘텐츠 이미지의 경우)](https://stackoverflow.com/questions/18247356/how-to-center-crop-an-image-img-in-fluid-width-container?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)

## [3-6] RWD 유연한 미디어 (Fluid Media)

- [실습 - 유연한 미디어](https://codepen.io/fireworks80/pen/zaoEvQ)

### 참고
영상 강의에서 다룬 내용을 기초로 해서 재사용 가능한 클래스를 보다 쉽게 
사용할 수 있도록 다음과 같이 설계(Design) 할 수 있습니다.

    /* img, video 요소에 설정 */
    .rwd-image, .rwd-video {
      width: 100%;
      max-width: 100%; /* 비트맵 이미지의 경우 이미지 자체 크기보다 커지지 않게 설정 */
      height: auto;
    }

    /* iframe, embed, object 부모 요소에 설정 */
    .rwd-media {
      overflow: hidden;
      position: relative;
      max-width: 100%;
      height: 0 !important;
    }

    /* 영상 화면 비율에 따른 멀티 클래스 */
    .rwd-media.is-4x3  { padding-top: calc(3/4*100%);  }
    .rwd-media.is-16x9 { padding-top: calc(9/16*100%); }
    .rwd-media.is-21x9 { padding-top: calc(9/21*100%); }

    /* .rwd-media 내부 iframe, embed, object 요소 설정 */
    .rwd-media iframe,
    .rwd-media object,
    .rwd-media embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }

### 참고자료
- [Responsive Iframes with One Great CSS Trick](https://blog.theodo.fr/2018/01/responsive-iframes-css-trick/)
- [How to make Youtube video responsive in Shopify – A Shopify Small Tweak](https://medium.com/specialist-channel-best-way-to-get-shopify-hel/how-to-make-youtube-video-responsive-in-shopify-a-shopify-small-tweak-3c70ddd1c253)

## [3-7] RWD 장치 별 픽셀 밀도에 대응 (Device Pixel Density)

### 참고자료
- [Pixel Density, Demystified](https://medium.com/@pnowelldesign/pixel-density-demystified-a4db63ba2922)
- [Pixel Density, Demystified (번역 글)](https://brunch.co.kr/@blackindigo-red/18)

## [3-8] RWD 중단점과 미디어 쿼리 (Breakpoint & Media Queries)

- [실습]{https://codepen.io/fireworks80/pen/pKegXW}

### 참고자료
- [응답형 및 기기별 뷰포트 테스트](https://developers.google.com/web/tools/chrome-devtools/device-mode/emulate-mobile-viewports?hl=ko)
- [Stat Counter](http://gs.statcounter.com/)
- [W3 Counter](https://www.w3counter.com/globalstats.php)
- [internettrend.co.kr](http://www.internettrend.co.kr/trendForward.tsp)
- [viewportsizes.com](http://viewportsizes.com/)
- [Troy 서비스](http://troy.labs.daum.net/)
- [resizer](https://material.io/tools/resizer/)
- [iPhone X Screen Demystified](https://www.paintcodeapp.com/news/iphone-x-screen-demystified)
- [The Ultimate Guide To iPhone Resolutions](https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions)
- [Samsung Galaxy S9, S9+ User Agent String](https://51degrees.com/blog/samsung-galaxy-s9-and-s9-user-agents)

## [3-X] Folio 반응형 웹 사이트 구현
### Folio RWD
공부한 반응형 웹의 원리와 이론을 활용하여 Folio 웹사이트 시안을 분석한 다음 웹 사이트로 구현해보세요.
모바일, 태블릿, 데스크탑 화면에 최적화된 뷰(View)를 최대한 제공할 수 있도록 만들어 보세요.

Folio 디자인 시안은 다음과 같습니다. 첨부한 그래픽 리소스를 다운로드 받아 미션을 진행해보세요.
[PSD.7z](https://www.filepicker.io/api/file/G6qamgPrSRimQ8dAyTlt) 파일은 Photoshop 파일이고, [Sketch.7z](https://www.filepicker.io/api/file/AbNYHkUxTom3n2CDKsLp) 파일은 스케치 애플리케이션(Mac 전용) 파일입니다.
시안에 사용된 폰트는 [fonts.7z](https://www.filepicker.io/api/file/M0yk3j1qRhaTKtU45pc5) 파일을 다운로드 받으세요.

### 참고자료
- [Folio ui kit behance](https://www.behance.net/gallery/22832297/Folio-UI-Kit)
- [Folio UI kit(구매)](https://ui8.net/products/folio-ui-kit)
