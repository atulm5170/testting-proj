
let h1 = document.querySelector('h1');
let colors = ["blue", "pink", ""];
let idx = 0;

h1.addEventListener('click', () => {
      h1.style.backgroundColor = colors[idx];
      idx = (idx + 1) % colors.length;
});
