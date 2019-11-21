const TICK_RATE = 30;
const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 100;

module.exports.TICK_RATE = TICK_RATE;
// TODO:  figure out and document the unit of these two measures
module.exports.WORLD_WIDTH = TICK_RATE;
module.exports.WORLD_HEIGHT = TICK_RATE;

let timer;
let tick_num = 0;

// Starts the engine
function init() {
    function tick_repeater() {
        // Don't use setinterval to prevent skipping ticks.
        timer = setTimeout(tick_repeater, 1000/TICK_RATE);
        tick();
    }
    tick_repeater();
}
module.exports.init = init;

// This function must be completely synchronous.
function tick() {
    tick_num++;
}

function shutdown() {
    if (timer) {
        clearTimeout(timer);
    }
}
module.exports.shutdown = shutdown;