noseX = 0;
noseY = 0;
function take_snapshot() {
save('myFilterImage.png')
} 

classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
console.log('Posenet Is Initialied');
}

function gotPoses(results)
{
if (results.length > 0) 
{
console.log(results);
noseX = results[0].pose.nose.x - 5;
noseY = results[0].pose.nose.y - 5;
console.log("nose x = " + noseX);
console.log("nose y = " + noseY);
}
}