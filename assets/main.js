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

    let correctAnswers= 0;
    let incorrectAnswers= 0;
    let unansweredQuestions= 0;

    $(".js-reset").hide();

    let count = 61;
    let event;

    let questions = [
        {
            "id": 0,
            "question" : "what is marge's maiden name?",
            "answer": ["Smith", "Bouvie", "Bubble"],
            "correctAnswer" : "Bouvie",
            "checked": false,
            "image": ""

        },
        {
            "id": 1,
            "question" : "what is homer's favorite snack?",
            "answer": ["donuts", "beer", "salad", "hummus"],
            "correctAnswer" : "donuts",
            "checked": false,
            "image": ""
        }
    ]
    //global variables
    //question data
    $(".js-stop").hide();
    //functions
    function startGame() {

        $(".js-start").hide();
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


        $(".js-stop").show();

    };
    function stopGame() {
        //$('input:checked').each(function(){
           // let userAnswer = $(this).val();
            for (let i = 0; i < questions.length; i ++) {
                let tempSelector =$("input[name=q" + i +"]:checked");
                let userAnswer = $(tempSelector).val();
                //console.log("user answer: " + userAnswer);
                //console.log("correct answer: " + questions[i].correctAnswer);
                console.log(userAnswer);

                if (!$("input[name=q" + i +"]:checked").val()) {
                    console.log('unanswered');
                    unansweredQuestions++;

                } else if (userAnswer === questions[i].correctAnswer) {
                    console.log('correct');
                    correctAnswers++;
                } else {
                    console.log('wrong');
                    incorrectAnswers++;
                }

            };

            console.log("unanswered: " +unansweredQuestions);
            console.log("incorrect: " + incorrectAnswers);
            console.log("correct: " + correctAnswers);
           // console.log(userAnswers);
            let correctAnswerDiv = $("<div>");
            let incorrectAnswerDiv = $("<div>");
            let unansweredQuestionsDiv = $("<div>");

            correctAnswerDiv.append("<p>Correct Answers: " + correctAnswers);
            $(".js-correct-answers").prepend(correctAnswerDiv);

            incorrectAnswerDiv.append("<p>Incorrect Answers: " + incorrectAnswers);
            $(".js-incorrect-answers").prepend(incorrectAnswerDiv);

            unansweredQuestionsDiv.append("<p>Unanswered Questions: " +unansweredQuestions);
            $(".js-unanswered").prepend(unansweredQuestionsDiv);

            $(".js-questions").hide();
            $(".js-stop").hide();
            $(".js-reset").show();

    };

    function timeIsUp(){
        $(".js-reset").show();
        $(".js-title").hide();
        $(".js-questions").hide();
        $(".js-correct-answers").hide();
        $(".js-incorrect-answers").hide();
        $(".js-unanswered").hide();
        $(".js-stop").hide();
        let timeIsUpDiv = $("<div>");
        let p= $("<p>").text("Time is up! Try again!")

        timeIsUpDiv.append(p);

        $(".js-time-up").prepend(timeIsUpDiv);
    }

    //events

    //click start button will start the game

    $(".js-start").on('click', function(){
        startGame();
        countDown();

        let tm = setInterval(countDown, 1000);
        function countDown(){
            count--;
            let timeLeft = $("<div>");
            let time = $("<p>").text(count);
            
            if (count === 0) {
                clearInterval(tm);
                timeIsUp();
            } else {
                console.log(count);
            }
        }
       /*  countDown = setTimeout(function(){
            count--;
            if (count>0 {
                clearInterval()
            })
            timeIsUp();
        }, 5000) */
    })

    //click stop button to see score

    $(".js-stop").on('click', function(){
        stopGame();
        clearInterval($(".js-start").tm);

    })
    //timer runs out to end game and show score

    $(".js-reset").on('click', function(){
        location.reload();
    })



});