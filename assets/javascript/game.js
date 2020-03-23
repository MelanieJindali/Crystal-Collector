
$(document).ready(function() {

    var targetNumber = 0;
    var randomNum = 0;
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    // Crystals will generate numbers between 1 and 12
    var amethyst = Math.floor(Math.random() * 12) + 1;
    var sapphire = Math.floor(Math.random() * 12) + 1;
    var opal = Math.floor(Math.random() * 12) + 1;
    var peridot = Math.floor(Math.random() * 12) + 1;




var winsText = document.getElementById("wins")
var lossesText = document.getElementById("losses")
var totalScoreText = document.getElementById("total-score")
var randomNumberText = document.getElementById("random-num")

