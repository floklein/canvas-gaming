import "./reset.css";
import { Game } from "./Game.ts";
import { Object } from "./Object.ts";

const canvas = document.createElement("canvas");

function onResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", onResize);

onResize();

document.querySelector<HTMLDivElement>("#app")!.appendChild(canvas);

const ctx = canvas.getContext("2d");

const game = new Game(ctx);
game.start();

setTimeout(() => {
  game.addDrawable(new Object(ctx, 10, 10, 100, 100));
}, 1000);
