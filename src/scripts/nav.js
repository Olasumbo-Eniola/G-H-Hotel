const menuActivator = document.querySelector('.activator'); //Selects the class div with textcontent 'Menu'
const navigation = document.querySelector('.navigation'); //nav class 
const menuIcon = document.querySelector('.menu-icon')
menuActivator.addEventListener('click', ()=>{
    navigation.classList.toggle('active')
    menuIcon.textContent = menuIcon.textContent == 'keyboard_arrow_right' ? 'keyboard_arrow_left' : 'keyboard_arrow_right'
})

const navLinks = document.querySelectorAll('.navigation .links-list .links');
navLinks.forEach( navLink => {
    let currentWindowLocation = window.location.href.toString().toLowerCase();
    let navigationName = navLink.id
    console.log(currentWindowLocation + '=>'+navigationName)
    //console.log(navigationName)
    if(currentWindowLocation.includes(navigationName)){
        navLink.classList.add('active')
    } else {
        console.log('Not found')
    }
})