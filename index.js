var audio = new Audio("sounds/tom-1.mp3");

function handleclick(){
  audio.play();
}
function buttonanimation(key)
{
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){  document.querySelector("."+key).classList.remove("pressed");},50);
}
function sound(check)
{


  switch(check){
    case "w":var audio1 = new Audio("sounds/crash.mp3");
    audio1.play();
    break;
    case "a":var audio1 = new Audio("sounds/kick-bass.mp3");
    audio1.play();
    break;
    case "s":var audio1 = new Audio("sounds/snare.mp3");
    audio1.play();
    break;
    case "d":var audio1 = new Audio("sounds/tom-1.mp3");
    audio1.play();
    break;
    case "j":var audio1 = new Audio("sounds/tom-2.mp3");
    audio1.play();
    break;
    case "k":var audio1 = new Audio("sounds/tom-3.mp3");
    audio1.play();
    break;
    case "l":var audio1 = new Audio("sounds/tom-4.mp3");
    audio1.play();
    break;

  }

}
for(var i=0;i<7;i++)
{

  document.querySelectorAll("button")[i].addEventListener("click",function(){
  sound(this.innerHTML);
  buttonanimation(this.innerHTML);
  });
}

document.addEventListener("keydown",function(event){

sound(event.key);
buttonanimation(event.key);

})
