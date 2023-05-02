$(document).ready(function () {
    greetingGetter();
});


function greetingGetter(){
    $.getJSON("quiz.json", quizOutput);
    function quizOutput(quizData) {
        let x = Math.random() * quizData.Greetings.length;
        output = "<h1>" + quizData.Greetings[x] + "</h1>";
        $('#quizFiller').html(output);
    }
}

$('#quizFiller').click(function () {
    greetingGetter();
});
