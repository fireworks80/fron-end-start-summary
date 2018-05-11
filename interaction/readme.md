# front end summary

## 인터렉션 디자인(JavaScript)

### 4-1 자바스크립트란?

- [sef2017 '디자이너 디자인에 코딩을 더하다' 영상](http://www.edwith.org/sef2017/lecture/11260)
- [sef2017 '디자이너 디자인에 코딩을 더하다' 키노트](https://www.slideshare.net/jeehoon/sef-2017)

### 4-2 최고의 javascript 교과서란?

- [mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript)

### 4-3 console 패널 사용법

- [개발도구  콘솔 패널 사용법](https://developers.google.com/web/tools/chrome-devtools/console/?hl=ko)

### 4-4 주석(Comments) & 디버깅(Debugging)​
....

### [4-5] 선언(Declaration) & 할당(Assignment)

- [문법과 타입](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals)

### [4-6] 인터랙션 디자인의 시작 - "an문서 객체가 가진 값 그리고 변수"
....

### 4-7 데이터 유형(Data Types) & 리터럴(Literal)
....

### 4-8 변수 이름 작성 규칙(Naming Convention)
....


### 4-9 동적 형 지정 언어 & 자동 형 변환

        parseInt('문자열', '진법'); // 숫자로된 문자 뿐만 아니라 글자가 있는 숫자 값도 숫자로 파싱됨

        e.g.) parseInt('10px', 10); // 10 (Number)

        Number('문자열') // 숫자로된 문자만 숫자로 파싱됨 그외의 값은 NaN 반환

        e.g.) Number('20'); // 20 (Number)


### 4-10 문서 객체의 ID 속성 이름 값 만으로 대상을 선택해서는 안되는 이유

- [변수의 호이스팅](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#%EB%B3%80%EC%88%98_%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85)

### 4-11 문서객체 접근

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

### 4-12 함수(내장함수 / 사용자 정의 함수)

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/JavaScript-Functions.zip)

### 4-13 조건문

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/js-conditions-if-else.zip)

### 4-14 비교연산자와 논리연산자를 활요한 조건문

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/js-operators-typeof.zip)

        * typeof는 Array, null을 'object'값을 리턴한다.

### 4-15 switch, Date

- [switch](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/js-condition-switch.zip)
- [date](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/js-date-object.zip)
- [switch-display-datetime](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/js-date-switch-display-datetime.zip)

### 4-16 문(statement), 식(expression)

- [식](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#%ED%91%9C%ED%98%84)
- [문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements)
- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/js-condition-ternary-expression.zip)

        *식 === 값
        *문: 흐름제어, 선언, 함수, 클래스, 반복kb

        var data1 = a && b; // a가 참이면 data1 = b가 되고 a가 거짓이면 data1 = a;
        var data2 = a || b; // a가 찹이면 data2 = a; 가 된고 a가 거짓이면 data2 = b;

### 4-17 DOM API 이벤트 핸들링

