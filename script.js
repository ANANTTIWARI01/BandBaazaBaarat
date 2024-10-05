let Child2 = document.getElementById("child2")
// let allimage = document.querySelectorAll("#child2 img")
var audios = document.querySelectorAll("audio")

/////////////////////////////////

var audio1 = document.getElementById("Crashaudio")
var audio2 = document.getElementById("Kickaudio")
var audio3 = document.getElementById("Snareaudio")
var audio4 = document.getElementById("Tomaudio")

////////////////////////////////


Child2.addEventListener('click',function(e){
    if(e.target.nodeName==="IMG"){
        if(e.target.id==="Crash")
   audio1.play()
    
   else if(e.target.id==="Kick"){
        audio2.play()
         }
        else if(e.target.id==="Snare"){
            audio3.play()
             }
          else if(e.target.id==="Tom"){
                audio4.play()
                 }
                 
                }
         
})






child2.addEventListener("keyup", function (event) {
    if (event.key === 'w') {
        audio1.play(); // Play crash audio
        console.log("Crash audio is playing!");
    } else if (event.key === 'a') {
        audio2.play(); // Play kick audio
        console.log("Kick audio is playing!");
    } else if (event.key === 's') {
        audio3.play(); // Play snare audio
        console.log("Snare audio is playing!");
    } else if (event.key === 'd') {
        audio4.play(); // Play tom audio
        console.log("Tom audio is playing!");
    }


});




child2.tabIndex = 0; 
child2.focus(); 