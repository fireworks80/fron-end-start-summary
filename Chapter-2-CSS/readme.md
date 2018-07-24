# front end summary

## 표현디자인

### 1. css 란?

#### 참고자료
- [CSS Current Work](https://www.w3.org/Style/CSS/current-work)
- [CSS 2.1 기술 표준 문서](https://www.w3.org/TR/CSS2/)
- [CSS 지도서](https://developer.mozilla.org/ko/docs/Web/CSS)
- [CSS3 모듈화 과정](https://developer.mozilla.org/ko/docs/Web/CSS/CSS3)
- [CSS는 어떻게 작동할까?](https://developer.mozilla.org/ko/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works)

### [2-2] CSS를 사용해 HTML 문서를 스타일링하는 3가지 방법
- inline style
- internal style
- external style

#### 참고자료

- [CSS는 실제로 어떻게 작동할까?](https://developer.mozilla.org/ko/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works#CSS%EB%A5%BC_HTML%EC%97%90_%EC%A0%81%EC%9A%A9%ED%95%98%EB%8A%94_%EB%B0%A9%EB%B2%95)

- [download](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-basic-syntax.zip)

### [2-3] CSS 선택자(Selectors)

[예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-selectors.zip)

#### 참고자료
- [CSS 선택자](https://developer.mozilla.org/ko/docs/Learn/CSS/Introduction_to_CSS/%EC%84%A0%ED%83%9D%EC%9E%90)
- [반드시 기억해야 하는 CSS 선택자 30개](https://code.tutsplus.com/ko/tutorials/the-30-css-selectors-you-must-memorize--net-16048)

- **간단한 선택자**: 하나 이상의 요소에 element type, class 또는 id에 따라 대응합니다.

- **속성 선택자**: 하나 이상의 요소에 속성이나 속성값에 따라 대응합니다.
 
- **가상 클래스**: 특정한 상황에서만 존재하는 하나 이상의 요소에 대응합니다. 
            예를 들어, 마우스 포인터를 올려놨을 때만 나타나는 요소라던지, 비활성화되거나 체크표시된 체크박스라던지, DOM 트리구조에 부모의 첫번째 자식요소에 해당합니다.

- **가상 요소**: 어떤 요소와 관련되어 특정 위치에 있는 하나 이상의 콘텐츠에 대응합니다. 
           예를 들어, 매 문단의 첫 번째 단어라던가, 어떤 요소 바로 앞에 위치한 동적(generated) 콘텐츠에 해당합니다.
           결합자: 실제 선택자는 아니고, 매우 특별한 선택을 하기 위해 두개 이상의 선택자를 결합하는 방법입니다. 
           예를 들어, divs의 직계 자손(direct descendants)인 문단만 선택하거나, 제목 바로 뒤에 위치한 문단 같은 것을 말합니다.(역주 : AND)

- **다중 선택자**: 마찬가지로, 실제 선택자는 아닙니다. 한 개의 CSS 규칙에 여러개의 선택자를 쉼표로 구분하여
            정의하면, 그 선택자들에 해당하는 모든 요소들을 한번에 선택할 수 있습니다.(역주 : OR)

### mission 2-1

- [css diner](https://flukeout.github.io/)

### [2-4] CSS 상속(Inheritance)

#### 참고자료
- [CSS 상속(Inheritance)](https://developer.mozilla.org/ko/docs/Web/CSS/inheritance)

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-inheritance.zip)

### [2-5] CSS 케스케이드(Cascade)

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-cascade.zip)

#### 참고자료

- [CSS 케스케이드(Cascade)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance)
- [class 속성 개수가 11개면 id 속성 보다 우선할까요?](https://hashcode.co.kr/questions/5415/2-5-css-%EC%BC%80%EC%8A%A4%EC%BC%80%EC%9D%B4%EB%93%9Ccascade-%EC%97%90%EC%84%9C-%EC%A7%88%EB%AC%B8%EC%9D%B4-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4)

여러개의 css파일을 결합할때 충돌을 해결하는 프로세스가 cascade이다.

### [2-6] CSS 타이포그래피(Typography)

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-typography.zip)

- [포토샵에서의 타이포그래피 설정과 브라우저 상에서 렌더링되는 CSS와 차이가 납니다. 왜 그런 건가요?](https://hashcode.co.kr/questions/5536/%ED%8F%AC%ED%86%A0%EC%83%B5%EC%97%90%EC%84%9C%EC%9D%98-%ED%83%80%EC%9D%B4%ED%8F%AC%EA%B7%B8%EB%9E%98%ED%94%BC-%EC%84%A4%EC%A0%95%EA%B3%BC-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EC%83%81%EC%97%90%EC%84%9C-%EB%A0%8C%EB%8D%94%EB%A7%81%EB%90%98%EB%8A%94-css%EC%99%80-%EC%B0%A8%EC%9D%B4%EA%B0%80-%EB%82%A9%EB%8B%88%EB%8B%A4)

#### 참고자료
- [CSS 폰트/텍스트 스타일링](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)


### [2-7] CSS 박스모델 (Box Model)

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-box-model.zip)

#### 참고자료
- [CSS 박스 모델](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)
- [CSS 박스 스타일링](https://developer.mozilla.org/ko/docs/Learn/CSS/Styling_boxes)
- [CSS 레이아웃을 배웁시다 - box model](http://ko.learnlayout.com/box-model.html)

### [2-8] CSS 리스트(Lists) 스타일링

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-list-styling.zip)

#### 참고자료
- [리스트 스타일링](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists)
- [리스트 스타일 유형](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)

- [margin collapsing 현상](https://hashcode.co.kr/questions/5356/list-%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81%ED%95%A0-%EB%95%8C-margin%EA%B3%BC-padding%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%97%90-%EB%8C%80%ED%95%9C-%EC%A7%88%EB%AC%B8%EC%9E%85%EB%8B%88%EB%8B%A4)

### [2-9] CSS 배경(Backgrounds)

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-backgrounds.zip)

#### 참고자료
- [CSS 배경 스타일링](https://developer.mozilla.org/ko/docs/Learn/CSS/Styling_boxes/Backgrounds)
- [background-clip 속성](https://developer.mozilla.org/ko/docs/Web/CSS/background-clip)
- [background-origin 속성](https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin)

### [2-10] CSS 레이아웃 - 플로팅(Floating)

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-layout-floating.zip)

#### 참고자료
- [CSS 레이아웃](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout)
- [CSS 레이아웃을 배웁시다 - normal layout flow](http://ko.learnlayout.com/no-layout.html)
- [CSS 레이아웃을 배웁시다 - float](http://ko.learnlayout.com/float.html)
- [CSS 레이아웃을 배웁시다 - clear](http://ko.learnlayout.com/clear.html)
- [CSS 레이아웃을 배웁시다 - clearfix](http://ko.learnlayout.com/clearfix.html)
- [CSS 레이아웃을 배웁시다 - float layout](http://ko.learnlayout.com/float-layout.html)

### [2-11] CSS 레이아웃 - 포지셔닝(Positioning)

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-layout-positioning.zip)

#### 참고자료
- [CSS 레이아웃](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout)
- [CSS 레이아웃을 배웁시다 - position](http://ko.learnlayout.com/position.html)
- [CSS 레이아웃을 배웁시다 - position 예제](http://ko.learnlayout.com/position-example.html)

### [2-12] CSS 테이블(Table) 스타일링

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-table-styling.zip)

#### 참고자료
- [테이블 스타일링](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Styling_tables)
- [border-collapse](https://developer.mozilla.org/ko/docs/Web/CSS/border-collapse)
- [border-spacing](https://developer.mozilla.org/ko/docs/Web/CSS/border-spacing)
- [caption-side](https://developer.mozilla.org/ko/docs/Web/CSS/caption-side)
- [empty-cells](https://developer.mozilla.org/ko/docs/Web/CSS/empty-cells)
- [table-layout](https://developer.mozilla.org/ko/docs/Web/CSS/table-layout)

- [테이블 요소 앞에 요약 요소를 위치시킨 이유가 무엇일까](https://hashcode.co.kr/questions/5468/2-12-css-%ED%85%8C%EC%9D%B4%EB%B8%94table-%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81-%EA%B0%95%EC%9D%98%EC%97%90%EC%84%9C-%EC%A7%88%EB%AC%B8-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4)

### [2-13] CSS 폼(Form) 스타일링

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-form-styling.zip)

#### 참고자료
- [폼 스타일링](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Styling_HTML_forms)
- [폼 스타일링 고급](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms)
- [커스텀 폼 컨트롤 만들기](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets)

### [2-14] CSS 2D 트랜스폼(Transforms)

#### 참고자료
- [트랜스폼 사용하기](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- [트랜스폼 문법](https://developer.mozilla.org/ko/docs/Web/CSS/transform)
- [CSS Transforms (실습 완료) by codepen](https://codepen.io/fireworks80/pen/JZrGKd)

### [2-15] CSS 트랜지션(Transition)

#### 참고자료
- [트랜지션 사용하기](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [트랜지션 문법](https://developer.mozilla.org/ko/docs/Web/CSS/transition)
- [easings.net](https://easings.net/ko)
- [Ceaser - CSS EASING ANIMATION TOOL](https://matthewlein.com/tools/ceaser)
- [CSS Transition (실습 완료) by codepen](https://codepen.io/fireworks80/pen/VdMeyb)

### [2-16] CSS 애니메이션(Animation)

#### 참고자료
- [애니메이션 사용하기](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [애니메이션 문법](https://developer.mozilla.org/ko/docs/Web/CSS/animation)
- [easings.net](https://easings.net/ko)
- [Ceaser - CSS EASING ANIMATION TOOL](https://matthewlein.com/tools/ceaser)
- [CSS Animation (실습 완료) by codepen](https://codepen.io/fireworks80/pen/ERwPqN)

### [2-17] CSS 3D 트랜스폼(Transforms)

#### 참고자료
- [3D 트랜스폼 사용하기](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms#3D_%EA%B4%80%EB%A0%A8_CSS_%EC%86%8D%EC%84%B1)
- [트랜스폼 문법](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms)
- [Transforms - Learn to Code Advanced](https://learn.shayhowe.com/advanced-html-css/css-transforms/)
- [Intro to CSS 3D transforms](https://3dtransforms.desandro.com/)
- [CSS 3D 트랜스폼 (실습 완료) by codepen](https://codepen.io/fireworks80/pen/PaJNmL)

### [2-18] CSS 그레디언트(Gradients)

- [실습](https://codepen.io/fireworks80/pen/OEOwvy)

#### 참고자료
- [Using CSS Gradients](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- [선형(Linear) 그레디언트](https://developer.mozilla.org/ko/docs/Web/CSS/linear-gradient)
- [원형(Radial) 그레디언트](https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient)
- [둥근 테두리(Border Radius)](https://developer.mozilla.org/ko/docs/Web/CSS/border-radius)
- [박스 그림자(Box Shadow)](https://developer.mozilla.org/ko/docs/Web/CSS/box-shadow)
- [CSS 3D 그레디언트 (실습 완료) by codepen](https://codepen.io/yamoo9/full/RMRaYX)

### [미션 2-10] ARBUZZ 비주얼 디자인 ➡ 코드 디자인

- [psd](https://www.filepicker.io/api/file/smkFux4QHK259qMRDXnQ)
- [assetsLink](https://www.filepicker.io/api/file/ozPErqeQz6BJWWkk2MGH)
- [assetsZip](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/arbuzz-assets.zip)
- [ui-kit psd](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/ARBUZZ+UI-Kit.psd)

### [2-19] CSS 모던 레이아웃 - 플렉스박스(Flexbox)

#### 참고자료
- [CSS 모던 레이아웃 - Flexbox 시작하기! (실습 용도)](https://codepen.io/fireworks80/pen/RJjYrr)
- [CSS 모던 레이아웃 - Flexbox 인터랙티브 (실습)](https://codepen.io/fireworks80/pen/bKYxER)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)
- [Flexbox의 기본 개념](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Flexbox%EC%9D%98_%EA%B8%B0%EB%B3%B8_%EA%B0%9C%EB%85%90)
- [Flexbox 이해: 당신이 알아야 할 모든 것](https://www.vobour.com/1-flexbox-%EC%9D%B4%ED%95%B4-%EB%8B%B9%EC%8B%A0%EC%9D%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-%EB%AA%A8%EB%93%A0-%EA%B2%83-understa)
- [CSS 레이아웃을 배웁시다. - Flexbox](http://ko.learnlayout.com/flexbox.html)
- [Solved by Flexbox (한국어 번역)](https://hyunseob.github.io/solved-by-flexbox-kr/)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Cheatseet](https://yoksel.github.io/flex-cheatsheet/#order)
- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
- [크로스 브라우징 / CSS모듈화 / 반응형 관련 질문드립니다.](http://fast-frontend.hashcode.co.kr/questions/5824/%ED%81%AC%EB%A1%9C%EC%8A%A4-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A7%95-css%EB%AA%A8%EB%93%88%ED%99%94-%EB%B0%98%EC%9D%91%ED%98%95-%EA%B4%80%EB%A0%A8-%EC%A7%88%EB%AC%B8%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4)
- [flex box 개구리 게임](http://flexboxfroggy.com/#ko)    

![컨테이너와 아이템 이미지](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/images/flex/flex1.PNG)

    ** container **
    주축(main axis)과 교차축(cross axis)
        

![컨테이너와 아이템 이미지](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/images/flex/flex2.PNG)

        ** 주축 **
        .container {
            display: flex; // 부모가 display: flex일경우 **자식만 flex item**이 된다.        
            flex-direction: 
                /* 주축에 대한 자식의 방향 설정
                 row는 주 축이 좌 - 우 */
                row (default) | row-reverse | 

                /* 주축이 위 - 아래로 변경 됨 */
                 column | column-reverse; 

            justify-content: flex-start | center | flex-end | space-between | space-evenly; // 주축에 의한 자식들의 위치 설정            
        }
        
        flex-wrap: nowrap(default) | wrap; // container 크기 보다 item의 길이가 넘칠 때 
        
        **속기**
        flex-flow: direction wrap;

        ** 교차축 **
        align-content: flex-start | center | flex-end | space-between | space-evenly | strech; // container안의 아이템들을 덩어리로 정렬
        
        align-items: flex-start | center | flex-end | baseline | strech(default); // container의 개별 아이템의 정렬

    ** item **
        flex item은 기본적으로 flex-shrink(flex의 자식요소가 줄어듦)이 1로 설정되어 있어서 container의 크기에 맞춰서 자식요소의 크기가 정해지므로 width를 줘도 크기가 변하지 않는다.
        만약 width를 주고 싶으면 item에 flex-shrink: 0;으로 줘야 한다.

        정리: 
        flex-shrink: 1(default); // item의 크기를 줄어들게 한다.
                                 // 단 기본값이 1이므로 item의 width가 정해져 있어도 크기는 변하지 않는다.
                                 // width로 설정된 값으로 변화 시키려면 shrink의 값을 0으로 설정한다.

        flex-grow: 0(default); // item의 크기를 늘려 준다.
                               // 1로 설정하면 item의 크기는 container안에서 균등하게 늘어난다.
                               // 개별적으로 grow값을 주면 container안에서 개별적으로 받은 값만큼 크기를 갖게 된다.

        flex-basis: value; // flex box에서는 width값을 쓰지 않는다.
                           // flex-basis === width
                           // 하지만 grow가 설정되어 있으면 크기값은 변하지 않으므로 grow: 0으로 설정후 basis값을 설정 한다.
                           // 하지만 container의 너비의 크기 까지만 값이 설정 된다.

        위의 3개를 단축해서 사용 할 수 있다.

        item {
            flex: grow shrink basis;
        }

        order: 내가 원하는 요소의 위치를 설정 할 수 있다.

        p:nth-child(2) { order: 3; } // 현재 나의 위치가 0 임

        align-self: auto(default) | flex-start | flex-end | center | baseline | stretch; // container에서의 align-items와 유사함 
                   // align-items는 부모가 자식들에게 일괄적으로 적용
                   // align-self는 자식 자신한테 설정

### [2-20] CSS 보더 이미지 (border-image)
- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/practice-assets.zip)
- [실습 codepen](https://codepen.io/fireworks80/pen/odbojp)

#### 참고자료
- [border-image, W3C](https://www.w3.org/TR/css-backgrounds-3/#border-images)
- [border-image, MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image)
- [border-image, Sitepoint](https://www.sitepoint.com/css3-border-image/)

### [2-21] CSS 멀티 컬럼(Multi Columns) 레이아웃
- [살습 codepen](https://codepen.io/fireworks80/pen/GdoOow)

#### 참고자료
- [CSS Multi-column Layout Module Level 1](https://www.w3.org/TR/css-multicol-1/)
- [CSS 다단 레이아웃 사용](https://developer.mozilla.org/ko/docs/CSS3_Columns)

### [2-22] CSS 모던 레이아웃 - 그리드(Grid)

#### 실습자료
- [css grid 용어](https://codepen.io/fireworks80/pen/WJrXJQ)
- [간단한 그리드 레이아웃 (실습)](https://codepen.io/fireworks80/pen/odbodP)
- [그리드 라인 인덱스를 사용한 아이템 위치 설절 (실습)](https://codepen.io/fireworks80/pen/pVgdKN)
- [오더 속성을 사용한 아이템 위치 설정 (실습)](https://codepen.io/fireworks80/pen/YLwEjd)
- [웹사이트 기본 레이아웃 grid-area(실습)](https://codepen.io/fireworks80/pen/KRVyGN)
- [grid-template-areas(실습)](https://codepen.io/fireworks80/pen/GdoOYb)
- [grid-auto-flow(실습)](https://codepen.io/fireworks80/pen/WJrXYw)
- [자동 배치 패킹 모드(실습)](https://codepen.io/fireworks80/pen/RyrjqO)
- [행/열 기준 내부 아이템 정렬(실습)](https://codepen.io/fireworks80/pen/ZoQaVJ)
- [grid example](https://gridbyexample.com/)
- [css grid playground](https://www.cssgridplayground.com/)
- [css grid layout 한글 번역](https://github.com/fireworks80/CSS-Grid)
- [css grid garden game](https://cssgridgarden.com/#ko)

#### 참고자료
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)
- [CSS Grid Layout Module Level 2 (초안, 개발 중...)](https://www.w3.org/TR/css-grid-2/)
- [INTRODUCTION TO CSS GRID LAYOUT](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Grid 레이아웃 모듈 레벨 1(번역)](https://github.com/yamoo9/CSS-Grid)
- [cssgridplayground.com](https://www.cssgridplayground.com/)
- [gridbyexample.com](https://gridbyexample.com/)
- [autoprefixer.github.io](https://autoprefixer.github.io/)