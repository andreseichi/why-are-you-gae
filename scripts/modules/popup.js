export default function popUp() {
  setTimeout(() => {
    const popup = document.querySelector('.popup-container');
    const closeBtn = document.querySelector('.close');
    popup.classList.add('active');

    closeBtn.addEventListener('click', () => {
      popup.remove();
    });

    setTimeout(() => {
      popup.remove();
    }, 4000);
  }, 1500);
}
