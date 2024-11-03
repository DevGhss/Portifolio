var div = document.getElementById('titulojs');
var textos = ['Dev ghsso_o', 'Guilherme Henrique',];

function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 500); // só para esperar um bocadinho
        }
        var next = char.pop();
        div.innerHTML += next;
    }, 100);
}

function limpar(done) {
    var char = div.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 100);
}

function rodape(conteudos, el) {
    var atual = -1;
    function prox(cb){
        if (atual < conteudos.length - 1) atual++;
        else atual = 0;
        var str = conteudos[atual];
        escrever(str, function(){
            limpar(prox);
        });
    }
    prox(prox);
}
rodape(textos);




document.addEventListener('DOMContentLoaded', () => {
   
  const toggleSwitch = document.getElementById('theme-toggle');
  
    toggleSwitch.addEventListener('change', () => {
      document.body.classList.toggle('light-theme', toggleSwitch.checked);
    });
  
    // Se precisar manter o estado do tema entre as sessões, você pode usar o localStorage
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
  
    if (currentTheme) {
      document.body.classList.add(currentTheme);
      if (currentTheme === 'light-theme') {
        toggleSwitch.checked = true;
      }
    }
  
    toggleSwitch.addEventListener('change', () => {
      if (toggleSwitch.checked) {
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    
      } else {
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark-theme');
      }
    });
    const svgIcons = document.querySelectorAll("#icon");

    // Define a cor do SVG baseada na presença da classe 'light-mode'
    svgIcons.forEach((icon) => {
      if (document.body.classList.contains("light-mode")) {
        icon.style.color = "#333"; // Cor para o modo claro
      } else {
        icon.style.color = "#fff"; // Cor para o modo escuro
      }
    });
  });



  // Variáveis para o carrossel
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Mostra o primeiro slide ao carregar a página
showSlide(currentIndex);




function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

// Fechar o menu ao clicar fora dele
document.addEventListener('click', function (e) {
  const menu = document.querySelector('.menu');
  const button = document.querySelector('.menu-button');

  if (!menu.contains(e.target) && e.target !== button) {
    menu.classList.remove('active');
  }
});

// digitando sozinho não aguento mais:) 

