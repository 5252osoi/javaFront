import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { students } from '../data/data';


const Comp3 = () => {


    const [mid,setMid] = useState();
    const [page,setPage] = useState();

    return (
        <div className='comp3'>
            <h3>Comp3번입니다.</h3> 
            <hr/>
            {/* <Link to = '/param/1'> */}
            <Link to = {{pathname : '/param/1'}} >
            {/* <Link to = {{pathname : '/param/?mid=hgd1234'}} > */}  
                Path Variable방식 (1개값 전송)
            </Link>
            <hr/>
            {students.map(s=>(
                <Link to ={
                    {pathname : `/param/{s.name}`}
                }>{s.name}</Link>
            ))}
            <hr/>
            <Link to = "/param?name=홍길동&age=25"> QueryString </Link><br/>
            <Link to = {{
                pathname : "/param",
                search : "name=홍길동&age=25"
            }}>
            Parameter값의 전송 : Query String 방식
            </Link>
            <hr/>

            <p>id값 : 
                <input type='text' name='mid' onChange={(e) => {setMid(e.target.value)}} placeholder="id를 입력하세요"/>
            </p>
            <p>page값 : 
                <input type='text' name='page' onChange={(e) => {setPage(e.target.value)}} placeholder="page를 입력하세요"/>
            </p>
            <p>
                <Link to = {{
                    pathname: '/param',
                    search : `?mid=${mid}`
                    // search : `?mid=${mid}&page=${page}`
                }}> 아이디 전송하기</Link>
                <Link to = {{
                    pathname: '/param',
                    // search : `?mid=${mid}`
                    search : `?mid=${mid}&page=${page}`
                }}> 아이디 / 페이지 전송하기</Link>
            </p>
        </div>
    );
};

export default Comp3;