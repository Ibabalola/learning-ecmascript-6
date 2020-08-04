/**
 * Default parameters
 */

function add(x = 5, y = 7) {
    console.log(x+y);
}

add();

function haveFun(activityName = 'football', time = 1.5) {
    console.log(`Today I will go ${activityName} for ${time} hours`);
}

haveFun('biking', 5);