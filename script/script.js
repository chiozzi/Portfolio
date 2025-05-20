document.addEventListener("DOMContentLoaded", () => {
  // 🌙 Modo Escuro
  const toggle = document.getElementById('toggle-dark-mode');
  if (toggle) {
    toggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

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

  typeWriter();

  // 🍔 Menu Hamburguer (mobile)
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');

  if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
      navUl.classList.toggle('show');
    });
  }
});


  // 🍔 Ver detalhes (mobile)
document.querySelectorAll('.btn-detalhes').forEach(btn => {
  btn.addEventListener('click', () => {
    const detalhes = btn.previousElementSibling; // pega o elemento antes do botão (a div detalhes)
    if (detalhes.style.display === 'block') {
      detalhes.style.display = 'none';
      btn.textContent = 'Ver detalhes';
    } else {
      detalhes.style.display = 'block';
      btn.textContent = 'Fechar detalhes';
    }
  });
});
