document.getElementById('boton').addEventListener('click', saludar)

function saludar(){
    const holaSpan = document.getElementById('hola').textContent
    if(document.getElementById('hola').textContent.includes('hola')){
        document.getElementById('hola').textContent = "..."    
    }else{
        document.getElementById('hola').textContent = "hola"   
        confetti(); 
    }
                
}



