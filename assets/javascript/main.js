//STRICTLY JAVASCRIPT

//USE NODE ON TERMINAL TO RUN SAMPLES
//FOR CODE
"use strict"


//------------------------------
$("#Stephen").on("click", function () {
    console.log('Steph Curry');
    var curry = {
        profilePic: "<img id=gsw src='assets/images/curry.jpg'>", 
        position: "Guard",
        name: "Stephen Curry",
        pointsPerGame: "23.1",
        assistsPerGame: "6.8",
        stealsPerGame: "1.8"
 
    }
    nbaPlayer(curry); 
})

//------------------------------
$("#James").on("click", function (){
    console.log('LeBron James'); 
    var lebron = {
        profilePic: "<img id=lal src='assets/images/lebron.jpg'>", 
        name: "LeBron James",
        position: "Forward", 
        pointsPerGame: "27.2",
        assistsPerGame: "7.2",
        stealsPerGame: "1.6"

    }
    nbaPlayer(lebron); 
}) 

//-----------------------------
$("#Kevin").on("click", function (){
    console.log('Kevin Durant');
    var kevin = {
        profilePic: "<img id=kd src='assets/images/durant.png'>", 
        name: "Kevin Durant",
        position: "Forward", 
        pointsPerGame: "27.1",
        assistsPerGame: "3.9",
        stealsPerGame: "1.2"
    }
    nbaPlayer(kevin); 
})

//-----------------------------
$("#Anthony").on("click", function (){
    console.log('Anthony Davis'); 
    var anthony = {
        profilePic: "<img id='ad' src='assets/images/davis.jpg'>", 
        name: "Anthony Davis",
        position: "Forward", 
        pointsPerGame: "23.4",
        assistsPerGame: "1.9",
        blocksPerGame: "2.4"
    }
    nbaPlayer(anthony); 
})

//------------------------------
$("#Kawhi").on("click", function () {
    console.log('Kawhi Leonard');
    var kawhi = {
        profilePic: "<img id='kawhi' src='assets/images/kawhi.jpg'>", 
        name: "Kawhi Leonard",
        position: "Forward",
        pointsPerGame: "16.3",
        assistsPerGame: "2.3",
        stealsPerGame: "1.8" 

        
    } 
    nbaPlayer(kawhi);
})

//------------------------------
$("#Beard").on("click", function () {
    console.log('James Harden'); 
    var harden = {
        profilePic: "", 
        name: "James Harden",
        position: "Guard", 
        pointsPerGame: "23.0",
        assistsPerGame: "6.1",
        stealsPerGame: "1.5"
    }
    nbaPlayer(harden);
})

//------------------------------
$("#Russell").on("click", function () {
    console.log('Russell Westbrook');
    var westbrook = {
        profilePic: "<img id='westbrook' src='assets/images/westbrook.jpg'>", 
        name: "Russell Westbrook",
        position: "Guard",
        pointsPerGame: "23",
        assistsPerGame: "8.2",
        stealsPerGame: "1.7"
    }
    nbaPlayer(westbrook);
})

$("#Greek").on("click", function () {
    console.log('Giannis Antetokoumpo'); 
    var giannis = {
        profilePic: "", 
        name: "Giannis Antetokoumpo",
        position: "Forward",
        pointsPerGame: "17.2",
        assistsPerGame: "3.8",
        stealsPerGame: "1.2"
    
    }
    nbaPlayer(giannis);
})

$("#Chris").on("click", function () {
    console.log('Chris Paul'); 
    var paul = {
        profilePic: "", 
        name: "Chris Paul",
        position: "Guard",
        pointsPerGame: "18.7",
        assistsPerGame: "9.8",
        stealsPerGame: "2.3"
    }
    nbaPlayer(paul);
})

$("#Joel").on("click", function () {
    console.log('Joel Embiid'); 
    var embiid = {
        profilePic: "", 
        name: "Joel Embiid",
        position: "Center",
        pointsPerGame: "22",
        assistsPerGame: "2.8",
        blocksPerGame: "2.0"
    }
    nbaPlayer(embiid);
    
})

$("#Dwyane").on("click", function () {
    console.log("Dwyane Wade"); 
    var wade = {
        profilePic: "<img id=wade src='assets/images/wade.jpg'>",
        name: "Dwyane Wade",
        position: "Guard",
        pointsPerGame: "22.5",
        assistsPerGame: "5.5",
        stealsPerGame: "1.6"
    }
    nbaPlayer(wade); 
})

function nbaPlayer (basketball){ 
const tag = $("<ul>"), 
profilePic = $("<li>").html (basketball.profilePic),
name = $("<li>").html('Name: '+ basketball.name), 
position = $("<li>").html('NBA Position: '+ basketball.position),
pointsPerGame = $("<li>").html('Points Per Game: '+ basketball.pointsPerGame),
assistsPerGame = $("<li>").html('Assists Per Game: '+ basketball.assistsPerGame);


if (basketball.stealsPerGame != null){
   var stealsPerGame = $("<li>").html('Steals Per Game: '+ basketball.stealsPerGame);
}
if (basketball.blocksPerGame != null){
   var blocksPerGame = $("<li>").html('Blocks Per Game: '+ basketball.blocksPerGame); 
}
tag.append(profilePic).append(name).append(position).append(pointsPerGame).append(assistsPerGame).append(stealsPerGame).append(blocksPerGame);
$("#stats").html("<h4>Player Info<h4>").append(tag); 


}
