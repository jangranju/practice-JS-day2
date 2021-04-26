// IIFE -> Immediately Invoked Function Expression

(function(){

    function start(){
    
    document.getElementById("intro").textContent = "Welcome to my Page...";
    
    document.getElementById("heading3").textContent = "This is my Javascript Assignment 1";


    let mainDiv  = document.getElementById("mainDiv");

    let pTag = document.createElement("p");
    pTag.style.color = "blue";
    pTag.textContent = "Creating an ordered list: ";

    mainDiv.append(pTag);


    let uTag = document.createElement("ol");
     uTag.style.listStyle = "lower-roman";
     uTag.setAttribute("start","1");

    let liTag1 = document.createElement("li");
    liTag1.textContent = "Document object Model";

    let liTag2 = document.createElement("li");
    liTag2.textContent = "Operators";

    let liTag3 = document.createElement("li");
    liTag3.textContent = "DataTypes";

    let liTag4 = document.createElement("li");
    liTag4.textContent = "Methods";
    
    uTag.append(liTag1);
    uTag.append(liTag2);
    uTag.append(liTag3);
    uTag.append(liTag4);

    mainDiv.append(uTag);

    }

    window.addEventListener("load", start);

})();

    