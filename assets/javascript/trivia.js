function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;

    if (question1 == 1994) {
        correct++;
}
    if (question2 == 2001) {
        correct++;
}
    if (question3 == 1999) {
        correct++;
}
    if (question4 == 1985) {
        correct++;
}
    if (question5 == 1995) {
        correct++;
}

let messages = ["Great Job!", "That's just okay", "You really need to do better"];
let picture = ["img/1.gif", "img/2.gif", "img/3.gif"]; 
   

   let range;

     if (correct < 2) {
         range = 2;
     }

     if (correct >= 2 && correct <= 3) {
         range = 1;
     }

     if (correct >= 4) {
         range = 0;
     }

    document.getElementById("after_submit").style.visibility = "visible"; 
    
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("pictures").src = picture[range]; 

}

function timer(){
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec === 0) {
            clearInterval(timer);
            alert("You're out of time!");
        }
    }, 1000);
    
}


timer()


