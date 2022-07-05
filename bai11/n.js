class StopWatch {

    constructor() {
        this.startTime = Date.now();

    }
    start() {
        return this.startTime = Date.now();
    }
    getter() {
        return this.endTime, this.startTime;
    }

    stop() {
        return this.endTime = Date.now();
    }

    getElapsedTime() {
        return this.endTime - this.startTime;
    }
}


let stopWatch = new StopWatch();

stopWatch.start();

console.log(stopWatch.start());

for (let i = 0; i < 100000; i++) {
    console.log("xin chao")
}
stopWatch.stop();

console.log(stopWatch.getElapsedTime());