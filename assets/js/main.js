// Show button on scroll
window.onscroll = function() {
  const btn = document.getElementById("myBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
