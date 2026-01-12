const hamburger = document.querySelector (".hamburger")
const nav = document.querySelector ("nav")
const navItems = document.querySelectorAll (".nav-item")
const navTitle = document.querySelector (".nav-title")
const viewMoreBtn = document.querySelector (".view-more-btn")
const galleryHidden = document.querySelector (".con-hidden")

hamburger.addEventListener ("click", () => {
    nav.classList.toggle ("open")
    hamburger.classList.toggle ("open")
    navTitle.classList.toggle ("delete")
})

navItems.forEach(link => {
    link.addEventListener ("click", () => {
        nav.classList.toggle ("open")
    })
});


viewMoreBtn.addEventListener ("click", () => {
    galleryHidden.classList.toggle ("open")
})

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  faders.forEach(fader => {
    const top = fader.getBoundingClientRect().top;

    if (top < triggerBottom) {
      fader.classList.add('show');
    } else {
      fader.classList.remove('show'); 
    }
  });
};

window.addEventListener('scroll', appearOnScroll);
appearOnScroll();