class Bao {
    private name: string;
    private age: number;


    constructor($name: string, $age: number) {
        this.name = $name;
        this.age = $age;
    }

    public get $name(): string {
        return this.name;
    }


    public get $age(): number {
        return this.age;
    }


    public set $name(value: string) {
        this.name = value;
    }


    public set $age(value: number) {
        this.age = value;
    }


}