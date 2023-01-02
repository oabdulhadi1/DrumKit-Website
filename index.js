// document.querySelector("button").addEventListener("click", function() 
// {
    
// });



document.addEventListener('keydown', (event) => {

    // console.log(this.event);
    //alert(this.event.key);
    eventListener(this.event.key);
    // playAnimation(this.event.key);
    console.log(this.event.key);
    playAnimation(this.event.key);
});


function eventListener(keyCode)
{
    var buttonInnerHTML = this.innerHTML;
   // console(this.keyCode);

    switch (keyCode) {
        case "w":
            playSound("crash");
            break;

        case "a":
            playSound("kick-bass");
            break;
    
        case "s":
            playSound("snare");  
            break;

        case "d":
            playSound("tom-1");
            break;

        case "d":
            playSound("tom-2");
            break;

        case "j":
            playSound("tom-3");
            break;

        case "k":
            playSound("tom-4");
            break;

        case "l":
            playSound("tom-4");
            break;

    default:
        break;
   } 
}


function playSound(soundName)
{
    var soundToPlay = "sounds/" + soundName + ".mp3";
    var audio = new Audio(soundToPlay);
    audio.play();
    


}

function playAnimation(curentKey)
{
   // console.log(currentKey);
     var activeButton =    document.querySelector("." + curentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
