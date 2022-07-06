"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["user"] = 2] = "user";
})(Role || (Role = {}));
class User {
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo() {
        return this.name + this.email;
    }
    isAdmin() {
        if (this.role == Role.admin) {
            return "là admin";
        }
        else if (this.role == Role.user) {
            return "la nguoi binh thuong";
        }
    }
    setterName(name) {
        this.name = name;
    }
    setterEmail(email) {
        this.email = email;
    }
}
exports.User = User;
let a = new User('tuyen', 'tuyen@gmail.com', 1);
console.log(a.isAdmin());
