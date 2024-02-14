export function createEmojiFall(emoji) {
  const element = document.createElement('div');
  element.classList.add('emojiFall');
  element.style.left = Math.random() * 100 + 'vw';
  element.style.animationDuration = Math.random() * 2 + 3 + 's';

  element.innerText = emoji;

  document.body.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 5000);
}
