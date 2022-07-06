enum Role { admin = 1, user = 2 }

export class User {
    protected name: string;
    protected email: string;
    public role: Role;


    constructor(name: string, email: string, role: Role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    getInfo(): string {
        return this.name + this.email;
    }
    isAdmin() {
        if (this.role == Role.admin) {
            return "là admin";

        } else if (this.role == Role.user) {
            return "la nguoi binh thuong"

        }
    }
    setterName(name: string): void {
        this.name = name;
    }
    setterEmail(email: string): void {
        this.email = email;
    }

}
let a = new User('tuyen', 'tuyen@gmail.com', 1);
console.log(a.isAdmin());
