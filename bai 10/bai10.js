var QuadraticEquation = /** @class */ (function () {
    function QuadraticEquation(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    QuadraticEquation.prototype.geta = function () { return this.a; };
    QuadraticEquation.prototype.getb = function () { return this.b; };
    QuadraticEquation.prototype.getc = function () { return this.c; };
    QuadraticEquation.prototype.getDiscriminant = function () {
        return (Math.pow(this.b, 2)) - (4 * this.a * this.c);
    };
    QuadraticEquation.prototype.getRoot1 = function () {
        return ((-this.b) + Math.sqrt(this.getDiscriminant())) / (2 * this.a);
    };
    QuadraticEquation.prototype.getRoot2 = function () {
        return ((-this.b) - Math.sqrt(this.getDiscriminant())) / (2 * this.a);
    };
    return QuadraticEquation;
}());
var number = new QuadraticEquation(4, 8, 3);
if (number.getDiscriminant() > 0) {
    console.log(number.getRoot1());
    console.log(number.getRoot2());
}
else if (number.getDiscriminant() == 0) {
    console.log("1 nghiệm duy nhất");
}
else {
    console.log("The equation has no roots");
}
