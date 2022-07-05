class QuadraticEquation {
    a: number;
    b: number;
    c: number;
    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    geta(): number { return this.a; }
    getb(): number { return this.b; }
    getc(): number { return this.c; }

    getDiscriminant(): number {
        return (Math.pow(this.b, 2)) - (4 * this.a * this.c);
    }
    getRoot1(): number {
        return ((-this.b) + Math.sqrt(this.getDiscriminant())) / (2 * this.a);
    }
    getRoot2(): number {
        return ((-this.b) - Math.sqrt(this.getDiscriminant())) / (2 * this.a);
    }
}

let number = new QuadraticEquation(4, 8, 3);

if (number.getDiscriminant() > 0) {
    console.log(number.getRoot1())
    console.log(number.getRoot2())
} else if (number.getDiscriminant() == 0) {
    console.log("1 nghiệm duy nhất")
} else {
    console.log("The equation has no roots")
}

