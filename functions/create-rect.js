/**
 * functions for creation of rectangles on the canvas
 */

import { mousePosition } from "./mouse-position.js";

const rectPixels = [];
function Selection(x, y, width, height, ctx) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.ctx = ctx;
}

/**
 * creates the coordinates for the rectangle that will be drawn
 * and when there are enough inputs from the user a rectangle will be created
 * @param {object} ctx context for the canvas
 * @param {object} param1 options for the rectangle
 */
export function positionSelection(ctx, { color, lineWidth }) {
  if (rectPixels.length >= 4) {
    rectPixels.length = 0;
  }
  rectPixels.push(mousePosition.x);
  rectPixels.push(mousePosition.y);
  if (rectPixels.length == 4) {
    const modifiedRect = typeRect();
    let curRect = new Selection(
      modifiedRect[0],
      modifiedRect[1],
      Math.abs(modifiedRect[2]),
      Math.abs(modifiedRect[3]),
      ctx
    );
    createSelection(curRect, color, lineWidth);
  }
}

/**
 * helper function for positionSelection
 * modifies the coordinates of click to coincide with the
 * way rectangles are drawn on html5 canvas
 * @returns modified rectangle array
 */
export const typeRect = () => {
  let mx = 0;
  let my = 0;
  let width = Math.abs(rectPixels[0] - rectPixels[2]);
  let height = Math.abs(rectPixels[1] - rectPixels[3]);

  const x1 = rectPixels[0];
  const y1 = rectPixels[1];
  const x2 = rectPixels[2];
  const y2 = rectPixels[3];

  if (x1 > x2 && y1 > y2) {
    mx = x2;
    my = y2;
  } else if (x1 < x2 && y1 > y2) {
    mx = x1;
    my = y2;
  } else if (x1 > x2 && y1 < y2) {
    mx = x2;
    my = y1;
  } /* x1 < x2 && y1 < y2 */ else {
    mx = x1;
    my = y1;
  }
  const modifiedRect = [mx, my, width, height];
  return modifiedRect;
};

/**
 * draws the rectangle onto the canvas
 * @param {object} curRect reference to the current rectangle
 * @param {string} color color for rectangle
 * @param {integer} lineWidth width of the stroke
 */
export function createSelection(curRect, color, lineWidth) {
  const ctx = curRect.ctx;

  ctx.beginPath();
  ctx.globalCompositeOperation = "source-over";
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.rect(curRect.x, curRect.y, curRect.width, curRect.height);
  ctx.closePath();
  ctx.stroke();
}
