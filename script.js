let Child2 = document.getElementById("child2")
// let divs = document.querySelector("")
var audio1 = document.getElementById("Crashaudio")
var audio2 = document.getElementById("Kickaudio")
var audio3 = document.getElementById("Snareaudio")
var audio4 = document.getElementById("Tomaudio")



Child2.addEventListener('click',function(e){
    if(e.target.nodeName==="IMG"){
        if(e.target.id==="Crash")
   audio1.play()
    }
    if(e.target.id==="Kick"){
        audio2.play()
         }
         if(e.target.id==="Snare"){
            audio3.play()
             }
             if(e.target.id==="Tom"){
                audio4.play()
                 }
                 
             
         
})