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
    
### [1-18] HTML 그룹핑(Grouping) 요소들

#### 참고자료
- [&lt;address&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/address) 사람(들), 기업의 정보 제공 요소
- [&lt;pre&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/pre) 지정된 텍스트 서식 보존 요소
- HTML 5.2 [기술 표준 사양](https://www.w3.org/TR/html/grouping-content.html) grouping content
- [아스키(ASCII) 아트](https://ko.wikipedia.org/wiki/%EC%95%84%EC%8A%A4%ED%82%A4_%EC%95%84%ED%8A%B8)
- [대한민국 전화번호 체계](https://ko.wikipedia.org/wiki/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%EC%A0%84%ED%99%94%EB%B2%88%ED%98%B8_%EC%B2%B4%EA%B3%84)

### [1-19] HTML 임베디드(Embedded) 요소들

#### 참고자료
- [&lt;picture&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/picture) HiDPI 반응형 이미지 대응 요소
- [&lt;source&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/source) 다중 미디어 리소스 지정 요소
- [&lt;video&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/video) 동영상 콘텐츠 요소
- [&lt;audio&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/audio) 오디오 콘텐츠 요소
- [&lt;track&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/track) 트랙 요소
- [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) 자막 파일
- [Track](https://www.html5rocks.com/ko/tutorials/track/basics/) 엘리먼트 기초
- [&lt;iframe&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/iframe) 인라인 프레임 요소
- [&lt;map&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/map) 이미지 맵(클릭 가능한 링크 영역) 요소
- [&lt;area&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/area) 이미지의 핫스팟(hotspot) 영역 지정 요소
- [SVG](https://developer.mozilla.org/ko/docs/Web/SVG): Scalable Vector Graphic
- [MathML](https://developer.mozilla.org/ko/docs/Web/MathML): Mathematical Markup Language
- HTML 5.2 [기술 표준 사양](https://www.w3.org/TR/2017/REC-html52-20171214/semantics-embedded-content.html) semantics embedded content

### [1-20] HTML 테이블(표, Table) 구성 요소들
  [예제 링크](https://github.com/fireworks80/fron-end-start-summary/blob/master/structure-exam/tabular.html)  
  tfoot요소는 html5 부터는 tbody뒤에 사용해도 된다

스크린리더가 테이블을 읽는 부분에 대해 궁금하신 분들을 위해 VoiceOver를 사용해 테이블을 
읽어 본 영상을 추가합니다. 아래 댓글에 질문 주신 프론트엔드_민동규 님의 [cdpn.io/PRyWXR](https://codepen.io/reve_min/pen/PRyWXR)
코드 기준으로 청취한 결과를 3번째 영상으로 추가합니다.
영상을 살펴보면 읽는 패턴을 확인할 수 있습니다. 제목 셀의 영역(scope) 설정에 따라 스크린리더는
col 로 설정된 "공급/전용" 에 종속된 제목을 읽을 때 변경된 행을 읽어주고, 내용을 읽어줍니다.

공급/전용(m2)
⇓
1행(총 6행) 80/59.91
⇓
2행(총 6행) 84/59.99


이어서 종속된 제목 행을 벗어나, 다른 제목 "매매실거래가(만원)"에 종속된 내용 셀로 이동하면
내용 셀의 headers 속성에 연결된 id 값을 순차적으로 읽어주기는 하나, 다음과 같이 읽어줍니다.

읽어야 할 내용 셀 : 65,000(6층)
⇓
매매 실거래가(만원), 최저가, 65,000(6층), 2열(총 10열)

결과만 보면 공급/전용(m2)에 종속된 내용은 제외된 채, 내용 셀에 연결된 제목 셀 중,
공급/전용(m2) 영역 제목을 제외한 채 읽어줍니다.

물론 이 결과는 iPhone, Mac OS 에서 기본 사용 되는 VoiceOver 기준입니다.
Android 기기의 TalkBack, Windows OS의 센스리더, JAWS, NVDA 테스트 결과는 아닙니다.
사용 하는 스크린리더의 종류가 다양할 뿐더러, 운영체제 마다 달라질 수 있습니다.

하지만 웹 표준을 제정하고 접근성 준수를 말하는 W3C Best Practice 에서는 
복잡한 테이블 구조일 경우, 내용 셀 headers 속성에 연결된 제목 셀 id를 순서대로
읽어준다고 명시하고 있습니다. 아래 예시를 살펴보세요.

<img src="https://www.filepicker.io/api/file/LGMaqXAQpWV8hkSG2sEZ" alt="">

스크린리더가 읽어주는 결과도 고려해야겠지만, 제작자로서 우선시 해야 할 부분은
표준을 준수하고, 접근성을 고려하는데 있어야 하겠습니다.

#### 참고 자료
- [&lt;table&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/table) 테이블 요소
- [&lt;caption&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/caption) 테이블 제목 요소
- [&lt;col&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/col) 테이블 열 요소
- [&lt;colgroup&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/colgroup) 테이블 열 그룹 요소
- [&lt;tr&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/tr) 테이블 행 요소
- [&lt;thead&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/thead) 테이블 헤더 행 블록 요소
- [&lt;tbody&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/tbody) 테이블 바디 블록 요소
- [&lt;tfoot&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/tfoot) 테이블 푸터 행 블록 요소
- [&lt;th&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/th) 테이블 제목 셀 요소
- [&lt;td&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/td) 테이블 내용(데이터) 셀 요소
- HTML 5.2 기술 표준 사양 [Tabular Data](https://www.w3.org/TR/html/tabular-data.html#tabular-data)

### [1-21] HTML 폼(양식, Forms) 구성 요소들
시멘틱 폼 디자인 (writing a form in a meaningful (read: semantic) way) 에서는 
사용자가 폼을 읽을 때 텍스트 콘텐츠의 흐름(flow)으로 읽히도록 구성해야 합니다.

그런 관점에서 단락(Paragraph) 요소는 글의 묶음으로 그 흐름을 처리할 때 사용할 수 있어요.
하지만 디비전(Division)은 의미 없는 묶음에 가깝습니다. (의미 있는 글의 흐름을 고려하지 않은거죠.)

그런 이유로 W3C에서 폼 컨트롤을 단락 요소로 감싼 것입니다. ^^

그럼에도 꼭 단락 이어야 하는가? 물어보신다면 그렇지 않다고 이야기 드릴 수 있습니다.
디비전으로 감싼다고 해서 표준을 준수하지 않은 것은 아니에요. 보다 의미적(Semantic)인가 라면 다르겠지 만요. 

폼 내부에 테이블을 사용할 수 도 있는 것이고, 단락을 사용할 수도 있고, 디비전을 사용할 수 도 있습니다.
    
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

#### 참고자료
- [&lt;form&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/form) 폼 요소
- [&lt;input&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/input) 인풋 요소
- [&lt;label&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/label) 레이블 요소
- [&lt;button&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/button) 버튼 요소
- [&lt;select&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/select) 셀렉트 요소
- [&lt;option&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/option) 옵션 요소
- [&lt;optgroup&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/optgroup) 옵션 그룹 요소
- [&lt;textarea&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/textarea) 텍스트 에어리어 요소
- [&lt;fieldset&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/fieldset) 필드셋 요소
- [&lt;legend&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/legend) 레전드 요소
- [&lt;datalist&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/datalist) 데이터 리스트 요소
- [&lt;progress&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/progress) 프로그래스 요소
- [&lt;output&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/output) 아웃풋 요소
- [&lt;meter&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meter) 미터 요소
- HTML 5.2 기술 표준 사양 [Forms](https://www.w3.org/TR/html/sec-forms.html#sec-forms)
- 폼 전송 테스트 사이트 [Formspree](https://formspree.io/)


### [1-22] HTML 인터랙티브(Interactive) 요소들

#### 참고자료
- [&lt;details&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/details) 보다 자세한 추가 정보를 제공하는 위젯 요소
- [&lt;summary&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/summary) details 요소 내부에 추가되는 레이블(제목) 요소
- [&lt;dialog&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/dialog) 다이얼로그(대화상자) 요소
- HTML 5.2 기술 표준 사양 [Interactive Elements](https://www.w3.org/TR/html/interactive-elements.html#interactive-elements)

### [1-23] HTML 스크립팅(Scripting) 요소들

#### 참고자료
- [&lt;script&gt;(https://developer.mozilla.org/ko/docs/Web/HTML/Element/script)] 스크립트 요소
- [&lt;noscript&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/noscript) 노 스크립트 요소
- [&lt;canvas&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas) 캔버스 요소
- HTML 5.2 기술 표준 사양 [Scripting](https://www.w3.org/TR/html/semantics-scripting.html#semantics-scripting)


### [1-24] HTML 사용자 인터랙션(User Interaction) 속성들
  - [hidden](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/hidden): 음성인식기에서도 읽지 않음
  - [tabindex](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/tabindex): a, form 컨트롤, tabindex="0"으로 한 요소들
  - [accesskey](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/accesskey)
  - [contenteditable](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/contenteditable)
  - [draggable](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/draggable)
  - [HTML 5.2 기술 표준 사양 User Interaction](https://www.w3.org/TR/html/editing.html#editing)

### [1-25] HTML 메타데이터(Metadata) 요소들

#### 참고자료
- [&lt;head&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/head) 헤드 요소
- [&lt;title&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/title) 문서 타이틀 요소
- [&lt;meta&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta) 메타 요소
- [&lt;link&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/link) 링크 요소
- [&lt;style&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/style) 스타일 요소
- [&lt;base&gt;](https://developer.mozilla.org/ko/docs/Web/HTML/Element/base) 베이스 요소
- HTML 5.2 기술 표준 사양 [Document Metadata](https://www.w3.org/TR/html/document-metadata.html)