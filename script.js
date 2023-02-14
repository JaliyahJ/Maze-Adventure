/* Declare variables below to save the different sections (divs) of your story*/
//first buton options
let maze = document.querySelector(".option-one");
let leave = document.querySelector(".option-two");
//two different first option screen
let butterfly = document.querySelector(".option-one-screen");
let  trail= document.querySelector(".option-two-screen");
//second button option
let image1= document.querySelector(".clickimage");
let followtrail = document.querySelector(".rightclick");
//two different end option screens
let darkbasement = document.querySelector(".option-one-end");
let darkWoods = document.querySelector(".option-two-end");
//funtions
maze.onclick=function(){   
    butterfly.style.display="block";
};
leave.onclick=function(){
    trail.style.display="block";
};
image1.onclick=function(){
    darkbasement.style.display="block";
};
followtrail.onmouseover=function(){
    darkWoods.style.display="block";
};
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


