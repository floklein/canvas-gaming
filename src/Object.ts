import { Drawable } from "./Drawable.ts";

export class Object extends Drawable {
  private x = 0;
  private y = 0;
  private width = 0;
  private height = 0;
  private movingUp = false;
  private movingDown = false;
  private movingLeft = false;
  private movingRight = false;

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
  ) {
    super(ctx);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.registerEvents();
  }

  private registerEvents() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowUp") {
        this.movingUp = true;
      } else if (event.key === "ArrowDown") {
        this.movingDown = true;
      } else if (event.key === "ArrowLeft") {
        this.movingLeft = true;
      } else if (event.key === "ArrowRight") {
        this.movingRight = true;
      }
    });
    window.addEventListener("keyup", (event) => {
      if (event.key === "ArrowUp") {
        this.movingUp = false;
      } else if (event.key === "ArrowDown") {
        this.movingDown = false;
      } else if (event.key === "ArrowLeft") {
        this.movingLeft = false;
      } else if (event.key === "ArrowRight") {
        this.movingRight = false;
      }
    });
  }

  move(xD: number, yD: number) {
    this.x = Math.min(
      Math.max(this.x + xD, 0),
      this.ctx.canvas.width - this.width,
    );
    this.y = Math.min(
      Math.max(this.y + yD, 0),
      this.ctx.canvas.height - this.height,
    );
  }

  resize(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  draw() {
    if (this.movingUp) {
      this.move(0, -1);
    } else {
      this.move(0, 5);
    }
    if (this.movingDown) {
      this.move(0, 1);
    }
    if (this.movingLeft) {
      this.move(-1, 0);
    }
    if (this.movingRight) {
      this.move(1, 0);
    }
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
