const btn = document.getElementById('mob-menu-btn');

btn.addEventListener('click', () => {
  btn.classList.toggle('opened');
  btn.classList.toggle('not-opened');
});
