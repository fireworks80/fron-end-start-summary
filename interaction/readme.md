# front end summary

## 인터렉션 디자인(JavaScript)

### 1. 자바스크립트란?

- [sef2017 '디자이너 디자인에 코딩을 더하다' 영상](http://www.edwith.org/sef2017/lecture/11260)
- [sef2017 '디자이너 디자인에 코딩을 더하다' 키노트](https://www.slideshare.net/jeehoon/sef-2017)

### 2. console 패널 사용법

- [개발도구  콘솔 패널 사용법](https://developers.google.com/web/tools/chrome-devtools/console/?hl=ko)

### 3. 형변환

        parseInt('문자열', '진법'); // 숫자로된 문자 뿐만 아니라 글자가 있는 숫자 값도 숫자로 파싱됨

        e.g.) parseInt('10px', 10); // 10 (Number)

        Number('문자열') // 숫자로된 문자만 숫자로 파싱됨 그외의 값은 NaN 반환

        e.g.) Number('20'); // 20 (Number)


### 4. 문서객체 접근

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/DOM-API__accessing-document-objects.zip)

        tagName명으로 선택
        var tags = document.getElementsByTagName('태그명'); // HTMLCollection으로 반환
        tags.item(0); // 0번부터 선택
        tags[0]; // 위와 같음


        id 값으로 요소 선택
        document.getElementById('아이디명');

        class 속성값으로 선택
        document.getElementsByClassName('클래스 속성명'); // HTMLCollection으로 반환

        css 선택자로 선택
        document.querySelector('css 선택자 명);
        document.querySelectorAll('css 선택자 명); // NodeList로 반환

        * HTMLCollection은 예전 버전에서 사용 했으므로 더이상 사용하지 말것
        * NodeList의 사용을 권장한다.

### 5. 함수(내장함수 / 사용자 정의 함수)

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/JavaScript-Functions.zip)

### 6. 조건문

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/js-conditions-if-else.zip)

### 7. 비교연산자와 논리연산자를 활요한 조건문

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/js-operators-typeof.zip)

        * typeof는 Array, null을 'object'값을 리턴한다.

### 8. switch, Date

- [switch](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/js-condition-switch.zip)
- [date](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/js-date-object.zip)
- [switch-display-datetime](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/js-date-switch-display-datetime.zip)

### 9. 문(statement), 식(expression)

- [식](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#%ED%91%9C%ED%98%84)
- [문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements)
- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/js-condition-ternary-expression.zip)

        *식 === 값
        *문: 흐름제어, 선언, 함수, 클래스, 반복kb

        var data1 = a && b; // a가 참이면 data1 = b가 되고 a가 거짓이면 data1 = a;
        var data2 = a || b; // a가 찹이면 data2 = a; 가 된고 a가 거짓이면 data2 = b;

### 10. DOM API 이벤트 핸들링

- [mdn](https://developer.mozilla.org/ko/docs/Web/API/Event)

  event handler는 DOM event에 연결된 함수.

        *lazyload


### 11. Keyboard event

- [mdn](https://developer.mozilla.org/ko/docs/Web/API/KeyboardEvent)
        
        // 키보드 이벤트 핸들링 (Keyboard Event Handling)
        //
        // - 이벤트 속성: keydown, keypress, keyup / input(HTML5)
        // - 이벤트 객체 (Event Object)
        //
        // 이벤트 발생 순서
        // keydown ➔ keypress ➔ keyup
        //
        // 키가 처음 눌려지면 keydown 이벤트가 발생합니다.
        // (영문, 숫자, space, enter, 한글, tab, caps lock, shift, ctrl, alt(option), command, arrow, F1~12)
        //
        // keydown 이벤트 이후, keypress 이벤트가 발생합니다.
        // (영문, 숫자, space, enter)
        //
        // 키를 놓으면 keyup 이벤트가 발생합니다.
        // (tab, caps lock 발생 X)

### 12. 배열(Array)과 반복(while, do while, for, for in)

        var menuList = els('.list');

        var openPannel = function(e) {
          e.preventDefault();
          var figCaption = el('figcaption', this); // this는 openPannel 함수를 실행 시킨 주체를 가리킨다 (item);
          figCaption.style.color = this.color; // item.color
        };

        for(var i = 0; i < menuList.length; i += 1) {
          var item = menuList[i];
          item.color = 'red'; // item은 객체이고 객체는 속성을 갖을 수 있으므로 item의     color이라는 속성에 red값을 넣는다.
          item.addEventListener('click', openPannel);
        }


