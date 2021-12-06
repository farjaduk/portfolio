





// THIS IS THE PART!!!!!

final.setAttribute("id", "final-score");
final.textContent = "Your final score is ___.");
questionContent.append(final);


var input = document.createElement("input");
questionContent.append(input);

var submitButton = document.createElement("button");
submitButton.textContent = "Submit";
questionContent.append(submitButton);
submitButton.addEventListener("click", function () {

        var storage = JSON.parse(localStorage.getItem("user"));
        console.log(storage)

        if (storage === null) {
            storage = [];

        }
        var user = {
            name: input.value
            score: score,
        };
        storage.push(user);
            localStorage.setItem("user", JSON.stringify(storage));
});

console.log ("The quiz is over!");
window.location.href = "highscores.html"
}










var c = 60;

var myTimer;
function clock() {
    myTimer = setInterval(myClock, 1000);
    function myClock() {
        document.getElementById("timer").innerHTML = c--;
        if (c === -1) {
        clearInterval(myTimer);
       }
    }
}