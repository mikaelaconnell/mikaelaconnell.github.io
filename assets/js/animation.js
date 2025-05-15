// assets/js/animation.js

const canvas = document.getElementById('bg-animation');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let triangles = [];

function Triangle() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.size = Math.random() * 10 + 5;
  this.speedX = (Math.random() - 0.5) * 0.5;
  this.speedY = (Math.random() - 0.5) * 0.5;
  this.angle = Math.random() * Math.PI * 2;
  this.rotationSpeed = (Math.random() - 0.5) * 0.02;

  this.draw = function () {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.beginPath();
    ctx.moveTo(0, 0 - this.size);
    ctx.lineTo(0 - this.size, this.size);
    ctx.lineTo(this.size, this.size);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.fill();
    ctx.restore();
  };

  this.update = function () {
    this.x += this.speedX;
    this.y += this.speedY;
    this.angle += this.rotationSpeed;

    if (this.x < -50 || this.x > canvas.width + 50 || this.y < -50 || this.y > canvas.height + 50) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
    }

    this.draw();
  };
}

function init() {
  triangles = [];
  for (let i = 0; i < 100; i++) {
    triangles.push(new Triangle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  triangles.forEach(t => t.update());
  requestAnimationFrame(animate);
}

init();
animate();
