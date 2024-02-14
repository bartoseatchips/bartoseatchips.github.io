export function showSuccess(elementId, text) {
  const element = document.getElementById(elementId);
  element.innerHTML = `<h1 class="title">${text}</h1>`;
}
