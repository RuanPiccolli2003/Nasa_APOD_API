const api_key = "AIGiccrbz747T7HZOXjDUg4fWG0rGyyXVclVPfwW"
const Url = "https://api.nasa.gov/planetary/apod?"


function Midia(){
    
    var imagemDiv = document.getElementById('text')


    var input = document.querySelector('input')
    var data = input.value
   

    
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", Url + "&date=" + data + "&api_key=" + api_key , false);
    xhttp.send();
    console.log(xhttp.responseText);
    if(xhttp.status === 200){
   
    var a = JSON.parse(xhttp.responseText)
    var imageUrl = a.url

        var image = document.createElement('embed')
    
   
        image.style.width = "400px"
        image.style.height = "400px"
        image.style.paddingTop = "50px"
        image.style.paddingBottom ="20px"
    
    image.src = imageUrl

   
    document.getElementById('text').innerHTML = a.title
    
    document.getElementById('ex').innerHTML = a.explanation
    
    console.log(a.media_type)
   

    imagemDiv.append(image)
   
    
    }
    if(xhttp.status === 400){
        var b = document.getElementById('ex')
        b.innerHTML = " "

        var dat = document.getElementById('text')
       
        dat.innerText = "Data invalida"
    
       
        
    }

    

    
}


function Clear(){

    
    var limpa_tex = document.getElementById('text')
    limpa_tex.innerHTML = " "

    var limpa_ex = document.getElementById('ex')
    limpa_ex.innerHTML = " "
    
   
    
    
}