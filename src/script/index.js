import { createEmojiFall } from './createEmojiFall.js';
import { moveElement } from './moveElement.js';
import { showSuccess } from './showSuccess.js';

function main() {
  //Activate emoji fall
  setInterval(() => createEmojiFall('💖'), 300);

  const acceptElement = document.getElementById('accept');
  const sneakyElement = document.getElementById('sneaky-button');

  acceptElement.addEventListener('click', () => {
    setInterval(() => createEmojiFall('🔥'), 200);
    showSuccess('valentine-form', '🔥Yeah!!!');
  });

  sneakyElement.addEventListener('click', () => {
    moveElement('sneaky-button');
  });
}
main();
