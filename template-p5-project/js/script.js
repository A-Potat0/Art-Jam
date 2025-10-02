/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 800);
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(160, 180, 200);
    heart()
}

function heart() {
    noStroke();
    fill(255, 100, 150)
    triangle(400, 395, 426, 350, 374, 350);
    ellipse(412, 349, 26);
    ellipse(388, 349, 26);
}