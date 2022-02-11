function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('', modelReady);
}
 
function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        
        document.getElementById("result").innerHTML = "I hear- "+ results[0].label;

        document.getElementById("catAccuracy").innerHTML = "Accuracy- "+ (results[0].confidence*100).toFixed(2) + " %";

        document.getElementById("dogAccuracy").innerHTML = "Accuracy- "+ (results[0].confidence*100).toFixed(2) + " %";

        if(results[0].label = "cat"){
            document.getElementById("ImageOfResult").innerHTML = "<img src='" + cat.png + "'>";
        }
        else if(results[0].label = "dog"){
            document.getElementById("ImageOfResult").innerHTML = "<img src='" + dog.png + "'>";
        }
    }
}