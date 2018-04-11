# front end summary

## 표현디자인

### 1. css 란?
- [css current work](https://www.w3.org/Style/CSS/current-work)
- [css는 어떻게 동작하는가](https://developer.mozilla.org/ko/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works)

### 2. css 스타일링 방법 3가지
- inline style
- internal style
- external style

### 3. css 선택자

[예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-selectors.zip)

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

### 4. css 상속

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-inheritance.zip)

### 5. css Cascade

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-cascade.zip)

여러개의 css파일을 결합할때 충돌을 해결하는 프로세스가 cascade이다.

### 6. 타이포그래피

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-typography.zip)

### 7. 박스모델

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-box-model.zip)

### 8. list 스타일링

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-list-styling.zip)

### 9. 배경

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-backgrounds.zip)

### 10. 플로팅

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-layout-floating.zip)

### 11. 포지셔녕

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-layout-positioning.zip)

### 12. 테이블 스타일링

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-table-styling.zip)

### 13. 폼 스타일링

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/visual/exam/css-form-styling.zip)

### 14. css 2d 트랜스폼

- [mdn](https://developer.mozilla.org/ko/docs/Web/CSS/transform)

### 15. css 트랜지션

- [mdn](https://developer.mozilla.org/ko/docs/Web/CSS/transition)
- [Ceaser - css easing animation tool](https://matthewlein.com/tools/ceaser)

### 16. css animation

- [mdn](https://developer.mozilla.org/ko/docs/Web/CSS/animation)
- [easing.net](http://easings.net/ko)

### 17. css transform

- [mdn](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms)

### 18. css gradients

- [mdn](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Images/Using_CSS_gradients)

