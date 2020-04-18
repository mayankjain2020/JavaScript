class Employee{

    setEmpDetails(name, id, phoneno){
        this.name = name;
        this.id = id;
        this.phoneno = phoneno;
    }

    getEmpName(){
        return this.name
    }
    getEmpID(){
        return this.id;
    }
    getEmpPhoneno(){
        return this.phoneno;
    }
} 

let emp1 = new Employee();

emp1.setEmpDetails('John', 1001, 9890242668);
console.log (emp1.getEmpName());
console.log (emp1.getEmpID());
console.log (emp1.getEmpPhoneno());