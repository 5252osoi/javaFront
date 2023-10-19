//test7.js
//정규식 연습

'use strict';
function regexCheck(){
    const regex1 = /atom/g; //'atom'이라는 문자열이 포함되어 있으면 true,아니면 false
    const regex2=/kbs|mbc|sbs|cjs/g;   //mbc또는 kbs 또는 cj를 포함하고있느냐.
    const regex3=/홍길(동|순)/g;
    const regex4=/[a-z]/g; //영문 소문자를 포함하고있느냐?
    const regex5=/[^a-z]/g; //영문 소문자만 포함하고있느냐?
    const regex6=/[A-Z]/g; //영문 대문자를 포함하고있느냐?
    const regex7=/[^A-Z]/g; //영문 대문자만 포함하고있느냐?
    const regex8=/[0-9]/g; //숫자를 포함하고있느냐?
    const regex9=/[^0-9]/g; //숫자만 포함하고있느냐?
    const regex10=/[가-힣]/g; //한글을 포함하고있느냐?
    const regex11=/[^가-힣]/g; //한글만 포함하고있느냐?
    const regex12=/[a-zA-Z0-9]/g; //영문자 와 숫자를 포함하고있느냐?
    const regex13=/[^a-zA-Z0-9]/g; //영문자 와 숫자만 포함하고있느냐?

    const regex14=/[^a-zA-Z0-9_]/g; //아이디는 영문자 와 숫자 그리고 _만 허용

    const regex21=/\./g //'.'을 포함하고있느냐
    const regex22=/\d/g //숫자를 포함해야함
    const regex23=/\D/g //숫자를 포함하면 안됨
    const regex24=/\w/g //영문,숫자, _ 를 포함해야함
    const regex25=/\W/g //영문,숫자, _ 만을 포함해야함
    const regex26=/\s/g //공백을 포함하고있느냐

    const regex31= /홍길자?/g  // ?앞의 글자가 0개나 1개 포함 유무
    const regex32= /홍길자+/g  // +앞의 글자가 1개이상 포함 유무
    const regex33= /홍길자*/g  // *앞의 글자 0개이상 포함

    //콤마변환함수
    function numberWithCommas(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    

    let content=document.getElementById("content").value.trim();
    
    if(content=="")alert("문자열으 ㄹ입력하세요");
    // else if(!content.match(resgexd11)) alert("본문에 atom 문자열을 포함하고있지 않습니다.")
    // else if(content.match()) alert("");
    // else if(!content.match(regex2)) alert("mbc또는 kbs또는 sbs또는 cjb 문자열을 포함하고 있지 않습니다.")
    // else if(!content.match(regex3)) alert("홍길동 또는 홍길순을 포함하고 있지않습니다.")
    // else if(!regex4.test(content)) alert("영문 소문자를 포함해야함");  //
    // else if(regex5.test(content)) alert("영문 소문자만 작성해야함");  //
    // else if(!regex6.test(content)) alert("영문 대문자를 포함해야함");  
    // else if(regex7.test(content)) alert("영문 대문자만 작성해야함");  
    // else if(!regex8.test(content)) alert("숫자를 포함해야함");  
    // else if(regex9.test(content)) alert("숫자만 작성해야함");  
    // else if(!regex10.test(content)) alert("한글(완성형)을 포함해야함");  
    // else if(regex11.test(content)) alert("한글(완성형)로만 작성해야함");  
    else if(!regex12.test(content)) alert("영문자나 숫자를 포함해야함");  
    // else if(regex13.test(content)) alert("영문자나 숫자로만 작성해야함");  
    // else if(regex14.test(content)) alert("영문자와 숫자, 그리고 '_' 로만 작성해야함");  
    // else if(!regex21.test(content)) alert(" \".\" 을 포함하고 있지 않음");  
    // else if(!regex22.test(content)) alert("숫자 를 포함하고 있지 않음");  
    // else if(regex31.test(content)) alert("홍길 또는 홍길? 가 포함");  
    // else if(regex32.test(content)) alert("홍길XX 가 포함");  
    // else if(regex33.test(content)) alert("홍길 또는 홍길XXX 가 포함");  



    else alert("정상적으로 통과되었습니다.");


}
