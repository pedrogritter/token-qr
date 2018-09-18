var canvas = document.getElementById('space_box');
var c = canvas.getContext('2d');

var innerWidth = window.innerWidth,
    innerHeight = window.innerHeight,
    radius = 20,
    starsIndex = 0,
    stars = [],
    two_pi = Math.PI*2
    //Star Variables
    centerX = innerWidth/2,
    centerY = innerHeight/2
    focalLength = 50
    starRadius = null,  //get from radius
    starX = null,       //get from x
    starY = null ;       //get from y

    canvas.width = innerWidth;
    canvas.height = innerHeight;

// Function to create new star objects
function star(x,y,z){
    //Start Star variables
    this.x = x;
    this.y = y;
    this.z = y;
    this.radius = radius;
    this.color = "#fff";
    starsIndex++;
    stars[starsIndex] = this;
    this.id = starsIndex;


    //Animate star object
    this.update = function() {
        starX = (this.x - centerX) * (focalLength / this.z);
        starX += centerX;

        starY = (this.x - centerY) * (focalLength / this.z);
        starY += centerY;

        starRadius = radius * (focalLength / this.z);

        this.z -= 5;

        if (this.z <= 0) {
            this.z = parseInt(innerWidth);
        }

        this.draw();
    }
    //Begin drawing
    this.draw = function() {
        c.beginPath();
        c.arc(starX,starY,starRadius,two_pi, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }
}

// Start X, Y, Z values
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var z = Math.random() * innerWidth;
   new star(x,y,z);

// Function that animates the canvas objects
function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "#000";
    c.fillRect(0,0,innerWidth,innerHeight);

    for (var i in stars){
        stars[i].update();
    }
}

animate();