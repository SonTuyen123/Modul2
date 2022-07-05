class Fan {
    SLOW: number = 1;
    MEDIUM: number = 2;
    FASt: number = 3;

    private speed: number = 1;
    private radius: number = 5;
    private color: string = 'blue';
    private on: boolean = false;

    constructor(speed: number, radius: number, color: string, on: boolean = false) {
        this.speed = speed; this.radius = radius; this.color = color; this.on = on;
    }
    getterRadius() {
        return this.radius;

    }
    getterColor() {
        return this.color;

    }
    getterOn() {
        return this.on;

    }
    getterSpeed() {
        return this.speed;
    }

    setterRadius(value: number) {
        return this.radius = value;

    }
    setterColor(value: string) {
        return this.color = value;

    }
    setterOn(value: boolean) {
        return this.on = value;

    }
    setterSpeed(value: number) {
        return this.speed = value;
    }

    toString(): string {
        if (this.on == true) {
            return "Fan is on"
        } else {
            return "Fan is off"
        }
    }
}


let fan1 = new Fan(3, 10, "yellow", true);
fan1.toString();

console.log(fan1.toString())
