// menu mobile
const btnMobile = document.querySelector('.btn-mobile');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.nav a');


function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const isActive = nav.classList.toggle('active');
  event.currentTarget.setAttribute('aria-expanded', isActive);

  if (isActive) {
    document.querySelector('html').style.overflowY = 'hidden';
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    closeMenu();
  }
}


function closeMenu() {
  nav.classList.remove('active');
  btnMobile.setAttribute('aria-expanded', 'false');
  btnMobile.setAttribute('aria-label', 'Abrir Menu');
  document.querySelector('html').style.overflowY = 'auto';
}


function handleClickOutside(event) {
  if (!nav.contains(event.target) && !btnMobile.contains(event.target)) {
    closeMenu();
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


links.forEach(link => link.addEventListener('click', closeMenu));


document.addEventListener('click', handleClickOutside);
document.addEventListener('touchstart', handleClickOutside);


// animations


const intersectCallback = (entries, observer) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);  
      
      if (entry.isIntersecting) {
        observer.unobserve(entry.target); 
      }
    });
  };

  const intersectOptions = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
  };
  
      
  const intersectObserver = new IntersectionObserver(intersectCallback, intersectOptions);
  
  const animatedElements = document.querySelectorAll(".animate");
  
  animatedElements.forEach((element) => {
    intersectObserver.observe(element);
  });



  // scroll to top  
  const btnToTop = document.querySelector('.to-top');

document.addEventListener('scroll', () => {
    if (window.scrollY > 200) {

      btnToTop.classList.add('show');

    } else if(window.scrollY == 0) { 
      
      btnToTop.classList.remove('show');
    }
  });

  btnToTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });


  
  