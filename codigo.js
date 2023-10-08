const api_key = "AIGiccrbz747T7HZOXjDUg4fWG0rGyyXVclVPfwW"
const url = "https://api.nasa.gov/planetary/apod?"


function Midia(){
    
    var imagemDiv = document.getElementById('text')


    var input = document.querySelector('input')
    var data = input.value

    
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url + "&date=" + data + "&api_key=" + api_key , false);
    xhttp.send();
    if(xhttp.status === 200){
    console.log(xhttp.responseText);
    var a = JSON.parse(xhttp.responseText)
    var imageUrl = a.hdurl
   
    var image = document.createElement('img')
    

    image.style.height = "50vh"
    image.style.paddingTop = "5px"
    image.style.paddingBottom ="20px"
    image.src = imageUrl

    document.getElementById('text').innerHTML = a.title
    

    imagemDiv.append(image)
   
    }
    if(xhttp.status === 400){
        var a= document.getElementById('')

    }

}


function Clear(){

    
    var a = document.getElementById('text')
    a.innerHTML = " "

    var b = document.getElementById('erro')
    b.innerHTML = " "
    
   
    
    
}