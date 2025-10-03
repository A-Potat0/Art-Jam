/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


// buch of usfull variables for later
//these will be used to pulse the colors
let brightness = undefined;
let saturation = undefined;
//these will be used to blink
let blinking1 = 18;
let blinking2 = 6;
//these variables are for the blinking
let press = 0
let timer = 6.3 * 1000; // 3 seconds

/**
 * sets up the canvase and important details of the peice
*/
function setup() {
    createCanvas(800, 800);

    // this was copied from https://p5js.org/examples/transformation-rotate/
    // Set angle mode to degrees
    angleMode(DEGREES);

    // this was also copied from the same place
    // Set the color mode to hue-saturation-brightness (HSB)
    colorMode(HSB);


}




/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    //background(160, 180, 200);

    // Clear the background
    background(0, 0, 0);

    eye();

    radiant();

    heart();

    blink()

    //pulses the eye color
    brightness = map(sin(frameCount * 0.05), -1, 1, 85, 150);
    saturation = map(sin(frameCount * 0.9), -1, 1, 50, 400);

    //checks if the mouse was clicked before it runs the code
    if (press === 1) {

        blinking1 = map(sin(frameCount), -1, 1, 0, 35);
        blinking2 = map(sin(frameCount), -1, 1, 0, 12);
    }
    else if (press === 0) {
        blinking1 = 18;
        blinking2 = 6;
    }

    // im just using this to see usfull info
    print(press)
}

// makes a heart shape
function heart() {
    noStroke();
    fill(255, saturation, brightness);
    triangle(width / 2, height / 2 + 33, width / 2 + 24.3, height / 2 - 10, width / 2 - 24.3, height / 2 - 10);
    ellipse(width / 2 + 12, height / 2 - 15, 26);
    ellipse(width / 2 - 12, height / 2 - 15, 26);
}

// makes the shine arround the heart (i call them spikes)
function radiant() {
    // Loop through angles 0, 30, 60, 90 degrees
    for (let angle = 0; angle <= 360; angle += 30) {
        // Save current coordinate system
        push();

        // Translate to center of canvas and rotate by angle
        translate(width / 2, height / 2);
        rotate(angle + frameCount);

        fill(100, saturation, brightness);
        noStroke();
        arc(-10, 0, 35, 200, 0, 89);

        // Restore coordinate system
        pop();
    }

    for (let angle = 15; angle <= 360; angle += 30) {
        // Save current coordinate system
        push();

        // Translate to center of canvas and rotate by angle
        translate(width / 2, height / 2);
        rotate(angle + frameCount * 0.5);

        fill(200, saturation, brightness);
        noStroke();
        arc(-10, 0, 35, 150, -89, 0);

        // Restore coordinate system
        pop();
    }
}

// adds eyelids around the eye
function eye() {

    fill(100, 50, 100)

    triangle(width / 2 + 160, height / 2 - 65.2, width / 2 + 310, height / 2 + 38, width / 2 + 108.5, height / 2 + 86)

    triangle(width / 2 - 160, height / 2 - 65.2, width / 2 - 310, height / 2 + 38, width / 2 - 108.5, height / 2 + 86)

    fill(100, 30, 100)
    ellipse(width / 2, height / 2, 420, 200)

    fill(100, 10, 100)
    ellipse(width / 2, height / 2, 200, 200)
}

// moves the eyelids
function blink() {
    translate(width / 2, height / 2);
    fill(10, 10, 10);
    arc(0, 40, 650, 300, blinking1 + 180, -blinking1 + 0, OPEN);
    arc(0, 40, 650, 130, blinking2 + 0, -blinking2 + 180, OPEN);


}

// changes the variable to false if the timer ends ( this is for press ((for now)))
function tiemrEnd() {
    press = 0;
}

// check ifthe mouse was pressed to activate other code
function mousePressed() {
    press = 1;
    frameCount = 1
    setTimeout(tiemrEnd, timer);


}
