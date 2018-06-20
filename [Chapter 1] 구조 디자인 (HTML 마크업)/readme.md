# Front end start summary

## 구조 디자인 

### [1-1] HTML이란?

#### 참고자료
- [HTML5 표준 기술 사양](https://www.w3.org/TR/html/)
    
### [1-2] HTML 문서 파일과 웹 브라우저의 해석 & 시멘틱 마크업

#### 참고 자료
- [브라우저는 어떻게 동작하는가?](https://d2.naver.com/helloworld/59361)
- [시멘틱 마크업이란?](http://webclub.tistory.com/275)

### [1-3] HTML 문서 작성을 위해 알아야 할 기본 문법

#### 참고자료

- [html 요소의 구조](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started#HTML_%EC%9A%94%EC%86%8C(Element)%EC%9D%98_%EA%B5%AC%EC%A1%B0)
    
      html 용어
      <시작태그 속성="값">컨텐츠</닫는태그> => 엘리먼트
    

### [1-4] 닫는 태그(close tag)가 없는 HTML 요소

#### 참고자료
- [empty elements](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element)

### [1-5] 문서유형정의 (DTD Document Type Definition) & 표준 모드

#### 참고자료
- [비표준(quirks) 모드와 표준(standards) 호환모드](https://developer.mozilla.org/ko/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)

### [1-6] 문서에 사용된 주 언어가 무엇인지 설정하는 lang 속성  

- 한국어 - ko
- 영어 - en
- 일본어 - ja
- 스페인어 - es

  해당 엘리먼트의 내용이 주 언어와 다르다면 lang="해당 언어"를 넣어 주자  

### [1-7] 비주얼 디자인에서 제목(Headings), 단락(Paragraph) 구조 도출하기  

#### 참고자료
- [HTML 제목(Headings)](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Heading_Elements)
- [HTML 단락(Paragraph)](https://developer.mozilla.org/ko/docs/Web/HTML/Element/p)
- [HTML 주석(Comments)](https://www.w3.org/TR/html/syntax.html#comments)


  body section 내에 제목이 여러개 사용되면 가장 상위에 나온 제목만 섹션의 제목이 되고 이어 나온 제목은 중첩된 하위 섹션을 생성하게 된다.  
  [html 5 아웃라인 알고리즘](https://developer.mozilla.org/ko/docs/Web/HTML/HTML5_%EB%AC%B8%EC%84%9C%EC%9D%98_%EC%84%B9%EC%85%98%EA%B3%BC_%EC%9C%A4%EA%B3%BD)

### [1-8] 이미지(Images)를 문서에 연결하여 화면에 표시하기

#### 참고자료
   - [Images](https://developer.mozilla.org/ko/docs/Web/HTML/Element/img)
   - [figure](https://developer.mozilla.org/ko/docs/Web/HTML/Element/figure)
   - [figcaption](https://developer.mozilla.org/ko/docs/Web/HTML/Element/figcaption)


### [1-9] HTML 문법 유효성 검사 & 엔티티(Entity) 코드

#### 참고자료
- [validator.w3.org](https://validator.w3.org/)
- [entitycode.com](http://entitycode.com/)

### [1-10] HTML 순차/비순차 목록(Lists)과 아이템(List Items)

#### 참고 자료
- [&lt;ul&gt; 비순차 목록 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Element/ul)
- [&lt;ol&gt; 순차 목록 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Element/ol)
- [&lt;li&gt; 목록 항목 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Element/li)

### [1-11] HTML 앵커(Anchor) & 하이퍼링크(Hyperlink)

#### 참고자료
- [&lt;a&gt; 하이퍼링크 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a)

### [1-12] HTML 설명 목록(Description Lists)
  - dl: [설명](https://developer.mozilla.org/ko/docs/Web/HTML/Element/dl)
  - dt: [용어](https://developer.mozilla.org/ko/docs/Web/HTML/Element/dt)
  - dd: [용어 설명](https://developer.mozilla.org/ko/docs/Web/HTML/Element/dd)
  - [HTML 5.2 기술 표준 사양 the dl element](https://www.w3.org/TR/html/grouping-content.html#the-dl-element)
  - [HTML 5.2 기술 표준 사양 the dt element](https://www.w3.org/TR/html/grouping-content.html#the-dt-element)
  - [HTML 5.2 기술 표준 사양 the dd element](https://www.w3.org/TR/html/grouping-content.html#the-dd-element)

  - [dl 요소의 용법이 헷갈릴때](http://hashcode.co.kr/questions/5358/dldescription-list%EC%9A%94%EC%86%8C%EC%9D%98-%EC%9A%A9%EB%B2%95%EC%9D%B4-%ED%97%B7%EA%B0%88%EB%A6%BD%EB%8B%88%EB%8B%A4)

### [1-13] HTML 인용(Quotation) 구문 + 줄바꿈(Line Break)

  - q [인라인 인용(q요소 대신 ""로 사용 해도 된다)](https://developer.mozilla.org/ko/docs/Web/HTML/Element/q)
  - cite [창착물 참조](https://developer.mozilla.org/ko/docs/Web/HTML/Element/cite)
  - blockquote [블록 인용](https://developer.mozilla.org/ko/docs/Web/HTML/Element/blockquote)
  - br [줄바꿈(https://developer.mozilla.org/ko/docs/Web/HTML/Element/br)] (br은 한줄에 하나만 사용)  
  - HTML 5.2 기술 표준 사양 [the q element](https://www.w3.org/TR/html/textlevel-semantics.html#the-q-element)
  - HTML 5.2 기술 표준 사양 [the cite element](https://www.w3.org/TR/html/textlevel-semantics.html#the-cite-element)
  - HTML 5.2 기술 표준 사양 [the blockquote element](https://www.w3.org/TR/html/grouping-content.html#the-blockquote-element)
  - HTML 5.2 기술 표준 사양 [the br element](https://www.w3.org/TR/html/textlevel-semantics.html#the-br-element)


### [1-14]HTML 어휘(Phrasing) 요소들
  내용의 중요성, 심각성, 긴급성을 강조할 경우 사용
   - 중요성: 제목/캡션의 글자 중 일부를 더욱 강조할때  
   - 심각성: 경고 / 주의를 주고자 할때  
   - 긴급성: 문서의 다른 부분보다 빨리 봐야 할때
   
  em: 특정 내용의 스트레스(stress) 강조(emphasis) - 문장의 의미를 변경  
  b: 단순히 다른 글자와 구분된 용도  
  i: 다른 글자와 구분된 용도로 사용. 기솔적 용어, 다른 언어(목소리), 인물의 생각등을 표현

#### 참고자료
- [&lt;strong&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/strong) 중요성 강조 요소
- [&lt;em&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/em) 강조 요소
- [&lt;b&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/b) 중요성, 관련성 없이 다른 글자와 구분을 목적으로 사용 되는 요소
- [&lt;i&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/i) 다른 글자와 구분되는 기술적 용어, 관용구, 생각 등에 사용 되는 요소
- HTML 5.2 기술 표준 사양 the [strong](https://www.w3.org/TR/html/textlevel-semantics.html#the-strong-element) element
- HTML 5.2 기술 표준 사양 the [em](https://www.w3.org/TR/html/textlevel-semantics.html#the-em-element) element
- HTML 5.2 기술 표준 사양 the [b](https://www.w3.org/TR/html/textlevel-semantics.html#the-b-element) element
- HTML 5.2 기술 표준 사양 the [i](https://www.w3.org/TR/html/textlevel-semantics.html#the-i-element) element  


### [1-15] HTML 섹션(Sections) 요소들 + 메인(Main) 요소

#### 참고자료
- [&lt;section&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/section) 일반 섹션 요소
- [&lt;article&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/article) 독립 섹션 요소
- [&lt;aside&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/aside) 보조 섹션 요소
- [&lt;nav&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/nav) 내비게이션 섹션 요소
- [&lt;main&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/main) 메인 요소
- HTML 5.2 기술 표준 사양 [Sections](https://www.w3.org/TR/html5/sections.html#sections)
- HTML 5.2 기술 표준 사양 the [main element](https://www.w3.org/TR/html5/grouping-content.html#the-main-element)
- [HTML 5 문서의 섹션과 아웃라인]{https://developer.mozilla.org/ko/docs/Web/HTML/HTML5_%EB%AC%B8%EC%84%9C%EC%9D%98_%EC%84%B9%EC%85%98%EA%B3%BC_%EC%9C%A4%EA%B3%BD}

### [1-16] HTML 컨테이너(Containers) 요소들 (시멘틱 요소를 사용할 것이 없을 경우에만 사용하자)

#### 참고자료
- [&lt;div&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/div) 디비전(Division) 요소
- [&lt;span&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/span) 스팬(Span) 요소
- HTML5 기술 표준 사양 the [div](https://www.w3.org/TR/html5/grouping-content.html#the-div-element) element
- HTML5 기술 표준 사양 the [span](https://www.w3.org/TR/html5/grouping-content.html#the-span-element) element

### [1-17] HTML 텍스트 레벨(Text Level) 요소들

#### 참고자료
- [&lt;sup&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/sup) 윗첨자 요소
- [&lt;sub&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/sub) 아래첨자 요소
- [&lt;abbr&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/abbr) 축약 요소
- [&lt;time&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/time) 시간 요소
- [&lt;s&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/s) 더 이상 관련이 없거나 더 이상 정확하지 않은 요소
- [&lt;mark&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/mark) 관련 참조 목적의 하이라이트된 글자 요소
- [&lt;small&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/small) 저작권, 법적 텍스트, 주석 및 작은 글씨 요소
- HTML 5.2 기술 표준 사양 [Text Level Semantics](https://www.w3.org/TR/html/textlevel-semantics.html#textlevel-semantics)
    
### 15. address, pre

### 16. embed 요소

### 17. table
  [예제 링크](https://github.com/fireworks80/fron-end-start-summary/blob/master/structure-exam/tabular.html)  
  tfoot요소는 html5 부터는 tbody뒤에 사용해도

### 18. form
    시멘틱 폼 디자인에서는 사용자가 폼을 읽을 때 텍스트 컨텐츠의 흐름으로 읽히도록 구성해야 한다.  
    그런 관점에서 단락요소는 글의 묶음으로 그 흐름을 처리할 때 사용할 수 있다.  
    하지만 div는 의미 없는 묶음에 가깝다.  
    그런 이유로 W3C는 폼 컨트롤을 p로 감싼것임.  
    div로 감쌌다고 해서 표준을 준수하지 않은것은 아니다.  
    하지만 보다 의미적은 가로 봤을땐 다르겠지만....  
    
e.g.) ![예제 이미지](https://github.com/fireworks80/fron-end-start-summary/blob/master/images/form-no-label.PNG?raw=true)

위와 같은 경우 label을 .a11y-hidden으로 접근성 숨김 처리 하지 않고 
input 요소의 속성으로 **aria-label**을 사용한다. 
    
>     <form>
>        <p>
>         <input type="text" aria-label="카카오 계정(이메일)" placeholder="카카오 계졍(이메일)">
>        </p>         
>        <p>
>         <input type="text" aria-label="비밀번호(4 ~ 16자리)" placeholder="비밀번호(4 ~ 16자리)">
>           </p>
>     </form>      

### 19. 인터렉티브 요소 (details, summary, dialog)

### 20. 사용자와 상호작용하는 속성들
  - [hidden](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/hidden): 음성인식기에서도 읽지 않음
  - [tabindex](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/tabindex): a, form 컨트롤, tabindex="0"으로 한 요소들
  - [accesskey](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/accesskey)
  - [contenteditable](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/contenteditable)
  - [draggable](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/draggable)

### 21. meta data: 정보 제공 요소들 (head, title, meta, link, style, base)

