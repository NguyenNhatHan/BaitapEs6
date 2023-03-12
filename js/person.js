
class Person {
    constructor(id, fullName, address, email) {
        this.id = id
        this.fullName = fullName;
        this.address = address;
        this.email = email;
    }
}

class Student extends Person {
    constructor(id, fullName, address, email, math, physics, chemistry) {
        super(id, fullName, address, email);
        this.math = Number(math);
        this.physics = Number(physics);
        this.chemistry = Number(chemistry);
    }

    averageGrade() {
        let grade = (this.math + this.physics + this.chemistry) / 3;
        return grade.toFixed();
    }
}

class Employee extends Person {
    constructor(id, fullName, address, email, days, baseSalary) {
        super(id, fullName, address, email);
        this.days = Number(days);
        this.baseSalary = Number(baseSalary);
    }

    totalSalary() {
        let salary = this.days * this.baseSalary;
        return salary.toLocaleString();
    }
}

class Customer extends Person {
    constructor(id, fullName, address, email, company, invoice, comment) {
        super(id, fullName, address, email);
        this.company = company;
        this.invoice = invoice;
        this.comment = comment;
    }
}

export { Person, Student, Employee, Customer };