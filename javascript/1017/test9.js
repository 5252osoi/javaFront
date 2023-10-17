//test9.js
//문자함수 연습
'use strict';

let text1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmn';
let text2='    ABC     BCABC   GHI  JKLABCMN . . . . .  ABC . . .OPQ   SCV. . .';

//length : 길이
//substring() : 특정위치의 문자열 추출
//indexof() : 문자열 검색(인덱스값 반환, 없으면 -1 반환)
//includes() : 문자열 검색(true/false반환)
//concat() : 문자열 결합
// slice() : 지정된 인덱스 위치부터 문자열 가져오기
//trim() : 문자열의 앞뒤 공백 절삭
//replace('ㅁㅁ','ㅇㅇ') : 내용중 처음 검색된 ㅁㅁ을 ㅇㅇ으로 치환 
//replaceAll('ㅁㅁ','ㅇㅇ') : 내용중 검색된 모든 ㅁㅁ을 ㅇㅇ으로 치환 
//toUpperCase()
//toLowerCase()
//charAt()  : 문자열 한개씩 추출
//charCodeAt() : 지정된 인덱스 위치의 문자열(영문자)이 가진 아스키 코드값을 출력
//split()  :  지정된 문자를 기준으로 분리시키고 분리된 자료는 배열로 저장해서 사용한다.
// demo.innerHTML=text1.length;

let str='01234567890123456789012345678901234567890<br/>'+text2 + '<hr/>';
// str += text1.substring(5,10)+'<hr/>'; //인덱스 5번지부터 10번지까지의 문자열
// str+=text1.indexOf('abc')+'<hr/>';
// str+=text1.slice(5);
// str+=text1.slice(5,30);
// str+=text1.substr(5,10);    //인덱스 5번지부터 10개의 문자열
// str+=text2.replace('ABC','ooppqq');  //첫번째 검색된 문자열을 치환한다. . .
// str+=text2.replaceAll('ABC','ooppqq');  //문장안에서 일치되는 모든 문자열을 치환
// str+=text1.toUpperCase();
// str+=text1.toLowerCase();
// str+=text1.concat("안녕",text1);
// str+=text2 + '안녕';
// str+=text2.trim()+'안녕';
// str+='안녕1' + text2.trim() + '안녕2';
// str+='안녕1' + text2.trimStart() + '안녕2';
// str+='안녕1' + text2.trimEnd() + '안녕2';
// str+=text1.charAt(3)+'안녕';
// str+=text1.charCodeAt(0)+'안녕';

// let temp = text2.split('ABC');
// for(let s of temp){
//     str+= s + '<br/>';
// }
// str+='길이 : ' +temp.length;

let title=['지역번호','국번호','전화번호']
let telTemp='010-1234-5678';

let tels=telTemp.split('-');

tels.forEach( (data,idx) => console.log(data,":",idx) );
tels.forEach( (data,idx) => str+=data+'<br/>' );

demo.innerHTML=str;

