class Department {
    //by default is public;
    // name: string;
    private employees: string[] = [];

    // shorthand initialization
    constructor(private readonly id: string, public name: string) {
        this.id = id;
        this.name = name;
    }

    describe() {
        console.log('Department ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

const itDep = new ITDepartment('x23c-d31f', ['Peter']);

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No Report Found');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            this.addReport(value);
        } else {
            throw new Error('Please add a value');
        }
    }


    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }
}



const accounting = new AccountingDepartment('00ef-231z', ['Accounting']);

console.log(accounting.mostRecentReport);

accounting.addEmployee('Peter');
accounting.addEmployee('John');
// accounting.employees[2] = 'Mary';  // private doesn't give us access to the property outside from the class;

accounting.describe();
accounting.printEmployeeInformation();