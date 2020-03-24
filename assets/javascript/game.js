$(document).ready(function() {

    // targetNumber is randomly generated between 19 and 120
    function randomNum() {
    var targetNumber = Math.floor(Math.random() * 102) + 19;
    $("#target-num").html(targetNumber);
    }

    // Calling the randomNum function
    randomNum();

    // totalScore starting at 0
    var totalScore = 0;
    $("#total-score").html(totalScore);

    var wins = 0;
    $("#wins").html(wins)

    var losses = 0;
    $("#losses").html(losses)

    // Recording wins and losses
    function scoreBoard() {
        if (totalScore === targetNumber) {
            wins++;
            alert("We have a winner!");

        } else (totalScore > targetNumber); {
            losses++;
            alert("Oh no! You went over the target number!");
        }
    };


    // Crystals will generate numbers between 1 and 12
    var amethyst = Math.floor(Math.random() * 12) + 1;
    var sapphire = Math.floor(Math.random() * 12) + 1;
    var opal = Math.floor(Math.random() * 12) + 1;
    var peridot = Math.floor(Math.random() * 12) + 1;

    // Set functionality to crystals
    $("#amethyst").on('click', function() {
            totalScore = totalScore + amethyst
            $('#total-score').html(totalScore);
            if (totalScore === targetNumber) {
                wins++;
                reset();
                resetCrytsal();
    
            } else (totalScore > targetNumber); {
                losses++;
                reset();
                resetCrytsal();
            }
            $('#total-score').html(totalScore);
    });        

    $("#sapphire").on('click', function() {
        totalScore = totalScore + sapphire
            $('#total-score').html(totalScore);
    });        

    $("#opal").on('click', function() {
        totalScore = totalScore + opal
            $('#total-score').html(totalScore);
    });      
            
    $("#peridot").on('click', function() {
        totalScore = totalScore + peridot
            $('#total-score').html(totalScore);                     
    });
    
   scoreBoard();

   // Reset the score of the game
    function reset() {
    totalScore = 0;
    $("#total-score").text(totalScore);
    }

    // Reset random numbers for crystals
    function resetCrytsal() {
    targetNumber = Math.floor(Math.random() * 102) + 19;
    amethyst = Math.floor(Math.random() * 12) + 1;
    sapphire = Math.floor(Math.random() * 12) + 1;
    opal = Math.floor(Math.random() * 12) + 1;
    peridot = Math.floor(Math.random() * 12) + 1;
    }

});




