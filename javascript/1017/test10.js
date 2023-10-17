//test10.js
//숫자함수 연습
'use strict';

let su1=10;
let su2=-20;
let su3=3.16;
let su4=-3.14;
let su5=31.7;

let num=0;

num= Math.max(su1,su2,su3,su4,su5);
num= Math.min(su1,su2,su3,su4,su5);
num= Math.ceil(su3);    //올림
num= Math.ceil(su4);

num= Math.floor(su3);   //내림
num= Math.floor(su4);  

num= Math.trunc(su3);   //버림  
num= Math.trunc(su4);   

num= Math.pow(2,5);     //2^5
num= Math.abs(su2);     //절대값변환(양수로) 
num= Math.sqrt(16);     //제곱근추출

num= su3.toFixed(1);    //소수점n 자리까지 반올림해서 보여줌
num= su5.toFixed(0);

num= Math.round(su3);   //반올림

num= Math.random(); //0<=난수 <1 실수형 난수
num= Math.random()*10; //0<=난수 <9 실수형 난수
num= parseInt(Math.random()*10)+1;
num= parseInt(Math.random()*10)+1;
num= parseInt(Math.random()*(14-5+1))+5; //5~14까지의 난수






demo.innerHTML=num;