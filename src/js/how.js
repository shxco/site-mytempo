var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = "550px";
    }
  });
}

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');
const body = document.body;

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('toggle');
    navMenu.classList.toggle('nav-active');
  });
});

function abrirImagem(src) {
  document.getElementById('imagem-grande').src = src;
  document.getElementById('modal').style.display = 'block';
  document.body.classList.add('modal-open'); // Bloqueia o scroll
}

function fecharImagem() {
  document.getElementById('modal').style.display = 'none';
  document.body.classList.remove('modal-open'); // Libera o scroll
}