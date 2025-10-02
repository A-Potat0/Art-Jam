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

    // this was copied from https://p5js.org/examples/transformation-rotate/
 // Set angle mode to degrees
  angleMode(DEGREES);

    // this was also copied from the same place
  // Set the color mode to hue-saturation-brightness (HSB)
  colorMode(RGB);
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    //background(160, 180, 200);

      // Clear the background
  background(0);

    radiant()

    heart()
}

function heart() {
    noStroke();
    fill(64, 0, 255)
    triangle(width/2, height/2 + 33, width/2 + 24.3, height/2 - 10, width/2 - 24.3, height/2 - 10);
    ellipse(width/2 + 12, height/2 - 15, 26);
    ellipse(width/2 - 12, height/2 - 15, 26);
}

function radiant() {
      // Loop through angles 0, 30, 60, 90 degrees
  for (let angle=0; angle <= 360; angle += 30) {
      // Save current coordinate system
      push();                       

      // Translate to center of canvas and rotate by angle
      translate(width/2, height/2);
      rotate(angle + frameCount);

      fill(85, 255, 0); 
      noStroke();
      arc(-10, 0, 35, 200, 0, 89);

      // Restore coordinate system
      pop();                        
  }
  
  for (let angle=15; angle <= 360; angle += 30) {
      // Save current coordinate system
      push();                       

      // Translate to center of canvas and rotate by angle
      translate(width/2, height/2);
      rotate(angle + frameCount * 0.5);

      fill(0, 170, 255); 
      noStroke();
      arc(-10, 0, 35, 150, -89, 0);

      // Restore coordinate system
      pop();                        
  }
}