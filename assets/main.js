//page loads
// initial state: title and Start button
// 2nd state: press start button, initates game
// 3rd state: gamestarts, timer counts down
// user answers questions
// 4.A: timer runs out - game over, page changes to end screen, counts guess rights, guess wrongs, and no responses
// 4.B: user finishes responding and clicks finishs. game counts guesses right, guesses wrongs, 
//


// show two questions and record score and restart game


$(document).ready(function(){

    let userAnswers= []; //"Bouvie", "donuts"
    let correctAnswers= 0;
    let incorrectAnswers= 0;
    let unansweredQuestions= 0;

    let questions = [
        {
            "question" : "what is marge's maiden name?",
            "answer": ["Smith", "Bouvie", "Bubble"],
            "correctAnswer" : "Bouvie",
            "image": ""
        },
        {
            "question" : "what is homer's favorite snack?",
            "answer": ["donuts", "beer", "salad", "hummus"],
            "correctAnswer" : "donuts",
            "image": ""
        }
    ]
    //global variables
    //question data

    //functions
    function startGame() {
        $(".js-start").remove();
        //looping through the array of questions 
        for (var i = 0; i <questions.length; i++) {
            //grabbing the div with js-questions and appending a <p. tag that includes each of the questions
            $('.js-questions').append('<p>' + questions[i].question + '</p>');
            //new loop that loops throughh each object in questions, the answers
            for (var j =0; j < questions[i].answer.length; j++){
                //grabs the js-question div again and appends in radio buttons with a class of btnGetValue, where the values are the answer arrays for each question, 
                $('.js-questions').append('<input type="radio" class="btnGetValue" value="' + questions[i].answer[j] + '" name="q' + i + '">' + questions[i].answer[j] +  '</input>')
            };
            $('.js-questions').append('<br><hr>');
        };
        //populate questsions div

    };

    function stopGame() {
        $('input:checked').each(function(){
            let userAnswer = $(this).val();
            console.log(userAnswer);
           
            if (userAnswer === questions.correctAnswer) {
                correctAnswers++;
                console.log('whoohoo');
            } else {
                console.log('doh');
            };
        });

    };


    //events

    //click start button will start the game

    $(".js-start").on('click', function(){
        //execute instructions
        startGame ();

    })

    //click stop button to see score

    $(".js-stop").on('click', function(){
        stopGame();
        $(".js-questions").remove();
    })
    //timer runs out to end game and show score

    



});