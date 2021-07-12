Webcam.set({
    height: 300,
    width: 300,
    image_format: 'png',
    png_quality : 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function TakeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('Ml5 version '+ml5.version);

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/85JT1iHKi/model.json",modelLoaded);