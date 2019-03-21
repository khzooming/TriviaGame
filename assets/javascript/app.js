
// create array questions and multiple answers
var trivia = [
    { ques: "Who won the Oscar for Best Actor for playing Hannibal Lecter?",
    ans: {
        choice1: "Anthony Hopkins",
        choice2: "John C. Reily",
        choice3: "Jack Nicholson",
        choice4: "Steve Buscemi" },
    correctAns: "Anthony Hopkins",
    background: "Anthony Hopkins won the award as Hannibal Lecter in 'The Silence of the Lambs'. He is also known for his roles in 'The Elephant Man', 'Meet Joe Black', and 'The Mask of Zorro'.",
    },
   { ques: "Many movies have numerous nominations and win many Oscars. However, the 'Big Five' Academy Award categories are Best Picture, Best Director, Best Actor, Best Actress and Best Screenplay. All of the following movies won Best Picture and Best Director. However, which one of these won the Big Five?",
    ans: {
        choice1: "Gone with the Wind (1939)",
        choice2: "Titanic (1997)",
        choice3: "West Side Story (1961)",
        choice4: "One Flew Over the Cuckoo's Nest (1975)"},
        correctAns: "One Flew Over the Cuckoo's Nest (1975)",
        background: "'One Flew Over the Cuckoo's Nest'received nine nominations with five wins, all being the Big Five categories: Best Picture, Best Director (Milos Forman), Best Actor (Jack Nicholson), Best Actress (Louise Fletcher) and Best Screenplay (Laurence Hauben/Bo Goldman). Two other movies have also won the Big Five, being 'It Happened One Night' (1934) at the 1935 awards night winning all its five nominations - Best Picture, Best Director (Frank Capra), Best Actor (Clark Gable), Best Actress (Claudette Colbert) and Best Screenplay (Robert Riskin) - and 'The Silence of the Lambs'(1991) nominated in seven categories and winning five in 1992, all being the Big Five - Best Picture, Best Director (Jonathon Demme), Best Actor (Anthony Hopkins), Best Actress (Jodie Foster) and Best Screenplay (Ted Tally).",
   },
    { ques: "Which woman has written a book, that has become a film, that has earned Oscar nominations?",
    ans: {
        choice1: "Alice Walker",
        choice2: "Ann Tyler",
        choice3: "Anne Rice",
        choice4: "All Of them"},
        correctAns: "All Of them",
        background: "All of their books translated into Oscar worthy films. Walker penned 'The Color Purple' which was nominated multiple times but didn't win any. Tyler wrote 'The Accidental Tourist', among others, that won a statue for Geena Davis as Best Supporting Actress. Rice wrote 'Interview With A Vampire', nominated for production design and music.",
    },
    { ques: "Which of these actors won the Best Actor award consecutively for two years?",
    ans: {
        choice1: "Roberto Benigni",
        choice2: "Geoffrey Rush",
        choice3: "Jeremy Irons",
        choice4: "Tom Hanks"},
        correctAns: "Tom Hanks",
        background: "Tom Hanks won the Best Actor award consecutively for 1993 and 1994, for his role in 'Philadelphia' and 'Forrest Gump'. Roberto Benigni, Geoffrey Rush and Jeremy Irons won the award in 1998, 1996 and 1990 respectively."
}
]

console.log(trivia);

// display trivia questions and answers with radio buttons
// loop through array to display the answers as radio buttons.
function display() {
for (i=0; i < trivia.length; i++) {
<table>
    <tr>
        <td><input type="radio" name="rbnNumber" value="1"></input><br/>
        <td><input type="radio" name="rbnNumber" value="1" /></input><br/>
        <td><input type="radio" name="rbnNumber" value="1" /></input><br/>
        <td><input type="radio" name="rbnNumber" value="1" /></input><br/>
    </tr>
</table>
}
}

// - append following questions to the first div
// hide the questions and answers until Start button is clicked

// Start button, trivia questions are hidden
// When start button is clicked, trivia buttons show up.  
// Use hide / unhide function
var button = $("#start");

$button.click(function () {

})

function start () {
// unhide questions
// start counter
}

// button at bottom to submit answers if done before timer
// submit button calls the check function to check guessed answers

