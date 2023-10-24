import React, { useState } from 'react';

//Hook : 값을 넣어주기위한 문법  : const[변수명,함수명] = useState(초기값);
//함수명 : 변수명의 setter 함수명이다. setXxx.. . . .


let param1Sw=0;
const Comp2 = () => {
    
    const [param1,setParam1] = useState('atom');
    
    const myFunc = () =>{
        if(param1Sw===0){
            setParam1("안녕하세요");
            param1Sw=1;
        } else {
            setParam1("atom");
            param1Sw=0;
        }
    }
    const[count,setCount] = useState(100);
    //count값을 1씩 증가하는 함수
    const onIncrease =()=>{
        setCount(count+1);
    }
    //count값을 1씩 증가하는 함수
    const onDecrease =()=>{
        setCount(count-1);
    }

    //텍스트박스의 값을 변경하면 param2변수의 값을 변경 시켜서 화면에 출력하는 함수입니다.
    const [param2, setParam2] = useState('');
    const [paramV, setParamV] = useState('');
    const textInput =(e)=>{
        console.log(e.target.name, e.target.value);
        
        const{name, value}=e.target; //구조분할
        setParamV(name);
        setParam2(value);
    }
    
    //버튼을 누르면 색을 변경시켜주는 state
    const [textColor, setTextColor] = useState('limegreen');


    return (
        <div className='comp2'>
            <h2>Comp2에요</h2>
            <hr/>
            <p> {param1} </p>
            <button onClick={myFunc}>버튼</button>

            <hr/>
            <div>count : {count} </div>
            <div>
                <button onClick={onIncrease}>증가</button> &nbsp;
                <button onClick={onDecrease}>감소</button>
            </div>
            <hr/>
            
            <div>입력변수 : {paramV}</div>
            <div>입력값 : {param2}</div>
            <input type="text" name="param2" onChange={textInput} />
            <hr/>
            {/* CSS적용하기 */}
            <p style={{backgroundColor:textColor,fontSize:'15pt'}}> 안녕하세요 </p>
            <div>
                <button onClick={()=> setTextColor('lightsalmon') }>핑크</button>
                <button onClick={()=> setTextColor('skyblue') }>파랑</button>
                <button onClick={()=> setTextColor('limegreen') }>초록</button>
            </div>

        </div>
    );
};

export default Comp2;