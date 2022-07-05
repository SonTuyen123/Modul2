class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    a = "Point";
    distance(b) {
        const dx = this.x - b.x;
        const dy = this.y - b.y;

        return Math.hypot(dx, dy);
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(10, 10);
console.log(p1.a);
console.log(p1.distance(p2));