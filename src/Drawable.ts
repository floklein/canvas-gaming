export abstract class Drawable {
  protected ctx: CanvasRenderingContext2D;

  protected constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.draw();
  }

  abstract draw(): void;
}
