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

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/DOM-API__accessing-document-objects)

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

- [예제](https://github.com/fireworks80/fron-end-start-summary/blob/master/interaction/exam/JavaScript-Functions)


