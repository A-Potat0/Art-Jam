/**
 * window to the soul
 * Anthony Patient
 * 
 * the eye is interactible with a mouse try mouving arround or clicking
 * 
 */

"use strict";


// buch of usfull variables for later
//these will be used to pulse the colors
let brightness = undefined;
let saturation = undefined;
//these will be used to blink
let blinking1 = 35;
let blinking2 = undefined;
//these variables are for the blinking
let press = 0
let timer = 6.20 * 1000; // 3 seconds
//these are the base variables that will let me randomize the color
let randomHue = 100;
let randomSat = 50;
let randomBris = 50;
//this will let me make the herart disco
let randomHeartHue = 255;
//this variable is used to make a disco background (it is appropriate and somewhat descriptive :\ )
let disco = 0

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
 * this draws the whole project calling the different functions needed
*/
function draw() {

    // set the background color
    background(randomHue / 2, randomSat / 2, randomBris / 2);

    eye();

    radiant();

    heart();

    blink();

    //pulses the eye color
    brightness = map(sin(frameCount * 0.05), -1, 1, 85, 150);
    saturation = map(sin(frameCount * 0.9), -1, 1, 50, 400);

    if ((mouseX <= (width / 2) + 25 && mouseX >= (width / 2) - 25) && (mouseY <= (height / 2) + 33 && mouseY >= (height / 2) - 29)) {
        cursor('none');
    }
    else if (mouseX < (width / 2) && mouseY < (height / 2)) {
        cursor('ne-resize');
    }
    else if (mouseX == (width / 2) && mouseY <= (height / 2)) {
        cursor('e-resize');
    }
    else if (mouseX > (width / 2) && mouseY < (height / 2)) {
        cursor('se-resize');
    }
    else if (mouseX >= (width / 2) && mouseY == (height / 2)) {
        cursor('s-resize');
    }
    else if (mouseX > (width / 2) && mouseY > (height / 2)) {
        cursor('sw-resize');
    }
    else if (mouseX == (width / 2) && mouseY >= (height / 2)) {
        cursor('w-resize');
    }
    else if (mouseX < (width / 2) && mouseY > (height / 2)) {
        cursor('nw-resize');
    }
    else if (mouseX <= (width / 2) && mouseY == (height / 2)) {
        cursor('n-resize');
    }
    else {
        cursor(AUTO);
    }
    //checks if the mouse was clicked before it runs the code
    if (disco == 1) {
        //makes the background go disco
        randomHue = random(2, 360);
        randomSat = random(2, 100);
        randomBris = random(2, 100);
    }

    else if (press == 1) {

        //this is the blinking
        blinking1 = map(cos(frameCount), -1, 1, 0, 35);
        blinking2 = map(cos(frameCount), -1, 1, 0, 12);
        //changes the color of the heart :)
        randomHeartHue = map(sin(random(random(0, 180) * mouseX * 0.01, random(180, 360) * mouseY * 0.01)), -1, 1, 0, 360)

    }

    else if (press === 0) {
        //reset to base values the blink location and heart color
        blinking1 = 35;
        blinking2 = 12;
        randomHeartHue = 255;
    }

    // im just using this to see usfull info
    print(randomHeartHue)
}

// makes a heart shape
function heart() {
    noStroke();
    fill(randomHeartHue, saturation, brightness);
    triangle((width / 2) + ((mouseX - width / 2) / 8), (height / 2 + 33) + (mouseY - height / 2) / 8, (width / 2 + 24.3) + ((mouseX - width / 2) / 8), (height / 2 - 10) + (mouseY - height / 2) / 8, (width / 2 - 24.3) + ((mouseX - width / 2) / 8), (height / 2 - 10) + (mouseY - height / 2) / 8);
    ellipse((width / 2 + 12) + ((mouseX - width / 2) / 8), (height / 2 - 15) + (mouseY - height / 2) / 8, 26);
    ellipse((width / 2 - 12) + ((mouseX - width / 2) / 8), (height / 2 - 15) + (mouseY - height / 2) / 8, 26);
}

// makes the shine arround the heart (i call them spikes)
function radiant() {
    //a part of this was copied from https://p5js.org/examples/transformation-rotate/
    // Loop through angles 0, 30, 60, 90 degrees
    for (let angle = 0; angle <= 360; angle += 30) {
        // Save current coordinate system
        push();

        // Translate to center of canvas and rotate by angle
        translate((width / 2), (height / 2));
        translate(((mouseX - width / 2) / 10), (mouseY - height / 2) / 10);

        rotate(angle + frameCount);

        fill(100, saturation, brightness);
        noStroke();
        arc(-10, 0, 35, 200, 0, 89);

        // Restore coordinate system
        pop();
    }

    for (let angle = 15; angle <= 360; angle += 30) {
        // Save current coordinate syste8
        push();

        // Translate to center of canvas and rotate by angle
        translate(width / 2, height / 2);
        translate((mouseX - width / 2) / 9, (mouseY - height / 2) / 9);
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

    triangle((width / 2 + 151) + ((mouseX - width / 2) / 20), (height / 2 - 60) + (mouseY - height / 2) / 20, (width / 2 + 320) + ((mouseX - width / 2) / 20), (height / 2 + 38) + (mouseY - height / 2) / 20, (width / 2 + 88) + ((mouseX - width / 2) / 20), (height / 2 + 83) + (mouseY - height / 2) / 20)

    triangle((width / 2 - 151) + ((mouseX - width / 2) / 20), (height / 2 - 60) + (mouseY - height / 2) / 20, (width / 2 - 320) + ((mouseX - width / 2) / 20), (height / 2 + 38) + (mouseY - height / 2) / 20, (width / 2 - 88) + ((mouseX - width / 2) / 20), (height / 2 + 83) + (mouseY - height / 2) / 20)

    fill(100, 30, 100)
    ellipse((width / 2) + ((mouseX - width / 2) / 15), (height / 2) + (mouseY - height / 2) / 15, 420, 200)

    fill(100, 10, 100)
    ellipse((width / 2) + ((mouseX - width / 2) / 12), (height / 2) + (mouseY - height / 2) / 12, 200, 200)
}

// moves the eyelids
function blink() {
    translate((width / 2) + ((mouseX - width / 2) / 20), (height / 2) + (mouseY - height / 2) / 20);
    fill(randomHue, randomSat, randomBris);
    arc(0, 40, 650, 332, blinking1 + 180, -blinking1 + 0, OPEN);
    arc(0, 40, 650, 162, blinking2 + 0, -blinking2 + 180, OPEN);

}

// changes the variable to false if the timer ends ( this is for press ((for now)))
function tiemrEnd() {
    // press = false
    press = 0;

    //set random color for background
    randomHue = random(2, 360);
    randomSat = random(2, 100);
    randomBris = random(2, 100);

    //disco = false
    disco = 0

}

// check ifthe mouse was pressed to activate other code
function mousePressed() {

    if (press === 0) {
        //reset frameCount
        frameCount = 1;
        //set press = true
        press = 1;

    }
    setTimeout(tiemrEnd, timer);

}


function mouseClicked() {
    if ((mouseX <= (width / 2) + 25 && mouseX >= (width / 2) - 25) && (mouseY <= (height / 2) + 33 && mouseY >= (height / 2) - 29)) {
        //disco = true
        disco = 1
    }

}