document.addEventListener("DOMContentLoaded", () => {
  iniciarModoEscuro();
  iniciarTypeWriter();
  iniciarMenuHamburguer();
  configurarDetalhes();
});

// 🌙 Modo Escuro com localStorage
function iniciarModoEscuro() {
  const toggle = document.getElementById('toggle-dark-mode');
  if (toggle) {
    // Verifica e aplica tema salvo
    const isDark = localStorage.getItem('darkMode') === 'true';
    toggle.checked = isDark;
    document.body.classList.toggle('dark-mode', isDark);

    toggle.addEventListener('change', () => {
      const ativo = toggle.checked;
      document.body.classList.toggle('dark-mode', ativo);
      localStorage.setItem('darkMode', ativo);
    });
  }
}

// 💬 Efeito Máquina de Escrever
function iniciarTypeWriter() {
  const texto = [
    "Estudante de Análise e Desenvolvimento de Sistemas",
    "Apaixonada por programação 💻",
    "Sempre em busca de evolução 🚀"
  ];

  let i = 0;
  let j = 0;
  let fraseAtual = "";
  let escrevendo = true;
  const elemento = document.getElementById("typewriter-text");

  if (!elemento) return;

  function typeWriter() {
    if (i < texto.length) {
      if (escrevendo) {
        if (j < texto[i].length) {
          fraseAtual += texto[i].charAt(j);
          elemento.textContent = fraseAtual;
          j++;
          setTimeout(typeWriter, 60);
        } else {
          escrevendo = false;
          setTimeout(typeWriter, 1500);
        }
      } else {
        if (j > 0) {
          fraseAtual = fraseAtual.slice(0, -1);
          elemento.textContent = fraseAtual;
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

  typeWriter();
}

// 🍔 Menu Hamburguer (mobile)
function iniciarMenuHamburguer() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');

  if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
      navUl.classList.toggle('show');
    });
  }
}

// 🔍 Ver detalhes (mobile)
function configurarDetalhes() {
  document.querySelectorAll('.btn-detalhes').forEach(btn => {
    btn.addEventListener('click', () => {
      const detalhes = btn.nextElementSibling;
      if (!detalhes) return;

      const visivel = detalhes.style.display === 'block';
      detalhes.style.display = visivel ? 'none' : 'block';
      btn.textContent = visivel ? 'Ver detalhes' : 'Fechar detalhes';
    });
  });
}
