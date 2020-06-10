// Menu for android 

const menuActiviator = document.querySelector('.activator');
const navigation = document.querySelector('.navigation');
const menuIcon = document.querySelector('.menu-icon')
menuActiviator.addEventListener('click', ()=>{
    navigation.classList.toggle('active')
    menuIcon.textContent = menuIcon.textContent == 'close' ? 'menu' : 'close'
})

// Active state code. DO NOT EDIT!
let borderColors = ['#00A799', '#f8872b', '#2bb7f8', '#f0603d']
const navLinks = document.querySelectorAll('.navigation .links-list .links');
const currentPageName = document.querySelector('.current-page-name')
navLinks.forEach(( navLink, i) => {
    let currentWindowLocation = window.location.href.toString().toLowerCase();
    let navigationName = navLink.id
    if(window.innerWidth < 768){
        navLink.style.borderLeft = `7px solid ${borderColors[i]}`
    }
    
    if(currentWindowLocation.includes(navigationName)){
        navLink.classList.add('active')
        navigationName == 'home' ? '' : currentPageName.textContent = navigationName.replace(/-/, ' ')
    }
})

// Scrolling effect 
const header =  document.querySelector('#header')
window.addEventListener('scroll', ()=>{
    window.scrollY > 100 ? header.style.backgroundColor = "#005e57" : header.style.backgroundColor = "transparent"
})



// Back Button
const backArrow = document.querySelector('.arrow-back') || ''
    if(backArrow){
        backArrow.addEventListener('click', ()=>{
        window.history.back()
    })
}

