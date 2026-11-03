//Gets the Id of the button and and when it is clicked it runs the function
document.getElementById('search-btn').addEventListener("click",function()
{   

    //create a object that can send HTTP requests and stores it in the variable 
    const httpRequest = new XMLHttpRequest();

    //runs when the server response loads fully
    httpRequest.onload = function(){
        //checks if the request was received
        if(this.status == 200){
            //shows a pop up with the list sent back by the server
            alert(this.responseText);
        }
        else{
            alert("Request failed.")
        }

    };

    //opens the request for the data from superheroes.php and sends it
    httpRequest.open("GET", "superheroes.php", true );
    httpRequest.send();
});