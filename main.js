function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/8bsRVtFP0/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(){
    console.log("got the results");
}