import { Drawable } from "./Drawable.ts";
import { Background } from "./Background.ts";

export class Game {
  private ctx: CanvasRenderingContext2D;
  private drawables: Drawable[] = [];

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.drawNextFrame = this.drawNextFrame.bind(this);
    this.addDrawable(new Background(ctx));
  }

  start() {
    requestAnimationFrame(this.drawNextFrame);
  }

  private drawNextFrame() {
    this.drawables.forEach((drawable) => drawable.draw());
    requestAnimationFrame(this.drawNextFrame);
  }

  addDrawable(drawable: Drawable) {
    this.drawables.push(drawable);
  }
}
