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

### 19. flexbox(ie10+: 부분적용)

- [w3c](https://www.w3.org/TR/css-flexbox-1/)
- [mdn](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Flexbox%EC%9D%98_%EA%B8%B0%EB%B3%B8_%EA%B0%9C%EB%85%90)
- [blog](https://www.vobour.com/1-flexbox-%EC%9D%B4%ED%95%B4-%EB%8B%B9%EC%8B%A0%EC%9D%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-%EB%AA%A8%EB%93%A0-%EA%B2%83-understa)
- [레이아웃을 배웁시다](http://ko.learnlayout.com/flexbox.html)
- [css trick](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [flexbox cheatseet](https://yoksel.github.io/flex-cheatsheet/#order)
    
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