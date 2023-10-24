// const Header= function(){
import { Link } from "react-router-dom";

const Header= () => {
    return(
        //둘러싸는 태그는 무조건 한개만
        <div className="header"> {/*클래스이름은 항상 컴포넌트 이름과 같다(약속임, 소문자)*/}
            {/* <h2>이곳은 헤더입니다.</h2> */}
            {/* <a href ="http://www.naver.com">Home</a>
            <a href ="#">Comp1</a>
            <a href ="#">Comp2</a>
            <a href ="#">Comp3</a> */}
            {/* react에서는 a태그 대신에 router를 사용한다. router에서는 href대신에 Link태그를 사용한다. */}
            <Link to="http://localhost:3000/">Home</Link>
            <Link to="/Comp1">Comp1</Link>
            <Link to="/Comp2">Comp2</Link>
            <Link to="/Comp3">Comp3</Link>
        </div>
    );
}
export default Header;