const toggleButton=document.getElementsByClassName('togle-button')[0]
const navLink=document.getElementsByClassName('nav-links')[0]
toggleButton.addEventListener( 'click',()=>{
    navLink.classList.toggle('active')
})