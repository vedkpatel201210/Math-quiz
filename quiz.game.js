var questionPlayerName = "";
var answerPlayerName = "";
function loadPlayerName(){
    player1 = localStorage.getItem("player1_name");
    player2 = localStorage.getItem("player2_name");
    questionPlayerName = player1;
    answerPlayerName = player2;
    player1_score = 0;
    player2_score = 0;
    
    document.getElementById("player1_name").innerHTML = player1 + " : ";
    document.getElementById("player2_name").innerHTML = player2 + " : ";
    document.getElementById("player_question").innerHTML = "Question Turn - " + questionPlayerName;
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + answerPlayerName;    
    
    document.getElementById("player1_score").innerHTML = player1_score;    
    document.getElementById("player2_score").innerHTML = player2_score;
    
}

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt (number1) * parseInt (number2);
    question_number = "<h4>" + number1 +"X" + number2 + "</h4>";
    input_box = "<br> Answer :<input type='text' id ='input_check_box' >";
    check_button = "<br><br> <button class='btn_btn-info' onclick = 'check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check(){
    given_answer = document.getElementById("input_check_box").value;
    correct_answer = false;
    if(given_answer == actual_answer){
        correct_answer = true;
    }
    
    if(answerPlayerName == player2) {
        if(correct_answer == true) {
            player2_score = player2_score + 1;
        }
        questionPlayerName = player2;
        answerPlayerName = player1;
    } else {
        if(correct_answer == true) {
            player1_score = player1_score + 1;
        }
        questionPlayerName = player1;
        answerPlayerName = player2;
    }

    document.getElementById("player_question").innerHTML = "Question Turn - " + questionPlayerName;
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + answerPlayerName;    
    
    document.getElementById("player1_score").innerHTML = player1_score;    
    document.getElementById("player2_score").innerHTML = player2_score;

    document.getElementById("output").innerHTML = "";
}
