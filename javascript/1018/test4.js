//test4.js


'use strict';
class Member{
    // name;    //생략가능
    // age;

    //생성자
    constructor(name,age,color){
        this.name=name;
        this.age=age;
        this.color=color;
        // name;
        // age;
        // color;
    }

    //getter생성
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    get color(){
        return this._color;
    }
    //setter생성
    set name(name){
        this._name=name;
    }
    set age(age){
        if(age<1)age=1;
        this._age=age;
    }
    set color(color){
        if(color=='검정'||color=='껌정'||color=='흑색')color='black';
        
        this._color=color;
    }

}