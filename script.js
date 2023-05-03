const modalBtn = document.querySelector('.header__modalBtn');
const modal = document.querySelector('.header__dialog');
const link = document.querySelectorAll('a');

console.log(link);

modalBtn.addEventListener('click', () => {
  modal.showModal();
});

link.forEach((url) => {
  url.addEventListener('click', () => {
    modal.close();
  });
});
