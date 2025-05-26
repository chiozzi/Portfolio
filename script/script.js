document.addEventListener("DOMContentLoaded", () => {
  iniciarModoEscuro();
  iniciarTypeWriter();
  iniciarMenuHamburguer();
  configurarDetalhesProjetos();
});


// 🌙 MODO ESCURO com localStorage
function iniciarModoEscuro() {
  const toggleDesktop = document.getElementById('toggle-dark-mode');
  const toggleMobile = document.getElementById('toggle-dark-mode-mobile');

  const elementosAfetados = [
    document.body,
    document.querySelector('nav'),
    document.querySelector('footer'),
    ...document.querySelectorAll('.intro, .sobre, .habilidades-aprendendo, .projetos, .projeto-card, .contato, .servicos, .formulario')
  ];

  const modoSalvo = localStorage.getItem('darkMode') === 'true';

  // Aplica o modo salvo
  if (modoSalvo) {
    elementosAfetados.forEach(el => el?.classList.add('dark-mode'));
    if (toggleDesktop) toggleDesktop.checked = true;
    if (toggleMobile) toggleMobile.checked = true;
  }

  // Função de alternância
  function alternarModoEscuro(ativado) {
    elementosAfetados.forEach(el => el?.classList.toggle('dark-mode', ativado));
    if (toggleDesktop) toggleDesktop.checked = ativado;
    if (toggleMobile) toggleMobile.checked = ativado;
    localStorage.setItem('darkMode', ativado);
  }

  // Eventos
  toggleDesktop?.addEventListener('change', () => {
    alternarModoEscuro(toggleDesktop.checked);
  });

  toggleMobile?.addEventListener('change', () => {
    alternarModoEscuro(toggleMobile.checked);
  });
}



// 💬 EFEITO MÁQUINA DE ESCREVER
function iniciarTypeWriter() {
  const frases = [
    "Estudante de Análise e Desenvolvimento de Sistemas",
    "Apaixonada por programação 💻",
    "Sempre em busca de evolução 🚀"
  ];

  const elemento = document.getElementById("typewriter-text");
  if (!elemento) return;

  let fraseAtual = "";
  let i = 0, j = 0;
  let escrevendo = true;

  function escrever() {
    if (i < frases.length) {
      if (escrevendo) {
        if (j < frases[i].length) {
          fraseAtual += frases[i].charAt(j);
          elemento.textContent = fraseAtual;
          j++;
          setTimeout(escrever, 60);
        } else {
          escrevendo = false;
          setTimeout(escrever, 1500);
        }
      } else {
        if (j > 0) {
          fraseAtual = fraseAtual.slice(0, -1);
          elemento.textContent = fraseAtual;
          j--;
          setTimeout(escrever, 30);
        } else {
          escrevendo = true;
          i = (i + 1) % frases.length;
          setTimeout(escrever, 500);
        }
      }
    }
  }

  escrever();
}


// 🍔 MENU HAMBÚRGUER
function iniciarMenuHamburguer() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}


// 📦 DETALHES DOS PROJETOS (abrir e fechar)
function configurarDetalhesProjetos() {
  document.querySelectorAll('.btn-detalhes').forEach(botao => {
    botao.addEventListener('click', () => {
      const card = botao.closest('.projeto-card');
      card.classList.add('ativo');
    });
  });

  document.querySelectorAll('.btn-fechar-detalhes').forEach(botao => {
    botao.addEventListener('click', () => {
      const card = botao.closest('.projeto-card');
      card.classList.remove('ativo');
    });
  });
}
