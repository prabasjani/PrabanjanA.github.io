//website access token in github
//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

//Activate menu button
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

// lets remove menubar on scroll
window.onscroll = () => {
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}

// scroll reveal
ScrollReveal({
    reset:true,
    distance:'200px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-bio h1 , .about-resume, h5', { origin:'left'});
ScrollReveal().reveal('.home-bio p, .heading', { origin:'right'});
ScrollReveal().reveal('.home-bio, .contact-details', { origin:'top'});
ScrollReveal().reveal('.profile-picture, .about-items, .skills-items, .form', { origin:'bottom'});

// Typing Animation
const animText = new Typed ('.animated-text',{
    strings: ['FrontEnd Developer', 'YouTuber', 'Moto-Rider'],
    backSpeed: 100,
    typeSpeed: 100,
    backDelay: 600,
    loop: true
});
