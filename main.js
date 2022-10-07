noseX = 0;
noseY = 0;
function preload(){
   filtro =loadImage('https://i.postimg.cc/Pq4bL0Ng/pngegg.png'); 
}
function setup(){
    canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    
    image(filtro,noseX,noseY,220,220);
}
function take_snapshot(){
    save('SPOOKIES.png');
}
function modelLoaded(){
    console.log("Modelo cargado..");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x-110;
        noseY = results[0].pose.nose.y-130;
        console.log("nose x= "+noseX);
        console.log("nose y ="+noseY);
    }
}