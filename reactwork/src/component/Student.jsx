import React from 'react';

const Student = (props) => {
    //props : 'properties' : 부모(상위) 컴포넌트에서 자식(하위)컴포넌트로 파라미터를 전달할 때 사용한다 . . .
    const {name, age, address} = props.stu;

    return (
        <div className='student'>
            <h3>Student</h3>    
            <p>
                성명 : {name} / 나이 : {age} / 주소 : {address}
            </p>
        </div>
    );
};

export default Student;