
function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    let element = document.getElementById("mainStyleSheet")
    
    
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    let curr = element.getAttribute("href")
   
    // 1 (c) Determine new stylesheet file name
    let newSheet;
    if(curr == "style.css"){
        newSheet = "style2.css"
    }
    else{
        newSheet = "style.css"
    }

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)

    element.setAttribute('href', newSheet)


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("current_style", newSheet)
  
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    let current_style = localStorage.getItem("current_style");
    
    // 2 (b) get html style element by ID

    let element = document.getElementById('mainStyleSheet');
    
    // 2 (c) replace href attribute of html element.
    element.setAttribute('href', current_style);
}


