function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/A6tOYxTE8/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(gotResults);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuary - ' + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + random_number_b + random_number_g + ")";

        img = document.getElementById('animal_image');
        img.src = 'Screenshot 2022-05-14 101351.jpg';

        if (results[0].label == 'bark'){
            img.src = 'https://cdn.dribbble.com/users/1873131/screenshots/13984297/media/31dbd8a0305374cc86cca85ce632234b.gif';
            

        }
        else if(results[0].label == 'meow'){
            img.src = 'https://c.tenor.com/Tkmzq2w3mMgAAAAC/meow-cat.gif'
        }
    
    }
    
}