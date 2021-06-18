// setTimeout(() => {
//   const audioThank = new Audio('../audios/thank_you.mp3');
//   audioThank.play();
// }, 300);

const button = document.querySelector('button');
button.addEventListener('click', () => {
  const audio = new Audio('../audios/how_describe_you.mp3');
  audio.play();
});
