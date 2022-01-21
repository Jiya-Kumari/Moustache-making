function preload(){
    moustache=loadImage('https://i.postimg.cc/W1YdVS74/mustache-png.png');
}
function setup(){
canvas=createCanvas(350,350);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("moustachex="+results[0].pose.moustache.x);
        console.log("moustachey="+results[0].pose.moustache.y);
    }
}
function draw(){
image(video,25,25,300,300);
image(moustache,moustachex-10,moustachey,30,30);
}
function take_snapshot(){
    save('yoursnapshot.png');
}
function modelLoaded(){
    console.log("poseNetModelLoaded");
}
