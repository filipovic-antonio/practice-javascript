class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;  
    }
    get birthYear() {
        let birth = new Date().getFullYear();
        return birth - this.age;
    }
}

class Student extends User {
    constructor(firstName, lastName, age, group, averageGrade,) {
        super(firstName, lastName, age);
        this.group = group;
        this.averageGrade = averageGrade;
    }
    isEligibleForScholarship() {
        return this.averageGrade >= Student.MIN_GRADE_FOR_SCHOLARSHIP;
    }
    static get MIN_GRADE_FOR_SCHOLARSHIP() {
        return 4;
    }
}

class Teacher extends User {
    constructor(firstName, lastName, age, teacherGroups, yearsOfExperience) {
        super(firstName, lastName, age);
        this.teacherGroups = teacherGroups;
        this.yearsOfExperience = yearsOfExperience;
    }

    isGroupTeacher(group) {
        if(this.teacherGroups.includes(group)) {
            return true;      
        } else {
            return false;
        }
    }
}

const teacher1 = new Teacher('Brad', 'Pitt', 59, ['50b', '51c'], 41);
const student1 = new Student('Tom', 'Cruise', 60, '50b', 4.9);
const student2 = new Student('Leonardo', 'DiCaprio', 50, '62c', 3.9);

console.log(student1.fullName); 
console.log(student2.birthYear); 
console.log(student1.isEligibleForScholarship()); 
console.log(student2.isEligibleForScholarship()); 
console.log(teacher1.isGroupTeacher(student1.group)); 
console.log(teacher1.isGroupTeacher(student2.group)); 
console.log(Student.MIN_GRADE_FOR_SCHOLARSHIP);


