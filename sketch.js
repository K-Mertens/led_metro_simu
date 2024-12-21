// ************************************************
// LED Metro Simu
// Horribly coded by : Kevin Le Teugg, 2024
// File : sketch.js
// Description :
// ************************************************

let CANVAS_WIDTH = 800;
let CANVAS_HEIGHT = 600;
let ARR_CANVAS_W = [2560, 1920, 1600, 1366, 1280, 1024, 960, 854, 640, 426, 320, 256];
let ARR_CANVAS_H = [1440, 1080, 900, 768, 720, 576, 540, 480, 360, 240, 180, 144];

let test;
let frameRateSlider;
let line1 = [];
let line1Color;
let line2Color;
let line5Color;
let line6Color;
let mainCounter = 0;
let line1Counter = 0;
let line2Counter = 0;
let line5Counter = 0;
let line6Counter = 0;
let isForward = true;

for(let i = 0; i < ARR_CANVAS_W.length; i++ ) {
	// Setting canvas width to the size of the viewport minus the some wierd margins
	// Setting canvas height to the height of the viewport minus the approximate size of a bookmark bar (not taken into account)
	if (document.documentElement.clientWidth - 50 >= ARR_CANVAS_W[i] && document.documentElement.clientHeight - 100 >= ARR_CANVAS_H[i]) {
		CANVAS_WIDTH = ARR_CANVAS_W[i];
		CANVAS_HEIGHT = ARR_CANVAS_H[i];
		console.log("Appropriate canvas size found: " + CANVAS_WIDTH + "*" + CANVAS_HEIGHT);
		break;
	  }
  }

function preload() {

	//TestImg = loadImage('test_img.png');
	test = loadJSON('stations.json');
}

function setup() {
	// Canvas creation
	canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	canvas.parent('sketch-holder');
	background(60);
	line1Color = color(185, 44, 146);
	line2Color = color(249, 157, 50);
	line5Color = color(252, 184, 19);
	line6Color = color(0, 128, 178);

	frameRateSlider = createSlider(1,60,1,1);
	frameRateSlider.parent('framerate-slider');

	console.log(test);
	console.log(test.stations);
	console.log(test.stations[0]);
	console.log(test.stations[1]);
	console.log(test.stations[0].lines);

	test.stations.forEach(element => {

	});
}

function draw() {

	if (mainCounter >= -1 && isForward == true && mainCounter <= 31) {
		mainCounter++;
	} else if (mainCounter >= 0 && isForward == false && mainCounter <= 32) {
		mainCounter--;
	}

	if (mainCounter > 31 && isForward == true) {
		isForward = false;
	} else if (mainCounter < 0 && isForward == false) {
		isForward = true;
	}

	background(200);
	frameRate(frameRateSlider.value());
	push();
    translate(CANVAS_WIDTH - 80, 50);
    textAlign(CENTER, CENTER);
    fill(255);
    text('Framerate : ' + frameRateSlider.value() + 'fps', 0, -30);
    pop();

	test.stations.forEach(element => {
		push();
		translate(30,30);
		ellipseMode(CENTER);

		if (element.id == test.line1[mainCounter]) {
			fill(line1Color);
		} else if (element.id == test.line2[mainCounter]) {
			fill(line2Color);
		} else if (element.id == test.line5[mainCounter]) {
			fill(line5Color);
		} else if (element.id == test.line6[mainCounter]) {
			fill(line6Color);
		} else {
			fill(255);
		}

		stroke(0);
		circle(element.Xcoord*(CANVAS_WIDTH)/test.max_coordinates.Xcoord, element.Ycoord*(CANVAS_HEIGHT - 60)/test.max_coordinates.Ycoord, 20);
		pop();

/* 		if (element.id == test.line1[mainCounter]) {
			push();
			ellipseMode(CENTER);
			fill(line1Color);
			stroke(0);
			circle(element.Xcoord*(CANVAS_WIDTH - xPadding)/test.max_coordinates.Xcoord, element.Ycoord*(CANVAS_HEIGHT- yPadding)/test.max_coordinates.Ycoord, 20);
			pop();
		} else if (element.id == test.line2[mainCounter]) {
			push();
			ellipseMode(CENTER);
			fill(line2Color);
			stroke(0);
			circle(element.Xcoord*(CANVAS_WIDTH - xPadding)/test.max_coordinates.Xcoord, element.Ycoord*(CANVAS_HEIGHT- yPadding)/test.max_coordinates.Ycoord, 20);
			pop();
		} else if (element.id == test.line5[mainCounter]) {
			push();
			ellipseMode(CENTER);
			fill(line5Color);
			stroke(0);
			circle(element.Xcoord*(CANVAS_WIDTH - xPadding)/test.max_coordinates.Xcoord, element.Ycoord*(CANVAS_HEIGHT- yPadding)/test.max_coordinates.Ycoord, 20);
			pop();

		} else if (element.id == test.line6[mainCounter]) {
			push();
			ellipseMode(CENTER);
			fill(line6Color);
			stroke(0);
			circle(element.Xcoord*(CANVAS_WIDTH - xPadding)/test.max_coordinates.Xcoord, element.Ycoord*(CANVAS_HEIGHT- yPadding)/test.max_coordinates.Ycoord, 20);
			pop();

		} else {
			push();
			ellipseMode(CENTER);
			fill(255);
			stroke(0);
			circle(element.Xcoord*(CANVAS_WIDTH - xPadding)/test.max_coordinates.Xcoord, element.Ycoord*(CANVAS_HEIGHT- yPadding)/test.max_coordinates.Ycoord, 20);
			pop();
		} */

	});
	//testCounter += 1;
	//mainCounter++;
	
}