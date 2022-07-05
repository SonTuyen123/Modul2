"use strict";
exports.__esModule = true;
exports.Gender = void 0;
var Employees = /** @class */ (function () {
    function Employees(fullName, gender, birthday, addess, phoneNumber) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.addess = addess;
        this.phoneNumber = phoneNumber;
    }
    Employees.prototype.displayEmployeeName = function () {
        return this.fullName;
    };
    return Employees;
}());
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["OTHER"] = "OTHER";
})(Gender = exports.Gender || (exports.Gender = {}));
function CreateEmployees(object) {
    employeeList.push(object);
}
function deleteEmployee(index) {
    employeeList.splice(index, 1);
}
var employeeList = [];
var A = new Employees("NGUYEN VAN A", Gender.MALE, 2000, "Hà Nội", "1234567890");
var B = new Employees("NGUYEN VAN B", Gender.MALE, 2222, "Đà Nẵng", "2589515111");
var C = new Employees("NGUYEN VAN C", Gender.OTHER, 2009, "HCM", "1215647871");
var D = new Employees("NGUYEN VAN D", Gender.FEMALE, 2022, "Phú Thọ", "1238904567");
CreateEmployees(A);
CreateEmployees(B);
CreateEmployees(C);
CreateEmployees(D);
console.log(employeeList);
var TUYEN = A.displayEmployeeName();
console.log(TUYEN);
deleteEmployee(0);
console.log(employeeList);
