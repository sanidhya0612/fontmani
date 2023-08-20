leftWristX = "";
rightWristX = "";
difference = "";

function preload()
{}

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(500,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);    
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is initialized !!!');
}

function draw()
{
    background('#610e78');
    textSize(difference);
    fill("red");
    text("Sanidhya Gupta", 20, 200);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);


    }
}