- [mdn](https://developer.mozilla.org/ko/docs/Web/API/Event)

  event handler는 DOM event에 연결된 함수.

        *lazyload


### 4-18 DOM API click 이벤트 핸들링

- [마우스 이벤트](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
- [click event](https://developer.mozilla.org/ko/docs/Web/Events/click)
- [event.preventDefault](https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault)
- [오디오 객체](https://developer.mozilla.org/ko/docs/Web/API/HTMLAudioElement)
- [오디오 객체 메서드](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play)
- [오디오 객체 currentTime](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/currentTime)

### 4-19 Keyboard event

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

### 4-20 배열(Array)과 반복(while, do while, for, for in)

        var menuList = els('.list');

        var openPannel = function(e) {
          e.preventDefault();
          var figCaption = el('figcaption', this); // this는 openPannel 함수를 실행 시킨 주체를 가리킨다 (item);
          figCaption.style.color = this.color; // item.color
        };

        for(var i = 0; i < menuList.length; i += 1) {
          var item = menuList[i];
          item.color = 'red'; // item은 객체이고 객체는 속성을 갖을 수 있으므로 item의 color이라는 속성에 red값을 넣는다.
          item.addEventListener('click', openPannel);
        }

### 4-21 이벤트 Load vs DOMContentLoaded

- [async & defer 속성간 차이](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)
- [Asynchronouse vs Deferred JavaScript](https://bitsofco.de/async-vs-defer/)
- [script의 async 와 defer 속성(한글)](https://blog.asamaru.net/2017/05/04/script-async-defer/)
- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/load-vs-dom_content_loaded--aysn-vs-defer.zip)
    
    서버에 요청한 Javascript 파일이 다운로드/실행되는 동안 HTML 해석(Parsing)은 일시정지 (Paused)상태가 된다. 이런 이유로 Javascript 호출/삽입 위치는 사용자 경험(UX)에 큰 영향을 미친다.

    의존성: 현재 사용하는 index.js 파일에서 사용할 플러그인, helper 함수등 이 없을경우 index.js는 제대로 작동하지 않게 된다. 이런 경우 index.js에서 사용할 플러그인, helper 파일을 제대로 로드 해줘야 한다. 이런 경우 index.js 는 플러그인과, helper 파일에 의존하고 있다고 한다.

    load event: image 까지 모두 load 후에 이벤트가 작동
    DOMContentLoaded(ie9+): dom 구조가 완성되면 실행
    
    하지만 javascript를 다운로드 하는데 1초가 걸린다면 domcontentloaded 또한 1초가 걸린다.
    가장 대표적인 해결 방법은 &lt;/body&gt;앞에 &lt;script&gt;를 넣는것이다.
    그러면 이벤트(load , DomContentLoaded)가 필요가 없다.
    이 또한 image가 로딩되는 거와 상관없어 dom구조가 완성되면 script를 실행 할 수 있다.

    script defer: server에서 js를 받아올때 html의 파싱도 같이 되고 html 파싱이 끝나면 js파일이 실행이 된다.

    script async: html파싱이 되면서 js도 같이 다운로드 되지만 js가 실행이 될때는 html의 파싱이 멈춘뒤 js의 실행이 끝나고 html의 나머지가 다시 파싱이 된다.
 
 ### 4-22 값복사 / 값 참조

- [codepen 실습](https://codepen.io/fireworks80/pen/QrvgGd)
- [데이터 복사, 전달 및 비교](https://docs.microsoft.com/ko-kr/scripting/javascript/advanced/copying-passing-and-comparing-data-javascript)
- [java에서의 값 복사 / 값 참조](http://www.mathwarehouse.com/programming/passing-by-value-vs-by-reference-visual-explanation.php)


    값복사
    - null
    - undefined
    - number
    - string
    - boolean

    값참조
    - array
    - object
    - function

 ### 4-23 함수영역 vs 블록영영
 - [codepen 실습](https://codepen.io/fireworks80/pen/jxmwZL)
 - [변수, 전역, 함수, 블록 영역 wiki](https://ko.wikipedia.orgwiki/%EB%B3%80%EC%88%98_%EC%98%81%EC%97%AD)
    
    javascript는 c 언어의 영향을 받았지만 블록 스코프를 지원 하지 않는다.
    하지만 ECMAScript 2015(es6)를 사용하게 되면서
    var -> let를 사용하게 되고 블록스코프를 지원하게 된다.

### 4-24 변수, 함수 호이스팅 / 스코프체이닝

- [codepen 실습](https://codepen.io/fireworks80/pen/wjdeNd?editors=0010)
- [호이스팅 mdn](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)
- [변수 mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/var)
- [함수 mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/function)
- [스코프 체이닝](http://knphouse.co.kr/91)
    
    실행컨텍스트: 실행되는 영역
    
    e.g.)
    var a = 'alpha';
    function b() {
        console.log('b');
    }

    conosole.log(a); //a
    b(); // b

    // ---------------------------------------------------
    
    d(); // d
    console.log(c); // undefined

    var c = 'c';
    function d() {
        console.log('d');
    }

    // 작성된 코드를 outer environment에서 해석을 해서 브라우저에서 실행을 시킨다.
    // 컵퓨터는 변수 및 함수선언은 컴파일 단계에서 메모리에 저장된다.
    // 위의 코드가 실행되기 전에 var c , function d(){} 를 메모리에 먼저 등록이 된다.
    // 그래서 function d는 실행이 가능하다.
    // 변수: 변수선언 - 변수에 값할당 - 변수 스코프를 설정과정을 거치는데.
    // var c가 먼저 메모리에 할당 되므로 c에는 undefined가 할당 되어 있다.

    // 스코프 체이닝
    // 변수를 포함한 스코프 내에서 해당 변수가 없을 경우 현재 스코프를 포함하고 있는 상위 스코프로 이동하면서 해당 변수를 찾는 것

    e.g.)

    function a(d) {
        var x = d;
        b(x + 10);

        function b(y) {
            c();

            function c() {
                var z = 3;
                console.log(x + y + z); // y는 자신의 컨텍스트에 없으므로 상위인 b()로 이동
                                        // x는 자신의 컨텍스트와 상위인 b()에도 없으면서 a()로 이동하여 찾는다.
            }
        }
    }

    a(10);

    // 스코프 체이닝은 성능관점에서 비용이 많이 들어가므로  함수의 중첩은 가능하면 피한다.

    // 코드작성 요령
    // 번수 선언 / 초기화, 함수 선언/표현식을 scope 최상단에 작성하자.


### 4-25 IIFE 

- [codepen](https://codepen.io/fireworks80/pen/ELXgbB)
- [mdn iife](https://developer.mozilla.org/ko/docs/Glossary/IIFE)

    (function() {
            // 1. ()로 둘러쌓인 익명함수
            //     - 캡슐화
            //     - 전역범위의 오염을 방지
            //     - IIFE 내부 변수에 접근하는것을 방지
    }());

### 4-26 closure

- [codepen](https://codepen.io/fireworks80/pen/WJOoOW)
- [mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)

    // 함수와 함수가 선언된 어휘적 환경(Lexical scoping)(자유변수)의 조합
    

** 리팩토링 **
- 리팩토링은 새로운 기능 추가 없이 소스 코드의 구조(조직적,체계적)를 향상시키는 일련의 과정
- 리팩토링의 목적은 기술적 부채(technical debt)를 값아서 없애는 것
- 리팩토링의 결과로 깔끔한 코드(clean code)와 심플한 설계를 얻는 것

- [codepen](https://codepen.io/fireworks80/pen/deRVMW)
- [리팩토링이란?](http://kwangshin.pe.kr/blog/2015/02/17/refactoring-study/)
- [리팩토링 slideshare](https://www.slideshare.net/bbongcsu/refactoring-tutorial-1refactoring)

### 4-27 숫자 / 수학 객체 

- [숫자와 날짜](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Numbers_and_dates)
- [부동소수점](https://ko.wikipedia.org/wiki/%EB%B6%80%EB%8F%99%EC%86%8C%EC%88%98%EC%A0%90)
- [부동소수점 연산의 정밀도와 정확도](https://support.microsoft.com/ko-kr/help/125056/info-precision-and-accuracy-in-floating-point-calculations)
- [실수 연산 오류](http://sunychoi.github.io/javascript/2015/04/05/javascript-float-type-error.html)
- [javascript number](http://jun.hansung.ac.kr/CWP/Javascript/JavaScript%20Numbers.html)
- [codepen](https://codepen.io/fireworks80/pen/odpxQj)

### 4-28 문자열 리터럴 / 객체 활용

- [String 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String)
- [문자열 제대로 다루기](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/Useful_string_methods)
- [navigator.userAgent](https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator)
- [slice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [indexOf()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
- [createElement()](https://developer.mozilla.org/ko/docs/Web/API/Document/createElement)
- [appendChild()](https://developer.mozilla.org/ko/docs/Web/API/Node/appendChild)


### 4-29 함수객체 활용

- [용어사전](https://developer.mozilla.org/ko/docs/Glossary/Function)
- [가이드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%ED%95%A8%EC%88%98)
- [function  객체 속성과 메서드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [call()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [apply()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [bind()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- [계승](https://ko.wikipedia.org/wiki/%EA%B3%84%EC%8A%B9)

### 4-30 배열 객체활용

- [mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
- isArray
- length
- concat()
- forEach()
- indexOf()
- join()
- map()
- pop()
- reduce()
- reverse()
- shift()
- slice()
- sort()
- splice()
- unshift()

    splice() // 배열의 데이터 삭제
    slice() // 배열 복사

    // 변경 메서드(원본 배열 데이터 수정)
    push()
    pop()
    unshift()
    shift()
    reverse()
    sort()
    splice()

    // 접근 메서드(원본 배열 데이터 보존)
    concat()
    indexOf()
    lastIndexOf()
    join()
    slice()
    toString()

    // 반복 메서드(원본 배열 데이터 보존) 
    forEach(function(item, index){})
    map(function(item, index){})
    filter(function(item, index){})
    every(function(item, index){})
    some(function(item, index){})
    reduce(function(item, index){})

### 4-31 객체 생성/상속/속성 고급 제어

- [mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)
- create()
- defineProperty()
- defineProperties()
- preventExtensions()
- isExtensible()
- seal()
- isSealed()
- freeze()
- isFrozen()
- hasOwnProperty() 인스턴스 메서드

### 4-32 생성자 함수와 프로토타입 객체

- [codepen](https://codepen.io/fireworks80/pen/YLayMV)
- [new 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new)
- [생성자 함수 사용하기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Obsolete_Pages/Core_JavaScript_1.5_Guide/Creating_New_Objects/Using_a_Constructor_Function)
- [상속과 프로토 타입](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

### 4-33 객체 지향 프로그래밍 & 상속

- [codepen](https://codepen.io/fireworks80/pen/QrrWjg)
- [상속](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
- [objectplayground.com](http://www.objectplayground.com/)
- [러시안 블루](https://ko.wikipedia.org/wiki/%EB%9F%AC%EC%8B%9C%EC%95%88_%EB%B8%94%EB%A3%A8)
- [객체 지향 프로그래밍](https://namu.wiki/w/%EA%B0%9D%EC%B2%B4%20%EC%A7%80%ED%96%A5%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)
- [객체 지향 자바 스크립트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)

### 4-34 객체지향 프로그래밍 용어
    용어정리
    - Class - 객체 속성(Properties)을 정의합니다. ( 예: 설계 도면 )
    - Object - Class의 인스턴스(Instance) 입니다. ( 예: 설계 도면을 통해 구현된 실제 제품 )
    - Property - 객체의 속성을 말합니다. ( 예: color 등과 같은 명사 형태 )
    - Method - 객체의 기능을 말합니다.( 예: walk() 등과 같은 동사 형태 )
    - Constructor - 인스턴스 생성 순간에 호출 실행되는 메서드입니다.
    - Inheritance - Class는 다른 Class로 부터 속성들을 상속받을 수 있습니다. (Super Class ⇒ Sub Class)
    - Encapsulation - Class는 해당 객체의 속성, 메서드 만 정의할 수 있습니다. (외부 접근 불가)
    - Abstraction - 복잡한 상속, 메서드, 객체 속성의 결합은 반드시 현실 모델을 시뮬레이션할 수 있어야 합니다.
    - Polymorphism - 다른 Class 들이 같은 메서드나 속성으로 정의될 수 있습니다.

### 4-35. 함수형 프로그래밍 vs 객체지향 프로그래밍

- [함수형 프로그래밍으로 UI인터랙션 디자인 야무 git fork](https://gist.github.com/fireworks80/935672ed803e0e9774912fa8c78283a6)
- [객체지향 프로그래밍으로 UI인터랙션 디자인 야무 git fork](https://gist.github.com/fireworks80/c26bf04689af16feef9afe22ff8acb4c)
- [프로그래밍 패러다임](http://melodyonlight.com/?p=374)
- [함수형 프로그래임 vs 객체지향형 프로그래밍](https://madplay.github.io/post/2017/12/27/001)

    // 함수형 라이브러이 (underscore, Lodash)
    // 객체지향형 라이브러리 (jQuery)

### 4-36. dom api part1: 문서프로그래밍 인터페이스

- [codepen](https://codepen.io/fireworks80/pen/deePBd)
- [참고 문서](https://d3gvvapon6fqzo.cloudfront.net/pdf_viewer/web/viewer.html?file=https://www.filepicker.io/api/file/KzKYFdjISUiKDukUzInF)
- [DOM](https://developer.mozilla.org/ko/docs/DOM)
- [web api](https://developer.mozilla.org/ko/docs/Web/API)
- [youtube api](https://developers.google.com/youtube/iframe_api_reference?hl=ko)
    
    // node list
    // querySelector, querySelectorAll로 수집된 집합은 다른 선택 api와 달리 라이브 상태가 아닌 일종의 수집 상태를 기억하는 스탭샷이다. 즉 문서의 변경된 내용이 반영되지 않는다.

    // html collection
    //getElementById, getElementsByClassName, getElementsByTagName은 수집된 집합은 라이브 상태이다.

    // nextSibling, previousSibling은 노드를 찾는다
    // nextElementSibling, previousElementSibling은 요소 노드를 찾는다.