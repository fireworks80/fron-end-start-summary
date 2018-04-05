# Front end start summary

## 구조 디자인 
    1. HTML (HyperTextMarkupLanguage)
    
    2. - [브라우저는 어떻게 동작하는가](http://d2.naver.com/helloworld/59361)
       - [시멘틱 마크업이란?](http://webclub.tistory.com/275)

       제목요소의 Full name (heading)
       단락요소의 tag name (p)

    3. [html 요소 구조](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started#HTML_%EC%9A%94%EC%86%8C(Element)%EC%9D%98_%EA%B5%AC%EC%A1%B0)

        html 용어
       <시작태그 속성="값">컨텐츠</닫는태그> => 엘리먼트
    
    4. [empty tag](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element)
    
    5. DTD 정의이유
    [호환모드와 표준모드](https://developer.mozilla.org/ko/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
    
    6. 문서에 사용되는 주 언어 설정은 <html lang="주 언어">
       해당 엘리먼트의 내용이 주 언어와 다르다면 lang="해당 언어"를 넣어 주자

    7. 비쥬얼 디자인에서 -> 구조디자인으로 도출하기
       body section 내에 제목이 여러개 사용되면 가장 상위에 나온 제목만 섹션의 제목이 되고 이어 나온 제목은 중첩된 하위 섹션을 생성하게 된다.[html 5 아웃라인 알고리즘](https://developer.mozilla.org/ko/docs/Web/HTML/HTML5_%EB%AC%B8%EC%84%9C%EC%9D%98_%EC%84%B9%EC%85%98%EA%B3%BC_%EC%9C%A4%EA%B3%BD)

    8. - [figure](https://developer.mozilla.org/ko/docs/Web/HTML/Element/figure)
       -[figcaption](https://developer.mozilla.org/ko/docs/Web/HTML/Element/figcaption)

    9. dl: 설명
       dt: 용어
       dd: 용어 설명
       [dl 요소의 용법이 헷갈릴때](http://hashcode.co.kr/questions/5358/dldescription-list%EC%9A%94%EC%86%8C%EC%9D%98-%EC%9A%A9%EB%B2%95%EC%9D%B4-%ED%97%B7%EA%B0%88%EB%A6%BD%EB%8B%88%EB%8B%A4)
    
    10. &lt;q&gt; 인라인 인용(q요소 대신 ""로 사용 해도 된다)
        &lt;cite&gt; 창착물 참조
        &lt;blockquote&gt; 블록 인용
        &lt;br&gt; 줄바꿈 (br은 한줄에 하나만 사용)

    11. &lt;strong&gt; 
        내용의 중요성, 심각성, 긴급성을 강조할 경우 사용

        - 중요성: 제목/캡션의 글자 중 일부를 더욱 강조할때
        - 심각성: 경고 / 주의를 주고자 할때
        - 긴급성: 문서의 다른 부분보다 빨리 봐야 할때

        &lt;em&gt;
        특정 내용의 스트레스(stress) 강조(emphasis) - 문장의 의미를 변경
        
        &lt;b&gt;
        단순히 다른 글자와 구분된 용도

        &lt;i&gt;
        다른 글자와 구분된 용도로 사용. 기솔적 용어, 다른 언어(목소리), 인물의 생각등을 표현
    
    12. section, nav, aside, main

    13. div, span (시멘틱 요소를 사용할 것이 없을 경우에만 사용하자)
    
    14. sub, sup, abbr, time(datetime속성사용), s(더이상 관련이 없거나 다 이상 정확하지 않을때), mark, small(저적권, 법적 텍스트, 주석 및 작은 글씨)
    
    15. address, pre

    16. embed 요소

    17. table
        [table 예제 링크](http://www.daum.net)
        tfoot요소는 html5 부터는 tbody뒤에 사용해도

    18. form
        시멘틱 폼 디자인에서는 사용자가 폼을 읽을 때 텍스트 컨텐츠의 흐름으로 읽히도록 구성해야 한다.
        그런 관점에서 단락요소는 글의 묶음으로 그 흐름을 처리할 때 사용할 수 있다.
        하지만 div는 의미 없는 묶음에 가깝다.
        그런 이유로 W3C는 폼 컨트롤을 p로 감싼것임.
        div로 감쌌다고 해서 표준을 준수하지 않은것은 아니다.
        하지만 보다 의미적은 가로 봤을땐 다르겠지만....

    19. 인터렉티브 요소 (details, summary, dialog)

    20. 사용자와 상호작용하는 속성들
        - [hidden](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/hidden): 음성인식기에서도 읽지 않음
        - [tabindex](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/tabindex): a, form 컨트롤, tabindex="0"으로 한 요소들
        - [accesskey](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/accesskey)
        - [contenteditable](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/contenteditable)
        - [draggable](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/draggable)

    21. meta data
        정보 제공 요소들 (head, title, meta, link, style, base)

