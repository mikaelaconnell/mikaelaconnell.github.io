// Show back to top button
window.onscroll = function() {
  const btn = document.getElementById("myBtn");
  if (btn && (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)) {
    btn.style.display = "block";
  } else if (btn) {
    btn.style.display = "none";
  }
};

// Scroll to top
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Vanta Birds Background
VANTA.BIRDS({
  el: "#lead",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x0b0b0b,
  color1: 0xffffff,
  color2: 0xffc0cb,
  birdSize: 1.5,
  quantity: 3
});
