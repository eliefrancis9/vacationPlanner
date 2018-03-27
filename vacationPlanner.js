// this is to get the name of the user
var name = window.prompt("Hello!! Please enter your name..");
var greeting = document.getElementById("greeting");
greeting.innerHTML += ", " + name;

// this is to get the days of the trip
var enterDays = document.getElementById("enterDays");
enterDays.onclick = calculateDays;

//Function to give a message and calculate dates
function calculateDays(){
    var daysInput = document.getElementById("days");
    var days = daysInput.value;
    var daysMessage = document.getElementById("daysMessage");
    if (days < 4){
        daysMessage.innerHTML = "Short trips are always worth it!";
    }
    else if (days < 7){
        daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
     }
     else{
         daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!";
     }
     // writing messages for hours minutes seconds

    var hours = days * 24;
    var minutes = hours * 60;
    var seconds = minutes * 60;
    
    var hoursMessage = document.getElementById("hoursMessage");
    hoursMessage.innerHTML = "This means you will be traveling for " + hours + " hours.";
    
    var minutesMessage = document.getElementById("minutesMessage");
    minutesMessage.innerHTML = "Which means you will be traveling for " + minutes + " minutes.";
    
    var secondsMessage = document.getElementById("secondsMessage");
    secondsMessage.innerHTML = "WOW!! this is " + seconds + " seconds";

    // showing next button
    var timingNext = document.getElementById("timingNext");
    timingNext.removeAttribute("hidden");

    timingNext.onclick = function()
    {
        document.getElementById("budgetSection").removeAttribute("hidden");
    }
}

// entering the amount to be spent
var enterBudget = document.getElementById("enterBudget");
enterBudget.onclick = calculateBudget;

function calculateBudget(){

    var daysInput = document.getElementById("days");
    var days = daysInput.value;

    var tripBudgetInput = document.getElementById("tripBudget");
    var tripBudget = tripBudgetInput.value;
    var tripExchangeMsg = document.getElementById("tripExchangeMsg");
    var moneyLocal = tripBudget * 1500;

    var dailyExchange = moneyLocal / days;
    var dailyExchangeMsg = document.getElementById("dailyExchangeMsg");

    tripExchangeMsg.innerHTML = "You have " + moneyLocal + " Lebanese Lira";
    dailyExchangeMsg.innerHTML = "That means you can spend " + dailyExchange + " Lebanese Lira per day";

    var exchange10Msg = document.getElementById("exchange10Msg");
    var exchange50Msg = document.getElementById("exchange50Msg");

    var usd10 = 10 * 1500;
    var usd500 = 500 * 1500;
    
    exchange10Msg.innerHTML = " You will need " + usd10 + " Lebanese Lira to by an item that costs 10$";
    exchange500Msg.innerHTML = " You will need " + usd500 + " Lebanese Lira to by an item that costs 500$";
}


// Changing bacground Image
var images = ["/Users/user/vacationPlanner/backgrounds/baalbeck.jpg" , "/Users/user/vacationPlanner/backgrounds/Harrisa.jpg" , "/Users/user/vacationPlanner/backgrounds/rawche.jpg" , "/Users/user/vacationPlanner/backgrounds/st paul.jpg"];
var currentImage = 0;
setInterval (changeImage, 3000)

function changeImage(){
    currentImage++;
    if(currentImage > images.length - 1){
        currentImage = 0;
    }
    document.body.style.backgroundImage = "url(" + images[currentImage] + ")";
}