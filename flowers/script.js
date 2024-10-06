onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
      const text = document.querySelector('.text');
      text.classList.add('visible');
  }, 500);
});