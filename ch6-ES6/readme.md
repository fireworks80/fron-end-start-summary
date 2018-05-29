# [Chapter 6] 차세대 자바스크립트(ES6) 프로그래밍

## [6-1] ECMAScript 2015 (ES6) 란?

- [slide](https://slides.com/yamoo9/es6)

**JavaScript**
JavaScript는 동적으로 업데이트되는 내용을 만들고, 멀티미디어를 제어하고, 
이미지를 애니메이션으로 만드는 컨트롤 역할을 수행하는 스크립팅 언어입니다.



**ECMAScript**
ECMAScript는 Netscape와 Microsoft가 협력하여 개발한 스크립트 
언어로 주로 Netscape의 JavaSCript에서 파생되었습니다. JavaScript는 
널리 사용 되는 스크립팅 언어로, 웹 페이지에서 사용자가 보거나 동작하는 
방식에 영향을 줍니다.

ECMA-262는 ECMA International 에서 발행한 표준입니다. 여기에는 
ECMAScript라고 하는 범용 스크립팅 언어에 대한 사양이 들어 있습니다.

**ECMA International**
ECMA는 정보 통신 시스템을 위한 표준 조직입니다. ECMA는 정보 통신 기술 및 
소비자 전자 제품의 사용을 촉진하고 표준화 하기 위한 표준 및 기술 보고서를 
개발하는 것을 목표로합니다 .

표준이 적용되는 환경에 영향을 줌으로써 표준을 올바르게 사용하도록 장려하며, 
이러한 표준 및 보고서를 전자 및 인쇄 된 형태로 게시합니다.


**TC 39**
TC39는 기술위원회 번호 39를 의미합니다. ECMAScript는 JavaScript 언어를 
"ECMAScript" 사양으로 표준화 한 기관인 ECMA의 일부입니다. 범용, 크로스 플랫폼, 
공급 업체의 중립적인 프로그래밍 언어 ECMAScript의 표준화 작업을 수행합니다. 
여기에는 언어 구문, 의미, 라이브러리 및 언어를 지원하는 보완 기술이 포함됩니다.



TC 39에서 수행하는 일은 다음과 같습니다.
ECMAScript 프로그래밍 언어의 표준 유지 및 업데이트.
ECMAScript의 기능을 확장하는 라이브러리의 표준을 식별, 개발 및 유지 관리.
이러한 표준의 올바른 구현을 검증하는데 사용할 수 있는 테스트 개발
선택된 표준을 ISO / IEC JTC 1 위원회에 기고.
보완 또는 추가 기술에 대한 제안을 평가 고려.
TC 39는 ECMAScript 2015 (ES6) 버전부터 현대적인 기대에 부합하도록 
표준화 프로세스를 간소화했습니다. 새로운 프로세스는 제안서를 형식화 합니다. 
GitHub Pull Request를 사용하여 커뮤니티를 운영하며 제안을 받습니다.

이제 사양은 보다 빠르게 라이브 표준이 되었습니다. 제안이 채택 속도가
더 빠름을 의미하며, 매년 새로운 사양의 버전이 업데이트 됩니다.

**쉽게 말해**
[ECMAScript 사양](https://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf)을 읽으면 스크립팅 언어를 만드는 방법을 배울 수 있고, 
[JavaScript 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript)를 읽으면 해당 스크립팅 언어를 사용하는 방법을 배울 수 있습니다.

**참고자료**

- [ecma-international.org](http://www.ecma-international.org/)
- [TC39](https://www.ecma-international.org/memento/TC39.htm)
- [TC39 Process](https://tc39.github.io/process-document/)
- [tc39.github.io/ecma262](https://tc39.github.io/ecma262/)
- [Ecma-262](https://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf)
- [TC39 - 자바스크립트 표준은 어떻게 만들어지는가?](https://gamecodingschool.org/2015/06/28/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%91%9C%EC%A4%80%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%A7%8C%EB%93%A4%EC%96%B4%EC%A7%80%EB%8A%94%EA%B0%80/#main)
- [ECMAScript 호환성 테이블](https://kangax.github.io/compat-table/es6/)
- [Exploring JS : 프로그래머를위한 JavaScript 온라인 책](http://exploringjs.com/)
- [ECMAScript 2015 (ES6) 소개](https://github.com/yamoo9/ES6/tree/master/ES6)
- [ES6console.com](https://es6console.com/)
- [Learn ECMAScript6 by doing it](http://es6katas.org/)

## [6-2] 블록(Block) 영역을 사용하는 변수와 상수 선언

**var VS let, const**
let 선언은 블록 유효 범위를 갖는 지역 변수를 선언하는 점에서 var 선언과 차이점이 있습니다. 
const 선언은 값에 읽기 전용 참조를 생성합니다. 담긴 값이 불변 임을 뜻하는 게 아닙니다. 
단지 그 변수 식별자는 다른 데이터로 재 할당 될 수 없습니다.

-[slide](https://slides.com/yamoo9/es6)

**참고자료**

- [var 키워드 사용에서 주의할 점 [ES5]](https://goo.gl/UE9hYh)
- [let 키워드 도입 [ES6]](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
- [const 상수 [ES6]](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)

## [6-3] 템플릿 리터럴 / 인터폴레이션

**ES6 : 템플릿 리터럴**
템플릿 리터럴은 내장된 표현식을 허용하는 문자열 리터럴 입니다. 
여러 줄로 이뤄진 문자열과 문자 보간 기능을 사용할 수 있습니다.

- [slide](https://slides.com/yamoo9/es6)

**참고자료**
- [템플릿 리터럴 (Template literals) [ES6]](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

## [6-4] 문자(String) 객체의 새로운 메서드

**ES6 : 문자 객체의 새로운 메서드**

문자 객체에 새롭게 추가된 인스턴스 메서드에 대해 알아봅시다. :-)
기존에는 별도의 헬퍼 함수를 만들어야 했던 기능을 이제는 기본적으로 제공해줍니다.

- [slide](https://slides.com/yamoo9/es6)

**참고자료**
- [.includes()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
- [.startsWith()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
- [.endsWith()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
- [.repeat()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

## [6-5] 화살표 함수식 / this 참조

**ES6 : 화살표 함수 식 / this 참조**

화살표 함수 식(arrow function expression)은 function 표현에 비해 
구문이 짧고 자신의 this, arguments, super 또는 new.target 을 
바인딩 하지 않습니다.

화살표 함수는 항상 "익명"입니다. 이 함수 표현은 메소드 함수가 
아닌 곳에 가장 적당합니다. 그래서 생성자 함수로 사용할 수 없습니다.

- [slide](https://slides.com/yamoo9/es6)

**참고자료**
- [화살표 함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)

      매개 변수가 1개일 때는 () 생략 가능 / 그 외에는 () 필수
      
      let test = 0 => ...;
      // 또는
      let test = (0) => ...;

      // 매개변수 없을때
      let test1 = => ...; // error
      let test1 = () => ...;

      // 매개 변수가 2개 이상 일때
      let test1 = 0, 2 => ...; // error
      let test1 = (0, 2) => ...;

**this**

      // es5

      var obj = {
        _name: 'test',
        _arr: [],
        print: function() {
          this // 자신을 갖는 객체를 가리킴          
        }
      };

      // es6 객체내의 arrow function
      var obj = {
        _name: 'test',
        print: () => {
          this // window를 가리킴
        }
      };

      // 메서드에는 arrow function을 쓰지 않는다.
      // 하지만 메서드 내에서는 arrow function을 사용해도 된다.

## [6-6] 전개 연산자와 기본, 나머지 매개변수

**ES6 : 전개 연산자와 기본, 나머지 매개변수**
기본 함수 매개변수(default function parameter)를 사용하면 값이 없거나 undefined가 전달될 경우 매개변수를 기본값으로 초기화할 수 있습니다.

나머지 매개변수(rest parameter) 구문은 정해지지 않은 수(an indefinite number, 부정수) 인수를 배열로 나타낼 수 있게 합니다.

전개 연산자(spread operator)는 표현식(expression)은 2개 이상의 인수(함수 호출 용)나 2개 이상의 요소(배열 리터럴 용) 또는 2개 이상의 변수(비구조화 할당 용)가 예상되는 곳에 확장될 수 있도록 합니다.

- [slide](https://slides.com/yamoo9/es6)

**참고자료**
- [기본 매개변수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [나머지 매개변수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [전개 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_operator)