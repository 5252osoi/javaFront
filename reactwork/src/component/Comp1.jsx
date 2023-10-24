import { student, students} from '../data/data';
import Student from './Student';

const Comp1= ()=>{
/*
    const student={
        name : '홍길동',
        age : 25,
        address : '청주'
    }
    const students=[
        {
            name : '홍길자',
            age : 23,
            address : '청주'
        },
        {
            name : '이기자',
            age : 19,
            address : '서울'
        },
        {
            name : '김말숙',
            age : 30,
            address : '제주'
        }
    ];
*/
    return (
        <div className="comp1">
            <h3>Comp1입니다. ㅎㅇ요</h3>
            <p>{/*한개값만 가져오기*/}
                {student.name}/{student.age}/{student.address}
            </p>
            {/*여러개(배열)값 가져오기*/}
            {/* <span>
                {
                    students.map(s=>(
                        <span>{s.name}/{s.age}/{s.address}<br/></span>
                    ))
                }
            </span> */}
            <hr/>
            {/* 1개 자료 출력 */}
            <Student stu={student} />

            {/* 여러개 자료 출력 */}
            {students.map(s=>( 
                <div>{s.name} / {s.age} / {s.address} </div>
            ))}
        </div>
    );
}
export default Comp1;
