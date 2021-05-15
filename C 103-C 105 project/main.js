Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
Webcam.snap(function(data_uri){
    //uri=uniform resource identifier
    document.getElementById("results").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';

});
}

console.log('ml5version',ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/x13k1yEXH/modle.json',modelloaded);

function modelloaded(){
    console.log('ml5modelloaded');
}