
document.getElementById("one").addEventListener("click", dispNum(1));
document.getElementById("two").addEventListener("click", dispNum(2));
document.getElementById("three").addEventListener("click", dispNum(3));
document.getElementById("four").addEventListener("click", dispNum(4));
document.getElementById("five").addEventListener("click", dispNum(5));
document.getElementById("six").addEventListener("click", dispNum(6));
document.getElementById("seven").addEventListener("click", dispNum(7));
document.getElementById("eight").addEventListener("click", dispNum(8));
document.getElementById("nine").addEventListener("click", dispNum(9));
document.getElementById("zero").addEventListener("click", dispNum(0));

var everyThing = "";

document.addEventListener("keydown", function(event){
    if(event.key == "="){
        dispLot();
    } else if(event.key == "-"){
        everyThing = "";
    }
     else{
    //document.getElementById("output").innerHTML = "<h1>" + event.key + "</h1>";
    everyThing = everyThing + event.key;
    dispLot();
    }
});


function dispNum(num){
    document.getElementById("output").innerHTML = "<h1>" + num + "</h1>";
}

function dispLot(){
    document.getElementById("output").innerHTML = "<h1>" + everyThing + "</h1>";
}