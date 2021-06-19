// setTimeout(() => {
//   const audioThank = new Audio('../audios/thank_you.mp3');
//   audioThank.play();
// }, 300);

const html = document.documentElement;
const button = document.querySelector('button');
const initialDiv = document.querySelector('.initial');
const secondDiv = document.querySelector('.second');
button.addEventListener('click', () => {
  const audio = new Audio('../audios/how_describe_you.mp3');
  audio.play();

  initialDiv.classList.toggle('hide');
  secondDiv.classList.toggle('hide');
});
