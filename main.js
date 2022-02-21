function setup(){
    canvas = createCanvas(680,440);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0, 680,440);
}