var canvas = new fabric.Canvas("myCanvas");
var ballx = 0;
var bally = 0;
var holex = 800;
var holey = 400;

block_image_width = 5;
block_image_height = 5;

function load_img() {
	fabric.Image.fromURL("golf-h.png", function (Img) {
		holeobject = Img;
		holeobject.scaleToWidth(50);
		holeobject.scaleToHeight(50);
		holeobject.set({
		left: holex,
		top: holey
		});
		canvas.add(holeobject);
	});
	new_image();
}

function new_image() {
	fabric.Image.fromURL("ball.png", function (Img) {
		ballobject = Img;
		ballobject.scaleToWidth(50);
		ballobject.scaleToHeight(50);
		ballobject.set({
			top: bally,
			left: ballx
		});
		canvas.add(ballobject);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (ballx == holex && bally == holey) {
		canvas.remove(ballobject);
		console.log("You hit the goal")
		document.getElementById("hd3").innerHTML = "You hit the goal";
		document.getElementById("myCanvas").style.borderColor = "red";
	}

	else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

	function up() {
		if (bally > 5) {
			bally = bally - block_image_height;
			canvas.remove(ballobject);
			new_image();
		}
	}

	function down() {
		if (bally < 450) {
			bally = bally + block_image_height;
			canvas.remove(ballobject);
			new_image();
		}
	}

	function left() {
		if (ballx > 5) {
			ballx = ballx - block_image_width;
			canvas.remove(ballobject);
			new_image();
		}
	}

	function right() {
		if (ballx <= 1050) {
			ballx = ballx + block_image_width;
			canvas.remove(ballobject);
			new_image();
		}
	}

}

