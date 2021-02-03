class Parents {
    constructor() {
        this.fatherName = "jerry";
    }
}

class Child extends Parents {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.fatherName + " " + this.name;
    }
}
const baby = new Child("baparaj");
const baby2 = new Child("tom");
console.log(baby2);
console.log(baby);