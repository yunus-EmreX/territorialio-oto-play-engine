const fs = require('fs');

// Player class
class Player {
    constructor() {
        this.resources = {
            land: 512,
            interest: 0
        };
        this.units = 0;
        this.gameStatistics = {
            income: [512, 0],
            expenses: [0, 0],
            logs: []
        };
    }

    gatherResources() {
        this.resources.land += 10;
        this.gameStatistics.income[0] += 10;
    }

    trainUnit() {
        if (this.resources.land >= 20) {
            this.resources.land -= 20;
            this.units++;
            this.gameStatistics.expenses[1] += 20;
        }
    }

    updateGameStatistics() {
        const tick = time.tick;
        this.gameStatistics.logs.push({
            tick,
            troops: this.units,
            land: this.resources.land,
            oi: this.gameStatistics.income[1] + this.gameStatistics.income[0],
            tax: this.gameStatistics.expenses[0]
        });
    }
}

// Time class
class Time {
    constructor() {
        this.tick = 0;
    }

    update() {
        player.gatherResources();
        player.trainUnit();
        player.updateGameStatistics();
        this.tick++;
    }
}

// Create a player
const player = new Player();

// Create a time
const time = new Time();

// Automatic gameplay function
function automaticGameplay(duration) {
    console.log("Automatic gameplay started...");

    const interval = 1000; // Interval in milliseconds
    const startTime = Date.now();
    let timeElapsed = 0;

    const gameLoop = setInterval(() => {
        time.update();
        console.log(`Tick: ${time.tick}, Land: ${player.resources.land}, Units: ${player.units}`);
        timeElapsed += 1;

        if (timeElapsed >= duration) {
            clearInterval(gameLoop);
            console.log("Automatic gameplay completed.");
        }
    }, interval);
}

// Start automatic gameplay for a specified duration
automaticGameplay(10); // Run for 10 seconds as an example
