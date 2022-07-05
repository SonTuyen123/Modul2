class Staff {
    public name: string;
    public email: string;
    private _age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this._age = age
    }
    getName(): string {
        return this.name
    }

    setName(name: string): void {
        this.name = name
    }

    getEmail(): string {
        return this.email
    }

    setEmail(email: string): void {
        this.email = email
    }

    getAge(): number {
        return this._age;
    }

    setAge(age: number): void {
        this._age = age;
    }
}


let staff = new Staff("staff1", "staff@mail.com", 20)
let nameStaff = staff.getName();

console.log(nameStaff);

staff.setName("Staff2");

let currentNameStaff = staff.getName();

console.log(currentNameStaff);
