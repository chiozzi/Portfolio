// 🌙 Modo Escuro
const toggle = document.getElementById('toggle-dark-mode');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// 💬 Efeito Máquina de Escrever
const texto = [
  "Estudante de Análise e Desenvolvimento de Sistemas",
  "Apaixonada por programação 💻",
  "Sempre em busca de evolução 🚀"
];

let i = 0;
let j = 0;
let fraseAtual = "";
let escrevendo = true;

function typeWriter() {
  const elemento = document.getElementById("typewriter-text");

  if (!elemento) return; // segurança caso o elemento não exista ainda

  if (i < texto.length) {
    if (escrevendo) {
      if (j < texto[i].length) {
        fraseAtual += texto[i].charAt(j);
        elemento.innerHTML = fraseAtual + "<span class='cursor'>|</span>";
        j++;
        setTimeout(typeWriter, 60);
      } else {
        escrevendo = false;
        setTimeout(typeWriter, 1500);
      }
    } else {
      if (j > 0) {
        fraseAtual = fraseAtual.slice(0, -1);
        elemento.innerHTML = fraseAtual + "<span class='cursor'>|</span>";
        j--;
        setTimeout(typeWriter, 30);
      } else {
        escrevendo = true;
        i = (i + 1) % texto.length;
        setTimeout(typeWriter, 500);
      }
    }
  }
}

// 🚀 Executa ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});
