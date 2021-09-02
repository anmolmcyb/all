class Student {
    constructor(fname, lname, id, age, place){
        this.age = age;
        this.fname = fname;
        this.lname = lname;
        this.id = id
        this.place = place
    }
    get name(){
        return `${this.fname} ${this.lname}`
    }
    get details(){
        return `Name: ${this.fname} ${this.lname}\nID: ${this.id}\nAge: ${this.age}\nPlace: ${this.place}`
    }
}

let student1 = new Student('John', 'Doe', 22200, 20, 'Pune')
console.log(student1)
console.log(student1.name)
console.log(student1.details)