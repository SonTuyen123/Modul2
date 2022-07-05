class Employees {

    fullName: string;
    gender: Gender;
    birthday: number;
    addess: string;
    phoneNumber: string;

    constructor(fullName: string,
        gender: Gender,
        birthday: number,
        addess: string,
        phoneNumber: string) {

        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.addess = addess;
        this.phoneNumber = phoneNumber;
    }

    displayEmployeeName(): string {
        return this.fullName
    }
}
export enum Gender { MALE = "MALE", FEMALE = "FEMALE", OTHER = "OTHER" }


function CreateEmployees(object): void {
    employeeList.push(object)
}

function deleteEmployee(index: number): void {
    employeeList.splice(index, 1)
}

let employeeList: Employees[] = []
let A = new Employees("NGUYEN VAN A", Gender.MALE, 2000, "Hà Nội", "1234567890")
let B = new Employees("NGUYEN VAN B", Gender.MALE, 2222, "Đà Nẵng", "2589515111")
let C = new Employees("NGUYEN VAN C", Gender.OTHER, 2009, "HCM", "1215647871")
let D = new Employees("NGUYEN VAN D", Gender.FEMALE, 2022, "Phú Thọ", "1238904567")
CreateEmployees(A);
CreateEmployees(B);
CreateEmployees(C);
CreateEmployees(D);

console.log(employeeList);
let TUYEN = A.displayEmployeeName();
console.log(TUYEN);
deleteEmployee(0)
console.log(employeeList);
