const containerMobile = document.querySelector(".container-mobile")



function clicou(){
    const navbar = document.getElementById('navbar')
    if(containerMobile.style.display === 'none'){
        navbar.classList.remove('open')  
    }
    navbar.classList.toggle('open')    
}