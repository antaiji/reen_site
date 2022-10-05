function classToggle() {
    const navs = document.querySelectorAll('.navbar__menu-list')
    
    navs.forEach(nav => nav.classList.toggle('navbar__menu-list-show'));
  }
  
  document.querySelector('.navbar__burger').addEventListener('click', classToggle);