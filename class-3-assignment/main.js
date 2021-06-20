const showMenu = (toggleId, navId) =>{
    let toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);
    if(toggle && nav){
        console.log("adding show to nav-menu");
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        })
    }
}
showMenu('nav-toggle','nav-menu')

// Active Link
const navLink = document.querySelectorAll('.nav_link');   
console.log(navLink);
function linkAction(){
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  let navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.home_title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home_img',{delay: 400}); 
sr.reveal('.home_social-icon',{ interval: 200}); 