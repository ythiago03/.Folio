function clicou(){
    const navbar = document.getElementById('navbar')
    const checkbox = document.getElementById('checkbox-menu')
    const menuMobile = document.getElementById('container-mobile')

        
    
        if(checkbox.checked == true){
            navbar.style.display = 'block'
            console.log('true')
 
        }else{
            navbar.style.display = 'none'
            console.log('false')
        }
}