//function to change the content of the <p> element with id=helpElement when clicked on any of the textfields of input tag
function helpNote(element){
    var helpId = element.id; //Storing the value of id of element calling helpNote() function
    
    //This function is a closure which changes the content of helpELement tag's innerHTML if id of the clicked element matches a given string
 function changeText(){
         
        if( helpId === "username")
        {
            document.getElementById("helpElement").innerHTML = "Please input the username";
        }
        else if( helpId === "age")
        {
            document.getElementById("helpElement").innerHTML = "Please input the age";
        } 
        else if( helpId === "city")
        {
            document.getElementById("helpElement").innerHTML = "Please input the city";
        }         
    }
    changeText();    
}


 