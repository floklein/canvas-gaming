import { Drawable } from "./Drawable.ts";

export class Background extends Drawable {
  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx);
  }

  draw() {
    this.ctx.fillStyle = "lightblue";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
}
