console.log("Object Examples")

//Object Literals
let student1 = {
    studentId: 1,
    firstname: 'Pritesh',
    lastname: 'Patel',
    result: 'PASS',

    showData: function(){
        console.log(this)
        console.log(this.firstname)
        console.log(this.lastname)
        console.log(this.result)
    }
}
// console.log(student1.firstname)
// console.log(student1.lastname)
console.log(student1)
student1.showData()

let student2 ={
    sid: 1,
    fnm: 'ABC',
    lnm: 'XYZ'
}

class Student{
    sid;
    fnm;
    lnm;
    result;

    constructor(sid, fnm, lnm, result){
       this.sid = sid  
       this.fnm = fnm
       this.lnm = lnm
       this.result = result   
    }

     showData = function() {
        console.log(this.sid)
        console.log(this.fnm)
        console.log(this.lnm)
        console.log(this.result)
    }

}

let s1 = new Student(1, 'A', 'P', 'pass')
let s2 = new Student(2, 'B', 'Q', 'fail')

s1.showData()
s2.showData()