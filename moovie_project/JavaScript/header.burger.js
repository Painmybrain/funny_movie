document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('nav ul li a');
  menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.color = '#ffd700';
      item.style.textShadow = '0 0 10px #ffd700';
    });
    item.addEventListener('mouseout', () => {
      item.style.color = '';
      item.style.textShadow = '';
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burger-menu');
  const navLinks = document.getElementById('nav-links');
  const navItems = navLinks.querySelectorAll('a');

  // Открытие и закрытие бургер-меню
  burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Автоматическое закрытие меню при клике на раздел
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
});

  // Кнопка "Наверх": отображение/скрытие и прокрутка
  window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
