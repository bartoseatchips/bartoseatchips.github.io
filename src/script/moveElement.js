export function moveElement(elementId) {
  const element = document.getElementById(elementId);

  element.style.transition = '0.8s';

  element.style.position = 'fixed';

  element.style.top = Math.random() * 90 + 'vh';
  element.style.left = Math.random() * 90 + 'vw';
}
