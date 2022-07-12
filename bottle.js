img ="";
status = "";
objects = [];

function preload(){
    img = loadImage('bottle.webp');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Dectecting objects";
}

function modelLoaded(){
console.log("model Loaded!");
status = true;
objectDetector.detect(img, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(img, 0, 0, 640, 420);

if(status != ""){
    for (i = 0; 1 < objects.length; i++) 
    {
document.getElementById("status").innerHTML = "status : object Detected";

fill("#FF0000");
percent = floor(objects[i].confidence * 100);
text(objects[i].label +" " + percent + "%", objects[i].x, objects[i].x + 15, objects[i].y + 15);
noFill();
stroke("black")
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
    
  
}