class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "P.C high School";
    }
}
const student1 = new Student(12, "shuvo");
const student2 = new Student(15, "avi");
const student3 = new Student(14, "sabuj");
console.log(student1, student2);