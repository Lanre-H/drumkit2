for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    playAudio(this.innerHTML);
});
document.addEventListener("keypress", function(event){
    playAudio(event.key);
});

function playAudio(key) { 
    
switch (key) {
    case ("w"): 
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play()
        break;

     case ("a"): 
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play()
        break;

    case ("s"): 
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play()
        break;

    case ("d"): 
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play()
        break;

    case ("j"): 
        var snare = new Audio("sounds/snare.mp3");
        snare.play()
        break;

    case ("k"): 
        var crash = new Audio("sounds/crash.mp3");
        crash.play()
        break;

    case ("l"): 
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play()
        break;

    default: console.log(htmlButton);
        break;

    };
}









}





// function HouseKeeper (name, age, sex, yoe) {
//     this.name = "tolu";
//     this.age =  17;
//     this.sex = "male";
//     this.yoe= 3;
//     this.clean = function clean() {
//         alert("May I clean you room");
//         alert("Cleaning in progress...");
//     };
// }

// var houseKeeper1 = new HouseKeeper ("tope", 17, "female", 4);
// var housekeeper2 = new HouseKeeper ("taiwo", 77, "male", 34);