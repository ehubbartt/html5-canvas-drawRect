/**
 * Functions and objects containing information regarding the mouse position relative to the canvas
 */

/**
 * object containing the x and y coordinates of the mouse position relative to the canvas
 */
export const mousePosition = {
  x: 0,
  y: 0,
};

/**
 * setter function for the mouse position relative to the canvas
 * @param {object} e event object
 * @param {DOMElement} canvas canvas element
 */
export const setMousePosition = (e, canvas) => {
  let rect = canvas.getBoundingClientRect();
  let mouseX = e.clientX - rect.left;
  let mouseY = e.clientY - rect.top;
  mousePosition.x = (mouseX * canvas.width) / canvas.clientWidth;
  mousePosition.y = (mouseY * canvas.height) / canvas.clientHeight;
};
