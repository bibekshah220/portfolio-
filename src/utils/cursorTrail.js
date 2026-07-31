// Cursor trail physics, ported from the portfolio-v2 source repo
// (src/utility/cursor-trail.ts) and translated to JS.
//
// ponytail: touch handlers from the original are intentionally dropped. The
// source bound `touchmove` and called preventDefault() inside the move
// handler, which kills page scrolling on touch devices. The trail is a
// pointer-only affordance, so the caller gates it on `(pointer: coarse)`.
export function cursorTrail({ canvas, color = "rgba(56, 189, 248, 0.22)" }) {
  const ctx = canvas.getContext("2d");

  const config = {
    friction: 0.5,
    trails: 20,
    size: 40,
    dampening: 0.2,
    tension: 0.98,
  };

  const pointer = { x: 0, y: 0 };
  let lines = [];
  let running = true;
  let frame = 0;

  class Node {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;
    }
  }

  class Line {
    constructor(spring) {
      this.spring = spring + 0.1 * Math.random() - 0.05;
      this.friction = config.friction + 0.01 * Math.random() - 0.005;
      this.nodes = [];
      for (let i = 0; i < config.size; i++) {
        const node = new Node();
        node.x = pointer.x;
        node.y = pointer.y;
        this.nodes.push(node);
      }
    }

    update() {
      let spring = this.spring;
      let node = this.nodes[0];
      node.vx += (pointer.x - node.x) * spring;
      node.vy += (pointer.y - node.y) * spring;
      for (let i = 0, len = this.nodes.length; i < len; i++) {
        node = this.nodes[i];
        if (i > 0) {
          const prev = this.nodes[i - 1];
          node.vx += (prev.x - node.x) * spring;
          node.vy += (prev.y - node.y) * spring;
          node.vx += prev.vx * config.dampening;
          node.vy += prev.vy * config.dampening;
        }
        node.vx *= this.friction;
        node.vy *= this.friction;
        node.x += node.vx;
        node.y += node.vy;
        spring *= config.tension;
      }
    }

    draw() {
      let x = this.nodes[0].x;
      let y = this.nodes[0].y;
      ctx.beginPath();
      ctx.moveTo(x, y);
      for (let i = 1, len = this.nodes.length - 2; i < len; i++) {
        const node = this.nodes[i];
        const next = this.nodes[i + 1];
        x = 0.5 * (node.x + next.x);
        y = 0.5 * (node.y + next.y);
        ctx.quadraticCurveTo(node.x, node.y, x, y);
      }
      const secondLast = this.nodes[this.nodes.length - 2];
      const last = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y);
      ctx.stroke();
      ctx.closePath();
    }
  }

  function render() {
    if (!running) return;
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    for (let i = 0; i < lines.length; i++) {
      lines[i].update();
      lines[i].draw();
    }
    frame = window.requestAnimationFrame(render);
  }

  function move(event) {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  }

  // The trail only starts costing anything once the pointer actually moves.
  function onFirstMove(event) {
    document.removeEventListener("mousemove", onFirstMove);
    document.addEventListener("mousemove", move);
    move(event);
    lines = [];
    for (let i = 0; i < config.trails; i++) {
      lines.push(new Line(0.45 + (i / config.trails) * 0.025));
    }
    render();
  }

  function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }

  function pause() {
    running = false;
    window.cancelAnimationFrame(frame);
  }

  function resume() {
    if (!running) {
      running = true;
      render();
    }
  }

  function start() {
    document.addEventListener("mousemove", onFirstMove);
    window.addEventListener("resize", resize);
    window.addEventListener("orientationchange", resize);
    window.addEventListener("focus", resume);
    window.addEventListener("blur", pause);
    resize();
  }

  function cleanUp() {
    window.cancelAnimationFrame(frame);
    running = false;
    document.removeEventListener("mousemove", onFirstMove);
    document.removeEventListener("mousemove", move);
    window.removeEventListener("resize", resize);
    window.removeEventListener("orientationchange", resize);
    window.removeEventListener("focus", resume);
    window.removeEventListener("blur", pause);
  }

  return { start, cleanUp };
}
